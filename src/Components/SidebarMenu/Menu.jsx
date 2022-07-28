import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LoginPanel } from "../index";
import { DropDown } from "./index";
import "./Menu.scss";

const Menu = () => {
  const [toggleLoginPanel, settoggleLoginPanel] = useState(false);
  const showLoginPanel = () => {
    settoggleLoginPanel(!toggleLoginPanel);
  };

  return (
    <>
      <div className="menuContainer">
        <Container fluid>
          <Row>
            <Col xs={3}>
              <DropDown title="MENU" showLoginPanel={showLoginPanel} />
            </Col>
            <Col xs={3}>
              <DropDown title="SHOP" showLoginPanel={showLoginPanel} />
            </Col>
            <Col xs={3}>
              <DropDown title="GAME" showLoginPanel={showLoginPanel} />
            </Col>
            <Col xs={3}>
              <DropDown title="ABOUT US" showLoginPanel={showLoginPanel} />
            </Col>
          </Row>
        </Container>
        <LoginPanel
          toggleLoginPanel={toggleLoginPanel}
          showLoginPanel={showLoginPanel}
        />
      </div>
    </>
  );
};

export default Menu;
