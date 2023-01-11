import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandBar from "../components/BrandBar";
import CarList from "../components/CarList";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { fetchBrands, fetchTypes, fetchCars } from "../http/carAPI";
import Pages from "../components/Pages";
const Catalog = observer(() => {
  const { car } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => car.setTypes(data));
    fetchBrands().then((data) => car.setBrands(data));
    fetchCars(null, null, 1, 9).then((data) => {
      car.setCars(data.rows);
      car.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchCars(car.selectedType.id, car.selectedBrand.id, car.page, 9).then(
      (data) => {
        car.setCars(data.rows);
        car.setTotalCount(data.count);
      }
    );
  }, [car.page, car.selectedType, car.selectedBrand]);

  return (
    <div class="wrapper">
      <Container>
        <Row className="mt-2">
          <Col md={2}>
            <TypeBar />
          </Col>
          <Col md={10}>
            <BrandBar />
            <CarList />
            <Pages />
          </Col>
        </Row>
      </Container>
    </div>
  );
});
export default Catalog;
