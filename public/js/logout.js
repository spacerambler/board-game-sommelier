const logout = async () => {
  const response = await fetch("/api/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Error Logging out!");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
