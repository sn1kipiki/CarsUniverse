import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateCar from "../components/modals/CreateCar";
const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [carVisible, setCarVisible] = useState(false);
  return (
    <div class="wrapper">
      <Container className="d-flex flex-column">
        <Button
          variant="outline-dark"
          className="mt-3 p-2"
          onClick={() => setTypeVisible(true)}
        >
          Add type
        </Button>
        <Button
          variant="outline-dark"
          className="mt-3 p-2"
          onClick={() => setBrandVisible(true)}
        >
          Add brand
        </Button>
        <Button
          variant="outline-dark"
          className="mt-3 p-2"
          onClick={() => setCarVisible(true)}
        >
          Add car
        </Button>
        <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        <CreateBrand
          show={brandVisible}
          onHide={() => setBrandVisible(false)}
        />
        <CreateCar show={carVisible} onHide={() => setCarVisible(false)} />
      </Container>
    </div>
  );
};
export default Admin;
