import "./styles.css";

var purpose = document.getElementById("thePurpose"),
  teacher = document.getElementById("aTeachers"),
  studentAs = document.getElementById("studentsCan"),
  studentRole = document.getElementById("whoseRole"),
  quote1 = document.getElementById("quote1"),
  pic1 = document.getElementById("q1Pic"),
  quote2 = document.getElementById("quote2"),
  pic2 = document.getElementById("q2Pic"),
  inMyExp = document.getElementById("myExperience"),
  sources = document.getElementById("sources");

function changeTo(mode) {
  purpose.innerHTML = "";
  teacher.innerHTML = "";
  studentAs.innerHTML = "";
  studentRole.innerHTML = "";
  quote1.innerHTML = "";
  pic1.src = "";
  quote2.innerHTML = "";
  pic2.src = "";
  inMyExp.innerHTML = "";
  sources.innerHTML = "";
}

var flexNav = document.getElementById("flexNav");
flexNav.addEventListener("click", function(e) {
  console.log(e);
});
