import React, { useState, useEffect } from "react";
import { Button, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MyModal = props => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState({ name: '', id: null });

  useEffect(() => setModal(props.open), [props.open]);

  const toggle = () => {
    props.onClose();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addItem(item);
    props.onClose();
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle}>Add item</ModalHeader>
          <ModalBody>
            <input type="text" onChange={e => setItem({ ...item, name: e.target.value })} value={item.name} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Add</Button>
            {" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
          </Button>
          </ModalFooter>
        </form>
      </Modal>
    </div >
  );
};

export default MyModal;
