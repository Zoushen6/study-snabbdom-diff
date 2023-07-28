import {
    init,
    classModule,
    propsModule,
    styleModule,
    eventListenersModule,
    h,
} from "snabbdom";

const patch = init([
    // Init patch function with chosen modules
    classModule, // makes it easy to toggle classes
    propsModule, // for setting properties on DOM elements
    styleModule, // handles styling on elements with support for animations
    eventListenersModule, // attaches event listeners
]);

let container = document.getElementById("container");
let btn = document.getElementById("btn");

const myVnode1 = h("ul", {}, [
    h("li", { key: "D" }, "D"),
    h("li", { key: "C" }, "C"),
    h("li", { key: "B" }, "B"),
    h("li", { key: "A" }, "A"),
]);

const myVnode2 = h("ul", {}, [
    h("li", { key: "C" }, "C"),
    h("li", { key: "D" }, "D"),
    h("li", { key: "A" }, "A"),
    h("li", { key: "B" }, "B"),
]);

// 上树
patch(container, myVnode1);
btn.onclick = () => {
    patch(myVnode1, myVnode2);
}