
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
const Layout = ({children}) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main min-h-screen">
        {children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout
