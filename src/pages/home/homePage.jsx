import React from "react";
import { Button } from "react-bootstrap";
import NavEg from "../../components/navbar";
import FooterEg from "../../components/footer";

function HomePage() {
    return (
        <>
            <div className="relative min-h-screen bg-cover bg-center text-white" style={{ backgroundImage: `url('/home.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute top-0 left-0 w-full">
                    <NavEg />
                </div>

                <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
                    <h3 className=" text-gray-300">
                        Welcome to Blossom Bliss
                    </h3>
                    <h1 className="font-bold leading-tight my-4">
                        Fresh Flowers Delivered to Your Doorstep <br />
                    </h1>
                    <p className="text-lg text-gray-200 mb-6 max-w-2xl">
                        Explore a vibrant tapestry of blooms and arrangements that add color,
                        fragrance, and elegance to your life. Discover the perfect floral expression for every moment and occasion.
                    </p>
                    <Button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700">
                        Shop Now
                    </Button>
                </div>
            </div>

            <FooterEg />
        </>
    );
}

export default HomePage;
