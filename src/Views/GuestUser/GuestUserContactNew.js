import React, { useState, useContext, useEffect } from "react";
import LocalStyle from "./GuestUserContactNew.module.css";
import GlobalStyle from "../../Assets/CSS/global.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { FarmStackContext } from "../../Components/Contexts/FarmStackContext";
import { GetErrorHandlingRoute, GetErrorKey } from "../../Utils/Common";
import HTTPService from "../../Services/HTTPService";
import UrlConstant from "../../Constants/UrlConstants";
import { useHistory } from "react-router-dom";

const GuestUserContactNew = () => {
  const { callLoader, callToast } = useContext(FarmStackContext);
  let history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [describeQuery, setDescribeQuery] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [subjectErrorMessage, setSubjectErrorMessage] = useState("");
  const [describeQueryErrorMessage, setDescribeQueryErrorMessage] =
    useState("");
  const [contactNumberErrorMessage, setContactNumberErrorMessage] =
    useState("");
  const [adminDetails, setAdminDetails] = useState({
    name: "",
    email: "",
    contactNumber: "",
    organizationName: "",
    address: "",
    postalCode: "",
    country: "",
    organizationWebsite: "",
    organizationEmail: "",
  });

  const getDatahubAdminDetails = () => {
    callLoader(true);

    HTTPService(
      "GET",
      UrlConstant.base_url + UrlConstant.guest_organization_details,
      "",
      false,
      false
    )
      .then((response) => {
        console.log("response", response);
        callLoader(false);
        const admin = response.data.user;
        const organization = response.data.organization;
        const message = response.data.message;
        setAdminDetails({
          name: admin?.first_name + " " + admin?.last_name,
          email: admin?.email,
          contactNumber: admin?.phone_number,
          organizationName: organization?.name,
          address: organization?.address?.address,
          postalCode: organization?.address?.pincode,
          country: organization?.address?.country,
          organizationWebsite: organization?.website,
          organizationEmail: organization?.org_email,
        });
        // const adminErrorMessage = (e) => {
        //   history.push(adminNotFoundRoute(e));
        // };
        // setDatahubUserDetails(
        //   admin == null
        //     ? setAdminNotFound(adminErrorMessage)
        //     : {
        //         admin_name: admin?.first_name,
        //         org_name: organization?.name,
        //         address: `${organization?.address?.address}, ${organization?.address?.city}`,
        //         phone_number: organization?.phone_number,
        //         admin_email: admin?.email,
        //         country: organization?.address?.country,
        //         city: organization?.address?.city,
        //         website: organization?.website,
        //         admin_phone: admin?.phone_number,
        //         admin_pin_code: organization?.address?.pincode,
        //         email_id: organization?.org_email,
        //       }
        // setIsSuccess(true);
        // );
      })
      .catch(async (e) => {
        callLoader(false);
        console.log(e);
        let response = await GetErrorHandlingRoute(e);
        if (response.toast) {
          //callToast(message, type, action)
          callToast(
            response?.message ?? response?.data?.detail ?? "Unknown",
            response.status == 200 ? "success" : "error",
            response.toast
          );
        } else {
          history.push(response?.path);
        }
      });
  };

  const clearErrorMessages = () => {
    setFirstNameErrorMessage("");
    setLastNameErrorMessage("");
    setEmailErrorMessage("");
    setSubjectErrorMessage("");
    setDescribeQueryErrorMessage("");
    setContactNumberErrorMessage("");
  };

  const handleCancelButtonClick = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setSubject("");
    setDescribeQuery("");
    setContactNumber("");
    clearErrorMessages();
  };

  const addNewGuestUserData = () => {
    callLoader(true);

    const useDetails = {
      firstName,
      lastName,
      email,
      contactNumber,
      queryDescription: describeQuery,
    };

    const bodyFormData = new FormData();
    bodyFormData.append("first_name", useDetails.firstName);
    bodyFormData.append("last_name", useDetails.lastName);
    bodyFormData.append("email", useDetails.email);
    bodyFormData.append("subject", "");
    bodyFormData.append("describe_query", useDetails.queryDescription);
    bodyFormData.append("contact_number", useDetails.contactNumber);

    HTTPService(
      "POST",
      UrlConstant.base_url + UrlConstant.microsite_contact_form,
      bodyFormData,
      true,
      false
    )
      .then((response) => {
        callLoader(false);
        callToast({
          message: "Your message has been sent successfully.",
          severity: "success",
        });
      })
      .catch((e) => {
        callLoader(false);
        console.log(e);
        const returnValues = GetErrorKey(e, bodyFormData.keys());
        const errorKeys = returnValues[0];
        const errorMessages = returnValues[1];
        if (errorKeys.length > 0) {
          for (let i = 0; i < errorKeys.length; i++) {
            switch (errorKeys[i]) {
              case "first_name":
                setFirstNameErrorMessage(errorMessages[i]);
                break;
              case "last_name":
                setLastNameErrorMessage(errorMessages[i]);
                break;
              case "email":
                setEmailErrorMessage(errorMessages[i]);
                break;
              case "subject":
                setSubjectErrorMessage(errorMessages[i]);
                break;
              case "describe_query":
                setDescribeQueryErrorMessage(errorMessages[i]);
                break;
              case "contact_number":
                setContactNumberErrorMessage(errorMessages[i]);
                break;
              default:
                // history.push(GetErrorHandlingRoute(e));
                break;
            }
          }
        } else {
          console.log(e);
        }
      });
  };
  useEffect(() => {
    getDatahubAdminDetails();
  }, []);

  return (
    <Container>
      <Row className={LocalStyle.titleContainer}>
        <div className={LocalStyle.title}>Talk with us</div>
        <div className="d-flex justify-content-center">
          <div className={LocalStyle.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
            tellus scelerisque, imperdiet augue id, accumsan dolor. Integer ac
            neque quis metus pretium tempus.
          </div>
        </div>
      </Row>
      <Row className={LocalStyle.title2}>
        <Typography className={`${GlobalStyle.size24} ${GlobalStyle.bold600}`}>
          Say hello..
        </Typography>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <TextField
            id="firstName"
            label="First Name"
            placeholder="Enter your first name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setFirstName(e.target.value)}
            error={firstNameErrorMessage}
            helperText={firstNameErrorMessage ?? ""}
          />
        </Col>
        <Col lg={6} md={12}>
          <TextField
            id="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={(e) => setLastName(e.target.value)}
            error={lastNameErrorMessage}
            helperText={lastNameErrorMessage ?? ""}
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} md={12}>
          <TextField
            id="mail"
            label="Mail ID"
            placeholder="Enter your email address"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            error={emailErrorMessage}
            helperText={emailErrorMessage ?? ""}
          />
        </Col>
        <Col lg={6} md={12}>
          <TextField
            id="contactNumber"
            label="Contact Number"
            placeholder="Enter your phone number"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={(e) => setContactNumber(e.target.value)}
            error={contactNumberErrorMessage}
            helperText={contactNumberErrorMessage ?? ""}
          />
        </Col>
      </Row>
      <Row>
        <Col className={LocalStyle.radioButtonContainer} lg={12}>
          {/* <FormControl component="fieldset" margin="normal" required> */}
          {/* <FormLabel component="legend">Select an option</FormLabel> */}
          {/* <RadioGroup aria-label="contactType" name="contactType"> */}
          {/* <div> */}
          <FormControlLabel
            value="participant"
            control={<Radio />}
            label="Become a Participant (Data Provider / Consumer)"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other queries (Describe your query in detail)"
          />
          {/* </div> */}
          {/* </RadioGroup>
          </FormControl> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <TextField
            id="description"
            label="Describe your query"
            placeholder="Describe your query"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            onChange={(e) => setDescribeQuery(e.target.value)}
            error={describeQueryErrorMessage}
            helperText={describeQueryErrorMessage ?? ""}
          />
        </Col>
      </Row>
      <Row className={LocalStyle.backButtonContainer}>
        <Button
          id={"details-page-load-more-dataset-button"}
          variant="outlined"
          className={`${GlobalStyle.primary_button} ${LocalStyle.primary_button}`}
          onClick={() => addNewGuestUserData()}
        >
          Submit
        </Button>
        <Button
          id={"details-page-load-more-dataset-button"}
          variant="outlined"
          className={`${GlobalStyle.outlined_button} ${LocalStyle.backButton}`}
          onClick={() => handleCancelButtonClick()}
        >
          Cancel
        </Button>
      </Row>
      <Row className={LocalStyle.title2}>
        <Typography className={`${GlobalStyle.size24} ${GlobalStyle.bold600}`}>
          Touch with us!
        </Typography>
      </Row>
      <Row className={LocalStyle.adminDetailsContainer}>
        <Col lg={10}>
          <Row className={LocalStyle.textRow}>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>
                Datahub admin name
              </Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.name}
              </Typography>
            </Col>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>
                Datahub admin email
              </Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.email}
              </Typography>
            </Col>
          </Row>
          <Row className={LocalStyle.textRow}>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>
                Contact Number
              </Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.contactNumber}
              </Typography>
            </Col>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>
                Organisation name
              </Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.organizationName}
              </Typography>
            </Col>
          </Row>
          <Row className={LocalStyle.textRow}>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>Address</Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.address}
              </Typography>
            </Col>
          </Row>
          <Row className={LocalStyle.textRow}>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>
                Postal Code
              </Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.postalCode}
              </Typography>
            </Col>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>Country</Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.country}
              </Typography>
            </Col>
          </Row>
          <Row className={LocalStyle.textRow}>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>Email</Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.organizationEmail}
              </Typography>
            </Col>
            <Col className={LocalStyle.adminDetailsCol}>
              <Typography className={GlobalStyle.bold400}>
                Organization Website
              </Typography>
              <Typography className={GlobalStyle.bold600}>
                {adminDetails.organizationWebsite}
              </Typography>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default GuestUserContactNew;
