import React, { Component } from 'react'

export default class TechFeatureItem extends Component {
    
  render() {
    const { name, cost} = this.props;
    const total = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(cost);
    const selClass = (this.props.name === this.props.selected.selected[this.props.feature].name) ? 'feature__selected' : ' ';
    
    return (
        <ul 
          className={'feature__list'}
          key={'key'}>
            <li>
                <div 
                    className={'feature__option ' + selClass}
                    onClick={this.props.handleSelect.bind(this, name, cost)}
                    >{name}{' '}{`(${total})`}</div>
            </li>
        </ul>
    )
  }
  }