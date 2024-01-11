// code your solution here
// index.js

const superbowlWin = (record) => {
    const winningRecord = record.find(game => game.result === "W");
  
    // Check if a winning record was found
    if (winningRecord) {
      return winningRecord.year;
    } else {
      // If no win is found, return undefined
      return undefined;
    }
  };
  
  // Example usage
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ... other records
  ];
  
  const result = superbowlWin(record);
  console.log(result); // Output: "2015" or undefined if no win is found
  