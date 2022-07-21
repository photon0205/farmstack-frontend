import React, { useState, useMemo } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from "@mui/material/Button";
import THEME_COLORS from '../../Constants/ColorConstants'
import { useHistory } from "react-router-dom";
import labels from '../../Constants/labels';
import { Container } from 'react-bootstrap';
import { Nav } from '../Navbar/NavbarElements';
import './../Navbar/Navbar.css'
import LocalStorageConstants from '../../Constants/LocalStorageConstants';
// import Select from 'react-select'
const useStyles = {
    btncolor: {color: THEME_COLORS.THEME_COLOR, "border-color": THEME_COLORS.THEME_COLOR, "border-radius": 0},
    marginrowtop: {"margin-top": "30px"},
    marginrowtop50: {"margin-top": "50px"},
    marginrowtop20: {"margin-top": "20px"},
    headingbold:{fontWeight: "bold"},
    headingcolorbold:{fontWeight: "bold",color: THEME_COLORS.THEME_COLOR}
};
export default function SessionExpired(props) {
    const [screenlabels, setscreenlabels] = useState(labels["en"]);
    const history = useHistory();
    localStorage.removeItem(LocalStorageConstants.KEYS.JWTToken);
    localStorage.removeItem(LocalStorageConstants.KEYS.user);
    return (
        <>
            <Nav id="datahubnavbar">
            {/* <Bars /> */}
                <img
                src={require("../../Assets/Img/farmstack.jpg")}
                alt="new"
                style={{ width: "139.35px", height: "18.99px", "margin-top": "26px"}}
                />
            </Nav>
            <Container>
                <Row style={useStyles.marginrowtop50}>
                    <Col xs={12} sm={12} md={12} lg={12} >
                        <span className="mainheadingsuccess">
                            {screenlabels.sessiontimeout.heading}
                        </span>
                    </Col>
                </Row>
                <Row style={useStyles.marginrowtop}>
                    <Col xs={12} sm={12} md={12} lg={12} >
                        <img
                            src={require('../../Assets/Img/session_expired.png')}
                            style={{width: '102px', height: '102px'}}
                            alt="Session Timeout"
                        />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12} style={useStyles.marginrowtop20}>
                        <span className="secondmainheadingsuccess">
                        {screenlabels.sessiontimeout.secondmainheading}
                        </span>
                    </Col>
                </Row>
                <Row style={useStyles.marginrowtop20}>
                    <Col xs={12} sm={12} md={12} lg={12} >
                        <span className="thirdmainheadingsuccess">
                        {screenlabels.sessiontimeout.thirdmainheading}
                        </span>
                    </Col>
                </Row>
                <Row style={useStyles.marginrowtop50}>
                    <Col xs={12} sm={12} md={12} lg={12} >
                        <Button  onClick={()=>history.push("/login")} variant="contained" className="submitbtn">
                            <span>Login</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}