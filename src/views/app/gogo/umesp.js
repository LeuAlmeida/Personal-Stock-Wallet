import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";

import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import '../../../assets/css/common/style.css';

import Tabletop from 'tabletop';

export default class Umesp extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1QpPgpAKyZXvwirnHekmSWqYsaT7s0B4Szd0UsYEEPJw',
      // orderby: 'Posição',
      reverse: false,
      wanted: ['AAA'],

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

      // const weg = data[0]
      // console.log(weg)

        return (
            <Fragment>
            <Row>
              <Colxx xxs="6">
                <Breadcrumb heading="menu.umesp" match={this.props.match} />
              </Colxx>
              <Colxx xxs="12">
                <Separator className="mb-5" />
              </Colxx>
            </Row>

            <Row>
              <Colxx xs="12">
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
                          {/* <tr>
                            <td>Descrição</td>
                            <td>Nome</td>
                            <td>Valor</td>
                          </tr> */}
                        {
                          data.map(obj => {
                            return (
                              <tr key={obj._id}>    
                                <td>{obj.Coluna1}</td>
                                <td>{obj.Coluna2}</td>
                                <td>{obj.Coluna3}</td>
                              </tr>
                            )
                          })
                        }
                        </tbody>
                      </table>
                    </div>
              </Colxx>
              </Row>
            

          </Fragment>
        )
    }
}