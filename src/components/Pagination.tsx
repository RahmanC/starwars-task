import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = (props: PaginationProps) => {
  return (
    <div className="flex justify-start items-center ms-1">
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={props.pageCount}
        onPageChange={props.onPageChange}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        containerClassName="paginationBtn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </div>
  );
};

export default Pagination;
