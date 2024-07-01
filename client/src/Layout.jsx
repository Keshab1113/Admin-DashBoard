import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ConnectivityStatus from './pages/ConnectivityStatus'

function Layout() {

    return (
        <div className=' h-[100vh] overflow-hidden'>
            <Header />
            <ProgressBar />
            <ConnectivityStatus/>
            <Outlet />
        </div>
    )
}

export default Layout
