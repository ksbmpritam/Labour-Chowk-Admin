const initialState = {
    sidebarShow: true,
    theme: 'light',
};

const changeStateReducer = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest };
        default:
            return state;
    }
};

export default changeStateReducer;
