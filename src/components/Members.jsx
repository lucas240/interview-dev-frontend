import React, { useState, useEffect } from "react";
import axios from "axios";

function Members() {
  const [members, setMembers] = useState([]);
  //   const [value, setValue] = useState("");

  const getMembers = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    setMembers(res.data);
  };

  //   const createMember = () => {
  //     axios
  //       .post(`${process.env.REACT_APP_API_URL}/members`, { content: value })
  //       .then((res) => {
  //         getMembers();
  //       });
  //   };

  useEffect(() => {
    getMembers();
  }, []);

  return (
    <>
      <h4>les gens de l'équipage</h4>
      {/* <FormGroup>
        <Label for="Text">Write your member:</Label>
        <Input
          type="textarea"
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
      </FormGroup> */}
      {members.map((member) => {
        return <p key={member.id}>{member.name}</p>;
      })}
    </>
  );
}

export default Members;
