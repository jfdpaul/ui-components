import React, { useState } from "react";
import PropTypes from 'prop-types';
// import "./table.css";

export const Table = (props) => {
  const [columnHeaders, setColumnHeaders] = useState(props.columnHeaders);
  const [rowValues, setRowValues] = useState(props.data);

  const addRow = () => {
    console.log(rowValues);
  };

  const addCol = () => {
    let newCol = prompt("ColumnName?");
    const updateRowValues = rowValues.map((row) => ({ id: row.id, data: [...row.data, newCol] }));
    setRowValues(updateRowValues);
    setColumnHeaders([...columnHeaders, newCol]);
  };

  const renderFunc = () => (
    <div>
      <button onClick={addRow}>+Row</button>
      <button onClick={addCol}>+Column</button>
    </div>
  );

  const rowValueChange = (e, rowIndex, dataIndex) => {
    let row = rowValues[rowIndex];
    console.log(row);
    row.data[dataIndex] = e.target.value;
    console.log(row);
    console.log(rowValues);
    let newRows = rowValues.splice(rowIndex - 1, 1, row);
    console.log(newRows);
    setRowValues(newRows);
  };

  const getTableHeader = () => (
    <thead>
      <tr>
        {columnHeaders.map((d, ind) => (
          <td key={ind}>{d}</td>
        ))}
        <td>Function</td>
      </tr>
    </thead>
  );

  const getTableBody = () => (
    <tbody>
      {rowValues.map((row, rowIndex) => (
        <tr>
          {row.data.map((rowValue, dataIndex) => (
            <td key={`${rowIndex}_${dataIndex}`}>
              <input
                onChange={(e) =>
                  rowValueChange(e, rowIndex, dataIndex)
                }
                value={rowValue}
              ></input>
            </td>
          ))}
          <td>{renderFunc()}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <table style={{ width: "100%" }}>
      {getTableHeader()}
      {getTableBody()}
    </table>
  );
};

Table.propTypes = {
  columnHeaders: PropTypes.array,
  data: PropTypes.array,
};

Table.defaultProps = {
  columnHeaders: ["Col1", "Col2", "Col3"],
  data: [
    { id: 0, data: ["rowValue1", "rowValue2", "rowValue3"] },
    { id: 1, data: ["rowValue4", "rowValue5", "rowValue6"] },
  ],
};

export default Table;
