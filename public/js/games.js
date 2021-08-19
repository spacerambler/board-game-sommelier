const formElem = document.querySelector("#attPlayerForm");

const mainSearch = (event) => {
  event.preventDefault();

  const attendingPlayers = [];

  const form = document.querySelector("#attPlayerForm");

  console.log("Hello");
  console.log(form.elements);
  // PUTS CHECKED BOXES INTO AN ARRAY
  [...form.elements].forEach((item) => {
    console.log(item);
    if (item.checked) attendingPlayers.push(item.name);
    console.log(attendingPlayers);
  });
  // SENDS CHECKED BOXES TO NODE
  fetch("/api/groups", {
    method: "POST",
    body: JSON.stringify(attendingPlayers),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log("GAMESJS", data))
    .catch((error) => console.log("error"));
};

formElem.addEventListener("submit", mainSearch);
