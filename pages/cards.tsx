import React, { Component, ReactNode } from 'react';
type Props = {
    children: ReactNode
}
export class Card extends Component<Props> {
    render () {
        return <div className= "card"> {this.props.children}</div>
    }
}

const App = () => {
    return (
      <div>
        <Card>A simple card</Card>
      </div>
    )
  }