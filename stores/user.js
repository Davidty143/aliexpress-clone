// stores/counter.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: true,
    isLoading: true,
    cart: [],
    checkout: []
  }),
  persist: true
})