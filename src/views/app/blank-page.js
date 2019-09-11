import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
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
      orderby: 'Rentabilidade',
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
                    <table className="table table-striped">
                      <thead>
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
                            <tr key={obj.Descrição}>
                              <td>{obj.Descrição}</td>
                              <td>{obj.Data}</td>
                              <td>{obj.Valor}</td>
                            </tr>
                          )
                        })
                      }
                      </tbody>
                    </table>
                  </div>
                </div>
                
              </Colxx>
            </Row>


            {/* <Row>
              <Colxx xxs="12" className="mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title"></div>
                    <div className="ReactTable react-table-fixed-height">
                      <div className="rt-table" role="grid">
                        <div className="rt-thead -header">
                          <div className="rt-tr" role="row">
                            <div className="rt-th rt-resizable-header -cursor-pointer" role="columnheader" tabindex="-1">
                              <div className="rt-resizable-header-content">Descrição</div>
                              <div className="rt-resizer"></div>
                            </div>
                            <div className="rt-th rt-resizable-header -cursor-pointer" role="columnheader" tabindex="-1">
                              <div className="rt-resizable-header-content">Data</div>
                              <div className="rt-resizer"></div>
                            </div>
                            <div className="rt-th rt-resizable-header -cursor-pointer" role="columnheader" tabindex="-1">
                              <div className="rt-resizable-header-content">Valor</div>
                              <div className="rt-resizer"></div>
                            </div>
                          </div>
                        </div>
                        <div className="rt-tbody">
                          <div className="rt-tr-group" role="rowgroup">
                          {
                            data.map(obj => {
                              return (
                                <div className="rt-tr -odd" role="row" key={obj.Descrição}>
                                  <div className="rt-td" role="gridcell"><p className="list-item-heading">{obj.Descrição}</p></div>
                                  <div className="rt-td" role="gridcell"><p className="text-muted">{obj.Data}</p></div>
                                  <div className="rt-td" role="gridcell"><p className="text-muted">{obj.Valor}</p></div>
                                </div>
                              )
                            })
                          }
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </Colxx>
            </Row> */}
          </Fragment>
        )
    }
}
