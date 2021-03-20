/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  setCurrentPage,
  setPostsPerPage,
}: any) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const renderPageNumbers = pageNumbers.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li key={number} onClick={() => paginate(number)} className="nav-item">
          <a
            className={`nav-item nav-link ${
              currentPage === number ? "active" : null
            }`}
          >
            {number}
          </a>
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  // Increment Button
  let pageIncrementBtn = null;
  if (pageNumbers.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <li>
        <button
          onClick={handleNextBtn}
          className="btn btn-outline-dark ml-1"
          disabled={
            currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
          }
        >
          {" "}
          &hellip;{" "}
        </button>
      </li>
    );
  }

  // Decrement Button
  let pageDecrementBtn = null;
  if (pageNumbers.length >= 1) {
    pageDecrementBtn = (
      <li>
        <button
          onClick={handlePrevBtn}
          className="btn btn-outline-dark mr-1"
          disabled={currentPage === pageNumbers[0] ? true : false}
        >
          &hellip;
        </button>
      </li>
    );
  }

  const handleLoadMore = () => {
    setPostsPerPage(postsPerPage + 5);
  };

  return (
    <nav>
      <ul className="pagination nav nav-tabs">
        <li>
          <button
            className="btn btn-outline-primary mr-1"
            onClick={handlePrevBtn}
            disabled={currentPage === pageNumbers[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            className="btn btn-outline-primary ml-1"
            onClick={handleNextBtn}
            disabled={
              currentPage === pageNumbers[pageNumbers.length - 1] ? true : false
            }
          >
            Next
          </button>
        </li>

        <li>
          <button onClick={handleLoadMore} className="btn btn-primary ml-1">
            Load More
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
