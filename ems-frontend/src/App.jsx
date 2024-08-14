import './App.css'
import HelloWorld from './HelloWorld.jsx'
import ListEmployeeComponent from './components/ListEmployeeComponent.jsx'
import HeaderComponent from './components/HeaderComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
          <Routes>
            {/* // http://localhost:3000*/}
            <Route path='/' element = {<ListEmployeeComponent></ListEmployeeComponent>}></Route>
            {/* // http://localhost:3000/employees*/}
            <Route path='/employees' element = {<ListEmployeeComponent></ListEmployeeComponent>}></Route> 
            {/* // http://localhost:3000/addEmployee*/}
            <Route path='/add-Employee' element = {<EmployeeComponent></EmployeeComponent>}></Route>
            {/* // http://localhost:3000/editEmployee/1*/}
            <Route path='/edit-employee/:id' element = {<EmployeeComponent></EmployeeComponent>}></Route>
          </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>
    </>
  )
}

export default App
