import "./App.css";
import { Navbar } from "./components";
import {Comunity, Footer, Marketing, Member, OurClient, Slider} from "./container"

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <OurClient/>
      <Comunity />
      <Member/>
      <Marketing/>
      <Footer/>
    </div>
  )
}

export default App;
