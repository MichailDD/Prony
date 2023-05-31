import s from "./App.module.css"
import { Route, Routes } from 'react-router-dom'
import DashBoard from "./pages/Dashboard/Dashboard";

import Layoute from "./components/LayoutPage/LayoutePage";
import Boards from "./pages/Boards";

const App = (props) => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Layoute/>}>
        <Route index path="/" element={<DashBoard/>}/>
        <Route path="boards" element={<Boards/>}/>
        </Route>
      </Routes>
    </>
   );
}
 
export default App;