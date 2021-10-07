let mesasOcupadasSantos = []
let mesasOcupadasSaoPaulo = []


function pegar(){
    let mesa = document.getElementById("mesas").value
    let escritorio = document.querySelector("input[name='escritorio']:checked").value
    let data = document.getElementById('inputDate').value
    let func = document.getElementById('inputCodFunc').value
    let verificarSantosMesa = false
    let verificarSantosData = false
    let verificarSaoPauloMesa = false
    let verificarSaoPauloData = false
    let verificarSantosFunc = false
    let verificarSaoPauloFunc = false
    if(mesa == '' || escritorio == '' || data == '' || func == ''){
        alert('Por favor preencha todos os campos')
        return
    }
    if(escritorio == "santos"){
        for(let i=0; i<mesasOcupadasSantos.length;i++){
            verificarSantosMesa = (mesasOcupadasSantos[i].mesas == mesa)
            console.log(verificarSantosMesa)
        }
        for(let i=0; i<mesasOcupadasSantos.length;i++){
            verificarSantosData = (mesasOcupadasSantos[i].datas == data)
            console.log(verificarSantosData)
        }
        for(let i=0; i<mesasOcupadasSantos.length;i++){
            verificarSantosFunc = (mesasOcupadasSantos[i].funcionario == func)
        }
    
        if((verificarSantosMesa && verificarSantosData) || (verificarSantosFunc && verificarSantosData)){   
            alert("Selecione outra mesa ou data") 
        } else {
            marcarSantos(mesa, data, func)
        }
    }
    if(escritorio == "saoPaulo"){
        for(let i=0; i<mesasOcupadasSaoPaulo.length;i++){
            verificarSaoPauloMesa = (mesasOcupadasSaoPaulo[i].mesas == mesa)
            console.log(verificarSaoPauloMesa)
        }
        for(let i=0; i<mesasOcupadasSaoPaulo.length;i++){
            verificarSaoPauloData = (mesasOcupadasSaoPaulo[i].datas == data)
        }
        for(let i=0; i<mesasOcupadasSaoPaulo.length;i++){
            verificarSaoPauloFunc = (mesasOcupadasSaoPaulo[i].funcionario == func)
        }
        if((verificarSaoPauloMesa && verificarSaoPauloData) || (verificarSaoPauloFunc && verificarSaoPauloData)){   
            alert("Selecione outra mesa ou data") 
        } else {
            marcarSaoPaulo(mesa, data, func)
        }
    }
}

function marcarSantos(mesa, data, func){
    mesasOcupadasSantos.push({mesas: mesa, datas: data, funcionario: func})
    console.log(mesasOcupadasSantos)
    alert(`Você agendou a mesa ${mesa}, para o dia ${data}`)
    inputCodFunc.value = ''
    inputDate.value = ''
    mesas.value = ''
}
function marcarSaoPaulo(mesa, data, func){
    mesasOcupadasSaoPaulo.push({mesas: mesa, datas: data, funcionario: func})
    console.log(mesasOcupadasSaoPaulo)
    alert(`Você agendou a mesa ${mesa}, para o dia ${data}`)
    inputCodFunc.value = ''
    inputDate.value = ''
    mesas.value = ''
}









for(let i=0; i<mesasOcupadas.length;i++){
    verificarMesa = (mesasOcupadas[i].mesas == mesa)
    console.log(verificarMesa)
}
for(let i=0; i<mesasOcupadas.length;i++){
    verificarData = (mesasOcupadas[i].datas == data)
    console.log(verificarData)
}
for(let i=0; i<mesasOcupadas.length;i++){
    verificarFunc = (mesasOcupadas[i].funcionario == func)
}
if((verificarMesa && verificarData) || (verificarFunc && verificarData) || (verificarFunc && verificarMesa)){   
    alert("Selecione outra mesa ou data") 
}