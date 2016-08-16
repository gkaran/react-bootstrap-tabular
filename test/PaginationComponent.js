import React from 'react';
import { shallow, mount } from 'enzyme';
import PaginationComponent from '../src/PaginationComponent';
import {expect} from 'chai';
import sinon from 'sinon';
const {describe, it} = global;

const getWrapper = ({pagination = true, pages = 10, currentPage=0, maxPages=5, changeToPage=sinon.stub()} = {}) => shallow(
    <PaginationComponent
        pagination={pagination}
        pages={pages}
        currentPage={currentPage}
        maxPages={maxPages}
        changeToPage={changeToPage}/>);

describe('PaginationComponent', () => {

    it('should not show when pagination disabled', () => {
        expect(getWrapper({pagination: false}).isEmpty());
    });

    it('should not show when only one page', () => {
        expect(getWrapper({pages: 1}).isEmpty());
    });

    it('should have first page as active out of 10', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.pagination'));

        const tiles = wrapper.find('.pagination').children();

        expect(tiles.length).to.be.equal(7);

        Array.from({length: 5}, (v,k)=>k)
            .forEach(i => expect(tiles.at(i).key()).to.be.equal(`${i}-${i+1}`));
        expect(tiles.at(5).key()).to.be.equal('1-▸');
        expect(tiles.at(6).key()).to.be.equal('9-⏩');

        expect(tiles.at(0).hasClass('active')).to.be.equal(true);
        Array.from({length: 6}, (v,k)=>k+1)
            .forEach(i => expect(tiles.at(i).hasClass('active')).to.be.equal(false));
    });

    it('should have last page as active out of 10', () => {
        const wrapper = getWrapper({currentPage:9});
        expect(wrapper.find('.pagination'));

        const tiles = wrapper.find('.pagination').children();

        expect(tiles.length).to.be.equal(7);

        expect(tiles.at(0).key()).to.be.equal('0-⏪');
        expect(tiles.at(1).key()).to.be.equal('8-◂');
        Array.from({length: 5}, (v,k)=> k+2)
            .forEach(i => expect(tiles.at(i).key()).to.be.equal(`${3+i}-${3+i+1}`));


        Array.from({length: 5}, (v,k)=>k)
            .forEach(i => expect(tiles.at(i).hasClass('active')).to.be.equal(false));
        expect(tiles.at(6).hasClass('active')).to.be.equal(true);
    });

});