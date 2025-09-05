export async function fetchStock(keyword) {
  const res = await fetch(`https://portal.tradebrains.in/api/assignment/search?keyword=${keyword}&length=4`);
  if (!res.ok) throw new Error("search api error");
  const data = await res.json();
  return data;
}
