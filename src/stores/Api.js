import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

// const Api = (set) => {
//   return {
//     post: [],
//     getApi: async () => {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       set((state) => {
//         state.post = response.data;
//       });
//     },
//   };
// };

// export const useApi = create(Api);

export const useContactsStore = create(
  devtools(
    immer((set) => ({
      contacts: [],
      getApi: async () => {
        const apiResponse = await axios.get("http://localhost:3005/contatcs");
        set((state) => {
          state.contacts = apiResponse.data;
        });
      },
      addContact: async (payload) => {
        const apiResponse = await axios.post(
          "http://localhost:3005/contatcs",
          payload
        );
        set((state) => {
          state.contacts.push(apiResponse.data);
        });
      },
      editContact: async (payload) => {
        const apiResponse = await axios.put(
          "http://localhost:3005/contatcs",
          payload
        );
        set((state) => {
          let contactsState = state.contacts.filter((_) => _.id !== payload.id);
          contactsState.push(apiResponse.data);
          state.contacts = contactsState;
        });
      },
    }))
  )
);

export const getContactById = (id) => {
  return (state) => {
    let contact = state.contacts.filter((c) => c.id === Number(id));
    if (contact) {
      return contact[0];
    }
    return null;
  };
};
