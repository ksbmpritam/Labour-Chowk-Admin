import React from 'react'
import CIcon from '@coreui/icons-react';
import DataTable from 'react-data-table-component';
import * as icon from '@coreui/icons';
import { DataTableCustomStyles } from '../../../styles';
import DataTableHeaderWithAdd from '../../../components/common/DataTableHeaderWithAdd';

const SubSkill = () => {
    //! Sub Skill Start
    const subSkillData = [
        {
            id: 1,
            skill: "Skill One",
            subSkill: "One"
        },
        {
            id: 2,
            skill: "Skill One",
            subSkill: "Two"
        },
        {
            id: 3,
            skill: "Skill Two",
            subSkill: "One"
        }
    ]

    const subSkillColumns = [
        {
            name: 'S.No',
            selector: (row, index) => index + 1,
        },
        {
            name: 'Skill',
            selector: row => row?.skill,
        },
        {
            name: 'Sub SKill',
            selector: row => row?.subSkill,
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
    //! Sub Skill End

    return (
        <>
            <div style={{ padding: "20px", backgroundColor: "#fff" }}>
                <DataTableHeaderWithAdd title={'Sub Skill'} data={subSkillData} url={'add-sub-skill'} />
                <DataTable
                    columns={subSkillColumns}
                    data={subSkillData}
                    pagination
                    customStyles={DataTableCustomStyles}
                />
            </div>
        </>
    )
}

export default SubSkill