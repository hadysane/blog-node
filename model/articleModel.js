const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, "Please tell us the title."]
    }, 
    summary: {
        type: String, 
        required: [true, "Please provide  summary"]
    }, 
    content: {
        type: String,
        required: [true, "Please provide content of article"]
    }, 
    tags: {
        type: String, 
        required: true, 
        enum: {
            values: ['Shonen', 'Shojo', 'Seinen', 'Josei', 'Yuri', 'Yaoi'], 
            message: 'Tags must be Shonen, Shojo, Seinen, Josei, Yuri or Yaoi',
        }
    }

})


const Article = mongoose.model('Article', articleSchema)

module.exports = Article