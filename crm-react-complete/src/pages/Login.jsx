import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
 const {login}=useAuth(); const nav=useNavigate(); const [f,setF]=useState({email:"demo@crm.com",password:"demo123"}); const [err,setErr]=useState("");
 async function submit(e){e.preventDefault();setErr("");try{await login(f.email,f.password);nav("/dashboard", {replace:true});}catch(x){setErr(x.response?.data?.message||"Unable to login. Start the backend first.");}}
 return <div className="auth-page"><div className="auth-card"><div className="auth-brand">C</div><h1>Welcome back</h1><p className="muted">Sign in to your CRM workspace</p>{err&&<div className="alert">{err}</div>}<form onSubmit={submit}><label>Email<input type="email" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/></label><label>Password<input type="password" value={f.password} onChange={e=>setF({...f,password:e.target.value})}/></label><button className="btn btn-primary wide">Login</button></form><div className="auth-links"><Link to="/forgot-password">Forgot Password?</Link><Link to="/create-account">Create Account</Link></div><small>Demo: demo@crm.com / demo123</small></div></div>;
}
