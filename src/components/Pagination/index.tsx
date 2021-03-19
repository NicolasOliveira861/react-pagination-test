/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { PagesArea } from "../../pages/Home/styles";

const Pagination = ({ postsPerPage, totalPosts, paginate }: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PagesArea>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </PagesArea>
  );
};

export default Pagination;
