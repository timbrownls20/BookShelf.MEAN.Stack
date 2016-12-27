
/* GET Angular SPA page */
module.exports.angularApp = function(req, res){
    res.render('index', {});
  //res.render(path.join('app_client', 'index.html'), {});
  //res.sendFile(path.join('app_client', 'index.html'));
};
