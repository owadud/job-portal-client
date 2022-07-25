import React from 'react';

const Banner = () => {
    return (
        <div className="hero " style={{backgroundImage: `url(https://api.lorem.space/image/fashion?w=1000&h=800)`}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-secondary-500">Welcome To Our Job Portal</h1>
                    <p className="mb-5 text-white">Find your Dream job here. Contact with Us if you have any questions.</p>
                    <button className="btn btn-primary">Contact</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;