const payReducer = (state = false, action) => {
    switch (action.type) {
        case 'PAID':
            return true;
        case 'NOT_PAID':
            return false;
        default:
            return state;
    }
};

export default payReducer;