import 'regenerator-runtime';
import { css, unsafeCSS, LitElement, html } from 'lit';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$1(e,n)}

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=({finisher:e,descriptor:t})=>(o,n)=>{var r;if(void 0===n){const n=null!==(r=o.originalKey)&&void 0!==r?r:o.key,i=null!=t?{kind:"method",placement:"prototype",key:n,descriptor:t(o.key)}:{...o,key:n};return null!=e&&(i.finisher=function(t){e(t,n);}),i}{const r=o.constructor;void 0!==t&&Object.defineProperty(o,n,t(n)),null==e||e(r,n);}};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(i,n){return o({descriptor:o=>{const t={get(){var o,n;return null!==(n=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(n){const n="symbol"==typeof o?Symbol():"__"+o;t.get=function(){var o,t;return void 0===this[n]&&(this[n]=null!==(t=null===(o=this.renderRoot)||void 0===o?void 0:o.querySelector(i))&&void 0!==t?t:null),this[n]};}return t}})}

/*!
* rete v1.4.5 
* (c) 2021 Vitaliy Stoliarov 
* Released under the MIT license.
*/
function asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator$1(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep$1(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$2(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$2(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$2(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$2(target, key, source[key]);
    });
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray$1(arr, i) {
  return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles$1(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit$1(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest$1() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Node =
/*#__PURE__*/
function () {
  function Node(name) {
    _classCallCheck$2(this, Node);

    _defineProperty$2(this, "name", void 0);

    _defineProperty$2(this, "id", void 0);

    _defineProperty$2(this, "position", [0.0, 0.0]);

    _defineProperty$2(this, "inputs", new Map());

    _defineProperty$2(this, "outputs", new Map());

    _defineProperty$2(this, "controls", new Map());

    _defineProperty$2(this, "data", {});

    _defineProperty$2(this, "meta", {});

    this.name = name;
    this.id = Node.incrementId();
  }

  _createClass$2(Node, [{
    key: "_add",
    value: function _add(list, item, prop) {
      if (list.has(item.key)) throw new Error("Item with key '".concat(item.key, "' already been added to the node"));
      if (item[prop] !== null) throw new Error('Item has already been added to some node');
      item[prop] = this;
      list.set(item.key, item);
    }
  }, {
    key: "addControl",
    value: function addControl(control) {
      this._add(this.controls, control, 'parent');

      return this;
    }
  }, {
    key: "removeControl",
    value: function removeControl(control) {
      control.parent = null;
      this.controls["delete"](control.key);
    }
  }, {
    key: "addInput",
    value: function addInput(input) {
      this._add(this.inputs, input, 'node');

      return this;
    }
  }, {
    key: "removeInput",
    value: function removeInput(input) {
      input.removeConnections();
      input.node = null;
      this.inputs["delete"](input.key);
    }
  }, {
    key: "addOutput",
    value: function addOutput(output) {
      this._add(this.outputs, output, 'node');

      return this;
    }
  }, {
    key: "removeOutput",
    value: function removeOutput(output) {
      output.removeConnections();
      output.node = null;
      this.outputs["delete"](output.key);
    }
  }, {
    key: "getConnections",
    value: function getConnections() {
      var ios = [].concat(_toConsumableArray(this.inputs.values()), _toConsumableArray(this.outputs.values()));
      var connections = ios.reduce(function (arr, io) {
        return [].concat(_toConsumableArray(arr), _toConsumableArray(io.connections));
      }, []);
      return connections;
    }
  }, {
    key: "update",
    value: function update() {}
  }, {
    key: "toJSON",
    value: function toJSON() {
      var reduceIO = function reduceIO(list) {
        return Array.from(list).reduce(function (obj, _ref) {
          var _ref2 = _slicedToArray$1(_ref, 2),
              key = _ref2[0],
              io = _ref2[1];

          obj[key] = io.toJSON();
          return obj;
        }, {});
      };

      return {
        'id': this.id,
        'data': this.data,
        'inputs': reduceIO(this.inputs),
        'outputs': reduceIO(this.outputs),
        'position': this.position,
        'name': this.name
      };
    }
  }], [{
    key: "incrementId",
    value: function incrementId() {
      if (!this.latestId) this.latestId = 1;else this.latestId++;
      return this.latestId;
    }
  }, {
    key: "resetId",
    value: function resetId() {
      this.latestId = 0;
    }
  }, {
    key: "fromJSON",
    value: function fromJSON(json) {
      var node = new Node(json.name);

      var _json$position = _slicedToArray$1(json.position, 2),
          x = _json$position[0],
          y = _json$position[1];

      node.id = json.id;
      node.data = json.data;
      node.position = [x, y];
      node.name = json.name;
      Node.latestId = Math.max(node.id, Node.latestId);
      return node;
    }
  }]);

  return Node;
}();

_defineProperty$2(Node, "latestId", 0);

var Connection =
/*#__PURE__*/
function () {
  function Connection(output, input) {
    _classCallCheck$2(this, Connection);

    _defineProperty$2(this, "output", void 0);

    _defineProperty$2(this, "input", void 0);

    _defineProperty$2(this, "data", {});

    this.output = output;
    this.input = input;
    this.data = {};
    this.input.addConnection(this);
  }

  _createClass$2(Connection, [{
    key: "remove",
    value: function remove() {
      this.input.removeConnection(this);
      this.output.removeConnection(this);
    }
  }]);

  return Connection;
}();

var Emitter =
/*#__PURE__*/
function () {
  function Emitter(events) {
    _classCallCheck$2(this, Emitter);

    _defineProperty$2(this, "events", {});

    _defineProperty$2(this, "silent", false);

    this.events = events instanceof Emitter ? events.events : events.handlers;
  }

  _createClass$2(Emitter, [{
    key: "on",
    value: function on(names, handler) {
      var _this = this;

      var events = names instanceof Array ? names : names.split(' ');
      events.forEach(function (name) {
        if (!_this.events[name]) throw new Error("The event ".concat(name, " does not exist"));

        _this.events[name].push(handler);
      });
      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(name) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!(name in this.events)) throw new Error("The event ".concat(name, " cannot be triggered"));
      return this.events[name].reduce(function (r, e) {
        return e(params) !== false && r;
      }, true); // return false if at least one event is false        
    }
  }, {
    key: "bind",
    value: function bind(name) {
      if (this.events[name]) throw new Error("The event ".concat(name, " is already bound"));
      this.events[name] = [];
    }
  }, {
    key: "exist",
    value: function exist(name) {
      return Array.isArray(this.events[name]);
    }
  }]);

  return Emitter;
}();

var IO =
/*#__PURE__*/
function () {
  function IO(key, name, socket, multiConns) {
    _classCallCheck$2(this, IO);

    _defineProperty$2(this, "node", null);

    _defineProperty$2(this, "multipleConnections", void 0);

    _defineProperty$2(this, "connections", []);

    _defineProperty$2(this, "key", void 0);

    _defineProperty$2(this, "name", void 0);

    _defineProperty$2(this, "socket", void 0);

    this.node = null;
    this.multipleConnections = multiConns;
    this.connections = [];
    this.key = key;
    this.name = name;
    this.socket = socket;
  }

  _createClass$2(IO, [{
    key: "removeConnection",
    value: function removeConnection(connection) {
      this.connections.splice(this.connections.indexOf(connection), 1);
    }
  }, {
    key: "removeConnections",
    value: function removeConnections() {
      var _this = this;

      this.connections.forEach(function (connection) {
        return _this.removeConnection(connection);
      });
    }
  }]);

  return IO;
}();

var Input =
/*#__PURE__*/
function (_IO) {
  _inherits(Input, _IO);

  function Input(key, title, socket) {
    var _this;

    var multiConns = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    _classCallCheck$2(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, key, title, socket, multiConns));

    _defineProperty$2(_assertThisInitialized(_this), "control", null);

    return _this;
  }

  _createClass$2(Input, [{
    key: "hasConnection",
    value: function hasConnection() {
      return this.connections.length > 0;
    }
  }, {
    key: "addConnection",
    value: function addConnection(connection) {
      if (!this.multipleConnections && this.hasConnection()) throw new Error('Multiple connections not allowed');
      this.connections.push(connection);
    }
  }, {
    key: "addControl",
    value: function addControl(control) {
      this.control = control;
      control.parent = this;
    }
  }, {
    key: "showControl",
    value: function showControl() {
      return !this.hasConnection() && this.control !== null;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        'connections': this.connections.map(function (c) {
          if (!c.output.node) throw new Error('Node not added to Output');
          return {
            node: c.output.node.id,
            output: c.output.key,
            data: c.data
          };
        })
      };
    }
  }]);

  return Input;
}(IO);

var Validator =
/*#__PURE__*/
function () {
  function Validator() {
    _classCallCheck$2(this, Validator);
  }

  _createClass$2(Validator, null, [{
    key: "isValidData",
    value: function isValidData(data) {
      return typeof data.id === 'string' && this.isValidId(data.id) && data.nodes instanceof Object && !(data.nodes instanceof Array);
    }
  }, {
    key: "isValidId",
    value: function isValidId(id) {
      return /^[\w-]{3,}@[0-9]+\.[0-9]+\.[0-9]+$/.test(id);
    }
  }, {
    key: "validate",
    value: function validate(id, data) {
      var id1 = id.split('@');
      var id2 = data.id.split('@');
      var msg = [];
      if (!this.isValidData(data)) msg.push('Data is not suitable');
      if (id !== data.id) msg.push('IDs not equal');
      if (id1[0] !== id2[0]) msg.push('Names don\'t match');
      if (id1[1] !== id2[1]) msg.push('Versions don\'t match');
      return {
        success: Boolean(!msg.length),
        msg: msg.join('. ')
      };
    }
  }]);

  return Validator;
}();

var Context =
/*#__PURE__*/
function (_Emitter) {
  _inherits(Context, _Emitter);

  function Context(id, events) {
    var _this;

    _classCallCheck$2(this, Context);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Context).call(this, events));

    _defineProperty$2(_assertThisInitialized(_this), "id", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "plugins", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "components", void 0);

    if (!Validator.isValidId(id)) throw new Error('ID should be valid to name@0.1.0 format');
    _this.id = id;
    _this.plugins = new Map();
    _this.components = new Map();
    return _this;
  }

  _createClass$2(Context, [{
    key: "use",
    value: function use(plugin, options) {
      if (plugin.name && this.plugins.has(plugin.name)) throw new Error("Plugin ".concat(plugin.name, " already in use"));
      plugin.install(this, options || {});
      this.plugins.set(plugin.name, options);
    }
  }, {
    key: "register",
    value: function register(component) {
      if (this.components.has(component.name)) throw new Error("Component ".concat(component.name, " already registered"));
      this.components.set(component.name, component);
      this.trigger('componentregister', component);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.trigger('destroy');
    }
  }]);

  return Context;
}(Emitter);

function listenWindow(event, handler) {
  window.addEventListener(event, handler);
  return function () {
    window.removeEventListener(event, handler);
  };
}

var Drag =
/*#__PURE__*/
function () {
  function Drag(el) {
    var onTranslate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (_x, _y, _e) {};
    var onStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (_e) {};
    var onDrag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (_e) {};

    _classCallCheck$2(this, Drag);

    this.onTranslate = onTranslate;
    this.onStart = onStart;
    this.onDrag = onDrag;

    _defineProperty$2(this, "pointerStart", void 0);

    _defineProperty$2(this, "el", void 0);

    _defineProperty$2(this, "destroy", void 0);

    this.pointerStart = null;
    this.el = el;
    this.el.style.touchAction = 'none';
    this.el.addEventListener('pointerdown', this.down.bind(this));
    var destroyMove = listenWindow('pointermove', this.move.bind(this));
    var destroyUp = listenWindow('pointerup', this.up.bind(this));

    this.destroy = function () {
      destroyMove();
      destroyUp();
    };
  }

  _createClass$2(Drag, [{
    key: "down",
    value: function down(e) {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.stopPropagation();
      this.pointerStart = [e.pageX, e.pageY];
      this.onStart(e);
    }
  }, {
    key: "move",
    value: function move(e) {
      if (!this.pointerStart) return;
      e.preventDefault();
      var _ref = [e.pageX, e.pageY],
          x = _ref[0],
          y = _ref[1];
      var delta = [x - this.pointerStart[0], y - this.pointerStart[1]];
      var zoom = this.el.getBoundingClientRect().width / this.el.offsetWidth;
      this.onTranslate(delta[0] / zoom, delta[1] / zoom, e);
    }
  }, {
    key: "up",
    value: function up(e) {
      if (!this.pointerStart) return;
      this.pointerStart = null;
      this.onDrag(e);
    }
  }]);

  return Drag;
}();

var Zoom =
/*#__PURE__*/
function () {
  function Zoom(container, el, intensity, onzoom) {
    _classCallCheck$2(this, Zoom);

    _defineProperty$2(this, "el", void 0);

    _defineProperty$2(this, "intensity", void 0);

    _defineProperty$2(this, "onzoom", void 0);

    _defineProperty$2(this, "previous", null);

    _defineProperty$2(this, "pointers", []);

    _defineProperty$2(this, "destroy", void 0);

    this.el = el;
    this.intensity = intensity;
    this.onzoom = onzoom;
    container.addEventListener('wheel', this.wheel.bind(this));
    container.addEventListener('pointerdown', this.down.bind(this));
    container.addEventListener('dblclick', this.dblclick.bind(this));
    var destroyMove = listenWindow('pointermove', this.move.bind(this));
    var destroyUp = listenWindow('pointerup', this.end.bind(this));
    var destroyCancel = listenWindow('pointercancel', this.end.bind(this));

    this.destroy = function () {
      destroyMove();
      destroyUp();
      destroyCancel();
    };
  }

  _createClass$2(Zoom, [{
    key: "wheel",
    value: function wheel(e) {
      e.preventDefault();
      var rect = this.el.getBoundingClientRect();
      var isNegative = e.deltaY < 0;
      var delta = isNegative ? this.intensity : -this.intensity;
      var ox = (rect.left - e.clientX) * delta;
      var oy = (rect.top - e.clientY) * delta;
      this.onzoom(delta, ox, oy, 'wheel');
    }
  }, {
    key: "touches",
    value: function touches() {
      var e = {
        touches: this.pointers
      };
      var _ref = [e.touches[0].clientX, e.touches[0].clientY],
          x1 = _ref[0],
          y1 = _ref[1];
      var _ref2 = [e.touches[1].clientX, e.touches[1].clientY],
          x2 = _ref2[0],
          y2 = _ref2[1];
      var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      return {
        cx: (x1 + x2) / 2,
        cy: (y1 + y2) / 2,
        distance: distance
      };
    }
  }, {
    key: "down",
    value: function down(e) {
      this.pointers.push(e);
    }
  }, {
    key: "move",
    value: function move(e) {
      this.pointers = this.pointers.map(function (p) {
        return p.pointerId === e.pointerId ? e : p;
      });
      if (!this.translating) return;
      var rect = this.el.getBoundingClientRect();

      var _this$touches = this.touches(),
          cx = _this$touches.cx,
          cy = _this$touches.cy,
          distance = _this$touches.distance;

      if (this.previous !== null) {
        var delta = distance / this.previous.distance - 1;
        var ox = (rect.left - cx) * delta;
        var oy = (rect.top - cy) * delta;
        this.onzoom(delta, ox - (this.previous.cx - cx), oy - (this.previous.cy - cy), 'touch');
      }

      this.previous = {
        cx: cx,
        cy: cy,
        distance: distance
      };
    }
  }, {
    key: "end",
    value: function end(e) {
      this.previous = null;
      this.pointers = this.pointers.filter(function (p) {
        return p.pointerId !== e.pointerId;
      });
    }
  }, {
    key: "dblclick",
    value: function dblclick(e) {
      e.preventDefault();
      var rect = this.el.getBoundingClientRect();
      var delta = 4 * this.intensity;
      var ox = (rect.left - e.clientX) * delta;
      var oy = (rect.top - e.clientY) * delta;
      this.onzoom(delta, ox, oy, 'dblclick');
    }
  }, {
    key: "translating",
    get: function get() {
      // is translating while zoom (works on multitouch)
      return this.pointers.length >= 2;
    }
  }]);

  return Zoom;
}();

var Area =
/*#__PURE__*/
function (_Emitter) {
  _inherits(Area, _Emitter);

  function Area(container, emitter) {
    var _this;

    _classCallCheck$2(this, Area);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Area).call(this, emitter));

    _defineProperty$2(_assertThisInitialized(_this), "el", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "container", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "transform", {
      k: 1,
      x: 0,
      y: 0
    });

    _defineProperty$2(_assertThisInitialized(_this), "mouse", {
      x: 0,
      y: 0
    });

    _defineProperty$2(_assertThisInitialized(_this), "_startPosition", null);

    _defineProperty$2(_assertThisInitialized(_this), "_zoom", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "_drag", void 0);

    var el = _this.el = document.createElement('div');
    _this.container = container;
    el.style.transformOrigin = '0 0';
    _this._zoom = new Zoom(container, el, 0.1, _this.onZoom.bind(_assertThisInitialized(_this)));
    _this._drag = new Drag(container, _this.onTranslate.bind(_assertThisInitialized(_this)), _this.onStart.bind(_assertThisInitialized(_this)));
    emitter.on('destroy', function () {
      _this._zoom.destroy();

      _this._drag.destroy();
    });

    _this.container.addEventListener('pointermove', _this.pointermove.bind(_assertThisInitialized(_this)));

    _this.update();

    return _this;
  }

  _createClass$2(Area, [{
    key: "update",
    value: function update() {
      var t = this.transform;
      this.el.style.transform = "translate(".concat(t.x, "px, ").concat(t.y, "px) scale(").concat(t.k, ")");
    }
  }, {
    key: "pointermove",
    value: function pointermove(e) {
      var clientX = e.clientX,
          clientY = e.clientY;
      var rect = this.el.getBoundingClientRect();
      var x = clientX - rect.left;
      var y = clientY - rect.top;
      var k = this.transform.k;
      this.mouse = {
        x: x / k,
        y: y / k
      };
      this.trigger('mousemove', _objectSpread({}, this.mouse)); // TODO rename on `pointermove`
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this._startPosition = _objectSpread({}, this.transform);
    }
  }, {
    key: "onTranslate",
    value: function onTranslate(dx, dy) {
      if (this._zoom.translating) return; // lock translation while zoom on multitouch

      if (this._startPosition) this.translate(this._startPosition.x + dx, this._startPosition.y + dy);
    }
  }, {
    key: "onZoom",
    value: function onZoom(delta, ox, oy, source) {
      this.zoom(this.transform.k * (1 + delta), ox, oy, source);
      this.update();
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var params = {
        transform: this.transform,
        x: x,
        y: y
      };
      if (!this.trigger('translate', params)) return;
      this.transform.x = params.x;
      this.transform.y = params.y;
      this.update();
      this.trigger('translated');
    }
  }, {
    key: "zoom",
    value: function zoom(_zoom) {
      var ox = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var oy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var source = arguments.length > 3 ? arguments[3] : undefined;
      var k = this.transform.k;
      var params = {
        transform: this.transform,
        zoom: _zoom,
        source: source
      };
      if (!this.trigger('zoom', params)) return;
      var d = (k - params.zoom) / (k - _zoom || 1);
      this.transform.k = params.zoom || 1;
      this.transform.x += ox * d;
      this.transform.y += oy * d;
      this.update();
      this.trigger('zoomed', {
        source: source
      });
    }
  }, {
    key: "appendChild",
    value: function appendChild(el) {
      this.el.appendChild(el);
    }
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      this.el.removeChild(el);
    }
  }]);

  return Area;
}(Emitter);

var ConnectionView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(ConnectionView, _Emitter);

  function ConnectionView(connection, inputNode, outputNode, emitter) {
    var _this;

    _classCallCheck$2(this, ConnectionView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConnectionView).call(this, emitter));

    _defineProperty$2(_assertThisInitialized(_this), "connection", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "inputNode", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "outputNode", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "el", void 0);

    _this.connection = connection;
    _this.inputNode = inputNode;
    _this.outputNode = outputNode;
    _this.el = document.createElement('div');
    _this.el.style.position = 'absolute';
    _this.el.style.zIndex = '-1';

    _this.trigger('renderconnection', {
      el: _this.el,
      connection: _this.connection,
      points: _this.getPoints()
    });

    return _this;
  }

  _createClass$2(ConnectionView, [{
    key: "getPoints",
    value: function getPoints() {
      var _this$outputNode$getS = this.outputNode.getSocketPosition(this.connection.output),
          _this$outputNode$getS2 = _slicedToArray$1(_this$outputNode$getS, 2),
          x1 = _this$outputNode$getS2[0],
          y1 = _this$outputNode$getS2[1];

      var _this$inputNode$getSo = this.inputNode.getSocketPosition(this.connection.input),
          _this$inputNode$getSo2 = _slicedToArray$1(_this$inputNode$getSo, 2),
          x2 = _this$inputNode$getSo2[0],
          y2 = _this$inputNode$getSo2[1];

      return [x1, y1, x2, y2];
    }
  }, {
    key: "update",
    value: function update() {
      this.trigger('updateconnection', {
        el: this.el,
        connection: this.connection,
        points: this.getPoints()
      });
    }
  }]);

  return ConnectionView;
}(Emitter);

var ControlView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(ControlView, _Emitter);

  function ControlView(el, control, emitter) {
    var _this;

    _classCallCheck$2(this, ControlView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ControlView).call(this, emitter));

    _this.trigger('rendercontrol', {
      el: el,
      control: control
    });

    return _this;
  }

  return ControlView;
}(Emitter);

var SocketView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(SocketView, _Emitter);

  function SocketView(el, type, io, node, emitter) {
    var _this$trigger;

    var _this;

    _classCallCheck$2(this, SocketView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SocketView).call(this, emitter));

    _defineProperty$2(_assertThisInitialized(_this), "el", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "type", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "io", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "node", void 0);

    _this.el = el;
    _this.type = type;
    _this.io = io;
    _this.node = node;

    _this.trigger('rendersocket', (_this$trigger = {
      el: el
    }, _defineProperty$2(_this$trigger, type, _this.io), _defineProperty$2(_this$trigger, "socket", io.socket), _this$trigger));

    return _this;
  }

  _createClass$2(SocketView, [{
    key: "getPosition",
    value: function getPosition(_ref) {
      var position = _ref.position;
      var el = this.el;
      return [position[0] + el.offsetLeft + el.offsetWidth / 2, position[1] + el.offsetTop + el.offsetHeight / 2];
    }
  }]);

  return SocketView;
}(Emitter);

var NodeView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(NodeView, _Emitter);

  function NodeView(node, component, emitter) {
    var _this;

    _classCallCheck$2(this, NodeView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeView).call(this, emitter));

    _defineProperty$2(_assertThisInitialized(_this), "node", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "component", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "sockets", new Map());

    _defineProperty$2(_assertThisInitialized(_this), "controls", new Map());

    _defineProperty$2(_assertThisInitialized(_this), "el", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "_startPosition", []);

    _defineProperty$2(_assertThisInitialized(_this), "_drag", void 0);

    _this.node = node;
    _this.component = component;
    _this.el = document.createElement('div');
    _this.el.style.position = 'absolute';

    _this.el.addEventListener('contextmenu', function (e) {
      return _this.trigger('contextmenu', {
        e: e,
        node: _this.node
      });
    });

    _this._drag = new Drag(_this.el, _this.onTranslate.bind(_assertThisInitialized(_this)), _this.onSelect.bind(_assertThisInitialized(_this)), function () {
      _this.trigger('nodedraged', node);

      _this.trigger('nodedragged', node);
    });

    _this.trigger('rendernode', {
      el: _this.el,
      node: node,
      component: component.data,
      bindSocket: _this.bindSocket.bind(_assertThisInitialized(_this)),
      bindControl: _this.bindControl.bind(_assertThisInitialized(_this))
    });

    _this.update();

    return _this;
  }

  _createClass$2(NodeView, [{
    key: "clearSockets",
    value: function clearSockets() {
      var _this2 = this;

      var ios = [].concat(_toConsumableArray(this.node.inputs.values()), _toConsumableArray(this.node.outputs.values()));
      this.sockets.forEach(function (s) {
        if (!ios.includes(s.io)) _this2.sockets["delete"](s.io);
      });
    }
  }, {
    key: "bindSocket",
    value: function bindSocket(el, type, io) {
      this.clearSockets();
      this.sockets.set(io, new SocketView(el, type, io, this.node, this));
    }
  }, {
    key: "bindControl",
    value: function bindControl(el, control) {
      this.controls.set(control, new ControlView(el, control, this));
    }
  }, {
    key: "getSocketPosition",
    value: function getSocketPosition(io) {
      var socket = this.sockets.get(io);
      if (!socket) throw new Error("Socket not found for ".concat(io.name, " with key ").concat(io.key));
      return socket.getPosition(this.node);
    }
  }, {
    key: "onSelect",
    value: function onSelect(e) {
      var payload = {
        node: this.node,
        accumulate: e.ctrlKey,
        e: e
      };
      this.onStart();
      this.trigger('multiselectnode', payload);
      this.trigger('selectnode', payload);
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this._startPosition = _toConsumableArray(this.node.position);
    }
  }, {
    key: "onTranslate",
    value: function onTranslate(dx, dy) {
      this.trigger('translatenode', {
        node: this.node,
        dx: dx,
        dy: dy
      });
    }
  }, {
    key: "onDrag",
    value: function onDrag(dx, dy) {
      var x = this._startPosition[0] + dx;
      var y = this._startPosition[1] + dy;
      this.translate(x, y);
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var node = this.node;
      var params = {
        node: node,
        x: x,
        y: y
      };
      if (!this.trigger('nodetranslate', params)) return;

      var _node$position = _slicedToArray$1(node.position, 2),
          px = _node$position[0],
          py = _node$position[1];

      var prev = [px, py];
      node.position[0] = params.x;
      node.position[1] = params.y;
      this.update();
      this.trigger('nodetranslated', {
        node: node,
        prev: prev
      });
    }
  }, {
    key: "update",
    value: function update() {
      var _this$node$position = _slicedToArray$1(this.node.position, 2),
          x = _this$node$position[0],
          y = _this$node$position[1];

      this.el.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    }
  }, {
    key: "remove",
    value: function remove() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this._drag.destroy();
    }
  }]);

  return NodeView;
}(Emitter);

var EditorView =
/*#__PURE__*/
function (_Emitter) {
  _inherits(EditorView, _Emitter);

  function EditorView(container, components, emitter) {
    var _this;

    _classCallCheck$2(this, EditorView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditorView).call(this, emitter));

    _defineProperty$2(_assertThisInitialized(_this), "container", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "components", void 0);

    _defineProperty$2(_assertThisInitialized(_this), "nodes", new Map());

    _defineProperty$2(_assertThisInitialized(_this), "connections", new Map());

    _defineProperty$2(_assertThisInitialized(_this), "area", void 0);

    _this.container = container;
    _this.components = components;
    _this.container.style.overflow = 'hidden';

    _this.container.addEventListener('click', _this.click.bind(_assertThisInitialized(_this)));

    _this.container.addEventListener('contextmenu', function (e) {
      return _this.trigger('contextmenu', {
        e: e,
        view: _assertThisInitialized(_this)
      });
    });

    emitter.on('destroy', listenWindow('resize', _this.resize.bind(_assertThisInitialized(_this))));
    emitter.on('destroy', function () {
      return _this.nodes.forEach(function (view) {
        return view.destroy();
      });
    });

    _this.on('nodetranslated', _this.updateConnections.bind(_assertThisInitialized(_this)));

    _this.area = new Area(container, _assertThisInitialized(_this));

    _this.container.appendChild(_this.area.el);

    return _this;
  }

  _createClass$2(EditorView, [{
    key: "addNode",
    value: function addNode(node) {
      var component = this.components.get(node.name);
      if (!component) throw new Error("Component ".concat(node.name, " not found"));
      var nodeView = new NodeView(node, component, this);
      this.nodes.set(node, nodeView);
      this.area.appendChild(nodeView.el);
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var nodeView = this.nodes.get(node);
      this.nodes["delete"](node);

      if (nodeView) {
        this.area.removeChild(nodeView.el);
        nodeView.destroy();
      }
    }
  }, {
    key: "addConnection",
    value: function addConnection(connection) {
      if (!connection.input.node || !connection.output.node) throw new Error('Connection input or output not added to node');
      var viewInput = this.nodes.get(connection.input.node);
      var viewOutput = this.nodes.get(connection.output.node);
      if (!viewInput || !viewOutput) throw new Error('View node not found for input or output');
      var connView = new ConnectionView(connection, viewInput, viewOutput, this);
      this.connections.set(connection, connView);
      this.area.appendChild(connView.el);
    }
  }, {
    key: "removeConnection",
    value: function removeConnection(connection) {
      var connView = this.connections.get(connection);
      this.connections["delete"](connection);
      if (connView) this.area.removeChild(connView.el);
    }
  }, {
    key: "updateConnections",
    value: function updateConnections(_ref) {
      var _this2 = this;

      var node = _ref.node;
      node.getConnections().forEach(function (conn) {
        var connView = _this2.connections.get(conn);

        if (!connView) throw new Error('Connection view not found');
        connView.update();
      });
    }
  }, {
    key: "resize",
    value: function resize() {
      var container = this.container;
      if (!container.parentElement) throw new Error('Container doesn\'t have parent element');
      var width = container.parentElement.clientWidth;
      var height = container.parentElement.clientHeight;
      container.style.width = width + 'px';
      container.style.height = height + 'px';
    }
  }, {
    key: "click",
    value: function click(e) {
      var container = this.container;
      if (container !== e.target) return;
      if (!this.trigger('click', {
        e: e,
        container: container
      })) return;
    }
  }]);

  return EditorView;
}(Emitter);

var Selected =
/*#__PURE__*/
function () {
  function Selected() {
    _classCallCheck$2(this, Selected);

    _defineProperty$2(this, "list", []);
  }

  _createClass$2(Selected, [{
    key: "add",
    value: function add(item) {
      var accumulate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!accumulate) this.list = [item];else if (!this.contains(item)) this.list.push(item);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.list = [];
    }
  }, {
    key: "remove",
    value: function remove(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
  }, {
    key: "contains",
    value: function contains(item) {
      return this.list.indexOf(item) !== -1;
    }
  }, {
    key: "each",
    value: function each(callback) {
      this.list.forEach(callback);
    }
  }]);

  return Selected;
}();

var Events = function Events(handlers) {
  _classCallCheck$2(this, Events);

  _defineProperty$2(this, "handlers", void 0);

  this.handlers = _objectSpread({
    warn: [console.warn],
    error: [console.error],
    componentregister: [],
    destroy: []
  }, handlers);
};

var EditorEvents =
/*#__PURE__*/
function (_Events) {
  _inherits(EditorEvents, _Events);

  function EditorEvents() {
    _classCallCheck$2(this, EditorEvents);

    return _possibleConstructorReturn(this, _getPrototypeOf(EditorEvents).call(this, {
      nodecreate: [],
      nodecreated: [],
      noderemove: [],
      noderemoved: [],
      connectioncreate: [],
      connectioncreated: [],
      connectionremove: [],
      connectionremoved: [],
      translatenode: [],
      nodetranslate: [],
      nodetranslated: [],
      nodedraged: [],
      nodedragged: [],
      selectnode: [],
      multiselectnode: [],
      nodeselect: [],
      nodeselected: [],
      rendernode: [],
      rendersocket: [],
      rendercontrol: [],
      renderconnection: [],
      updateconnection: [],
      keydown: [],
      keyup: [],
      translate: [],
      translated: [],
      zoom: [],
      zoomed: [],
      click: [],
      mousemove: [],
      contextmenu: [],
      "import": [],
      "export": [],
      process: [],
      clear: []
    }));
  }

  return EditorEvents;
}(Events);

var NodeEditor =
/*#__PURE__*/
function (_Context) {
  _inherits(NodeEditor, _Context);

  function NodeEditor(id, container) {
    var _this;

    _classCallCheck$2(this, NodeEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NodeEditor).call(this, id, new EditorEvents()));

    _defineProperty$2(_assertThisInitialized(_this), "nodes", []);

    _defineProperty$2(_assertThisInitialized(_this), "selected", new Selected());

    _defineProperty$2(_assertThisInitialized(_this), "view", void 0);

    _this.view = new EditorView(container, _this.components, _assertThisInitialized(_this));

    _this.on('destroy', listenWindow('keydown', function (e) {
      return _this.trigger('keydown', e);
    }));

    _this.on('destroy', listenWindow('keyup', function (e) {
      return _this.trigger('keyup', e);
    }));

    _this.on('selectnode', function (_ref) {
      var node = _ref.node,
          accumulate = _ref.accumulate;
      return _this.selectNode(node, accumulate);
    });

    _this.on('nodeselected', function () {
      return _this.selected.each(function (n) {
        var nodeView = _this.view.nodes.get(n);

        nodeView && nodeView.onStart();
      });
    });

    _this.on('translatenode', function (_ref2) {
      var dx = _ref2.dx,
          dy = _ref2.dy;
      return _this.selected.each(function (n) {
        var nodeView = _this.view.nodes.get(n);

        nodeView && nodeView.onDrag(dx, dy);
      });
    });

    return _this;
  }

  _createClass$2(NodeEditor, [{
    key: "addNode",
    value: function addNode(node) {
      if (!this.trigger('nodecreate', node)) return;
      this.nodes.push(node);
      this.view.addNode(node);
      this.trigger('nodecreated', node);
    }
  }, {
    key: "removeNode",
    value: function removeNode(node) {
      var _this2 = this;

      if (!this.trigger('noderemove', node)) return;
      node.getConnections().forEach(function (c) {
        return _this2.removeConnection(c);
      });
      this.nodes.splice(this.nodes.indexOf(node), 1);
      this.view.removeNode(node);
      this.trigger('noderemoved', node);
    }
  }, {
    key: "connect",
    value: function connect(output, input) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (!this.trigger('connectioncreate', {
        output: output,
        input: input
      })) return;

      try {
        var connection = output.connectTo(input);
        connection.data = data;
        this.view.addConnection(connection);
        this.trigger('connectioncreated', connection);
      } catch (e) {
        this.trigger('warn', e);
      }
    }
  }, {
    key: "removeConnection",
    value: function removeConnection(connection) {
      if (!this.trigger('connectionremove', connection)) return;
      this.view.removeConnection(connection);
      connection.remove();
      this.trigger('connectionremoved', connection);
    }
  }, {
    key: "selectNode",
    value: function selectNode(node) {
      var accumulate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.nodes.indexOf(node) === -1) throw new Error('Node not exist in list');
      if (!this.trigger('nodeselect', node)) return;
      this.selected.add(node, accumulate);
      this.trigger('nodeselected', node);
    }
  }, {
    key: "getComponent",
    value: function getComponent(name) {
      var component = this.components.get(name);
      if (!component) throw "Component ".concat(name, " not found");
      return component;
    }
  }, {
    key: "register",
    value: function register(component) {
      _get(_getPrototypeOf(NodeEditor.prototype), "register", this).call(this, component);

      component.editor = this;
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this3 = this;

      _toConsumableArray(this.nodes).forEach(function (node) {
        return _this3.removeNode(node);
      });

      this.trigger('clear');
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      var data = {
        id: this.id,
        nodes: {}
      };
      this.nodes.forEach(function (node) {
        return data.nodes[node.id] = node.toJSON();
      });
      this.trigger('export', data);
      return data;
    }
  }, {
    key: "beforeImport",
    value: function beforeImport(json) {
      var checking = Validator.validate(this.id, json);

      if (!checking.success) {
        this.trigger('warn', checking.msg);
        return false;
      }

      this.silent = true;
      this.clear();
      this.trigger('import', json);
      return true;
    }
  }, {
    key: "afterImport",
    value: function afterImport() {
      this.silent = false;
      return true;
    }
  }, {
    key: "fromJSON",
    value: function () {
      var _fromJSON = _asyncToGenerator$1(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(json) {
        var _this4 = this;

        var nodes;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.beforeImport(json)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", false);

              case 2:
                nodes = {};
                _context2.prev = 3;
                _context2.next = 6;
                return Promise.all(Object.keys(json.nodes).map(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator$1(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(id) {
                    var node, component;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            node = json.nodes[id];
                            component = _this4.getComponent(node.name);
                            _context.next = 4;
                            return component.build(Node.fromJSON(node));

                          case 4:
                            nodes[id] = _context.sent;

                            _this4.addNode(nodes[id]);

                          case 6:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 6:
                Object.keys(json.nodes).forEach(function (id) {
                  var jsonNode = json.nodes[id];
                  var node = nodes[id];
                  Object.keys(jsonNode.outputs).forEach(function (key) {
                    var outputJson = jsonNode.outputs[key];
                    outputJson.connections.forEach(function (jsonConnection) {
                      var nodeId = jsonConnection.node;
                      var data = jsonConnection.data;
                      var targetOutput = node.outputs.get(key);
                      var targetInput = nodes[nodeId].inputs.get(jsonConnection.input);

                      if (!targetOutput || !targetInput) {
                        return _this4.trigger('error', "IO not found for node ".concat(node.id));
                      }

                      _this4.connect(targetOutput, targetInput, data);
                    });
                  });
                });
                _context2.next = 13;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](3);
                this.trigger('warn', _context2.t0);
                return _context2.abrupt("return", !this.afterImport());

              case 13:
                return _context2.abrupt("return", this.afterImport());

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 9]]);
      }));

      function fromJSON(_x) {
        return _fromJSON.apply(this, arguments);
      }

      return fromJSON;
    }()
  }]);

  return NodeEditor;
}(Context);

var Output =
/*#__PURE__*/
function (_IO) {
  _inherits(Output, _IO);

  function Output(key, title, socket) {
    var multiConns = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    _classCallCheck$2(this, Output);

    return _possibleConstructorReturn(this, _getPrototypeOf(Output).call(this, key, title, socket, multiConns));
  }

  _createClass$2(Output, [{
    key: "hasConnection",
    value: function hasConnection() {
      return this.connections.length > 0;
    }
  }, {
    key: "connectTo",
    value: function connectTo(input) {
      if (!this.socket.compatibleWith(input.socket)) throw new Error('Sockets not compatible');
      if (!input.multipleConnections && input.hasConnection()) throw new Error('Input already has one connection');
      if (!this.multipleConnections && this.hasConnection()) throw new Error('Output already has one connection');
      var connection = new Connection(this, input);
      this.connections.push(connection);
      return connection;
    }
  }, {
    key: "connectedTo",
    value: function connectedTo(input) {
      return this.connections.some(function (item) {
        return item.input === input;
      });
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        'connections': this.connections.map(function (c) {
          if (!c.input.node) throw new Error('Node not added to Input');
          return {
            node: c.input.node.id,
            input: c.input.key,
            data: c.data
          };
        })
      };
    }
  }]);

  return Output;
}(IO);

/*!
* rete-connection-plugin v0.9.0 
* (c) 2019 Vitaliy Stoliarov 
* Released under the MIT license.
*/

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties$1(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties$1(Constructor, staticProps);
  return Constructor;
}

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function toTrainCase(str) {
  return str.toLowerCase().replace(/ /g, '-');
}

function getMapItemRecursively(map, el) {
  return map.get(el) || (el.parentElement ? getMapItemRecursively(map, el.parentElement) : null);
}
function defaultPath(points, curvature) {
  var _points = _slicedToArray(points, 4),
      x1 = _points[0],
      y1 = _points[1],
      x2 = _points[2],
      y2 = _points[3];

  var hx1 = x1 + Math.abs(x2 - x1) * curvature;
  var hx2 = x2 - Math.abs(x2 - x1) * curvature;
  return "M ".concat(x1, " ").concat(y1, " C ").concat(hx1, " ").concat(y1, " ").concat(hx2, " ").concat(y2, " ").concat(x2, " ").concat(y2);
}
function renderPathData(emitter, points, connection) {
  var data = {
    points: points,
    connection: connection,
    d: ''
  };
  emitter.trigger('connectionpath', data);
  return data.d || defaultPath(points, 0.4);
}
function updateConnection(_ref) {
  var el = _ref.el,
      d = _ref.d;
  var path = el.querySelector('.connection path');
  if (!path) throw new Error('Path of connection was broken');
  path.setAttribute('d', d);
}
function renderConnection(_ref2) {
  var _svg$classList;

  var el = _ref2.el,
      d = _ref2.d,
      connection = _ref2.connection;
  var classed = !connection ? [] : ['input-' + toTrainCase(connection.input.name), 'output-' + toTrainCase(connection.output.name), 'socket-input-' + toTrainCase(connection.input.socket.name), 'socket-output-' + toTrainCase(connection.output.socket.name)];
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  (_svg$classList = svg.classList).add.apply(_svg$classList, ['connection'].concat(classed));

  path.classList.add('main-path');
  path.setAttribute('d', d);
  svg.appendChild(path);
  el.appendChild(svg);
  updateConnection({
    el: el,
    d: d
  });
}

var PickerView =
/*#__PURE__*/
function () {
  function PickerView(emitter, editorView) {
    _classCallCheck$1(this, PickerView);

    this.emitter = emitter;
    this.editorView = editorView;

    _defineProperty$1(this, "el", void 0);

    this.el = document.createElement('div');
    this.el.style.position = 'absolute';
    this.editorView.area.appendChild(this.el);
  }

  _createClass$1(PickerView, [{
    key: "updatePseudoConnection",
    value: function updatePseudoConnection(io) {
      if (io !== null) {
        this.renderConnection(io);
      } else if (this.el.parentElement) {
        this.el.innerHTML = '';
      }
    }
  }, {
    key: "getPoints",
    value: function getPoints(io) {
      var mouse = this.editorView.area.mouse;
      if (!io.node) throw new Error('Node in output/input not found');
      var node = this.editorView.nodes.get(io.node);
      if (!node) throw new Error('Node view not found');

      var _node$getSocketPositi = node.getSocketPosition(io),
          _node$getSocketPositi2 = _slicedToArray(_node$getSocketPositi, 2),
          x1 = _node$getSocketPositi2[0],
          y1 = _node$getSocketPositi2[1];

      return io instanceof Output ? [x1, y1, mouse.x, mouse.y] : [mouse.x, mouse.y, x1, y1];
    }
  }, {
    key: "updateConnection",
    value: function updateConnection$1(io) {
      var d = renderPathData(this.emitter, this.getPoints(io));

      updateConnection({
        el: this.el,
        d: d
      });
    }
  }, {
    key: "renderConnection",
    value: function renderConnection$1(io) {
      var d = renderPathData(this.emitter, this.getPoints(io));

      renderConnection({
        el: this.el,
        d: d
      });
    }
  }]);

  return PickerView;
}();

var Picker =
/*#__PURE__*/
function () {
  function Picker(editor) {
    var _this = this;

    _classCallCheck$1(this, Picker);

    _defineProperty$1(this, "editor", void 0);

    _defineProperty$1(this, "_io", null);

    _defineProperty$1(this, "view", void 0);

    this.editor = editor;
    this.view = new PickerView(editor, editor.view);
    editor.on('mousemove', function () {
      return _this.io && _this.view.updateConnection(_this.io);
    });
  }

  _createClass$1(Picker, [{
    key: "reset",
    value: function reset() {
      this.io = null;
    }
  }, {
    key: "pickOutput",
    value: function pickOutput(output) {
      if (!this.editor.trigger('connectionpick', output)) return;

      if (this.io instanceof Input) {
        if (!output.multipleConnections && output.hasConnection()) this.editor.removeConnection(output.connections[0]);
        this.editor.connect(output, this.io);
        this.reset();
        return;
      }

      if (this.io) this.reset();
      this.io = output;
    }
  }, {
    key: "pickInput",
    value: function pickInput(input) {
      var _this2 = this;

      if (!this.editor.trigger('connectionpick', input)) return;

      if (this.io === null) {
        if (input.hasConnection()) {
          this.io = input.connections[0].output;
          this.editor.removeConnection(input.connections[0]);
        } else {
          this.io = input;
        }

        return true;
      }

      if (!input.multipleConnections && input.hasConnection()) this.editor.removeConnection(input.connections[0]);
      if (!this.io.multipleConnections && this.io.hasConnection()) this.editor.removeConnection(this.io.connections[0]);

      if (this.io instanceof Output && this.io.connectedTo(input)) {
        var connection = input.connections.find(function (c) {
          return c.output === _this2.io;
        });

        if (connection) {
          this.editor.removeConnection(connection);
        }
      }

      if (this.io instanceof Output) {
        this.editor.connect(this.io, input);
        this.reset();
      }
    }
  }, {
    key: "pickConnection",
    value: function pickConnection(connection) {
      var output = connection.output;
      this.editor.removeConnection(connection);
      this.io = output;
    }
  }, {
    key: "io",
    get: function get() {
      return this._io;
    },
    set: function set(io) {
      this._io = io;
      this.view.updatePseudoConnection(io);
    }
  }]);

  return Picker;
}();

var Flow =
/*#__PURE__*/
function () {
  function Flow(picker) {
    _classCallCheck$1(this, Flow);

    _defineProperty$1(this, "picker", void 0);

    _defineProperty$1(this, "target", void 0);

    this.picker = picker;
    this.target = null;
  }

  _createClass$1(Flow, [{
    key: "act",
    value: function act(_ref) {
      var input = _ref.input,
          output = _ref.output;
      if (this.unlock(input || output)) return;
      if (input) this.picker.pickInput(input);else if (output) this.picker.pickOutput(output);else this.picker.reset();
    }
  }, {
    key: "start",
    value: function start(params, io) {
      this.act(params);
      this.target = io;
    }
  }, {
    key: "complete",
    value: function complete() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.act(params);
    }
  }, {
    key: "hasTarget",
    value: function hasTarget() {
      return Boolean(this.target);
    }
  }, {
    key: "unlock",
    value: function unlock(io) {
      var target = this.target;
      this.target = null;
      return target && target === io;
    }
  }]);

  return Flow;
}();

const styles$1 = (".connection {\n  overflow: visible !important;\n  position: absolute;\n  z-index: -1;\n  pointer-events: none; }\n  .connection > * {\n    pointer-events: all; }\n  .connection .main-path {\n    fill: none;\n    stroke-width: 5px;\n    stroke: steelblue; }\n");

function install$1(editor) {
  editor.bind('connectionpath');
  editor.bind('connectiondrop');
  editor.bind('connectionpick');
  editor.bind('resetconnection');
  var picker = new Picker(editor);
  var flow = new Flow(picker);
  var socketsParams = new WeakMap();

  function pointerDown(e) {
    var flowParams = socketsParams.get(this);

    if (flowParams) {
      var input = flowParams.input,
          output = flowParams.output;
      editor.view.container.dispatchEvent(new PointerEvent('pointermove', e));
      e.preventDefault();
      e.stopPropagation();
      flow.start({
        input: input,
        output: output
      }, input || output);
    }
  }

  function pointerUp(e) {
    var flowEl = e.composedPath()[0];

    if (picker.io) {
      editor.trigger('connectiondrop', picker.io);
    }

    if (flowEl) {
      flow.complete(getMapItemRecursively(socketsParams, flowEl) || {});
    }
  }

  editor.on('resetconnection', function () {
    return flow.complete();
  });
  editor.on('rendersocket', function (_ref) {
    var el = _ref.el,
        input = _ref.input,
        output = _ref.output;
    socketsParams.set(el, {
      input: input,
      output: output
    });
    el.removeEventListener('pointerdown', pointerDown);
    el.addEventListener('pointerdown', pointerDown);
  });
  window.addEventListener('pointerup', pointerUp);
  editor.on('renderconnection', function (_ref2) {
    var el = _ref2.el,
        connection = _ref2.connection,
        points = _ref2.points;
    var d = renderPathData(editor, points, connection);
    renderConnection({
      el: el,
      d: d,
      connection: connection
    });
  });
  editor.on('updateconnection', function (_ref3) {
    var el = _ref3.el,
        connection = _ref3.connection,
        points = _ref3.points;
    var d = renderPathData(editor, points, connection);
    updateConnection({
      el: el,
      d: d
    });
  });
  editor.on('destroy', function () {
    window.removeEventListener('pointerup', pointerUp);
  });
}

var index$1 = {
  name: 'connection',
  install: install$1
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var stage0RenderPlugin_min = {exports: {}};

function collector(node) {
  if (node.nodeType !== 3) {
    if (node.attributes !== undefined) {
      for(let attr of node.attributes) {
        let aname = attr.name;
        if (aname[0] === '#') {
          node.removeAttribute(aname);
          return aname.slice(1)
        }
      }
    }
    return 0
  } else {
    let nodeData = node.nodeValue;
    if (nodeData[0] === '#') {
      node.nodeValue = "";
      return nodeData.slice(1)
    }
    return 0
  }
}

const TREE_WALKER = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, false);
TREE_WALKER.roll = function(n) {
  let tmp;
  while(--n) tmp = this.nextNode();
  return tmp
};

class Ref {
  constructor(idx, ref) {
    this.idx = idx;
    this.ref = ref;
  }
}

function genPath(node) {
  const w = TREE_WALKER;
  w.currentNode = node;

  let indices = [], ref, idx = 0;
  do {
    if (ref = collector(node)) {
      indices.push(new Ref(idx+1, ref));
      idx = 1;
    } else {
      idx++;  
    }
  } while(node = w.nextNode())

  return indices
}

function walker(node) {
  const refs = {};

  const w = TREE_WALKER;
  w.currentNode = node;

  this._refPaths.map(x => refs[x.ref] = w.roll(x.idx));

  return refs
}

const compilerTemplate = document.createElement('template');
function h(strings, ...args) {
  let result = '';
  for(let i = 0; i < args.length; i++) result += strings[i] + args[i];
  result += strings[strings.length - 1];

  const template = result
    .replace(/>\n+/g, '>')
    .replace(/\s+</g, '<')
    .replace(/>\s+/g, '>')
    .replace(/\n\s+/g, '<!-- -->');
  compilerTemplate.innerHTML = template;
  const content = compilerTemplate.content.firstChild;
  content._refPaths = genPath(content);
  content.collect = walker;
  return content
}

var stage0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    h: h,
    'default': h
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(stage0);

// This is almost straightforward implementation of reconcillation algorithm
// based on ivi documentation:
// https://github.com/localvoid/ivi/blob/2c81ead934b9128e092cc2a5ef2d3cabc73cb5dd/packages/ivi/src/vdom/implementation.ts#L1366
// With some fast paths from Surplus implementation:
// https://github.com/adamhaile/surplus/blob/master/src/runtime/content.ts#L86
//
// How this implementation differs from others, is that it's working with data directly,
// without maintaining nodes arrays, and uses dom props firstChild/lastChild/nextSibling
// for markers moving.
function keyed(key, parent, renderedValues, data, createFn, noOp, beforeNode, afterNode) {
    // Fast path for clear
    if (data.length === 0) {
        if (beforeNode !== undefined || afterNode !== undefined) {
            let node = beforeNode !== undefined ? beforeNode.nextSibling : parent.firstChild,
                tmp;

            if (afterNode === undefined) afterNode = null;

            while(node !== afterNode) {
                tmp = node.nextSibling;
                parent.removeChild(node);
                node = tmp;
            }
        } else {
            parent.textContent = "";    
        }
        return
    }

    // Fast path for create
    if (renderedValues.length === 0) {
        let node, mode = afterNode !== undefined ? 1 : 0;
        for(let i = 0, len = data.length; i < len; i++) {
            node = createFn(data[i]);
            mode ? parent.insertBefore(node, afterNode) : parent.appendChild(node);
        }
        return
    }

    let prevStart = 0,
        newStart = 0,
        loop = true,
        prevEnd = renderedValues.length-1, newEnd = data.length-1,
        a, b,
        prevStartNode = beforeNode ? beforeNode.nextSibling : parent.firstChild,
        newStartNode = prevStartNode,
        prevEndNode = afterNode ? afterNode.previousSibling : parent.lastChild;
    
    fixes: while(loop) {
        loop = false;
        let _node;

        // Skip prefix
        a = renderedValues[prevStart], b = data[newStart];
        while(a[key] === b[key]) {
            noOp(prevStartNode, b);
            prevStart++;
            newStart++;
            newStartNode = prevStartNode = prevStartNode.nextSibling;
            if (prevEnd < prevStart || newEnd < newStart) break fixes
            a = renderedValues[prevStart];
            b = data[newStart];
        }

        // Skip suffix
        a = renderedValues[prevEnd], b = data[newEnd];
        while(a[key] === b[key]) {
            noOp(prevEndNode, b);
            prevEnd--;
            newEnd--;
            afterNode = prevEndNode;
            prevEndNode = prevEndNode.previousSibling;
            if (prevEnd < prevStart || newEnd < newStart) break fixes
            a = renderedValues[prevEnd];
            b = data[newEnd];
        }

        // Fast path to swap backward
        a = renderedValues[prevEnd], b = data[newStart];
        while(a[key] === b[key]) {
            loop = true;
            noOp(prevEndNode, b);
            _node = prevEndNode.previousSibling;
            parent.insertBefore(prevEndNode, newStartNode);
            prevEndNode = _node;
            newStart++;
            prevEnd--;
            if (prevEnd < prevStart || newEnd < newStart) break fixes
            a = renderedValues[prevEnd];
            b = data[newStart];
        }

        // Fast path to swap forward
        a = renderedValues[prevStart], b = data[newEnd];
        while(a[key] === b[key]) {
            loop = true;
            noOp(prevStartNode, b);
            _node = prevStartNode.nextSibling;
            parent.insertBefore(prevStartNode, afterNode);
            prevStart++;
            afterNode = prevStartNode;
            prevStartNode = _node;
            newEnd--;
            if (prevEnd < prevStart || newEnd < newStart) break fixes
            a = renderedValues[prevStart];
            b = data[newEnd];
        }
    }

    // Fast path for shrink
    if (newEnd < newStart) {
        if (prevStart <= prevEnd) {
            let next;
            while(prevStart <= prevEnd) {
                if (prevEnd === 0) {
                    parent.removeChild(prevEndNode);
                } else {
                    next = prevEndNode.previousSibling;    
                    parent.removeChild(prevEndNode);
                    prevEndNode = next;
                }
                prevEnd--;
            }
        }
        return
    }

    // Fast path for add
    if (prevEnd < prevStart) {
        if (newStart <= newEnd) {
            let node, mode = afterNode ? 1 : 0;
            while(newStart <= newEnd) {
                node = createFn(data[newStart]);
                mode ? parent.insertBefore(node, afterNode) : parent.appendChild(node);
                newStart++;
            }
        }
        return
    }

    // Positions for reusing nodes from current DOM state
    const P = new Array(newEnd + 1 - newStart);
    for(let i = newStart; i <= newEnd; i++) P[i] = -1;

    // Index to resolve position from current to new
    const I = new Map();
    for(let i = newStart; i <= newEnd; i++) I.set(data[i][key], i);

    let reusingNodes = 0, toRemove = [];
    for(let i = prevStart; i <= prevEnd; i++) {
        if (I.has(renderedValues[i][key])) {
            P[I.get(renderedValues[i][key])] = i;
            reusingNodes++;
        } else {
            toRemove.push(i);
        }
    }

    // Fast path for full replace
    if (reusingNodes === 0) {
        if (beforeNode !== undefined || afterNode !== undefined) {
            let node = beforeNode !== undefined ? beforeNode.nextSibling : parent.firstChild,
                tmp;

            if (afterNode === undefined) afterNode = null;

            while(node !== afterNode) {
                tmp = node.nextSibling;
                parent.removeChild(node);
                node = tmp;
                prevStart++;
            }
        } else {
            parent.textContent = "";
        }

        let node, mode = afterNode ? 1 : 0;
        for(let i = newStart; i <= newEnd; i++) {
            node = createFn(data[i]);
            mode ? parent.insertBefore(node, afterNode) : parent.appendChild(node);
        }

        return
    }

    // What else?
    const longestSeq = longestPositiveIncreasingSubsequence(P, newStart);

    // Collect nodes to work with them
    const nodes = [];
    let tmpC = prevStartNode;
    for(let i = prevStart; i <= prevEnd; i++) {
        nodes[i] = tmpC;
        tmpC = tmpC.nextSibling;
    }

    for(let i = 0; i < toRemove.length; i++) parent.removeChild(nodes[toRemove[i]]);

    let lisIdx = longestSeq.length - 1, tmpD;
    for(let i = newEnd; i >= newStart; i--) {
        if(longestSeq[lisIdx] === i) {
            afterNode = nodes[P[longestSeq[lisIdx]]];
            noOp(afterNode, data[i]);
            lisIdx--;
        } else {
            if (P[i] === -1) {
                tmpD = createFn(data[i]);
            } else {
                tmpD = nodes[P[i]];
                noOp(tmpD, data[i]);
            }
            parent.insertBefore(tmpD, afterNode);
            afterNode = tmpD;
        }
    }
}

// Picked from
// https://github.com/adamhaile/surplus/blob/master/src/runtime/content.ts#L368

// return an array of the indices of ns that comprise the longest increasing subsequence within ns
function longestPositiveIncreasingSubsequence(ns, newStart) {
    var seq = [],
        is  = [],
        l   = -1,
        pre = new Array(ns.length);

    for (var i = newStart, len = ns.length; i < len; i++) {
        var n = ns[i];
        if (n < 0) continue;
        var j = findGreatestIndexLEQ(seq, n);
        if (j !== -1) pre[i] = is[j];
        if (j === l) {
            l++;
            seq[l] = n;
            is[l]  = i;
        } else if (n < seq[j + 1]) {
            seq[j + 1] = n;
            is[j + 1] = i;
        }
    }

    for (i = is[l]; l >= 0; i = pre[i], l--) {
        seq[l] = i;
    }

    return seq;
}

function findGreatestIndexLEQ(seq, n) {
    // invariant: lo is guaranteed to be index of a value <= n, hi to be >
    // therefore, they actually start out of range: (-1, last + 1)
    var lo = -1,
        hi = seq.length;
    
    // fast path for simple increasing sequences
    if (hi > 0 && seq[hi - 1] <= n) return hi - 1;

    while (hi - lo > 1) {
        var mid = Math.floor((lo + hi) / 2);
        if (seq[mid] > n) {
            hi = mid;
        } else {
            lo = mid;
        }
    }

    return lo;
}

var keyed$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    keyed: keyed,
    'default': keyed
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(keyed$1);

/*!
* rete-stage0-render-plugin v0.2.14 
* (c) 2018  
* Released under the ISC license.
*/

(function (module, exports) {
!function(t){var c,e=Object.prototype,l=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",n=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag",a=t.regeneratorRuntime;if(a)(module.exports=a);else {(a=t.regeneratorRuntime=module.exports).wrap=C;var p="suspendedStart",h="suspendedYield",d="executing",f="completed",v={},u={};u[r]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&l.call(y,r)&&(u=y);var g=L.prototype=b.prototype=Object.create(u);x.prototype=g.constructor=L,L.constructor=x,L[i]=x.displayName="GeneratorFunction",a.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return !!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,i in t||(t[i]="GeneratorFunction")),t.prototype=Object.create(g),t},a.awrap=function(t){return {__await:t}},k(O.prototype),O.prototype[n]=function(){return this},a.AsyncIterator=O,a.async=function(t,e,o,n){var r=new O(C(t,e,o,n));return a.isGeneratorFunction(e)?r:r.next().then(function(t){return t.done?t.value:r.next()})},k(g),g[i]="Generator",g[r]=function(){return this},g.toString=function(){return "[object Generator]"},a.keys=function(o){var n=[];for(var t in o)n.push(t);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in o)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=c,this.done=!1,this.delegate=null,this.method="next",this.arg=c,this.tryEntries.forEach(N),!t)for(var e in this)"t"===e.charAt(0)&&l.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=c);},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var n=this;function t(t,e){return i.type="throw",i.arg=o,n.next=t,e&&(n.method="next",n.arg=c),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e],i=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var s=l.call(r,"catchLoc"),a=l.call(r,"finallyLoc");if(s&&a){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(s){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else {if(!a)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;0<=o;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&l.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var r=n;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return "break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),N(o),v}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;N(o);}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,o){return this.delegate={iterator:j(t),resultName:e,nextLoc:o},"next"===this.method&&(this.arg=c),v}};}function C(t,e,o,n){var i,s,a,c,r=e&&e.prototype instanceof b?e:b,l=Object.create(r.prototype),u=new _(n||[]);return l._invoke=(i=t,s=o,a=u,c=p,function(t,e){if(c===d)throw new Error("Generator is already running");if(c===f){if("throw"===t)throw e;return S()}for(a.method=t,a.arg=e;;){var o=a.delegate;if(o){var n=E(o,a);if(n){if(n===v)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=f,a.arg;a.dispatchException(a.arg);}else "return"===a.method&&a.abrupt("return",a.arg);c=d;var r=w(i,s,a);if("normal"===r.type){if(c=a.done?f:h,r.arg===v)continue;return {value:r.arg,done:a.done}}"throw"===r.type&&(c=f,a.method="throw",a.arg=r.arg);}}),l}function w(t,e,o){try{return {type:"normal",arg:t.call(e,o)}}catch(t){return {type:"throw",arg:t}}}function b(){}function x(){}function L(){}function k(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)};});}function O(c){var e;this._invoke=function(o,n){function t(){return new Promise(function(t,e){!function e(t,o,n,r){var i=w(c[t],c,o);if("throw"!==i.type){var s=i.arg,a=s.value;return a&&"object"==typeof a&&l.call(a,"__await")?Promise.resolve(a.__await).then(function(t){e("next",t,n,r);},function(t){e("throw",t,n,r);}):Promise.resolve(a).then(function(t){s.value=t,n(s);},r)}r(i.arg);}(o,n,t,e);})}return e=e?e.then(t,t):t()};}function E(t,e){var o=t.iterator[e.method];if(o===c){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=c,E(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method");}return v}var n=w(o,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,v;var r=n.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=c),e.delegate=null,v):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e);}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e;}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0);}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(l.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=c,t.done=!0,t};return n.next=n}}return {next:S}}function S(){return {value:c,done:!0}}}(function(){return this}()||Function("return this")()),function(t,e){module.exports=e(require$$0,require$$1);}(commonjsGlobal,function(t,n){function i(t){var e=this.getView();this.root=e.cloneNode(!0);var o=e.collect(this.root);this.setRefs(o),this.init(t);}function e(t,e){t.prototype=Object.assign({},e.prototype,t.prototype),t.prototype.constructor=t;}function o(t,e,o){this.type=e,this.node=o,this.name,this.hint,i.call(this,t);}function r(t){this.control=t,i.call(this,t);}function s(t,e){this.name=null,this.node=e,this.showControl=null,i.call(this,t);}function a(t,e){this.name=null,this.node=e,i.call(this,t);}function h(t){this.renderedInputs=[],this.renderedOutputs=[],this.renderedControls=[],this.visibleInputs=void 0,this.visibleOutputs=void 0,this.visibleControls=void 0,this.name=null,this.selected=null,this.visibleCollapsed=!!t.node.data.collapsed,this.renderedCollapsed=null,i.call(this,t);}t=t&&t.hasOwnProperty("default")?t.default:t,i.prototype={getView:function(){return t(["<div></div>"])},init:function(t){this.root.update=this.rootUpdate.bind(this),this.root.update(t);},setRefs:function(t){this.refs=t;},rootUpdate:function(t){}},o.prototype.init=function(t){i.prototype.init.call(this,t.socket),this.node.context.bindSocket(this.root,this.type,t);},o.prototype.getView=function(){return t(["<div></div>"])},o.prototype.rootUpdate=function(t){this.name!==t.name&&(this.root.className="socket "+t.name+" "+this.type),this.name===t.name&&this.hint===t.hint||(this.root.title=t.name+"\\n"+(t.hint?t.hint:"")),this.name=t.name,this.hint=t.hint;},e(o,i),r.prototype.init=function(t){var e=void 0;this.control.parent.context?e=this.control.parent.context:this.control.parent.node&&(e=this.control.parent.node.context),e.bindControl(this.root,t),i.prototype.init.call(this,t),this.root.addEventListener("mousedown",function(t){t.stopPropagation();});},r.prototype.getView=function(){return t(['<div class="control"></div>'])},r.prototype.rootUpdate=function(t){if(this.control.key!==t.key){for(;this.root.firstChild;)this.root.removeChild(this.root.firstChild);this.root.appendChild(t.stage0Context.root);}this.control=t;},e(r,i),s.prototype.getView=function(){return t(['<div class="input"><span class="input-socket" #socket></span><div class="input-title" #inputTitle>#inputName</div><div class="input-control" #controls></div></div>'])},s.prototype.getSocketComponent=function(t){return new o(t,"input",this.node)},s.prototype.getControlComponent=function(t){return new r(t.control,t.node)},s.prototype.rootUpdate=function(t){var e=t.name,o=t.showControl();if(this.showControl!==o){for(;this.refs.controls.firstChild;)this.refs.controls.removeChild(this.refs.controls.firstChild);if(this.root.contains(this.refs.inputtitle)&&this.root.removeChild(this.refs.inputtitle),o){var n=this.getControlComponent(t);this.refs.controls.appendChild(n.root);}else this.root.appendChild(this.refs.inputtitle),this.name!==e&&(this.name=this.refs.inputName.nodeValue=e);}if(!this.refs.socket.firstChild){var r=this.getSocketComponent(t);this.refs.socket.appendChild(r.root);}},e(s,i),a.prototype.getView=function(){return t(['<div class="output"><div class="output-title" #outputTitle>#outputName</div><div #socket></div></div>'])},a.prototype.getSocketComponent=function(t){return new o(t,"output",this.node)},a.prototype.rootUpdate=function(t){var e=t.name;if(this.name!==e&&(this.name=this.refs.outputName.nodeValue=e),!this.refs.socket.firstChild){var o=this.getSocketComponent(t);this.refs.socket.appendChild(o.root);}},e(a,i),h.prototype.init=function(e){var o=this;i.prototype.init.call(this,e),this.refs.collapse.addEventListener("mousedown",function(t){t.stopPropagation();}),this.refs.collapse.addEventListener("click",function(t){o.refs.collapse.classList.contains("closed")?o.visibleCollapsed=!1:o.visibleCollapsed=!0,o.visibleCollapsed!==o.renderedCollapsed&&(o.rootUpdate(e),e.editor.view.updateConnections({node:e.node}));}),this.refs.collapse.ondblclick=function(t){t.stopPropagation();};},h.prototype.getView=function(){return t(['<div class="node"><div class="collapse" #collapse></div><div class="title">#nodeName</div><div class="outputs" #outputs></div><div class="controls" #controls></div><div class="inputs" #inputs></div></div>'])},h.prototype.getInputComponent=function(t,e){return new s(t,e)},h.prototype.getOutputComponent=function(t,e){return new a(t,e)},h.prototype.getControlComponent=function(t,e){return new r(t,e)},h.prototype.rootUpdate=function(e){var o=this,t=e.editor.selected.contains(e.node);this.name===e.node.name&&this.selected===t||(this.root.classList.remove(this.name),this.root.classList.remove("selected"),this.root.classList.add(e.node.name),t&&this.root.classList.add("selected")),this.selected=t,this.name!==e.node.name&&(this.name=this.refs.nodeName.nodeValue=e.node.name),this.visibleCollapsed!==this.renderedCollapsed&&(this.visibleCollapsed?(this.refs.collapse.classList.add("closed"),this.root.classList.add("collapsed"),this.root.insertBefore(this.refs.inputs,this.refs.collapse)):(this.refs.collapse.classList.remove("closed"),this.root.classList.remove("collapsed"),this.root.appendChild(this.refs.inputs)),this.renderedCollapsed=this.visibleCollapsed),this.visibleInputs=Array.from(e.node.inputs.values()).slice(),n.keyed("key",this.refs.inputs,this.renderedInputs,this.visibleInputs,function(t){return o.getInputComponent(t,e.node).root},function(t,e){t.update(e);}),this.renderedInputs=this.visibleInputs.slice(),this.visibleOutputs=Array.from(e.node.outputs.values()).slice(),n.keyed("key",this.refs.outputs,this.renderedOutputs,this.visibleOutputs,function(t){return o.getOutputComponent(t,e.node).root},function(t,e){t.update(e);}),this.renderedOutputs=this.visibleOutputs.slice(),this.visibleControls=Array.from(e.node.controls.values()).slice(),n.keyed("key",this.refs.controls,this.renderedControls,this.visibleControls,function(t){return o.getControlComponent(t,e.node).root},function(t,e){t.update(e);}),this.renderedControls=this.visibleControls.slice();},e(h,i);var d=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);}return t};function l(t,e){var o=e.el,n=e.control,r=e.controlProps;this.component=Object.assign({},n.component,r),this.editor=t,this.el=o,i.call(this,n),this.component.root=this.root;}return l.prototype.getView=function(){return t([this.component.template])},l.prototype.init=function(t){this.root.update=this.rootUpdate.bind(this);},l.prototype.rootUpdate=function(t){this.component.methods.update.apply(this.component);},e(l,i),{name:"stage0-render",install:function(p,t){p.on("rendernode",function(t){var e=t.el,o=t.node,n=t.component,r=t.bindSocket,i=t.bindControl;if(!n.render||"stage0"===n.render){var s,a,c,l,u=d({},n.props,{node:o,editor:p,bindSocket:r,bindControl:i});o.context=u,o._stage0=(a=(s={el:e,nodeProps:u,component:n}).el,c=s.nodeProps,l=s.component.component||new h(c),c.node.stage0Context=l,a.appendChild(l.root),l),o.update=function(){o.stage0Context.rootUpdate(u);};}}),p.on("rendercontrol",function(t){var e=t.el,o=t.control;if(!o.render||"stage0"===o.render){var n,r,i,s,a,c=d({},o.props,{getData:o.getData.bind(o),putData:o.putData.bind(o)});o._stage0=(n=p,i=(r={el:e,control:o,controlProps:c}).el,s=r.control,a=new l(n,{el:i,control:s,controlProps:r.controlProps}),s.stage0Context=a,i.appendChild(a.root),a.component.mounted(),a),o.update=function(){o.stage0Context.rootUpdate(c);};}}),p.on("connectioncreated connectionremoved",function(t){var e=t.input.node.context,o=t.output.node.context;t.output.node.stage0Context.rootUpdate(o),t.input.node.stage0Context.rootUpdate(e);}),p.on("nodeselected",function(){for(var t in p.nodes){var e=p.nodes[t],o=e.context;e.stage0Context.rootUpdate(o);}});},NodeComponent:h,InputComponent:s,OutputComponent:a,ControlComponent:r,RootControlComponent:l,SocketComponent:o}});

}(stage0RenderPlugin_min));

var Stage0RenderPlugin = stage0RenderPlugin_min.exports;

const styles = css`.socket{display:inline-block;cursor:pointer;border:1px solid #fff;border-radius:12px;width:24px;height:24px;margin:6px;vertical-align:middle;background:#96b38a;z-index:1;box-sizing:border-box}.socket:hover{border-width:4px}.socket.multiple{border-color:#ff0}.socket.output{margin-right:-12px}.socket.input{margin-left:-12px}
.node{background:rgba(110,136,255,.8);border:2px solid #4e58bf;border-radius:10px;cursor:pointer;min-width:180px;height:auto;padding-bottom:6px;box-sizing:content-box;position:relative;user-select:none}.node:hover{background:rgba(130,153,255,.8)}.node.selected{background:#ffd92c;border-color:#e3c000}.node .title{font-family:sans-serif;font-size:18px;padding:8px 8px 8px 0}.node .collapse,.node .title{color:#fff;display:inline-block}.node .collapse{padding:8px;cursor:pointer;width:11px}.node .collapse:after{content:"\\25BC";vertical-align:middle;text-align:center}.node .collapse.closed:after{content:"\\25b8";padding-left:4px}.node .output{text-align:right}.node .input{text-align:left}.node .input .input-socket{display:inline-block}.node .input-title,.node .output-title{vertical-align:middle;color:#fff;display:inline-block;font-family:sans-serif;font-size:14px;margin:6px;line-height:24px}.node .input-control{z-index:1;vertical-align:middle;display:inline-block}.node .input-control .control{padding-left:0}.node .control{padding:6px 18px}.node.collapsed{float:left}.node.collapsed .control{display:none}.node.collapsed .inputs,.node.collapsed .outputs{display:inline-block;width:auto}.node.collapsed .collapse,.node.collapsed .input-title,.node.collapsed .inputs{float:left}.node.collapsed .outputs{float:right}.node.collapsed .input .input-title,.node.collapsed .output .output-title{display:none}
/*# sourceMappingURL=stage0-render-plugin.min.css.map */`;

/*!
* rete-dock-plugin v0.2.1 
* (c) 2019 Vitaliy Stoliarov 
* Released under the MIT license.
*/

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function createNode(_x, _x2) {
  return _createNode.apply(this, arguments);
}

function _createNode() {
  _createNode = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(component, position) {
    var node;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return component.createNode({});

          case 2:
            node = _context.sent;
            node.position = [position.x, position.y];
            return _context.abrupt("return", node);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createNode.apply(this, arguments);
}

var ClickStrategy =
/*#__PURE__*/
function () {
  function ClickStrategy(editor) {
    var _this = this;

    _classCallCheck(this, ClickStrategy);

    _defineProperty(this, "editor", void 0);

    _defineProperty(this, "position", void 0);

    this.editor = editor;
    this.position = {
      x: 0,
      y: 0
    };
    editor.on('click', function () {
      _this.position = editor.view.area.mouse;
    });
  }

  _createClass(ClickStrategy, [{
    key: "addComponent",
    value: function addComponent(el, component) {
      var _this2 = this;

      el.addEventListener('click',
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var node;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return createNode(component, _this2.position);

              case 2:
                node = _context.sent;

                _this2.editor.addNode(node);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));
    }
  }]);

  return ClickStrategy;
}();

var DropStrategy =
/*#__PURE__*/
function () {
  function DropStrategy(editor) {
    _classCallCheck(this, DropStrategy);

    editor.view.container.addEventListener('dragover', function (e) {
      return e.preventDefault();
    });
    editor.view.container.addEventListener('drop',
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(e) {
        var name, component, node;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e.dataTransfer) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                name = e.dataTransfer.getData('componentName');
                component = editor.components.get(name);

                if (component) {
                  _context.next = 6;
                  break;
                }

                throw new Error("Component ".concat(name, " not found"));

              case 6:
                // force update the mouse position
                editor.view.area.pointermove(e);
                _context.next = 9;
                return createNode(component, editor.view.area.mouse);

              case 9:
                node = _context.sent;
                editor.addNode(node);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }

  _createClass(DropStrategy, [{
    key: "addComponent",
    value: function addComponent(el, component) {
      el.draggable = true;
      el.addEventListener('dragstart', function (e) {
        if (!e.dataTransfer) return;
        e.dataTransfer.setData('componentName', component.name);
      });
    }
  }]);

  return DropStrategy;
}();

function install(editor, _ref) {
  var container = _ref.container,
      plugins = _ref.plugins,
      _ref$itemClass = _ref.itemClass,
      itemClass = _ref$itemClass === void 0 ? 'dock-item' : _ref$itemClass;
  if (!(container instanceof HTMLElement)) throw new Error('container is not HTML element');
  var copy = new NodeEditor(editor.id, editor.view.container);
  var clickStrategy = new ClickStrategy(editor);
  var dropStrategy = new DropStrategy(editor);
  plugins.forEach(function (plugin) {
    if (Array.isArray(plugin)) copy.use(plugin[0], plugin[1]);else copy.use(plugin);
  });
  editor.on('componentregister',
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(c) {
      var component, el;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              component = Object.create(c);
              el = document.createElement('div');
              el.classList.add(itemClass);
              container.appendChild(el);
              clickStrategy.addComponent(el, component);
              dropStrategy.addComponent(el, component);
              component.editor = copy;
              _context.t0 = copy;
              _context.t1 = el;
              _context.next = 11;
              return component.createNode({});

            case 11:
              _context.t2 = _context.sent;
              _context.t3 = component.data;

              _context.t4 = function bindSocket() {};

              _context.t5 = function bindControl(element, control) {
                copy.trigger('rendercontrol', {
                  el: element,
                  control: control
                });
              };

              _context.t6 = {
                el: _context.t1,
                node: _context.t2,
                component: _context.t3,
                bindSocket: _context.t4,
                bindControl: _context.t5
              };

              _context.t0.trigger.call(_context.t0, 'rendernode', _context.t6);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }());
}

var index = {
  name: 'dock',
  install: install
};

class ReteEditor extends LitElement {
    constructor() {
        super(...arguments);
        this.components = [];
    }
    async firstUpdated() {
        this.editor = new NodeEditor('demo@0.1.0', this._editorEl);
        this.editor.use(index$1);
        this.editor.use(Stage0RenderPlugin);
        this.editor.use(index, {
            container: this._dockEl,
            plugins: [Stage0RenderPlugin], // render plugins
        });
        for (const CustomComponent of this.components) {
            this.editor.register(new CustomComponent());
        }
        if (this.data) {
            await this.editor.fromJSON(this.data);
        }
    }
    render() {
        return html `
      <div class="editor">
        <div class="container">
          <div class="node-editor"></div>
        </div>
        <div class="dock"></div>
      </div>
    `;
    }
}
ReteEditor.styles = [
    unsafeCSS(styles$1),
    styles,
    css `
      .editor {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        height: 100vh;
      }
      .dock {
        height: 100px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
      }
      .dock-item {
        display: inline-block;
        vertical-align: top;
        transform: scale(0.8);
        transform-origin: 50% 0;
      }
      .container {
        flex: 1;
        overflow: hidden;
        display: flex;
      }
      .node-editor {
        flex: 1;
      }
    `,
];
__decorate([
    e()
], ReteEditor.prototype, "data", void 0);
__decorate([
    e()
], ReteEditor.prototype, "components", void 0);
__decorate([
    i('.node-editor')
], ReteEditor.prototype, "_editorEl", void 0);
__decorate([
    i('.dock')
], ReteEditor.prototype, "_dockEl", void 0);

export { ReteEditor };
//# sourceMappingURL=index.js.map
