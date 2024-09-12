/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable no-unused-expressions */

import axios from "axios";
import { config } from "../config";


export function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
}

export function normalizedData(data, key = "section") {
    let allContetnt;

    data.forEach((item) => {
        const newObj = Object.entries(item).reduce((acc, cur) => {
            const [k, property] = cur;
            if (property === null) {
                return acc;
            }
            return {
                ...acc,
                [k]: property,
            };
        }, {});

        allContetnt = {
            ...allContetnt,
            [newObj[key]]: {
                ...newObj,
            },
        };
    });

    return allContetnt;
}

export const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
];

export const getMonth = (date) => months[date.getMonth()];

export const containsObject = (obj, list) => {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].slug === obj.slug) {
            return i;
        }
    }

    return -1;
};

export const shuffleArray = (array) => {
    const newArr = array.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
};

export const hasKey = (obj, key) =>
    !!Object.prototype.hasOwnProperty.call(obj, key);

export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
};

export const isValidXRPAddress = (address) => {
    // Check if the address is a string and 34 characters long
    if (typeof address !== "string" || address.length !== 34) {
        return false;
    }

    // Check if the address starts with the letter "r"
    if (address[0] !== "r") {
        return false;
    }

    // Check if the address contains only valid characters (alphanumeric and "-")
    return /^[a-zA-Z0-9-]+$/.test(address);


};

export const getShortAddress = (address) => {
    if (isEmpty(address)) return "";
    return (
        address.slice(0, 6) +
        "..." +
        address.slice(address.length - 5, address.length)
    );
};

export const getMidAddress = (address) => {
    if (isEmpty(address)) return "";
    return (
        address.slice(0, 10) +
        "..." +
        address.slice(address.length - 10, address.length)
    );
};

export const getLongAddress = (address) => {
    if (isEmpty(address)) return "";
    return (
        address.slice(0, 25) +
        "..." +
        address.slice(address.length - 25, address.length)
    );
};

export const numberWithCommas = (x, digit = 3) => {
    if (isEmpty(x) || isNaN(x)) return "0";
    return Number(x).toLocaleString(undefined, {
        maximumFractionDigits: digit,
    });
};

export const getExtension = (filename) => {
    return filename.split(".").pop();
};

export const saveItemActivity = (params) => {
    axios
        .post(`${config.API_URL}api/itemActivity/create`, {
            ...params,
        })
        .then(() => { })
        .catch(() => { });
};

export const saveMultipleItemActivity = (params) => {
    axios
        .post(`${config.API_URL}api/itemActivity/multipleCreate`, {
            ...params,
        })
        .then(() => { })
        .catch(() => { });
};

export const updateItemActivity = (actId, params) => {
    axios
        .post(`${config.API_URL}api/itemActivity/update`, {
            actId: actId,
            params: {
                ...params,
            },
        })
        .then(() => { })
        .catch(() => { });
};

// helper function for validating if an image is broken
export const notBroken = async (urlParams) => {
    if (urlParams === undefined || !urlParams || urlParams === "") return false
    if (!urlParams?.includes('http')) {
        urlParams = `${config.UPLOAD_URL}uploads/${urlParams}`
    }
    return new Promise((resolve, reject) => {
        var isValidImage = function (url, callback) {
            var img = new Image();
            img.src = url;

            img.onerror = function () {
                callback(url, false);
            };

            img.onload = function () {
                callback(url, true);
            };
        };

        var callbackFunction = function (url, isValid) {
            if (isValid) {
                resolve(true);
            } else {
                resolve(false);
            }
        };

        isValidImage(urlParams, callbackFunction);
    });
};

// helper function for validating if an thumbnail image is broken
export const thumbnailNotBroken = async (urlParams) => {
    if (urlParams === undefined || !urlParams || urlParams === "") return false
    if (!urlParams?.includes('http')) {
        urlParams = `${config.UPLOAD_URL}thumbnails/${urlParams}`
    }
    return new Promise((resolve, reject) => {
        var isValidImage = function (url, callback) {
            var img = new Image();
            img.src = url;

            img.onerror = function () {
                callback(url, false);
            };

            img.onload = function () {
                callback(url, true);
            };
        };

        var callbackFunction = function (url, isValid) {
            if (isValid) {
                resolve(true);
            } else {
                resolve(false);
            }
        };

        isValidImage(urlParams, callbackFunction);
    });
};

export const notBrokenImgHolder = async (urlParams) => {
    if (urlParams === undefined || !urlParams || urlParams === "") return false
    return new Promise((resolve, reject) => {
        var isValidImage = function (url, callback) {
            var img = new Image();
            img.src = url;

            img.onerror = function () {
                callback(url, false);
            };

            img.onload = function () {
                callback(url, true);
            };
        };

        var callbackFunction = function (url, isValid) {
            if (isValid) {
                resolve(true);
            } else {
                resolve(false);
            }
        };

        isValidImage(urlParams, callbackFunction);
    });
};


// helper function for getting website domain from window.location
export const getMyDomain = () => {
    return window?.location?.origin?.split("://")[1].split(".")[0].split(":")[0] || "rizenfts";
};
