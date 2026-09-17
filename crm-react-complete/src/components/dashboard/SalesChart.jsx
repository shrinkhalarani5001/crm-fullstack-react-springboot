export default function SalesChart({ deals }) {
  const data = ["Jan","Feb","Mar","Apr","May","Jun"].map((m,i)=>({m,v:Math.round((deals.reduce((s,d)=>s+(Number(d.amount)||0),0)/6)*(i+1)/6)}));
  const max=Math.max(1,...data.map(x=>x.v));
  return <div className="card"><div className="card-head"><h3>Sales Overview</h3></div><div className="bar-chart">{data.map(x=><div className="bar-col" key={x.m}><div className="bar" style={{height:`${Math.max(8,x.v/max*150)}px`}}></div><span>{x.m}</span></div>)}</div></div>;
}
