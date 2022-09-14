const knex = require("../db/connection.js")

function list() {
    return knex("categories").select("*")
}

module.exports = {
    list
}