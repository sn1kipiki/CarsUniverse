import {
  FormControl,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import { createBrand } from "../../http/carAPI";
import { useState } from "react";

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = useState("");
  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };
  return (
    <Modal show={show} onHide={onHide} sixe="lg" centered>
      <ModalDialog>
        <ModalHeader>
          <ModalTitle>ADD BRAND</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormControl
              placeholder="Enter a brand name"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={addBrand}>
            Save changes
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  );
};
export default CreateBrand;
