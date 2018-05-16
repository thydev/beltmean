const mongoose = require('mongoose'),
        Pet = mongoose.model('Pet');

module.exports = {

    retrieveAll : (req, res) => {
        Pet.find({}, (err, items) => {
            if (!err) {
                res.json({message: "Success", data: items});
            } else {
                console.log(err);
                res.json({message: "Error", error: err})
            }
        }).sort({ pettype: 1 });;
    },

    retrieveById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Pet.find({_id: new ObjectId(req.params.id)})
            .exec((err, item) => {
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },
    
    create: (req, res) => {
        let item = new Pet(req.body);

        item._id = new mongoose.Types.ObjectId();
        // item.name = req.body.name;
        item.save( err => {
            if (!err) {
                res.json({message: "Success", data: item})
            } else {
                console.log(item.errors);
                res.json({message: "Error", error: err})
            }
        });
    }, 

    updateById: (req, res) => {
        // const ObjectId = mongoose.Types.ObjectId; 
        const query = {'_id': req.params.id};
        console.log(req.body);
        Pet.findByIdAndUpdate(query, {
            name: req.body.name,
            pettype: req.body.pettype,
            description: req.body.description,
            skill1: req.body.skill1,
            skill2: req.body.skill2,
            skill3: req.body.skill3
            }
            , { runValidators: true, context: 'query',}, function(err, data){
            if(err) {
                res.json({message: "Error", error: err});
            } else {
                res.json({message: "Success", data: data});
            }
        });
    },

    removeById: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Pet.remove({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    res.json({message: "Success", data: item});
                } else {
                    console.log(err);
                    res.json({message: "Error", error: err})
                }
            });
    },

    voteUp: (req, res) => {
        console.log(req.body);
        const ObjectId = mongoose.Types.ObjectId; 
        Pet.findOne({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    // let q = item.quotes.id(req.body.quote_id);
                    // q.vote = parseInt(q.vote) + parseInt(req.body.vote);
                    item.likes = parseInt(item.likes) + 1;
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({ message: 'Error2', error: err2});
                        } else {
                            res.json({message: "Success", data: item2});
                        }
                    });
                } else {
                    res.json( {message: "Error1", error: err})
                }
            });
    },

    deleteQuote: (req, res) => {
        const ObjectId = mongoose.Types.ObjectId; 
        Pet.findOne({_id: new ObjectId(req.params.id)})
            .exec((err, item)=>{
                if (!err) {
                    item.quotes.id(req.params.quote_id).remove();
                    item.save((err2, item2) => {
                        if (err2) {
                            res.json({ message: 'Error', error: err2});
                        } else {
                            res.json({message: "Success", data: item2});
                        }
                    });
                } else {
                    res.json( {message: "Error", error: err})
                }
            });
    }

}