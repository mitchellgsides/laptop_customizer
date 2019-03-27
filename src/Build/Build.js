import React, { Component } from 'react';
import Options from './Options';
import Price from './Price';


export default class Build extends Component {

  render() {

    let total = 0;
    const thisStuff = this.props.features.selected;
    for (let i in thisStuff) {
      total = total + thisStuff[i].cost;
    };
     

    return (
      <section className='main__summary'>
        <h3>NEW GREENLEAF 2018</h3>
                {
            Object.keys(this.props.features.selected).map(key => {
                    return <Options 
                            key={key} 
                            name={key} 
                            features={this.props.features.selected[key]}
                      />
            })
                }
        <Price total={total}/>
      </section>
    )
  }
}