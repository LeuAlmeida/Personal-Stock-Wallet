import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
// import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import GradientWithRadialProgressCard from "../../../components/cards/GradientWithRadialProgressCard";
// import GradientCard from "../../../components/cards/GradientCard"

export default class Second extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.second" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>

            <Row>
              <Colxx xxs="12">
                <div className="react-contextmenu-wrapper">
                  <div className="d-flex flex-row active card">
                    <div className="pl-2 d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero align-items-lg-center">
                        <a className="w-40 w-sm-100" href="https://clear.com.br">
                          <p className="list-item-heading mb-1 truncate">Clear Corretora</p>
                        </a>
                        <p className="mb-1 text-muted text-small w-15 w-sm-100">Desserts</p>
                        <p className="mb-1 text-muted text-small w-15 w-sm-100">27.01.2019</p>
                        <div className="w-15 w-sm-100">
                          <span className="badge badge-secondary badge-pill">PROCESSED</span>
                        </div>
                      </div>
                      <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                        <div className="item-check mb-0 custom-checkbox custom-control">
                          <input type="checkbox" id="check_18" className="custom-control-input" />
                            <label className="custom-control-label" for="check_18"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
