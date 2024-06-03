import { useEffect } from 'react';
import { connectToDatabase } from '../../lib/db/mongodb'

export default function Connect() {
  useEffect(() => {
    async function connect() {
      try {
        await connectToDatabase();
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
    }
    connect();
  }, []);

  return <div>Connecting to MongoDB...</div>;
}
