import { Users, UserPlus, Handshake, CheckSquare } from "lucide-react";
import { useCRM } from "../context/CRMContext";
import StatCard from "../components/dashboard/StatCard";
import SalesChart from "../components/dashboard/SalesChart";
import RecentCustomers from "../components/dashboard/RecentCustomers";
import RecentDeals from "../components/dashboard/RecentDeals";

export default function Dashboard(){const {customers,leads,deals,tasks}=useCRM();return <div><div className="page-title"><div><h1>Dashboard</h1><p>Overview of your customer relationship activity.</p></div></div><div className="stats-grid"><StatCard title="Customers" value={customers.length} note="Total customers" icon={<Users/>}/><StatCard title="Leads" value={leads.length} note="Active prospects" icon={<UserPlus/>}/><StatCard title="Deals" value={deals.length} note="Pipeline deals" icon={<Handshake/>}/><StatCard title="Tasks" value={tasks.length} note="Tracked tasks" icon={<CheckSquare/>}/></div><div className="two-col"><SalesChart deals={deals}/><RecentCustomers customers={customers}/></div><div className="two-col"><RecentDeals deals={deals}/><div className="card"><h3>Quick Actions</h3><div className="quick-grid"><a href="/customers/add" className="quick">+ Add Customer</a><a href="/leads/add" className="quick">+ Add Lead</a><a href="/deals/add" className="quick">+ Add Deal</a><a href="/tasks/add" className="quick">+ Add Task</a></div></div></div></div>}
