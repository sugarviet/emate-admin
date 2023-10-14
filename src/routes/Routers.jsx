import { Route, Routes } from "react-router-dom"
import { URL_ENDPOINT } from "../constants/url"
import Home from "../pages/Home"
import User from "../pages/User"
import UserDetail from "../pages/UserDetail"
import Wallet from "../pages/Wallet"
import RequestCastPage from "../pages/RequestCash"
import OrderTotalPage from "../pages/OrderTotal"

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={URL_ENDPOINT.HOME} element={<Home />}/>
        <Route path={URL_ENDPOINT.USER} element={<User />}/>
        <Route path={URL_ENDPOINT.USER_DETAIL} element={<UserDetail />}/>
        <Route path={URL_ENDPOINT.WALLET} element={<Wallet />}/>
        <Route path={URL_ENDPOINT.REQUEST_CASH} element={<RequestCastPage />}/>
        <Route path={URL_ENDPOINT.ORDER} element={<OrderTotalPage />}/>

      </Routes>
    </div>
    
  )
}

export default Routers
