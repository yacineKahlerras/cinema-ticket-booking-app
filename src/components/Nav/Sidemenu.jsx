import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sidemenu(props) {
  const { sidemenuActive, setSidemenuActive } = props;

  useEffect(() => {
    document
      .querySelector(".sidemenu-container")
      .addEventListener("click", (e) => {
        if (e.target.classList.contains("sidemenu-container")) {
          setSidemenuActive(false);
        }
      });
  }, []);

  return (
    <aside
      className={`sidemenu-container ${!sidemenuActive ? "hide-sidemenu" : ""}`}
    >
      <div className="sidemenu-center">
        <ul className="sidemenu-links">
          <li>
            <Link onClick={() => setSidemenuActive(false)} to={"/"}>
              Acceuil
            </Link>
          </li>
          <li>
            <Link onClick={() => setSidemenuActive(false)} to={"/Rooms"}>
              Cinemas
            </Link>
          </li>
          <li>
            <Link onClick={() => setSidemenuActive(false)} to={"/About-Us"}>
              A Propos
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
