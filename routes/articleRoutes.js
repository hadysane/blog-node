const express = require('express');
const router = express.Router();
const articleController = require('../controller/articleController')

router.route('/')
    .get(articleController.getAllArticles)
    .post(articleController.createArticle)

router.route('/:id')
    .get(articleController.getAnArticle)
    .patch(articleController.updateArticle)
    .delete(articleController.deleteArticle)


module.exports = router;