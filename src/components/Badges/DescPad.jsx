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

const DescPad = ({ attributes }) => {
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
    <div className="nft-detail__activities widget desktop">
      <div className="nft-detail__activities--title">HISTORY</div>

      {itemActivities && itemActivities?.length > 0 ? (
        <div className="nft-detail__activities--content">
          <table>
            <thead>
              <tr>
                <th>Action</th>
                <th>Price</th>
                <th>From</th>
                <th>To</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {itemActivities.map((activity, index) => {
                return (
                  <tr>
                    <td className="type-activity">
                      {ACTION_PROPS[activity.actionType].label}
                    </td>
                    <td className="price">
                      {activity?.price
                        ? (activity?.price * curUnitPrice)?.toFixed(2)
                        : "--"}
                    </td>
                    <td>{getShortAddress(activity?.origin?.address)}</td>
                    <td>
                      {activity?.actionType === ITEM_ACTION_TYPES.LISTED ||
                      activity?.actionType === ITEM_ACTION_TYPES.BID ||
                      activity?.actionType === ITEM_ACTION_TYPES.DESTROYED
                        ? "---"
                        : activity?.actionType === ITEM_ACTION_TYPES.DELISTED ||
                          activity?.actionType === ITEM_ACTION_TYPES.MINTED
                        ? getShortAddress(activity?.origin?.address)
                        : (activity?.actionType === ITEM_ACTION_TYPES.SOLD ||
                            activity?.actionType ===
                              ITEM_ACTION_TYPES.TRANSFERED) &&
                          getShortAddress(activity?.to?.address)}
                    </td>
                    <td>
                      {new Date(activity?.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center propertiesMobileDetails rounded-3xl overflow-hidden overflow-y-scroll h-[100px]"style={{fontSize:20,color:"#fff"}}>
          No History
        </div>
      )}
    </div>
  );
};
export default DescPad;
