let dataReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                currPage: action.payload,
            }
        default:
            return state
    }
}

export default dataReducer
