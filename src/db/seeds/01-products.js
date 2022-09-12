/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const products = require("../fixtures/products")

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE products RESTART IDENTITY CASCADE")
    .then(()=> {
      return knex("products").insert(products)
    })
}