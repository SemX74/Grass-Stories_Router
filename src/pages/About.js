import React from 'react';

const About = () => {
    return ( 
        <>
            <div className='about-wrapper'>
                <h1 className='about-title'>About</h1>
                <div className='about-links_bar'>
                    <a className='about-link insta' href='https:\instagram.com'></a>
                    <a className='about-link facebook' href='https:\facebook.com'></a>
                    <a className='about-link linkedin' href='https:\linkedin.com'></a>
                    <a className='about-link github' href='https:\github.com'></a>
                </div>
                <p className='about-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </>
     );
}
 
export {About};