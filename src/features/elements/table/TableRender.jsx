import React, { Component } from "react";
import "./table.css";
export default class TableRender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnHeaders: ["Col1", "Col2", "Col3"],
      rowValues: [
        { id: 0, data: ["rowValue1", "rowValue2", "rowValue3"] },
        { id: 1, data: ["rowValue4", "rowValue5", "rowValue6"] },
      ],
    };
  }
  addRow = (e) => {
    console.log(e);
    console.log(this.state);
  };
  addCol = () => {
    let newCol = prompt("ColumnName?");
    let rowValues = this.state.rowValues;
    rowValues.map((row) => {
      row.data = [...row.data, newCol];
      return row;
    });
    this.setState({
      columnHeaders: [...this.state.columnHeaders, newCol],
    });
  };
  renderFunc = () => (
    <div>
      <button onClick={(e) => this.addRow(e)}>+Row</button>
      <button onClick={() => this.addCol()}>+Columns</button>
    </div>
  );

  rowValueChange = (e, rowIndex, dataIndex) => {
    let row = this.state.rowValues[rowIndex];
    console.log(row);
    row.data[dataIndex] = e.target.value;
    console.log(row);
    // let newRows=this.state.rowValues
    console.log(this.state.rowValues);
    let newRows = this.state.rowValues.splice(rowIndex - 1, 1, row);
    console.log(newRows);
    this.setState({
      rowValue: newRows,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              {this.state.columnHeaders.map((d, ind) => (
                <td key={ind}>{d}</td>
              ))}
              <td>Function</td>
            </tr>
          </thead>
          <tbody>
            {this.state.rowValues.map((row, rowIndex) => (
              <tr>
                {row.data.map((rowValue, dataIndex) => (
                  <td key={`${rowIndex}_${dataIndex}`}>
                    <input
                      onChange={(e) =>
                        this.rowValueChange(e, rowIndex, dataIndex)
                      }
                      value={rowValue}
                    ></input>
                  </td>
                ))}
                <td>{this.renderFunc()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
