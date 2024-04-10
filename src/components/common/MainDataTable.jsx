import React from 'react'
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../styles'
import DataTableHeader from './DataTableHeader';

const MainDataTable = ({ title, columns, data }) => {
    return (
        <>
            <DataTableHeader title={title} data={data} />
            <DataTable
                columns={columns}
                data={data}
                pagination
                customStyles={DataTableCustomStyles}
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20]}
                paginationComponentOptions={{ rowsPerPageText: 'Rows Per Page :' }}
            />
        </>
    )
}

export default MainDataTable