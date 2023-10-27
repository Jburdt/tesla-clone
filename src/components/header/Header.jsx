import { useNavigate } from "react-router";
import "./Header.css";
import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import Backdrop from "../backdrop/Backdrop";

export const navElements = [
  { label: "TESLA", route: "", style: { marginRight: "auto" } },
  { label: "Model S", route: "model_s" },
  { label: "Model X", route: "model_x" },
  { label: "CyberTruck", route: "cybertruck" },
  { label: "Menu", route: null, style: { marginLeft: "auto" } },
];

export default function Header() {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar && (
        <>
          <Backdrop onClick={() => setShowSidebar(false)} />
          <Sidebar setShowSidebar={setShowSidebar} />
        </>
      )}
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style = {} }) => (
            <li
              style={style}
              key={label}
              onClick={() => {
                if (label === "Menu") {
                  setShowSidebar(true);
                } else {
                  navigate(`/${route}`);
                }
              }}
            >
              {label}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
