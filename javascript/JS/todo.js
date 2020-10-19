//
//
//
//

let input = prompt('What would you like to do?');

const todos = ['Wash Dog', 'Drink Beer'];

while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    console.log('******************');
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log('******************');
  } else if (input === 'new') {
    const newTodo = prompt('Enter a new todo');
    todos.push(newTodo);
  } else if (input === 'delete') {
    const index = prompt('Enter an index to delete');
    const deleted = todos.splice(index, 1);
    console.log(deleted);
  }
  input = prompt('What would you like to do?');
}

console.log('Quit the app');

//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
//////////////////////////////
{
  /* <ul>
  <li>'new' - Add a todo</li>
  <li>'list' - List all todos</li>
  <li>'delete' - Remove specific todo</li>
  <li>'quit' - Quit app</li>
</ul>; */
}
