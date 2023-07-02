import React, { FC, memo } from 'react';

interface ColumnProps {
  keyValue: string;
}


const Column: FC<ColumnProps> = ({ keyValue }) => {


  const stylesObj = {
    column: {
      flex: 1,
      margin: 5,
      borderStyle: 'solid',
      borderColor: 'white',
      height: "60px"
    },
    row: {
      backgroundColor: "red", display: "flex"
    }
  }
  return <div style={stylesObj.column} key={keyValue}>

    {keyValue}

  </div>
}

export default memo(Column);