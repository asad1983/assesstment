import { FC } from 'react';

interface ColumnProps {
}

const Column: FC<ColumnProps> = ({ }) => {

  const styles = {
    column: {
      flex: 1,
      margin: 5,
      borderStyle: 'solid',
      borderColor: 'white',
      height: "100px"
    },
    row: {
      backgroundColor: "red", display: "flex"
    }
  }
  return <div style={styles.column} data-testid="column"></div>
}

export default Column;