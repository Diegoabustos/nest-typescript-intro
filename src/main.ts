// import { charmander } from './bases/03-clases';
import './style.css'
import { setupCounter } from './counter'
import { charmander } from './bases/06-decorators2'
// import { charmander } from './bases/05-decorators'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name} ${charmander.id}</h1>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
