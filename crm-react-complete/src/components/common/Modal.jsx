export default function Modal({ open, title, onClose, children }) {
  if (!open) return null;
  return <div className="modal-backdrop"><div className="modal"><div className="modal-head"><h3>{title}</h3><button onClick={onClose}>×</button></div>{children}</div></div>;
}
