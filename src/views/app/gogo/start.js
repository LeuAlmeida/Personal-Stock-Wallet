import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";

import Breadcrumb from "../../../containers/navs/Breadcrumb";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
import IconCard from "../../../components/cards/IconCard";

import Tabletop from 'tabletop';

export default class Start extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8',
      orderby: 'Rentabilidade',
      reverse: false,
      wanted: ['Consolidado'],

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
              <Colxx xxs="12">
                <Breadcrumb heading="menu.start" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
            <Colxx xs="4" className="mb-4">
                {/* <GradientWithRadialProgressCard icon="bank" progressText="100%" percent="100" title=
                {
                  data.map(obj => {
                    return (
                      <span key={obj.id}>
                        <p className="lead text-white">{obj.Consolidado}</p>
                      </span>
                    )
                  })
                }
                detail="Valor total da carteira"></GradientWithRadialProgressCard> */}
              </Colxx>
              {/* {
                  data.map(obj => {
                    return (
                      <Colxx xs="4" className="mb-4" key={obj.id}>
                        <GradientWithRadialProgressCard 
                        icon={obj.Icone}
                        progressText={obj.ExibCarteira}
                        percent={obj.PorcentCarteira}
                        title={obj.TOTAL}
                        detail={obj.SITUAÇÃO}
                        >
                        </GradientWithRadialProgressCard>
                      </Colxx>
                    )
                  })
                } */}
              </Row>
              <Row>
                <Colxx xxs="12">
                  <Separator className="mb-5" />
                </Colxx>
              </Row>
              <Row>
                <Colxx xxs="6" className="mb-4 text-center">
                  <h2>Cotação do Dólar</h2>
                </Colxx>
                <Colxx xxs="6" className="mb-4 text-center">
                  <h2>Índice Bovespa</h2>
                </Colxx>
              </Row>
              <Row>
                {
                  data.map(line2 => {
                    return (
                         <Colxx xs="6" className="mb-4" key={line2.Moeda}>
                          <IconCard className="icon-cards-row"icon={line2.iconMoeda} title={line2.Moeda} value={line2.MoedaPreço} >
                            </IconCard>
                          </Colxx>
                    )
                  })
                }
              </Row>
          </Fragment>
        )
    }
}