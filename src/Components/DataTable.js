import React from "react";
import Container from "@material-ui/core/Container";

function DataTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <Container maxWidth="sm">
      <table cellPadding={10} cellSpacing={10}>
        <thead>
          <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((column) => (
                <td>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default DataTable;
