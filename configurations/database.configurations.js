const mongoose = require('mongoose');
const debug = require('debug')('Service: database');

const DBURI = process.env.DBURI;

const connect = async() => {
    try {
        await mongoose.connect(DBURI);
        debug('Connected to database');
    } catch (error) {
        console.error(error);
        debug('Could not connect to database');
        process.exit(1)
    }
}

const disconnect = async() => {
    try {
        await mongoose.disconnect();
        debug('disconnected from database');
    } catch (error) {
        console.error(error);
        debug('Could not disconnect from database');
        process.exit(1)
    }    
}

module.exports = { connect, disconnect }