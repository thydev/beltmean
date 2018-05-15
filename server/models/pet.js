const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

module.exports = (() => {
    const PetSchema = new mongoose.Schema({
        _id : Schema.Types.ObjectId,
        name: {
            type: String, 
            required: [true, 'name is required'], 
            minlength: [3, 'name must be greater than 3 characters'],
            unique: [true, 'This name already exists'], // Use 'mongoose-unique-validator'
            // unique: true, 
            dropDups: true
        },
        pettype: {
            type: String, 
            required: [true, 'type is required'], 
            minlength: [3, 'type must be greater than 3 characters']
        },
        description: {
            type: String, 
            required: [true, 'description is required'], 
            minlength: [3, 'description must be greater than 3 characters']
        },
        skill1 : {
            type: String,
            default: ''
        },
        skill2 : {
            type: String,
            default: ''
        },
        skill3 : {
            type: String,
            default: ''
        },
        likes: {
            type: Number,
            default: 0
        }
    }, {timestamps: true});
    
    
    PetSchema.plugin(uniqueValidator, { message: 'The {PATH} {VALUE} already exists.' });
    mongoose.model('Pet', PetSchema);
    // Apply the uniqueValidator plugin to UserSchema.
    // UserSchema.plugin(uniqueValidator);
    
    // You have access to all of the standard Mongoose error message templating:
    // {PATH}
    // {VALUE}
    // {TYPE}
})();