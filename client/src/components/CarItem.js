import React, { useContext } from "react";
import { Col, Card } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import { CAR_ROUTE } from "../utils/consts";
import BrandBar from "./TypeBar";

const CarItem = observer(({ car }) => {
  const navigate = useNavigate();
  // <Col
  //   md={3}
  //   width={320}
  //   height={180}

  // >

  // </Col>
  return (
    <div class="carItem" onClick={() => navigate(CAR_ROUTE + "/" + car.id)}>
      <Card style={{ cursor: "pointer" }} border="light">
        <Image
          width={320}
          height={180}
          src={process.env.REACT_APP_API_URL + car.img}
        />
        <div>
          {/* <div>{brand.name}</div> */}
          <div class="carName">{car.name}</div>
        </div>
      </Card>
    </div>
  );
});
export default CarItem;
