import React, { useState, useEffect } from 'react';
import ParticipantsCards from '../../Components/Participants/ParticipantsCards'
import AddCard from '../../Components/AddCard/AddCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';
import labels from '../../Constants/labels';
import Button from "@mui/material/Button";
import THEME_COLORS from '../../Constants/ColorConstants'
import UrlConstants from '../../Constants/UrlConstants'
import { useHistory } from "react-router-dom";
import HTTPService from '../../Services/HTTPService'
import './Support.css'
import FilterRow from '../../Components/Support/FilterRow'
import SupportCard from '../../Components/Support/SupportCard'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import $ from 'jquery';
function Support(props) {
    const [screenlabels, setscreenlabels] = useState(labels['en']);
    const [supportList, setsupportList] = useState([]);
    const [isShowLoadMoreButton, setisShowLoadMoreButton] = useState(false);
    const [secondrow, setsecondrow] = useState(false);
    const [supportUrl, setsupportUrl] = useState("");
    // const [payload, setpayload] = useState("");
    var payload = ""
    const [filterObject, setfilterObject] = useState(
        {
            "all": true,
            "open": false,
            "hold": false,
            "closed": false,
            "connectors": false,
            "datasets": false,
            "others": false,
            "user_accounts": false,
            "usage_policy": false,
            "certificate": false
        }
    );
    const history = useHistory();
    const [fromdate, setfromdate] = React.useState(null);
    const [todate, settodate] = React.useState(null);

    useEffect(() => {
        setTimeout(() => {
            $(".supportcardfromdate input.MuiInputBase-input").attr("disabled", "disabled"); 
            $(".supportcardtodate input.MuiInputBase-input").attr("disabled", "disabled"); 
          },100)
       
        getSupportList()
    }, []);
    const getSupportList = () => {
        HTTPService('POST', UrlConstants.base_url + UrlConstants.support, payload, false, false).then((response) => {
            console.log("otp valid", response.data);
            if (response.data.next == null) {
                setisShowLoadMoreButton(false)
            } else {
                setisShowLoadMoreButton(true)
                setsupportUrl(response.data.next)
            }
            setsupportList(response.data.results)
        }).catch((e) => {
            console.log(e);
        });
    };
    const loadMoreSupportList = () => {
        HTTPService('POST', supportUrl, payload, false, false).then((response) => {
            console.log("otp valid", response.data);
            if (response.data.next == null) {
                setisShowLoadMoreButton(false)
            } else {
                setisShowLoadMoreButton(true)
                setsupportUrl(response.data.next)
            }
            let datalist = supportList
            let finalDataList = [...datalist, ...response.data.results]
            console.log(datalist)
            setsupportList(finalDataList)
        }).catch((e) => {
            console.log(e);
        });
    };
    const filterRow = (row, flag, payloadkey) => {
        if (flag != false) {
            let tempfilterObject = { ...filterObject }
            if (payloadkey != 'all') {
                let data = {}
                data[payloadkey] = row
                payload = data;
            } else {
                payload = ""
            }
            tempfilterObject[row] = flag;
            Object.keys(tempfilterObject).forEach(function (key) { if (key != row) { tempfilterObject[key] = false } });
            setfilterObject(tempfilterObject)
            setsecondrow(false)
            settodate(null)
            setfromdate(null);
            getSupportList()
        }
    }
    const filterByDates = () => {
            let tempfilterObject = { ...filterObject }
            Object.keys(tempfilterObject).forEach(function (key) {tempfilterObject[key] = false});
            setfilterObject(tempfilterObject)
            let fromDateandToDate=[]
            fromDateandToDate.push(fromdate)
            fromDateandToDate.push(todate)
            let data = {}
            data['updated_at__range'] = fromDateandToDate
            payload = data;
            setsecondrow(true)
            getSupportList()
    }
    return (
        <>
        <Row className="supportfirstmaindiv">
            <Row className="supportmaindiv">
                <Row className="secondmainheading width100percent">{screenlabels.support.heading}</Row>
                <Row className="supportfilterRow">
                    <Col className="supportfilterCOlumn">
                        <Row className="supportfilterfirstrow">
                            <span className="fontweight600andfontsize14pxandcolor3A3A3A supportfiltertext" >{screenlabels.support.filter}</span>
                        </Row>
                        {filterObject.all ? <Row onClick={() => filterRow('all', false, 'all')} className="supportfiltersecondrow">
                            <span className="supportallicon">
                                <img
                                    src={require('../../Assets/Img/filter.svg')}
                                    alt="new"
                                />
                            </span>
                            <span className="fontweight600andfontsize14pxandcolorFFFFFF supportalltexticon">{screenlabels.support.all}</span>
                        </Row> :
                            <Row onClick={() => filterRow('all', true, 'all')} className="supportfiltersecondrowbold">
                                <span className="supportallicon">
                                    <img
                                        src={require('../../Assets/Img/filter_bold.svg')}
                                        alt="new"
                                    />
                                </span>
                                <span className="fontweight600andfontsize14pxandcolor3D4A52 supportalltexticon">{screenlabels.support.all}</span>
                            </Row>}
                        <Row className={secondrow?'supportfilterthirdrowhighlight':"supportfilterthirdrow"}>
                            <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterthirdrowheadingtext">{screenlabels.support.date}</span>
                            <span className="supportcardfromdate">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        inputFormat="dd/MM/yyyy"
                                        disableFuture
                                        label="From Date *"
                                        value={fromdate}
                                        onChange={(newValue) => {
                                            settodate(null)
                                            setfromdate(newValue);
                                            setTimeout(() => {
                                                $(".supportcardtodate input.MuiInputBase-input").attr("disabled", "disabled"); 
                                              },100)
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </span>
                            <span className="supportcardtodate">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                    inputFormat="dd/MM/yyyy"
                                    disabled={fromdate?false:true}
                                    disableFuture
                                        label="To Date *"
                                        minDate={fromdate}
                                        value={todate}
                                        onChange={(newValue) => {
                                            settodate(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </span>
                            {fromdate&&todate?<span className="supportsubmitbrn">
                                <Button onClick={() =>filterByDates()}  variant="contained" className="enabledatesubmitbtn">
                                    Submit
                               </Button>
                            </span>:
                            <span className="supportsubmitbrn">
                            <Button  variant="outlined" className="disbaledatesubmitbtn">
                                Submit
                           </Button>
                        </span>}
                        </Row>
                        <Row className="supportfiltersecondrowbold">
                            <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterheadingtext">{screenlabels.support.Status}</span>
                        </Row>
                        {filterObject.open ? <FilterRow supportFilter={() => filterRow('open', false, 'status')} imgname={'open_status_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.open_status}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('open', true, 'status')} imgname={'open_status'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.open_status}></FilterRow>}
                        {filterObject.closed ? <FilterRow supportFilter={() => filterRow('closed', false, 'status')} imgname={'cross_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.close_status}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('closed', true, 'status')} imgname={'Cross'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.close_status}></FilterRow>}
                        {filterObject.hold ? <FilterRow supportFilter={() => filterRow('hold', false, 'status')} imgname={'hold_status_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.hold_status}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('hold', true, 'status')} imgname={'hold_status'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.hold_status}></FilterRow>}
                        <Row className="supportfiltersecondrowbold">
                            <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterheadingtext">{screenlabels.support.Category}</span>
                        </Row>
                        {filterObject.user_accounts ? <FilterRow supportFilter={() => filterRow('user_accounts', false, 'category')} imgname={'account_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.User_Accounts}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('user_accounts', true, 'category')} imgname={'account_filter'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.User_Accounts}></FilterRow>}
                        {filterObject.datasets ? <FilterRow supportFilter={() => filterRow('datasets', false, 'category')} imgname={'dataset_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.Datasets}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('datasets', true, 'category')} imgname={'dataset'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.Datasets}></FilterRow>}
                        {filterObject.usage_policy ? <FilterRow supportFilter={() => filterRow('usage_policy', false, 'category')} imgname={'policy_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.Usage_Policy}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('usage_policy', true, 'category')} imgname={'usage_policy'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.Usage_Policy}></FilterRow>}
                        {filterObject.certificate ? <FilterRow supportFilter={() => filterRow('certificate', false, 'category')} imgname={'open_status_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.Certificate}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('certificate', true, 'category')} imgname={'open_status'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.Certificate}></FilterRow>}
                        {filterObject.connectors ? <FilterRow supportFilter={() => filterRow('connectors', false, 'category')} imgname={'connectors_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.Connectors}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('connectors', true, 'category')} imgname={'connectors'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.Connectors}></FilterRow>}
                        {filterObject.others ? <FilterRow supportFilter={() => filterRow('others', false, 'category')} imgname={'others_white'} firstcss={'supportfiltercommorrow'} secondcss={'supportfiltercommontexticon'} thirdcss={'supportfiltercommontext'} label={screenlabels.support.Others}></FilterRow>
                            : <FilterRow supportFilter={() => filterRow('others', true, 'category')} imgname={'others'} firstcss={'supportfiltercommorrowbold'} secondcss={'supportfiltercommontexticonbold'} thirdcss={'supportfiltercommontextbold'} label={screenlabels.support.Others}></FilterRow>}
                    </Col>
                    <Col className="supportSecondCOlumn">
                        <Row>
                            {supportList.map((rowData, index) => (
                                <>{index <= 1 ? <SupportCard margingtop={'supportcard supportcardmargintop0px'} data={rowData} index={index}></SupportCard> : <SupportCard margingtop={'supportcard supportcardmargintop20px'} data={rowData} index={index}></SupportCard>}</>
                            ))}
                        </Row>
                        <Row className="supportcardmargintop20px">
                        </Row>
                        <Row className="marginleft165px">
                            {isShowLoadMoreButton ?
                                <Button onClick={() => loadMoreSupportList()} variant="outlined" className="cancelbtn">
                                    Load More
                           </Button>
                                : <></>}
                        </Row>
                        <Row className="supportcardmargintop20px">
                        </Row>
                    </Col>
                </Row>
            </Row>
            </Row>
        </>
    );
}
export default Support;
