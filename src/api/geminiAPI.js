export async function fetchProperties(location) {
  try {
    const response = await fetch(`http://localhost:5000/api/properties?location=${encodeURIComponent(location)}`);
    if (!response.ok) throw new Error("Failed to fetch properties");
    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching properties:", error);
    return [];
  }
}




