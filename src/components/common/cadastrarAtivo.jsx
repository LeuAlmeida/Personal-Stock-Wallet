import React from "react"
import { Row } from "reactstrap";
import { Colxx, Separator } from "./CustomBootstrap";

export default props => (
        
        
        <form className="mb-3 input-group input-group">
            <div className="col-3 mb-3">
            <input type="text" className="form-control" placeholder="URL da Imagem" />
            </div>

            <div className="col-3 mb-3">
            <input type="text" className="form-control" placeholder="Ticker" />
            </div>

            <div className="col-3 mb-3">
            <input type="text" className="form-control" placeholder="Quantidade" />
            </div>

            <div className="col-3 mb-3 input-group-append">
            <input className="form-control" placeholder="P/M" />
            <button className="btn btn-info"><span>Cadastrar</span></button>
            </div>

        </form>
)