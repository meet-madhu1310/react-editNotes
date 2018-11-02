const e = React.createElement;

class Hello extends React.Component{

  constructor(props){
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked){
      return 'You clicked this button.'
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      // { onmouseover: () => this.setState({ hovered: true}) },
      'Like the Button'
    )
  }

}

// const domContainer = document.querySelector('#con');
ReactDOM.render(e(Hello), document.querySelector('#con'));
