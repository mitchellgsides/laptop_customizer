import React, { Component } from 'react';
import TechFeature from './TechFeature';

export default class TechSpecs extends Component {
  render() {


    return (
      <section className='main__form'>
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
        {
            Object.keys(this.props.features).map(key => {
                return <TechFeature 
                            key={key} 
                            name={key}
                            selected={this.props.selected}
                            features={this.props.features[key]}
                            handleSelect={this.props.handleSelect.bind(this, key)}
                             />
            })
        }
      </section>
    )
  }
}