import React, { useState } from "react";
import s from "./Paginator.module.css";

type PropsType = {
  totalItemsCount: number
  itemsCountOnPage: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number,
}

const Paginator: React.FC<PropsType> = ({
  totalItemsCount,
  itemsCountOnPage,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {

  let pagesCount: number = Math.ceil(totalItemsCount / itemsCountOnPage);
  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = leftPortionPageNumber + portionSize - 1;

  return (
    <div>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
          <span
            key={p}
            className={
              currentPage === p ? s.active + " " + s.pageNumber : s.pageNumber
            }
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}

      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Paginator;
