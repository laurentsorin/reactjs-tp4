import React, { useState } from "react";
import { Button, Col, Input, Row } from "reactstrap";

const Form = props => {
  const [name, setName] = useState("");

  const addItem = () => {
    props.addItem(name);
    setName("");
  };

  const updateName = value => {
    setName(value);
  };

  return (
    <Row>
      <Col sm={9}>
        <Input
          type="text"
          onChange={e => updateName(e.target.value)}
          value={name}
        />
      </Col>
      <Col sm={3}>
        <Button
          onClick={addItem}
          disabled={name ? false : true}
          color="primary"
        >
          Add item{" "}
        </Button>
      </Col>
    </Row>
  );
};

export default Form;
