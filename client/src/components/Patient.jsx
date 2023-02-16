import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Card, Form } from "react-bootstrap";
import Modal from "./Modal";

import Axios from "axios";

import { useForm } from "react-hook-form";

const Patient = () => {
  const { register, handleSubmit } = useForm();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [patients, setPatients] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);

    const config = {
      method: "post",
      url: "http://localhost:5000/api/doctor/add-patient",
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...data, docId: "63ed1fc2cb3c91e261abf2d0" },
    };

    const result = await Axios(config);
    console.log(result.data);
    setPatients((prev) => [...prev, data]);
    setLoading(false);
    handleClose()

    try {
    } catch (error) {
      alert("something went wrong!");
    }
  };

  const fetchPatients = async () => {
    const config = {
      method: "post",
      url: "http://localhost:5000/api/doctor/patients-by-doc",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        docId: "63ed1fc2cb3c91e261abf2d0",
      },
    };

    const result = await Axios(config);
    setPatients(result.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <main className="mt-5 pt-4 mx-5">
      <br />
      <Row>
        <Col>
          <Button onClick={() => handleShow()}>Add Patient +</Button>
        </Col>
        <Modal
          title="Add Patient"
          close={handleClose}
          show={show}
          handleClose={handleClose}
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control {...register("firstName")} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control {...register("lastName")} type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control {...register("email")} type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone no</Form.Label>
              <Form.Control {...register("phoneNo")} type="text" />
            </Form.Group>

            <Button variant="primary" type="submit">
              {loading ? "Adding Patient" : "Submit"}
            </Button>
          </Form>
        </Modal>
        <h2 className="mt-2">Patients</h2>
        {patients?.length === 0 ? (
          ""
        ) : (
          <Card className="p-5 my-3 mx-2 d-flex align-items-center justify-content-between gap-2 flex-wrap flex-row">
            {patients?.map((p) => (
              <Card key={p?._id} style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>{p?.firstName + " " + p?.lastName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {p?.email + "," + p?.phoneNo}
                  </Card.Subtitle>
                  <Card.Text>Condition Normal</Card.Text>
                  <Card.Link href="#">More Details</Card.Link>
                  <Card.Link href="#">Chat</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </Card>
        )}
      </Row>
    </main>
  );
};

export default Patient;
