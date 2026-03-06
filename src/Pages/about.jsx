import React, { useState } from "react";
import styled from "styled-components";

// --- Styled Components ---

const PageWrapper = styled.div`
  background-color: #1a1a1a; /* Dark theme to match your app */
  color: white;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 60px;
  h1 { font-size: 3rem; color: tomato; margin-bottom: 10px; }
  p { font-size: 1.2rem; color: #ccc; max-width: 800px; margin: 0 auto; }
`;

const WhyUsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const FeatureCard = styled.div`
  background: #252525;
  padding: 30px;
  border-radius: 15px;
  border-top: 4px solid tomato;
  h3 { color: tomato; margin-bottom: 15px; }
  p { line-height: 1.6; color: #eee; }
`;

const GallerySection = styled.section`
  margin-top: 50px;
  h2 { text-align: center; margin-bottom: 40px; font-size: 2.5rem; }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

const PhotoCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  height: 250px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }

  .label {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }
`;

// --- About Component ---

export default function About() {
    return (
        <PageWrapper>
            {/* 1. Persuasive Text Section */}
            <HeroSection>
                <h1>Why All in One?</h1>
                <p>
                    We aren't just an app; we are your daily companion. By integrating
                    logistics, dining, and travel into one seamless interface, we save you
                    time and money.
                </p>
            </HeroSection>

            <WhyUsSection>
                <FeatureCard>
                    <h3>Unified Experience</h3>
                    <p>Stop switching between five different apps. Book a ride, order dinner, and plan your next vacation all in one place with one single payment method.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>Exclusive Savings</h3>
                    <p>Our "All-Access" travel pass gives you discounts across all services. Use it for a ride to the airport and get 20% off your meal when you land.</p>
                </FeatureCard>
                <FeatureCard>
                    <h3>24/7 Reliability</h3>
                    <p>With our AI-driven dispatch and logistics system, we ensure the fastest arrival times for both cars and food, guaranteed.</p>
                </FeatureCard>
            </WhyUsSection>

            {/* 2. Visual Gallery Section */}
            <GallerySection>
                <h2>Our Services in Action</h2>
                <PhotoGrid>
                    {/* Destination Pictures */}
                    <PhotoCard>
                        <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=500&q=80" alt="Paris" />
                        <div className="label">Dream Destinations</div>
                    </PhotoCard>
                    <PhotoCard>
                        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=500&q=80" alt="Mountain Travel" />
                        <div className="label">Adventure Travels</div>
                    </PhotoCard>

                    {/* Food Pictures */}
                    <PhotoCard>
                        <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=500&q=80" alt="Pizza" />
                        <div className="label">Delicious Food</div>
                    </PhotoCard>
                    <PhotoCard>
                        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80" alt="Gourmet Meal" />
                        <div className="label">Fast Delivery</div>
                    </PhotoCard>

                    {/* Car Pictures */}
                    <PhotoCard>
                        <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=80" alt="Luxury Car" />
                        <div className="label">Luxury Rides</div>
                    </PhotoCard>
                    <PhotoCard>
                        <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=500&q=80" alt="City Drive" />
                        <div className="label">City Commutes</div>
                    </PhotoCard>
                </PhotoGrid>
            </GallerySection>
        </PageWrapper>
    );
}