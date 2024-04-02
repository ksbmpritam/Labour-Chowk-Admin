import React from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';

const Skill = () => {
    //! Skill Start
    const skillData = [
        {
            id: 1,
            skill: "One",
        },
        {
            id: 2,
            skill: "Two",
        }
    ]

    const skillColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Skill',
            selector: row => row?.skill,
        },
        {
            name: 'Action',
            cell: row => <div style={{ display: "flex", gap: "20px", alignItems: "center" }} >
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Edit" icon={icon.cilPencil} style={{ cursor: "pointer" }} size="sm" />
                <CIcon data-tooltip-id="my-tooltip" data-tooltip-content="Delete" icon={icon.cilDelete} style={{ cursor: "pointer" }} size="sm" />
            </div>,
            width: '180px'
        },
    ]
    //! Skill End

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'Skill'} data={skillData} url={'add-skill'} />
                <DataTable
                    columns={skillColumns}
                    data={skillData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />
            </div>
        </>
    )
}

export default Skill