const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema ({
    id: Number,
    topic: String
})

let Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;