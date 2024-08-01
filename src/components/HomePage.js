import React from 'react';
import myImage from '../assets/tree.png'; // Adjust the path as needed

const HomePage = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        margin: 0,
    };

    const imageContainerStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const imageStyle = {
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
    };

    return (
        <div style={containerStyle}>
            <h1 className="text-center mt-5">Welcome to Sean's Portfolio Page!</h1>
            <div style={imageContainerStyle}>
                <img 
                    src={myImage} 
                    alt="Tree" 
                    style={imageStyle}
                />
            </div>
        </div>
    );
};

export default HomePage;
