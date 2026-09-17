export default function Pagination({ page, pages, setPage }) {
  if (pages <= 1) return null;
  return <div className="pagination"><button disabled={page===1} onClick={() => setPage(page-1)}>Previous</button><span>{page} / {pages}</span><button disabled={page===pages} onClick={() => setPage(page+1)}>Next</button></div>;
}
