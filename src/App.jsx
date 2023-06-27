import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './pages/Dashboard/Dashboard';
import CreatePost from './pages/Posts/CreatePost/CreatePost';
import Layoute from './components/LayoutPage/LayoutePage';
import Boards from './pages/Boards/Boards';
import Posts from './pages/Posts/Posts';
import VotersPosts from './pages/Posts/VotersPosts/VotersPosts';
// WorkSpace
import WorkSpaceMain from './pages/WorkSpace/WorkSpaceMain/WorkSpaceMain';
import WorkSpace from './pages/WorkSpace/WorkSpace';
import Changelog from './pages/WorkSpace/changelog/Changelog';
import BoardWork from './pages/WorkSpace/BoardWork/BoardWork';
import ChangePassword from './pages/WorkSpace/ChangePassword/ChangePassword';
import Profile from './pages/WorkSpace/profile/Profile';
import Avatar from './pages/WorkSpace/Avatar/Avatar';
import Error404 from './pages/WorkSpace/404/error404';
import Error505 from './pages/WorkSpace/505/Error505';
import Login from './pages/WorkSpace/login/Login';
import Registration from './pages/WorkSpace/registration/Registration';
import Reset from './pages/WorkSpace/reset/Reset';
import NewPass from './pages/WorkSpace/newPassword/NewPass';
import Client from './components/Client/Client.jsx';
//
import AvatarScreen from './components/AvatarScreen/AvatarScreen';
import AddWorkspace from './components/Client/AddWorkspace/AddWorkspace';
import ChangePassWorkspace from './components/Client/ChangePassWorkspace/ChangePassWorkspace';
import DeleteWorkspace from './components/Client/DeleteWorkspace/DeleteWorkspace';
import EditWorkspace from './components/Client/EditWorkspace/EditWorkspace';
import MainClient from './components/Client/MainClient/MainClient';
import ProfileClient from './components/Client/ProfileClient/ProfileClient';
import SocialWorkspace from './components/Client/SocialWorkspace/SocialWorkspace';
import { formData } from './store';
import PaymentClient from './components/Client/PaymentClient/PaymentClient';
import BillingClient from './components/Client/BillingClient/BillingClient';
import BillingHistoryClient from './components/Client/BillingHistoryClient/BillingHistoryClient';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layoute />}>
          <Route path='/' index element={<DashBoard />} />
          <Route path='/boards' element={<Boards />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/createPosts' element={<CreatePost />} />
          <Route path='/votersPosts' element={<VotersPosts />} />
        </Route>
        <Route path='/' element={<Client />}>
          <Route path='/mainClient' element={<MainClient />} />
          <Route path='/edit' element={<EditWorkspace />} />
          <Route path='/add' element={<AddWorkspace />} />
          <Route path='/del' element={<DeleteWorkspace />} />
          <Route path='/change-pass' element={<ChangePassWorkspace />} />
          <Route path='/social' element={<SocialWorkspace />} />
          <Route path='/profile' element={<ProfileClient />} />
          <Route path='/avatar' element={<AvatarScreen state={formData.avatar} client={true} />} />
          <Route path='/billing' element={<BillingClient />} />
          <Route path='/billing-history' element={<BillingHistoryClient />} />
          <Route path='/payment/*' element={<PaymentClient />} />
        </Route>
        <Route path='/' element={<WorkSpace />}>
          <Route index path='Main' element={<WorkSpaceMain />} />
          <Route path='Changelog' element={<Changelog />} />
          <Route path='Board' element={<BoardWork />} />
          <Route path='ChangePassword' element={<ChangePassword />} />
          <Route path='ChangeProfile' element={<Profile />} />
          <Route path='ChangeAvatar' element={<Avatar />} />
          <Route path='Login' element={<Login />} />
          <Route path='Registration' element={<Registration />} />
          <Route path='404' element={<Error404 />} />
          <Route path='500' element={<Error505 />} />
          <Route path='Reset' element={<Reset />} />
          <Route path='NewPass' element={<NewPass />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
