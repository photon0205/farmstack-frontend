import React, { useState, useMemo } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import THEME_COLORS from '../../../Constants/ColorConstants'
import labels from '../../../Constants/labels';
import TextField from "@mui/material/TextField";
import MenuItem from '@mui/material/MenuItem';
// import Select from 'react-select'
const useStyles = {
    btncolor: {color: THEME_COLORS.THEME_COLOR, "border-color": THEME_COLORS.THEME_COLOR, "border-radius": 0},
    marginrowtop: {"margin-top": "20px"},
    inputwidth:{width: "95%"},
    headingbold:{fontWeight: "bold"}
};
export default function AddMemberForm(props) {
    const [screenlabels, setscreenlabels] = useState(labels['en']);
    return (
        <>
            <Row style={useStyles.marginrowtop}>
                <span className="mainheading">
                    {props.first_heading}
                </span>
            </Row>
            <Row style={useStyles.marginrowtop}>
                <Col xs={12} sm={12} md={6} lg={6} >
                    <TextField
                        style={useStyles.inputwidth}
                        id="filled-basic"
                        variant="standard"
                        label={screenlabels.settings.first_name}
                        value={props.firstname}
                        onChange={(e) => props.setfirstname(e.target.value)}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <TextField
                        style={useStyles.inputwidth}
                        id="filled-basic"
                        variant="standard"
                        label={screenlabels.settings.last_name}
                        value={props.lastname}
                        onChange={(e) => props.setlastname(e.target.value)}
                    />
                </Col>
            </Row>
            <Row style={useStyles.marginrowtop}>
                <Col xs={12} sm={12} md={6} lg={6} >
                    <TextField
                        style={useStyles.inputwidth}
                        id="filled-basic"
                        variant="standard"
                        label={screenlabels.settings.email}
                        value={props.useremail}
                        onChange={(e) => props.setuseremail(e.target.value)}
                        error={props.isuseremailerror}
                        helperText={props.isuseremailerror ? "Enter Valid Email id" : ""}
                    />
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} >
                    <TextField
                        select
                        variant="standard"
                        style={useStyles.inputwidth}
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label={screenlabels.settings.role}
                        value={props.userrole}
                        onChange={(e) => props.setuserrole(e.target.value)}
                    >
                        {/* <MenuItem value={'Team Member'}>Team Member</MenuItem>
                        <MenuItem value={'Guest User'}>Guest User</MenuItem> */}
                        <MenuItem value={2}>Team Member</MenuItem>
                        <MenuItem value={5}>Guest User</MenuItem>
                    </TextField>
                </Col>
         
            </Row>
        </>
    );
}