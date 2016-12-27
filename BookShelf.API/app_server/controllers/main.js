
module.exports.about = function(req, res, next) {
  res.render('content', { title: 'About', message: 'Express demo page' });
}