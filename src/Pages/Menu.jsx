// src/pages/Menu.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  margin: 1rem 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background: tomato;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: darkred;
  }
`;

const foodItems = [
  { id: 1, name: "Cheese Burger", price: 150 },
  { id: 2, name: "Margherita Pizza", price: 250 },
  { id: 3, name: "Pasta Alfredo", price: 200 },
  { id: 4, name: "Chicken Biryani", price: 180 },
];

export default function Menu() {
  return (
    <Container>
      <h1>Menu 🍽️</h1>
      <ul>
        {foodItems.map((item) => (
          <Item key={item.id}>
            <span>
              <strong>{item.name}</strong> - ₹{item.price}
            </span>
            <Button>Add to Cart</Button>
          </Item>
        ))}
      </ul>
    </Container>
  );
}
