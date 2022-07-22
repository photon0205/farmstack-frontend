import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import labels from '../../Constants/labels';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import $ from 'jquery';
import FilterCheckBox from '../../Components/Datasets/FilterCheckBox';
import { SearchSharp } from '@mui/icons-material';

export default function DataSetFilter(props) {
    const [screenlabels, setscreenlabels] = useState(labels['en']);


  const filterObject = props.filterObject
  return (
    <div>
        <Row className="supportfilterfirstrow">
            <Col className='supportfiltertext'>
            <span className="fontweight600andfontsize14pxandcolor3A3A3A" >{screenlabels.dataset.filter}</span>
            </Col>
            
            <Col className='supportfiltertext'>
            <span className="fontweight600andfontsize14pxandcolor3A3A3A" >{screenlabels.dataset.filter}</span>
            </Col>
        </Row>
        {filterObject.all ? 
        // <Row onClick={() => props.filterRow('all', false, 'all')} className="supportfiltersecondrow">
        <Row onClick={() => props.getAllDataSets()} className="supportfiltersecondrow">
            <span className="supportallicon">
                <img
                    src={require('../../Assets/Img/filter.svg')}
                    alt="new"
                />
            </span>
            <span className="fontweight600andfontsize14pxandcolorFFFFFF supportalltexticon">{screenlabels.support.all}</span>
        </Row> :
        // <Row onClick={() => props.filterRow('all', true, 'all')} className="supportfiltersecondrowbold">
        <Row onClick={() => props.getAllDataSets()} className="supportfiltersecondrowbold">
            <span className="supportallicon">
                <img
                    src={require('../../Assets/Img/filter_bold.svg')}
                    alt="new"
                />
            </span>
            <span className="fontweight600andfontsize14pxandcolor3D4A52 supportalltexticon">{screenlabels.support.all}</span>
        </Row>}
        <Row className={props.secondrow ? 'supportfilterthirdrowhighlight' : "supportfilterthirdrow"}>
          <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterthirdrowheadingtext">{screenlabels.support.date}</span>
          <span className="supportcardfromdate">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                      inputFormat="dd/MM/yyyy"
                      disableFuture
                      label="From Date *"
                      value={props.fromdate}
                      onChange={(newValue) => {
                          props.settodate(null)
                          props.setfromdate(newValue);
                          setTimeout(() => {
                              $(".supportcardtodate input.MuiInputBase-input").attr("disabled", "disabled");
                          }, 100)
                      }}
                      renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
          </span>
          <span className="supportcardtodate">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                      inputFormat="dd/MM/yyyy"
                      disabled={props.fromdate ? false : true}
                      disableFuture
                      label="To Date *"
                      minDate={props.fromdate}
                      value={props.todate}
                      onChange={(newValue) => {
                          props.settodate(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                  />
              </LocalizationProvider>
          </span>
          {props.fromdate && props.todate ? <span className="supportsubmitbrn">
              <Button onClick={() => props.filterByDates()} variant="contained" className="enabledatesubmitbtn">
                  Submit
          </Button>
          </span> :
              <span className="supportsubmitbrn">
                  <Button variant="outlined" className="disbaledatesubmitbtn">
                      Submit
                  </Button>
              </span>}
      </Row>
      <Row className="supportfiltersecondrowbold">
          <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterheadingtext">{screenlabels.dataset.geography}</span>
      </Row>
      <Row className="supportfiltersecondrowbold">
          <TextField 
            style={{ "width":"100%", "margin-left":"10px","margin-right":"10px","text-align": "left", color: '#3D4A52'}}
            id="filled-basic"
            variant="filled"
            label={screenlabels.dataset.search}
            onChange={(e) => props.handleGeoSearch(e)}
          />
      </Row>
      <Row>
        {props.geographyList && props.geographyList.map((geography) => (
            <FilterCheckBox
                label={geography}
                checked={props.geoCheckStateList[props.geoMasterList.findIndex((geo)=> geo == geography)]}
                handleCheckListFilterChange={() => props.handleCheckListFilterChange("geography",props.geoMasterList.findIndex((geo)=> geo == geography))}
            />
        ))}  
      </Row>
      
      <Row className="supportfiltersecondrowbold">
          <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterheadingtext">{screenlabels.dataset.age}</span>
      </Row>
      <Row>
        {props.ageList && props.ageList.map((age) => (
            <FilterCheckBox
                label={age}
                checked={props.ageCheckStateList[props.ageMasterList.findIndex((a)=> a == age)]}
                handleCheckListFilterChange={() => props.handleCheckListFilterChange("age",props.ageMasterList.findIndex((a)=> a == age))}
            />
        ))}  
      </Row>
      <Row className="supportfiltersecondrowbold">
          <span className="fontweight600andfontsize14pxandcolor3D4A52 supportfilterheadingtext">{screenlabels.dataset.crop}</span>
      </Row>
      <Row className="supportfiltersecondrowbold">
          <TextField 
            style={{ "width":"100%", "margin-left":"10px","margin-right":"10px","text-align": "left", color: '#3D4A52'}}
            id="filled-basic"
            variant="filled"
            label={screenlabels.dataset.search}
            onChange={(e) => props.handleCropSearch(e)}
          />
      </Row>
      <Row>
        {props.cropList && props.cropList.map((crop) => (
            <FilterCheckBox
                label={crop}
                checked={props.cropCheckStateList[props.cropMasterList.findIndex((c)=> c == crop)]}
                handleCheckListFilterChange={() => props.handleCheckListFilterChange("crop",props.cropMasterList.findIndex((c)=> c == crop))}
            />
        ))}  
      </Row>
      
    </div>
  )
}