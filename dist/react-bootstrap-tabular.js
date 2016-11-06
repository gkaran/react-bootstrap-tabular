(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactBootstrapTabular"] = factory(require("react"));
	else
		root["ReactBootstrapTabular"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BootstrapDataTable = exports.BootstrapDataColumn = undefined;

	var _BootstrapDataColumn = __webpack_require__(3);

	var _BootstrapDataColumn2 = _interopRequireDefault(_BootstrapDataColumn);

	var _BootstrapDataTable = __webpack_require__(4);

	var _BootstrapDataTable2 = _interopRequireDefault(_BootstrapDataTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.BootstrapDataColumn = _BootstrapDataColumn2.default;
	exports.BootstrapDataTable = _BootstrapDataTable2.default;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SORT_ASCENDING = exports.SORT_ASCENDING = 1;
	var SORT_DESCENDING = exports.SORT_DESCENDING = -1;

	var sortImpl = function sortImpl(column, sortOrder) {
	  return function (a, b) {
	    if (a[column.property] > b[column.property]) {
	      return SORT_ASCENDING * sortOrder;
	    }
	    if (a[column.property] < b[column.property]) {
	      return SORT_DESCENDING * sortOrder;
	    }
	    return 0;
	  };
	};

	var sort = exports.sort = function sort(data, column) {
	  var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SORT_ASCENDING;
	  return data.slice().sort(sortImpl(column, sortOrder));
	};

	var splitToPages = exports.splitToPages = function splitToPages(data, pageSize) {
	  var dataCopy = data.slice();
	  var pages = [];
	  while (dataCopy.length > 0) {
	    pages.push(dataCopy.splice(0, pageSize));
	  }
	  return pages;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BootstrapDataColumn = function BootstrapDataColumn() {
	  return null;
	};

	BootstrapDataColumn.propTypes = {
	  property: _react2.default.PropTypes.string.isRequired,
	  name: _react2.default.PropTypes.string,
	  format: _react2.default.PropTypes.func,
	  formatTotal: _react2.default.PropTypes.func,
	  showTotal: _react2.default.PropTypes.bool,
	  sortable: _react2.default.PropTypes.bool,
	  includeInSearch: _react2.default.PropTypes.bool,
	  align: _react2.default.PropTypes.oneOf(['left', 'center', 'right'])
	};

	BootstrapDataColumn.defaultProps = {
	  showTotal: false,
	  sortable: false,
	  includeInSearch: false,
	  align: 'left'
	};

	exports.default = BootstrapDataColumn;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsUpdate = __webpack_require__(21);

	var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

	var _Table = __webpack_require__(11);

	var _Table2 = _interopRequireDefault(_Table);

	var _PaginationComponent = __webpack_require__(5);

	var _PaginationComponent2 = _interopRequireDefault(_PaginationComponent);

	var _SearchEntry = __webpack_require__(7);

	var _SearchEntry2 = _interopRequireDefault(_SearchEntry);

	var _reducers = __webpack_require__(17);

	var _dataHelpers = __webpack_require__(2);

	var _guid = __webpack_require__(15);

	var _guid2 = _interopRequireDefault(_guid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BootstrapDataTable = function (_React$Component) {
	  _inherits(BootstrapDataTable, _React$Component);

	  function BootstrapDataTable(props) {
	    _classCallCheck(this, BootstrapDataTable);

	    var _this = _possibleConstructorReturn(this, (BootstrapDataTable.__proto__ || Object.getPrototypeOf(BootstrapDataTable)).call(this, props));

	    _this.state = {
	      initialData: [],
	      data: [],
	      columns: [],
	      reducedData: {},
	      sorting: {
	        columns: null,
	        order: _dataHelpers.SORT_ASCENDING
	      },
	      pagination: {
	        pages: [],
	        activePage: 1
	      },
	      searching: {
	        term: ''
	      }
	    };

	    _this.sortBy = _this.sortBy.bind(_this);
	    _this.initTable = _this.initTable.bind(_this);
	    _this.changePage = _this.changePage.bind(_this);
	    _this.onSearchTermChanged = _this.onSearchTermChanged.bind(_this);
	    return _this;
	  }

	  _createClass(BootstrapDataTable, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.initTable(this.props.data, this.props.pageSize, this.props.pagination, this.props.children);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.initTable(nextProps.data, nextProps.pageSize, nextProps.pagination, nextProps.children);
	    }
	  }, {
	    key: 'onSearchTermChanged',
	    value: function onSearchTermChanged(e) {
	      var searchTerm = e.target.value;
	      var searchableColumns = this.state.columns.filter(function (c) {
	        return c.includeInSearch;
	      }).map(function (c) {
	        return c.property;
	      });

	      var data = this.state.initialData.slice().filter(function (row) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	          for (var _iterator = searchableColumns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var column = _step.value;

	            if (('' + (row[column] || '')).indexOf(searchTerm) >= 0) {
	              return true;
	            }
	          }
	        } catch (err) {
	          _didIteratorError = true;
	          _iteratorError = err;
	        } finally {
	          try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	              _iterator.return();
	            }
	          } finally {
	            if (_didIteratorError) {
	              throw _iteratorError;
	            }
	          }
	        }

	        return false;
	      });

	      if (this.state.sorting.column) {
	        data = (0, _dataHelpers.sort)(data, this.state.sorting.column, this.state.sorting.order);
	      }
	      var pages = this.props.pagination ? (0, _dataHelpers.splitToPages)(data, this.props.pageSize) : [];

	      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
	        data: { $set: data },
	        searching: {
	          term: { $set: searchTerm }
	        },
	        pagination: {
	          pages: { $set: pages },
	          activePage: { $set: 1 }
	        }
	      }));
	    }
	  }, {
	    key: 'changePage',
	    value: function changePage(pageNumber) {
	      this.setState((0, _reactAddonsUpdate2.default)(this.state, { pagination: { activePage: { $set: pageNumber } } }));
	    }
	  }, {
	    key: 'initTable',
	    value: function initTable(data, pageSize, pagination, children) {
	      var columns = _react2.default.Children.map(children, function (column) {
	        return Object.assign({ uid: (0, _guid2.default)() }, column.props);
	      });
	      var reducingColumns = columns.filter(function (c) {
	        return c.showTotal;
	      }).map(function (c) {
	        return c.property;
	      });
	      var dataCopy = data.slice();
	      var reducedData = (0, _reducers.sum)(dataCopy, reducingColumns);
	      var pages = pagination ? (0, _dataHelpers.splitToPages)(dataCopy, pageSize) : [];

	      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
	        columns: { $set: columns },
	        data: { $set: dataCopy },
	        initialData: { $set: data },
	        reducedData: { $set: reducedData },
	        pagination: { pages: { $set: pages } }
	      }));
	    }
	  }, {
	    key: 'sortBy',
	    value: function sortBy(column) {
	      var sortingOrder = this.state.sorting.column === column ? this.state.sorting.order * -1 : _dataHelpers.SORT_ASCENDING;
	      var data = (0, _dataHelpers.sort)(this.state.data, column, sortingOrder);
	      var pages = this.props.pagination ? (0, _dataHelpers.splitToPages)(data, this.props.pageSize) : [];

	      this.setState((0, _reactAddonsUpdate2.default)(this.state, {
	        data: { $set: data },
	        sorting: {
	          column: { $set: column },
	          order: { $set: sortingOrder }
	        },
	        pagination: {
	          pages: { $set: pages }
	        }
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tableDisplayData = this.props.pagination ? this.state.pagination.pages[this.state.pagination.activePage - 1] || [] : this.state.data;

	      return _react2.default.createElement(
	        'div',
	        { style: { width: '100%' } },
	        _react2.default.createElement(_SearchEntry2.default, {
	          visible: this.props.searchable,
	          onSearchTermChanged: this.onSearchTermChanged,
	          searchTerm: this.state.searching.term
	        }),
	        _react2.default.createElement(_Table2.default, {
	          data: tableDisplayData,
	          columns: this.state.columns,
	          sortBy: this.sortBy,
	          bordered: this.props.bordered,
	          condensed: this.props.condensed,
	          hover: this.props.hover,
	          responsive: this.props.responsive,
	          striped: this.props.striped,
	          sortColumn: this.state.sorting.column,
	          sortOrder: this.state.sorting.order,
	          reducedData: this.state.reducedData
	        }),
	        _react2.default.createElement(_PaginationComponent2.default, {
	          currentPage: this.state.pagination.activePage,
	          maxPages: this.props.maxPages,
	          pages: this.state.pagination.pages.length,
	          pagination: this.props.pagination,
	          changeToPage: this.changePage
	        })
	      );
	    }
	  }]);

	  return BootstrapDataTable;
	}(_react2.default.Component);

	BootstrapDataTable.propTypes = {
	  bordered: _react2.default.PropTypes.bool,
	  striped: _react2.default.PropTypes.bool,
	  responsive: _react2.default.PropTypes.bool,
	  hover: _react2.default.PropTypes.bool,
	  condensed: _react2.default.PropTypes.bool,
	  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  pagination: _react2.default.PropTypes.bool,
	  pageSize: _react2.default.PropTypes.number,
	  maxPages: _react2.default.PropTypes.number,
	  searchable: _react2.default.PropTypes.bool,
	  children: _react2.default.PropTypes.node
	};

	BootstrapDataTable.defaultProps = {
	  pageSize: 10,
	  maxPages: 5
	};

	exports.default = BootstrapDataTable;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pagination = __webpack_require__(16);

	var _PaginationTile = __webpack_require__(6);

	var _PaginationTile2 = _interopRequireDefault(_PaginationTile);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationComponent = function (_React$Component) {
	  _inherits(PaginationComponent, _React$Component);

	  function PaginationComponent(props) {
	    _classCallCheck(this, PaginationComponent);

	    var _this = _possibleConstructorReturn(this, (PaginationComponent.__proto__ || Object.getPrototypeOf(PaginationComponent)).call(this, props));

	    _this.changeToPreviousPage = _this.changeToPreviousPage.bind(_this);
	    _this.changeToFirstPage = _this.changeToFirstPage.bind(_this);
	    _this.changeToNextPage = _this.changeToNextPage.bind(_this);
	    _this.changeToLastPage = _this.changeToLastPage.bind(_this);
	    return _this;
	  }

	  _createClass(PaginationComponent, [{
	    key: 'changeToPreviousPage',
	    value: function changeToPreviousPage() {
	      this.props.changeToPage(this.props.currentPage - 1);
	    }
	  }, {
	    key: 'changeToFirstPage',
	    value: function changeToFirstPage() {
	      this.props.changeToPage(1);
	    }
	  }, {
	    key: 'changeToNextPage',
	    value: function changeToNextPage() {
	      this.props.changeToPage(this.props.currentPage + 1);
	    }
	  }, {
	    key: 'changeToLastPage',
	    value: function changeToLastPage() {
	      this.props.changeToPage(this.props.pages);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (!this.props.pagination || this.props.pages <= 1) {
	        return null;
	      }

	      var tileComponents = [];
	      if (this.props.currentPage > 1) {
	        tileComponents.push(_react2.default.createElement(_PaginationTile2.default, {
	          key: this.props.firstPageIndicator,
	          page: this.props.firstPageIndicator,
	          changePage: this.changeToFirstPage
	        }));
	        tileComponents.push(_react2.default.createElement(_PaginationTile2.default, {
	          key: this.props.previousPageIndicator,
	          page: this.props.previousPageIndicator,
	          changePage: this.changeToPreviousPage
	        }));
	      }

	      var tiles = (0, _pagination.calcPaginationTiles)(this.props.currentPage, this.props.maxPages, this.props.pages);
	      tileComponents.push.apply(tileComponents, _toConsumableArray(tiles.map(function (t) {
	        return _react2.default.createElement(_PaginationTile2.default, {
	          page: t,
	          key: t,
	          changePage: _this2.props.changeToPage,
	          active: t === _this2.props.currentPage
	        });
	      })));

	      if (this.props.currentPage < this.props.pages) {
	        tileComponents.push(_react2.default.createElement(_PaginationTile2.default, {
	          key: this.props.nextPageIndicator,
	          page: this.props.nextPageIndicator,
	          changePage: this.changeToNextPage
	        }));
	        tileComponents.push(_react2.default.createElement(_PaginationTile2.default, {
	          key: this.props.lastPageIndicator,
	          page: this.props.lastPageIndicator,
	          changePage: this.changeToLastPage
	        }));
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: this.props.align } },
	        _react2.default.createElement(
	          'ul',
	          { className: 'pagination' },
	          tileComponents
	        )
	      );
	    }
	  }]);

	  return PaginationComponent;
	}(_react2.default.Component);

	PaginationComponent.propTypes = {
	  pagination: _react2.default.PropTypes.bool.isRequired,
	  pages: _react2.default.PropTypes.number.isRequired,
	  currentPage: _react2.default.PropTypes.number.isRequired,
	  maxPages: _react2.default.PropTypes.number.isRequired,
	  changeToPage: _react2.default.PropTypes.func.isRequired,
	  align: _react2.default.PropTypes.oneOf(['left', 'center', 'right']),
	  firstPageIndicator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
	  lastPageIndicator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
	  previousPageIndicator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string]),
	  nextPageIndicator: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.node, _react2.default.PropTypes.string])
	};

	PaginationComponent.defaultProps = {
	  align: 'right',
	  firstPageIndicator: '⏪',
	  lastPageIndicator: '⏩',
	  previousPageIndicator: '◂',
	  nextPageIndicator: '▸'
	};

	exports.default = PaginationComponent;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationTile = function (_React$Component) {
	  _inherits(PaginationTile, _React$Component);

	  function PaginationTile(props) {
	    _classCallCheck(this, PaginationTile);

	    var _this = _possibleConstructorReturn(this, (PaginationTile.__proto__ || Object.getPrototypeOf(PaginationTile)).call(this, props));

	    _this.changePage = _this.changePage.bind(_this);
	    return _this;
	  }

	  _createClass(PaginationTile, [{
	    key: 'changePage',
	    value: function changePage(e) {
	      e.preventDefault();
	      this.props.changePage(this.props.page);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'li',
	        { className: this.props.active ? 'active' : '' },
	        _react2.default.createElement(
	          'a',
	          { href: undefined, onClick: this.changePage },
	          this.props.page
	        )
	      );
	    }
	  }]);

	  return PaginationTile;
	}(_react2.default.Component);

	PaginationTile.propTypes = {
	  active: _react2.default.PropTypes.bool,
	  page: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.number, _react2.default.PropTypes.string]).isRequired,
	  changePage: _react2.default.PropTypes.func.isRequired
	};

	exports.default = PaginationTile;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchEntry = function (_React$Component) {
	  _inherits(SearchEntry, _React$Component);

	  function SearchEntry() {
	    _classCallCheck(this, SearchEntry);

	    return _possibleConstructorReturn(this, (SearchEntry.__proto__ || Object.getPrototypeOf(SearchEntry)).apply(this, arguments));
	  }

	  _createClass(SearchEntry, [{
	    key: 'render',
	    value: function render() {
	      if (!this.props.visible) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: 'input-group', style: { width: '250px', marginBottom: '12px' } },
	        _react2.default.createElement('input', {
	          type: 'text',
	          value: this.props.searchTerm,
	          className: 'form-control',
	          placeholder: 'Search',
	          'aria-describedby': 'searchIcon',
	          onChange: this.props.onSearchTermChanged
	        }),
	        _react2.default.createElement(
	          'span',
	          { className: 'input-group-addon', id: 'searchIcon' },
	          '\uD83D\uDD0D'
	        )
	      );
	    }
	  }]);

	  return SearchEntry;
	}(_react2.default.Component);

	SearchEntry.propTypes = {
	  visible: _react2.default.PropTypes.bool.isRequired,
	  onSearchTermChanged: _react2.default.PropTypes.func.isRequired,
	  searchTerm: _react2.default.PropTypes.string.isRequired
	};

	exports.default = SearchEntry;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _dataHelpers = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SortIndicator = function (_React$Component) {
	  _inherits(SortIndicator, _React$Component);

	  function SortIndicator() {
	    _classCallCheck(this, SortIndicator);

	    return _possibleConstructorReturn(this, (SortIndicator.__proto__ || Object.getPrototypeOf(SortIndicator)).apply(this, arguments));
	  }

	  _createClass(SortIndicator, [{
	    key: 'render',
	    value: function render() {
	      var indicator = null;
	      if (this.props.column.sortable) {
	        indicator = this.props.sortableIndicator;
	        if (this.props.sortColumn && this.props.sortColumn.uid === this.props.column.uid) {
	          if (this.props.sortOrder === _dataHelpers.SORT_ASCENDING) {
	            indicator = this.props.ascendingIndicator;
	          } else if (this.props.sortOrder === _dataHelpers.SORT_DESCENDING) {
	            indicator = this.props.descendingIndicator;
	          }
	        }
	      }

	      if (indicator) {
	        return _react2.default.createElement(
	          'span',
	          { style: { marginLeft: '5px' } },
	          indicator
	        );
	      }
	      return null;
	    }
	  }]);

	  return SortIndicator;
	}(_react2.default.Component);

	SortIndicator.propTypes = {
	  column: _react2.default.PropTypes.object,
	  sortColumn: _react2.default.PropTypes.object,
	  sortOrder: _react2.default.PropTypes.oneOf([_dataHelpers.SORT_ASCENDING, _dataHelpers.SORT_DESCENDING]),
	  ascendingIndicator: _react2.default.PropTypes.node,
	  descendingIndicator: _react2.default.PropTypes.node,
	  sortableIndicator: _react2.default.PropTypes.node
	};

	SortIndicator.defaultProps = {
	  ascendingIndicator: '▼',
	  descendingIndicator: '▲',
	  sortableIndicator: '▲/▼'
	};

	exports.default = SortIndicator;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(12);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TBody = function (_React$Component) {
	  _inherits(TBody, _React$Component);

	  function TBody() {
	    _classCallCheck(this, TBody);

	    return _possibleConstructorReturn(this, (TBody.__proto__ || Object.getPrototypeOf(TBody)).apply(this, arguments));
	  }

	  _createClass(TBody, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props,
	          totals = _props.totals,
	          columns = _props.columns;

	      return _react2.default.createElement(
	        'tbody',
	        null,
	        this.props.data.map(function (entry) {
	          return _react2.default.createElement(_TableRow2.default, {
	            columns: _this2.props.columns,
	            row: entry,
	            key: Object.values(entry).join('-')
	          });
	        }),
	        Object.keys(totals).length ? _react2.default.createElement(_TableRow2.default, {
	          key: Object.values(totals).join('-'),
	          row: totals,
	          columns: columns, totals: true
	        }) : null
	      );
	    }
	  }]);

	  return TBody;
	}(_react2.default.Component);

	TBody.propTypes = {
	  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  totals: _react2.default.PropTypes.object
	};

	TBody.defaultProps = {
	  totals: {}
	};

	exports.default = TBody;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Th = __webpack_require__(14);

	var _Th2 = _interopRequireDefault(_Th);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var THead = function (_React$Component) {
	  _inherits(THead, _React$Component);

	  function THead() {
	    _classCallCheck(this, THead);

	    return _possibleConstructorReturn(this, (THead.__proto__ || Object.getPrototypeOf(THead)).apply(this, arguments));
	  }

	  _createClass(THead, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          this.props.columns.map(function (column) {
	            return _react2.default.createElement(_Th2.default, {
	              column: column,
	              key: column.uid,
	              sortColumn: _this2.props.sortColumn,
	              sortOrder: _this2.props.sortOrder,
	              sortBy: _this2.props.sortBy
	            });
	          })
	        )
	      );
	    }
	  }]);

	  return THead;
	}(_react2.default.Component);

	THead.propTypes = {
	  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  sortColumn: _react2.default.PropTypes.object,
	  sortOrder: _react2.default.PropTypes.number,
	  sortBy: _react2.default.PropTypes.func.isRequired
	};

	exports.default = THead;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _THead = __webpack_require__(10);

	var _THead2 = _interopRequireDefault(_THead);

	var _TBody = __webpack_require__(9);

	var _TBody2 = _interopRequireDefault(_TBody);

	var _dataHelpers = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Table = function (_React$Component) {
	  _inherits(Table, _React$Component);

	  function Table() {
	    _classCallCheck(this, Table);

	    return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
	  }

	  _createClass(Table, [{
	    key: 'render',
	    value: function render() {
	      var tableClassNames = 'table' + (this.props.striped ? ' table-striped' : '') + (this.props.bordered ? ' table-bordered' : '') + (this.props.hover ? ' table-hover' : '') + (this.props.condensed ? ' table-condensed' : '');

	      var table = _react2.default.createElement(
	        'table',
	        { className: tableClassNames },
	        _react2.default.createElement(_THead2.default, {
	          columns: this.props.columns,
	          sortBy: this.props.sortBy,
	          sortColumn: this.props.sortColumn,
	          sortOrder: this.props.sortOrder
	        }),
	        _react2.default.createElement(_TBody2.default, {
	          data: this.props.data,
	          columns: this.props.columns,
	          totals: this.props.reducedData
	        })
	      );

	      if (this.props.responsive) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'table-responsive' },
	          table
	        );
	      }
	      return table;
	    }
	  }]);

	  return Table;
	}(_react2.default.Component);

	Table.propTypes = {
	  striped: _react2.default.PropTypes.bool,
	  bordered: _react2.default.PropTypes.bool,
	  hover: _react2.default.PropTypes.bool,
	  condensed: _react2.default.PropTypes.bool,
	  responsive: _react2.default.PropTypes.bool,
	  columns: _react2.default.PropTypes.array.isRequired,
	  sortColumn: _react2.default.PropTypes.object,
	  sortOrder: _react2.default.PropTypes.oneOf([_dataHelpers.SORT_ASCENDING, _dataHelpers.SORT_DESCENDING]),
	  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  sortBy: _react2.default.PropTypes.func.isRequired,
	  reducedData: _react2.default.PropTypes.object
	};

	exports.default = Table;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Td = __webpack_require__(13);

	var _Td2 = _interopRequireDefault(_Td);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableRow = function TableRow(_ref) {
	  var columns = _ref.columns,
	      row = _ref.row,
	      totals = _ref.totals;
	  return _react2.default.createElement(
	    'tr',
	    null,
	    columns.map(function (c) {
	      return _react2.default.createElement(_Td2.default, {
	        key: row[c.property] || 'empty-' + c.property,
	        cell: row[c.property],
	        row: row,
	        alignment: c.align,
	        format: totals ? c.formatTotal || c.format : c.format
	      });
	    })
	  );
	};

	TableRow.propTypes = {
	  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  row: _react2.default.PropTypes.object.isRequired,
	  totals: _react2.default.PropTypes.bool
	};

	exports.default = TableRow;
	module.exports = exports['default'];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Td = function (_React$Component) {
	  _inherits(Td, _React$Component);

	  function Td() {
	    _classCallCheck(this, Td);

	    return _possibleConstructorReturn(this, (Td.__proto__ || Object.getPrototypeOf(Td)).apply(this, arguments));
	  }

	  _createClass(Td, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'td',
	        { style: { textAlign: this.props.alignment } },
	        this.props.format ? this.props.format(this.props.cell, this.props.row) : this.props.cell
	      );
	    }
	  }]);

	  return Td;
	}(_react2.default.Component);

	Td.propTypes = {
	  cell: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  row: _react2.default.PropTypes.object.isRequired,
	  format: _react2.default.PropTypes.func,
	  alignment: _react2.default.PropTypes.oneOf(['left', 'center', 'right'])
	};

	exports.default = Td;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SortIndicator = __webpack_require__(8);

	var _SortIndicator2 = _interopRequireDefault(_SortIndicator);

	var _dataHelpers = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Th = function (_React$Component) {
	  _inherits(Th, _React$Component);

	  function Th(props) {
	    _classCallCheck(this, Th);

	    var _this = _possibleConstructorReturn(this, (Th.__proto__ || Object.getPrototypeOf(Th)).call(this, props));

	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }

	  _createClass(Th, [{
	    key: 'handleClick',
	    value: function handleClick(e) {
	      e.preventDefault();
	      if (this.props.column.sortable) {
	        this.props.sortBy(this.props.column);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var style = this.props.column.sortable ? { cursor: 'pointer' } : {};
	      return _react2.default.createElement(
	        'th',
	        { onClick: this.handleClick, style: style },
	        this.props.column.name,
	        _react2.default.createElement(_SortIndicator2.default, {
	          column: this.props.column,
	          sortOrder: this.props.sortOrder,
	          sortColumn: this.props.sortColumn
	        })
	      );
	    }
	  }]);

	  return Th;
	}(_react2.default.Component);

	Th.propTypes = {
	  column: _react2.default.PropTypes.object,
	  sortColumn: _react2.default.PropTypes.object,
	  sortOrder: _react2.default.PropTypes.oneOf([_dataHelpers.SORT_ASCENDING, _dataHelpers.SORT_DESCENDING]),
	  sortBy: _react2.default.PropTypes.func.isRequired
	};

	exports.default = Th;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var s4 = function s4() {
	  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
	};

	var guid = function guid() {
	  return "" + s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
	};

	exports.default = guid;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isFloat = function isFloat(x) {
	  return x % 1 !== 0;
	};

	var calcPaginationTiles = exports.calcPaginationTiles = function calcPaginationTiles(activePage, visiblePages, numberOfPages) {
	  var pages = Math.min(visiblePages, numberOfPages);
	  var rightAvailablePages = numberOfPages - activePage;
	  var padding = pages / 2.0;
	  var leftPadding = void 0;
	  var rightPadding = void 0;

	  if (isFloat(padding)) {
	    leftPadding = Math.floor(padding);
	    rightPadding = Math.floor(padding);
	  } else {
	    leftPadding = padding - 1;
	    rightPadding = padding;
	  }

	  if (rightAvailablePages < rightPadding) {
	    leftPadding += rightPadding - rightAvailablePages;
	  }

	  if (activePage - leftPadding <= 0) {
	    leftPadding -= 1 - (activePage - leftPadding);
	  }

	  return Array.from(new Array(pages), function (x, i) {
	    return i + (activePage - leftPadding);
	  });
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/* eslint-disable import/prefer-default-export */

	var sum = exports.sum = function sum(data, columns) {
	  var defaultValue = 0;
	  return data.reduce(function (previous, current) {
	    return columns.map(function (c) {
	      return _defineProperty({}, c, (previous[c] || defaultValue) + (current[c] || defaultValue));
	    }).reduce(function (a, b) {
	      return Object.assign({}, a, b);
	    }, {});
	  }, {});
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	function invariant(condition, format, a, b, c, d, e, f) {
	  if ((undefined) !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 */

	/**
	 * Allows extraction of a minified key. Let's the build system minify keys
	 * without losing the ability to dynamically use key strings as values
	 * themselves. Pass in an object with a single key/val pair and it will return
	 * you the string key of that single record. Suppose you want to grab the
	 * value for a key 'className' inside of an object. Key/val minification may
	 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
	 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
	 * reuse those resolutions.
	 */
	var keyOf = function keyOf(oneKeyObj) {
	  var key;
	  for (key in oneKeyObj) {
	    if (!oneKeyObj.hasOwnProperty(key)) {
	      continue;
	    }
	    return key;
	  }
	  return null;
	};

	module.exports = keyOf;

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule reactProdInvariant
	 * 
	 */
	'use strict';

	/**
	 * WARNING: DO NOT manually require this module.
	 * This is a replacement for `invariant(...)` used by the error code system
	 * and will _only_ be required by the corresponding babel pass.
	 * It always throws.
	 */

	function reactProdInvariant(code) {
	  var argCount = arguments.length - 1;

	  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

	  for (var argIdx = 0; argIdx < argCount; argIdx++) {
	    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
	  }

	  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

	  var error = new Error(message);
	  error.name = 'Invariant Violation';
	  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

	  throw error;
	}

	module.exports = reactProdInvariant;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule update
	 */

	/* global hasOwnProperty:true */

	'use strict';

	var _prodInvariant = __webpack_require__(22),
	    _assign = __webpack_require__(20);

	var keyOf = __webpack_require__(19);
	var invariant = __webpack_require__(18);
	var hasOwnProperty = {}.hasOwnProperty;

	function shallowCopy(x) {
	  if (Array.isArray(x)) {
	    return x.concat();
	  } else if (x && typeof x === 'object') {
	    return _assign(new x.constructor(), x);
	  } else {
	    return x;
	  }
	}

	var COMMAND_PUSH = keyOf({ $push: null });
	var COMMAND_UNSHIFT = keyOf({ $unshift: null });
	var COMMAND_SPLICE = keyOf({ $splice: null });
	var COMMAND_SET = keyOf({ $set: null });
	var COMMAND_MERGE = keyOf({ $merge: null });
	var COMMAND_APPLY = keyOf({ $apply: null });

	var ALL_COMMANDS_LIST = [COMMAND_PUSH, COMMAND_UNSHIFT, COMMAND_SPLICE, COMMAND_SET, COMMAND_MERGE, COMMAND_APPLY];

	var ALL_COMMANDS_SET = {};

	ALL_COMMANDS_LIST.forEach(function (command) {
	  ALL_COMMANDS_SET[command] = true;
	});

	function invariantArrayCase(value, spec, command) {
	  !Array.isArray(value) ? (undefined) !== 'production' ? invariant(false, 'update(): expected target of %s to be an array; got %s.', command, value) : _prodInvariant('1', command, value) : void 0;
	  var specValue = spec[command];
	  !Array.isArray(specValue) ? (undefined) !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?', command, specValue) : _prodInvariant('2', command, specValue) : void 0;
	}

	/**
	 * Returns a updated shallow copy of an object without mutating the original.
	 * See https://facebook.github.io/react/docs/update.html for details.
	 */
	function update(value, spec) {
	  !(typeof spec === 'object') ? (undefined) !== 'production' ? invariant(false, 'update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : _prodInvariant('3', ALL_COMMANDS_LIST.join(', '), COMMAND_SET) : void 0;

	  if (hasOwnProperty.call(spec, COMMAND_SET)) {
	    !(Object.keys(spec).length === 1) ? (undefined) !== 'production' ? invariant(false, 'Cannot have more than one key in an object with %s', COMMAND_SET) : _prodInvariant('4', COMMAND_SET) : void 0;

	    return spec[COMMAND_SET];
	  }

	  var nextValue = shallowCopy(value);

	  if (hasOwnProperty.call(spec, COMMAND_MERGE)) {
	    var mergeObj = spec[COMMAND_MERGE];
	    !(mergeObj && typeof mergeObj === 'object') ? (undefined) !== 'production' ? invariant(false, 'update(): %s expects a spec of type \'object\'; got %s', COMMAND_MERGE, mergeObj) : _prodInvariant('5', COMMAND_MERGE, mergeObj) : void 0;
	    !(nextValue && typeof nextValue === 'object') ? (undefined) !== 'production' ? invariant(false, 'update(): %s expects a target of type \'object\'; got %s', COMMAND_MERGE, nextValue) : _prodInvariant('6', COMMAND_MERGE, nextValue) : void 0;
	    _assign(nextValue, spec[COMMAND_MERGE]);
	  }

	  if (hasOwnProperty.call(spec, COMMAND_PUSH)) {
	    invariantArrayCase(value, spec, COMMAND_PUSH);
	    spec[COMMAND_PUSH].forEach(function (item) {
	      nextValue.push(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_UNSHIFT)) {
	    invariantArrayCase(value, spec, COMMAND_UNSHIFT);
	    spec[COMMAND_UNSHIFT].forEach(function (item) {
	      nextValue.unshift(item);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_SPLICE)) {
	    !Array.isArray(value) ? (undefined) !== 'production' ? invariant(false, 'Expected %s target to be an array; got %s', COMMAND_SPLICE, value) : _prodInvariant('7', COMMAND_SPLICE, value) : void 0;
	    !Array.isArray(spec[COMMAND_SPLICE]) ? (undefined) !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	    spec[COMMAND_SPLICE].forEach(function (args) {
	      !Array.isArray(args) ? (undefined) !== 'production' ? invariant(false, 'update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : _prodInvariant('8', COMMAND_SPLICE, spec[COMMAND_SPLICE]) : void 0;
	      nextValue.splice.apply(nextValue, args);
	    });
	  }

	  if (hasOwnProperty.call(spec, COMMAND_APPLY)) {
	    !(typeof spec[COMMAND_APPLY] === 'function') ? (undefined) !== 'production' ? invariant(false, 'update(): expected spec of %s to be a function; got %s.', COMMAND_APPLY, spec[COMMAND_APPLY]) : _prodInvariant('9', COMMAND_APPLY, spec[COMMAND_APPLY]) : void 0;
	    nextValue = spec[COMMAND_APPLY](nextValue);
	  }

	  for (var k in spec) {
	    if (!(ALL_COMMANDS_SET.hasOwnProperty(k) && ALL_COMMANDS_SET[k])) {
	      nextValue[k] = update(value[k], spec[k]);
	    }
	  }

	  return nextValue;
	}

	module.exports = update;

/***/ }
/******/ ])
});
;