import Header from './Header';
import SideBar from './Sidebar';
import Footer from './Footer';

import './styleLayout.css'

const Layout = (Component) => ({ ...props }) => (
    <div className="layout">
        <Header />
        <div className="container">
            <SideBar />
            <div className="main-container">
                <Component {...props} />
            </div>
        </div>
        <Footer />
    </div>
);

export default Layout;