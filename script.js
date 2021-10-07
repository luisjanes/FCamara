let mesasOcupadas = []

function Submit()
{
	let table = document.getElementById("mesas");
	let office = document.querySelector("input[name='escritorio']:checked");
	let date = document.getElementById('inputDate');
	let func = document.getElementById('inputCodFunc');

	let newEntry =
	{
		table: table.value,
		office: office.value,
		date: date.value,
		func: func.value,
	};

	if(newEntry.table == '' || newEntry.office == '' || newEntry.date == '' || newEntry.func == '')
	{
		alert(`Complete todos os espaços em branco`);
		return;
	}

	let isOk = true;
	for(let i = 0; i < mesasOcupadas.length; i++)
	{
		let currentEntry = mesasOcupadas[i];
		if(currentEntry.func == newEntry.func && currentEntry.date == newEntry.date) {
			isOk = false;
		}
		if(currentEntry.office == newEntry.office && currentEntry.table == newEntry.table && currentEntry.date == newEntry.date) {
			isOk = false;
		}
	}

	if(!isOk)
	{
		alert(`Escolha outra data ou mesa.`);
		return;
	}

	mesasOcupadas.push(newEntry);
	alert(`Você agendou a ${newEntry.table}, para o dia ${newEntry.date}, no escritório de ${newEntry.office}`);
    console.log(mesasOcupadas)
	table.value = '';
	date.value = '';
	func.value = '';
}