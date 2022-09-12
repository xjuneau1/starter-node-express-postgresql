/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const productsCategories =  require("../fixtures/productsCategories")

exports.seed = function (knex){
  return knex
    .raw("TRUNCATE TABLE products_categories RESTART IDENTITY CASCADE")
    .then(()=>{
      return knex("products_categories").insert(productsCategories)
    })
}
