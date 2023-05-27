import React from 'react';

const Navigation = () => {
    return (
        <div className='bg-black p-5'>
            <nav className='container w-11/12 mx-auto text-white'>
                <div className="navigation-area">
                    <div class="grid grid-cols-4 gap-4">
                        <div className='logo'>
                            <img src="logo" alt="logo" />
                        </div>
                        <div>
                            <ul className='inline-flex text-right space-5'>
                                <li>Home</li>
                                <li>Blog</li>
                                <li>About</li>
                                <li>Details</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;