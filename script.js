document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const physics = parseFloat(document.getElementById("physics").value);
  const chemistry = parseFloat(document.getElementById("chemistry").value);
  const maths = parseFloat(document.getElementById("maths").value);
  const attendance = parseFloat(document.getElementById("attendance").value);
  const discipline = parseFloat(document.getElementById("discipline").value);
  const rating = parseFloat(document.getElementById("rating").value);
  const extra = parseFloat(document.getElementById("extra").value);

  const totalScore = physics + chemistry + maths +
                     (attendance * 10) + (discipline * 10) +
                     (rating * 10) + (extra * 10);

  const percentage = (totalScore / 700) * 100;

  let behavior = "";
  if (percentage > 80) {
    behavior = "Excellent";
  } else if (percentage > 60) {
    behavior = "Good";
  } else {
    behavior = "Needs Improvement";
  }

  let suggestion = "No specific suggestion.";
  if (behavior === "Excellent" && physics > 80 && chemistry > 80 && maths > 80) {
    suggestion = "Suggested Course: Engineering";
  } else if (behavior === "Good" && physics > 60 && chemistry > 60 && maths > 60) {
    suggestion = "Suggested Course: Degree";
  }

  document.getElementById("behavior").textContent = "Behavior: " + behavior;
  document.getElementById("suggestion").textContent = suggestion;

  document.querySelector(".result").classList.add("show");
});
