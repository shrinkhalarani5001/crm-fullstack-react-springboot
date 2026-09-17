import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Layout from "../components/layout/Layout";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/customers/Customers";
import CustomerDetails from "../pages/customers/CustomerDetails";
import AddCustomer from "../pages/customers/AddCustomer";
import Leads from "../pages/leads/Leads";
import AddLead from "../pages/leads/AddLead";
import Deals from "../pages/deals/Deals";
import AddDeal from "../pages/deals/AddDeal";
import Tasks from "../pages/tasks/Tasks";
import AddTask from "../pages/tasks/AddTask";
import Reports from "../pages/Reports";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

function Protected({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/dashboard" element={<Protected><Layout><Dashboard /></Layout></Protected>} />
      <Route path="/customers" element={<Protected><Layout><Customers /></Layout></Protected>} />
      <Route path="/customers/add" element={<Protected><Layout><AddCustomer /></Layout></Protected>} />
      <Route path="/customers/:id" element={<Protected><Layout><CustomerDetails /></Layout></Protected>} />
      <Route path="/leads" element={<Protected><Layout><Leads /></Layout></Protected>} />
      <Route path="/leads/add" element={<Protected><Layout><AddLead /></Layout></Protected>} />
      <Route path="/deals" element={<Protected><Layout><Deals /></Layout></Protected>} />
      <Route path="/deals/add" element={<Protected><Layout><AddDeal /></Layout></Protected>} />
      <Route path="/tasks" element={<Protected><Layout><Tasks /></Layout></Protected>} />
      <Route path="/tasks/add" element={<Protected><Layout><AddTask /></Layout></Protected>} />
      <Route path="/reports" element={<Protected><Layout><Reports /></Layout></Protected>} />
      <Route path="/notifications" element={<Protected><Layout><Notifications /></Layout></Protected>} />
      <Route path="/profile" element={<Protected><Layout><Profile /></Layout></Protected>} />
      <Route path="/settings" element={<Protected><Layout><Settings /></Layout></Protected>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
