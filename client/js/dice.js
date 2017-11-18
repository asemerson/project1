function roll1() {
  function diceRoll() {
      var randomNumberBetween1and6 = Math.floor((Math.random() * 6) + 1);
      console.log(randomNumberBetween1and6);
      return randomNumberBetween1and6;
  }
  
  function printDiceRoll1() {
      var table = document.getElementById("results");
      var cell = document.createElement('td');
      var row = document.createElement('tr');
      table.appendChild(row);
      row.appendChild(cell);
      cell.innerHTML = diceRoll()
  }
}

var element = document.getElementById("go")
element.onclick = diceRoll
element.onclick = printDiceRoll
element.onclick = diceRoll
element.onclick = printDiceRoll

// var duck = {
//     name: 'Quackers',
//     greet: function() {
//         return this.name
//     }
// }
// var duck = {}
// duck.name = 'Quackers'
// duck.greet = function() {
//     return this.name
// }

// console.log(duck)
// console.log(duck.greet())