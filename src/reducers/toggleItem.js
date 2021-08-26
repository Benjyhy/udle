const toggleItemReducer = (state = [], action) => {
    switch (action.type) {
        case 'ACTIVE_ITEM':
            return [...state, action.payload.id];
        case 'UNACTIVE_ITEM':
            return state.filter(item => item !== action.payload.id);
        default:
            return state;
    }
};

export default toggleItemReducer;