const catchAsync = require('../utils/catchAsync')

// ─── Get All Articles ────────────────────────────────────────────────────────

exports.getAllArticles = catchAsync(async (req, res, next) => {
    const articles = [
        { name: "alice" },
        { name: "nothing" }, 
        { name: "tata" }, 
    ]
    res.status(200).json({ status: "success", result: articles.length, data: { articles } })
})

// ─── Get Single Article ──────────────────────────────────────────────────────

exports.getAnArticle = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const article = {
        title: "Histoire de ma vie",
        summary: "la vie",
        content: "Ma vie est une apprentissage pour l'haut de la...",
        tags: "josei"
    }

    res.status('200').json({ status: "success", id: id, data: { article } })
})

// ─── Create An Article ───────────────────────────────────────────────────────

exports.createArticle = catchAsync(async (req, res, next) => {
    const newArticle = req.body
    
    res.status('201').json({status: "success", data :{ newArticle }})
})

// ─── Update An Article ───────────────────────────────────────────────────────

exports.updateArticle = catchAsync(async (req, res, next) => {
    const id = req.params.id
    const newArticle = req.body

    res.status('200').json({ status: "success", id: id, data: { newArticle } })
})


// ─── Delete An Article ───────────────────────────────────────────────────────

exports.deleteArticle = catchAsync(async (req, res, next) => {
    // const id = req.params.id

    res.status('204').json({ status: "success", data: null })
})
