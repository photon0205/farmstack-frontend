import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { downloadDocument, getTokenLocal, download } from "../../Utils/Common";
import File from "./TabComponents/File";
import UrlConstant from "../../Constants/UrlConstants";
import HTTPService from "../../Services/HTTPService";
import { FarmStackContext } from "../Contexts/FarmStackContext";
import { getUserMapId } from "../../Utils/Common";
import { Tag } from "antd";

const FileWithAction = ({
  index,
  name,
  id,
  fileType,
  usagePolicy,
  files,
  getDataset,
  isOther,
  userType,
}) => {
  const { callLoader, callToast } = useContext(FarmStackContext);
  const handleDownload = () => {
    let accessToken = getTokenLocal() ?? false;
    let url =
      UrlConstant.base_url +
      `${
        userType === "guest"
          ? UrlConstant.public_download_file
          : UrlConstant.download_file
      }` +
      id;
    callLoader(true);
    HTTPService("GET", url, "", false, true, accessToken)
      .then((res) => {
        callLoader(false);
        download(res?.data, name);
        callToast("File downloaded successfully!", "success", true);
      })
      .catch((err) => {
        callLoader(false);
        callToast(
          "Something went wrong while downloading the file.",
          "error",
          true
        );
      });
  };
  const askToDownload = () => {
    let accessToken = getTokenLocal() ?? false;
    let url = UrlConstant.base_url + UrlConstant.ask_for_permission;
    let body = {
      dataset_file: id,
      user_organization_map: getUserMapId(),
    };
    callLoader(true);
    HTTPService("POST", url, body, false, true, accessToken)
      .then((res) => {
        callLoader(false);
        getDataset();
        callToast(
          "Successfully, sent the request for downloading the file",
          "success",
          true
        );
      })
      .catch((err) => {
        callLoader(false);
        callToast(
          "Something went wrong while asking for the permission.",
          "error",
          true
        );
      });
  };

  const handleDelete = (usagePolicyid) => {
    let accessToken = getTokenLocal() ?? false;
    let url =
      UrlConstant.base_url +
      UrlConstant.ask_for_permission +
      usagePolicyid +
      "/";
    callLoader(true);
    HTTPService("DELETE", url, "", false, true, accessToken)
      .then((res) => {
        callLoader(false);
        getDataset();
      })
      .catch((err) => {
        callLoader(false);
        callToast("Something went wrong while recalling.", "error", true);
      });
  };

  const handleButtonClick = () => {
    if (userType !== "guest") {
      if (fileType === "public" || fileType === "registered" || !isOther) {
        handleDownload();
      }
      if (isOther && fileType === "private") {
        if (!usagePolicy?.length) {
          askToDownload();
        } else {
          let filteredItem = usagePolicy.filter(
            (item) => item.user_organization_map === getUserMapId()
          );
          if (filteredItem?.[0]?.approval_status === "requested") {
            handleDelete(filteredItem?.[0]?.id);
          } else if (filteredItem?.[0]?.approval_status === "approved") {
            handleDownload();
          } else if (filteredItem?.[0]?.approval_status === "rejected") {
            askToDownload();
          }
        }
      }
    } else {
      if (fileType === "public") {
        handleDownload();
      }
    }
  };

  const getButtonName = () => {
    let filteredItem = usagePolicy?.filter(
      (item) => item.user_organization_map === getUserMapId()
    );
    if (filteredItem?.[0]?.approval_status === "requested") {
      return "Recall";
    } else if (filteredItem?.[0]?.approval_status === "approved") {
      return "Download";
    } else if (filteredItem?.[0]?.approval_status === "rejected") {
      return "Ask to Download";
    }
  };

  const getName = () => {
    let filteredItem = usagePolicy?.filter(
      (item) => item.user_organization_map === getUserMapId()
    );
    if (filteredItem?.[0]?.approval_status === "requested") {
      console.log(filteredItem);
      return "Requested";
    } else if (filteredItem?.[0]?.approval_status === "approved") {
      return "Approved";
    } else if (filteredItem?.[0]?.approval_status === "rejected") {
      return "Rejected";
    }
  };

  const getColor = () => {
    let filteredItem = usagePolicy.filter(
      (item) => item.user_organization_map === getUserMapId()
    );
    if (filteredItem?.[0]?.approval_status === "requested") {
      return "#2db7f5";
    } else if (filteredItem?.[0]?.approval_status === "approved") {
      return "#108ee9";
    } else if (filteredItem?.[0]?.approval_status === "rejected") {
      return "#f50";
    }
  };
  return (
    <Box className="d-flex justify-content-between w-100">
      <Box className="d-flex align-items-center">
        <File
          index={index}
          name={name}
          size={657489}
          showDeleteIcon={false}
          type={"file_upload"}
          isTables={true}
        />
        {isOther && usagePolicy?.length ? (
          <Tag
            className="d-flex align-items-center justify-content-center"
            style={{
              height: "30px",
              width: "80px",
              marginLeft: "25px",
              textTransform: "capitalize",
            }}
            color={getColor()}
          >
            {getName()}
          </Tag>
        ) : (
          <></>
        )}
      </Box>

      <Box className="d-flex align-items-center">
        {/* <div className="type_dataset">{fileType}</div> */}
        <Tag
          className="d-flex align-items-center justify-content-center"
          style={{ height: "30px", width: "80px", textTransform: "capitalize" }}
          color={
            fileType === "public"
              ? "green"
              : fileType === "registered"
              ? "orange"
              : "magenta"
          }
        >
          {fileType}
        </Tag>
        <Button
          sx={{
            fontFamily: "Montserrat",
            fontWeight: 700,
            fontSize: "15px",
            width: "220px",
            height: "48px",
            border: "1px solid rgba(0, 171, 85, 0.48)",
            borderRadius: "8px",
            color: "#00AB55",
            textTransform: "none",
            marginLeft: "35px",
            marginRight: "25px",
            "&:hover": {
              background: "none",
              border: "1px solid rgba(0, 171, 85, 0.48)",
            },
          }}
          variant="outlined"
          onClick={() => handleButtonClick()}
        >
          {userType !== "guest"
            ? fileType === "public" || fileType === "registered" || !isOther
              ? "Download"
              : isOther && !usagePolicy?.length
              ? "Ask to Download"
              : getButtonName()
            : fileType === "public"
            ? "Download"
            : "Login to Download"}
        </Button>
      </Box>
    </Box>
  );
};

export default FileWithAction;
