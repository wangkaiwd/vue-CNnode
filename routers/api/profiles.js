/**
 * Created by wangkai on 2019-04-01
 */
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Profile = require('models/Profile');
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.create(req.body)
    .then(
      profile => {
        if (profile) {
          res.json({ code: 0, data: {}, msg: '成功' });
        } else {
          res.json({ code: 10001, data: {}, msg: '保存出错' });
        }
      },
      err => console.log(err)
    );
});
router.post('/list', passport.authenticate('jwt', { session: false }), (req, res) => {
  Profile.find()
    .then(
      (profile = []) => res.json({ code: 0, data: { data: profile }, msg: '成功' }),
      err => console.log(err)
    );
});
module.exports = router;