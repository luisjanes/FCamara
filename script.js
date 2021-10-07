let mesasOcupadas = []

function pegar(){
    let mesa = document.getElementById("mesas").value
    let escritorio = document.querySelector("input[name='escritorio']:checked").value
    let data = document.getElementById('inputDate').value
    let func = document.getElementById('inputCodFunc').value
    let verificarMesa = false
    let verificarData = false
    let verificarFunc = false
    let verificarEscri = false
    if(mesa == '' || escritorio == '' || data == '' || func == ''){
        alert('Por favor preencha todos os campos')
        return
    }
    
    marcar(escritorio, mesa, data, func)
}
function marcar(escritorio, mesa, data, func){
    mesasOcupadas.push({escritorio: escritorio, mesas: mesa, datas: data, funcionario: func})
    console.log(mesasOcupadas)
    console.log(mesasOcupadas.includes(mesa))
    alert(`Você agendou a ${mesa}, para o dia ${data}, no escritório de ${escritorio}`)
    inputCodFunc.value = ''
    inputDate.value = ''
    mesas.value = ''
}