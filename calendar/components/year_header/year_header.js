import React from 'react';
import PropTypes from 'prop-types';
import {Container,Content, Card, Button, CardItem, Left, Body, Separator, Icon, Input, View, Text} from 'native-base';
import { StyleSheet } from 'react-native';

const YearHeader = props => (
  <View style={styles.year_header}>
    <Text
      onPress={props.onOneYearBackClick}
      style={styles.year_btn}> {"◄"} Prev </Text>
    <Text style={styles.year_header_strong} >{props.utils.yearHeader(props.navigationDate)}</Text>
    <Text
      onPress={props.onOneYearAheadClick}
      style={styles.year_btn}> Next {"►"} </Text>
  </View>
);

YearHeader.propTypes = {
  utils: PropTypes.object,
  navigationDate: PropTypes.object,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func
};

export default YearHeader;

const styles = StyleSheet.create({
  year_header: {
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#076e4e',
    width: '100%'
  },
  year_btn: {
    textAlign: 'center',
    color: 'white',
    margin: 1,
    marginTop:    5,
    marginRight:  0,
  },
  year_header_strong: {
    fontSize: 18,
    width: '30%',
    color: 'white',
    textAlign: 'center',
  }

});