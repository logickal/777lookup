'use client'

import { Tr, Td } from "@chakra-ui/react";

const TableRow = ({ row }) => {
    return (
        <Tr>
            <Td>{row.columnNumber}</Td>
            <Td>{row.columnName}</Td>
            <Td>
                {Array.isArray(row.data) ? row.data.join(', ') : row.data }
            </Td>
        </Tr>
    );
    }