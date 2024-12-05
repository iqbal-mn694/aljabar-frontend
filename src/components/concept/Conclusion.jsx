function Conclusion()
{
  return (
    <>
      <p style={{ margin:"0 50px"}}>
            Ketika anda memasukkan judul pada kolom pencarian yang ada di
            halaman utama, sistem kami akan bekerja dengan membandingkan lagu
            pilihan anda dengan lagu-lagu yang tersimpan di dalam database kami.
            Lagu-lagu tersebut dianalisis kemiripannya dengan konsep kesamaan
            cosinus (cosinus similarity). Konsep ini mengukur tingkat kemiripan
            dua lagu dengan membadingkan posisi vektor fitur lagu di ruang
            multidimensi. Ketika nilai skornya mendekati angka 1 maka lagu
            tersebut sangat mirip dengan lagu pilihan anda. Berdasarkan skor
            inilah kami sajikan rekomendasi lagu yang sesuai dengan selera anda.
            <br />Selamat menikmati musik favorit anda!🎵
          </p>
    </>
  )
}

export default Conclusion;