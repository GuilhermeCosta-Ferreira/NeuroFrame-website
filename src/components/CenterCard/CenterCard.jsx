import "./CenterCard.css";

export function CenterCard({ location }) {
  return (
    <div className="center-card">
      <img src={location.src} alt={location.name} className="center-image" />
      <div className="center-info">
        <h3 className="center-title">{location.name}</h3>
        <p>
          {location.acronym}, {location.id}
        </p>
        <ul className="center-details">
          <li>X Coordinate: {location.mci_coords.x} mm</li>
          <li>Y Coordinate: {location.mci_coords.y} mm</li>
          <li>Z Coordinate: {location.mci_coords.z} mm</li>
        </ul>
      </div>
    </div>
  );
}
