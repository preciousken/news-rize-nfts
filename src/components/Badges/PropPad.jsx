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

const PropPad = ({attributes}) => {
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

//   console.log("***********",attributes)
  return (
    <div className="nft-detail__attributes widget">
      <div className="nft-detail__attributes--title">Properties</div>
      <div className="nft-detail__attributes--content">
        {/* //// */}
        {attributes?.map((item, index) => {
            // console.log('../dldldldldldl../...',item)
          return (
            <div className="nft-detail__attributes--item">
              <div className="nft-detail__attributes--item-attribute">
                {item["trait_type"]}
              </div>
              <div className="nft-detail__attributes--item-category">
                {item["value"]}
              </div>
            </div>
          );
        })}
        {/* //// */}
      </div>
    </div>
  );
};

export default PropPad;
