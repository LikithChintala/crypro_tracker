export function SET_COINS(state, payload) {
    state.coins = payload || [];
  }

export function SET_SEARCH_VALUE(state, payload) {
state.searchValue = payload || "";
}

export function SET_COIN_DETAILS(state, payload) {
    state.coinDetails = payload || {};
    }
