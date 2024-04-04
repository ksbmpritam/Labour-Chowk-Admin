import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilApplications,
  cilBell,
  cilBookmark,
  cilCalculator,
  cilChartPie,
  cilContact,
  cilCursor,
  cilDescription,
  cilDrop,
  cilFilterPhoto,
  cilNotes,
  cilPaperPlane,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilWallet,
  cilWarning,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

export const Partner = () => {
  return (
    <>
      <div>Partner</div>
    </>
  )
}

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
    name: 'Booking',
    to: '/booking',
    icon: <CIcon icon={cilBookmark} customClassName="nav-icon" />,
  },
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
  // {
  //   component: CNavItem,
  //   name: 'Notifications',
  //   to: '/notification',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
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
  // {
  //   component: CNavItem,
  //   name: 'Report',
  //   to: '/report',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Old Partner',
  //   to: '/theme/partner',
  //   icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Admin', //! User
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // }
]

export default _nav
