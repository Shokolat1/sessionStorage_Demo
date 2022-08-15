var express = require('express');
var router = express.Router();
let { save, load, client } = require('../db/mongo')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'sessionStorage Demo' });
});

router.get('/save', async function (req, res, next) {
  await save(req.query.name, req.query.cosas)
    .then((user) => {
      let things = user.cosas
      let str = things.toLocaleString()

      if (str == '') {
        res.redirect(`/?cosas=no&nombre=${user.name}`)
      }

      res.redirect(`/?cosas=${str}&nombre=${user.name}`)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      client.close()
    })
})

router.get('/load', async function (req, res, next) {
  await load(req.query.name)
    .then((user) => {
      let things = user.cosas
      let str = things.toLocaleString()

      if (str == '') {
        res.redirect(`/?cosas=no&nombre=${user.name}`)
      }

      res.redirect(`/?cosas=${str}&nombre=${user.name}`)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      client.close()
    })
})

module.exports = router;
