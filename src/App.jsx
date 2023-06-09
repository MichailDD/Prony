import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/Posts/CreatePost/CreatePost";
import Layoute from "./components/LayoutPage/LayoutePage";
import Boards from "./pages/Boards/Boards";
import Posts from "./pages/Posts/Posts";
import WorkSpace from "./pages/WorkSpace/WorkSpace";
import VotersPosts from "./pages/Posts/VotersPosts/VotersPosts";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layoute />}>
          <Route index path="/" element={<DashBoard />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/createPosts" element={<CreatePost />} />
          <Route path="/votersPosts" element={<VotersPosts />} />
        </Route>
        <Route>
          <Route path="/WorkSpacePage" element={<WorkSpace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
