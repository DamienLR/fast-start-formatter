const tableBodyP2 = document.querySelector(".tableBodyP2");
const tableBodyP3 = document.querySelector(".tableBodyP3");
const tableBodyP4 = document.querySelector(".tableBodyP4");

const td = document.createElement("td");

const renderTables = (data) => {
  data.forEach((element) => {
    if (element[5].includes("dz-p-a")) {
      // filters out decant results
      const station = parseInt(element[5].replace("dz-p-a", ""));

      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("td");
      const td5 = document.createElement("td");

      if (station < 3000) {
        tableBodyP2.appendChild(tr);
        renderChildren();
      }

      if (station > 3000 && station < 4000) {
        tableBodyP3.appendChild(tr);
        renderChildren();
      }

      if (station > 4000) {
        tableBodyP4.appendChild(tr);
        renderChildren();
      }

      function renderChildren() {
        tr.appendChild(td1).textContent = element[0];
        tr.appendChild(td2).textContent = `${element[3]}:${element[2].slice(
          0,
          -1
        )}`;
        tr.appendChild(td3).textContent = null;
        tr.appendChild(td4).textContent = null;
        tr.appendChild(td5).textContent = station;
      }
    }
  });
};

export default renderTables;
