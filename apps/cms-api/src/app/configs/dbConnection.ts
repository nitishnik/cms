import { connect as _connect } from 'mongoose';

const connectDB = async () => {
  try {
    const connect = await _connect(process.env.MONGODB_URI);
    console.log(
      'Connection established',
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error, 'Database connection error');
    process.exit(1);
  }
};

export default connectDB;
