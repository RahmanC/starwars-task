"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import Pagination from "../Pagination";

const Table = ({ tableHeader, columnData, rowData, loading }: TableProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const rows: any[] = [];

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<ReactNode[]>([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows([...rowData]);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRow = (row: any) => {
    const index = selectedRows.findIndex(
      (selectedRow: any) => selectedRow === row
    );
    if (index === -1) {
      // if row is not selected, add it to the selection
      setSelectedRows([...selectedRows, row]);
    } else {
      const updatedSelectedRows = [...selectedRows];
      updatedSelectedRows.splice(index, 1);
      setSelectedRows(updatedSelectedRows);
    }
  };

  const handleClick = (id: number) => {
    router.push(`${pathname}/${id}`);
  };

  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;
  const pageCount = Math.ceil(rowData?.length / itemsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div className="max-w-full overflow-x-hidden mt-16 pb-8">
      <p className="capitalize text-[#A4A7B7] text-base font-normal">
        {tableHeader}
      </p>
      <div className=" w-full overflow-x-scroll">
        <table className="my-8 border border-border rounded w-full bg-[rgba(242,242,246,0.4)]">
          <thead>
            <tr>
              <th>
                <form>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectAll}
                  />
                </form>
              </th>
              {columnData.map((column, index) => {
                rows.push(column.accessor);
                return <th key={index}>{column?.header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columnData.length}>
                  <span>loading...</span>
                </td>
              </tr>
            ) : rowData?.length < 1 ? (
              <tr>
                <td colSpan={columnData?.length}>
                  <span>no record</span>
                </td>
              </tr>
            ) : (
              rowData
                ?.slice(pagesVisited, pagesVisited + itemsPerPage)
                ?.map((row, index) => {
                  const isSelected = selectedRows.includes(row);
                  return (
                    <tr
                      key={index}
                      className="hover:bg-white hover:shadow-[0px_0px_30px_rgba(13,47,161,0.07)] hover:border-t-0"
                    >
                      <td>
                        <form>
                          <input
                            type="checkbox"
                            onChange={() => handleRow(row)}
                            checked={isSelected}
                          />
                        </form>
                      </td>
                      {rows.map((r, idx) => (
                        <td key={idx} onClick={() => handleClick(index + 1)}>
                          {r === "created"
                            ? new Date(row[r]).toLocaleDateString("en-US", {
                                month: "numeric",
                                day: "numeric",
                                year: "2-digit",
                              })
                            : Array.isArray(row[r])
                            ? row[r][0]
                            : row[r]}
                        </td>
                      ))}
                    </tr>
                  );
                })
            )}
          </tbody>
        </table>
        {rowData?.length > itemsPerPage && (
          <Pagination pageCount={pageCount} onPageChange={changePage} />
        )}
      </div>
    </div>
  );
};

export default Table;
