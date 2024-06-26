const{Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: mongoose.objectId,
        reactionBody:{
            type: String,
            required: true,
            maxLength: 280,
        },
        username:{
            type: String,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now(),
            get: (date)=> date.toLocaleDateString("en-US"),
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
    }
);

module.exports = reactionSchema;