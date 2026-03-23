import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Register from './pages/Register'
import FoodMenu from './pages/FoodMenu'
import FormValidation from './day8/FormValidation'
import UseEffect from './day9/UseEffectHook'
import UseEffectHook from './day9/UseEffectHook'
import UseEffectWithCleanup from './day9/UseEffectWithCleanup'
import ControlledFormExample from './pages/ControlledFormExample'
import UnControlledFormExample from './pages/UncontrolledFormExample'
import ForgetPassword from './pages/ForgetPassword'
import UseContextHook from './day9/UseContextHook'
import SecondContext from './day9/SecondContext'
import UseMemoComponent from './pages/UseMemoComponent'
import UseCallbackComponent from './pages/UseCallbackComponent'
import CustomButton from './pages/UseCallbackComponent'
import TodoExample from './pages/TodoExample'
import Gallery from './pages/Gallery'
import UseReducerExample from './pages/UseReducerExample'
import CompA from './day11/myContext/Users'
import Navbar from './Navbar'
import Homee from './day11/myContext/Homee'
// import Toggle from './theme/Toggle'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/food menu" element={<FoodMenu />} />
          <Route path="/food menu" element={<FoodMenu />} />
          <Route path="/fvalid" element={<FormValidation />} />
          <Route path="/controlledformexample" element={<ControlledFormExample />} />
          <Route path="/uncontrolledformexample" element={<UnControlledFormExample />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/useeffectwithcleanup" element={<UseEffectWithCleanup />} />
          <Route path="/usecontexthook" element={<UseContextHook />} />
          <Route path="/secondcontext" element={<SecondContext />} />
          <Route path="/usememocomponent" element={<UseMemoComponent />} />
          <Route path="/usecallbackcomponent" element={<UseCallbackComponent />} />
          <Route path="/todo" element={<TodoExample />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/usereducer" element={<UseReducerExample />} />
          <Route path="/compA" element={<CompA />} />
          <Route path="/navbar" element={<Navbar />} />
          {/* <Route path="/toggle" element={<Toggle />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    <Homee />
  </StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { BrowserRouter, Route, Routes } from 'react-router'
// import App from './App'
// import TodoExample from './pages/TodoExample'
// import UserDetails from './UserDetails'
// import Home from './pages/Home'

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <BrowserRouter>
//             <Routes>
//                 {/* rested route */}
//                 <Route path='/' element={<App />}>
//                     <Route index element={<Home />} />
//                     <Route path='todo' element={<TodoExample />} />
//                     {/* dynamic route */}
//                     <Route path='user/:id'element={<UserDetails/>}/>
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     </StrictMode>
// )
