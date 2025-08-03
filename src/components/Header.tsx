function Header(){
    return (
        <header>
            <h1>Justdoit list</h1>
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