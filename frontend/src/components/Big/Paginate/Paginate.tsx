import ReactPaginate from "react-paginate";
import { usePaginate } from "../../../hooks/Paginate";
import "./style.css";

interface PaginateProps {
  numberPages: number;
}

export function Paginate({ numberPages }: PaginateProps) {
  const { handleSetIndex } = usePaginate();

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={() => null}
      pageRangeDisplayed={5}
      pageCount={numberPages}
      previousLabel="< Previous"
      renderOnZeroPageCount={undefined}
      containerClassName="pagination"
      pageLinkClassName="page-num"
      previousClassName="page-num"
      nextLinkClassName="page-num"
      activeLinkClassName="active"
      onClick={(data) => {
        if (data.nextSelectedPage) {
          handleSetIndex(data.nextSelectedPage);
        }
        if (
          !data.nextSelectedPage &&
          data.selected !== Number(numberPages) - 1
        ) {
          handleSetIndex(0);
        }
      }}
    />
  );
}
