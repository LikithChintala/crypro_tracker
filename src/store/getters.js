// store/getters.js
export const getters = {
    coins: (state) => {

        if(state.searchValue.length > 0){
            return state.coins.data.filter((coin)=> coin.name.toLowerCase().includes(state.searchValue.toLowerCase()))
        }
        return state.coins.data
    },
    searchValue:(state)=>{
        return state.searchValue;
    },
    coinDetails:(state)=>{
        return state.coinDetails
    },
    // other getters...
  };
  