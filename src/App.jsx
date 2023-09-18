
import './App.css'
import Axios from './components/Axios/Axios'
import LinkChart from './components/LinkChart/LinkChart'
// import DaisyNavbar from './components/DaisyNavbar/DaisyNavbar'
import MyNavbar from './components/MyNavbar/MyNavbar'
import PriceOptions from './components/Price options/PriceOptions'

function App() {

  return (
    <div>
            {/* <DaisyNavbar></DaisyNavbar> */}
            <MyNavbar></MyNavbar>
            <Axios></Axios>
            <PriceOptions></PriceOptions>
            <LinkChart></LinkChart>
    </div>
  )
}

export default App
