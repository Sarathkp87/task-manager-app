import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      const newErrors = {};
      if (!title) {
        newErrors.title = 'Title is required';
      }
      if (!description) {
        newErrors.description = 'Description is required';
      }
      setErrors(newErrors);
      return;
    }

    addTask({ title, description });
    setTitle('');
    setDescription('');
    setErrors({});
  };

  return (
    <div>
      <h2 className='text-light'>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label text-light">
            Title
          </label>
          <input
            type="text"
            className={`form-control ${errors.title ? 'is-invalid' : ''}`}
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <div className="invalid-feedback">{errors.title}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label text-light">
            Description
          </label>
          <textarea
            className={`form-control ${errors.description ? 'is-invalid' : ''}`}
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          {errors.description && <div className="invalid-feedback">{errors.description}</div>}
        </div>
        <div className="d-flex justify-content-end">
  <button type="submit" className="btn btn-primary mt-4">
    Submit
  </button>
</div>

      </form>
    </div>
  );
};

export default TaskForm;
