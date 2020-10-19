import Home from './pages/Home';
import UploaderInfo from './pages/UploaderInfo';
import UploadFiles from './pages/UploadFiles'
import ErrorPage from './pages/ErrorPage';
import Login from "./pages/Login";
import SignUp from './pages/SignUp'


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/uploaderinfo',
    component: UploaderInfo,
  },
  {
    path: '/uploadfiles',
    component: UploadFiles,
  },
  {
    path: '/error',
    component: ErrorPage,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/login',
    component: Login,
  },
  
];

export default routes;
