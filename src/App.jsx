import "./App.css";
import { Navbar } from "./components";
import {Footer, Marketing, Member, OurClient, Slider} from "./container"

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <OurClient/>
      <Member/>
      <Marketing/>
      <Footer/>
    </div>
  )
}

export default App;
