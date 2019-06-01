const Name = require('./controllers/Name')
const aaTpl = require('./views/aa.art')
// import { name } from './controllers/name'

async function getName() {
  console.log(Name.name)
  const name = await Name.getName()
  console.log(name)
}

getName()

const newStr = template.render(aaTpl, {title: 'ffffff'})

console.log(newStr)