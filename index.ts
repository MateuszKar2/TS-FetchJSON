import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number,
  title: string,
  completed: boolean,
};

axios.get(url).then(response => {

  //dane odpowiedzi mają właściwości 
  //wymieniliśmy właściwości
  //TS to dodoanie komentarza w formie maszynopisu
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);

}).catch(error => {
  console.log(error);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
    `);
}