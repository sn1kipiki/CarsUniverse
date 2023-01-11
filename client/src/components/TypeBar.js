import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { ListGroup, ListGroupItem } from "react-bootstrap";
const BrandBar = observer(() => {
  const { car } = useContext(Context);
  return (
    <ListGroup>
      <ListGroup.Item
        style={{ cursor: "pointer" }}
        onClick={() => car.setSelectedBrand("")}
      >
        ALL
      </ListGroup.Item>
      {car.brands.map((brand) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          active={brand.id === car.selectedBrand.id}
          onClick={() => car.setSelectedBrand(brand)}
          key={brand.id}
        >
          {brand.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});
export default BrandBar;
