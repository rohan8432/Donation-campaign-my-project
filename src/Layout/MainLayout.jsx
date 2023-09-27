import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";


const MainLayout = () => {
    return (
        <div className="mx-10">
            <NavBar></NavBar>
            
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;