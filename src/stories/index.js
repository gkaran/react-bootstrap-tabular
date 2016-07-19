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
    {index: 3, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 4, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 5, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 6, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 7, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 8, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 9, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 10, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 11, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 12, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 13, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 14, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 15, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 16, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 17, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 18, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 19, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 20, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 21, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99},
    {index: 22, name: 'Mark', lastName: 'Otto', username: '@mdo', money: 500},
    {index: 23, name: 'Jacob', lastName: 'Thornton', username: '@fat', money: 100},
    {index: 24, name: 'Larry', lastName: 'the Bird', username: '@twitter', money: 99}
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
    ))
    .add('pagination view', () => (
        wrap(<BootstrapDataTable data={data} pagination>{columns}</BootstrapDataTable>)
    ));

