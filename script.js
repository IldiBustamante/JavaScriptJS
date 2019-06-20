// 1)creo mi XHR 

let xhr= new XMLHttpRequest

//2)Abrir-configurar mi metodo y url
xhr.open("GET","https://jsonplaceholder.typicode.com/users")

//3) asigna un evento de load

xhr.addEventListener("load",() => {
    //::: aca lo que hago cuando termine
    //3.1)Chequear que el pedido haya salido bien

    if(xhr.status == 200 ){
        let resultado= JSON.parse(xhr.response)
        
        for (let i = 0; i < resultado.length; i++) {
            let p =document.createElement("p")
            p.innerText=resultado[i].name
            document.body.appendChild(p)
        }
    }
})

//4)No olvidar enviarlo
xhr.send()