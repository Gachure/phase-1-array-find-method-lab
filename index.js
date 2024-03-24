// code your solution here

const superbowlWin = (record) => {
    const winningRecord = record.find(game => game.result === "W");
  
    if (winningRecord) {
      return winningRecord.year;
    } else {
      return undefined;
    }
  };
  
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  const result = superbowlWin(record);
  console.log(result);