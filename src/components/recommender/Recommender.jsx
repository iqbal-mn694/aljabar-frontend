import Header from './Header';
import Input from './Input';
import Table from './Table';
import '../../style.css';
import { useState } from 'react';

function Recommender() {
  const [data, setData] = useState([]);

  const dataSearchResult = (resultData) => {
    setData(resultData)
  }

  return (
    <>
     <Header />

      <main>
        <h1>Pencarian Rekomendasi Lagu Berdasarkan Principal Component Analysis Dan Cosine Similarity</h1>
        <Input recommendationData={dataSearchResult} />
        <Table dataTable={data} />
     </main>
    </>
  )
}

export default Recommender
