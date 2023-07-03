import React, { FC } from 'react';

interface ColumnProps {
  keyValue: string;
}


const Column: FC<ColumnProps> = ({ keyValue }) => {


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
  return <div style={styles.column} key={keyValue}></div>
}

export default Column;