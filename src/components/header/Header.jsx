import { useNavigate } from "react-router";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";

export const navElements = [
  { label: "TESLA", route: "", style: { marginRight: "auto" } },
  { label: "Model S", route: "model_s" },
  { label: "Model X", route: "model_x" },
  { label: "Roadster", route: "roadster" },
  { label: "Shop", route: "shop" },
  { label: <ShoppingCartIcon />, route: "cart", style: { marginLeft: "auto" } },
  { label: "Menu", route: null },
];

export default function Header({ setShowSidebar }) {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul className="headerList">
          {navElements.map(({ label, route, style = {} }) => {
            if (route === "cart") {
              return (
                <li
                  onClick={() => {
                    navigate(`/${route}`);
                  }}
                  key={route}
                  style={style}
                >
                  <span className="cart-items-count"></span>
                  {label}
                </li>
              );
            }
            return (
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
            );
          })}
        </ul>
      </nav>
    </>
  );
}
