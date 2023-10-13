var button = document.createElement("button");
var IMAGE = document.createElement('img');
IMAGE.src = '4.jpg';
var button3 = document.createElement("button");
button.innerHTML = "NEXT";
button3.innerHTML = " PREVIOUS";
var div0 = document.createElement('div0')
div0.className = "0"
var div1 = document.createElement('div1')
div1.className = "1"
var div2 = document.createElement('div2')
div2.className = "2"
var div3 = document.createElement('div3')
var div4 = document.createElement('div4')
div4.className = "4"
var div5 = document.createElement('div5')
div5.className = "5"
var imge = document.createElement('img')
div3.className = "3"
div0.append(div1, div4)
div1.append(div2)
div2.append(div3)
div3.append(button, button3)
div4.append(div5)
div5.append(IMAGE)
document.body.append(div0)


let box = ['4.jpg', '5.jpeg', '6.jpeg',]
b = 0

button.addEventListener("click", change)
function change() {
    b = b >= box.length - 1 ? 0 : b + 1;
    IMAGE.src = box[b]
};
button3.addEventListener("click", m)
function m() {
    b = b == 0 ? box.length - 1 : b - 1;
    IMAGE.src = box[b]
}