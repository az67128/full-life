export function pointyHexCorner(center, size, i) {
  const angle_deg = 60 * i - 30;
  const angle_rad = (Math.PI / 180) * angle_deg;
  return `${center.x + size * Math.cos(angle_rad)},${center.y +
    size * Math.sin(angle_rad)}`;
}
