import { Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout.tsx';
import DashboardLayout from './layout/DashboardLayout.tsx';

import HomePage from './pages/user/HomePage.tsx';
import HotelListingPage from './pages/user/HotelListingPage.tsx';
import HotelDetailPage from './pages/user/HotelDetailPage.tsx';
import ShopListingPage from './pages/user/ShopListing.tsx';
import ShopDetailPage from './pages/user/ShopDetailPage.tsx';
import DashboardPage from './pages/admin/DashboardPage.tsx';
import HotelListing from './pages/admin/HotelListing.tsx';
import Users from './pages/admin/Users.tsx';
import Shops from './pages/admin/Shops.tsx';
import UserCreate from './pages/admin/UserCreate.tsx';
import SignIn from './pages/SignInPage.tsx';
import DefaultLayout from './layout/DefaultLayout.tsx';
import SignUp from './pages/SignUpPage.tsx';


const mainRoute = [
  {
    path: "/",
    element: HomePage,
    layout: MainLayout,
    meta: {
      title: 'Home',
      header: 'Home'
    }
  },
  {
    path: "/hotels",
    element: HotelListingPage,
    layout: MainLayout,
    meta: {
      title: 'Hotels List',
      header: 'Hotels List'
    }
  },
  {
    path: "/hotels/:id",
    element: HotelDetailPage,
    layout: MainLayout,
    meta: {
      title: 'Hotel Detail',
      header: 'Hotel Detail'
    }
  },
  {
    path: "/shops",
    element: ShopListingPage,
    layout: MainLayout,
    meta: {
      title: 'Shops List',
      header: 'Shops List'
    }
  },
  {
    path: "/shops/:id",
    element: ShopDetailPage,
    layout: MainLayout,
    meta: {
      title: 'Shop Detail',
      header: 'Shop Detail'
    }
  },
  {
    path: "/dashboard",
    element: DashboardPage,
    layout: DashboardLayout,
    meta: {
      title: 'Dashboard',
      header: 'Dashboard'
    }
  },
  {
    path: "/dashboard/hotels",
    element: HotelListing,
    layout: DashboardLayout,
    meta: {
      title: 'Hotel Listing',
      header: 'Hotel Listing'
    }
  },
  {
    path: "/dashboard/shops",
    element: Shops,
    layout: DashboardLayout,
    meta: {
      title: 'Shop Listing',
      header: 'Shop Listing'
    }
  },
  {
    path: "/dashboard/users",
    element: Users,
    layout: DashboardLayout,
    meta: {
      title: 'User Listing',
      header: 'User Listing'
    }
  },
  {
    path: "/dashboard/user/create",
    element: UserCreate,
    layout: DashboardLayout,
    meta: {
      title: 'Creaete User',
      header: 'Create User'
    }
  },
  {
    path: "/login",
    element: SignIn,
    layout: DefaultLayout,
    meta: {
      title: 'Sign In',
      header: 'Sign In'
    }
  },
  {
    path: "/register",
    element: SignUp,
    layout: DefaultLayout,
    meta: {
      title: 'Sign Up',
      header: 'Sign Up'
    }
  },
];

function App() {
  return (
    <Routes>
      {
        mainRoute.map((route: any) =>
          <Route element={<route.layout {...route.meta} />}>
            <Route path={route.path} element={<route.element />} />
          </Route>
        )
      }
    </Routes>
  )
}

export default App
