/*
  1. creare un array di oggetti contenenti gli item del to do list - ogni oggetto avrà due proprietà: 
  - `text`, una stringa che indica il testo del todo
  - `done`, un booleano (true/false) che indica se il todo è stato fatto oppure no

  2. Stampare all’interno di una lista, un item per ogni todo.
  Se la proprietà `done` è uguale a `true`, visualizzare il testo del todo ~~sbarrato~~.

  3. Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

  4. Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
*/

const app = new Vue({
  
  el:'#app',

  data:{
    toDoList:[
      {
        text:'Fare la spesa',
        done: true,
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
    ],
    newToDo:
    {
      text:'',
      done: false,
    },
  },

  methods:{

    removeItem(index){
      this.toDoList.splice(index, 1);
    },

    insertToDo(){
      this.toDoList.push(this.newToDo);
    }
  }
})