import { navElements } from "../header/Header";
import { useNavigate } from "react-router";
import "./Sidebar.css";

const Sidebar = ({ setShowSidebar }) => {
  const navigate = useNavigate();

  return (
    <nav className="sidebar">
      <button onClick={() => setShowSidebar(false)}>X</button>
      <ul>
        {navElements.map(({ label, route }) => {
          if (label === "Menu") return null;
          return (
            <li
              onClick={() => {
                navigate(`/${route}`);
              }}
              key={label}
            >
              {label}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
