import React, { useContext } from "react";
import { Card, Form, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import CarItem from "./CarItem";

const CarList = observer(() => {
  const { car } = useContext(Context);
  return (
    <div class="carList">
      {/* <Row className="d-flex"> </Row> */}
      {car.cars.map((car) => (
        <CarItem key={car.id} car={car} />
      ))}
    </div>
  );
});
export default CarList;
