// * Función para restringir números en campos de nombre
function soloLetras(evento) {
  var code = (evento.which) ? evento.which : evento.keycode;
  if (code == 8 || code == 32) {
    return true;
  } else if (code >= 65 && code <= 90 || code >= 97 && code <= 122) {
    return true;
  } else {
    return false;
  }
}

// * Función para restringir letras de campos números
function soloNumeros(evento){
  var code = (evento.which) ? evento.which : evento.keycode;
  if (code == 8) {
    return true;
  } else if (code >= 48 && code <= 57) {
    return true;
  } else {
    return false;
  }
}

// * Función acepta punto decimal en los campos de decimales
function soloDecimal(evento){
  var code = (evento.which) ? evento.which : evento.keycode;
  if (code == 8) {
    return true;
  } else if (code == 46 || code >= 48 && code <= 57) {
    return true;
  } else {
    return false;
  }
}

function calcImpuestos() {
  // * Declaración de variables 
  const h_trabajados = document.getElementById("h-trabajadas").value;
  const s_hora = document.getElementById("s-hora").value;
  
  // * Operaciones de los impuestos
  const s_bruto = Math.round((parseFloat(h_trabajados) * parseFloat(s_hora) * 100)) / 100;
  const monto_anual = s_bruto * 12;
  const s_social = Math.round(s_bruto * 0.0975 * 100) / 100;
  const s_edu = Math.round(s_bruto * 0.0125 * 100)/ 100;
  const i_renta = Math.round(s_bruto * 0.15 * 100)/ 100;
  
  montoAnual(monto_anual, i_renta);
  
  validarSxH(s_hora, s_bruto, s_social, s_edu, i_renta);
}

// ! Calcula el total de las deducciones y SalarioNeto
function totalDedu_SalNeto() {
  const h_trabajados = document.getElementById("h-trabajadas").value;
  const s_hora = document.getElementById("s-hora").value;
  const s_bruto = Math.round((parseFloat(h_trabajados) * parseFloat(s_hora) * 100)) / 100;
  const s_social = Math.round(s_bruto * 0.0975 * 100) / 100;
  const s_edu = Math.round(s_bruto * 0.0125 * 100)/ 100;
  const i_renta = Math.round(s_bruto * 0.15 * 100)/ 100;
  const desc1 = document.getElementById("desc-1").value;
  const desc2 = document.getElementById("desc-2").value;
  const desc3 = document.getElementById("desc-3").value;

  const t_dedu = Math.round((parseFloat(s_social) + parseFloat(s_edu) + parseFloat(i_renta) + parseFloat(desc1) + parseFloat(desc2) + parseFloat(desc3)) * 100 )/ 100;
  const s_neto = Math.round((s_bruto - t_dedu)*100)/100;

  if (s_hora == "") {
    document.getElementById("t-dedu").value = 0;
    document.getElementById("s-neto").value = 0;
  } else {
    document.getElementById("t-dedu").value = t_dedu;
    document.getElementById("s-neto").value = s_neto;
  }

  if ((isNaN(document.getElementById("t-dedu").value) && isNaN(document.getElementById("s-neto").value))) {
    document.getElementById("t-dedu").value = 0;
    document.getElementById("s-neto").value = 0;
  } else {
    document.getElementById("t-dedu").value = t_dedu;
    document.getElementById("s-neto").value = s_neto;
  }
}

// ! Calcula el monto anual
function montoAnual(monto_anual,i_renta) {
  if (monto_anual > 11000 && monto_anual < 50000) {
    document.getElementById("i-r").value = i_renta;
  } else {
    document.getElementById("i-r").value = 0;
  }
}

function validarSxH(s_hora, s_bruto, s_social, s_edu, i_renta) {
  if (s_hora == "") {
    document.getElementById("s-bruto").value = 0;
    document.getElementById("s-social").value = 0;
    document.getElementById("s-edu").value = 0;
    document.getElementById("i-r").value = 0;
  }else{
    Math.round(parseFloat(document.getElementById("s-bruto").value = s_bruto) *100)/100;
    document.getElementById("s-social").value = s_social;
    document.getElementById("s-edu").value = s_edu;
    document.getElementById("i-r").value = i_renta;
  }
}

function validacionCed() {
  const c_tomo = document.getElementById("cedula-tomo").value;
  const c_asiento = document.getElementById("cedula-asiento").value;
  if (c_tomo == "" || c_asiento == "") {
    document.getElementById("primer-nombre").disabled = true;
    document.getElementById("segundo-nombre").disabled = true;
    document.getElementById("primer-apellido").disabled = true;
    document.getElementById("segundo-apellido").disabled = true;
    document.getElementById("select-casada").disabled = true;
    document.getElementById("ape-casada").disabled = true;
    document.getElementById("h-trabajadas").disabled = true;
    document.getElementById("s-hora").disabled = true;
    document.getElementById("desc-1").disabled = true;
    document.getElementById("desc-2").disabled = true;
    document.getElementById("desc-3").disabled = true;
  } else {
    document.getElementById("primer-nombre").disabled = false;
    document.getElementById("segundo-nombre").disabled = false;
    document.getElementById("primer-apellido").disabled = false;
    document.getElementById("segundo-apellido").disabled = false;
    document.getElementById("select-casada").disabled = false;
    document.getElementById("ape-casada").disabled = false;
    document.getElementById("h-trabajadas").disabled = false;
    document.getElementById("s-hora").disabled = false;
    document.getElementById("desc-1").disabled = false;
    document.getElementById("desc-2").disabled = false;
    document.getElementById("desc-3").disabled = false;
  }
}

function validacionNombre() {
  const p_nombre = document.getElementById("primer-nombre").value;
  if (p_nombre == "") {
    document.getElementById("primer-apellido").disabled = true;
    document.getElementById("h-trabajadas").disabled = true;
    document.getElementById("s-hora").disabled = true;
    document.getElementById("desc-1").disabled = true;
    document.getElementById("desc-2").disabled = true;
    document.getElementById("desc-3").disabled = true;
  } else {
    document.getElementById("primer-apellido").disabled = false;
    document.getElementById("ape-casada").disabled = false;
    document.getElementById("h-trabajadas").disabled = false;
    document.getElementById("s-hora").disabled = false;
    document.getElementById("desc-1").disabled = false;
    document.getElementById("desc-2").disabled = false;
    document.getElementById("desc-3").disabled = false;
  }
}

function validacionApellido() {
  const p_apellido = document.getElementById("primer-apellido").value;
  if (p_apellido == "") {
    document.getElementById("primer-nombre").disabled = true;
    document.getElementById("h-trabajadas").disabled = true;
    document.getElementById("s-hora").disabled = true;
    document.getElementById("desc-1").disabled = true;
    document.getElementById("desc-2").disabled = true;
    document.getElementById("desc-3").disabled = true;
  } else {
    document.getElementById("primer-nombre").disabled = false;
    document.getElementById("ape-casada").disabled = false;
    document.getElementById("h-trabajadas").disabled = false;
    document.getElementById("s-hora").disabled = false;
    document.getElementById("desc-1").disabled = false;
    document.getElementById("desc-2").disabled = false;
    document.getElementById("desc-3").disabled = false;
  }
}