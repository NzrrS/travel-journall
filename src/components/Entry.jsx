import markerImg from "../assets/images/marker.png";
export default function Entry(props) {
  return (
    <section className="cards-container">
      <div className="card">
        <img
          src={props.entry.img.src}
          alt={props.entry.img.alt}
          className="card-img"
        />
        <div className="content">
          <div className="location">
            <span>
              <img src={markerImg} alt="" className="location-marker" />
              <p>{props.entry.country}</p>
            </span>
            <a href={props.entry.googleMapsLink}>View on Google Maps</a>
          </div>
          <div className="card-text">
            <h3>{props.entry.title}</h3>
            <span>{props.entry.dates}</span>
            <p>{props.entry.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
