import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
const MainLayout = ({childern}) => {
  return (
    <div className=''>
      <Header/>
      {childern}
      <Outlet/>
    </div>
  )
}

export default MainLayout