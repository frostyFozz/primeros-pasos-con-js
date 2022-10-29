
import {Cliente} from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";

const cliente = new Cliente("Edwin", "12356789", "1235u84865");



const cuentaEdwin = new CuentaCorriente(cliente, "001", "1");

console.log(cuentaEdwin.cliente);
let saldo = cuentaEdwin.verSaldo();
console.log(`el saldo de la cuenta es ${saldo}`);

saldo = cuentaEdwin.depositoEnCuenta(200);
console.log(`el saldo de la cuenta de (Edwin) es ${saldo}`);



const cliente2 = new Cliente("Dannesa", "766583864", "9887734");


const cuentaDannesa = new CuentaCorriente(cliente2, "002", "2");
console.log(cuentaDannesa.cliente);

cuentaEdwin.transferenciaCuenta(100,cuentaDannesa);
const saldoDannesa = cuentaDannesa.verSaldo();
console.log(`el saldo de la cuenta (Dannesa) es ${saldoDannesa}`);
const saldoEdwin = cuentaEdwin.verSaldo();
console.log(`el saldo de la cuenta de (Edwin) es ${saldoEdwin}`);

console.log(CuentaCorriente.cantidadCuentas);