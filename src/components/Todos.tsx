import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Todos() {
  type Todo = {
    id: string;
    todo: string;
  };

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Add todo
  useEffect(() => {
    const form = document.getElementById("add");

    const handleSubmit = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
      const todoItem = formData.get("todo")?.toString().trim();

      if (todoItem) {
        setTodoList((prevList) => [
          ...prevList,
          { id: nanoid(), todo: todoItem },
        ]);
      }

      target.reset();
    };

    form?.addEventListener("submit", handleSubmit);
    return () => form?.removeEventListener("submit", handleSubmit);
  }, []);

  // Edit todo
  const handleEditSubmit = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    const editItem = formData.get(`${id}-item`)?.toString().trim();

    if (editItem) {
      setTodoList((prevList) =>
        prevList.map((item) =>
          item.id === id ? { ...item, todo: editItem } : item
        )
      );
    }

    setEditingId(null);
  };

  return (
    <div className="container">
      {todoList.map((todo) => (
        <div className="container-items" key={todo.id}>
            <p>{new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
            })}</p>

          <form onSubmit={(e) => handleEditSubmit(e, todo.id)}>
            <textarea
              name={`${todo.id}-item`}
              disabled={editingId !== todo.id}
              defaultValue={todo.todo}
            />

            <div className="edit-buttons">
              <button
                type="button"
                className="Delete"
                onClick={() =>
                  setTodoList((prevList) =>
                    prevList.filter((item) => item.id !== todo.id)
                  )
                }
              >
                <FaTrash /> Delete
              </button>

              {editingId === todo.id && (
                <button className="submit" type="submit">
                  Submit
                </button>
              )}

              <button
                type="button"
                className="Edit"
                onClick={() =>
                  setEditingId(editingId === todo.id ? null : todo.id)
                }
              >
                <FaEdit /> Edit
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
}
