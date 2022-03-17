var i = 0
var x = 0
var a = 0
const hello = "Hello, i'm"
const names = "Sigit Riawan"
const desc = '"Saya adalah seorang Website Developer, saya dapat membuat berbagai website yang anda inginkan dengan proses yang berjalan dengan baik dan tampilan yang menarik"'

function typeName(){
    if(x < names.length){
        document.getElementById('name').innerHTML += names.charAt(x)
        x++
        setTimeout(typeName, 100)
    }
}

function typeHello(){
    if(i < hello.length){
        document.getElementById('hello').innerHTML += hello.charAt(i)
        i++
        setTimeout(typeHello, 100)
    }
}

function typeDescription(){
    if(a < desc.length){
        document.getElementById('desc').innerHTML += desc.charAt(a)
        a++
        setTimeout(typeDescription, 10)
    }   
}

typeHello()
typeName()
typeDescription()

const open = document.getElementById('open')
const list = document.getElementById('list')
const close = document.getElementById('close')
open.addEventListener('click', function(){
    open.classList.toggle('hidden')
    list.classList.toggle('hidden')
})

close.addEventListener('click', function(){
    open.classList.toggle('hidden')
    list.classList.toggle('hidden')
})

const ulLi = document.querySelectorAll('.list-li')
ulLi.forEach(element => {
   element.addEventListener('click', function(){
    if(!list.classList.contains('hidden')){
        open.classList.toggle('hidden')
        list.classList.toggle('hidden')
      }
   })
});