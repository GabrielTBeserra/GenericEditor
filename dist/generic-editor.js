import * as React$1 from "react";
import React, { Children, Component, Fragment, PureComponent, createContext, createElement, forwardRef, isValidElement, memo, useCallback, useContext, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM, { flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __esmMin = (n, _) => () => (n && (_ = n(n = 0)), _), __commonJSMin = (n, _) => () => (_ || n((_ = { exports: {} }).exports, _), _.exports), __export = (n) => {
	let _ = {};
	for (var E in n) __defProp(_, E, {
		get: n[E],
		enumerable: !0
	});
	return _;
}, __copyProps = (n, _, E, O) => {
	if (_ && typeof _ == "object" || typeof _ == "function") for (var A = __getOwnPropNames(_), j = 0, M = A.length, N; j < M; j++) N = A[j], !__hasOwnProp.call(n, N) && N !== E && __defProp(n, N, {
		get: ((n) => _[n]).bind(null, N),
		enumerable: !(O = __getOwnPropDesc(_, N)) || O.enumerable
	});
	return n;
}, __toESM = (n, _, E) => (E = n == null ? {} : __create(__getProtoOf(n)), __copyProps(_ || !n || !n.__esModule ? __defProp(E, "default", {
	value: n,
	enumerable: !0
}) : E, n)), __toCommonJS = (n) => __copyProps(__defProp({}, "__esModule", { value: !0 }), n);
function _objectWithoutPropertiesLoose(n, _) {
	if (n == null) return {};
	var E = {}, O = Object.keys(n), A, j;
	for (j = 0; j < O.length; j++) A = O[j], !(_.indexOf(A) >= 0) && (E[A] = n[A]);
	return E;
}
var _excluded$3 = ["color"], AlignBottomIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$3);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M9 3C9 2.44772 8.55229 2 8 2H7C6.44772 2 6 2.44772 6 3L6 14H1.5C1.22386 14 1 14.2239 1 14.5C1 14.7761 1.22386 15 1.5 15L6 15H9H13.5C13.7761 15 14 14.7761 14 14.5C14 14.2239 13.7761 14 13.5 14H9V3Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$4 = ["color"], AlignCenterHorizontallyIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$4);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M1.99988 6C1.44759 6 0.999877 6.44772 0.999877 7L0.999877 8C0.999877 8.55228 1.44759 9 1.99988 9L6.99988 9L6.99988 13.5C6.99988 13.7761 7.22374 14 7.49988 14C7.77602 14 7.99988 13.7761 7.99988 13.5L7.99988 9L12.9999 9C13.5522 9 13.9999 8.55228 13.9999 8L13.9999 7C13.9999 6.44772 13.5522 6 12.9999 6L7.99988 6L7.99988 1.5C7.99988 1.22386 7.77602 1 7.49988 1C7.22373 1 6.99988 1.22386 6.99988 1.5L6.99988 6L1.99988 6Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$5 = ["color"], AlignCenterVerticallyIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$5);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M6.99988 1C6.44759 1 5.99988 1.44772 5.99988 2V7H1.49988C1.22374 7 0.999878 7.22386 0.999878 7.5C0.999878 7.77614 1.22374 8 1.49988 8H5.99988V13C5.99988 13.5523 6.44759 14 6.99988 14H7.99988C8.55216 14 8.99988 13.5523 8.99988 13V8H13.4999C13.776 8 13.9999 7.77614 13.9999 7.5C13.9999 7.22386 13.776 7 13.4999 7H8.99988V2C8.99988 1.44772 8.55216 1 7.99988 1L6.99988 1Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$6 = ["color"], AlignLeftIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$6);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M0.499995 0.999995C0.223855 0.999995 -5.58458e-07 1.22385 -5.46388e-07 1.49999L-2.18554e-08 13.4999C-9.78492e-09 13.776 0.223855 13.9999 0.499995 13.9999C0.776136 13.9999 0.999991 13.776 0.999991 13.4999L0.999991 8.99993L12 8.99993C12.5523 8.99993 13 8.55222 13 7.99993L13 6.99994C13 6.44766 12.5523 5.99995 12 5.99995L0.999991 5.99995L0.999991 1.49999C0.999991 1.22385 0.776135 0.999995 0.499995 0.999995Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$7 = ["color"], AlignRightIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$7);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M14.4999 1C14.2237 1 13.9999 1.22386 13.9999 1.5L13.9999 6L2.99988 6C2.44759 6 1.99988 6.44772 1.99988 7L1.99988 8C1.99988 8.55228 2.44759 9 2.99988 9L13.9999 9L13.9999 13.5C13.9999 13.7761 14.2237 14 14.4999 14C14.776 14 14.9999 13.7761 14.9999 13.5L14.9999 9L14.9999 6L14.9999 1.5C14.9999 1.22386 14.776 1 14.4999 1Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$8 = ["color"], AlignTopIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$8);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M1.5 0C1.22386 0 1 0.223858 1 0.5C1 0.776142 1.22386 1 1.5 1H6V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V1H13.5C13.7761 1 14 0.776142 14 0.5C14 0.223858 13.7761 0 13.5 0H9H6H1.5Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$F = ["color"], BoxIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$F);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M12.5 2H2.5C2.22386 2 2 2.22386 2 2.5V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V2.5C13 2.22386 12.7761 2 12.5 2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$T = ["color"], CheckIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$T);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$Y = ["color"], ChevronRightIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$Y);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1r = ["color"], Cross2Icon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$1r);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1M = ["color"], DoubleArrowLeftIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$1M);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1N = ["color"], DoubleArrowRightIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$1N);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$25 = ["color"], EyeNoneIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$25);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$26 = ["color"], EyeOpenIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$26);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$2l = ["color"], GearIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$2l);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$2C = ["color"], ImageIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$2C);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3w = ["color"], PlayIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$3w);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3x = ["color"], PlusIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$3x);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3V = ["color"], Share1Icon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$3V);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$42 = ["color"], SpaceEvenlyHorizontallyIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$42);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M14.4999 0.999992C14.2237 0.999992 13.9999 1.22385 13.9999 1.49999L13.9999 13.4999C13.9999 13.776 14.2237 13.9999 14.4999 13.9999C14.776 13.9999 14.9999 13.776 14.9999 13.4999L14.9999 1.49999C14.9999 1.22385 14.776 0.999992 14.4999 0.999992ZM0.499996 0.999992C0.223856 0.999992 -9.78509e-09 1.22385 -2.18556e-08 1.49999L4.07279e-07 13.4999C3.95208e-07 13.776 0.223855 13.9999 0.499996 13.9999C0.776136 13.9999 0.999992 13.776 0.999992 13.4999L0.999992 1.49999C0.999992 1.22385 0.776136 0.999992 0.499996 0.999992ZM1.99998 6.99994C1.99998 6.44766 2.44769 5.99995 2.99998 5.99995L5.99995 5.99995C6.55223 5.99995 6.99994 6.44766 6.99994 6.99994L6.99994 7.99993C6.99994 8.55221 6.55223 8.99992 5.99995 8.99992L2.99998 8.99992C2.4477 8.99992 1.99998 8.55221 1.99998 7.99993L1.99998 6.99994ZM8.99993 5.99995C8.44765 5.99995 7.99993 6.44766 7.99993 6.99994L7.99993 7.99993C7.99993 8.55221 8.44765 8.99992 8.99993 8.99992L11.9999 8.99992C12.5522 8.99992 12.9999 8.55221 12.9999 7.99993L12.9999 6.99994C12.9999 6.44766 12.5522 5.99995 11.9999 5.99995L8.99993 5.99995Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$43 = ["color"], SpaceEvenlyVerticallyIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$43);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M0.999878 0.5C0.999878 0.223858 1.22374 0 1.49988 0H13.4999C13.776 0 13.9999 0.223858 13.9999 0.5C13.9999 0.776142 13.776 1 13.4999 1H1.49988C1.22374 1 0.999878 0.776142 0.999878 0.5ZM7 2C6.44772 2 6 2.44772 6 3V6C6 6.55228 6.44772 7 7 7H8C8.55228 7 9 6.55228 9 6V3C9 2.44772 8.55228 2 8 2H7ZM7 8C6.44772 8 6 8.44771 6 9V12C6 12.5523 6.44772 13 7 13H8C8.55228 13 9 12.5523 9 12V9C9 8.44772 8.55228 8 8 8H7ZM1.49988 14C1.22374 14 0.999878 14.2239 0.999878 14.5C0.999878 14.7761 1.22374 15 1.49988 15H13.4999C13.776 15 13.9999 14.7761 13.9999 14.5C13.9999 14.2239 13.776 14 13.4999 14H1.49988Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$4d = ["color"], StopIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$4d);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M2 3C2 2.44772 2.44772 2 3 2H12C12.5523 2 13 2.44772 13 3V12C13 12.5523 12.5523 13 12 13H3C2.44772 13 2 12.5523 2 12V3ZM12 3H3V12H12V3Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$4n = ["color"], TextIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$4n);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M3.94993 2.95002L3.94993 4.49998C3.94993 4.74851 3.74845 4.94998 3.49993 4.94998C3.2514 4.94998 3.04993 4.74851 3.04993 4.49998V2.50004C3.04993 2.45246 3.05731 2.40661 3.07099 2.36357C3.12878 2.18175 3.29897 2.05002 3.49993 2.05002H11.4999C11.6553 2.05002 11.7922 2.12872 11.8731 2.24842C11.9216 2.32024 11.9499 2.40682 11.9499 2.50002L11.9499 2.50004V4.49998C11.9499 4.74851 11.7485 4.94998 11.4999 4.94998C11.2514 4.94998 11.0499 4.74851 11.0499 4.49998V2.95002H8.04993V12.05H9.25428C9.50281 12.05 9.70428 12.2515 9.70428 12.5C9.70428 12.7486 9.50281 12.95 9.25428 12.95H5.75428C5.50575 12.95 5.30428 12.7486 5.30428 12.5C5.30428 12.2515 5.50575 12.05 5.75428 12.05H6.94993V2.95002H3.94993Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$4G = ["color"], TrashIcon = /* @__PURE__ */ forwardRef(function(n, _) {
	var E = n.color, O = E === void 0 ? "currentColor" : E, A = _objectWithoutPropertiesLoose(n, _excluded$4G);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, A, { ref: _ }), createElement("path", {
		d: "M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z",
		fill: O,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
});
function setRef$1(n, _) {
	if (typeof n == "function") return n(_);
	n != null && (n.current = _);
}
function composeRefs$1(...n) {
	return (_) => {
		let E = !1, O = n.map((n) => {
			let O = setRef$1(n, _);
			return !E && typeof O == "function" && (E = !0), O;
		});
		if (E) return () => {
			for (let _ = 0; _ < O.length; _++) {
				let E = O[_];
				typeof E == "function" ? E() : setRef$1(n[_], null);
			}
		};
	};
}
function useComposedRefs$1(..._) {
	return React$1.useCallback(composeRefs$1(..._), _);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(_) {
	let E = /* @__PURE__ */ createSlotClone(_), O = React$1.forwardRef((_, O) => {
		let { children: A, ...j } = _, M = React$1.Children.toArray(A), N = M.find(isSlottable);
		if (N) {
			let _ = N.props.children, A = M.map((E) => E === N ? React$1.Children.count(_) > 1 ? React$1.Children.only(null) : React$1.isValidElement(_) ? _.props.children : null : E);
			return /* @__PURE__ */ jsx(E, {
				...j,
				ref: O,
				children: React$1.isValidElement(_) ? React$1.cloneElement(_, void 0, A) : null
			});
		}
		return /* @__PURE__ */ jsx(E, {
			...j,
			ref: O,
			children: A
		});
	});
	return O.displayName = `${_}.Slot`, O;
}
var Slot$3 = /* @__PURE__ */ createSlot("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(_) {
	let E = React$1.forwardRef((_, E) => {
		let { children: O, ...A } = _;
		if (React$1.isValidElement(O)) {
			let _ = getElementRef$1(O), j = mergeProps(A, O.props);
			return O.type !== React$1.Fragment && (j.ref = E ? composeRefs$1(E, _) : _), React$1.cloneElement(O, j);
		}
		return React$1.Children.count(O) > 1 ? React$1.Children.only(null) : null;
	});
	return E.displayName = `${_}.SlotClone`, E;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(n) {
	let _ = ({ children: n }) => /* @__PURE__ */ jsx(Fragment$1, { children: n });
	return _.displayName = `${n}.Slottable`, _.__radixId = SLOTTABLE_IDENTIFIER, _;
}
var Slottable$1 = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(_) {
	return React$1.isValidElement(_) && typeof _.type == "function" && "__radixId" in _.type && _.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(n, _) {
	let E = { ..._ };
	for (let O in _) {
		let A = n[O], j = _[O];
		/^on[A-Z]/.test(O) ? A && j ? E[O] = (...n) => {
			let _ = j(...n);
			return A(...n), _;
		} : A && (E[O] = A) : O === "style" ? E[O] = {
			...A,
			...j
		} : O === "className" && (E[O] = [A, j].filter(Boolean).join(" "));
	}
	return {
		...n,
		...E
	};
}
function getElementRef$1(n) {
	let _ = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, E = _ && "isReactWarning" in _ && _.isReactWarning;
	return E ? n.ref : (_ = Object.getOwnPropertyDescriptor(n, "ref")?.get, E = _ && "isReactWarning" in _ && _.isReactWarning, E ? n.props.ref : n.props.ref || n.ref);
}
var Primitive = [
	"a",
	"button",
	"div",
	"form",
	"h2",
	"h3",
	"img",
	"input",
	"label",
	"li",
	"nav",
	"ol",
	"p",
	"select",
	"span",
	"svg",
	"ul"
].reduce((_, E) => {
	let O = /* @__PURE__ */ createSlot(`Primitive.${E}`), A = React$1.forwardRef((n, _) => {
		let { asChild: A, ...j } = n, M = A ? O : E;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(M, {
			...j,
			ref: _
		});
	});
	return A.displayName = `Primitive.${E}`, {
		..._,
		[E]: A
	};
}, {});
function dispatchDiscreteCustomEvent(n, _) {
	n && ReactDOM$1.flushSync(() => n.dispatchEvent(_));
}
var VISUALLY_HIDDEN_STYLES = Object.freeze({
	position: "absolute",
	border: 0,
	width: 1,
	height: 1,
	padding: 0,
	margin: -1,
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	wordWrap: "normal"
}), NAME$1 = "VisuallyHidden", VisuallyHidden = React$1.forwardRef((n, _) => /* @__PURE__ */ jsx(Primitive.span, {
	...n,
	ref: _,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...n.style
	}
}));
VisuallyHidden.displayName = NAME$1;
var Root$5 = VisuallyHidden;
function createContext2(_, E) {
	let O = React$1.createContext(E), A = (_) => {
		let { children: E, ...A } = _, j = React$1.useMemo(() => A, Object.values(A));
		return /* @__PURE__ */ jsx(O.Provider, {
			value: j,
			children: E
		});
	};
	A.displayName = _ + "Provider";
	function j(A) {
		let j = React$1.useContext(O);
		if (j) return j;
		if (E !== void 0) return E;
		throw Error(`\`${A}\` must be used within \`${_}\``);
	}
	return [A, j];
}
function createContextScope(_, E = []) {
	let O = [];
	function A(E, A) {
		let j = React$1.createContext(A), M = O.length;
		O = [...O, A];
		let N = (E) => {
			let { scope: O, children: A, ...N } = E, P = O?.[_]?.[M] || j, z = React$1.useMemo(() => N, Object.values(N));
			return /* @__PURE__ */ jsx(P.Provider, {
				value: z,
				children: A
			});
		};
		N.displayName = E + "Provider";
		function P(O, N) {
			let P = N?.[_]?.[M] || j, z = React$1.useContext(P);
			if (z) return z;
			if (A !== void 0) return A;
			throw Error(`\`${O}\` must be used within \`${E}\``);
		}
		return [N, P];
	}
	let j = () => {
		let E = O.map((_) => React$1.createContext(_));
		return function(O) {
			let A = O?.[_] || E;
			return React$1.useMemo(() => ({ [`__scope${_}`]: {
				...O,
				[_]: A
			} }), [O, A]);
		};
	};
	return j.scopeName = _, [A, composeContextScopes(j, ...E)];
}
function composeContextScopes(..._) {
	let E = _[0];
	if (_.length === 1) return E;
	let O = () => {
		let O = _.map((n) => ({
			useScope: n(),
			scopeName: n.scopeName
		}));
		return function(_) {
			let A = O.reduce((n, { useScope: E, scopeName: O }) => {
				let A = E(_)[`__scope${O}`];
				return {
					...n,
					...A
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${E.scopeName}`]: A }), [A]);
		};
	};
	return O.scopeName = E.scopeName, O;
}
function createCollection(n) {
	let E = n + "CollectionProvider", [O, A] = createContextScope(E), [j, M] = O(E, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), N = (n) => {
		let { scope: E, children: O } = n, A = React.useRef(null), M = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(j, {
			scope: E,
			itemMap: M,
			collectionRef: A,
			children: O
		});
	};
	N.displayName = E;
	let P = n + "CollectionSlot", z = /* @__PURE__ */ createSlot(P), B = React.forwardRef((n, _) => {
		let { scope: E, children: O } = n;
		return /* @__PURE__ */ jsx(z, {
			ref: useComposedRefs$1(_, M(P, E).collectionRef),
			children: O
		});
	});
	B.displayName = P;
	let H = n + "CollectionItemSlot", U = "data-radix-collection-item", W = /* @__PURE__ */ createSlot(H), G = React.forwardRef((n, E) => {
		let { scope: O, children: A, ...j } = n, N = React.useRef(null), P = useComposedRefs$1(E, N), z = M(H, O);
		return React.useEffect(() => (z.itemMap.set(N, {
			ref: N,
			...j
		}), () => void z.itemMap.delete(N))), /* @__PURE__ */ jsx(W, {
			[U]: "",
			ref: P,
			children: A
		});
	});
	G.displayName = H;
	function Z(E) {
		let O = M(n + "CollectionConsumer", E);
		return React.useCallback(() => {
			let n = O.collectionRef.current;
			if (!n) return [];
			let _ = Array.from(n.querySelectorAll(`[${U}]`));
			return Array.from(O.itemMap.values()).sort((n, E) => _.indexOf(n.ref.current) - _.indexOf(E.ref.current));
		}, [O.collectionRef, O.itemMap]);
	}
	return [
		{
			Provider: N,
			Slot: B,
			ItemSlot: G
		},
		Z,
		A
	];
}
typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(n, _, { checkForDefaultPrevented: E = !0 } = {}) {
	return function(O) {
		if (n?.(O), E === !1 || !O.defaultPrevented) return _?.(O);
	};
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: _, defaultProp: E, onChange: O = () => {}, caller: A }) {
	let [j, M, N] = useUncontrolledState({
		defaultProp: E,
		onChange: O
	}), P = _ !== void 0, z = P ? _ : j;
	{
		let E = React$1.useRef(_ !== void 0);
		React$1.useEffect(() => {
			let n = E.current;
			if (n !== P) {
				let _ = n ? "controlled" : "uncontrolled", E = P ? "controlled" : "uncontrolled";
				console.warn(`${A} is changing from ${_} to ${E}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			E.current = P;
		}, [P, A]);
	}
	return [z, React$1.useCallback((n) => {
		if (P) {
			let E = isFunction(n) ? n(_) : n;
			E !== _ && N.current?.(E);
		} else M(n);
	}, [
		P,
		_,
		M,
		N
	])];
}
function useUncontrolledState({ defaultProp: _, onChange: E }) {
	let [O, A] = React$1.useState(_), j = React$1.useRef(O), M = React$1.useRef(E);
	return useInsertionEffect$1(() => {
		M.current = E;
	}, [E]), React$1.useEffect(() => {
		j.current !== O && (M.current?.(O), j.current = O);
	}, [O, j]), [
		O,
		A,
		M
	];
}
function isFunction(n) {
	return typeof n == "function";
}
function useStateMachine$1(_, E) {
	return React$1.useReducer((n, _) => E[n][_] ?? n, _);
}
var Presence = (_) => {
	let { present: E, children: O } = _, A = usePresence$1(E), j = typeof O == "function" ? O({ present: A.isPresent }) : React$1.Children.only(O), M = useComposedRefs$1(A.ref, getElementRef(j));
	return typeof O == "function" || A.isPresent ? React$1.cloneElement(j, { ref: M }) : null;
};
Presence.displayName = "Presence";
function usePresence$1(_) {
	let [E, O] = React$1.useState(), A = React$1.useRef(null), j = React$1.useRef(_), M = React$1.useRef("none"), [N, P] = useStateMachine$1(_ ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	return React$1.useEffect(() => {
		let n = getAnimationName(A.current);
		M.current = N === "mounted" ? n : "none";
	}, [N]), useLayoutEffect2(() => {
		let n = A.current, E = j.current;
		if (E !== _) {
			let O = M.current, A = getAnimationName(n);
			_ ? P("MOUNT") : A === "none" || n?.display === "none" ? P("UNMOUNT") : P(E && O !== A ? "ANIMATION_OUT" : "UNMOUNT"), j.current = _;
		}
	}, [_, P]), useLayoutEffect2(() => {
		if (E) {
			let n, _ = E.ownerDocument.defaultView ?? window, O = (O) => {
				let M = getAnimationName(A.current).includes(CSS.escape(O.animationName));
				if (O.target === E && M && (P("ANIMATION_END"), !j.current)) {
					let O = E.style.animationFillMode;
					E.style.animationFillMode = "forwards", n = _.setTimeout(() => {
						E.style.animationFillMode === "forwards" && (E.style.animationFillMode = O);
					});
				}
			}, N = (n) => {
				n.target === E && (M.current = getAnimationName(A.current));
			};
			return E.addEventListener("animationstart", N), E.addEventListener("animationcancel", O), E.addEventListener("animationend", O), () => {
				_.clearTimeout(n), E.removeEventListener("animationstart", N), E.removeEventListener("animationcancel", O), E.removeEventListener("animationend", O);
			};
		} else P("ANIMATION_END");
	}, [E, P]), {
		isPresent: ["mounted", "unmountSuspended"].includes(N),
		ref: React$1.useCallback((n) => {
			A.current = n ? getComputedStyle(n) : null, O(n);
		}, [])
	};
}
function getAnimationName(n) {
	return n?.animationName || "none";
}
function getElementRef(n) {
	let _ = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, E = _ && "isReactWarning" in _ && _.isReactWarning;
	return E ? n.ref : (_ = Object.getOwnPropertyDescriptor(n, "ref")?.get, E = _ && "isReactWarning" in _ && _.isReactWarning, E ? n.props.ref : n.props.ref || n.ref);
}
var useReactId = React$1.useId || (() => void 0), count$1 = 0;
function useId$1(_) {
	let [E, O] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		_ || O((n) => n ?? String(count$1++));
	}, [_]), _ || (E ? `radix-${E}` : "");
}
var DirectionContext = React$1.createContext(void 0), DirectionProvider = (n) => {
	let { dir: _, children: E } = n;
	return /* @__PURE__ */ jsx(DirectionContext.Provider, {
		value: _,
		children: E
	});
};
function useDirection(_) {
	let E = React$1.useContext(DirectionContext);
	return _ || E || "ltr";
}
var Provider$1 = DirectionProvider;
function useCallbackRef(_) {
	let E = React$1.useRef(_);
	return React$1.useEffect(() => {
		E.current = _;
	}), React$1.useMemo(() => (...n) => E.current?.(...n), []);
}
function useEscapeKeydown(_, E = globalThis?.document) {
	let O = useCallbackRef(_);
	React$1.useEffect(() => {
		let n = (n) => {
			n.key === "Escape" && O(n);
		};
		return E.addEventListener("keydown", n, { capture: !0 }), () => E.removeEventListener("keydown", n, { capture: !0 });
	}, [O, E]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((_, E) => {
	let { disableOutsidePointerEvents: O = !1, onEscapeKeyDown: A, onPointerDownOutside: j, onFocusOutside: M, onInteractOutside: N, onDismiss: P, ...z } = _, B = React$1.useContext(DismissableLayerContext), [H, U] = React$1.useState(null), W = H?.ownerDocument ?? globalThis?.document, [, G] = React$1.useState({}), Z = useComposedRefs$1(E, (n) => U(n)), Mj = Array.from(B.layers), [Nj] = [...B.layersWithOutsidePointerEventsDisabled].slice(-1), Pj = Mj.indexOf(Nj), Fj = H ? Mj.indexOf(H) : -1, Ij = B.layersWithOutsidePointerEventsDisabled.size > 0, Lj = Fj >= Pj, Rj = usePointerDownOutside((n) => {
		let _ = n.target, E = [...B.branches].some((n) => n.contains(_));
		!Lj || E || (j?.(n), N?.(n), n.defaultPrevented || P?.());
	}, W), zj = useFocusOutside((n) => {
		let _ = n.target;
		[...B.branches].some((n) => n.contains(_)) || (M?.(n), N?.(n), n.defaultPrevented || P?.());
	}, W);
	return useEscapeKeydown((n) => {
		Fj === B.layers.size - 1 && (A?.(n), !n.defaultPrevented && P && (n.preventDefault(), P()));
	}, W), React$1.useEffect(() => {
		if (H) return O && (B.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = W.body.style.pointerEvents, W.body.style.pointerEvents = "none"), B.layersWithOutsidePointerEventsDisabled.add(H)), B.layers.add(H), dispatchUpdate(), () => {
			O && B.layersWithOutsidePointerEventsDisabled.size === 1 && (W.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		H,
		W,
		O,
		B
	]), React$1.useEffect(() => () => {
		H && (B.layers.delete(H), B.layersWithOutsidePointerEventsDisabled.delete(H), dispatchUpdate());
	}, [H, B]), React$1.useEffect(() => {
		let n = () => G({});
		return document.addEventListener(CONTEXT_UPDATE, n), () => document.removeEventListener(CONTEXT_UPDATE, n);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...z,
		ref: Z,
		style: {
			pointerEvents: Ij ? Lj ? "auto" : "none" : void 0,
			..._.style
		},
		onFocusCapture: composeEventHandlers(_.onFocusCapture, zj.onFocusCapture),
		onBlurCapture: composeEventHandlers(_.onBlurCapture, zj.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(_.onPointerDownCapture, Rj.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((_, E) => {
	let O = React$1.useContext(DismissableLayerContext), A = React$1.useRef(null), j = useComposedRefs$1(E, A);
	return React$1.useEffect(() => {
		let n = A.current;
		if (n) return O.branches.add(n), () => {
			O.branches.delete(n);
		};
	}, [O.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		..._,
		ref: j
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(_, E = globalThis?.document) {
	let O = useCallbackRef(_), A = React$1.useRef(!1), j = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let n = (n) => {
			if (n.target && !A.current) {
				let _ = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, O, A, { discrete: !0 });
				}, A = { originalEvent: n };
				n.pointerType === "touch" ? (E.removeEventListener("click", j.current), j.current = _, E.addEventListener("click", j.current, { once: !0 })) : _();
			} else E.removeEventListener("click", j.current);
			A.current = !1;
		}, _ = window.setTimeout(() => {
			E.addEventListener("pointerdown", n);
		}, 0);
		return () => {
			window.clearTimeout(_), E.removeEventListener("pointerdown", n), E.removeEventListener("click", j.current);
		};
	}, [E, O]), { onPointerDownCapture: () => A.current = !0 };
}
function useFocusOutside(_, E = globalThis?.document) {
	let O = useCallbackRef(_), A = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let n = (n) => {
			n.target && !A.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, O, { originalEvent: n }, { discrete: !1 });
		};
		return E.addEventListener("focusin", n), () => E.removeEventListener("focusin", n);
	}, [E, O]), {
		onFocusCapture: () => A.current = !0,
		onBlurCapture: () => A.current = !1
	};
}
function dispatchUpdate() {
	let n = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(n);
}
function handleAndDispatchCustomEvent(n, _, E, { discrete: O }) {
	let A = E.originalEvent.target, j = new CustomEvent(n, {
		bubbles: !1,
		cancelable: !0,
		detail: E
	});
	_ && A.addEventListener(n, _, { once: !0 }), O ? dispatchDiscreteCustomEvent(A, j) : A.dispatchEvent(j);
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS$1 = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((_, E) => {
	let { loop: O = !1, trapped: A = !1, onMountAutoFocus: j, onUnmountAutoFocus: M, ...N } = _, [P, z] = React$1.useState(null), B = useCallbackRef(j), H = useCallbackRef(M), U = React$1.useRef(null), W = useComposedRefs$1(E, (n) => z(n)), G = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (A) {
			let n = function(n) {
				if (G.paused || !P) return;
				let _ = n.target;
				P.contains(_) ? U.current = _ : focus(U.current, { select: !0 });
			}, _ = function(n) {
				if (G.paused || !P) return;
				let _ = n.relatedTarget;
				_ !== null && (P.contains(_) || focus(U.current, { select: !0 }));
			}, E = function(n) {
				if (document.activeElement === document.body) for (let _ of n) _.removedNodes.length > 0 && focus(P);
			};
			document.addEventListener("focusin", n), document.addEventListener("focusout", _);
			let O = new MutationObserver(E);
			return P && O.observe(P, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", n), document.removeEventListener("focusout", _), O.disconnect();
			};
		}
	}, [
		A,
		P,
		G.paused
	]), React$1.useEffect(() => {
		if (P) {
			focusScopesStack.add(G);
			let n = document.activeElement;
			if (!P.contains(n)) {
				let _ = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
				P.addEventListener(AUTOFOCUS_ON_MOUNT, B), P.dispatchEvent(_), _.defaultPrevented || (focusFirst$2(removeLinks(getTabbableCandidates(P)), { select: !0 }), document.activeElement === n && focus(P));
			}
			return () => {
				P.removeEventListener(AUTOFOCUS_ON_MOUNT, B), setTimeout(() => {
					let _ = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
					P.addEventListener(AUTOFOCUS_ON_UNMOUNT, H), P.dispatchEvent(_), _.defaultPrevented || focus(n ?? document.body, { select: !0 }), P.removeEventListener(AUTOFOCUS_ON_UNMOUNT, H), focusScopesStack.remove(G);
				}, 0);
			};
		}
	}, [
		P,
		B,
		H,
		G
	]);
	let Z = React$1.useCallback((n) => {
		if (!O && !A || G.paused) return;
		let _ = n.key === "Tab" && !n.altKey && !n.ctrlKey && !n.metaKey, E = document.activeElement;
		if (_ && E) {
			let _ = n.currentTarget, [A, j] = getTabbableEdges(_);
			A && j ? !n.shiftKey && E === j ? (n.preventDefault(), O && focus(A, { select: !0 })) : n.shiftKey && E === A && (n.preventDefault(), O && focus(j, { select: !0 })) : E === _ && n.preventDefault();
		}
	}, [
		O,
		A,
		G.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...N,
		ref: W,
		onKeyDown: Z
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(n, { select: _ = !1 } = {}) {
	let E = document.activeElement;
	for (let O of n) if (focus(O, { select: _ }), document.activeElement !== E) return;
}
function getTabbableEdges(n) {
	let _ = getTabbableCandidates(n);
	return [findVisible(_, n), findVisible(_.reverse(), n)];
}
function getTabbableCandidates(n) {
	let _ = [], E = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
		let _ = n.tagName === "INPUT" && n.type === "hidden";
		return n.disabled || n.hidden || _ ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; E.nextNode();) _.push(E.currentNode);
	return _;
}
function findVisible(n, _) {
	for (let E of n) if (!isHidden(E, { upTo: _ })) return E;
}
function isHidden(n, { upTo: _ }) {
	if (getComputedStyle(n).visibility === "hidden") return !0;
	for (; n;) {
		if (_ !== void 0 && n === _) return !1;
		if (getComputedStyle(n).display === "none") return !0;
		n = n.parentElement;
	}
	return !1;
}
function isSelectableInput(n) {
	return n instanceof HTMLInputElement && "select" in n;
}
function focus(n, { select: _ = !1 } = {}) {
	if (n && n.focus) {
		let E = document.activeElement;
		n.focus({ preventScroll: !0 }), n !== E && isSelectableInput(n) && _ && n.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let n = [];
	return {
		add(_) {
			let E = n[0];
			_ !== E && E?.pause(), n = arrayRemove(n, _), n.unshift(_);
		},
		remove(_) {
			n = arrayRemove(n, _), n[0]?.resume();
		}
	};
}
function arrayRemove(n, _) {
	let E = [...n], O = E.indexOf(_);
	return O !== -1 && E.splice(O, 1), E;
}
function removeLinks(n) {
	return n.filter((n) => n.tagName !== "A");
}
var PORTAL_NAME$6 = "Portal", Portal = React$1.forwardRef((_, E) => {
	let { container: O, ...A } = _, [j, M] = React$1.useState(!1);
	useLayoutEffect2(() => M(!0), []);
	let N = O || j && globalThis?.document?.body;
	return N ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...A,
		ref: E
	}), N) : null;
});
Portal.displayName = PORTAL_NAME$6;
var count = 0;
function useFocusGuards() {
	React$1.useEffect(() => {
		let n = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", n[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", n[1] ?? createFocusGuard()), count++, () => {
			count === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((n) => n.remove()), count--;
		};
	}, []);
}
function createFocusGuard() {
	let n = document.createElement("span");
	return n.setAttribute("data-radix-focus-guard", ""), n.tabIndex = 0, n.style.outline = "none", n.style.opacity = "0", n.style.position = "fixed", n.style.pointerEvents = "none", n;
}
var __assign$2 = function() {
	return __assign$2 = Object.assign || function(n) {
		for (var _, E = 1, O = arguments.length; E < O; E++) for (var A in _ = arguments[E], _) Object.prototype.hasOwnProperty.call(_, A) && (n[A] = _[A]);
		return n;
	}, __assign$2.apply(this, arguments);
};
function __rest(n, _) {
	var E = {};
	for (var O in n) Object.prototype.hasOwnProperty.call(n, O) && _.indexOf(O) < 0 && (E[O] = n[O]);
	if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var A = 0, O = Object.getOwnPropertySymbols(n); A < O.length; A++) _.indexOf(O[A]) < 0 && Object.prototype.propertyIsEnumerable.call(n, O[A]) && (E[O[A]] = n[O[A]]);
	return E;
}
function __spreadArray(n, _, E) {
	if (E || arguments.length === 2) for (var O = 0, A = _.length, j; O < A; O++) (j || !(O in _)) && (j ||= Array.prototype.slice.call(_, 0, O), j[O] = _[O]);
	return n.concat(j || Array.prototype.slice.call(_));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(n, _) {
	return typeof n == "function" ? n(_) : n && (n.current = _), n;
}
function useCallbackRef$1(n, _) {
	var E = useState(function() {
		return {
			value: n,
			callback: _,
			facade: {
				get current() {
					return E.value;
				},
				set current(n) {
					var _ = E.value;
					_ !== n && (E.value = n, E.callback(n, _));
				}
			}
		};
	})[0];
	return E.callback = _, E.facade;
}
var useIsomorphicLayoutEffect$1 = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(n, _) {
	var E = useCallbackRef$1(_ || null, function(_) {
		return n.forEach(function(n) {
			return assignRef(n, _);
		});
	});
	return useIsomorphicLayoutEffect$1(function() {
		var _ = currentValues.get(E);
		if (_) {
			var O = new Set(_), A = new Set(n), j = E.current;
			O.forEach(function(n) {
				A.has(n) || assignRef(n, null);
			}), A.forEach(function(n) {
				O.has(n) || assignRef(n, j);
			});
		}
		currentValues.set(E, n);
	}, [n]), E;
}
function ItoI(n) {
	return n;
}
function innerCreateMedium(n, _) {
	_ === void 0 && (_ = ItoI);
	var E = [], O = !1;
	return {
		read: function() {
			if (O) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return E.length ? E[E.length - 1] : n;
		},
		useMedium: function(n) {
			var A = _(n, O);
			return E.push(A), function() {
				E = E.filter(function(n) {
					return n !== A;
				});
			};
		},
		assignSyncMedium: function(n) {
			for (O = !0; E.length;) {
				var _ = E;
				E = [], _.forEach(n);
			}
			E = {
				push: function(_) {
					return n(_);
				},
				filter: function() {
					return E;
				}
			};
		},
		assignMedium: function(n) {
			O = !0;
			var _ = [];
			if (E.length) {
				var A = E;
				E = [], A.forEach(n), _ = E;
			}
			var j = function() {
				var E = _;
				_ = [], E.forEach(n);
			}, M = function() {
				return Promise.resolve().then(j);
			};
			M(), E = {
				push: function(n) {
					_.push(n), M();
				},
				filter: function(n) {
					return _ = _.filter(n), E;
				}
			};
		}
	};
}
function createSidecarMedium(n) {
	n === void 0 && (n = {});
	var _ = innerCreateMedium(null);
	return _.options = __assign$2({
		async: !0,
		ssr: !1
	}, n), _;
}
var SideCar = function(_) {
	var E = _.sideCar, O = __rest(_, ["sideCar"]);
	if (!E) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var A = E.read();
	if (!A) throw Error("Sidecar medium not found");
	return React$1.createElement(A, __assign$2({}, O));
};
SideCar.isSideCarExport = !0;
function exportSidecar(n, _) {
	return n.useMedium(_), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(_, E) {
	var O = React$1.useRef(null), A = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), j = A[0], M = A[1], N = _.forwardProps, P = _.children, z = _.className, B = _.removeScrollBar, H = _.enabled, U = _.shards, W = _.sideCar, G = _.noRelative, Z = _.noIsolation, Mj = _.inert, Nj = _.allowPinchZoom, Pj = _.as, Fj = Pj === void 0 ? "div" : Pj, Ij = _.gapMode, Lj = __rest(_, [
		"forwardProps",
		"children",
		"className",
		"removeScrollBar",
		"enabled",
		"shards",
		"sideCar",
		"noRelative",
		"noIsolation",
		"inert",
		"allowPinchZoom",
		"as",
		"gapMode"
	]), Rj = W, zj = useMergeRefs([O, E]), Bj = __assign$2(__assign$2({}, Lj), j);
	return React$1.createElement(React$1.Fragment, null, H && React$1.createElement(Rj, {
		sideCar: effectCar,
		removeScrollBar: B,
		shards: U,
		noRelative: G,
		noIsolation: Z,
		inert: Mj,
		setCallbacks: M,
		allowPinchZoom: !!Nj,
		lockRef: O,
		gapMode: Ij
	}), N ? React$1.cloneElement(React$1.Children.only(P), __assign$2(__assign$2({}, Bj), { ref: zj })) : React$1.createElement(Fj, __assign$2({}, Bj, {
		className: z,
		ref: zj
	}), P));
});
RemoveScroll.defaultProps = {
	enabled: !0,
	removeScrollBar: !0,
	inert: !1
}, RemoveScroll.classNames = {
	fullWidth: fullWidthClassName,
	zeroRight: zeroRightClassName
};
var currentNonce, getNonce = function() {
	if (currentNonce) return currentNonce;
	if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function makeStyleTag() {
	if (!document) return null;
	var n = document.createElement("style");
	n.type = "text/css";
	var _ = getNonce();
	return _ && n.setAttribute("nonce", _), n;
}
function injectStyles(n, _) {
	n.styleSheet ? n.styleSheet.cssText = _ : n.appendChild(document.createTextNode(_));
}
function insertStyleTag(n) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(n);
}
var stylesheetSingleton = function() {
	var n = 0, _ = null;
	return {
		add: function(E) {
			n == 0 && (_ = makeStyleTag()) && (injectStyles(_, E), insertStyleTag(_)), n++;
		},
		remove: function() {
			n--, !n && _ && (_.parentNode && _.parentNode.removeChild(_), _ = null);
		}
	};
}, styleHookSingleton = function() {
	var _ = stylesheetSingleton();
	return function(E, O) {
		React$1.useEffect(function() {
			return _.add(E), function() {
				_.remove();
			};
		}, [E && O]);
	};
}, styleSingleton = function() {
	var n = styleHookSingleton();
	return function(_) {
		var E = _.styles, O = _.dynamic;
		return n(E, O), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(n) {
	return parseInt(n || "", 10) || 0;
}, getOffset = function(n) {
	var _ = window.getComputedStyle(document.body), E = _[n === "padding" ? "paddingLeft" : "marginLeft"], O = _[n === "padding" ? "paddingTop" : "marginTop"], A = _[n === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(E),
		parse(O),
		parse(A)
	];
}, getGapWidth = function(n) {
	if (n === void 0 && (n = "margin"), typeof window > "u") return zeroGap;
	var _ = getOffset(n), E = document.documentElement.clientWidth, O = window.innerWidth;
	return {
		left: _[0],
		top: _[1],
		right: _[2],
		gap: Math.max(0, O - E + _[2] - _[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(n, _, E, O) {
	var A = n.left, j = n.top, M = n.right, N = n.gap;
	return E === void 0 && (E = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${O};
   padding-right: ${N}px ${O};
  }
  body[${lockAttribute}] {
    overflow: hidden ${O};
    overscroll-behavior: contain;
    ${[
		_ && `position: relative ${O};`,
		E === "margin" && `
    padding-left: ${A}px;
    padding-top: ${j}px;
    padding-right: ${M}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${N}px ${O};
    `,
		E === "padding" && `padding-right: ${N}px ${O};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${N}px ${O};
  }
  
  .${fullWidthClassName} {
    margin-right: ${N}px ${O};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${O};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${O};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${N}px;
  }
`;
}, getCurrentUseCounter = function() {
	var n = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(n) ? n : 0;
}, useLockAttribute = function() {
	React$1.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var n = getCurrentUseCounter() - 1;
			n <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, n.toString());
		};
	}, []);
}, RemoveScrollBar = function(_) {
	var E = _.noRelative, O = _.noImportant, A = _.gapMode, j = A === void 0 ? "margin" : A;
	useLockAttribute();
	var M = React$1.useMemo(function() {
		return getGapWidth(j);
	}, [j]);
	return React$1.createElement(Style, { styles: getStyles(M, !E, j, O ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(n) {
	return n.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(n, _) {
	if (!(n instanceof Element)) return !1;
	var E = window.getComputedStyle(n);
	return E[_] !== "hidden" && !(E.overflowY === E.overflowX && !alwaysContainsScroll(n) && E[_] === "visible");
}, elementCouldBeVScrolled = function(n) {
	return elementCanBeScrolled(n, "overflowY");
}, elementCouldBeHScrolled = function(n) {
	return elementCanBeScrolled(n, "overflowX");
}, locationCouldBeScrolled = function(n, _) {
	var E = _.ownerDocument, O = _;
	do {
		if (typeof ShadowRoot < "u" && O instanceof ShadowRoot && (O = O.host), elementCouldBeScrolled(n, O)) {
			var A = getScrollVariables(n, O);
			if (A[1] > A[2]) return !0;
		}
		O = O.parentNode;
	} while (O && O !== E.body);
	return !1;
}, getVScrollVariables = function(n) {
	return [
		n.scrollTop,
		n.scrollHeight,
		n.clientHeight
	];
}, getHScrollVariables = function(n) {
	return [
		n.scrollLeft,
		n.scrollWidth,
		n.clientWidth
	];
}, elementCouldBeScrolled = function(n, _) {
	return n === "v" ? elementCouldBeVScrolled(_) : elementCouldBeHScrolled(_);
}, getScrollVariables = function(n, _) {
	return n === "v" ? getVScrollVariables(_) : getHScrollVariables(_);
}, getDirectionFactor = function(n, _) {
	return n === "h" && _ === "rtl" ? -1 : 1;
}, handleScroll = function(n, _, E, O, A) {
	var j = getDirectionFactor(n, window.getComputedStyle(_).direction), M = j * O, N = E.target, P = _.contains(N), z = !1, B = M > 0, H = 0, U = 0;
	do {
		if (!N) break;
		var W = getScrollVariables(n, N), G = W[0], Z = W[1] - W[2] - j * G;
		(G || Z) && elementCouldBeScrolled(n, N) && (H += Z, U += G);
		var Mj = N.parentNode;
		N = Mj && Mj.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Mj.host : Mj;
	} while (!P && N !== document.body || P && (_.contains(N) || _ === N));
	return (B && (A && Math.abs(H) < 1 || !A && M > H) || !B && (A && Math.abs(U) < 1 || !A && -M > U)) && (z = !0), z;
}, getTouchXY = function(n) {
	return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(n) {
	return [n.deltaX, n.deltaY];
}, extractRef = function(n) {
	return n && "current" in n ? n.current : n;
}, deltaCompare = function(n, _) {
	return n[0] === _[0] && n[1] === _[1];
}, generateStyle = function(n) {
	return `
  .block-interactivity-${n} {pointer-events: none;}
  .allow-interactivity-${n} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(_) {
	var E = React$1.useRef([]), O = React$1.useRef([0, 0]), A = React$1.useRef(), j = React$1.useState(idCounter++)[0], M = React$1.useState(styleSingleton)[0], N = React$1.useRef(_);
	React$1.useEffect(function() {
		N.current = _;
	}, [_]), React$1.useEffect(function() {
		if (_.inert) {
			document.body.classList.add(`block-interactivity-${j}`);
			var n = __spreadArray([_.lockRef.current], (_.shards || []).map(extractRef), !0).filter(Boolean);
			return n.forEach(function(n) {
				return n.classList.add(`allow-interactivity-${j}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${j}`), n.forEach(function(n) {
					return n.classList.remove(`allow-interactivity-${j}`);
				});
			};
		}
	}, [
		_.inert,
		_.lockRef.current,
		_.shards
	]);
	var P = React$1.useCallback(function(n, _) {
		if ("touches" in n && n.touches.length === 2 || n.type === "wheel" && n.ctrlKey) return !N.current.allowPinchZoom;
		var E = getTouchXY(n), j = O.current, M = "deltaX" in n ? n.deltaX : j[0] - E[0], P = "deltaY" in n ? n.deltaY : j[1] - E[1], z, B = n.target, H = Math.abs(M) > Math.abs(P) ? "h" : "v";
		if ("touches" in n && H === "h" && B.type === "range") return !1;
		var U = window.getSelection(), W = U && U.anchorNode;
		if (W && (W === B || W.contains(B))) return !1;
		var G = locationCouldBeScrolled(H, B);
		if (!G) return !0;
		if (G ? z = H : (z = H === "v" ? "h" : "v", G = locationCouldBeScrolled(H, B)), !G) return !1;
		if (!A.current && "changedTouches" in n && (M || P) && (A.current = z), !z) return !0;
		var Z = A.current || z;
		return handleScroll(Z, _, n, Z === "h" ? M : P, !0);
	}, []), z = React$1.useCallback(function(n) {
		var _ = n;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== M)) {
			var O = "deltaY" in _ ? getDeltaXY(_) : getTouchXY(_), A = E.current.filter(function(n) {
				return n.name === _.type && (n.target === _.target || _.target === n.shadowParent) && deltaCompare(n.delta, O);
			})[0];
			if (A && A.should) {
				_.cancelable && _.preventDefault();
				return;
			}
			if (!A) {
				var j = (N.current.shards || []).map(extractRef).filter(Boolean).filter(function(n) {
					return n.contains(_.target);
				});
				(j.length > 0 ? P(_, j[0]) : !N.current.noIsolation) && _.cancelable && _.preventDefault();
			}
		}
	}, []), B = React$1.useCallback(function(n, _, O, A) {
		var j = {
			name: n,
			delta: _,
			target: O,
			should: A,
			shadowParent: getOutermostShadowParent(O)
		};
		E.current.push(j), setTimeout(function() {
			E.current = E.current.filter(function(n) {
				return n !== j;
			});
		}, 1);
	}, []), H = React$1.useCallback(function(n) {
		O.current = getTouchXY(n), A.current = void 0;
	}, []), U = React$1.useCallback(function(n) {
		B(n.type, getDeltaXY(n), n.target, P(n, _.lockRef.current));
	}, []), W = React$1.useCallback(function(n) {
		B(n.type, getTouchXY(n), n.target, P(n, _.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(M), _.setCallbacks({
			onScrollCapture: U,
			onWheelCapture: U,
			onTouchMoveCapture: W
		}), document.addEventListener("wheel", z, nonPassive), document.addEventListener("touchmove", z, nonPassive), document.addEventListener("touchstart", H, nonPassive), function() {
			lockStack = lockStack.filter(function(n) {
				return n !== M;
			}), document.removeEventListener("wheel", z, nonPassive), document.removeEventListener("touchmove", z, nonPassive), document.removeEventListener("touchstart", H, nonPassive);
		};
	}, []);
	var G = _.removeScrollBar, Z = _.inert;
	return React$1.createElement(React$1.Fragment, null, Z ? React$1.createElement(M, { styles: generateStyle(j) }) : null, G ? React$1.createElement(RemoveScrollBar, {
		noRelative: _.noRelative,
		gapMode: _.gapMode
	}) : null);
}
function getOutermostShadowParent(n) {
	for (var _ = null; n !== null;) n instanceof ShadowRoot && (_ = n.host, n = n.host), n = n.parentNode;
	return _;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(_, E) {
	return React$1.createElement(RemoveScroll, __assign$2({}, _, {
		ref: E,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, getDefaultParent = function(n) {
	return typeof document > "u" ? null : (Array.isArray(n) ? n[0] : n).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(n) {
	return n && (n.host || unwrapHost(n.parentNode));
}, correctTargets = function(n, _) {
	return _.map(function(_) {
		if (n.contains(_)) return _;
		var E = unwrapHost(_);
		return E && n.contains(E) ? E : (console.error("aria-hidden", _, "in not contained inside", n, ". Doing nothing"), null);
	}).filter(function(n) {
		return !!n;
	});
}, applyAttributeToOthers = function(n, _, E, O) {
	var A = correctTargets(_, Array.isArray(n) ? n : [n]);
	markerMap[E] || (markerMap[E] = /* @__PURE__ */ new WeakMap());
	var j = markerMap[E], M = [], N = /* @__PURE__ */ new Set(), P = new Set(A), z = function(n) {
		!n || N.has(n) || (N.add(n), z(n.parentNode));
	};
	A.forEach(z);
	var B = function(n) {
		!n || P.has(n) || Array.prototype.forEach.call(n.children, function(n) {
			if (N.has(n)) B(n);
			else try {
				var _ = n.getAttribute(O), A = _ !== null && _ !== "false", P = (counterMap.get(n) || 0) + 1, z = (j.get(n) || 0) + 1;
				counterMap.set(n, P), j.set(n, z), M.push(n), P === 1 && A && uncontrolledNodes.set(n, !0), z === 1 && n.setAttribute(E, "true"), A || n.setAttribute(O, "true");
			} catch (_) {
				console.error("aria-hidden: cannot operate on ", n, _);
			}
		});
	};
	return B(_), N.clear(), lockCount++, function() {
		M.forEach(function(n) {
			var _ = counterMap.get(n) - 1, A = j.get(n) - 1;
			counterMap.set(n, _), j.set(n, A), _ || (uncontrolledNodes.has(n) || n.removeAttribute(O), uncontrolledNodes.delete(n)), A || n.removeAttribute(E);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(n, _, E) {
	E === void 0 && (E = "data-aria-hidden");
	var O = Array.from(Array.isArray(n) ? n : [n]), A = _ || getDefaultParent(n);
	return A ? (O.push.apply(O, Array.from(A.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(O, A, E, "aria-hidden")) : function() {
		return null;
	};
}, DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog = (_) => {
	let { __scopeDialog: E, children: O, open: A, defaultOpen: j, onOpenChange: M, modal: N = !0 } = _, P = React$1.useRef(null), z = React$1.useRef(null), [B, H] = useControllableState({
		prop: A,
		defaultProp: j ?? !1,
		onChange: M,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: E,
		triggerRef: P,
		contentRef: z,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: B,
		onOpenChange: H,
		onOpenToggle: React$1.useCallback(() => H((n) => !n), [H]),
		modal: N,
		children: O
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$5 = "DialogTrigger", DialogTrigger = React$1.forwardRef((n, _) => {
	let { __scopeDialog: E, ...O } = n, A = useDialogContext(TRIGGER_NAME$5, E), j = useComposedRefs$1(_, A.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": A.open,
		"aria-controls": A.contentId,
		"data-state": getState$2(A.open),
		...O,
		ref: j,
		onClick: composeEventHandlers(n.onClick, A.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME$5;
var PORTAL_NAME$5 = "DialogPortal", [PortalProvider$3, usePortalContext$3] = createDialogContext(PORTAL_NAME$5, { forceMount: void 0 }), DialogPortal = (_) => {
	let { __scopeDialog: E, forceMount: O, children: A, container: j } = _, M = useDialogContext(PORTAL_NAME$5, E);
	return /* @__PURE__ */ jsx(PortalProvider$3, {
		scope: E,
		forceMount: O,
		children: React$1.Children.map(A, (n) => /* @__PURE__ */ jsx(Presence, {
			present: O || M.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: j,
				children: n
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME$5;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay = React$1.forwardRef((n, _) => {
	let E = usePortalContext$3(OVERLAY_NAME, n.__scopeDialog), { forceMount: O = E.forceMount, ...A } = n, j = useDialogContext(OVERLAY_NAME, n.__scopeDialog);
	return j.modal ? /* @__PURE__ */ jsx(Presence, {
		present: O || j.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...A,
			ref: _
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot$2 = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((n, _) => {
	let { __scopeDialog: E, ...O } = n, A = useDialogContext(OVERLAY_NAME, E);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot$2,
		allowPinchZoom: !0,
		shards: [A.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState$2(A.open),
			...O,
			ref: _,
			style: {
				pointerEvents: "auto",
				...O.style
			}
		})
	});
}), CONTENT_NAME$7 = "DialogContent", DialogContent = React$1.forwardRef((n, _) => {
	let E = usePortalContext$3(CONTENT_NAME$7, n.__scopeDialog), { forceMount: O = E.forceMount, ...A } = n, j = useDialogContext(CONTENT_NAME$7, n.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: O || j.open,
		children: j.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...A,
			ref: _
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...A,
			ref: _
		})
	});
});
DialogContent.displayName = CONTENT_NAME$7;
var DialogContentModal = React$1.forwardRef((_, E) => {
	let O = useDialogContext(CONTENT_NAME$7, _.__scopeDialog), A = React$1.useRef(null), j = useComposedRefs$1(E, O.contentRef, A);
	return React$1.useEffect(() => {
		let n = A.current;
		if (n) return hideOthers(n);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		..._,
		ref: j,
		trapFocus: O.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(_.onCloseAutoFocus, (n) => {
			n.preventDefault(), O.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(_.onPointerDownOutside, (n) => {
			let _ = n.detail.originalEvent, E = _.button === 0 && _.ctrlKey === !0;
			(_.button === 2 || E) && n.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(_.onFocusOutside, (n) => n.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((_, E) => {
	let O = useDialogContext(CONTENT_NAME$7, _.__scopeDialog), A = React$1.useRef(!1), j = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		..._,
		ref: E,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (n) => {
			_.onCloseAutoFocus?.(n), n.defaultPrevented || (A.current || O.triggerRef.current?.focus(), n.preventDefault()), A.current = !1, j.current = !1;
		},
		onInteractOutside: (n) => {
			_.onInteractOutside?.(n), n.defaultPrevented || (A.current = !0, n.detail.originalEvent.type === "pointerdown" && (j.current = !0));
			let E = n.target;
			O.triggerRef.current?.contains(E) && n.preventDefault(), n.detail.originalEvent.type === "focusin" && j.current && n.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((_, E) => {
	let { __scopeDialog: O, trapFocus: A, onOpenAutoFocus: j, onCloseAutoFocus: M, ...N } = _, P = useDialogContext(CONTENT_NAME$7, O), z = React$1.useRef(null), B = useComposedRefs$1(E, z);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: A,
		onMountAutoFocus: j,
		onUnmountAutoFocus: M,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: P.contentId,
			"aria-describedby": P.descriptionId,
			"aria-labelledby": P.titleId,
			"data-state": getState$2(P.open),
			...N,
			ref: B,
			onDismiss: () => P.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: P.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: z,
		descriptionId: P.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle = React$1.forwardRef((n, _) => {
	let { __scopeDialog: E, ...O } = n, A = useDialogContext(TITLE_NAME, E);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: A.titleId,
		...O,
		ref: _
	});
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription = React$1.forwardRef((n, _) => {
	let { __scopeDialog: E, ...O } = n, A = useDialogContext(DESCRIPTION_NAME, E);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: A.descriptionId,
		...O,
		ref: _
	});
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME$1 = "DialogClose", DialogClose = React$1.forwardRef((n, _) => {
	let { __scopeDialog: E, ...O } = n, A = useDialogContext(CLOSE_NAME$1, E);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...O,
		ref: _,
		onClick: composeEventHandlers(n.onClick, () => A.onOpenChange(!1))
	});
});
DialogClose.displayName = CLOSE_NAME$1;
function getState$2(n) {
	return n ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME$7,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: _ }) => {
	let E = useWarningContext(TITLE_WARNING_NAME), O = `\`${E.contentName}\` requires a \`${E.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${E.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${E.docsSlug}`;
	return React$1.useEffect(() => {
		_ && (document.getElementById(_) || console.error(O));
	}, [O, _]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: _, descriptionId: E }) => {
	let O = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let n = _.current?.getAttribute("aria-describedby");
		E && n && (document.getElementById(E) || console.warn(O));
	}, [
		O,
		_,
		E
	]), null;
}, Root$4 = Dialog, Trigger$4 = DialogTrigger, Portal$3 = DialogPortal, Overlay = DialogOverlay, Content$2 = DialogContent, Title = DialogTitle, Description = DialogDescription, Close$1 = DialogClose;
function usePrevious(_) {
	let E = React$1.useRef({
		value: _,
		previous: _
	});
	return React$1.useMemo(() => (E.current.value !== _ && (E.current.previous = E.current.value, E.current.value = _), E.current.previous), [_]);
}
function useSize(_) {
	let [E, O] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (_) {
			O({
				width: _.offsetWidth,
				height: _.offsetHeight
			});
			let n = new ResizeObserver((n) => {
				if (!Array.isArray(n) || !n.length) return;
				let E = n[0], A, j;
				if ("borderBoxSize" in E) {
					let n = E.borderBoxSize, _ = Array.isArray(n) ? n[0] : n;
					A = _.inlineSize, j = _.blockSize;
				} else A = _.offsetWidth, j = _.offsetHeight;
				O({
					width: A,
					height: j
				});
			});
			return n.observe(_, { box: "border-box" }), () => n.unobserve(_);
		} else O(void 0);
	}, [_]), E;
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (n) => ({
	x: n,
	y: n
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp$3(n, _, E) {
	return max(n, min(_, E));
}
function evaluate(n, _) {
	return typeof n == "function" ? n(_) : n;
}
function getSide(n) {
	return n.split("-")[0];
}
function getAlignment(n) {
	return n.split("-")[1];
}
function getOppositeAxis(n) {
	return n === "x" ? "y" : "x";
}
function getAxisLength(n) {
	return n === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(n) {
	return yAxisSides.has(getSide(n)) ? "y" : "x";
}
function getAlignmentAxis(n) {
	return getOppositeAxis(getSideAxis(n));
}
function getAlignmentSides(n, _, E) {
	E === void 0 && (E = !1);
	let O = getAlignment(n), A = getAlignmentAxis(n), j = getAxisLength(A), M = A === "x" ? O === (E ? "end" : "start") ? "right" : "left" : O === "start" ? "bottom" : "top";
	return _.reference[j] > _.floating[j] && (M = getOppositePlacement(M)), [M, getOppositePlacement(M)];
}
function getExpandedPlacements(n) {
	let _ = getOppositePlacement(n);
	return [
		getOppositeAlignmentPlacement(n),
		_,
		getOppositeAlignmentPlacement(_)
	];
}
function getOppositeAlignmentPlacement(n) {
	return n.replace(/start|end/g, (n) => oppositeAlignmentMap[n]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(n, _, E) {
	switch (n) {
		case "top":
		case "bottom": return E ? _ ? rlPlacement : lrPlacement : _ ? lrPlacement : rlPlacement;
		case "left":
		case "right": return _ ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(n, _, E, O) {
	let A = getAlignment(n), j = getSideList(getSide(n), E === "start", O);
	return A && (j = j.map((n) => n + "-" + A), _ && (j = j.concat(j.map(getOppositeAlignmentPlacement)))), j;
}
function getOppositePlacement(n) {
	return n.replace(/left|right|bottom|top/g, (n) => oppositeSideMap[n]);
}
function expandPaddingObject(n) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...n
	};
}
function getPaddingObject(n) {
	return typeof n == "number" ? {
		top: n,
		right: n,
		bottom: n,
		left: n
	} : expandPaddingObject(n);
}
function rectToClientRect(n) {
	let { x: _, y: E, width: O, height: A } = n;
	return {
		width: O,
		height: A,
		top: E,
		left: _,
		right: _ + O,
		bottom: E + A,
		x: _,
		y: E
	};
}
function computeCoordsFromPlacement(n, _, E) {
	let { reference: O, floating: A } = n, j = getSideAxis(_), M = getAlignmentAxis(_), N = getAxisLength(M), P = getSide(_), z = j === "y", B = O.x + O.width / 2 - A.width / 2, H = O.y + O.height / 2 - A.height / 2, U = O[N] / 2 - A[N] / 2, W;
	switch (P) {
		case "top":
			W = {
				x: B,
				y: O.y - A.height
			};
			break;
		case "bottom":
			W = {
				x: B,
				y: O.y + O.height
			};
			break;
		case "right":
			W = {
				x: O.x + O.width,
				y: H
			};
			break;
		case "left":
			W = {
				x: O.x - A.width,
				y: H
			};
			break;
		default: W = {
			x: O.x,
			y: O.y
		};
	}
	switch (getAlignment(_)) {
		case "start":
			W[M] -= U * (E && z ? -1 : 1);
			break;
		case "end":
			W[M] += U * (E && z ? -1 : 1);
			break;
	}
	return W;
}
var computePosition$1 = async (n, _, E) => {
	let { placement: O = "bottom", strategy: A = "absolute", middleware: j = [], platform: M } = E, N = j.filter(Boolean), P = await (M.isRTL == null ? void 0 : M.isRTL(_)), z = await M.getElementRects({
		reference: n,
		floating: _,
		strategy: A
	}), { x: B, y: H } = computeCoordsFromPlacement(z, O, P), U = O, W = {}, G = 0;
	for (let E = 0; E < N.length; E++) {
		let { name: j, fn: Z } = N[E], { x: Mj, y: Nj, data: Pj, reset: Fj } = await Z({
			x: B,
			y: H,
			initialPlacement: O,
			placement: U,
			strategy: A,
			middlewareData: W,
			rects: z,
			platform: M,
			elements: {
				reference: n,
				floating: _
			}
		});
		B = Mj ?? B, H = Nj ?? H, W = {
			...W,
			[j]: {
				...W[j],
				...Pj
			}
		}, Fj && G <= 50 && (G++, typeof Fj == "object" && (Fj.placement && (U = Fj.placement), Fj.rects && (z = Fj.rects === !0 ? await M.getElementRects({
			reference: n,
			floating: _,
			strategy: A
		}) : Fj.rects), {x: B, y: H} = computeCoordsFromPlacement(z, U, P)), E = -1);
	}
	return {
		x: B,
		y: H,
		placement: U,
		strategy: A,
		middlewareData: W
	};
};
async function detectOverflow$1(n, _) {
	_ === void 0 && (_ = {});
	let { x: E, y: O, platform: A, rects: j, elements: M, strategy: N } = n, { boundary: P = "clippingAncestors", rootBoundary: z = "viewport", elementContext: B = "floating", altBoundary: H = !1, padding: U = 0 } = evaluate(_, n), W = getPaddingObject(U), G = M[H ? B === "floating" ? "reference" : "floating" : B], Z = rectToClientRect(await A.getClippingRect({
		element: await (A.isElement == null ? void 0 : A.isElement(G)) ?? !0 ? G : G.contextElement || await (A.getDocumentElement == null ? void 0 : A.getDocumentElement(M.floating)),
		boundary: P,
		rootBoundary: z,
		strategy: N
	})), Mj = B === "floating" ? {
		x: E,
		y: O,
		width: j.floating.width,
		height: j.floating.height
	} : j.reference, Nj = await (A.getOffsetParent == null ? void 0 : A.getOffsetParent(M.floating)), Pj = await (A.isElement == null ? void 0 : A.isElement(Nj)) && await (A.getScale == null ? void 0 : A.getScale(Nj)) || {
		x: 1,
		y: 1
	}, Fj = rectToClientRect(A.convertOffsetParentRelativeRectToViewportRelativeRect ? await A.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: M,
		rect: Mj,
		offsetParent: Nj,
		strategy: N
	}) : Mj);
	return {
		top: (Z.top - Fj.top + W.top) / Pj.y,
		bottom: (Fj.bottom - Z.bottom + W.bottom) / Pj.y,
		left: (Z.left - Fj.left + W.left) / Pj.x,
		right: (Fj.right - Z.right + W.right) / Pj.x
	};
}
var arrow$2 = (n) => ({
	name: "arrow",
	options: n,
	async fn(_) {
		let { x: E, y: O, placement: A, rects: j, platform: M, elements: N, middlewareData: P } = _, { element: z, padding: B = 0 } = evaluate(n, _) || {};
		if (z == null) return {};
		let H = getPaddingObject(B), U = {
			x: E,
			y: O
		}, W = getAlignmentAxis(A), G = getAxisLength(W), Z = await M.getDimensions(z), Mj = W === "y", Nj = Mj ? "top" : "left", Pj = Mj ? "bottom" : "right", Fj = Mj ? "clientHeight" : "clientWidth", Ij = j.reference[G] + j.reference[W] - U[W] - j.floating[G], Lj = U[W] - j.reference[W], Rj = await (M.getOffsetParent == null ? void 0 : M.getOffsetParent(z)), zj = Rj ? Rj[Fj] : 0;
		(!zj || !await (M.isElement == null ? void 0 : M.isElement(Rj))) && (zj = N.floating[Fj] || j.floating[G]);
		let Bj = Ij / 2 - Lj / 2, Vj = zj / 2 - Z[G] / 2 - 1, Hj = min(H[Nj], Vj), Uj = min(H[Pj], Vj), Wj = Hj, Gj = zj - Z[G] - Uj, Kj = zj / 2 - Z[G] / 2 + Bj, qj = clamp$3(Wj, Kj, Gj), Jj = !P.arrow && getAlignment(A) != null && Kj !== qj && j.reference[G] / 2 - (Kj < Wj ? Hj : Uj) - Z[G] / 2 < 0, Yj = Jj ? Kj < Wj ? Kj - Wj : Kj - Gj : 0;
		return {
			[W]: U[W] + Yj,
			data: {
				[W]: qj,
				centerOffset: Kj - qj - Yj,
				...Jj && { alignmentOffset: Yj }
			},
			reset: Jj
		};
	}
}), flip$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "flip",
		options: n,
		async fn(_) {
			var E;
			let { placement: O, middlewareData: A, rects: j, initialPlacement: M, platform: N, elements: P } = _, { mainAxis: z = !0, crossAxis: B = !0, fallbackPlacements: H, fallbackStrategy: U = "bestFit", fallbackAxisSideDirection: W = "none", flipAlignment: G = !0, ...Z } = evaluate(n, _);
			if ((E = A.arrow) != null && E.alignmentOffset) return {};
			let Mj = getSide(O), Nj = getSideAxis(M), Pj = getSide(M) === M, Fj = await (N.isRTL == null ? void 0 : N.isRTL(P.floating)), Ij = H || (Pj || !G ? [getOppositePlacement(M)] : getExpandedPlacements(M)), Lj = W !== "none";
			!H && Lj && Ij.push(...getOppositeAxisPlacements(M, G, W, Fj));
			let Rj = [M, ...Ij], zj = await detectOverflow$1(_, Z), Bj = [], Vj = A.flip?.overflows || [];
			if (z && Bj.push(zj[Mj]), B) {
				let n = getAlignmentSides(O, j, Fj);
				Bj.push(zj[n[0]], zj[n[1]]);
			}
			if (Vj = [...Vj, {
				placement: O,
				overflows: Bj
			}], !Bj.every((n) => n <= 0)) {
				let n = (A.flip?.index || 0) + 1, _ = Rj[n];
				if (_ && (!(B === "alignment" && Nj !== getSideAxis(_)) || Vj.every((n) => getSideAxis(n.placement) === Nj ? n.overflows[0] > 0 : !0))) return {
					data: {
						index: n,
						overflows: Vj
					},
					reset: { placement: _ }
				};
				let E = Vj.filter((n) => n.overflows[0] <= 0).sort((n, _) => n.overflows[1] - _.overflows[1])[0]?.placement;
				if (!E) switch (U) {
					case "bestFit": {
						let n = Vj.filter((n) => {
							if (Lj) {
								let _ = getSideAxis(n.placement);
								return _ === Nj || _ === "y";
							}
							return !0;
						}).map((n) => [n.placement, n.overflows.filter((n) => n > 0).reduce((n, _) => n + _, 0)]).sort((n, _) => n[1] - _[1])[0]?.[0];
						n && (E = n);
						break;
					}
					case "initialPlacement":
						E = M;
						break;
				}
				if (O !== E) return { reset: { placement: E } };
			}
			return {};
		}
	};
};
function getSideOffsets(n, _) {
	return {
		top: n.top - _.height,
		right: n.right - _.width,
		bottom: n.bottom - _.height,
		left: n.left - _.width
	};
}
function isAnySideFullyClipped(n) {
	return sides.some((_) => n[_] >= 0);
}
var hide$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "hide",
		options: n,
		async fn(_) {
			let { rects: E } = _, { strategy: O = "referenceHidden", ...A } = evaluate(n, _);
			switch (O) {
				case "referenceHidden": {
					let n = getSideOffsets(await detectOverflow$1(_, {
						...A,
						elementContext: "reference"
					}), E.reference);
					return { data: {
						referenceHiddenOffsets: n,
						referenceHidden: isAnySideFullyClipped(n)
					} };
				}
				case "escaped": {
					let n = getSideOffsets(await detectOverflow$1(_, {
						...A,
						altBoundary: !0
					}), E.floating);
					return { data: {
						escapedOffsets: n,
						escaped: isAnySideFullyClipped(n)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(n, _) {
	let { placement: E, platform: O, elements: A } = n, j = await (O.isRTL == null ? void 0 : O.isRTL(A.floating)), M = getSide(E), N = getAlignment(E), P = getSideAxis(E) === "y", z = originSides.has(M) ? -1 : 1, B = j && P ? -1 : 1, H = evaluate(_, n), { mainAxis: U, crossAxis: W, alignmentAxis: G } = typeof H == "number" ? {
		mainAxis: H,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: H.mainAxis || 0,
		crossAxis: H.crossAxis || 0,
		alignmentAxis: H.alignmentAxis
	};
	return N && typeof G == "number" && (W = N === "end" ? G * -1 : G), P ? {
		x: W * B,
		y: U * z
	} : {
		x: U * z,
		y: W * B
	};
}
var offset$2 = function(n) {
	return n === void 0 && (n = 0), {
		name: "offset",
		options: n,
		async fn(_) {
			var E;
			let { x: O, y: A, placement: j, middlewareData: M } = _, N = await convertValueToCoords(_, n);
			return j === M.offset?.placement && (E = M.arrow) != null && E.alignmentOffset ? {} : {
				x: O + N.x,
				y: A + N.y,
				data: {
					...N,
					placement: j
				}
			};
		}
	};
}, shift$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "shift",
		options: n,
		async fn(_) {
			let { x: E, y: O, placement: A } = _, { mainAxis: j = !0, crossAxis: M = !1, limiter: N = { fn: (n) => {
				let { x: _, y: E } = n;
				return {
					x: _,
					y: E
				};
			} }, ...P } = evaluate(n, _), z = {
				x: E,
				y: O
			}, B = await detectOverflow$1(_, P), H = getSideAxis(getSide(A)), U = getOppositeAxis(H), W = z[U], G = z[H];
			if (j) {
				let n = U === "y" ? "top" : "left", _ = U === "y" ? "bottom" : "right", E = W + B[n], O = W - B[_];
				W = clamp$3(E, W, O);
			}
			if (M) {
				let n = H === "y" ? "top" : "left", _ = H === "y" ? "bottom" : "right", E = G + B[n], O = G - B[_];
				G = clamp$3(E, G, O);
			}
			let Z = N.fn({
				..._,
				[U]: W,
				[H]: G
			});
			return {
				...Z,
				data: {
					x: Z.x - E,
					y: Z.y - O,
					enabled: {
						[U]: j,
						[H]: M
					}
				}
			};
		}
	};
}, limitShift$2 = function(n) {
	return n === void 0 && (n = {}), {
		options: n,
		fn(_) {
			let { x: E, y: O, placement: A, rects: j, middlewareData: M } = _, { offset: N = 0, mainAxis: P = !0, crossAxis: z = !0 } = evaluate(n, _), B = {
				x: E,
				y: O
			}, H = getSideAxis(A), U = getOppositeAxis(H), W = B[U], G = B[H], Z = evaluate(N, _), Mj = typeof Z == "number" ? {
				mainAxis: Z,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...Z
			};
			if (P) {
				let n = U === "y" ? "height" : "width", _ = j.reference[U] - j.floating[n] + Mj.mainAxis, E = j.reference[U] + j.reference[n] - Mj.mainAxis;
				W < _ ? W = _ : W > E && (W = E);
			}
			if (z) {
				let n = U === "y" ? "width" : "height", _ = originSides.has(getSide(A)), E = j.reference[H] - j.floating[n] + (_ && M.offset?.[H] || 0) + (_ ? 0 : Mj.crossAxis), O = j.reference[H] + j.reference[n] + (_ ? 0 : M.offset?.[H] || 0) - (_ ? Mj.crossAxis : 0);
				G < E ? G = E : G > O && (G = O);
			}
			return {
				[U]: W,
				[H]: G
			};
		}
	};
}, size$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "size",
		options: n,
		async fn(_) {
			var E, O;
			let { placement: A, rects: j, platform: M, elements: N } = _, { apply: P = () => {}, ...z } = evaluate(n, _), B = await detectOverflow$1(_, z), H = getSide(A), U = getAlignment(A), W = getSideAxis(A) === "y", { width: G, height: Z } = j.floating, Mj, Nj;
			H === "top" || H === "bottom" ? (Mj = H, Nj = U === (await (M.isRTL == null ? void 0 : M.isRTL(N.floating)) ? "start" : "end") ? "left" : "right") : (Nj = H, Mj = U === "end" ? "top" : "bottom");
			let Pj = Z - B.top - B.bottom, Fj = G - B.left - B.right, Ij = min(Z - B[Mj], Pj), Lj = min(G - B[Nj], Fj), Rj = !_.middlewareData.shift, zj = Ij, Bj = Lj;
			if ((E = _.middlewareData.shift) != null && E.enabled.x && (Bj = Fj), (O = _.middlewareData.shift) != null && O.enabled.y && (zj = Pj), Rj && !U) {
				let n = max(B.left, 0), _ = max(B.right, 0), E = max(B.top, 0), O = max(B.bottom, 0);
				W ? Bj = G - 2 * (n !== 0 || _ !== 0 ? n + _ : max(B.left, B.right)) : zj = Z - 2 * (E !== 0 || O !== 0 ? E + O : max(B.top, B.bottom));
			}
			await P({
				..._,
				availableWidth: Bj,
				availableHeight: zj
			});
			let Vj = await M.getDimensions(N.floating);
			return G !== Vj.width || Z !== Vj.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(n) {
	return isNode(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function getWindow(n) {
	var _;
	return (n == null || (_ = n.ownerDocument) == null ? void 0 : _.defaultView) || window;
}
function getDocumentElement(n) {
	return ((isNode(n) ? n.ownerDocument : n.document) || window.document)?.documentElement;
}
function isNode(n) {
	return hasWindow() ? n instanceof Node || n instanceof getWindow(n).Node : !1;
}
function isElement(n) {
	return hasWindow() ? n instanceof Element || n instanceof getWindow(n).Element : !1;
}
function isHTMLElement$1(n) {
	return hasWindow() ? n instanceof HTMLElement || n instanceof getWindow(n).HTMLElement : !1;
}
function isShadowRoot(n) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof getWindow(n).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(n) {
	let { overflow: _, overflowX: E, overflowY: O, display: A } = getComputedStyle$2(n);
	return /auto|scroll|overlay|hidden|clip/.test(_ + O + E) && !invalidOverflowDisplayValues.has(A);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(n) {
	return tableElements.has(getNodeName(n));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(n) {
	return topLayerSelectors.some((_) => {
		try {
			return n.matches(_);
		} catch {
			return !1;
		}
	});
}
var transformProperties = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective"
], willChangeValues = [
	"transform",
	"translate",
	"scale",
	"rotate",
	"perspective",
	"filter"
], containValues = [
	"paint",
	"layout",
	"strict",
	"content"
];
function isContainingBlock(n) {
	let _ = isWebKit(), E = isElement(n) ? getComputedStyle$2(n) : n;
	return transformProperties.some((n) => E[n] ? E[n] !== "none" : !1) || (E.containerType ? E.containerType !== "normal" : !1) || !_ && (E.backdropFilter ? E.backdropFilter !== "none" : !1) || !_ && (E.filter ? E.filter !== "none" : !1) || willChangeValues.some((n) => (E.willChange || "").includes(n)) || containValues.some((n) => (E.contain || "").includes(n));
}
function getContainingBlock(n) {
	let _ = getParentNode(n);
	for (; isHTMLElement$1(_) && !isLastTraversableNode(_);) {
		if (isContainingBlock(_)) return _;
		if (isTopLayer(_)) return null;
		_ = getParentNode(_);
	}
	return null;
}
function isWebKit() {
	return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
var lastTraversableNodeNames = /* @__PURE__ */ new Set([
	"html",
	"body",
	"#document"
]);
function isLastTraversableNode(n) {
	return lastTraversableNodeNames.has(getNodeName(n));
}
function getComputedStyle$2(n) {
	return getWindow(n).getComputedStyle(n);
}
function getNodeScroll(n) {
	return isElement(n) ? {
		scrollLeft: n.scrollLeft,
		scrollTop: n.scrollTop
	} : {
		scrollLeft: n.scrollX,
		scrollTop: n.scrollY
	};
}
function getParentNode(n) {
	if (getNodeName(n) === "html") return n;
	let _ = n.assignedSlot || n.parentNode || isShadowRoot(n) && n.host || getDocumentElement(n);
	return isShadowRoot(_) ? _.host : _;
}
function getNearestOverflowAncestor(n) {
	let _ = getParentNode(n);
	return isLastTraversableNode(_) ? n.ownerDocument ? n.ownerDocument.body : n.body : isHTMLElement$1(_) && isOverflowElement(_) ? _ : getNearestOverflowAncestor(_);
}
function getOverflowAncestors(n, _, E) {
	_ === void 0 && (_ = []), E === void 0 && (E = !0);
	let O = getNearestOverflowAncestor(n), A = O === n.ownerDocument?.body, j = getWindow(O);
	if (A) {
		let n = getFrameElement(j);
		return _.concat(j, j.visualViewport || [], isOverflowElement(O) ? O : [], n && E ? getOverflowAncestors(n) : []);
	}
	return _.concat(O, getOverflowAncestors(O, [], E));
}
function getFrameElement(n) {
	return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function getCssDimensions(n) {
	let _ = getComputedStyle$2(n), E = parseFloat(_.width) || 0, O = parseFloat(_.height) || 0, A = isHTMLElement$1(n), j = A ? n.offsetWidth : E, M = A ? n.offsetHeight : O, N = round(E) !== j || round(O) !== M;
	return N && (E = j, O = M), {
		width: E,
		height: O,
		$: N
	};
}
function unwrapElement(n) {
	return isElement(n) ? n : n.contextElement;
}
function getScale(n) {
	let _ = unwrapElement(n);
	if (!isHTMLElement$1(_)) return createCoords(1);
	let E = _.getBoundingClientRect(), { width: O, height: A, $: j } = getCssDimensions(_), M = (j ? round(E.width) : E.width) / O, N = (j ? round(E.height) : E.height) / A;
	return (!M || !Number.isFinite(M)) && (M = 1), (!N || !Number.isFinite(N)) && (N = 1), {
		x: M,
		y: N
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(n) {
	let _ = getWindow(n);
	return !isWebKit() || !_.visualViewport ? noOffsets : {
		x: _.visualViewport.offsetLeft,
		y: _.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(n, _, E) {
	return _ === void 0 && (_ = !1), !E || _ && E !== getWindow(n) ? !1 : _;
}
function getBoundingClientRect(n, _, E, O) {
	_ === void 0 && (_ = !1), E === void 0 && (E = !1);
	let A = n.getBoundingClientRect(), j = unwrapElement(n), M = createCoords(1);
	_ && (O ? isElement(O) && (M = getScale(O)) : M = getScale(n));
	let N = shouldAddVisualOffsets(j, E, O) ? getVisualOffsets(j) : createCoords(0), P = (A.left + N.x) / M.x, z = (A.top + N.y) / M.y, B = A.width / M.x, H = A.height / M.y;
	if (j) {
		let n = getWindow(j), _ = O && isElement(O) ? getWindow(O) : O, E = n, A = getFrameElement(E);
		for (; A && O && _ !== E;) {
			let n = getScale(A), _ = A.getBoundingClientRect(), O = getComputedStyle$2(A), j = _.left + (A.clientLeft + parseFloat(O.paddingLeft)) * n.x, M = _.top + (A.clientTop + parseFloat(O.paddingTop)) * n.y;
			P *= n.x, z *= n.y, B *= n.x, H *= n.y, P += j, z += M, E = getWindow(A), A = getFrameElement(E);
		}
	}
	return rectToClientRect({
		width: B,
		height: H,
		x: P,
		y: z
	});
}
function getWindowScrollBarX(n, _) {
	let E = getNodeScroll(n).scrollLeft;
	return _ ? _.left + E : getBoundingClientRect(getDocumentElement(n)).left + E;
}
function getHTMLOffset(n, _) {
	let E = n.getBoundingClientRect();
	return {
		x: E.left + _.scrollLeft - getWindowScrollBarX(n, E),
		y: E.top + _.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(n) {
	let { elements: _, rect: E, offsetParent: O, strategy: A } = n, j = A === "fixed", M = getDocumentElement(O), N = _ ? isTopLayer(_.floating) : !1;
	if (O === M || N && j) return E;
	let P = {
		scrollLeft: 0,
		scrollTop: 0
	}, z = createCoords(1), B = createCoords(0), H = isHTMLElement$1(O);
	if ((H || !H && !j) && ((getNodeName(O) !== "body" || isOverflowElement(M)) && (P = getNodeScroll(O)), isHTMLElement$1(O))) {
		let n = getBoundingClientRect(O);
		z = getScale(O), B.x = n.x + O.clientLeft, B.y = n.y + O.clientTop;
	}
	let U = M && !H && !j ? getHTMLOffset(M, P) : createCoords(0);
	return {
		width: E.width * z.x,
		height: E.height * z.y,
		x: E.x * z.x - P.scrollLeft * z.x + B.x + U.x,
		y: E.y * z.y - P.scrollTop * z.y + B.y + U.y
	};
}
function getClientRects(n) {
	return Array.from(n.getClientRects());
}
function getDocumentRect(n) {
	let _ = getDocumentElement(n), E = getNodeScroll(n), O = n.ownerDocument.body, A = max(_.scrollWidth, _.clientWidth, O.scrollWidth, O.clientWidth), j = max(_.scrollHeight, _.clientHeight, O.scrollHeight, O.clientHeight), M = -E.scrollLeft + getWindowScrollBarX(n), N = -E.scrollTop;
	return getComputedStyle$2(O).direction === "rtl" && (M += max(_.clientWidth, O.clientWidth) - A), {
		width: A,
		height: j,
		x: M,
		y: N
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(n, _) {
	let E = getWindow(n), O = getDocumentElement(n), A = E.visualViewport, j = O.clientWidth, M = O.clientHeight, N = 0, P = 0;
	if (A) {
		j = A.width, M = A.height;
		let n = isWebKit();
		(!n || n && _ === "fixed") && (N = A.offsetLeft, P = A.offsetTop);
	}
	let z = getWindowScrollBarX(O);
	if (z <= 0) {
		let n = O.ownerDocument, _ = n.body, E = getComputedStyle(_), A = n.compatMode === "CSS1Compat" && parseFloat(E.marginLeft) + parseFloat(E.marginRight) || 0, M = Math.abs(O.clientWidth - _.clientWidth - A);
		M <= SCROLLBAR_MAX && (j -= M);
	} else z <= SCROLLBAR_MAX && (j += z);
	return {
		width: j,
		height: M,
		x: N,
		y: P
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(n, _) {
	let E = getBoundingClientRect(n, !0, _ === "fixed"), O = E.top + n.clientTop, A = E.left + n.clientLeft, j = isHTMLElement$1(n) ? getScale(n) : createCoords(1);
	return {
		width: n.clientWidth * j.x,
		height: n.clientHeight * j.y,
		x: A * j.x,
		y: O * j.y
	};
}
function getClientRectFromClippingAncestor(n, _, E) {
	let O;
	if (_ === "viewport") O = getViewportRect(n, E);
	else if (_ === "document") O = getDocumentRect(getDocumentElement(n));
	else if (isElement(_)) O = getInnerBoundingClientRect(_, E);
	else {
		let E = getVisualOffsets(n);
		O = {
			x: _.x - E.x,
			y: _.y - E.y,
			width: _.width,
			height: _.height
		};
	}
	return rectToClientRect(O);
}
function hasFixedPositionAncestor(n, _) {
	let E = getParentNode(n);
	return E === _ || !isElement(E) || isLastTraversableNode(E) ? !1 : getComputedStyle$2(E).position === "fixed" || hasFixedPositionAncestor(E, _);
}
function getClippingElementAncestors(n, _) {
	let E = _.get(n);
	if (E) return E;
	let O = getOverflowAncestors(n, [], !1).filter((n) => isElement(n) && getNodeName(n) !== "body"), A = null, j = getComputedStyle$2(n).position === "fixed", M = j ? getParentNode(n) : n;
	for (; isElement(M) && !isLastTraversableNode(M);) {
		let _ = getComputedStyle$2(M), E = isContainingBlock(M);
		!E && _.position === "fixed" && (A = null), (j ? !E && !A : !E && _.position === "static" && A && absoluteOrFixed.has(A.position) || isOverflowElement(M) && !E && hasFixedPositionAncestor(n, M)) ? O = O.filter((n) => n !== M) : A = _, M = getParentNode(M);
	}
	return _.set(n, O), O;
}
function getClippingRect(n) {
	let { element: _, boundary: E, rootBoundary: O, strategy: A } = n, j = [...E === "clippingAncestors" ? isTopLayer(_) ? [] : getClippingElementAncestors(_, this._c) : [].concat(E), O], M = j[0], N = j.reduce((n, E) => {
		let O = getClientRectFromClippingAncestor(_, E, A);
		return n.top = max(O.top, n.top), n.right = min(O.right, n.right), n.bottom = min(O.bottom, n.bottom), n.left = max(O.left, n.left), n;
	}, getClientRectFromClippingAncestor(_, M, A));
	return {
		width: N.right - N.left,
		height: N.bottom - N.top,
		x: N.left,
		y: N.top
	};
}
function getDimensions(n) {
	let { width: _, height: E } = getCssDimensions(n);
	return {
		width: _,
		height: E
	};
}
function getRectRelativeToOffsetParent(n, _, E) {
	let O = isHTMLElement$1(_), A = getDocumentElement(_), j = E === "fixed", M = getBoundingClientRect(n, !0, j, _), N = {
		scrollLeft: 0,
		scrollTop: 0
	}, P = createCoords(0);
	function z() {
		P.x = getWindowScrollBarX(A);
	}
	if (O || !O && !j) if ((getNodeName(_) !== "body" || isOverflowElement(A)) && (N = getNodeScroll(_)), O) {
		let n = getBoundingClientRect(_, !0, j, _);
		P.x = n.x + _.clientLeft, P.y = n.y + _.clientTop;
	} else A && z();
	j && !O && A && z();
	let B = A && !O && !j ? getHTMLOffset(A, N) : createCoords(0);
	return {
		x: M.left + N.scrollLeft - P.x - B.x,
		y: M.top + N.scrollTop - P.y - B.y,
		width: M.width,
		height: M.height
	};
}
function isStaticPositioned(n) {
	return getComputedStyle$2(n).position === "static";
}
function getTrueOffsetParent(n, _) {
	if (!isHTMLElement$1(n) || getComputedStyle$2(n).position === "fixed") return null;
	if (_) return _(n);
	let E = n.offsetParent;
	return getDocumentElement(n) === E && (E = E.ownerDocument.body), E;
}
function getOffsetParent(n, _) {
	let E = getWindow(n);
	if (isTopLayer(n)) return E;
	if (!isHTMLElement$1(n)) {
		let _ = getParentNode(n);
		for (; _ && !isLastTraversableNode(_);) {
			if (isElement(_) && !isStaticPositioned(_)) return _;
			_ = getParentNode(_);
		}
		return E;
	}
	let O = getTrueOffsetParent(n, _);
	for (; O && isTableElement(O) && isStaticPositioned(O);) O = getTrueOffsetParent(O, _);
	return O && isLastTraversableNode(O) && isStaticPositioned(O) && !isContainingBlock(O) ? E : O || getContainingBlock(n) || E;
}
var getElementRects = async function(n) {
	let _ = this.getOffsetParent || getOffsetParent, E = this.getDimensions, O = await E(n.floating);
	return {
		reference: getRectRelativeToOffsetParent(n.reference, await _(n.floating), n.strategy),
		floating: {
			x: 0,
			y: 0,
			width: O.width,
			height: O.height
		}
	};
};
function isRTL(n) {
	return getComputedStyle$2(n).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(n, _) {
	return n.x === _.x && n.y === _.y && n.width === _.width && n.height === _.height;
}
function observeMove(n, _) {
	let E = null, O, A = getDocumentElement(n);
	function j() {
		var n;
		clearTimeout(O), (n = E) == null || n.disconnect(), E = null;
	}
	function M(N, P) {
		N === void 0 && (N = !1), P === void 0 && (P = 1), j();
		let z = n.getBoundingClientRect(), { left: B, top: H, width: U, height: W } = z;
		if (N || _(), !U || !W) return;
		let G = floor(H), Z = floor(A.clientWidth - (B + U)), Mj = floor(A.clientHeight - (H + W)), Nj = floor(B), Pj = {
			rootMargin: -G + "px " + -Z + "px " + -Mj + "px " + -Nj + "px",
			threshold: max(0, min(1, P)) || 1
		}, Fj = !0;
		function Ij(_) {
			let E = _[0].intersectionRatio;
			if (E !== P) {
				if (!Fj) return M();
				E ? M(!1, E) : O = setTimeout(() => {
					M(!1, 1e-7);
				}, 1e3);
			}
			E === 1 && !rectsAreEqual(z, n.getBoundingClientRect()) && M(), Fj = !1;
		}
		try {
			E = new IntersectionObserver(Ij, {
				...Pj,
				root: A.ownerDocument
			});
		} catch {
			E = new IntersectionObserver(Ij, Pj);
		}
		E.observe(n);
	}
	return M(!0), j;
}
function autoUpdate(n, _, E, O) {
	O === void 0 && (O = {});
	let { ancestorScroll: A = !0, ancestorResize: j = !0, elementResize: M = typeof ResizeObserver == "function", layoutShift: N = typeof IntersectionObserver == "function", animationFrame: P = !1 } = O, z = unwrapElement(n), B = A || j ? [...z ? getOverflowAncestors(z) : [], ...getOverflowAncestors(_)] : [];
	B.forEach((n) => {
		A && n.addEventListener("scroll", E, { passive: !0 }), j && n.addEventListener("resize", E);
	});
	let H = z && N ? observeMove(z, E) : null, U = -1, W = null;
	M && (W = new ResizeObserver((n) => {
		let [O] = n;
		O && O.target === z && W && (W.unobserve(_), cancelAnimationFrame(U), U = requestAnimationFrame(() => {
			var n;
			(n = W) == null || n.observe(_);
		})), E();
	}), z && !P && W.observe(z), W.observe(_));
	let G, Z = P ? getBoundingClientRect(n) : null;
	P && Mj();
	function Mj() {
		let _ = getBoundingClientRect(n);
		Z && !rectsAreEqual(Z, _) && E(), Z = _, G = requestAnimationFrame(Mj);
	}
	return E(), () => {
		var n;
		B.forEach((n) => {
			A && n.removeEventListener("scroll", E), j && n.removeEventListener("resize", E);
		}), H?.(), (n = W) == null || n.disconnect(), W = null, P && cancelAnimationFrame(G);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (n, _, E) => {
	let O = /* @__PURE__ */ new Map(), A = {
		platform,
		...E
	}, j = {
		...A.platform,
		_c: O
	};
	return computePosition$1(n, _, {
		...A,
		platform: j
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(n, _) {
	if (n === _) return !0;
	if (typeof n != typeof _) return !1;
	if (typeof n == "function" && n.toString() === _.toString()) return !0;
	let E, O, A;
	if (n && _ && typeof n == "object") {
		if (Array.isArray(n)) {
			if (E = n.length, E !== _.length) return !1;
			for (O = E; O-- !== 0;) if (!deepEqual(n[O], _[O])) return !1;
			return !0;
		}
		if (A = Object.keys(n), E = A.length, E !== Object.keys(_).length) return !1;
		for (O = E; O-- !== 0;) if (!{}.hasOwnProperty.call(_, A[O])) return !1;
		for (O = E; O-- !== 0;) {
			let E = A[O];
			if (!(E === "_owner" && n.$$typeof) && !deepEqual(n[E], _[E])) return !1;
		}
		return !0;
	}
	return n !== n && _ !== _;
}
function getDPR(n) {
	return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(n, _) {
	let E = getDPR(n);
	return Math.round(_ * E) / E;
}
function useLatestRef(_) {
	let E = React$1.useRef(_);
	return index(() => {
		E.current = _;
	}), E;
}
function useFloating(_) {
	_ === void 0 && (_ = {});
	let { placement: E = "bottom", strategy: O = "absolute", middleware: A = [], platform: j, elements: { reference: M, floating: N } = {}, transform: P = !0, whileElementsMounted: z, open: B } = _, [H, U] = React$1.useState({
		x: 0,
		y: 0,
		strategy: O,
		placement: E,
		middlewareData: {},
		isPositioned: !1
	}), [W, G] = React$1.useState(A);
	deepEqual(W, A) || G(A);
	let [Z, Mj] = React$1.useState(null), [Nj, Pj] = React$1.useState(null), Fj = React$1.useCallback((n) => {
		n !== Bj.current && (Bj.current = n, Mj(n));
	}, []), Ij = React$1.useCallback((n) => {
		n !== Vj.current && (Vj.current = n, Pj(n));
	}, []), Rj = M || Z, zj = N || Nj, Bj = React$1.useRef(null), Vj = React$1.useRef(null), Hj = React$1.useRef(H), Uj = z != null, Wj = useLatestRef(z), Gj = useLatestRef(j), Kj = useLatestRef(B), qj = React$1.useCallback(() => {
		if (!Bj.current || !Vj.current) return;
		let n = {
			placement: E,
			strategy: O,
			middleware: W
		};
		Gj.current && (n.platform = Gj.current), computePosition(Bj.current, Vj.current, n).then((n) => {
			let _ = {
				...n,
				isPositioned: Kj.current !== !1
			};
			Jj.current && !deepEqual(Hj.current, _) && (Hj.current = _, ReactDOM$1.flushSync(() => {
				U(_);
			}));
		});
	}, [
		W,
		E,
		O,
		Gj,
		Kj
	]);
	index(() => {
		B === !1 && Hj.current.isPositioned && (Hj.current.isPositioned = !1, U((n) => ({
			...n,
			isPositioned: !1
		})));
	}, [B]);
	let Jj = React$1.useRef(!1);
	index(() => (Jj.current = !0, () => {
		Jj.current = !1;
	}), []), index(() => {
		if (Rj && (Bj.current = Rj), zj && (Vj.current = zj), Rj && zj) {
			if (Wj.current) return Wj.current(Rj, zj, qj);
			qj();
		}
	}, [
		Rj,
		zj,
		qj,
		Wj,
		Uj
	]);
	let Yj = React$1.useMemo(() => ({
		reference: Bj,
		floating: Vj,
		setReference: Fj,
		setFloating: Ij
	}), [Fj, Ij]), Xj = React$1.useMemo(() => ({
		reference: Rj,
		floating: zj
	}), [Rj, zj]), Zj = React$1.useMemo(() => {
		let n = {
			position: O,
			left: 0,
			top: 0
		};
		if (!Xj.floating) return n;
		let _ = roundByDPR(Xj.floating, H.x), E = roundByDPR(Xj.floating, H.y);
		return P ? {
			...n,
			transform: "translate(" + _ + "px, " + E + "px)",
			...getDPR(Xj.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: O,
			left: _,
			top: E
		};
	}, [
		O,
		P,
		Xj.floating,
		H.x,
		H.y
	]);
	return React$1.useMemo(() => ({
		...H,
		update: qj,
		refs: Yj,
		elements: Xj,
		floatingStyles: Zj
	}), [
		H,
		qj,
		Yj,
		Xj,
		Zj
	]);
}
var arrow$1$1 = (n) => {
	function _(n) {
		return {}.hasOwnProperty.call(n, "current");
	}
	return {
		name: "arrow",
		options: n,
		fn(E) {
			let { element: O, padding: A } = typeof n == "function" ? n(E) : n;
			return O && _(O) ? O.current == null ? {} : arrow$1({
				element: O.current,
				padding: A
			}).fn(E) : O ? arrow$1({
				element: O,
				padding: A
			}).fn(E) : {};
		}
	};
}, offset = (n, _) => ({
	...offset$1(n),
	options: [n, _]
}), shift = (n, _) => ({
	...shift$1(n),
	options: [n, _]
}), limitShift = (n, _) => ({
	...limitShift$1(n),
	options: [n, _]
}), flip = (n, _) => ({
	...flip$1(n),
	options: [n, _]
}), size = (n, _) => ({
	...size$1(n),
	options: [n, _]
}), hide = (n, _) => ({
	...hide$1(n),
	options: [n, _]
}), arrow = (n, _) => ({
	...arrow$1$1(n),
	options: [n, _]
}), NAME = "Arrow", Arrow$1 = React$1.forwardRef((n, _) => {
	let { children: E, width: O = 10, height: A = 5, ...j } = n;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...j,
		ref: _,
		width: O,
		height: A,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: n.asChild ? E : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME;
var Root$3 = Arrow$1, POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (_) => {
	let { __scopePopper: E, children: O } = _, [A, j] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: E,
		anchor: A,
		onAnchorChange: j,
		children: O
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME$2 = "PopperAnchor", PopperAnchor = React$1.forwardRef((_, E) => {
	let { __scopePopper: O, virtualRef: A, ...j } = _, M = usePopperContext(ANCHOR_NAME$2, O), N = React$1.useRef(null), P = useComposedRefs$1(E, N), z = React$1.useRef(null);
	return React$1.useEffect(() => {
		let n = z.current;
		z.current = A?.current || N.current, n !== z.current && M.onAnchorChange(z.current);
	}), A ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...j,
		ref: P
	});
});
PopperAnchor.displayName = ANCHOR_NAME$2;
var CONTENT_NAME$6 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$6), PopperContent = React$1.forwardRef((_, E) => {
	let { __scopePopper: O, side: A = "bottom", sideOffset: j = 0, align: M = "center", alignOffset: N = 0, arrowPadding: P = 0, avoidCollisions: z = !0, collisionBoundary: B = [], collisionPadding: H = 0, sticky: U = "partial", hideWhenDetached: W = !1, updatePositionStrategy: G = "optimized", onPlaced: Z, ...Mj } = _, Nj = usePopperContext(CONTENT_NAME$6, O), [Pj, Fj] = React$1.useState(null), Ij = useComposedRefs$1(E, (n) => Fj(n)), [Lj, Rj] = React$1.useState(null), zj = useSize(Lj), Bj = zj?.width ?? 0, Hj = zj?.height ?? 0, Uj = A + (M === "center" ? "" : "-" + M), Wj = typeof H == "number" ? H : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...H
	}, Gj = Array.isArray(B) ? B : [B], Kj = Gj.length > 0, qj = {
		padding: Wj,
		boundary: Gj.filter(isNotNull$2),
		altBoundary: Kj
	}, { refs: Jj, floatingStyles: Yj, placement: Xj, isPositioned: Zj, middlewareData: Qj } = useFloating({
		strategy: "fixed",
		placement: Uj,
		whileElementsMounted: (...n) => autoUpdate(...n, { animationFrame: G === "always" }),
		elements: { reference: Nj.anchor },
		middleware: [
			offset({
				mainAxis: j + Hj,
				alignmentAxis: N
			}),
			z && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: U === "partial" ? limitShift() : void 0,
				...qj
			}),
			z && flip({ ...qj }),
			size({
				...qj,
				apply: ({ elements: n, rects: _, availableWidth: E, availableHeight: O }) => {
					let { width: A, height: j } = _.reference, M = n.floating.style;
					M.setProperty("--radix-popper-available-width", `${E}px`), M.setProperty("--radix-popper-available-height", `${O}px`), M.setProperty("--radix-popper-anchor-width", `${A}px`), M.setProperty("--radix-popper-anchor-height", `${j}px`);
				}
			}),
			Lj && arrow({
				element: Lj,
				padding: P
			}),
			transformOrigin({
				arrowWidth: Bj,
				arrowHeight: Hj
			}),
			W && hide({
				strategy: "referenceHidden",
				...qj
			})
		]
	}), [$j, eM] = getSideAndAlignFromPlacement(Xj), tM = useCallbackRef(Z);
	useLayoutEffect2(() => {
		Zj && tM?.();
	}, [Zj, tM]);
	let nM = Qj.arrow?.x, rM = Qj.arrow?.y, iM = Qj.arrow?.centerOffset !== 0, [aM, oM] = React$1.useState();
	return useLayoutEffect2(() => {
		Pj && oM(window.getComputedStyle(Pj).zIndex);
	}, [Pj]), /* @__PURE__ */ jsx("div", {
		ref: Jj.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...Yj,
			transform: Zj ? Yj.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: aM,
			"--radix-popper-transform-origin": [Qj.transformOrigin?.x, Qj.transformOrigin?.y].join(" "),
			...Qj.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: _.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: O,
			placedSide: $j,
			onArrowChange: Rj,
			arrowX: nM,
			arrowY: rM,
			shouldHideArrow: iM,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": $j,
				"data-align": eM,
				...Mj,
				ref: Ij,
				style: {
					...Mj.style,
					animation: Zj ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME$6;
var ARROW_NAME$5 = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = React$1.forwardRef(function(n, _) {
	let { __scopePopper: E, ...O } = n, A = useContentContext(ARROW_NAME$5, E), j = OPPOSITE_SIDE[A.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: A.onArrowChange,
		style: {
			position: "absolute",
			left: A.arrowX,
			top: A.arrowY,
			[j]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[A.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[A.placedSide],
			visibility: A.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root$3, {
			...O,
			ref: _,
			style: {
				...O.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$5;
function isNotNull$2(n) {
	return n !== null;
}
var transformOrigin = (n) => ({
	name: "transformOrigin",
	options: n,
	fn(_) {
		let { placement: E, rects: O, middlewareData: A } = _, j = A.arrow?.centerOffset !== 0, M = j ? 0 : n.arrowWidth, N = j ? 0 : n.arrowHeight, [P, z] = getSideAndAlignFromPlacement(E), B = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[z], H = (A.arrow?.x ?? 0) + M / 2, U = (A.arrow?.y ?? 0) + N / 2, W = "", G = "";
		return P === "bottom" ? (W = j ? B : `${H}px`, G = `${-N}px`) : P === "top" ? (W = j ? B : `${H}px`, G = `${O.floating.height + N}px`) : P === "right" ? (W = `${-N}px`, G = j ? B : `${U}px`) : P === "left" && (W = `${O.floating.width + N}px`, G = j ? B : `${U}px`), { data: {
			x: W,
			y: G
		} };
	}
});
function getSideAndAlignFromPlacement(n) {
	let [_, E = "center"] = n.split("-");
	return [_, E];
}
var Root2$4 = Popper, Anchor = PopperAnchor, Content$1 = PopperContent, Arrow = PopperArrow, ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$3 = "RovingFocusGroup", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME$3), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME$3, [createCollectionScope$1]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3), RovingFocusGroup = React$1.forwardRef((n, _) => /* @__PURE__ */ jsx(Collection$1.Provider, {
	scope: n.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$1.Slot, {
		scope: n.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...n,
			ref: _
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$3;
var RovingFocusGroupImpl = React$1.forwardRef((_, E) => {
	let { __scopeRovingFocusGroup: O, orientation: A, loop: j = !1, dir: M, currentTabStopId: N, defaultCurrentTabStopId: P, onCurrentTabStopIdChange: z, onEntryFocus: B, preventScrollOnEntryFocus: H = !1, ...U } = _, W = React$1.useRef(null), G = useComposedRefs$1(E, W), Z = useDirection(M), [Mj, Nj] = useControllableState({
		prop: N,
		defaultProp: P ?? null,
		onChange: z,
		caller: GROUP_NAME$3
	}), [Pj, Fj] = React$1.useState(!1), Ij = useCallbackRef(B), Lj = useCollection$1(O), Rj = React$1.useRef(!1), [zj, Bj] = React$1.useState(0);
	return React$1.useEffect(() => {
		let n = W.current;
		if (n) return n.addEventListener(ENTRY_FOCUS, Ij), () => n.removeEventListener(ENTRY_FOCUS, Ij);
	}, [Ij]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: O,
		orientation: A,
		dir: Z,
		loop: j,
		currentTabStopId: Mj,
		onItemFocus: React$1.useCallback((n) => Nj(n), [Nj]),
		onItemShiftTab: React$1.useCallback(() => Fj(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => Bj((n) => n + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => Bj((n) => n - 1), []),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			tabIndex: Pj || zj === 0 ? -1 : 0,
			"data-orientation": A,
			...U,
			ref: G,
			style: {
				outline: "none",
				..._.style
			},
			onMouseDown: composeEventHandlers(_.onMouseDown, () => {
				Rj.current = !0;
			}),
			onFocus: composeEventHandlers(_.onFocus, (n) => {
				let _ = !Rj.current;
				if (n.target === n.currentTarget && _ && !Pj) {
					let _ = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (n.currentTarget.dispatchEvent(_), !_.defaultPrevented) {
						let n = Lj().filter((n) => n.focusable);
						focusFirst$1([
							n.find((n) => n.active),
							n.find((n) => n.id === Mj),
							...n
						].filter(Boolean).map((n) => n.ref.current), H);
					}
				}
				Rj.current = !1;
			}),
			onBlur: composeEventHandlers(_.onBlur, () => Fj(!1))
		})
	});
}), ITEM_NAME$3 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((_, E) => {
	let { __scopeRovingFocusGroup: O, focusable: A = !0, active: j = !1, tabStopId: M, children: N, ...P } = _, z = useId$1(), B = M || z, H = useRovingFocusContext(ITEM_NAME$3, O), U = H.currentTabStopId === B, W = useCollection$1(O), { onFocusableItemAdd: G, onFocusableItemRemove: Z, currentTabStopId: Mj } = H;
	return React$1.useEffect(() => {
		if (A) return G(), () => Z();
	}, [
		A,
		G,
		Z
	]), /* @__PURE__ */ jsx(Collection$1.ItemSlot, {
		scope: O,
		id: B,
		focusable: A,
		active: j,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			tabIndex: U ? 0 : -1,
			"data-orientation": H.orientation,
			...P,
			ref: E,
			onMouseDown: composeEventHandlers(_.onMouseDown, (n) => {
				A ? H.onItemFocus(B) : n.preventDefault();
			}),
			onFocus: composeEventHandlers(_.onFocus, () => H.onItemFocus(B)),
			onKeyDown: composeEventHandlers(_.onKeyDown, (n) => {
				if (n.key === "Tab" && n.shiftKey) {
					H.onItemShiftTab();
					return;
				}
				if (n.target !== n.currentTarget) return;
				let _ = getFocusIntent(n, H.orientation, H.dir);
				if (_ !== void 0) {
					if (n.metaKey || n.ctrlKey || n.altKey || n.shiftKey) return;
					n.preventDefault();
					let E = W().filter((n) => n.focusable).map((n) => n.ref.current);
					if (_ === "last") E.reverse();
					else if (_ === "prev" || _ === "next") {
						_ === "prev" && E.reverse();
						let O = E.indexOf(n.currentTarget);
						E = H.loop ? wrapArray$1(E, O + 1) : E.slice(O + 1);
					}
					setTimeout(() => focusFirst$1(E));
				}
			}),
			children: typeof N == "function" ? N({
				isCurrentTabStop: U,
				hasTabStop: Mj != null
			}) : N
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME$3;
var MAP_KEY_TO_FOCUS_INTENT = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function getDirectionAwareKey(n, _) {
	return _ === "rtl" ? n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n : n;
}
function getFocusIntent(n, _, E) {
	let O = getDirectionAwareKey(n.key, E);
	if (!(_ === "vertical" && ["ArrowLeft", "ArrowRight"].includes(O)) && !(_ === "horizontal" && ["ArrowUp", "ArrowDown"].includes(O))) return MAP_KEY_TO_FOCUS_INTENT[O];
}
function focusFirst$1(n, _ = !1) {
	let E = document.activeElement;
	for (let O of n) if (O === E || (O.focus({ preventScroll: _ }), document.activeElement !== E)) return;
}
function wrapArray$1(n, _) {
	return n.map((E, O) => n[(_ + O) % n.length]);
}
var Root$2 = RovingFocusGroup, Item = RovingFocusGroupItem, SELECTION_KEYS = ["Enter", " "], FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
], LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
], FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS], SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS, "ArrowRight"],
	rtl: [...SELECTION_KEYS, "ArrowLeft"]
}, SUB_CLOSE_KEYS = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, MENU_NAME = "Menu", [Collection, useCollection, createCollectionScope] = createCollection(MENU_NAME), [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
	createCollectionScope,
	createPopperScope,
	createRovingFocusGroupScope
]), usePopperScope$2 = createPopperScope(), useRovingFocusGroupScope$1 = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (_) => {
	let { __scopeMenu: E, open: O = !1, children: A, dir: j, onOpenChange: M, modal: N = !0 } = _, P = usePopperScope$2(E), [z, B] = React$1.useState(null), H = React$1.useRef(!1), U = useCallbackRef(M), W = useDirection(j);
	return React$1.useEffect(() => {
		let n = () => {
			H.current = !0, document.addEventListener("pointerdown", _, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", _, {
				capture: !0,
				once: !0
			});
		}, _ = () => H.current = !1;
		return document.addEventListener("keydown", n, { capture: !0 }), () => {
			document.removeEventListener("keydown", n, { capture: !0 }), document.removeEventListener("pointerdown", _, { capture: !0 }), document.removeEventListener("pointermove", _, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$4, {
		...P,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: E,
			open: O,
			onOpenChange: U,
			content: z,
			onContentChange: B,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: E,
				onClose: React$1.useCallback(() => U(!1), [U]),
				isUsingKeyboardRef: H,
				dir: W,
				modal: N,
				children: A
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME$1 = "MenuAnchor", MenuAnchor = React$1.forwardRef((n, _) => {
	let { __scopeMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$2(E),
		...O,
		ref: _
	});
});
MenuAnchor.displayName = ANCHOR_NAME$1;
var PORTAL_NAME$4 = "MenuPortal", [PortalProvider$2, usePortalContext$2] = createMenuContext(PORTAL_NAME$4, { forceMount: void 0 }), MenuPortal = (n) => {
	let { __scopeMenu: _, forceMount: E, children: O, container: A } = n, j = useMenuContext(PORTAL_NAME$4, _);
	return /* @__PURE__ */ jsx(PortalProvider$2, {
		scope: _,
		forceMount: E,
		children: /* @__PURE__ */ jsx(Presence, {
			present: E || j.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: A,
				children: O
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME$4;
var CONTENT_NAME$5 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$5), MenuContent = React$1.forwardRef((n, _) => {
	let E = usePortalContext$2(CONTENT_NAME$5, n.__scopeMenu), { forceMount: O = E.forceMount, ...A } = n, j = useMenuContext(CONTENT_NAME$5, n.__scopeMenu), M = useMenuRootContext(CONTENT_NAME$5, n.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection.Provider, {
		scope: n.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: O || j.open,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: n.__scopeMenu,
				children: M.modal ? /* @__PURE__ */ jsx(MenuRootContentModal, {
					...A,
					ref: _
				}) : /* @__PURE__ */ jsx(MenuRootContentNonModal, {
					...A,
					ref: _
				})
			})
		})
	});
}), MenuRootContentModal = React$1.forwardRef((_, E) => {
	let O = useMenuContext(CONTENT_NAME$5, _.__scopeMenu), A = React$1.useRef(null), j = useComposedRefs$1(E, A);
	return React$1.useEffect(() => {
		let n = A.current;
		if (n) return hideOthers(n);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		..._,
		ref: j,
		trapFocus: O.open,
		disableOutsidePointerEvents: O.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(_.onFocusOutside, (n) => n.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => O.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((n, _) => {
	let E = useMenuContext(CONTENT_NAME$5, n.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...n,
		ref: _,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => E.onOpenChange(!1)
	});
}), Slot$1 = /* @__PURE__ */ createSlot("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((_, E) => {
	let { __scopeMenu: O, loop: A = !1, trapFocus: j, onOpenAutoFocus: M, onCloseAutoFocus: N, disableOutsidePointerEvents: P, onEntryFocus: z, onEscapeKeyDown: B, onPointerDownOutside: H, onFocusOutside: U, onInteractOutside: W, onDismiss: G, disableOutsideScroll: Z, ...Mj } = _, Nj = useMenuContext(CONTENT_NAME$5, O), Pj = useMenuRootContext(CONTENT_NAME$5, O), Fj = usePopperScope$2(O), Ij = useRovingFocusGroupScope$1(O), Lj = useCollection(O), [Rj, zj] = React$1.useState(null), Bj = React$1.useRef(null), Hj = useComposedRefs$1(E, Bj, Nj.onContentChange), Uj = React$1.useRef(0), Wj = React$1.useRef(""), Gj = React$1.useRef(0), Kj = React$1.useRef(null), qj = React$1.useRef("right"), Jj = React$1.useRef(0), Yj = Z ? Combination_default : React$1.Fragment, Xj = Z ? {
		as: Slot$1,
		allowPinchZoom: !0
	} : void 0, Zj = (n) => {
		let _ = Wj.current + n, E = Lj().filter((n) => !n.disabled), O = document.activeElement, A = E.find((n) => n.ref.current === O)?.textValue, j = getNextMatch(E.map((n) => n.textValue), _, A), M = E.find((n) => n.textValue === j)?.ref.current;
		(function n(_) {
			Wj.current = _, window.clearTimeout(Uj.current), _ !== "" && (Uj.current = window.setTimeout(() => n(""), 1e3));
		})(_), M && setTimeout(() => M.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(Uj.current), []), useFocusGuards();
	let Qj = React$1.useCallback((n) => qj.current === Kj.current?.side && isPointerInGraceArea(n, Kj.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: O,
		searchRef: Wj,
		onItemEnter: React$1.useCallback((n) => {
			Qj(n) && n.preventDefault();
		}, [Qj]),
		onItemLeave: React$1.useCallback((n) => {
			Qj(n) || (Bj.current?.focus(), zj(null));
		}, [Qj]),
		onTriggerLeave: React$1.useCallback((n) => {
			Qj(n) && n.preventDefault();
		}, [Qj]),
		pointerGraceTimerRef: Gj,
		onPointerGraceIntentChange: React$1.useCallback((n) => {
			Kj.current = n;
		}, []),
		children: /* @__PURE__ */ jsx(Yj, {
			...Xj,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: j,
				onMountAutoFocus: composeEventHandlers(M, (n) => {
					n.preventDefault(), Bj.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: N,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: P,
					onEscapeKeyDown: B,
					onPointerDownOutside: H,
					onFocusOutside: U,
					onInteractOutside: W,
					onDismiss: G,
					children: /* @__PURE__ */ jsx(Root$2, {
						asChild: !0,
						...Ij,
						dir: Pj.dir,
						orientation: "vertical",
						loop: A,
						currentTabStopId: Rj,
						onCurrentTabStopIdChange: zj,
						onEntryFocus: composeEventHandlers(z, (n) => {
							Pj.isUsingKeyboardRef.current || n.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content$1, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(Nj.open),
							"data-radix-menu-content": "",
							dir: Pj.dir,
							...Fj,
							...Mj,
							ref: Hj,
							style: {
								outline: "none",
								...Mj.style
							},
							onKeyDown: composeEventHandlers(Mj.onKeyDown, (n) => {
								let _ = n.target.closest("[data-radix-menu-content]") === n.currentTarget, E = n.ctrlKey || n.altKey || n.metaKey, O = n.key.length === 1;
								_ && (n.key === "Tab" && n.preventDefault(), !E && O && Zj(n.key));
								let A = Bj.current;
								if (n.target !== A || !FIRST_LAST_KEYS.includes(n.key)) return;
								n.preventDefault();
								let j = Lj().filter((n) => !n.disabled).map((n) => n.ref.current);
								LAST_KEYS.includes(n.key) && j.reverse(), focusFirst(j);
							}),
							onBlur: composeEventHandlers(_.onBlur, (n) => {
								n.currentTarget.contains(n.target) || (window.clearTimeout(Uj.current), Wj.current = "");
							}),
							onPointerMove: composeEventHandlers(_.onPointerMove, whenMouse((n) => {
								let _ = n.target, E = Jj.current !== n.clientX;
								n.currentTarget.contains(_) && E && (qj.current = n.clientX > Jj.current ? "right" : "left", Jj.current = n.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$5;
var GROUP_NAME$2 = "MenuGroup", MenuGroup = React$1.forwardRef((n, _) => {
	let { __scopeMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "group",
		...O,
		ref: _
	});
});
MenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "MenuLabel", MenuLabel = React$1.forwardRef((n, _) => {
	let { __scopeMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Primitive.div, {
		...O,
		ref: _
	});
});
MenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((_, E) => {
	let { disabled: O = !1, onSelect: A, ...j } = _, M = React$1.useRef(null), N = useMenuRootContext(ITEM_NAME$2, _.__scopeMenu), P = useMenuContentContext(ITEM_NAME$2, _.__scopeMenu), z = useComposedRefs$1(E, M), B = React$1.useRef(!1), H = () => {
		let n = M.current;
		if (!O && n) {
			let _ = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			n.addEventListener(ITEM_SELECT, (n) => A?.(n), { once: !0 }), dispatchDiscreteCustomEvent(n, _), _.defaultPrevented ? B.current = !1 : N.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...j,
		ref: z,
		disabled: O,
		onClick: composeEventHandlers(_.onClick, H),
		onPointerDown: (n) => {
			_.onPointerDown?.(n), B.current = !0;
		},
		onPointerUp: composeEventHandlers(_.onPointerUp, (n) => {
			B.current || n.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(_.onKeyDown, (n) => {
			let _ = P.searchRef.current !== "";
			O || _ && n.key === " " || SELECTION_KEYS.includes(n.key) && (n.currentTarget.click(), n.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$2;
var MenuItemImpl = React$1.forwardRef((_, E) => {
	let { __scopeMenu: O, disabled: A = !1, textValue: j, ...M } = _, N = useMenuContentContext(ITEM_NAME$2, O), P = useRovingFocusGroupScope$1(O), z = React$1.useRef(null), B = useComposedRefs$1(E, z), [H, U] = React$1.useState(!1), [W, G] = React$1.useState("");
	return React$1.useEffect(() => {
		let n = z.current;
		n && G((n.textContent ?? "").trim());
	}, [M.children]), /* @__PURE__ */ jsx(Collection.ItemSlot, {
		scope: O,
		disabled: A,
		textValue: j ?? W,
		children: /* @__PURE__ */ jsx(Item, {
			asChild: !0,
			...P,
			focusable: !A,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "menuitem",
				"data-highlighted": H ? "" : void 0,
				"aria-disabled": A || void 0,
				"data-disabled": A ? "" : void 0,
				...M,
				ref: B,
				onPointerMove: composeEventHandlers(_.onPointerMove, whenMouse((n) => {
					A ? N.onItemLeave(n) : (N.onItemEnter(n), n.defaultPrevented || n.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(_.onPointerLeave, whenMouse((n) => N.onItemLeave(n))),
				onFocus: composeEventHandlers(_.onFocus, () => U(!0)),
				onBlur: composeEventHandlers(_.onBlur, () => U(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$2 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((n, _) => {
	let { checked: E = !1, onCheckedChange: O, ...A } = n;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: n.__scopeMenu,
		checked: E,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(E) ? "mixed" : E,
			...A,
			ref: _,
			"data-state": getCheckedState(E),
			onSelect: composeEventHandlers(A.onSelect, () => O?.(isIndeterminate(E) ? !0 : !E), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$2;
var RADIO_GROUP_NAME$2 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$2, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((n, _) => {
	let { value: E, onValueChange: O, ...A } = n, j = useCallbackRef(O);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: n.__scopeMenu,
		value: E,
		onValueChange: j,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...A,
			ref: _
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$2;
var RADIO_ITEM_NAME$2 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((n, _) => {
	let { value: E, ...O } = n, A = useRadioGroupContext(RADIO_ITEM_NAME$2, n.__scopeMenu), j = E === A.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: n.__scopeMenu,
		checked: j,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemradio",
			"aria-checked": j,
			...O,
			ref: _,
			"data-state": getCheckedState(j),
			onSelect: composeEventHandlers(O.onSelect, () => A.onValueChange?.(E), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$2;
var ITEM_INDICATOR_NAME = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((n, _) => {
	let { __scopeMenu: E, forceMount: O, ...A } = n, j = useItemIndicatorContext(ITEM_INDICATOR_NAME, E);
	return /* @__PURE__ */ jsx(Presence, {
		present: O || isIndeterminate(j.checked) || j.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			...A,
			ref: _,
			"data-state": getCheckedState(j.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME$2 = "MenuSeparator", MenuSeparator = React$1.forwardRef((n, _) => {
	let { __scopeMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...O,
		ref: _
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$4 = "MenuArrow", MenuArrow = React$1.forwardRef((n, _) => {
	let { __scopeMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$2(E),
		...O,
		ref: _
	});
});
MenuArrow.displayName = ARROW_NAME$4;
var SUB_NAME$1 = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME$1), MenuSub = (_) => {
	let { __scopeMenu: E, children: O, open: A = !1, onOpenChange: j } = _, M = useMenuContext(SUB_NAME$1, E), N = usePopperScope$2(E), [P, z] = React$1.useState(null), [B, H] = React$1.useState(null), U = useCallbackRef(j);
	return React$1.useEffect(() => (M.open === !1 && U(!1), () => U(!1)), [M.open, U]), /* @__PURE__ */ jsx(Root2$4, {
		...N,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: E,
			open: A,
			onOpenChange: U,
			content: B,
			onContentChange: H,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: E,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: P,
				onTriggerChange: z,
				children: O
			})
		})
	});
};
MenuSub.displayName = SUB_NAME$1;
var SUB_TRIGGER_NAME$2 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((_, E) => {
	let O = useMenuContext(SUB_TRIGGER_NAME$2, _.__scopeMenu), A = useMenuRootContext(SUB_TRIGGER_NAME$2, _.__scopeMenu), j = useMenuSubContext(SUB_TRIGGER_NAME$2, _.__scopeMenu), M = useMenuContentContext(SUB_TRIGGER_NAME$2, _.__scopeMenu), N = React$1.useRef(null), { pointerGraceTimerRef: P, onPointerGraceIntentChange: z } = M, B = { __scopeMenu: _.__scopeMenu }, H = React$1.useCallback(() => {
		N.current && window.clearTimeout(N.current), N.current = null;
	}, []);
	return React$1.useEffect(() => H, [H]), React$1.useEffect(() => {
		let n = P.current;
		return () => {
			window.clearTimeout(n), z(null);
		};
	}, [P, z]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...B,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: j.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": O.open,
			"aria-controls": j.contentId,
			"data-state": getOpenState(O.open),
			..._,
			ref: composeRefs$1(E, j.onTriggerChange),
			onClick: (n) => {
				_.onClick?.(n), !(_.disabled || n.defaultPrevented) && (n.currentTarget.focus(), O.open || O.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(_.onPointerMove, whenMouse((n) => {
				M.onItemEnter(n), !n.defaultPrevented && !_.disabled && !O.open && !N.current && (M.onPointerGraceIntentChange(null), N.current = window.setTimeout(() => {
					O.onOpenChange(!0), H();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(_.onPointerLeave, whenMouse((n) => {
				H();
				let _ = O.content?.getBoundingClientRect();
				if (_) {
					let E = O.content?.dataset.side, A = E === "right", j = A ? -5 : 5, N = _[A ? "left" : "right"], z = _[A ? "right" : "left"];
					M.onPointerGraceIntentChange({
						area: [
							{
								x: n.clientX + j,
								y: n.clientY
							},
							{
								x: N,
								y: _.top
							},
							{
								x: z,
								y: _.top
							},
							{
								x: z,
								y: _.bottom
							},
							{
								x: N,
								y: _.bottom
							}
						],
						side: E
					}), window.clearTimeout(P.current), P.current = window.setTimeout(() => M.onPointerGraceIntentChange(null), 300);
				} else {
					if (M.onTriggerLeave(n), n.defaultPrevented) return;
					M.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(_.onKeyDown, (n) => {
				let E = M.searchRef.current !== "";
				_.disabled || E && n.key === " " || SUB_OPEN_KEYS[A.dir].includes(n.key) && (O.onOpenChange(!0), O.content?.focus(), n.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$2;
var SUB_CONTENT_NAME$2 = "MenuSubContent", MenuSubContent = React$1.forwardRef((_, E) => {
	let O = usePortalContext$2(CONTENT_NAME$5, _.__scopeMenu), { forceMount: A = O.forceMount, ...j } = _, M = useMenuContext(CONTENT_NAME$5, _.__scopeMenu), N = useMenuRootContext(CONTENT_NAME$5, _.__scopeMenu), P = useMenuSubContext(SUB_CONTENT_NAME$2, _.__scopeMenu), z = React$1.useRef(null), B = useComposedRefs$1(E, z);
	return /* @__PURE__ */ jsx(Collection.Provider, {
		scope: _.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: A || M.open,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: _.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: P.contentId,
					"aria-labelledby": P.triggerId,
					...j,
					ref: B,
					align: "start",
					side: N.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (n) => {
						N.isUsingKeyboardRef.current && z.current?.focus(), n.preventDefault();
					},
					onCloseAutoFocus: (n) => n.preventDefault(),
					onFocusOutside: composeEventHandlers(_.onFocusOutside, (n) => {
						n.target !== P.trigger && M.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(_.onEscapeKeyDown, (n) => {
						N.onClose(), n.preventDefault();
					}),
					onKeyDown: composeEventHandlers(_.onKeyDown, (n) => {
						let _ = n.currentTarget.contains(n.target), E = SUB_CLOSE_KEYS[N.dir].includes(n.key);
						_ && E && (M.onOpenChange(!1), P.trigger?.focus(), n.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$2;
function getOpenState(n) {
	return n ? "open" : "closed";
}
function isIndeterminate(n) {
	return n === "indeterminate";
}
function getCheckedState(n) {
	return isIndeterminate(n) ? "indeterminate" : n ? "checked" : "unchecked";
}
function focusFirst(n) {
	let _ = document.activeElement;
	for (let E of n) if (E === _ || (E.focus(), document.activeElement !== _)) return;
}
function wrapArray(n, _) {
	return n.map((E, O) => n[(_ + O) % n.length]);
}
function getNextMatch(n, _, E) {
	let O = _.length > 1 && Array.from(_).every((n) => n === _[0]) ? _[0] : _, A = E ? n.indexOf(E) : -1, j = wrapArray(n, Math.max(A, 0));
	O.length === 1 && (j = j.filter((n) => n !== E));
	let M = j.find((n) => n.toLowerCase().startsWith(O.toLowerCase()));
	return M === E ? void 0 : M;
}
function isPointInPolygon$1(n, _) {
	let { x: E, y: O } = n, A = !1;
	for (let n = 0, j = _.length - 1; n < _.length; j = n++) {
		let M = _[n], N = _[j], P = M.x, z = M.y, B = N.x, H = N.y;
		z > O != H > O && E < (B - P) * (O - z) / (H - z) + P && (A = !A);
	}
	return A;
}
function isPointerInGraceArea(n, _) {
	return _ ? isPointInPolygon$1({
		x: n.clientX,
		y: n.clientY
	}, _) : !1;
}
function whenMouse(n) {
	return (_) => _.pointerType === "mouse" ? n(_) : void 0;
}
var Root3 = Menu, Anchor2$1 = MenuAnchor, Portal$2 = MenuPortal, Content2$3 = MenuContent, Group = MenuGroup, Label = MenuLabel, Item2$2 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator = MenuItemIndicator, Separator = MenuSeparator, Arrow2 = MenuArrow, Sub = MenuSub, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, CONTEXT_MENU_NAME = "ContextMenu", [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [createMenuScope]), useMenuScope$1 = createMenuScope(), [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME), ContextMenu = (_) => {
	let { __scopeContextMenu: E, children: O, onOpenChange: A, dir: j, modal: M = !0 } = _, [N, P] = React$1.useState(!1), z = useMenuScope$1(E), B = useCallbackRef(A), H = React$1.useCallback((n) => {
		P(n), B(n);
	}, [B]);
	return /* @__PURE__ */ jsx(ContextMenuProvider, {
		scope: E,
		open: N,
		onOpenChange: H,
		modal: M,
		children: /* @__PURE__ */ jsx(Root3, {
			...z,
			dir: j,
			open: N,
			onOpenChange: H,
			modal: M,
			children: O
		})
	});
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME$4 = "ContextMenuTrigger", ContextMenuTrigger = React$1.forwardRef((_, E) => {
	let { __scopeContextMenu: O, disabled: A = !1, ...j } = _, M = useContextMenuContext(TRIGGER_NAME$4, O), N = useMenuScope$1(O), P = React$1.useRef({
		x: 0,
		y: 0
	}), z = React$1.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...P.current
	}) }), B = React$1.useRef(0), H = React$1.useCallback(() => window.clearTimeout(B.current), []), U = (n) => {
		P.current = {
			x: n.clientX,
			y: n.clientY
		}, M.onOpenChange(!0);
	};
	return React$1.useEffect(() => H, [H]), React$1.useEffect(() => void (A && H()), [A, H]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Anchor2$1, {
		...N,
		virtualRef: z
	}), /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": M.open ? "open" : "closed",
		"data-disabled": A ? "" : void 0,
		...j,
		ref: E,
		style: {
			WebkitTouchCallout: "none",
			..._.style
		},
		onContextMenu: A ? _.onContextMenu : composeEventHandlers(_.onContextMenu, (n) => {
			H(), U(n), n.preventDefault();
		}),
		onPointerDown: A ? _.onPointerDown : composeEventHandlers(_.onPointerDown, whenTouchOrPen((n) => {
			H(), B.current = window.setTimeout(() => U(n), 700);
		})),
		onPointerMove: A ? _.onPointerMove : composeEventHandlers(_.onPointerMove, whenTouchOrPen(H)),
		onPointerCancel: A ? _.onPointerCancel : composeEventHandlers(_.onPointerCancel, whenTouchOrPen(H)),
		onPointerUp: A ? _.onPointerUp : composeEventHandlers(_.onPointerUp, whenTouchOrPen(H))
	})] });
});
ContextMenuTrigger.displayName = TRIGGER_NAME$4;
var PORTAL_NAME$3 = "ContextMenuPortal", ContextMenuPortal = (n) => {
	let { __scopeContextMenu: _, ...E } = n;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope$1(_),
		...E
	});
};
ContextMenuPortal.displayName = PORTAL_NAME$3;
var CONTENT_NAME$4 = "ContextMenuContent", ContextMenuContent = React$1.forwardRef((_, E) => {
	let { __scopeContextMenu: O, ...A } = _, j = useContextMenuContext(CONTENT_NAME$4, O), M = useMenuScope$1(O), N = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$3, {
		...M,
		...A,
		ref: E,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (n) => {
			_.onCloseAutoFocus?.(n), !n.defaultPrevented && N.current && n.preventDefault(), N.current = !1;
		},
		onInteractOutside: (n) => {
			_.onInteractOutside?.(n), !n.defaultPrevented && !j.modal && (N.current = !0);
		},
		style: {
			..._.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ContextMenuContent.displayName = CONTENT_NAME$4;
var GROUP_NAME$1 = "ContextMenuGroup", ContextMenuGroup = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuGroup.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "ContextMenuLabel", ContextMenuLabel = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Label, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuLabel.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "ContextMenuItem", ContextMenuItem = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Item2$2, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuItem.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME$1 = "ContextMenuCheckboxItem", ContextMenuCheckboxItem = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "ContextMenuRadioGroup", ContextMenuRadioGroup = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "ContextMenuRadioItem", ContextMenuRadioItem = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var INDICATOR_NAME$1 = "ContextMenuItemIndicator", ContextMenuItemIndicator = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(ItemIndicator, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME$1;
var SEPARATOR_NAME$1 = "ContextMenuSeparator", ContextMenuSeparator = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Separator, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuSeparator.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$3 = "ContextMenuArrow", ContextMenuArrow = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuArrow.displayName = ARROW_NAME$3;
var SUB_NAME = "ContextMenuSub", ContextMenuSub = (n) => {
	let { __scopeContextMenu: _, children: E, onOpenChange: O, open: A, defaultOpen: j } = n, M = useMenuScope$1(_), [N, P] = useControllableState({
		prop: A,
		defaultProp: j ?? !1,
		onChange: O,
		caller: SUB_NAME
	});
	return /* @__PURE__ */ jsx(Sub, {
		...M,
		open: N,
		onOpenChange: P,
		children: E
	});
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "ContextMenuSubTrigger", ContextMenuSubTrigger = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope$1(E),
		...O,
		ref: _
	});
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "ContextMenuSubContent", ContextMenuSubContent = React$1.forwardRef((n, _) => {
	let { __scopeContextMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope$1(E),
		...O,
		ref: _,
		style: {
			...n.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME$1;
function whenTouchOrPen(n) {
	return (_) => _.pointerType === "mouse" ? void 0 : n(_);
}
var Root2$3 = ContextMenu, Trigger$3 = ContextMenuTrigger, Portal2$1 = ContextMenuPortal, Content2$2 = ContextMenuContent, Item2$1 = ContextMenuItem, Separator2$1 = ContextMenuSeparator, Sub2$1 = ContextMenuSub, SubTrigger2$1 = ContextMenuSubTrigger, SubContent2$1 = ContextMenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu = (_) => {
	let { __scopeDropdownMenu: E, children: O, dir: A, open: j, defaultOpen: M, onOpenChange: N, modal: P = !0 } = _, z = useMenuScope(E), B = React$1.useRef(null), [H, U] = useControllableState({
		prop: j,
		defaultProp: M ?? !1,
		onChange: N,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: E,
		triggerId: useId$1(),
		triggerRef: B,
		contentId: useId$1(),
		open: H,
		onOpenChange: U,
		onOpenToggle: React$1.useCallback(() => U((n) => !n), [U]),
		modal: P,
		children: /* @__PURE__ */ jsx(Root3, {
			...z,
			open: H,
			onOpenChange: U,
			dir: A,
			modal: P,
			children: O
		})
	});
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$3 = "DropdownMenuTrigger", DropdownMenuTrigger = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, disabled: O = !1, ...A } = n, j = useDropdownMenuContext(TRIGGER_NAME$3, E);
	return /* @__PURE__ */ jsx(Anchor2$1, {
		asChild: !0,
		...useMenuScope(E),
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			id: j.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": j.open,
			"aria-controls": j.open ? j.contentId : void 0,
			"data-state": j.open ? "open" : "closed",
			"data-disabled": O ? "" : void 0,
			disabled: O,
			...A,
			ref: composeRefs$1(_, j.triggerRef),
			onPointerDown: composeEventHandlers(n.onPointerDown, (n) => {
				!O && n.button === 0 && n.ctrlKey === !1 && (j.onOpenToggle(), j.open || n.preventDefault());
			}),
			onKeyDown: composeEventHandlers(n.onKeyDown, (n) => {
				O || (["Enter", " "].includes(n.key) && j.onOpenToggle(), n.key === "ArrowDown" && j.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(n.key) && n.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger.displayName = TRIGGER_NAME$3;
var PORTAL_NAME$2 = "DropdownMenuPortal", DropdownMenuPortal = (n) => {
	let { __scopeDropdownMenu: _, ...E } = n;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope(_),
		...E
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$3 = "DropdownMenuContent", DropdownMenuContent = React$1.forwardRef((_, E) => {
	let { __scopeDropdownMenu: O, ...A } = _, j = useDropdownMenuContext(CONTENT_NAME$3, O), M = useMenuScope(O), N = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$3, {
		id: j.contentId,
		"aria-labelledby": j.triggerId,
		...M,
		...A,
		ref: E,
		onCloseAutoFocus: composeEventHandlers(_.onCloseAutoFocus, (n) => {
			N.current || j.triggerRef.current?.focus(), N.current = !1, n.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(_.onInteractOutside, (n) => {
			let _ = n.detail.originalEvent, E = _.button === 0 && _.ctrlKey === !0, O = _.button === 2 || E;
			(!j.modal || O) && (N.current = !0);
		}),
		style: {
			..._.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent.displayName = CONTENT_NAME$3;
var GROUP_NAME = "DropdownMenuGroup", DropdownMenuGroup = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel", DropdownMenuLabel = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Label, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem", DropdownMenuItem = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Item2$2, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(ItemIndicator, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator", DropdownMenuSeparator = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Separator, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME$2 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$2;
var DropdownMenuSub = (n) => {
	let { __scopeDropdownMenu: _, children: E, open: O, onOpenChange: A, defaultOpen: j } = n, M = useMenuScope(_), [N, P] = useControllableState({
		prop: O,
		defaultProp: j ?? !1,
		onChange: A,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ jsx(Sub, {
		...M,
		open: N,
		onOpenChange: P,
		children: E
	});
}, SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(E),
		...O,
		ref: _
	});
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent = React$1.forwardRef((n, _) => {
	let { __scopeDropdownMenu: E, ...O } = n;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(E),
		...O,
		ref: _,
		style: {
			...n.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2$2 = DropdownMenu, Trigger$2 = DropdownMenuTrigger, Portal2 = DropdownMenuPortal, Content2$1 = DropdownMenuContent, Group2 = DropdownMenuGroup, Label2 = DropdownMenuLabel, Item2 = DropdownMenuItem, CheckboxItem2 = DropdownMenuCheckboxItem, RadioGroup2 = DropdownMenuRadioGroup, RadioItem2 = DropdownMenuRadioItem, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator, Sub2 = DropdownMenuSub, SubTrigger2 = DropdownMenuSubTrigger, SubContent2 = DropdownMenuSubContent;
function clamp$2(n, [_, E]) {
	return Math.min(E, Math.max(_, n));
}
var POPOVER_NAME = "Popover", [createPopoverContext, createPopoverScope] = createContextScope(POPOVER_NAME, [createPopperScope]), usePopperScope$1 = createPopperScope(), [PopoverProvider, usePopoverContext] = createPopoverContext(POPOVER_NAME), Popover = (_) => {
	let { __scopePopover: E, children: O, open: A, defaultOpen: j, onOpenChange: M, modal: N = !1 } = _, P = usePopperScope$1(E), z = React$1.useRef(null), [B, H] = React$1.useState(!1), [U, W] = useControllableState({
		prop: A,
		defaultProp: j ?? !1,
		onChange: M,
		caller: POPOVER_NAME
	});
	return /* @__PURE__ */ jsx(Root2$4, {
		...P,
		children: /* @__PURE__ */ jsx(PopoverProvider, {
			scope: E,
			contentId: useId$1(),
			triggerRef: z,
			open: U,
			onOpenChange: W,
			onOpenToggle: React$1.useCallback(() => W((n) => !n), [W]),
			hasCustomAnchor: B,
			onCustomAnchorAdd: React$1.useCallback(() => H(!0), []),
			onCustomAnchorRemove: React$1.useCallback(() => H(!1), []),
			modal: N,
			children: O
		})
	});
};
Popover.displayName = POPOVER_NAME;
var ANCHOR_NAME = "PopoverAnchor", PopoverAnchor = React$1.forwardRef((_, E) => {
	let { __scopePopover: O, ...A } = _, j = usePopoverContext(ANCHOR_NAME, O), M = usePopperScope$1(O), { onCustomAnchorAdd: N, onCustomAnchorRemove: P } = j;
	return React$1.useEffect(() => (N(), () => P()), [N, P]), /* @__PURE__ */ jsx(Anchor, {
		...M,
		...A,
		ref: E
	});
});
PopoverAnchor.displayName = ANCHOR_NAME;
var TRIGGER_NAME$2 = "PopoverTrigger", PopoverTrigger = React$1.forwardRef((n, _) => {
	let { __scopePopover: E, ...O } = n, A = usePopoverContext(TRIGGER_NAME$2, E), j = usePopperScope$1(E), M = useComposedRefs$1(_, A.triggerRef), N = /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": A.open,
		"aria-controls": A.contentId,
		"data-state": getState$1(A.open),
		...O,
		ref: M,
		onClick: composeEventHandlers(n.onClick, A.onOpenToggle)
	});
	return A.hasCustomAnchor ? N : /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...j,
		children: N
	});
});
PopoverTrigger.displayName = TRIGGER_NAME$2;
var PORTAL_NAME$1 = "PopoverPortal", [PortalProvider$1, usePortalContext$1] = createPopoverContext(PORTAL_NAME$1, { forceMount: void 0 }), PopoverPortal = (n) => {
	let { __scopePopover: _, forceMount: E, children: O, container: A } = n, j = usePopoverContext(PORTAL_NAME$1, _);
	return /* @__PURE__ */ jsx(PortalProvider$1, {
		scope: _,
		forceMount: E,
		children: /* @__PURE__ */ jsx(Presence, {
			present: E || j.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: A,
				children: O
			})
		})
	});
};
PopoverPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$2 = "PopoverContent", PopoverContent = React$1.forwardRef((n, _) => {
	let E = usePortalContext$1(CONTENT_NAME$2, n.__scopePopover), { forceMount: O = E.forceMount, ...A } = n, j = usePopoverContext(CONTENT_NAME$2, n.__scopePopover);
	return /* @__PURE__ */ jsx(Presence, {
		present: O || j.open,
		children: j.modal ? /* @__PURE__ */ jsx(PopoverContentModal, {
			...A,
			ref: _
		}) : /* @__PURE__ */ jsx(PopoverContentNonModal, {
			...A,
			ref: _
		})
	});
});
PopoverContent.displayName = CONTENT_NAME$2;
var Slot = /* @__PURE__ */ createSlot("PopoverContent.RemoveScroll"), PopoverContentModal = React$1.forwardRef((_, E) => {
	let O = usePopoverContext(CONTENT_NAME$2, _.__scopePopover), A = React$1.useRef(null), j = useComposedRefs$1(E, A), M = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let n = A.current;
		if (n) return hideOthers(n);
	}, []), /* @__PURE__ */ jsx(Combination_default, {
		as: Slot,
		allowPinchZoom: !0,
		children: /* @__PURE__ */ jsx(PopoverContentImpl, {
			..._,
			ref: j,
			trapFocus: O.open,
			disableOutsidePointerEvents: !0,
			onCloseAutoFocus: composeEventHandlers(_.onCloseAutoFocus, (n) => {
				n.preventDefault(), M.current || O.triggerRef.current?.focus();
			}),
			onPointerDownOutside: composeEventHandlers(_.onPointerDownOutside, (n) => {
				let _ = n.detail.originalEvent, E = _.button === 0 && _.ctrlKey === !0;
				M.current = _.button === 2 || E;
			}, { checkForDefaultPrevented: !1 }),
			onFocusOutside: composeEventHandlers(_.onFocusOutside, (n) => n.preventDefault(), { checkForDefaultPrevented: !1 })
		})
	});
}), PopoverContentNonModal = React$1.forwardRef((_, E) => {
	let O = usePopoverContext(CONTENT_NAME$2, _.__scopePopover), A = React$1.useRef(!1), j = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(PopoverContentImpl, {
		..._,
		ref: E,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (n) => {
			_.onCloseAutoFocus?.(n), n.defaultPrevented || (A.current || O.triggerRef.current?.focus(), n.preventDefault()), A.current = !1, j.current = !1;
		},
		onInteractOutside: (n) => {
			_.onInteractOutside?.(n), n.defaultPrevented || (A.current = !0, n.detail.originalEvent.type === "pointerdown" && (j.current = !0));
			let E = n.target;
			O.triggerRef.current?.contains(E) && n.preventDefault(), n.detail.originalEvent.type === "focusin" && j.current && n.preventDefault();
		}
	});
}), PopoverContentImpl = React$1.forwardRef((n, _) => {
	let { __scopePopover: E, trapFocus: O, onOpenAutoFocus: A, onCloseAutoFocus: j, disableOutsidePointerEvents: M, onEscapeKeyDown: N, onPointerDownOutside: P, onFocusOutside: z, onInteractOutside: B, ...H } = n, U = usePopoverContext(CONTENT_NAME$2, E), W = usePopperScope$1(E);
	return useFocusGuards(), /* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: O,
		onMountAutoFocus: A,
		onUnmountAutoFocus: j,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			asChild: !0,
			disableOutsidePointerEvents: M,
			onInteractOutside: B,
			onEscapeKeyDown: N,
			onPointerDownOutside: P,
			onFocusOutside: z,
			onDismiss: () => U.onOpenChange(!1),
			children: /* @__PURE__ */ jsx(Content$1, {
				"data-state": getState$1(U.open),
				role: "dialog",
				id: U.contentId,
				...W,
				...H,
				ref: _,
				style: {
					...H.style,
					"--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
					"--radix-popover-content-available-width": "var(--radix-popper-available-width)",
					"--radix-popover-content-available-height": "var(--radix-popper-available-height)",
					"--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
					"--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
				}
			})
		})
	});
}), CLOSE_NAME = "PopoverClose", PopoverClose = React$1.forwardRef((n, _) => {
	let { __scopePopover: E, ...O } = n, A = usePopoverContext(CLOSE_NAME, E);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...O,
		ref: _,
		onClick: composeEventHandlers(n.onClick, () => A.onOpenChange(!1))
	});
});
PopoverClose.displayName = CLOSE_NAME;
var ARROW_NAME$1 = "PopoverArrow", PopoverArrow = React$1.forwardRef((n, _) => {
	let { __scopePopover: E, ...O } = n;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(E),
		...O,
		ref: _
	});
});
PopoverArrow.displayName = ARROW_NAME$1;
function getState$1(n) {
	return n ? "open" : "closed";
}
var Root2$1 = Popover, Anchor2 = PopoverAnchor, Trigger$1 = PopoverTrigger, Portal$1 = PopoverPortal, Content2 = PopoverContent, Close = PopoverClose;
function useStateMachine(_, E) {
	return React$1.useReducer((n, _) => E[n][_] ?? n, _);
}
var SCROLL_AREA_NAME = "ScrollArea", [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME), [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME), ScrollArea = React$1.forwardRef((_, E) => {
	let { __scopeScrollArea: O, type: A = "hover", dir: j, scrollHideDelay: M = 600, ...N } = _, [P, z] = React$1.useState(null), [B, H] = React$1.useState(null), [U, W] = React$1.useState(null), [G, Z] = React$1.useState(null), [Mj, Nj] = React$1.useState(null), [Pj, Fj] = React$1.useState(0), [Ij, Lj] = React$1.useState(0), [Rj, zj] = React$1.useState(!1), [Bj, Hj] = React$1.useState(!1), Uj = useComposedRefs$1(E, (n) => z(n)), Wj = useDirection(j);
	return /* @__PURE__ */ jsx(ScrollAreaProvider, {
		scope: O,
		type: A,
		dir: Wj,
		scrollHideDelay: M,
		scrollArea: P,
		viewport: B,
		onViewportChange: H,
		content: U,
		onContentChange: W,
		scrollbarX: G,
		onScrollbarXChange: Z,
		scrollbarXEnabled: Rj,
		onScrollbarXEnabledChange: zj,
		scrollbarY: Mj,
		onScrollbarYChange: Nj,
		scrollbarYEnabled: Bj,
		onScrollbarYEnabledChange: Hj,
		onCornerWidthChange: Fj,
		onCornerHeightChange: Lj,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			dir: Wj,
			...N,
			ref: Uj,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": Pj + "px",
				"--radix-scroll-area-corner-height": Ij + "px",
				..._.style
			}
		})
	});
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport", ScrollAreaViewport = React$1.forwardRef((_, E) => {
	let { __scopeScrollArea: O, children: A, nonce: j, ...M } = _, N = useScrollAreaContext(VIEWPORT_NAME, O), P = useComposedRefs$1(E, React$1.useRef(null), N.onViewportChange);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: j
	}), /* @__PURE__ */ jsx(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...M,
		ref: P,
		style: {
			overflowX: N.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: N.scrollbarYEnabled ? "scroll" : "hidden",
			..._.style
		},
		children: /* @__PURE__ */ jsx("div", {
			ref: N.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: A
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar", ScrollAreaScrollbar = React$1.forwardRef((_, E) => {
	let { forceMount: O, ...A } = _, j = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), { onScrollbarXEnabledChange: M, onScrollbarYEnabledChange: N } = j, P = _.orientation === "horizontal";
	return React$1.useEffect(() => (P ? M(!0) : N(!0), () => {
		P ? M(!1) : N(!1);
	}), [
		P,
		M,
		N
	]), j.type === "hover" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarHover, {
		...A,
		ref: E,
		forceMount: O
	}) : j.type === "scroll" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarScroll, {
		...A,
		ref: E,
		forceMount: O
	}) : j.type === "auto" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
		...A,
		ref: E,
		forceMount: O
	}) : j.type === "always" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
		...A,
		ref: E
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React$1.forwardRef((_, E) => {
	let { forceMount: O, ...A } = _, j = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), [M, N] = React$1.useState(!1);
	return React$1.useEffect(() => {
		let n = j.scrollArea, _ = 0;
		if (n) {
			let E = () => {
				window.clearTimeout(_), N(!0);
			}, O = () => {
				_ = window.setTimeout(() => N(!1), j.scrollHideDelay);
			};
			return n.addEventListener("pointerenter", E), n.addEventListener("pointerleave", O), () => {
				window.clearTimeout(_), n.removeEventListener("pointerenter", E), n.removeEventListener("pointerleave", O);
			};
		}
	}, [j.scrollArea, j.scrollHideDelay]), /* @__PURE__ */ jsx(Presence, {
		present: O || M,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
			"data-state": M ? "visible" : "hidden",
			...A,
			ref: E
		})
	});
}), ScrollAreaScrollbarScroll = React$1.forwardRef((_, E) => {
	let { forceMount: O, ...A } = _, j = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), M = _.orientation === "horizontal", N = useDebounceCallback(() => z("SCROLL_END"), 100), [P, z] = useStateMachine("hidden", {
		hidden: { SCROLL: "scrolling" },
		scrolling: {
			SCROLL_END: "idle",
			POINTER_ENTER: "interacting"
		},
		interacting: {
			SCROLL: "interacting",
			POINTER_LEAVE: "idle"
		},
		idle: {
			HIDE: "hidden",
			SCROLL: "scrolling",
			POINTER_ENTER: "interacting"
		}
	});
	return React$1.useEffect(() => {
		if (P === "idle") {
			let n = window.setTimeout(() => z("HIDE"), j.scrollHideDelay);
			return () => window.clearTimeout(n);
		}
	}, [
		P,
		j.scrollHideDelay,
		z
	]), React$1.useEffect(() => {
		let n = j.viewport, _ = M ? "scrollLeft" : "scrollTop";
		if (n) {
			let E = n[_], O = () => {
				let O = n[_];
				E !== O && (z("SCROLL"), N()), E = O;
			};
			return n.addEventListener("scroll", O), () => n.removeEventListener("scroll", O);
		}
	}, [
		j.viewport,
		M,
		z,
		N
	]), /* @__PURE__ */ jsx(Presence, {
		present: O || P !== "hidden",
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": P === "hidden" ? "hidden" : "visible",
			...A,
			ref: E,
			onPointerEnter: composeEventHandlers(_.onPointerEnter, () => z("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(_.onPointerLeave, () => z("POINTER_LEAVE"))
		})
	});
}), ScrollAreaScrollbarAuto = React$1.forwardRef((_, E) => {
	let O = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), { forceMount: A, ...j } = _, [M, N] = React$1.useState(!1), P = _.orientation === "horizontal", z = useDebounceCallback(() => {
		if (O.viewport) {
			let n = O.viewport.offsetWidth < O.viewport.scrollWidth, _ = O.viewport.offsetHeight < O.viewport.scrollHeight;
			N(P ? n : _);
		}
	}, 10);
	return useResizeObserver(O.viewport, z), useResizeObserver(O.content, z), /* @__PURE__ */ jsx(Presence, {
		present: A || M,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": M ? "visible" : "hidden",
			...j,
			ref: E
		})
	});
}), ScrollAreaScrollbarVisible = React$1.forwardRef((_, E) => {
	let { orientation: O = "vertical", ...A } = _, j = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), M = React$1.useRef(null), N = React$1.useRef(0), [P, z] = React$1.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), B = getThumbRatio(P.viewport, P.content), H = {
		...A,
		sizes: P,
		onSizesChange: z,
		hasThumb: B > 0 && B < 1,
		onThumbChange: (n) => M.current = n,
		onThumbPointerUp: () => N.current = 0,
		onThumbPointerDown: (n) => N.current = n
	};
	function U(n, _) {
		return getScrollPositionFromPointer(n, N.current, P, _);
	}
	return O === "horizontal" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarX, {
		...H,
		ref: E,
		onThumbPositionChange: () => {
			if (j.viewport && M.current) {
				let n = j.viewport.scrollLeft, _ = getThumbOffsetFromScroll(n, P, j.dir);
				M.current.style.transform = `translate3d(${_}px, 0, 0)`;
			}
		},
		onWheelScroll: (n) => {
			j.viewport && (j.viewport.scrollLeft = n);
		},
		onDragScroll: (n) => {
			j.viewport && (j.viewport.scrollLeft = U(n, j.dir));
		}
	}) : O === "vertical" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarY, {
		...H,
		ref: E,
		onThumbPositionChange: () => {
			if (j.viewport && M.current) {
				let n = j.viewport.scrollTop, _ = getThumbOffsetFromScroll(n, P);
				M.current.style.transform = `translate3d(0, ${_}px, 0)`;
			}
		},
		onWheelScroll: (n) => {
			j.viewport && (j.viewport.scrollTop = n);
		},
		onDragScroll: (n) => {
			j.viewport && (j.viewport.scrollTop = U(n));
		}
	}) : null;
}), ScrollAreaScrollbarX = React$1.forwardRef((_, E) => {
	let { sizes: O, onSizesChange: A, ...j } = _, M = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), [N, P] = React$1.useState(), z = React$1.useRef(null), B = useComposedRefs$1(E, z, M.onScrollbarXChange);
	return React$1.useEffect(() => {
		z.current && P(getComputedStyle(z.current));
	}, [z]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...j,
		ref: B,
		sizes: O,
		style: {
			bottom: 0,
			left: M.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: M.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": getThumbSize(O) + "px",
			..._.style
		},
		onThumbPointerDown: (n) => _.onThumbPointerDown(n.x),
		onDragScroll: (n) => _.onDragScroll(n.x),
		onWheelScroll: (n, E) => {
			if (M.viewport) {
				let O = M.viewport.scrollLeft + n.deltaX;
				_.onWheelScroll(O), isScrollingWithinScrollbarBounds(O, E) && n.preventDefault();
			}
		},
		onResize: () => {
			z.current && M.viewport && N && A({
				content: M.viewport.scrollWidth,
				viewport: M.viewport.offsetWidth,
				scrollbar: {
					size: z.current.clientWidth,
					paddingStart: toInt(N.paddingLeft),
					paddingEnd: toInt(N.paddingRight)
				}
			});
		}
	});
}), ScrollAreaScrollbarY = React$1.forwardRef((_, E) => {
	let { sizes: O, onSizesChange: A, ...j } = _, M = useScrollAreaContext(SCROLLBAR_NAME, _.__scopeScrollArea), [N, P] = React$1.useState(), z = React$1.useRef(null), B = useComposedRefs$1(E, z, M.onScrollbarYChange);
	return React$1.useEffect(() => {
		z.current && P(getComputedStyle(z.current));
	}, [z]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...j,
		ref: B,
		sizes: O,
		style: {
			top: 0,
			right: M.dir === "ltr" ? 0 : void 0,
			left: M.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": getThumbSize(O) + "px",
			..._.style
		},
		onThumbPointerDown: (n) => _.onThumbPointerDown(n.y),
		onDragScroll: (n) => _.onDragScroll(n.y),
		onWheelScroll: (n, E) => {
			if (M.viewport) {
				let O = M.viewport.scrollTop + n.deltaY;
				_.onWheelScroll(O), isScrollingWithinScrollbarBounds(O, E) && n.preventDefault();
			}
		},
		onResize: () => {
			z.current && M.viewport && N && A({
				content: M.viewport.scrollHeight,
				viewport: M.viewport.offsetHeight,
				scrollbar: {
					size: z.current.clientHeight,
					paddingStart: toInt(N.paddingTop),
					paddingEnd: toInt(N.paddingBottom)
				}
			});
		}
	});
}), [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME), ScrollAreaScrollbarImpl = React$1.forwardRef((_, E) => {
	let { __scopeScrollArea: O, sizes: A, hasThumb: j, onThumbChange: M, onThumbPointerUp: N, onThumbPointerDown: P, onThumbPositionChange: z, onDragScroll: B, onWheelScroll: H, onResize: U, ...W } = _, G = useScrollAreaContext(SCROLLBAR_NAME, O), [Z, Mj] = React$1.useState(null), Nj = useComposedRefs$1(E, (n) => Mj(n)), Pj = React$1.useRef(null), Fj = React$1.useRef(""), Ij = G.viewport, Lj = A.content - A.viewport, Rj = useCallbackRef(H), zj = useCallbackRef(z), Bj = useDebounceCallback(U, 10);
	function Hj(n) {
		Pj.current && B({
			x: n.clientX - Pj.current.left,
			y: n.clientY - Pj.current.top
		});
	}
	return React$1.useEffect(() => {
		let n = (n) => {
			let _ = n.target;
			Z?.contains(_) && Rj(n, Lj);
		};
		return document.addEventListener("wheel", n, { passive: !1 }), () => document.removeEventListener("wheel", n, { passive: !1 });
	}, [
		Ij,
		Z,
		Lj,
		Rj
	]), React$1.useEffect(zj, [A, zj]), useResizeObserver(Z, Bj), useResizeObserver(G.content, Bj), /* @__PURE__ */ jsx(ScrollbarProvider, {
		scope: O,
		scrollbar: Z,
		hasThumb: j,
		onThumbChange: useCallbackRef(M),
		onThumbPointerUp: useCallbackRef(N),
		onThumbPositionChange: zj,
		onThumbPointerDown: useCallbackRef(P),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			...W,
			ref: Nj,
			style: {
				position: "absolute",
				...W.style
			},
			onPointerDown: composeEventHandlers(_.onPointerDown, (n) => {
				n.button === 0 && (n.target.setPointerCapture(n.pointerId), Pj.current = Z.getBoundingClientRect(), Fj.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", G.viewport && (G.viewport.style.scrollBehavior = "auto"), Hj(n));
			}),
			onPointerMove: composeEventHandlers(_.onPointerMove, Hj),
			onPointerUp: composeEventHandlers(_.onPointerUp, (n) => {
				let _ = n.target;
				_.hasPointerCapture(n.pointerId) && _.releasePointerCapture(n.pointerId), document.body.style.webkitUserSelect = Fj.current, G.viewport && (G.viewport.style.scrollBehavior = ""), Pj.current = null;
			})
		})
	});
}), THUMB_NAME$1 = "ScrollAreaThumb", ScrollAreaThumb = React$1.forwardRef((n, _) => {
	let { forceMount: E, ...O } = n, A = useScrollbarContext(THUMB_NAME$1, n.__scopeScrollArea);
	return /* @__PURE__ */ jsx(Presence, {
		present: E || A.hasThumb,
		children: /* @__PURE__ */ jsx(ScrollAreaThumbImpl, {
			ref: _,
			...O
		})
	});
}), ScrollAreaThumbImpl = React$1.forwardRef((_, E) => {
	let { __scopeScrollArea: O, style: A, ...j } = _, M = useScrollAreaContext(THUMB_NAME$1, O), N = useScrollbarContext(THUMB_NAME$1, O), { onThumbPositionChange: P } = N, z = useComposedRefs$1(E, (n) => N.onThumbChange(n)), B = React$1.useRef(void 0), H = useDebounceCallback(() => {
		B.current &&= (B.current(), void 0);
	}, 100);
	return React$1.useEffect(() => {
		let n = M.viewport;
		if (n) {
			let _ = () => {
				H(), B.current || (B.current = addUnlinkedScrollListener(n, P), P());
			};
			return P(), n.addEventListener("scroll", _), () => n.removeEventListener("scroll", _);
		}
	}, [
		M.viewport,
		H,
		P
	]), /* @__PURE__ */ jsx(Primitive.div, {
		"data-state": N.hasThumb ? "visible" : "hidden",
		...j,
		ref: z,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...A
		},
		onPointerDownCapture: composeEventHandlers(_.onPointerDownCapture, (n) => {
			let _ = n.target.getBoundingClientRect(), E = n.clientX - _.left, O = n.clientY - _.top;
			N.onThumbPointerDown({
				x: E,
				y: O
			});
		}),
		onPointerUp: composeEventHandlers(_.onPointerUp, N.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME$1;
var CORNER_NAME = "ScrollAreaCorner", ScrollAreaCorner = React$1.forwardRef((n, _) => {
	let E = useScrollAreaContext(CORNER_NAME, n.__scopeScrollArea), O = !!(E.scrollbarX && E.scrollbarY);
	return E.type !== "scroll" && O ? /* @__PURE__ */ jsx(ScrollAreaCornerImpl, {
		...n,
		ref: _
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React$1.forwardRef((_, E) => {
	let { __scopeScrollArea: O, ...A } = _, j = useScrollAreaContext(CORNER_NAME, O), [M, N] = React$1.useState(0), [P, z] = React$1.useState(0), B = !!(M && P);
	return useResizeObserver(j.scrollbarX, () => {
		let n = j.scrollbarX?.offsetHeight || 0;
		j.onCornerHeightChange(n), z(n);
	}), useResizeObserver(j.scrollbarY, () => {
		let n = j.scrollbarY?.offsetWidth || 0;
		j.onCornerWidthChange(n), N(n);
	}), B ? /* @__PURE__ */ jsx(Primitive.div, {
		...A,
		ref: E,
		style: {
			width: M,
			height: P,
			position: "absolute",
			right: j.dir === "ltr" ? 0 : void 0,
			left: j.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			..._.style
		}
	}) : null;
});
function toInt(n) {
	return n ? parseInt(n, 10) : 0;
}
function getThumbRatio(n, _) {
	let E = n / _;
	return isNaN(E) ? 0 : E;
}
function getThumbSize(n) {
	let _ = getThumbRatio(n.viewport, n.content), E = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, O = (n.scrollbar.size - E) * _;
	return Math.max(O, 18);
}
function getScrollPositionFromPointer(n, _, E, O = "ltr") {
	let A = getThumbSize(E), j = A / 2, M = _ || j, N = A - M, P = E.scrollbar.paddingStart + M, z = E.scrollbar.size - E.scrollbar.paddingEnd - N, B = E.content - E.viewport, H = O === "ltr" ? [0, B] : [B * -1, 0];
	return linearScale([P, z], H)(n);
}
function getThumbOffsetFromScroll(n, _, E = "ltr") {
	let O = getThumbSize(_), A = _.scrollbar.paddingStart + _.scrollbar.paddingEnd, j = _.scrollbar.size - A, M = _.content - _.viewport, N = j - O, P = clamp$2(n, E === "ltr" ? [0, M] : [M * -1, 0]);
	return linearScale([0, M], [0, N])(P);
}
function linearScale(n, _) {
	return (E) => {
		if (n[0] === n[1] || _[0] === _[1]) return _[0];
		let O = (_[1] - _[0]) / (n[1] - n[0]);
		return _[0] + O * (E - n[0]);
	};
}
function isScrollingWithinScrollbarBounds(n, _) {
	return n > 0 && n < _;
}
var addUnlinkedScrollListener = (n, _ = () => {}) => {
	let E = {
		left: n.scrollLeft,
		top: n.scrollTop
	}, O = 0;
	return (function A() {
		let j = {
			left: n.scrollLeft,
			top: n.scrollTop
		}, M = E.left !== j.left, N = E.top !== j.top;
		(M || N) && _(), E = j, O = window.requestAnimationFrame(A);
	})(), () => window.cancelAnimationFrame(O);
};
function useDebounceCallback(_, E) {
	let O = useCallbackRef(_), A = React$1.useRef(0);
	return React$1.useEffect(() => () => window.clearTimeout(A.current), []), React$1.useCallback(() => {
		window.clearTimeout(A.current), A.current = window.setTimeout(O, E);
	}, [O, E]);
}
function useResizeObserver(n, _) {
	let E = useCallbackRef(_);
	useLayoutEffect2(() => {
		let _ = 0;
		if (n) {
			let O = new ResizeObserver(() => {
				cancelAnimationFrame(_), _ = window.requestAnimationFrame(E);
			});
			return O.observe(n), () => {
				window.cancelAnimationFrame(_), O.unobserve(n);
			};
		}
	}, [n, E]);
}
var Root$1 = ScrollArea, Viewport = ScrollAreaViewport, Scrollbar = ScrollAreaScrollbar, Thumb$1 = ScrollAreaThumb, Corner = ScrollAreaCorner, SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME), [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME), Switch = React$1.forwardRef((_, E) => {
	let { __scopeSwitch: O, name: A, checked: j, defaultChecked: M, required: N, disabled: P, value: z = "on", onCheckedChange: B, form: H, ...U } = _, [W, G] = React$1.useState(null), Z = useComposedRefs$1(E, (n) => G(n)), Mj = React$1.useRef(!1), Nj = W ? H || !!W.closest("form") : !0, [Pj, Fj] = useControllableState({
		prop: j,
		defaultProp: M ?? !1,
		onChange: B,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ jsxs(SwitchProvider, {
		scope: O,
		checked: Pj,
		disabled: P,
		children: [/* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": Pj,
			"aria-required": N,
			"data-state": getState(Pj),
			"data-disabled": P ? "" : void 0,
			disabled: P,
			value: z,
			...U,
			ref: Z,
			onClick: composeEventHandlers(_.onClick, (n) => {
				Fj((n) => !n), Nj && (Mj.current = n.isPropagationStopped(), Mj.current || n.stopPropagation());
			})
		}), Nj && /* @__PURE__ */ jsx(SwitchBubbleInput, {
			control: W,
			bubbles: !Mj.current,
			name: A,
			value: z,
			checked: Pj,
			required: N,
			disabled: P,
			form: H,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = React$1.forwardRef((n, _) => {
	let { __scopeSwitch: E, ...O } = n, A = useSwitchContext(THUMB_NAME, E);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": getState(A.checked),
		"data-disabled": A.disabled ? "" : void 0,
		...O,
		ref: _
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput", SwitchBubbleInput = React$1.forwardRef(({ __scopeSwitch: _, control: E, checked: O, bubbles: A = !0, ...j }, M) => {
	let N = React$1.useRef(null), P = useComposedRefs$1(N, M), z = usePrevious(O), B = useSize(E);
	return React$1.useEffect(() => {
		let n = N.current;
		if (!n) return;
		let _ = window.HTMLInputElement.prototype, E = Object.getOwnPropertyDescriptor(_, "checked").set;
		if (z !== O && E) {
			let _ = new Event("click", { bubbles: A });
			E.call(n, O), n.dispatchEvent(_);
		}
	}, [
		z,
		O,
		A
	]), /* @__PURE__ */ jsx("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: O,
		...j,
		tabIndex: -1,
		ref: P,
		style: {
			...j.style,
			...B,
			position: "absolute",
			pointerEvents: "none",
			opacity: 0,
			margin: 0
		}
	});
});
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(n) {
	return n ? "checked" : "unchecked";
}
var Root = Switch, Thumb = SwitchThumb, TABS_NAME = "Tabs", [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]), useRovingFocusGroupScope = createRovingFocusGroupScope(), [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME), Tabs = React$1.forwardRef((n, _) => {
	let { __scopeTabs: E, value: O, onValueChange: A, defaultValue: j, orientation: M = "horizontal", dir: N, activationMode: P = "automatic", ...z } = n, B = useDirection(N), [H, U] = useControllableState({
		prop: O,
		onChange: A,
		defaultProp: j ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ jsx(TabsProvider, {
		scope: E,
		baseId: useId$1(),
		value: H,
		onValueChange: U,
		orientation: M,
		dir: B,
		activationMode: P,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			dir: B,
			"data-orientation": M,
			...z,
			ref: _
		})
	});
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList", TabsList = React$1.forwardRef((n, _) => {
	let { __scopeTabs: E, loop: O = !0, ...A } = n, j = useTabsContext(TAB_LIST_NAME, E);
	return /* @__PURE__ */ jsx(Root$2, {
		asChild: !0,
		...useRovingFocusGroupScope(E),
		orientation: j.orientation,
		dir: j.dir,
		loop: O,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			role: "tablist",
			"aria-orientation": j.orientation,
			...A,
			ref: _
		})
	});
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME$1 = "TabsTrigger", TabsTrigger = React$1.forwardRef((n, _) => {
	let { __scopeTabs: E, value: O, disabled: A = !1, ...j } = n, M = useTabsContext(TRIGGER_NAME$1, E), N = useRovingFocusGroupScope(E), P = makeTriggerId(M.baseId, O), z = makeContentId(M.baseId, O), B = O === M.value;
	return /* @__PURE__ */ jsx(Item, {
		asChild: !0,
		...N,
		focusable: !A,
		active: B,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": B,
			"aria-controls": z,
			"data-state": B ? "active" : "inactive",
			"data-disabled": A ? "" : void 0,
			disabled: A,
			id: P,
			...j,
			ref: _,
			onMouseDown: composeEventHandlers(n.onMouseDown, (n) => {
				!A && n.button === 0 && n.ctrlKey === !1 ? M.onValueChange(O) : n.preventDefault();
			}),
			onKeyDown: composeEventHandlers(n.onKeyDown, (n) => {
				[" ", "Enter"].includes(n.key) && M.onValueChange(O);
			}),
			onFocus: composeEventHandlers(n.onFocus, () => {
				let n = M.activationMode !== "manual";
				!B && !A && n && M.onValueChange(O);
			})
		})
	});
});
TabsTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "TabsContent", TabsContent = React$1.forwardRef((_, E) => {
	let { __scopeTabs: O, value: A, forceMount: j, children: M, ...N } = _, P = useTabsContext(CONTENT_NAME$1, O), z = makeTriggerId(P.baseId, A), B = makeContentId(P.baseId, A), H = A === P.value, U = React$1.useRef(H);
	return React$1.useEffect(() => {
		let n = requestAnimationFrame(() => U.current = !1);
		return () => cancelAnimationFrame(n);
	}, []), /* @__PURE__ */ jsx(Presence, {
		present: j || H,
		children: ({ present: n }) => /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": H ? "active" : "inactive",
			"data-orientation": P.orientation,
			role: "tabpanel",
			"aria-labelledby": z,
			hidden: !n,
			id: B,
			tabIndex: 0,
			...N,
			ref: E,
			style: {
				..._.style,
				animationDuration: U.current ? "0s" : void 0
			},
			children: n && M
		})
	});
});
TabsContent.displayName = CONTENT_NAME$1;
function makeTriggerId(n, _) {
	return `${n}-trigger-${_}`;
}
function makeContentId(n, _) {
	return `${n}-content-${_}`;
}
var Root2 = Tabs, List = TabsList, Trigger = TabsTrigger, Content = TabsContent, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider = (_) => {
	let { __scopeTooltip: E, delayDuration: O = DEFAULT_DELAY_DURATION, skipDelayDuration: A = 300, disableHoverableContent: j = !1, children: M } = _, N = React$1.useRef(!0), P = React$1.useRef(!1), z = React$1.useRef(0);
	return React$1.useEffect(() => {
		let n = z.current;
		return () => window.clearTimeout(n);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: E,
		isOpenDelayedRef: N,
		delayDuration: O,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(z.current), N.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(z.current), z.current = window.setTimeout(() => N.current = !0, A);
		}, [A]),
		isPointerInTransitRef: P,
		onPointerInTransitChange: React$1.useCallback((n) => {
			P.current = n;
		}, []),
		disableHoverableContent: j,
		children: M
	});
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip = (_) => {
	let { __scopeTooltip: E, children: O, open: A, defaultOpen: j, onOpenChange: M, disableHoverableContent: N, delayDuration: P } = _, z = useTooltipProviderContext(TOOLTIP_NAME, _.__scopeTooltip), B = usePopperScope(E), [H, U] = React$1.useState(null), W = useId$1(), G = React$1.useRef(0), Z = N ?? z.disableHoverableContent, Mj = P ?? z.delayDuration, Nj = React$1.useRef(!1), [Pj, Fj] = useControllableState({
		prop: A,
		defaultProp: j ?? !1,
		onChange: (n) => {
			n ? (z.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : z.onClose(), M?.(n);
		},
		caller: TOOLTIP_NAME
	}), Ij = React$1.useMemo(() => Pj ? Nj.current ? "delayed-open" : "instant-open" : "closed", [Pj]), Lj = React$1.useCallback(() => {
		window.clearTimeout(G.current), G.current = 0, Nj.current = !1, Fj(!0);
	}, [Fj]), Rj = React$1.useCallback(() => {
		window.clearTimeout(G.current), G.current = 0, Fj(!1);
	}, [Fj]), zj = React$1.useCallback(() => {
		window.clearTimeout(G.current), G.current = window.setTimeout(() => {
			Nj.current = !0, Fj(!0), G.current = 0;
		}, Mj);
	}, [Mj, Fj]);
	return React$1.useEffect(() => () => {
		G.current &&= (window.clearTimeout(G.current), 0);
	}, []), /* @__PURE__ */ jsx(Root2$4, {
		...B,
		children: /* @__PURE__ */ jsx(TooltipContextProvider, {
			scope: E,
			contentId: W,
			open: Pj,
			stateAttribute: Ij,
			trigger: H,
			onTriggerChange: U,
			onTriggerEnter: React$1.useCallback(() => {
				z.isOpenDelayedRef.current ? zj() : Lj();
			}, [
				z.isOpenDelayedRef,
				zj,
				Lj
			]),
			onTriggerLeave: React$1.useCallback(() => {
				Z ? Rj() : (window.clearTimeout(G.current), G.current = 0);
			}, [Rj, Z]),
			onOpen: Lj,
			onClose: Rj,
			disableHoverableContent: Z,
			children: O
		})
	});
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger = React$1.forwardRef((_, E) => {
	let { __scopeTooltip: O, ...A } = _, j = useTooltipContext(TRIGGER_NAME, O), M = useTooltipProviderContext(TRIGGER_NAME, O), N = usePopperScope(O), P = useComposedRefs$1(E, React$1.useRef(null), j.onTriggerChange), z = React$1.useRef(!1), B = React$1.useRef(!1), H = React$1.useCallback(() => z.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", H), [H]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...N,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": j.open ? j.contentId : void 0,
			"data-state": j.stateAttribute,
			...A,
			ref: P,
			onPointerMove: composeEventHandlers(_.onPointerMove, (n) => {
				n.pointerType !== "touch" && !B.current && !M.isPointerInTransitRef.current && (j.onTriggerEnter(), B.current = !0);
			}),
			onPointerLeave: composeEventHandlers(_.onPointerLeave, () => {
				j.onTriggerLeave(), B.current = !1;
			}),
			onPointerDown: composeEventHandlers(_.onPointerDown, () => {
				j.open && j.onClose(), z.current = !0, document.addEventListener("pointerup", H, { once: !0 });
			}),
			onFocus: composeEventHandlers(_.onFocus, () => {
				z.current || j.onOpen();
			}),
			onBlur: composeEventHandlers(_.onBlur, j.onClose),
			onClick: composeEventHandlers(_.onClick, j.onClose)
		})
	});
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (n) => {
	let { __scopeTooltip: _, forceMount: E, children: O, container: A } = n, j = useTooltipContext(PORTAL_NAME, _);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: _,
		forceMount: E,
		children: /* @__PURE__ */ jsx(Presence, {
			present: E || j.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: A,
				children: O
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent = React$1.forwardRef((n, _) => {
	let E = usePortalContext(CONTENT_NAME, n.__scopeTooltip), { forceMount: O = E.forceMount, side: A = "top", ...j } = n, M = useTooltipContext(CONTENT_NAME, n.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: O || M.open,
		children: M.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: A,
			...j,
			ref: _
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: A,
			...j,
			ref: _
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((_, E) => {
	let O = useTooltipContext(CONTENT_NAME, _.__scopeTooltip), A = useTooltipProviderContext(CONTENT_NAME, _.__scopeTooltip), j = React$1.useRef(null), M = useComposedRefs$1(E, j), [N, P] = React$1.useState(null), { trigger: z, onClose: B } = O, H = j.current, { onPointerInTransitChange: U } = A, W = React$1.useCallback(() => {
		P(null), U(!1);
	}, [U]), G = React$1.useCallback((n, _) => {
		let E = n.currentTarget, O = {
			x: n.clientX,
			y: n.clientY
		}, A = getPaddedExitPoints(O, getExitSideFromRect(O, E.getBoundingClientRect())), j = getPointsFromRect(_.getBoundingClientRect());
		P(getHull([...A, ...j])), U(!0);
	}, [U]);
	return React$1.useEffect(() => () => W(), [W]), React$1.useEffect(() => {
		if (z && H) {
			let n = (n) => G(n, H), _ = (n) => G(n, z);
			return z.addEventListener("pointerleave", n), H.addEventListener("pointerleave", _), () => {
				z.removeEventListener("pointerleave", n), H.removeEventListener("pointerleave", _);
			};
		}
	}, [
		z,
		H,
		G,
		W
	]), React$1.useEffect(() => {
		if (N) {
			let n = (n) => {
				let _ = n.target, E = {
					x: n.clientX,
					y: n.clientY
				}, O = z?.contains(_) || H?.contains(_), A = !isPointInPolygon(E, N);
				O ? W() : A && (W(), B());
			};
			return document.addEventListener("pointermove", n), () => document.removeEventListener("pointermove", n);
		}
	}, [
		z,
		H,
		N,
		B,
		W
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		..._,
		ref: M
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((_, E) => {
	let { __scopeTooltip: O, children: A, "aria-label": j, onEscapeKeyDown: M, onPointerDownOutside: N, ...P } = _, z = useTooltipContext(CONTENT_NAME, O), B = usePopperScope(O), { onClose: H } = z;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, H), () => document.removeEventListener(TOOLTIP_OPEN, H)), [H]), React$1.useEffect(() => {
		if (z.trigger) {
			let n = (n) => {
				n.target?.contains(z.trigger) && H();
			};
			return window.addEventListener("scroll", n, { capture: !0 }), () => window.removeEventListener("scroll", n, { capture: !0 });
		}
	}, [z.trigger, H]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: M,
		onPointerDownOutside: N,
		onFocusOutside: (n) => n.preventDefault(),
		onDismiss: H,
		children: /* @__PURE__ */ jsxs(Content$1, {
			"data-state": z.stateAttribute,
			...B,
			...P,
			ref: E,
			style: {
				...P.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: A }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: O,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root$5, {
					id: z.contentId,
					role: "tooltip",
					children: j || A
				})
			})]
		})
	});
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((n, _) => {
	let { __scopeTooltip: E, ...O } = n, A = usePopperScope(E);
	return useVisuallyHiddenContentContext(ARROW_NAME, E).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...A,
		...O,
		ref: _
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(n, _) {
	let E = Math.abs(_.top - n.y), O = Math.abs(_.bottom - n.y), A = Math.abs(_.right - n.x), j = Math.abs(_.left - n.x);
	switch (Math.min(E, O, A, j)) {
		case j: return "left";
		case A: return "right";
		case E: return "top";
		case O: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(n, _, E = 5) {
	let O = [];
	switch (_) {
		case "top":
			O.push({
				x: n.x - E,
				y: n.y + E
			}, {
				x: n.x + E,
				y: n.y + E
			});
			break;
		case "bottom":
			O.push({
				x: n.x - E,
				y: n.y - E
			}, {
				x: n.x + E,
				y: n.y - E
			});
			break;
		case "left":
			O.push({
				x: n.x + E,
				y: n.y - E
			}, {
				x: n.x + E,
				y: n.y + E
			});
			break;
		case "right":
			O.push({
				x: n.x - E,
				y: n.y - E
			}, {
				x: n.x - E,
				y: n.y + E
			});
			break;
	}
	return O;
}
function getPointsFromRect(n) {
	let { top: _, right: E, bottom: O, left: A } = n;
	return [
		{
			x: A,
			y: _
		},
		{
			x: E,
			y: _
		},
		{
			x: E,
			y: O
		},
		{
			x: A,
			y: O
		}
	];
}
function isPointInPolygon(n, _) {
	let { x: E, y: O } = n, A = !1;
	for (let n = 0, j = _.length - 1; n < _.length; j = n++) {
		let M = _[n], N = _[j], P = M.x, z = M.y, B = N.x, H = N.y;
		z > O != H > O && E < (B - P) * (O - z) / (H - z) + P && (A = !A);
	}
	return A;
}
function getHull(n) {
	let _ = n.slice();
	return _.sort((n, _) => n.x < _.x ? -1 : n.x > _.x ? 1 : n.y < _.y ? -1 : n.y > _.y ? 1 : 0), getHullPresorted(_);
}
function getHullPresorted(n) {
	if (n.length <= 1) return n.slice();
	let _ = [];
	for (let E = 0; E < n.length; E++) {
		let O = n[E];
		for (; _.length >= 2;) {
			let n = _[_.length - 1], E = _[_.length - 2];
			if ((n.x - E.x) * (O.y - E.y) >= (n.y - E.y) * (O.x - E.x)) _.pop();
			else break;
		}
		_.push(O);
	}
	_.pop();
	let E = [];
	for (let _ = n.length - 1; _ >= 0; _--) {
		let O = n[_];
		for (; E.length >= 2;) {
			let n = E[E.length - 1], _ = E[E.length - 2];
			if ((n.x - _.x) * (O.y - _.y) >= (n.y - _.y) * (O.x - _.x)) E.pop();
			else break;
		}
		E.push(O);
	}
	return E.pop(), _.length === 1 && E.length === 1 && _[0].x === E[0].x && _[0].y === E[0].y ? _ : _.concat(E);
}
var Provider = TooltipProvider, require_classnames = /* @__PURE__ */ __commonJSMin(((n, _) => {
	(function() {
		var n = {}.hasOwnProperty;
		function E() {
			for (var n = "", _ = 0; _ < arguments.length; _++) {
				var E = arguments[_];
				E && (n = A(n, O(E)));
			}
			return n;
		}
		function O(_) {
			if (typeof _ == "string" || typeof _ == "number") return _;
			if (typeof _ != "object") return "";
			if (Array.isArray(_)) return E.apply(null, _);
			if (_.toString !== Object.prototype.toString && !_.toString.toString().includes("[native code]")) return _.toString();
			var O = "";
			for (var j in _) n.call(_, j) && _[j] && (O = A(O, j));
			return O;
		}
		function A(n, _) {
			return _ ? n ? n + " " + _ : n + _ : n;
		}
		_ !== void 0 && _.exports ? (E.default = E, _.exports = E) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return E;
		}) : window.classNames = E;
	})();
})), o$5 = { asChild: { type: "boolean" } }, t$1 = {
	width: {
		type: "string",
		className: "rt-r-w",
		customProperties: ["--width"],
		responsive: !0
	},
	minWidth: {
		type: "string",
		className: "rt-r-min-w",
		customProperties: ["--min-width"],
		responsive: !0
	},
	maxWidth: {
		type: "string",
		className: "rt-r-max-w",
		customProperties: ["--max-width"],
		responsive: !0
	}
}, e$1 = {
	height: {
		type: "string",
		className: "rt-r-h",
		customProperties: ["--height"],
		responsive: !0
	},
	minHeight: {
		type: "string",
		className: "rt-r-min-h",
		customProperties: ["--min-height"],
		responsive: !0
	},
	maxHeight: {
		type: "string",
		className: "rt-r-max-h",
		customProperties: ["--max-height"],
		responsive: !0
	}
}, r$16 = [
	"1",
	"2",
	"3",
	"4"
], s$3 = {
	...o$5,
	align: {
		type: "enum",
		className: "rt-r-align",
		values: ["start", "center"],
		default: "center"
	},
	size: {
		type: "enum",
		className: "rt-r-size",
		values: r$16,
		default: "3",
		responsive: !0
	},
	width: t$1.width,
	minWidth: t$1.minWidth,
	maxWidth: {
		...t$1.maxWidth,
		default: "600px"
	},
	...e$1
}, o$9 = /* @__PURE__ */ "gray.gold.bronze.brown.yellow.amber.orange.tomato.red.ruby.crimson.pink.plum.purple.violet.iris.indigo.blue.cyan.teal.jade.green.grass.lime.mint.sky".split("."), e$7 = [
	"auto",
	"gray",
	"mauve",
	"slate",
	"sage",
	"olive",
	"sand"
], r$2 = { color: {
	type: "enum",
	values: o$9,
	default: void 0
} }, s$11 = { color: {
	type: "enum",
	values: o$9,
	default: ""
} }, o$4 = { highContrast: {
	type: "boolean",
	className: "rt-high-contrast",
	default: void 0
} }, r$14 = { trim: {
	type: "enum",
	className: "rt-r-lt",
	values: [
		"normal",
		"start",
		"end",
		"both"
	],
	responsive: !0
} }, t$8 = { align: {
	type: "enum",
	className: "rt-r-ta",
	values: [
		"left",
		"center",
		"right"
	],
	responsive: !0
} }, r$15 = { wrap: {
	type: "enum",
	className: "rt-r-tw",
	values: [
		"wrap",
		"nowrap",
		"pretty",
		"balance"
	],
	responsive: !0
} }, e$9 = { truncate: {
	type: "boolean",
	className: "rt-truncate"
} }, t$9 = { weight: {
	type: "enum",
	className: "rt-r-weight",
	values: [
		"light",
		"regular",
		"medium",
		"bold"
	],
	responsive: !0
} }, m$7 = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
], a$14 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], n$10 = {
	as: {
		type: "enum",
		values: m$7,
		default: "h1"
	},
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: a$14,
		default: "6",
		responsive: !0
	},
	...t$9,
	...t$8,
	...r$14,
	...e$9,
	...r$15,
	...r$2,
	...o$4
}, e$11 = [
	"initial",
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
];
function e$12(n, _) {
	return Object.prototype.hasOwnProperty.call(n, _);
}
function i$10(n) {
	return typeof n == "object" && Object.keys(n).some((n) => e$11.includes(n));
}
function R$4({ className: n, customProperties: _, ...E }) {
	return [g$3({
		allowArbitraryValues: !0,
		className: n,
		...E
	}), m$6({
		customProperties: _,
		...E
	})];
}
function g$3({ allowArbitraryValues: n, value: _, className: E, propValues: O, parseValue: A = (n) => n }) {
	let j = [];
	if (_) {
		if (typeof _ == "string" && O.includes(_)) return l$5(E, _, A);
		if (i$10(_)) {
			let M = _;
			for (let _ in M) {
				if (!e$12(M, _) || !e$11.includes(_)) continue;
				let N = M[_];
				if (N !== void 0) {
					if (O.includes(N)) {
						let n = l$5(E, N, A), O = _ === "initial" ? n : `${_}:${n}`;
						j.push(O);
					} else if (n) {
						let n = _ === "initial" ? E : `${_}:${E}`;
						j.push(n);
					}
				}
			}
			return j.join(" ");
		}
		if (n) return E;
	}
}
function l$5(n, _, E) {
	let O = n ? "-" : "", A = E(_), j = A?.startsWith("-");
	return `${j ? "-" : ""}${n}${O}${j ? A?.substring(1) : A}`;
}
function m$6({ customProperties: n, value: _, propValues: E, parseValue: O = (n) => n }) {
	let A = {};
	if (!(!_ || typeof _ == "string" && E.includes(_))) {
		if (typeof _ == "string" && (A = Object.fromEntries(n.map((n) => [n, _]))), i$10(_)) {
			let O = _;
			for (let _ in O) {
				if (!e$12(O, _) || !e$11.includes(_)) continue;
				let j = O[_];
				if (!E.includes(j)) for (let E of n) A = {
					[_ === "initial" ? E : `${E}-${_}`]: j,
					...A
				};
			}
		}
		for (let n in A) {
			let _ = A[n];
			_ !== void 0 && (A[n] = O(_));
		}
		return A;
	}
}
function l$1(...n) {
	let _ = {};
	for (let E of n) E && (_ = {
		..._,
		...E
	});
	return Object.keys(_).length ? _ : void 0;
}
var import_classnames$21 = /* @__PURE__ */ __toESM(require_classnames());
function N$2(...n) {
	return Object.assign({}, ...n);
}
function v$1(n, ..._) {
	let E, O, A = { ...n }, j = N$2(..._);
	for (let n in j) {
		let _ = A[n], M = j[n];
		if (M.default !== void 0 && _ === void 0 && (_ = M.default), M.type === "enum" && ![M.default, ...M.values].includes(_) && !i$10(_) && (_ = M.default), A[n] = _, "className" in M && M.className) {
			delete A[n];
			let j = "responsive" in M;
			if (!_ || i$10(_) && !j) continue;
			if (i$10(_) && (M.default !== void 0 && _.initial === void 0 && (_.initial = M.default), M.type === "enum" && ([M.default, ...M.values].includes(_.initial) || (_.initial = M.default))), M.type === "enum") {
				let n = g$3({
					allowArbitraryValues: !1,
					value: _,
					className: M.className,
					propValues: M.values,
					parseValue: M.parseValue
				});
				E = (0, import_classnames$21.default)(E, n);
				continue;
			}
			if (M.type === "string" || M.type === "enum | string") {
				let n = M.type === "string" ? [] : M.values, [A, j] = R$4({
					className: M.className,
					customProperties: M.customProperties,
					propValues: n,
					parseValue: M.parseValue,
					value: _
				});
				O = l$1(O, j), E = (0, import_classnames$21.default)(E, A);
				continue;
			}
			if (M.type === "boolean" && _) {
				E = (0, import_classnames$21.default)(E, M.className);
				continue;
			}
		}
	}
	return A.className = (0, import_classnames$21.default)(E, n.className), A.style = l$1(O, n.style), A;
}
var e$10 = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"-1",
	"-2",
	"-3",
	"-4",
	"-5",
	"-6",
	"-7",
	"-8",
	"-9"
], r$1 = {
	m: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-m",
		customProperties: ["--m"]
	},
	mx: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-mx",
		customProperties: ["--ml", "--mr"]
	},
	my: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-my",
		customProperties: ["--mt", "--mb"]
	},
	mt: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-mt",
		customProperties: ["--mt"]
	},
	mr: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-mr",
		customProperties: ["--mr"]
	},
	mb: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-mb",
		customProperties: ["--mb"]
	},
	ml: {
		type: "enum | string",
		values: e$10,
		responsive: !0,
		className: "rt-r-ml",
		customProperties: ["--ml"]
	}
}, import_classnames$20 = /* @__PURE__ */ __toESM(require_classnames()), r$6 = React$1.forwardRef((_, E) => {
	let { children: O, className: A, asChild: j, as: M = "h1", color: N, ...P } = v$1(_, n$10, r$1);
	return React$1.createElement(Slot$3, {
		"data-accent-color": N,
		...P,
		ref: E,
		className: (0, import_classnames$20.default)("rt-Heading", A)
	}, j ? O : React$1.createElement(M, null, O));
});
r$6.displayName = "Heading";
var m$5 = [
	"span",
	"div",
	"label",
	"p"
], a$13 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], n$9 = {
	as: {
		type: "enum",
		values: m$5,
		default: "span"
	},
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: a$13,
		responsive: !0
	},
	...t$9,
	...t$8,
	...r$14,
	...e$9,
	...r$15,
	...r$2,
	...o$4
}, import_classnames$19 = /* @__PURE__ */ __toESM(require_classnames()), p$2 = React$1.forwardRef((_, E) => {
	let { children: O, className: A, asChild: j, as: M = "span", color: N, ...P } = v$1(_, n$9, r$1);
	return React$1.createElement(Slot$3, {
		"data-accent-color": N,
		...P,
		ref: E,
		className: (0, import_classnames$19.default)("rt-Text", A)
	}, j ? O : React$1.createElement(M, null, O));
});
p$2.displayName = "Text";
function a$12(n) {
	switch (n) {
		case "tomato":
		case "red":
		case "ruby":
		case "crimson":
		case "pink":
		case "plum":
		case "purple":
		case "violet": return "mauve";
		case "iris":
		case "indigo":
		case "blue":
		case "sky":
		case "cyan": return "slate";
		case "teal":
		case "jade":
		case "mint":
		case "green": return "sage";
		case "grass":
		case "lime": return "olive";
		case "yellow":
		case "amber":
		case "orange":
		case "brown":
		case "gold":
		case "bronze": return "sand";
		case "gray": return "gray";
	}
}
var e$8 = [
	"none",
	"small",
	"medium",
	"large",
	"full"
], r$3 = { radius: {
	type: "enum",
	values: e$8,
	default: void 0
} }, p$15 = [
	"inherit",
	"light",
	"dark"
], t$7 = ["solid", "translucent"], n$8 = [
	"90%",
	"95%",
	"100%",
	"105%",
	"110%"
], s$13 = {
	...o$5,
	hasBackground: {
		type: "boolean",
		default: !0
	},
	appearance: {
		type: "enum",
		values: p$15,
		default: "inherit"
	},
	accentColor: {
		type: "enum",
		values: o$9,
		default: "indigo"
	},
	grayColor: {
		type: "enum",
		values: e$7,
		default: "auto"
	},
	panelBackground: {
		type: "enum",
		values: t$7,
		default: "translucent"
	},
	radius: {
		type: "enum",
		values: e$8,
		default: "medium"
	},
	scaling: {
		type: "enum",
		values: n$8,
		default: "100%"
	}
}, import_classnames$18 = /* @__PURE__ */ __toESM(require_classnames()), d$5 = () => {}, P$3 = React$1.createContext(void 0);
function H$2() {
	let _ = React$1.useContext(P$3);
	if (_ === void 0) throw Error("`useThemeContext` must be used within a `Theme`");
	return _;
}
var R = React$1.forwardRef((_, E) => React$1.useContext(P$3) === void 0 ? React$1.createElement(Provider, { delayDuration: 200 }, React$1.createElement(Provider$1, { dir: "ltr" }, React$1.createElement(I$3, {
	..._,
	ref: E
}))) : React$1.createElement(A$2, {
	..._,
	ref: E
}));
R.displayName = "Theme";
var I$3 = React$1.forwardRef((_, E) => {
	let { appearance: O = s$13.appearance.default, accentColor: A = s$13.accentColor.default, grayColor: j = s$13.grayColor.default, panelBackground: M = s$13.panelBackground.default, radius: N = s$13.radius.default, scaling: P = s$13.scaling.default, hasBackground: z = s$13.hasBackground.default, ...B } = _, [H, U] = React$1.useState(O);
	React$1.useEffect(() => U(O), [O]);
	let [W, G] = React$1.useState(A);
	React$1.useEffect(() => G(A), [A]);
	let [Z, Mj] = React$1.useState(j);
	React$1.useEffect(() => Mj(j), [j]);
	let [Nj, Pj] = React$1.useState(M);
	React$1.useEffect(() => Pj(M), [M]);
	let [Fj, Ij] = React$1.useState(N);
	React$1.useEffect(() => Ij(N), [N]);
	let [Lj, Rj] = React$1.useState(P);
	return React$1.useEffect(() => Rj(P), [P]), React$1.createElement(A$2, {
		...B,
		ref: E,
		isRoot: !0,
		hasBackground: z,
		appearance: H,
		accentColor: W,
		grayColor: Z,
		panelBackground: Nj,
		radius: Fj,
		scaling: Lj,
		onAppearanceChange: U,
		onAccentColorChange: G,
		onGrayColorChange: Mj,
		onPanelBackgroundChange: Pj,
		onRadiusChange: Ij,
		onScalingChange: Rj
	});
});
I$3.displayName = "ThemeRoot";
var A$2 = React$1.forwardRef((_, E) => {
	let O = React$1.useContext(P$3), { asChild: A, isRoot: j, hasBackground: M, appearance: N = O?.appearance ?? s$13.appearance.default, accentColor: P = O?.accentColor ?? s$13.accentColor.default, grayColor: z = O?.resolvedGrayColor ?? s$13.grayColor.default, panelBackground: B = O?.panelBackground ?? s$13.panelBackground.default, radius: H = O?.radius ?? s$13.radius.default, scaling: U = O?.scaling ?? s$13.scaling.default, onAppearanceChange: W = d$5, onAccentColorChange: G = d$5, onGrayColorChange: Z = d$5, onPanelBackgroundChange: Mj = d$5, onRadiusChange: Nj = d$5, onScalingChange: Pj = d$5, ...Fj } = _, Ij = A ? Slot$3 : "div", Lj = z === "auto" ? a$12(P) : z, Rj = _.appearance === "light" || _.appearance === "dark", zj = M === void 0 ? j || Rj : M;
	return React$1.createElement(P$3.Provider, { value: React$1.useMemo(() => ({
		appearance: N,
		accentColor: P,
		grayColor: z,
		resolvedGrayColor: Lj,
		panelBackground: B,
		radius: H,
		scaling: U,
		onAppearanceChange: W,
		onAccentColorChange: G,
		onGrayColorChange: Z,
		onPanelBackgroundChange: Mj,
		onRadiusChange: Nj,
		onScalingChange: Pj
	}), [
		N,
		P,
		z,
		Lj,
		B,
		H,
		U,
		W,
		G,
		Z,
		Mj,
		Nj,
		Pj
	]) }, React$1.createElement(Ij, {
		"data-is-root-theme": j ? "true" : "false",
		"data-accent-color": P,
		"data-gray-color": Lj,
		"data-has-background": zj ? "true" : "false",
		"data-panel-background": B,
		"data-radius": H,
		"data-scaling": U,
		ref: E,
		...Fj,
		className: (0, import_classnames$18.default)("radix-themes", {
			light: N === "light",
			dark: N === "dark"
		}, Fj.className)
	}));
});
A$2.displayName = "ThemeImpl";
var a$3 = (_) => {
	if (!React$1.isValidElement(_)) throw Error(`Expected a single React Element child, but got: ${React$1.Children.toArray(_).map((n) => typeof n == "object" && "type" in n && typeof n.type == "string" ? n.type : typeof n).join(", ")}`);
	return _;
};
function d$3(_, E) {
	let { asChild: O, children: A } = _;
	if (!O) return typeof E == "function" ? E(A) : E;
	let j = React$1.Children.only(A);
	return React$1.cloneElement(j, { children: typeof E == "function" ? E(j.props.children) : E });
}
var t$6 = [
	"1",
	"2",
	"3"
], a$11 = [
	"solid",
	"soft",
	"surface",
	"outline"
], p$14 = {
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: t$6,
		default: "1",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: a$11,
		default: "soft"
	},
	...s$11,
	...o$4,
	...r$3
}, import_classnames$17 = /* @__PURE__ */ __toESM(require_classnames()), e = React$1.forwardRef((_, E) => {
	let { asChild: O, className: A, color: j, radius: M, ...N } = v$1(_, p$14, r$1), P = O ? Slot$3 : "span";
	return React$1.createElement(P, {
		"data-accent-color": j,
		"data-radius": M,
		...N,
		ref: E,
		className: (0, import_classnames$17.default)("rt-reset", "rt-Badge", A)
	});
});
e.displayName = "Badge";
var e$2 = Slot$3, s$12 = ["div", "span"], o$8 = [
	"none",
	"inline",
	"inline-block",
	"block",
	"contents"
], p$12 = {
	as: {
		type: "enum",
		values: s$12,
		default: "div"
	},
	...o$5,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: o$8,
		responsive: !0
	}
}, e$6 = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], p$4 = {
	p: {
		type: "enum | string",
		className: "rt-r-p",
		customProperties: ["--p"],
		values: e$6,
		responsive: !0
	},
	px: {
		type: "enum | string",
		className: "rt-r-px",
		customProperties: ["--pl", "--pr"],
		values: e$6,
		responsive: !0
	},
	py: {
		type: "enum | string",
		className: "rt-r-py",
		customProperties: ["--pt", "--pb"],
		values: e$6,
		responsive: !0
	},
	pt: {
		type: "enum | string",
		className: "rt-r-pt",
		customProperties: ["--pt"],
		values: e$6,
		responsive: !0
	},
	pr: {
		type: "enum | string",
		className: "rt-r-pr",
		customProperties: ["--pr"],
		values: e$6,
		responsive: !0
	},
	pb: {
		type: "enum | string",
		className: "rt-r-pb",
		customProperties: ["--pb"],
		values: e$6,
		responsive: !0
	},
	pl: {
		type: "enum | string",
		className: "rt-r-pl",
		customProperties: ["--pl"],
		values: e$6,
		responsive: !0
	}
}, r$12 = [
	"visible",
	"hidden",
	"clip",
	"scroll",
	"auto"
], i$9 = [
	"static",
	"relative",
	"absolute",
	"fixed",
	"sticky"
], e$5 = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"-1",
	"-2",
	"-3",
	"-4",
	"-5",
	"-6",
	"-7",
	"-8",
	"-9"
], p$13 = ["0", "1"], n$7 = ["0", "1"], u$3 = {
	...p$4,
	...t$1,
	...e$1,
	position: {
		type: "enum",
		className: "rt-r-position",
		values: i$9,
		responsive: !0
	},
	inset: {
		type: "enum | string",
		className: "rt-r-inset",
		customProperties: ["--inset"],
		values: e$5,
		responsive: !0
	},
	top: {
		type: "enum | string",
		className: "rt-r-top",
		customProperties: ["--top"],
		values: e$5,
		responsive: !0
	},
	right: {
		type: "enum | string",
		className: "rt-r-right",
		customProperties: ["--right"],
		values: e$5,
		responsive: !0
	},
	bottom: {
		type: "enum | string",
		className: "rt-r-bottom",
		customProperties: ["--bottom"],
		values: e$5,
		responsive: !0
	},
	left: {
		type: "enum | string",
		className: "rt-r-left",
		customProperties: ["--left"],
		values: e$5,
		responsive: !0
	},
	overflow: {
		type: "enum",
		className: "rt-r-overflow",
		values: r$12,
		responsive: !0
	},
	overflowX: {
		type: "enum",
		className: "rt-r-ox",
		values: r$12,
		responsive: !0
	},
	overflowY: {
		type: "enum",
		className: "rt-r-oy",
		values: r$12,
		responsive: !0
	},
	flexBasis: {
		type: "string",
		className: "rt-r-fb",
		customProperties: ["--flex-basis"],
		responsive: !0
	},
	flexShrink: {
		type: "enum | string",
		className: "rt-r-fs",
		customProperties: ["--flex-shrink"],
		values: p$13,
		responsive: !0
	},
	flexGrow: {
		type: "enum | string",
		className: "rt-r-fg",
		customProperties: ["--flex-grow"],
		values: n$7,
		responsive: !0
	},
	gridArea: {
		type: "string",
		className: "rt-r-ga",
		customProperties: ["--grid-area"],
		responsive: !0
	},
	gridColumn: {
		type: "string",
		className: "rt-r-gc",
		customProperties: ["--grid-column"],
		responsive: !0
	},
	gridColumnStart: {
		type: "string",
		className: "rt-r-gcs",
		customProperties: ["--grid-column-start"],
		responsive: !0
	},
	gridColumnEnd: {
		type: "string",
		className: "rt-r-gce",
		customProperties: ["--grid-column-end"],
		responsive: !0
	},
	gridRow: {
		type: "string",
		className: "rt-r-gr",
		customProperties: ["--grid-row"],
		responsive: !0
	},
	gridRowStart: {
		type: "string",
		className: "rt-r-grs",
		customProperties: ["--grid-row-start"],
		responsive: !0
	},
	gridRowEnd: {
		type: "string",
		className: "rt-r-gre",
		customProperties: ["--grid-row-end"],
		responsive: !0
	}
}, import_classnames$16 = /* @__PURE__ */ __toESM(require_classnames()), p = React$1.forwardRef((_, E) => {
	let { className: O, asChild: A, as: j = "div", ...M } = v$1(_, p$12, u$3, r$1);
	return React$1.createElement(A ? e$2 : j, {
		...M,
		ref: E,
		className: (0, import_classnames$16.default)("rt-Box", O)
	});
});
p.displayName = "Box";
var t$5 = [
	"1",
	"2",
	"3",
	"4"
], a$10 = [
	"classic",
	"solid",
	"soft",
	"surface",
	"outline",
	"ghost"
], i$8 = {
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: t$5,
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: a$10,
		default: "solid"
	},
	...s$11,
	...o$4,
	...r$3,
	loading: {
		type: "boolean",
		className: "rt-loading",
		default: !1
	}
}, e$4 = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], p$9 = {
	gap: {
		type: "enum | string",
		className: "rt-r-gap",
		customProperties: ["--gap"],
		values: e$4,
		responsive: !0
	},
	gapX: {
		type: "enum | string",
		className: "rt-r-cg",
		customProperties: ["--column-gap"],
		values: e$4,
		responsive: !0
	},
	gapY: {
		type: "enum | string",
		className: "rt-r-rg",
		customProperties: ["--row-gap"],
		values: e$4,
		responsive: !0
	}
}, t$4 = ["div", "span"], p$11 = [
	"none",
	"inline-flex",
	"flex"
], a$9 = [
	"row",
	"column",
	"row-reverse",
	"column-reverse"
], o$7 = [
	"start",
	"center",
	"end",
	"baseline",
	"stretch"
], n$5 = [
	"start",
	"center",
	"end",
	"between"
], l$3 = [
	"nowrap",
	"wrap",
	"wrap-reverse"
], u$2 = {
	as: {
		type: "enum",
		values: t$4,
		default: "div"
	},
	...o$5,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: p$11,
		responsive: !0
	},
	direction: {
		type: "enum",
		className: "rt-r-fd",
		values: a$9,
		responsive: !0
	},
	align: {
		type: "enum",
		className: "rt-r-ai",
		values: o$7,
		responsive: !0
	},
	justify: {
		type: "enum",
		className: "rt-r-jc",
		values: n$5,
		parseValue: f$6,
		responsive: !0
	},
	wrap: {
		type: "enum",
		className: "rt-r-fw",
		values: l$3,
		responsive: !0
	},
	...p$9
};
function f$6(n) {
	return n === "between" ? "space-between" : n;
}
var import_classnames$15 = /* @__PURE__ */ __toESM(require_classnames()), p$1 = React$1.forwardRef((_, E) => {
	let { className: O, asChild: A, as: j = "div", ...M } = v$1(_, u$2, u$3, r$1);
	return React$1.createElement(A ? e$2 : j, {
		...M,
		ref: E,
		className: (0, import_classnames$15.default)("rt-Flex", O)
	});
});
p$1.displayName = "Flex";
var s$10 = {
	size: {
		type: "enum",
		className: "rt-r-size",
		values: [
			"1",
			"2",
			"3"
		],
		default: "2",
		responsive: !0
	},
	loading: {
		type: "boolean",
		default: !0
	}
}, import_classnames$14 = /* @__PURE__ */ __toESM(require_classnames()), s$8 = React$1.forwardRef((_, E) => {
	let { className: O, children: A, loading: j, ...M } = v$1(_, s$10, r$1);
	if (!j) return A;
	let N = React$1.createElement("span", {
		...M,
		ref: E,
		className: (0, import_classnames$14.default)("rt-Spinner", O)
	}, React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }));
	return A === void 0 ? N : React$1.createElement(p$1, {
		asChild: !0,
		position: "relative",
		align: "center",
		justify: "center"
	}, React$1.createElement("span", null, React$1.createElement("span", {
		"aria-hidden": !0,
		style: {
			display: "contents",
			visibility: "hidden"
		},
		inert: void 0
	}, A), React$1.createElement(p$1, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, N))));
});
s$8.displayName = "Spinner";
var d$4 = Root$5;
function s$9(n, _) {
	if (n !== void 0) return typeof n == "string" ? _(n) : Object.fromEntries(Object.entries(n).map(([n, E]) => [n, _(E)]));
}
function r$11(n) {
	switch (n) {
		case "1": return "1";
		case "2":
		case "3": return "2";
		case "4": return "3";
	}
}
var import_classnames$13 = /* @__PURE__ */ __toESM(require_classnames()), n$1 = React$1.forwardRef((_, E) => {
	let { size: O = i$8.size.default } = _, { className: A, children: j, asChild: M, color: N, radius: P, disabled: z = _.loading, ...B } = v$1(_, i$8, r$1), H = M ? Slot$3 : "button";
	return React$1.createElement(H, {
		"data-disabled": z || void 0,
		"data-accent-color": N,
		"data-radius": P,
		...B,
		ref: E,
		className: (0, import_classnames$13.default)("rt-reset", "rt-BaseButton", A),
		disabled: z
	}, _.loading ? React$1.createElement(React$1.Fragment, null, React$1.createElement("span", {
		style: {
			display: "contents",
			visibility: "hidden"
		},
		"aria-hidden": !0
	}, j), React$1.createElement(d$4, null, j), React$1.createElement(p$1, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, React$1.createElement(s$8, { size: s$9(O, r$11) })))) : j);
});
n$1.displayName = "BaseButton";
var import_classnames$12 = /* @__PURE__ */ __toESM(require_classnames()), o = React$1.forwardRef(({ className: _, ...E }, O) => React$1.createElement(n$1, {
	...E,
	ref: O,
	className: (0, import_classnames$12.default)("rt-Button", _)
}));
o.displayName = "Button";
var a$7 = ["div", "span"], n$4 = [
	"none",
	"inline-grid",
	"grid"
], p$10 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], u$4 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], i$7 = [
	"row",
	"column",
	"dense",
	"row-dense",
	"column-dense"
], l$2 = [
	"start",
	"center",
	"end",
	"baseline",
	"stretch"
], f$4 = [
	"start",
	"center",
	"end",
	"between"
], s$6 = {
	as: {
		type: "enum",
		values: a$7,
		default: "div"
	},
	...o$5,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: n$4,
		responsive: !0
	},
	areas: {
		type: "string",
		className: "rt-r-gta",
		customProperties: ["--grid-template-areas"],
		responsive: !0
	},
	columns: {
		type: "enum | string",
		className: "rt-r-gtc",
		customProperties: ["--grid-template-columns"],
		values: p$10,
		parseValue: r$10,
		responsive: !0
	},
	rows: {
		type: "enum | string",
		className: "rt-r-gtr",
		customProperties: ["--grid-template-rows"],
		values: u$4,
		parseValue: r$10,
		responsive: !0
	},
	flow: {
		type: "enum",
		className: "rt-r-gaf",
		values: i$7,
		responsive: !0
	},
	align: {
		type: "enum",
		className: "rt-r-ai",
		values: l$2,
		responsive: !0
	},
	justify: {
		type: "enum",
		className: "rt-r-jc",
		values: f$4,
		parseValue: m$4,
		responsive: !0
	},
	...p$9
};
function r$10(n) {
	return s$6.columns.values.includes(n) ? n : n?.match(/^\d+$/) ? `repeat(${n}, minmax(0, 1fr))` : n;
}
function m$4(n) {
	return n === "between" ? "space-between" : n;
}
var import_classnames$11 = /* @__PURE__ */ __toESM(require_classnames()), o$3 = React$1.forwardRef((_, E) => {
	let { className: O, asChild: A, as: j = "div", ...M } = v$1(_, s$6, u$3, r$1);
	return React$1.createElement(A ? e$2 : j, {
		...M,
		ref: E,
		className: (0, import_classnames$11.default)("rt-Grid", O)
	});
});
o$3.displayName = "Grid";
var r$9 = React.forwardRef((n, E) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: E
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
})));
r$9.displayName = "ThickDividerHorizontalIcon";
var t$2 = React.forwardRef((n, E) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: E
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
})));
t$2.displayName = "ThickCheckIcon";
var i$6 = React.forwardRef((n, E) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: E
}, React.createElement("path", { d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z" })));
i$6.displayName = "ChevronDownIcon";
var l = React.forwardRef((n, E) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: E
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z"
})));
l.displayName = "ThickChevronRightIcon";
var r$8 = [
	"1",
	"2",
	"3"
], o$6 = [
	"vertical",
	"horizontal",
	"both"
], t$3 = {
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: r$8,
		default: "1",
		responsive: !0
	},
	...r$3,
	scrollbars: {
		type: "enum",
		values: o$6,
		default: "both"
	}
};
function a$5(n) {
	let { m: _, mx: E, my: O, mt: A, mr: j, mb: M, ml: N, ...P } = n;
	return {
		m: _,
		mx: E,
		my: O,
		mt: A,
		mr: j,
		mb: M,
		ml: N,
		rest: P
	};
}
var import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames()), r$7 = r$1.m.values;
function S$2(n) {
	let [_, E] = R$4({
		className: "rt-r-m",
		customProperties: ["--margin"],
		propValues: r$7,
		value: n.m
	}), [O, A] = R$4({
		className: "rt-r-mx",
		customProperties: ["--margin-left", "--margin-right"],
		propValues: r$7,
		value: n.mx
	}), [j, M] = R$4({
		className: "rt-r-my",
		customProperties: ["--margin-top", "--margin-bottom"],
		propValues: r$7,
		value: n.my
	}), [N, P] = R$4({
		className: "rt-r-mt",
		customProperties: ["--margin-top"],
		propValues: r$7,
		value: n.mt
	}), [z, B] = R$4({
		className: "rt-r-mr",
		customProperties: ["--margin-right"],
		propValues: r$7,
		value: n.mr
	}), [H, U] = R$4({
		className: "rt-r-mb",
		customProperties: ["--margin-bottom"],
		propValues: r$7,
		value: n.mb
	}), [W, G] = R$4({
		className: "rt-r-ml",
		customProperties: ["--margin-left"],
		propValues: r$7,
		value: n.ml
	});
	return [(0, import_classnames$10.default)(_, O, j, N, z, H, W), l$1(E, A, M, P, B, U, G)];
}
var import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames()), c = React$1.forwardRef((_, E) => {
	let { rest: O, ...A } = a$5(_), [j, M] = S$2(A), { asChild: N, children: P, className: z, style: B, type: H, scrollHideDelay: U = H === "scroll" ? void 0 : 0, dir: W, size: G = t$3.size.default, radius: Z = t$3.radius.default, scrollbars: Mj = t$3.scrollbars.default, ...Nj } = O;
	return React$1.createElement(Root$1, {
		type: H,
		scrollHideDelay: U,
		className: (0, import_classnames$9.default)("rt-ScrollAreaRoot", j, z),
		style: l$1(M, B),
		asChild: N
	}, d$3({
		asChild: N,
		children: P
	}, (_) => React$1.createElement(React$1.Fragment, null, React$1.createElement(Viewport, {
		...Nj,
		ref: E,
		className: "rt-ScrollAreaViewport"
	}, _), React$1.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), Mj === "vertical" ? null : React$1.createElement(Scrollbar, {
		"data-radius": Z,
		orientation: "horizontal",
		className: (0, import_classnames$9.default)("rt-ScrollAreaScrollbar", g$3({
			className: "rt-r-size",
			value: G,
			propValues: t$3.size.values
		}))
	}, React$1.createElement(Thumb$1, { className: "rt-ScrollAreaThumb" })), Mj === "horizontal" ? null : React$1.createElement(Scrollbar, {
		"data-radius": Z,
		orientation: "vertical",
		className: (0, import_classnames$9.default)("rt-ScrollAreaScrollbar", g$3({
			className: "rt-r-size",
			value: G,
			propValues: t$3.size.values
		}))
	}, React$1.createElement(Thumb$1, { className: "rt-ScrollAreaThumb" })), Mj === "both" ? React$1.createElement(Corner, { className: "rt-ScrollAreaCorner" }) : null)));
});
c.displayName = "ScrollArea";
var n$2 = {
	size: {
		type: "enum",
		className: "rt-r-size",
		values: ["1", "2"],
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: ["solid", "soft"],
		default: "solid"
	},
	...r$2,
	...o$4
}, a$4 = {
	...o$5,
	...r$2,
	shortcut: { type: "string" }
}, i$5 = {
	...r$2,
	shortcut: { type: "string" }
}, p$7 = { ...r$2 }, import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames()), s$4 = (_) => React$1.createElement(Root$4, {
	..._,
	modal: !0
});
s$4.displayName = "Dialog.Root";
var n$3 = React$1.forwardRef(({ children: _, ...E }, O) => React$1.createElement(Trigger$4, {
	...E,
	ref: O,
	asChild: !0
}, a$3(_)));
n$3.displayName = "Dialog.Trigger";
var p$8 = React$1.forwardRef(({ align: _, ...E }, O) => {
	let { align: A, ...j } = s$3, { className: M } = v$1({ align: _ }, { align: A }), { className: N, forceMount: P, container: z, ...B } = v$1(E, j);
	return React$1.createElement(Portal$3, {
		container: z,
		forceMount: P
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Overlay, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, React$1.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, React$1.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${M}` }, React$1.createElement(Content$2, {
		...B,
		ref: O,
		className: (0, import_classnames$8.default)("rt-BaseDialogContent", "rt-DialogContent", N)
	}))))));
});
p$8.displayName = "Dialog.Content";
var g$2 = React$1.forwardRef((_, E) => React$1.createElement(Title, { asChild: !0 }, React$1.createElement(r$6, {
	size: "5",
	mb: "3",
	trim: "start",
	..._,
	asChild: !1,
	ref: E
})));
g$2.displayName = "Dialog.Title";
var m$3 = React$1.forwardRef((_, E) => React$1.createElement(Description, { asChild: !0 }, React$1.createElement(p$2, {
	as: "p",
	size: "3",
	..._,
	asChild: !1,
	ref: E
})));
m$3.displayName = "Dialog.Description";
var D$2 = React$1.forwardRef(({ children: _, ...E }, O) => React$1.createElement(Close$1, {
	...E,
	ref: O,
	asChild: !0
}, a$3(_)));
D$2.displayName = "Dialog.Close";
var import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames()), I$2 = (_) => React$1.createElement(Root2$2, { ..._ });
I$2.displayName = "DropdownMenu.Root";
var h$1 = React$1.forwardRef(({ children: _, ...E }, O) => React$1.createElement(Trigger$2, {
	...E,
	ref: O,
	asChild: !0
}, a$3(_)));
h$1.displayName = "DropdownMenu.Trigger";
var b$2 = React$1.createContext({}), g$1 = React$1.forwardRef((_, E) => {
	let O = H$2(), { size: A = n$2.size.default, variant: j = n$2.variant.default, highContrast: M = n$2.highContrast.default } = _, { className: N, children: P, color: z, container: B, forceMount: H, ...U } = v$1(_, n$2), W = z || O.accentColor;
	return React$1.createElement(Portal2, {
		container: B,
		forceMount: H
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Content2$1, {
		"data-accent-color": W,
		align: "start",
		sideOffset: 4,
		collisionPadding: 10,
		...U,
		asChild: !1,
		ref: E,
		className: (0, import_classnames$7.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-DropdownMenuContent", N)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$7.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, React$1.createElement(b$2.Provider, { value: React$1.useMemo(() => ({
		size: A,
		variant: j,
		color: W,
		highContrast: M
	}), [
		A,
		j,
		W,
		M
	]) }, P))))));
});
g$1.displayName = "DropdownMenu.Content";
var y$1 = React$1.forwardRef(({ className: _, ...E }, O) => React$1.createElement(Label2, {
	...E,
	asChild: !1,
	ref: O,
	className: (0, import_classnames$7.default)("rt-BaseMenuLabel", "rt-DropdownMenuLabel", _)
}));
y$1.displayName = "DropdownMenu.Label";
var v$3 = React$1.forwardRef((_, E) => {
	let { className: O, children: A, color: j = a$4.color.default, shortcut: M, ...N } = _;
	return React$1.createElement(Item2, {
		"data-accent-color": j,
		...N,
		ref: E,
		className: (0, import_classnames$7.default)("rt-reset", "rt-BaseMenuItem", "rt-DropdownMenuItem", O)
	}, React$1.createElement(Slottable$1, null, A), M && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, M));
});
v$3.displayName = "DropdownMenu.Item";
var R$3 = React$1.forwardRef(({ className: _, ...E }, O) => React$1.createElement(Group2, {
	...E,
	asChild: !1,
	ref: O,
	className: (0, import_classnames$7.default)("rt-BaseMenuGroup", "rt-DropdownMenuGroup", _)
}));
R$3.displayName = "DropdownMenu.Group";
var S$1 = React$1.forwardRef(({ className: _, ...E }, O) => React$1.createElement(RadioGroup2, {
	...E,
	asChild: !1,
	ref: O,
	className: (0, import_classnames$7.default)("rt-BaseMenuRadioGroup", "rt-DropdownMenuRadioGroup", _)
}));
S$1.displayName = "DropdownMenu.RadioGroup";
var x$1 = React$1.forwardRef((_, E) => {
	let { children: O, className: A, color: j = p$7.color.default, ...M } = _;
	return React$1.createElement(RadioItem2, {
		...M,
		asChild: !1,
		ref: E,
		"data-accent-color": j,
		className: (0, import_classnames$7.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-DropdownMenuItem", "rt-DropdownMenuRadioItem", A)
	}, O, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t$2, { className: "rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon" })));
});
x$1.displayName = "DropdownMenu.RadioItem";
var T$2 = React$1.forwardRef((_, E) => {
	let { children: O, className: A, shortcut: j, color: M = i$5.color.default, ...N } = _;
	return React$1.createElement(CheckboxItem2, {
		...N,
		asChild: !1,
		ref: E,
		"data-accent-color": M,
		className: (0, import_classnames$7.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-DropdownMenuItem", "rt-DropdownMenuCheckboxItem", A)
	}, O, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t$2, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), j && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, j));
});
T$2.displayName = "DropdownMenu.CheckboxItem";
var N$1 = (_) => React$1.createElement(Sub2, { ..._ });
N$1.displayName = "DropdownMenu.Sub";
var E$1 = React$1.forwardRef((_, E) => {
	let { className: O, children: A, ...j } = _;
	return React$1.createElement(SubTrigger2, {
		...j,
		asChild: !1,
		ref: E,
		className: (0, import_classnames$7.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-DropdownMenuItem", "rt-DropdownMenuSubTrigger", O)
	}, A, React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, React$1.createElement(l, { className: "rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon" })));
});
E$1.displayName = "DropdownMenu.SubTrigger";
var G$2 = React$1.forwardRef((_, E) => {
	let { size: O, variant: A, color: j, highContrast: M } = React$1.useContext(b$2), { className: N, children: P, container: z, forceMount: B, ...H } = v$1({
		size: O,
		variant: A,
		color: j,
		highContrast: M,
		..._
	}, n$2);
	return React$1.createElement(Portal2, {
		container: z,
		forceMount: B
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(SubContent2, {
		"data-accent-color": j,
		alignOffset: -Number(O) * 4,
		sideOffset: 1,
		collisionPadding: 10,
		...H,
		asChild: !1,
		ref: E,
		className: (0, import_classnames$7.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-DropdownMenuContent", "rt-DropdownMenuSubContent", N)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$7.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, P)))));
});
G$2.displayName = "DropdownMenu.SubContent";
var B$2 = React$1.forwardRef(({ className: _, ...E }, O) => React$1.createElement(Separator2, {
	...E,
	asChild: !1,
	ref: O,
	className: (0, import_classnames$7.default)("rt-BaseMenuSeparator", "rt-DropdownMenuSeparator", _)
}));
B$2.displayName = "DropdownMenu.Separator";
var import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames()), o$1 = React$1.forwardRef(({ className: _, ...E }, O) => React$1.createElement(n$1, {
	...E,
	ref: O,
	className: (0, import_classnames$6.default)("rt-IconButton", _)
}));
o$1.displayName = "IconButton";
var p$6 = [
	"1",
	"2",
	"3",
	"4"
], r$5 = {
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: p$6,
		default: "2",
		responsive: !0
	},
	width: t$1.width,
	minWidth: t$1.minWidth,
	maxWidth: {
		...t$1.maxWidth,
		default: "480px"
	},
	...e$1
}, import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames()), P$2 = (_) => React$1.createElement(Root2$1, { ..._ });
P$2.displayName = "Popover.Root";
var s$1 = React$1.forwardRef(({ children: _, ...E }, O) => React$1.createElement(Trigger$1, {
	...E,
	ref: O,
	asChild: !0
}, a$3(_)));
s$1.displayName = "Popover.Trigger";
var i$4 = React$1.forwardRef((_, E) => {
	let { className: O, forceMount: A, container: j, ...M } = v$1(_, r$5);
	return React$1.createElement(Portal$1, {
		container: j,
		forceMount: A
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Content2, {
		align: "start",
		sideOffset: 8,
		collisionPadding: 10,
		...M,
		ref: E,
		className: (0, import_classnames$5.default)("rt-PopperContent", "rt-PopoverContent", O)
	})));
});
i$4.displayName = "Popover.Content";
var v$2 = React$1.forwardRef(({ children: _, ...E }, O) => React$1.createElement(Close, {
	...E,
	ref: O,
	asChild: !0
}, a$3(_)));
v$2.displayName = "Popover.Close";
var m$2 = React$1.forwardRef(({ children: _, ...E }, O) => React$1.createElement(Anchor2, {
	...E,
	ref: O
}));
m$2.displayName = "Popover.Anchor";
var t = {
	orientation: {
		type: "enum",
		className: "rt-r-orientation",
		values: ["horizontal", "vertical"],
		default: "horizontal",
		responsive: !0
	},
	size: {
		type: "enum",
		className: "rt-r-size",
		values: [
			"1",
			"2",
			"3",
			"4"
		],
		default: "1",
		responsive: !0
	},
	color: {
		...r$2.color,
		default: "gray"
	},
	decorative: {
		type: "boolean",
		default: !0
	}
}, import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames()), o$2 = React$1.forwardRef((_, E) => {
	let { className: O, color: A, decorative: j, ...M } = v$1(_, t, r$1);
	return React$1.createElement("span", {
		"data-accent-color": A,
		role: j ? void 0 : "separator",
		...M,
		ref: E,
		className: (0, import_classnames$4.default)("rt-Separator", O)
	});
});
o$2.displayName = "Separator";
var a$2 = {
	size: {
		type: "enum",
		className: "rt-r-size",
		values: [
			"1",
			"2",
			"3"
		],
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: [
			"classic",
			"surface",
			"soft"
		],
		default: "surface"
	},
	...r$2,
	...o$4,
	...r$3
}, import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames()), i = React$1.forwardRef((_, E) => {
	let { className: O, color: A, radius: j, ...M } = v$1(_, a$2, r$1);
	return React$1.createElement(Root, {
		"data-accent-color": A,
		"data-radius": j,
		...M,
		asChild: !1,
		ref: E,
		className: (0, import_classnames$3.default)("rt-reset", "rt-SwitchRoot", O)
	}, React$1.createElement(Thumb, { className: (0, import_classnames$3.default)("rt-SwitchThumb", { "rt-high-contrast": _.highContrast }) }));
});
i.displayName = "Switch";
var p$5 = {
	size: {
		type: "enum",
		className: "rt-r-size",
		values: ["1", "2"],
		default: "2",
		responsive: !0
	},
	wrap: {
		type: "enum",
		className: "rt-r-fw",
		values: [
			"nowrap",
			"wrap",
			"wrap-reverse"
		],
		responsive: !0
	},
	justify: {
		type: "enum",
		className: "rt-r-jc",
		values: [
			"start",
			"center",
			"end"
		],
		responsive: !0
	},
	...r$2,
	...o$4
}, import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames()), m$1 = React$1.forwardRef((_, E) => {
	let { className: O, ...A } = v$1(_, r$1);
	return React$1.createElement(Root2, {
		...A,
		ref: E,
		className: (0, import_classnames$2.default)("rt-TabsRoot", O)
	});
});
m$1.displayName = "Tabs.Root";
var b$1 = React$1.forwardRef((_, E) => {
	let { className: O, color: A, ...j } = v$1(_, p$5, r$1);
	return React$1.createElement(List, {
		"data-accent-color": A,
		...j,
		asChild: !1,
		ref: E,
		className: (0, import_classnames$2.default)("rt-BaseTabList", "rt-TabsList", O)
	});
});
b$1.displayName = "Tabs.List";
var P$1 = React$1.forwardRef((_, E) => {
	let { className: O, children: A, ...j } = _;
	return React$1.createElement(Trigger, {
		...j,
		asChild: !1,
		ref: E,
		className: (0, import_classnames$2.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabsTrigger", O)
	}, React$1.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabsTriggerInner" }, A), React$1.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden" }, A));
});
P$1.displayName = "Tabs.Trigger";
var f$2 = React$1.forwardRef((_, E) => {
	let { className: O, ...A } = v$1(_, r$1);
	return React$1.createElement(Content, {
		...A,
		ref: E,
		className: (0, import_classnames$2.default)("rt-TabsContent", O)
	});
});
f$2.displayName = "Tabs.Content";
var a = {
	size: {
		type: "enum",
		className: "rt-r-size",
		values: [
			"1",
			"2",
			"3"
		],
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: [
			"classic",
			"surface",
			"soft"
		],
		default: "surface"
	},
	resize: {
		type: "enum",
		className: "rt-r-resize",
		values: [
			"none",
			"vertical",
			"horizontal",
			"both"
		],
		responsive: !0
	},
	...r$2,
	...r$3
}, import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames()), r = React$1.forwardRef((_, E) => {
	let { className: O, color: A, radius: j, style: M, ...N } = v$1(_, a, r$1);
	return React$1.createElement("div", {
		"data-accent-color": A,
		"data-radius": j,
		className: (0, import_classnames$1.default)("rt-TextAreaRoot", O),
		style: M
	}, React$1.createElement("textarea", {
		className: "rt-reset rt-TextAreaInput",
		ref: E,
		...N
	}));
});
r.displayName = "TextArea";
var f$1 = {
	size: {
		type: "enum",
		className: "rt-r-size",
		values: [
			"1",
			"2",
			"3"
		],
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: [
			"classic",
			"surface",
			"soft"
		],
		default: "surface"
	},
	...r$2,
	...r$3
}, i$2 = {
	side: {
		type: "enum",
		values: ["left", "right"]
	},
	...r$2,
	gap: u$2.gap,
	px: p$4.px,
	pl: p$4.pl,
	pr: p$4.pr
}, import_classnames = /* @__PURE__ */ __toESM(require_classnames()), u$1 = React$1.forwardRef((_, E) => {
	let O = React$1.useRef(null), { children: A, className: j, color: M, radius: N, style: P, ...z } = v$1(_, f$1, r$1);
	return React$1.createElement("div", {
		"data-accent-color": M,
		"data-radius": N,
		style: P,
		className: (0, import_classnames.default)("rt-TextFieldRoot", j),
		onPointerDown: (n) => {
			let _ = n.target;
			if (_.closest("input, button, a")) return;
			let E = O.current;
			if (!E) return;
			let A = _.closest("\n            .rt-TextFieldSlot[data-side='right'],\n            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])\n          ") ? E.value.length : 0;
			requestAnimationFrame(() => {
				try {
					E.setSelectionRange(A, A);
				} catch {}
				E.focus();
			});
		}
	}, React$1.createElement("input", {
		spellCheck: "false",
		...z,
		ref: composeRefs$1(O, E),
		className: "rt-reset rt-TextFieldInput"
	}), A);
});
u$1.displayName = "TextField.Root";
var c$2 = React$1.forwardRef((_, E) => {
	let { className: O, color: A, side: j, ...M } = v$1(_, i$2);
	return React$1.createElement("div", {
		"data-accent-color": A,
		"data-side": j,
		...M,
		ref: E,
		className: (0, import_classnames.default)("rt-TextFieldSlot", O)
	});
});
c$2.displayName = "TextField.Slot";
function z$1(n, _ = "Assertion error") {
	if (!n) throw Error(_);
}
function W$1({ group: n }) {
	let { orientation: _, panels: E } = n;
	return E.reduce((n, E) => (n += _ === "horizontal" ? E.element.offsetWidth : E.element.offsetHeight, n), 0);
}
function ie$1(n, _) {
	return _.sort(n === "horizontal" ? Je : Qe);
}
function Je(n, _) {
	let E = n.element.offsetLeft - _.element.offsetLeft;
	return E === 0 ? n.element.offsetWidth - _.element.offsetWidth : E;
}
function Qe(n, _) {
	let E = n.element.offsetTop - _.element.offsetTop;
	return E === 0 ? n.element.offsetHeight - _.element.offsetHeight : E;
}
function Me$1(n) {
	return typeof n == "object" && !!n && "nodeType" in n && n.nodeType === Node.ELEMENT_NODE;
}
function Ee$1(n, _) {
	return {
		x: n.x >= _.left && n.x <= _.right ? 0 : Math.min(Math.abs(n.x - _.left), Math.abs(n.x - _.right)),
		y: n.y >= _.top && n.y <= _.bottom ? 0 : Math.min(Math.abs(n.y - _.top), Math.abs(n.y - _.bottom))
	};
}
function et({ orientation: n, rects: _, targetRect: E }) {
	let O = {
		x: E.x + E.width / 2,
		y: E.y + E.height / 2
	}, A, j = Number.MAX_VALUE;
	for (let E of _) {
		let { x: _, y: M } = Ee$1(O, E), N = n === "horizontal" ? _ : M;
		N < j && (j = N, A = E);
	}
	return z$1(A, "No rect found"), A;
}
function Ie$1(n) {
	let { element: _, orientation: E, panels: O, separators: A } = n, j = ie$1(E, Array.from(_.children).filter(Me$1).map((n) => ({ element: n }))).map(({ element: n }) => n), M = [], N = !1, P, z = [];
	for (let _ of j) if (_.hasAttribute("data-panel")) {
		let A = O.find((n) => n.element === _);
		if (A) {
			if (P) {
				let O = P.element.getBoundingClientRect(), j = _.getBoundingClientRect(), B;
				if (N) {
					let n = E === "horizontal" ? new DOMRect(O.right, O.top, 0, O.height) : new DOMRect(O.left, O.bottom, O.width, 0), _ = E === "horizontal" ? new DOMRect(j.left, j.top, 0, j.height) : new DOMRect(j.left, j.top, j.width, 0);
					switch (z.length) {
						case 0:
							B = [n, _];
							break;
						case 1: {
							let A = z[0];
							B = [A, et({
								orientation: E,
								rects: [O, j],
								targetRect: A.element.getBoundingClientRect()
							}) === O ? _ : n];
							break;
						}
						default:
							B = z;
							break;
					}
				} else B = z.length ? z : [E === "horizontal" ? new DOMRect(O.right, j.top, j.left - O.right, j.height) : new DOMRect(j.left, O.bottom, j.width, j.top - O.bottom)];
				for (let _ of B) M.push({
					group: n,
					groupSize: W$1({ group: n }),
					panels: [P, A],
					separator: "width" in _ ? void 0 : _,
					rect: "width" in _ ? _ : _.element.getBoundingClientRect()
				});
			}
			N = !1, P = A, z = [];
		}
	} else if (_.hasAttribute("data-separator")) {
		let n = A.find((n) => n.element === _);
		n ? z.push(n) : (P = void 0, z = []);
	} else N = !0;
	return M;
}
function tt(n, _) {
	let E = getComputedStyle(n);
	return _ * parseFloat(E.fontSize);
}
function nt(n, _) {
	let E = getComputedStyle(n.ownerDocument.body);
	return _ * parseFloat(E.fontSize);
}
function ot(n) {
	return n / 100 * window.innerHeight;
}
function rt(n) {
	return n / 100 * window.innerWidth;
}
function it(n) {
	switch (typeof n) {
		case "number": return [n, "px"];
		case "string": {
			let _ = parseFloat(n);
			return n.endsWith("%") ? [_, "%"] : n.endsWith("px") ? [_, "px"] : n.endsWith("rem") ? [_, "rem"] : n.endsWith("em") ? [_, "em"] : n.endsWith("vh") ? [_, "vh"] : n.endsWith("vw") ? [_, "vw"] : [_, "%"];
		}
	}
}
function Q$1({ groupSize: n, panelElement: _, styleProp: E }) {
	let O, [A, j] = it(E);
	switch (j) {
		case "%":
			O = A / 100 * n;
			break;
		case "px":
			O = A;
			break;
		case "rem":
			O = nt(_, A);
			break;
		case "em":
			O = tt(_, A);
			break;
		case "vh":
			O = ot(A);
			break;
		case "vw":
			O = rt(A);
			break;
	}
	return O;
}
function G$1(n) {
	return parseFloat(n.toFixed(3));
}
function pe$1(n) {
	let { panels: _ } = n, E = W$1({ group: n });
	return E === 0 ? _.map((n) => ({
		collapsedSize: 0,
		collapsible: n.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		minSize: 0,
		maxSize: 100,
		panelId: n.id
	})) : _.map((n) => {
		let { element: _, panelConstraints: O } = n, A = 0;
		O.collapsedSize && (A = G$1(Q$1({
			groupSize: E,
			panelElement: _,
			styleProp: O.collapsedSize
		}) / E * 100));
		let j;
		O.defaultSize && (j = G$1(Q$1({
			groupSize: E,
			panelElement: _,
			styleProp: O.defaultSize
		}) / E * 100));
		let M = 0;
		O.minSize && (M = G$1(Q$1({
			groupSize: E,
			panelElement: _,
			styleProp: O.minSize
		}) / E * 100));
		let N = 100;
		return O.maxSize && (N = G$1(Q$1({
			groupSize: E,
			panelElement: _,
			styleProp: O.maxSize
		}) / E * 100)), {
			collapsedSize: A,
			collapsible: O.collapsible === !0,
			defaultSize: j,
			minSize: M,
			maxSize: N,
			panelId: n.id
		};
	});
}
var st = class {
	#e = {};
	addListener(n, _) {
		let E = this.#e[n];
		return E === void 0 ? this.#e[n] = [_] : E.includes(_) || E.push(_), () => {
			this.removeListener(n, _);
		};
	}
	emit(n, _) {
		let E = this.#e[n];
		if (E !== void 0) if (E.length === 1) E[0].call(null, _);
		else {
			let n = !1, O = null, A = Array.from(E);
			for (let E = 0; E < A.length; E++) {
				let j = A[E];
				try {
					j.call(null, _);
				} catch (_) {
					O === null && (n = !0, O = _);
				}
			}
			if (n) throw O;
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(n, _) {
		let E = this.#e[n];
		if (E !== void 0) {
			let n = E.indexOf(_);
			n >= 0 && E.splice(n, 1);
		}
	}
};
function R$2(n, _, E = 0) {
	return Math.abs(G$1(n) - G$1(_)) <= E;
}
var M$1 = {
	cursorFlags: 0,
	interactionState: { state: "inactive" },
	mountedGroups: /* @__PURE__ */ new Map()
}, T$1 = new st();
function D$1() {
	return M$1;
}
function I$1(n) {
	let _ = typeof n == "function" ? n(M$1) : n;
	if (M$1 === _) return M$1;
	let E = M$1;
	return M$1 = {
		...M$1,
		..._
	}, _.cursorFlags !== void 0 && T$1.emit("cursorFlagsChange", M$1.cursorFlags), _.interactionState !== void 0 && T$1.emit("interactionStateChange", M$1.interactionState), _.mountedGroups !== void 0 && (M$1.mountedGroups.forEach((n, _) => {
		n.derivedPanelConstraints.forEach((O) => {
			if (O.collapsible) {
				let { layout: A } = E.mountedGroups.get(_) ?? {};
				if (A) {
					let E = R$2(O.collapsedSize, n.layout[O.panelId]), j = R$2(O.collapsedSize, A[O.panelId]);
					E && !j && (_.inMemoryLastExpandedPanelSizes[O.panelId] = A[O.panelId]);
				}
			}
		});
	}), T$1.emit("mountedGroupsChange", M$1.mountedGroups)), M$1;
}
function at(n, _) {
	if (n.length !== _.length) return !1;
	for (let E = 0; E < n.length; E++) if (n[E] != _[E]) return !1;
	return !0;
}
function Y$1(n, _) {
	return R$2(n, _) ? 0 : n > _ ? 1 : -1;
}
function H$1({ panelConstraints: n, size: _ }) {
	let { collapsedSize: E = 0, collapsible: O, maxSize: A = 100, minSize: j = 0 } = n;
	if (Y$1(_, j) < 0) if (O) {
		let n = (E + j) / 2;
		_ = Y$1(_, n) < 0 ? E : j;
	} else _ = j;
	return _ = Math.min(A, _), _ = G$1(_), _;
}
function Z$1({ delta: n, initialLayout: _, panelConstraints: E, pivotIndices: O, prevLayout: A, trigger: j }) {
	if (R$2(n, 0)) return _;
	let M = Object.values(_), N = Object.values(A), P = [...M], [z, B] = O;
	z$1(z != null, "Invalid first pivot index"), z$1(B != null, "Invalid second pivot index");
	let H = 0;
	if (j === "keyboard") {
		{
			let _ = n < 0 ? B : z, O = E[_];
			z$1(O, `Panel constraints not found for index ${_}`);
			let { collapsedSize: A = 0, collapsible: j, minSize: N = 0 } = O;
			if (j) {
				let E = M[_];
				if (z$1(E != null, `Previous layout not found for panel index ${_}`), R$2(E, A)) {
					let _ = N - E;
					Y$1(_, Math.abs(n)) > 0 && (n = n < 0 ? 0 - _ : _);
				}
			}
		}
		{
			let _ = n < 0 ? z : B, O = E[_];
			z$1(O, `No panel constraints found for index ${_}`);
			let { collapsedSize: A = 0, collapsible: j, minSize: N = 0 } = O;
			if (j) {
				let E = M[_];
				if (z$1(E != null, `Previous layout not found for panel index ${_}`), R$2(E, N)) {
					let _ = E - A;
					Y$1(_, Math.abs(n)) > 0 && (n = n < 0 ? 0 - _ : _);
				}
			}
		}
	}
	{
		let _ = n < 0 ? 1 : -1, O = n < 0 ? B : z, A = 0;
		for (;;) {
			let n = M[O];
			z$1(n != null, `Previous layout not found for panel index ${O}`);
			let j = H$1({
				panelConstraints: E[O],
				size: 100
			}) - n;
			if (A += j, O += _, O < 0 || O >= E.length) break;
		}
		let j = Math.min(Math.abs(n), Math.abs(A));
		n = n < 0 ? 0 - j : j;
	}
	{
		let _ = n < 0 ? z : B;
		for (; _ >= 0 && _ < E.length;) {
			let O = Math.abs(n) - Math.abs(H), A = M[_];
			z$1(A != null, `Previous layout not found for panel index ${_}`);
			let j = A - O, N = H$1({
				panelConstraints: E[_],
				size: j
			});
			if (!R$2(A, N) && (H += A - N, P[_] = N, H.toFixed(3).localeCompare(Math.abs(n).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			n < 0 ? _-- : _++;
		}
	}
	if (at(N, P)) return A;
	{
		let _ = n < 0 ? B : z, O = M[_];
		z$1(O != null, `Previous layout not found for panel index ${_}`);
		let A = O + H, j = H$1({
			panelConstraints: E[_],
			size: A
		});
		if (P[_] = j, !R$2(j, A)) {
			let _ = A - j, O = n < 0 ? B : z;
			for (; O >= 0 && O < E.length;) {
				let A = P[O];
				z$1(A != null, `Previous layout not found for panel index ${O}`);
				let j = A + _, M = H$1({
					panelConstraints: E[O],
					size: j
				});
				if (R$2(A, M) || (_ -= M - A, P[O] = M), R$2(_, 0)) break;
				n > 0 ? O-- : O++;
			}
		}
	}
	if (!R$2(Object.values(P).reduce((n, _) => _ + n, 0), 100, .1)) return A;
	let U = Object.keys(A);
	return P.reduce((n, _, E) => (n[U[E]] = _, n), {});
}
function te$1(n) {
	let { mountedGroups: _ } = D$1();
	for (let [E] of _) if (E.separators.some((_) => _.element === n)) return E;
	throw Error("Could not find parent Group for separator element");
}
function B$1(n, _) {
	if (Object.keys(n).length !== Object.keys(_).length) return !1;
	for (let E in n) if (_[E] === void 0 || Y$1(n[E], _[E]) !== 0) return !1;
	return !0;
}
function _$1({ layout: n, panelConstraints: _ }) {
	let E = [...Object.values(n)], O = E.reduce((n, _) => n + _, 0);
	if (E.length !== _.length) throw Error(`Invalid ${_.length} panel layout: ${E.map((n) => `${n}%`).join(", ")}`);
	if (!R$2(O, 100) && E.length > 0) for (let n = 0; n < _.length; n++) {
		let _ = E[n];
		z$1(_ != null, `No layout data found for index ${n}`), E[n] = 100 / O * _;
	}
	let A = 0;
	for (let n = 0; n < _.length; n++) {
		let O = E[n];
		z$1(O != null, `No layout data found for index ${n}`);
		let j = H$1({
			panelConstraints: _[n],
			size: O
		});
		O != j && (A += O - j, E[n] = j);
	}
	if (!R$2(A, 0)) for (let n = 0; n < _.length; n++) {
		let O = E[n];
		z$1(O != null, `No layout data found for index ${n}`);
		let j = O + A, M = H$1({
			panelConstraints: _[n],
			size: j
		});
		if (O !== M && (A -= M - O, E[n] = M, R$2(A, 0))) break;
	}
	let j = Object.keys(n);
	return E.reduce((n, _, E) => (n[j[E]] = _, n), {});
}
function ke$1({ groupId: n }) {
	let _ = () => {
		let { mountedGroups: _ } = D$1();
		for (let [E, O] of _) if (E.id === n) return {
			group: E,
			...O
		};
		throw Error(`Could not find Group with id "${n}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: n, layout: E } = _();
			return n ? {} : E;
		},
		setLayout(n) {
			let { defaultLayoutDeferred: E, derivedPanelConstraints: O, group: A, layout: j, separatorToPanels: M } = _(), N = _$1({
				layout: n,
				panelConstraints: O
			});
			return E ? j : (B$1(j, N) || I$1((n) => ({ mountedGroups: new Map(n.mountedGroups).set(A, {
				defaultLayoutDeferred: E,
				derivedPanelConstraints: O,
				layout: N,
				separatorToPanels: M
			}) })), N);
		}
	};
}
function Ge(n) {
	let { mountedGroups: _ } = D$1(), E = _.get(n);
	return z$1(E, `Mounted Group ${n.id} not found`), E;
}
function O$1(n, _) {
	let E = te$1(n), O = Ge(E), A = E.separators.find((_) => _.element === n);
	z$1(A, "Matching separator not found");
	let j = O.separatorToPanels.get(A);
	z$1(j, "Matching panels not found");
	let M = j.map((n) => E.panels.indexOf(n)), N = ke$1({ groupId: E.id }).getLayout(), P = _$1({
		layout: Z$1({
			delta: _,
			initialLayout: N,
			panelConstraints: O.derivedPanelConstraints,
			pivotIndices: M,
			prevLayout: N,
			trigger: "keyboard"
		}),
		panelConstraints: O.derivedPanelConstraints
	});
	B$1(N, P) || I$1((n) => ({ mountedGroups: new Map(n.mountedGroups).set(E, {
		defaultLayoutDeferred: O.defaultLayoutDeferred,
		derivedPanelConstraints: O.derivedPanelConstraints,
		layout: P,
		separatorToPanels: O.separatorToPanels
	}) }));
}
function me$1(n) {
	if (n.defaultPrevented) return;
	let _ = n.currentTarget, E = te$1(_);
	if (!E.disabled) switch (n.key) {
		case "ArrowDown":
			n.preventDefault(), E.orientation === "vertical" && O$1(_, 5);
			break;
		case "ArrowLeft":
			n.preventDefault(), E.orientation === "horizontal" && O$1(_, -5);
			break;
		case "ArrowRight":
			n.preventDefault(), E.orientation === "horizontal" && O$1(_, 5);
			break;
		case "ArrowUp":
			n.preventDefault(), E.orientation === "vertical" && O$1(_, -5);
			break;
		case "End":
			n.preventDefault(), O$1(_, 100);
			break;
		case "Enter": {
			n.preventDefault();
			let E = te$1(_), { derivedPanelConstraints: O, layout: A, separatorToPanels: j } = Ge(E), M = E.separators.find((n) => n.element === _);
			z$1(M, "Matching separator not found");
			let N = j.get(M);
			z$1(N, "Matching panels not found");
			let P = N[0], z = O.find((n) => n.panelId === P.id);
			if (z$1(z, "Panel metadata not found"), z.collapsible) {
				let n = A[P.id];
				O$1(_, (z.collapsedSize === n ? E.inMemoryLastExpandedPanelSizes[P.id] ?? z.minSize : z.collapsedSize) - n);
			}
			break;
		}
		case "F6": {
			n.preventDefault();
			let E = te$1(_).separators.map((n) => n.element), O = Array.from(E).findIndex((_) => _ === n.currentTarget);
			z$1(O !== null, "Index not found"), E[n.shiftKey ? O > 0 ? O - 1 : E.length - 1 : O + 1 < E.length ? O + 1 : 0].focus();
			break;
		}
		case "Home":
			n.preventDefault(), O$1(_, -100);
			break;
	}
}
var lt = (n) => n, ne$1 = () => {}, De = 1, Oe$1 = 2, Te = 4, Ne$1 = 8, he$1 = {
	coarse: 10,
	precise: 5
};
function ut(n, _, E) {
	let O, A = {
		x: Infinity,
		y: Infinity
	};
	for (let j of _) {
		let _ = Ee$1(E, j.rect);
		switch (n) {
			case "horizontal":
				_.x <= A.x && (O = j, A = _);
				break;
			case "vertical":
				_.y <= A.y && (O = j, A = _);
				break;
		}
	}
	return O ? {
		distance: A,
		hitRegion: O
	} : void 0;
}
var ee$1;
function ct() {
	return ee$1 === void 0 && (ee$1 = typeof matchMedia == "function" ? !!matchMedia("(pointer:coarse)").matches : !1), ee$1;
}
function ft(n) {
	return typeof n == "object" && !!n && "nodeType" in n && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function dt(n, _) {
	if (n === _) throw Error("Cannot compare node with itself");
	let E = {
		a: Se(n),
		b: Se(_)
	}, O;
	for (; E.a.at(-1) === E.b.at(-1);) n = E.a.pop(), _ = E.b.pop(), O = n;
	z$1(O, "Stacking order can only be calculated for elements with a common ancestor");
	let A = {
		a: ge$1(ye$1(E.a)),
		b: ge$1(ye$1(E.b))
	};
	if (A.a === A.b) {
		let n = O.childNodes, _ = {
			a: E.a.at(-1),
			b: E.b.at(-1)
		}, A = n.length;
		for (; A--;) {
			let E = n[A];
			if (E === _.a) return 1;
			if (E === _.b) return -1;
		}
	}
	return Math.sign(A.a - A.b);
}
var pt = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function mt(n) {
	let _ = getComputedStyle(_e$1(n) ?? n).display;
	return _ === "flex" || _ === "inline-flex";
}
function ht(n) {
	let _ = getComputedStyle(n);
	return !!(_.position === "fixed" || _.zIndex !== "auto" && (_.position !== "static" || mt(n)) || +_.opacity < 1 || "transform" in _ && _.transform !== "none" || "webkitTransform" in _ && _.webkitTransform !== "none" || "mixBlendMode" in _ && _.mixBlendMode !== "normal" || "filter" in _ && _.filter !== "none" || "webkitFilter" in _ && _.webkitFilter !== "none" || "isolation" in _ && _.isolation === "isolate" || pt.test(_.willChange) || _.webkitOverflowScrolling === "touch");
}
function ye$1(n) {
	let _ = n.length;
	for (; _--;) {
		let E = n[_];
		if (z$1(E, "Missing node"), ht(E)) return E;
	}
	return null;
}
function ge$1(n) {
	return n && Number(getComputedStyle(n).zIndex) || 0;
}
function Se(n) {
	let _ = [];
	for (; n;) _.push(n), n = _e$1(n);
	return _;
}
function _e$1(n) {
	let { parentNode: _ } = n;
	return ft(_) ? _.host : _;
}
function yt(n, _) {
	return n.x < _.x + _.width && n.x + n.width > _.x && n.y < _.y + _.height && n.y + n.height > _.y;
}
function gt({ groupElement: n, hitRegion: _, pointerEventTarget: E }) {
	if (!Me$1(E) || E.contains(n) || n.contains(E)) return !0;
	if (dt(E, n) > 0) {
		let O = E;
		for (; O;) {
			if (O.contains(n)) return !0;
			if (yt(O.getBoundingClientRect(), _)) return !1;
			O = O.parentElement;
		}
	}
	return !0;
}
function Ae(n, _) {
	let E = [];
	return _.forEach((_, O) => {
		if (O.disabled) return;
		let A = ct() ? he$1.coarse : he$1.precise, j = Ie$1(O), M = ut(O.orientation, j, {
			x: n.clientX,
			y: n.clientY
		});
		M && M.distance.x <= A && M.distance.y <= A && gt({
			groupElement: O.element,
			hitRegion: M.hitRegion.rect,
			pointerEventTarget: n.target
		}) && E.push(M.hitRegion);
	}), E;
}
function ve$1(n) {
	if (n.defaultPrevented || n.pointerType === "mouse" && n.button > 0) return;
	let { mountedGroups: _ } = D$1(), E = Ae(n, _), O = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Map(), N = !1;
	E.forEach((n) => {
		O.add(n.group), n.panels.forEach((n) => {
			A.add(n);
		}), n.separator && (j.add(n.separator), N || (N = !0, n.separator.element.focus()));
		let E = _.get(n.group);
		E && M.set(n.group, E.layout);
	}), I$1({ interactionState: {
		hitRegions: E,
		initialLayoutMap: M,
		pointerDownAtPoint: {
			x: n.clientX,
			y: n.clientY
		},
		state: "active"
	} }), E.length && n.preventDefault();
}
function St({ cursorFlags: n, groups: _, state: E }) {
	let O = 0, A = 0;
	switch (E) {
		case "active":
		case "hover": _.forEach((n) => {
			if (!n.disableCursor) switch (n.orientation) {
				case "horizontal":
					O++;
					break;
				case "vertical":
					A++;
					break;
			}
		});
	}
	if (O === 0 && A === 0) return null;
	switch (E) {
		case "active": {
			let _ = (n & De) !== 0, E = (n & Oe$1) !== 0, O = (n & Te) !== 0, A = (n & Ne$1) !== 0;
			if (n) {
				if (_) return O ? "se-resize" : A ? "ne-resize" : "e-resize";
				if (E) return O ? "sw-resize" : A ? "nw-resize" : "w-resize";
				if (O) return "s-resize";
				if (A) return "n-resize";
			}
			break;
		}
	}
	return O > 0 && A > 0 ? "move" : O > 0 ? "ew-resize" : "ns-resize";
}
var xe$1 = /* @__PURE__ */ new WeakMap();
function se$1(n) {
	if (n.defaultView === null || n.defaultView === void 0) return;
	let { prevStyle: _, styleSheet: E } = xe$1.get(n) ?? {};
	E === void 0 && (E = new n.defaultView.CSSStyleSheet(), n.adoptedStyleSheets = [E]);
	let { cursorFlags: O, interactionState: A } = D$1();
	switch (A.state) {
		case "active":
		case "hover": {
			let n = St({
				cursorFlags: O,
				groups: A.hitRegions.map((n) => n.group),
				state: A.state
			}), j = `*{cursor: ${n} !important; ${A.state === "active" ? "touch-action: none;" : ""} }`;
			if (_ === j) return;
			_ = j, n ? E.cssRules.length === 0 ? E.insertRule(j) : E.replaceSync(j) : E.cssRules.length === 1 && E.deleteRule(0);
			break;
		}
		case "inactive":
			_ = void 0, E.cssRules.length === 1 && E.deleteRule(0);
			break;
	}
	xe$1.set(n, {
		prevStyle: _,
		styleSheet: E
	});
}
function $e({ document: n, event: _, hitRegions: E, initialLayoutMap: O, mountedGroups: A, pointerDownAtPoint: j }) {
	let M = 0, N = new Map(A);
	E.forEach((n) => {
		let { group: E, groupSize: P } = n, { disableCursor: z, orientation: B, panels: H } = E, U = 0;
		U = j ? B === "horizontal" ? (_.clientX - j.x) / P * 100 : (_.clientY - j.y) / P * 100 : B === "horizontal" ? _.clientX < 0 ? -100 : 100 : _.clientY < 0 ? -100 : 100;
		let W = O.get(E), { defaultLayoutDeferred: G, derivedPanelConstraints: Z, layout: Mj, separatorToPanels: Nj } = A.get(E) ?? { defaultLayoutDeferred: !1 };
		if (Z && W && Mj && Nj) {
			let _ = Z$1({
				delta: U,
				initialLayout: W,
				panelConstraints: Z,
				pivotIndices: n.panels.map((n) => H.indexOf(n)),
				prevLayout: Mj,
				trigger: "mouse-or-touch"
			});
			if (B$1(_, Mj)) {
				if (U !== 0 && !z) switch (B) {
					case "horizontal":
						M |= U < 0 ? De : Oe$1;
						break;
					case "vertical":
						M |= U < 0 ? Te : Ne$1;
						break;
				}
			} else {
				N.set(n.group, {
					defaultLayoutDeferred: G,
					derivedPanelConstraints: Z,
					layout: _,
					separatorToPanels: Nj
				});
				let E = n.group.panels.map(({ id: n }) => n).join(",");
				n.group.inMemoryLayouts[E] = _;
			}
		}
	}), I$1({
		cursorFlags: M,
		mountedGroups: N
	}), se$1(n);
}
function ze(n) {
	let { interactionState: _, mountedGroups: E } = D$1();
	switch (_.state) {
		case "active": $e({
			document: n.currentTarget,
			event: n,
			hitRegions: _.hitRegions,
			initialLayoutMap: _.initialLayoutMap,
			mountedGroups: E
		});
	}
}
function be$1(n) {
	if (n.defaultPrevented) return;
	let { interactionState: _, mountedGroups: E } = D$1();
	switch (_.state) {
		case "active":
			if (n.buttons === 0) {
				I$1((n) => n.interactionState.state === "inactive" ? n : {
					cursorFlags: 0,
					interactionState: { state: "inactive" }
				});
				return;
			}
			$e({
				document: n.currentTarget,
				event: n,
				hitRegions: _.hitRegions,
				initialLayoutMap: _.initialLayoutMap,
				mountedGroups: E,
				pointerDownAtPoint: _.pointerDownAtPoint
			});
			break;
		default: {
			let O = Ae(n, E);
			O.length === 0 ? _.state !== "inactive" && I$1({ interactionState: { state: "inactive" } }) : I$1({ interactionState: {
				hitRegions: O,
				state: "hover"
			} }), se$1(n.currentTarget);
			break;
		}
	}
}
function we$1(n) {
	if (n.defaultPrevented || n.pointerType === "mouse" && n.button > 0) return;
	n.preventDefault();
	let { interactionState: _ } = D$1();
	switch (_.state) {
		case "active": I$1({
			cursorFlags: 0,
			interactionState: { state: "inactive" }
		}), se$1(n.currentTarget);
	}
}
function Le(n) {
	let _ = 0, E = 0, O = {};
	for (let A of n) if (A.defaultSize !== void 0) {
		_++;
		let n = G$1(A.defaultSize);
		E += n, O[A.panelId] = n;
	} else O[A.panelId] = void 0;
	let A = n.length - _;
	if (A !== 0) {
		let _ = G$1((100 - E) / A);
		for (let E of n) E.defaultSize === void 0 && (O[E.panelId] = _);
	}
	return O;
}
function vt(n, _, E) {
	if (!E[0]) return;
	let O = n.panels.find((n) => n.element === _);
	if (!O || !O.onResize) return;
	let A = W$1({ group: n }), j = n.orientation === "horizontal" ? O.element.offsetWidth : O.element.offsetHeight, M = O.mutableValues.prevSize, N = {
		asPercentage: G$1(j / A * 100),
		inPixels: j
	};
	O.mutableValues.prevSize = N, O.onResize(N, O.id, M);
}
function xt(n, _) {
	if (Object.keys(n).length !== Object.keys(_).length) return !1;
	for (let E in n) if (n[E] !== _[E]) return !1;
	return !0;
}
function zt(n, _) {
	let E = n.map((n) => n.id), O = Object.keys(_);
	if (E.length !== O.length) return !1;
	for (let n of E) if (!O.includes(n)) return !1;
	return !0;
}
var j$1 = /* @__PURE__ */ new Map();
function bt(n) {
	let _ = !0;
	z$1(n.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
	let E = n.element.ownerDocument.defaultView.ResizeObserver, O = /* @__PURE__ */ new Set(), A = /* @__PURE__ */ new Set(), j = new E((E) => {
		for (let O of E) {
			let { borderBoxSize: E, target: A } = O;
			if (A === n.element) {
				if (_) {
					if (W$1({ group: n }) === 0) return;
					I$1((_) => {
						let E = _.mountedGroups.get(n);
						if (E) {
							let O = pe$1(n), A = E.defaultLayoutDeferred ? Le(O) : E.layout, j = _$1({
								layout: A,
								panelConstraints: O
							});
							return !E.defaultLayoutDeferred && B$1(A, j) && xt(E.derivedPanelConstraints, O) ? _ : { mountedGroups: new Map(_.mountedGroups).set(n, {
								defaultLayoutDeferred: !1,
								derivedPanelConstraints: O,
								layout: j,
								separatorToPanels: E.separatorToPanels
							}) };
						}
						return _;
					});
				}
			} else vt(n, A, E);
		}
	});
	j.observe(n.element), n.panels.forEach((n) => {
		z$1(!O.has(n.id), `Panel ids must be unique; id "${n.id}" was used more than once`), O.add(n.id), n.onResize && j.observe(n.element);
	});
	let M = W$1({ group: n }), N = pe$1(n), P = n.panels.map(({ id: n }) => n).join(","), z = n.defaultLayout;
	z && (zt(n.panels, z) || (z = void 0));
	let B = _$1({
		layout: n.inMemoryLayouts[P] ?? z ?? Le(N),
		panelConstraints: N
	}), H = Ie$1(n), U = n.element.ownerDocument;
	return I$1((_) => {
		let E = /* @__PURE__ */ new Map();
		return j$1.set(U, (j$1.get(U) ?? 0) + 1), H.forEach((n) => {
			n.separator && E.set(n.separator, n.panels);
		}), { mountedGroups: new Map(_.mountedGroups).set(n, {
			defaultLayoutDeferred: M === 0,
			derivedPanelConstraints: N,
			layout: B,
			separatorToPanels: E
		}) };
	}), n.separators.forEach((n) => {
		z$1(!A.has(n.id), `Separator ids must be unique; id "${n.id}" was used more than once`), A.add(n.id), n.element.addEventListener("keydown", me$1);
	}), j$1.get(U) === 1 && (U.addEventListener("pointerdown", ve$1, !0), U.addEventListener("pointerleave", ze), U.addEventListener("pointermove", be$1), U.addEventListener("pointerup", we$1, !0)), function() {
		_ = !1, j$1.set(U, Math.max(0, (j$1.get(U) ?? 0) - 1)), I$1((_) => {
			let E = new Map(_.mountedGroups);
			return E.delete(n), { mountedGroups: E };
		}), n.separators.forEach((n) => {
			n.element.removeEventListener("keydown", me$1);
		}), j$1.get(U) || (U.removeEventListener("pointerdown", ve$1, !0), U.removeEventListener("pointerleave", ze), U.removeEventListener("pointermove", be$1), U.removeEventListener("pointerup", we$1, !0)), j.disconnect();
	};
}
function wt() {
	let [n, _] = useState({});
	return [n, useCallback(() => _({}), [])];
}
function ae$1(n) {
	let _ = useId();
	return `${n ?? _}`;
}
var A$1 = typeof window < "u" ? useLayoutEffect : useEffect;
function le$1(n) {
	let _ = useRef(n);
	return A$1(() => {
		_.current = n;
	}, [n]), useCallback((...n) => _.current?.(...n), [_]);
}
function ue$1(...n) {
	return le$1((_) => {
		n.forEach((n) => {
			if (n) switch (typeof n) {
				case "function":
					n(_);
					break;
				case "object":
					n.current = _;
					break;
			}
		});
	});
}
function Lt(n) {
	let _ = useRef({ ...n });
	return A$1(() => {
		for (let E in n) _.current[E] = n[E];
	}, [n]), _.current;
}
var Fe = "--react-resizable-panels--panel--pointer-events";
function Ve(n, _) {
	return `--react-resizable-panels--${n.replace(/[^a-zA-Z0-9\-_]/g, "")}--${_.replace(/[^a-zA-Z0-9\-_]/g, "")}`;
}
var je = createContext(null);
function Pt(n, _) {
	let E = useRef({
		getLayout: () => ({}),
		setLayout: lt
	});
	useImperativeHandle(_, () => E.current, []), A$1(() => {
		Object.assign(E.current, ke$1({ groupId: n }));
	});
}
function Rt({ children: n, className: _, defaultLayout: E, disableCursor: O, disabled: A, elementRef: j, groupRef: M, id: N, onLayoutChange: P, orientation: z = "horizontal", style: B, ...H }) {
	let U = useRef({}), G = le$1((n) => {
		B$1(U.current, n) || (U.current = n, P?.(n));
	}), Z = ae$1(N), Mj = useRef(null), [Nj, Lj] = useState(!1), [Rj, zj] = useState(E ?? {}), [Bj, Hj] = wt(), Uj = useRef({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		separators: []
	}), Wj = ue$1(Mj, j);
	Pt(Z, M);
	let Gj = useMemo(() => ({
		id: Z,
		orientation: z,
		registerPanel: (n) => {
			let _ = Uj.current;
			return _.panels = ie$1(z, [..._.panels, n]), Hj(), () => {
				_.panels = _.panels.filter((_) => _ !== n), Hj();
			};
		},
		registerSeparator: (n) => {
			let _ = Uj.current;
			return _.separators = ie$1(z, [..._.separators, n]), Hj(), () => {
				_.separators = _.separators.filter((_) => _ !== n), Hj();
			};
		}
	}), [
		Z,
		Hj,
		z
	]), Kj = Lt({
		defaultLayout: E,
		disableCursor: O
	}), qj = useRef(null);
	A$1(() => {
		let n = Mj.current;
		if (n === null) return;
		let _ = Uj.current, E = {
			defaultLayout: Kj.defaultLayout,
			disableCursor: !!Kj.disableCursor,
			disabled: !!A,
			element: n,
			id: Z,
			inMemoryLastExpandedPanelSizes: Uj.current.lastExpandedPanelSizes,
			inMemoryLayouts: Uj.current.layouts,
			orientation: z,
			panels: _.panels,
			separators: _.separators
		};
		qj.current = E;
		let O = bt(E), j = D$1().mountedGroups.get(E);
		if (j) {
			let { defaultLayoutDeferred: n, derivedPanelConstraints: _, layout: E } = j;
			!n && _.length > 0 && (zj(E), G?.(E));
		}
		let M = T$1.addListener("interactionStateChange", (n) => {
			switch (n.state) {
				case "active":
					Lj(n.hitRegions.some((n) => n.group === E));
					break;
				default:
					Lj(!1);
					break;
			}
		}), N = T$1.addListener("mountedGroupsChange", (n) => {
			let _ = n.get(E);
			if (_) {
				let { defaultLayoutDeferred: n, derivedPanelConstraints: E, layout: O } = _;
				if (n || E.length === 0) return;
				zj(O), G?.(O);
			}
		});
		return () => {
			qj.current = null, O(), M(), N();
		};
	}, [
		A,
		Z,
		G,
		z,
		Bj,
		Kj
	]), useEffect(() => {
		let n = qj.current;
		n && (n.defaultLayout = E, n.disableCursor = !!O);
	});
	let Jj = { [Fe]: Nj ? "none" : void 0 };
	for (let n in Rj) {
		let _ = Ve(Z, n);
		Jj[_] = Rj[n];
	}
	return /* @__PURE__ */ jsx(je.Provider, {
		value: Gj,
		children: /* @__PURE__ */ jsx("div", {
			...H,
			"aria-orientation": z,
			className: _,
			"data-group": !0,
			"data-testid": Z,
			id: Z,
			ref: Wj,
			style: {
				height: "100%",
				width: "100%",
				overflow: "hidden",
				...B,
				...Jj,
				display: "flex",
				flexDirection: z === "horizontal" ? "row" : "column",
				flexWrap: "nowrap"
			},
			children: n
		})
	});
}
Rt.displayName = "Group";
function ce$1() {
	let n = useContext(je);
	return z$1(n, "Group Context not found; did you render a Panel or Separator outside of a Group?"), n;
}
function Et({ groupId: n, panelId: _ }) {
	let E = () => {
		let { mountedGroups: _ } = D$1();
		for (let [E, { defaultLayoutDeferred: O, derivedPanelConstraints: A, layout: j, separatorToPanels: M }] of _) if (E.id === n) return {
			defaultLayoutDeferred: O,
			derivedPanelConstraints: A,
			group: E,
			layout: j,
			separatorToPanels: M
		};
		throw Error(`Group ${n} not found`);
	}, O = () => {
		let n = E().derivedPanelConstraints.find((n) => n.panelId === _);
		if (n !== void 0) return n;
		throw Error(`Panel constraints not found for Panel ${_}`);
	}, A = () => {
		let n = E().group.panels.find((n) => n.id === _);
		if (n !== void 0) return n;
		throw Error(`Layout not found for Panel ${_}`);
	}, j = () => {
		let n = E().layout[_];
		if (n !== void 0) return n;
		throw Error(`Layout not found for Panel ${_}`);
	}, M = (n) => {
		let O = j();
		if (n === O) return;
		let { defaultLayoutDeferred: A, derivedPanelConstraints: M, group: N, layout: P, separatorToPanels: z } = E(), B = N.panels.findIndex((n) => n.id === _), H = B === N.panels.length - 1, U = _$1({
			layout: Z$1({
				delta: H ? O - n : n - O,
				initialLayout: P,
				panelConstraints: M,
				pivotIndices: H ? [B - 1, B] : [B, B + 1],
				prevLayout: P,
				trigger: "imperative-api"
			}),
			panelConstraints: M
		});
		B$1(P, U) || I$1((n) => ({ mountedGroups: new Map(n.mountedGroups).set(N, {
			defaultLayoutDeferred: A,
			derivedPanelConstraints: M,
			layout: U,
			separatorToPanels: z
		}) }));
	};
	return {
		collapse: () => {
			let { collapsible: n, collapsedSize: _ } = O(), { mutableValues: E } = A(), N = j();
			n && N !== _ && (E.expandToSize = N, M(_));
		},
		expand: () => {
			let { collapsible: n, collapsedSize: _, minSize: E } = O(), { mutableValues: N } = A(), P = j();
			if (n && P === _) {
				let n = N.expandToSize ?? E;
				n === 0 && (n = 1), M(n);
			}
		},
		getSize: () => {
			let { group: n } = E(), _ = j(), { element: O } = A();
			return {
				asPercentage: _,
				inPixels: n.orientation === "horizontal" ? O.offsetWidth : O.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: n, collapsedSize: _ } = O(), E = j();
			return n && R$2(_, E);
		},
		resize: (n) => {
			if (j() !== n) {
				let _;
				switch (typeof n) {
					case "number": {
						let { group: O } = E();
						_ = G$1(n / W$1({ group: O }) * 100);
						break;
					}
					case "string":
						_ = parseFloat(n);
						break;
				}
				M(_);
			}
		}
	};
}
function It(n, _) {
	let { id: E } = ce$1(), O = useRef({
		collapse: ne$1,
		expand: ne$1,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: ne$1
	});
	useImperativeHandle(_, () => O.current, []), A$1(() => {
		Object.assign(O.current, Et({
			groupId: E,
			panelId: n
		}));
	});
}
function kt({ children: n, className: _, collapsedSize: E = "0%", collapsible: O = !1, defaultSize: A, elementRef: j, id: M, maxSize: N = "100%", minSize: P = "0%", onResize: z, panelRef: B, style: H, ...U }) {
	let W = !!M, G = ae$1(M), Z = useRef(null), Mj = ue$1(Z, j), { id: Nj, registerPanel: Pj } = ce$1(), Ij = z !== null, Lj = le$1((n, _, E) => {
		z?.(n, M, E);
	});
	A$1(() => {
		let n = Z.current;
		if (n !== null) return Pj({
			element: n,
			id: G,
			idIsStable: W,
			mutableValues: {
				expandToSize: void 0,
				prevSize: void 0
			},
			onResize: Ij ? Lj : void 0,
			panelConstraints: {
				collapsedSize: E,
				collapsible: O,
				defaultSize: A,
				maxSize: N,
				minSize: P
			}
		});
	}, [
		E,
		O,
		A,
		Ij,
		G,
		W,
		N,
		P,
		Lj,
		Pj
	]), It(G, B);
	let Rj = Ve(Nj, G);
	return /* @__PURE__ */ jsx("div", {
		...U,
		"data-panel": !0,
		"data-testid": G,
		id: G,
		ref: Mj,
		style: {
			...Gt,
			flexBasis: 0,
			flexGrow: `var(${Rj}, 1)`,
			flexShrink: 1,
			overflow: "hidden",
			pointerEvents: `var(${Fe})`
		},
		children: /* @__PURE__ */ jsx("div", {
			className: _,
			style: {
				width: "100%",
				height: "100%",
				...H
			},
			children: n
		})
	});
}
kt.displayName = "Panel";
var Gt = {
	minHeight: 0,
	maxHeight: "100%",
	height: "auto",
	minWidth: 0,
	maxWidth: "100%",
	width: "auto",
	border: "none",
	borderWidth: 0,
	padding: 0,
	margin: 0
};
function Dt({ layout: n, panelConstraints: _, panelId: E, panelIndex: O }) {
	let A, j, M = n[E], N = _.find((n) => n.panelId === E);
	if (N) {
		let P = N.maxSize, z = j = N.collapsible ? N.collapsedSize : N.minSize, B = [O, O + 1];
		j = _$1({
			layout: Z$1({
				delta: z - M,
				initialLayout: n,
				panelConstraints: _,
				pivotIndices: B,
				prevLayout: n,
				trigger: "keyboard"
			}),
			panelConstraints: _
		})[E], A = _$1({
			layout: Z$1({
				delta: P - M,
				initialLayout: n,
				panelConstraints: _,
				pivotIndices: B,
				prevLayout: n,
				trigger: "keyboard"
			}),
			panelConstraints: _
		})[E];
	}
	return {
		valueControls: E,
		valueMax: A,
		valueMin: j,
		valueNow: M
	};
}
function Ot({ children: n, className: _, elementRef: E, id: O, style: A, ...j }) {
	let M = ae$1(O), [N, P] = useState({}), [z, B] = useState("inactive"), H = useRef(null), U = ue$1(H, E), { id: W, orientation: G, registerSeparator: Z } = ce$1(), Mj = G === "horizontal" ? "vertical" : "horizontal";
	return A$1(() => {
		let n = H.current;
		if (n !== null) {
			let _ = {
				element: n,
				id: M
			}, E = Z(_), O = T$1.addListener("interactionStateChange", (n) => {
				B(n.state !== "inactive" && n.hitRegions.some((n) => n.separator === _) ? n.state : "inactive");
			}), A = T$1.addListener("mountedGroupsChange", (n) => {
				n.forEach(({ derivedPanelConstraints: n, layout: E, separatorToPanels: O }, A) => {
					if (A.id === W) {
						let j = O.get(_);
						if (j) {
							let _ = j[0], O = A.panels.indexOf(_);
							P(Dt({
								layout: E,
								panelConstraints: n,
								panelId: _.id,
								panelIndex: O
							}));
						}
					}
				});
			});
			return () => {
				O(), A(), E();
			};
		}
	}, [
		W,
		M,
		Z
	]), /* @__PURE__ */ jsx("div", {
		...j,
		"aria-controls": N.valueControls,
		"aria-orientation": Mj,
		"aria-valuemax": N.valueMax,
		"aria-valuemin": N.valueMin,
		"aria-valuenow": N.valueNow,
		children: n,
		className: _,
		"data-separator": z,
		"data-testid": M,
		id: M,
		ref: U,
		role: "separator",
		style: {
			flexBasis: "auto",
			...A,
			flexGrow: 0,
			flexShrink: 0
		},
		tabIndex: 0
	});
}
Ot.displayName = "Separator";
var EditorContext = createContext(void 0), SAFE_FONTS = [
	"Arial",
	"Helvetica",
	"Times New Roman",
	"Courier New",
	"Verdana",
	"Georgia",
	"Palatino",
	"Garamond",
	"Bookman",
	"Comic Sans MS",
	"Trebuchet MS",
	"Arial Black",
	"Impact"
];
const EditorProvider = ({ children: n, isList: E = !1, availableProps: O = [], theme: A = "light" }) => {
	let [j, M] = useState({
		elements: [],
		selectedElementIds: [],
		isList: E,
		mockData: [],
		singleMockData: {},
		listSettings: {
			sortOrder: "asc",
			newestPosition: "bottom",
			scrollDirection: "down"
		},
		availableProps: O,
		availableFonts: [
			...SAFE_FONTS,
			"Roboto",
			"Open Sans",
			"Lato",
			"Montserrat"
		],
		theme: A,
		history: [[]],
		historyIndex: 0,
		clipboard: [],
		gridSize: 0
	});
	React.useEffect(() => {
		j.availableFonts.forEach((n) => {
			if (SAFE_FONTS.includes(n)) return;
			let _ = `font-${n.replace(/\s+/g, "-").toLowerCase()}`;
			if (!document.getElementById(_)) {
				let E = document.createElement("link");
				E.id = _, E.href = `https://fonts.googleapis.com/css2?family=${n.replace(/ /g, "+")}&display=swap`, E.rel = "stylesheet", document.head.appendChild(E);
			}
		});
	}, [j.availableFonts]), React.useEffect(() => {
		M((n) => ({
			...n,
			isList: E,
			availableProps: O,
			theme: A
		}));
	}, [
		E,
		O,
		A
	]);
	let N = React.useCallback((n) => {
		M((_) => ({
			..._,
			canvasHeight: n
		}));
	}, []), P = React.useCallback((n) => {
		M((_) => ({
			..._,
			gridSize: n
		}));
	}, []), z = React.useCallback((n) => {
		M((_) => {
			let E = n.elements || _.elements;
			return {
				..._,
				...n,
				isList: n.isList ?? _.isList,
				availableProps: n.availableProps ?? _.availableProps,
				availableFonts: n.availableFonts ?? _.availableFonts,
				selectedElementIds: [],
				history: [E],
				historyIndex: 0,
				clipboard: []
			};
		});
	}, []), B = React.useCallback(() => {
		M((n) => {
			if (n.historyIndex > 0) {
				let _ = n.historyIndex - 1;
				return {
					...n,
					elements: n.history[_],
					historyIndex: _,
					selectedElementIds: []
				};
			}
			return n;
		});
	}, []), H = React.useCallback(() => {
		M((n) => {
			if (n.historyIndex < n.history.length - 1) {
				let _ = n.historyIndex + 1;
				return {
					...n,
					elements: n.history[_],
					historyIndex: _,
					selectedElementIds: []
				};
			}
			return n;
		});
	}, []), U = React.useCallback(() => {
		M((n) => {
			if (n.selectedElementIds.length > 0) {
				let _ = n.elements.filter((_) => n.selectedElementIds.includes(_.id));
				return {
					...n,
					clipboard: _
				};
			}
			return n;
		});
	}, []), W = React.useCallback(() => {
		M((n) => {
			if (n.clipboard.length > 0) {
				let _ = n.clipboard.map((n) => ({
					...n,
					id: crypto.randomUUID(),
					x: n.x + 20,
					y: n.y + 20
				})), E = [...n.elements, ..._], O = n.history.slice(0, n.historyIndex + 1);
				return O.push(E), {
					...n,
					elements: E,
					history: O,
					historyIndex: O.length - 1,
					selectedElementIds: _.map((n) => n.id)
				};
			}
			return n;
		});
	}, []), G = React.useCallback((n) => {
		let _ = {};
		n.type === "box" && (_.backgroundColor = "var(--gray-4)");
		let E = {
			id: crypto.randomUUID(),
			x: 50,
			y: 50,
			width: 200,
			height: n.type === "text" ? 50 : 150,
			...n,
			style: {
				..._,
				...n.style || {}
			}
		};
		M((n) => {
			let _ = [...n.elements, E], O = n.history.slice(0, n.historyIndex + 1);
			return O.push(_), {
				...n,
				elements: _,
				history: O,
				historyIndex: O.length - 1,
				selectedElementIds: [E.id]
			};
		});
	}, []), Z = React.useCallback((n) => {
		M((_) => {
			let E = _.elements.filter((_) => _.id !== n), O = _.history.slice(0, _.historyIndex + 1);
			return O.push(E), {
				..._,
				elements: E,
				selectedElementIds: _.selectedElementIds.filter((_) => _ !== n),
				history: O,
				historyIndex: O.length - 1
			};
		});
	}, []), Mj = React.useCallback(() => {
		M((n) => {
			if (n.selectedElementIds.length === 0) return n;
			let _ = n.elements.filter((_) => !n.selectedElementIds.includes(_.id)), E = n.history.slice(0, n.historyIndex + 1);
			return E.push(_), {
				...n,
				elements: _,
				selectedElementIds: [],
				history: E,
				historyIndex: E.length - 1
			};
		});
	}, []), Nj = React.useCallback((n, _ = !1) => {
		M((E) => {
			if (n === null) return {
				...E,
				selectedElementIds: []
			};
			if (_) {
				let _ = E.selectedElementIds.includes(n), O;
				return O = _ ? E.selectedElementIds.filter((_) => _ !== n) : [...E.selectedElementIds, n], {
					...E,
					selectedElementIds: O
				};
			} else return {
				...E,
				selectedElementIds: [n]
			};
		});
	}, []), Pj = React.useCallback((n) => {
		M((_) => ({
			..._,
			selectedElementIds: n
		}));
	}, []), Fj = React.useCallback((n, _) => {
		M((E) => {
			let O = [...E.elements], A = O[n];
			O.splice(n, 1), O.splice(_, 0, A);
			let j = E.history.slice(0, E.historyIndex + 1);
			return j.push(O), {
				...E,
				elements: O,
				history: j,
				historyIndex: j.length - 1
			};
		});
	}, []), Lj = React.useCallback((n, _, E = !0) => {
		M((O) => {
			let A = O.elements.map((E) => E.id === n ? {
				...E,
				..._
			} : E), j = O.history, M = O.historyIndex;
			return E && (j = O.history.slice(0, O.historyIndex + 1), j.push(A), M = j.length - 1), {
				...O,
				elements: A,
				history: j,
				historyIndex: M
			};
		});
	}, []), Rj = React.useCallback((n, _ = !0) => {
		M((E) => {
			let O = [...E.elements];
			n.forEach(({ id: n, changes: _ }) => {
				let E = O.findIndex((_) => _.id === n);
				E !== -1 && (O[E] = {
					...O[E],
					..._
				});
			});
			let A = E.history, j = E.historyIndex;
			return _ && (A = E.history.slice(0, E.historyIndex + 1), A.push(O), j = A.length - 1), {
				...E,
				elements: O,
				history: A,
				historyIndex: j
			};
		});
	}, []), zj = React.useCallback((n, _) => {
		M((E) => ({
			...E,
			mockData: n,
			singleMockData: _
		}));
	}, []), Bj = React.useCallback((n) => {
		M((_) => ({
			..._,
			listSettings: {
				..._.listSettings,
				...n
			}
		}));
	}, []), Hj = React.useMemo(() => ({
		state: j,
		addElement: G,
		removeElement: Z,
		removeSelected: Mj,
		selectElement: Nj,
		setSelectedElements: Pj,
		moveElement: Fj,
		updateElement: Lj,
		updateElements: Rj,
		setMockData: zj,
		updateListSettings: Bj,
		setCanvasHeight: N,
		loadState: z,
		undo: B,
		redo: H,
		copy: U,
		paste: W,
		setGridSize: P
	}), [
		j,
		G,
		Z,
		Mj,
		Nj,
		Pj,
		Fj,
		Lj,
		Rj,
		zj,
		Bj,
		N,
		z,
		B,
		H,
		U,
		W,
		P
	]);
	return /* @__PURE__ */ jsx(EditorContext.Provider, {
		value: Hj,
		children: n
	});
}, useEditor = () => {
	let n = useContext(EditorContext);
	if (!n) throw Error("useEditor must be used within an EditorProvider");
	return n;
}, AlignmentToolbar = () => {
	let { state: n, updateElements: _ } = useEditor(), { selectedElementIds: E, elements: O } = n;
	if (E.length < 2) return null;
	let A = () => O.filter((n) => E.includes(n.id));
	return /* @__PURE__ */ jsxs(p$1, {
		gap: "2",
		align: "center",
		style: {
			backgroundColor: "var(--color-panel-solid)",
			padding: "8px",
			borderRadius: "8px",
			boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
			border: "1px solid var(--gray-5)"
		},
		children: [
			/* @__PURE__ */ jsx(o$1, {
				variant: "ghost",
				color: "gray",
				onClick: () => {
					let n = A();
					if (n.length < 2) return;
					let E = Math.min(...n.map((n) => n.x));
					_(n.map((n) => ({
						id: n.id,
						changes: { x: E }
					})));
				},
				title: "Alinhar à Esquerda",
				children: /* @__PURE__ */ jsx(AlignLeftIcon, {})
			}),
			/* @__PURE__ */ jsx(o$1, {
				variant: "ghost",
				color: "gray",
				onClick: () => {
					let n = A();
					if (n.length < 2) return;
					let E = (Math.min(...n.map((n) => n.x)) + Math.max(...n.map((n) => n.x + n.width))) / 2;
					_(n.map((n) => ({
						id: n.id,
						changes: { x: E - n.width / 2 }
					})));
				},
				title: "Alinhar ao Centro (Horizontal)",
				children: /* @__PURE__ */ jsx(AlignCenterHorizontallyIcon, {})
			}),
			/* @__PURE__ */ jsx(o$1, {
				variant: "ghost",
				color: "gray",
				onClick: () => {
					let n = A();
					if (n.length < 2) return;
					let E = Math.max(...n.map((n) => n.x + n.width));
					_(n.map((n) => ({
						id: n.id,
						changes: { x: E - n.width }
					})));
				},
				title: "Alinhar à Direita",
				children: /* @__PURE__ */ jsx(AlignRightIcon, {})
			}),
			/* @__PURE__ */ jsx(o$2, { orientation: "vertical" }),
			/* @__PURE__ */ jsx(o$1, {
				variant: "ghost",
				color: "gray",
				onClick: () => {
					let n = A();
					if (n.length < 2) return;
					let E = Math.min(...n.map((n) => n.y));
					_(n.map((n) => ({
						id: n.id,
						changes: { y: E }
					})));
				},
				title: "Alinhar ao Topo",
				children: /* @__PURE__ */ jsx(AlignTopIcon, {})
			}),
			/* @__PURE__ */ jsx(o$1, {
				variant: "ghost",
				color: "gray",
				onClick: () => {
					let n = A();
					if (n.length < 2) return;
					let E = (Math.min(...n.map((n) => n.y)) + Math.max(...n.map((n) => n.y + n.height))) / 2;
					_(n.map((n) => ({
						id: n.id,
						changes: { y: E - n.height / 2 }
					})));
				},
				title: "Alinhar ao Centro (Vertical)",
				children: /* @__PURE__ */ jsx(AlignCenterVerticallyIcon, {})
			}),
			/* @__PURE__ */ jsx(o$1, {
				variant: "ghost",
				color: "gray",
				onClick: () => {
					let n = A();
					if (n.length < 2) return;
					let E = Math.max(...n.map((n) => n.y + n.height));
					_(n.map((n) => ({
						id: n.id,
						changes: { y: E - n.height }
					})));
				},
				title: "Alinhar à Base",
				children: /* @__PURE__ */ jsx(AlignBottomIcon, {})
			}),
			E.length >= 3 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsx(o$2, { orientation: "vertical" }),
				/* @__PURE__ */ jsx(o$1, {
					variant: "ghost",
					color: "gray",
					onClick: () => {
						let n = A();
						if (n.length < 3) return;
						let E = [...n].sort((n, _) => n.x - _.x), O = E[0], j = E[E.length - 1], M = (j.x + j.width / 2 - (O.x + O.width / 2)) / (E.length - 1);
						_(E.map((n, _) => {
							if (_ === 0 || _ === E.length - 1) return null;
							let A = O.x + O.width / 2 + M * _;
							return {
								id: n.id,
								changes: { x: A - n.width / 2 }
							};
						}).filter(Boolean));
					},
					title: "Distribuir Horizontalmente",
					children: /* @__PURE__ */ jsx(SpaceEvenlyHorizontallyIcon, {})
				}),
				/* @__PURE__ */ jsx(o$1, {
					variant: "ghost",
					color: "gray",
					onClick: () => {
						let n = A();
						if (n.length < 3) return;
						let E = [...n].sort((n, _) => n.y - _.y), O = E[0], j = E[E.length - 1], M = (j.y + j.height / 2 - (O.y + O.height / 2)) / (E.length - 1);
						_(E.map((n, _) => {
							if (_ === 0 || _ === E.length - 1) return null;
							let A = O.y + O.height / 2 + M * _;
							return {
								id: n.id,
								changes: { y: A - n.height / 2 }
							};
						}).filter(Boolean));
					},
					title: "Distribuir Verticalmente",
					children: /* @__PURE__ */ jsx(SpaceEvenlyVerticallyIcon, {})
				})
			] })
		]
	});
};
var __assign$1 = function() {
	return __assign$1 = Object.assign || function(n) {
		for (var _, E = 1, O = arguments.length; E < O; E++) for (var A in _ = arguments[E], _) Object.prototype.hasOwnProperty.call(_, A) && (n[A] = _[A]);
		return n;
	}, __assign$1.apply(this, arguments);
}, rowSizeBase = {
	width: "100%",
	height: "10px",
	top: "0px",
	left: "0px",
	cursor: "row-resize"
}, colSizeBase = {
	width: "10px",
	height: "100%",
	top: "0px",
	left: "0px",
	cursor: "col-resize"
}, edgeBase = {
	width: "20px",
	height: "20px",
	position: "absolute",
	zIndex: 1
}, styles = {
	top: __assign$1(__assign$1({}, rowSizeBase), { top: "-5px" }),
	right: __assign$1(__assign$1({}, colSizeBase), {
		left: void 0,
		right: "-5px"
	}),
	bottom: __assign$1(__assign$1({}, rowSizeBase), {
		top: void 0,
		bottom: "-5px"
	}),
	left: __assign$1(__assign$1({}, colSizeBase), { left: "-5px" }),
	topRight: __assign$1(__assign$1({}, edgeBase), {
		right: "-10px",
		top: "-10px",
		cursor: "ne-resize"
	}),
	bottomRight: __assign$1(__assign$1({}, edgeBase), {
		right: "-10px",
		bottom: "-10px",
		cursor: "se-resize"
	}),
	bottomLeft: __assign$1(__assign$1({}, edgeBase), {
		left: "-10px",
		bottom: "-10px",
		cursor: "sw-resize"
	}),
	topLeft: __assign$1(__assign$1({}, edgeBase), {
		left: "-10px",
		top: "-10px",
		cursor: "nw-resize"
	})
}, Resizer = memo(function(n) {
	var _ = n.onResizeStart, E = n.direction, O = n.children, A = n.replaceStyles, j = n.className, M = useCallback(function(n) {
		_(n, E);
	}, [_, E]), N = useCallback(function(n) {
		_(n, E);
	}, [_, E]), P = useMemo(function() {
		return __assign$1(__assign$1({
			position: "absolute",
			userSelect: "none"
		}, styles[E]), A ?? {});
	}, [A, E]);
	return jsx("div", {
		className: j || void 0,
		style: P,
		onMouseDown: M,
		onTouchStart: N,
		children: O
	});
}), __extends = (function() {
	var n = function(_, E) {
		return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, _) {
			n.__proto__ = _;
		} || function(n, _) {
			for (var E in _) Object.prototype.hasOwnProperty.call(_, E) && (n[E] = _[E]);
		}, n(_, E);
	};
	return function(_, E) {
		if (typeof E != "function" && E !== null) throw TypeError("Class extends value " + String(E) + " is not a constructor or null");
		n(_, E);
		function O() {
			this.constructor = _;
		}
		_.prototype = E === null ? Object.create(E) : (O.prototype = E.prototype, new O());
	};
})(), __assign = function() {
	return __assign = Object.assign || function(n) {
		for (var _, E = 1, O = arguments.length; E < O; E++) for (var A in _ = arguments[E], _) Object.prototype.hasOwnProperty.call(_, A) && (n[A] = _[A]);
		return n;
	}, __assign.apply(this, arguments);
}, DEFAULT_SIZE = {
	width: "auto",
	height: "auto"
}, clamp$1 = function(n, _, E) {
	return Math.max(Math.min(n, E), _);
}, snap = function(n, _, E) {
	var O = Math.round(n / _);
	return O * _ + E * (O - 1);
}, hasDirection = function(n, _) {
	return new RegExp(n, "i").test(_);
}, isTouchEvent = function(n) {
	return !!(n.touches && n.touches.length);
}, isMouseEvent = function(n) {
	return !!((n.clientX || n.clientX === 0) && (n.clientY || n.clientY === 0));
}, findClosestSnap = function(n, _, E) {
	E === void 0 && (E = 0);
	var O = _.reduce(function(E, O, A) {
		return Math.abs(O - n) < Math.abs(_[E] - n) ? A : E;
	}, 0), A = Math.abs(_[O] - n);
	return E === 0 || A < E ? _[O] : n;
}, getStringSize = function(n) {
	return n = n.toString(), n === "auto" || n.endsWith("px") || n.endsWith("%") || n.endsWith("vh") || n.endsWith("vw") || n.endsWith("vmax") || n.endsWith("vmin") ? n : `${n}px`;
}, getPixelSize = function(n, _, E, O) {
	if (n && typeof n == "string") {
		if (n.endsWith("px")) return Number(n.replace("px", ""));
		if (n.endsWith("%")) {
			var A = Number(n.replace("%", "")) / 100;
			return _ * A;
		}
		if (n.endsWith("vw")) {
			var A = Number(n.replace("vw", "")) / 100;
			return E * A;
		}
		if (n.endsWith("vh")) {
			var A = Number(n.replace("vh", "")) / 100;
			return O * A;
		}
	}
	return n;
}, calculateNewMax = function(n, _, E, O, A, j, M) {
	return O = getPixelSize(O, n.width, _, E), A = getPixelSize(A, n.height, _, E), j = getPixelSize(j, n.width, _, E), M = getPixelSize(M, n.height, _, E), {
		maxWidth: O === void 0 ? void 0 : Number(O),
		maxHeight: A === void 0 ? void 0 : Number(A),
		minWidth: j === void 0 ? void 0 : Number(j),
		minHeight: M === void 0 ? void 0 : Number(M)
	};
}, normalizeToPair = function(n) {
	return Array.isArray(n) ? n : [n, n];
}, definedProps = /* @__PURE__ */ "as.ref.style.className.grid.gridGap.snap.bounds.boundsByDirection.size.defaultSize.minWidth.minHeight.maxWidth.maxHeight.lockAspectRatio.lockAspectRatioExtraWidth.lockAspectRatioExtraHeight.enable.handleStyles.handleClasses.handleWrapperStyle.handleWrapperClass.children.onResizeStart.onResize.onResizeStop.handleComponent.scale.resizeRatio.snapGap".split("."), baseClassName = "__resizable_base__", Resizable = function(n) {
	__extends(_, n);
	function _(_) {
		var E = n.call(this, _) || this;
		return E.ratio = 1, E.resizable = null, E.parentLeft = 0, E.parentTop = 0, E.resizableLeft = 0, E.resizableRight = 0, E.resizableTop = 0, E.resizableBottom = 0, E.targetLeft = 0, E.targetTop = 0, E.delta = {
			width: 0,
			height: 0
		}, E.appendBase = function() {
			if (!E.resizable || !E.window) return null;
			var n = E.parentNode;
			if (!n) return null;
			var _ = E.window.document.createElement("div");
			return _.style.width = "100%", _.style.height = "100%", _.style.position = "absolute", _.style.transform = "scale(0, 0)", _.style.left = "0", _.style.flex = "0 0 100%", _.classList ? _.classList.add(baseClassName) : _.className += baseClassName, n.appendChild(_), _;
		}, E.removeBase = function(n) {
			var _ = E.parentNode;
			_ && _.removeChild(n);
		}, E.state = {
			isResizing: !1,
			width: E.propsSize?.width ?? "auto",
			height: E.propsSize?.height ?? "auto",
			direction: "right",
			original: {
				x: 0,
				y: 0,
				width: 0,
				height: 0
			},
			backgroundStyle: {
				height: "100%",
				width: "100%",
				backgroundColor: "rgba(0,0,0,0)",
				cursor: "auto",
				opacity: 0,
				position: "fixed",
				zIndex: 9999,
				top: "0",
				left: "0",
				bottom: "0",
				right: "0"
			},
			flexBasis: void 0
		}, E.onResizeStart = E.onResizeStart.bind(E), E.onMouseMove = E.onMouseMove.bind(E), E.onMouseUp = E.onMouseUp.bind(E), E;
	}
	return Object.defineProperty(_.prototype, "parentNode", {
		get: function() {
			return this.resizable ? this.resizable.parentNode : null;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_.prototype, "window", {
		get: function() {
			return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_.prototype, "propsSize", {
		get: function() {
			return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_.prototype, "size", {
		get: function() {
			var n = 0, _ = 0;
			if (this.resizable && this.window) {
				var E = this.resizable.offsetWidth, O = this.resizable.offsetHeight, A = this.resizable.style.position;
				A !== "relative" && (this.resizable.style.position = "relative"), n = this.resizable.style.width === "auto" ? E : this.resizable.offsetWidth, _ = this.resizable.style.height === "auto" ? O : this.resizable.offsetHeight, this.resizable.style.position = A;
			}
			return {
				width: n,
				height: _
			};
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(_.prototype, "sizeStyle", {
		get: function() {
			var n = this, _ = this.props.size, E = function(_) {
				if (n.state[_] === void 0 || n.state[_] === "auto") return "auto";
				if (n.propsSize && n.propsSize[_] && n.propsSize[_]?.toString().endsWith("%")) {
					if (n.state[_].toString().endsWith("%")) return n.state[_].toString();
					var E = n.getParentSize();
					return `${Number(n.state[_].toString().replace("px", "")) / E[_] * 100}%`;
				}
				return getStringSize(n.state[_]);
			};
			return {
				width: _ && _.width !== void 0 && !this.state.isResizing ? getStringSize(_.width) : E("width"),
				height: _ && _.height !== void 0 && !this.state.isResizing ? getStringSize(_.height) : E("height")
			};
		},
		enumerable: !1,
		configurable: !0
	}), _.prototype.getParentSize = function() {
		if (!this.parentNode) return this.window ? {
			width: this.window.innerWidth,
			height: this.window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		var n = this.appendBase();
		if (!n) return {
			width: 0,
			height: 0
		};
		var _ = !1, E = this.parentNode.style.flexWrap;
		E !== "wrap" && (_ = !0, this.parentNode.style.flexWrap = "wrap"), n.style.position = "relative", n.style.minWidth = "100%", n.style.minHeight = "100%";
		var O = {
			width: n.offsetWidth,
			height: n.offsetHeight
		};
		return _ && (this.parentNode.style.flexWrap = E), this.removeBase(n), O;
	}, _.prototype.bindEvents = function() {
		this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
			capture: !0,
			passive: !1
		}), this.window.addEventListener("touchend", this.onMouseUp));
	}, _.prototype.unbindEvents = function() {
		this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
	}, _.prototype.componentDidMount = function() {
		if (!(!this.resizable || !this.window)) {
			var n = this.window.getComputedStyle(this.resizable);
			this.setState({
				width: this.state.width || this.size.width,
				height: this.state.height || this.size.height,
				flexBasis: n.flexBasis === "auto" ? void 0 : n.flexBasis
			});
		}
	}, _.prototype.componentWillUnmount = function() {
		this.window && this.unbindEvents();
	}, _.prototype.createSizeForCssProperty = function(n, _) {
		var E = this.propsSize && this.propsSize[_];
		return this.state[_] === "auto" && this.state.original[_] === n && (E === void 0 || E === "auto") ? "auto" : n;
	}, _.prototype.calculateNewMaxFromBoundary = function(n, _) {
		var E = this.props.boundsByDirection, O = this.state.direction, A = E && hasDirection("left", O), j = E && hasDirection("top", O), M, N;
		if (this.props.bounds === "parent") {
			var P = this.parentNode;
			P && (M = A ? this.resizableRight - this.parentLeft : P.offsetWidth + (this.parentLeft - this.resizableLeft), N = j ? this.resizableBottom - this.parentTop : P.offsetHeight + (this.parentTop - this.resizableTop));
		} else this.props.bounds === "window" ? this.window && (M = A ? this.resizableRight : this.window.innerWidth - this.resizableLeft, N = j ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (M = A ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), N = j ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
		return M && Number.isFinite(M) && (n = n && n < M ? n : M), N && Number.isFinite(N) && (_ = _ && _ < N ? _ : N), {
			maxWidth: n,
			maxHeight: _
		};
	}, _.prototype.calculateNewSizeFromDirection = function(n, _) {
		var E = this.props.scale || 1, O = normalizeToPair(this.props.resizeRatio || 1), A = O[0], j = O[1], M = this.state, N = M.direction, P = M.original, z = this.props, B = z.lockAspectRatio, H = z.lockAspectRatioExtraHeight, U = z.lockAspectRatioExtraWidth, W = P.width, G = P.height, Z = H || 0, Mj = U || 0;
		return hasDirection("right", N) && (W = P.width + (n - P.x) * A / E, B && (G = (W - Mj) / this.ratio + Z)), hasDirection("left", N) && (W = P.width - (n - P.x) * A / E, B && (G = (W - Mj) / this.ratio + Z)), hasDirection("bottom", N) && (G = P.height + (_ - P.y) * j / E, B && (W = (G - Z) * this.ratio + Mj)), hasDirection("top", N) && (G = P.height - (_ - P.y) * j / E, B && (W = (G - Z) * this.ratio + Mj)), {
			newWidth: W,
			newHeight: G
		};
	}, _.prototype.calculateNewSizeFromAspectRatio = function(n, _, E, O) {
		var A = this.props, j = A.lockAspectRatio, M = A.lockAspectRatioExtraHeight, N = A.lockAspectRatioExtraWidth, P = O.width === void 0 ? 10 : O.width, z = E.width === void 0 || E.width < 0 ? n : E.width, B = O.height === void 0 ? 10 : O.height, H = E.height === void 0 || E.height < 0 ? _ : E.height, U = M || 0, W = N || 0;
		if (j) {
			var G = (B - U) * this.ratio + W, Z = (H - U) * this.ratio + W, Mj = (P - W) / this.ratio + U, Nj = (z - W) / this.ratio + U, Pj = Math.max(P, G), Fj = Math.min(z, Z), Ij = Math.max(B, Mj), Lj = Math.min(H, Nj);
			n = clamp$1(n, Pj, Fj), _ = clamp$1(_, Ij, Lj);
		} else n = clamp$1(n, P, z), _ = clamp$1(_, B, H);
		return {
			newWidth: n,
			newHeight: _
		};
	}, _.prototype.setBoundingClientRect = function() {
		var n = 1 / (this.props.scale || 1);
		if (this.props.bounds === "parent") {
			var _ = this.parentNode;
			if (_) {
				var E = _.getBoundingClientRect();
				this.parentLeft = E.left * n, this.parentTop = E.top * n;
			}
		}
		if (this.props.bounds && typeof this.props.bounds != "string") {
			var O = this.props.bounds.getBoundingClientRect();
			this.targetLeft = O.left * n, this.targetTop = O.top * n;
		}
		if (this.resizable) {
			var A = this.resizable.getBoundingClientRect(), j = A.left, M = A.top, N = A.right, P = A.bottom;
			this.resizableLeft = j * n, this.resizableRight = N * n, this.resizableTop = M * n, this.resizableBottom = P * n;
		}
	}, _.prototype.onResizeStart = function(n, _) {
		if (!(!this.resizable || !this.window)) {
			var E = 0, O = 0;
			if (n.nativeEvent && isMouseEvent(n.nativeEvent) ? (E = n.nativeEvent.clientX, O = n.nativeEvent.clientY) : n.nativeEvent && isTouchEvent(n.nativeEvent) && (E = n.nativeEvent.touches[0].clientX, O = n.nativeEvent.touches[0].clientY), !(this.props.onResizeStart && this.resizable && this.props.onResizeStart(n, _, this.resizable) === !1)) {
				this.props.size && (this.props.size.height !== void 0 && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), this.props.size.width !== void 0 && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
				var A, j = this.window.getComputedStyle(this.resizable);
				if (j.flexBasis !== "auto") {
					var M = this.parentNode;
					M && (this.flexDir = this.window.getComputedStyle(M).flexDirection.startsWith("row") ? "row" : "column", A = j.flexBasis);
				}
				this.setBoundingClientRect(), this.bindEvents();
				var N = {
					original: {
						x: E,
						y: O,
						width: this.size.width,
						height: this.size.height
					},
					isResizing: !0,
					backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(n.target).cursor || "auto" }),
					direction: _,
					flexBasis: A
				};
				this.setState(N);
			}
		}
	}, _.prototype.onMouseMove = function(n) {
		var _ = this;
		if (!(!this.state.isResizing || !this.resizable || !this.window)) {
			if (this.window.TouchEvent && isTouchEvent(n)) try {
				n.preventDefault(), n.stopPropagation();
			} catch {}
			var E = this.props, O = E.maxWidth, A = E.maxHeight, j = E.minWidth, M = E.minHeight, N = isTouchEvent(n) ? n.touches[0].clientX : n.clientX, P = isTouchEvent(n) ? n.touches[0].clientY : n.clientY, z = this.state, B = z.direction, H = z.original, U = z.width, W = z.height, G = this.getParentSize(), Z = calculateNewMax(G, this.window.innerWidth, this.window.innerHeight, O, A, j, M);
			O = Z.maxWidth, A = Z.maxHeight, j = Z.minWidth, M = Z.minHeight;
			var Mj = this.calculateNewSizeFromDirection(N, P), Nj = Mj.newHeight, Pj = Mj.newWidth, Fj = this.calculateNewMaxFromBoundary(O, A);
			this.props.snap && this.props.snap.x && (Pj = findClosestSnap(Pj, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (Nj = findClosestSnap(Nj, this.props.snap.y, this.props.snapGap));
			var Ij = this.calculateNewSizeFromAspectRatio(Pj, Nj, {
				width: Fj.maxWidth,
				height: Fj.maxHeight
			}, {
				width: j,
				height: M
			});
			if (Pj = Ij.newWidth, Nj = Ij.newHeight, this.props.grid) {
				var Lj = snap(Pj, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), Rj = snap(Nj, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), Bj = this.props.snapGap || 0, Vj = Bj === 0 || Math.abs(Lj - Pj) <= Bj ? Lj : Pj, Hj = Bj === 0 || Math.abs(Rj - Nj) <= Bj ? Rj : Nj;
				Pj = Vj, Nj = Hj;
			}
			var Uj = {
				width: Pj - H.width,
				height: Nj - H.height
			};
			if (this.delta = Uj, U && typeof U == "string") {
				if (U.endsWith("%")) {
					var Wj = Pj / G.width * 100;
					Pj = `${Wj}%`;
				} else if (U.endsWith("vw")) {
					var Gj = Pj / this.window.innerWidth * 100;
					Pj = `${Gj}vw`;
				} else if (U.endsWith("vh")) {
					var Kj = Pj / this.window.innerHeight * 100;
					Pj = `${Kj}vh`;
				}
			}
			if (W && typeof W == "string") {
				if (W.endsWith("%")) {
					var Wj = Nj / G.height * 100;
					Nj = `${Wj}%`;
				} else if (W.endsWith("vw")) {
					var Gj = Nj / this.window.innerWidth * 100;
					Nj = `${Gj}vw`;
				} else if (W.endsWith("vh")) {
					var Kj = Nj / this.window.innerHeight * 100;
					Nj = `${Kj}vh`;
				}
			}
			var qj = {
				width: this.createSizeForCssProperty(Pj, "width"),
				height: this.createSizeForCssProperty(Nj, "height")
			};
			this.flexDir === "row" ? qj.flexBasis = qj.width : this.flexDir === "column" && (qj.flexBasis = qj.height);
			var Jj = this.state.width !== qj.width, Yj = this.state.height !== qj.height, Xj = this.state.flexBasis !== qj.flexBasis, Zj = Jj || Yj || Xj;
			Zj && flushSync(function() {
				_.setState(qj);
			}), this.props.onResize && Zj && this.props.onResize(n, B, this.resizable, Uj);
		}
	}, _.prototype.onMouseUp = function(n) {
		var _ = this.state, E = _.isResizing, O = _.direction;
		_.original, !(!E || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(n, O, this.resizable, this.delta), this.props.size && this.setState({
			width: this.props.size.width ?? "auto",
			height: this.props.size.height ?? "auto"
		}), this.unbindEvents(), this.setState({
			isResizing: !1,
			backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: "auto" })
		}));
	}, _.prototype.updateSize = function(n) {
		this.setState({
			width: n.width ?? "auto",
			height: n.height ?? "auto"
		});
	}, _.prototype.renderResizer = function() {
		var n = this, _ = this.props, E = _.enable, O = _.handleStyles, A = _.handleClasses, j = _.handleWrapperStyle, M = _.handleWrapperClass, N = _.handleComponent;
		return E ? jsx("div", {
			className: M,
			style: j,
			children: Object.keys(E).map(function(_) {
				return E[_] === !1 ? null : jsx(Resizer, {
					direction: _,
					onResizeStart: n.onResizeStart,
					replaceStyles: O && O[_],
					className: A && A[_],
					children: N && N[_] ? N[_] : null
				}, _);
			})
		}) : null;
	}, _.prototype.render = function() {
		var n = this, _ = Object.keys(this.props).reduce(function(_, E) {
			return definedProps.indexOf(E) === -1 && (_[E] = n.props[E]), _;
		}, {}), E = __assign(__assign(__assign({
			position: "relative",
			userSelect: this.state.isResizing ? "none" : "auto"
		}, this.props.style), this.sizeStyle), {
			maxWidth: this.props.maxWidth,
			maxHeight: this.props.maxHeight,
			minWidth: this.props.minWidth,
			minHeight: this.props.minHeight,
			boxSizing: "border-box",
			flexShrink: 0
		});
		return this.state.flexBasis && (E.flexBasis = this.state.flexBasis), jsxs(this.props.as || "div", __assign({
			style: E,
			className: this.props.className
		}, _, {
			ref: function(_) {
				_ && (n.resizable = _);
			},
			children: [
				this.state.isResizing && jsx("div", { style: this.state.backgroundStyle }),
				this.props.children,
				this.renderResizer()
			]
		}));
	}, _.defaultProps = {
		as: "div",
		onResizeStart: function() {},
		onResize: function() {},
		onResizeStop: function() {},
		enable: {
			top: !0,
			right: !0,
			bottom: !0,
			left: !0,
			topRight: !0,
			bottomRight: !0,
			bottomLeft: !0,
			topLeft: !0
		},
		style: {},
		grid: [1, 1],
		gridGap: [0, 0],
		lockAspectRatio: !1,
		lockAspectRatioExtraWidth: 0,
		lockAspectRatioExtraHeight: 0,
		scale: 1,
		resizeRatio: 1,
		snapGap: 0
	}, _;
}(PureComponent);
const formatValue = (n, _) => {
	if (n == null) return "";
	if (_.type === "boolean") return String(n) === "true" || n === !0 || typeof n == "number" && n > 0 ? _.trueLabel || "Sim" : _.falseLabel || "Não";
	if (_.type === "date") try {
		let E = new Date(n);
		if (isNaN(E.getTime())) return String(n);
		if (_.dateFormat) {
			let n = E.getDate().toString().padStart(2, "0"), O = (E.getMonth() + 1).toString().padStart(2, "0"), A = E.getFullYear(), j = E.getHours().toString().padStart(2, "0"), M = E.getMinutes().toString().padStart(2, "0"), N = E.getSeconds().toString().padStart(2, "0");
			return _.dateFormat.replace("DD", n).replace("MM", O).replace("YYYY", String(A)).replace("HH", j).replace("mm", M).replace("ss", N);
		}
		return E.toLocaleDateString();
	} catch {
		return String(n);
	}
	if (_.type === "number") {
		let E = parseFloat(n);
		return isNaN(E) ? String(n) : _.numberFormat === "currency" ? (_.currencySymbol || "R$") + " " + E.toFixed(_.decimalPlaces || 2) : _.numberFormat === "percent" ? E.toFixed(_.decimalPlaces || 0) + "%" : E.toFixed(_.decimalPlaces || 0);
	}
	return String(n);
}, checkCondition = (n, _, E) => {
	let O = String(n).toLowerCase(), A = String(E).toLowerCase();
	switch (_) {
		case "equals": return O === A;
		case "notEquals": return O !== A;
		case "contains": return O.includes(A);
		case "greaterThan": return parseFloat(O) > parseFloat(A);
		case "lessThan": return parseFloat(O) < parseFloat(A);
		case "truthy": return !!n;
		case "falsy": return !n;
		default: return !1;
	}
};
function u() {
	return (u = Object.assign || function(n) {
		for (var _ = 1; _ < arguments.length; _++) {
			var E = arguments[_];
			for (var O in E) Object.prototype.hasOwnProperty.call(E, O) && (n[O] = E[O]);
		}
		return n;
	}).apply(this, arguments);
}
function c$1(n, _) {
	if (n == null) return {};
	var E, O, A = {}, j = Object.keys(n);
	for (O = 0; O < j.length; O++) _.indexOf(E = j[O]) >= 0 || (A[E] = n[E]);
	return A;
}
function i$1(n) {
	var _ = useRef(n), E = useRef(function(n) {
		_.current && _.current(n);
	});
	return _.current = n, E.current;
}
var s = function(n, _, E) {
	return _ === void 0 && (_ = 0), E === void 0 && (E = 1), n > E ? E : n < _ ? _ : n;
}, f = function(n) {
	return "touches" in n;
}, v = function(n) {
	return n && n.ownerDocument.defaultView || self;
}, d = function(n, _, E) {
	var O = n.getBoundingClientRect(), A = f(_) ? function(n, _) {
		for (var E = 0; E < n.length; E++) if (n[E].identifier === _) return n[E];
		return n[0];
	}(_.touches, E) : _;
	return {
		left: s((A.pageX - (O.left + v(n).pageXOffset)) / O.width),
		top: s((A.pageY - (O.top + v(n).pageYOffset)) / O.height)
	};
}, h = function(n) {
	!f(n) && n.preventDefault();
}, m = React.memo(function(n) {
	var E = n.onMove, O = n.onKey, A = c$1(n, ["onMove", "onKey"]), j = useRef(null), M = i$1(E), N = i$1(O), P = useRef(null), z = useRef(!1), B = useMemo(function() {
		var n = function(n) {
			h(n), (f(n) ? n.touches.length > 0 : n.buttons > 0) && j.current ? M(d(j.current, n, P.current)) : E(!1);
		}, _ = function() {
			return E(!1);
		};
		function E(E) {
			var O = z.current, A = v(j.current), M = E ? A.addEventListener : A.removeEventListener;
			M(O ? "touchmove" : "mousemove", n), M(O ? "touchend" : "mouseup", _);
		}
		return [
			function(n) {
				var _ = n.nativeEvent, O = j.current;
				if (O && (h(_), !function(n, _) {
					return _ && !f(n);
				}(_, z.current) && O)) {
					if (f(_)) {
						z.current = !0;
						var A = _.changedTouches || [];
						A.length && (P.current = A[0].identifier);
					}
					O.focus(), M(d(O, _, P.current)), E(!0);
				}
			},
			function(n) {
				var _ = n.which || n.keyCode;
				_ < 37 || _ > 40 || (n.preventDefault(), N({
					left: _ === 39 ? .05 : _ === 37 ? -.05 : 0,
					top: _ === 40 ? .05 : _ === 38 ? -.05 : 0
				}));
			},
			E
		];
	}, [N, M]), H = B[0], U = B[1], G = B[2];
	return useEffect(function() {
		return G;
	}, [G]), React.createElement("div", u({}, A, {
		onTouchStart: H,
		onMouseDown: H,
		className: "react-colorful__interactive",
		ref: j,
		onKeyDown: U,
		tabIndex: 0,
		role: "slider"
	}));
}), g = function(n) {
	return n.filter(Boolean).join(" ");
}, p$3 = function(n) {
	var E = n.color, O = n.left, A = n.top, j = A === void 0 ? .5 : A, M = g(["react-colorful__pointer", n.className]);
	return React.createElement("div", {
		className: M,
		style: {
			top: 100 * j + "%",
			left: 100 * O + "%"
		}
	}, React.createElement("div", {
		className: "react-colorful__pointer-fill",
		style: { backgroundColor: E }
	}));
}, b = function(n, _, E) {
	return _ === void 0 && (_ = 0), E === void 0 && (E = 10 ** _), Math.round(E * n) / E;
};
360 / (2 * Math.PI);
var x = function(n) {
	return L(C(n));
}, C = function(n) {
	return n[0] === "#" && (n = n.substring(1)), n.length < 6 ? {
		r: parseInt(n[0] + n[0], 16),
		g: parseInt(n[1] + n[1], 16),
		b: parseInt(n[2] + n[2], 16),
		a: n.length === 4 ? b(parseInt(n[3] + n[3], 16) / 255, 2) : 1
	} : {
		r: parseInt(n.substring(0, 2), 16),
		g: parseInt(n.substring(2, 4), 16),
		b: parseInt(n.substring(4, 6), 16),
		a: n.length === 8 ? b(parseInt(n.substring(6, 8), 16) / 255, 2) : 1
	};
}, w = function(n) {
	return K(I(n));
}, y = function(n) {
	var _ = n.s, E = n.v, O = n.a, A = (200 - _) * E / 100;
	return {
		h: b(n.h),
		s: b(A > 0 && A < 200 ? _ * E / 100 / (A <= 100 ? A : 200 - A) * 100 : 0),
		l: b(A / 2),
		a: b(O, 2)
	};
}, q = function(n) {
	var _ = y(n);
	return "hsl(" + _.h + ", " + _.s + "%, " + _.l + "%)";
}, k = function(n) {
	var _ = y(n);
	return "hsla(" + _.h + ", " + _.s + "%, " + _.l + "%, " + _.a + ")";
}, I = function(n) {
	var _ = n.h, E = n.s, O = n.v, A = n.a;
	_ = _ / 360 * 6, E /= 100, O /= 100;
	var j = Math.floor(_), M = O * (1 - E), N = O * (1 - (_ - j) * E), P = O * (1 - (1 - _ + j) * E), z = j % 6;
	return {
		r: b(255 * [
			O,
			N,
			M,
			M,
			P,
			O
		][z]),
		g: b(255 * [
			P,
			O,
			O,
			N,
			M,
			M
		][z]),
		b: b(255 * [
			M,
			M,
			P,
			O,
			O,
			N
		][z]),
		a: b(A, 2)
	};
}, D = function(n) {
	var _ = n.toString(16);
	return _.length < 2 ? "0" + _ : _;
}, K = function(n) {
	var _ = n.r, E = n.g, O = n.b, A = n.a, j = A < 1 ? D(b(255 * A)) : "";
	return "#" + D(_) + D(E) + D(O) + j;
}, L = function(n) {
	var _ = n.r, E = n.g, O = n.b, A = n.a, j = Math.max(_, E, O), M = j - Math.min(_, E, O), N = M ? j === _ ? (E - O) / M : j === E ? 2 + (O - _) / M : 4 + (_ - E) / M : 0;
	return {
		h: b(60 * (N < 0 ? N + 6 : N)),
		s: b(j ? M / j * 100 : 0),
		v: b(j / 255 * 100),
		a: A
	};
}, S = React.memo(function(n) {
	var E = n.hue, O = n.onChange, A = g(["react-colorful__hue", n.className]);
	return React.createElement("div", { className: A }, React.createElement(m, {
		onMove: function(n) {
			O({ h: 360 * n.left });
		},
		onKey: function(n) {
			O({ h: s(E + 360 * n.left, 0, 360) });
		},
		"aria-label": "Hue",
		"aria-valuenow": b(E),
		"aria-valuemax": "360",
		"aria-valuemin": "0"
	}, React.createElement(p$3, {
		className: "react-colorful__hue-pointer",
		left: E / 360,
		color: q({
			h: E,
			s: 100,
			v: 100,
			a: 1
		})
	})));
}), T = React.memo(function(n) {
	var E = n.hsva, O = n.onChange, A = { backgroundColor: q({
		h: E.h,
		s: 100,
		v: 100,
		a: 1
	}) };
	return React.createElement("div", {
		className: "react-colorful__saturation",
		style: A
	}, React.createElement(m, {
		onMove: function(n) {
			O({
				s: 100 * n.left,
				v: 100 - 100 * n.top
			});
		},
		onKey: function(n) {
			O({
				s: s(E.s + 100 * n.left, 0, 100),
				v: s(E.v - 100 * n.top, 0, 100)
			});
		},
		"aria-label": "Color",
		"aria-valuetext": "Saturation " + b(E.s) + "%, Brightness " + b(E.v) + "%"
	}, React.createElement(p$3, {
		className: "react-colorful__saturation-pointer",
		top: 1 - E.v / 100,
		left: E.s / 100,
		color: q(E)
	})));
}), F = function(n, _) {
	if (n === _) return !0;
	for (var E in n) if (n[E] !== _[E]) return !1;
	return !0;
}, X = function(n, _) {
	return n.toLowerCase() === _.toLowerCase() || F(C(n), C(_));
};
function Y(n, _, E) {
	var O = i$1(E), A = useState(function() {
		return n.toHsva(_);
	}), j = A[0], M = A[1], N = useRef({
		color: _,
		hsva: j
	});
	return useEffect(function() {
		if (!n.equal(_, N.current.color)) {
			var E = n.toHsva(_);
			N.current = {
				hsva: E,
				color: _
			}, M(E);
		}
	}, [_, n]), useEffect(function() {
		var _;
		F(j, N.current.hsva) || n.equal(_ = n.fromHsva(j), N.current.color) || (N.current = {
			hsva: j,
			color: _
		}, O(_));
	}, [
		j,
		n,
		O
	]), [j, useCallback(function(n) {
		M(function(_) {
			return Object.assign({}, _, n);
		});
	}, [])];
}
var R$1, V = typeof window < "u" ? useLayoutEffect : useEffect, $ = function() {
	return R$1 || (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0);
}, J = /* @__PURE__ */ new Map(), Q = function(n) {
	V(function() {
		var _ = n.current ? n.current.ownerDocument : document;
		if (_ !== void 0 && !J.has(_)) {
			var E = _.createElement("style");
			E.innerHTML = ".react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill-opacity=\".05\"><path d=\"M8 0h8v8H8zM0 8h8v8H0z\"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}", J.set(_, E);
			var O = $();
			O && E.setAttribute("nonce", O), _.head.appendChild(E);
		}
	}, []);
}, ee = function(n) {
	var E = n.className, O = n.hsva, A = n.onChange, j = { backgroundImage: "linear-gradient(90deg, " + k(Object.assign({}, O, { a: 0 })) + ", " + k(Object.assign({}, O, { a: 1 })) + ")" }, M = g(["react-colorful__alpha", E]), N = b(100 * O.a);
	return React.createElement("div", { className: M }, React.createElement("div", {
		className: "react-colorful__alpha-gradient",
		style: j
	}), React.createElement(m, {
		onMove: function(n) {
			A({ a: n.left });
		},
		onKey: function(n) {
			A({ a: s(O.a + n.left) });
		},
		"aria-label": "Alpha",
		"aria-valuetext": N + "%",
		"aria-valuenow": N,
		"aria-valuemin": "0",
		"aria-valuemax": "100"
	}, React.createElement(p$3, {
		className: "react-colorful__alpha-pointer",
		left: O.a,
		color: k(O)
	})));
}, re = function(n) {
	var E = n.className, O = n.colorModel, A = n.color, j = A === void 0 ? O.defaultColor : A, M = n.onChange, N = c$1(n, [
		"className",
		"colorModel",
		"color",
		"onChange"
	]), P = useRef(null);
	Q(P);
	var z = Y(O, j, M), B = z[0], H = z[1], U = g(["react-colorful", E]);
	return React.createElement("div", u({}, N, {
		ref: P,
		className: U
	}), React.createElement(T, {
		hsva: B,
		onChange: H
	}), React.createElement(S, {
		hue: B.h,
		onChange: H
	}), React.createElement(ee, {
		hsva: B,
		onChange: H,
		className: "react-colorful__last-control"
	}));
}, te = {
	defaultColor: "0001",
	toHsva: x,
	fromHsva: w,
	equal: X
}, ne = function(n) {
	return React.createElement(re, u({}, n, { colorModel: te }));
};
const ColorPickerContent = ({ color: n, onChange: _ }) => {
	let E = n === "transparent" ? "#00000000" : n || "#000000";
	return /* @__PURE__ */ jsxs(p$1, {
		direction: "column",
		gap: "3",
		style: { width: "100%" },
		children: [/* @__PURE__ */ jsx(ne, {
			color: E,
			onChange: _,
			style: { width: "100%" }
		}), /* @__PURE__ */ jsxs(p$1, {
			gap: "2",
			align: "center",
			children: [/* @__PURE__ */ jsx(p, { style: {
				width: 32,
				height: 32,
				backgroundColor: E,
				borderRadius: 4,
				border: "1px solid var(--gray-5)",
				flexShrink: 0
			} }), /* @__PURE__ */ jsx(u$1, {
				value: n,
				onChange: (n) => _(n.target.value),
				placeholder: "#RRGGBBAA",
				style: { flexGrow: 1 }
			})]
		})]
	});
}, ColorInput = ({ color: n, onChange: _, label: E }) => /* @__PURE__ */ jsxs(P$2, { children: [/* @__PURE__ */ jsx(s$1, { children: /* @__PURE__ */ jsxs(o, {
	variant: "surface",
	color: "gray",
	style: {
		width: "100%",
		justifyContent: "flex-start",
		padding: "0 8px",
		height: 32
	},
	children: [/* @__PURE__ */ jsx(p, { style: {
		width: 18,
		height: 18,
		backgroundColor: n || "transparent",
		borderRadius: 2,
		border: "1px solid var(--gray-8)",
		marginRight: 8,
		backgroundImage: n === "transparent" ? "linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)" : "none",
		backgroundSize: "8px 8px",
		backgroundPosition: "0 0, 0 4px, 4px -4px, -4px 0px"
	} }), /* @__PURE__ */ jsx("span", {
		style: {
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		},
		children: E || n || "Transparente"
	})]
}) }), /* @__PURE__ */ jsx(i$4, {
	style: { width: 240 },
	children: /* @__PURE__ */ jsx(ColorPickerContent, {
		color: n,
		onChange: _
	})
})] }), ElementAdvancedSettings = ({ elementId: n, open: _, onOpenChange: E }) => {
	let { state: O, updateElement: A } = useEditor(), j = O.elements.find((_) => _.id === n);
	return j ? /* @__PURE__ */ jsx(s$4, {
		open: _,
		onOpenChange: E,
		children: /* @__PURE__ */ jsxs(p$8, {
			style: {
				maxWidth: 600,
				minHeight: 400
			},
			children: [
				/* @__PURE__ */ jsx(g$2, { children: "Configurações Avançadas" }),
				/* @__PURE__ */ jsxs(m$1, {
					defaultValue: "formatting",
					children: [/* @__PURE__ */ jsxs(b$1, { children: [
						/* @__PURE__ */ jsx(P$1, {
							value: "formatting",
							children: "Formatação"
						}),
						/* @__PURE__ */ jsx(P$1, {
							value: "conditional",
							children: "Condicional"
						}),
						/* @__PURE__ */ jsx(P$1, {
							value: "animation",
							children: "Animação"
						})
					] }), /* @__PURE__ */ jsxs(p, {
						pt: "3",
						children: [
							/* @__PURE__ */ jsx(f$2, {
								value: "formatting",
								children: /* @__PURE__ */ jsx(FormattingSettings, {
									element: j,
									updateElement: A
								})
							}),
							/* @__PURE__ */ jsx(f$2, {
								value: "conditional",
								children: /* @__PURE__ */ jsx(ConditionalSettings, {
									element: j,
									updateElement: A,
									availableProps: O.availableProps
								})
							}),
							/* @__PURE__ */ jsx(f$2, {
								value: "animation",
								children: /* @__PURE__ */ jsx(AnimationSettings, {
									element: j,
									updateElement: A
								})
							})
						]
					})]
				}),
				/* @__PURE__ */ jsx(p$1, {
					justify: "end",
					mt: "4",
					children: /* @__PURE__ */ jsx(D$2, { children: /* @__PURE__ */ jsx(o, {
						variant: "soft",
						color: "gray",
						children: "Fechar"
					}) })
				})
			]
		})
	}) : null;
};
var AnimationSettings = ({ element: n, updateElement: _ }) => {
	let E = n.animation || {
		type: "none",
		duration: 1,
		delay: 0
	}, O = (O) => {
		_(n.id, { animation: {
			...E,
			...O
		} });
	};
	return /* @__PURE__ */ jsxs(p$1, {
		direction: "column",
		gap: "3",
		children: [
			/* @__PURE__ */ jsx(p$2, {
				size: "2",
				color: "gray",
				children: "Configure animações de entrada para este elemento."
			}),
			/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
				size: "1",
				mb: "1",
				as: "div",
				children: "Tipo de Animação"
			}), /* @__PURE__ */ jsxs("select", {
				value: E.type,
				onChange: (n) => O({ type: n.target.value }),
				style: {
					width: "100%",
					padding: "6px",
					borderRadius: "4px",
					border: "1px solid var(--gray-6)",
					backgroundColor: "var(--color-panel-solid)",
					color: "var(--gray-12)",
					fontSize: "14px"
				},
				children: [
					/* @__PURE__ */ jsx("option", {
						value: "none",
						children: "Nenhuma"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "fadeIn",
						children: "Fade In"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "slideInLeft",
						children: "Slide In (Esquerda)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "slideInRight",
						children: "Slide In (Direita)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "slideInUp",
						children: "Slide In (Cima)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "slideInDown",
						children: "Slide In (Baixo)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "zoomIn",
						children: "Zoom In"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "bounceIn",
						children: "Bounce In"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "pulse",
						children: "Pulse (Atenção)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "shake",
						children: "Shake (Atenção)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "spin",
						children: "Spin (Loop)"
					})
				]
			})] }),
			E.type !== "none" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsxs(o$3, {
					columns: "2",
					gap: "3",
					children: [/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Duração (s)"
					}), /* @__PURE__ */ jsx(u$1, {
						type: "number",
						step: "0.1",
						min: "0.1",
						value: E.duration,
						onChange: (n) => O({ duration: parseFloat(n.target.value) || .5 })
					})] }), /* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Atraso (s)"
					}), /* @__PURE__ */ jsx(u$1, {
						type: "number",
						step: "0.1",
						min: "0",
						value: E.delay,
						onChange: (n) => O({ delay: parseFloat(n.target.value) || 0 })
					})] })]
				}),
				/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Curva de Tempo (Easing)"
				}), /* @__PURE__ */ jsxs("select", {
					value: E.timingFunction || "ease",
					onChange: (n) => O({ timingFunction: n.target.value }),
					style: {
						width: "100%",
						padding: "6px",
						borderRadius: "4px",
						border: "1px solid var(--gray-6)",
						backgroundColor: "var(--color-panel-solid)",
						color: "var(--gray-12)",
						fontSize: "14px"
					},
					children: [
						/* @__PURE__ */ jsx("option", {
							value: "linear",
							children: "Linear"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "ease",
							children: "Ease"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "ease-in",
							children: "Ease In"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "ease-out",
							children: "Ease Out"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "ease-in-out",
							children: "Ease In Out"
						})
					]
				})] }),
				[
					"pulse",
					"shake",
					"spin"
				].includes(E.type) && /* @__PURE__ */ jsx(p, { children: /* @__PURE__ */ jsxs(p$1, {
					align: "center",
					gap: "2",
					mt: "2",
					children: [/* @__PURE__ */ jsx(i, {
						checked: E.iterationCount === "infinite",
						onCheckedChange: (n) => O({ iterationCount: n ? "infinite" : 1 })
					}), /* @__PURE__ */ jsx(p$2, {
						size: "2",
						children: "Repetir Infinitamente"
					})]
				}) })
			] })
		]
	});
}, FormattingSettings = ({ element: n, updateElement: _ }) => {
	let E = n.formatting || { type: "text" }, O = (O) => {
		_(n.id, { formatting: {
			...E,
			...O
		} });
	};
	return /* @__PURE__ */ jsxs(p$1, {
		direction: "column",
		gap: "3",
		children: [
			/* @__PURE__ */ jsx(p$2, {
				size: "2",
				color: "gray",
				children: "Configure como os dados serão exibidos quando substituídos."
			}),
			n.type === "text" && /* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsxs(p$1, {
				align: "center",
				gap: "2",
				mb: "3",
				children: [/* @__PURE__ */ jsx(i, {
					checked: n.autoGrow || !1,
					onCheckedChange: (E) => _(n.id, { autoGrow: E })
				}), /* @__PURE__ */ jsx(p$2, {
					size: "2",
					children: "Expandir altura automaticamente (Multilinha)"
				})]
			}), /* @__PURE__ */ jsx(o$2, {
				size: "4",
				mb: "3"
			})] }),
			/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
				size: "1",
				mb: "1",
				as: "div",
				children: "Tipo de Formatação"
			}), /* @__PURE__ */ jsxs("select", {
				value: E.type,
				onChange: (n) => O({ type: n.target.value }),
				style: {
					width: "100%",
					padding: "6px",
					borderRadius: "4px",
					border: "1px solid var(--gray-6)",
					backgroundColor: "var(--color-panel-solid)",
					color: "var(--gray-12)",
					fontSize: "14px"
				},
				children: [
					/* @__PURE__ */ jsx("option", {
						value: "text",
						children: "Texto (Padrão)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "boolean",
						children: "Booleano (Sim/Não)"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "date",
						children: "Data"
					}),
					/* @__PURE__ */ jsx("option", {
						value: "number",
						children: "Número / Moeda"
					})
				]
			})] }),
			E.type === "boolean" && /* @__PURE__ */ jsxs(o$3, {
				columns: "2",
				gap: "3",
				children: [/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Texto para Verdadeiro"
				}), /* @__PURE__ */ jsx(u$1, {
					placeholder: "Ex: Sim",
					value: E.trueLabel || "",
					onChange: (n) => O({ trueLabel: n.target.value })
				})] }), /* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Texto para Falso"
				}), /* @__PURE__ */ jsx(u$1, {
					placeholder: "Ex: Não",
					value: E.falseLabel || "",
					onChange: (n) => O({ falseLabel: n.target.value })
				})] })]
			}),
			E.type === "date" && /* @__PURE__ */ jsxs(p, { children: [
				/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Formato da Data"
				}),
				/* @__PURE__ */ jsx(u$1, {
					placeholder: "Ex: DD/MM/YYYY",
					value: E.dateFormat || "",
					onChange: (n) => O({ dateFormat: n.target.value })
				}),
				/* @__PURE__ */ jsx(p$2, {
					size: "1",
					color: "gray",
					mt: "1",
					children: "Use DD, MM, YYYY, HH, mm, ss."
				})
			] }),
			E.type === "number" && /* @__PURE__ */ jsxs(p$1, {
				direction: "column",
				gap: "3",
				children: [
					/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Estilo"
					}), /* @__PURE__ */ jsxs("select", {
						value: E.numberFormat || "decimal",
						onChange: (n) => O({ numberFormat: n.target.value }),
						style: {
							width: "100%",
							padding: "6px",
							borderRadius: "4px",
							border: "1px solid var(--gray-6)",
							backgroundColor: "var(--color-panel-solid)",
							color: "var(--gray-12)",
							fontSize: "14px"
						},
						children: [
							/* @__PURE__ */ jsx("option", {
								value: "decimal",
								children: "Decimal"
							}),
							/* @__PURE__ */ jsx("option", {
								value: "currency",
								children: "Moeda"
							}),
							/* @__PURE__ */ jsx("option", {
								value: "percent",
								children: "Porcentagem"
							})
						]
					})] }),
					E.numberFormat === "currency" && /* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Símbolo da Moeda"
					}), /* @__PURE__ */ jsx(u$1, {
						placeholder: "Ex: R$",
						value: E.currencySymbol || "",
						onChange: (n) => O({ currencySymbol: n.target.value })
					})] }),
					/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Casas Decimais"
					}), /* @__PURE__ */ jsx(u$1, {
						type: "number",
						placeholder: "2",
						value: E.decimalPlaces === void 0 ? "" : E.decimalPlaces,
						onChange: (n) => O({ decimalPlaces: parseInt(n.target.value) || 0 })
					})] })
				]
			})
		]
	});
}, ConditionalSettings = ({ element: n, updateElement: _, availableProps: E }) => {
	let O = n.conditions || [], [A, j] = useState(null), M = () => {
		let A = {
			id: crypto.randomUUID(),
			property: E.length > 0 ? E[0].dataName : "",
			operator: "equals",
			value: "",
			style: { color: "#ff0000" }
		};
		_(n.id, { conditions: [...O, A] }), j(A.id);
	}, N = (E) => {
		_(n.id, { conditions: O.filter((n) => n.id !== E) }), A === E && j(null);
	}, P = (E, A) => {
		_(n.id, { conditions: O.map((n) => n.id === E ? {
			...n,
			...A
		} : n) });
	}, z = (n, _) => {
		let E = O.find((_) => _.id === n);
		E && P(n, { style: {
			...E.style,
			..._
		} });
	}, B = O.find((n) => n.id === A);
	return /* @__PURE__ */ jsx(p$1, {
		direction: "column",
		gap: "3",
		children: A ? /* @__PURE__ */ jsxs(p$1, {
			direction: "column",
			gap: "3",
			children: [/* @__PURE__ */ jsxs(p$1, {
				justify: "between",
				align: "center",
				children: [/* @__PURE__ */ jsx(p$2, {
					weight: "bold",
					children: "Editar Regra"
				}), /* @__PURE__ */ jsx(o, {
					variant: "ghost",
					onClick: () => j(null),
					children: "Voltar"
				})]
			}), B && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsxs(p, { children: [
					/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Propriedade"
					}),
					/* @__PURE__ */ jsxs("select", {
						value: B.property,
						onChange: (n) => P(B.id, { property: n.target.value }),
						style: {
							width: "100%",
							padding: "6px",
							borderRadius: "4px",
							border: "1px solid var(--gray-6)",
							backgroundColor: "var(--color-panel-solid)",
							color: "var(--gray-12)",
							fontSize: "14px"
						},
						children: [E.map((n) => /* @__PURE__ */ jsx("option", {
							value: n.dataName,
							children: n.name
						}, n.dataName)), /* @__PURE__ */ jsx("option", {
							value: "__custom__",
							children: "Outra..."
						})]
					}),
					B.property === "__custom__" && /* @__PURE__ */ jsx(u$1, {
						placeholder: "Nome da propriedade",
						mt: "2",
						onChange: (n) => P(B.id, { property: n.target.value })
					})
				] }),
				/* @__PURE__ */ jsxs(p$1, {
					gap: "2",
					children: [/* @__PURE__ */ jsxs(p, {
						flexGrow: "1",
						children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Operador"
						}), /* @__PURE__ */ jsxs("select", {
							value: B.operator,
							onChange: (n) => P(B.id, { operator: n.target.value }),
							style: {
								width: "100%",
								padding: "6px",
								borderRadius: "4px",
								border: "1px solid var(--gray-6)",
								backgroundColor: "var(--color-panel-solid)",
								color: "var(--gray-12)",
								fontSize: "14px"
							},
							children: [
								/* @__PURE__ */ jsx("option", {
									value: "equals",
									children: "Igual a"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "notEquals",
									children: "Diferente de"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "contains",
									children: "Contém"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "greaterThan",
									children: "Maior que"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "lessThan",
									children: "Menor que"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "truthy",
									children: "É Verdadeiro (Truthy)"
								}),
								/* @__PURE__ */ jsx("option", {
									value: "falsy",
									children: "É Falso (Falsy)"
								})
							]
						})]
					}), [
						"equals",
						"notEquals",
						"contains",
						"greaterThan",
						"lessThan"
					].includes(B.operator) && /* @__PURE__ */ jsxs(p, {
						flexGrow: "1",
						children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Valor"
						}), /* @__PURE__ */ jsx(u$1, {
							value: B.value,
							onChange: (n) => P(B.id, { value: n.target.value })
						})]
					})]
				}),
				/* @__PURE__ */ jsx(p$1, {
					gap: "2",
					children: /* @__PURE__ */ jsxs(p, {
						flexGrow: "1",
						children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Ação"
						}), /* @__PURE__ */ jsxs("select", {
							value: B.style.display === "none" ? "hide" : "style",
							onChange: (n) => {
								n.target.value === "hide" ? z(B.id, { display: "none" }) : z(B.id, { display: void 0 });
							},
							style: {
								width: "100%",
								padding: "6px",
								borderRadius: "4px",
								border: "1px solid var(--gray-6)",
								backgroundColor: "var(--color-panel-solid)",
								color: "var(--gray-12)",
								fontSize: "14px"
							},
							children: [/* @__PURE__ */ jsx("option", {
								value: "style",
								children: "Aplicar Estilo"
							}), /* @__PURE__ */ jsx("option", {
								value: "hide",
								children: "Ocultar Elemento"
							})]
						})]
					})
				}),
				/* @__PURE__ */ jsx(o$2, {
					size: "4",
					my: "2"
				}),
				B.style.display !== "none" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(p$2, {
						size: "2",
						weight: "bold",
						children: "Aplicar Estilos"
					}),
					/* @__PURE__ */ jsxs(o$3, {
						columns: "2",
						gap: "3",
						children: [/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Cor do Texto"
						}), /* @__PURE__ */ jsx(ColorInput, {
							color: B.style.color || "#000000",
							onChange: (n) => z(B.id, { color: n })
						})] }), /* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Cor de Fundo"
						}), /* @__PURE__ */ jsxs(p$1, {
							gap: "2",
							children: [/* @__PURE__ */ jsx(p, {
								flexGrow: "1",
								children: /* @__PURE__ */ jsx(ColorInput, {
									color: B.style.backgroundColor || "#ffffff",
									onChange: (n) => z(B.id, { backgroundColor: n })
								})
							}), /* @__PURE__ */ jsx(o$1, {
								variant: "outline",
								onClick: () => z(B.id, { backgroundColor: void 0 }),
								title: "Limpar fundo",
								children: /* @__PURE__ */ jsx(Cross2Icon, {})
							})]
						})] })]
					}),
					/* @__PURE__ */ jsxs(p$1, {
						gap: "3",
						mt: "2",
						children: [
							/* @__PURE__ */ jsx(o, {
								variant: B.style.fontWeight === "bold" ? "solid" : "outline",
								onClick: () => z(B.id, { fontWeight: B.style.fontWeight === "bold" ? "normal" : "bold" }),
								children: "Bold"
							}),
							/* @__PURE__ */ jsx(o, {
								variant: B.style.fontStyle === "italic" ? "solid" : "outline",
								onClick: () => z(B.id, { fontStyle: B.style.fontStyle === "italic" ? "normal" : "italic" }),
								children: "Italic"
							}),
							/* @__PURE__ */ jsx(o, {
								variant: B.style.textDecoration === "line-through" ? "solid" : "outline",
								onClick: () => z(B.id, { textDecoration: B.style.textDecoration === "line-through" ? "none" : "line-through" }),
								children: "Riscado"
							})
						]
					})
				] })
			] })]
		}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsx(p$2, {
				size: "2",
				color: "gray",
				children: "Adicione regras para alterar o estilo baseada no valor dos dados."
			}),
			/* @__PURE__ */ jsxs(p, {
				style: {
					maxHeight: 200,
					overflowY: "auto",
					border: "1px solid var(--gray-5)",
					borderRadius: 4
				},
				children: [O.length === 0 && /* @__PURE__ */ jsx(p$1, {
					align: "center",
					justify: "center",
					p: "4",
					children: /* @__PURE__ */ jsx(p$2, {
						color: "gray",
						children: "Nenhuma regra definida."
					})
				}), O.map((n) => /* @__PURE__ */ jsxs(p$1, {
					align: "center",
					justify: "between",
					p: "2",
					style: { borderBottom: "1px solid var(--gray-4)" },
					children: [/* @__PURE__ */ jsxs(p, {
						onClick: () => j(n.id),
						style: {
							cursor: "pointer",
							flexGrow: 1
						},
						children: [/* @__PURE__ */ jsxs(p$2, {
							size: "1",
							weight: "bold",
							children: [
								"Se ",
								n.property,
								" ",
								n.operator,
								" ",
								n.value
							]
						}), /* @__PURE__ */ jsxs(p$1, {
							gap: "2",
							mt: "1",
							children: [n.style.color && /* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								borderRadius: "50%",
								backgroundColor: n.style.color
							} }), n.style.backgroundColor && /* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								border: "1px solid #ccc",
								backgroundColor: n.style.backgroundColor
							} })]
						})]
					}), /* @__PURE__ */ jsx(o$1, {
						variant: "ghost",
						color: "red",
						onClick: () => N(n.id),
						children: /* @__PURE__ */ jsx(TrashIcon, {})
					})]
				}, n.id))]
			}),
			/* @__PURE__ */ jsxs(o, {
				onClick: M,
				children: [/* @__PURE__ */ jsx(PlusIcon, {}), " Adicionar Regra"]
			})
		] })
	});
};
const ElementContextMenu = ({ children: n, element: _ }) => {
	let { updateElement: E, removeElement: O, removeSelected: A, addElement: j, moveElement: M, copy: N, paste: P, state: z } = useEditor(), [B, H] = useState(!1), [U, W] = useState(!1), [G, Z] = useState(!1), [Mj, Nj] = useState({
		open: !1,
		prop: "",
		value: ""
	}), [Pj, Lj] = useState(_.content), [Rj, zj] = useState(_.dataBinding || ""), Uj = useRef(null), Wj = useRef(null), Gj = (n) => {
		let _ = Uj.current;
		if (_) {
			let E = _.selectionStart, O = _.selectionEnd, A = Pj;
			Lj(A.substring(0, E) + `{{${n}}}` + A.substring(O)), setTimeout(() => {
				_.focus();
				let O = E + n.length + 4;
				_.setSelectionRange(O, O);
			}, 0);
		} else Lj((_) => _ + `{{${n}}}`);
	}, Kj = (n) => {
		E(_.id, { style: {
			..._.style,
			...n
		} });
	}, qj = () => {
		let n = z.elements.findIndex((n) => n.id === _.id);
		n < z.elements.length - 1 && M(n, z.elements.length - 1);
	}, Jj = () => {
		let n = z.elements.findIndex((n) => n.id === _.id);
		n > 0 && M(n, 0);
	}, Yj = () => {
		z.selectedElementIds.includes(_.id) && z.selectedElementIds.length > 1 ? (N(), P()) : j({
			type: _.type,
			content: _.content,
			x: _.x + 20,
			y: _.y + 20,
			width: _.width,
			height: _.height,
			style: _.style
		});
	}, Xj = [
		"#000000",
		"#FFFFFF",
		"#FF0000",
		"#00FF00",
		"#0000FF",
		"#FFA500",
		"#808080",
		"#800080",
		"transparent"
	], Zj = (n, _) => {
		Nj({
			open: !0,
			prop: n,
			value: _
		});
	};
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(s$4, {
			open: B,
			onOpenChange: H,
			children: /* @__PURE__ */ jsxs(p$8, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$2, { children: "Editar Texto" }), /* @__PURE__ */ jsxs(p$1, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(r, {
							ref: Uj,
							value: Pj,
							onChange: (n) => Lj(n.target.value),
							placeholder: "Digite o novo texto...",
							style: { height: 100 }
						}),
						z.availableProps && z.availableProps.length > 0 && /* @__PURE__ */ jsxs(p$1, {
							direction: "column",
							gap: "2",
							children: [/* @__PURE__ */ jsx(p$2, {
								size: "1",
								color: "gray",
								children: "Inserir variável:"
							}), /* @__PURE__ */ jsx(p$1, {
								gap: "2",
								wrap: "wrap",
								children: z.availableProps.map((n) => /* @__PURE__ */ jsx(e, {
									color: "blue",
									variant: "surface",
									style: { cursor: "pointer" },
									onClick: () => Gj(n.dataName),
									children: n.name
								}, n.dataName))
							})]
						}),
						/* @__PURE__ */ jsxs(p$1, {
							gap: "3",
							justify: "end",
							children: [/* @__PURE__ */ jsx(D$2, { children: /* @__PURE__ */ jsx(o, {
								variant: "soft",
								color: "gray",
								children: "Cancelar"
							}) }), /* @__PURE__ */ jsx(o, {
								onClick: () => {
									E(_.id, { content: Pj }), H(!1);
								},
								children: "Salvar"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(s$4, {
			open: U,
			onOpenChange: W,
			children: /* @__PURE__ */ jsxs(p$8, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$2, { children: "Vincular Dados Manualmente" }), /* @__PURE__ */ jsxs(p$1, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(p$2, {
							size: "2",
							children: "Nome da propriedade (ex: titulo, preco, imagem):"
						}),
						/* @__PURE__ */ jsx(u$1, {
							value: Rj,
							onChange: (n) => zj(n.target.value),
							placeholder: "propriedade"
						}),
						/* @__PURE__ */ jsxs(p$1, {
							gap: "3",
							justify: "end",
							children: [/* @__PURE__ */ jsx(D$2, { children: /* @__PURE__ */ jsx(o, {
								variant: "soft",
								color: "gray",
								children: "Cancelar"
							}) }), /* @__PURE__ */ jsx(o, {
								onClick: () => {
									let n = Rj, O = { dataBinding: n };
									_.type === "text" && (O.content = `{{${n}}}`), E(_.id, O), W(!1);
								},
								children: "Vincular"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(s$4, {
			open: Mj.open,
			onOpenChange: (n) => Nj((_) => ({
				..._,
				open: n
			})),
			children: /* @__PURE__ */ jsxs(p$8, {
				style: { maxWidth: 300 },
				children: [
					/* @__PURE__ */ jsx(g$2, { children: "Selecionar Cor" }),
					/* @__PURE__ */ jsx(ColorPickerContent, {
						color: Mj.value,
						onChange: (n) => Nj((_) => ({
							..._,
							value: n
						}))
					}),
					/* @__PURE__ */ jsxs(p$1, {
						gap: "3",
						justify: "end",
						mt: "4",
						children: [/* @__PURE__ */ jsx(D$2, { children: /* @__PURE__ */ jsx(o, {
							variant: "soft",
							color: "gray",
							children: "Cancelar"
						}) }), /* @__PURE__ */ jsx(o, {
							onClick: () => {
								Kj({ [Mj.prop]: Mj.value }), Nj((n) => ({
									...n,
									open: !1
								}));
							},
							children: "Aplicar"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ jsx(ElementAdvancedSettings, {
			elementId: _.id,
			open: G,
			onOpenChange: Z
		}),
		/* @__PURE__ */ jsx("input", {
			type: "file",
			ref: Wj,
			style: { display: "none" },
			accept: "image/*",
			onChange: (n) => {
				let O = n.target.files?.[0];
				if (O) {
					let n = new FileReader();
					n.onload = (n) => {
						n.target?.result && E(_.id, { content: n.target.result });
					}, n.readAsDataURL(O);
				}
			}
		}),
		/* @__PURE__ */ jsxs(Root2$3, { children: [/* @__PURE__ */ jsx(Trigger$3, {
			asChild: !0,
			children: /* @__PURE__ */ jsx("div", {
				style: { display: "contents" },
				children: n
			})
		}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(Content2$2, {
			className: "ContextMenuContent",
			children: [
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: [
						"Vincular Dados",
						_.dataBinding && /* @__PURE__ */ jsxs("span", {
							style: {
								fontSize: 10,
								marginLeft: 4,
								opacity: .7
							},
							children: [
								"(",
								_.dataBinding,
								")"
							]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})
					]
				}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
					className: "ContextMenuSubContent",
					sideOffset: 2,
					alignOffset: -5,
					children: [
						z.availableProps && z.availableProps.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [z.availableProps.map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								let O = { dataBinding: n.dataName };
								_.type === "text" && (O.content = `{{${n.dataName}}}`), E(_.id, O);
							},
							children: [
								n.name,
								" ",
								/* @__PURE__ */ jsx("div", {
									className: "RightSlot",
									children: n.dataName
								})
							]
						}, n.dataName)), /* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" })] }),
						/* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								zj(_.dataBinding || ""), W(!0);
							},
							children: "Outro / Manual..."
						}),
						_.dataBinding && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => E(_.id, { dataBinding: void 0 }),
							style: { color: "var(--red-9)" },
							children: "Remover Vínculo"
						})] })
					]
				}) })] }),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				_.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => {
						Lj(_.content), H(!0);
					},
					children: "Editar Texto..."
				}), /* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" })] }),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => Z(!0),
					children: "Configurações Avançadas..."
				}),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: Yj,
					children: z.selectedElementIds.includes(_.id) && z.selectedElementIds.length > 1 ? `Duplicar Selecionados (${z.selectedElementIds.length})` : "Duplicar"
				}),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => {
						z.selectedElementIds.includes(_.id) && z.selectedElementIds.length > 1 ? A() : O(_.id);
					},
					children: z.selectedElementIds.includes(_.id) && z.selectedElementIds.length > 1 ? `Excluir Selecionados (${z.selectedElementIds.length})` : "Excluir"
				}),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				_.type === "image" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Alterar Imagem", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [/* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Wj.current?.click(),
							children: "Carregar do Computador"
						}), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								setTimeout(() => {
									let n = window.prompt("Insira a URL da imagem:", _.content);
									n !== null && E(_.id, { content: n });
								}, 10);
							},
							children: "Inserir URL"
						})]
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Ajuste da Imagem", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ objectFit: "cover" }),
								children: "Preencher (Cover)"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ objectFit: "contain" }),
								children: "Ajustar (Contain)"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ objectFit: "fill" }),
								children: "Esticar (Fill)"
							})
						]
					}) })] }),
					/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" })
				] }),
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: ["Camadas", /* @__PURE__ */ jsx("div", {
						className: "RightSlot",
						children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
					})]
				}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
					className: "ContextMenuSubContent",
					sideOffset: 2,
					alignOffset: -5,
					children: [/* @__PURE__ */ jsx(Item2$1, {
						className: "ContextMenuItem",
						onSelect: qj,
						children: "Trazer para frente"
					}), /* @__PURE__ */ jsx(Item2$1, {
						className: "ContextMenuItem",
						onSelect: Jj,
						children: "Enviar para trás"
					})]
				}) })] }),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				_.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Fonte", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsx(SubContent2$1, {
						className: "ContextMenuSubContent ContextMenuScrollable",
						sideOffset: 2,
						alignOffset: -5,
						children: z.availableFonts && z.availableFonts.map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Kj({ fontFamily: n }),
							style: { fontFamily: n },
							children: [n, _.style?.fontFamily === n && /* @__PURE__ */ jsx("div", {
								className: "RightSlot",
								children: /* @__PURE__ */ jsx(CheckIcon, {})
							})]
						}, n))
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Tamanho da Fonte", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsx(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [
							12,
							14,
							16,
							20,
							24,
							32,
							48,
							64
						].map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Kj({ fontSize: `${n}px` }),
							children: [n, "px"]
						}, n))
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Cor do Texto", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [
							Xj.filter((n) => n !== "transparent").map((n) => /* @__PURE__ */ jsxs(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ color: n }),
								children: [/* @__PURE__ */ jsx("div", { style: {
									width: 12,
									height: 12,
									backgroundColor: n,
									marginRight: 8,
									border: "1px solid #ccc"
								} }), n]
							}, n)),
							/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Zj("color", _.style?.color || "#000000"),
								children: "Outra Cor..."
							})
						]
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Peso da Fonte", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [/* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Kj({ fontWeight: "normal" }),
							children: "Normal"
						}), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Kj({ fontWeight: "bold" }),
							children: "Negrito"
						})]
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Alinhamento", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ textAlign: "left" }),
								children: "Esquerda"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ textAlign: "center" }),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({ textAlign: "right" }),
								children: "Direita"
							})
						]
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Alinhamento Vertical", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: [
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start"
								}),
								children: "Topo"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({
									display: "flex",
									flexDirection: "column",
									justifyContent: "center"
								}),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Kj({
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-end"
								}),
								children: "Base"
							})
						]
					}) })] })
				] }),
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: ["Cor de Fundo", /* @__PURE__ */ jsx("div", {
						className: "RightSlot",
						children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
					})]
				}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(SubContent2$1, {
					className: "ContextMenuSubContent",
					sideOffset: 2,
					alignOffset: -5,
					children: [
						Xj.map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Kj({ backgroundColor: n }),
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								backgroundColor: n,
								marginRight: 8,
								border: "1px solid #ccc"
							} }), n === "transparent" ? "Transparente" : n]
						}, n)),
						/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
						/* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Zj("backgroundColor", _.style?.backgroundColor || "transparent"),
							children: "Outra Cor..."
						})
					]
				}) })] }),
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: ["Arredondamento", /* @__PURE__ */ jsx("div", {
						className: "RightSlot",
						children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
					})]
				}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsx(SubContent2$1, {
					className: "ContextMenuSubContent",
					sideOffset: 2,
					alignOffset: -5,
					children: [
						0,
						4,
						8,
						12,
						16,
						24,
						"50%"
					].map((n) => /* @__PURE__ */ jsx(Item2$1, {
						className: "ContextMenuItem",
						onSelect: () => Kj({ borderRadius: typeof n == "number" ? `${n}px` : n }),
						children: n === "50%" ? "Círculo" : `${n}px`
					}, n))
				}) })] }),
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: ["Espaçamento", /* @__PURE__ */ jsx("div", {
						className: "RightSlot",
						children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
					})]
				}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsx(SubContent2$1, {
					className: "ContextMenuSubContent",
					sideOffset: 2,
					alignOffset: -5,
					children: [
						0,
						4,
						8,
						12,
						16,
						24,
						32
					].map((n) => /* @__PURE__ */ jsxs(Item2$1, {
						className: "ContextMenuItem",
						onSelect: () => Kj({ padding: `${n}px` }),
						children: [n, "px"]
					}, n))
				}) })] })
			]
		}) })] })
	] });
}, DraggableElement = React.memo(({ element: n, isSelected: _ }) => {
	let { selectElement: E, updateElement: O, updateElements: A, state: j } = useEditor(), [M, N] = useState(!1), [P, z] = useState(!1), B = useRef({
		x: 0,
		y: 0
	}), H = useRef({}), U = useRef(!1), G = useRef(!1), Z = useRef(0), Mj = useRef(0), Nj = useRef({
		x: 0,
		y: 0
	}), Pj = j.canvasHeight || 150, Lj = j.isList ? j.mockData.length > 0 ? j.mockData[0] : null : j.singleMockData, Rj = n.content, zj = {};
	if (Lj) {
		if (n.type === "text") Rj = Rj.replace(/\{\{(.*?)\}\}/g, (_, E) => {
			let O = Lj[E.trim()];
			return O == null ? _ : n.formatting ? formatValue(O, n.formatting) : String(O);
		});
		else if (n.type === "image") if (n.dataBinding) {
			let _ = Lj[n.dataBinding];
			_ != null && (Rj = String(_));
		} else Rj = Rj.replace(/\{\{(.*?)\}\}/g, (n, _) => {
			let E = Lj[_.trim()];
			return E == null ? n : String(E);
		});
		n.conditions && n.conditions.forEach((n) => {
			let _ = Lj[n.property];
			checkCondition(_, n.operator, n.value) && (zj = {
				...zj,
				...n.style
			});
		});
	}
	let Bj = zj.display === "none";
	if (Bj && _) {
		let { display: n, ..._ } = zj;
		zj = _;
	}
	let Uj = (_) => {
		_.stopPropagation(), !U.current && !G.current && !M && (_.shiftKey ? E(n.id, !0) : E(n.id, !1));
	}, Wj = (O) => {
		if (O.button !== 0) return;
		O.stopPropagation();
		let A = O.shiftKey;
		U.current = !1, G.current = !1, _ || (E(n.id, A), G.current = !0), N(!0), B.current = {
			x: O.clientX,
			y: O.clientY
		};
		let M = new Set(j.selectedElementIds);
		_ || (A || M.clear(), M.add(n.id));
		let P = {};
		j.elements.forEach((n) => {
			M.has(n.id) && (P[n.id] = {
				x: n.x,
				y: n.y
			});
		}), H.current = P;
	}, Gj = (_) => {
		_.stopPropagation(), _.preventDefault(), z(!0);
		let E = _.target.closest(".resizable-element");
		if (E) {
			let O = E.getBoundingClientRect();
			Nj.current = {
				x: O.left + O.width / 2,
				y: O.top + O.height / 2
			};
			let A = _.clientX - Nj.current.x, j = _.clientY - Nj.current.y;
			Z.current = Math.atan2(j, A) * (180 / Math.PI), Mj.current = n.rotation || 0;
		}
	};
	useEffect(() => {
		let _ = (_) => {
			if (M) {
				let n = _.clientX - B.current.x, E = _.clientY - B.current.y;
				(Math.abs(n) > 2 || Math.abs(E) > 2) && (U.current = !0), A(Object.entries(H.current).map(([_, O]) => {
					let A = O.x + n, M = O.y + E;
					return j.gridSize > 0 && (A = Math.round(A / j.gridSize) * j.gridSize, M = Math.round(M / j.gridSize) * j.gridSize), j.isList && (M = Math.max(0, M)), {
						id: _,
						changes: {
							x: A,
							y: M
						}
					};
				}), !1);
			}
			if (P) {
				let E = _.clientX - Nj.current.x, A = _.clientY - Nj.current.y, j = Math.atan2(A, E) * (180 / Math.PI) - Z.current, M = (Mj.current + j) % 360;
				O(n.id, { rotation: M }, !1);
			}
		}, E = () => {
			M && (N(!1), A([], !0)), P && (z(!1), O(n.id, { rotation: n.rotation }, !0));
		};
		return (M || P) && (window.addEventListener("mousemove", _), window.addEventListener("mouseup", E)), () => {
			window.removeEventListener("mousemove", _), window.removeEventListener("mouseup", E);
		};
	}, [
		M,
		P,
		n.id,
		O,
		A,
		j.isList,
		j.selectedElementIds
	]);
	let Kj = {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: n.autoGrow ? "auto" : "100%",
		minHeight: n.autoGrow ? "100%" : void 0,
		padding: n.type === "image" || n.type === "text" ? 0 : "8px",
		border: _ ? "2px solid var(--accent-9)" : "1px dashed transparent",
		outline: _ ? "none" : "1px solid transparent",
		cursor: M ? "grabbing" : "grab",
		borderRadius: "var(--radius-2)",
		overflow: n.autoGrow ? "visible" : "hidden",
		whiteSpace: n.autoGrow ? "pre-wrap" : void 0,
		wordBreak: n.autoGrow ? "break-word" : void 0,
		userSelect: "none",
		...n.style,
		...zj
	};
	return /* @__PURE__ */ jsx(Resizable, {
		className: "resizable-element",
		size: {
			width: n.width ?? 100,
			height: n.autoGrow ? "auto" : n.height ?? 100
		},
		maxHeight: j.isList ? Math.max(10, Pj - n.y) : void 0,
		onResizeStop: (_, E, A, j) => {
			let M = (n.width ?? 100) + j.width, N = (n.height ?? 100) + j.height;
			O(n.id, {
				width: M,
				height: N
			});
		},
		style: {
			position: "absolute",
			transform: `translate(${n.x ?? 0}px, ${n.y ?? 0}px) rotate(${n.rotation || 0}deg)`,
			height: n.autoGrow ? "auto" : void 0,
			display: Bj && !_ ? "none" : void 0,
			opacity: Bj && _ ? .4 : 1
		},
		enable: _ && !n.autoGrow ? void 0 : {
			top: !1,
			right: _,
			bottom: !1,
			left: _,
			topRight: !1,
			bottomRight: _,
			bottomLeft: !1,
			topLeft: !1
		},
		grid: j.gridSize > 0 ? [j.gridSize, j.gridSize] : void 0,
		children: /* @__PURE__ */ jsx(ElementContextMenu, {
			element: n,
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					width: "100%",
					height: "100%",
					position: "relative"
				},
				children: [/* @__PURE__ */ jsxs(p, {
					style: Kj,
					onMouseDown: Wj,
					onClick: Uj,
					onMouseEnter: (n) => {
						_ || (n.currentTarget.style.borderColor = "var(--gray-6)");
					},
					onMouseLeave: (n) => {
						_ || (n.currentTarget.style.borderColor = "transparent");
					},
					children: [
						n.type === "text" && /* @__PURE__ */ jsx(p$2, {
							style: {
								width: "100%",
								height: "100%"
							},
							children: Rj
						}),
						n.type === "image" && (Rj ? /* @__PURE__ */ jsx("img", {
							src: Rj,
							alt: "Element",
							style: {
								width: "100%",
								height: "100%",
								objectFit: n.style?.objectFit || "cover",
								display: "block",
								pointerEvents: "none"
							}
						}) : /* @__PURE__ */ jsx(p, {
							style: {
								width: "100%",
								height: "100%",
								backgroundColor: "#eee",
								display: "flex",
								alignItems: "center",
								justifyContent: "center"
							},
							children: /* @__PURE__ */ jsx(p$2, {
								size: "1",
								children: "Imagem Placeholder"
							})
						})),
						n.type === "box" && /* @__PURE__ */ jsx(p, { style: {
							width: "100%",
							height: "100%"
						} })
					]
				}), _ && /* @__PURE__ */ jsx(p, {
					style: {
						position: "absolute",
						top: -30,
						left: "50%",
						transform: "translateX(-50%)",
						width: 12,
						height: 12,
						backgroundColor: "var(--accent-9)",
						borderRadius: "50%",
						cursor: "crosshair",
						zIndex: 50,
						boxShadow: "0 0 0 2px white"
					},
					onMouseDown: Gj,
					children: /* @__PURE__ */ jsx(p, { style: {
						position: "absolute",
						top: 12,
						left: "50%",
						width: 2,
						height: 18,
						backgroundColor: "var(--accent-9)",
						transform: "translateX(-50%)"
					} })
				})]
			})
		})
	});
}), Canvas = () => {
	let { state: n, selectElement: _, setSelectedElements: E, addElement: O } = useEditor(), A = useRef(null), [j, M] = useState(null), N = useRef(!1), P = useRef({
		x: 0,
		y: 0
	}), z = useRef([]), B = (E) => {
		if (E.target !== A.current && E.target !== E.currentTarget) return;
		N.current = !0;
		let O = A.current?.getBoundingClientRect();
		O && (P.current = {
			x: E.clientX - O.left,
			y: E.clientY - O.top
		}, z.current = n.selectedElementIds, E.shiftKey || (_(null), z.current = []), window.addEventListener("mousemove", U), window.addEventListener("mouseup", G));
	}, U = useCallback((_) => {
		if (!N.current || !A.current) return;
		let O = A.current.getBoundingClientRect(), j = _.clientX - O.left, B = _.clientY - O.top, H = Math.min(P.current.x, j), U = Math.min(P.current.y, B), W = Math.abs(j - P.current.x), G = Math.abs(B - P.current.y);
		if (M({
			x: H,
			y: U,
			width: W,
			height: G
		}), W > 2 || G > 2) {
			let _ = [];
			n.elements.forEach((n) => {
				let E = n.x ?? 0, O = n.y ?? 0, A = n.width ?? 100, j = n.height ?? 100, M = E + A, N = O + j, P = H + W, z = U + G;
				E < P && M > H && O < z && N > U && _.push(n.id);
			}), E(Array.from(new Set([...z.current, ..._])));
		}
	}, [n.elements, E]), G = useCallback(() => {
		N.current = !1, M(null), window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", G);
	}, [U]);
	useEffect(() => () => {
		window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", G);
	}, [U, G]);
	let Z = (n) => {
		n.preventDefault(), n.dataTransfer.dropEffect = "copy";
	}, Mj = (n) => {
		n.preventDefault();
		let _ = n.dataTransfer.getData("application/x-editor-prop");
		if (_) {
			let E = n.currentTarget.getBoundingClientRect(), A = n.clientX - E.left, j = n.clientY - E.top;
			O({
				type: "text",
				content: `{{${_}}}`,
				x: A,
				y: j,
				width: 150,
				height: 30,
				dataBinding: _
			});
		}
	}, Nj = n.canvasHeight || 150;
	return /* @__PURE__ */ jsxs(p, {
		ref: A,
		onMouseDown: B,
		onDragOver: Z,
		onDrop: Mj,
		style: {
			width: "100%",
			height: "100%",
			position: "relative",
			overflow: "hidden",
			backgroundColor: "var(--color-background)",
			backgroundImage: "radial-gradient(var(--gray-5) 1px, transparent 1px)",
			backgroundSize: "20px 20px"
		},
		children: [
			j && /* @__PURE__ */ jsx("div", { style: {
				position: "absolute",
				left: j.x,
				top: j.y,
				width: j.width,
				height: j.height,
				backgroundColor: "rgba(0, 120, 255, 0.1)",
				border: "1px solid rgba(0, 120, 255, 0.5)",
				pointerEvents: "none",
				zIndex: 9999
			} }),
			n.isList && /* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					top: Nj,
					left: 0,
					right: 0,
					borderBottom: "2px dashed var(--accent-9)",
					pointerEvents: "none",
					zIndex: 10
				},
				children: /* @__PURE__ */ jsxs("div", {
					style: {
						position: "absolute",
						right: 10,
						bottom: 2,
						backgroundColor: "var(--accent-9)",
						color: "white",
						fontSize: "10px",
						padding: "2px 4px",
						borderRadius: "2px"
					},
					children: [
						"Fim do Item (",
						Nj,
						"px)"
					]
				})
			}),
			n.elements.length === 0 && /* @__PURE__ */ jsx(p$1, {
				align: "center",
				justify: "center",
				style: {
					height: "100%",
					color: "var(--gray-8)",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ jsx(p$2, { children: "Adicione elementos e arraste livremente" })
			}),
			n.elements.map((_) => /* @__PURE__ */ jsx(DraggableElement, {
				element: _,
				isSelected: n.selectedElementIds.includes(_.id)
			}, _.id))
		]
	});
}, EditorSettings = () => {
	let { state: n, updateListSettings: _, setCanvasHeight: E, setGridSize: O } = useEditor(), [A, j] = useState(!1), [M, N] = useState(""), [P, z] = useState("asc"), [B, H] = useState("bottom"), [U, G] = useState("down"), [Z, Mj] = useState("150"), [Nj, Pj] = useState(""), [Fj, Lj] = useState("0"), [Rj, zj] = useState("slideIn"), [Bj, Uj] = useState(.3), [Wj, Gj] = useState("ease-out");
	return useEffect(() => {
		if (A) {
			N(n.listSettings.sortProp || "__none__"), z(n.listSettings.sortOrder || "asc"), H(n.listSettings.newestPosition || "bottom"), G(n.listSettings.scrollDirection || "down"), Pj(n.listSettings.containerHeight ? String(n.listSettings.containerHeight) : ""), Mj(String(n.canvasHeight || 150)), Lj(String(n.gridSize || 0));
			let _ = n.listSettings.entryAnimation;
			zj(_?.type || "slideIn"), Uj(_?.duration || .3), Gj(_?.timingFunction || "ease-out");
		}
	}, [A]), useEffect(() => {
		if (!A) return;
		let _ = parseInt(Z, 10);
		!isNaN(_) && _ > 0 && n.canvasHeight !== _ && E(_);
		let j = parseInt(Fj, 10);
		!isNaN(j) && j >= 0 && n.gridSize !== j && O(j);
	}, [
		Z,
		Fj,
		A,
		E,
		O,
		n.canvasHeight,
		n.gridSize
	]), /* @__PURE__ */ jsxs(s$4, {
		open: A,
		onOpenChange: j,
		children: [/* @__PURE__ */ jsx(n$3, { children: /* @__PURE__ */ jsxs(o, {
			variant: "soft",
			color: "gray",
			style: {
				width: "100%",
				justifyContent: "center",
				cursor: "pointer"
			},
			children: [/* @__PURE__ */ jsx(GearIcon, {}), " Configurações"]
		}) }), /* @__PURE__ */ jsxs(p$8, {
			style: { maxWidth: 600 },
			children: [
				/* @__PURE__ */ jsx(g$2, { children: "Configurações do Editor" }),
				/* @__PURE__ */ jsx(m$3, {
					size: "2",
					mb: "4",
					children: "Configure o comportamento da lista."
				}),
				/* @__PURE__ */ jsx(p, {
					pt: "3",
					children: /* @__PURE__ */ jsxs(p$1, {
						direction: "column",
						gap: "3",
						children: [
							/* @__PURE__ */ jsx(p$2, {
								size: "2",
								weight: "bold",
								children: "Ordenação"
							}),
							/* @__PURE__ */ jsxs(p$1, {
								gap: "3",
								align: "center",
								children: [/* @__PURE__ */ jsxs(p, {
									flexGrow: "1",
									children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Propriedade para Ordenar (ex: data, id)"
									}), /* @__PURE__ */ jsxs("select", {
										value: M,
										onChange: (n) => N(n.target.value),
										style: {
											width: "100%",
											padding: "8px",
											borderRadius: "4px",
											border: "1px solid var(--gray-6)",
											backgroundColor: "var(--gray-2)",
											color: "var(--gray-12)",
											fontSize: "14px",
											outline: "none"
										},
										children: [/* @__PURE__ */ jsx("option", {
											value: "__none__",
											children: "(Nenhum)"
										}), n.availableProps.map((n) => /* @__PURE__ */ jsx("option", {
											value: n.dataName,
											children: n.name
										}, n.dataName))]
									})]
								}), /* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
									size: "1",
									mb: "1",
									as: "div",
									children: "Direção"
								}), /* @__PURE__ */ jsxs("select", {
									value: P,
									onChange: (n) => z(n.target.value),
									style: {
										width: "150px",
										padding: "8px",
										borderRadius: "4px",
										border: "1px solid var(--gray-6)",
										backgroundColor: "var(--gray-2)",
										color: "var(--gray-12)",
										fontSize: "14px",
										outline: "none"
									},
									children: [/* @__PURE__ */ jsx("option", {
										value: "asc",
										children: "Crescente (A-Z)"
									}), /* @__PURE__ */ jsx("option", {
										value: "desc",
										children: "Decrescente (Z-A)"
									})]
								})] })]
							}),
							/* @__PURE__ */ jsxs(p$1, {
								gap: "3",
								align: "center",
								children: [/* @__PURE__ */ jsxs(p, {
									flexGrow: "1",
									children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Posição do Recente"
									}), /* @__PURE__ */ jsxs("select", {
										value: B,
										onChange: (n) => H(n.target.value),
										style: {
											width: "100%",
											padding: "8px",
											borderRadius: "4px",
											border: "1px solid var(--gray-6)",
											backgroundColor: "var(--gray-2)",
											color: "var(--gray-12)",
											fontSize: "14px",
											outline: "none"
										},
										children: [/* @__PURE__ */ jsx("option", {
											value: "top",
											children: "Topo (Início)"
										}), /* @__PURE__ */ jsx("option", {
											value: "bottom",
											children: "Base (Final)"
										})]
									})]
								}), /* @__PURE__ */ jsxs(p, {
									flexGrow: "1",
									children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Comportamento de Rolagem"
									}), /* @__PURE__ */ jsxs("select", {
										value: U,
										onChange: (n) => G(n.target.value),
										style: {
											width: "100%",
											padding: "8px",
											borderRadius: "4px",
											border: "1px solid var(--gray-6)",
											backgroundColor: "var(--gray-2)",
											color: "var(--gray-12)",
											fontSize: "14px",
											outline: "none"
										},
										children: [/* @__PURE__ */ jsx("option", {
											value: "down",
											children: "Descer (Padrão)"
										}), /* @__PURE__ */ jsx("option", {
											value: "up",
											children: "Subir (Chat)"
										})]
									})]
								})]
							}),
							/* @__PURE__ */ jsx(p$2, {
								size: "2",
								weight: "bold",
								mt: "2",
								children: "Dimensões"
							}),
							/* @__PURE__ */ jsxs(p$1, {
								gap: "3",
								align: "center",
								children: [/* @__PURE__ */ jsxs(p, {
									flexGrow: "1",
									children: [
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											mb: "1",
											as: "div",
											children: "Altura do Item (Template) (px)"
										}),
										/* @__PURE__ */ jsx(u$1, {
											type: "number",
											min: "10",
											value: Z,
											onChange: (n) => Mj(n.target.value)
										}),
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											color: "gray",
											children: "Altura de cada item individual na lista."
										})
									]
								}), /* @__PURE__ */ jsxs(p, {
									flexGrow: "1",
									children: [
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											mb: "1",
											as: "div",
											children: "Altura da Lista (Container) (px)"
										}),
										/* @__PURE__ */ jsx(u$1, {
											type: "number",
											min: "0",
											placeholder: "Auto (100%)",
											value: Nj,
											onChange: (n) => Pj(n.target.value)
										}),
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											color: "gray",
											children: "Altura total da lista. Se exceder, rola. Vazio = 100%."
										})
									]
								})]
							}),
							/* @__PURE__ */ jsx(p$2, {
								size: "2",
								weight: "bold",
								mt: "2",
								children: "Animação de Entrada na Lista"
							}),
							/* @__PURE__ */ jsxs(o$3, {
								columns: "3",
								gap: "3",
								children: [
									/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Efeito"
									}), /* @__PURE__ */ jsxs("select", {
										value: Rj,
										onChange: (n) => zj(n.target.value),
										style: {
											width: "100%",
											padding: "6px",
											borderRadius: "4px",
											border: "1px solid var(--gray-6)",
											backgroundColor: "var(--gray-2)",
											color: "var(--gray-12)",
											fontSize: "14px"
										},
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "none",
												children: "Nenhum"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "slideIn",
												children: "Slide (Padrão)"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "fadeIn",
												children: "Fade In"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "slideInLeft",
												children: "Slide (Esq)"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "slideInRight",
												children: "Slide (Dir)"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "zoomIn",
												children: "Zoom In"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "bounceIn",
												children: "Bounce"
											})
										]
									})] }),
									/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Duração (s)"
									}), /* @__PURE__ */ jsx(u$1, {
										type: "number",
										step: "0.1",
										min: "0.1",
										value: Bj,
										onChange: (n) => Uj(parseFloat(n.target.value) || .3)
									})] }),
									/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Curva (Easing)"
									}), /* @__PURE__ */ jsxs("select", {
										value: Wj,
										onChange: (n) => Gj(n.target.value),
										style: {
											width: "100%",
											padding: "6px",
											borderRadius: "4px",
											border: "1px solid var(--gray-6)",
											backgroundColor: "var(--gray-2)",
											color: "var(--gray-12)",
											fontSize: "14px"
										},
										children: [
											/* @__PURE__ */ jsx("option", {
												value: "ease",
												children: "Ease"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "ease-out",
												children: "Ease Out"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "linear",
												children: "Linear"
											}),
											/* @__PURE__ */ jsx("option", {
												value: "bounce",
												children: "Bounce"
											})
										]
									})] })
								]
							}),
							/* @__PURE__ */ jsx(p$2, {
								size: "1",
								color: "gray",
								children: "Essa propriedade será usada para ordenar os itens no modo lista."
							}),
							/* @__PURE__ */ jsxs(p, {
								mt: "2",
								children: [/* @__PURE__ */ jsx(p$2, {
									size: "2",
									weight: "bold",
									children: "Grid Snapping (Travar)"
								}), /* @__PURE__ */ jsx(p$1, {
									gap: "3",
									align: "center",
									mt: "2",
									children: /* @__PURE__ */ jsxs(p, {
										flexGrow: "1",
										children: [/* @__PURE__ */ jsx(p$2, {
											size: "1",
											mb: "1",
											as: "div",
											children: "Tamanho do Grid (px) - 0 para desativar"
										}), /* @__PURE__ */ jsx(u$1, {
											type: "number",
											value: Fj,
											onChange: (n) => Lj(n.target.value),
											placeholder: "0"
										})]
									})
								})]
							})
						]
					})
				}),
				/* @__PURE__ */ jsxs(p$1, {
					gap: "3",
					mt: "4",
					justify: "end",
					children: [/* @__PURE__ */ jsx(D$2, { children: /* @__PURE__ */ jsx(o, {
						variant: "soft",
						color: "gray",
						children: "Cancelar"
					}) }), /* @__PURE__ */ jsx(D$2, { children: /* @__PURE__ */ jsx(o, {
						onClick: () => {
							let n = parseInt(Nj, 10), E = {
								type: Rj,
								duration: Number(Bj),
								delay: 0,
								timingFunction: Wj
							};
							_({
								sortProp: M === "__none__" ? "" : M,
								sortOrder: P,
								newestPosition: B,
								scrollDirection: U,
								containerHeight: !isNaN(n) && n > 0 ? n : void 0,
								entryAnimation: E
							}), j(!1);
						},
						children: "Salvar Alterações"
					}) })]
				})
			]
		})]
	});
};
var LayoutGroupContext = createContext({});
function useConstant(n) {
	let _ = useRef(null);
	return _.current === null && (_.current = n()), _.current;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect, PresenceContext = /* @__PURE__ */ createContext(null);
function addUniqueItem(n, _) {
	n.indexOf(_) === -1 && n.push(_);
}
function removeItem(n, _) {
	let E = n.indexOf(_);
	E > -1 && n.splice(E, 1);
}
var clamp = (n, _, E) => E > _ ? _ : E < n ? n : E;
function formatErrorMessage(n, _) {
	return _ ? `${n}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${_}` : n;
}
var warning = () => {}, invariant = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (warning = (n, _, E) => {
	!n && typeof console < "u" && console.warn(formatErrorMessage(_, E));
}, invariant = (n, _, E) => {
	if (!n) throw Error(formatErrorMessage(_, E));
});
var MotionGlobalConfig = {}, isNumericalString = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function isObject(n) {
	return typeof n == "object" && !!n;
}
var isZeroValueString = (n) => /^0[^.\s]+$/u.test(n);
/* @__NO_SIDE_EFFECTS__ */
function memo$1(n) {
	let _;
	return () => (_ === void 0 && (_ = n()), _);
}
var noop = /* @__NO_SIDE_EFFECTS__ */ (n) => n, combineFunctions = (n, _) => (E) => _(n(E)), pipe = (...n) => n.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (n, _, E) => {
	let O = _ - n;
	return O === 0 ? 1 : (E - n) / O;
}, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(n) {
		return addUniqueItem(this.subscriptions, n), () => removeItem(this.subscriptions, n);
	}
	notify(n, _, E) {
		let O = this.subscriptions.length;
		if (O) if (O === 1) this.subscriptions[0](n, _, E);
		else for (let A = 0; A < O; A++) {
			let O = this.subscriptions[A];
			O && O(n, _, E);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3;
function velocityPerSecond(n, _) {
	return _ ? n * (1e3 / _) : 0;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(n, _, E) {
	n || warned.has(_) || (console.warn(formatErrorMessage(_, E)), warned.add(_));
}
var calcBezier = (n, _, E) => (((1 - 3 * E + 3 * _) * n + (3 * E - 6 * _)) * n + 3 * _) * n, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(n, _, E, O, A) {
	let j, M, N = 0;
	do
		M = _ + (E - _) / 2, j = calcBezier(M, O, A) - n, j > 0 ? E = M : _ = M;
	while (Math.abs(j) > subdivisionPrecision && ++N < subdivisionMaxIterations);
	return M;
}
function cubicBezier(n, _, E, O) {
	if (n === _ && E === O) return noop;
	let A = (_) => binarySubdivide(_, 0, 1, n, E);
	return (n) => n === 0 || n === 1 ? n : calcBezier(A(n), _, O);
}
var mirrorEasing = (n) => (_) => _ <= .5 ? n(2 * _) / 2 : (2 - n(2 * (1 - _))) / 2, reverseEasing = (n) => (_) => 1 - n(1 - _), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (n) => (n *= 2) < 1 ? .5 * backIn(n) : .5 * (2 - 2 ** (-10 * (n - 1))), circIn = (n) => 1 - Math.sin(Math.acos(n)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (n) => Array.isArray(n) && typeof n[0] != "number", isBezierDefinition = (n) => Array.isArray(n) && typeof n[0] == "number", easingLookup = {
	linear: noop,
	easeIn,
	easeInOut,
	easeOut,
	circIn,
	circInOut,
	circOut,
	backIn,
	backInOut,
	backOut,
	anticipate
}, isValidEasing = (n) => typeof n == "string", easingDefinitionToFunction = (n) => {
	if (isBezierDefinition(n)) {
		invariant(n.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [_, E, O, A] = n;
		return cubicBezier(_, E, O, A);
	} else if (isValidEasing(n)) return invariant(easingLookup[n] !== void 0, `Invalid easing type '${n}'`, "invalid-easing-type"), easingLookup[n];
	return n;
}, stepsOrder = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
], statsBuffer = {
	value: null,
	addProjectionMetrics: null
};
function createRenderStep(n, _) {
	let E = /* @__PURE__ */ new Set(), O = /* @__PURE__ */ new Set(), A = !1, j = !1, M = /* @__PURE__ */ new WeakSet(), N = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, P = 0;
	function z(_) {
		M.has(_) && (B.schedule(_), n()), P++, _(N);
	}
	let B = {
		schedule: (n, _ = !1, j = !1) => {
			let N = j && A ? E : O;
			return _ && M.add(n), N.has(n) || N.add(n), n;
		},
		cancel: (n) => {
			O.delete(n), M.delete(n);
		},
		process: (n) => {
			if (N = n, A) {
				j = !0;
				return;
			}
			A = !0, [E, O] = [O, E], E.forEach(z), _ && statsBuffer.value && statsBuffer.value.frameloop[_].push(P), P = 0, E.clear(), A = !1, j && (j = !1, B.process(n));
		}
	};
	return B;
}
var maxElapsed = 40;
function createRenderBatcher(n, _) {
	let E = !1, O = !0, A = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, j = () => E = !0, M = stepsOrder.reduce((n, E) => (n[E] = createRenderStep(j, _ ? E : void 0), n), {}), { setup: N, read: P, resolveKeyframes: z, preUpdate: B, update: H, preRender: U, render: W, postRender: G } = M, Z = () => {
		let j = MotionGlobalConfig.useManualTiming ? A.timestamp : performance.now();
		E = !1, MotionGlobalConfig.useManualTiming || (A.delta = O ? 1e3 / 60 : Math.max(Math.min(j - A.timestamp, maxElapsed), 1)), A.timestamp = j, A.isProcessing = !0, N.process(A), P.process(A), z.process(A), B.process(A), H.process(A), U.process(A), W.process(A), G.process(A), A.isProcessing = !1, E && _ && (O = !1, n(Z));
	}, Mj = () => {
		E = !0, O = !0, A.isProcessing || n(Z);
	};
	return {
		schedule: stepsOrder.reduce((n, _) => {
			let O = M[_];
			return n[_] = (n, _ = !1, A = !1) => (E || Mj(), O.schedule(n, _, A)), n;
		}, {}),
		cancel: (n) => {
			for (let _ = 0; _ < stepsOrder.length; _++) M[stepsOrder[_]].cancel(n);
		},
		state: A,
		steps: M
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0), now;
function clearTime() {
	now = void 0;
}
var time = {
	now: () => (now === void 0 && time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now()), now),
	set: (n) => {
		now = n, queueMicrotask(clearTime);
	}
}, activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, checkStringStartsWith = (n) => (_) => typeof _ == "string" && _.startsWith(n), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (n) => startsAsVariableToken(n) ? singleCssVariableRegex.test(n.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(n) {
	return typeof n == "string" ? n.split("/*")[0].includes("var(--") : !1;
}
var number = {
	test: (n) => typeof n == "number",
	parse: parseFloat,
	transform: (n) => n
}, alpha = {
	...number,
	transform: (n) => clamp(0, 1, n)
}, scale = {
	...number,
	default: 1
}, sanitize = (n) => Math.round(n * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(n) {
	return n == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (n, _) => (E) => !!(typeof E == "string" && singleColorRegex.test(E) && E.startsWith(n) || _ && !isNullish(E) && Object.prototype.hasOwnProperty.call(E, _)), splitColor = (n, _, E) => (O) => {
	if (typeof O != "string") return O;
	let [A, j, M, N] = O.match(floatRegex);
	return {
		[n]: parseFloat(A),
		[_]: parseFloat(j),
		[E]: parseFloat(M),
		alpha: N === void 0 ? 1 : parseFloat(N)
	};
}, clampRgbUnit = (n) => clamp(0, 255, n), rgbUnit = {
	...number,
	transform: (n) => Math.round(clampRgbUnit(n))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: n, green: _, blue: E, alpha: O = 1 }) => "rgba(" + rgbUnit.transform(n) + ", " + rgbUnit.transform(_) + ", " + rgbUnit.transform(E) + ", " + sanitize(alpha.transform(O)) + ")"
};
function parseHex(n) {
	let _ = "", E = "", O = "", A = "";
	return n.length > 5 ? (_ = n.substring(1, 3), E = n.substring(3, 5), O = n.substring(5, 7), A = n.substring(7, 9)) : (_ = n.substring(1, 2), E = n.substring(2, 3), O = n.substring(3, 4), A = n.substring(4, 5), _ += _, E += E, O += O, A += A), {
		red: parseInt(_, 16),
		green: parseInt(E, 16),
		blue: parseInt(O, 16),
		alpha: A ? parseInt(A, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, createUnitType = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
	test: (_) => typeof _ == "string" && _.endsWith(n) && _.split(" ").length === 1,
	parse: parseFloat,
	transform: (_) => `${_}${n}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (n) => percent.parse(n) / 100,
	transform: (n) => percent.transform(n * 100)
}))(), hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: n, saturation: _, lightness: E, alpha: O = 1 }) => "hsla(" + Math.round(n) + ", " + percent.transform(sanitize(_)) + ", " + percent.transform(sanitize(E)) + ", " + sanitize(alpha.transform(O)) + ")"
}, color = {
	test: (n) => rgba.test(n) || hex.test(n) || hsla.test(n),
	parse: (n) => rgba.test(n) ? rgba.parse(n) : hsla.test(n) ? hsla.parse(n) : hex.parse(n),
	transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? rgba.transform(n) : hsla.transform(n),
	getAnimatableNone: (n) => {
		let _ = color.parse(n);
		return _.alpha = 0, color.transform(_);
	}
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(n) {
	return isNaN(n) && typeof n == "string" && (n.match(floatRegex)?.length || 0) + (n.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(n) {
	let _ = n.toString(), E = [], O = {
		color: [],
		number: [],
		var: []
	}, A = [], j = 0;
	return {
		values: E,
		split: _.replace(complexRegex, (n) => (color.test(n) ? (O.color.push(j), A.push(COLOR_TOKEN), E.push(color.parse(n))) : n.startsWith(VAR_FUNCTION_TOKEN) ? (O.var.push(j), A.push(VAR_TOKEN), E.push(n)) : (O.number.push(j), A.push(NUMBER_TOKEN), E.push(parseFloat(n))), ++j, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: O,
		types: A
	};
}
function parseComplexValue(n) {
	return analyseComplexValue(n).values;
}
function createTransformer(n) {
	let { split: _, types: E } = analyseComplexValue(n), O = _.length;
	return (n) => {
		let A = "";
		for (let j = 0; j < O; j++) if (A += _[j], n[j] !== void 0) {
			let _ = E[j];
			_ === NUMBER_TOKEN ? A += sanitize(n[j]) : _ === COLOR_TOKEN ? A += color.transform(n[j]) : A += n[j];
		}
		return A;
	};
}
var convertNumbersToZero = (n) => typeof n == "number" ? 0 : color.test(n) ? color.getAnimatableNone(n) : n;
function getAnimatableNone$1(n) {
	let _ = parseComplexValue(n);
	return createTransformer(n)(_.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
function hueToRgb(n, _, E) {
	return E < 0 && (E += 1), E > 1 && --E, E < 1 / 6 ? n + (_ - n) * 6 * E : E < 1 / 2 ? _ : E < 2 / 3 ? n + (_ - n) * (2 / 3 - E) * 6 : n;
}
function hslaToRgba({ hue: n, saturation: _, lightness: E, alpha: O }) {
	n /= 360, _ /= 100, E /= 100;
	let A = 0, j = 0, M = 0;
	if (!_) A = j = M = E;
	else {
		let O = E < .5 ? E * (1 + _) : E + _ - E * _, N = 2 * E - O;
		A = hueToRgb(N, O, n + 1 / 3), j = hueToRgb(N, O, n), M = hueToRgb(N, O, n - 1 / 3);
	}
	return {
		red: Math.round(A * 255),
		green: Math.round(j * 255),
		blue: Math.round(M * 255),
		alpha: O
	};
}
function mixImmediate(n, _) {
	return (E) => E > 0 ? _ : n;
}
var mixNumber = (n, _, E) => n + (_ - n) * E, mixLinearColor = (n, _, E) => {
	let O = n * n, A = E * (_ * _ - O) + O;
	return A < 0 ? 0 : Math.sqrt(A);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (n) => colorTypes.find((_) => _.test(n));
function asRGBA(n) {
	let _ = getColorType(n);
	if (warning(!!_, `'${n}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !_) return !1;
	let E = _.parse(n);
	return _ === hsla && (E = hslaToRgba(E)), E;
}
var mixColor = (n, _) => {
	let E = asRGBA(n), O = asRGBA(_);
	if (!E || !O) return mixImmediate(n, _);
	let A = { ...E };
	return (n) => (A.red = mixLinearColor(E.red, O.red, n), A.green = mixLinearColor(E.green, O.green, n), A.blue = mixLinearColor(E.blue, O.blue, n), A.alpha = mixNumber(E.alpha, O.alpha, n), rgba.transform(A));
}, invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(n, _) {
	return invisibleValues.has(n) ? (E) => E <= 0 ? n : _ : (E) => E >= 1 ? _ : n;
}
function mixNumber$1(n, _) {
	return (E) => mixNumber(n, _, E);
}
function getMixer(n) {
	return typeof n == "number" ? mixNumber$1 : typeof n == "string" ? isCSSVariableToken(n) ? mixImmediate : color.test(n) ? mixColor : mixComplex : Array.isArray(n) ? mixArray : typeof n == "object" ? color.test(n) ? mixColor : mixObject : mixImmediate;
}
function mixArray(n, _) {
	let E = [...n], O = E.length, A = n.map((n, E) => getMixer(n)(n, _[E]));
	return (n) => {
		for (let _ = 0; _ < O; _++) E[_] = A[_](n);
		return E;
	};
}
function mixObject(n, _) {
	let E = {
		...n,
		..._
	}, O = {};
	for (let A in E) n[A] !== void 0 && _[A] !== void 0 && (O[A] = getMixer(n[A])(n[A], _[A]));
	return (n) => {
		for (let _ in O) E[_] = O[_](n);
		return E;
	};
}
function matchOrder(n, _) {
	let E = [], O = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let A = 0; A < _.values.length; A++) {
		let j = _.types[A], M = n.indexes[j][O[j]];
		E[A] = n.values[M] ?? 0, O[j]++;
	}
	return E;
}
var mixComplex = (n, _) => {
	let E = complex.createTransformer(_), O = analyseComplexValue(n), A = analyseComplexValue(_);
	return O.indexes.var.length === A.indexes.var.length && O.indexes.color.length === A.indexes.color.length && O.indexes.number.length >= A.indexes.number.length ? invisibleValues.has(n) && !A.values.length || invisibleValues.has(_) && !O.values.length ? mixVisibility(n, _) : pipe(mixArray(matchOrder(O, A), A.values), E) : (warning(!0, `Complex values '${n}' and '${_}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(n, _));
};
function mix(n, _, E) {
	return typeof n == "number" && typeof _ == "number" && typeof E == "number" ? mixNumber(n, _, E) : getMixer(n)(n, _);
}
var frameloopDriver = (n) => {
	let _ = ({ timestamp: _ }) => n(_);
	return {
		start: (n = !0) => frame.update(_, n),
		stop: () => cancelFrame(_),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generateLinearEasing = (n, _, E = 10) => {
	let O = "", A = Math.max(Math.round(_ / E), 2);
	for (let _ = 0; _ < A; _++) O += Math.round(n(_ / (A - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${O.substring(0, O.length - 2)})`;
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(n) {
	let _ = 0, E = n.next(_);
	for (; !E.done && _ < 2e4;) _ += 50, E = n.next(_);
	return _ >= 2e4 ? Infinity : _;
}
function createGeneratorEasing(n, _ = 100, E) {
	let O = E({
		...n,
		keyframes: [0, _]
	}), A = Math.min(calcGeneratorDuration(O), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (n) => O.next(A * n).value / _,
		duration: /* @__PURE__ */ millisecondsToSeconds(A)
	};
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(n, _, E) {
	let O = Math.max(_ - velocitySampleDuration, 0);
	return velocityPerSecond(E - n(O), _ - O);
}
var springDefaults = {
	stiffness: 100,
	damping: 10,
	mass: 1,
	velocity: 0,
	duration: 800,
	bounce: .3,
	visualDuration: .3,
	restSpeed: {
		granular: .01,
		default: 2
	},
	restDelta: {
		granular: .005,
		default: .5
	},
	minDuration: .01,
	maxDuration: 10,
	minDamping: .05,
	maxDamping: 1
}, safeMin = .001;
function findSpring({ duration: n = springDefaults.duration, bounce: _ = springDefaults.bounce, velocity: E = springDefaults.velocity, mass: O = springDefaults.mass }) {
	let A, j;
	warning(n <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let M = 1 - _;
	M = clamp(springDefaults.minDamping, springDefaults.maxDamping, M), n = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(n)), M < 1 ? (A = (_) => {
		let O = _ * M, A = O * n, j = O - E, N = calcAngularFreq(_, M), P = Math.exp(-A);
		return safeMin - j / N * P;
	}, j = (_) => {
		let O = _ * M * n, j = O * E + E, N = M ** 2 * _ ** 2 * n, P = Math.exp(-O), z = calcAngularFreq(_ ** 2, M);
		return (-A(_) + safeMin > 0 ? -1 : 1) * ((j - N) * P) / z;
	}) : (A = (_) => {
		let O = Math.exp(-_ * n), A = (_ - E) * n + 1;
		return -safeMin + O * A;
	}, j = (_) => Math.exp(-_ * n) * ((E - _) * (n * n)));
	let N = 5 / n, P = approximateRoot(A, j, N);
	if (n = /* @__PURE__ */ secondsToMilliseconds(n), isNaN(P)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: n
	};
	{
		let _ = P ** 2 * O;
		return {
			stiffness: _,
			damping: M * 2 * Math.sqrt(O * _),
			duration: n
		};
	}
}
var rootIterations = 12;
function approximateRoot(n, _, E) {
	let O = E;
	for (let E = 1; E < rootIterations; E++) O -= n(O) / _(O);
	return O;
}
function calcAngularFreq(n, _) {
	return n * Math.sqrt(1 - _ * _);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(n, _) {
	return _.some((_) => n[_] !== void 0);
}
function getSpringOptions(n) {
	let _ = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...n
	};
	if (!isSpringType(n, physicsKeys) && isSpringType(n, durationKeys)) if (n.visualDuration) {
		let E = n.visualDuration, O = 2 * Math.PI / (E * 1.2), A = O * O, j = 2 * clamp(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(A);
		_ = {
			..._,
			mass: springDefaults.mass,
			stiffness: A,
			damping: j
		};
	} else {
		let E = findSpring(n);
		_ = {
			..._,
			...E,
			mass: springDefaults.mass
		}, _.isResolvedFromDuration = !0;
	}
	return _;
}
function spring(n = springDefaults.visualDuration, _ = springDefaults.bounce) {
	let E = typeof n == "object" ? n : {
		visualDuration: n,
		keyframes: [0, 1],
		bounce: _
	}, { restSpeed: O, restDelta: A } = E, j = E.keyframes[0], M = E.keyframes[E.keyframes.length - 1], N = {
		done: !1,
		value: j
	}, { stiffness: P, damping: z, mass: B, duration: H, velocity: U, isResolvedFromDuration: W } = getSpringOptions({
		...E,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(E.velocity || 0)
	}), G = U || 0, Z = z / (2 * Math.sqrt(P * B)), Mj = M - j, Nj = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(P / B)), Pj = Math.abs(Mj) < 5;
	O ||= Pj ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, A ||= Pj ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let Fj;
	if (Z < 1) {
		let n = calcAngularFreq(Nj, Z);
		Fj = (_) => M - Math.exp(-Z * Nj * _) * ((G + Z * Nj * Mj) / n * Math.sin(n * _) + Mj * Math.cos(n * _));
	} else if (Z === 1) Fj = (n) => M - Math.exp(-Nj * n) * (Mj + (G + Nj * Mj) * n);
	else {
		let n = Nj * Math.sqrt(Z * Z - 1);
		Fj = (_) => {
			let E = Math.exp(-Z * Nj * _), O = Math.min(n * _, 300);
			return M - E * ((G + Z * Nj * Mj) * Math.sinh(O) + n * Mj * Math.cosh(O)) / n;
		};
	}
	let Ij = {
		calculatedDuration: W && H || null,
		next: (n) => {
			let _ = Fj(n);
			if (W) N.done = n >= H;
			else {
				let E = n === 0 ? G : 0;
				Z < 1 && (E = n === 0 ? /* @__PURE__ */ secondsToMilliseconds(G) : calcGeneratorVelocity(Fj, n, _));
				let j = Math.abs(E) <= O, P = Math.abs(M - _) <= A;
				N.done = j && P;
			}
			return N.value = N.done ? M : _, N;
		},
		toString: () => {
			let n = Math.min(calcGeneratorDuration(Ij), maxGeneratorDuration), _ = generateLinearEasing((_) => Ij.next(n * _).value, n, 30);
			return n + "ms " + _;
		},
		toTransition: () => {}
	};
	return Ij;
}
spring.applyToOptions = (n) => {
	let _ = createGeneratorEasing(n, 100, spring);
	return n.ease = _.ease, n.duration = /* @__PURE__ */ secondsToMilliseconds(_.duration), n.type = "keyframes", n;
};
function inertia({ keyframes: n, velocity: _ = 0, power: E = .8, timeConstant: O = 325, bounceDamping: A = 10, bounceStiffness: j = 500, modifyTarget: M, min: N, max: P, restDelta: z = .5, restSpeed: B }) {
	let H = n[0], U = {
		done: !1,
		value: H
	}, W = (n) => N !== void 0 && n < N || P !== void 0 && n > P, G = (n) => N === void 0 ? P : P === void 0 || Math.abs(N - n) < Math.abs(P - n) ? N : P, Z = E * _, Mj = H + Z, Nj = M === void 0 ? Mj : M(Mj);
	Nj !== Mj && (Z = Nj - H);
	let Pj = (n) => -Z * Math.exp(-n / O), Fj = (n) => Nj + Pj(n), Ij = (n) => {
		let _ = Pj(n), E = Fj(n);
		U.done = Math.abs(_) <= z, U.value = U.done ? Nj : E;
	}, Lj, Rj, zj = (n) => {
		W(U.value) && (Lj = n, Rj = spring({
			keyframes: [U.value, G(U.value)],
			velocity: calcGeneratorVelocity(Fj, n, U.value),
			damping: A,
			stiffness: j,
			restDelta: z,
			restSpeed: B
		}));
	};
	return zj(0), {
		calculatedDuration: null,
		next: (n) => {
			let _ = !1;
			return !Rj && Lj === void 0 && (_ = !0, Ij(n), zj(n)), Lj !== void 0 && n >= Lj ? Rj.next(n - Lj) : (!_ && Ij(n), U);
		}
	};
}
function createMixers(n, _, E) {
	let O = [], A = E || MotionGlobalConfig.mix || mix, j = n.length - 1;
	for (let E = 0; E < j; E++) {
		let j = A(n[E], n[E + 1]);
		_ && (j = pipe(Array.isArray(_) ? _[E] || noop : _, j)), O.push(j);
	}
	return O;
}
function interpolate(n, _, { clamp: E = !0, ease: O, mixer: A } = {}) {
	let j = n.length;
	if (invariant(j === _.length, "Both input and output ranges must be the same length", "range-length"), j === 1) return () => _[0];
	if (j === 2 && _[0] === _[1]) return () => _[1];
	let M = n[0] === n[1];
	n[0] > n[j - 1] && (n = [...n].reverse(), _ = [..._].reverse());
	let N = createMixers(_, O, A), P = N.length, z = (E) => {
		if (M && E < n[0]) return _[0];
		let O = 0;
		if (P > 1) for (; O < n.length - 2 && !(E < n[O + 1]); O++);
		let A = /* @__PURE__ */ progress(n[O], n[O + 1], E);
		return N[O](A);
	};
	return E ? (_) => z(clamp(n[0], n[j - 1], _)) : z;
}
function fillOffset(n, _) {
	let E = n[n.length - 1];
	for (let O = 1; O <= _; O++) {
		let A = /* @__PURE__ */ progress(0, _, O);
		n.push(mixNumber(E, 1, A));
	}
}
function defaultOffset(n) {
	let _ = [0];
	return fillOffset(_, n.length - 1), _;
}
function convertOffsetToTimes(n, _) {
	return n.map((n) => n * _);
}
function defaultEasing(n, _) {
	return n.map(() => _ || easeInOut).splice(0, n.length - 1);
}
function keyframes({ duration: n = 300, keyframes: _, times: E, ease: O = "easeInOut" }) {
	let A = isEasingArray(O) ? O.map(easingDefinitionToFunction) : easingDefinitionToFunction(O), j = {
		done: !1,
		value: _[0]
	}, M = interpolate(convertOffsetToTimes(E && E.length === _.length ? E : defaultOffset(_), n), _, { ease: Array.isArray(A) ? A : defaultEasing(_, A) });
	return {
		calculatedDuration: n,
		next: (_) => (j.value = M(_), j.done = _ >= n, j)
	};
}
var isNotNull$1 = (n) => n !== null;
function getFinalKeyframe$1(n, { repeat: _, repeatType: E = "loop" }, O, A = 1) {
	let j = n.filter(isNotNull$1), M = A < 0 || _ && E !== "loop" && _ % 2 == 1 ? 0 : j.length - 1;
	return !M || O === void 0 ? j[M] : O;
}
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(n) {
	typeof n.type == "string" && (n.type = transitionTypeMap[n.type]);
}
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((n) => {
			this.resolve = n;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(n, _) {
		return this.finished.then(n, _);
	}
}, percentToProgress = (n) => n / 100, JSAnimation = class extends WithPromise {
	constructor(n) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: n } = this.options;
			n && n.updatedAt !== time.now() && this.tick(time.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, activeAnimations.mainThread++, this.options = n, this.initAnimation(), this.play(), n.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: n } = this;
		replaceTransitionType(n);
		let { type: _ = keyframes, repeat: E = 0, repeatDelay: O = 0, repeatType: A, velocity: j = 0 } = n, { keyframes: M } = n, N = _ || keyframes;
		process.env.NODE_ENV !== "production" && N !== keyframes && invariant(M.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${M}`, "spring-two-frames"), N !== keyframes && typeof M[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(M[0], M[1])), M = [0, 100]);
		let P = N({
			...n,
			keyframes: M
		});
		A === "mirror" && (this.mirroredGenerator = N({
			...n,
			keyframes: [...M].reverse(),
			velocity: -j
		})), P.calculatedDuration === null && (P.calculatedDuration = calcGeneratorDuration(P));
		let { calculatedDuration: z } = P;
		this.calculatedDuration = z, this.resolvedDuration = z + O, this.totalDuration = this.resolvedDuration * (E + 1) - O, this.generator = P;
	}
	updateTime(n) {
		let _ = Math.round(n - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = _ : this.currentTime = this.holdTime;
	}
	tick(n, _ = !1) {
		let { generator: E, totalDuration: O, mixKeyframes: A, mirroredGenerator: j, resolvedDuration: M, calculatedDuration: N } = this;
		if (this.startTime === null) return E.next(0);
		let { delay: P = 0, keyframes: z, repeat: B, repeatType: H, repeatDelay: U, type: W, onUpdate: G, finalKeyframe: Z } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - O / this.speed, this.startTime)), _ ? this.currentTime = n : this.updateTime(n);
		let Mj = this.currentTime - P * (this.playbackSpeed >= 0 ? 1 : -1), Nj = this.playbackSpeed >= 0 ? Mj < 0 : Mj > O;
		this.currentTime = Math.max(Mj, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = O);
		let Pj = this.currentTime, Fj = E;
		if (B) {
			let n = Math.min(this.currentTime, O) / M, _ = Math.floor(n), E = n % 1;
			!E && n >= 1 && (E = 1), E === 1 && _--, _ = Math.min(_, B + 1), _ % 2 && (H === "reverse" ? (E = 1 - E, U && (E -= U / M)) : H === "mirror" && (Fj = j)), Pj = clamp(0, 1, E) * M;
		}
		let Ij = Nj ? {
			done: !1,
			value: z[0]
		} : Fj.next(Pj);
		A && (Ij.value = A(Ij.value));
		let { done: Lj } = Ij;
		!Nj && N !== null && (Lj = this.playbackSpeed >= 0 ? this.currentTime >= O : this.currentTime <= 0);
		let Rj = this.holdTime === null && (this.state === "finished" || this.state === "running" && Lj);
		return Rj && W !== inertia && (Ij.value = getFinalKeyframe$1(z, this.options, Z, this.speed)), G && G(Ij.value), Rj && this.finish(), Ij;
	}
	then(n, _) {
		return this.finished.then(n, _);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: n = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(n);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(n) {
		n = /* @__PURE__ */ secondsToMilliseconds(n), this.currentTime = n, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = n : this.driver && (this.startTime = this.driver.now() - n / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(n) {
		this.updateTime(time.now());
		let _ = this.playbackSpeed !== n;
		this.playbackSpeed = n, _ && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: n = frameloopDriver, startTime: _ } = this.options;
		this.driver ||= n((n) => this.tick(n)), this.options.onPlay?.();
		let E = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = E) : this.holdTime === null ? this.startTime ||= _ ?? E : this.startTime = E - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(time.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, activeAnimations.mainThread--;
	}
	stopDriver() {
		this.driver &&= (this.driver.stop(), void 0);
	}
	sample(n) {
		return this.startTime = 0, this.tick(n, !0);
	}
	attachTimeline(n) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), n.observe(this);
	}
};
function fillWildcards(n) {
	for (let _ = 1; _ < n.length; _++) n[_] ?? (n[_] = n[_ - 1]);
}
var radToDeg = (n) => n * 180 / Math.PI, rotate = (n) => rebaseAngle(radToDeg(Math.atan2(n[1], n[0]))), matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (n) => radToDeg(Math.atan(n[1])),
	skewY: (n) => radToDeg(Math.atan(n[2])),
	skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2
}, rebaseAngle = (n) => (n %= 360, n < 0 && (n += 360), n), rotateZ = rotate, scaleX = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]), scaleY = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]), matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (n) => (scaleX(n) + scaleY(n)) / 2,
	rotateX: (n) => rebaseAngle(radToDeg(Math.atan2(n[6], n[5]))),
	rotateY: (n) => rebaseAngle(radToDeg(Math.atan2(-n[2], n[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (n) => radToDeg(Math.atan(n[4])),
	skewY: (n) => radToDeg(Math.atan(n[1])),
	skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2
};
function defaultTransformValue(n) {
	return n.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(n, _) {
	if (!n || n === "none") return defaultTransformValue(_);
	let E = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), O, A;
	if (E) O = matrix3dParsers, A = E;
	else {
		let _ = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		O = matrix2dParsers, A = _;
	}
	if (!A) return defaultTransformValue(_);
	let j = O[_], M = A[1].split(",").map(convertTransformToNumber);
	return typeof j == "function" ? j(M) : M[j];
}
var readTransformValue = (n, _) => {
	let { transform: E = "none" } = getComputedStyle(n);
	return parseValueFromTransform(E, _);
};
function convertTransformToNumber(n) {
	return parseFloat(n.trim());
}
var transformPropOrder = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))(), isNumOrPxType = (n) => n === number || n === px, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((n) => !transformKeys.has(n));
function removeNonTranslationalTransform(n) {
	let _ = [];
	return nonTranslationalTransformKeys.forEach((E) => {
		let O = n.getValue(E);
		O !== void 0 && (_.push([E, O.get()]), O.set(E.startsWith("scale") ? 1 : 0));
	}), _;
}
var positionalValues = {
	width: ({ x: n }, { paddingLeft: _ = "0", paddingRight: E = "0" }) => n.max - n.min - parseFloat(_) - parseFloat(E),
	height: ({ y: n }, { paddingTop: _ = "0", paddingBottom: E = "0" }) => n.max - n.min - parseFloat(_) - parseFloat(E),
	top: (n, { top: _ }) => parseFloat(_),
	left: (n, { left: _ }) => parseFloat(_),
	bottom: ({ y: n }, { top: _ }) => parseFloat(_) + (n.max - n.min),
	right: ({ x: n }, { left: _ }) => parseFloat(_) + (n.max - n.min),
	x: (n, { transform: _ }) => parseValueFromTransform(_, "x"),
	y: (n, { transform: _ }) => parseValueFromTransform(_, "y")
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1, isForced = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let n = Array.from(toResolve).filter((n) => n.needsMeasurement), _ = new Set(n.map((n) => n.element)), E = /* @__PURE__ */ new Map();
		_.forEach((n) => {
			let _ = removeNonTranslationalTransform(n);
			_.length && (E.set(n, _), n.render());
		}), n.forEach((n) => n.measureInitialState()), _.forEach((n) => {
			n.render();
			let _ = E.get(n);
			_ && _.forEach(([_, E]) => {
				n.getValue(_)?.set(E);
			});
		}), n.forEach((n) => n.measureEndState()), n.forEach((n) => {
			n.suspendedScrollY !== void 0 && window.scrollTo(0, n.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((n) => n.complete(isForced)), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((n) => {
		n.readKeyframes(), n.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	isForced = !0, readAllKeyframes(), measureAllKeyframes(), isForced = !1;
}
var KeyframeResolver = class {
	constructor(n, _, E, O, A, j = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...n], this.onComplete = _, this.name = E, this.motionValue = O, this.element = A, this.isAsync = j;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: n, name: _, element: E, motionValue: O } = this;
		if (n[0] === null) {
			let A = O?.get(), j = n[n.length - 1];
			if (A !== void 0) n[0] = A;
			else if (E && _) {
				let O = E.readValue(_, j);
				O != null && (n[0] = O);
			}
			n[0] === void 0 && (n[0] = j), O && A === void 0 && O.set(n[0]);
		}
		fillWildcards(n);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(n = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, n), toResolve.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (toResolve.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, isCSSVar = (n) => n.startsWith("--");
function setStyle(n, _, E) {
	isCSSVar(_) ? n.style.setProperty(_, E) : n.style[_] = E;
}
var supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0), supportsFlags = {};
function memoSupports(n, _) {
	let E = /* @__PURE__ */ memo$1(n);
	return () => supportsFlags[_] ?? E();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([n, _, E, O]) => `cubic-bezier(${n}, ${_}, ${E}, ${O})`, supportedWaapiEasing = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /* @__PURE__ */ cubicBezierAsString([
		0,
		.65,
		.55,
		1
	]),
	circOut: /* @__PURE__ */ cubicBezierAsString([
		.55,
		0,
		1,
		.45
	]),
	backIn: /* @__PURE__ */ cubicBezierAsString([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /* @__PURE__ */ cubicBezierAsString([
		.33,
		1.53,
		.69,
		.99
	])
};
function mapEasingToNativeEasing(n, _) {
	if (n) return typeof n == "function" ? supportsLinearEasing() ? generateLinearEasing(n, _) : "ease-out" : isBezierDefinition(n) ? cubicBezierAsString(n) : Array.isArray(n) ? n.map((n) => mapEasingToNativeEasing(n, _) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[n];
}
function startWaapiAnimation(n, _, E, { delay: O = 0, duration: A = 300, repeat: j = 0, repeatType: M = "loop", ease: N = "easeOut", times: P } = {}, z = void 0) {
	let B = { [_]: E };
	P && (B.offset = P);
	let H = mapEasingToNativeEasing(N, A);
	Array.isArray(H) && (B.easing = H), statsBuffer.value && activeAnimations.waapi++;
	let U = {
		delay: O,
		duration: A,
		easing: Array.isArray(H) ? "linear" : H,
		fill: "both",
		iterations: j + 1,
		direction: M === "reverse" ? "alternate" : "normal"
	};
	z && (U.pseudoElement = z);
	let W = n.animate(B, U);
	return statsBuffer.value && W.finished.finally(() => {
		activeAnimations.waapi--;
	}), W;
}
function isGenerator(n) {
	return typeof n == "function" && "applyToOptions" in n;
}
function applyGeneratorOptions({ type: n, ..._ }) {
	return isGenerator(n) && supportsLinearEasing() ? n.applyToOptions(_) : (_.duration ??= 300, _.ease ??= "easeOut", _);
}
var NativeAnimation = class extends WithPromise {
	constructor(n) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !n) return;
		let { element: _, name: E, keyframes: O, pseudoElement: A, allowFlatten: j = !1, finalKeyframe: M, onComplete: N } = n;
		this.isPseudoElement = !!A, this.allowFlatten = j, this.options = n, invariant(typeof n.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let P = applyGeneratorOptions(n);
		this.animation = startWaapiAnimation(_, E, O, P, A), P.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !A) {
				let n = getFinalKeyframe$1(O, this.options, M, this.speed);
				this.updateMotionValue ? this.updateMotionValue(n) : setStyle(_, E, n), this.animation.cancel();
			}
			N?.(), this.notifyFinished();
		};
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.finish?.();
	}
	cancel() {
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		if (this.isStopped) return;
		this.isStopped = !0;
		let { state: n } = this;
		n === "idle" || n === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.();
	}
	get duration() {
		let n = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(n));
	}
	get iterationDuration() {
		let { delay: n = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(n);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(n) {
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(n);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(n) {
		n < 0 && (this.finishedTime = null), this.animation.playbackRate = n;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(n) {
		this.manualStartTime = this.animation.startTime = n;
	}
	attachTimeline({ timeline: n, observe: _ }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, n && supportsScrollTimeline() ? (this.animation.timeline = n, noop) : _(this);
	}
}, unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(n) {
	return n in unsupportedEasingFunctions;
}
function replaceStringEasing(n) {
	typeof n.ease == "string" && isUnsupportedEase(n.ease) && (n.ease = unsupportedEasingFunctions[n.ease]);
}
var sampleDelta = 10, NativeAnimationExtended = class extends NativeAnimation {
	constructor(n) {
		replaceStringEasing(n), replaceTransitionType(n), super(n), n.startTime !== void 0 && (this.startTime = n.startTime), this.options = n;
	}
	updateMotionValue(n) {
		let { motionValue: _, onUpdate: E, onComplete: O, element: A, ...j } = this.options;
		if (!_) return;
		if (n !== void 0) {
			_.set(n);
			return;
		}
		let M = new JSAnimation({
			...j,
			autoplay: !1
		}), N = Math.max(sampleDelta, time.now() - this.startTime), P = clamp(0, sampleDelta, N - sampleDelta);
		_.setWithVelocity(M.sample(Math.max(0, N - P)).value, M.sample(N).value, P), M.stop();
	}
}, isAnimatable = (n, _) => _ === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (complex.test(n) || n === "0") && !n.startsWith("url("));
function hasKeyframesChanged(n) {
	let _ = n[0];
	if (n.length === 1) return !0;
	for (let E = 0; E < n.length; E++) if (n[E] !== _) return !0;
}
function canAnimate(n, _, E, O) {
	let A = n[0];
	if (A === null) return !1;
	if (_ === "display" || _ === "visibility") return !0;
	let j = n[n.length - 1], M = isAnimatable(A, _), N = isAnimatable(j, _);
	return warning(M === N, `You are trying to animate ${_} from "${A}" to "${j}". "${M ? j : A}" is not an animatable value.`, "value-not-animatable"), !M || !N ? !1 : hasKeyframesChanged(n) || (E === "spring" || isGenerator(E)) && O;
}
function makeAnimationInstant(n) {
	n.duration = 0, n.type = "keyframes";
}
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(n) {
	let { motionValue: _, name: E, repeatDelay: O, repeatType: A, damping: j, type: M } = n;
	if (!(_?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: N, transformTemplate: P } = _.owner.getProps();
	return supportsWaapi() && E && acceleratedValues.has(E) && (E !== "transform" || !P) && !N && !O && A !== "mirror" && j !== 0 && M !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: n = !0, delay: _ = 0, type: E = "keyframes", repeat: O = 0, repeatDelay: A = 0, repeatType: j = "loop", keyframes: M, name: N, motionValue: P, element: z, ...B }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let H = {
			autoplay: n,
			delay: _,
			type: E,
			repeat: O,
			repeatDelay: A,
			repeatType: j,
			name: N,
			motionValue: P,
			element: z,
			...B
		};
		this.keyframeResolver = new (z?.KeyframeResolver || KeyframeResolver)(M, (n, _, E) => this.onKeyframesResolved(n, _, H, !E), N, P, z), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(n, _, E, O) {
		this.keyframeResolver = void 0;
		let { name: A, type: j, velocity: M, delay: N, isHandoff: P, onUpdate: z } = E;
		this.resolvedAt = time.now(), canAnimate(n, A, j, M) || ((MotionGlobalConfig.instantAnimations || !N) && z?.(getFinalKeyframe$1(n, E, _)), n[0] = n[n.length - 1], makeAnimationInstant(E), E.repeat = 0);
		let B = {
			startTime: O ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: _,
			...E,
			keyframes: n
		}, H = !P && supportsBrowserAnimation(B) ? new NativeAnimationExtended({
			...B,
			element: B.motionValue.owner.current
		}) : new JSAnimation(B);
		H.finished.then(() => this.notifyFinished()).catch(noop), this.pendingTimeline &&= (this.stopTimeline = H.attachTimeline(this.pendingTimeline), void 0), this._animation = H;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(n, _) {
		return this.finished.finally(n).then(() => {});
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), flushKeyframeResolvers()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(n) {
		this.animation.time = n;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(n) {
		this.animation.speed = n;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(n) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(n) : this.pendingTimeline = n, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
	}
}, splitCSSVariableRegex = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(n) {
	let _ = splitCSSVariableRegex.exec(n);
	if (!_) return [,];
	let [, E, O, A] = _;
	return [`--${E ?? O}`, A];
}
var maxDepth = 4;
function getVariableValue(n, _, E = 1) {
	invariant(E <= maxDepth, `Max CSS variable fallback depth detected in property "${n}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [O, A] = parseCSSVariable(n);
	if (!O) return;
	let j = window.getComputedStyle(_).getPropertyValue(O);
	if (j) {
		let n = j.trim();
		return isNumericalString(n) ? parseFloat(n) : n;
	}
	return isCSSVariableToken(A) ? getVariableValue(A, _, E + 1) : A;
}
function getValueTransition(n, _) {
	return n?.[_] ?? n?.default ?? n;
}
var positionalKeys = new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...transformPropOrder
]), auto = {
	test: (n) => n === "auto",
	parse: (n) => n
}, testValueType = (n) => (_) => _.test(n), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
], findDimensionValueType = (n) => dimensionValueTypes.find(testValueType(n));
function isNone(n) {
	return typeof n == "number" ? n === 0 : n === null ? !0 : n === "none" || n === "0" || isZeroValueString(n);
}
var maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(n) {
	let [_, E] = n.slice(0, -1).split("(");
	if (_ === "drop-shadow") return n;
	let [O] = E.match(floatRegex) || [];
	if (!O) return n;
	let A = E.replace(O, ""), j = maxDefaults.has(_) ? 1 : 0;
	return O !== E && (j *= 100), _ + "(" + j + A + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (n) => {
		let _ = n.match(functionRegex);
		return _ ? _.map(applyDefaultFilter).join(" ") : n;
	}
}, int = {
	...number,
	transform: Math.round
}, numberValueTypes = {
	borderWidth: px,
	borderTopWidth: px,
	borderRightWidth: px,
	borderBottomWidth: px,
	borderLeftWidth: px,
	borderRadius: px,
	radius: px,
	borderTopLeftRadius: px,
	borderTopRightRadius: px,
	borderBottomRightRadius: px,
	borderBottomLeftRadius: px,
	width: px,
	maxWidth: px,
	height: px,
	maxHeight: px,
	top: px,
	right: px,
	bottom: px,
	left: px,
	inset: px,
	insetBlock: px,
	insetBlockStart: px,
	insetBlockEnd: px,
	insetInline: px,
	insetInlineStart: px,
	insetInlineEnd: px,
	padding: px,
	paddingTop: px,
	paddingRight: px,
	paddingBottom: px,
	paddingLeft: px,
	paddingBlock: px,
	paddingBlockStart: px,
	paddingBlockEnd: px,
	paddingInline: px,
	paddingInlineStart: px,
	paddingInlineEnd: px,
	margin: px,
	marginTop: px,
	marginRight: px,
	marginBottom: px,
	marginLeft: px,
	marginBlock: px,
	marginBlockStart: px,
	marginBlockEnd: px,
	marginInline: px,
	marginInlineStart: px,
	marginInlineEnd: px,
	backgroundPositionX: px,
	backgroundPositionY: px,
	rotate: degrees,
	rotateX: degrees,
	rotateY: degrees,
	rotateZ: degrees,
	scale,
	scaleX: scale,
	scaleY: scale,
	scaleZ: scale,
	skew: degrees,
	skewX: degrees,
	skewY: degrees,
	distance: px,
	translateX: px,
	translateY: px,
	translateZ: px,
	x: px,
	y: px,
	z: px,
	perspective: px,
	transformPerspective: px,
	opacity: alpha,
	originX: progressPercentage,
	originY: progressPercentage,
	originZ: px,
	zIndex: int,
	fillOpacity: alpha,
	strokeOpacity: alpha,
	numOctaves: int
}, defaultValueTypes = {
	...numberValueTypes,
	color,
	backgroundColor: color,
	outlineColor: color,
	fill: color,
	stroke: color,
	borderColor: color,
	borderTopColor: color,
	borderRightColor: color,
	borderBottomColor: color,
	borderLeftColor: color,
	filter,
	WebkitFilter: filter
}, getDefaultValueType = (n) => defaultValueTypes[n];
function getAnimatableNone(n, _) {
	let E = getDefaultValueType(n);
	return E !== filter && (E = complex), E.getAnimatableNone ? E.getAnimatableNone(_) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(n, _, E) {
	let O = 0, A;
	for (; O < n.length && !A;) {
		let _ = n[O];
		typeof _ == "string" && !invalidTemplates.has(_) && analyseComplexValue(_).values.length && (A = n[O]), O++;
	}
	if (A && E) for (let O of _) n[O] = getAnimatableNone(E, A);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(n, _, E, O, A) {
		super(n, _, E, O, A, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: n, element: _, name: E } = this;
		if (!_ || !_.current) return;
		super.readKeyframes();
		for (let E = 0; E < n.length; E++) {
			let O = n[E];
			if (typeof O == "string" && (O = O.trim(), isCSSVariableToken(O))) {
				let A = getVariableValue(O, _.current);
				A !== void 0 && (n[E] = A), E === n.length - 1 && (this.finalKeyframe = O);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(E) || n.length !== 2) return;
		let [O, A] = n, j = findDimensionValueType(O), M = findDimensionValueType(A);
		if (containsCSSVariable(O) !== containsCSSVariable(A) && positionalValues[E]) {
			this.needsMeasurement = !0;
			return;
		}
		if (j !== M) if (isNumOrPxType(j) && isNumOrPxType(M)) for (let _ = 0; _ < n.length; _++) {
			let E = n[_];
			typeof E == "string" && (n[_] = parseFloat(E));
		}
		else positionalValues[E] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: n, name: _ } = this, E = [];
		for (let _ = 0; _ < n.length; _++) (n[_] === null || isNone(n[_])) && E.push(_);
		E.length && makeNoneKeyframesAnimatable(n, E, _);
	}
	measureInitialState() {
		let { element: n, unresolvedKeyframes: _, name: E } = this;
		if (!n || !n.current) return;
		E === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[E](n.measureViewportBox(), window.getComputedStyle(n.current)), _[0] = this.measuredOrigin;
		let O = _[_.length - 1];
		O !== void 0 && n.getValue(E, O).jump(O, !1);
	}
	measureEndState() {
		let { element: n, name: _, unresolvedKeyframes: E } = this;
		if (!n || !n.current) return;
		let O = n.getValue(_);
		O && O.jump(this.measuredOrigin, !1);
		let A = E.length - 1, j = E[A];
		E[A] = positionalValues[_](n.measureViewportBox(), window.getComputedStyle(n.current)), j !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = j), this.removedTransforms?.length && this.removedTransforms.forEach(([_, E]) => {
			n.getValue(_).set(E);
		}), this.resolveNoneKeyframes();
	}
};
function resolveElements(n, _, E) {
	if (n instanceof EventTarget) return [n];
	if (typeof n == "string") {
		let O = document;
		_ && (O = _.current);
		let A = E?.[n] ?? O.querySelectorAll(n);
		return A ? Array.from(A) : [];
	}
	return Array.from(n);
}
var getValueAsType = (n, _) => _ && typeof n == "number" ? _.transform(n) : n;
function isHTMLElement(n) {
	return isObject(n) && "offsetHeight" in n;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (n) => !isNaN(parseFloat(n)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(n, _ = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
			let _ = time.now();
			if (this.updatedAt !== _ && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let n of this.dependents) n.dirty();
		}, this.hasAnimated = !1, this.setCurrent(n), this.owner = _.owner;
	}
	setCurrent(n) {
		this.current = n, this.updatedAt = time.now(), this.canTrackVelocity === null && n !== void 0 && (this.canTrackVelocity = isFloat(this.current));
	}
	setPrevFrameValue(n = this.current) {
		this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(n) {
		return process.env.NODE_ENV !== "production" && warnOnce(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", n);
	}
	on(n, _) {
		this.events[n] || (this.events[n] = new SubscriptionManager());
		let E = this.events[n].add(_);
		return n === "change" ? () => {
			E(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : E;
	}
	clearListeners() {
		for (let n in this.events) this.events[n].clear();
	}
	attach(n, _) {
		this.passiveEffect = n, this.stopPassiveEffect = _;
	}
	set(n) {
		this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n);
	}
	setWithVelocity(n, _, E) {
		this.set(_), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - E;
	}
	jump(n, _ = !0) {
		this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, _ && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(n) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(n);
	}
	removeDependent(n) {
		this.dependents && this.dependents.delete(n);
	}
	get() {
		return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let n = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || n - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		let _ = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), _);
	}
	start(n) {
		return this.stop(), new Promise((_) => {
			this.hasAnimated = !0, this.animation = n(_), this.events.animationStart && this.events.animationStart.notify();
		}).then(() => {
			this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
		});
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
	}
	isAnimating() {
		return !!this.animation;
	}
	clearAnimation() {
		delete this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
};
function motionValue(n, _) {
	return new MotionValue(n, _);
}
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, !1), isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
function setDragLock(n) {
	return n === "x" || n === "y" ? isDragging[n] ? null : (isDragging[n] = !0, () => {
		isDragging[n] = !1;
	}) : isDragging.x || isDragging.y ? null : (isDragging.x = isDragging.y = !0, () => {
		isDragging.x = isDragging.y = !1;
	});
}
function setupGesture(n, _) {
	let E = resolveElements(n), O = new AbortController();
	return [
		E,
		{
			passive: !0,
			..._,
			signal: O.signal
		},
		() => O.abort()
	];
}
function isValidHover(n) {
	return !(n.pointerType === "touch" || isDragActive());
}
function hover(n, _, E = {}) {
	let [O, A, j] = setupGesture(n, E), M = (n) => {
		if (!isValidHover(n)) return;
		let { target: E } = n, O = _(E, n);
		if (typeof O != "function" || !E) return;
		let j = (n) => {
			isValidHover(n) && (O(n), E.removeEventListener("pointerleave", j));
		};
		E.addEventListener("pointerleave", j, A);
	};
	return O.forEach((n) => {
		n.addEventListener("pointerenter", M, A);
	}), j;
}
var isNodeOrChild = (n, _) => _ ? n === _ ? !0 : isNodeOrChild(n, _.parentElement) : !1, isPrimaryPointer = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, interactiveElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(n) {
	return interactiveElements.has(n.tagName) || n.isContentEditable === !0;
}
var isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(n) {
	return (_) => {
		_.key === "Enter" && n(_);
	};
}
function firePointerEvent(n, _) {
	n.dispatchEvent(new PointerEvent("pointer" + _, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (n, _) => {
	let E = n.currentTarget;
	if (!E) return;
	let O = filterEvents(() => {
		if (isPressing.has(E)) return;
		firePointerEvent(E, "down");
		let n = filterEvents(() => {
			firePointerEvent(E, "up");
		});
		E.addEventListener("keyup", n, _), E.addEventListener("blur", () => firePointerEvent(E, "cancel"), _);
	});
	E.addEventListener("keydown", O, _), E.addEventListener("blur", () => E.removeEventListener("keydown", O), _);
};
function isValidPressEvent(n) {
	return isPrimaryPointer(n) && !isDragActive();
}
function press(n, _, E = {}) {
	let [O, A, j] = setupGesture(n, E), M = (n) => {
		let O = n.currentTarget;
		if (!isValidPressEvent(n)) return;
		isPressing.add(O);
		let j = _(O, n), M = (n, _) => {
			window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", P), isPressing.has(O) && isPressing.delete(O), isValidPressEvent(n) && typeof j == "function" && j(n, { success: _ });
		}, N = (n) => {
			M(n, O === window || O === document || E.useGlobalTarget || isNodeOrChild(O, n.target));
		}, P = (n) => {
			M(n, !1);
		};
		window.addEventListener("pointerup", N, A), window.addEventListener("pointercancel", P, A);
	};
	return O.forEach((n) => {
		(E.useGlobalTarget ? window : n).addEventListener("pointerdown", M, A), isHTMLElement(n) && (n.addEventListener("focus", (n) => enableKeyboardPress(n, A)), !isElementKeyboardAccessible(n) && !n.hasAttribute("tabindex") && (n.tabIndex = 0));
	}), j;
}
function isSVGElement(n) {
	return isObject(n) && "ownerSVGElement" in n;
}
function isSVGSVGElement(n) {
	return isSVGElement(n) && n.tagName === "svg";
}
var isMotionValue = (n) => !!(n && n.getVelocity), valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (n) => valueTypes.find(testValueType(n)), MotionConfigContext = createContext({
	transformPagePoint: (n) => n,
	isStatic: !1,
	reducedMotion: "never"
});
function setRef(n, _) {
	if (typeof n == "function") return n(_);
	n != null && (n.current = _);
}
function composeRefs(...n) {
	return (_) => {
		let E = !1, O = n.map((n) => {
			let O = setRef(n, _);
			return !E && typeof O == "function" && (E = !0), O;
		});
		if (E) return () => {
			for (let _ = 0; _ < O.length; _++) {
				let E = O[_];
				typeof E == "function" ? E() : setRef(n[_], null);
			}
		};
	};
}
function useComposedRefs(..._) {
	return React$1.useCallback(composeRefs(..._), _);
}
var PopChildMeasure = class extends React$1.Component {
	getSnapshotBeforeUpdate(n) {
		let _ = this.props.childRef.current;
		if (_ && n.isPresent && !this.props.isPresent) {
			let n = _.offsetParent, E = isHTMLElement(n) && n.offsetWidth || 0, O = this.props.sizeRef.current;
			O.height = _.offsetHeight || 0, O.width = _.offsetWidth || 0, O.top = _.offsetTop, O.left = _.offsetLeft, O.right = E - O.width - O.left;
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function PopChild({ children: _, isPresent: E, anchorX: O, root: A }) {
	let j = useId(), M = useRef(null), N = useRef({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0
	}), { nonce: P } = useContext(MotionConfigContext), z = useComposedRefs(M, _.props?.ref ?? _?.ref);
	return useInsertionEffect(() => {
		let { width: n, height: _, top: z, left: B, right: H } = N.current;
		if (E || !M.current || !n || !_) return;
		let U = O === "left" ? `left: ${B}` : `right: ${H}`;
		M.current.dataset.motionPopId = j;
		let W = document.createElement("style");
		P && (W.nonce = P);
		let G = A ?? document.head;
		return G.appendChild(W), W.sheet && W.sheet.insertRule(`
          [data-motion-pop-id="${j}"] {
            position: absolute !important;
            width: ${n}px !important;
            height: ${_}px !important;
            ${U}px !important;
            top: ${z}px !important;
          }
        `), () => {
			G.contains(W) && G.removeChild(W);
		};
	}, [E]), jsx(PopChildMeasure, {
		isPresent: E,
		childRef: M,
		sizeRef: N,
		children: React$1.cloneElement(_, { ref: z })
	});
}
var PresenceChild = ({ children: _, initial: E, isPresent: O, onExitComplete: A, custom: j, presenceAffectsLayout: M, mode: N, anchorX: P, root: z }) => {
	let B = useConstant(newChildrenMap), H = useId(), U = !0, W = useMemo(() => (U = !1, {
		id: H,
		initial: E,
		isPresent: O,
		custom: j,
		onExitComplete: (n) => {
			B.set(n, !0);
			for (let n of B.values()) if (!n) return;
			A && A();
		},
		register: (n) => (B.set(n, !1), () => B.delete(n))
	}), [
		O,
		B,
		A
	]);
	return M && U && (W = { ...W }), useMemo(() => {
		B.forEach((n, _) => B.set(_, !1));
	}, [O]), React$1.useEffect(() => {
		!O && !B.size && A && A();
	}, [O]), N === "popLayout" && (_ = jsx(PopChild, {
		isPresent: O,
		anchorX: P,
		root: z,
		children: _
	})), jsx(PresenceContext.Provider, {
		value: W,
		children: _
	});
};
function newChildrenMap() {
	return /* @__PURE__ */ new Map();
}
function usePresence(n = !0) {
	let _ = useContext(PresenceContext);
	if (_ === null) return [!0, null];
	let { isPresent: E, onExitComplete: O, register: A } = _, j = useId();
	useEffect(() => {
		if (n) return A(j);
	}, [n]);
	let M = useCallback(() => n && O && O(j), [
		j,
		O,
		n
	]);
	return !E && O ? [!1, M] : [!0];
}
var getChildKey = (n) => n.key || "";
function onlyElements(n) {
	let _ = [];
	return Children.forEach(n, (n) => {
		isValidElement(n) && _.push(n);
	}), _;
}
var AnimatePresence = ({ children: n, custom: _, initial: E = !0, onExitComplete: O, presenceAffectsLayout: A = !0, mode: j = "sync", propagate: M = !1, anchorX: N = "left", root: P }) => {
	let [z, B] = usePresence(M), H = useMemo(() => onlyElements(n), [n]), W = M && !z ? [] : H.map(getChildKey), G = useRef(!0), Z = useRef(H), Mj = useConstant(() => /* @__PURE__ */ new Map()), Nj = useRef(/* @__PURE__ */ new Set()), [Lj, Rj] = useState(H), [zj, Hj] = useState(H);
	useIsomorphicLayoutEffect(() => {
		G.current = !1, Z.current = H;
		for (let n = 0; n < zj.length; n++) {
			let _ = getChildKey(zj[n]);
			W.includes(_) ? (Mj.delete(_), Nj.current.delete(_)) : Mj.get(_) !== !0 && Mj.set(_, !1);
		}
	}, [
		zj,
		W.length,
		W.join("-")
	]);
	let Uj = [];
	if (H !== Lj) {
		let n = [...H];
		for (let _ = 0; _ < zj.length; _++) {
			let E = zj[_], O = getChildKey(E);
			W.includes(O) || (n.splice(_, 0, E), Uj.push(E));
		}
		return j === "wait" && Uj.length && (n = Uj), Hj(onlyElements(n)), Rj(H), null;
	}
	process.env.NODE_ENV !== "production" && j === "wait" && zj.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its mode is set to \"wait\". This will lead to odd visual behaviour.");
	let { forceRender: Wj } = useContext(LayoutGroupContext);
	return jsx(Fragment$1, { children: zj.map((n) => {
		let U = getChildKey(n), Pj = M && !z ? !1 : H === zj || W.includes(U);
		return jsx(PresenceChild, {
			isPresent: Pj,
			initial: !G.current || E ? void 0 : !1,
			custom: _,
			presenceAffectsLayout: A,
			mode: j,
			root: P,
			onExitComplete: Pj ? void 0 : () => {
				if (Nj.current.has(U)) return;
				if (Nj.current.add(U), Mj.has(U)) Mj.set(U, !0);
				else return;
				let n = !0;
				Mj.forEach((_) => {
					_ || (n = !1);
				}), n && (Wj?.(), Hj(Z.current), M && B?.(), O && O());
			},
			anchorX: N,
			children: n
		}, U);
	}) });
}, LazyContext = createContext({ strict: !1 }), featureProps = {
	animation: [
		"animate",
		"variants",
		"whileHover",
		"whileTap",
		"exit",
		"whileInView",
		"whileFocus",
		"whileDrag"
	],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, featureDefinitions = {};
for (let n in featureProps) featureDefinitions[n] = { isEnabled: (_) => featureProps[n].some((n) => !!_[n]) };
function loadFeatures(n) {
	for (let _ in n) featureDefinitions[_] = {
		...featureDefinitions[_],
		...n[_]
	};
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function isValidMotionProp(n) {
	return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || validMotionProps.has(n);
}
function memoize(n) {
	var _ = Object.create(null);
	return function(E) {
		return _[E] === void 0 && (_[E] = n(E)), _[E];
	};
}
var init_emotion_memoize_esm = __esmMin((() => {})), emotion_is_prop_valid_esm_exports = /* @__PURE__ */ __export({ default: () => isPropValid }), reactPropsRegex, isPropValid, init_emotion_is_prop_valid_esm = __esmMin((() => {
	init_emotion_memoize_esm(), reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize(function(n) {
		return reactPropsRegex.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
	});
})), shouldForward = (n) => !isValidMotionProp(n);
function loadExternalIsValidProp(n) {
	typeof n == "function" && (shouldForward = (_) => _.startsWith("on") ? !isValidMotionProp(_) : n(_));
}
try {
	loadExternalIsValidProp((init_emotion_is_prop_valid_esm(), __toCommonJS(emotion_is_prop_valid_esm_exports)).default);
} catch {}
function filterProps(n, _, E) {
	let O = {};
	for (let A in n) A === "values" && typeof n.values == "object" || (shouldForward(A) || E === !0 && isValidMotionProp(A) || !_ && !isValidMotionProp(A) || n.draggable && A.startsWith("onDrag")) && (O[A] = n[A]);
	return O;
}
var MotionContext = /* @__PURE__ */ createContext({});
function isAnimationControls(n) {
	return typeof n == "object" && !!n && typeof n.start == "function";
}
function isVariantLabel(n) {
	return typeof n == "string" || Array.isArray(n);
}
var variantPriorityOrder = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], variantProps = ["initial", ...variantPriorityOrder];
function isControllingVariants(n) {
	return isAnimationControls(n.animate) || variantProps.some((_) => isVariantLabel(n[_]));
}
function isVariantNode(n) {
	return !!(isControllingVariants(n) || n.variants);
}
function getCurrentTreeVariants(n, _) {
	if (isControllingVariants(n)) {
		let { initial: _, animate: E } = n;
		return {
			initial: _ === !1 || isVariantLabel(_) ? _ : void 0,
			animate: isVariantLabel(E) ? E : void 0
		};
	}
	return n.inherit === !1 ? {} : _;
}
function useCreateMotionContext(n) {
	let { initial: _, animate: E } = getCurrentTreeVariants(n, useContext(MotionContext));
	return useMemo(() => ({
		initial: _,
		animate: E
	}), [variantLabelsAsDependency(_), variantLabelsAsDependency(E)]);
}
function variantLabelsAsDependency(n) {
	return Array.isArray(n) ? n.join(" ") : n;
}
function pixelsToPercent(n, _) {
	return _.max === _.min ? 0 : n / (_.max - _.min) * 100;
}
var correctBorderRadius = { correct: (n, _) => {
	if (!_.target) return n;
	if (typeof n == "string") if (px.test(n)) n = parseFloat(n);
	else return n;
	return `${pixelsToPercent(n, _.target.x)}% ${pixelsToPercent(n, _.target.y)}%`;
} }, correctBoxShadow = { correct: (n, { treeScale: _, projectionDelta: E }) => {
	let O = n, A = complex.parse(n);
	if (A.length > 5) return O;
	let j = complex.createTransformer(n), M = typeof A[0] == "number" ? 0 : 1, N = E.x.scale * _.x, P = E.y.scale * _.y;
	A[0 + M] /= N, A[1 + M] /= P;
	let z = mixNumber(N, P, .5);
	return typeof A[2 + M] == "number" && (A[2 + M] /= z), typeof A[3 + M] == "number" && (A[3 + M] /= z), j(A);
} }, scaleCorrectors = {
	borderRadius: {
		...correctBorderRadius,
		applyTo: [
			"borderTopLeftRadius",
			"borderTopRightRadius",
			"borderBottomLeftRadius",
			"borderBottomRightRadius"
		]
	},
	borderTopLeftRadius: correctBorderRadius,
	borderTopRightRadius: correctBorderRadius,
	borderBottomLeftRadius: correctBorderRadius,
	borderBottomRightRadius: correctBorderRadius,
	boxShadow: correctBoxShadow
};
function isForcedMotionValue(n, { layout: _, layoutId: E }) {
	return transformProps.has(n) || n.startsWith("origin") || (_ || E !== void 0) && (!!scaleCorrectors[n] || n === "opacity");
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(n, _, E) {
	let O = "", A = !0;
	for (let j = 0; j < numTransforms; j++) {
		let M = transformPropOrder[j], N = n[M];
		if (N === void 0) continue;
		let P = !0;
		if (P = typeof N == "number" ? N === (M.startsWith("scale") ? 1 : 0) : parseFloat(N) === 0, !P || E) {
			let n = getValueAsType(N, numberValueTypes[M]);
			if (!P) {
				A = !1;
				let _ = translateAlias[M] || M;
				O += `${_}(${n}) `;
			}
			E && (_[M] = n);
		}
	}
	return O = O.trim(), E ? O = E(_, A ? "" : O) : A && (O = "none"), O;
}
function buildHTMLStyles(n, _, E) {
	let { style: O, vars: A, transformOrigin: j } = n, M = !1, N = !1;
	for (let n in _) {
		let E = _[n];
		if (transformProps.has(n)) {
			M = !0;
			continue;
		} else if (isCSSVariableName(n)) {
			A[n] = E;
			continue;
		} else {
			let _ = getValueAsType(E, numberValueTypes[n]);
			n.startsWith("origin") ? (N = !0, j[n] = _) : O[n] = _;
		}
	}
	if (_.transform || (M || E ? O.transform = buildTransform(_, n.transform, E) : O.transform &&= "none"), N) {
		let { originX: n = "50%", originY: _ = "50%", originZ: E = 0 } = j;
		O.transformOrigin = `${n} ${_} ${E}`;
	}
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(n, _, E) {
	for (let O in _) !isMotionValue(_[O]) && !isForcedMotionValue(O, E) && (n[O] = _[O]);
}
function useInitialMotionValues({ transformTemplate: n }, _) {
	return useMemo(() => {
		let E = createHtmlRenderState();
		return buildHTMLStyles(E, _, n), Object.assign({}, E.vars, E.style);
	}, [_]);
}
function useStyle(n, _) {
	let E = n.style || {}, O = {};
	return copyRawValuesOnly(O, E, n), Object.assign(O, useInitialMotionValues(n, _)), O;
}
function useHTMLProps(n, _) {
	let E = {}, O = useStyle(n, _);
	return n.drag && n.dragListener !== !1 && (E.draggable = !1, O.userSelect = O.WebkitUserSelect = O.WebkitTouchCallout = "none", O.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (E.tabIndex = 0), E.style = O, E;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(n, _, E = 1, O = 0, A = !0) {
	n.pathLength = 1;
	let j = A ? dashKeys : camelKeys;
	n[j.offset] = px.transform(-O);
	let M = px.transform(_), N = px.transform(E);
	n[j.array] = `${M} ${N}`;
}
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(n, { attrX: _, attrY: E, attrScale: O, pathLength: A, pathSpacing: j = 1, pathOffset: M = 0, ...N }, P, z, B) {
	if (buildHTMLStyles(n, N, z), P) {
		n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
		return;
	}
	n.attrs = n.style, n.style = {};
	let { attrs: H, style: U } = n;
	H.transform && (U.transform = H.transform, delete H.transform), (U.transform || H.transformOrigin) && (U.transformOrigin = H.transformOrigin ?? "50% 50%", delete H.transformOrigin), U.transform && (U.transformBox = B?.transformBox ?? "fill-box", delete H.transformBox);
	for (let n of cssMotionPathProperties) H[n] !== void 0 && (U[n] = H[n], delete H[n]);
	_ !== void 0 && (H.x = _), E !== void 0 && (H.y = E), O !== void 0 && (H.scale = O), A !== void 0 && buildSVGPath(H, A, j, M, !1);
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function useSVGProps(n, _, E, O) {
	let A = useMemo(() => {
		let E = createSvgRenderState();
		return buildSVGAttrs(E, _, isSVGTag(O), n.transformTemplate, n.style), {
			...E.attrs,
			style: { ...E.style }
		};
	}, [_]);
	if (n.style) {
		let _ = {};
		copyRawValuesOnly(_, n.style, n), A.style = {
			..._,
			...A.style
		};
	}
	return A;
}
var lowercaseSVGElements = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
function isSVGComponent(n) {
	return typeof n != "string" || n.includes("-") ? !1 : !!(lowercaseSVGElements.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function useRender(n, _, E, { latestValues: O }, j, M = !1, P) {
	let z = (P ?? isSVGComponent(n) ? useSVGProps : useHTMLProps)(_, O, j, n), B = filterProps(_, typeof n == "string", M), H = n === Fragment ? {} : {
		...B,
		...z,
		ref: E
	}, { children: U } = _, W = useMemo(() => isMotionValue(U) ? U.get() : U, [U]);
	return createElement(n, {
		...H,
		children: W
	});
}
function getValueState(n) {
	let _ = [{}, {}];
	return n?.values.forEach((n, E) => {
		_[0][E] = n.get(), _[1][E] = n.getVelocity();
	}), _;
}
function resolveVariantFromProps(n, _, E, O) {
	if (typeof _ == "function") {
		let [A, j] = getValueState(O);
		_ = _(E === void 0 ? n.custom : E, A, j);
	}
	if (typeof _ == "string" && (_ = n.variants && n.variants[_]), typeof _ == "function") {
		let [A, j] = getValueState(O);
		_ = _(E === void 0 ? n.custom : E, A, j);
	}
	return _;
}
function resolveMotionValue(n) {
	return isMotionValue(n) ? n.get() : n;
}
function makeState({ scrapeMotionValuesFromProps: n, createRenderState: _ }, E, O, A) {
	return {
		latestValues: makeLatestValues(E, O, A, n),
		renderState: _()
	};
}
function makeLatestValues(n, _, E, O) {
	let A = {}, j = O(n, {});
	for (let n in j) A[n] = resolveMotionValue(j[n]);
	let { initial: M, animate: N } = n, P = isControllingVariants(n), z = isVariantNode(n);
	_ && z && !P && n.inherit !== !1 && (M === void 0 && (M = _.initial), N === void 0 && (N = _.animate));
	let B = E ? E.initial === !1 : !1;
	B ||= M === !1;
	let H = B ? N : M;
	if (H && typeof H != "boolean" && !isAnimationControls(H)) {
		let _ = Array.isArray(H) ? H : [H];
		for (let E = 0; E < _.length; E++) {
			let O = resolveVariantFromProps(n, _[E]);
			if (O) {
				let { transitionEnd: n, transition: _, ...E } = O;
				for (let n in E) {
					let _ = E[n];
					if (Array.isArray(_)) {
						let n = B ? _.length - 1 : 0;
						_ = _[n];
					}
					_ !== null && (A[n] = _);
				}
				for (let _ in n) A[_] = n[_];
			}
		}
	}
	return A;
}
var makeUseVisualState = (n) => (_, E) => {
	let O = useContext(MotionContext), A = useContext(PresenceContext), j = () => makeState(n, _, O, A);
	return E ? j() : useConstant(j);
};
function scrapeMotionValuesFromProps$1(n, _, E) {
	let { style: O } = n, A = {};
	for (let j in O) (isMotionValue(O[j]) || _.style && isMotionValue(_.style[j]) || isForcedMotionValue(j, n) || E?.getValue(j)?.liveStyle !== void 0) && (A[j] = O[j]);
	return A;
}
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
function scrapeMotionValuesFromProps(n, _, E) {
	let O = scrapeMotionValuesFromProps$1(n, _, E);
	for (let E in n) if (isMotionValue(n[E]) || isMotionValue(_[E])) {
		let _ = transformPropOrder.indexOf(E) === -1 ? E : "attr" + E.charAt(0).toUpperCase() + E.substring(1);
		O[_] = n[E];
	}
	return O;
}
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(n, _, E) {
	let O = useRef(E);
	useInsertionEffect(() => {
		O.current = E;
	});
	let A = useRef(null);
	return useCallback((E) => {
		E && n.onMount?.(E), _ && (E ? _.mount(E) : _.unmount());
		let j = O.current;
		if (typeof j == "function") if (E) {
			let n = j(E);
			typeof n == "function" && (A.current = n);
		} else A.current ? (A.current(), A.current = null) : j(E);
		else j && (j.current = E);
	}, [_]);
}
var camelToDash = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), SwitchLayoutGroupContext = createContext({});
function isRefObject(n) {
	return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function useVisualElement(n, _, E, O, A, j) {
	let { visualElement: M } = useContext(MotionContext), N = useContext(LazyContext), P = useContext(PresenceContext), z = useContext(MotionConfigContext).reducedMotion, B = useRef(null);
	O ||= N.renderer, !B.current && O && (B.current = O(n, {
		visualState: _,
		parent: M,
		props: E,
		presenceContext: P,
		blockInitialAnimation: P ? P.initial === !1 : !1,
		reducedMotionConfig: z,
		isSVG: j
	}));
	let H = B.current, G = useContext(SwitchLayoutGroupContext);
	H && !H.projection && A && (H.type === "html" || H.type === "svg") && createProjectionNode$1(B.current, E, A, G);
	let Z = useRef(!1);
	useInsertionEffect(() => {
		H && Z.current && H.update(E, P);
	});
	let Nj = E[optimizedAppearDataAttribute], Pj = useRef(!!Nj && !window.MotionHandoffIsComplete?.(Nj) && window.MotionHasOptimisedAnimation?.(Nj));
	return useIsomorphicLayoutEffect(() => {
		H && (Z.current = !0, window.MotionIsMounted = !0, H.updateFeatures(), H.scheduleRenderMicrotask(), Pj.current && H.animationState && H.animationState.animateChanges());
	}), useEffect(() => {
		H && (!Pj.current && H.animationState && H.animationState.animateChanges(), Pj.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(Nj);
		}), !1), H.enteringChildren = void 0);
	}), H;
}
function createProjectionNode$1(n, _, E, O) {
	let { layoutId: A, layout: j, drag: M, dragConstraints: N, layoutScroll: P, layoutRoot: z, layoutCrossfade: B } = _;
	n.projection = new E(n.latestValues, _["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(n.parent)), n.projection.setOptions({
		layoutId: A,
		layout: j,
		alwaysMeasureLayout: !!M || N && isRefObject(N),
		visualElement: n,
		animationType: typeof j == "string" ? j : "both",
		initialPromotionConfig: O,
		crossfade: B,
		layoutScroll: P,
		layoutRoot: z
	});
}
function getClosestProjectingNode(n) {
	if (n) return n.options.allowProjection === !1 ? getClosestProjectingNode(n.parent) : n.projection;
}
function createMotionComponent(n, { forwardMotionProps: _ = !1, type: E } = {}, O, A) {
	O && loadFeatures(O);
	let j = E ? E === "svg" : isSVGComponent(n), M = j ? useSVGVisualState : useHTMLVisualState;
	function N(E, N) {
		let P, z = {
			...useContext(MotionConfigContext),
			...E,
			layoutId: useLayoutId(E)
		}, { isStatic: B } = z, H = useCreateMotionContext(E), W = M(E, B);
		if (!B && isBrowser) {
			useStrictMode(z, O);
			let _ = getProjectionFunctionality(z);
			P = _.MeasureLayout, H.visualElement = useVisualElement(n, W, z, A, _.ProjectionNode, j);
		}
		return jsxs(MotionContext.Provider, {
			value: H,
			children: [P && H.visualElement ? jsx(P, {
				visualElement: H.visualElement,
				...z
			}) : null, useRender(n, E, useMotionRef(W, H.visualElement, N), W, B, _, j)]
		});
	}
	N.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
	let z = forwardRef(N);
	return z[motionComponentSymbol] = n, z;
}
function useLayoutId({ layoutId: n }) {
	let _ = useContext(LayoutGroupContext).id;
	return _ && n !== void 0 ? _ + "-" + n : n;
}
function useStrictMode(n, _) {
	let E = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && _ && E) {
		let _ = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		n.ignoreStrict ? warning(!1, _, "lazy-strict-mode") : invariant(!1, _, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(n) {
	let { drag: _, layout: E } = featureDefinitions;
	if (!_ && !E) return {};
	let O = {
		..._,
		...E
	};
	return {
		MeasureLayout: _?.isEnabled(n) || E?.isEnabled(n) ? O.MeasureLayout : void 0,
		ProjectionNode: O.ProjectionNode
	};
}
function createMotionProxy(n, _) {
	if (typeof Proxy > "u") return createMotionComponent;
	let E = /* @__PURE__ */ new Map(), O = (E, O) => createMotionComponent(E, O, n, _);
	return new Proxy((n, _) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), O(n, _)), { get: (A, j) => j === "create" ? O : (E.has(j) || E.set(j, createMotionComponent(j, void 0, n, _)), E.get(j)) });
}
function convertBoundingBoxToBox({ top: n, left: _, right: E, bottom: O }) {
	return {
		x: {
			min: _,
			max: E
		},
		y: {
			min: n,
			max: O
		}
	};
}
function convertBoxToBoundingBox({ x: n, y: _ }) {
	return {
		top: _.min,
		right: n.max,
		bottom: _.max,
		left: n.min
	};
}
function transformBoxPoints(n, _) {
	if (!_) return n;
	let E = _({
		x: n.left,
		y: n.top
	}), O = _({
		x: n.right,
		y: n.bottom
	});
	return {
		top: E.y,
		left: E.x,
		bottom: O.y,
		right: O.x
	};
}
function isIdentityScale(n) {
	return n === void 0 || n === 1;
}
function hasScale({ scale: n, scaleX: _, scaleY: E }) {
	return !isIdentityScale(n) || !isIdentityScale(_) || !isIdentityScale(E);
}
function hasTransform(n) {
	return hasScale(n) || has2DTranslate(n) || n.z || n.rotate || n.rotateX || n.rotateY || n.skewX || n.skewY;
}
function has2DTranslate(n) {
	return is2DTranslate(n.x) || is2DTranslate(n.y);
}
function is2DTranslate(n) {
	return n && n !== "0%";
}
function scalePoint(n, _, E) {
	return E + _ * (n - E);
}
function applyPointDelta(n, _, E, O, A) {
	return A !== void 0 && (n = scalePoint(n, A, O)), scalePoint(n, E, O) + _;
}
function applyAxisDelta(n, _ = 0, E = 1, O, A) {
	n.min = applyPointDelta(n.min, _, E, O, A), n.max = applyPointDelta(n.max, _, E, O, A);
}
function applyBoxDelta(n, { x: _, y: E }) {
	applyAxisDelta(n.x, _.translate, _.scale, _.originPoint), applyAxisDelta(n.y, E.translate, E.scale, E.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(n, _, E, O = !1) {
	let A = E.length;
	if (!A) return;
	_.x = _.y = 1;
	let j, M;
	for (let N = 0; N < A; N++) {
		j = E[N], M = j.projectionDelta;
		let { visualElement: A } = j.options;
		A && A.props.style && A.props.style.display === "contents" || (O && j.options.layoutScroll && j.scroll && j !== j.root && transformBox(n, {
			x: -j.scroll.offset.x,
			y: -j.scroll.offset.y
		}), M && (_.x *= M.x.scale, _.y *= M.y.scale, applyBoxDelta(n, M)), O && hasTransform(j.latestValues) && transformBox(n, j.latestValues));
	}
	_.x < TREE_SCALE_SNAP_MAX && _.x > TREE_SCALE_SNAP_MIN && (_.x = 1), _.y < TREE_SCALE_SNAP_MAX && _.y > TREE_SCALE_SNAP_MIN && (_.y = 1);
}
function translateAxis(n, _) {
	n.min += _, n.max += _;
}
function transformAxis(n, _, E, O, A = .5) {
	applyAxisDelta(n, _, E, mixNumber(n.min, n.max, A), O);
}
function transformBox(n, _) {
	transformAxis(n.x, _.x, _.scaleX, _.scale, _.originX), transformAxis(n.y, _.y, _.scaleY, _.scale, _.originY);
}
function measureViewportBox(n, _) {
	return convertBoundingBoxToBox(transformBoxPoints(n.getBoundingClientRect(), _));
}
function measurePageBox(n, _, E) {
	let O = measureViewportBox(n, E), { scroll: A } = _;
	return A && (translateAxis(O.x, A.offset.x), translateAxis(O.y, A.offset.y)), O;
}
var createAxisDelta = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), createDelta = () => ({
	x: createAxisDelta(),
	y: createAxisDelta()
}), createAxis = () => ({
	min: 0,
	max: 0
}), createBox = () => ({
	x: createAxis(),
	y: createAxis()
}), prefersReducedMotion = { current: null }, hasReducedMotionListener = { current: !1 };
function initPrefersReducedMotion() {
	if (hasReducedMotionListener.current = !0, isBrowser) if (window.matchMedia) {
		let n = window.matchMedia("(prefers-reduced-motion)"), _ = () => prefersReducedMotion.current = n.matches;
		n.addEventListener("change", _), _();
	} else prefersReducedMotion.current = !1;
}
var visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(n, _, E) {
	for (let O in _) {
		let A = _[O], j = E[O];
		if (isMotionValue(A)) n.addValue(O, A);
		else if (isMotionValue(j)) n.addValue(O, motionValue(A, { owner: n }));
		else if (j !== A) if (n.hasValue(O)) {
			let _ = n.getValue(O);
			_.liveStyle === !0 ? _.jump(A) : _.hasAnimated || _.set(A);
		} else {
			let _ = n.getStaticValue(O);
			n.addValue(O, motionValue(_ === void 0 ? A : _, { owner: n }));
		}
	}
	for (let O in E) _[O] === void 0 && n.removeValue(O);
	return _;
}
var propEventHandlers = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], VisualElement = class {
	scrapeMotionValuesFromProps(n, _, E) {
		return {};
	}
	constructor({ parent: n, props: _, presenceContext: E, reducedMotionConfig: O, blockInitialAnimation: A, visualState: j }, M = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let n = time.now();
			this.renderScheduledAt < n && (this.renderScheduledAt = n, frame.render(this.render, !1, !0));
		};
		let { latestValues: N, renderState: P } = j;
		this.latestValues = N, this.baseTarget = { ...N }, this.initialValues = _.initial ? { ...N } : {}, this.renderState = P, this.parent = n, this.props = _, this.presenceContext = E, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = O, this.options = M, this.blockInitialAnimation = !!A, this.isControllingVariants = isControllingVariants(_), this.isVariantNode = isVariantNode(_), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
		let { willChange: z, ...B } = this.scrapeMotionValuesFromProps(_, {}, this);
		for (let n in B) {
			let _ = B[n];
			N[n] !== void 0 && isMotionValue(_) && _.set(N[n]);
		}
	}
	mount(n) {
		this.current = n, visualElementStore.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, _) => this.bindToMotionValue(_, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = prefersReducedMotion.current), process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		for (let n in this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[n].clear();
		for (let n in this.features) {
			let _ = this.features[n];
			_ && (_.unmount(), _.isMounted = !1);
		}
		this.current = null;
	}
	addChild(n) {
		this.children.add(n), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(n);
	}
	removeChild(n) {
		this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n);
	}
	bindToMotionValue(n, _) {
		this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
		let E = transformProps.has(n);
		E && this.onBindTransform && this.onBindTransform();
		let O = _.on("change", (_) => {
			this.latestValues[n] = _, this.props.onUpdate && frame.preRender(this.notifyUpdate), E && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), A;
		window.MotionCheckAppearSync && (A = window.MotionCheckAppearSync(this, n, _)), this.valueSubscriptions.set(n, () => {
			O(), A && A(), _.owner && _.stop();
		});
	}
	sortNodePosition(n) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
	}
	updateFeatures() {
		let n = "animation";
		for (n in featureDefinitions) {
			let _ = featureDefinitions[n];
			if (!_) continue;
			let { isEnabled: E, Feature: O } = _;
			if (!this.features[n] && O && E(this.props) && (this.features[n] = new O(this)), this.features[n]) {
				let _ = this.features[n];
				_.isMounted ? _.update() : (_.mount(), _.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(n) {
		return this.latestValues[n];
	}
	setStaticValue(n, _) {
		this.latestValues[n] = _;
	}
	update(n, _) {
		(n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = _;
		for (let _ = 0; _ < propEventHandlers.length; _++) {
			let E = propEventHandlers[_];
			this.propEventSubscriptions[E] && (this.propEventSubscriptions[E](), delete this.propEventSubscriptions[E]);
			let O = n["on" + E];
			O && (this.propEventSubscriptions[E] = this.on(E, O));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(n, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(n) {
		return this.props.variants ? this.props.variants[n] : void 0;
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	getClosestVariantNode() {
		return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
	}
	addVariantChild(n) {
		let _ = this.getClosestVariantNode();
		if (_) return _.variantChildren && _.variantChildren.add(n), () => _.variantChildren.delete(n);
	}
	addValue(n, _) {
		let E = this.values.get(n);
		_ !== E && (E && this.removeValue(n), this.bindToMotionValue(n, _), this.values.set(n, _), this.latestValues[n] = _.get());
	}
	removeValue(n) {
		this.values.delete(n);
		let _ = this.valueSubscriptions.get(n);
		_ && (_(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
	}
	hasValue(n) {
		return this.values.has(n);
	}
	getValue(n, _) {
		if (this.props.values && this.props.values[n]) return this.props.values[n];
		let E = this.values.get(n);
		return E === void 0 && _ !== void 0 && (E = motionValue(_ === null ? void 0 : _, { owner: this }), this.addValue(n, E)), E;
	}
	readValue(n, _) {
		let E = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
		return E != null && (typeof E == "string" && (isNumericalString(E) || isZeroValueString(E)) ? E = parseFloat(E) : !findValueType(E) && complex.test(_) && (E = getAnimatableNone(n, _)), this.setBaseTarget(n, isMotionValue(E) ? E.get() : E)), isMotionValue(E) ? E.get() : E;
	}
	setBaseTarget(n, _) {
		this.baseTarget[n] = _;
	}
	getBaseTarget(n) {
		let { initial: _ } = this.props, E;
		if (typeof _ == "string" || typeof _ == "object") {
			let O = resolveVariantFromProps(this.props, _, this.presenceContext?.custom);
			O && (E = O[n]);
		}
		if (_ && E !== void 0) return E;
		let O = this.getBaseTargetFromProps(this.props, n);
		return O !== void 0 && !isMotionValue(O) ? O : this.initialValues[n] !== void 0 && E === void 0 ? void 0 : this.baseTarget[n];
	}
	on(n, _) {
		return this.events[n] || (this.events[n] = new SubscriptionManager()), this.events[n].add(_);
	}
	notify(n, ..._) {
		this.events[n] && this.events[n].notify(..._);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(n, _) {
		return n.compareDocumentPosition(_) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(n, _) {
		return n.style ? n.style[_] : void 0;
	}
	removeValueFromRenderState(n, { vars: _, style: E }) {
		delete _[n], delete E[n];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: n } = this.props;
		isMotionValue(n) && (this.childSubscription = n.on("change", (n) => {
			this.current && (this.current.textContent = `${n}`);
		}));
	}
};
function renderHTML(n, { style: _, vars: E }, O, A) {
	let j = n.style, M;
	for (M in _) j[M] = _[M];
	for (M in A?.applyProjectionStyles(j, O), E) j.setProperty(M, E[M]);
}
function getComputedStyle$1(n) {
	return window.getComputedStyle(n);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(n, _) {
		if (transformProps.has(_)) return this.projection?.isProjecting ? defaultTransformValue(_) : readTransformValue(n, _);
		{
			let E = getComputedStyle$1(n), O = (isCSSVariableName(_) ? E.getPropertyValue(_) : E[_]) || 0;
			return typeof O == "string" ? O.trim() : O;
		}
	}
	measureInstanceViewportBox(n, { transformPagePoint: _ }) {
		return measureViewportBox(n, _);
	}
	build(n, _, E) {
		buildHTMLStyles(n, _, E.transformTemplate);
	}
	scrapeMotionValuesFromProps(n, _, E) {
		return scrapeMotionValuesFromProps$1(n, _, E);
	}
}, camelCaseAttributes = new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]);
function renderSVG(n, _, E, O) {
	for (let E in renderHTML(n, _, void 0, O), _.attrs) n.setAttribute(camelCaseAttributes.has(E) ? E : camelToDash(E), _.attrs[E]);
}
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(n, _) {
		return n[_];
	}
	readValueFromInstance(n, _) {
		if (transformProps.has(_)) {
			let n = getDefaultValueType(_);
			return n && n.default || 0;
		}
		return _ = camelCaseAttributes.has(_) ? _ : camelToDash(_), n.getAttribute(_);
	}
	scrapeMotionValuesFromProps(n, _, E) {
		return scrapeMotionValuesFromProps(n, _, E);
	}
	build(n, _, E) {
		buildSVGAttrs(n, _, this.isSVGTag, E.transformTemplate, E.style);
	}
	renderInstance(n, _, E, O) {
		renderSVG(n, _, E, O);
	}
	mount(n) {
		this.isSVGTag = isSVGTag(n.tagName), super.mount(n);
	}
}, createDomVisualElement = (n, _) => _.isSVG ?? isSVGComponent(n) ? new SVGVisualElement(_) : new HTMLVisualElement(_, { allowProjection: n !== Fragment });
function resolveVariant(n, _, E) {
	let O = n.getProps();
	return resolveVariantFromProps(O, _, E === void 0 ? O.custom : E, n);
}
var isKeyframesTarget = (n) => Array.isArray(n);
function setMotionValue(n, _, E) {
	n.hasValue(_) ? n.getValue(_).set(E) : n.addValue(_, motionValue(E));
}
function resolveFinalValueInKeyframes(n) {
	return isKeyframesTarget(n) ? n[n.length - 1] || 0 : n;
}
function setTarget(n, _) {
	let { transitionEnd: E = {}, transition: O = {}, ...A } = resolveVariant(n, _) || {};
	for (let _ in A = {
		...A,
		...E
	}, A) setMotionValue(n, _, resolveFinalValueInKeyframes(A[_]));
}
function isWillChangeMotionValue(n) {
	return !!(isMotionValue(n) && n.add);
}
function addValueToWillChange(n, _) {
	let E = n.getValue("willChange");
	if (isWillChangeMotionValue(E)) return E.add(_);
	if (!E && MotionGlobalConfig.WillChange) {
		let E = new MotionGlobalConfig.WillChange("auto");
		n.addValue("willChange", E), E.add(_);
	}
}
function getOptimisedAppearId(n) {
	return n.props[optimizedAppearDataAttribute];
}
var isNotNull = (n) => n !== null;
function getFinalKeyframe(n, { repeat: _, repeatType: E = "loop" }, O) {
	let A = n.filter(isNotNull), j = _ && E !== "loop" && _ % 2 == 1 ? 0 : A.length - 1;
	return !j || O === void 0 ? A[j] : O;
}
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, criticallyDampedSpring = (n) => ({
	type: "spring",
	stiffness: 550,
	damping: n === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), keyframesTransition = {
	type: "keyframes",
	duration: .8
}, ease = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, getDefaultTransition = (n, { keyframes: _ }) => _.length > 2 ? keyframesTransition : transformProps.has(n) ? n.startsWith("scale") ? criticallyDampedSpring(_[1]) : underDampedSpring : ease;
function isTransitionDefined({ when: n, delay: _, delayChildren: E, staggerChildren: O, staggerDirection: A, repeat: j, repeatType: M, repeatDelay: N, from: P, elapsed: z, ...B }) {
	return !!Object.keys(B).length;
}
var animateMotionValue = (n, _, E, O = {}, A, j) => (M) => {
	let N = getValueTransition(O, n) || {}, P = N.delay || O.delay || 0, { elapsed: z = 0 } = O;
	z -= /* @__PURE__ */ secondsToMilliseconds(P);
	let B = {
		keyframes: Array.isArray(E) ? E : [null, E],
		ease: "easeOut",
		velocity: _.getVelocity(),
		...N,
		delay: -z,
		onUpdate: (n) => {
			_.set(n), N.onUpdate && N.onUpdate(n);
		},
		onComplete: () => {
			M(), N.onComplete && N.onComplete();
		},
		name: n,
		motionValue: _,
		element: j ? void 0 : A
	};
	isTransitionDefined(N) || Object.assign(B, getDefaultTransition(n, B)), B.duration &&= /* @__PURE__ */ secondsToMilliseconds(B.duration), B.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(B.repeatDelay), B.from !== void 0 && (B.keyframes[0] = B.from);
	let H = !1;
	if ((B.type === !1 || B.duration === 0 && !B.repeatDelay) && (makeAnimationInstant(B), B.delay === 0 && (H = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) && (H = !0, makeAnimationInstant(B), B.delay = 0), B.allowFlatten = !N.type && !N.ease, H && !j && _.get() !== void 0) {
		let n = getFinalKeyframe(B.keyframes, N);
		if (n !== void 0) {
			frame.update(() => {
				B.onUpdate(n), B.onComplete();
			});
			return;
		}
	}
	return N.isSync ? new JSAnimation(B) : new AsyncMotionValueAnimation(B);
};
function shouldBlockAnimation({ protectedKeys: n, needsAnimating: _ }, E) {
	let O = n.hasOwnProperty(E) && _[E] !== !0;
	return _[E] = !1, O;
}
function animateTarget(n, _, { delay: E = 0, transitionOverride: O, type: A } = {}) {
	let { transition: j = n.getDefaultTransition(), transitionEnd: M, ...N } = _;
	O && (j = O);
	let P = [], z = A && n.animationState && n.animationState.getState()[A];
	for (let _ in N) {
		let O = n.getValue(_, n.latestValues[_] ?? null), A = N[_];
		if (A === void 0 || z && shouldBlockAnimation(z, _)) continue;
		let M = {
			delay: E,
			...getValueTransition(j || {}, _)
		}, B = O.get();
		if (B !== void 0 && !O.isAnimating && !Array.isArray(A) && A === B && !M.velocity) continue;
		let H = !1;
		if (window.MotionHandoffAnimation) {
			let E = getOptimisedAppearId(n);
			if (E) {
				let n = window.MotionHandoffAnimation(E, _, frame);
				n !== null && (M.startTime = n, H = !0);
			}
		}
		addValueToWillChange(n, _), O.start(animateMotionValue(_, O, A, n.shouldReduceMotion && positionalKeys.has(_) ? { type: !1 } : M, n, H));
		let U = O.animation;
		U && P.push(U);
	}
	return M && Promise.all(P).then(() => {
		frame.update(() => {
			M && setTarget(n, M);
		});
	}), P;
}
function calcChildStagger(n, _, E, O = 0, A = 1) {
	let j = Array.from(n).sort((n, _) => n.sortNodePosition(_)).indexOf(_), M = n.size, N = (M - 1) * O;
	return typeof E == "function" ? E(j, M) : A === 1 ? j * O : N - j * O;
}
function animateVariant(n, _, E = {}) {
	let O = resolveVariant(n, _, E.type === "exit" ? n.presenceContext?.custom : void 0), { transition: A = n.getDefaultTransition() || {} } = O || {};
	E.transitionOverride && (A = E.transitionOverride);
	let j = O ? () => Promise.all(animateTarget(n, O, E)) : () => Promise.resolve(), M = n.variantChildren && n.variantChildren.size ? (O = 0) => {
		let { delayChildren: j = 0, staggerChildren: M, staggerDirection: N } = A;
		return animateChildren(n, _, O, j, M, N, E);
	} : () => Promise.resolve(), { when: N } = A;
	if (N) {
		let [n, _] = N === "beforeChildren" ? [j, M] : [M, j];
		return n().then(() => _());
	} else return Promise.all([j(), M(E.delay)]);
}
function animateChildren(n, _, E = 0, O = 0, A = 0, j = 1, M) {
	let N = [];
	for (let P of n.variantChildren) P.notify("AnimationStart", _), N.push(animateVariant(P, _, {
		...M,
		delay: E + (typeof O == "function" ? 0 : O) + calcChildStagger(n.variantChildren, P, O, A, j)
	}).then(() => P.notify("AnimationComplete", _)));
	return Promise.all(N);
}
function animateVisualElement(n, _, E = {}) {
	n.notify("AnimationStart", _);
	let O;
	if (Array.isArray(_)) {
		let A = _.map((_) => animateVariant(n, _, E));
		O = Promise.all(A);
	} else if (typeof _ == "string") O = animateVariant(n, _, E);
	else {
		let A = typeof _ == "function" ? resolveVariant(n, _, E.custom) : _;
		O = Promise.all(animateTarget(n, A, E));
	}
	return O.then(() => {
		n.notify("AnimationComplete", _);
	});
}
function shallowCompare(n, _) {
	if (!Array.isArray(_)) return !1;
	let E = _.length;
	if (E !== n.length) return !1;
	for (let O = 0; O < E; O++) if (_[O] !== n[O]) return !1;
	return !0;
}
var numVariantProps = variantProps.length;
function getVariantContext(n) {
	if (!n) return;
	if (!n.isControllingVariants) {
		let _ = n.parent && getVariantContext(n.parent) || {};
		return n.props.initial !== void 0 && (_.initial = n.props.initial), _;
	}
	let _ = {};
	for (let E = 0; E < numVariantProps; E++) {
		let O = variantProps[E], A = n.props[O];
		(isVariantLabel(A) || A === !1) && (_[O] = A);
	}
	return _;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(n) {
	return (_) => Promise.all(_.map(({ animation: _, options: E }) => animateVisualElement(n, _, E)));
}
function createAnimationState(n) {
	let _ = animateList(n), E = createState(), O = !0, A = (_) => (E, O) => {
		let A = resolveVariant(n, O, _ === "exit" ? n.presenceContext?.custom : void 0);
		if (A) {
			let { transition: n, transitionEnd: _, ...O } = A;
			E = {
				...E,
				...O,
				..._
			};
		}
		return E;
	};
	function j(E) {
		_ = E(n);
	}
	function M(j) {
		let { props: M } = n, N = getVariantContext(n.parent) || {}, P = [], z = /* @__PURE__ */ new Set(), B = {}, H = Infinity;
		for (let _ = 0; _ < numAnimationTypes; _++) {
			let U = reversePriorityOrder[_], W = E[U], G = M[U] === void 0 ? N[U] : M[U], Z = isVariantLabel(G), Mj = U === j ? W.isActive : null;
			Mj === !1 && (H = _);
			let Nj = G === N[U] && G !== M[U] && Z;
			if (Nj && O && n.manuallyAnimateOnMount && (Nj = !1), W.protectedKeys = { ...B }, !W.isActive && Mj === null || !G && !W.prevProp || isAnimationControls(G) || typeof G == "boolean") continue;
			let Pj = checkVariantsDidChange(W.prevProp, G), Fj = Pj || U === j && W.isActive && !Nj && Z || _ > H && Z, Ij = !1, Lj = Array.isArray(G) ? G : [G], Rj = Lj.reduce(A(U), {});
			Mj === !1 && (Rj = {});
			let { prevResolvedValues: zj = {} } = W, Bj = {
				...zj,
				...Rj
			}, Vj = (_) => {
				Fj = !0, z.has(_) && (Ij = !0, z.delete(_)), W.needsAnimating[_] = !0;
				let E = n.getValue(_);
				E && (E.liveStyle = !1);
			};
			for (let n in Bj) {
				let _ = Rj[n], E = zj[n];
				if (B.hasOwnProperty(n)) continue;
				let O = !1;
				O = isKeyframesTarget(_) && isKeyframesTarget(E) ? !shallowCompare(_, E) : _ !== E, O ? _ == null ? z.add(n) : Vj(n) : _ !== void 0 && z.has(n) ? Vj(n) : W.protectedKeys[n] = !0;
			}
			W.prevProp = G, W.prevResolvedValues = Rj, W.isActive && (B = {
				...B,
				...Rj
			}), O && n.blockInitialAnimation && (Fj = !1);
			let Hj = Nj && Pj;
			Fj && (!Hj || Ij) && P.push(...Lj.map((_) => {
				let E = { type: U };
				if (typeof _ == "string" && O && !Hj && n.manuallyAnimateOnMount && n.parent) {
					let { parent: O } = n, A = resolveVariant(O, _);
					if (O.enteringChildren && A) {
						let { delayChildren: _ } = A.transition || {};
						E.delay = calcChildStagger(O.enteringChildren, n, _);
					}
				}
				return {
					animation: _,
					options: E
				};
			}));
		}
		if (z.size) {
			let _ = {};
			if (typeof M.initial != "boolean") {
				let E = resolveVariant(n, Array.isArray(M.initial) ? M.initial[0] : M.initial);
				E && E.transition && (_.transition = E.transition);
			}
			z.forEach((E) => {
				let O = n.getBaseTarget(E), A = n.getValue(E);
				A && (A.liveStyle = !0), _[E] = O ?? null;
			}), P.push({ animation: _ });
		}
		let U = !!P.length;
		return O && (M.initial === !1 || M.initial === M.animate) && !n.manuallyAnimateOnMount && (U = !1), O = !1, U ? _(P) : Promise.resolve();
	}
	function N(_, O) {
		if (E[_].isActive === O) return Promise.resolve();
		n.variantChildren?.forEach((n) => n.animationState?.setActive(_, O)), E[_].isActive = O;
		let A = M(_);
		for (let n in E) E[n].protectedKeys = {};
		return A;
	}
	return {
		animateChanges: M,
		setActive: N,
		setAnimateFunction: j,
		getState: () => E,
		reset: () => {
			E = createState();
		}
	};
}
function checkVariantsDidChange(n, _) {
	return typeof _ == "string" ? _ !== n : Array.isArray(_) ? !shallowCompare(_, n) : !1;
}
function createTypeState(n = !1) {
	return {
		isActive: n,
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {}
	};
}
function createState() {
	return {
		animate: createTypeState(!0),
		whileInView: createTypeState(),
		whileHover: createTypeState(),
		whileTap: createTypeState(),
		whileDrag: createTypeState(),
		whileFocus: createTypeState(),
		exit: createTypeState()
	};
}
var Feature = class {
	constructor(n) {
		this.isMounted = !1, this.node = n;
	}
	update() {}
}, AnimationFeature = class extends Feature {
	constructor(n) {
		super(n), n.animationState ||= createAnimationState(n);
	}
	updateAnimationControlsSubscription() {
		let { animate: n } = this.node.getProps();
		isAnimationControls(n) && (this.unmountControls = n.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: n } = this.node.getProps(), { animate: _ } = this.node.prevProps || {};
		n !== _ && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, id$1 = 0, animations = {
	animation: { Feature: AnimationFeature },
	exit: { Feature: class extends Feature {
		constructor() {
			super(...arguments), this.id = id$1++;
		}
		update() {
			if (!this.node.presenceContext) return;
			let { isPresent: n, onExitComplete: _ } = this.node.presenceContext, { isPresent: E } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || n === E) return;
			let O = this.node.animationState.setActive("exit", !n);
			_ && !n && O.then(() => {
				_(this.id);
			});
		}
		mount() {
			let { register: n, onExitComplete: _ } = this.node.presenceContext || {};
			_ && _(this.id), n && (this.unmount = n(this.id));
		}
		unmount() {}
	} }
};
function addDomEvent(n, _, E, O = { passive: !0 }) {
	return n.addEventListener(_, E, O), () => n.removeEventListener(_, E);
}
function extractEventInfo(n) {
	return { point: {
		x: n.pageX,
		y: n.pageY
	} };
}
var addPointerInfo = (n) => (_) => isPrimaryPointer(_) && n(_, extractEventInfo(_));
function addPointerEvent(n, _, E, O) {
	return addDomEvent(n, _, addPointerInfo(E), O);
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(n) {
	return n.max - n.min;
}
function isNear(n, _, E) {
	return Math.abs(n - _) <= E;
}
function calcAxisDelta(n, _, E, O = .5) {
	n.origin = O, n.originPoint = mixNumber(_.min, _.max, n.origin), n.scale = calcLength(E) / calcLength(_), n.translate = mixNumber(E.min, E.max, n.origin) - n.originPoint, (n.scale >= SCALE_MIN && n.scale <= SCALE_MAX || isNaN(n.scale)) && (n.scale = 1), (n.translate >= TRANSLATE_MIN && n.translate <= TRANSLATE_MAX || isNaN(n.translate)) && (n.translate = 0);
}
function calcBoxDelta(n, _, E, O) {
	calcAxisDelta(n.x, _.x, E.x, O ? O.originX : void 0), calcAxisDelta(n.y, _.y, E.y, O ? O.originY : void 0);
}
function calcRelativeAxis(n, _, E) {
	n.min = E.min + _.min, n.max = n.min + calcLength(_);
}
function calcRelativeBox(n, _, E) {
	calcRelativeAxis(n.x, _.x, E.x), calcRelativeAxis(n.y, _.y, E.y);
}
function calcRelativeAxisPosition(n, _, E) {
	n.min = _.min - E.min, n.max = n.min + calcLength(_);
}
function calcRelativePosition(n, _, E) {
	calcRelativeAxisPosition(n.x, _.x, E.x), calcRelativeAxisPosition(n.y, _.y, E.y);
}
function eachAxis(n) {
	return [n("x"), n("y")];
}
var getContextWindow = ({ current: n }) => n ? n.ownerDocument.defaultView : null, distance = (n, _) => Math.abs(n - _);
function distance2D(n, _) {
	let E = distance(n.x, _.x), O = distance(n.y, _.y);
	return Math.sqrt(E ** 2 + O ** 2);
}
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]), PanSession = class {
	constructor(n, _, { transformPagePoint: E, contextWindow: O = window, dragSnapToOrigin: A = !1, distanceThreshold: j = 3, element: M } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (n) => {
			this.handleScroll(n.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let n = getPanInfo(this.lastMoveEventInfo, this.history), _ = this.startEvent !== null, E = distance2D(n.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!_ && !E) return;
			let { point: O } = n, { timestamp: A } = frameData;
			this.history.push({
				...O,
				timestamp: A
			});
			let { onStart: j, onMove: M } = this.handlers;
			_ || (j && j(this.lastMoveEvent, n), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, n);
		}, this.handlePointerMove = (n, _) => {
			this.lastMoveEvent = n, this.lastMoveEventInfo = transformPoint(_, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (n, _) => {
			this.end();
			let { onEnd: E, onSessionEnd: O, resumeAnimation: A } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && A && A(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let j = getPanInfo(n.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(_, this.transformPagePoint), this.history);
			this.startEvent && E && E(n, j), O && O(n, j);
		}, !isPrimaryPointer(n)) return;
		this.dragSnapToOrigin = A, this.handlers = _, this.transformPagePoint = E, this.distanceThreshold = j, this.contextWindow = O || window;
		let N = transformPoint(extractEventInfo(n), this.transformPagePoint), { point: P } = N, { timestamp: z } = frameData;
		this.history = [{
			...P,
			timestamp: z
		}];
		let { onSessionStart: B } = _;
		B && B(n, getPanInfo(N, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp)), M && this.startScrollTracking(M);
	}
	startScrollTracking(n) {
		let _ = n.parentElement;
		for (; _;) {
			let n = getComputedStyle(_);
			(overflowStyles.has(n.overflowX) || overflowStyles.has(n.overflowY)) && this.scrollPositions.set(_, {
				x: _.scrollLeft,
				y: _.scrollTop
			}), _ = _.parentElement;
		}
		this.scrollPositions.set(window, {
			x: window.scrollX,
			y: window.scrollY
		}), window.addEventListener("scroll", this.onElementScroll, {
			capture: !0,
			passive: !0
		}), window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }), this.removeScrollListeners = () => {
			window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll);
		};
	}
	handleScroll(n) {
		let _ = this.scrollPositions.get(n);
		if (!_) return;
		let E = n === window, O = E ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: n.scrollLeft,
			y: n.scrollTop
		}, A = {
			x: O.x - _.x,
			y: O.y - _.y
		};
		A.x === 0 && A.y === 0 || (E ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += A.x, this.lastMoveEventInfo.point.y += A.y) : this.history.length > 0 && (this.history[0].x -= A.x, this.history[0].y -= A.y), this.scrollPositions.set(n, O), frame.update(this.updatePoint, !0));
	}
	updateHandlers(n) {
		this.handlers = n;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), cancelFrame(this.updatePoint);
	}
};
function transformPoint(n, _) {
	return _ ? { point: _(n.point) } : n;
}
function subtractPoint(n, _) {
	return {
		x: n.x - _.x,
		y: n.y - _.y
	};
}
function getPanInfo({ point: n }, _) {
	return {
		point: n,
		delta: subtractPoint(n, lastDevicePoint(_)),
		offset: subtractPoint(n, startDevicePoint(_)),
		velocity: getVelocity(_, .1)
	};
}
function startDevicePoint(n) {
	return n[0];
}
function lastDevicePoint(n) {
	return n[n.length - 1];
}
function getVelocity(n, _) {
	if (n.length < 2) return {
		x: 0,
		y: 0
	};
	let E = n.length - 1, O = null, A = lastDevicePoint(n);
	for (; E >= 0 && (O = n[E], !(A.timestamp - O.timestamp > /* @__PURE__ */ secondsToMilliseconds(_)));) E--;
	if (!O) return {
		x: 0,
		y: 0
	};
	let j = /* @__PURE__ */ millisecondsToSeconds(A.timestamp - O.timestamp);
	if (j === 0) return {
		x: 0,
		y: 0
	};
	let M = {
		x: (A.x - O.x) / j,
		y: (A.y - O.y) / j
	};
	return M.x === Infinity && (M.x = 0), M.y === Infinity && (M.y = 0), M;
}
function applyConstraints(n, { min: _, max: E }, O) {
	return _ !== void 0 && n < _ ? n = O ? mixNumber(_, n, O.min) : Math.max(n, _) : E !== void 0 && n > E && (n = O ? mixNumber(E, n, O.max) : Math.min(n, E)), n;
}
function calcRelativeAxisConstraints(n, _, E) {
	return {
		min: _ === void 0 ? void 0 : n.min + _,
		max: E === void 0 ? void 0 : n.max + E - (n.max - n.min)
	};
}
function calcRelativeConstraints(n, { top: _, left: E, bottom: O, right: A }) {
	return {
		x: calcRelativeAxisConstraints(n.x, E, A),
		y: calcRelativeAxisConstraints(n.y, _, O)
	};
}
function calcViewportAxisConstraints(n, _) {
	let E = _.min - n.min, O = _.max - n.max;
	return _.max - _.min < n.max - n.min && ([E, O] = [O, E]), {
		min: E,
		max: O
	};
}
function calcViewportConstraints(n, _) {
	return {
		x: calcViewportAxisConstraints(n.x, _.x),
		y: calcViewportAxisConstraints(n.y, _.y)
	};
}
function calcOrigin(n, _) {
	let E = .5, O = calcLength(n), A = calcLength(_);
	return A > O ? E = /* @__PURE__ */ progress(_.min, _.max - O, n.min) : O > A && (E = /* @__PURE__ */ progress(n.min, n.max - A, _.min)), clamp(0, 1, E);
}
function rebaseAxisConstraints(n, _) {
	let E = {};
	return _.min !== void 0 && (E.min = _.min - n.min), _.max !== void 0 && (E.max = _.max - n.min), E;
}
var defaultElastic = .35;
function resolveDragElastic(n = defaultElastic) {
	return n === !1 ? n = 0 : n === !0 && (n = defaultElastic), {
		x: resolveAxisElastic(n, "left", "right"),
		y: resolveAxisElastic(n, "top", "bottom")
	};
}
function resolveAxisElastic(n, _, E) {
	return {
		min: resolvePointElastic(n, _),
		max: resolvePointElastic(n, E)
	};
}
function resolvePointElastic(n, _) {
	return typeof n == "number" ? n : n[_] || 0;
}
var elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
	constructor(n) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = n;
	}
	start(n, { snapToCursor: _ = !1, distanceThreshold: E } = {}) {
		let { presenceContext: O } = this.visualElement;
		if (O && O.isPresent === !1) return;
		let A = (n) => {
			_ ? (this.stopAnimation(), this.snapToCursor(extractEventInfo(n).point)) : this.pauseAnimation();
		}, j = (n, _) => {
			this.stopAnimation();
			let { drag: E, dragPropagation: O, onDragStart: A } = this.getProps();
			if (E && !O && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(E), !this.openDragLock)) return;
			this.latestPointerEvent = n, this.latestPanInfo = _, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((n) => {
				let _ = this.getAxisMotionValue(n).get() || 0;
				if (percent.test(_)) {
					let { projection: E } = this.visualElement;
					if (E && E.layout) {
						let O = E.layout.layoutBox[n];
						O && (_ = calcLength(O) * (parseFloat(_) / 100));
					}
				}
				this.originPoint[n] = _;
			}), A && frame.postRender(() => A(n, _)), addValueToWillChange(this.visualElement, "transform");
			let { animationState: j } = this.visualElement;
			j && j.setActive("whileDrag", !0);
		}, M = (n, _) => {
			this.latestPointerEvent = n, this.latestPanInfo = _;
			let { dragPropagation: E, dragDirectionLock: O, onDirectionLock: A, onDrag: j } = this.getProps();
			if (!E && !this.openDragLock) return;
			let { offset: M } = _;
			if (O && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(M), this.currentDirection !== null && A && A(this.currentDirection);
				return;
			}
			this.updateAxis("x", _.point, M), this.updateAxis("y", _.point, M), this.visualElement.render(), j && j(n, _);
		}, N = (n, _) => {
			this.latestPointerEvent = n, this.latestPanInfo = _, this.stop(n, _), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, P = () => eachAxis((n) => this.getAnimationState(n) === "paused" && this.getAxisMotionValue(n).animation?.play()), { dragSnapToOrigin: z } = this.getProps();
		this.panSession = new PanSession(n, {
			onSessionStart: A,
			onStart: j,
			onMove: M,
			onSessionEnd: N,
			resumeAnimation: P
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: z,
			distanceThreshold: E,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(n, _) {
		let E = n || this.latestPointerEvent, O = _ || this.latestPanInfo, A = this.isDragging;
		if (this.cancel(), !A || !O || !E) return;
		let { velocity: j } = O;
		this.startAnimation(j);
		let { onDragEnd: M } = this.getProps();
		M && frame.postRender(() => M(E, O));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: n, animationState: _ } = this.visualElement;
		n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: E } = this.getProps();
		!E && this.openDragLock && (this.openDragLock(), this.openDragLock = null), _ && _.setActive("whileDrag", !1);
	}
	updateAxis(n, _, E) {
		let { drag: O } = this.getProps();
		if (!E || !shouldDrag(n, O, this.currentDirection)) return;
		let A = this.getAxisMotionValue(n), j = this.originPoint[n] + E[n];
		this.constraints && this.constraints[n] && (j = applyConstraints(j, this.constraints[n], this.elastic[n])), A.set(j);
	}
	resolveConstraints() {
		let { dragConstraints: n, dragElastic: _ } = this.getProps(), E = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, O = this.constraints;
		n && isRefObject(n) ? this.constraints ||= this.resolveRefConstraints() : n && E ? this.constraints = calcRelativeConstraints(E.layoutBox, n) : this.constraints = !1, this.elastic = resolveDragElastic(_), O !== this.constraints && E && this.constraints && !this.hasMutatedConstraints && eachAxis((n) => {
			this.constraints !== !1 && this.getAxisMotionValue(n) && (this.constraints[n] = rebaseAxisConstraints(E.layoutBox[n], this.constraints[n]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: n, onMeasureDragConstraints: _ } = this.getProps();
		if (!n || !isRefObject(n)) return !1;
		let E = n.current;
		invariant(E !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: O } = this.visualElement;
		if (!O || !O.layout) return !1;
		let A = measurePageBox(E, O.root, this.visualElement.getTransformPagePoint()), j = calcViewportConstraints(O.layout.layoutBox, A);
		if (_) {
			let n = _(convertBoxToBoundingBox(j));
			this.hasMutatedConstraints = !!n, n && (j = convertBoundingBoxToBox(n));
		}
		return j;
	}
	startAnimation(n) {
		let { drag: _, dragMomentum: E, dragElastic: O, dragTransition: A, dragSnapToOrigin: j, onDragTransitionEnd: M } = this.getProps(), N = this.constraints || {}, P = eachAxis((M) => {
			if (!shouldDrag(M, _, this.currentDirection)) return;
			let P = N && N[M] || {};
			j && (P = {
				min: 0,
				max: 0
			});
			let z = O ? 200 : 1e6, B = O ? 40 : 1e7, H = {
				type: "inertia",
				velocity: E ? n[M] : 0,
				bounceStiffness: z,
				bounceDamping: B,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...A,
				...P
			};
			return this.startAxisValueAnimation(M, H);
		});
		return Promise.all(P).then(M);
	}
	startAxisValueAnimation(n, _) {
		let E = this.getAxisMotionValue(n);
		return addValueToWillChange(this.visualElement, n), E.start(animateMotionValue(n, E, 0, _, this.visualElement, !1));
	}
	stopAnimation() {
		eachAxis((n) => this.getAxisMotionValue(n).stop());
	}
	pauseAnimation() {
		eachAxis((n) => this.getAxisMotionValue(n).animation?.pause());
	}
	getAnimationState(n) {
		return this.getAxisMotionValue(n).animation?.state;
	}
	getAxisMotionValue(n) {
		let _ = `_drag${n.toUpperCase()}`, E = this.visualElement.getProps();
		return E[_] || this.visualElement.getValue(n, (E.initial ? E.initial[n] : void 0) || 0);
	}
	snapToCursor(n) {
		eachAxis((_) => {
			let { drag: E } = this.getProps();
			if (!shouldDrag(_, E, this.currentDirection)) return;
			let { projection: O } = this.visualElement, A = this.getAxisMotionValue(_);
			if (O && O.layout) {
				let { min: E, max: j } = O.layout.layoutBox[_], M = A.get() || 0;
				A.set(n[_] - mixNumber(E, j, .5) + M);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: n, dragConstraints: _ } = this.getProps(), { projection: E } = this.visualElement;
		if (!isRefObject(_) || !E || !this.constraints) return;
		this.stopAnimation();
		let O = {
			x: 0,
			y: 0
		};
		eachAxis((n) => {
			let _ = this.getAxisMotionValue(n);
			if (_ && this.constraints !== !1) {
				let E = _.get();
				O[n] = calcOrigin({
					min: E,
					max: E
				}, this.constraints[n]);
			}
		});
		let { transformTemplate: A } = this.visualElement.getProps();
		this.visualElement.current.style.transform = A ? A({}, "") : "none", E.root && E.root.updateScroll(), E.updateLayout(), this.resolveConstraints(), eachAxis((_) => {
			if (!shouldDrag(_, n, null)) return;
			let E = this.getAxisMotionValue(_), { min: A, max: j } = this.constraints[_];
			E.set(mixNumber(A, j, O[_]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let n = this.visualElement.current, _ = addPointerEvent(n, "pointerdown", (n) => {
			let { drag: _, dragListener: E = !0 } = this.getProps();
			_ && E && !isElementKeyboardAccessible(n.target) && this.start(n);
		}), E = () => {
			let { dragConstraints: n } = this.getProps();
			isRefObject(n) && n.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: O } = this.visualElement, A = O.addEventListener("measure", E);
		O && !O.layout && (O.root && O.root.updateScroll(), O.updateLayout()), frame.read(E);
		let j = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), M = O.addEventListener("didUpdate", (({ delta: n, hasLayoutChanged: _ }) => {
			this.isDragging && _ && (eachAxis((_) => {
				let E = this.getAxisMotionValue(_);
				E && (this.originPoint[_] += n[_].translate, E.set(E.get() + n[_].translate));
			}), this.visualElement.render());
		}));
		return () => {
			j(), _(), A(), M && M();
		};
	}
	getProps() {
		let n = this.visualElement.getProps(), { drag: _ = !1, dragDirectionLock: E = !1, dragPropagation: O = !1, dragConstraints: A = !1, dragElastic: j = defaultElastic, dragMomentum: M = !0 } = n;
		return {
			...n,
			drag: _,
			dragDirectionLock: E,
			dragPropagation: O,
			dragConstraints: A,
			dragElastic: j,
			dragMomentum: M
		};
	}
};
function shouldDrag(n, _, E) {
	return (_ === !0 || _ === n) && (E === null || E === n);
}
function getCurrentDirection(n, _ = 10) {
	let E = null;
	return Math.abs(n.y) > _ ? E = "y" : Math.abs(n.x) > _ && (E = "x"), E;
}
var DragGesture = class extends Feature {
	constructor(n) {
		super(n), this.removeGroupControls = noop, this.removeListeners = noop, this.controls = new VisualElementDragControls(n);
	}
	mount() {
		let { dragControls: n } = this.node.getProps();
		n && (this.removeGroupControls = n.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		let { dragControls: n } = this.node.getProps(), { dragControls: _ } = this.node.prevProps || {};
		n !== _ && (this.removeGroupControls(), n && (this.removeGroupControls = n.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, asyncHandler = (n) => (_, E) => {
	n && frame.postRender(() => n(_, E));
}, PanGesture = class extends Feature {
	constructor() {
		super(...arguments), this.removePointerDownListener = noop;
	}
	onPointerDown(n) {
		this.session = new PanSession(n, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: n, onPanStart: _, onPan: E, onPanEnd: O } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(n),
			onStart: asyncHandler(_),
			onMove: E,
			onEnd: (n, _) => {
				delete this.session, O && frame.postRender(() => O(n, _));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (n) => this.onPointerDown(n));
	}
	update() {
		this.session && this.session.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session && this.session.end();
	}
}, globalProjectionState = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, hasTakenAnySnapshot = !1, MeasureLayoutWithContext = class extends Component {
	componentDidMount() {
		let { visualElement: n, layoutGroup: _, switchLayoutGroup: E, layoutId: O } = this.props, { projection: A } = n;
		A && (_.group && _.group.add(A), E && E.register && O && E.register(A), hasTakenAnySnapshot && A.root.didUpdate(), A.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), A.setOptions({
			...A.options,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(n) {
		let { layoutDependency: _, visualElement: E, drag: O, isPresent: A } = this.props, { projection: j } = E;
		return j ? (j.isPresent = A, hasTakenAnySnapshot = !0, O || n.layoutDependency !== _ || _ === void 0 || n.isPresent !== A ? j.willUpdate() : this.safeToRemove(), n.isPresent !== A && (A ? j.promote() : j.relegate() || frame.postRender(() => {
			let n = j.getStack();
			(!n || !n.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: n } = this.props.visualElement;
		n && (n.root.didUpdate(), microtask.postRender(() => {
			!n.currentAnimation && n.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: n, layoutGroup: _, switchLayoutGroup: E } = this.props, { projection: O } = n;
		hasTakenAnySnapshot = !0, O && (O.scheduleCheckAfterUnmount(), _ && _.group && _.group.remove(O), E && E.deregister && E.deregister(O));
	}
	safeToRemove() {
		let { safeToRemove: n } = this.props;
		n && n();
	}
	render() {
		return null;
	}
};
function MeasureLayout(n) {
	let [_, E] = usePresence(), O = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...n,
		layoutGroup: O,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: _,
		safeToRemove: E
	});
}
function animateSingleValue(n, _, E) {
	let O = isMotionValue(n) ? n : motionValue(n);
	return O.start(animateMotionValue("", O, _, E)), O.animation;
}
var compareByDepth = (n, _) => n.depth - _.depth, FlatTree = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(n) {
		addUniqueItem(this.children, n), this.isDirty = !0;
	}
	remove(n) {
		removeItem(this.children, n), this.isDirty = !0;
	}
	forEach(n) {
		this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(n);
	}
};
function delay(n, _) {
	let E = time.now(), O = ({ timestamp: A }) => {
		let j = A - E;
		j >= _ && (cancelFrame(O), n(j - _));
	};
	return frame.setup(O, !0), () => cancelFrame(O);
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (n) => typeof n == "string" ? parseFloat(n) : n, isPx = (n) => typeof n == "number" || px.test(n);
function mixValues(n, _, E, O, A, j) {
	A ? (n.opacity = mixNumber(0, E.opacity ?? 1, easeCrossfadeIn(O)), n.opacityExit = mixNumber(_.opacity ?? 1, 0, easeCrossfadeOut(O))) : j && (n.opacity = mixNumber(_.opacity ?? 1, E.opacity ?? 1, O));
	for (let A = 0; A < numBorders; A++) {
		let j = `border${borders[A]}Radius`, M = getRadius(_, j), N = getRadius(E, j);
		M === void 0 && N === void 0 || (M ||= 0, N ||= 0, M === 0 || N === 0 || isPx(M) === isPx(N) ? (n[j] = Math.max(mixNumber(asNumber(M), asNumber(N), O), 0), (percent.test(N) || percent.test(M)) && (n[j] += "%")) : n[j] = N);
	}
	(_.rotate || E.rotate) && (n.rotate = mixNumber(_.rotate || 0, E.rotate || 0, O));
}
function getRadius(n, _) {
	return n[_] === void 0 ? n.borderRadius : n[_];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(n, _, E) {
	return (O) => O < n ? 0 : O > _ ? 1 : E(/* @__PURE__ */ progress(n, _, O));
}
function copyAxisInto(n, _) {
	n.min = _.min, n.max = _.max;
}
function copyBoxInto(n, _) {
	copyAxisInto(n.x, _.x), copyAxisInto(n.y, _.y);
}
function copyAxisDeltaInto(n, _) {
	n.translate = _.translate, n.scale = _.scale, n.originPoint = _.originPoint, n.origin = _.origin;
}
function removePointDelta(n, _, E, O, A) {
	return n -= _, n = scalePoint(n, 1 / E, O), A !== void 0 && (n = scalePoint(n, 1 / A, O)), n;
}
function removeAxisDelta(n, _ = 0, E = 1, O = .5, A, j = n, M = n) {
	if (percent.test(_) && (_ = parseFloat(_), _ = mixNumber(M.min, M.max, _ / 100) - M.min), typeof _ != "number") return;
	let N = mixNumber(j.min, j.max, O);
	n === j && (N -= _), n.min = removePointDelta(n.min, _, E, N, A), n.max = removePointDelta(n.max, _, E, N, A);
}
function removeAxisTransforms(n, _, [E, O, A], j, M) {
	removeAxisDelta(n, _[E], _[O], _[A], _.scale, j, M);
}
var xKeys = [
	"x",
	"scaleX",
	"originX"
], yKeys = [
	"y",
	"scaleY",
	"originY"
];
function removeBoxTransforms(n, _, E, O) {
	removeAxisTransforms(n.x, _, xKeys, E ? E.x : void 0, O ? O.x : void 0), removeAxisTransforms(n.y, _, yKeys, E ? E.y : void 0, O ? O.y : void 0);
}
function isAxisDeltaZero(n) {
	return n.translate === 0 && n.scale === 1;
}
function isDeltaZero(n) {
	return isAxisDeltaZero(n.x) && isAxisDeltaZero(n.y);
}
function axisEquals(n, _) {
	return n.min === _.min && n.max === _.max;
}
function boxEquals(n, _) {
	return axisEquals(n.x, _.x) && axisEquals(n.y, _.y);
}
function axisEqualsRounded(n, _) {
	return Math.round(n.min) === Math.round(_.min) && Math.round(n.max) === Math.round(_.max);
}
function boxEqualsRounded(n, _) {
	return axisEqualsRounded(n.x, _.x) && axisEqualsRounded(n.y, _.y);
}
function aspectRatio(n) {
	return calcLength(n.x) / calcLength(n.y);
}
function axisDeltaEquals(n, _) {
	return n.translate === _.translate && n.scale === _.scale && n.originPoint === _.originPoint;
}
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(n) {
		addUniqueItem(this.members, n), n.scheduleRender();
	}
	remove(n) {
		if (removeItem(this.members, n), n === this.prevLead && (this.prevLead = void 0), n === this.lead) {
			let n = this.members[this.members.length - 1];
			n && this.promote(n);
		}
	}
	relegate(n) {
		let _ = this.members.findIndex((_) => n === _);
		if (_ === 0) return !1;
		let E;
		for (let n = _; n >= 0; n--) {
			let _ = this.members[n];
			if (_.isPresent !== !1) {
				E = _;
				break;
			}
		}
		return E ? (this.promote(E), !0) : !1;
	}
	promote(n, _) {
		let E = this.lead;
		if (n !== E && (this.prevLead = E, this.lead = n, n.show(), E)) {
			E.instance && E.scheduleRender(), n.scheduleRender(), n.resumeFrom = E, _ && (n.resumeFrom.preserveOpacity = !0), E.snapshot && (n.snapshot = E.snapshot, n.snapshot.latestValues = E.animationValues || E.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
			let { crossfade: O } = n.options;
			O === !1 && E.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((n) => {
			let { options: _, resumingFrom: E } = n;
			_.onExitComplete && _.onExitComplete(), E && E.options.onExitComplete && E.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((n) => {
			n.instance && n.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
function buildProjectionTransform(n, _, E) {
	let O = "", A = n.x.translate / _.x, j = n.y.translate / _.y, M = E?.z || 0;
	if ((A || j || M) && (O = `translate3d(${A}px, ${j}px, ${M}px) `), (_.x !== 1 || _.y !== 1) && (O += `scale(${1 / _.x}, ${1 / _.y}) `), E) {
		let { transformPerspective: n, rotate: _, rotateX: A, rotateY: j, skewX: M, skewY: N } = E;
		n && (O = `perspective(${n}px) ${O}`), _ && (O += `rotate(${_}deg) `), A && (O += `rotateX(${A}deg) `), j && (O += `rotateY(${j}deg) `), M && (O += `skewX(${M}deg) `), N && (O += `skewY(${N}deg) `);
	}
	let N = n.x.scale * _.x, P = n.y.scale * _.y;
	return (N !== 1 || P !== 1) && (O += `scale(${N}, ${P})`), O || "none";
}
var metrics = {
	nodes: 0,
	calculatedTargetDeltas: 0,
	calculatedProjections: 0
}, transformAxes = [
	"",
	"X",
	"Y",
	"Z"
], animationTarget = 1e3, id = 0;
function resetDistortingTransform(n, _, E, O) {
	let { latestValues: A } = _;
	A[n] && (E[n] = A[n], _.setStaticValue(n, 0), O && (O[n] = 0));
}
function cancelTreeOptimisedTransformAnimations(n) {
	if (n.hasCheckedOptimisedAppear = !0, n.root === n) return;
	let { visualElement: _ } = n.options;
	if (!_) return;
	let E = getOptimisedAppearId(_);
	if (window.MotionHasOptimisedAnimation(E, "transform")) {
		let { layout: _, layoutId: O } = n.options;
		window.MotionCancelOptimisedAnimation(E, "transform", frame, !(_ || O));
	}
	let { parent: O } = n;
	O && !O.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(O);
}
function createProjectionNode({ attachResizeListener: n, defaultParent: _, measureScroll: E, checkIsScrollRoot: O, resetTransform: A }) {
	return class {
		constructor(n = {}, E = _?.()) {
			this.id = id++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, statsBuffer.value && (metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), statsBuffer.addProjectionMetrics && statsBuffer.addProjectionMetrics(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = n, this.root = E ? E.root || E : this, this.path = E ? [...E.path, E] : [], this.parent = E, this.depth = E ? E.depth + 1 : 0;
			for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(n, _) {
			return this.eventHandlers.has(n) || this.eventHandlers.set(n, new SubscriptionManager()), this.eventHandlers.get(n).add(_);
		}
		notifyListeners(n, ..._) {
			let E = this.eventHandlers.get(n);
			E && E.notify(..._);
		}
		hasListeners(n) {
			return this.eventHandlers.has(n);
		}
		mount(_) {
			if (this.instance) return;
			this.isSVG = isSVGElement(_) && !isSVGSVGElement(_), this.instance = _;
			let { layoutId: E, layout: O, visualElement: A } = this.options;
			if (A && !A.current && A.mount(_), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (O || E) && (this.isLayoutDirty = !0), n) {
				let E, O = 0, A = () => this.root.updateBlockedByResize = !1;
				frame.read(() => {
					O = window.innerWidth;
				}), n(_, () => {
					let n = window.innerWidth;
					n !== O && (O = n, this.root.updateBlockedByResize = !0, E && E(), E = delay(A, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation)));
				});
			}
			E && this.root.registerSharedNode(E, this), this.options.animate !== !1 && A && (E || O) && this.addEventListener("didUpdate", ({ delta: n, hasLayoutChanged: _, hasRelativeLayoutChanged: E, layout: O }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let j = this.options.transition || A.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: M, onLayoutAnimationComplete: N } = A.getProps(), P = !this.targetLayout || !boxEqualsRounded(this.targetLayout, O), z = !_ && E;
				if (this.options.layoutRoot || this.resumeFrom || z || _ && (P || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let _ = {
						...getValueTransition(j, "layout"),
						onPlay: M,
						onComplete: N
					};
					(A.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_), this.setAnimationOrigin(n, z);
				} else _ || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = O;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let n = this.getStack();
			n && n.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), cancelFrame(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		isTreeAnimationBlocked() {
			return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(resetSkewAndRotation), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: n } = this.options;
			return n && n.getProps().transformTemplate;
		}
		willUpdate(n = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let n = 0; n < this.path.length; n++) {
				let _ = this.path[n];
				_.shouldResetTransform = !0, _.updateScroll("snapshot"), _.options.layoutRoot && _.willUpdate(!1);
			}
			let { layoutId: _, layout: E } = this.options;
			if (_ === void 0 && !E) return;
			let O = this.getTransformTemplate();
			this.prevTransformTemplateValue = O ? O(this.latestValues, "") : void 0, this.updateSnapshot(), n && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(clearMeasurements);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(clearIsLayoutDirty);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(resetTransformStyle), this.nodes.forEach(updateLayout), this.nodes.forEach(notifyLayoutUpdate)) : this.nodes.forEach(clearIsLayoutDirty), this.clearAllSnapshots();
			let n = time.now();
			frameData.delta = clamp(0, 1e3 / 60, n - frameData.timestamp), frameData.timestamp = n, frameData.isProcessing = !0, frameSteps.update.process(frameData), frameSteps.preRender.process(frameData), frameSteps.render.process(frameData), frameData.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, microtask.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(clearSnapshot), this.sharedNodes.forEach(removeLeadSnapshots);
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, frame.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			frame.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let n = 0; n < this.path.length; n++) this.path[n].updateScroll();
			let n = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: _ } = this.options;
			_ && _.notify("LayoutMeasure", this.layout.layoutBox, n ? n.layoutBox : void 0);
		}
		updateScroll(n = "measure") {
			let _ = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === n && (_ = !1), _ && this.instance) {
				let _ = O(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: n,
					isRoot: _,
					offset: E(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : _
				};
			}
		}
		resetTransform() {
			if (!A) return;
			let n = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, _ = this.projectionDelta && !isDeltaZero(this.projectionDelta), E = this.getTransformTemplate(), O = E ? E(this.latestValues, "") : void 0, j = O !== this.prevTransformTemplateValue;
			n && this.instance && (_ || hasTransform(this.latestValues) || j) && (A(this.instance, O), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(n = !0) {
			let _ = this.measurePageBox(), E = this.removeElementScroll(_);
			return n && (E = this.removeTransform(E)), roundBox(E), {
				animationId: this.root.animationId,
				measuredBox: _,
				layoutBox: E,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: n } = this.options;
			if (!n) return createBox();
			let _ = n.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				let { scroll: n } = this.root;
				n && (translateAxis(_.x, n.offset.x), translateAxis(_.y, n.offset.y));
			}
			return _;
		}
		removeElementScroll(n) {
			let _ = createBox();
			if (copyBoxInto(_, n), this.scroll?.wasRoot) return _;
			for (let E = 0; E < this.path.length; E++) {
				let O = this.path[E], { scroll: A, options: j } = O;
				O !== this.root && A && j.layoutScroll && (A.wasRoot && copyBoxInto(_, n), translateAxis(_.x, A.offset.x), translateAxis(_.y, A.offset.y));
			}
			return _;
		}
		applyTransform(n, _ = !1) {
			let E = createBox();
			copyBoxInto(E, n);
			for (let n = 0; n < this.path.length; n++) {
				let O = this.path[n];
				!_ && O.options.layoutScroll && O.scroll && O !== O.root && transformBox(E, {
					x: -O.scroll.offset.x,
					y: -O.scroll.offset.y
				}), hasTransform(O.latestValues) && transformBox(E, O.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(E, this.latestValues), E;
		}
		removeTransform(n) {
			let _ = createBox();
			copyBoxInto(_, n);
			for (let n = 0; n < this.path.length; n++) {
				let E = this.path[n];
				if (!E.instance || !hasTransform(E.latestValues)) continue;
				hasScale(E.latestValues) && E.updateSnapshot();
				let O = createBox();
				copyBoxInto(O, E.measurePageBox()), removeBoxTransforms(_, E.latestValues, E.snapshot ? E.snapshot.layoutBox : void 0, O);
			}
			return hasTransform(this.latestValues) && removeBoxTransforms(_, this.latestValues), _;
		}
		setTargetDelta(n) {
			this.targetDelta = n, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(n) {
			this.options = {
				...this.options,
				...n,
				crossfade: n.crossfade === void 0 ? !0 : n.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(n = !1) {
			let _ = this.getLead();
			this.isProjectionDirty ||= _.isProjectionDirty, this.isTransformDirty ||= _.isTransformDirty, this.isSharedProjectionDirty ||= _.isSharedProjectionDirty;
			let E = !!this.resumingFrom || this !== _;
			if (!(n || E && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: O, layoutId: A } = this.options;
			if (!this.layout || !(O || A)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			let j = this.getClosestProjectingParent();
			j && this.linkedParentVersion !== j.layoutVersion && !j.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (j && j.layout ? this.createRelativeTarget(j, this.layout.layoutBox, j.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, j && !!j.resumingFrom == !!this.resumingFrom && !j.options.layoutScroll && j.target && this.animationProgress !== 1 ? this.createRelativeTarget(j, this.target, j.target) : this.relativeParent = this.relativeTarget = void 0), statsBuffer.value && metrics.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(n, _, E) {
			this.relativeParent = n, this.linkedParentVersion = n.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, _, E), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let n = this.getLead(), _ = !!this.resumingFrom || this !== n, E = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (E = !1), _ && (this.isSharedProjectionDirty || this.isTransformDirty) && (E = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (E = !1), E) return;
			let { layout: O, layoutId: A } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(O || A)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let j = this.treeScale.x, M = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, _), n.layout && !n.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (n.target = n.layout.layoutBox, n.targetWithTransforms = createBox());
			let { target: N } = n;
			if (!N) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, N, this.latestValues), (this.treeScale.x !== j || this.treeScale.y !== M || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", N)), statsBuffer.value && metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(n = !0) {
			if (this.options.visualElement?.scheduleRender(), n) {
				let n = this.getStack();
				n && n.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta(), this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(n, _ = !1) {
			let E = this.snapshot, O = E ? E.latestValues : {}, A = { ...this.latestValues }, j = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !_;
			let M = createBox(), N = (E ? E.source : void 0) !== (this.layout ? this.layout.source : void 0), P = this.getStack(), z = !P || P.members.length <= 1, B = !!(N && !z && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let H;
			this.mixTargetDelta = (_) => {
				let E = _ / 1e3;
				mixAxisDelta(j.x, n.x, E), mixAxisDelta(j.y, n.y, E), this.setTargetDelta(j), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(M, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, M, E), H && boxEquals(this.relativeTarget, H) && (this.isProjectionDirty = !1), H ||= createBox(), copyBoxInto(H, this.relativeTarget)), N && (this.animationValues = A, mixValues(A, O, this.latestValues, E, B, z)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = E;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(n) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (cancelFrame(this.pendingAnimation), void 0), this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = !0, activeAnimations.layout++, this.motionValue ||= motionValue(0), this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...n,
					velocity: 0,
					isSync: !0,
					onUpdate: (_) => {
						this.mixTargetDelta(_), n.onUpdate && n.onUpdate(_);
					},
					onStop: () => {
						activeAnimations.layout--;
					},
					onComplete: () => {
						activeAnimations.layout--, n.onComplete && n.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let n = this.getStack();
			n && n.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(animationTarget), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let n = this.getLead(), { targetWithTransforms: _, target: E, layout: O, latestValues: A } = n;
			if (!(!_ || !E || !O)) {
				if (this !== n && this.layout && O && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, O.layoutBox)) {
					E = this.target || createBox();
					let _ = calcLength(this.layout.layoutBox.x);
					E.x.min = n.target.x.min, E.x.max = E.x.min + _;
					let O = calcLength(this.layout.layoutBox.y);
					E.y.min = n.target.y.min, E.y.max = E.y.min + O;
				}
				copyBoxInto(_, E), transformBox(_, A), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, _, A);
			}
		}
		registerSharedNode(n, _) {
			this.sharedNodes.has(n) || this.sharedNodes.set(n, new NodeStack()), this.sharedNodes.get(n).add(_);
			let E = _.options.initialPromotionConfig;
			_.promote({
				transition: E ? E.transition : void 0,
				preserveFollowOpacity: E && E.shouldPreserveFollowOpacity ? E.shouldPreserveFollowOpacity(_) : void 0
			});
		}
		isLead() {
			let n = this.getStack();
			return n ? n.lead === this : !0;
		}
		getLead() {
			let { layoutId: n } = this.options;
			return n && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: n } = this.options;
			return n ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: n } = this.options;
			if (n) return this.root.sharedNodes.get(n);
		}
		promote({ needsReset: n, transition: _, preserveFollowOpacity: E } = {}) {
			let O = this.getStack();
			O && O.promote(this, E), n && (this.projectionDelta = void 0, this.needsReset = !0), _ && this.setOptions({ transition: _ });
		}
		relegate() {
			let n = this.getStack();
			return n ? n.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: n } = this.options;
			if (!n) return;
			let _ = !1, { latestValues: E } = n;
			if ((E.z || E.rotate || E.rotateX || E.rotateY || E.rotateZ || E.skewX || E.skewY) && (_ = !0), !_) return;
			let O = {};
			E.z && resetDistortingTransform("z", n, O, this.animationValues);
			for (let _ = 0; _ < transformAxes.length; _++) resetDistortingTransform(`rotate${transformAxes[_]}`, n, O, this.animationValues), resetDistortingTransform(`skew${transformAxes[_]}`, n, O, this.animationValues);
			for (let _ in n.render(), O) n.setStaticValue(_, O[_]), this.animationValues && (this.animationValues[_] = O[_]);
			n.scheduleRender();
		}
		applyProjectionStyles(n, _) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				n.visibility = "hidden";
				return;
			}
			let E = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, n.visibility = "", n.opacity = "", n.pointerEvents = resolveMotionValue(_?.pointerEvents) || "", n.transform = E ? E(this.latestValues, "") : "none";
				return;
			}
			let O = this.getLead();
			if (!this.projectionDelta || !this.layout || !O.target) {
				this.options.layoutId && (n.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, n.pointerEvents = resolveMotionValue(_?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (n.transform = E ? E({}, "") : "none", this.hasProjected = !1);
				return;
			}
			n.visibility = "";
			let A = O.animationValues || O.latestValues;
			this.applyTransformsToTarget();
			let j = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, A);
			E && (j = E(A, j)), n.transform = j;
			let { x: M, y: N } = this.projectionDelta;
			for (let _ in n.transformOrigin = `${M.origin * 100}% ${N.origin * 100}% 0`, O.animationValues ? n.opacity = O === this ? A.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : A.opacityExit : n.opacity = O === this ? A.opacity === void 0 ? "" : A.opacity : A.opacityExit === void 0 ? 0 : A.opacityExit, scaleCorrectors) {
				if (A[_] === void 0) continue;
				let { correct: E, applyTo: M, isCSSVariable: N } = scaleCorrectors[_], P = j === "none" ? A[_] : E(A[_], O);
				if (M) {
					let _ = M.length;
					for (let E = 0; E < _; E++) n[M[E]] = P;
				} else N ? this.options.visualElement.renderState.vars[_] = P : n[_] = P;
			}
			this.options.layoutId && (n.pointerEvents = O === this ? resolveMotionValue(_?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((n) => n.currentAnimation?.stop()), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(n) {
	n.updateLayout();
}
function notifyLayoutUpdate(n) {
	let _ = n.resumeFrom?.snapshot || n.snapshot;
	if (n.isLead() && n.layout && _ && n.hasListeners("didUpdate")) {
		let { layoutBox: E, measuredBox: O } = n.layout, { animationType: A } = n.options, j = _.source !== n.layout.source;
		A === "size" ? eachAxis((n) => {
			let O = j ? _.measuredBox[n] : _.layoutBox[n], A = calcLength(O);
			O.min = E[n].min, O.max = O.min + A;
		}) : shouldAnimatePositionOnly(A, _.layoutBox, E) && eachAxis((O) => {
			let A = j ? _.measuredBox[O] : _.layoutBox[O], M = calcLength(E[O]);
			A.max = A.min + M, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[O].max = n.relativeTarget[O].min + M);
		});
		let M = createDelta();
		calcBoxDelta(M, E, _.layoutBox);
		let N = createDelta();
		j ? calcBoxDelta(N, n.applyTransform(O, !0), _.measuredBox) : calcBoxDelta(N, E, _.layoutBox);
		let P = !isDeltaZero(M), z = !1;
		if (!n.resumeFrom) {
			let O = n.getClosestProjectingParent();
			if (O && !O.resumeFrom) {
				let { snapshot: A, layout: j } = O;
				if (A && j) {
					let M = createBox();
					calcRelativePosition(M, _.layoutBox, A.layoutBox);
					let N = createBox();
					calcRelativePosition(N, E, j.layoutBox), boxEqualsRounded(M, N) || (z = !0), O.options.layoutRoot && (n.relativeTarget = N, n.relativeTargetOrigin = M, n.relativeParent = O);
				}
			}
		}
		n.notifyListeners("didUpdate", {
			layout: E,
			snapshot: _,
			delta: N,
			layoutDelta: M,
			hasLayoutChanged: P,
			hasRelativeLayoutChanged: z
		});
	} else if (n.isLead()) {
		let { onExitComplete: _ } = n.options;
		_ && _();
	}
	n.options.transition = void 0;
}
function propagateDirtyNodes(n) {
	statsBuffer.value && metrics.nodes++, n.parent && (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty), n.isSharedProjectionDirty ||= !!(n.isProjectionDirty || n.parent.isProjectionDirty || n.parent.isSharedProjectionDirty), n.isTransformDirty ||= n.parent.isTransformDirty);
}
function cleanDirtyNodes(n) {
	n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function clearSnapshot(n) {
	n.clearSnapshot();
}
function clearMeasurements(n) {
	n.clearMeasurements();
}
function clearIsLayoutDirty(n) {
	n.isLayoutDirty = !1;
}
function resetTransformStyle(n) {
	let { visualElement: _ } = n.options;
	_ && _.getProps().onBeforeLayoutMeasure && _.notify("BeforeLayoutMeasure"), n.resetTransform();
}
function finishAnimation(n) {
	n.finishAnimation(), n.targetDelta = n.relativeTarget = n.target = void 0, n.isProjectionDirty = !0;
}
function resolveTargetDelta(n) {
	n.resolveTargetDelta();
}
function calcProjection(n) {
	n.calcProjection();
}
function resetSkewAndRotation(n) {
	n.resetSkewAndRotation();
}
function removeLeadSnapshots(n) {
	n.removeLeadSnapshot();
}
function mixAxisDelta(n, _, E) {
	n.translate = mixNumber(_.translate, 0, E), n.scale = mixNumber(_.scale, 1, E), n.origin = _.origin, n.originPoint = _.originPoint;
}
function mixAxis(n, _, E, O) {
	n.min = mixNumber(_.min, E.min, O), n.max = mixNumber(_.max, E.max, O);
}
function mixBox(n, _, E, O) {
	mixAxis(n.x, _.x, E.x, O), mixAxis(n.y, _.y, E.y, O);
}
function hasOpacityCrossfade(n) {
	return n.animationValues && n.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, userAgentContains = (n) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(n), roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(n) {
	n.min = roundPoint(n.min), n.max = roundPoint(n.max);
}
function roundBox(n) {
	roundAxis(n.x), roundAxis(n.y);
}
function shouldAnimatePositionOnly(n, _, E) {
	return n === "position" || n === "preserve-aspect" && !isNear(aspectRatio(_), aspectRatio(E), .2);
}
function checkNodeWasScrollRoot(n) {
	return n !== n.root && n.scroll?.wasRoot;
}
var DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (n, _) => addDomEvent(n, "resize", _),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), rootProjectionNode = { current: void 0 }, HTMLProjectionNode = createProjectionNode({
	measureScroll: (n) => ({
		x: n.scrollLeft,
		y: n.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			let n = new DocumentProjectionNode({});
			n.mount(window), n.setOptions({ layoutScroll: !0 }), rootProjectionNode.current = n;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (n, _) => {
		n.style.transform = _ === void 0 ? "none" : _;
	},
	checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed"
}), drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
function handleHoverEvent(n, _, E) {
	let { props: O } = n;
	n.animationState && O.whileHover && n.animationState.setActive("whileHover", E === "Start");
	let A = O["onHover" + E];
	A && frame.postRender(() => A(_, extractEventInfo(_)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: n } = this.node;
		n && (this.unmount = hover(n, (n, _) => (handleHoverEvent(this.node, _, "Start"), (n) => handleHoverEvent(this.node, n, "End"))));
	}
	unmount() {}
}, FocusGesture = class extends Feature {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let n = !1;
		try {
			n = this.node.current.matches(":focus-visible");
		} catch {
			n = !0;
		}
		!n || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
function handlePressEvent(n, _, E) {
	let { props: O } = n;
	if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
	n.animationState && O.whileTap && n.animationState.setActive("whileTap", E === "Start");
	let A = O["onTap" + (E === "End" ? "" : E)];
	A && frame.postRender(() => A(_, extractEventInfo(_)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: n } = this.node;
		n && (this.unmount = press(n, (n, _) => (handlePressEvent(this.node, _, "Start"), (n, { success: _ }) => handlePressEvent(this.node, n, _ ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (n) => {
	let _ = observerCallbacks.get(n.target);
	_ && _(n);
}, fireAllObserverCallbacks = (n) => {
	n.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: n, ..._ }) {
	let E = n || document;
	observers.has(E) || observers.set(E, {});
	let O = observers.get(E), A = JSON.stringify(_);
	return O[A] || (O[A] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: n,
		..._
	})), O[A];
}
function observeIntersection(n, _, E) {
	let O = initIntersectionObserver(_);
	return observerCallbacks.set(n, E), O.observe(n), () => {
		observerCallbacks.delete(n), O.unobserve(n);
	};
}
var thresholdNames = {
	some: 0,
	all: 1
}, InViewFeature = class extends Feature {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.unmount();
		let { viewport: n = {} } = this.node.getProps(), { root: _, margin: E, amount: O = "some", once: A } = n, j = {
			root: _ ? _.current : void 0,
			rootMargin: E,
			threshold: typeof O == "number" ? O : thresholdNames[O]
		};
		return observeIntersection(this.node.current, j, (n) => {
			let { isIntersecting: _ } = n;
			if (this.isInView === _ || (this.isInView = _, A && !_ && this.hasEnteredView)) return;
			_ && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", _);
			let { onViewportEnter: E, onViewportLeave: O } = this.node.getProps(), j = _ ? E : O;
			j && j(n);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: n, prevProps: _ } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(n, _)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: n = {} }, { viewport: _ = {} } = {}) {
	return (E) => n[E] !== _[E];
}
var gestureAnimations = {
	inView: { Feature: InViewFeature },
	tap: { Feature: PressGesture },
	focus: { Feature: FocusGesture },
	hover: { Feature: HoverGesture }
}, layout = { layout: {
	ProjectionNode: HTMLProjectionNode,
	MeasureLayout
} }, motion = /* @__PURE__ */ createMotionProxy({
	...animations,
	...gestureAnimations,
	...drag,
	...layout
}, createDomVisualElement), getAnimationVariants = (n) => {
	if (!n || n.type === "none") return {
		initial: {
			opacity: 0,
			y: 20,
			scale: .95
		},
		animate: {
			opacity: 1,
			y: 0,
			scale: 1
		}
	};
	let _ = {
		initial: {},
		animate: {}
	};
	switch (n.type) {
		case "fadeIn":
			_.initial = { opacity: 0 }, _.animate = { opacity: 1 };
			break;
		case "slideInLeft":
			_.initial = {
				opacity: 0,
				x: -100
			}, _.animate = {
				opacity: 1,
				x: 0
			};
			break;
		case "slideInRight":
			_.initial = {
				opacity: 0,
				x: 100
			}, _.animate = {
				opacity: 1,
				x: 0
			};
			break;
		case "slideInUp":
			_.initial = {
				opacity: 0,
				y: 100
			}, _.animate = {
				opacity: 1,
				y: 0
			};
			break;
		case "slideInDown":
			_.initial = {
				opacity: 0,
				y: -100
			}, _.animate = {
				opacity: 1,
				y: 0
			};
			break;
		case "zoomIn":
			_.initial = {
				opacity: 0,
				scale: .5
			}, _.animate = {
				opacity: 1,
				scale: 1
			};
			break;
		case "bounceIn":
			_.initial = {
				opacity: 0,
				scale: .3
			}, _.animate = {
				opacity: 1,
				scale: 1,
				transition: {
					type: "spring",
					bounce: .6
				}
			};
			break;
		case "pulse":
			_.animate = {
				scale: [
					1,
					1.05,
					1
				],
				transition: { repeat: Infinity }
			};
			break;
		default: _.initial = {
			opacity: 0,
			y: 20
		}, _.animate = {
			opacity: 1,
			y: 0
		};
	}
	return _;
}, PreviewElementRenderer = ({ element: n, offsetY: _ = 0, dataContext: E }) => {
	let O = n.content;
	if (E) {
		if (n.type === "text") O = O.replace(/\{\{(.*?)\}\}/g, (n, _) => {
			let O = E[_.trim()];
			return O == null ? n : String(O);
		});
		else if (n.type === "image") if (n.dataBinding) {
			let _ = E[n.dataBinding];
			_ != null && (O = String(_));
		} else O = O.replace(/\{\{(.*?)\}\}/g, (n, _) => {
			let O = E[_.trim()];
			return O == null ? n : String(O);
		});
	}
	return /* @__PURE__ */ jsxs(p, {
		style: {
			position: "absolute",
			left: 0,
			top: 0,
			width: `${n.width}px`,
			height: `${n.height}px`,
			transform: `translate(${n.x}px, ${n.y + _}px) rotate(${n.rotation || 0}deg)`,
			padding: n.type === "image" || n.type === "text" ? 0 : "8px",
			overflow: "hidden",
			...n.style
		},
		children: [
			n.type === "text" && /* @__PURE__ */ jsx(p$2, { children: O }),
			n.type === "image" && (O ? /* @__PURE__ */ jsx("img", {
				src: O,
				alt: "Element",
				style: {
					width: "100%",
					height: "100%",
					objectFit: n.style?.objectFit || "cover",
					display: "block"
				}
			}) : /* @__PURE__ */ jsx(p, {
				style: {
					width: "100%",
					height: "100%",
					backgroundColor: "#eee",
					display: "flex",
					alignItems: "center",
					justifyContent: "center"
				},
				children: /* @__PURE__ */ jsx(p$2, {
					size: "1",
					children: "Imagem"
				})
			})),
			n.type === "box" && /* @__PURE__ */ jsx(p, { style: {
				width: "100%",
				height: "100%"
			} })
		]
	});
}, ListItem = ({ children: n, height: E, animation: O }) => {
	let A = React.useMemo(() => getAnimationVariants(O), [O]);
	return /* @__PURE__ */ jsx(motion.div, {
		layout: !0,
		initial: A.initial,
		animate: A.animate,
		exit: {
			opacity: 0,
			scale: .9
		},
		transition: {
			duration: O?.duration || .4,
			ease: O?.timingFunction || "easeOut"
		},
		whileHover: {
			scale: 1.02,
			transition: { duration: .2 }
		},
		style: {
			position: "relative",
			height: E,
			width: "100%",
			marginBottom: "20px",
			transformOrigin: "center center"
		},
		children: n
	});
};
const Preview = () => {
	let { state: n } = useEditor(), [E, O] = React.useState(!1), [A, j] = React.useState([]);
	React.useEffect(() => {
		let _;
		return E && n.isList ? (A.length === 0 && j([{
			id: Date.now(),
			...n.mockData[0] || {}
		}]), _ = setInterval(() => {
			j((_) => {
				let E = _.length % (n.mockData.length || 1), O = {
					...n.mockData.length > 0 ? n.mockData[E] : { id: _.length },
					id: `${Date.now()}-${_.length}`
				};
				return n.listSettings.newestPosition === "top" ? [O, ..._].slice(0, 20) : [..._, O].slice(-20);
			});
		}, 1500)) : j([]), () => clearInterval(_);
	}, [
		E,
		n.isList,
		n.listSettings.newestPosition,
		n.mockData
	]);
	let M = React.useMemo(() => n.canvasHeight ? n.canvasHeight : n.elements.length === 0 ? 0 : Math.max(...n.elements.map((n) => n.y + n.height)), [n.elements, n.canvasHeight]);
	return /* @__PURE__ */ jsxs(p, {
		style: {
			width: "100%",
			height: "100%",
			position: "relative",
			overflow: "hidden",
			backgroundColor: "var(--color-panel-solid)"
		},
		children: [n.isList && /* @__PURE__ */ jsx(p, {
			style: {
				position: "absolute",
				top: 10,
				right: 10,
				zIndex: 100,
				backgroundColor: "var(--color-surface)",
				padding: "4px",
				borderRadius: "var(--radius-3)",
				boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
			},
			children: /* @__PURE__ */ jsxs(o, {
				size: "1",
				variant: E ? "soft" : "solid",
				color: E ? "red" : "green",
				onClick: () => O(!E),
				children: [jsx(E ? StopIcon : PlayIcon, {}), E ? "Parar Simulação" : "Simular Entrada"]
			})
		}), /* @__PURE__ */ jsx(c, {
			type: "auto",
			scrollbars: "vertical",
			style: {
				height: "100%",
				width: "100%"
			},
			children: /* @__PURE__ */ jsx(p, {
				style: {
					position: "relative",
					minHeight: "100%",
					width: "100%"
				},
				children: (() => {
					if (n.elements.length === 0) return /* @__PURE__ */ jsx(p$1, {
						align: "center",
						justify: "center",
						style: { height: "100%" },
						children: /* @__PURE__ */ jsx(p$2, {
							color: "gray",
							children: "Preview vazio"
						})
					});
					if (n.isList) {
						let _ = [];
						if (E) _ = A;
						else {
							if (_ = n.mockData.length > 0 ? n.mockData : Array.from({ length: 10 }).map((n, _) => ({ id: _ })), n.listSettings.sortProp) {
								let E = n.listSettings.sortProp, O = n.listSettings.sortOrder === "asc" ? 1 : -1;
								_ = [..._].sort((n, _) => {
									let A = n[E], j = _[E];
									return A < j ? -1 * O : A > j ? 1 * O : 0;
								});
							}
							n.listSettings.newestPosition === "top" && (_ = [..._].reverse());
						}
						return /* @__PURE__ */ jsx(p$1, {
							direction: "column",
							justify: n.listSettings.newestPosition === "top" ? "start" : "end",
							p: "4",
							style: {
								width: "100%",
								minHeight: "100%"
							},
							children: /* @__PURE__ */ jsx(AnimatePresence, {
								mode: "popLayout",
								initial: !1,
								children: _.map((_, E) => /* @__PURE__ */ jsx(ListItem, {
									height: M,
									animation: n.listSettings.entryAnimation,
									children: n.elements.map((n) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
										element: n,
										offsetY: 0,
										dataContext: _
									}, `${n.id}-${E}`))
								}, _.id || E))
							})
						});
					}
					return n.elements.map((_) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
						element: _,
						dataContext: n.singleMockData
					}, _.id));
				})()
			})
		})]
	});
};
var EditorContent = ({ layout: n, initialState: E, onSave: O, theme: A = "light" }) => {
	let [j, M] = useState(!0), [N, P] = useState(!0), [z, B] = useState(null), [H, U] = useState(!1), { addElement: W, loadState: G, state: Z, undo: Mj, redo: Nj, copy: Pj, paste: Fj, removeSelected: Lj, updateElements: Rj, selectElement: zj } = useEditor();
	React.useEffect(() => {
		let n = (n) => {
			if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable) return;
			let _ = n.clipboardData?.items;
			if (_) {
				for (let E = 0; E < _.length; E++) if (_[E].type.indexOf("image") !== -1) {
					n.preventDefault();
					let O = _[E].getAsFile();
					if (O) {
						let n = new FileReader();
						n.onload = (n) => {
							let _ = n.target?.result;
							W({
								type: "image",
								content: _,
								width: 200,
								height: 200
							});
						}, n.readAsDataURL(O);
					}
				}
			}
		};
		return window.addEventListener("paste", n), () => window.removeEventListener("paste", n);
	}, [W]), React.useEffect(() => {
		let n = (n) => {
			if (!(document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA" || document.activeElement?.isContentEditable)) {
				if ((n.ctrlKey || n.metaKey) && n.key === "z") n.shiftKey ? (n.preventDefault(), Nj()) : (n.preventDefault(), Mj());
				else if ((n.ctrlKey || n.metaKey) && n.key === "y") n.preventDefault(), Nj();
				else if ((n.ctrlKey || n.metaKey) && n.key === "c") n.preventDefault(), Pj();
				else if ((n.ctrlKey || n.metaKey) && n.key === "v") n.preventDefault(), Fj();
				else if (n.key === "Delete" || n.key === "Backspace") Z.selectedElementIds.length > 0 && (n.preventDefault(), Lj());
				else if ([
					"ArrowUp",
					"ArrowDown",
					"ArrowLeft",
					"ArrowRight"
				].includes(n.key) && Z.selectedElementIds.length > 0) {
					n.preventDefault();
					let _ = n.shiftKey ? 10 : 1, E = [];
					Z.selectedElementIds.forEach((O) => {
						let A = Z.elements.find((n) => n.id === O);
						if (A) {
							let j = {};
							n.key === "ArrowUp" && (j.y = A.y - _), n.key === "ArrowDown" && (j.y = A.y + _), n.key === "ArrowLeft" && (j.x = A.x - _), n.key === "ArrowRight" && (j.x = A.x + _), E.push({
								id: O,
								changes: j
							});
						}
					}), E.length > 0 && Rj(E);
				}
			}
		};
		return window.addEventListener("keydown", n), () => window.removeEventListener("keydown", n);
	}, [
		Mj,
		Nj,
		Pj,
		Fj,
		Lj,
		Z.selectedElementIds,
		Z.elements,
		Rj
	]), React.useEffect(() => {
		if (E) try {
			let n = typeof E == "string" ? JSON.parse(E) : E;
			Array.isArray(n) ? G({ elements: n }) : n.elements && G(n);
		} catch (n) {
			console.error("Failed to load initial state", n);
		}
	}, [E, G]);
	let Bj = (n) => {
		console.log(`Adding element of type: ${n}`), W({
			type: n,
			content: `New ${n}`
		});
	};
	return /* @__PURE__ */ jsxs(R, {
		appearance: A,
		accentColor: "blue",
		grayColor: "slate",
		radius: "medium",
		scaling: "100%",
		children: [/* @__PURE__ */ jsxs(p$1, {
			direction: "row",
			style: {
				height: "100vh",
				width: "100%",
				overflow: "hidden",
				backgroundColor: "var(--color-background)"
			},
			children: [N && /* @__PURE__ */ jsxs(p$1, {
				direction: "column",
				width: "280px",
				style: {
					borderRight: "1px solid var(--gray-5)",
					backgroundColor: "var(--gray-2)",
					flexShrink: 0,
					height: "100%"
				},
				children: [/* @__PURE__ */ jsx(p, {
					p: "4",
					style: {
						borderBottom: "1px solid var(--gray-5)",
						backgroundColor: "var(--gray-2)"
					},
					children: /* @__PURE__ */ jsx(p$1, {
						direction: "column",
						gap: "3",
						children: /* @__PURE__ */ jsxs(p, { children: [
							/* @__PURE__ */ jsx(p$2, {
								size: "2",
								weight: "bold",
								mb: "2",
								as: "div",
								children: "Editor"
							}),
							/* @__PURE__ */ jsxs(I$2, { children: [/* @__PURE__ */ jsx(h$1, { children: /* @__PURE__ */ jsx(o, {
								variant: "solid",
								color: "green",
								size: "3",
								style: {
									width: "100%",
									cursor: "pointer",
									justifyContent: "center",
									marginBottom: "8px"
								},
								children: "Adicionar Novo +"
							}) }), /* @__PURE__ */ jsxs(g$1, {
								style: { width: "240px" },
								children: [
									/* @__PURE__ */ jsx(v$3, {
										onSelect: () => Bj("text"),
										children: "Texto"
									}),
									/* @__PURE__ */ jsx(v$3, {
										onSelect: () => Bj("image"),
										children: "Imagem"
									}),
									/* @__PURE__ */ jsx(v$3, {
										onSelect: () => Bj("box"),
										children: "Caixa (Container)"
									})
								]
							})] }),
							/* @__PURE__ */ jsxs(o, {
								variant: "soft",
								color: "blue",
								style: {
									width: "100%",
									justifyContent: "center",
									cursor: "pointer"
								},
								onClick: () => {
									if (O) {
										let n = {
											elements: Z.elements,
											isList: Z.isList,
											mockData: Z.mockData,
											singleMockData: Z.singleMockData,
											listSettings: Z.listSettings,
											canvasHeight: Z.canvasHeight
										};
										O(JSON.stringify(n, null, 2));
									}
								},
								children: [/* @__PURE__ */ jsx(Share1Icon, {}), " Salvar Alterações"]
							}),
							/* @__PURE__ */ jsx(p, {
								mt: "2",
								children: /* @__PURE__ */ jsx(EditorSettings, {})
							})
						] })
					})
				}), /* @__PURE__ */ jsx(c, {
					type: "auto",
					scrollbars: "vertical",
					style: { flex: 1 },
					children: /* @__PURE__ */ jsxs(p$1, {
						direction: "column",
						gap: "4",
						p: "4",
						children: [
							/* @__PURE__ */ jsxs(p, { children: [/* @__PURE__ */ jsx(p$2, {
								size: "2",
								weight: "bold",
								mb: "2",
								as: "div",
								children: "Elementos"
							}), /* @__PURE__ */ jsxs(p$1, {
								direction: "column",
								gap: "2",
								children: [Z.elements.map((n) => /* @__PURE__ */ jsx(o, {
									variant: Z.selectedElementIds.includes(n.id) ? "solid" : "soft",
									color: "gray",
									size: "2",
									style: {
										justifyContent: "flex-start",
										cursor: "pointer",
										overflow: "hidden"
									},
									onClick: (_) => {
										zj(n.id, _.shiftKey), B(n.id), U(!0);
									},
									children: /* @__PURE__ */ jsxs(p$1, {
										gap: "2",
										align: "center",
										style: {
											width: "100%",
											overflow: "hidden"
										},
										children: [
											n.type === "text" && /* @__PURE__ */ jsx(TextIcon, {}),
											n.type === "image" && /* @__PURE__ */ jsx(ImageIcon, {}),
											n.type === "box" && /* @__PURE__ */ jsx(BoxIcon, {}),
											/* @__PURE__ */ jsx(p$2, {
												truncate: !0,
												style: {
													flex: 1,
													textAlign: "left"
												},
												children: n.type === "text" ? n.content.length > 20 ? n.content.substring(0, 20) + "..." : n.content : n.type === "image" ? "Imagem" : "Container"
											})
										]
									})
								}, n.id)), Z.elements.length === 0 && /* @__PURE__ */ jsx(p$2, {
									size: "1",
									color: "gray",
									style: { fontStyle: "italic" },
									children: "Nenhum elemento adicionado."
								})]
							})] }),
							/* @__PURE__ */ jsx(o$2, { size: "4" }),
							/* @__PURE__ */ jsxs(p, { children: [
								/* @__PURE__ */ jsx(p$2, {
									size: "2",
									weight: "bold",
									mb: "2",
									as: "div",
									children: "Variáveis Disponíveis"
								}),
								/* @__PURE__ */ jsx(p$2, {
									size: "1",
									color: "gray",
									mb: "2",
									as: "div",
									children: "Clique para copiar ou arraste"
								}),
								/* @__PURE__ */ jsxs(p$1, {
									direction: "column",
									gap: "2",
									children: [n.props.map((n, _) => /* @__PURE__ */ jsxs(e, {
										color: "blue",
										variant: "soft",
										size: "2",
										style: {
											padding: "8px",
											justifyContent: "flex-start",
											cursor: "grab"
										},
										title: `Clique para copiar {{${n.dataName}}}`,
										draggable: !0,
										onDragStart: (_) => {
											_.dataTransfer.setData("application/x-editor-prop", n.dataName), _.dataTransfer.effectAllowed = "copy";
										},
										onClick: () => {
											let _ = `{{${n.dataName}}}`;
											navigator.clipboard.writeText(_);
										},
										children: [n.name, /* @__PURE__ */ jsx(p$2, {
											color: "gray",
											style: {
												marginLeft: "auto",
												fontSize: "10px"
											},
											children: `{{${n.dataName}}}`
										})]
									}, _)), n.props.length === 0 && /* @__PURE__ */ jsx(p$2, {
										size: "1",
										color: "gray",
										style: { fontStyle: "italic" },
										children: "Nenhuma variável configurada."
									})]
								})
							] })
						]
					})
				})]
			}), /* @__PURE__ */ jsxs(p, {
				style: {
					flex: 1,
					position: "relative",
					height: "100%"
				},
				children: [
					/* @__PURE__ */ jsx(p, {
						style: {
							position: "absolute",
							top: 10,
							left: 10,
							zIndex: 10
						},
						children: /* @__PURE__ */ jsx(o$1, {
							size: "2",
							variant: "soft",
							color: "gray",
							onClick: () => P(!N),
							title: N ? "Ocultar Barra Lateral" : "Mostrar Barra Lateral",
							children: jsx(N ? DoubleArrowLeftIcon : DoubleArrowRightIcon, {})
						})
					}),
					/* @__PURE__ */ jsx(p$1, {
						style: {
							position: "absolute",
							top: 10,
							right: 10,
							zIndex: 10
						},
						gap: "2",
						children: /* @__PURE__ */ jsx(o$1, {
							size: "2",
							variant: "soft",
							color: j ? "blue" : "gray",
							onClick: () => M(!j),
							title: j ? "Ocultar Preview" : "Mostrar Preview",
							children: jsx(j ? EyeOpenIcon : EyeNoneIcon, {})
						})
					}),
					/* @__PURE__ */ jsxs(Rt, {
						orientation: "horizontal",
						style: {
							height: "100%",
							width: "100%"
						},
						children: [
							/* @__PURE__ */ jsx(kt, {
								defaultSize: 50,
								minSize: 20,
								children: /* @__PURE__ */ jsxs(p, {
									style: {
										height: "100%",
										width: "100%",
										backgroundColor: "var(--color-background)",
										position: "relative"
									},
									children: [/* @__PURE__ */ jsx(p, {
										style: {
											position: "absolute",
											top: 16,
											left: "50%",
											transform: "translateX(-50%)",
											zIndex: 20
										},
										children: /* @__PURE__ */ jsx(AlignmentToolbar, {})
									}), /* @__PURE__ */ jsx(Canvas, {})]
								})
							}),
							j && /* @__PURE__ */ jsx(Ot, { style: {
								width: "4px",
								backgroundColor: "var(--gray-6)",
								cursor: "col-resize",
								transition: "background-color 0.2s"
							} }),
							j && /* @__PURE__ */ jsx(kt, {
								defaultSize: 50,
								minSize: 20,
								children: /* @__PURE__ */ jsx(p, {
									style: {
										height: "100%",
										width: "100%",
										backgroundColor: "var(--gray-3)",
										borderLeft: "1px solid var(--gray-5)"
									},
									children: /* @__PURE__ */ jsx(Preview, {})
								})
							})
						]
					})
				]
			})]
		}), z && /* @__PURE__ */ jsx(ElementAdvancedSettings, {
			elementId: z,
			open: H,
			onOpenChange: U
		})]
	});
};
const GenericEditor = (n) => /* @__PURE__ */ jsx(EditorProvider, {
	isList: n.layout.isList,
	availableProps: n.layout.props,
	theme: n.theme,
	children: /* @__PURE__ */ jsx(EditorContent, { ...n })
}), generateHTML = (n, _, E = {}) => Function("elements", "data", "options", getRendererCode() + "\nreturn renderTemplate(elements, data, options);")(n, _, E), getRendererCode = () => "\n/**\n * Render Template\n * @param {Array} elements - The JSON configuration of elements\n * @param {Object|Array} data - The data object to inject (Object for single, Array for list)\n * @param {Object} options - { isList: boolean, listSettings: { sortProp: string, sortOrder: 'asc'|'desc', newestPosition: 'top'|'bottom', scrollDirection: 'up'|'down', containerHeight: number }, canvasHeight: number }\n * @returns {string} - The generated HTML string\n */\nfunction renderTemplate(elements, data, options = {}) {\n    const { isList, listSettings, canvasHeight } = options;\n\n    const formatValue = (value, formatting) => {\n        if (!formatting || formatting.type === 'text') return value !== undefined && value !== null ? String(value) : '';\n        if (value === undefined || value === null) return '';\n\n        if (formatting.type === 'boolean') {\n             const isTrue = String(value) === 'true' || value === true || (typeof value === 'number' && value > 0);\n             return isTrue ? (formatting.trueLabel || 'Sim') : (formatting.falseLabel || 'Não');\n        }\n\n        if (formatting.type === 'date') {\n            try {\n                const date = new Date(value);\n                if (isNaN(date.getTime())) return String(value);\n                \n                if (formatting.dateFormat) {\n                     const d = date.getDate().toString().padStart(2, '0');\n                     const m = (date.getMonth() + 1).toString().padStart(2, '0');\n                     const y = date.getFullYear();\n                     const H = date.getHours().toString().padStart(2, '0');\n                     const M = date.getMinutes().toString().padStart(2, '0');\n                     const S = date.getSeconds().toString().padStart(2, '0');\n                     \n                     return formatting.dateFormat\n                        .replace('DD', d)\n                        .replace('MM', m)\n                        .replace('YYYY', String(y))\n                        .replace('HH', H)\n                        .replace('mm', M)\n                        .replace('ss', S);\n                }\n                return date.toLocaleDateString();\n            } catch (e) { return String(value); }\n        }\n\n        if (formatting.type === 'number') {\n             const num = parseFloat(value);\n             if (isNaN(num)) return String(value);\n             \n             if (formatting.numberFormat === 'currency') {\n                 return (formatting.currencySymbol || 'R$') + ' ' + num.toFixed(formatting.decimalPlaces || 2);\n             }\n             if (formatting.numberFormat === 'percent') {\n                 return num.toFixed(formatting.decimalPlaces || 0) + '%';\n             }\n             if (formatting.decimalPlaces !== undefined) {\n                 return num.toFixed(formatting.decimalPlaces);\n             }\n             return num.toFixed(formatting.decimalPlaces || 0);\n        }\n        \n        return String(value);\n    };\n\n    const checkCondition = (propValue, operator, ruleValue) => {\n        const val = String(propValue).toLowerCase();\n        const target = String(ruleValue).toLowerCase();\n        \n        switch (operator) {\n            case 'equals': return val === target;\n            case 'notEquals': return val !== target;\n            case 'contains': return val.includes(target);\n            case 'greaterThan': return parseFloat(val) > parseFloat(target);\n            case 'lessThan': return parseFloat(val) < parseFloat(target);\n            case 'truthy': return !!propValue;\n            case 'falsy': return !propValue;\n            default: return false;\n        }\n    };\n\n    const camelToKebab = (string) => {\n        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();\n    };\n\n    const hex8ToRgba = (hex) => {\n        const m = /^#([0-9a-fA-F]{8})$/.exec(hex);\n        if (!m) return hex;\n        const h = m[1];\n        const r = parseInt(h.slice(0, 2), 16);\n        const g = parseInt(h.slice(2, 4), 16);\n        const b = parseInt(h.slice(4, 6), 16);\n        const a = parseInt(h.slice(6, 8), 16) / 255;\n        return `rgba(${r}, ${g}, ${b}, ${a})`;\n    };\n\n    const styleObjectToString = (style) => {\n        if (!style) return '';\n        const pxProps = ['width', 'height', 'top', 'left', 'right', 'bottom', 'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth'];\n        \n        return Object.entries(style)\n            .map(([key, value]) => {\n                if (value === undefined || value === null) return '';\n                const cssKey = camelToKebab(key);\n                let cssValue = (typeof value === 'number' && pxProps.includes(key)) ? value + 'px' : value;\n                if (typeof cssValue === 'string') {\n                    if (/^#([0-9a-fA-F]{8})$/.test(cssValue)) {\n                        cssValue = hex8ToRgba(cssValue);\n                    }\n                }\n                return `${cssKey}: ${cssValue}`;\n            })\n            .filter(Boolean)\n            .join('; ');\n    };\n\n    const getAnimationStyles = (anim) => {\n        if (!anim || anim.type === 'none') return {};\n        return {\n            animationName: anim.type,\n            animationDuration: (anim.duration || 1) + 's',\n            animationDelay: (anim.delay || 0) + 's',\n            animationIterationCount: anim.iterationCount || 1,\n            animationTimingFunction: anim.timingFunction || 'ease',\n            animationFillMode: 'both'\n        };\n    };\n\n    const keyframesCss = `\n    @keyframes slideIn {\n                from { opacity: 0; transform: translateY(20px); }\n                to { opacity: 1; transform: translateY(0); }\n    }\n    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }\n    @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }\n    @keyframes slideInRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }\n    @keyframes slideInUp { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }\n    @keyframes slideInDown { from { opacity: 0; transform: translateY(-50px); } to { opacity: 1; transform: translateY(0); } }\n    @keyframes zoomIn { from { opacity: 0; transform: scale(0.5); } to { opacity: 1; transform: scale(1); } }\n    @keyframes bounceIn {\n        0% { opacity: 0; transform: scale(0.3); }\n        50% { opacity: 1; transform: scale(1.05); }\n        70% { transform: scale(0.9); }\n        100% { transform: scale(1); }\n    }\n    @keyframes pulse {\n        0% { transform: scale(1); }\n        50% { transform: scale(1.05); }\n        100% { transform: scale(1); }\n    }\n    @keyframes shake {\n        0%, 100% { transform: translateX(0); }\n        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }\n        20%, 40%, 60%, 80% { transform: translateX(5px); }\n    }\n    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }\n    `;\n\n    const renderItem = (itemData, index = 0, offsetY = 0) => {\n        return elements.map(element => {\n            let content = element.content;\n            let imgSrc = '';\n\n            // Resolve Content & Formatting\n            if (element.type === 'text') {\n                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                    const val = itemData[key.trim()];\n                    if (val === undefined || val === null) return match;\n                    if (element.formatting) {\n                        return formatValue(val, element.formatting);\n                    }\n                    return String(val);\n                });\n            } else if (element.type === 'image') {\n                 if (element.dataBinding) {\n                    const val = itemData[element.dataBinding];\n                    if (val !== undefined && val !== null) {\n                        imgSrc = String(val);\n                    } else {\n                        imgSrc = content;\n                    }\n                 } else {\n                     imgSrc = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                        const val = itemData[key.trim()];\n                        return val !== undefined && val !== null ? String(val) : match;\n                    });\n                 }\n            }\n\n            // Resolve Conditional Styles\n            let conditionalStyles = {};\n            if (element.conditions) {\n                element.conditions.forEach(rule => {\n                    const propVal = itemData[rule.property];\n                    if (checkCondition(propVal, rule.operator, rule.value)) {\n                         conditionalStyles = { ...conditionalStyles, ...rule.style };\n                    }\n                });\n            }\n\n            const baseStyle = {\n                position: 'absolute',\n                left: element.x,\n                top: element.y + offsetY,\n                width: element.width,\n                height: element.autoGrow ? 'auto' : element.height,\n                transform: element.rotation ? `rotate(${element.rotation}deg)` : undefined,\n                overflow: element.autoGrow ? 'visible' : 'hidden',\n                whiteSpace: element.autoGrow ? 'pre-wrap' : undefined,\n                wordBreak: element.autoGrow ? 'break-word' : undefined,\n                ...element.style,\n                ...conditionalStyles\n            };\n            \n            // Fix: remove padding if it's not explicitly set, or handle it for text\n            if (element.type === 'text' && !baseStyle.padding) {\n                // baseStyle.padding = '8px'; // Removed default padding to respect resize box\n            }\n            \n            const styleString = styleObjectToString(baseStyle);\n\n            if (element.type === 'text') {\n                return `<div style=\"${styleString}\">${content}</div>`;\n            } else if (element.type === 'image') {\n                const imgStyle = styleObjectToString({\n                    width: '100%',\n                    height: '100%',\n                    objectFit: element.style?.objectFit || 'cover',\n                    display: 'block'\n                });\n                return `<div style=\"${styleString}\"><img src=\"${imgSrc}\" alt=\"Element\" style=\"${imgStyle}\" /></div>`;\n            } else if (element.type === 'box') {\n                 return `<div style=\"${styleString}\"></div>`;\n            }\n            return '';\n        }).join('\\n');\n    };\n\n    if (isList && Array.isArray(data)) {\n        // Calculate item height\n        const itemHeight = canvasHeight || Math.max(...elements.map(el => el.y + el.height));\n\n        // Sort data\n        let listData = [...data];\n        if (listSettings && listSettings.sortProp) {\n            const prop = listSettings.sortProp;\n            const order = listSettings.sortOrder === 'asc' ? 1 : -1;\n            listData.sort((a, b) => {\n                const valA = a[prop];\n                const valB = b[prop];\n                if (valA < valB) return -1 * order;\n                if (valA > valB) return 1 * order;\n                return 0;\n            });\n        }\n        \n        // Handle newest position\n        if (listSettings && listSettings.newestPosition === 'top') {\n             listData.reverse();\n        }\n\n        // Generate HTML for all items\n        const itemsHtml = listData.map((item, index) => {\n             const itemHtml = renderItem(item, index, 0); \n             const itemContainerStyle = styleObjectToString({\n                 position: 'relative',\n                 height: itemHeight,\n                 width: '100%',\n                 marginBottom: 0\n             });\n             \n             return `<div class=\"list-item\" style=\"${itemContainerStyle}\">${itemHtml}</div>`;\n        }).join('\\n');\n\n        // Animation Styles based on settings\n        const scrollDirection = (listSettings && listSettings.scrollDirection) || 'down';\n        const containerHeight = (listSettings && listSettings.containerHeight) ? listSettings.containerHeight + 'px' : '100%';\n        \n        const justify = (listSettings && listSettings.newestPosition === 'top') ? 'flex-start' : 'flex-end';\n\n        // Entry Animation from settings\n        const entryAnim = listSettings && listSettings.entryAnimation ? listSettings.entryAnimation : { type: 'slideIn', duration: 0.3, timingFunction: 'ease-out' };\n        const entryAnimName = entryAnim.type === 'none' ? 'none' : entryAnim.type;\n        const entryAnimDuration = entryAnim.duration + 's';\n        const entryAnimTiming = entryAnim.timingFunction || 'ease-out';\n\n        const animationCss = `\n            ${keyframesCss}\n\n            .list-wrapper {\n                display: flex;\n                flex-direction: column;\n                justify-content: ${justify};\n                height: ${containerHeight};\n                width: 100%;\n                overflow-y: auto;\n                overflow-x: hidden;\n                box-sizing: border-box;\n                padding: 10px;\n            }\n            .list-item {\n                flex-shrink: 0;\n                animation: ${entryAnimName} ${entryAnimDuration} ${entryAnimTiming};\n                margin-bottom: 10px;\n                width: 100%;\n                position: relative;\n            }\n        `;\n        \n        const scrollScript = scrollDirection === 'up' \n            ? `<script>\n                document.addEventListener('DOMContentLoaded', () => {\n                    const wrapper = document.querySelector('.list-wrapper');\n                    if(wrapper) wrapper.scrollTop = wrapper.scrollHeight;\n                });\n               <\/script>`\n            : '';\n\n        // Inject Smart Script for Dynamic Updates\n        const injectionScript = `\n            <script>\n            (function() {\n                try {\n                    const elements = ${JSON.stringify(elements)};\n                    const formatValue = ${formatValue.toString()};\n                    const checkCondition = ${checkCondition.toString()};\n                    const camelToKebab = ${camelToKebab.toString()};\n                    const hex8ToRgba = ${hex8ToRgba.toString()};\n                    const styleObjectToString = ${styleObjectToString.toString()};\n                    const getAnimationStyles = ${getAnimationStyles.toString()};\n                    const renderItem = ${renderItem.toString()};\n\n                    const itemHeight = ${itemHeight};\n                    const newestPosition = \"${(listSettings && listSettings.newestPosition) || 'bottom'}\";\n                    const scrollDirection = \"${(listSettings && listSettings.scrollDirection) || 'down'}\";\n\n                    window.addItem = function(data) {\n                        const wrapper = document.querySelector('.list-wrapper');\n                        if (!wrapper) return;\n\n                        const itemHtml = renderItem(data, 0, 0);\n                        const itemContainerStyle = styleObjectToString({\n                            position: 'relative',\n                            height: itemHeight,\n                            width: '100%',\n                            marginBottom: 0\n                        });\n\n                        const div = document.createElement('div');\n                        div.className = 'list-item';\n                        div.setAttribute('style', itemContainerStyle);\n                        div.innerHTML = itemHtml;\n\n                        if (newestPosition === 'top') {\n                            wrapper.insertBefore(div, wrapper.firstChild);\n                        } else {\n                            wrapper.appendChild(div);\n                        }\n                        \n                        if (scrollDirection === 'up') {\n                           wrapper.scrollTop = wrapper.scrollHeight;\n                        }\n                    };\n                } catch(e) { console.error(\"Smart List Init Error\", e); }\n            })();\n            <\/script>\n        `;\n\n        return `\n            <style>${animationCss}</style>\n            <div class=\"list-wrapper\">\n                ${itemsHtml}\n            </div>\n            ${scrollScript}\n            ${injectionScript}\n        `;\n    }\n\n    // Single Item\n    const contentHtml = renderItem(data);\n    return `<div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\">${contentHtml}</div>`;\n}\n";
export { GenericEditor as EditorContent, generateHTML };
