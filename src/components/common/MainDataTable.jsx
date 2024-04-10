import React from 'react'
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import { DataTableCustomStyles } from '../../styles'
import DataTableHeader from './DataTableHeader';
import MainLoader from '../loader/MainLoader';

const MainDataTable = ({ title, columns, data }) => {
    const { isLoading } = useSelector(state => state?.commonReducer)
    console.log("Is Laoding ::: ", isLoading)
    
    return (
        <>
            {isLoading ?
                <MainLoader /> :
                data &&
                <div style={{ padding: "20px", backgroundColor: "#fff", marginBottom: "20px" }}>
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
                </div>
            }
        </>
    )
}

export default MainDataTable