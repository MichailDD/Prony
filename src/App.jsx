import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/Posts/CreatePost/CreatePost";
import Layoute from "./components/LayoutPage/LayoutePage";
import Boards from "./pages/Boards/Boards";
import Posts from "./pages/Posts/Posts";
import VotersPosts from "./pages/Posts/VotersPosts/VotersPosts";
// WorkSpace
import WorkSpaceMain from "./pages/WorkSpace/WorkSpaceMain/WorkSpaceMain";
import WorkSpace from "./pages/WorkSpace/WorkSpace";
import Changelog from "./pages/WorkSpace/changelog/Changelog";
import BoardWork from "./pages/WorkSpace/BoardWork/BoardWork";
import ChangePassword from "./pages/WorkSpace/ChangePassword/ChangePassword";
import Profile from "./pages/WorkSpace/profile/Profile";
import Avatar from "./pages/WorkSpace/Avatar/Avatar";
import Error404 from "./pages/WorkSpace/404/error404";
import Error505 from "./pages/WorkSpace/505/Error505";

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
        <Route path="/" element={<WorkSpace />}>
          <Route path="Main" element={<WorkSpaceMain />} />
          <Route path="Changelog" element={<Changelog />} />
          <Route path="Board" element={<BoardWork />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="ChangeProfile" element={<Profile />} />
          <Route path="ChangeAvatar" element={<Avatar />} />
          <Route path="404" element={<Error404 />} />
          <Route path="500" element={<Error505 />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
