import h from "./my-snabbdom/h";
import patch from './my-snabbdom/patch'


const container = document.getElementById('container')
const btn = document.getElementById('btn')
let myVnode1 = h('ul',{},[
    h('li',{key: 'A'},'A'),
    h('li',{key: 'B'},'B'),
    h('li',{key: 'C'},'C')
])

patch(container,myVnode1)

let myVnode2 = h('ul',{},[
    h('li',{key: 'A'},'A'),
    h('li',{key: 'B'},'B'),
    h('li',{key: 'M'},'M'),
    h('li',{key: 'N'},'N'),
    h('li',{key: 'C'},'C')
])

btn.onclick = () => {
    patch(myVnode1,myVnode2)
}
