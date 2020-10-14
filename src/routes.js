import Home from './pages/Home';
import Upload from './pages/Upload';
import ErrorPage from './pages/ErrorPage';
// import Login from "./pages/Login";

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/upload',
    component: Upload,
  },
  {
    path: '/error',
    component: ErrorPage,
  },
];

export default routes;
