const indexTpl = require('./views/index.html')

const renderedIndexTpl = template.render(indexTpl, {})

document.querySelector('#app').innerHTML = renderedIndexTpl