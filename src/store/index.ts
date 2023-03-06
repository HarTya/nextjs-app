import { Store } from 'types/store.interface'
import { create } from 'zustand'

export const useStore = create<Store>(set => ({
	isPageSwitching: false,
	setIsPageSwitching: status => set({ isPageSwitching: status })
}))
