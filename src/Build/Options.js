import React, { Component } from 'react'


export default class Options extends Component {
  render() {

    const feature = this.props.name;
    const name = this.props.features.name;
    const cost =  
      new Intl.NumberFormat('en-us', {style: 'currency', currency: 'USD'}).format(this.props.features.cost);

    return (
      <div className='summary__option' >
        <div className='summary__option__label'>
            {// this is where my data will go
            feature}
        </div>
        <div className='summary__option__value'>
            {// more data
                name}
        </div>
        <div className='summary__option__cost'>
            {// even more data
                cost}
        </div>
      </div>
    )
  }
}
