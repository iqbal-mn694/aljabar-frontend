function Member({ img, name, npm, anggota}) {
  return (
    <>
      <div class="team-member">
        <img src={ img } alt={ anggota } />
        <h3>{ name }</h3>
        <p>{ npm }</p>
      </div>
    </>
  )
}

export default Member;