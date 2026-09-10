export default function Icon({ name, size = 20, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  }

  const paths = {
    gamepad: <><path d="M6 11h4M8 9v4"/><path d="M15 12h.01M18 10h.01"/><path d="M6.5 6h11a4 4 0 0 1 3.9 4.9l-1.3 5.3a2 2 0 0 1-3.5.8l-1.4-1.7H8.8L7.4 17a2 2 0 0 1-3.5-.8l-1.3-5.3A4 4 0 0 1 6.5 6Z"/></>,
    bag: <><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    sparkle: <><path d="m12 3 1.2 3.3L16.5 7.5l-3.3 1.2L12 12l-1.2-3.3-3.3-1.2 3.3-1.2L12 3Z"/><path d="m18 13 .8 2.2L21 16l-2.2.8L18 19l-.8-2.2L15 16l2.2-.8L18 13Z"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.7 2.9 8.1 7 10 4.1-1.9 7-5.3 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    arrow: <><path d="M7 7h10v10"/><path d="M7 17 17 7"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></>,
    boxes: <><path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/></>,
  }

  return <svg {...common}>{paths[name]}</svg>
}
