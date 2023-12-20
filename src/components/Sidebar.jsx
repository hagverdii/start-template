import toast from 'react-hot-toast'
import { NavLink, useNavigate } from 'react-router-dom'
import { LogoutIcon } from '../assets/HeroIcons'
import { useAuth } from '../context/AuthContext'

const Sidebar = () => {
  // Global variables
  const { logout, auth } = useAuth()

  // React router variables
  const navigate = useNavigate()

  return (
    <aside className="flex w-48 flex-col bg-darkblue-1000">
      {/* Logo and name. If clicked redirect to home page '/' */}
      <div onClick={() => navigate('/')} className="flex cursor-pointer flex-col items-center gap-2 py-4">
        <img className="w-14" src="/mia-logo.png" alt="logo" />
        <p className="font-bold text-white">Xüsusi Rabitə Şöbəsi</p>
      </div>

      {/* Navigation buttons of sidebar */}
      <nav className="flex w-full flex-col">
        <NavLink end to="/" className={({ isActive }) => (isActive ? 'active-nav-element' : 'nav-element')}>
          Home
        </NavLink>
        <NavLink
          end
          to="/private"
          className={({ isActive }) => (isActive ? 'active-nav-element' : 'nav-element')}
        >
          PrivatePage
        </NavLink>
        <NavLink
          end
          to="/unauthorized"
          className={({ isActive }) => (isActive ? 'active-nav-element' : 'nav-element')}
        >
          Unauthorized
        </NavLink>
        <NavLink end to="*" className={({ isActive }) => (isActive ? 'active-nav-element' : 'nav-element')}>
          Missing
        </NavLink>
      </nav>

      {/* User info */}
      <div className="mb-2 ml-2 mt-auto text-white">{auth?.name}</div>

      {/* Logout button */}
      <button
        onClick={() => {
          logout()
          navigate('/login', { replace: true })
          toast.success('İstifadəçi çıxış etdi')
        }}
        className="btn-red h-10 w-full rounded-none"
      >
        <LogoutIcon />
      </button>
    </aside>
  )
}
export default Sidebar
