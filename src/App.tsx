import Header from "./components/Header";
import Todos from "./components/Todos";
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar";


function App() {

  return (
    <div className="wrapper">
      <main>
        <Header />
        <Sidebar />
        <Todos />
      </main>
        <Footer />
    </div>
  )
}

export default App
