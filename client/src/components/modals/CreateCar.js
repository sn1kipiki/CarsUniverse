import { Col, Row, Dropdown, FormControl } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import {
  //   FormControl,
  ModalBody,
  ModalDialog,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

import { useContext, useState, useEffect } from "react";
import { Context } from "../..";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { createCar, fetchBrands, fetchTypes } from "../../http/carAPI";
import { remove } from "mobx";
import { observer } from "mobx-react-lite";
const CreateCar = observer(({ show, onHide }) => {
  const { car } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetchTypes().then((data) => car.setTypes(data));
    fetchBrands().then((data) => car.setBrands(data));
  }, []);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };

  const selectFile = (e) => {
    setFile(e.target.files[0]);
  };

  const addCar = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", car.selectedBrand.id);
    formData.append("typeId", car.selectedType.id);
    formData.append("info", JSON.stringify(info));
    createCar(formData).then((data) => onHide());
  };

  return (
    <Modal show={show} onHide={onHide} sixe="lg" centered>
      <ModalDialog>
        <ModalHeader>
          <ModalTitle>Car</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <Dropdown className="mb-3">
              <DropdownToggle>
                {car.selectedType.name || "Select type"}
              </DropdownToggle>
              <DropdownMenu>
                {car.types.map((type) => (
                  <DropdownItem
                    onClick={() => car.setSelectedType(type)}
                    key={type.id}
                  >
                    {type.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown className="mb-3">
              <DropdownToggle>
                {car.selectedBrand.name || "Select brand"}
              </DropdownToggle>
              <DropdownMenu>
                {car.brands.map((brand) => (
                  <DropdownItem
                    onClick={() => car.setSelectedBrand(brand)}
                    key={brand.id}
                  >
                    {brand.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <FormControl
              calassName="mt-2"
              placeholder="Enter car name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <FormControl
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              calassName="mt-2"
              placeholder="Enter car price"
              type="number"
            />

            <FormControl calassName="mt-2" type="file" onChange={selectFile} />
            <hr />
            <Button variant="outline-dark" onClick={addInfo}>
              Add new property
            </Button>
            {info.map((i) => (
              <Row className="mt-3" key={i.number}>
                <Col md={4}>
                  <FormControl
                    placeholder="enter property name"
                    value={i.title}
                    onChange={(e) =>
                      changeInfo("title", e.target.value, i.number)
                    }
                  />
                </Col>
                <Col md={4}>
                  <FormControl
                    placeholder="enter property description"
                    value={i.description}
                    onChange={(e) =>
                      changeInfo("description", e.target.value, i.number)
                    }
                  />
                </Col>
                <Col md={4}>
                  <Button
                    variant="outline-danger"
                    onClick={() => removeInfo(i.number)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            ))}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={addCar}>
            Save changes
          </Button>
        </ModalFooter>
      </ModalDialog>
    </Modal>
  );
});
export default CreateCar;
