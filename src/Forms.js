export default function Forms({ name, setName, cpf, setCpf }) {

    return (
        <div className="name-cpf">
            <p>Nome do comprador:</p>
            <input type="text" placeholder="Digite seu nome..." value={name} name="name" onChange={e => setName(e.target.value)} />
            <p>CPF do comprador:</p>
            <input type="text" placeholder="Digite seu CPF..." value={cpf} name="cpf" pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})" onChange={e => setCpf(e.target.value)}/>
        </div>
    )
}