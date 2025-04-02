import { Book, User } from '../models/index.js'; // Ensure Book and User are Mongoose models, not schemas
import process from 'process';

const cleanDB = async (): Promise<void> => {
  try {
    // Delete documents from Book collection
    await Book.deleteMany({});
    console.log('Book collection cleaned.');

    // Delete documents from User collection
    await User.deleteMany({});
    console.log('User collection cleaned.');

  } catch (err) {
    console.error('Error cleaning collections:', err);
    process.exit(1);
  }
};

export default cleanDB;