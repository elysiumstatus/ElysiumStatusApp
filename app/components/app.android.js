import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ToolbarAndroid,
  Button,
  StatusBar,
  ScrollView,
  ProgressBarAndroid,
  ActivityIndicator
} from 'react-native'

import _ from 'lodash'
import moment from 'moment'
import { connect } from 'react-redux'

import Stats from './stats'
import Grid from './grid'
import { statsPoll } from '../modules/stats'

import { THEME } from '../config'

const TITLE = 'Elysium Status'
const { PRIMARY_COLOR, ACCENT_COLOR } = THEME

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(statsPoll(15))
  }

  renderActivityIndicator() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size={100} color={ACCENT_COLOR} style={{ height: 100 }} />
      </View>
    )
  }

  renderStats(servers, autoqueue) {
    return <Grid servers={servers} autoqueue={autoqueue} />
  }

  render() {
    const { servers, autoqueue } = this.props.data
    let subtitle = 'refreshing...'
    if (_.get(servers, 'logon.last_updated')) {
      subtitle = `Last updated ${moment(servers.logon.last_updated).fromNow()}`
    }

    if (this.props.isFetching) {
      subtitle = 'refreshing...'
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={true} backgroundColor='hsla(0, 0%, 0%, 0)' />
        <View style={{ elevation: 4, backgroundColor: PRIMARY_COLOR }}>
          <View style={{ backgroundColor: PRIMARY_COLOR, height: StatusBar.currentHeight }} />
          <ToolbarAndroid
            style={{ backgroundColor: PRIMARY_COLOR, height: 56 }}
            title={TITLE}
            subtitle={subtitle}
            titleColor='#f5f5f5'
            subtitleColor='#f5f5f5'
          />
        </View>
        { this.props.hasFetched ? this.renderStats(servers, autoqueue) : this.renderActivityIndicator() }
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state, props) {
  return {
    ...state.stats
  }
}

export default connect(mapStateToProps)(App)
