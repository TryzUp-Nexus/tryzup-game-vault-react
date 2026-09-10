import Icon from './Icon.jsx'

const benefits = [
  { icon: 'layers', title: 'Componentes reutilizables', text: 'Cada sección se construye como una pieza independiente y fácil de mantener.' },
  { icon: 'boxes', title: 'Catálogo escalable', text: 'Los productos provienen de un arreglo de datos y se renderizan con map().' },
  { icon: 'shield', title: 'Estado controlado', text: 'Filtros y carrito usan estado de React sin modificar los datos directamente.' },
]

export default function Benefits() {
  return (
    <section className="benefits" id="ventajas">
      {benefits.map(({ icon, title, text }) => (
        <article key={title}>
          <span><Icon name={icon} size={22} /></span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </section>
  )
}
