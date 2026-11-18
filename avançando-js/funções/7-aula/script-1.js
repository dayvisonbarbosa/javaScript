// Praticando Higher Order Function.

/* function letAdamLogin() {
    let array = []
    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }
    return console.log("Acesso garantido ao Adam")
}

function letMariaLogin() {
    let array = []
    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }
    return console.log("Acesso garantido a Maria")
}

letAdamLogin()
letMariaLogin() */

// Passando parâmetros, conseguimos controlar os dados.

/* function loginUser(user) {
    let array = []
    for (let i = 0; i < 1000000; i++) {
        array.push(i);
    }
    return console.log("Acesso garantido a(o) " + user);
}

function loginAdmin(Admin) {
    let array = []
    for (let i = 0; i < 5000000; i++) {
        array.push(i);
    }
    return console.log("Acesso garantido a(o) " + Admin);
}

loginUser("Maria")
loginAdmin("Deivi") */

// Manipulando dados com Higher Order Function.

const giveAcess = (user) => console.log("Acesso garantido a(o) " + user);

function authenticate(verify) {
    let array = []
    for (let i = 0; i < verify; i++) {
            array.push(i)
    }
    return true
}

function letPerson(person, fn) {
    if (person.level === `admin`) {
        fn(5000000)
    } else if(person.level === `user`) {
        fn(1000000)
    }
    return giveAcess(person.nome)
}

letPerson({level: `admin`, nome: `Adam`}, authenticate)