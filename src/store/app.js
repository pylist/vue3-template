import { defineStore } from "pinia";

export const userAppStore = defineStore('app', {
  state: ()  => ({
    count: 0
  }),
  actions: {
    increment() {
      this.$patch({
        count: this.count+1.
      })
    },
  }
})