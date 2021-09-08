import { EKLE } from "../actions";

const INITIAL_STATE = {
  liste: [
    { id: 1, baslık: "alısverıs", tamamlandı: false },
    { id: 2, baslık: "fatura", tamamlandı: true },
    { id: 3, baslık: "calıs", tamamlandı: false },
  ],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EKLE:
      return {
        ...state,
        liste: [
          ...state.liste,
          {
            id: state.liste.length + 1,
            baslık: action.payload,
            tamamlandı: false,
          },
        ],
      };
    default:
      return state;
  }
};
