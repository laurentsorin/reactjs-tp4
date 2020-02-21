import React, { useState, useEffect } from "react";
import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const Modal = props => {
  const [modal, setModal] = useState(false);

  useEffect(() => setModal(props.open), []);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add item</ModalHeader>
        <ModalBody>
          <input type="text" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Add
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Modal;
