import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/Posts/CreatePost/CreatePost";
import Layoute from "./components/LayoutPage/LayoutePage";
import Boards from "./pages/Boards/Boards";
import Posts from "./pages/Posts/Posts";
<<<<<<< HEAD
import VotersPosts from "./pages/Posts/VotersPosts/VotersPosts";
import Tags from "./pages/Tags/Tags";
const App = (props) => {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Layoute/>}>
        <Route index path="/" element={<DashBoard/>}/>
        <Route path="/boards" element={<Boards/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/createPosts" element={<CreatePost/>}/>
        <Route path="/votersPosts" element={<VotersPosts/>}/>
        <Route path="/tags" element={<Tags/>}/>
=======
import WorkSpace from "./pages/WorkSpace/WorkSpace";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route index path="/" element={<DashBoard />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/createPosts" element={<CreatePost />} />
        </Route>
        <Route>
          <Route path="/WorkSpacePage" element={<WorkSpace />} />
>>>>>>> 61b2ddde0456d36978f4d94d4f2a00c1e955506d
        </Route>
      </Routes>
    </>
  );
};

export default App;
