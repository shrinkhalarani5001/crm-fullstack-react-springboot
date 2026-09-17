import { createContext, useContext, useEffect, useState } from "react";
import { customerService } from "../services/customerService";
import { leadService } from "../services/leadService";
import { dealService } from "../services/dealService";
import { taskService } from "../services/taskService";

const CRMContext = createContext(null);

export function CRMProvider({ children }) {
  const [customers, setCustomers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [deals, setDeals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  async function refresh() {
    setLoading(true);
    try {
      const [c, l, d, t] = await Promise.all([
        customerService.getAll(), leadService.getAll(), dealService.getAll(), taskService.getAll()
      ]);
      setCustomers(c); setLeads(l); setDeals(d); setTasks(t);
    } finally { setLoading(false); }
  }

  useEffect(() => { refresh().catch(() => setLoading(false)); }, []);

  return (
    <CRMContext.Provider value={{ customers, leads, deals, tasks, loading, refresh, setCustomers, setLeads, setDeals, setTasks }}>
      {children}
    </CRMContext.Provider>
  );
}
export const useCRM = () => useContext(CRMContext);
