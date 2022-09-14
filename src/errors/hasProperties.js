function hasProperties(...properties) {
  return function (req, res, next) {
    const { data = {} } = req.body;
    try {
      properties.forEach((property) => {
        if (!data[property]) {
          // next({
          //   status: 400,
          //   message: `A '${property}' property is required.`
          // })
          // using try-catch to create a new Error object and throw the error is similar to
          // how we call next() with the error object
          const error = new Error(`A '${property}' property is required.`);
          error.status = 400;
          throw error;
        }
      });
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = hasProperties