import Header from "../components/header/Header";
import Footer from "../components/footer/Footer.js"
import { Outlet } from 'react-router-dom';


export default function RootLayout() {
  return (
    <div className="root-layout">
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
