export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    //token: "BQB8cdGR5uSWOHyAA8BTDxqsePvPXq3kWs6foYlb0aPNSlm_WYKxFWlcmBamvO5wwqbBFDVXx_npXqHDFJGO4eZWHbMNuVjbpl7FXeA-3aCqoles_d-2rRC2xw-Kdz7BkBYnLrZt84AY9sV8qv9fuume8RFNLXwwtoTrbrguSM9GKjV-"
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
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        default: 
            return state;
    }
};

export default reducer;