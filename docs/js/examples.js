const { BootstrapDataTable, BootstrapDataColumn } = ReactBootstrapTabular;
const chance = new Chance(31102015);

const genDataR = (rows = 10) => Array.from({ length: rows }, (v, k) => ({
  id: k + 1,
  name: chance.first(),
  lastName: chance.last(),
  username: chance.twitter(),
  money: chance.integer({ min: 5, max: 10000 }),
}));

const genData = _.memoize(genDataR);

const doHighLight = () => $('pre code').each((i, block) => hljs.highlightBlock(block));

class CodeDescriptor extends React.Component {

  constructor (props) {
    super(props);

    this._getTableProps = this._getTableProps.bind(this);
  }

  componentDidMount () {
    doHighLight();
  }

  componentDidUpdate () {
    doHighLight();
  }

  _getTableProps () {
    let props = '';
    const condAdd = (cond, v) => cond ? ` ${v}` : '';

    props += condAdd(this.props.bordered, 'bordered') +
      condAdd(this.props.striped, 'striped') +
      condAdd(this.props.hover, 'hover') +
      condAdd(this.props.responsive, 'responsive') +
      condAdd(this.props.pagination, 'pagination') +
      condAdd(this.props.searchable, 'searchable') +
      condAdd(this.props.condensed, 'condensed');

    if (this.props.pageSize !== 10) {
      props += ` pageSize={${this.props.pageSize}}`;
    }

    return props;
  }

  _getColumnProps (property, name, p) {
    const condAdd = (cond, v) => cond ? ` ${v}` : '';
    let props = `property={'${property}'} name={'${name}'}`;

    props += condAdd(p.includeInSearch, 'includeInSearch') +
      condAdd(p.showTotal, 'showTotal') +
      condAdd(p.sortable, 'sortable');

    return props;
  }

  render () {
    return (
      <pre>
        <code className="html">
          {`<BootstrapDataTable data={data}${this._getTableProps()}>
  <BootstrapDataColumn ${this._getColumnProps('index', '#', this.props.columns.id)} />
  <BootstrapDataColumn ${this._getColumnProps('name', 'Name', this.props.columns.name)} />
  <BootstrapDataColumn ${this._getColumnProps('lastName', 'Last Name', this.props.columns.lastName)} />
  <BootstrapDataColumn ${this._getColumnProps('username', 'Username', this.props.columns.username)} />
  <BootstrapDataColumn ${this._getColumnProps('money', 'Money', this.props.columns.money)} />
</BootstrapDataTable>`}
        </code>
      </pre>
    );
  }

}

CodeDescriptor.propTypes = {
  bordered: React.PropTypes.bool.isRequired,
  condensed: React.PropTypes.bool.isRequired,
  striped: React.PropTypes.bool.isRequired,
  hover: React.PropTypes.bool.isRequired,
  responsive: React.PropTypes.bool.isRequired,
  pagination: React.PropTypes.bool.isRequired,
  pageSize: React.PropTypes.number.isRequired,
  searchable: React.PropTypes.bool.isRequired
};

class CheckBox extends React.Component {

  constructor (props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick () {
    this.props.onClick(this.props.property);
  }

  render () {
    return (
      <label className="checkbox-inline">
        <input type="checkbox" value={this.props.value} onClick={this._onClick} /> {this.props.label}
      </label>
    );
  }
}

CheckBox.propTypes = {
  value: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  property: React.PropTypes.string.isRequired
};

class ColumnPropertySelector extends React.Component {

  render () {
    return (
      <div className="col-xs-12 column-block">
        <div className="block-title no-margin">
          <p>{this.props.label} column</p>
        </div>

        <form className="form-horizontal">
          <CheckBox value={this.props.values.sortable}
                    onClick={this.props.toggleProperty}
                    label="sortable"
                    property={`${this.props.path}.sortable`} />
          <CheckBox value={this.props.values.includeInSearch}
                    onClick={this.props.toggleProperty}
                    label="includeInSearch"
                    property={`${this.props.path}.includeInSearch`} />
          {this.props.values.showTotal !== undefined && (
            <CheckBox value={this.props.values.showTotal}
                      onClick={this.props.toggleProperty}
                      label="showTotal"
                      property={`${this.props.path}.showTotal`} />
          )}
        </form>
      </div>
    );
  }
}

ColumnPropertySelector.propTypes = {
  label: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  values: React.PropTypes.shape({
    sortable: React.PropTypes.bool.isRequired,
    includeInSearch: React.PropTypes.bool.isRequired
  }),
  toggleProperty: React.PropTypes.func.isRequired
};

class TestComponent extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      bordered: false,
      condensed: false,
      striped: false,
      hover: false,
      responsive: false,
      pagination: false,
      searchable: false,
      dataSize: 4,
      pageSize: 10,
      columns: {
        id: {
          includeInSearch: false,
          sortable: false
        },
        name: {
          includeInSearch: false,
          sortable: false
        },
        lastName: {
          includeInSearch: false,
          sortable: false
        },
        username: {
          includeInSearch: false,
          sortable: false
        },
        money: {
          includeInSearch: false,
          sortable: false,
          showTotal: false
        }
      }
    };

    this._dataSizeChanged = this._dataSizeChanged.bind(this);
    this._pageSizeChanged = this._pageSizeChanged.bind(this);
    this._toggleProperty = this._toggleProperty.bind(this);
  }

  _dataSizeChanged (e) {
    this.setState({ dataSize: Number(e.target.value) })
  }

  _pageSizeChanged (e) {
    this.setState({ pageSize: Number(e.target.value) });
  }

  _toggleProperty (property) {
    const path = property.split('.');
    const currentValue = path.reduce((p, c) => p[c], this.state);
    path.push(!currentValue);
    const newValue = path.reduceRight((p, c) => ({ [c]: p }));
    this.setState(_.merge({}, this.state, newValue));
  }

  render () {
    return (
      <div className="row">
        <div className="col-xs-12">

          <div className="row">
            <div className="col-xs-12">
              <h3>Customization Form</h3>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="row">
                <div className="col-xs-12 block-title">
                  <p>Generic Form Options</p>
                </div>

                <div className="col-xs-10 col-xs-offset-1 col-sm-12 col-sm-offset-0">
                  <div className="row">

                    <form className="form-horizontal">

                      <div className="form-group">
                        <label htmlFor="data-size" className="col-sm-3 control-label">Data Size</label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            id="data-size"
                            onChange={this._dataSizeChanged}
                            value={this.state.dataSize} />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="data-size" className="col-sm-3 control-label">Page Size</label>
                        <div className="col-sm-8">
                          <input
                            type="number"
                            className="form-control"
                            id="data-size"
                            onChange={this._pageSizeChanged}
                            value={this.state.pageSize} />
                        </div>
                      </div>

                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="row">
                          <div className="col-xs-6">
                            <CheckBox value={this.state.bordered} onClick={this._toggleProperty} label="bordered"
                                      property="bordered" />
                          </div>
                          <div className="col-xs-6">
                            <CheckBox value={this.state.condensed} onClick={this._toggleProperty} label="condensed"
                                      property="condensed" />
                          </div>
                          <div className="col-xs-6">
                            <CheckBox value={this.state.striped} onClick={this._toggleProperty} label="striped"
                                      property="striped" />
                          </div>
                          <div className="col-xs-6">
                            <CheckBox value={this.state.hover} onClick={this._toggleProperty} label="hover"
                                      property="hover" />
                          </div>
                          <div className="col-xs-6">
                            <CheckBox value={this.state.responsive} onClick={this._toggleProperty} label="responsive"
                                      property="responsive" />
                          </div>
                          <div className="col-xs-6">
                            <CheckBox value={this.state.pagination} onClick={this._toggleProperty} label="pagination"
                                      property="pagination" />
                          </div>
                          <div className="col-xs-6">
                            <CheckBox value={this.state.searchable} onClick={this._toggleProperty} label="searchable"
                                      property="searchable" />
                          </div>
                        </div>
                      </div>

                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-6">
              <div className="row">

                <ColumnPropertySelector label='Id' toggleProperty={this._toggleProperty}
                                        path='columns.id' values={this.state.columns.id} />

                <ColumnPropertySelector label='Name' toggleProperty={this._toggleProperty}
                                        path='columns.name' values={this.state.columns.name} />

                <ColumnPropertySelector label='Last Name' toggleProperty={this._toggleProperty}
                                        path='columns.lastName' values={this.state.columns.lastName} />

                <ColumnPropertySelector label='Username' toggleProperty={this._toggleProperty}
                                        path='columns.username' values={this.state.columns.username} />

                <ColumnPropertySelector label='Money' toggleProperty={this._toggleProperty}
                                        path='columns.money' values={this.state.columns.money} />

              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12">

              <h3>Rendered View</h3>

              <BootstrapDataTable
                data={genData(this.state.dataSize)}
                bordered={this.state.bordered}
                striped={this.state.striped}
                responsive={this.state.responsive}
                hover={this.state.hover}
                pageSize={this.state.pageSize}
                searchable={this.state.searchable}
                pagination={this.state.pagination}
                condensed={this.state.condensed}>
                <BootstrapDataColumn
                  property={'id'}
                  name={'#'}
                  includeInSearch={this.state.columns.id.includeInSearch}
                  formatTotal={() => <b>Total:</b>}
                  showTotal={this.state.columns.id.showTotal}
                  sortable={this.state.columns.id.sortable} />
                <BootstrapDataColumn
                  property={'name'}
                  name={'Name'}
                  includeInSearch={this.state.columns.name.includeInSearch}
                  sortable={this.state.columns.name.sortable} />
                <BootstrapDataColumn
                  property={'lastName'}
                  name={'Last Name'}
                  includeInSearch={this.state.columns.lastName.includeInSearch}
                  sortable={this.state.columns.lastName.sortable} />
                <BootstrapDataColumn
                  property={'username'}
                  name={'Username'}
                  includeInSearch={this.state.columns.username.includeInSearch}
                  sortable={this.state.columns.username.sortable} />
                <BootstrapDataColumn
                  property={'money'}
                  name={'Money'}
                  includeInSearch={this.state.columns.money.includeInSearch}
                  showTotal={this.state.columns.money.showTotal}
                  sortable={this.state.columns.money.sortable} />
              </BootstrapDataTable>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <h3>Code</h3>
              <CodeDescriptor {...this.state} />
            </div>
          </div>

        </div>

      </div>
    );
  }

}

ReactDOM.render(<TestComponent />, document.getElementById('example'));