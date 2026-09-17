import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return <div className="app-shell"><Sidebar/><div className="main-shell"><Header/><main className="content">{children}</main><Footer/></div></div>;
}
