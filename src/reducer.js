export const initialState = {
    user: null,
    playlist    : [],
    playing: false,
    item: null,
    token: "BQB8cdGR5uSWOHyAA8BTDxqsePvPXq3kWs6foYlb0aPNSlm_WYKxFWlcmBamvO5wwqbBFDVXx_npXqHDFJGO4eZWHbMNuVjbpl7FXeA-3aCqoles_d-2rRC2xw-Kdz7BkBYnLrZt84AY9sV8qv9fuume8RFNLXwwtoTrbrguSM9GKjV-"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_USER": 
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default: 
            return state;
    }
};

export default reducer;