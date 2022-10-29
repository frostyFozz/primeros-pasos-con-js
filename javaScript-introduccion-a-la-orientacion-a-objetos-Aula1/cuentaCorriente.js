


export class CuentaCorriente
{   
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantidadCuentas = 0;
    
    set Cliente(valor) {
        if(valor instanceof Cliente)
            this.#cliente = valor;

    }
    get Cliente(){
        return this.#cliente;
    }
    constructor(cliente, agencia, numero) {
        this.cliente = cliente;
        this.#saldo = 0;
        this.agencia = agencia;
        this.numero = numero;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    retiroEnCuenta(valor) {
        if(valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    } 
    transferenciaCuenta(valor, cuentaDestino) {
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
    verSaldo() {
        return this.#saldo;
    }
}
