import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilApplications, cilBell, cilBookmark, cilCalculator, cilChartPie, cilContact, cilCursor, cilDescription, cilDrop, cilFilterPhoto, cilNotes, cilPaperPlane, cilPencil, cilPuzzle, cilSpeedometer, cilStar, cilWallet, cilWarning, } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  //! Partner Start 
  {
    component: CNavGroup,
    name: 'Partner',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Partner',
        to: '/all-partner',
      },
      {
        component: CNavItem,
        name: 'Active Partner',
        to: '/active-partner',
      },
      {
        component: CNavItem,
        name: 'Banned Partner',
        to: '/banned-partner',
      },
    ],
  },
  //! Partner End 
  //! User Start 
  {
    component: CNavGroup,
    name: 'User',
    icon: <CIcon icon={cilContact} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All User',
        to: '/all-user',
      },
      {
        component: CNavItem,
        name: 'Active User',
        to: '/active-user',
      },
      {
        component: CNavItem,
        name: 'Banned User',
        to: '/banned-user',
      },
    ],
  },
  //! User End 
  {
    component: CNavGroup,
    name: 'Notification',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User',
        to: '/user-notification',
      },
      {
        component: CNavItem,
        name: 'Partner',
        to: '/partner-notification',
      },
    ],
  },
  //! Skill Category Start 
  {
    component: CNavGroup,
    name: 'Skill Category',
    icon: <CIcon icon={cilApplications} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Skill',
        to: '/skill',
      },
      {
        component: CNavItem,
        name: 'Sub Skill',
        to: '/sub-skill',
      },
    ],
  },
  //! Skill Category End 
  {
    component: CNavItem,
    name: 'Banner',
    to: '/banner',
    icon: <CIcon icon={cilFilterPhoto} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Job Uploaded',
    to: '/job-uploaded',
    icon: <CIcon icon={cilPaperPlane} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Bidding',
    to: '/bidding',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Wallet',
    to: '/wallet',
    icon: <CIcon icon={cilWallet} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Complaint',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User',
        to: '/user-complaint',
      },
      {
        component: CNavItem,
        name: 'Partner',
        to: '/partner-complaint',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Charges',
        to: '/charges',
      },
      {
        component: CNavItem,
        name: 'Features',
        to: '/features',
      },
    ],
  },
]

export default _nav
