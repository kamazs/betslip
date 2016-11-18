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
            return getUpdatedState(state, action.id, { value: action.value });
        case "UPDATE_ODD":
            return getUpdatedState(state, action.id, { odd: action.odd });
        case "UPDATE_SELECTED":
            let selected = state.find(x=>x.id===action.id);
            if (!selected){
                return state;
            }
            let idx = state.indexOf(selected);
            if (idx<0){
                console.log("ERROR! Why idx not found?");
                return state;
            }

            let newSelected = Object.assign({}, selected);
            newSelected.selected = true;
            
            return [
                newSelected,
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ];
        default:
            return state;
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