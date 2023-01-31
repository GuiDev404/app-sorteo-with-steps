import { create } from 'zustand'

export const useSorteo = create((set, get) => ({
  participantes: [],
  // ganador: '',
  configuracion: {
    cantidad_ganadores: 1,
    premio: ''
  },
  setParticipantes: (participantes) => {
    set({ participantes })
  },
  // setGanador: (ganador) => {
  //   set({ ganador })
  // },
  setConfiguracion: (configuracion) => {
    set({ configuracion })
  }
}))
