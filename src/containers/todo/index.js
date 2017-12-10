import React from 'react'
import { connect } from 'react-redux'
import { Route, Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import Header from './header'
import SiderLayout from './sider'
import Breadcrumbs from './breadcrumbs'

const { Content } = Layout

const propTypes = {
  loggedIn: PropTypes.bool.isRequired,
}
const defaultProps = {
  loggedIn: false,
}

const MainLayout = ({ loggedIn }) => (!loggedIn ? <Redirect to={'/login'} /> : (
  <Layout>
    <Header />
    <Layout>
      {/* <SiderLayout /> */}
      <Layout style={{ padding: '0 24px 24px' }}>
        {/* <Breadcrumbs /> */}
        <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
))

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
})

MainLayout.propTypes = propTypes
MainLayout.defaultProps = defaultProps

export default connect(mapStateToProps, mapActionCreators)(MainLayout)
