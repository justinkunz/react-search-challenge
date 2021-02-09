import React from 'react';
import Table from './Table';
import TableHeader from './TableHeader';

export default function VerticalTable({ dataSet = [], small = false, includeSemiColon = false }) {
  return (
    <Table small={small}>
      <tbody>
        {dataSet
          // Filter non objects from array
          .filter((data) => !!data || typeof data !== 'object')
          .map((data, index) => (
            <tr key={index}>
              <TableHeader>
                {data.label || ''}
                {includeSemiColon && ':'}
              </TableHeader>
              <td>{data.value}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
