import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/Dashboard/Dashboard";
import CreatePost from "./pages/Posts/CreatePost/CreatePost";
import Layoute from "./components/LayoutPage/LayoutePage";
import Boards from "./pages/Boards/Boards";
import Posts from "./pages/Posts/Posts";
import WorkSpace from "./pages/WorkSpace/WorkSpace";
import VotersPosts from "./pages/Posts/VotersPosts/VotersPosts";
import TagsCard from "./pages/Tags/TagsBoard/TagsCard/TagsCard";
import DetailUsers from "./pages/Users/DetailUser";
import Users from "./pages/Users/Users/Users";
import Changelog from "./pages/Changelog/Changelog";
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
          <Route path="/tags" element={<TagsCard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/detailUser" element={<DetailUsers />} />
          <Route path="/changelog" element={<Changelog />} />

        </Route>
        <Route>
          <Route path="/WorkSpacePage" element={<WorkSpace />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
