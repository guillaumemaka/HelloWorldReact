var Logo = React.createClass({
  propTypes:{
      src: React.PropTypes.string.isRequired
  },
  render: function(){
      return(
          <img className="center" {...this.props} />
      );
  }
});

var Label = React.createClass({
  render: function() {
      return (
      <p className="default-label" {...this.props}> Hello World <span className="name"> {
          this.props.name
      } </span>
      </p> );
  }
});

var Input = React.createClass({
  render: function() {
      return (
      <input
          className="default-input"
          placeholder="Enter your name"
          {...this.props}
          type="text"
       />
      );
  }
});

var HelloWidget = React.createClass({
  getInitialState: function() {
      return {
          name: ''
      };
  },
  handleChange: function(e) {
      this.setState({
          name: e.target.value
      });
  },
  render: function() {
      return ( <div className="widget">
          <Logo className="center" src="http://goo.gl/fx5Zwn"/>
          <Label className="default-label" name={this.state.name} />
          <Input className="default-input" onChange={this.handleChange} /> </div>);
  }
});

React.render(<HelloWidget />, document.getElementById('container'));
