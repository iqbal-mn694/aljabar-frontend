import TableContent from "./TableContent"
import TableHeadContent from "./TableHeadContent"

function Table() {
  return (
    <>
      <div className="table-section">
            <h2>Rekomendasikan Yang Di Dapatkan</h2>
            <table>
                <thead>
                  <TableHeadContent />
                </thead>
                
                <tbody>
                  <TableContent />
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Table