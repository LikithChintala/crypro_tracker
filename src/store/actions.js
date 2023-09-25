import axiosClient from '../axiosClient';

export function getAllCryptos({ commit }) {
    axiosClient.get(`https://api.coincap.io/v2/assets`)
    .then(({ data }) => {
      commit('SET_COINS', data);
      return true
    })
}


export function getCoinDetails({ commit },id) {
    axiosClient.get(`https://api.coincap.io/v2/assets/${id}`)
    .then(({ data }) => {
      commit('SET_COIN_DETAILS', data);
    })
}
