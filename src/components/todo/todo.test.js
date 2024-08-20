import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { Todo } from './todo'; 


describe('Todo Component', () => {
    
    test('renders todo items correctly', () => {
        render(<Todo />);
        
        expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();
        expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
        expect(screen.getByText(/Покрытыми тестами/i)).toBeInTheDocument();
    });
    
    test('adds new todo item', async () => {
        render(<Todo />);
      
        const inputElement = screen.getByPlaceholderText(/What needs to be done?/i);
        const addButton = screen.getByText(/Add/i);
      
        await userEvent.type(inputElement, 'Новая задача');
        await userEvent.click(addButton);
      
        expect(screen.getByText(/Новая задача/i)).toBeInTheDocument();
      });

      test('filters todo items by status', async () => {
        render(<Todo />);
      
        
        await userEvent.click(screen.getByText(/All/i));
        expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();
        expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
        expect(screen.getByText(/Покрытыми тестами/i)).toBeInTheDocument();
      
        
        await userEvent.click(screen.getByText(/Active/i));
        expect(screen.getByText(/Тестовое задание/i)).toBeInTheDocument();
        expect(screen.queryByText(/Прекрасный код/i)).not.toBeInTheDocument();
        expect(screen.getByText(/Покрытыми тестами/i)).toBeInTheDocument();
      
        await userEvent.click(screen.getByText(/^Completed$/i));
        expect(screen.queryByText(/Тестовое задание/i)).not.toBeInTheDocument();
        expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();
        expect(screen.queryByText(/Покрытыми тестами/i)).not.toBeInTheDocument();
      });

      test('deletes completed todos', async () => {
        render(<Todo />);
      
        expect(screen.getByText(/Прекрасный код/i)).toBeInTheDocument();      
        await userEvent.click(screen.getByText(/Clear completed/i));      
        expect(screen.queryByText(/Прекрасный код/i)).not.toBeInTheDocument();
      });
})