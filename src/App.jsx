import "./App.css";
import { Navbar } from "./components";
import {Comunity, Customer, Footer, Marketing, Member, OurClient, Readmore, Slider, Spending} from "./container"

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <OurClient/>
      <Comunity />
      <Spending />
      <Member/>
      <Marketing/>
      <Customer/>
      <Readmore/>
      <Footer/>
    </div>
  )
}

export default App;
