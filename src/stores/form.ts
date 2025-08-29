import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({
    submittedValue: '',
  }),
  getters: {
    getSubmittedValue: (state) => state.submittedValue,
  },
  actions: {
    setSubmittedValue(inputValue: string) {
      this.submittedValue = inputValue
    },
  },
})
