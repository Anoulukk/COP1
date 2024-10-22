import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Vertical} from './components/Vertical'

const wizardsBreadCrumbs: Array<PageLink> = [
  {
    title: 'form',
    path: '/crafted/pages/wizards/horizontal',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const WizardsPage = () => (
  <Routes>
    <Route element={<Outlet />}>
      <Route
        path='vertical'
        element={
          <>
            <PageTitle>ບົດວິພາກດານສິ່ງແວດລ້ອມ ແລະ ຄວາມປອດໄພ (ສວລ.5.1)</PageTitle>
            <Vertical />
          </>
        }
      />
      <Route index element={<Navigate to='/crafted/pages/wizards/vertical' />} />
    </Route>
  </Routes>
)

export default WizardsPage
