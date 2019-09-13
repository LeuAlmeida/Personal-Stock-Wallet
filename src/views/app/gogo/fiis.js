import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import '../../../assets/css/common/style.css';

import Tabletop from 'tabletop';

export default class Fiis extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8',
      orderby: 'Posição',
      reverse: false,
      wanted: ['FIIs'],

      callback: googleData => {
        this.setState({
          data: googleData,
        })

      },
      simpleSheet: true
    })
  }

    render() {
      const { data } = this.state
        return (
            <Fragment>
            <Row>
              <Colxx xxs="10">
                <Breadcrumb heading="menu.fiis" match={this.props.match} />
              </Colxx>
              <Colxx xxs="2">                
                {data.map(obj => {
                  return (
                    <span key={obj.id}>
                      <h1>{obj.Total}</h1>
                    </span>
                  )
                })}
                {/* {data.map(obj => {
                  return (
                    <span key={obj.id}>
                      <h1>{obj.Total}</h1>
                    </span>
                  )
                })} */}
              </Colxx>
              <Colxx xxs="12">
              <Separator className="mb-5" />
              </Colxx>
            </Row>

            <Row>
              <Colxx xxs="12">
                          
                          <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                          <p className="list-item-heading mb-1 truncate">
                            Marca
                          </p>
                          <p className="list-item-heading mb-1 truncate">
                            Empresa
                          </p>
                          <p className="list-item-heading mb-1 truncate">
                            Ticker
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            Preço
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            Posição
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            Lucro
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            P/M
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            Rentab.
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            Falta
                          </p>
                          <p className="mb-1 text-muted text-small w-15 w-sm-100">
                            Situação
                          </p>
                          </div>
                        </div>
              </Colxx>
            </Row>

            <Row>
              {
                  data.map(obj => {
                    return (
                      <Colxx xs="12" className="mb-4" key={obj.id}>

                        <div className="d-flex flex-row active card">
                          <img alt={obj.Nome} src={obj.Logo} className="list-thumbnail responsive border-0 card-img-left" />
                        <div className={'pl-2 d-flex flex-grow-1 min-width-zero'}>
                          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                              <p className="list-item-heading mb-1 truncate">{obj.Nome}</p>
                            <p className="mb-1 text-small w-15 w-sm-100">{obj.Ticker}</p>
                            <p className="mb-1 text-muted text-small w-15 w-sm-100">{obj.Preço}</p>
                            <p className="mb-1 text-small w-15 w-sm-100">{obj.Posição}</p>
                            <p className="mb-1  text-small w-15 w-sm-100">{obj.Lucro}</p>
                            <p className="mb-1 text-muted text-small w-15 w-sm-100">{obj.PM}</p>
                            <p className="mb-1 text-muted text-small w-15 w-sm-100">{obj.Rentabilidade}</p>
                            <p className="mb-1 text-muted text-small w-15 w-sm-100">{obj.Falta}</p>
                            <h4 className="w-15 w-sm-100">
                              <a href={obj.FaltaCotas >= 0 ? 'http://xpinvestimentos.com.br' : '#'} target={obj.FaltaCotas >= 0 ? '_blank' : '_self'}>
                                <span className={`badge badge-${obj.Situação == 'Comprar' ? 'success' : 'outline-danger'} badge-pill`}>{obj.Situação}
                                </span>
                                </a>
                            </h4>
                          </div>
                        </div>
                        </div>
                      </Colxx>
                    )
                  })
                }
              </Row>
          </Fragment>
        )
    }
}