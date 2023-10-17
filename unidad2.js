/*ingresar nombre y apellido*/
var nombre = prompt("Ingrese el nombre del usuario")
var apellido = prompt("Ingrese el apellido del  usuario")
var nombre_completo = nombre + " " + apellido
alert("Bienvenido " + nombre_completo);

/*perímetro y área del círculo*/
var diametro = parseFloat(prompt("Ingrese el diámetro del círculo"));
alert("El área del círculo es: " + (3.1416 / 2 * Math.pow(diametro, 2)));
alert("El perímetro del círculo es: " + (3.1416 * diametro));

/*ej 11 suma y promedio de 4 números*/
var num1 = parseFloat(prompt("Ingrese el valor de 1er número"));
var num2 = parseFloat(prompt("Ingrese el valor de 2do número"));
var num3 = parseFloat(prompt("Ingrese el valor de 3er número"));
var num4 = parseFloat(prompt("Ingrese el valor de 4er número"));
alert("El promedio de los cuatro números es: " + (num1 + num2 + num3 + num4) / 4);
alert("La suma de los cuatro números es: " + (num1 + num2 + num3 + num4) );

/*ej 12 calculo sueldos de una empresa*/
var valor_hora = parseFloat(prompt("Ingrese el valor de la hora"));
var horas_trabajadas = parseFloat(prompt("Ingrese la cantidad de horas trabajadas en el mes"));
alert("El sueldo del empleado es de: " + (valor_hora * horas_trabajadas) + " pesos");

/*ej 13. sistema sueldos con años de antiguedad  */
var anios_antiguedad = parseFloat(prompt("Ingrese los años de antiguedad del empleado"));
var sueldo = (valor_hora * horas_trabajadas) * (1 + anios_antiguedad * 0.15);
alert("El sueldo del empleado considerando los años de antiguedad es de: " + sueldo +" pesos");

/*ej 14. sistema sueldos empresa de seguros con años de antiguedad  */
var n_seguros_vendidos = parseFloat(prompt("Ingrese la cantidad de seguros vendidos"));
var seguro_caro = parseFloat(prompt("Ingrese el valor del seguro más caro que vendido"));
var bono_mas_caro = seguro_caro * 0.5;
var bono_nro_bonos = n_seguros_vendidos * 0.25 * sueldo;
var sueldo_completo = sueldo + bono_mas_caro + bono_nro_bonos
alert("el sueldo completo del empleado considerando los años de antiguedad y el valor y cantidad de los seguros vendidos es de: "+sueldo_completo +" pesos y el valor promedio de a hora trabajada es de :" +sueldo_completo/horas_trabajadas+" pesos/hora")


