import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Backdrop from "./components/backdrop/Backdrop";
import { useSelector } from "react-redux";

function App({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const reduxState = useSelector((store) => store);

  console.log(reduxState, "in app js")

  return (
    <>
      {showSidebar && (
        <>
          <Backdrop onClick={() => setShowSidebar(false)} />
          <Sidebar setShowSidebar={setShowSidebar} />
        </>
      )}
      <main className={showSidebar ? "blur-content" : ""}>
        <Header setShowSidebar={setShowSidebar} />
        {children}
      </main>
    </>
  );
}

export default App;
