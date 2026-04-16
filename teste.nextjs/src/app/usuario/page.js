async function getUsuario() {
    const res = await fetch("https://jsonplaceholder.typecode.com/users/1");
    return res.json();
}

export default async Usuario() {
    const usuario = await getUsuario();
    return (
        <section>
            <h1> Usuário: {usuario.name} </h1>
            <p> E-mail: {usuario.email}</p>
            <p> Cidade: {usuario.adress.city}</p>
        </section>
    )
}