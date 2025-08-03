import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'



function App() {


type Todo = {
  id: string;
  todo: string;
};

  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    const form = document.getElementById("add");

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      const todoItem = formData.get("todo")?.toString().trim();

      if (todoItem) {
        setTodoList((prevList) => [...prevList, { id: nanoid(), todo: todoItem }]);
      }

      target.reset();
    };

    form?.addEventListener("submit", handleSubmit);

    return () => {
      form?.removeEventListener("submit", handleSubmit);
    };
  }, []);


  return (
    <>
        <h1>To do list:</h1>
        <form action='#' id="add">
            <label htmlFor="todo">
                Task:
            </label>
            <input name="todo" type="text" id="todo" autoComplete="off" required/>
            <button type="submit">add to do</button>
        </form>
        <div>
            {todoList.map((todo:Todo)=>{
            return (
                <div key={todo.id}>
                    <div>{todo.todo}</div>
                    <button onClick={()=>setTodoList((prevList:Todo[]):Todo[]=>{
                        return prevList.filter((item)=>item.id!==todo.id)
                    })}>remove item</button>
                </div>
            )
            })}
        </div>


    </>
  )
}

export default App
