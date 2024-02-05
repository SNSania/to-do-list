import inquirer from "inquirer";

let todos: string[] = [];
let loop = true;
interface TodoInput{
    todoItem: any;
    todo: string,
    AddIns: boolean,
}
while(loop){
    const todoInput: TodoInput = await inquirer.prompt([
        {
            type: "input",
            name: 'todoItem',
            message: "Creat a todo list?"
        },
        {
            type: "confirm",
            name: "AddIns",
            message: "do you want to add more taskes todo ?",
            default: false
        }
    ]);


    const todoItem = todoInput.todoItem;
    const AddIns = todoInput.AddIns;
    if(todoItem){
        todos.push(todoItem);
    }
    loop = AddIns;
};
if(todos.length > 0){
    console.log("here is your todo list:")
    for(let i = 0; i < todos.length; i++){
        console.log(`${i + 1}. ${todos[i]}`);
    }
}
else {
        console.log(`your todo list is Empty`);
    }

   
