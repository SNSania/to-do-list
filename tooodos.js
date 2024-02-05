import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const todoInput = await inquirer.prompt([
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
    if (todoItem) {
        todos.push(todoItem);
    }
    loop = AddIns;
}
;
if (todos.length > 0) {
    console.log("here is your todo list:");
    for (let i = 0; i < todos.length; i++) {
        console.log(`${i + 1}. ${todos[i]}`);
    }
}
else {
    console.log(`your todo list is Empty`);
}
// import inquirer from "inquirer"
// let todos:string[]=[];
// let loop = true
// while(loop) {
//     const answers:{
//         TODO:string,
//         addmore:boolean 
//     } = await inquirer.prompt([
//         {
//             type:"input",
//             name:"TODO",
//             message:"Do you want to add in your Todo ?"
//         },
//         {
//             type:"confirm",
//             name:"addmore",
//             message:"do you want to add more ?"
//         },
//     ]);
//     const {TODO,addmore}= answers
//     loop = addmore;
//     if(TODO){
//         todos.push(TODO);
//     }else{
//         console.log("kindly add vaild input")
//     }
// }
// if (todos.length>0){
//     console.log("your todo list is :")
//     todos.forEach(todos=>{
//        console.log(todos)
//     });
// }
// else{
//     console.log("no todos found")
// }
