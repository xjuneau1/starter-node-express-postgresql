const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const categoriesService = require("./categories.service")

// function list(req, res, next){
//   categoriesService
//     .list()
//     .then((data)=> res.json({data}))
//     .catch(next)
// }

async function list(req, res, next){
  const data = await categoriesService.list()
  res.json({data})
}
module.exports = {
  list: [asyncErrorBoundary(list)],
};
