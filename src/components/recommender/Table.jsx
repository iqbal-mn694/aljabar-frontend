import TableContent from "./TableContent"
import TableHeadContent from "./TableHeadContent"

function Table({ dataTable }) {
  return (
    <>
      <div className="table-section">
            <h2>Rekomendasikan Yang Di Dapatkan</h2>
            <table>
                <thead>
                  <TableHeadContent />
                </thead>
                
                <tbody>
                  {Object.values(dataTable).map((item, index) => (
                   <TableContent 
                    key={index}
                    title={item.name}
                    bpm={item.bpm}
                    danceability={item.danceability} />
                  ))}
                  
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Table