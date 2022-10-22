const catchAsync = require('../utils/catchAsync')
const Article = require('../model/articleModel')
const AppError = require('../utils/appError')

// ─── Get All Articles ────────────────────────────────────────────────────────

exports.getAllArticles = catchAsync(async (req, res, next) => {
    const articles = await Article.find()
    res.status(200).json({ status: "success", result: articles.length, data: { articles } })
})

// ─── Get Single Article ──────────────────────────────────────────────────────

exports.getAnArticle = catchAsync(async (req, res, next) => {
    const article = await Article.findById(req.params.id)
    if (!article) return next(new AppError('No Article found with this ID !', 404))
    res.status('200').json({ status: "success", data: { article } })
})

// ─── Create An Article ───────────────────────────────────────────────────────

exports.createArticle = catchAsync(async (req, res, next) => {
    const newArticle = await Article.create(req.body)

    res.status('201').json({status: "success", data :{ newArticle }})
})

// ─── Update An Article ───────────────────────────────────────────────────────

exports.updateArticle = catchAsync(async (req, res, next) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
        new: true, 
        runValidators: false
    })
    res.status('200').json({ status: "success", data: { article } })
})


// ─── Delete An Article ───────────────────────────────────────────────────────

exports.deleteArticle = catchAsync(async (req, res, next) => {
    const article = await Article.findByIdAndDelete(req.params.id)
    if (!article) return next(new AppError('No Article found with this ID !', 404))
    res.status('204').json({ status: "success", data: null })
})
