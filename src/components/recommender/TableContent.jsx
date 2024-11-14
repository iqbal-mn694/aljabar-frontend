function TableContent({ title, bpm, danceability }) {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td></td>
        <td></td>
        <td>{bpm}</td>
        <td></td>
        <td></td>
        <td>{danceability}</td>
        <td></td>
      </tr>
    </>
  )
}

export default TableContent;