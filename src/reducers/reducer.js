export default (state=[], action) => {
    switch (action.type) {
        case "ADD":
            if (state.findIndex(odd => odd.id === action.id)>-1){
                return state;
            }
            const newOdd = { 
                id: action.id,
                value: 0, 
                selected: false, 
                odd: action.odd 
            };
            return [
                ...state,
                newOdd
            ];
        case "UPDATE_VALUE":
            let params = { value: action.value };
            if (action.value>0) {
                params.selected = true;
            }
            return getUpdatedState(state, action.id, params);
        case "UPDATE_ODD":
            return getUpdatedState(state, action.id, { odd: action.odd });
        case "UPDATE_SELECTED":
            return getUpdatedState(state, action.id, { selected: action.selected });
    }
}

function getUpdatedState(state, id, params) {
    let originalId = state.findIndex(odd => odd.id === id);
    if (originalId<0){
        return state;
    }
    let newOdd = Object.assign( {}, state[originalId], params );

    return [
        ...state.slice(0, originalId),
        newOdd,
        ...state.slice(originalId + 1)
    ];
}

