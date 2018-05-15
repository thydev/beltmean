const mongoose = require('mongoose'),
        pets = require('../controllers/pets'),
        path = require('path');

module.exports = (app) => {
    const baseUrl = '/api/';
    app.get(baseUrl, (req, res) => {
        pets.retrieveAll(req, res);
    })

    app.get(baseUrl + ':id', (req, res) => {
        pets.retrieveById(req, res);
    });

    app.post(baseUrl, (req, res) => {
        pets.create(req, res);
    });

    app.put(baseUrl + ':id', (req, res) => {
        pets.updateById(req, res);
    });

    app.delete(baseUrl + ':id', (req, res)=> {
        pets.removeById(req, res);
    });


    app.post(baseUrl + 'likes/:id', (req, res) => {
        pets.voteUp(req, res);
    });

    // this route will be triggered if any of the routes above did not match
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/client/index.html"))
    });
}