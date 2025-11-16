import "./CenterCard.css";

export function CenterCard({ location, onChangeSelected = () => {} }) {
  return (
    <div className="center-card">
      <img src={location.src} alt={location.name} className="center-image" />
      <div className="center-info">
        <h3 className="center-title">{location.name}</h3>
        <p>
          {location.acronym}, {location.id}
        </p>
        <div className="all-center-details">
          <div>
            <b>MCI Coordinates</b>
            <ul className="mci-center-details">
              <li>X Coordinate: {location.mci_coords.x} mm</li>
              <li>Y Coordinate: {location.mci_coords.y} mm</li>
              <li>Z Coordinate: {location.mci_coords.z} mm</li>
            </ul>
          </div>

          {location.wt_coords?.x != null && (
            <div>
              <b>WT Coordinates</b>
              <ul className="wt-center-details">
                <li>X Coordinate: {location.wt_coords.x} mm</li>
                <li>Y Coordinate: {location.wt_coords.y} mm</li>
                <li>Z Coordinate: {location.wt_coords.z} mm</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <button
        className="center-close-btn"
        title="Close"
        aria-label={`Close ${location.name}`}
        onClick={() => onChangeSelected(location.name)}
      >
        X
      </button>
    </div>
  );
}
