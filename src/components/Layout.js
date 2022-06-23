import { NavLink,Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div className="App">
                <div className='Background'>
                    <div className='Stories'>
                        <div className='NavBar'>
                            <NavLink to='/ ' className='NavBar-Link'>Home</NavLink>
                            <NavLink to='/posts' className='NavBar-Link'>Posts</NavLink>
                            <NavLink to='/about' className='NavBar-Link'>About</NavLink>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export {Layout}