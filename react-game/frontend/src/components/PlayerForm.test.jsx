import '@testing-library/jest-dom/vitest'
import { describe, test, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import PlayerForm from './PlayerForm.jsx'

afterEach(() => {
    cleanup();
});

describe('Player Form Component', () => {
    
});