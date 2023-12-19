import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoutes from './components/ProtectedRoutes'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MissingPage from './pages/MissingPage'
import PrivatePage from './pages/PrivatePage'
import UnauthorizedPage from './pages/UnauthorizedPage'

const App = () => {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} duration={'4000'} />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<ProtectedRoutes allowedRoles={['ROLE_USER']} />}>
            <Route path="/private" element={<PrivatePage />} />
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/unauthorized" element={<UnauthorizedPage />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}
export default App
