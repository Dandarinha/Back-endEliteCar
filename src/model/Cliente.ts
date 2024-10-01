/**
 * Classe que representa um cliente.
 */
export class Cliente {

    /* Atributos */
    /* Identificador do cliente */
    private idCliente: number = 0;
    /* Nome do cliente */
    private nome: string;
    /* CPF do cliente */
    private cpf: string;
    /* Telefone do cliente */
    private telefone: string;

    /**
     * Construtor da classe Cliente
     * 
     * @param nome Nome do cliente
     * @param cpf CPF do cliente
     * @param telefone Telefone do cliente
     */
    constructor(
        nome: string,
        cpf: string,
        telefone: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
     */
    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um valor ao identificador do cliente
     * @param idCliente novo identificado do cliente
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna o nome do cliente.
     *
     * @returns {string} O nome do cliente.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do cliente.
     * 
     * @param nome - O nome do cliente a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o CPF do cliente.
     *
     * @returns {string} O CPF do cliente.
     */
    public getCpf(): string {
        return this.cpf;
    }

    /**
     * Define o CPF do cliente.
     * 
     * @param cpf - O CPF do cliente a ser definido.
     */
    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    /**
     * Retorna o telefone do cliente.
     *
     * @returns {string} O telefone do cliente.
     */
    public getTelefone(): string {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente.
     * 
     * @param telefone - O telefone do cliente a ser definido.
     */
    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    /* Métodos de operações com clientes */

    /**
     * Lista os dados do cliente.
     *
     * @returns {string} Informações do cliente.
     */
    public listagemCliente(): string {
        return `Cliente ID: ${this.idCliente}, Nome: ${this.nome}, CPF: ${this.cpf}, Telefone: ${this.telefone}`;
    }

    /**
     * Cadastra um novo cliente.
     * 
     * @param nome Nome do cliente
     * @param cpf CPF do cliente
     * @param telefone Telefone do cliente
     */
    public cadastroCliente(nome: string, cpf: string, telefone: string): void {
        this.setNome(nome);
        this.setCpf(cpf);
        this.setTelefone(telefone);
        console.log("Cliente cadastrado com sucesso!");
    }

    /**
     * Remove um cliente.
     */
    public removerCliente(): void {
        console.log(`Cliente ${this.nome} removido com sucesso!`);
        this.idCliente = 0;
        this.nome = '';
        this.cpf = '';
        this.telefone = '';
    }

    /**
     * Atualiza os dados de um cliente.
     * 
     * @param nome Novo nome do cliente
     * @param cpf Novo CPF do cliente
     * @param telefone Novo telefone do cliente
     */
    public atualizarCliente(nome: string, cpf: string, telefone: string): void {
        this.setNome(nome);
        this.setCpf(cpf);
        this.setTelefone(telefone);
        console.log("Cliente atualizado com sucesso!");
    }
}
