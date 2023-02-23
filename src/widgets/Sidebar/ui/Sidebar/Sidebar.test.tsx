import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar/Sidebar';
import {
    renderWithTranslation,
} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar tests', () => {
    test('find Sidebar in the document', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar-test')).toBeInTheDocument();
    });

    test('toggled Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar-test')).toHaveClass('collapsed');
    });
});
