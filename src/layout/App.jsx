import { Outlet } from "react-router-dom";
import Footer from "../components/Footers/Footer";
import Header from "../components/Headers/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
