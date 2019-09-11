import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
// import Pie from "../../../components/charts/Pie";
// import GradientCard from "../../../components/cards/GradientCard"
import IconCard from "../../../components/cards/IconCard"
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";

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
      wanted: ['Controle de Ativos'],

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
                <GradientWithRadialProgressCard icon="bank" title={
                  data.map(obj => {
                    return (

                      <span key={obj.Nome}>
                        <p>{obj.Ticker}</p>
                        <p>{obj.Nome}</p>
                        {/* <p>{obj.Ticker['WEG3']}</p> */}
                      </span>
                    )
                  })
                }
                detail="Ações"></GradientWithRadialProgressCard>
              </Colxx>
              </Row>
              




              {/* <Row>
              <Colxx xs="3" className="mb-4">
                <IconCard className="icon-cards-row" icon="line-chart-1" title="IBOVESPA" value=
                {
                  data.map(obj => {
                    return (
                      <span key={obj.Consolidado}>
                        <p className="lead text-center">{obj.Consolidado}</p>
                      </span>
                    )
                  })
                }
                ></IconCard>
              </Colxx>

              <Colxx xs="3" className="mb-4">
                <IconCard className="icon-cards-row" icon="building" title="Fundos Imobiliários" value=
                {
                  data.map(obj => {
                    return (
                      <span key={obj.Consolidado}>
                        <p className="lead text-center">{obj.Consolidado}</p>
                      </span>
                    )
                  })
                }
                ></IconCard>
              </Colxx>

              <Colxx xs="3" className="mb-4">
                <IconCard className="icon-cards-row" icon="dollar-sign-2" title="Stocks" value=
                {
                  data.map(obj => {
                    return (
                      <span key={obj.Consolidado}>
                        <p className="lead text-center">{obj.Consolidado}</p>
                      </span>
                    )
                  })
                }
                ></IconCard>
              </Colxx>

              <Colxx xs="3" className="mb-4">
                <IconCard className="icon-cards-row" icon="chrysler-building" title="Reits" value=
                {
                  data.map(obj => {
                    return (
                      <span key={obj.Consolidado}>
                        <p className="lead text-center">{obj.Consolidado}</p>
                      </span>
                    )
                  })
                }
                ></IconCard>
              </Colxx>
            </Row> */}
          </Fragment>
        )
    }
}