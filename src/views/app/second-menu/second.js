import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import '../../../assets/css/common/style.css';
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";

import Tabletop from 'tabletop';

export default class Second extends Component {
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
      wanted: ['Despesas Mensais'],

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
      console.log(data[0])
        return (
            <Fragment>
            <Row>
              <Colxx xxs="10">
                <Breadcrumb heading="menu.second" match={this.props.match} />
              </Colxx>
              <Colxx xxs="2">                
                {data.map(obj => {
                  return (
                    <span key={obj.id}>
                      <h1>{obj.Total}</h1>
                    </span>
                  )
                })}
              </Colxx>
              <Colxx xxs="12">
              <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
            <Colxx xs="6" className="mb-4">
            <h2 className="text-center">Despesas Mensais</h2>
            <div className="pl-2 d-flex flex-grow-1 min-width-zero">
              <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
              <p className="list-item-heading mb-1 truncate">
                Nome
              </p>
              <p className="list-item-heading mb-1 truncate">
                Vencimento
              </p>
              <p className="list-item-heading mb-1 truncate">
                Valor
              </p>
              </div>
            </div>

              {
                  data.map(obj => {
                    return (
                       <div key={obj.id} className="mb-4">

                        <div className="d-flex flex-row active card">
                          <div className={'pl-2 d-flex flex-grow-1 min-width-zero'}>
                          <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                          <p className="list-item-heading mb-1 truncate">
                            {obj.Nome}
                          </p>
                          <p className="mb-1 text-small w-15 w-sm-100">
                            {obj.Vencimento}
                          </p>
                          <h2>
                            <span className="badge badge-dark badge-pill">
                              {obj.Valor}
                            </span>
                          </h2>
                          </div>
                        </div>
                        </div>
                      </div>
                    )
                  })
                }
                </Colxx>
                <Colxx xxs="6" className="mb-4">
                <h2 className="text-center">Links Úteis</h2>
                </Colxx>
              </Row>
          </Fragment>
        )
    }
}