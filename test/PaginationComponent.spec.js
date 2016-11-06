/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import PaginationComponent from '../src/PaginationComponent';

const { describe, it } = global;

const getWrapper = ({
  pagination = true, pages = 10, currentPage = 1, maxPages = 5, changeToPage = sinon.stub()
} = {}) =>
  shallow(
    <PaginationComponent
      pagination={pagination}
      pages={pages}
      currentPage={currentPage}
      maxPages={maxPages}
      changeToPage={changeToPage}
    />);

describe('PaginationComponent', () => {
  it('should not show when pagination disabled', () => {
    expect(getWrapper({ pagination: false }).isEmpty());
  });

  it('should not show when only one page', () => {
    expect(getWrapper({ pages: 1 }).isEmpty());
  });

  it('should have first page as active out of 10', () => {
    const wrapper = getWrapper();
    expect(wrapper.find('.pagination'));

    const tiles = wrapper.find('.pagination').children();

    expect(tiles.length).to.be.equal(7);

    Array.from({ length: 5 }, (v, k) => k)
      .forEach(i => expect(tiles.at(i).key()).to.be.equal(`${i + 1}`));
    expect(tiles.at(5).key()).to.be.equal('▸');
    expect(tiles.at(6).key()).to.be.equal('⏩');

    expect(tiles.at(0).prop('active')).to.be.truthy;

    Array.from({ length: 6 }, (v, k) => k + 1)
      .forEach(i => expect(tiles.at(i).prop('active')).to.be.falsy);
  });

  describe('last page active', () => {
    const wrapper = getWrapper({ currentPage: 9 });

    it('should render pagination component', () => expect(wrapper.find('.pagination')));

    const tiles = wrapper.find('.pagination').children();

    it('should have proper number of tiles', () => expect(tiles.length).to.be.equal(9));

    it('should have the go-to-first-page tile', () => expect(tiles.at(0).key()).to.be.equal('⏪'));

    it('should have the go-to-previous-page tile', () => expect(tiles.at(1).key()).to.be.equal('◂'));

    it('should have the correct tiles displayed', () => Array.from({ length: 5 }, (v, k) => k + 2)
      .forEach(i => expect(tiles.at(i).key()).to.be.equal(`${3 + i + 1}`)));

    it('should have the go-to-next-page tile', () => expect(tiles.at(7).key()).to.be.equal('▸'));

    it('should have the go-to-last-page tile', () => expect(tiles.at(8).key()).to.be.equal('⏩'));

    it('should not have active prop for any tile but last', () => Array.from({ length: 5 }, (v, k) => k)
      .forEach(i => expect(tiles.at(i).prop('active')).to.be.falsy));

    it('should have active prop for last tile', () => expect(tiles.at(6).prop('active')).to.be.truthy);
  });
});
