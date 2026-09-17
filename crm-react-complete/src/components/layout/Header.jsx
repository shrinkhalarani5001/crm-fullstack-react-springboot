import { Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { user } = useAuth();
  return <header className="header">
    <div className="header-search"><Search size={18}/><input placeholder="Search CRM..." /></div>
    <div className="header-right"><Link to="/notifications" className="icon-btn"><Bell size={20}/></Link><Link to="/profile" className="user-chip"><span>{user?.fullName?.charAt(0) || "U"}</span>{user?.fullName || "User"}</Link></div>
  </header>;
}
