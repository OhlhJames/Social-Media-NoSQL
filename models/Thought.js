const {Schema, model} = require('mongoose');

// Schema to create a Thought model
const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now(),
            get: (date)=> date.toLocaleDateString("en-US"),
        },
        username:{
            type: String,
            required: true,
        },
        reactions:[
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
            },
        ],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false 
    }
);

// creates a virtual property that will return the number of reactions to a users thought.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought