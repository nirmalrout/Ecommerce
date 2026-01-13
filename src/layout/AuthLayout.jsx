import { Outlet } from 'react-router-dom'

const AuthLayout = ({children}) => {
  return (
    <div className='auth-page'>
      {children}
      <Outlet/>
    </div>
  )
}

export default AuthLayout