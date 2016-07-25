/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var Editor_tsx_1 = __webpack_require__(3);
	ReactDOM.render(React.createElement(Editor_tsx_1.Editor, null), document.getElementById("shaper"));


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Palette_tsx_1 = __webpack_require__(4);
	var Canvas_tsx_1 = __webpack_require__(14);
	var Editor = (function (_super) {
	    __extends(Editor, _super);
	    function Editor() {
	        _super.apply(this, arguments);
	    }
	    Editor.prototype.render = function () {
	        return React.createElement("div", {className: "editor"}, React.createElement(Palette_tsx_1.Palette, {size: "40"}), React.createElement(Canvas_tsx_1.Canvas, null));
	    };
	    return Editor;
	}(React.Component));
	exports.Editor = Editor;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var PaletteItem_tsx_1 = __webpack_require__(5);
	var Palette = (function (_super) {
	    __extends(Palette, _super);
	    function Palette() {
	        _super.apply(this, arguments);
	    }
	    Palette.prototype.render = function () {
	        return React.createElement("div", {className: "palette"}, React.createElement(PaletteItem_tsx_1.PaletteItem, {type: "circle", size: this.props.size}), React.createElement(PaletteItem_tsx_1.PaletteItem, {type: "square", size: this.props.size}), React.createElement(PaletteItem_tsx_1.PaletteItem, {type: "triangle", size: this.props.size}));
	    };
	    return Palette;
	}(React.Component));
	exports.Palette = Palette;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Circle_tsx_1 = __webpack_require__(6);
	var Square_tsx_1 = __webpack_require__(7);
	var Triangle_tsx_1 = __webpack_require__(8);
	var models = __webpack_require__(9);
	var PaletteItem = (function (_super) {
	    __extends(PaletteItem, _super);
	    function PaletteItem() {
	        _super.apply(this, arguments);
	    }
	    PaletteItem.prototype.render = function () {
	        return React.createElement("div", {className: "palette-item"}, React.createElement("svg", {width: this.props.size, height: this.props.size}, this.renderShape(this.props.type)));
	    };
	    PaletteItem.prototype.renderShape = function (type) {
	        var size = Number(this.props.size);
	        var center_x = size / 2;
	        var center_y = size / 2;
	        if (type == "circle") {
	            return React.createElement(Circle_tsx_1.Circle, {shape: new models.Circle(center_x, center_y, size)});
	        }
	        else if (type == "square") {
	            return React.createElement(Square_tsx_1.Square, {shape: new models.Square(center_x, center_y, size)});
	        }
	        else if (type == "triangle") {
	            return React.createElement(Triangle_tsx_1.Triangle, {shape: new models.Triangle(center_x, center_y, size)});
	        }
	    };
	    return PaletteItem;
	}(React.Component));
	exports.PaletteItem = PaletteItem;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Circle = (function (_super) {
	    __extends(Circle, _super);
	    function Circle() {
	        _super.apply(this, arguments);
	    }
	    Circle.prototype.render = function () {
	        var shape = this.props.shape;
	        return React.createElement("circle", {cx: shape.x, cy: shape.y, r: shape.size / 2, fill: shape.fillColor});
	    };
	    return Circle;
	}(React.Component));
	exports.Circle = Circle;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Square = (function (_super) {
	    __extends(Square, _super);
	    function Square() {
	        _super.apply(this, arguments);
	    }
	    Square.prototype.render = function () {
	        var shape = this.props.shape;
	        return React.createElement("rect", {x: shape.x - shape.size / 2, y: shape.y - shape.size / 2, width: shape.size, height: shape.size, fill: shape.fillColor});
	    };
	    return Square;
	}(React.Component));
	exports.Square = Square;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Triangle = (function (_super) {
	    __extends(Triangle, _super);
	    function Triangle() {
	        _super.apply(this, arguments);
	    }
	    Triangle.prototype.render = function () {
	        var shape = this.props.shape;
	        return React.createElement("polygon", {points: (shape.x - shape.size / 2) + " " + (shape.y + shape.size / 2) + ",\n               " + (shape.x + shape.size / 2) + " " + (shape.y + shape.size / 2) + ",\n               " + shape.x + " " + (shape.y - shape.size / 2), fill: shape.fillColor});
	    };
	    return Triangle;
	}(React.Component));
	exports.Triangle = Triangle;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(10));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var shape_ts_1 = __webpack_require__(11);
	var Circle = (function (_super) {
	    __extends(Circle, _super);
	    function Circle() {
	        _super.apply(this, arguments);
	    }
	    return Circle;
	}(shape_ts_1.Shape));
	exports.Circle = Circle;


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";
	var Shape = (function () {
	    function Shape(_x, _y, _size) {
	        this._x = _x;
	        this._y = _y;
	        this._size = _size;
	    }
	    Object.defineProperty(Shape.prototype, "x", {
	        get: function () {
	            return this._x;
	        },
	        set: function (newX) {
	            this._x = newX;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "y", {
	        get: function () {
	            return this._y;
	        },
	        set: function (newY) {
	            this._y = newY;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "size", {
	        get: function () {
	            return this._size;
	        },
	        set: function (newSize) {
	            this.size = newSize;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Shape.prototype, "fillColor", {
	        get: function () {
	            return "#aaa";
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return Shape;
	}());
	exports.Shape = Shape;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var shape_ts_1 = __webpack_require__(11);
	var Square = (function (_super) {
	    __extends(Square, _super);
	    function Square() {
	        _super.apply(this, arguments);
	    }
	    return Square;
	}(shape_ts_1.Shape));
	exports.Square = Square;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var shape_ts_1 = __webpack_require__(11);
	var Triangle = (function (_super) {
	    __extends(Triangle, _super);
	    function Triangle() {
	        _super.apply(this, arguments);
	    }
	    return Triangle;
	}(shape_ts_1.Shape));
	exports.Triangle = Triangle;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(1);
	var Canvas = (function (_super) {
	    __extends(Canvas, _super);
	    function Canvas() {
	        _super.apply(this, arguments);
	    }
	    Canvas.prototype.render = function () {
	        return React.createElement("div", {className: "canvas"}, React.createElement("svg", null));
	    };
	    return Canvas;
	}(React.Component));
	exports.Canvas = Canvas;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map