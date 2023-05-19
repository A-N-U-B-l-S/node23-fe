import './App.css'
import Home from "./pages/Home.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Wrapper from "./components/Wrapper.tsx";
import CreateBlog from "./pages/CreateBlog.tsx";

function App() {

  return (
    <>
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<Home/>} />
                    <Route path={'/login'} element={<Login/>} />
                    <Route path={'/register'} element={<Register/>} />
                    <Route path={'/create'} element={<CreateBlog/>} />
                </Routes>
            </BrowserRouter>
        </Wrapper>
    </>
  )
}


export default App
