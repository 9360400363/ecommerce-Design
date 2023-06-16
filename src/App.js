import { Outlet } from "react-router-dom";
import "./App.css";

//components
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
