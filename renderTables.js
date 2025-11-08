const tableBody = document.querySelectorAll(".tableBody");
const [tableBodyP2, tableBodyP3, tableBodyP4] = document.querySelectorAll(
  ".tableBodyP2, .tableBodyP3, .tableBodyP4"
);

const renderTables = (data) => {
  tableBody.forEach((tbody) => {
    tbody.innerHTML = "";
    // clear any previous data to prevent duplicates being rendered
  });

  data.forEach((element) => {
    if (element[5].includes("dz-p-a")) {
      // filters out decant results
      const station = parseInt(element[5].replace("dz-p-a", ""));

      if (station < 3000) {
        renderRow(tableBodyP2, element, station);
      }
      if (station > 3000 && station < 4000) {
        renderRow(tableBodyP3, element, station);
      }
      if (station > 4000) {
        renderRow(tableBodyP4, element, station);
      }
    }
  });
};

function renderRow(tableBody, element, station) {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");

  td1.textContent = element[0];
  td2.textContent = `${element[3]}:${element[2].slice(0, -1)}`;
  // removes the trailing s character
  td3.textContent = "";
  td4.textContent = "";
  td5.textContent = station;

  tr.append(td1, td2, td3, td4, td5);
  tableBody.appendChild(tr);
}

export default renderTables;
