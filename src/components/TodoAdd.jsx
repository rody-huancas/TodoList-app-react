import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
  const [error, setError] = useState(false);

  const { description, onInputChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (description.length <= 1) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 4000);
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      {error && (
        <p className="w-[100%] lg:w-1/2 text-center uppercase text-white bg-red-500 flex flex-col gap-1 py-2 rounded-lg font-semibold">
          <strong>Error!</strong>
          Llena todos los campos.
        </p>
      )}
      <form
        className="flex items-center flex-col sm:flex-row gap-2"
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          placeholder="¿Qué hay que hacer?"
          className="w-[300px] text-lg py-1 px-2 rounded-lg outline-none"
          name="description"
          value={description}
          onChange={onInputChange}
        />

        <button
          type="submit"
          className="bg-indigo-500 text-lg text-white font-semibold uppercase py-1 px-5 rounded-lg "
        >
          Agregar
        </button>
      </form>
    </>
  );
};
