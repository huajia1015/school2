var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: '首页' });
});

router.get('/about', function (req, res) {
    res.render('about', { title: '关于我们', index: 7 });
});
router.get('/reason', function (req, res) {
    res.render('reason', { title: '选择理由', index: 6 });
});
router.get('/teachers', function (req, res) {
    res.render('teachers', { title: '师资力量', index: 2 });
});
router.get('/students', function (req, res) {
    res.render('students', { title: '西象学员', index: 4 });
});

router.get('/courses', function (req, res) {
    res.render('courses', { title: '全部课程', index: 1 });
});
router.get('/schedule', function (req, res) {
    res.render('schedule', { title: '课程安排', index: 3 });
});
router.get('/mode', function (req, res) {
    res.render('mode', { title: '课程安排', index: 5 });
});
module.exports = router;
