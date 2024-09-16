import {
  ACTION_PROPS,
  ACTIVE_CHAINS,
  ITEM_ACTION_TYPES,
  config,
} from "../../config";
import { getShortAddress, isEmpty } from "../../lib/methods";
import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { getLinkPathToJSON } from "../../lib/utils";

import { useNavigate } from "react-router-dom";
// import Avatar from "components/StyleComponent/Avatar";
// import { getItemPriceUnitText } from "./ItemPriceUnitText";
import { useAppSelector } from "../../hooks";
import { selectDetailOfAnItem } from "../../reducers/nft.reducers";
import axios from "axios";
import { useItemsApiServices } from "../../api/useItemsApiServices";

const BidPad = ({ attributes }) => {
  const navigate = useNavigate();
  const globalDetailNFT = useAppSelector(selectDetailOfAnItem);
  const [itemActivities, setItemActivities] = useState([]);
  const { curUnitPrice } = useItemsApiServices();
  useEffect(() => {
    getItemActivities();
  }, [globalDetailNFT]);

  // disable button
  function disableNavigation(event) {
    event.preventDefault();
  }

  const getItemActivities = useCallback(() => {
    if (globalDetailNFT?._id?.toString()?.length === 24) {
      axios
        .post(`${config.API_URL}api/itemActivity/getItemActivities`, {
          itemId: globalDetailNFT?._id,
          limit: 10,
        })
        .then((response) => {
          setItemActivities(response.data.data);
        })
        .catch((error) => {});
    }
  }, [globalDetailNFT]);
  return (
    <div className="nft-detail__details widget">
      <div className="nft-detail__details--title">bids</div>
      <div className="nft-detail__details--content">
        {/* <div className="nft-detail__details--item">
          <div className="nft-detail__details--colum left">
            <img
              alt=""
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDkuNUgxMk04IDE4LjVIMTJNMTIgOS41SDEwQzguODk1NDMgOS41IDggMTAuMzk1NCA4IDExLjVWMTJDOCAxMy4xMDQ2IDguODk1NDMgMTQgMTAgMTRIMTRDMTUuMTA0NiAxNCAxNiAxNC44OTU0IDE2IDE2VjE2LjVDMTYgMTcuNjA0NiAxNS4xMDQ2IDE4LjUgMTQgMTguNUgxMk0xMiA5LjVWOE0xMiA5LjVWMTguNU0xMiAxOC41VjIwIiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA0LjVMMTggNC41IiBzdHJva2U9IiMwMEZGRjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K"
              styie={{ color: "transparent" }}
            />
            Top bidd
          </div>
          <div className="nft-detail__details--colum right coin">
            <img
              alt=""
              width="0"
              height="0"
              decoding="async"
              data-nimg="1"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE4N18yODMxKSI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMV8xODdfMjgzMSkiPgo8cGF0aCBkPSJNNiAwQzIuNjY2NjcgMCAwIDIuNjY2NjcgMCA2QzAgOS4zMzMzMyAyLjY2NjY3IDEyIDYgMTJDOS4zMzMzMyAxMiAxMiA5LjMzMzMzIDEyIDZDMTIgMi42NjY2NyA5LjMzMzMzIDAgNiAwWk04LjMzMzMzIDEwLjUzMzNDNy40NjY2NyAxMSA2LjYgMTEuMTMzMyA1LjY2NjY3IDExLjA2NjdDNC40NjY2NyAxMSAzLjQgMTAuNTMzMyAyLjQ2NjY3IDkuNzMzMzNDMi4zMzMzMyA5LjYgMi4zMzMzMyA5LjYgMi40NjY2NyA5LjQ2NjY3QzMgOC45MzMzMyAzLjUzMzMzIDguNDY2NjcgNCA3LjkzMzMzQzQuMDY2NjcgNy44NjY2NyA0LjEzMzMzIDcuODY2NjcgNC4yNjY2NyA3LjkzMzMzQzUuNTMzMzMgOS4wNjY2NyA3LjUzMzMzIDguNjY2NjcgOC4yNjY2NyA3LjJDOS4wNjY2NyA1LjYgOCAzLjczMzMzIDYuMjY2NjcgMy41MzMzM0M1LjUzMzMzIDMuNDY2NjcgNC44NjY2NyAzLjY2NjY3IDQuMjY2NjcgNC4xMzMzM0M0LjEzMzMzIDQuMiA0LjA2NjY3IDQuMiA0IDQuMTMzMzNDMy40NjY2NyAzLjYgMi45MzMzMyAzLjA2NjY3IDIuNCAyLjUzMzMzQzIuMzMzMzMgMi40NjY2NyAyLjMzMzMzIDIuNCAyLjQgMi4zMzMzM0MyLjkzMzMzIDEuODY2NjcgMy41MzMzMyAxLjQ2NjY3IDQuMiAxLjI2NjY3QzQuNzMzMzMgMSA1LjMzMzMzIDAuOTMzMzMzIDUuOTMzMzMgMC45MzMzMzNDNy45MzMzMyAxIDkuNDY2NjcgMS44NjY2NyAxMC40NjY3IDMuNkMxMC45MzMzIDQuNDY2NjcgMTEuMTMzMyA1LjMzMzMzIDExLjA2NjcgNi4zMzMzM0MxMC45MzMzIDguMiAxMCA5LjYgOC4zMzMzMyAxMC41MzMzWk00LjYgNkM0LjYgNS4yIDUuMiA0LjYgNiA0LjZDNi44IDQuNiA3LjQgNS4yIDcuNCA2QzcuNCA2LjggNi44IDcuNCA2IDcuNEM1LjIgNy40IDQuNiA2LjggNC42IDZaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMTg3XzI4MzEiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjxjbGlwUGF0aCBpZD0iY2xpcDFfMTg3XzI4MzEiPgo8cmVjdCB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
              styie={{ color: "transparent" }}
            />
            0
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default BidPad;
