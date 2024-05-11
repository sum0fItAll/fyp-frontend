// write reducer functions to handle the actions
import {
    // FETCH_LIBRARY_BOOKS,
    // FETCH_USER_CATEGORIES,
    // FETCH_RECOMMENDED_BOOKS,
    LOGIN,
    LOGOUT,
    AuthenticationActionTypes,
} from './actions';

// import { UserCategory, LibraryBook } from '../types/books';

interface AuthenticationState {
    isLoggedIn: boolean;
    token: string | null;
}

const initialState: AuthenticationState = {
    isLoggedIn: false,
    token: null,
};
// define initial state
// const initialState = {
//     libraryBooks: [] as LibraryBook[],
//     userCategories: [] as UserCategory[],
//     recommendedBooks: [] as LibraryBook[],
//     isLoggedIn: false,
//     token: null,
// };

const reducer = (
    state = initialState,
    action: AuthenticationActionTypes,
): AuthenticationState => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                token: action.payload,
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default reducer;

// define the app reducer
// const appReducer = (state = initialState, action: any) => {
//     switch (action.type) {
//         case LOGIN:
//             return {
//                 ...state,
//                 isLoggedIn: true,
//                 token: action.payload,
//             };
//         case LOGOUT:
//             return initialState;
//         case FETCH_LIBRARY_BOOKS:
//             return { ...state, libraryBooks: action.payload };
//         case FETCH_USER_CATEGORIES:
//             return { ...state, userCategories: action.payload };
//         case FETCH_RECOMMENDED_BOOKS:
//             return { ...state, recommendedBooks: action.payload };
//         default:
//             return state;
//     }
// };
