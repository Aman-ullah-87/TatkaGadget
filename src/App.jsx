import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./pages/Footer"


function App() {


  return (
    <div className="">
     <Header />
     <div className="md:min-h-[calc(100vh-10rem)] ">
     <Outlet />
     </div>
     <Footer/>
    </div>
  )
}

export default App
