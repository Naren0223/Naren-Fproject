import React from "react";
import styled from "styled-components";
import safetyimage from "../assets/Travel.jpg";
import Trip from "../assets/trip.jpg";

const HomeWrapper = styled.div`
  background-color: #1a1a1a;
  color: white;
  width: 100%;
`;

const HeroSection = styled.section`
  padding: 120px 20px;
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;

  h3 {
    color: #ddd;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto 80px; /* Pushes Android/iOS buttons lower */
    line-height: 1.6;
    font-weight: 400;
  }
`;

const Title = styled.h1`
  color: tomato;
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 1.5rem;
  font-family: 'Pacifico', cursive;
`;

const DownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  flex-wrap: wrap;

  button {
    padding: 14px 40px; 
    border-radius: 30px; 
    border: 2px solid white;
    background: transparent;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: white;
      color: tomato;
      transform: translateY(-3px);
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin: 80px 0 40px;
  font-size: 2.5rem;
  color: white;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px 100px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceCard = styled.div`
  background: #252525;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.5);

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
    background-color: #333;
  }

  .content {
    padding: 30px;
    h3 { color: tomato; margin-bottom: 12px; font-size: 1.5rem; }
    p { color: #ccc; line-height: 1.6; font-size: 0.95rem; }
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <HeroSection>
        <Title>Your single destination for all your needs.</Title>
        <h3>
          With All-in-One, book rides, order food, and explore many services effortlessly. Download now and experience convenience like never before.
        </h3>
        <DownloadButtons>
          <button>Android</button>
          <button>iOS</button>
        </DownloadButtons>
      </HeroSection>

      <SectionTitle>What you can do with All in One</SectionTitle>

      <ServicesGrid>
        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80" alt="Rides" />
          <div className="content">
            <h3>Book rides to the best places</h3>
            <p>Markets, restaurants, and attractions. Get upfront fixed fares and verified drivers every time.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" alt="Food" />
          <div className="content">
            <h3>Try every local cuisine</h3>
            <p>From street food to Michelin-star dishes, delivered hot to your doorstep with All-Food.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src={safetyimage} alt="Safety" />
          <div className="content">
            <h3>Travel safely always</h3>
            <p>Verified drivers, emergency SOS, and real-time trip tracking. Trusted by millions of users daily.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80" alt="Cashless" />
          <div className="content">
            <h3>Go cashless, pay securely</h3>
            <p>No worries about local currency. Use your digital wallet for secure 24/7 fraud-protected payments.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src={Trip} alt="Trip" />
          <div className="content">
            <h3>No more travel stress</h3>
            <p>Use the Trip Organizer to plan itineraries, manage bookings, and keep everything ready for your perfect trip.</p>
          </div>
        </ServiceCard>
      </ServicesGrid>
    </HomeWrapper>
  );
}