var Logo = React.createClass({displayName: "Logo",
  propTypes:{
      src: React.PropTypes.string.isRequired
  },
  render: function(){
      return(
          React.createElement("img", React.__spread({className: "center"},  this.props))
      );
  }
});

var Label = React.createClass({displayName: "Label",
  render: function() {
      return (
      React.createElement("p", React.__spread({className: "default-label"},  this.props), " Hello World ", React.createElement("span", {className: "name"}, " ",
          this.props.name,
      " ")
      ) );
  }
});

var Input = React.createClass({displayName: "Input",
  render: function() {
      return (
      React.createElement("input", React.__spread({
          className: "default-input",
          placeholder: "Enter your name"},
          this.props,
          {type: "text"})
       )
      );
  }
});

var HelloWidget = React.createClass({displayName: "HelloWidget",
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
      return ( React.createElement("div", {className: "widget"},
          React.createElement(Logo, {className: "center", src: "http://goo.gl/fx5Zwn"}),
          React.createElement(Label, {className: "default-label", name: this.state.name}),
          React.createElement(Input, {className: "default-input", onChange: this.handleChange}), " "));
  }
});

React.render(React.createElement(HelloWidget, null), document.getElementById('container'));
