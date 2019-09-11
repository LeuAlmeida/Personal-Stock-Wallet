import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import Pie from "../../../components/charts/Pie";
// import GradientCard from "../../../components/cards/GradientCard"
import IconCard from "../../../components/cards/IconCard"

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
      wanted: ['Teste2'],

      callback: googleData => {
        this.setState({
          data: googleData,
        })
        // console.log('google sheet data --->', googleData)

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
                <IconCard className="icon-cards-row" icon="formula" title="Total" value=
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

              {/* <Colxx xs="8" className="mb-4">
                <Pie></Pie>
              </Colxx> */}
              </Row>
              
              <Row>
              <Colxx xs="4" className="mb-4">
                <IconCard className="icon-cards-row" icon="formula" title="Total" value=
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

              <Colxx xs="4" className="mb-4">
                <IconCard className="icon-cards-row" icon="formula" title="Total" value=
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

              <Colxx xs="4" className="mb-4">
                <IconCard className="icon-cards-row" icon="formula" title="Total" value=
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
            </Row>
          </Fragment>
        )
    }
}
