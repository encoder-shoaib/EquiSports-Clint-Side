import Navbar from "../RootComponents/Navbar/Navbar";
import Main from "../RootComponents/Main/Main";
import Footer from "../RootComponents/Footer/Footer";
import { useLoaderData } from "react-router-dom";


const Root = () => {
  const loginUser = useLoaderData();
  return (
    <div className="body bg-white">
      <div>
        <Navbar loginUser={loginUser}></Navbar>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;