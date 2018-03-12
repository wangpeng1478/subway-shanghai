import React from 'react'
import labels from '../data/labels.json'


class Label extends React.Component {
  render() {
    const labelElements = [];
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      labelElements.push(<text x={label.x} y={label.y} fill={label.fill} key={label.text + i}>{label.text}</text>);
    }
    return(
      <g>{labelElements}</g>
    )
  }
}