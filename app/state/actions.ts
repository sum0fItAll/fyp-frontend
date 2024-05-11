// write actions here, for fetching books, categories, and recommendations

import { UserCategory, LibraryBook } from '../types/books';

export const FETCH_LIBRARY_BOOKS = 'FETCH_LIBRARY_BOOKS';
export const FETCH_USER_CATEGORIES = 'FETCH_USER_CATEGORIES';
export const FETCH_RECOMMENDED_BOOKS = 'FETCH_RECOMMENDED_BOOKS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
    type: typeof LOGIN;
    payload: string;
}

interface LogoutAction {
    type: typeof LOGOUT;
}

export type AuthenticationActionTypes = LoginAction | LogoutAction;

export const login = (token: string): LoginAction => ({
    type: LOGIN,
    payload: token,
});

export const logout = (): LogoutAction => ({
    type: LOGOUT,
});
export const fetchLibraryBooks = (books: LibraryBook[]) => ({
    type: FETCH_LIBRARY_BOOKS,
    payload: books,
});

export const fetchUserCategories = (categories: UserCategory[]) => ({
    type: FETCH_USER_CATEGORIES,
    payload: categories,
});

export const fetchRecommendedBooks = (books: LibraryBook[]) => ({
    type: FETCH_RECOMMENDED_BOOKS,
    payload: books,
});
