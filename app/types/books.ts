// define bookCategory and Book types
export interface LibraryBook {
    id: string;
    title: string;
    author: string;
}

export interface UserCategory {
    id: string;
    title: string;
    books: LibraryBook[];
}
