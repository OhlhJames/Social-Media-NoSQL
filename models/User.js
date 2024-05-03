const {Schema, model} = require('mongoose');

// Schema to create a User model
const userSchema = new Schema(
    {
        username:{
            type:String,
            required: true,
            trim: true,
            unique: true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
            match:/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
        },
        thoughts:[
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            }
        ],
        friends:[
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        toJSON:{
            virtuals: true,
        },
        id:false,
    }
);

// creates a virtual property that will count the number of a users friends
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('user',userSchema);

module.exports = User;
