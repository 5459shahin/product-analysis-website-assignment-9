import React, { useState } from 'react';



const Navbar = () => {
    /* const [open , setOpen] = useState(false);
    const routes = [
        {id: 1, name: 'Home', link: '/home'},
        {id: 2, name: 'Reviews', link: '/shop'},
        {id: 3, name: 'Dashboard', link: '/deals'},
        {id: 4, name: 'Blogs', link: '/coupons'},
        {id: 5, name: 'About', link: '/contact'}
    ] */
    return (
        <nav className='bg-indigo-200 h-20'>
             {/*  <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                 { open ? <XIcon></XIcon> :  <MenuIcon></MenuIcon>}

            </div> 
            <ul className={`md:flex justify-center absolute md:static bg-indigo-200 w-full md:h-20 duration-500 ease-linear ${open ? 'top-6' : 'top-[-120px]'}`}>
             {
                 routes.map(route => <Link 
                    key={route.id}
                    route={route}
                    ></Link>)
             }
        </ul> */}
    </nav>
   
    );
};

export default Navbar;