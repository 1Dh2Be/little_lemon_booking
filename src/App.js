import './App.css';

import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements
 } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/about-page/AboutPage';
import Menu from './pages/menu-page/Menu';
import BookingPage from './pages/booking-page/BookingPage';

 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About />}/>
      <Route path='menu' element={<Menu />}/>
      <Route path='reservation' element={<BookingPage/>}/>
    </Route>
  )
 )

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
