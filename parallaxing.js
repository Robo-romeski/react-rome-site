var ParallaxScene = React.createClass({
    componentDidMount: function() {
      new Parallax(this.refs.scene);
      this._renderContent(this.props);
    },
    _renderContent: function(props) {

      ReactDOM.render(<div>{props.children}</div>, this.refs.scene);

    },

      render: function() {

        return (
          <ul ref="scene" data-friction-x="0.1"
			      data-friction-y="0.1"
            data-scalar-x="25"
            data-scalar-y="15">
          {this.props.children}
         </ul>);

        }
      });

var ParallaxLayer = React.createClass({
   render: function() {
        return <li className="layer"
        data-depth={this.props.depth}>
        {this.props.children}
        </li>;
   }
});
        var i = 0;
var App = React.createClass({
  _handle: function() {
    this.setState({ahoj: ++i});
  },
  getInitialState: function() {
    return {ahoj: i}
  },
      render: function() {
        let styles= {
          background: 'url(http://matthew.wagerfield.com/parallax/assets/images/background.jpg) no-repeat 50% 100%',
          bottom:'96px',
          backgroundSize: 'cover',
          position: 'absolute',
          width: '110%',
          height: '500px',
          left: '-5%',
          top: '-5%',
        }
        return (
         <div style={{height: '100%'}}>
          <ParallaxScene>
            <ParallaxLayer depth={0.2}><div style={styles}></div></ParallaxLayer>
            <ParallaxLayer depth={0.8}><span style={{
                color: 'red',
                  position: 'absolute',
                    top: 0,
                      left: 0,
                        zIndex: 9999
                }}>ahoj</span>
            </ParallaxLayer>
          </ParallaxScene>
        </div>
        );
     }
});

ReactDOM.render( <App /> ,
   document.getElementById('svg_mount_example')
);
