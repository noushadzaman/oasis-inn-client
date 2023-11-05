import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const MainLayout = () => {
    return (
        <div className="min-h-[100vh]">
            <Navbar>
                <Outlet></Outlet>
            </Navbar>
        </div>
    );
};

export default MainLayout;