import React, { useState, useRef } from 'react';
import Column from "./Components/Column";

const styles = {
  column: {
    flex: 1,
    margin: 5,
    borderStyle: 'solid',
    borderColor: 'white'
  },
  row: {
    backgroundColor: "blue", display: "flex"
  },
  formRow: {
    display: "flex"
  },
  formColumn: {
    flex: 1,
    margin: 5,
    display: "flex"
  },
}

function App() {

  const [columns, setColumns] = useState(1);
  const [lines, setLines] = useState(1);
  const columnsRef = useRef<HTMLInputElement>(null);
  const linesRef = useRef<HTMLInputElement>(null);

  const createColumnLines = (line: number, column: number) => {
    const rows = []
    for (let i = 0; i < line; i++) {
      rows.push(
        <div style={styles.row} key={i}>
          {
            createColumn(i, column)
          }
        </div>
      )

    }
    return rows;
  }
  const createColumn = (row: number, column: number) => {
    const columns = [];
    for (let i = 0; i < column; i++) {
      // columns.push(<div style={styles.column} key={`column-${row}${i}`}>

      //   {`column-${row}${i}`}

      // </div>
      // )

      columns.push(<Column keyValue={`column-${row}${i}`} />)
    }
    return columns;
  }


  const update = () => {
    if (!columnsRef.current?.value && !linesRef.current?.value) {
      alert("Please enter columns and lines")
      return false;
    }
    setLines(linesRef.current ? parseInt(linesRef.current.value) : 1);
    setColumns(columnsRef.current ? parseInt(columnsRef.current.value) : 1);

  }
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}>

      {createColumnLines(lines, columns)}
      <div style={styles.formRow} >
        <div style={styles.formColumn}>
          <label>Columns:</label>
          <input style={{ flex: 1 }} ref={columnsRef} placeholder='Columns' />
        </div>
        <div style={styles.formColumn}>
          <label>Lines:</label>
          <input style={{ flex: 1 }} ref={linesRef} placeholder='Lines' />
        </div>

      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ width: "100px", height: "40px", margin: "10px" }} onClick={() => update()}  >Create</button>
      </div>
    </div>
  );
}

export default App;
