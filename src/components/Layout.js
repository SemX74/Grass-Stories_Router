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
                        <footer><p className='footer'>
                             Powered by React Router and jsonplaceholder
                             2022 by SemX74
                             </p></footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Layout}