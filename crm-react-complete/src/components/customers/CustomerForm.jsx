import { useState } from "react";
export default function CustomerForm({ initial={}, onSubmit, submitLabel="Save Customer" }) {
 const [form,setForm]=useState({name:"",email:"",phone:"",company:"",status:"ACTIVE",source:"Website",notes:"",...initial});
 const change=e=>setForm({...form,[e.target.name]:e.target.value});
 return <form className="form-grid" onSubmit={e=>{e.preventDefault();onSubmit(form)}}>{["name","email","phone","company","source"].map(k=><label key={k}>{k[0].toUpperCase()+k.slice(1)}<input required={k==="name"} name={k} value={form[k]||""} onChange={change}/></label>)}<label>Status<select name="status" value={form.status} onChange={change}><option>ACTIVE</option><option>INACTIVE</option></select></label><label className="full">Notes<textarea name="notes" value={form.notes||""} onChange={change}/></label><div className="full"><button className="btn btn-primary">{submitLabel}</button></div></form>;
}
