import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ProjectCard } from './Cards';

const project = { title: 'Example', img: '/example.png', type: 'Website',
    description: 'Example project', link: 'https://example.com', tech: 'React' };

test('keyboard users can open details, reach the link, and hide details', () => {
    render(<ProjectCard project={project} detailsId="example-details" />);
    const toggle = screen.getByRole('button', { name: 'Show details for Example' });
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    userEvent.tab();
    expect(toggle).toHaveFocus();
    userEvent.type(toggle, '{enter}', { skipClick: true });
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(toggle).toHaveAttribute('aria-controls', 'example-details');
    userEvent.tab();
    expect(screen.getByRole('link', { name: 'Open Example' })).toHaveFocus();
    userEvent.tab({ shift: true });
    userEvent.type(toggle, ' ', { skipClick: true });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
});

test('activating a project link does not flip its card', () => {
    render(<ProjectCard project={project} detailsId="example-details" />);
    userEvent.click(screen.getByRole('button'));
    const link = screen.getByRole('link', { name: 'Open Example' });
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    userEvent.click(link);
    expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    expect(link).toBeInTheDocument();
});
