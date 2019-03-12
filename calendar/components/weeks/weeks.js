import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {Container,Content, Card, Button, CardItem, Left, Body, Separator, Icon, Input, View, Text} from 'native-base';
import { StyleSheet } from 'react-native';


class Weeks extends Component {

   constructor(props) {
    super(props);

    this.state = {
      th: ['AHAD','ITHNAYN','THALUTA','ARBEA','KHAMEES','AlJUMUA','SABT']
    };
  }

  render() {
    const startDate = this.props.utils.startingDate(this.props.navigationDate);
    const diff = this.props.utils.diffDate(this.props.navigationDate);
    const days = [];
    _.range(startDate.day()).map(() => {
      days.push(false);
    });
    _.range(diff).map(i => {
      days.push(('0' + (i + 1)).slice(-2));
    });

    _.range((5 * 7) - days.length).map(() => {
      days.push(false);
    });

    const weeks = [];
    while(days.length) weeks.push(days.splice(0, 7));

    return (
      <View>
        <View style={styles.weeks_table}>
          <View style={styles.weeks_thead}>
            <View style={styles.weeks_table_tr}>
              <Text style={styles.weeks_table_td} >AHAD</Text>
              <Text style={styles.weeks_table_td} >ITHNAYN</Text>
              <Text style={styles.weeks_table_td} >THALATHA</Text>
              <Text style={styles.weeks_table_td} >ARBEA</Text>
              <Text style={styles.weeks_table_td} >KHAMIS</Text>
              <Text style={styles.weeks_table_td} >JUMUA</Text>
              <Text style={styles.weeks_table_td_last} >SABT</Text>
            </View>
          </View>
          <View style={styles.weeks_tbody_tr_td_hover}>
            {_.range(5).map(i => {
              return <View style={styles.weeks_tr} key={i}>
                {_.range(7).map(j => {
                  let selectedClass = '';
                  let date = weeks[i][j][0] === '0' ?
                    parseInt(weeks[i][j][1]) : parseInt(weeks[i][j]);

                  if (this.props.utils.isSelectedDate(this.props.navigationDate,this.props.selectedDate,  date)) {
                    selectedClass = 'selected text-white bg-primary';
                  }

                  return (
                    <Text
                      style={styles.weeks_td}
                      onPress={() => this.props.onDateSelected(weeks[i][j])}
                      className={`${selectedClass} ${weeks[i][j] ? '' : 'selected_day'}`}
                      key={Math.random(i * j)}>{weeks[i][j]}</Text>
                  );
                })}
              </View>;
            })}
          </View>
        </View>
      </View>
    );
  }
}

Weeks.propTypes = {
  utils: PropTypes.object,
  onDateSelected: PropTypes.func,
  selectedDate: PropTypes.object,
  navigationDate: PropTypes.object
};

export default Weeks;


const styles = StyleSheet.create({
  weeks_table: {
    justifyContent: 'center',
    textAlign:"center",
    margin: 0
  },
  weeks_table_tr: {
    justifyContent: 'center',
    textAlign:"center",
    paddingBottom: 5,
    paddingTop: 5,
    flexDirection: 'row',
    backgroundColor: '#076e4e',
    borderBottomWidth: 1,
    borderBottomColor: '#1f7c5f',
    borderTopWidth: 1,
    borderTopColor: '#1f7c5f',
    margin: 0
  },
  weeks_table_td:{
    textAlign:"center",
    borderRightWidth: 1,
    borderRightColor: '#1f7c5f',
    width: '15%',
    paddingTop: 5,
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',  
  },
  weeks_table_td_last:{
    textAlign:"center",
    paddingTop: 5,
    width: '15%',
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',  
  },
  weeks_thead:{
    fontWeight:"bold"
  },
  weeks_tr:{
    flexDirection: 'row',
    lineHeight: 14
  },
  weeks_td:{
    fontSize: 10,
    width:  50,
    height:  50,
    textAlign: 'center',
  },
  weeks_tbody_tr_td_hover:{
    backgroundColor: "#FFFFFF",
    paddingTop: 10,
  },
  selected_day:{
    backgroundColor:"#1f7c5f",
  },

});