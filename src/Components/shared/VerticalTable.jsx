import React from 'react';
import styled from 'styled-components';

const TableHeader = styled.th`
  font-weight: 400;
  color: #6f6d6d;
  text-align: left;
`;

const Table = styled.table`
  font-family: 'Open Sans', sans-serif;
  ${({ small }) => `font-size: ${small ? '14px' : '16px'};`}
`;

export default function VerticalTable({ dataSet = [], small = false, includeSemiColon = false }) {
  return (
    <Table small={small}>
      <tbody>
        {dataSet
          .filter((data) => !!data)
          .map((data, index) => (
            <tr key={index}>
              <TableHeader>
                {data.label}
                {includeSemiColon && ':'}
              </TableHeader>
              <td>{data.value}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
