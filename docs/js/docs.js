const {BootstrapDataTable, BootstrapDataColumn} = ReactBootstrapTabular;
const chance = new Chance(31102015);
const columns = [
  <BootstrapDataColumn
    property={'id'}
    name={'#'}
    formatTotal={() => <b>Totals</b>}
  />,
  <BootstrapDataColumn
    property={'name'}
    sortable
    includeInSearch
    name={'Name'}
  />,
  <BootstrapDataColumn
    property={'lastName'}
    includeInSearch
    name={'Last Name'}
  />,
  <BootstrapDataColumn
    property={'username'}
    includeInSearch
    name={'Username'}
    format={cell => (cell ? <span>[ {cell} ]</span> : null)}
  />,
  <BootstrapDataColumn
    property={'money'}
    name={'Money'}
    sortable
    showTotal
    format={cell => (cell ? `$${cell}` : null)}
    align={'right'}
  />,
];

const genData = (rows = 10) => Array.from({length: rows}, (v, k) => ({
  id: k + 1,
  name: chance.first(),
  lastName: chance.last(),
  username: chance.twitter(),
  money: chance.integer({min: 5, max: 10000}),
}));

const DefaultView = () => (
  <BootstrapDataTable data={genData(4)}>
    {columns}
  </BootstrapDataTable>
);

const BorderedView = () => (
  <BootstrapDataTable data={genData(4)} bordered>
    {columns}
  </BootstrapDataTable>
);

ReactDOM.render(<DefaultView />, document.getElementById('example#1'));
ReactDOM.render(<BorderedView />, document.getElementById('example#2'));