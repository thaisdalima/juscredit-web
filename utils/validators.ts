import { validateCpf, validateCnpj } from "./validateDocuments";
export class Validators {

    static cpf(cpf: string) {
        return validateCpf(cpf)
    };

    static cnpj(cnpj: string) {
        return validateCnpj(cnpj)
    }

}
