import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createType } from "../../http/carAPI";
import {
  //   FormControl,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import { useState } from "react";

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };
  return (
    <Modal show={show} onHide={onHide} sixe="lg" centered>
      <ModalDialog>
        <ModalHeader>
          <ModalTitle>ADD TYPE </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormControl
              placeholder="Enter a Type name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={addType}>
            Close
          </Button>
          <Button variant="primary" onClick={addType}>
            Save changes
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  );
};
export default CreateType;
