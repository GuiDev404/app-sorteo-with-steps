import { create } from 'zustand'

export const useSorteo = create((set, get) => ({
  participantes: [],
  configuracion: {
    cantidad_ganadores: 1,
    premio: ''
  },
  setParticipantes: (participantes) => {
    const participantesClean = [...new Set(participantes.split(','))]
      .map(p => p.trim().toLowerCase())
      .filter(Boolean)

    set({ participantes: participantesClean })
  },
  setConfiguracion: (configuracion) => {
    set({ configuracion })
  }
}))
