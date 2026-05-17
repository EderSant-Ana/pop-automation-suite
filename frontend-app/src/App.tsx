import { useState, useEffect } from 'react';

interface Todo { id: number; title: string; }

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('http://localhost:8080/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodo) return;
    fetch('http://localhost:8080/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTodo })
    })
    .then(res => res.json())
    .then(data => {
      setTodos([...todos, data]);
      setNewTodo('');
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>POC Todo List - React</h1>
      <form onSubmit={addTodo}>
        <input 
          data-cy="todo-input"
          value={newTodo} 
          onChange={e => setNewTodo(e.target.value)} 
          placeholder="Nova tarefa..." 
        />
        <button data-cy="todo-submit" type="submit">Adicionar</button>
      </form>
      <ul data-cy="todo-list">
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  );
}