import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CCloseButton, CRow, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/logo'
import labourChowkLogo from '../assets/logo/labour-chowk-logo-two.png'
import { sygnet } from 'src/assets/brand/sygnet'

// sidebar nav config
import navigation from '../_nav'
import { setAppState } from '../redux/actions/changeStateAction'

const AppSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.changeStateReducer.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.changeStateReducer.sidebarShow);

  return (
    <CSidebar
      className="border-end"
      // colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch(setAppState({ sidebarShow: visible }))
      }}

      style={{ backgroundColor: '#2A9BAA' }}
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
            <img className="sidebar-brand-full" src={labourChowkLogo} height="50px" />
            <img className="sidebar-brand-narrow" src={labourChowkLogo} height="40px" />
            <div className="sidebar-brand-full" style={{ color: "#fff", border: "none !important", fontWeight: "bold" }}>LABOUR CHOWK</div>
          </div>
        </CSidebarBrand>
        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch(setAppState({ sidebarShow: false }))}
        />
      </CSidebarHeader>
      <AppSidebarNav items={navigation} />
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch(setAppState({ sidebarUnfoldable: !unfoldable }))}
        />
      </CSidebarFooter>
    </CSidebar>
  )
}

export default React.memo(AppSidebar)
