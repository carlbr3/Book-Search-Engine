import db from '../config/connection.js';
import { User } from '../models/index.js';
import cleanDB from './cleanDB.js';

//import bookData from '../seeds/bookData.json';
import userData from '../seeds/userData.json' with { type: 'json' };

const seedDatabase = async (): Promise<void> => {
    try {
        await db;
        await cleanDB();

        //await Book.insertMany(bookData);
        await User.create(userData);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.log('Error seeding database', error);
        process.exit(1);
    }
}

seedDatabase();