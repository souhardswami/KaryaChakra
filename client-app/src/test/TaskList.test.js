import React from 'react';
import { render } from '@testing-library/react';
import TaskList from './TaskList';

test('TaskList renders correctly', () => {
  const mockTasks = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'To Do' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'In Progress' },
  ];

  const { getByText } = render(
    <TaskList tasks={mockTasks} onUpdateTask={() => {}} onDeleteTask={() => {}} />
  );

  expect(getByText(/Task 1/i)).toBeInTheDocument();
  expect(getByText(/Task 2/i)).toBeInTheDocument();
});
