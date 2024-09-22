// Objeto contendo os IDs das criptomoedas na API CoinGecko e seus elementos DOM correspondentes
const cryptoMap = {
  bitcoin: { id: "btcPrice" },
  binancecoin: { id: "bnbPrice" },
  ethereum: { id: "ethPrice" },
  tether: { id: "usdtPrice" },
  solana: { id: "solPrice" },
  toncoin: { id: "tonPrice" },
};

// Função para buscar o preço atual de uma criptomoeda
async function fetchCryptoPrice(coins) {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coins.join(
        "%2C"
      )}&vs_currencies=usd`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar os preços:", error);
    return null;
  }
}

// Função para atualizar o preço exibido para cada criptomoeda
async function updateAllPrices() {
  const coins = Object.keys(cryptoMap);
  const prices = await fetchCryptoPrice(coins);
  if (prices !== null) {
    for (const coin in cryptoMap) {
      if (prices[coin]) {
        document.getElementById(cryptoMap[coin].id).textContent = `USD ${prices[
          coin
        ].usd.toFixed(2)}`;
      }
    }
  }
}

// Atualiza os preços inicialmente e define um intervalo para atualizar periodicamente
updateAllPrices();
setInterval(updateAllPrices, 60000); // Atualiza a cada minuto


