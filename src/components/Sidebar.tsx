import { useContext } from "react";
import { isOpen } from "../App";

function Sidebar(){

    const value:any = useContext(isOpen)       
    return(
        <nav className={value.open}>
            <div className="utils">
                <p>Dashboard</p>
                <p>Vital Task</p>
                <p>My Task</p>
                <p>Task categories</p>
                <p>Settings</p>
                <p>Help</p>
            </div>
            <p>Logout</p>
        </nav>
    )
}


export default Sidebar;