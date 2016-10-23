const {BootstrapDataTable, BootstrapDataColumn} = ReactBootstrapTabular;
const chance = new Chance(31102015);

const genData = (rows = 10) => Array.from({length: rows}, (v, k) => ({
  id: k + 1,
  name: chance.first(),
  lastName: chance.last(),
  username: chance.twitter(),
  money: chance.integer({min: 5, max: 10000}),
}));

class CodeDescriptor extends React.Component {

  constructor(props) {
    super(props);

    this._getTableProps = this._getTableProps.bind(this);
  }

  componentDidMount() {
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  }

  componentDidUpdate() {
    $('pre code').each((i, block) => hljs.highlightBlock(block));
  }

  _getTableProps() {
    let props = '';

    if (this.props.bordered) {
      props += ' bordered';
    }

    if (this.props.striped) {
      props += ' striped'
    }

    if (this.props.condensed) {
      props += ' condensed';
    }

    return props;
  }

  render() {
    return (
      <pre>
        <code className="html">
          {`<BootstrapDataTable data={data} ${this._getTableProps()}>
</BootstrapDataTable>`}
        </code>
      </pre>
    );
  }

}

CodeDescriptor.propTypes = {
  bordered: React.PropTypes.bool.isRequired,
  condensed: React.PropTypes.bool.isRequired,
  striped: React.PropTypes.bool.isRequired
};

class TestComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      bordered: false,
      condensed: false,
      striped: false
    };

    this._toggleBordered = this._toggleBordered.bind(this);
    this._toggleStriped = this._toggleStriped.bind(this);
    this._toggleCondensed = this._toggleCondensed.bind(this);
  }

  _toggleBordered() {
    this.setState({bordered: !this.state.bordered});
  }

  _toggleCondensed() {
    this.setState({condensed: !this.state.condensed});
  }

  _toggleStriped() {
    this.setState({striped: !this.state.striped});
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="row">
            <div className="col-xs-12">
              <BootstrapDataTable
                data={genData(4)}
                bordered={this.state.bordered}
                striped={this.state.striped}
                condensed={this.state.condensed}>
                <BootstrapDataColumn property={'id'} name={'#'}/>
                <BootstrapDataColumn property={'name'} name={'Name'}/>
                <BootstrapDataColumn property={'lastName'} name={'Last Name'}/>
                <BootstrapDataColumn property={'username'} name={'Username'}/>
                <BootstrapDataColumn property={'money'} name={'Money'}/>
              </BootstrapDataTable>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="checkbox">
                <label>
                  <input type="checkbox" onClick={this._toggleBordered}/> bordered
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="checkbox">
                <label>
                  <input type="checkbox" onClick={this._toggleCondensed}/> condensed
                </label>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6 col-md-3">
              <div className="checkbox">
                <label>
                  <input type="checkbox" onClick={this._toggleStriped}/> striped
                </label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">

            </div>
          </div>
        </div>

        <div className="col-xs-12">

          <CodeDescriptor {...this.state} />

        </div>

      </div>
    );
  }

}

ReactDOM.render(<TestComponent />, document.getElementById('example'));