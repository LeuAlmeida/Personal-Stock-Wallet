import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import '../../assets/css/common/style.css';
import IntlMessages from "../../helpers/IntlMessages";
import { Colxx, Separator } from "../../components/common/CustomBootstrap";
import Breadcrumb from "../../containers/navs/Breadcrumb";

import Tabletop from 'tabletop';

export default class BlankPage extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1L-ywhumD0TnbJVxhMK_zZ9hnPsSKA86xPen1XCqNuG8',
      reverse: false,
      wanted: ['Extrato'],

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
                <Breadcrumb heading="menu.blank-page" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                    {
                        data.map(obj => {
                          return (
                              <h1>{obj.Vigente}</h1>
                          )
                        })
                      }
                    </div>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="bg-dark">
                          <tr>
                            <th>Descrição</th>
                            <th>Data</th>
                            <th>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          data.map(obj => {
                            return (
                              <tr className=
                              {obj.Descrição.search('Investimento') < 0 ? (obj.Descrição !== 'Saldo' ? (obj.Valor >= 0 ? 'bg-success' : 'bg-danger') : 'bg-info') : 'bg-warning'}
                               key={obj.Descrição}>    
                                <td>{obj.Descrição}</td>
                                <td>{obj.Data}</td>
                                <td>R$ {obj.Valor}</td>
                              </tr>
                            )
                          })
                        }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
