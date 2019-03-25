import { action, thunk } from "easy-peasy";
import axios from "axios";

export default {
  preferences: {
    theme: "light"
  },
  macros: [],
  user: {},
  getUserSession: thunk(async (actions, payload) => {
    const user = await axios.get("/auth/sessions").then(res => {
      if (res.data) return res.data;
      return null;
    });
    actions.updateUser(user);
  }),
  updateUser: action((state, payload) => {
    state.user = { ...payload };
  })
};
