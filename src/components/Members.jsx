import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Members() {
  const [members, setMembers] = useState([]);
  const [value, setValue] = useState("");

  const getMembers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    setMembers(res.data);
  };

  const createMember = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/members`, { name: value })
      .then((res) => {
        getMembers();
      });
  };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <h4>les gens de l'équipage</h4>
      <Col md={6}>
        <FormGroup>
          <Label for="Text">Write your member:</Label>
          <Input
            required
            name="name"
            id="name"
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button
            className="m-2 "
            color="primary"
            onClick={() => {
              createMember();
            }}
          >
            Envoyer
          </Button>
        </FormGroup>
      </Col>
      <Row>
        {members.map((member) => {
          return (
            <Col xs="4" className="text-center">
              <Card key={member.id} className="m-2">
                <CardBody>
                  <p>{member.name}</p>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Members;
