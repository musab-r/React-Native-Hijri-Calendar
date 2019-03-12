import React from 'react';
import PropTypes from 'prop-types';
import MonthHeader from '../month_header/month_header';
import YearHeader from '../year_header/year_header';
import Weeks from '../weeks/weeks';
import {View, Text } from 'native-base';
import { StyleSheet } from 'react-native';


const Calendar = props => {
  return (
    <View style={styles.calendar}>
      <Text style={styles.title}>Hijri-Calendar</Text>

      <MonthHeader
        {...props}
        onOneMonthBackClick={props.onOneMonthBackClick}
        onOneMonthAheadClick={props.onOneMonthAheadClick} />
      <YearHeader
        {...props}
        onOneYearBackClick={props.onOneYearBackClick}
        onOneYearAheadClick={props.onOneYearAheadClick}
        onTenYearsBackClick={props.onTenYearsBackClick}
        onTenYearsAheadClick={props.onTenYearsAheadClick} />
      <Weeks
        {...props}
        onDateSelected={props.onDateSelected} />
    </View>
  );
};

Calendar.propTypes = {
  utils: PropTypes.object,
  onOneMonthBackClick: PropTypes.func,
  onOneMonthAheadClick: PropTypes.func,
  onOneYearBackClick: PropTypes.func,
  onOneYearAheadClick: PropTypes.func,
  onTenYearsBackClick: PropTypes.func,
  onTenYearsAheadClick: PropTypes.func,
  onDateSelected: PropTypes.func
};

export default Calendar;

const styles = StyleSheet.create({
  calendar: {
    borderWidth:   1,
    borderColor: '#CED4DA',
    borderRadius: 3,
    marginTop:    3,
    backgroundColor: "white",
    padding:  10
  },
  title: {
    textAlign: 'center', 
    fontSize: 28, 
    backgroundColor: '#076e4e', 
    height: 40, 
    color: 'white', 
    marginTop: 10 
  }

});