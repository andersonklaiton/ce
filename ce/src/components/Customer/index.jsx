import "./styles.css"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const Customer = ({userData})=>{
    const users = Array(userData.users)
    const oportunities = Array(userData.opportunities)
    const params = useParams()
    
    return (
        <>
            <h3>{params.user}</h3>
            <div>

            <div className="user">
                <p>Nome: {users[0][params.user].name}</p>
                <p>Email: {users[0][params.user].email}</p>
                <p>Telefone: {users[0][params.user].phone}</p>
                <p>Ativo: {users[0][params.user].isActive ? "Sim" : "Não"}</p>
                <p>Receita: {users[0][params.user].revenue}</p>
                <p>Termos: {users[0][params.user].agreedTerms ? "Sim" : "Não"}</p>
            </div>
            <div>

            <p>Oportunidades</p>
            <div className="opportunities">

                {oportunities[0][params.user].opportunities.map((opo)=>
                    <div key={opo.name} className="opo">
                        <p>Nome: {opo.name}</p>
                        <p>Limite: {opo.limit}</p>
                        <p>Juros: {opo.interest}</p>
                        <p>Prazo: {opo.term}</p>
                        <p>Ativa: {opo.isActive ? "Sim":"Não"}</p>
                    </div>
                )}
            </div>
            </div>
            </div>
            <Link to="/">Voltar</Link>
        </>
    )
}

export default Customer