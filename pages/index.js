import React, { Component } from 'react'

import Card from '../components/Cards/Cards'
import Chart from '../components/Chart/Chart'
import CountryPicker from '../components/CountryPicker/CountryPicker'
import { fetchData } from '../api'
import Head from 'next/head'

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
        <Head>
          <title>COVID-19 Tracker</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <img className="image" src='/static/covid.png' alt="COVID-19" />
        <Card data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country}/>  
      </div>
    )
  }
}

export default index
