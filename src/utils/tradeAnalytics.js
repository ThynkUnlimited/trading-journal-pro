export function getPnL(trade) {
  return parseFloat(
    String(trade.pnl || "0").replace(/[^0-9.-]/g, "")
  ) || 0;
}

export function getNetPnL(trades = []) {
  return trades.reduce(
    (sum, trade) => sum + getPnL(trade),
    0
  );
}

export function getWinningTrades(trades = []) {
  return trades.filter(
    (trade) => trade.status === "Win"
  );
}

export function getLosingTrades(trades = []) {
  return trades.filter(
    (trade) => trade.status === "Loss"
  );
}

export function getWinRate(trades = []) {
  if (trades.length === 0) return 0;

  return (
    (getWinningTrades(trades).length /
      trades.length) *
    100
  );
}

export function getBestTrade(trades = []) {
  if (!trades.length) return 0;

  return Math.max(
    ...trades.map(getPnL)
  );
}

export function getWorstTrade(trades = []) {
  if (!trades.length) return 0;

  return Math.min(
    ...trades.map(getPnL)
  );
}

export function getAveragePnL(trades = []) {
  if (!trades.length) return 0;

  return getNetPnL(trades) / trades.length;
}

export function getTodaysPnL(trades = []) {
  const today = new Date().toISOString().split("T")[0];

  return trades
    .filter((trade) => trade.date === today)
    .reduce(
      (sum, trade) => sum + getPnL(trade),
      0
    );
}

export function getCurrentWinStreak(trades = []) {
  const sorted = [...trades].sort((a, b) => {
    const da = a.createdAt?.seconds || 0;
    const db = b.createdAt?.seconds || 0;

    return db - da;
  });

  let streak = 0;

  for (const trade of sorted) {
    if (trade.status === "Win") {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}