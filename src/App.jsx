import Nav from "./components/Home/Nav";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main>
      <Nav />
      <Outlet />
    </main>
  );
}
