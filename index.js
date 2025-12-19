document.getElementById("btn").addEventListener("click", e => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(res => res.json())
    .then(data => {
      document.getElementById("activity").innerHTML = `${data.activity}`
    })
})