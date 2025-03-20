import React from "react";
import CountUp from "react-countup";
import NavEg from "../../components/navbar";
import FooterEg from "../../components/footer";
import { useInView } from "react-intersection-observer";

function AboutPage() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation runs only once
  });

  return (
    <>
      <div
        style={{
          backgroundImage: `url("/gfl1.jpg")`,
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
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            borderRadius: "10px",
            maxWidth: "800px",
          }}
        >
          <h4
            style={{ color: "#FFD700", fontSize: "22px", marginBottom: "10px" }}
          >
            About Blossom Bliss
          </h4>
          <h2
            style={{
              fontSize: "28px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            Blossoming Your Special Moments with Nature's Finest
          </h2>
          <h5
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              textAlign: "justify",
            }}
          >
            Welcome to the heart of Blossom Bliss, where our love for flowers
            blooms into exquisite arrangements that celebrate life's most
            cherished moments. In this corner of the internet, we invite you to
            discover our passion, our team, and the essence of what makes
            Blossom Bliss a blooming success.
          </h5>

          {/* CountUp Stats Section */}
          <div
            ref={ref}
            style={{
              marginTop: "30px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <div>
              <h2
                style={{
                  color: "#FFD700",
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
                {inView && (
                  <CountUp start={0} end={10000} duration={3} separator="," />
                )}
              </h2>
              <p>Flowers Delivered</p>
            </div>
            <div>
              <h2
                style={{
                  color: "#FFD700",
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
                {inView && (
                  <CountUp start={0} end={5000} duration={3} separator="," />
                )}
              </h2>
              <p>Happy Customers</p>
            </div>
            <div>
              <h2
                style={{
                  color: "#FFD700",
                  fontSize: "36px",
                  fontWeight: "bold",
                }}
              >
                {inView && <CountUp start={0} end={5} duration={3} />}
              </h2>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>

      <FooterEg />
    </>
  );
}

export default AboutPage;
