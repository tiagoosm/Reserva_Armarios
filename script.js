const usuario = { nome: "Tiago", matricula: "483", pendencia: false, acessibilidade: true};

var dataHoraAtual = new Date();

var data = dataHoraAtual.toLocaleDateString();
var hora = dataHoraAtual.toLocaleTimeString();

var dataEntrega = new Date(dataHoraAtual);
dataEntrega.setHours(dataEntrega.getHours() + 23);
dataEntrega.setMinutes(dataEntrega.getMinutes() + 59);
dataEntrega.setSeconds(dataEntrega.getSeconds() + 59);

var dataHoraEntrega = dataEntrega.toLocaleString();

const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, dataReserva: null, horaReserva: null, entrega: null},
  { id: 2, formato: "padrao", status: true, acessivel: false, dataReserva: null, horaReserva: null, entrega: null},
  { id: 3, formato: "padrao", status: true, acessivel: false, dataReserva: null, horaReserva: null, entrega: null},
  { id: 4, formato: "padrao", status: false, acessivel: true, dataReserva: null, horaReserva: null, entrega: null},
  { id: 5, formato: "padrao", status: false, acessivel: true, dataReserva: null, horaReserva: null, entrega: null},
  { id: 6, formato: "duplo", status: true, acessivel: true, dataReserva: null, horaReserva: null, entrega: null},
  { id: 7, formato: "duplo", status: false, acessivel: true, dataReserva: null, horaReserva: null, entrega: null},
  { id: 8, formato: "duplo", status: false, acessivel: true, dataReserva: null, horaReserva: null, entrega: null},  
];

function reservarArmario() {
  
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  else
  { 
    let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
  
    armarios.find(armario => armario.id === armarioSorteado.id).status = false;
    armarios.find(armario => armario.id === armarioSorteado.id).dataReserva = data;
    armarios.find(armario => armario.id === armarioSorteado.id).horaReserva = hora;
    armarios.find(armario => armario.id === armarioSorteado.id).entrega = dataHoraEntrega;

    
    usuario.pendencia = true;
  
    document.getElementById("resultado").innerHTML = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso às ${armarioSorteado.horaReserva} do dia ${armarioSorteado.dataReserva}.<br><br>Você deve devonlver até ${armarioSorteado.entrega}.`;
  }
}