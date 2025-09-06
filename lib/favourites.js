export function addFavourite(stock) {
  const favs = JSON.parse(localStorage.getItem("favouriteStocks")) || [];
  if (!favs.find(s => s.symbol === stock.symbol)) {
    favs.push(stock);
    localStorage.setItem("favouriteStocks", JSON.stringify(favs));
  }
}

export function removeFavourite(symbol) {
  const favs = JSON.parse(localStorage.getItem("favouriteStocks")) || [];
  const newFavs = favs.filter(s => s.symbol !== symbol);
  localStorage.setItem("favouriteStocks", JSON.stringify(newFavs));
}

export function isFavourite(symbol) {
  const favs = JSON.parse(localStorage.getItem("favouriteStocks")) || [];
  return favs.some(s => s.symbol === symbol);
}
