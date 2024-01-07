import "./style.css";

const Pagination = ({ total, setPage, page, limit }) => {
  const items = [];
  const totalPages = total % limit > 0 ? Math.floor(total / limit) + 1 : total / limit;

  if (totalPages > 0) {
    for (let i = 1; i <= totalPages; i++) items.push(i);
  }
  console.log({ total, page });
  const next = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <div className="pagination-wrapper">
        <span onClick={() => prev()} className="number__prev">
          {"<"}
        </span>

        {items.length <= 5 ? (
          items.map((item) => (
            <span key={item} onClick={() => setPage(item)} className={`number__prev ${item === page ? "active-page" : ""}`}>
              {item}
            </span>
          ))
        ) : (
          <>
            <span onClick={() => setPage(1)} className={`number__prev ${1 === page ? "active-page" : ""}`}>
              1
            </span>

            {page >= 5 ? (
              <span className="page-dots">...</span>
            ) : (
              <span className={`number__prev ${2 === page ? "active-page" : ""}`} onClick={() => setPage(2)}>
                2
              </span>
            )}

            {(page < 5
              ? [3, 4, 5]
              : page < items.length - 3
                ? [page - 1, page, page + 1]
                : [items.length - 4, items.length - 3, items.length - 2, items.length - 1]
            ).map((item) => (
              <span
                key={item}
                onClick={() => setPage(item)}
                className={`number__prev ${item === page ? "active-page" : ""}`}
              >
                {item}
              </span>
            ))}

            {page < items.length - 3 && <span className="page-dots">...</span>}

            <span
              onClick={() => setPage(items.length)}
              className={`number__prev ${items.length === page ? "active-page" : ""}`}
            >
              {items.length}
            </span>
          </>
        )}

        <span onClick={() => next()} className={`number__prev`}>
          {">"}
        </span>
      </div>
    </div>
  );
};

export default Pagination;
