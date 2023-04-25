import React from "react";
import { Container } from "react-bootstrap";
import ParticipantFormNew from "../../Components/Card/ParticipantForm/ParticipantFormNew";
// import ParticipantFormNew from "../../Components/Card/ParticipantFormNew/ParticipantFormNew";

const AddParticipantNew = (props) => {
  return (
    <Container>
      <ParticipantFormNew userType={props.userType} />
    </Container>
  );
};

export default AddParticipantNew;
