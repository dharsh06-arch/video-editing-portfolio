"use client";

/**
 * HexagonPattern – a canvas of tessellated flat-top hexagons rendered as SVG.
 * Props match the magicui registry API:
 *  - gap      : space between hexagons (px)
 *  - radius   : outer radius of each hex (px)
 *  - x        : horizontal offset to nudge the grid
 *  - y        : vertical offset to nudge the grid
 *  - className: extra Tailwind / CSS classes on the <svg>
 */
export function HexagonPattern({ gap = 20, radius = 40, x = 0, y = 0, className = "" }) {
  // Flat-top hexagon geometry
  const w = radius * 2;
  const h = Math.sqrt(3) * radius;
  const colW = w * 0.75 + gap;
  const rowH = h + gap;

  // Build a single flat-top hex polygon path centred at (cx, cy)
  function hexPath(cx, cy) {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 180) * (60 * i); // flat-top: 0° start
      pts.push([cx + radius * Math.cos(angle), cy + radius * Math.sin(angle)]);
    }
    return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(2)},${p[1].toFixed(2)}`).join(" ") + " Z";
  }

  // Generate enough rows/columns to tile an oversized viewport
  const cols = 30;
  const rows = 20;
  const hexagons = [];
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const cx = col * colW + (row % 2 === 0 ? 0 : colW / 2);
      const cy = row * rowH;
      hexagons.push(hexPath(cx + x, cy + y));
    }
  }

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {hexagons.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
