import Header from './Header';
import Input from './Input';
import Table from './Table';
import '../../style.css';

function Recommender() {

  return (
    <>
     <Header />

      <main>
        <h1>Pencarian Rekomendasi Lagu Berdasarkan Principal Component Analysis Dan Cosine Similarity</h1>
        <Input />
        <Table />
     </main>
    </>
  )
}

export default Recommender
