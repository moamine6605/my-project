import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";
import { useState, createContext } from 'react';

const isOpen = createContext({})

function App() {

  const [open, setOpen] = useState('') 

  function toggle(){
    setOpen(prevState=>prevState === 'open-nav' ? '' : 'open-nav')
  }

  return (
    <isOpen.Provider value={{open, toggle}}>
        <div className="wrapper">
        <main>
            <Header />
            <Sidebar />
            <Todos />
        </main>
            <Footer />
        </div>
    </isOpen.Provider>

  )
}


export { isOpen }
export default App
