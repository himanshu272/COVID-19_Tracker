import React, { Component } from 'react'

import Card from '../components/Cards/Cards'
import Chart from '../components/Chart/Chart'
import CountryPicker from '../components/CountryPicker/CountryPicker'
import { fetchData } from '../api'

class index extends Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data : fetchedData, country: country });
  }

  render() {

    const { data, country } = this.state;
    return (
      <div className="container">
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>
        
      </div>
    )
  }
}

export default index
