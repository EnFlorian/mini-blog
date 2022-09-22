import { defineStore } from "pinia";

export const useNotesStore = defineStore({
  id: "notesStore",
  state: () => ({
    notes: [
      {
        id: 1,
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
      {
        id: 2,
        text: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      },
    ],
  }),
  getters: {},
  actions: {
    addNote(text: string) {
      this.notes.push({
        id: Math.random(),
        text,
      });
    },

    removeNoteById(id: number) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },

    updateNoteById(id: number, text: string) {
      const note = this.notes.find((note) => note.id === id);
      if (note) {
        note.text = text;
      }
    },
  },
});
