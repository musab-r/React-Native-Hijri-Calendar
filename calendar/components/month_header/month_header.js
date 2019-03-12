import React from 'react';
import PropTypes from 'prop-types';
import {Container,Content, Card, Button, CardItem, Left, Body, Separator, Icon, Input, View, Text} from 'native-base';
import { StyleSheet } from 'react-native';

const MonthHeader = props => (
  <View style={styles.month_header} >
    <Text
      onPress={props.onOneMonthBackClick}
      style={styles.month_btn}>{"◄"} Prev</Text>
    <Text style={styles.month_header_strong} >{props.utils.monthHeader(props.navigationDate)}</Text>
    <Text
      onPress={props.onOneMonthAheadClick}
      style={styles.month_btn}>Next {"►"}</Text>
  </View>
);

MonthHeader.propTypes = {
  utils: PropTypes.object,
  navigationDate: PropTypes.object,
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func
};

export default MonthHeader;


const styles = StyleSheet.create({
  month_header: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#076e4e',
    width: '100%',
    paddingBottom: 5,
    paddingTop: 5,
  },
  month_btn: {
    textAlign: 'center',
    color: 'white',
    margin: 1,
    marginTop:    5,
    marginRight:  0,
  },
  month_header_strong: {
    fontSize: 18,
    width: '30%',
    color: 'white',
    textAlign: 'center',
  }

});