export default class ProjectService {
    hello() {
        return "Oi!"
    }

    hello_name(name) {
        const data = "Oi, " + name;

        return data;
    }

    multiply(n1, n2) {
        const result = n1 * n2;

        return "O resultado é " + result;
    }
}