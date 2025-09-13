// code your solution here
// index.js

function superbowlWin(record) {
  const winRecord = record.find((game) => game.result === "W");
  return winRecord ? winRecord.year : undefined;
}

// Export the function so tests can use it
module.exports = superbowlWin;
