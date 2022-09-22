import { defineStore } from "pinia";

export const useUiStore = defineStore({
  id: "uiStore",
  state: () => ({
    isNotificationModalOpen: false,
    isDarkMode: false,
  }),
  getters: {},
  actions: {
    openNotificationModal() {
      this.isNotificationModalOpen = true;
    },
    closeNotificationModal() {
      this.isNotificationModalOpen = false;
    },
    setDarkMode(isDarkMode: boolean) {
      this.isDarkMode = isDarkMode;
    },
  },
});
