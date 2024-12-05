import Title from "./Title";
import Member from "./Member";
import gambar from "../../assets/roti.jpg"
import Header from "../Header";
import Footer from "../Footer";

function Team() {
  return (
    <> 
      <Header />
      <div className="team">
        <Title />
        <div className="team-members">
          <Member name="Yasfi" npm="237006" img={ gambar } anggota="anggota 1" />
          <Member name="Yasfi" npm="237006" img={ gambar } anggota="anggota 2" />
          <Member name="Yasfi" npm="237006" img={ gambar } anggota="anggota 3" />
          <Member name="Yasfi" npm="237006" img={ gambar } anggota="anggota 4" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Team;