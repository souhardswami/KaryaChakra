import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('TaskForm renders correctly', () => {
  const { getByLabelText, getByText } = render(<TaskForm onCreateTask={() => {}} />);

  expect(getByLabelText(/title/i)).toBeInTheDocument();
  expect(getByLabelText(/description/i)).toBeInTheDocument();
  expect(getByText(/add task/i)).toBeInTheDocument();
});
