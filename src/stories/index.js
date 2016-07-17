import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../index';
import BootstrapDataTable from '../BootstrapDataTable';
import BootstrapDataColumn from '../BootstrapDataColumn';

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
        name="#"/>,
    <BootstrapDataColumn
        property='name'
        sortable
        name="Name"/>,
    <BootstrapDataColumn
        property='lastName'
        name="Last Name"/>,
    <BootstrapDataColumn
        property='username'
        name="Username"
        format={(cell, row) => <span>[ {cell} ]</span>}/>,
    <BootstrapDataColumn
        property="money"
        name="Money"
        sortable
        showTotal/>
];

const data = [
    {index: 1, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 2, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 3, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99}
];

const wrap = (table) => {
    return <div style={{width: '100%', display: 'flex', padding: '50px 15%'}}>{table}</div>
};

storiesOf('BootstrapDataTable', module)
    .add('default view', () => (
        wrap(<BootstrapDataTable data={data}>{columns}</BootstrapDataTable>)
    ))
    .add('bordered view', () => (
        wrap(<BootstrapDataTable data={data} bordered>{columns}</BootstrapDataTable>)
    ))
    .add('hover view', () => (
        wrap(<BootstrapDataTable data={data} hover>{columns}</BootstrapDataTable>)
    ))
    .add('striped view', () => (
        wrap(<BootstrapDataTable data={data} striped>{columns}</BootstrapDataTable>)
    ))
    .add('condensed view', () => (
        wrap(<BootstrapDataTable data={data} condensed>{columns}</BootstrapDataTable>)
    ))
    .add('responsive view', () => (
        wrap(<BootstrapDataTable data={data} responsive>{columns}</BootstrapDataTable>)
    ));

