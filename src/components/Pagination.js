import React from "react";
import './Pagination.css';
import { Pagination } from "react-bootstrap";

function Pages(props) {
  let hasNextPage = true;

  function adjustPage(amount) {
    return props.page + amount;
  };

  if(props.response.length < 10){
    hasNextPage = false;
  }

  return (
    <Pagination class="pagination">
      {props.page > 1 && <Pagination.Prev onClick={(e) => props.handleSubmit(e, adjustPage(-1))} />}
      {<Pagination.Item>{props.page}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={(e) => props.handleSubmit(e, adjustPage(1))} />}
    </Pagination>
  );
}

export default Pages;