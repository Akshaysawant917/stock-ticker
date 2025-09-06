const BASE_URL = "https://portal.tradebrains.in/api/assignment";

export async function fetchStock(symbol) {
  const res = await fetch(`${BASE_URL}/search?keyword=${symbol}&length=4`);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}

export async function fetchStockDetails(symbol) {
  const res = await fetch(`${BASE_URL}/search?keyword=${symbol}&length=1`);
  // console.log("resresresresresresres",res);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}

export async function fetchPriceDetails(symbol) {
  const res = await fetch(`${BASE_URL}/stock/${symbol}/prices?days=1&type=INTRADAY&limit=20`);
  if (!res.ok) throw new Error("price api error");
  const data = await res.json();
  return data;
}

export async function fetchMovers() {
  const res = await fetch(`${BASE_URL}/index/NIFTY/movers/`);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}
