import React from "react";
import { Button } from "react-bootstrap";
import NavEg from "../../components/navbar";
import FooterEg from "../../components/footer";
function HomePage() {

    return (
        <>
            <NavEg />
            <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-6">
                <header className="w-full max-w-4xl text-center mb-6">
                    {/* <h1 className="text-4xl font-bold text-pink-700">Blossom Bliss</h1> */}
                    <h5 className="text-lg text-gray-600">Fresh Flowers Delivered to Your Doorstep</h5>
                </header>

                <div className="w-full max-w-4xl flex flex-col items-center" >

                    <img src="/home.jpg" alt="Flowers" className="w-full rounded-xl shadow-md mb-6" />
                    <Button className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700">
                        Shop Now
                    </Button>
                </div>
            </div>
            <FooterEg />
        </>
    )
}
export default HomePage