import logo from './logo.svg';
import './App.css';
import {DataPicker, DatePicker} from '@progress/kendo-dateinputs-react-wrapper';
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css'
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      dateTime: new Date()
    }
    this.onchange = this.onchange.bind(this);
  }
  
  onchange(e) {
    console.log(e.sender.value());
    this.setState({
      dateTime: e.sender.value()
    });
  };

  render() {
  return (
    <div className="App">
      <div className="date-pocker">
        <DatePicker
        value={this.dateTime}
        min = {new Date(2020,11,1)}
        max = {new Date(2021,11,1)}
        format = {"'yyyy/MM/dd"}
        change = {this.onchange}
        />
      </div>
    </div>
  );
}
}

export default App;
