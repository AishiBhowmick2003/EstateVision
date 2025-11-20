// src/components/PropertyCard.jsx
import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image || "https://via.placeholder.com/400x250"} alt={property.title} />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p className="location">{property.location}</p>
        <p className="price">{property.price}</p>
        <p className="details">
          🛏 {property.beds} Beds | 🛁 {property.baths} Baths | 📐 {property.sqft} sqft
        </p>
        <p className="description">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
