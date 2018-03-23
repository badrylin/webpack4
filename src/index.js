// import _ from 'axios'
// import a from './components/a'
// import b from './components/b'
import './styles/index.css'

let lodash = import(/* webpackChunkName: "lodash" */ 'lodash/fill')
let axios = import(/* webpackChunkName: "axios" */ 'axios')
let a = import(/* webpackChunkName: "a" */ './components/a.js')
let b = import(/* webpackChunkName: "b" */ './components/b.js')
console.log(a)
// console.log(_(Array(3),3))
console.log($('body'))