import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Pagination } from "react-bootstrap";
import { Context } from "..";

const Pages = observer(() => {
  const { car } = useContext(Context);
  const pageCount = Math.ceil(car.totalCount / car.limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-1 mb-0">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          active={car.page === page}
          onClick={() => car.setPage(page)}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
});

export default Pages;
