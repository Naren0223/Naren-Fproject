import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  background-color: #1a1a1a;
  color: white;
  width: 100%;
`;

const HeroSection = styled.section`
  padding: 120px 20px; /* Increased padding */
  text-align: center;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
`;

const Title = styled.h1`
  color: tomato;
  font-size: clamp(2.5rem, 8vw, 4rem); /* Responsive font size */
  margin-bottom: 1rem;
  font-family: 'Pacifico', cursive;
`;

const Subtitle = styled.p`
  color: #ddd;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  line-height: 1.5;
`;

const DownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;

  button {
    padding: 14px 28px;
    border-radius: 30px; /* Pill shape for Grab look */
    border: 2px solid white;
    background: transparent;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background: white;
      color: tomato;
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
        <Title>All in One</Title>
        <Subtitle>
          The safest and fastest way to travel, eat, and explore.
          Leading the way across 500+ cities.
        </Subtitle>
        <DownloadButtons>
          <button>Android</button>
          <button>iOS</button>
          <button>Huawei</button>
        </DownloadButtons>
      </HeroSection>

      <SectionTitle>What you can do with All in One</SectionTitle>

      <ServicesGrid>
        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=500&q=80" alt="Rides" />
          <div className="content">
            <h3>Book rides to the best places</h3>
            <p>Markets, restaurants, and attractions. Get upfront fixed fares and verified drivers every time.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Food" />
          <div className="content">
            <h3>Try every local cuisine</h3>
            <p>From street food to Michelin-star dishes, delivered hot to your doorstep with All-Food.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&w=500&q=80" alt="Safety" />
          <div className="content">
            <h3>Travel safely always</h3>
            <p>Verified drivers, emergency SOS, and real-time trip tracking. Trusted by millions of users daily.</p>
          </div>
        </ServiceCard>

        <ServiceCard>
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500&q=80" alt="Cashless" />
          <div className="content">
            <h3>Go cashless, pay securely</h3>
            <p>No worries about local currency. Use your digital wallet for secure 24/7 fraud-protected payments.</p>
          </div>
        </ServiceCard>
      </ServicesGrid>
    </HomeWrapper>
  );
}