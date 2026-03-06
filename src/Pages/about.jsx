import React from "react";
import styled from "styled-components";
import heroBg from "../assets/Food.jpg";


// --- Styled Components ---

const PageWrapper = styled.div`
  background-color: #1a1a1a;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 100px 20px;
  background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), 
              url(${heroBg});
  background-size: cover;
  background-position: center;
  h1 { font-size: 3.5rem; color: tomato; margin-bottom: 20px; font-family: 'Pacifico', cursive; }
  p { font-size: 1.2rem; color: #ddd; max-width: 800px; margin: 0 auto 80px; line-height: 1.6; }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin: 60px 0 40px;
  color: white;
  span { color: tomato; }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const ServiceCard = styled.div`
  background: #252525;
  padding: 40px;
  border-radius: 20px;
  border-bottom: 5px solid ${props => props.color || "tomato"};
  transition: 0.3s;
  &:hover { transform: translateY(-10px); }
  h3 { color: ${props => props.color || "tomato"}; margin-bottom: 15px; font-size: 1.5rem; }
  p { color: #ccc; line-height: 1.6; font-size: 0.95rem; }
  .icon { font-size: 3rem; margin-bottom: 20px; display: block; }
`;

const FeatureHighlight = styled.div`
  display: flex;
  align-items: center;
  background: #252525;
  border-radius: 25px;
  padding: 40px;
  margin-bottom: 40px;
  gap: 40px;
  flex-wrap: wrap;
  img { width: 100%; max-width: 400px; border-radius: 15px; object-fit: cover; }
  .content { flex: 1; h3 { color: tomato; font-size: 2rem; margin-bottom: 20px; } p { line-height: 1.8; color: #bbb; } }
`;

// --- Component ---

export default function About() {
  return (
    <PageWrapper>
      <HeroSection>
        <h1>All in One Superapp</h1>
        <p>
          More than just a ride. We are your gateway to seamless living.
          Whether you're commuting to work, craving local flavors, or
          exploring new cities, we bring the world to your fingertips.
        </p>
      </HeroSection>

      <Container>
        {/* SECTION 1: TRANSPORT */}
        <SectionTitle>Seamless <span>Mobility</span></SectionTitle>
        <ServiceGrid>
          <ServiceCard color="#ff6347">
            <span className="icon">🚗</span>
            <h3>Upfront Pricing</h3>
            <p>Know your fare before you book. No hidden costs, no surprises, just reliable transport across the city.</p>
          </ServiceCard>
          <ServiceCard color="#ff6347">
            <span className="icon">🛡️</span>
            <h3>Safety First</h3>
            <p>With SOS buttons, live trip sharing, and verified drivers, your safety is our top priority 24/7.</p>
          </ServiceCard>
          <ServiceCard color="#ff6347">
            <span className="icon">💎</span>
            <h3>Premium Fleet</h3>
            <p>Choose from standard commutes to executive luxury rides for those special business meetings.</p>
          </ServiceCard>
        </ServiceGrid>

        {/* SECTION 2: FOOD DELIVERY */}
        <SectionTitle>Cravings <span>Delivered</span></SectionTitle>
        <FeatureHighlight>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80" alt="Food Delivery" />
          <div className="content">
            <h3>Try every local cuisine</h3>
            <p>
              From the hidden gems of street food to Michelin-starred dining,
              <b> All-Food</b> brings the city's best flavors straight to your door.
              Track your order in real-time and enjoy contactless delivery every time.
            </p>
          </div>
        </FeatureHighlight>

        {/* SECTION 3: TRAVEL GUIDANCE */}
        <SectionTitle>Expert <span>Travel Guidance</span></SectionTitle>
        <ServiceGrid>
          <ServiceCard color="#4a90e2">
            <span className="icon">🗺️</span>
            <h3>Local Insights</h3>
            <p>Discover top-rated landmarks and "locals-only" spots with our integrated travel guide and smart maps.</p>
          </ServiceCard>
          <ServiceCard color="#4a90e2">
            <span className="icon">🎟️</span>
            <h3>Smart Ticketing</h3>
            <p>Skip the queues! Book tickets for museums, theme parks, and events directly within the All in One app.</p>
          </ServiceCard>
          <ServiceCard color="#4a90e2">
            <span className="icon">✈️</span>
            <h3>Travel Pass</h3>
            <p>Unlock exclusive discounts on airport transfers and hotel stays with our All-Access Travel Pass.</p>
          </ServiceCard>
        </ServiceGrid>

        {/* COMMITMENT SECTION */}
        <div style={{ background: 'tomato', padding: '60px', borderRadius: '30px', textAlign: 'center', marginTop: '80px' }}>
          <h2 style={{ color: 'white', marginBottom: '20px' }}>Ready to simplify your life?</h2>
          <p style={{ color: 'white', opacity: '0.9', marginBottom: '30px' }}>Join millions of users who trust All in One for their daily needs.</p>
          <button style={{
            background: 'white', color: 'tomato', border: 'none',
            padding: '15px 40px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer'
          }}>Download the App</button>
        </div>

      </Container>

      <footer style={{ textAlign: 'center', padding: '60px 20px', color: '#555' }}>
        <p>© 2010 - 2026 All in One Technologies. Empowering South East Asia.</p>
      </footer>
    </PageWrapper>
  );
}