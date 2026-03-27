import '@testing-library/jest-dom/vitest'
import { describe, test, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlayerForm from './PlayerForm.jsx'

afterEach(() => {
    cleanup();
});

describe('Player Form Component', () => {
    test('Player form renders', () => {
        render(<PlayerForm />)
        expect(screen.getByText('Create a new Player')).toBeInTheDocument();
    });

    test('name input field exists', () => {
        render(<PlayerForm />)
        const nameInput = screen.getByLabelText(/your name/i);
        expect(nameInput).toBeInTheDocument();
    });

    test('email input field exists', () => {
        render(<PlayerForm />)
        const emailInput = screen.getByLabelText(/your email/i);
        expect(emailInput).toBeInTheDocument();
    });

    test('username input field exists', () => {
        render(<PlayerForm />)
        const username = screen.getByLabelText(/create your gamer username/i);
        expect(username).toBeInTheDocument();
    });

    test('submit button exists', () => {
        render(<PlayerForm />);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        expect(submitButton).toBeInTheDocument();
    });

    test('user can add input to player form for required fields', async () => {
        render(<PlayerForm />);
        const nameInput = screen.getByLabelText(/your name/i);
        const email = screen.getByLabelText(/your email/i);
        const username = screen.getByLabelText(/create your gamer username/i);

        await userEvent.type(nameInput, 'Namey Name');
        await userEvent.type(email, 'namey@mail.com');
        await userEvent.type(username, 'nameyname123');

        expect(nameInput).toHaveValue('Namey Name');
        expect(email).toHaveValue('namey@mail.com');
        expect(username).toHaveValue('nameyname123');
    });
});