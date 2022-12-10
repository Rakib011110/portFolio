import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer"
import Contactinfo from "./components/Contactinfo";
import { motion } from "framer-motion";
import Contactme from "./components/Contactme";



function App() {
  return (
    <div className="">
      <NavBar />




      <motion.div
        margin="0 0 -200px 0"
        amount="all"
      >
        <Home />

      </motion.div>


      {/* <Home /> */}
      <About />


      <motion.div
        margin="0 0 -200px 0"
        amount="all"
      // onViewportEnter={() => setSelectedPage("projects")}
      >
        <Portfolio />

      </motion.div>


      <Experience />
      <Contactinfo></Contactinfo>
      {/* <Contact /> */}

      {/* <Contactme /> */}

      {/* <SocialLinks /> */}
      <Footer></Footer>

    </div>
  );
}

export default App;
