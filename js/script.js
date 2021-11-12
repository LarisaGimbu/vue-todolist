/*
  1. creare un array di oggetti contenenti gli item del to do list - ogni oggetto avrà due proprietà: 
  - `text`, una stringa che indica il testo del todo
  - `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no
*/

const app = new Vue({
  el:'#app',
  data:{
    toDoList:[
      {
        text:'Fare la spesa',
        done: false,
      },
      {
        text:'Studiare HTML/CSS',
        done: false,
      },
      {
        text:'Fare gli esercizi',
        done: false,
      },
      {
        text:'Sistemare gli appunti',
        done: false,
      },
    ]
  }
})