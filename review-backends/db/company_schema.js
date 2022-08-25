const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({

    name: String,
    address: String,
    foundingdate: String,
    userId: String,
});

module.exports = mongoose.mongoose.model("companies", companySchema);
