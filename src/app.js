import posController from './controllers/position'
import { router } from './router/hash'

const indexTpl = require('./views/index.html')
let renderedIndexTpl = template.render(indexTpl)
$('#app').html(renderedIndexTpl)


posController.renderList()

router.init()