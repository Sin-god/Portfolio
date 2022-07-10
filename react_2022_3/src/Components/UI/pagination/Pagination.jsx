import { usePagination } from "../../hooks/usePagination";

const Pagination = ({ totalPagest, page, changePage }) => {
  let pagesArray = usePagination(totalPagest);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
