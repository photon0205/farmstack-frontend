import React, { useState, useEffect } from "react";
import { Box, Divider } from "@mui/material";
import AddConnectorCard from "./AddConnectorCard";
import ConnectorCardView from "./ConnectorCardView";
import ConnectorListView from "./ConnectorListView";
import ContainedButton from "../Button/ContainedButton";
import OutlinedButton from "../Button/OutlinedButton";
import style from "./Connector.module.css";
import globalStyle from "../../Assets/CSS/global.module.css";
import ConnectorTitleView from "./ConnectorTitleView";
import { useHistory } from "react-router-dom";
import {
  getTokenLocal,
  getUserLocal,
  isLoggedInUserAdmin,
  isLoggedInUserParticipant,
} from "../../Utils/Common";
import HTTPService from "../../Services/HTTPService";
import UrlConstant from "../../Constants/UrlConstants";

const Connectors = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [connectors, setConnectors] = useState([]);
  const [connectorUrl, setConnectorUrl] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const history = useHistory();

  const addConnector = () => {
    if (isLoggedInUserAdmin()) {
      return "/datahub/connectors/add";
    } else if (isLoggedInUserParticipant()) {
      return "/participant/connectors/add";
    }
  };

  const getConnectors = (isLoadMore) => {
    let url = !isLoadMore
      ? UrlConstant.base_url +
        UrlConstant.list_of_connectors +
        "?user=" +
        getUserLocal()
      : connectorUrl;
    let accessToken = getTokenLocal() ?? false;
    HTTPService("GET", url, "", false, accessToken)
      .then((response) => {
        if (response.data.next == null) {
          setShowLoadMore(false);
        } else {
          setConnectorUrl(response.data.next);
          setShowLoadMore(true);
        }
        let tempArr = [];
        if (isLoadMore) {
          tempArr = [...connectors, ...response.data.results];
        } else {
          tempArr = [...response.data.results];
        }
        setConnectors(tempArr);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getConnectors(false);
  }, []);

  return (
    <Box sx={{ padding: "40px", maxWidth: "100%" }}>
      <Box sx={{ marginLeft: "144px", marginRight: "144px" }}>
        <div className="text-left">
          <span className={style.lightTextTitle}>Connectors</span>
        </div>
        <Box className="mb-100">
          <ConnectorTitleView
            title={"List of connectors"}
            isGrid={isGrid}
            setIsGrid={setIsGrid}
            history={history}
            addConnector={addConnector}
            isConnectors={connectors && connectors?.length > 0}
          />
          <Divider className="mb-20 mt-24" />
          {connectors && connectors.length > 0 ? (
            <>
              {isGrid ? (
                <div className={style.connectorCard}>
                  <AddConnectorCard
                    history={history}
                    addConnector={addConnector}
                  />
                  {connectors?.map((item) => (
                    <ConnectorCardView history={history} item={item} />
                  ))}
                </div>
              ) : (
                <ConnectorListView connectors={connectors} history={history} />
              )}
              {showLoadMore ? (
                <OutlinedButton
                  text={"Load more"}
                  fontWeight={"700"}
                  fontSize={"16px"}
                  width={"368px"}
                  height={"48px"}
                  mt={"50px"}
                  handleClick={() => getConnectors(true)}
                />
              ) : (
                <></>
              )}
            </>
          ) : (
            <Box>
              <div
                className={`${globalStyle.bold600} ${globalStyle.size24} ${globalStyle.primary_fontStyle} mt-30`}
              >
                There is no connectors
              </div>
              <div
                className={`${globalStyle.bold400} ${globalStyle.size16} ${globalStyle.primary_fontStyle} mt-20`}
              >
                As of now there is no connectors, so add new connectors!
              </div>
              <ContainedButton
                text={"Add New Connector"}
                fontWeight={"700"}
                fontSize={"16px"}
                width={"246px"}
                height={"48px"}
                mt={"50px"}
                handleClick={() => history.push(addConnector())}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Connectors;