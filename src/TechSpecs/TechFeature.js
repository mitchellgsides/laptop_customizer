import React, { Component } from 'react'
import TechFeatureItem from './TechFeatureItem';

export default class TechFeature extends Component {

  render() {
      
    const techFeatureItems = Object.keys(this.props.features).map((key) => {
            return <TechFeatureItem 
              key={key} 
              feature={this.props.name}
              name={this.props.features[key].name} 
              cost={this.props.features[key].cost}
              selected={this.props.selected}
              handleSelect={this.props.handleSelect} 
              /> 
    })

    return (
      <div className='feature' key={this.props.name}>
        <div className='feature__name'>{this.props.name}</div>
            {techFeatureItems}
      </div>
    )
  }
}
