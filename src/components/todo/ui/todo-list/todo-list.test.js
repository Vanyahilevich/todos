import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from "./todo-list"
import TodoItem from '../todo-item/todo-item';

describe('TodoList Component', () => {
    const todos = [
        {id: 1, task: 'Тестовое задание', completed: false},
        {id: 2, task: 'Прекрасный код', completed: true},
        {id: 3, task: 'Покрытыми тестами', completed: false,}
    ]

    const toggleTodo = jest.fn();

    test('render if todo list have children', () => {
        render(<TodoList>
            {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleTodo={toggleTodo}
          />
        ))}
        </TodoList>);
        expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();
        expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
        expect(screen.getByText(/Покрытыми тестами/i)).toBeInTheDocument();
    });

    test("render alarm text if todo list don't have children", () => {
        render(<TodoList>{[]}</TodoList>);
        expect(screen.getByText(/Nothing to do/i)).toBeInTheDocument();
    })
})