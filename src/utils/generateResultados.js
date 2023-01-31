export function generarResultados (parts, cantGan) {
  const participantes = [...parts]

  const ganadores = [...Array(cantGan)].reduce((acc, n) => {
    const index = Math.floor(Math.random() * participantes.length)

    acc = acc.concat(participantes.find((_, idx) => idx === index))

    participantes.splice(index, 1)

    return acc
  }, [])

  return ganadores
}
