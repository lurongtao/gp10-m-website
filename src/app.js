const indexTpl = require('./views/index.html')

const renderedIndexTpl = template.render(indexTpl, {})

$('#app').html(renderedIndexTpl)