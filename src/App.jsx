import Nav from "./components/Home/Nav";
import { Outlet } from "react-router-dom";
import "./styles/style.scss";

export default function App() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
