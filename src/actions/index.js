export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}

export const activeItem = (item) => {
    return {
        type: 'ACTIVE_ITEM',
        payload: item
    }
}

export const unactiveItem = (item) => {
    return {
        type: 'UNACTIVE_ITEM',
        payload: item
    }
}