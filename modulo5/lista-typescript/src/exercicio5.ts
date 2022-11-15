type pessoas = { name: string, email: string, role: ROLE }

enum ROLE {
    user = "user",
    admin = "admin"
}

const arrayInicial: pessoas[] = [
    { name: "Rogério", email: "roger@email.com", role: ROLE.user },
    { name: "Ademir", email: "ademir@email.com", role: ROLE.admin },
    { name: "Aline", email: "aline@email.com", role: ROLE.user },
    { name: "Jéssica", email: "jessica@email.com", role: ROLE.user },
    { name: "Adilson", email: "adilson@email.com", role: ROLE.user },
    { name: "Carina", email: "carina@email.com", role: ROLE.admin }
]

const mostraEmailAdm = (array: pessoas[]) => {
    let newArray: string[] = []
    array.map((i) => {
        if (i.role === ROLE.admin) {
            newArray?.push(i.email)
        }
    })
    console.log(newArray)
}

mostraEmailAdm(arrayInicial)
