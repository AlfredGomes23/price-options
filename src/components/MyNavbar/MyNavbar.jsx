import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from 'react-icons/ri';
import { IoCloseCircleOutline } from 'react-icons/io5';

const MyNavbar = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
    ];


    return (
        <nav className="text-xl">
            <div onClick={()=> setOpenMenu(!openMenu)} className="text-3xl lg:hidden">
            {
                    openMenu == true ? <IoCloseCircleOutline></IoCloseCircleOutline> : <RiMenu2Line ></RiMenu2Line>
            }
            </div>
            <ul className={`${openMenu ? 'top-2':'-top-80'} duration-100 lg:flex gap-5 absolute lg:static mt-5 bg-gray-200 p-5 ml-5 rounded-lg outline outline-1 outline-gray-700`}>{
                routes.map(route => <Link key={route.id} route={route}></Link>)
                }</ul>
        </nav>
    );
};

export default MyNavbar;