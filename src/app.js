const indexTpl = require('./views/index.html')
const searchTpl = require('./views/search.html')
const { list } = require('./controllers/position')

const renderedIndexTpl = template.render(indexTpl, {})
const renderedSearchTpl = template.render(searchTpl, {})

$('#app').html(renderedSearchTpl)

list()