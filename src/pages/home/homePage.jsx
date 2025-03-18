import React from "react";
import { Button } from "react-bootstrap";
import FooterEg from "../../components/footer";
import NavEg from "../../components/navbar";

function HomePage() {
    return (
        <>
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url('/home.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                color: 'white'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}></div>

                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                    <NavEg />
                </div>

                <div style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center',
                    padding: '0 20px'
                }}>
                    <h3 style={{ color: '#ddd' }}>Welcome to Blossom Bliss</h3>
                    <h1 style={{ fontWeight: 'bold', margin: '10px 0' }}>
                        Fresh Flowers Delivered to Your Doorstep
                    </h1>
                    <p style={{
                        fontSize: '18px',
                        color: '#eee',
                        maxWidth: '600px',
                        marginBottom: '20px'
                    }}>
                        Explore a vibrant tapestry of blooms and arrangements that add color,
                        fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion.
                    </p>
                    <Button style={{
                        backgroundColor: '#e91e63',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                        border: 'none'
                    }}>
                        Shop Now
                    </Button>
                </div>
            </div>

            <FooterEg />
        </>
    );
}

export default HomePage;
