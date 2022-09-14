const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount,allText) {
  const newRow = document.createElement("div");
  let WPM = ((allText / Number(timeTaken.toFixed(0))) * 60).toFixed(0);
  newRow.classList.add("card");
  newRow.innerHTML = `
  <h3>${questionText}</h3>
  <div>
  <p>You took: <span class="bold">${timeTaken}</span> seconds</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  <p>Your Speed: <span>${WPM}</span> WPM</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount,WPM });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory(WPM);
}

function displayHistory(wpm) {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    // let speed = ((Number(test.WPM) / Number(test.timeTaken.toFixed(0))) * 60).toFixed(0);
    // console.log(speed);
    newRow.innerHTML = `
  <h3>${test.questionText}</h3>
  <p>You took: <span class="bold">${test.timeTaken.toFixed(0)}</span> seconds</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
    <p>Your Speed: <span class = 'bold green'>${wpm}</span>WPM</p>
  `;

    histories.appendChild(newRow);
  });
}
