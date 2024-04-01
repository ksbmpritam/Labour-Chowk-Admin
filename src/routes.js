import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Booking = React.lazy(() => import('./views/booking/Booking'))
const UserNotification = React.lazy(() => import('./views/notification/users/displayNotifications/UserNotification'))
const AddUserNotification = React.lazy(() => import('./views/notification/users/addNotification/AddUserNotification'))
const PartnerNotifications = React.lazy(() => import('./views/notification/partners/displayNotification/PartnerNotifications'))
const AddPartnerNotification = React.lazy(() => import('./views/notification/partners/addNotification/AddPartnerNotification'))
const Jobs = React.lazy(() => import('./views/jobs/Jobs'))
const Wallet = React.lazy(() => import('./views/wallet/Wallet'))
const Banner = React.lazy(() => import('./views/banner/bannerDeatils/Banner'))
const AddBanner = React.lazy(() => import('./views/banner/addBanner/AddBanner'))
// const Partner = React.lazy(() => import('./views/theme/partner/Partner'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

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

  { path: '/booking', name: 'Booking', element: Booking },
  { path: '/notification', name: 'Notification', element: Notification },
  { path: '/userNotification', name: 'UserNotification', element: UserNotification },
  { path: '/add-user-notification', name: 'AddUserNotifications', element: AddUserNotification },
  { path: '/partnerNotifications', name: 'PartnerNotifications', element: PartnerNotifications },
  { path: '/add-partnet-notification', name: 'AddPartnerNotifications', element: AddPartnerNotification },
  { path: '/job-uploaded', name: 'Jobs', element: Jobs },
  { path: '/wallet', name: 'Wallet', element: Wallet },
  { path: '/banner', name: 'Banner', element: Banner },
  { path: '/addBanner', name: 'AddBanner', element: AddBanner },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
