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
	        return React.createElement("div", {className: "palette"}, React.createElement(PaletteItem_tsx_1.PaletteItem, {shape: "circle", size: this.props.size}), React.createElement(PaletteItem_tsx_1.PaletteItem, {shape: "square", size: this.props.size}), React.createElement(PaletteItem_tsx_1.PaletteItem, {shape: "triangle", size: this.props.size}));
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
	        var _this = this;
	        return React.createElement("div", {className: "palette-item", draggable: "true", onDragStart: function (e) { _this.dragStart(e, _this.props.shape); }}, React.createElement("svg", {width: this.props.size, height: this.props.size}, this.renderShape(this.props.shape)));
	    };
	    PaletteItem.prototype.renderShape = function (shape) {
	        var size = Number(this.props.size);
	        var centerX = size / 2;
	        var centerY = size / 2;
	        if (shape == "circle") {
	            return React.createElement(Circle_tsx_1.Circle, {shape: new models.Circle(centerX, centerY, size)});
	        }
	        else if (shape == "square") {
	            return React.createElement(Square_tsx_1.Square, {shape: new models.Square(centerX, centerY, size)});
	        }
	        else if (shape == "triangle") {
	            return React.createElement(Triangle_tsx_1.Triangle, {shape: new models.Triangle(centerX, centerY, size)});
	        }
	    };
	    PaletteItem.prototype.dragStart = function (event, shape) {
	        event.dataTransfer.setData("shape", shape);
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
	            this._size = newSize;
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
	var CanvasItem_tsx_1 = __webpack_require__(16);
	var models = __webpack_require__(15);
	var Canvas = (function (_super) {
	    __extends(Canvas, _super);
	    function Canvas(props) {
	        _super.call(this, props);
	        this.state = {
	            shapes: [],
	            draggingShapeOffsetX: 0,
	            draggingShapeOffsetY: 0
	        };
	    }
	    Canvas.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", {className: "canvas", onDragOver: function (e) { _this.dragOver(e); }, onDrop: function (e) { _this.drop(e); }, onMouseMove: function (e) { _this.mouseMove(e); }}, React.createElement("svg", {ref: "svg"}, this.state.shapes.map(function (shape, i) {
	            return React.createElement(CanvasItem_tsx_1.CanvasItem, {shape: shape, key: i, onMouseDown: function (shape, e) { _this.shapeMouseDown(shape, e); }, onMouseUp: function (shape, e) { _this.shapeMouseUp(shape, e); }});
	        })));
	    };
	    Canvas.prototype.dragOver = function (event) {
	        event.preventDefault();
	    };
	    Canvas.prototype.drop = function (event) {
	        event.preventDefault();
	        var shape;
	        var shapeType = event.dataTransfer.getData("shape");
	        var _a = this.getEventCoordinates(event), x = _a.x, y = _a.y;
	        var size = 80;
	        if (shapeType == "circle") {
	            shape = new models.Circle(x, y, size);
	        }
	        else if (shapeType == "square") {
	            shape = new models.Square(x, y, size);
	        }
	        else if (shapeType == "triangle") {
	            shape = new models.Triangle(x, y, size);
	        }
	        this.setState({ shapes: this.state.shapes.concat(shape) });
	    };
	    Canvas.prototype.mouseMove = function (event) {
	        if (this.state.draggingShape) {
	            var shapes = this.state.shapes;
	            var shape = shapes[shapes.indexOf(this.state.draggingShape)];
	            var _a = this.getEventCoordinates(event), x = _a.x, y = _a.y;
	            shape.x = x - this.state.draggingShapeOffsetX;
	            shape.y = y - this.state.draggingShapeOffsetY;
	            this.setState({ shapes: shapes });
	        }
	    };
	    Canvas.prototype.shapeMouseDown = function (shape, event) {
	        var _a = this.getEventCoordinates(event), x = _a.x, y = _a.y;
	        this.setState({ draggingShape: shape, draggingShapeOffsetX: x - shape.x, draggingShapeOffsetY: y - shape.y });
	    };
	    Canvas.prototype.shapeMouseUp = function (shape, event) {
	        this.setState({ draggingShape: null, draggingShapeOffsetX: 0, draggingShapeOffsetY: 0 });
	    };
	    Canvas.prototype.getEventCoordinates = function (event) {
	        var boundingRect = this.refs["svg"].getBoundingClientRect();
	        return {
	            x: event.clientX - boundingRect.left,
	            y: event.clientY - boundingRect.top
	        };
	    };
	    return Canvas;
	}(React.Component));
	exports.Canvas = Canvas;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(11));
	__export(__webpack_require__(10));
	__export(__webpack_require__(12));
	__export(__webpack_require__(13));


/***/ },
/* 16 */
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
	var models = __webpack_require__(15);
	var CanvasItem = (function (_super) {
	    __extends(CanvasItem, _super);
	    function CanvasItem() {
	        _super.apply(this, arguments);
	    }
	    CanvasItem.prototype.render = function () {
	        var _this = this;
	        return React.createElement("g", {onMouseDown: function (e) { _this.onMouseDown(e); }, onMouseUp: function (e) { _this.onMouseUp(e); }}, this.renderShape(this.props.shape));
	    };
	    CanvasItem.prototype.renderShape = function (shape) {
	        if (shape instanceof models.Circle) {
	            return React.createElement(Circle_tsx_1.Circle, {shape: shape});
	        }
	        else if (shape instanceof models.Square) {
	            return React.createElement(Square_tsx_1.Square, {shape: shape});
	        }
	        else if (shape instanceof models.Triangle) {
	            return React.createElement(Triangle_tsx_1.Triangle, {shape: shape});
	        }
	    };
	    CanvasItem.prototype.onMouseDown = function (event) {
	        if (this.props.onMouseDown) {
	            this.props.onMouseDown(this.props.shape, event);
	        }
	    };
	    CanvasItem.prototype.onMouseUp = function (event) {
	        if (this.props.onMouseUp) {
	            this.props.onMouseUp(this.props.shape, event);
	        }
	    };
	    return CanvasItem;
	}(React.Component));
	exports.CanvasItem = CanvasItem;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map