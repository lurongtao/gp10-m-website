const indexTpl = require('./views/index.html')

const renderedIndexTpl = template.render(indexTpl, {})

$('#app').html(renderedIndexTpl)

console.log($('main > div').closest('div'))