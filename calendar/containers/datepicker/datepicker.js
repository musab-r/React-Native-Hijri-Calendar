import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import { View, Text, Container, Icon, Body, Left } from 'native-base';
import { StyleSheet } from 'react-native';
import Calendar from '../../components/calendar/calendar';
import { set_expiry_date } from '../../../../helpers/volunteer/volunteer_helper';
import { Modal, TouchableHighlight, TextInput} from 'react-native';

class Datepicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      navigationDate: this.props.utils.initialMoment(),
      selectedDate: undefined,
      modalVisible: false,
    };
  }
  static defaultProps = {
    onSelect: '',
    onPress: '',
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handleClickOutside = () => {
    this.setState({
      ...this.state,
      visible: false,
      navigationDate: this.state.selectedDate
    });
  };

  onInputBoxClicked = () => {
    this.setState({
      ...this.state,
      visible: !this.state.visible
    });
  };

  onOneYearBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneYearBack(this.state.navigationDate)
    });
  };

  onOneYearAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneYearAhead(this.state.navigationDate)
    });
  };

  onTenYearsBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.tenYearsBack(this.state.navigationDate)
    });
  };

  onTenYearsAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.tenYearsAhead(this.state.navigationDate)
    });
  };

  onOneMonthBackClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneMonthBack(this.state.navigationDate)
    });
  };

  onOneMonthAheadClick = () => {
    this.setState({
      ...this.state,
      navigationDate: this.props.utils.oneMonthAhead(this.state.navigationDate)
    });
  };

  onDateSelected = date => {
    if (date) {
      this.setState({
        ...this.state,
        selectedDate: this.props.utils.dateSelected(this.state.navigationDate, date)
      });
    }
  };
  getSelectedDate = () => {
    var obj = this.state.selectedDate;
    return obj.toString();
  }
  render() {
    set_expiry_date(this.state.selectedDate);
    return (
      <View>
        <Modal
          animationType="none"
          transparent={false}
          visible={this.state.modalVisible}
          style={{height: 100}}
          >
          <View>
            <View style={styles.datepicker}>
              {!this.state.visible ?
                <Calendar
                  {...this.state}
                  utils={this.props.utils}
                  onOneMonthBackClick={this.onOneMonthBackClick}
                  onOneMonthAheadClick={this.onOneMonthAheadClick}
                  onOneYearBackClick={this.onOneYearBackClick}
                  onOneYearAheadClick={this.onOneYearAheadClick}
                  onTenYearsBackClick={this.onTenYearsBackClick}
                  onTenYearsAheadClick={this.onTenYearsAheadClick}
                  onDateSelected={this.onDateSelected} /> : null
              }
            </View>
            <View style={{flexDirection: 'row', backgroundColor: '#076e4e'}}>
              <Text style={{color: 'white', margin: 20}} >Selected Value:</Text>
              <Text style={{color: 'white', marginTop: 20}} >{this.state.selectedDate != undefined ? this.getSelectedDate() : ""}</Text>
            </View>
            <TouchableHighlight
              underlayColor={{ color: 'transparent'}}
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <View style={styles.button}>
                <Icon name='ios-arrow-round-back' style={{marginRight: 5}} />
                <Left>
                  <Text>Back</Text>
                </Left>
              </View>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          underlayColor={{ color: 'transparent'}}
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name='ios-calendar' style={{color: 'red', marginRight: 5}} />
            <Left>
              <Text>{this.state.selectedDate != undefined ? this.getSelectedDate() : "Hijri Calendar"}</Text>
            </Left>
          </View>
        </TouchableHighlight>
      </View>
      
    );
  }
}

Datepicker.propTypes = {
  utils: PropTypes.object,
  onCalendarTypeChange: PropTypes.func,
  calendarType: PropTypes.string,
  onPress: PropTypes.func,
};

export default onClickOutside(Datepicker);

const styles = StyleSheet.create({
  datepicker: {
  },
  datepicker_input: {
    borderWidth:       1,
    borderColor:  '#CED4DA',
  },
  datepicker_btn: {
    borderWidth:       1,
    borderColor:  'grey',
    paddingRight:  '30%',
    backgroundColor: 'grey',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row', 
    margin: 20, 
    padding: 10, 
    backgroundColor: 'grey', 
    borderWidth: 1, 
    borderColor:'white', 
    width: 80
  }
});