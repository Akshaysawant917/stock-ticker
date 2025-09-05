export async function fetchStock(symbol) {
  const res = await fetch(`https://portal.tradebrains.in/api/assignment/search?keyword=${symbol}&length=4`);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}

export async function fetchStockDetails(symbol) {
  const res = await fetch(`https://portal.tradebrains.in/api/assignment/search?keyword=${symbol}&length=1`);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}

export async function fetchPriceDetails(symbol) {
  const res = await fetch(`https://portal.tradebrains.in/api/assignment/stock/${symbol}/prices?days=1&type=INTRADAY&limit=1`);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}
;