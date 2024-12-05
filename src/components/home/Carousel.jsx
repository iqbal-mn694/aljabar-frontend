import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Carousel() {
  const [song, setSong] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if(song.trim() !== "") {
      navigate(`/recommendation?song=${song}`);
    }
  }

  return (
    <>
      <section id="home" class="tab-content active">
        <div class="hero">
          <h1>Temukan Playlist Musik yang Cocok untuk Mood Anda</h1>
          <p>
            Dapatkan rekomendasi musik berdasarkan analisis fitur musik lebih
            lanjut
            <br />yang menyajikan melodi dan irama selaras dengan suasana hati
            Anda.
          </p>
          <div class="recommendation-form">
            <input
              type="text"
              id="songInput"
              placeholder="Masukkan judul lagu..."
              value={song}
              onChange={(e) => setSong(e.target.value)}
            />
            <button onClick={handleSearch}>Cari</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Carousel;