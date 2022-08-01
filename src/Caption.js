export default function Caption() {
    return (
        <div className="caption">
            <div className="selected">
                <p className="circle"></p>
                <h6>Selecionado</h6>
            </div>
            <div className="avaliable">
                <p className="circle"></p>
                <h6>Disponível</h6>
            </div>
            <div className="not-avaliable">
                <p className="circle"></p>
                <h6>Indisponível</h6>
            </div>
        </div>
    )
}