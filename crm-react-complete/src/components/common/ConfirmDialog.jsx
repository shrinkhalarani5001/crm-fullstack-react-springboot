export default function ConfirmDialog({ open, message, onConfirm, onCancel }) {
  if (!open) return null;
  return <div className="modal-backdrop"><div className="modal"><h3>Confirm</h3><p>{message}</p><div className="actions"><button className="btn btn-danger" onClick={onConfirm}>Delete</button><button className="btn btn-light" onClick={onCancel}>Cancel</button></div></div></div>;
}
