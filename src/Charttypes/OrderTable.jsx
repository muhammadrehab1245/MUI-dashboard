import React from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import {  transactions } from '../Data';
export const OrderTable = () => {
    const columns = [
        { id: '_id', label: 'Id' },

        {
            id: 'buyer',
            label: 'Buyer',
        },
        { id: 'amount', label: 'Amount' },
        { id: 'productIds', label: 'Count' },

    ];
    return (
        <Paper sx={{ width: '100%',backgroundColor:'#48494e',color:'white' }}>
            <TableContainer  sx={{ maxHeight: 230 }}>
                <Table color='white' stickyHeader aria-label="sticky table">
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell
                                key={column.id}                                                   
                                style={{ top: 57 }}
                            >
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>

                    <TableBody>
                        {transactions.map((pro) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={pro.id}>
                                        {columns.map((column) => {
                                       //     console.log(column.id)
                                            const value = column.id==='productIds'?pro[column.id].length:pro[column.id]; 
                                            return (
                                                <TableCell key={column.id}>
                                                    {
                                                         value
                                                         }
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
