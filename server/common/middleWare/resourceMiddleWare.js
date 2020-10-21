module.exports = options => async (req, res, next) => {
  const inflection = require('inflection')
  const modelName = inflection.classify(req.params.resource);
  // console.log('正在访问model:', modelName);
  const Model = require(`../..//models/${modelName}`)
  // console.log(Model);
  req.Model = Model;
  next();
};