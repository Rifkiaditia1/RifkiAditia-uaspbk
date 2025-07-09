// src/data/krsStore.js
import { defineStore } from 'pinia'

export const useKrsStore = defineStore('krs', {
  state: () => ({
    krsData: [],
  }),
  actions: {
    addKrs(item) {
      this.krsData.push(item)
    },
  },
})
