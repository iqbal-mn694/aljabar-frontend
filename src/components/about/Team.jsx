import Title from "./Title";
import Member from "./Member";
import yasfi from "../../assets/yasfi.jpg"
import rizal from "../../assets/rizal.jpg"
import ikhsan from "../../assets/ikhsan.jpg"
import iqbal from "../../assets/iqbal.jpg"
import Header from "../Header";
import Footer from "../Footer";

function Team() {
  return (
    <> 
      <Header />
      <div className="team">
        <Title />
        <div className="team-members">
          <Member name="Yasfi Nur Pangestu" npm="237006098" img={ yasfi } anggota="anggota 1" />
          <Member name="Rizal Saepul Anwar" npm="237006107" img={ rizal } anggota="anggota 2" />
          <Member name="Ikhsan Mahardika Albar" npm="237006116" img={ ikhsan } anggota="anggota 3" />
          <Member name="Iqbal Mutaqin" npm="237006120" img={ iqbal } anggota="anggota 4" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Team;