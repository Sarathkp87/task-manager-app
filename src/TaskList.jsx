import React, { useState } from 'react';
import { ListGroup,Form } from 'react-bootstrap'
import './TakList.css'
import TaskForm from './TaskForm'
const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy milk', description: 'Buy milk from the grocery store', status: 'pending' },
    { id: 2, title: 'Walk the dog', description: 'Take the dog for a walk', status: 'pending' },
    { id: 3, title: 'Clean the house', description: 'Clean the entire house', status: 'completed' },
  ]);

  const toggleCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: task.status === 'pending' ? 'completed' : 'pending' };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  
  return (
    <div className="container mt-5 bg-secondary p-5 border border-5 border-solid-dark rounded-4">
<h1 className="mb-4 text-center font-weight-bold display-4 text-light border border-light rounded-3 p-2 ">Task Manager</h1>
      <div className="row mt-5">
        <div className="col-md-6  border border-light p-3 rounded">
          <h2 className="mb-3 text-light ">Task List</h2>
          <ListGroup>
            {tasks.map((task) => (
              <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
                <div>
                  <Form.Check
                    type="checkbox"
                    checked={task.status === 'completed'}
                    onChange={() => toggleCompleted(task.id)}
                    label={<span className={task.status === 'completed' ? 'completed' : ''}>{task.title}</span>}
                  />
                  <p className="mb-0">{task.description}</p>
                </div>
                {task.status === 'completed' ? (
                  <i className="bi bi-check-circle-fill text-success"></i>
                ) : (
                  <i className="bi bi-circle text-secondary"></i>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="col-md-6 border border-light p-3 rounded">
          <TaskForm />
        </div>
      </div>
    </div>
  );
};

export default TaskList;