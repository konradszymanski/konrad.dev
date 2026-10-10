import React from 'react';
import { render, act } from '@testing-library/react';
import Header from './Header';
jest.mock('./Navigation', () => () => null);
jest.mock('./NextSection', () => () => null);
test('intro timers are scoped to a mounted header and cleaned up on unmount', () => {
    jest.useFakeTimers();
    const { container, unmount } = render(<Header />);
    act(() => jest.advanceTimersByTime(1000));
    expect(container.querySelector('#element1').style.opacity).toBe('1');
    expect(container.querySelector('#element2').style.opacity).toBe('');
    const clearTimer = jest.spyOn(global, 'clearTimeout');
    unmount();
    expect(clearTimer).toHaveBeenCalledTimes(4);
    act(() => jest.runOnlyPendingTimers());
    clearTimer.mockRestore();
    jest.useRealTimers();
});
