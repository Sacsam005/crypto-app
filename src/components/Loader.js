import React from 'react';
import spinner from '../img/spinner.gif'
const Loader = () => {
    return (
        <>
            <div className='spinner'>
                <img src={spinner} alt="Spiner" />
                <h1 className="text-center">Loading...</h1>
            </div>
        </>
    );
};

export default Loader;
