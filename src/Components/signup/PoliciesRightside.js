import React, { useState } from "react";
import "./PoliciesRightside.css";
import RichTextEditor from "react-rte";
import { FileUploader } from "react-drag-drop-files";
import UploadOrgLogo from "./UploadOrgLogo";
import Button from "@mui/material/Button";

import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import UrlConstant from "../../Constants/UrlConstants";
import CancelIcon from "@mui/icons-material/Cancel";

export default function PoliciesRightside() {
  const [govLawdesc, setgovLawdesc] = useState("");
  const [govLawfile, setgovLawFile] = useState(null);

  const [warrantiesdesc, setwarrantiesdesc] = useState("");
  const [warrantiesfile, setwarrantiesfile] = useState(null);

  const [liabalitydesc, setliabalitydesc] = useState("");
  const [liabalityfile, setliabalityfile] = useState(null);

  const [privacydesc, setprivacydesc] = useState("");
  const [privacyfile, setprivacyfile] = useState(null);

  const [termdesc, settermdesc] = useState("");
  const [termfile, settermfile] = useState(null);

  const [policiesnextbutton, setpoliciesnextbutton] = useState(false);

  const [editorgovLawValue, setEditorgovLawValue] = React.useState(
    RichTextEditor.createValueFromString(govLawdesc, "html")
  );
  const [editorwarrantiesValue, seteditorwarrantiesValue] = React.useState(
    RichTextEditor.createValueFromString(warrantiesdesc, "html")
  );
  const [editorLiabalityValue, setEditorLiabalityValue] = React.useState(
    RichTextEditor.createValueFromString(liabalitydesc, "html")
  );
  const [editorprivacyValue, setEditorprivacyValue] = React.useState(
    RichTextEditor.createValueFromString(privacydesc, "html")
  );
  const [editortermValue, setEditortermValue] = React.useState(
    RichTextEditor.createValueFromString(termdesc, "html")
  );
  const toolbarConfig = {
    // Optionally specify the groups to display (displayed in the order listed).
    display: [
      "INLINE_STYLE_BUTTONS",
      "BLOCK_TYPE_BUTTONS",
      //   "LINK_BUTTONS",
      "BLOCK_TYPE_DROPDOWN",
      //   "HISTORY_BUTTONS",
    ],
    INLINE_STYLE_BUTTONS: [
      { label: "Bold", style: "BOLD", className: "custom-css-class" },
      { label: "Italic", style: "ITALIC" },
      { label: "Underline", style: "UNDERLINE" },
    ],
    BLOCK_TYPE_DROPDOWN: [
      { label: "Normal", style: "unstyled" },
      { label: "Heading Large", style: "header-one" },
      { label: "Heading Medium", style: "header-two" },
      { label: "Heading Small", style: "header-three" },
    ],
    BLOCK_TYPE_BUTTONS: [
      { label: "UL", style: "unordered-list-item" },
      { label: "OL", style: "ordered-list-item" },
    ],
  };

  const [govuploadProgress, setgovuploadProgress] = useState(0);
  const [warrantyloadProgress, setwarrantyloadProgress] = useState(0);
  const [liabiltyloadProgress, setliabiltyloadProgress] = useState(0);
  const [privacyProgress, setprivacyProgress] = useState(0);
  const [tosloadProgress, settosloadProgress] = useState(0);

  const fileTypes = ["doc", "pdf"];
  const handlegovLawChange = (value) => {
    setEditorgovLawValue(value);
    setgovLawdesc(value.toString("html"));
    console.log(value.toString("html"));
  };
  const handlegovLawFileChange = async (file) => {
    setgovLawFile(file);
    console.log(file);

    const options = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded);
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setgovuploadProgress(percent);
      },
    };

    var bodyFormData = new FormData();
    bodyFormData.append("governing_law", file);

    console.log("branding data", bodyFormData);
    let url = UrlConstant.base_url + UrlConstant.policies_files_upload;

    if (file.size < 2097152) {
      await axios
        .post(url, bodyFormData, options, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("response");
          console.log("governing law details", response.data);
          //   console.log(response.json());
          console.log(response.status);
          if (response.status === 201) {
            // setEmail(false);
            // setError(false);
          } else {
            // setError(true);
          }
        })
        .catch((e) => {
          console.log(e);
          //   setError(true);
        });
    }
  };
  const handlewarrantiesChange = (value) => {
    seteditorwarrantiesValue(value);
    setwarrantiesdesc(value.toString("html"));
    console.log(value.toString("html"));
  };
  const handlewarrantiesFileChange = async (file) => {
    setwarrantiesfile(file);
    console.log(file);

    const options = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded);
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setwarrantyloadProgress(percent);
      },
    };

    var bodyFormData = new FormData();
    bodyFormData.append("warranty", file);

    console.log("warranty", bodyFormData);
    let url = UrlConstant.base_url + UrlConstant.policies_files_upload;

    if (file.size < 2097152) {
      await axios
        .post(url, bodyFormData, options, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("response");
          console.log("warranty", response.data);
          //   console.log(response.json());
          console.log(response.status);
          if (response.status === 201) {
            // setEmail(false);
            // setError(false);
          } else {
            // setError(true);
          }
        })
        .catch((e) => {
          console.log(e);
          //   setError(true);
        });
    }
  };
  const handleliabalityChange = (value) => {
    setEditorLiabalityValue(value);
    setliabalitydesc(value.toString("html"));
    console.log(value.toString("html"));
  };

  const handleliabalityFileChange = async (file) => {
    setliabalityfile(file);
    console.log(file);

    const options = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded);
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setliabiltyloadProgress(percent);
      },
    };

    var bodyFormData = new FormData();
    bodyFormData.append("limitations_of_liabilities", file);

    console.log("limitations_of_liabilities", bodyFormData);
    let url = UrlConstant.base_url + UrlConstant.policies_files_upload;

    if (file.size < 2097152) {
      await axios
        .post(url, bodyFormData, options, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("response");
          console.log("limitations_of_liabilities", response.data);
          //   console.log(response.json());
          console.log(response.status);
          if (response.status === 201) {
            // setEmail(false);
            // setError(false);
          } else {
            // setError(true);
          }
        })
        .catch((e) => {
          console.log(e);
          //   setError(true);
        });
    }
  };
  const handleprivacyChange = (value) => {
    setEditorprivacyValue(value);
    setprivacydesc(value.toString("html"));
    console.log(value.toString("html"));
  };
  const handleprivacyFileChange = async (file) => {
    setprivacyfile(file);
    console.log(file);

    const options = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded);
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        setprivacyProgress(percent);
      },
    };

    var bodyFormData = new FormData();
    bodyFormData.append("privacy_policy", file);

    console.log("privacy_policy", bodyFormData);
    let url = UrlConstant.base_url + UrlConstant.policies_files_upload;

    if (file.size < 2097152) {
      await axios
        .post(url, bodyFormData, options, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("response");
          console.log("privacy_policy", response.data);
          //   console.log(response.json());
          console.log(response.status);
          if (response.status === 201) {
            // setEmail(false);
            // setError(false);
          } else {
            // setError(true);
          }
        })
        .catch((e) => {
          console.log(e);
          //   setError(true);
        });
    }
  };

  const handletermChange = (value) => {
    setEditortermValue(value);
    settermdesc(value.toString("html"));
    console.log(value.toString("html"));
  };

  const handletermFileChange = async (file) => {
    settermfile(file);
    console.log(file);

    const options = {
      onUploadProgress: (progressEvent) => {
        console.log(progressEvent.loaded);
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        settosloadProgress(percent);
      },
    };

    var bodyFormData = new FormData();
    bodyFormData.append("tos", file);

    console.log("tos", bodyFormData);
    let url = UrlConstant.base_url + UrlConstant.policies_files_upload;

    if (file.size < 2097152) {
      await axios
        .post(url, bodyFormData, options, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then((response) => {
          console.log("response");
          console.log("tos", response.data);
          //   console.log(response.json());
          console.log(response.status);
          if (response.status === 201) {
            // setEmail(false);
            // setError(false);
          } else {
            // setError(true);
          }
        })
        .catch((e) => {
          console.log(e);
          //   setError(true);
        });
    }
  };

  const handlePoliciesSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <p className="policiesHeader">Policies</p>
      <form noValidate autoComplete="off" onSubmit={handlePoliciesSubmit}>
        <div className="governingdes">
          <p className="governingtitle">Governing Laws</p>
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={editorgovLawValue}
            onChange={handlegovLawChange}
            required
            id="body-text"
            name="bodyText"
            type="string"
            multiline
            variant="filled"
            style={{
              minHeight: 410,
              width: 420,
              border: "1px solid black",
              zIndex: 4,
            }}
          />
        </div>
        <div className="filegovlaw">
          <FileUploader
            handleChange={handlegovLawFileChange}
            name="file"
            types={fileTypes}
            children={
              <UploadOrgLogo
                uploaddes="Supports: .doc, .pdf 2MB file size"
                uploadtitle="Upload Governing Laws (Optional)"
              />
            }
            // maxSize={2}
          />
          <p className="filename">
            {govLawfile
              ? govLawfile.size
                ? `File name: ${govLawfile.name}`
                : ""
              : "No file uploaded yet"}
          </p>
          <p className="oversizemb">
            {govLawfile != null && govLawfile.size > 2097152
              ? "File uploaded is more than 2MB!"
              : ""}
          </p>
          <div className="govlawprogress">
            <LinearProgress
              variant="determinate"
              value={govuploadProgress}
              color="success"
            />
            <p className="govupper">{govuploadProgress}%</p>
          </div>
          <p className="govupclose">
            <CancelIcon />
          </p>
        </div>
        <div className="warrantiesdes">
          <p className="warrantiestitle">Warranties</p>
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={editorwarrantiesValue}
            onChange={handlewarrantiesChange}
            required
            id="body-text"
            name="bodyText"
            type="string"
            multiline
            variant="filled"
            style={{
              minHeight: 410,
              width: 420,
              border: "1px solid black",
              zIndex: 4,
            }}
          />
        </div>
        <div className="filewarranties">
          <FileUploader
            handleChange={handlewarrantiesFileChange}
            name="file"
            types={fileTypes}
            children={
              <UploadOrgLogo
                uploaddes="Supports: .doc, .pdf 2MB file size"
                uploadtitle="Upload Limitation of Liabilities (Optional)"
              />
            }
            //   maxSize={2}
          />
          <p className="filename">
            {warrantiesfile
              ? warrantiesfile.size
                ? `File name: ${warrantiesfile.name}`
                : ""
              : "No file uploaded yet"}
          </p>
          <p className="oversizemb">
            {warrantiesfile != null && warrantiesfile.size > 2097152
              ? "File uploaded is more than 2MB!"
              : ""}
          </p>

          <div className="warrantyprogress">
            <LinearProgress
              variant="determinate"
              value={warrantyloadProgress}
              color="success"
            />
            <p className="warrantyper">{warrantyloadProgress}%</p>
          </div>
          <p className="warrantyclose">
            <CancelIcon />
          </p>
        </div>

        <div className="liabiltydes">
          <p className="liabiltytitle">Limitation of Liabilities</p>
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={editorLiabalityValue}
            onChange={handleliabalityChange}
            required
            id="body-text"
            name="bodyText"
            type="string"
            multiline
            variant="filled"
            style={{
              minHeight: 410,
              width: 420,
              border: "1px solid black",
              zIndex: 4,
            }}
          />
        </div>
        <div className="fileliabilty">
          <FileUploader
            handleChange={handleliabalityFileChange}
            name="file"
            types={fileTypes}
            children={
              <UploadOrgLogo
                uploaddes="Supports: .doc, .pdf 2MB file size"
                uploadtitle="Upload Warranties (Optional)"
              />
            }
            //   maxSize={2}
          />
          <p className="filename">
            {liabalityfile
              ? liabalityfile.size
                ? `File name: ${liabalityfile.name}`
                : ""
              : "No file uploaded yet"}
          </p>
          <p className="oversizemb">
            {liabalityfile != null && liabalityfile.size > 2097152
              ? "File uploaded is more than 2MB!"
              : ""}
          </p>
          <div className="liabiltyprogress">
            <LinearProgress
              variant="determinate"
              value={liabiltyloadProgress}
              color="success"
            />
            <p className="liabiltyper">{liabiltyloadProgress}%</p>
          </div>
          <p className="liabiltyclose">
            <CancelIcon />
          </p>
        </div>

        <div className="privacydes">
          <p className="privacytitle">Privacy Policy</p>
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={editorprivacyValue}
            onChange={handleprivacyChange}
            required
            id="body-text"
            name="bodyText"
            type="string"
            multiline
            variant="filled"
            style={{
              minHeight: 410,
              width: 420,
              border: "1px solid black",
              zIndex: 4,
            }}
          />
        </div>
        <div className="fileprivacy">
          <FileUploader
            handleChange={handleprivacyFileChange}
            name="file"
            types={fileTypes}
            children={
              <UploadOrgLogo
                uploaddes="Supports: .doc, .pdf 2MB file size"
                uploadtitle="Upload Privacy Policy (Optional)"
              />
            }
            //   maxSize={2}
          />
          <p className="filename">
            {privacyfile
              ? privacyfile.size
                ? `File name: ${privacyfile.name}`
                : ""
              : "No file uploaded yet"}
          </p>
          <p className="oversizemb">
            {privacyfile != null && privacyfile.size > 2097152
              ? "File uploaded is more than 2MB!"
              : ""}
          </p>
          <div className="privacyprogress">
            <LinearProgress
              variant="determinate"
              value={privacyProgress}
              color="success"
            />
            <p className="privacyper">{privacyProgress}%</p>
          </div>
          <p className="privacyclose">
            <CancelIcon />
          </p>
        </div>

        <div className="termdes">
          <p className="termtitle">Terms of Use</p>
          <RichTextEditor
            toolbarConfig={toolbarConfig}
            value={editortermValue}
            onChange={handletermChange}
            required
            id="body-text"
            name="bodyText"
            type="string"
            multiline
            variant="filled"
            style={{
              minHeight: 410,
              width: 420,
              border: "1px solid black",
              zIndex: 4,
            }}
          />
        </div>
        <div className="termprivacy">
          <FileUploader
            handleChange={handletermFileChange}
            name="file"
            types={fileTypes}
            children={
              <UploadOrgLogo
                uploaddes="Supports: .doc, .pdf 2MB file size"
                uploadtitle="Upload Terms of Use (Optional)"
              />
            }
            //   maxSize={2}
          />
          <p className="filename">
            {termfile
              ? termfile.size
                ? `File name: ${termfile.name}`
                : ""
              : "No file uploaded yet"}
          </p>
          <p className="oversizemb">
            {termfile != null && termfile.size > 2097152
              ? "File uploaded is more than 2MB!"
              : ""}
          </p>
          <div className="tosprogress">
            <LinearProgress
              variant="determinate"
              value={tosloadProgress}
              color="success"
            />
            <p className="tosper">{tosloadProgress}%</p>
          </div>
          <p className="tosclose">
            <CancelIcon />
          </p>
        </div>

        <div>
          <Button variant="contained" className="policiesbtn" type="submit">
            <span className="signupbtnname">Next</span>
          </Button>
          {/* {policiesnextbutton ? (
            <Button variant="contained" className="policiesbtn" type="submit">
              <span className="signupbtnname">Next</span>
            </Button>
          ) : (
            <Button variant="outlined" disabled className="disablepoliciesbtn">
              Next
            </Button>
          )} */}
        </div>
        <div>
          <Button
            variant="outlined"
            className="finishlaterpoliciesbtn"
            type="button">
            Finish Later
          </Button>
        </div>
      </form>
    </div>
  );
}
