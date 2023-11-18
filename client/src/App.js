"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var axios_1 = __importDefault(require("axios"));
require("./App.css");
function App(props) {
    var _a = (0, react_1.useState)(''), message = _a[0], setMessage = _a[1];
    var _b = (0, react_1.useState)({ fileName: '' }), fileName = _b[0], setFileName = _b[1];
    var _c = (0, react_1.useState)(), number1 = _c[0], setNumber1 = _c[1];
    var _d = (0, react_1.useState)(), number2 = _d[0], setNumber2 = _d[1];
    var _e = (0, react_1.useState)(0), total = _e[0], setTotal = _e[1];
    var PORT = props.server_port;
    (0, react_1.useEffect)(function () {
        fetch("http://localhost:".concat(PORT, "/ShowTitle"))
            .then(function (res) {
            return res.json();
        })
            .then(function (data) {
            return setMessage(data.message);
        });
    }, []);
    var handleSubmit = function (event) {
        event.preventDefault();
        axios_1.default.post("http://localhost:".concat(PORT, "/Add"), { number1: number1, number2: number2 })
            .then(function (res) {
            console.log(res);
            console.log(res.data);
            setTotal(res.data.sum);
        });
    };
    var handleInputChange = function (event) {
        var fileName = event.currentTarget.value;
        setFileName({
            fileName: fileName
        });
    };
    return ((0, jsx_runtime_1.jsx)("form", __assign({ onSubmit: handleSubmit }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: "App" }, { children: [(0, jsx_runtime_1.jsx)("h1", { children: message }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("input", { placeholder: "First Number", type: "number", value: number1, onChange: function (e) {
                                return setNumber1(Number(e.target.value));
                            } }), (0, jsx_runtime_1.jsx)("input", { placeholder: "Second Number", type: "number", value: number2, onChange: function (e) {
                                return setNumber2(Number(e.target.value));
                            } })] }), (0, jsx_runtime_1.jsx)("button", __assign({ type: "submit" }, { children: "Add Two Numbers" })), (0, jsx_runtime_1.jsxs)("p", { children: ["Total: ", total || ''] })] })) })));
}
exports.default = App;
//# sourceMappingURL=App.js.map