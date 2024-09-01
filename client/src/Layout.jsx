import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import ProgressBar from './components/ProgressBar/ProgressBar'
import ConnectivityStatus from './pages/ConnectivityStatus'
import Footer from './components/Footer/Footer'

function Layout() {

    return (
        <div className=' overflow-x-hidden'>
            <Header />
            <ProgressBar />
            <ConnectivityStatus/>
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Layout
