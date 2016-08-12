import React from 'react';
import { shallow, mount } from 'enzyme';
import PaginationComponent from '../PaginationComponent';
import {expect} from 'chai';
import sinon from 'sinon';
const {describe, it} = global;

const getWrapper = ({pagination = true, pages = 10, currentPage=0, maxPages=10, changeToPage=sinon.stub()} = {}) => shallow(
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
        expect(wrapper.find('.pagination').children().length === 2);
    });

});