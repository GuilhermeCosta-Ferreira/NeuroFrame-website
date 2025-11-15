import './Cards.css'

export function CardCollection() {
  return (
    <div className="card-grid">
      <Card
        title="The Source Code"
        src="src/assets/Home Page/code.png"
        alt="Code editor on screen"
        href="https://github.com/NR-NeuroFrame"
      />
      <Card
        title="Parkinsonian Atlas"
        src="src/assets/Home Page/3d_brains.jpg"
        alt="3D mouse brains"
        href="/atlas"
      />
      <Card
        title="The Paper"
        src="src/assets/Home Page/paper.png"
        alt="Printed pages"
        href="/papers"
      />
    </div>
  );
}

function Card({
  title,
  src,
  alt = "",
  href = "#"
}) {
  return (
    <a className="card" href={href} aria-label={title}>
      <img className="card__img" src={src} alt={alt} loading="lazy" decoding="async" />
      <div className="card__overlay" aria-hidden="true" />
      <h3 className="card__title">{title}</h3>
    </a>
  );
}

export default CardCollection;