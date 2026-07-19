import { describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { TodoNewForm } from './todo-new-form';

describe('TodoNewForm', () => {
  it('submits the entered title and clears the input', () => {
    const onSubmit = vi.fn();
    render(<TodoNewForm onSubmit={onSubmit} />);

    const input = screen.getByLabelText('New Item');
    fireEvent.change(input, { target: { value: 'Buy milk' } });
    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(onSubmit).toHaveBeenCalledWith('Buy milk');
    expect(input).toHaveValue('');
  });

  it('does not submit when the input is empty', () => {
    const onSubmit = vi.fn();
    render(<TodoNewForm onSubmit={onSubmit} />);

    fireEvent.click(screen.getByRole('button', { name: 'Add' }));

    expect(onSubmit).not.toHaveBeenCalled();
  });
});
