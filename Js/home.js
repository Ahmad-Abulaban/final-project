var xValues = ["2018", "2019", "2020", "2021", "2022"];
var yValues = [95, 85, 73, 99, 76];
var barColors = ["lightgray", "gray","black","darkgray","silver"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Customer satisfaction in 5 years"
    }
  }
});



// form


let myForm = document.getElementById("form")

myForm.addEventListener('submit', getComment);

function getComment(event) {

  event.preventDefault();

  let name = event.target.Name.value;

  let comment = event.target.Comment.value;


  renderComment(name, comment);
  
}


let container = document.getElementById('Table');

function renderComment(name, comment){

  let tr1 = document.createElement('tr');
  container.appendChild(tr1);
  let td1 = document.createElement('td');
  tr1.appendChild(td1);

  td1.textContent = name;

  let td2 = document.createElement('td');
  tr1.appendChild(td2);

  td2.textContent = comment;

}