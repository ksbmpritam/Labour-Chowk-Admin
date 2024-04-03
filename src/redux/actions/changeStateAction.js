export const setAppState = (newState) => ({
    type: 'set',
    ...newState,
});