/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { sum } from '../../src/utils/reducers';

const { describe, it } = global;

describe('utils/reducers', () => {
  describe('sum', () => {
    it('should return empty object when no data or columns', () => {
      expect(sum([], [])).to.be.empty;
      expect(sum([{ x: 1, y: 2 }], [])).to.be.empty;
      expect(sum([], ['x', 'y'])).to.be.empty;
    });

    it('should return the sum', () => {
      const data = [{ x: 10, y: 20 }, { x: 5, y: -5 }];
      const columns = ['x', 'y'];
      expect(sum(data, columns)).to.deep.equal({ x: 15, y: 15 });
    });

    it('should ignore rows with no value for any column', () => {
      const data = [{ x: 10, y: 20 }, { x: 5 }, { y: -5 }, {}];
      const columns = ['x', 'y'];
      expect(sum(data, columns)).to.deep.equal({ x: 15, y: 15 });
    });

    it('should return zero for columns that do not exist in data', () => {
      const data = [{ x: 10, y: 20 }, { x: 5, y: -5 }];
      const columns = ['x', 'y', 'z'];
      expect(sum(data, columns)).to.deep.equal({ x: 15, y: 15, z: 0 });
    });

    it('should return only provided columns', () => {
      const data = [{ x: 10, y: 20 }, { x: 5, y: -5 }];
      const columns = ['x'];
      expect(sum(data, columns)).to.deep.equal({ x: 15 });
    });
  });
});
