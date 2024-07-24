import { Shape, ExtrudeGeometry } from "three"

function RoundedPlaneGeometry(size, radius, depth) {
  let x, y, width, height

  x = y = - size / 2
  width = height = size
  radius = size * radius

  const shape = new Shape()

  shape.moveTo(x, y + radius)
  shape.lineTo(x, y + height - radius)
  shape.quadraticCurveTo(x, y + height, x + radius, y + height)
  shape.lineTo(x + width - radius, y + height)
  shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
  shape.lineTo(x + width, y + radius)
  shape.quadraticCurveTo(x + width, y, x + width - radius, y)
  shape.lineTo(x + radius, y)
  shape.quadraticCurveTo(x, y, x, y + radius)

  const geometry = new ExtrudeGeometry(
    shape,
    { depth: depth, bevelEnabled: false, curveSegments: 3 }
  )

  return geometry
}

export { RoundedPlaneGeometry }
