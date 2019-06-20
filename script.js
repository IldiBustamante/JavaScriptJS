// 1)creo mi XHR 

let xhr= new XMLHttpRequest

//2)Abrir-configurar mi metodo y url
xhr.open("GET","https://jsonplaceholder.typicode.com/users")

//3) asigna un evento de load

xhr.addEventListener("load",() => {
    //::: aca lo que hago cuando termine
    //3.1)Chequear que el pedido haya salido bien

    if(xhr.status == 200 ){
        console.log(xhr.response)
    }
})


//4)No olvidar enviarlo
xhr.send()