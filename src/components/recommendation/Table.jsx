function Table({ songs }) {
  // const data = [
  //   {
  //     judul: "Shape of You",
  //     penyanyi: "Ed Sheeran",
  //     rilis: 2017,
  //     skor: 95,
  //     bpm: 96,
  //     danceability: 87,
  //     energy: 85,
  //   },
  //   {
  //     judul: "Blinding Lights",
  //     penyanyi: "The Weeknd",
  //     rilis: 2019,
  //     skor: 90,
  //     bpm: 170,
  //     danceability: 88,
  //     energy: 90,
  //   },
  //   {
  //     judul: "Rolling in the Deep",
  //     penyanyi: "Adele",
  //     rilis: 2010,
  //     skor: 89,
  //     bpm: 105,
  //     danceability: 63,
  //     energy: 80,
  //   },
  //   {
  //     judul: "Stay",
  //     penyanyi: "The Kid LAROI, Justin Bieber",
  //     rilis: 2021,
  //     skor: 92,
  //     bpm: 170,
  //     danceability: 94,
  //     energy: 91,
  //   },
  //   {
  //     judul: "Uptown Funk",
  //     penyanyi: "Mark Ronson ft. Bruno Mars",
  //     rilis: 2014,
  //     skor: 93,
  //     bpm: 115,
  //     danceability: 90,
  //     energy: 85,
  //   },
  // ];

  console.log(songs)
  return (
    <>
    <section id="recommendations" class="tab-content">
        <div class="recommendation-tab">
          <h2>Rekomendasi Lagu</h2>
          <table id="recommendationsTable" class="recommendations-table">
            <thead>
              <tr>
                <th>Judul</th>
                <th>Penyanyi</th>
                <th>Rilis</th>
                <th>Skor Kemiripan</th>
                <th>BPM</th>
                <th>Danceability</th>
                <th>Energy</th>
              </tr>
            </thead>
            <tbody id="recommendationsList">
            {songs.map((lagu, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border border-gray-400 px-4 py-2">{lagu.name}</td>
              <td className="border border-gray-400 px-4 py-2">{lagu.artist}</td>
              <td className="border border-gray-400 px-4 py-2">{lagu.release}</td>
              <td className="border border-gray-400 px-4 py-2">{lagu.similarity}</td>
              <td className="border border-gray-400 px-4 py-2">{lagu.liveness}</td>
              <td className="border border-gray-400 px-4 py-2">{lagu.danceability}</td>
              <td className="border border-gray-400 px-4 py-2">{lagu.energy}</td>
            </tr>
          ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

export default Table;