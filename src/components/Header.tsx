import { FaBars, FaTimes } from 'react-icons/fa';
import { useContext } from "react";
import { isOpen } from "../App";


function Header(){

    const value:any = useContext(isOpen)       


    return (
        <header>
            <div className='logo'>
                <button className="hamburger-button" onClick={value.toggle}>
                    {value.open==='open-nav' ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
                <h1>Justdoit list</h1>
            </div>

            <form action='#' id="add">
                <label htmlFor="todo">
                    <input placeholder='e.g. finising chapter 2' name="todo" type="text" id="todo" autoComplete="off" required/>
                                    
                </label>
                <button type="submit">+</button>
            </form>
            <div className="about-section">
                <a href="#">About</a>
            </div>
        </header>
        
    )
}

export default Header;