import React, { useState, useEffect } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import Chart from "./Chart.jsx";
import Table from "./Table.jsx";
import { FcCollaboration } from "react-icons/fc";
import { RiSpaceShipFill } from "react-icons/ri";
import { MdFreeBreakfast } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Dashboard = () => {
  const [show, setShow] = useState(true);
  const [msg, setMsg] = useState("");
  const [senderMsg, setSenderMsg] = useState();
  const [responseMsg,setResponseMsg] = useState();

  const data = {
    labels: ["Critical", "Severe", "Acute", "Mild"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "#ffcc99",
          "#ffdd99",
          "rgba(54, 162, 235, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <main className="mt-5 mx-5">
      <Container fluid>
        <Row style={{ margin: "3rem" }}>
         
        </Row>
        <Row>
          <Col md={6}>
            <Card
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ height: "20px" }}>
                <p style={{ fontWeight: "bold", fontSize: "1.5rem" }}>Stats</p>
              </div>
              <Card.Body style={{ width: "400px" }}>
                <Chart data={data} />
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>Patient Info</Card.Header>
              <Card.Body>
                <Table />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginBottom: "3rem" }}>
          <Col sm={6} md={3} className="mt-5">
            <Card
              key="1"
              text="dark"
              className="mb-3 h-100 cards"
              style={{ backgroundColor: "#99e6ff" }}
            >
              <Card.Header>
                <RiSpaceShipFill size={25} /> Supplies
              </Card.Header>
              <Card.Body>
                <Card.Title>Resource Management</Card.Title>
                <Card.Text>
                  Get all the resource constraints when treating critical
                  diseases. This includes shortage of medical supplies, lack of
                  staff, or limited access to specialized equipment or
                  facilities.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={3} className="mt-5">
            <Card

              key="2"
              text="dark"
              className="mb-3 h-100 cards"
              style={{ backgroundColor: "#adebad" }}
            >
              <Card.Header>
                <FcCollaboration size={25} /> Collab
              </Card.Header>
              <Card.Body>
                <Card.Title>Complexity of treatment</Card.Title>
                <Card.Text>
                  Collaborate with a team of specialists, including surgeons,
                  oncologists, and other healthcare providers, to provide
                  comprehensive care.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={3} className="mt-5">
            <Card
              bg="light"
              key="3"
              text="dark"
              className="mb-3 h-100 cards"
            >
              <Card.Header>
                <MdFreeBreakfast size={22} /> Take a Break
              </Card.Header>
              <Card.Body>
                <Card.Title>Stress Management</Card.Title>
                <Card.Text>
                  Treating critical diseases can be emotionally and physically
                  demanding, which leads to high levels of stress, burnout, and
                  compassion fatigue.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} md={3} className="mt-5">
            <Card
              key="4"
              text="dark"
              className="mb-3 h-100 cards"
              style={{ backgroundColor: "#ff9999" }}
            >
              <Card.Header>
                <BsFillChatDotsFill size={22} /> Chat
              </Card.Header>
              <Card.Body>
                <Card.Title>Communication</Card.Title>
                <Card.Text>
                  Communicating with patients and their families about critical
                  diseases can be difficult, particularly when the prognosis is
                  poor. Medical professionals may need to help their patients
                  understand complex medical information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div
          className="chat-bot"
          style={{
            position: "fixed",
            bottom: 30,
            left: "90%",
            backgroundColor: "white",
            borderRadius: "100%",
            padding: "1rem",
            boxShadow: "7px 5px 38px 0px rgba(153,153,153,1)",
          }}
          onClick={() => setShow(!show)}
        >
          <FaRobot size={50} color={"#008ae6"} />
        </div>
        <div
          className={"chat-bot-container"}
          style={{
            position: "fixed",
            display: show ? "block" : "none",
            left: "62%",
            bottom: 130,
            backgroundColor: "white",
            height: "70vh",
            width: "65vh",
            borderRadius: "3%",
            // padding: '1rem',
            boxShadow: "9px 7px 91px -14px rgba(59,59,59,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "2px solid #ffffff",
              padding: "0.5rem",
            }}
          >
            {/* hh */}
            <p style={{ color: "#9d9d9d", margin: 0, padding: 0 }}>
              AI-Enabled Chat Bot
            </p>
          </div>
          <div
            style={{
              height: "430px",
              backgroundColor: "#eef3f9",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            <div
              style={{
                position: "relative",
                top: "0",
                left: "48%",
              }}
            >
              {senderMsg ? (
                <div
                  // key={i}
                  style={{
                    backgroundColor: "white",
                    boxShadow: "9px 7px 91px -14px #eef3f9",
                    width: "230px",
                    height: "auto",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  {senderMsg}
                </div>
              ) : null}
            </div>
            <div
              style={{
                position: "relative",
                top: "0",
                left: "1%",
              }}
            >
              {responseMsg ? (
                <div
                  // key={i}
                  style={{
                    backgroundColor: "#4970df",
                    boxShadow: "9px 7px 91px -14px #eef3f9",
                    width: "300px",
                    height: "auto",
                    borderRadius: "10px",
                    padding: "10px",
                    margin: "10px",
                    color: 'white'
                  }}
                >
                  {/* {senderMsg} */}
                  {responseMsg}
                </div>
              ) : null}
            </div>
          </div>
          <div
            style={{
              padding: "1rem",
            }}
          >
            <input
              className="chatbot-input"
              placeholder="Ask me anything..."
              // onChange={(e)=>changeBotTextInput(e)}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
              style={{
                postion: "relative",
                float: "left",
                top: "100px",
                height: "40px",
                border: "none",
                padding: "0.5rem 1rem",
                borderRadius: "40px",
                margin: "0 0.5rem 0 0",
                width: "calc(100% - 52px)",
                backgroundColor: "#dedfed",
                boxShadow: "inset 0 0 0 2px #dedfed",
                fontSize: "14px",
                fontFamily: "Quicksand, sans-serif",
                transition: "0.15s all ease-in-out",
                boxSizing: "border-box",
              }}
            />

            <div
              className="chatbot-btn"
              onClick={() => {
                // const val = [...senderMsg];
                setSenderMsg(msg);
              }}
            >
              <MdSend size={20} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Dashboard;
