
import { useAppDispatch, useAppSelector } from "../hooks";
import React, { useState,FC, useEffect } from "react";
import { selectCurrentUser } from "../reducers/auth.reducers";
import { useSelector } from "react-redux";


// //////
// import Heading from "components/StyleComponent/Heading";
// import SortOrderFilter from "./SortOrderFilter";
import axios from "axios";
import { config } from "../config";
import { changePopular, selectPopularUsers } from "../reducers/user.reducers";
import {
  changeFollow,
  changeFollowingList,
  changeFollowList,
} from "../reducers/flollow.reducers";
import { toast } from "react-toastify";
import { isEmpty } from "../lib/methods";
import TopSellerB from "./Badges/TopSeller";
// import CardAuthorBox from "components/Card/CardAuthorBox";

export interface SectionTopUserProps {
  className?: string;
  gridClassName?: string;
}

const sortOrder = ["Last 24 hours", "Last 7 days", "Last 30 days", "All"];
const dateOptions = [
  { value: 1, text: "Last 24 hours" },
  { value: 2, text: "Last 7 days" },
  { value: 3, text: "Last 30 days" },
  { value: 4, text: "All" },
];
const directionOptions = ["Sellers", "Buyers"];

// /////

const TopSeller = () => {

  const popular = useAppSelector(selectPopularUsers);
  const auth = useSelector(selectCurrentUser);
  const dispatch = useAppDispatch();

  const [date, setDate] = useState(sortOrder[3]);
  const [direction, setDirection] = useState(directionOptions[0]);
  const [items, setItems] = useState([]);

  const getPopularUserList = (time: any, limit: any) => {
    // time : timeframe, 0: all, 1: today, 2: this month, 3: 3 months, 4: year

    axios
      .post(
        `${config.API_URL}api/users/get_popular_user_list`,
        { limit: limit, time: time },
        {
          headers: {
            "x-access-token": localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((result) => {
        dispatch(changePopular(result.data.data));
      })
      .catch(() => {});
  };

  useEffect(() => {
    getPopularUserList(
      dateOptions.find((item) => item.text === date)?.value,
      4
    );
  }, [date]);

  // useEffect(() => {
  //   socket.on("UpdateStatus", (data) => {
  //     getPopularUserList(
  //       dateOptions.find((item) => item.text === date)?.value,
  //       4
  //     );
  //   });
  // }, []);

  useEffect(() => {
    setUserList();
  }, [popular, direction]);

  const setUserList = () => {
    if (popular) {
      if (direction === "Sellers") {
        setItems((popular as any).seller);
      } else {
        setItems((popular as any).buyer);
      }
    }
  };

  
  return (
    <div
      className="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop"
      style={{ 
        backgroundColor: "rgba(19, 19, 29, 0.97)" 
      }}

    >
      <div className="container">
        <div className="row  mb--30">
          <div className="col-12 justify-sm-center d-flex">
            <h3
              className="title sal-animate"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
              style={{
                color: "#ffffff",
                fontSize: "32px",
                fontFamily: "Roboto",
                fontWeight: "bolder",
              }}
            >
              Top Seller in
            </h3>
            <select style={{ display: "none" }}>
              <option data-display="1 day"> 1 day</option>
              <option value="1">7 Day's</option>
              <option value="2">15 Day's</option>
              <option value="4">30 Day's</option>
            </select>
            <div className="nice-select" 
            // tabindex="0"
            >
              <span className="current">1 day</span>
              <ul className="list">
                <li
                  data-value="1 day"
                  data-display="1 day"
                  className="option selected focus"
                >
                  {" "}
                  1 day
                </li>
                <li data-value="1" className="option">
                  7 Day's
                </li>
                <li data-value="2" className="option">
                  15 Day's
                </li>
                <li data-value="4" className="option">
                  30 Day's
                </li>
              </ul>
            </div>
          </div>
        </div>
        <TopSellerB seller={popular}/>
      </div>
    </div>
  );
};

export default TopSeller;
