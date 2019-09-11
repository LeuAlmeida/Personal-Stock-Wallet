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
              <Colxx xxs="4" className="mb-4">
                <GradientWithRadialProgressCard icon="bank">

                </GradientWithRadialProgressCard>
              </Colxx>
            </Row>
          </Fragment>
        )
    }
}
