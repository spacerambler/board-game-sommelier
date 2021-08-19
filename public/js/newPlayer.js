/* eslint-disable no-alert */
/* global document fetch */

async function newFormHandler(event) {
  event.preventDefault();
  console.log("SAVE PLAYER");
  const name = document.querySelector('input[name="player-name"]').value;

  if (name) {
    const response = await fetch("/api/players/new-player", {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      console.log("success");
      document.location.replace("/players");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#addPlayerForm")
  .addEventListener("submit", newFormHandler);
