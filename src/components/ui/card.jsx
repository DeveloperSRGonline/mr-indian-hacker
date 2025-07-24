// src/components/ui/card.jsx
import React from "react";
import "./card.scss";

export const Card = ({ children }) => {
  return <div className="custom-card">{children}</div>;
};

export const CardContent = ({ children }) => {
  return <div className="custom-card-content">{children}</div>;
};
