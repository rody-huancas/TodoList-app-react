export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <li className="w-[100%] px-10 py-5 flex gap-10 justify-between items-center bg-indigo-200 rounded-lg">
        <span
          className={`cursor-pointer uppercase font-semibold ${
            todo.done ? "line-through" : ""
          }`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          className="bg-red-500 py-2 px-5 rounded-lg text-white font-semibold uppercase"
          onClick={() => onDeleteTodo(todo.id)}
        >
          Eliminar
        </button>
      </li>
    </>
  );
};
