import React, { useContext } from "react";
import { Card, Form } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const TypeBar = observer(() => {
  const { car } = useContext(Context);
  return (
    <Form style={{ display: "flex" }} className="mb-1">
      <Card
        className="d-flex p-2 text-center"
        style={{ cursor: "pointer", width: "33%" }}
        onClick={() => car.setSelectedType("")}
      >
        ALL
      </Card>
      {car.types.map((type) => (
        <Card
          key={type.id}
          className="d-flex p-2 text-center"
          style={{ cursor: "pointer", width: "33%" }}
          onClick={() => car.setSelectedType(type)}
          border={type.id === car.selectedType.id ? "danger" : "ligth"}
        >
          {type.name}
        </Card>
      ))}
    </Form>
  );
});
export default TypeBar;
