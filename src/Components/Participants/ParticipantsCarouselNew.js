import React, { Component, useEffect, useContext, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UrlConstant from "../../Constants/UrlConstants";
import { useHistory } from "react-router-dom";
import { FarmStackContext } from "../Contexts/FarmStackContext";
import { GetErrorHandlingRoute } from "../../Utils/Common";
import HTTPService from "../../Services/HTTPService";
import { Box } from "@mui/material";
import NoData from "../NoData/NoData";
import GlobalStyle from "../../Assets/CSS/global.module.css";
import CustomCard from "../Card/CustomCard";
import LocalStyle from "./ParticipantsCarouselNew.module.css";

const ParticipantsCarouselNew = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    className: LocalStyle.slides,
  };
  let title = "Participants";
  const history = useHistory();
  const { callLoader, callToast, isLoading } = useContext(FarmStackContext);
  const [participantsList, setParticipantsList] = useState([]);
  // const [loadMoreUrl, setLoadMoreUrl] = useState("");

  const getCoStewardOrParticipantsOnLoad = (
    unApprovedId,
    approval_endpoint
  ) => {
    console.log("in getCoStewardOrParticipantsOnLoad");
    // setIsLoading(true);
    callLoader(true);

    let url =
      UrlConstant.base_url + UrlConstant.microsite_participant_end_point;

    if (approval_endpoint)
      url = UrlConstant.participant + unApprovedId + "?approval_status=True";
    HTTPService("GET", url, "", false, false)
      .then((response) => {
        callLoader(false);
        // if (response?.data?.next == null) {
        //   setLoadMoreButton(false);
        // } else {
        //   setLoadMoreButton(true);
        //   if (response?.data?.next) setLoadMoreUrl(response.data.next);
        // }
        if (response?.data?.results) setParticipantsList(response.data.results);
      })
      .catch((e) => {
        callLoader(false);
        let error = GetErrorHandlingRoute(e);
        console.log("Error obj", error);
        callToast(error.message, "error", true);
        console.log(e);
      });
  };
  console.log("participants list ", participantsList);

  useEffect(() => {
    getCoStewardOrParticipantsOnLoad();
  }, []);

  return (
    // <Row>
    <div>
      {/* <h2> Multiple items </h2> */}
      {participantsList.length === 0 && !isLoading ? (
        <Box p={3}>
          <NoData
            title={"There is no Participant!"}
            subTitle={
              "As of now there is no participant, so add participants or invite participants."
            }
            // primaryButton={"Add participant"}
            // primaryButtonOnClick={() =>
            //   history.push("/datahub/participants/add")
            // }
            // secondaryButton={"+ Invite participants"}
            // secondaryButtonOnClick={() =>
            //   history.push("/datahub/participants/inviteparticipants")
            // }
          />
        </Box>
      ) : (
        ""
      )}
      <Slider {...settings}>
        {participantsList.length === 0 && !isLoading
          ? ""
          : participantsList?.map((participant, index) => {
              return (
                <div
                  id={title + "grid-card-id"}
                  className={GlobalStyle.padding0}
                  xs={12}
                  sm={12}
                  md={6}
                  xl={4}
                  onClick={() =>
                    history.push(`/home/participant/${participant?.user_id}`)
                  }
                >
                  <CustomCard
                    image={participant?.organization?.logo}
                    title={participant?.organization?.name}
                    subTitle1="Datasets"
                    // subTitle2={
                    //   title == "Participants" ? "" : "No.of participants"
                    // }
                    subTitle1Value={participant?.dataset_count}
                    subTitle2Value={
                      title == "Participants"
                        ? undefined
                        : participant?.number_of_participants
                    }
                    index={index}
                  />
                </div>
              );
            })}
      </Slider>
    </div>
    // </Row>
  );
};

export default ParticipantsCarouselNew;
