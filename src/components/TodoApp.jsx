import { TodoAdd, TodoList } from "./";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    pendingTodosCount,
  } = useTodo();

  return (
    <div className="h-[100vh] flex flex-col items-center bg-slate-100">
      <h1 className="mt-10 text-5xl uppercase font-extrabold">
        Todo <span className="text-indigo-600">App</span>
      </h1>
      <div className="my-5 flex gap-10">
        <p className="font-bold text-xl text-blue-500">
          TodoApp:{" "}
          <span className="text-gray-700 font-medium">{todosCount}</span>
        </p>
        <p className="font-bold text-xl text-red-500">
          Pendientes:{" "}
          <span className="text-gray-700 font-medium">{pendingTodosCount}</span>
        </p>
      </div>

      <div className="w-1/2 border-t-2 py-2 flex flex-col gap-2 items-center">
        <h4 className="uppercase text-xl font-semibold">Agregar Tarea</h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>

      <div className="row">
        <div className="col-7">
          {todosCount > 0 ? (
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onToggleTodo={handleToggleTodo}
            />
          ) : (
            <p className="mt-5 text-3xl text-center uppercase font-extrabold text-indigo-500">
              Aún no registras una tarea
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
