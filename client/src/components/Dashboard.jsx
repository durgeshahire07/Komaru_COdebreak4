import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

let colors = ["Primary", "Success", "Danger", "Light"];

const Dashboard = () => {
  return (
    <main className="mt-5 ">
      <Container fluid>
        <Row>
          <Col className="fw-bold mt-3 fs-3" md={12}>
            Dashboard
          </Col>
        </Row>
        <Row>
          {colors.map((variant) => (
            <>
              <Col sm={6} md={3} className="mb-3">
                <Card
                  bg={variant.toLowerCase()}
                  key={variant}
                  text={variant.toLowerCase() === "light" ? "dark" : "white"}
                  className="mb-3 h-100"
                >
                  <Card.Header>Header</Card.Header>
                  <Card.Body>
                    <Card.Title>{variant} Card Title </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </>
          ))}
        </Row>
        {/* charts here */}
        <Row>
          <Col md={6}>
            <Card>
              <Card.Header>Charts</Card.Header>
              <Card.Body>
                <canvas className="chart" width="400" height="200"></canvas>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>Charts</Card.Header>
              <Card.Body>
                <canvas className="chart" width="400" height="200"></canvas>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Dashboard;
