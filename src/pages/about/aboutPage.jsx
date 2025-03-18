import React from "react";
import NavEg from "../../components/navbar";
import FooterEg from "../../components/footer";

function AboutPage() {
    return (
        <>
            <div style={{
                backgroundImage: `url("/home.jpg")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                color: "#fff",
                padding: "40px",
            }}>

                {/* <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}><NavEg /></div> */}

                <div style={{
                    backgroundColor: "rgba(229, 156, 200, 0.32)",
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "800px",
                }}>
                    <h4 style={{ color: "#FFD700", fontSize: "22px", marginBottom: "10px" }}>
                        About Blossom Bliss
                    </h4>
                    <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "15px" }}>
                        Blossoming Your Special Moments with Nature's Finest
                    </h2>
                    <h5 style={{ fontSize: "18px", lineHeight: "1.6", textAlign: "justify" }}>
                        Welcome to the heart of Blossom Bliss, where our love for flowers blooms into exquisite
                        arrangements that celebrate life's most cherished moments. In this corner of the
                        internet, we invite you to discover our passion, our team, and the essence of
                        what makes Blossom Bliss a blooming success.
                    </h5>
                </div>
            </div>
            <FooterEg />

        </>
    );
}

export default AboutPage;
