import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../index';
import BootstrapDataTable from '../BootstrapDataTable';
import BootstrapDataColumn from '../BootstrapDataColumn';
import Chance from 'chance';

storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={ action('button clicked') }>Hello</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });

const columns = [
    <BootstrapDataColumn
        property='index'
        name="#"
        formatTotal={(cell, row) => <b>Totals</b>}/>,
    <BootstrapDataColumn
        property='name'
        sortable
        includeInSearch
        name="Name"/>,
    <BootstrapDataColumn
        property='lastName'
        includeInSearch
        name="Last Name"/>,
    <BootstrapDataColumn
        property='username'
        includeInSearch
        name="Username"
        format={(cell, row) => cell ? <span>[ {cell} ]</span>: null}/>,
    <BootstrapDataColumn
        property="money"
        name="Money"
        sortable
        showTotal/>
];
const chance = new Chance();

const genData = (rows = 10) => Array.from({length: rows}, (v,k) => ({
    index: k,
    name: chance.first(),
    lastName: chance.last(),
    username: chance.twitter(),
    money: chance.integer({min: 5, max: 10000})
}));

const wrap = (table) => {
    return <div style={{width: '100%', display: 'flex', padding: '50px 15%'}}>{table}</div>
};

storiesOf('BootstrapDataTable', module)
    .add('default view', () => (
        wrap(<BootstrapDataTable data={genData()}>{columns}</BootstrapDataTable>)
    ))
    .add('bordered view', () => (
        wrap(<BootstrapDataTable data={genData()} bordered>{columns}</BootstrapDataTable>)
    ))
    .add('hover view', () => (
        wrap(<BootstrapDataTable data={genData()} hover>{columns}</BootstrapDataTable>)
    ))
    .add('striped view', () => (
        wrap(<BootstrapDataTable data={genData()} striped>{columns}</BootstrapDataTable>)
    ))
    .add('condensed view', () => (
        wrap(<BootstrapDataTable data={genData()} condensed>{columns}</BootstrapDataTable>)
    ))
    .add('responsive view', () => (
        wrap(<BootstrapDataTable data={genData()} responsive>{columns}</BootstrapDataTable>)
    ))
    .add('pagination view', () => (
        wrap(<BootstrapDataTable data={genData(100)} pagination>{columns}</BootstrapDataTable>)
    ))
    .add('searchable view', () => (
        wrap(<BootstrapDataTable data={genData(100)} searchable>{columns}</BootstrapDataTable>)
    ))
    .add('searchable view with pagination', () => (
        wrap(<BootstrapDataTable data={genData(100)} searchable pagination>{columns}</BootstrapDataTable>)
    ));

