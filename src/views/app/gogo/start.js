import React, { Component, Fragment } from "react";
import { Row } from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import { Colxx, Separator } from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
// import PolarArea from "../../../components/charts/PolarArea";
// const Spreadsheet = require('../../../spreadsheet/spreadsheet');

import UserCardBasic from "../../../components/cards/UserCardBasic"

export default class Start extends Component {
    render() {
        return (
            <Fragment>
            <Row>
              <Colxx xxs="12">
                <Breadcrumb heading="menu.start" match={this.props.match} />
                <Separator className="mb-5" />
              </Colxx>
            </Row>
            <Row>
              <Colxx xxs="12" className="mb-4">
                {/* <p><IntlMessages id=""/></p> */}
                <h1><IntlMessages id="menu.start" /></h1>
                <UserCardBasic data="https://gogo-react.coloredstrategies.com/assets/img/profile-pic-l.jpg"
                name='Nome Teste' status='Teste status' />
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
