import h from "./my-snabbdom/h";
import patch from './my-snabbdom/patch'


const container = document.getElementById('container')
const btn = document.getElementById('btn')
let myVnode1 = h('p',{},'你好')

patch(container,myVnode1)

let myVnode2 = h('ul',{},[
    h('li',{},'A'),
    h('li',{},'B'),
    h('li',{},'C')
])

btn.onclick = () => {
    patch(myVnode1,myVnode2)
}
