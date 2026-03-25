import { useState } from "react";

const InputCreate = ({ refreshTasks }) => {
  const [title, setTitle] = useState("");

  const handleCreate = async () => {
    if (!title) return; 
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title })
      });
      const newTask = await response.json();
      setTitle("");           
      refreshTasks();          
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleCreate} style={{ marginLeft: "0.5rem" }}>
        Añadir tarea
      </button>
    </div>
  );
};

export default InputCreate;