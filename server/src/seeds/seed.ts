import db from '../config/connection';
import { BookModel as Book, UserModel as User } from '../models/index';
import cleanDB from './cleanDB';

import bookData from './data/bookData';
import userData from './data/userData';

const seedDatabase = async (): Promise<void> => {
    try {
        await db ();
        await cleanDB();

        await Book.insertMany(bookData);
        await User.create(userData);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.log('Error seeding database', error);
        process.exit(1);
    }
}

seedDatabase();