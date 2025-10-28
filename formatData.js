import renderTables from "./renderTables.js";

const formatData = (data) => {
  const formattedData = data
    .toLowerCase()
    .replace(/\s+/g, " ")
    // consistency: removes any whitespace amount, adds a single space
    .replaceAll("each transfer in", "each-transfer-in")
    .replaceAll("stow to prime", "stow-to-prime")
    .split(" ");

  const formattedDataArrays = [];

  const chunkSize = 7;
  for (let i = 0; i < formattedData.length; i += chunkSize) {
    const chunk = formattedData.slice(i, i + chunkSize);
    formattedDataArrays.push(chunk);
  }

  renderTables(formattedDataArrays);
};

export default formatData;
