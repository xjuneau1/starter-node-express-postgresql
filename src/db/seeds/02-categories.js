/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const categories = require("../fixtures/categories")

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE categories RESTART IDENTITY CASCADE")
    .then(()=> {
      return knex("categories").insert(categories)
    })
}
