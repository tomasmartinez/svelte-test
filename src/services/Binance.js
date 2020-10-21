import Api from "./services/Api";

// Method to get a list of all Pokemon
export const getPokemonList = async () => {
    try {
      const response = await Api.get("/pokemon?limit=500");
      return response.results;
    } catch (error) {
      console.error(error);
    }
};

export const getPriceBySymbol = async(symbol) => {
    try {
      const response = await Api.get(`https://api.binance.com/api/v3/ticker/price?symbol=${name}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};