import type { IBook } from '../models/Book.js';

export default interface IUserDocument {
    username: string;
    email: string;
    password: string;
    Ibooks: IBook[];
    savedBooks: IBook[];
    isCorrectPassword(password: string): Promise<boolean>;
    bookCount: number;
}