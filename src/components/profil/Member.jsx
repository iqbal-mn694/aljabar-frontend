function Member({ img, status, name, npm }) {
  return (
    <>
      <div className="member">
        <div className="photo">FOTO</div>
            <div className="info">
              <h3>{ status }</h3>
              <p>Name: { name }</p>
              <p>NPM:{ npm }</p>
            </div>
      </div>
    </>
  )
}

export default Member;