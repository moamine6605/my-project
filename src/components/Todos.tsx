import { useEffect, useState } from "react"
import { nanoid } from 'nanoid'
import { FaTrash } from 'react-icons/fa';

export default function Todos() {

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
        <div className="container">
            {todoList.map((todo:Todo)=>{
            return (
                <div className="container-items" key={todo.id}>
                    <p>{new Date().toDateString()}</p>
                    <textarea disabled>{todo.todo}</textarea>
                    <button onClick={()=>setTodoList((prevList:Todo[]):Todo[]=>{
                        return prevList.filter((item)=>item.id!==todo.id)
                    })}><FaTrash /> Delete</button>
                </div>
            )
            })}
        </div>
    )
}