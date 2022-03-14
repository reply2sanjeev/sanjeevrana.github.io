import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiWindows,
  SiPowershell,
  SiJenkins,
  SiAzuredevops,
  SiGitlab,
  SiDocker,
  SiGnubash,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowershell />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
	  <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
    </Row>
  );
}

export default Toolstack;
