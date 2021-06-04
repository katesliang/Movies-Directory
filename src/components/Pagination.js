import React from "react";
import './Pagination.css';
import { Pagination } from "react-bootstrap";

function MPagination(props) {
  function adjustPage(amount){
    return props.page + amount;
  };

  return (
    <Pagination class = "pagination">
      {props.page > 1 && <Pagination.Prev onClick={(e) => props.handleSubmit(e, adjustPage(-1))} />}
      {<Pagination.Item>{props.page}</Pagination.Item>}
      {<Pagination.Next onClick={(e) => props.handleSubmit(e, adjustPage(1))} />}
    </Pagination>
  );
}

export default MPagination;