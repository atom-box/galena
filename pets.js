const petsRouter = require('express').Router({mergeParams: true});

const app = petsRouter();
app.get();

module.exports = petsRouter;