import Icon from "../Icon/Icon.jsx";
import "./Benefits.css";

const benefits = [
  {
    icon: "layers",
    title: "API REST",
    text: "El catálogo se obtiene dinámicamente desde DummyJSON mediante fetch y useEffect.",
  },
  {
    icon: "search",
    title: "Búsqueda controlada",
    text: "El usuario puede filtrar los productos por nombre desde un input controlado.",
  },
  {
    icon: "shield",
    title: "Estados claros",
    text: "La interfaz informa carga, error y datos sin perder la experiencia visual.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="ventajas">
      {benefits.map(({ icon, title, text }) => (
        <article key={title}>
          <span>
            <Icon name={icon} size={22} />
          </span>

          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
