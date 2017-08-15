var mongoose = require('mongoose');
var ListSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('List', ListSchema);
