'use client';

export default function Item({ name, quantity, category }) {
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        border: "1px solid #ddd",
        marginBottom: "10px",
        borderRadius: "8px",
        backgroundColor: "#87CEEB",  // Light blue background
        maxWidth: "250px",            // Make the box width more compact
      }}
    >
      <h3 style={{ margin: 0 }}>{name}</h3>
      <p style={{ margin: "5px 0" }}>Quantity: {quantity}</p>
      <p style={{ margin: "5px 0" }}>Category: {category}</p>
    </li>
  );
}
