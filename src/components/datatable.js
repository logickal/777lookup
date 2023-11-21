'use client'

import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react'

const DataTable = ({ data }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Number</Th>
          <Th>Column</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr key={index}>
            <Td>{row.columnNumber}</Td>
            <Td>{row.columnName}</Td>
            <Td>{row.data}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default DataTable;