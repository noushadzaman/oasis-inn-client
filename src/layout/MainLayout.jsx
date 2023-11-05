import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-[100vh]">
            <Navbar>
            </Navbar>
                <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;