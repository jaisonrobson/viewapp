export function moviesReducer(state, action) {
    switch (action.type) {
        case 'setMovies':
            return { ...state, movies: action.payload }

        default:
            return state
    }
}