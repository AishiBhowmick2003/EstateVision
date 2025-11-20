

import { useState } from "react";
import { fetchProperties } from "./api/geminiAPI";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!location.trim()) {
      setError("Please enter a location");
      return;
    }
    setError("");
    setLoading(true);
    const data = await fetchProperties(location);
    setProperties(data);
    setLoading(false);
  };

  return (
    <div className="app">
      <header>
        <h1>AI Real Estate Finder</h1>
        <p>Discover dream homes with the power of AI.</p>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter a city or location (e.g., New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Fetching listings...</p>}

      <div className="property-grid">
        {properties.map((p, i) => (
          <div key={i} className="property-card">
            <img
              src={p.image_url || "https://via.placeholder.com/300x200?text=Property+Image"}
              alt={p.title}
              className="property-image"
            />
            <div className="property-info">
              <h3>{p.title}</h3>
              <p className="price">{p.price}</p>
              <p className="address">{p.address}</p>
              <p className="desc">{p.description}</p>
            </div>
          </div>
        ))}
      </div>

      {!loading && properties.length === 0 && !error && (
        <p className="hint">Try searching for “New York” or “Los Angeles”.</p>
      )}
    </div>
  );
}

export default App;


