import Header from "../Header";
import Footer from "../Footer";
import Intro from "./Intro";
import Card from "./Card";
import Conclusion from "./Conclusion";

function Concept() {
  return (
    <>
      <Header />
      {/* <div className="concept-explanation"> */}
        <Intro />
        <Card />
        <Conclusion />
      {/* </div> */}
      <Footer />
      
    </>
  )
}

export default Concept;