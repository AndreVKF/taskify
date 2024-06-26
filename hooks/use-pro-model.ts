import { create } from 'zustand'

type ProModalStore = {
  id?: string
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export const useProModal = create<ProModalStore>((set) => ({
  id: undefined,
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
