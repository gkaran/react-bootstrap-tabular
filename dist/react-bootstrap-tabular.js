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

	var _BootstrapDataColumn = __webpack_require__(2);

	var _BootstrapDataColumn2 = _interopRequireDefault(_BootstrapDataColumn);

	var _BootstrapDataTable = __webpack_require__(3);

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
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TableHead = __webpack_require__(8);

	var _TableHead2 = _interopRequireDefault(_TableHead);

	var _TableBody = __webpack_require__(6);

	var _TableBody2 = _interopRequireDefault(_TableBody);

	var _PaginationComponent = __webpack_require__(4);

	var _PaginationComponent2 = _interopRequireDefault(_PaginationComponent);

	var _SearchEntry = __webpack_require__(5);

	var _SearchEntry2 = _interopRequireDefault(_SearchEntry);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SORT_ASCENDING = 1;
	var SORT_DESCENDING = -1;

	var BootstrapDataTable = function (_React$Component) {
	  _inherits(BootstrapDataTable, _React$Component);

	  _createClass(BootstrapDataTable, null, [{
	    key: 'sortData',
	    value: function sortData(data, column) {
	      var sortOrder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : SORT_ASCENDING;

	      var sort = function sort(a, b) {
	        if (a[column.property] > b[column.property]) {
	          return SORT_ASCENDING * sortOrder;
	        }
	        if (a[column.property] < b[column.property]) {
	          return SORT_DESCENDING * sortOrder;
	        }
	        return 0;
	      };

	      return data.slice().sort(sort);
	    }
	  }, {
	    key: 'computeTotals',
	    value: function computeTotals(data, properties) {
	      return data.map(function (row) {
	        return properties.map(function (property) {
	          return _defineProperty({}, property, row[property] || 0);
	        }).reduce(function (a, b) {
	          return Object.assign({}, a, b);
	        }, {});
	      }).reduce(function (a, b) {
	        return properties.map(function (property) {
	          return _defineProperty({}, property, a[property] + b[property]);
	        }).reduce(function (c, d) {
	          return Object.assign({}, c, d);
	        }, {});
	      });
	    }
	  }, {
	    key: 'splitToPages',
	    value: function splitToPages(data, pageSize, pagination) {
	      var pages = [];
	      if (pagination) {
	        var i = 0;
	        var page = data.slice(i, i + pageSize);
	        while (page.length) {
	          pages.push(page);
	          i += pageSize;
	          page = data.slice(i, i + pageSize);
	        }
	      }

	      return pages;
	    }
	  }]);

	  function BootstrapDataTable(props) {
	    _classCallCheck(this, BootstrapDataTable);

	    var _this = _possibleConstructorReturn(this, (BootstrapDataTable.__proto__ || Object.getPrototypeOf(BootstrapDataTable)).call(this, props));

	    _this.state = {
	      sortColumn: null,
	      sortOrder: 0,
	      pages: [],
	      currentPage: 0,
	      searchTerm: ''
	    };
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
	      var searchableColumns = this.getFilteredColumnProperties(function (column) {
	        return column.includeInSearch;
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

	      if (this.state.sortColumn) {
	        data = BootstrapDataTable.sortData(data, this.state.sortColumn, this.state.sortOrder);
	      }

	      var pages = BootstrapDataTable.splitToPages(data, this.props.pageSize, this.props.pagination);

	      this.setState({ searchTerm: searchTerm, data: data, pages: pages, currentPage: 0 });
	    }
	  }, {
	    key: 'getTable',
	    value: function getTable() {
	      var tableClassNames = 'table' + (this.props.striped ? ' table-striped' : '') + (this.props.bordered ? ' table-bordered' : '') + (this.props.hover ? ' table-hover' : '') + (this.props.condensed ? ' table-condensed' : '');

	      var bodyData = this.props.pagination ? this.state.pages[this.state.currentPage] || [] : this.state.data;

	      return _react2.default.createElement(
	        'table',
	        { className: tableClassNames },
	        _react2.default.createElement(_TableHead2.default, {
	          columns: this.state.columns,
	          sortBy: this.sortBy.bind(this),
	          sortColumn: this.state.sortColumn,
	          sortOrder: this.state.sortOrder
	        }),
	        _react2.default.createElement(_TableBody2.default, {
	          data: bodyData,
	          columns: this.state.columns,
	          totals: this.state.totals
	        })
	      );
	    }
	  }, {
	    key: 'getFilteredColumnProperties',
	    value: function getFilteredColumnProperties() {
	      var filterPredicate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
	        return true;
	      };
	      var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props.children;

	      var columns = _react2.default.Children.map(children, function (column) {
	        return column.props;
	      });
	      return columns.filter(filterPredicate).map(function (column) {
	        return column.property;
	      });
	    }
	  }, {
	    key: 'changePage',
	    value: function changePage(pageNumber) {
	      this.setState({ currentPage: pageNumber });
	    }
	  }, {
	    key: 'initTable',
	    value: function initTable(data, pageSize, pagination, children) {
	      var columns = _react2.default.Children.map(children, function (column) {
	        return column.props;
	      });
	      var columnsWithTotals = this.getFilteredColumnProperties(function (column) {
	        return column.showTotal;
	      }, children);

	      var dataCopy = data.slice();
	      var totals = [];

	      if (columnsWithTotals.length) {
	        totals = BootstrapDataTable.computeTotals(dataCopy, columnsWithTotals);
	      }

	      var pages = BootstrapDataTable.splitToPages(dataCopy, pageSize, pagination);

	      this.setState({ columns: columns, totals: totals, data: dataCopy, pages: pages, initialData: dataCopy });
	    }
	  }, {
	    key: 'wrapResponsive',
	    value: function wrapResponsive(table) {
	      if (this.props.responsive) {
	        return _react2.default.createElement(
	          'div',
	          { className: 'table-responsive' },
	          table
	        );
	      }
	      return table;
	    }
	  }, {
	    key: 'sortBy',
	    value: function sortBy(column) {
	      var updatedState = {};

	      if (this.state.sortColumn === column) {
	        updatedState.sortOrder = this.state.sortOrder * -1;
	      } else {
	        Object.assign(updatedState, {
	          sortColumn: column,
	          sortOrder: SORT_ASCENDING
	        });
	      }

	      var data = BootstrapDataTable.sortData(this.state.data, column, updatedState.sortOrder);
	      var pages = BootstrapDataTable.splitToPages(data, this.props.pageSize, this.props.pagination);

	      this.setState(Object.assign(updatedState, { data: data, pages: pages }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { style: { width: '100%' } },
	        _react2.default.createElement(_SearchEntry2.default, {
	          visible: this.props.searchable,
	          onSearchTermChanged: this.onSearchTermChanged.bind(this),
	          searchTerm: this.state.searchTerm
	        }),
	        this.wrapResponsive(this.getTable()),
	        _react2.default.createElement(_PaginationComponent2.default, {
	          currentPage: this.state.currentPage,
	          maxPages: this.props.maxPages,
	          pages: this.state.pages.length,
	          pagination: this.props.pagination,
	          changeToPage: this.changePage.bind(this)
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
	  bordered: false,
	  striped: false,
	  responsive: false,
	  hover: false,
	  condensed: false,
	  pagination: false,
	  pageSize: 10,
	  maxPages: 5,
	  searchable: false
	};

	exports.default = BootstrapDataTable;
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PaginationComponent = function (_React$Component) {
	  _inherits(PaginationComponent, _React$Component);

	  function PaginationComponent() {
	    _classCallCheck(this, PaginationComponent);

	    return _possibleConstructorReturn(this, (PaginationComponent.__proto__ || Object.getPrototypeOf(PaginationComponent)).apply(this, arguments));
	  }

	  _createClass(PaginationComponent, [{
	    key: 'getPageTiles',
	    value: function getPageTiles() {
	      var tiles = [];
	      var currentPage = this.props.currentPage;

	      var _getLeftAndRightNumbe = this.getLeftAndRightNumberOfPages(currentPage);

	      var left = _getLeftAndRightNumbe.left;
	      var right = _getLeftAndRightNumbe.right;


	      if (currentPage > 0) {
	        tiles.push(this.getPageTile(0, '⏪'));
	        tiles.push(this.getPageTile(currentPage - 1, '◂'));
	      }

	      for (var i = left; i > 0; i--) {
	        tiles.push(this.getPageTile(currentPage - i, currentPage - i + 1));
	      }

	      tiles.push(this.getPageTile(currentPage, currentPage + 1, true));

	      for (var _i = 1; _i <= right; _i++) {
	        tiles.push(this.getPageTile(currentPage + _i, currentPage + _i + 1));
	      }

	      if (currentPage < this.props.pages - 1) {
	        tiles.push(this.getPageTile(currentPage + 1, '▸'));
	        tiles.push(this.getPageTile(this.props.pages - 1, '⏩'));
	      }

	      return tiles;
	    }
	  }, {
	    key: 'getPageTile',
	    value: function getPageTile(page, text) {
	      var _this2 = this;

	      var active = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      return _react2.default.createElement(
	        'li',
	        { className: active ? 'active' : '', key: page + '-' + text },
	        _react2.default.createElement(
	          'a',
	          { href: undefined, onClick: function onClick(e) {
	              return _this2.changePage(e, page);
	            } },
	          text
	        )
	      );
	    }
	  }, {
	    key: 'getLeftAndRightNumberOfPages',
	    value: function getLeftAndRightNumberOfPages(currentPage) {
	      var visibleNumberOfPages = this.props.pages < this.props.maxPages ? this.props.pages : this.props.maxPages;
	      var left = visibleNumberOfPages === 2 ? 0 : Math.floor(visibleNumberOfPages / 2.0);
	      var right = visibleNumberOfPages - left;
	      if (left % 2 === 0) {
	        right -= 1;
	      }

	      if (currentPage - left < 0) {
	        var delta = currentPage - left;
	        left += delta;
	        right -= delta;
	      }

	      while (currentPage + right >= this.props.pages) {
	        left += 1;
	        right -= 1;
	      }

	      return { left: left, right: right };
	    }
	  }, {
	    key: 'shouldShow',
	    value: function shouldShow() {
	      return this.props.pagination && this.props.pages > 1;
	    }
	  }, {
	    key: 'changePage',
	    value: function changePage(e, page) {
	      e.preventDefault();
	      this.props.changeToPage(page);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.shouldShow()) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: { textAlign: 'right' } },
	        _react2.default.createElement(
	          'ul',
	          { className: 'pagination' },
	          this.getPageTiles()
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
	  changeToPage: _react2.default.PropTypes.func.isRequired
	};

	exports.default = PaginationComponent;
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
	        { className: 'input-group', style: { width: '250px' } },
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(9);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableBody = function (_React$Component) {
	  _inherits(TableBody, _React$Component);

	  function TableBody() {
	    _classCallCheck(this, TableBody);

	    return _possibleConstructorReturn(this, (TableBody.__proto__ || Object.getPrototypeOf(TableBody)).apply(this, arguments));
	  }

	  _createClass(TableBody, [{
	    key: 'renderRows',
	    value: function renderRows() {
	      var _this2 = this;

	      return this.props.data.map(function (entry) {
	        return _react2.default.createElement(_TableRow2.default, {
	          columns: _this2.props.columns,
	          row: entry
	        });
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var totals = _props.totals;
	      var columns = _props.columns;

	      return _react2.default.createElement(
	        'tbody',
	        null,
	        this.renderRows(),
	        totals.length ? _react2.default.createElement(_TableRow2.default, { row: totals, columns: columns, totals: true }) : null
	      );
	    }
	  }]);

	  return TableBody;
	}(_react2.default.Component);

	TableBody.propTypes = {
	  data: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  totals: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object)
	};

	TableBody.defaultProps = {
	  totals: []
	};

	exports.default = TableBody;
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

	var TableCell = function (_React$Component) {
	  _inherits(TableCell, _React$Component);

	  function TableCell() {
	    _classCallCheck(this, TableCell);

	    return _possibleConstructorReturn(this, (TableCell.__proto__ || Object.getPrototypeOf(TableCell)).apply(this, arguments));
	  }

	  _createClass(TableCell, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'td',
	        { style: { textAlign: this.props.alignment } },
	        this.props.format ? this.props.format(this.props.cell, this.props.row) : this.props.cell
	      );
	    }
	  }]);

	  return TableCell;
	}(_react2.default.Component);

	TableCell.propTypes = {
	  cell: _react2.default.PropTypes.oneOf(_react2.default.PropTypes.string, _react2.default.PropTypes.number).isRequired,
	  row: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.oneOf(_react2.default.PropTypes.string, _react2.default.PropTypes.number)).isRequired,
	  format: _react2.default.PropTypes.func,
	  alignment: _react2.default.PropTypes.oneOf(['left', 'center', 'right'])
	};

	exports.default = TableCell;
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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TableHead = function (_React$Component) {
	  _inherits(TableHead, _React$Component);

	  function TableHead() {
	    _classCallCheck(this, TableHead);

	    return _possibleConstructorReturn(this, (TableHead.__proto__ || Object.getPrototypeOf(TableHead)).apply(this, arguments));
	  }

	  _createClass(TableHead, [{
	    key: 'getColumns',
	    value: function getColumns() {
	      return this.props.columns.map(this.toCell.bind(this));
	    }
	  }, {
	    key: 'toCell',
	    value: function toCell(column) {
	      var _this2 = this;

	      var content = [column.name];

	      if (column.sortable) {
	        var sortIcon = 'glyphicon-sort';
	        if (this.props.sortColumn && this.props.sortColumn === column) {
	          sortIcon = 'glyphicon-sort-by-attributes';
	          if (this.props.sortOrder < 0) {
	            sortIcon += '-alt';
	          }
	        }
	        content.push(_react2.default.createElement('span', { style: { marginLeft: 2 }, className: 'glyphicon ' + sortIcon, 'aria-hidden': 'true' }));
	      }
	      return _react2.default.createElement(
	        'th',
	        { onClick: function onClick(e) {
	            return _this2.handleOnClick(e, column);
	          } },
	        content
	      );
	    }
	  }, {
	    key: 'handleOnClick',
	    value: function handleOnClick(event, column) {
	      event.preventDefault();

	      if (column.sortable) {
	        this.props.sortBy(column);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'thead',
	        null,
	        _react2.default.createElement(
	          'tr',
	          null,
	          this.getColumns()
	        )
	      );
	    }
	  }]);

	  return TableHead;
	}(_react2.default.Component);

	TableHead.propTypes = {
	  columns: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object).isRequired,
	  sortColumn: _react2.default.PropTypes.object,
	  sortOrder: _react2.default.PropTypes.number,
	  sortBy: _react2.default.PropTypes.func.isRequired
	};

	exports.default = TableHead;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _TableCell = __webpack_require__(7);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var columnToCell = function columnToCell(column, row, totals) {
	  return _react2.default.createElement(_TableCell2.default, {
	    cell: row[column.property],
	    row: row,
	    alignment: column.align,
	    format: totals ? column.formatTotal || column.format : column.format
	  });
	};

	var TableRow = function TableRow(_ref) {
	  var columns = _ref.columns;
	  var row = _ref.row;
	  var totals = _ref.totals;
	  return _react2.default.createElement(
	    'tr',
	    null,
	    columns.map(function (c) {
	      return columnToCell(c, row, totals);
	    })
	  );
	};

	TableRow.propTypes = {
	  columns: _react2.default.PropTypes.object.isRequired,
	  row: _react2.default.PropTypes.array.isRequired,
	  totals: _react2.default.PropTypes.bool
	};

	TableRow.defaultProps = {
	  totals: false
	};

	exports.default = TableRow;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;