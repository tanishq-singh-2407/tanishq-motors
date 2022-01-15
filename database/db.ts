import { connect } from 'mongoose';

const connection = {
    isConnected: 0
};

const connectToDB = async () => {
    if (connection.isConnected) {
        return;
    }

    const db = await connect(process.env.MONGODB_URI as string, {
        dbName: process.env.DB_NAME as string
    });

    connection.isConnected = db.connections[0].readyState;

};

export default connectToDB;