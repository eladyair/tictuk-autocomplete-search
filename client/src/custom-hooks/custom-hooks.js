import React, { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Set debouncedValue to value (passed in) after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup
        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return debouncedValue;
}
