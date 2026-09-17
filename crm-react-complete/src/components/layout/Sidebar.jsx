import { NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, UserPlus, Handshake, CheckSquare, BarChart3, Bell, UserCircle, Settings, LogOut } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const items = [
  ["/dashboard","Dashboard",LayoutDashboard], ["/customers","Customers",Users],
  ["/leads","Leads",UserPlus], ["/deals","Deals",Handshake], ["/tasks","Tasks",CheckSquare],
  ["/reports","Reports",BarChart3], ["/notifications","Notifications",Bell],
  ["/profile","Profile",UserCircle], ["/settings","Settings",Settings]
];

export default function Sidebar() {
  const { logout } = useAuth(); const navigate = useNavigate();
  return <aside className="sidebar">
    <div className="brand"><span className="brand-mark">C</span><span>CRM Suite</span></div>
    <nav>{items.map(([to,label,Icon]) => <NavLink key={to} to={to} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
    <button className="nav-item logout" onClick={() => { logout(); navigate("/login"); }}><LogOut size={18}/><span>Logout</span></button>
  </aside>;
}
