import { useState, useRef } from 'react';
import Column from "./Components/Column";
import style from "./styles.module.css";


const styles = {

  column: {
    flex: 1,
    margin: 5,
    borderStyle: 'solid',
    borderColor: 'white'
  },
  row: {
    backgroundColor: "#6d9eeb", display: "flex"
  },
  formRow: {
    display: "flex"
  },
  inoputContainer: {
    flex: 1,
    margin: 5,
    display: "flex"
  },
  input: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "red"
  },
  error: {
    color: "red"
  }
}

function App() {

  const [columns, setColumns] = useState(1);
  const [lines, setLines] = useState(1);
  const [error, setError] = useState("");
  const columnsRef = useRef<HTMLInputElement>(null);
  const linesRef = useRef<HTMLInputElement>(null);

  const CreateColumnLines = (line: number, column: number) => {
    const rows = []
    for (let i = 0; i < line; i++) {
      rows.push(
        <div className='row' style={styles.row} key={i} data-testid="row">
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
      columns.push(<Column key={`column-${row}${i}`} />)
    }
    return columns;
  }


  const update = () => {
    const columnsValue = columnsRef.current?.value;
    const linesValue = linesRef.current?.value;
    if (!columnsValue || (columnsValue && parseInt(columnsValue) <= 0)) {
      setError("Please enter valid columns")
      //alert("Please enter valid columns")
      return false;
    }
    if (!linesValue || (linesValue && parseInt(linesValue) <= 0)) {
      setError("Please enter valid lines")
      return false;
    }

    setLines(linesRef.current ? parseInt(linesRef.current.value) : 1);
    setColumns(columnsRef.current ? parseInt(columnsRef.current.value) : 1);
    setError("");
  }
  return (
    <div className={style.container}>
      {error && <label style={styles.error} data-testid='error'>{error}</label>}
      {CreateColumnLines(lines, columns)}

      <div style={styles.formRow} >
        <div style={styles.inoputContainer}>
          <label style={{ marginRight: "5px" }}>Columns:</label>
          <input data-testid='Columns' style={styles.input} ref={columnsRef} placeholder='Columns' type='number' />
        </div>
        <div style={styles.inoputContainer}>
          <label style={{ marginRight: "5px" }}>Lines:</label>
          <input data-testid='Lines' style={styles.input} ref={linesRef} placeholder='Lines' type='number' />
        </div>

      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button style={{ width: "100px", height: "40px", margin: "10px" }} onClick={() => update()}  >Create</button>
      </div>

    </div>
  );
}

export default App;
