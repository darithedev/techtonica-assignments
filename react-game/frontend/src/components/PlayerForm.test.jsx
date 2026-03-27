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
});