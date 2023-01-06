import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./pages/GetImages"
import MyList from "./pages/MyList"
// import Profile from "./Profile"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
          {/* <Route path="/:username" element={<Profile />}></Route> */}
          <Route path="/mylist" element={<MyList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
