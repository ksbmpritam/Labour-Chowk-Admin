import React from 'react'

//! Dashboard 
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

//! Partner 
const AllPartner = React.lazy(() => import('./views/partner/allPartner/AllPartner'))
const ActivePartner = React.lazy(() => import('./views/partner/activePartner/ActivePartner'))
const BannedPartner = React.lazy(() => import('./views/partner/bannedPartner/BannedPartner'))
const ViewPartner = React.lazy(() => import('./views/partner/viewPartner/ViewPartner'))

//! Users
const AllUser = React.lazy(() => import('./views/user/allUser/AllUser'))
const ActiveUser = React.lazy(() => import('./views/user/activeUser/ActiveUser'))
const BannedUser = React.lazy(() => import('./views/user/bannedUser/BannedUser'))
const ViewUser = React.lazy(() => import('./views/user/viewUser/ViewUser'))

//! Skill
const Skill = React.lazy(() => import('./views/skillCategory/skill/Skill'))
const AddSkill = React.lazy(() => import('./views/skillCategory/addSkill/AddSkill'))
const SubSkill = React.lazy(() => import('./views/skillCategory/subSkill/SubSkill'))
const AddSubSkill = React.lazy(() => import('./views/skillCategory/addSubSkill/AddSubSkill'))

//! Booking
const Booking = React.lazy(() => import('./views/booking/Booking'))

//! Notification
const UserNotification = React.lazy(() => import('./views/notification/users/displayNotifications/UserNotification'))
const AddUserNotification = React.lazy(() => import('./views/notification/users/addNotification/AddUserNotification'))
const PartnerNotifications = React.lazy(() => import('./views/notification/partners/displayNotification/PartnerNotifications'))
const AddPartnerNotification = React.lazy(() => import('./views/notification/partners/addNotification/AddPartnerNotification'))

//! Banner 
const Banner = React.lazy(() => import('./views/banner/bannerDeatils/Banner'))
const AddBanner = React.lazy(() => import('./views/banner/addBanner/AddBanner'))

//! Job Uploaded
const Jobs = React.lazy(() => import('./views/jobs/Jobs'))

//! Wallet
const Wallet = React.lazy(() => import('./views/wallet/Wallet'))


const routes = [
  { path: '/', exact: true, name: 'Home' },

  //! Dashboard 
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  //! Partner
  { path: '/all-partner', name: 'Colors', element: AllPartner },
  { path: '/active-partner', name: 'Colors', element: ActivePartner },
  { path: '/banned-partner', name: 'Colors', element: BannedPartner },
  { path: '/partner/:id', name: 'Colors', element: ViewPartner },

  //! User
  { path: '/all-user', name: 'Colors', element: AllUser },
  { path: '/active-user', name: 'Colors', element: ActiveUser },
  { path: '/banned-user', name: 'Colors', element: BannedUser },
  { path: '/user/:id', name: 'Colors', element: ViewUser },

  //! Skill
  { path: '/skill', name: 'Colors', element: Skill },
  { path: '/add-skill', name: 'Colors', element: AddSkill },
  { path: '/sub-skill', name: 'Colors', element: SubSkill },
  { path: '/add-sub-skill', name: 'Colors', element: AddSubSkill },

  //! Booking
  { path: '/booking', name: 'Booking', element: Booking },

  //! Notification
  { path: '/user-notification', name: 'UserNotification', element: UserNotification },
  { path: '/add-user-notification', name: 'AddUserNotification', element: AddUserNotification },
  { path: '/partner-notification', name: 'PartnerNotifications', element: PartnerNotifications },
  { path: '/add-partner-notification', name: 'AddPartnerNotification', element: AddPartnerNotification },

  //! Banner 
  { path: '/banner', name: 'Banner', element: Banner },
  { path: '/add-banner', name: 'AddBanner', element: AddBanner },

  //! Job Uploaded
  { path: '/job-uploaded', name: 'Jobs', element: Jobs },

  //! Wallet
  { path: '/wallet', name: 'Wallet', element: Wallet },
]

export default routes
