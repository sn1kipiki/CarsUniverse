import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Col, Row, Container, Image, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneCars } from "../http/carAPI";

const CarPage = () => {
  const [car, setCar] = useState({ info: [{}] });
  const { id } = useParams();
  // console.log(params);
  let ready;
  useEffect(() => {
    fetchOneCars(id).then((data) => setCar(data));
  }, []);

  return (
    <div class="wrapper">
      <Container className="mt-3">
        <div class="carPage__top">
          <div class="carPage__left">
            <Image
              width={400}
              height={225}
              src={process.env.REACT_APP_API_URL + car.img}
              className="mt-4"
            />
            <div class="carPage_description">
              {car.info.map((info) => (
                <p key={info.id}>
                  {info.title}: {info.description}{" "}
                </p>
              ))}
            </div>
          </div>
          <div class="carPage__info">
            <p class="carPage__name">{"Name:  " + car.name}</p>
            <p class="carPage__price">{"Rental price:  " + car.price + "$"}</p>
            <Button>Order car</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default CarPage;
