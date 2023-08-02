import h from "./my-snabbdom/h";
import patch from './my-snabbdom/patch'


const container = document.getElementById('container')
const btn = document.getElementById('btn')
let myVnode1 = h('ul',{},[
    h('li',{key: 'A'},'A'),
    h('li',{key: 'B'},'B'),
    h('li',{key: 'C'},'C'),
    h('li',{key: 'D'},'D'),
    h('li',{key: 'E'},'E'),
])

patch(container,myVnode1)

//新节点
let myVnode2 = h('ul',{},[
    h('li',{key: 'Q'},'Q'),
    h('li',{key: 'A'},'A'),
    h('li',{key: 'B'},'B'),
    h('li',{key: 'C'},'C'),
    h('li',{key: 'D'},'D'),
    h('li',{key: 'E'},'E'),

])

btn.onclick = () => {
    patch(myVnode1,myVnode2)
}
