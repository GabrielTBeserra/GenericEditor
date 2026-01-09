import * as React$1 from "react";
import React, { Component, Fragment, PureComponent, createContext, createElement, forwardRef, memo, useCallback, useContext, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM, { flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __esmMin = (s, d) => () => (s && (d = s(s = 0)), d), __commonJSMin = (s, d) => () => (d || s((d = { exports: {} }).exports, d), d.exports), __export = (s) => {
	let d = {};
	for (var w in s) __defProp(d, w, {
		get: s[w],
		enumerable: !0
	});
	return d;
}, __copyProps = (s, d, w, k) => {
	if (d && typeof d == "object" || typeof d == "function") for (var F = __getOwnPropNames(d), L = 0, V = F.length, U; L < V; L++) U = F[L], !__hasOwnProp.call(s, U) && U !== w && __defProp(s, U, {
		get: ((s) => d[s]).bind(null, U),
		enumerable: !(k = __getOwnPropDesc(d, U)) || k.enumerable
	});
	return s;
}, __toESM = (s, d, w) => (w = s == null ? {} : __create(__getProtoOf(s)), __copyProps(d || !s || !s.__esModule ? __defProp(w, "default", {
	value: s,
	enumerable: !0
}) : w, s)), __toCommonJS = (s) => __copyProps(__defProp({}, "__esModule", { value: !0 }), s);
function setRef(s, d) {
	if (typeof s == "function") return s(d);
	s != null && (s.current = d);
}
function composeRefs(...s) {
	return (d) => {
		let w = !1, k = s.map((s) => {
			let k = setRef(s, d);
			return !w && typeof k == "function" && (w = !0), k;
		});
		if (w) return () => {
			for (let d = 0; d < k.length; d++) {
				let w = k[d];
				typeof w == "function" ? w() : setRef(s[d], null);
			}
		};
	};
}
function useComposedRefs(...d) {
	return React$1.useCallback(composeRefs(...d), d);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(d) {
	let w = /* @__PURE__ */ createSlotClone(d), k = React$1.forwardRef((d, k) => {
		let { children: F, ...L } = d, V = React$1.Children.toArray(F), U = V.find(isSlottable);
		if (U) {
			let d = U.props.children, F = V.map((w) => w === U ? React$1.Children.count(d) > 1 ? React$1.Children.only(null) : React$1.isValidElement(d) ? d.props.children : null : w);
			return /* @__PURE__ */ jsx(w, {
				...L,
				ref: k,
				children: React$1.isValidElement(d) ? React$1.cloneElement(d, void 0, F) : null
			});
		}
		return /* @__PURE__ */ jsx(w, {
			...L,
			ref: k,
			children: F
		});
	});
	return k.displayName = `${d}.Slot`, k;
}
var Slot$3 = /* @__PURE__ */ createSlot("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(d) {
	let w = React$1.forwardRef((d, w) => {
		let { children: k, ...F } = d;
		if (React$1.isValidElement(k)) {
			let d = getElementRef$1(k), L = mergeProps(F, k.props);
			return k.type !== React$1.Fragment && (L.ref = w ? composeRefs(w, d) : d), React$1.cloneElement(k, L);
		}
		return React$1.Children.count(k) > 1 ? React$1.Children.only(null) : null;
	});
	return w.displayName = `${d}.SlotClone`, w;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(s) {
	let d = ({ children: s }) => /* @__PURE__ */ jsx(Fragment$1, { children: s });
	return d.displayName = `${s}.Slottable`, d.__radixId = SLOTTABLE_IDENTIFIER, d;
}
var Slottable$1 = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(d) {
	return React$1.isValidElement(d) && typeof d.type == "function" && "__radixId" in d.type && d.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(s, d) {
	let w = { ...d };
	for (let k in d) {
		let F = s[k], L = d[k];
		/^on[A-Z]/.test(k) ? F && L ? w[k] = (...s) => {
			let d = L(...s);
			return F(...s), d;
		} : F && (w[k] = F) : k === "style" ? w[k] = {
			...F,
			...L
		} : k === "className" && (w[k] = [F, L].filter(Boolean).join(" "));
	}
	return {
		...s,
		...w
	};
}
function getElementRef$1(s) {
	let d = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, w = d && "isReactWarning" in d && d.isReactWarning;
	return w ? s.ref : (d = Object.getOwnPropertyDescriptor(s, "ref")?.get, w = d && "isReactWarning" in d && d.isReactWarning, w ? s.props.ref : s.props.ref || s.ref);
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
].reduce((d, w) => {
	let k = /* @__PURE__ */ createSlot(`Primitive.${w}`), F = React$1.forwardRef((s, d) => {
		let { asChild: F, ...L } = s, V = F ? k : w;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(V, {
			...L,
			ref: d
		});
	});
	return F.displayName = `Primitive.${w}`, {
		...d,
		[w]: F
	};
}, {});
function dispatchDiscreteCustomEvent(s, d) {
	s && ReactDOM$1.flushSync(() => s.dispatchEvent(d));
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
}), NAME$1 = "VisuallyHidden", VisuallyHidden = React$1.forwardRef((s, d) => /* @__PURE__ */ jsx(Primitive.span, {
	...s,
	ref: d,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...s.style
	}
}));
VisuallyHidden.displayName = NAME$1;
var Root$4 = VisuallyHidden;
function createContext2(d, w) {
	let k = React$1.createContext(w), F = (d) => {
		let { children: w, ...F } = d, L = React$1.useMemo(() => F, Object.values(F));
		return /* @__PURE__ */ jsx(k.Provider, {
			value: L,
			children: w
		});
	};
	F.displayName = d + "Provider";
	function L(F) {
		let L = React$1.useContext(k);
		if (L) return L;
		if (w !== void 0) return w;
		throw Error(`\`${F}\` must be used within \`${d}\``);
	}
	return [F, L];
}
function createContextScope(d, w = []) {
	let k = [];
	function F(w, F) {
		let L = React$1.createContext(F), V = k.length;
		k = [...k, F];
		let U = (w) => {
			let { scope: k, children: F, ...U } = w, K = k?.[d]?.[V] || L, q = React$1.useMemo(() => U, Object.values(U));
			return /* @__PURE__ */ jsx(K.Provider, {
				value: q,
				children: F
			});
		};
		U.displayName = w + "Provider";
		function K(k, U) {
			let K = U?.[d]?.[V] || L, q = React$1.useContext(K);
			if (q) return q;
			if (F !== void 0) return F;
			throw Error(`\`${k}\` must be used within \`${w}\``);
		}
		return [U, K];
	}
	let L = () => {
		let w = k.map((d) => React$1.createContext(d));
		return function(k) {
			let F = k?.[d] || w;
			return React$1.useMemo(() => ({ [`__scope${d}`]: {
				...k,
				[d]: F
			} }), [k, F]);
		};
	};
	return L.scopeName = d, [F, composeContextScopes(L, ...w)];
}
function composeContextScopes(...d) {
	let w = d[0];
	if (d.length === 1) return w;
	let k = () => {
		let k = d.map((s) => ({
			useScope: s(),
			scopeName: s.scopeName
		}));
		return function(d) {
			let F = k.reduce((s, { useScope: w, scopeName: k }) => {
				let F = w(d)[`__scope${k}`];
				return {
					...s,
					...F
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${w.scopeName}`]: F }), [F]);
		};
	};
	return k.scopeName = w.scopeName, k;
}
function createCollection(s) {
	let w = s + "CollectionProvider", [k, F] = createContextScope(w), [L, V] = k(w, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), U = (s) => {
		let { scope: w, children: k } = s, F = React.useRef(null), V = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(L, {
			scope: w,
			itemMap: V,
			collectionRef: F,
			children: k
		});
	};
	U.displayName = w;
	let K = s + "CollectionSlot", q = /* @__PURE__ */ createSlot(K), J = React.forwardRef((s, d) => {
		let { scope: w, children: k } = s;
		return /* @__PURE__ */ jsx(q, {
			ref: useComposedRefs(d, V(K, w).collectionRef),
			children: k
		});
	});
	J.displayName = K;
	let X = s + "CollectionItemSlot", $ = "data-radix-collection-item", pA = /* @__PURE__ */ createSlot(X), mA = React.forwardRef((s, w) => {
		let { scope: k, children: F, ...L } = s, U = React.useRef(null), K = useComposedRefs(w, U), q = V(X, k);
		return React.useEffect(() => (q.itemMap.set(U, {
			ref: U,
			...L
		}), () => void q.itemMap.delete(U))), /* @__PURE__ */ jsx(pA, {
			[$]: "",
			ref: K,
			children: F
		});
	});
	mA.displayName = X;
	function hA(w) {
		let k = V(s + "CollectionConsumer", w);
		return React.useCallback(() => {
			let s = k.collectionRef.current;
			if (!s) return [];
			let d = Array.from(s.querySelectorAll(`[${$}]`));
			return Array.from(k.itemMap.values()).sort((s, w) => d.indexOf(s.ref.current) - d.indexOf(w.ref.current));
		}, [k.collectionRef, k.itemMap]);
	}
	return [
		{
			Provider: U,
			Slot: J,
			ItemSlot: mA
		},
		hA,
		F
	];
}
typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(s, d, { checkForDefaultPrevented: w = !0 } = {}) {
	return function(k) {
		if (s?.(k), w === !1 || !k.defaultPrevented) return d?.(k);
	};
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: d, defaultProp: w, onChange: k = () => {}, caller: F }) {
	let [L, V, U] = useUncontrolledState({
		defaultProp: w,
		onChange: k
	}), K = d !== void 0, q = K ? d : L;
	{
		let w = React$1.useRef(d !== void 0);
		React$1.useEffect(() => {
			let s = w.current;
			if (s !== K) {
				let d = s ? "controlled" : "uncontrolled", w = K ? "controlled" : "uncontrolled";
				console.warn(`${F} is changing from ${d} to ${w}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			w.current = K;
		}, [K, F]);
	}
	return [q, React$1.useCallback((s) => {
		if (K) {
			let w = isFunction(s) ? s(d) : s;
			w !== d && U.current?.(w);
		} else V(s);
	}, [
		K,
		d,
		V,
		U
	])];
}
function useUncontrolledState({ defaultProp: d, onChange: w }) {
	let [k, F] = React$1.useState(d), L = React$1.useRef(k), V = React$1.useRef(w);
	return useInsertionEffect$1(() => {
		V.current = w;
	}, [w]), React$1.useEffect(() => {
		L.current !== k && (V.current?.(k), L.current = k);
	}, [k, L]), [
		k,
		F,
		V
	];
}
function isFunction(s) {
	return typeof s == "function";
}
function useStateMachine$1(d, w) {
	return React$1.useReducer((s, d) => w[s][d] ?? s, d);
}
var Presence = (d) => {
	let { present: w, children: k } = d, F = usePresence$1(w), L = typeof k == "function" ? k({ present: F.isPresent }) : React$1.Children.only(k), V = useComposedRefs(F.ref, getElementRef(L));
	return typeof k == "function" || F.isPresent ? React$1.cloneElement(L, { ref: V }) : null;
};
Presence.displayName = "Presence";
function usePresence$1(d) {
	let [w, k] = React$1.useState(), F = React$1.useRef(null), L = React$1.useRef(d), V = React$1.useRef("none"), [U, K] = useStateMachine$1(d ? "mounted" : "unmounted", {
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
		let s = getAnimationName(F.current);
		V.current = U === "mounted" ? s : "none";
	}, [U]), useLayoutEffect2(() => {
		let s = F.current, w = L.current;
		if (w !== d) {
			let k = V.current, F = getAnimationName(s);
			d ? K("MOUNT") : F === "none" || s?.display === "none" ? K("UNMOUNT") : K(w && k !== F ? "ANIMATION_OUT" : "UNMOUNT"), L.current = d;
		}
	}, [d, K]), useLayoutEffect2(() => {
		if (w) {
			let s, d = w.ownerDocument.defaultView ?? window, k = (k) => {
				let V = getAnimationName(F.current).includes(CSS.escape(k.animationName));
				if (k.target === w && V && (K("ANIMATION_END"), !L.current)) {
					let k = w.style.animationFillMode;
					w.style.animationFillMode = "forwards", s = d.setTimeout(() => {
						w.style.animationFillMode === "forwards" && (w.style.animationFillMode = k);
					});
				}
			}, U = (s) => {
				s.target === w && (V.current = getAnimationName(F.current));
			};
			return w.addEventListener("animationstart", U), w.addEventListener("animationcancel", k), w.addEventListener("animationend", k), () => {
				d.clearTimeout(s), w.removeEventListener("animationstart", U), w.removeEventListener("animationcancel", k), w.removeEventListener("animationend", k);
			};
		} else K("ANIMATION_END");
	}, [w, K]), {
		isPresent: ["mounted", "unmountSuspended"].includes(U),
		ref: React$1.useCallback((s) => {
			F.current = s ? getComputedStyle(s) : null, k(s);
		}, [])
	};
}
function getAnimationName(s) {
	return s?.animationName || "none";
}
function getElementRef(s) {
	let d = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, w = d && "isReactWarning" in d && d.isReactWarning;
	return w ? s.ref : (d = Object.getOwnPropertyDescriptor(s, "ref")?.get, w = d && "isReactWarning" in d && d.isReactWarning, w ? s.props.ref : s.props.ref || s.ref);
}
var useReactId = React$1.useId || (() => void 0), count$1 = 0;
function useId$1(d) {
	let [w, k] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		d || k((s) => s ?? String(count$1++));
	}, [d]), d || (w ? `radix-${w}` : "");
}
var DirectionContext = React$1.createContext(void 0), DirectionProvider = (s) => {
	let { dir: d, children: w } = s;
	return /* @__PURE__ */ jsx(DirectionContext.Provider, {
		value: d,
		children: w
	});
};
function useDirection(d) {
	let w = React$1.useContext(DirectionContext);
	return d || w || "ltr";
}
var Provider$1 = DirectionProvider;
function useCallbackRef(d) {
	let w = React$1.useRef(d);
	return React$1.useEffect(() => {
		w.current = d;
	}), React$1.useMemo(() => (...s) => w.current?.(...s), []);
}
function useEscapeKeydown(d, w = globalThis?.document) {
	let k = useCallbackRef(d);
	React$1.useEffect(() => {
		let s = (s) => {
			s.key === "Escape" && k(s);
		};
		return w.addEventListener("keydown", s, { capture: !0 }), () => w.removeEventListener("keydown", s, { capture: !0 });
	}, [k, w]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((d, w) => {
	let { disableOutsidePointerEvents: k = !1, onEscapeKeyDown: F, onPointerDownOutside: L, onFocusOutside: V, onInteractOutside: U, onDismiss: K, ...q } = d, J = React$1.useContext(DismissableLayerContext), [X, $] = React$1.useState(null), pA = X?.ownerDocument ?? globalThis?.document, [, mA] = React$1.useState({}), hA = useComposedRefs(w, (s) => $(s)), gA = Array.from(J.layers), [_A] = [...J.layersWithOutsidePointerEventsDisabled].slice(-1), vA = gA.indexOf(_A), yA = X ? gA.indexOf(X) : -1, bA = J.layersWithOutsidePointerEventsDisabled.size > 0, xA = yA >= vA, SA = usePointerDownOutside((s) => {
		let d = s.target, w = [...J.branches].some((s) => s.contains(d));
		!xA || w || (L?.(s), U?.(s), s.defaultPrevented || K?.());
	}, pA), wA = useFocusOutside((s) => {
		let d = s.target;
		[...J.branches].some((s) => s.contains(d)) || (V?.(s), U?.(s), s.defaultPrevented || K?.());
	}, pA);
	return useEscapeKeydown((s) => {
		yA === J.layers.size - 1 && (F?.(s), !s.defaultPrevented && K && (s.preventDefault(), K()));
	}, pA), React$1.useEffect(() => {
		if (X) return k && (J.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = pA.body.style.pointerEvents, pA.body.style.pointerEvents = "none"), J.layersWithOutsidePointerEventsDisabled.add(X)), J.layers.add(X), dispatchUpdate(), () => {
			k && J.layersWithOutsidePointerEventsDisabled.size === 1 && (pA.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		X,
		pA,
		k,
		J
	]), React$1.useEffect(() => () => {
		X && (J.layers.delete(X), J.layersWithOutsidePointerEventsDisabled.delete(X), dispatchUpdate());
	}, [X, J]), React$1.useEffect(() => {
		let s = () => mA({});
		return document.addEventListener(CONTEXT_UPDATE, s), () => document.removeEventListener(CONTEXT_UPDATE, s);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...q,
		ref: hA,
		style: {
			pointerEvents: bA ? xA ? "auto" : "none" : void 0,
			...d.style
		},
		onFocusCapture: composeEventHandlers(d.onFocusCapture, wA.onFocusCapture),
		onBlurCapture: composeEventHandlers(d.onBlurCapture, wA.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(d.onPointerDownCapture, SA.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((d, w) => {
	let k = React$1.useContext(DismissableLayerContext), F = React$1.useRef(null), L = useComposedRefs(w, F);
	return React$1.useEffect(() => {
		let s = F.current;
		if (s) return k.branches.add(s), () => {
			k.branches.delete(s);
		};
	}, [k.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		...d,
		ref: L
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(d, w = globalThis?.document) {
	let k = useCallbackRef(d), F = React$1.useRef(!1), L = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let s = (s) => {
			if (s.target && !F.current) {
				let d = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, k, F, { discrete: !0 });
				}, F = { originalEvent: s };
				s.pointerType === "touch" ? (w.removeEventListener("click", L.current), L.current = d, w.addEventListener("click", L.current, { once: !0 })) : d();
			} else w.removeEventListener("click", L.current);
			F.current = !1;
		}, d = window.setTimeout(() => {
			w.addEventListener("pointerdown", s);
		}, 0);
		return () => {
			window.clearTimeout(d), w.removeEventListener("pointerdown", s), w.removeEventListener("click", L.current);
		};
	}, [w, k]), { onPointerDownCapture: () => F.current = !0 };
}
function useFocusOutside(d, w = globalThis?.document) {
	let k = useCallbackRef(d), F = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let s = (s) => {
			s.target && !F.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, k, { originalEvent: s }, { discrete: !1 });
		};
		return w.addEventListener("focusin", s), () => w.removeEventListener("focusin", s);
	}, [w, k]), {
		onFocusCapture: () => F.current = !0,
		onBlurCapture: () => F.current = !1
	};
}
function dispatchUpdate() {
	let s = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(s);
}
function handleAndDispatchCustomEvent(s, d, w, { discrete: k }) {
	let F = w.originalEvent.target, L = new CustomEvent(s, {
		bubbles: !1,
		cancelable: !0,
		detail: w
	});
	d && F.addEventListener(s, d, { once: !0 }), k ? dispatchDiscreteCustomEvent(F, L) : F.dispatchEvent(L);
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS$1 = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((d, w) => {
	let { loop: k = !1, trapped: F = !1, onMountAutoFocus: L, onUnmountAutoFocus: V, ...U } = d, [K, q] = React$1.useState(null), J = useCallbackRef(L), X = useCallbackRef(V), $ = React$1.useRef(null), pA = useComposedRefs(w, (s) => q(s)), mA = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (F) {
			let s = function(s) {
				if (mA.paused || !K) return;
				let d = s.target;
				K.contains(d) ? $.current = d : focus($.current, { select: !0 });
			}, d = function(s) {
				if (mA.paused || !K) return;
				let d = s.relatedTarget;
				d !== null && (K.contains(d) || focus($.current, { select: !0 }));
			}, w = function(s) {
				if (document.activeElement === document.body) for (let d of s) d.removedNodes.length > 0 && focus(K);
			};
			document.addEventListener("focusin", s), document.addEventListener("focusout", d);
			let k = new MutationObserver(w);
			return K && k.observe(K, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", s), document.removeEventListener("focusout", d), k.disconnect();
			};
		}
	}, [
		F,
		K,
		mA.paused
	]), React$1.useEffect(() => {
		if (K) {
			focusScopesStack.add(mA);
			let s = document.activeElement;
			if (!K.contains(s)) {
				let d = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
				K.addEventListener(AUTOFOCUS_ON_MOUNT, J), K.dispatchEvent(d), d.defaultPrevented || (focusFirst$2(removeLinks(getTabbableCandidates(K)), { select: !0 }), document.activeElement === s && focus(K));
			}
			return () => {
				K.removeEventListener(AUTOFOCUS_ON_MOUNT, J), setTimeout(() => {
					let d = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
					K.addEventListener(AUTOFOCUS_ON_UNMOUNT, X), K.dispatchEvent(d), d.defaultPrevented || focus(s ?? document.body, { select: !0 }), K.removeEventListener(AUTOFOCUS_ON_UNMOUNT, X), focusScopesStack.remove(mA);
				}, 0);
			};
		}
	}, [
		K,
		J,
		X,
		mA
	]);
	let hA = React$1.useCallback((s) => {
		if (!k && !F || mA.paused) return;
		let d = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, w = document.activeElement;
		if (d && w) {
			let d = s.currentTarget, [F, L] = getTabbableEdges(d);
			F && L ? !s.shiftKey && w === L ? (s.preventDefault(), k && focus(F, { select: !0 })) : s.shiftKey && w === F && (s.preventDefault(), k && focus(L, { select: !0 })) : w === d && s.preventDefault();
		}
	}, [
		k,
		F,
		mA.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...U,
		ref: pA,
		onKeyDown: hA
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(s, { select: d = !1 } = {}) {
	let w = document.activeElement;
	for (let k of s) if (focus(k, { select: d }), document.activeElement !== w) return;
}
function getTabbableEdges(s) {
	let d = getTabbableCandidates(s);
	return [findVisible(d, s), findVisible(d.reverse(), s)];
}
function getTabbableCandidates(s) {
	let d = [], w = document.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, { acceptNode: (s) => {
		let d = s.tagName === "INPUT" && s.type === "hidden";
		return s.disabled || s.hidden || d ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; w.nextNode();) d.push(w.currentNode);
	return d;
}
function findVisible(s, d) {
	for (let w of s) if (!isHidden(w, { upTo: d })) return w;
}
function isHidden(s, { upTo: d }) {
	if (getComputedStyle(s).visibility === "hidden") return !0;
	for (; s;) {
		if (d !== void 0 && s === d) return !1;
		if (getComputedStyle(s).display === "none") return !0;
		s = s.parentElement;
	}
	return !1;
}
function isSelectableInput(s) {
	return s instanceof HTMLInputElement && "select" in s;
}
function focus(s, { select: d = !1 } = {}) {
	if (s && s.focus) {
		let w = document.activeElement;
		s.focus({ preventScroll: !0 }), s !== w && isSelectableInput(s) && d && s.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let s = [];
	return {
		add(d) {
			let w = s[0];
			d !== w && w?.pause(), s = arrayRemove(s, d), s.unshift(d);
		},
		remove(d) {
			s = arrayRemove(s, d), s[0]?.resume();
		}
	};
}
function arrayRemove(s, d) {
	let w = [...s], k = w.indexOf(d);
	return k !== -1 && w.splice(k, 1), w;
}
function removeLinks(s) {
	return s.filter((s) => s.tagName !== "A");
}
var PORTAL_NAME$6 = "Portal", Portal = React$1.forwardRef((d, w) => {
	let { container: k, ...F } = d, [L, V] = React$1.useState(!1);
	useLayoutEffect2(() => V(!0), []);
	let U = k || L && globalThis?.document?.body;
	return U ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...F,
		ref: w
	}), U) : null;
});
Portal.displayName = PORTAL_NAME$6;
var count = 0;
function useFocusGuards() {
	React$1.useEffect(() => {
		let s = document.querySelectorAll("[data-radix-focus-guard]");
		return document.body.insertAdjacentElement("afterbegin", s[0] ?? createFocusGuard()), document.body.insertAdjacentElement("beforeend", s[1] ?? createFocusGuard()), count++, () => {
			count === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((s) => s.remove()), count--;
		};
	}, []);
}
function createFocusGuard() {
	let s = document.createElement("span");
	return s.setAttribute("data-radix-focus-guard", ""), s.tabIndex = 0, s.style.outline = "none", s.style.opacity = "0", s.style.position = "fixed", s.style.pointerEvents = "none", s;
}
var __assign$2 = function() {
	return __assign$2 = Object.assign || function(s) {
		for (var d, w = 1, k = arguments.length; w < k; w++) for (var F in d = arguments[w], d) Object.prototype.hasOwnProperty.call(d, F) && (s[F] = d[F]);
		return s;
	}, __assign$2.apply(this, arguments);
};
function __rest(s, d) {
	var w = {};
	for (var k in s) Object.prototype.hasOwnProperty.call(s, k) && d.indexOf(k) < 0 && (w[k] = s[k]);
	if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var F = 0, k = Object.getOwnPropertySymbols(s); F < k.length; F++) d.indexOf(k[F]) < 0 && Object.prototype.propertyIsEnumerable.call(s, k[F]) && (w[k[F]] = s[k[F]]);
	return w;
}
function __spreadArray(s, d, w) {
	if (w || arguments.length === 2) for (var k = 0, F = d.length, L; k < F; k++) (L || !(k in d)) && (L ||= Array.prototype.slice.call(d, 0, k), L[k] = d[k]);
	return s.concat(L || Array.prototype.slice.call(d));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(s, d) {
	return typeof s == "function" ? s(d) : s && (s.current = d), s;
}
function useCallbackRef$1(s, d) {
	var w = useState(function() {
		return {
			value: s,
			callback: d,
			facade: {
				get current() {
					return w.value;
				},
				set current(s) {
					var d = w.value;
					d !== s && (w.value = s, w.callback(s, d));
				}
			}
		};
	})[0];
	return w.callback = d, w.facade;
}
var useIsomorphicLayoutEffect$1 = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(s, d) {
	var w = useCallbackRef$1(d || null, function(d) {
		return s.forEach(function(s) {
			return assignRef(s, d);
		});
	});
	return useIsomorphicLayoutEffect$1(function() {
		var d = currentValues.get(w);
		if (d) {
			var k = new Set(d), F = new Set(s), L = w.current;
			k.forEach(function(s) {
				F.has(s) || assignRef(s, null);
			}), F.forEach(function(s) {
				k.has(s) || assignRef(s, L);
			});
		}
		currentValues.set(w, s);
	}, [s]), w;
}
function ItoI(s) {
	return s;
}
function innerCreateMedium(s, d) {
	d === void 0 && (d = ItoI);
	var w = [], k = !1;
	return {
		read: function() {
			if (k) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return w.length ? w[w.length - 1] : s;
		},
		useMedium: function(s) {
			var F = d(s, k);
			return w.push(F), function() {
				w = w.filter(function(s) {
					return s !== F;
				});
			};
		},
		assignSyncMedium: function(s) {
			for (k = !0; w.length;) {
				var d = w;
				w = [], d.forEach(s);
			}
			w = {
				push: function(d) {
					return s(d);
				},
				filter: function() {
					return w;
				}
			};
		},
		assignMedium: function(s) {
			k = !0;
			var d = [];
			if (w.length) {
				var F = w;
				w = [], F.forEach(s), d = w;
			}
			var L = function() {
				var w = d;
				d = [], w.forEach(s);
			}, V = function() {
				return Promise.resolve().then(L);
			};
			V(), w = {
				push: function(s) {
					d.push(s), V();
				},
				filter: function(s) {
					return d = d.filter(s), w;
				}
			};
		}
	};
}
function createSidecarMedium(s) {
	s === void 0 && (s = {});
	var d = innerCreateMedium(null);
	return d.options = __assign$2({
		async: !0,
		ssr: !1
	}, s), d;
}
var SideCar = function(d) {
	var w = d.sideCar, k = __rest(d, ["sideCar"]);
	if (!w) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var F = w.read();
	if (!F) throw Error("Sidecar medium not found");
	return React$1.createElement(F, __assign$2({}, k));
};
SideCar.isSideCarExport = !0;
function exportSidecar(s, d) {
	return s.useMedium(d), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(d, w) {
	var k = React$1.useRef(null), F = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), L = F[0], V = F[1], U = d.forwardProps, K = d.children, q = d.className, J = d.removeScrollBar, X = d.enabled, $ = d.shards, pA = d.sideCar, mA = d.noRelative, hA = d.noIsolation, gA = d.inert, _A = d.allowPinchZoom, vA = d.as, yA = vA === void 0 ? "div" : vA, bA = d.gapMode, xA = __rest(d, [
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
	]), SA = pA, CA = useMergeRefs([k, w]), wA = __assign$2(__assign$2({}, xA), L);
	return React$1.createElement(React$1.Fragment, null, X && React$1.createElement(SA, {
		sideCar: effectCar,
		removeScrollBar: J,
		shards: $,
		noRelative: mA,
		noIsolation: hA,
		inert: gA,
		setCallbacks: V,
		allowPinchZoom: !!_A,
		lockRef: k,
		gapMode: bA
	}), U ? React$1.cloneElement(React$1.Children.only(K), __assign$2(__assign$2({}, wA), { ref: CA })) : React$1.createElement(yA, __assign$2({}, wA, {
		className: q,
		ref: CA
	}), K));
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
	var s = document.createElement("style");
	s.type = "text/css";
	var d = getNonce();
	return d && s.setAttribute("nonce", d), s;
}
function injectStyles(s, d) {
	s.styleSheet ? s.styleSheet.cssText = d : s.appendChild(document.createTextNode(d));
}
function insertStyleTag(s) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(s);
}
var stylesheetSingleton = function() {
	var s = 0, d = null;
	return {
		add: function(w) {
			s == 0 && (d = makeStyleTag()) && (injectStyles(d, w), insertStyleTag(d)), s++;
		},
		remove: function() {
			s--, !s && d && (d.parentNode && d.parentNode.removeChild(d), d = null);
		}
	};
}, styleHookSingleton = function() {
	var d = stylesheetSingleton();
	return function(w, k) {
		React$1.useEffect(function() {
			return d.add(w), function() {
				d.remove();
			};
		}, [w && k]);
	};
}, styleSingleton = function() {
	var s = styleHookSingleton();
	return function(d) {
		var w = d.styles, k = d.dynamic;
		return s(w, k), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(s) {
	return parseInt(s || "", 10) || 0;
}, getOffset = function(s) {
	var d = window.getComputedStyle(document.body), w = d[s === "padding" ? "paddingLeft" : "marginLeft"], k = d[s === "padding" ? "paddingTop" : "marginTop"], F = d[s === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(w),
		parse(k),
		parse(F)
	];
}, getGapWidth = function(s) {
	if (s === void 0 && (s = "margin"), typeof window > "u") return zeroGap;
	var d = getOffset(s), w = document.documentElement.clientWidth, k = window.innerWidth;
	return {
		left: d[0],
		top: d[1],
		right: d[2],
		gap: Math.max(0, k - w + d[2] - d[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(s, d, w, k) {
	var F = s.left, L = s.top, V = s.right, U = s.gap;
	return w === void 0 && (w = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${k};
   padding-right: ${U}px ${k};
  }
  body[${lockAttribute}] {
    overflow: hidden ${k};
    overscroll-behavior: contain;
    ${[
		d && `position: relative ${k};`,
		w === "margin" && `
    padding-left: ${F}px;
    padding-top: ${L}px;
    padding-right: ${V}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${U}px ${k};
    `,
		w === "padding" && `padding-right: ${U}px ${k};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${U}px ${k};
  }
  
  .${fullWidthClassName} {
    margin-right: ${U}px ${k};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${k};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${k};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${U}px;
  }
`;
}, getCurrentUseCounter = function() {
	var s = parseInt(document.body.getAttribute("data-scroll-locked") || "0", 10);
	return isFinite(s) ? s : 0;
}, useLockAttribute = function() {
	React$1.useEffect(function() {
		return document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString()), function() {
			var s = getCurrentUseCounter() - 1;
			s <= 0 ? document.body.removeAttribute(lockAttribute) : document.body.setAttribute(lockAttribute, s.toString());
		};
	}, []);
}, RemoveScrollBar = function(d) {
	var w = d.noRelative, k = d.noImportant, F = d.gapMode, L = F === void 0 ? "margin" : F;
	useLockAttribute();
	var V = React$1.useMemo(function() {
		return getGapWidth(L);
	}, [L]);
	return React$1.createElement(Style, { styles: getStyles(V, !w, L, k ? "" : "!important") });
}, passiveSupported = !1;
if (typeof window < "u") try {
	var options = Object.defineProperty({}, "passive", { get: function() {
		return passiveSupported = !0, !0;
	} });
	window.addEventListener("test", options, options), window.removeEventListener("test", options, options);
} catch {
	passiveSupported = !1;
}
var nonPassive = passiveSupported ? { passive: !1 } : !1, alwaysContainsScroll = function(s) {
	return s.tagName === "TEXTAREA";
}, elementCanBeScrolled = function(s, d) {
	if (!(s instanceof Element)) return !1;
	var w = window.getComputedStyle(s);
	return w[d] !== "hidden" && !(w.overflowY === w.overflowX && !alwaysContainsScroll(s) && w[d] === "visible");
}, elementCouldBeVScrolled = function(s) {
	return elementCanBeScrolled(s, "overflowY");
}, elementCouldBeHScrolled = function(s) {
	return elementCanBeScrolled(s, "overflowX");
}, locationCouldBeScrolled = function(s, d) {
	var w = d.ownerDocument, k = d;
	do {
		if (typeof ShadowRoot < "u" && k instanceof ShadowRoot && (k = k.host), elementCouldBeScrolled(s, k)) {
			var F = getScrollVariables(s, k);
			if (F[1] > F[2]) return !0;
		}
		k = k.parentNode;
	} while (k && k !== w.body);
	return !1;
}, getVScrollVariables = function(s) {
	return [
		s.scrollTop,
		s.scrollHeight,
		s.clientHeight
	];
}, getHScrollVariables = function(s) {
	return [
		s.scrollLeft,
		s.scrollWidth,
		s.clientWidth
	];
}, elementCouldBeScrolled = function(s, d) {
	return s === "v" ? elementCouldBeVScrolled(d) : elementCouldBeHScrolled(d);
}, getScrollVariables = function(s, d) {
	return s === "v" ? getVScrollVariables(d) : getHScrollVariables(d);
}, getDirectionFactor = function(s, d) {
	return s === "h" && d === "rtl" ? -1 : 1;
}, handleScroll = function(s, d, w, k, F) {
	var L = getDirectionFactor(s, window.getComputedStyle(d).direction), V = L * k, U = w.target, K = d.contains(U), q = !1, J = V > 0, X = 0, $ = 0;
	do {
		if (!U) break;
		var pA = getScrollVariables(s, U), mA = pA[0], hA = pA[1] - pA[2] - L * mA;
		(mA || hA) && elementCouldBeScrolled(s, U) && (X += hA, $ += mA);
		var gA = U.parentNode;
		U = gA && gA.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? gA.host : gA;
	} while (!K && U !== document.body || K && (d.contains(U) || d === U));
	return (J && (F && Math.abs(X) < 1 || !F && V > X) || !J && (F && Math.abs($) < 1 || !F && -V > $)) && (q = !0), q;
}, getTouchXY = function(s) {
	return "changedTouches" in s ? [s.changedTouches[0].clientX, s.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(s) {
	return [s.deltaX, s.deltaY];
}, extractRef = function(s) {
	return s && "current" in s ? s.current : s;
}, deltaCompare = function(s, d) {
	return s[0] === d[0] && s[1] === d[1];
}, generateStyle = function(s) {
	return `
  .block-interactivity-${s} {pointer-events: none;}
  .allow-interactivity-${s} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(d) {
	var w = React$1.useRef([]), k = React$1.useRef([0, 0]), F = React$1.useRef(), L = React$1.useState(idCounter++)[0], V = React$1.useState(styleSingleton)[0], U = React$1.useRef(d);
	React$1.useEffect(function() {
		U.current = d;
	}, [d]), React$1.useEffect(function() {
		if (d.inert) {
			document.body.classList.add(`block-interactivity-${L}`);
			var s = __spreadArray([d.lockRef.current], (d.shards || []).map(extractRef), !0).filter(Boolean);
			return s.forEach(function(s) {
				return s.classList.add(`allow-interactivity-${L}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${L}`), s.forEach(function(s) {
					return s.classList.remove(`allow-interactivity-${L}`);
				});
			};
		}
	}, [
		d.inert,
		d.lockRef.current,
		d.shards
	]);
	var K = React$1.useCallback(function(s, d) {
		if ("touches" in s && s.touches.length === 2 || s.type === "wheel" && s.ctrlKey) return !U.current.allowPinchZoom;
		var w = getTouchXY(s), L = k.current, V = "deltaX" in s ? s.deltaX : L[0] - w[0], K = "deltaY" in s ? s.deltaY : L[1] - w[1], q, J = s.target, X = Math.abs(V) > Math.abs(K) ? "h" : "v";
		if ("touches" in s && X === "h" && J.type === "range") return !1;
		var $ = window.getSelection(), pA = $ && $.anchorNode;
		if (pA && (pA === J || pA.contains(J))) return !1;
		var mA = locationCouldBeScrolled(X, J);
		if (!mA) return !0;
		if (mA ? q = X : (q = X === "v" ? "h" : "v", mA = locationCouldBeScrolled(X, J)), !mA) return !1;
		if (!F.current && "changedTouches" in s && (V || K) && (F.current = q), !q) return !0;
		var hA = F.current || q;
		return handleScroll(hA, d, s, hA === "h" ? V : K, !0);
	}, []), q = React$1.useCallback(function(s) {
		var d = s;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== V)) {
			var k = "deltaY" in d ? getDeltaXY(d) : getTouchXY(d), F = w.current.filter(function(s) {
				return s.name === d.type && (s.target === d.target || d.target === s.shadowParent) && deltaCompare(s.delta, k);
			})[0];
			if (F && F.should) {
				d.cancelable && d.preventDefault();
				return;
			}
			if (!F) {
				var L = (U.current.shards || []).map(extractRef).filter(Boolean).filter(function(s) {
					return s.contains(d.target);
				});
				(L.length > 0 ? K(d, L[0]) : !U.current.noIsolation) && d.cancelable && d.preventDefault();
			}
		}
	}, []), J = React$1.useCallback(function(s, d, k, F) {
		var L = {
			name: s,
			delta: d,
			target: k,
			should: F,
			shadowParent: getOutermostShadowParent(k)
		};
		w.current.push(L), setTimeout(function() {
			w.current = w.current.filter(function(s) {
				return s !== L;
			});
		}, 1);
	}, []), X = React$1.useCallback(function(s) {
		k.current = getTouchXY(s), F.current = void 0;
	}, []), $ = React$1.useCallback(function(s) {
		J(s.type, getDeltaXY(s), s.target, K(s, d.lockRef.current));
	}, []), pA = React$1.useCallback(function(s) {
		J(s.type, getTouchXY(s), s.target, K(s, d.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(V), d.setCallbacks({
			onScrollCapture: $,
			onWheelCapture: $,
			onTouchMoveCapture: pA
		}), document.addEventListener("wheel", q, nonPassive), document.addEventListener("touchmove", q, nonPassive), document.addEventListener("touchstart", X, nonPassive), function() {
			lockStack = lockStack.filter(function(s) {
				return s !== V;
			}), document.removeEventListener("wheel", q, nonPassive), document.removeEventListener("touchmove", q, nonPassive), document.removeEventListener("touchstart", X, nonPassive);
		};
	}, []);
	var mA = d.removeScrollBar, hA = d.inert;
	return React$1.createElement(React$1.Fragment, null, hA ? React$1.createElement(V, { styles: generateStyle(L) }) : null, mA ? React$1.createElement(RemoveScrollBar, {
		noRelative: d.noRelative,
		gapMode: d.gapMode
	}) : null);
}
function getOutermostShadowParent(s) {
	for (var d = null; s !== null;) s instanceof ShadowRoot && (d = s.host, s = s.host), s = s.parentNode;
	return d;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(d, w) {
	return React$1.createElement(RemoveScroll, __assign$2({}, d, {
		ref: w,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, getDefaultParent = function(s) {
	return typeof document > "u" ? null : (Array.isArray(s) ? s[0] : s).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(s) {
	return s && (s.host || unwrapHost(s.parentNode));
}, correctTargets = function(s, d) {
	return d.map(function(d) {
		if (s.contains(d)) return d;
		var w = unwrapHost(d);
		return w && s.contains(w) ? w : (console.error("aria-hidden", d, "in not contained inside", s, ". Doing nothing"), null);
	}).filter(function(s) {
		return !!s;
	});
}, applyAttributeToOthers = function(s, d, w, k) {
	var F = correctTargets(d, Array.isArray(s) ? s : [s]);
	markerMap[w] || (markerMap[w] = /* @__PURE__ */ new WeakMap());
	var L = markerMap[w], V = [], U = /* @__PURE__ */ new Set(), K = new Set(F), q = function(s) {
		!s || U.has(s) || (U.add(s), q(s.parentNode));
	};
	F.forEach(q);
	var J = function(s) {
		!s || K.has(s) || Array.prototype.forEach.call(s.children, function(s) {
			if (U.has(s)) J(s);
			else try {
				var d = s.getAttribute(k), F = d !== null && d !== "false", K = (counterMap.get(s) || 0) + 1, q = (L.get(s) || 0) + 1;
				counterMap.set(s, K), L.set(s, q), V.push(s), K === 1 && F && uncontrolledNodes.set(s, !0), q === 1 && s.setAttribute(w, "true"), F || s.setAttribute(k, "true");
			} catch (d) {
				console.error("aria-hidden: cannot operate on ", s, d);
			}
		});
	};
	return J(d), U.clear(), lockCount++, function() {
		V.forEach(function(s) {
			var d = counterMap.get(s) - 1, F = L.get(s) - 1;
			counterMap.set(s, d), L.set(s, F), d || (uncontrolledNodes.has(s) || s.removeAttribute(k), uncontrolledNodes.delete(s)), F || s.removeAttribute(w);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(s, d, w) {
	w === void 0 && (w = "data-aria-hidden");
	var k = Array.from(Array.isArray(s) ? s : [s]), F = d || getDefaultParent(s);
	return F ? (k.push.apply(k, Array.from(F.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(k, F, w, "aria-hidden")) : function() {
		return null;
	};
}, DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog = (d) => {
	let { __scopeDialog: w, children: k, open: F, defaultOpen: L, onOpenChange: V, modal: U = !0 } = d, K = React$1.useRef(null), q = React$1.useRef(null), [J, X] = useControllableState({
		prop: F,
		defaultProp: L ?? !1,
		onChange: V,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: w,
		triggerRef: K,
		contentRef: q,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: J,
		onOpenChange: X,
		onOpenToggle: React$1.useCallback(() => X((s) => !s), [X]),
		modal: U,
		children: k
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$4 = "DialogTrigger", DialogTrigger = React$1.forwardRef((s, d) => {
	let { __scopeDialog: w, ...k } = s, F = useDialogContext(TRIGGER_NAME$4, w), L = useComposedRefs(d, F.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": F.open,
		"aria-controls": F.contentId,
		"data-state": getState(F.open),
		...k,
		ref: L,
		onClick: composeEventHandlers(s.onClick, F.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME$4;
var PORTAL_NAME$5 = "DialogPortal", [PortalProvider$2, usePortalContext$2] = createDialogContext(PORTAL_NAME$5, { forceMount: void 0 }), DialogPortal = (d) => {
	let { __scopeDialog: w, forceMount: k, children: F, container: L } = d, V = useDialogContext(PORTAL_NAME$5, w);
	return /* @__PURE__ */ jsx(PortalProvider$2, {
		scope: w,
		forceMount: k,
		children: React$1.Children.map(F, (s) => /* @__PURE__ */ jsx(Presence, {
			present: k || V.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: L,
				children: s
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME$5;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay = React$1.forwardRef((s, d) => {
	let w = usePortalContext$2(OVERLAY_NAME, s.__scopeDialog), { forceMount: k = w.forceMount, ...F } = s, L = useDialogContext(OVERLAY_NAME, s.__scopeDialog);
	return L.modal ? /* @__PURE__ */ jsx(Presence, {
		present: k || L.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...F,
			ref: d
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot$2 = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((s, d) => {
	let { __scopeDialog: w, ...k } = s, F = useDialogContext(OVERLAY_NAME, w);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot$2,
		allowPinchZoom: !0,
		shards: [F.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState(F.open),
			...k,
			ref: d,
			style: {
				pointerEvents: "auto",
				...k.style
			}
		})
	});
}), CONTENT_NAME$6 = "DialogContent", DialogContent = React$1.forwardRef((s, d) => {
	let w = usePortalContext$2(CONTENT_NAME$6, s.__scopeDialog), { forceMount: k = w.forceMount, ...F } = s, L = useDialogContext(CONTENT_NAME$6, s.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: k || L.open,
		children: L.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...F,
			ref: d
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...F,
			ref: d
		})
	});
});
DialogContent.displayName = CONTENT_NAME$6;
var DialogContentModal = React$1.forwardRef((d, w) => {
	let k = useDialogContext(CONTENT_NAME$6, d.__scopeDialog), F = React$1.useRef(null), L = useComposedRefs(w, k.contentRef, F);
	return React$1.useEffect(() => {
		let s = F.current;
		if (s) return hideOthers(s);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		...d,
		ref: L,
		trapFocus: k.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(d.onCloseAutoFocus, (s) => {
			s.preventDefault(), k.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(d.onPointerDownOutside, (s) => {
			let d = s.detail.originalEvent, w = d.button === 0 && d.ctrlKey === !0;
			(d.button === 2 || w) && s.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(d.onFocusOutside, (s) => s.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((d, w) => {
	let k = useDialogContext(CONTENT_NAME$6, d.__scopeDialog), F = React$1.useRef(!1), L = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		...d,
		ref: w,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (s) => {
			d.onCloseAutoFocus?.(s), s.defaultPrevented || (F.current || k.triggerRef.current?.focus(), s.preventDefault()), F.current = !1, L.current = !1;
		},
		onInteractOutside: (s) => {
			d.onInteractOutside?.(s), s.defaultPrevented || (F.current = !0, s.detail.originalEvent.type === "pointerdown" && (L.current = !0));
			let w = s.target;
			k.triggerRef.current?.contains(w) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && L.current && s.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((d, w) => {
	let { __scopeDialog: k, trapFocus: F, onOpenAutoFocus: L, onCloseAutoFocus: V, ...U } = d, K = useDialogContext(CONTENT_NAME$6, k), q = React$1.useRef(null), J = useComposedRefs(w, q);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: F,
		onMountAutoFocus: L,
		onUnmountAutoFocus: V,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: K.contentId,
			"aria-describedby": K.descriptionId,
			"aria-labelledby": K.titleId,
			"data-state": getState(K.open),
			...U,
			ref: J,
			onDismiss: () => K.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: K.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: q,
		descriptionId: K.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle = React$1.forwardRef((s, d) => {
	let { __scopeDialog: w, ...k } = s, F = useDialogContext(TITLE_NAME, w);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: F.titleId,
		...k,
		ref: d
	});
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription = React$1.forwardRef((s, d) => {
	let { __scopeDialog: w, ...k } = s, F = useDialogContext(DESCRIPTION_NAME, w);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: F.descriptionId,
		...k,
		ref: d
	});
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose = React$1.forwardRef((s, d) => {
	let { __scopeDialog: w, ...k } = s, F = useDialogContext(CLOSE_NAME, w);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...k,
		ref: d,
		onClick: composeEventHandlers(s.onClick, () => F.onOpenChange(!1))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState(s) {
	return s ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME$6,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: d }) => {
	let w = useWarningContext(TITLE_WARNING_NAME), k = `\`${w.contentName}\` requires a \`${w.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${w.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${w.docsSlug}`;
	return React$1.useEffect(() => {
		d && (document.getElementById(d) || console.error(k));
	}, [k, d]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: d, descriptionId: w }) => {
	let k = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let s = d.current?.getAttribute("aria-describedby");
		w && s && (document.getElementById(w) || console.warn(k));
	}, [
		k,
		d,
		w
	]), null;
}, Root$3 = Dialog, Trigger$3 = DialogTrigger, Portal$3 = DialogPortal, Overlay = DialogOverlay, Content$1 = DialogContent, Title = DialogTitle, Description = DialogDescription, Close = DialogClose;
function usePrevious(d) {
	let w = React$1.useRef({
		value: d,
		previous: d
	});
	return React$1.useMemo(() => (w.current.value !== d && (w.current.previous = w.current.value, w.current.value = d), w.current.previous), [d]);
}
function useSize(d) {
	let [w, k] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (d) {
			k({
				width: d.offsetWidth,
				height: d.offsetHeight
			});
			let s = new ResizeObserver((s) => {
				if (!Array.isArray(s) || !s.length) return;
				let w = s[0], F, L;
				if ("borderBoxSize" in w) {
					let s = w.borderBoxSize, d = Array.isArray(s) ? s[0] : s;
					F = d.inlineSize, L = d.blockSize;
				} else F = d.offsetWidth, L = d.offsetHeight;
				k({
					width: F,
					height: L
				});
			});
			return s.observe(d, { box: "border-box" }), () => s.unobserve(d);
		} else k(void 0);
	}, [d]), w;
}
var sides = [
	"top",
	"right",
	"bottom",
	"left"
], min = Math.min, max = Math.max, round = Math.round, floor = Math.floor, createCoords = (s) => ({
	x: s,
	y: s
}), oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
}, oppositeAlignmentMap = {
	start: "end",
	end: "start"
};
function clamp$3(s, d, w) {
	return max(s, min(d, w));
}
function evaluate(s, d) {
	return typeof s == "function" ? s(d) : s;
}
function getSide(s) {
	return s.split("-")[0];
}
function getAlignment(s) {
	return s.split("-")[1];
}
function getOppositeAxis(s) {
	return s === "x" ? "y" : "x";
}
function getAxisLength(s) {
	return s === "y" ? "height" : "width";
}
var yAxisSides = /* @__PURE__ */ new Set(["top", "bottom"]);
function getSideAxis(s) {
	return yAxisSides.has(getSide(s)) ? "y" : "x";
}
function getAlignmentAxis(s) {
	return getOppositeAxis(getSideAxis(s));
}
function getAlignmentSides(s, d, w) {
	w === void 0 && (w = !1);
	let k = getAlignment(s), F = getAlignmentAxis(s), L = getAxisLength(F), V = F === "x" ? k === (w ? "end" : "start") ? "right" : "left" : k === "start" ? "bottom" : "top";
	return d.reference[L] > d.floating[L] && (V = getOppositePlacement(V)), [V, getOppositePlacement(V)];
}
function getExpandedPlacements(s) {
	let d = getOppositePlacement(s);
	return [
		getOppositeAlignmentPlacement(s),
		d,
		getOppositeAlignmentPlacement(d)
	];
}
function getOppositeAlignmentPlacement(s) {
	return s.replace(/start|end/g, (s) => oppositeAlignmentMap[s]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(s, d, w) {
	switch (s) {
		case "top":
		case "bottom": return w ? d ? rlPlacement : lrPlacement : d ? lrPlacement : rlPlacement;
		case "left":
		case "right": return d ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(s, d, w, k) {
	let F = getAlignment(s), L = getSideList(getSide(s), w === "start", k);
	return F && (L = L.map((s) => s + "-" + F), d && (L = L.concat(L.map(getOppositeAlignmentPlacement)))), L;
}
function getOppositePlacement(s) {
	return s.replace(/left|right|bottom|top/g, (s) => oppositeSideMap[s]);
}
function expandPaddingObject(s) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...s
	};
}
function getPaddingObject(s) {
	return typeof s == "number" ? {
		top: s,
		right: s,
		bottom: s,
		left: s
	} : expandPaddingObject(s);
}
function rectToClientRect(s) {
	let { x: d, y: w, width: k, height: F } = s;
	return {
		width: k,
		height: F,
		top: w,
		left: d,
		right: d + k,
		bottom: w + F,
		x: d,
		y: w
	};
}
function computeCoordsFromPlacement(s, d, w) {
	let { reference: k, floating: F } = s, L = getSideAxis(d), V = getAlignmentAxis(d), U = getAxisLength(V), K = getSide(d), q = L === "y", J = k.x + k.width / 2 - F.width / 2, X = k.y + k.height / 2 - F.height / 2, $ = k[U] / 2 - F[U] / 2, pA;
	switch (K) {
		case "top":
			pA = {
				x: J,
				y: k.y - F.height
			};
			break;
		case "bottom":
			pA = {
				x: J,
				y: k.y + k.height
			};
			break;
		case "right":
			pA = {
				x: k.x + k.width,
				y: X
			};
			break;
		case "left":
			pA = {
				x: k.x - F.width,
				y: X
			};
			break;
		default: pA = {
			x: k.x,
			y: k.y
		};
	}
	switch (getAlignment(d)) {
		case "start":
			pA[V] -= $ * (w && q ? -1 : 1);
			break;
		case "end":
			pA[V] += $ * (w && q ? -1 : 1);
			break;
	}
	return pA;
}
var computePosition$1 = async (s, d, w) => {
	let { placement: k = "bottom", strategy: F = "absolute", middleware: L = [], platform: V } = w, U = L.filter(Boolean), K = await (V.isRTL == null ? void 0 : V.isRTL(d)), q = await V.getElementRects({
		reference: s,
		floating: d,
		strategy: F
	}), { x: J, y: X } = computeCoordsFromPlacement(q, k, K), $ = k, pA = {}, mA = 0;
	for (let w = 0; w < U.length; w++) {
		let { name: L, fn: hA } = U[w], { x: gA, y: _A, data: vA, reset: yA } = await hA({
			x: J,
			y: X,
			initialPlacement: k,
			placement: $,
			strategy: F,
			middlewareData: pA,
			rects: q,
			platform: V,
			elements: {
				reference: s,
				floating: d
			}
		});
		J = gA ?? J, X = _A ?? X, pA = {
			...pA,
			[L]: {
				...pA[L],
				...vA
			}
		}, yA && mA <= 50 && (mA++, typeof yA == "object" && (yA.placement && ($ = yA.placement), yA.rects && (q = yA.rects === !0 ? await V.getElementRects({
			reference: s,
			floating: d,
			strategy: F
		}) : yA.rects), {x: J, y: X} = computeCoordsFromPlacement(q, $, K)), w = -1);
	}
	return {
		x: J,
		y: X,
		placement: $,
		strategy: F,
		middlewareData: pA
	};
};
async function detectOverflow$1(s, d) {
	d === void 0 && (d = {});
	let { x: w, y: k, platform: F, rects: L, elements: V, strategy: U } = s, { boundary: K = "clippingAncestors", rootBoundary: q = "viewport", elementContext: J = "floating", altBoundary: X = !1, padding: $ = 0 } = evaluate(d, s), pA = getPaddingObject($), mA = V[X ? J === "floating" ? "reference" : "floating" : J], hA = rectToClientRect(await F.getClippingRect({
		element: await (F.isElement == null ? void 0 : F.isElement(mA)) ?? !0 ? mA : mA.contextElement || await (F.getDocumentElement == null ? void 0 : F.getDocumentElement(V.floating)),
		boundary: K,
		rootBoundary: q,
		strategy: U
	})), gA = J === "floating" ? {
		x: w,
		y: k,
		width: L.floating.width,
		height: L.floating.height
	} : L.reference, _A = await (F.getOffsetParent == null ? void 0 : F.getOffsetParent(V.floating)), vA = await (F.isElement == null ? void 0 : F.isElement(_A)) && await (F.getScale == null ? void 0 : F.getScale(_A)) || {
		x: 1,
		y: 1
	}, yA = rectToClientRect(F.convertOffsetParentRelativeRectToViewportRelativeRect ? await F.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: V,
		rect: gA,
		offsetParent: _A,
		strategy: U
	}) : gA);
	return {
		top: (hA.top - yA.top + pA.top) / vA.y,
		bottom: (yA.bottom - hA.bottom + pA.bottom) / vA.y,
		left: (hA.left - yA.left + pA.left) / vA.x,
		right: (yA.right - hA.right + pA.right) / vA.x
	};
}
var arrow$2 = (s) => ({
	name: "arrow",
	options: s,
	async fn(d) {
		let { x: w, y: k, placement: F, rects: L, platform: V, elements: U, middlewareData: K } = d, { element: q, padding: J = 0 } = evaluate(s, d) || {};
		if (q == null) return {};
		let X = getPaddingObject(J), $ = {
			x: w,
			y: k
		}, pA = getAlignmentAxis(F), mA = getAxisLength(pA), hA = await V.getDimensions(q), gA = pA === "y", _A = gA ? "top" : "left", vA = gA ? "bottom" : "right", yA = gA ? "clientHeight" : "clientWidth", bA = L.reference[mA] + L.reference[pA] - $[pA] - L.floating[mA], xA = $[pA] - L.reference[pA], SA = await (V.getOffsetParent == null ? void 0 : V.getOffsetParent(q)), CA = SA ? SA[yA] : 0;
		(!CA || !await (V.isElement == null ? void 0 : V.isElement(SA))) && (CA = U.floating[yA] || L.floating[mA]);
		let wA = bA / 2 - xA / 2, TA = CA / 2 - hA[mA] / 2 - 1, EA = min(X[_A], TA), DA = min(X[vA], TA), OA = EA, kA = CA - hA[mA] - DA, AA = CA / 2 - hA[mA] / 2 + wA, jA = clamp$3(OA, AA, kA), MA = !K.arrow && getAlignment(F) != null && AA !== jA && L.reference[mA] / 2 - (AA < OA ? EA : DA) - hA[mA] / 2 < 0, NA = MA ? AA < OA ? AA - OA : AA - kA : 0;
		return {
			[pA]: $[pA] + NA,
			data: {
				[pA]: jA,
				centerOffset: AA - jA - NA,
				...MA && { alignmentOffset: NA }
			},
			reset: MA
		};
	}
}), flip$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "flip",
		options: s,
		async fn(d) {
			var w;
			let { placement: k, middlewareData: F, rects: L, initialPlacement: V, platform: U, elements: K } = d, { mainAxis: q = !0, crossAxis: J = !0, fallbackPlacements: X, fallbackStrategy: $ = "bestFit", fallbackAxisSideDirection: pA = "none", flipAlignment: mA = !0, ...hA } = evaluate(s, d);
			if ((w = F.arrow) != null && w.alignmentOffset) return {};
			let gA = getSide(k), _A = getSideAxis(V), vA = getSide(V) === V, yA = await (U.isRTL == null ? void 0 : U.isRTL(K.floating)), bA = X || (vA || !mA ? [getOppositePlacement(V)] : getExpandedPlacements(V)), xA = pA !== "none";
			!X && xA && bA.push(...getOppositeAxisPlacements(V, mA, pA, yA));
			let SA = [V, ...bA], CA = await detectOverflow$1(d, hA), wA = [], TA = F.flip?.overflows || [];
			if (q && wA.push(CA[gA]), J) {
				let s = getAlignmentSides(k, L, yA);
				wA.push(CA[s[0]], CA[s[1]]);
			}
			if (TA = [...TA, {
				placement: k,
				overflows: wA
			}], !wA.every((s) => s <= 0)) {
				let s = (F.flip?.index || 0) + 1, d = SA[s];
				if (d && (!(J === "alignment" && _A !== getSideAxis(d)) || TA.every((s) => getSideAxis(s.placement) === _A ? s.overflows[0] > 0 : !0))) return {
					data: {
						index: s,
						overflows: TA
					},
					reset: { placement: d }
				};
				let w = TA.filter((s) => s.overflows[0] <= 0).sort((s, d) => s.overflows[1] - d.overflows[1])[0]?.placement;
				if (!w) switch ($) {
					case "bestFit": {
						let s = TA.filter((s) => {
							if (xA) {
								let d = getSideAxis(s.placement);
								return d === _A || d === "y";
							}
							return !0;
						}).map((s) => [s.placement, s.overflows.filter((s) => s > 0).reduce((s, d) => s + d, 0)]).sort((s, d) => s[1] - d[1])[0]?.[0];
						s && (w = s);
						break;
					}
					case "initialPlacement":
						w = V;
						break;
				}
				if (k !== w) return { reset: { placement: w } };
			}
			return {};
		}
	};
};
function getSideOffsets(s, d) {
	return {
		top: s.top - d.height,
		right: s.right - d.width,
		bottom: s.bottom - d.height,
		left: s.left - d.width
	};
}
function isAnySideFullyClipped(s) {
	return sides.some((d) => s[d] >= 0);
}
var hide$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "hide",
		options: s,
		async fn(d) {
			let { rects: w } = d, { strategy: k = "referenceHidden", ...F } = evaluate(s, d);
			switch (k) {
				case "referenceHidden": {
					let s = getSideOffsets(await detectOverflow$1(d, {
						...F,
						elementContext: "reference"
					}), w.reference);
					return { data: {
						referenceHiddenOffsets: s,
						referenceHidden: isAnySideFullyClipped(s)
					} };
				}
				case "escaped": {
					let s = getSideOffsets(await detectOverflow$1(d, {
						...F,
						altBoundary: !0
					}), w.floating);
					return { data: {
						escapedOffsets: s,
						escaped: isAnySideFullyClipped(s)
					} };
				}
				default: return {};
			}
		}
	};
}, originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(s, d) {
	let { placement: w, platform: k, elements: F } = s, L = await (k.isRTL == null ? void 0 : k.isRTL(F.floating)), V = getSide(w), U = getAlignment(w), K = getSideAxis(w) === "y", q = originSides.has(V) ? -1 : 1, J = L && K ? -1 : 1, X = evaluate(d, s), { mainAxis: $, crossAxis: pA, alignmentAxis: mA } = typeof X == "number" ? {
		mainAxis: X,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: X.mainAxis || 0,
		crossAxis: X.crossAxis || 0,
		alignmentAxis: X.alignmentAxis
	};
	return U && typeof mA == "number" && (pA = U === "end" ? mA * -1 : mA), K ? {
		x: pA * J,
		y: $ * q
	} : {
		x: $ * q,
		y: pA * J
	};
}
var offset$2 = function(s) {
	return s === void 0 && (s = 0), {
		name: "offset",
		options: s,
		async fn(d) {
			var w;
			let { x: k, y: F, placement: L, middlewareData: V } = d, U = await convertValueToCoords(d, s);
			return L === V.offset?.placement && (w = V.arrow) != null && w.alignmentOffset ? {} : {
				x: k + U.x,
				y: F + U.y,
				data: {
					...U,
					placement: L
				}
			};
		}
	};
}, shift$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "shift",
		options: s,
		async fn(d) {
			let { x: w, y: k, placement: F } = d, { mainAxis: L = !0, crossAxis: V = !1, limiter: U = { fn: (s) => {
				let { x: d, y: w } = s;
				return {
					x: d,
					y: w
				};
			} }, ...K } = evaluate(s, d), q = {
				x: w,
				y: k
			}, J = await detectOverflow$1(d, K), X = getSideAxis(getSide(F)), $ = getOppositeAxis(X), pA = q[$], mA = q[X];
			if (L) {
				let s = $ === "y" ? "top" : "left", d = $ === "y" ? "bottom" : "right", w = pA + J[s], k = pA - J[d];
				pA = clamp$3(w, pA, k);
			}
			if (V) {
				let s = X === "y" ? "top" : "left", d = X === "y" ? "bottom" : "right", w = mA + J[s], k = mA - J[d];
				mA = clamp$3(w, mA, k);
			}
			let hA = U.fn({
				...d,
				[$]: pA,
				[X]: mA
			});
			return {
				...hA,
				data: {
					x: hA.x - w,
					y: hA.y - k,
					enabled: {
						[$]: L,
						[X]: V
					}
				}
			};
		}
	};
}, limitShift$2 = function(s) {
	return s === void 0 && (s = {}), {
		options: s,
		fn(d) {
			let { x: w, y: k, placement: F, rects: L, middlewareData: V } = d, { offset: U = 0, mainAxis: K = !0, crossAxis: q = !0 } = evaluate(s, d), J = {
				x: w,
				y: k
			}, X = getSideAxis(F), $ = getOppositeAxis(X), pA = J[$], mA = J[X], hA = evaluate(U, d), gA = typeof hA == "number" ? {
				mainAxis: hA,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...hA
			};
			if (K) {
				let s = $ === "y" ? "height" : "width", d = L.reference[$] - L.floating[s] + gA.mainAxis, w = L.reference[$] + L.reference[s] - gA.mainAxis;
				pA < d ? pA = d : pA > w && (pA = w);
			}
			if (q) {
				let s = $ === "y" ? "width" : "height", d = originSides.has(getSide(F)), w = L.reference[X] - L.floating[s] + (d && V.offset?.[X] || 0) + (d ? 0 : gA.crossAxis), k = L.reference[X] + L.reference[s] + (d ? 0 : V.offset?.[X] || 0) - (d ? gA.crossAxis : 0);
				mA < w ? mA = w : mA > k && (mA = k);
			}
			return {
				[$]: pA,
				[X]: mA
			};
		}
	};
}, size$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "size",
		options: s,
		async fn(d) {
			var w, k;
			let { placement: F, rects: L, platform: V, elements: U } = d, { apply: K = () => {}, ...q } = evaluate(s, d), J = await detectOverflow$1(d, q), X = getSide(F), $ = getAlignment(F), pA = getSideAxis(F) === "y", { width: mA, height: hA } = L.floating, gA, _A;
			X === "top" || X === "bottom" ? (gA = X, _A = $ === (await (V.isRTL == null ? void 0 : V.isRTL(U.floating)) ? "start" : "end") ? "left" : "right") : (_A = X, gA = $ === "end" ? "top" : "bottom");
			let vA = hA - J.top - J.bottom, yA = mA - J.left - J.right, bA = min(hA - J[gA], vA), xA = min(mA - J[_A], yA), SA = !d.middlewareData.shift, CA = bA, wA = xA;
			if ((w = d.middlewareData.shift) != null && w.enabled.x && (wA = yA), (k = d.middlewareData.shift) != null && k.enabled.y && (CA = vA), SA && !$) {
				let s = max(J.left, 0), d = max(J.right, 0), w = max(J.top, 0), k = max(J.bottom, 0);
				pA ? wA = mA - 2 * (s !== 0 || d !== 0 ? s + d : max(J.left, J.right)) : CA = hA - 2 * (w !== 0 || k !== 0 ? w + k : max(J.top, J.bottom));
			}
			await K({
				...d,
				availableWidth: wA,
				availableHeight: CA
			});
			let TA = await V.getDimensions(U.floating);
			return mA !== TA.width || hA !== TA.height ? { reset: { rects: !0 } } : {};
		}
	};
};
function hasWindow() {
	return typeof window < "u";
}
function getNodeName(s) {
	return isNode(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function getWindow(s) {
	var d;
	return (s == null || (d = s.ownerDocument) == null ? void 0 : d.defaultView) || window;
}
function getDocumentElement(s) {
	return ((isNode(s) ? s.ownerDocument : s.document) || window.document)?.documentElement;
}
function isNode(s) {
	return hasWindow() ? s instanceof Node || s instanceof getWindow(s).Node : !1;
}
function isElement(s) {
	return hasWindow() ? s instanceof Element || s instanceof getWindow(s).Element : !1;
}
function isHTMLElement$1(s) {
	return hasWindow() ? s instanceof HTMLElement || s instanceof getWindow(s).HTMLElement : !1;
}
function isShadowRoot(s) {
	return !hasWindow() || typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof getWindow(s).ShadowRoot;
}
var invalidOverflowDisplayValues = /* @__PURE__ */ new Set(["inline", "contents"]);
function isOverflowElement(s) {
	let { overflow: d, overflowX: w, overflowY: k, display: F } = getComputedStyle$2(s);
	return /auto|scroll|overlay|hidden|clip/.test(d + k + w) && !invalidOverflowDisplayValues.has(F);
}
var tableElements = /* @__PURE__ */ new Set([
	"table",
	"td",
	"th"
]);
function isTableElement(s) {
	return tableElements.has(getNodeName(s));
}
var topLayerSelectors = [":popover-open", ":modal"];
function isTopLayer(s) {
	return topLayerSelectors.some((d) => {
		try {
			return s.matches(d);
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
function isContainingBlock(s) {
	let d = isWebKit(), w = isElement(s) ? getComputedStyle$2(s) : s;
	return transformProperties.some((s) => w[s] ? w[s] !== "none" : !1) || (w.containerType ? w.containerType !== "normal" : !1) || !d && (w.backdropFilter ? w.backdropFilter !== "none" : !1) || !d && (w.filter ? w.filter !== "none" : !1) || willChangeValues.some((s) => (w.willChange || "").includes(s)) || containValues.some((s) => (w.contain || "").includes(s));
}
function getContainingBlock(s) {
	let d = getParentNode(s);
	for (; isHTMLElement$1(d) && !isLastTraversableNode(d);) {
		if (isContainingBlock(d)) return d;
		if (isTopLayer(d)) return null;
		d = getParentNode(d);
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
function isLastTraversableNode(s) {
	return lastTraversableNodeNames.has(getNodeName(s));
}
function getComputedStyle$2(s) {
	return getWindow(s).getComputedStyle(s);
}
function getNodeScroll(s) {
	return isElement(s) ? {
		scrollLeft: s.scrollLeft,
		scrollTop: s.scrollTop
	} : {
		scrollLeft: s.scrollX,
		scrollTop: s.scrollY
	};
}
function getParentNode(s) {
	if (getNodeName(s) === "html") return s;
	let d = s.assignedSlot || s.parentNode || isShadowRoot(s) && s.host || getDocumentElement(s);
	return isShadowRoot(d) ? d.host : d;
}
function getNearestOverflowAncestor(s) {
	let d = getParentNode(s);
	return isLastTraversableNode(d) ? s.ownerDocument ? s.ownerDocument.body : s.body : isHTMLElement$1(d) && isOverflowElement(d) ? d : getNearestOverflowAncestor(d);
}
function getOverflowAncestors(s, d, w) {
	d === void 0 && (d = []), w === void 0 && (w = !0);
	let k = getNearestOverflowAncestor(s), F = k === s.ownerDocument?.body, L = getWindow(k);
	if (F) {
		let s = getFrameElement(L);
		return d.concat(L, L.visualViewport || [], isOverflowElement(k) ? k : [], s && w ? getOverflowAncestors(s) : []);
	}
	return d.concat(k, getOverflowAncestors(k, [], w));
}
function getFrameElement(s) {
	return s.parent && Object.getPrototypeOf(s.parent) ? s.frameElement : null;
}
function getCssDimensions(s) {
	let d = getComputedStyle$2(s), w = parseFloat(d.width) || 0, k = parseFloat(d.height) || 0, F = isHTMLElement$1(s), L = F ? s.offsetWidth : w, V = F ? s.offsetHeight : k, U = round(w) !== L || round(k) !== V;
	return U && (w = L, k = V), {
		width: w,
		height: k,
		$: U
	};
}
function unwrapElement(s) {
	return isElement(s) ? s : s.contextElement;
}
function getScale(s) {
	let d = unwrapElement(s);
	if (!isHTMLElement$1(d)) return createCoords(1);
	let w = d.getBoundingClientRect(), { width: k, height: F, $: L } = getCssDimensions(d), V = (L ? round(w.width) : w.width) / k, U = (L ? round(w.height) : w.height) / F;
	return (!V || !Number.isFinite(V)) && (V = 1), (!U || !Number.isFinite(U)) && (U = 1), {
		x: V,
		y: U
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(s) {
	let d = getWindow(s);
	return !isWebKit() || !d.visualViewport ? noOffsets : {
		x: d.visualViewport.offsetLeft,
		y: d.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(s, d, w) {
	return d === void 0 && (d = !1), !w || d && w !== getWindow(s) ? !1 : d;
}
function getBoundingClientRect(s, d, w, k) {
	d === void 0 && (d = !1), w === void 0 && (w = !1);
	let F = s.getBoundingClientRect(), L = unwrapElement(s), V = createCoords(1);
	d && (k ? isElement(k) && (V = getScale(k)) : V = getScale(s));
	let U = shouldAddVisualOffsets(L, w, k) ? getVisualOffsets(L) : createCoords(0), K = (F.left + U.x) / V.x, q = (F.top + U.y) / V.y, J = F.width / V.x, X = F.height / V.y;
	if (L) {
		let s = getWindow(L), d = k && isElement(k) ? getWindow(k) : k, w = s, F = getFrameElement(w);
		for (; F && k && d !== w;) {
			let s = getScale(F), d = F.getBoundingClientRect(), k = getComputedStyle$2(F), L = d.left + (F.clientLeft + parseFloat(k.paddingLeft)) * s.x, V = d.top + (F.clientTop + parseFloat(k.paddingTop)) * s.y;
			K *= s.x, q *= s.y, J *= s.x, X *= s.y, K += L, q += V, w = getWindow(F), F = getFrameElement(w);
		}
	}
	return rectToClientRect({
		width: J,
		height: X,
		x: K,
		y: q
	});
}
function getWindowScrollBarX(s, d) {
	let w = getNodeScroll(s).scrollLeft;
	return d ? d.left + w : getBoundingClientRect(getDocumentElement(s)).left + w;
}
function getHTMLOffset(s, d) {
	let w = s.getBoundingClientRect();
	return {
		x: w.left + d.scrollLeft - getWindowScrollBarX(s, w),
		y: w.top + d.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(s) {
	let { elements: d, rect: w, offsetParent: k, strategy: F } = s, L = F === "fixed", V = getDocumentElement(k), U = d ? isTopLayer(d.floating) : !1;
	if (k === V || U && L) return w;
	let K = {
		scrollLeft: 0,
		scrollTop: 0
	}, q = createCoords(1), J = createCoords(0), X = isHTMLElement$1(k);
	if ((X || !X && !L) && ((getNodeName(k) !== "body" || isOverflowElement(V)) && (K = getNodeScroll(k)), isHTMLElement$1(k))) {
		let s = getBoundingClientRect(k);
		q = getScale(k), J.x = s.x + k.clientLeft, J.y = s.y + k.clientTop;
	}
	let $ = V && !X && !L ? getHTMLOffset(V, K) : createCoords(0);
	return {
		width: w.width * q.x,
		height: w.height * q.y,
		x: w.x * q.x - K.scrollLeft * q.x + J.x + $.x,
		y: w.y * q.y - K.scrollTop * q.y + J.y + $.y
	};
}
function getClientRects(s) {
	return Array.from(s.getClientRects());
}
function getDocumentRect(s) {
	let d = getDocumentElement(s), w = getNodeScroll(s), k = s.ownerDocument.body, F = max(d.scrollWidth, d.clientWidth, k.scrollWidth, k.clientWidth), L = max(d.scrollHeight, d.clientHeight, k.scrollHeight, k.clientHeight), V = -w.scrollLeft + getWindowScrollBarX(s), U = -w.scrollTop;
	return getComputedStyle$2(k).direction === "rtl" && (V += max(d.clientWidth, k.clientWidth) - F), {
		width: F,
		height: L,
		x: V,
		y: U
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(s, d) {
	let w = getWindow(s), k = getDocumentElement(s), F = w.visualViewport, L = k.clientWidth, V = k.clientHeight, U = 0, K = 0;
	if (F) {
		L = F.width, V = F.height;
		let s = isWebKit();
		(!s || s && d === "fixed") && (U = F.offsetLeft, K = F.offsetTop);
	}
	let q = getWindowScrollBarX(k);
	if (q <= 0) {
		let s = k.ownerDocument, d = s.body, w = getComputedStyle(d), F = s.compatMode === "CSS1Compat" && parseFloat(w.marginLeft) + parseFloat(w.marginRight) || 0, V = Math.abs(k.clientWidth - d.clientWidth - F);
		V <= SCROLLBAR_MAX && (L -= V);
	} else q <= SCROLLBAR_MAX && (L += q);
	return {
		width: L,
		height: V,
		x: U,
		y: K
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(s, d) {
	let w = getBoundingClientRect(s, !0, d === "fixed"), k = w.top + s.clientTop, F = w.left + s.clientLeft, L = isHTMLElement$1(s) ? getScale(s) : createCoords(1);
	return {
		width: s.clientWidth * L.x,
		height: s.clientHeight * L.y,
		x: F * L.x,
		y: k * L.y
	};
}
function getClientRectFromClippingAncestor(s, d, w) {
	let k;
	if (d === "viewport") k = getViewportRect(s, w);
	else if (d === "document") k = getDocumentRect(getDocumentElement(s));
	else if (isElement(d)) k = getInnerBoundingClientRect(d, w);
	else {
		let w = getVisualOffsets(s);
		k = {
			x: d.x - w.x,
			y: d.y - w.y,
			width: d.width,
			height: d.height
		};
	}
	return rectToClientRect(k);
}
function hasFixedPositionAncestor(s, d) {
	let w = getParentNode(s);
	return w === d || !isElement(w) || isLastTraversableNode(w) ? !1 : getComputedStyle$2(w).position === "fixed" || hasFixedPositionAncestor(w, d);
}
function getClippingElementAncestors(s, d) {
	let w = d.get(s);
	if (w) return w;
	let k = getOverflowAncestors(s, [], !1).filter((s) => isElement(s) && getNodeName(s) !== "body"), F = null, L = getComputedStyle$2(s).position === "fixed", V = L ? getParentNode(s) : s;
	for (; isElement(V) && !isLastTraversableNode(V);) {
		let d = getComputedStyle$2(V), w = isContainingBlock(V);
		!w && d.position === "fixed" && (F = null), (L ? !w && !F : !w && d.position === "static" && F && absoluteOrFixed.has(F.position) || isOverflowElement(V) && !w && hasFixedPositionAncestor(s, V)) ? k = k.filter((s) => s !== V) : F = d, V = getParentNode(V);
	}
	return d.set(s, k), k;
}
function getClippingRect(s) {
	let { element: d, boundary: w, rootBoundary: k, strategy: F } = s, L = [...w === "clippingAncestors" ? isTopLayer(d) ? [] : getClippingElementAncestors(d, this._c) : [].concat(w), k], V = L[0], U = L.reduce((s, w) => {
		let k = getClientRectFromClippingAncestor(d, w, F);
		return s.top = max(k.top, s.top), s.right = min(k.right, s.right), s.bottom = min(k.bottom, s.bottom), s.left = max(k.left, s.left), s;
	}, getClientRectFromClippingAncestor(d, V, F));
	return {
		width: U.right - U.left,
		height: U.bottom - U.top,
		x: U.left,
		y: U.top
	};
}
function getDimensions(s) {
	let { width: d, height: w } = getCssDimensions(s);
	return {
		width: d,
		height: w
	};
}
function getRectRelativeToOffsetParent(s, d, w) {
	let k = isHTMLElement$1(d), F = getDocumentElement(d), L = w === "fixed", V = getBoundingClientRect(s, !0, L, d), U = {
		scrollLeft: 0,
		scrollTop: 0
	}, K = createCoords(0);
	function q() {
		K.x = getWindowScrollBarX(F);
	}
	if (k || !k && !L) if ((getNodeName(d) !== "body" || isOverflowElement(F)) && (U = getNodeScroll(d)), k) {
		let s = getBoundingClientRect(d, !0, L, d);
		K.x = s.x + d.clientLeft, K.y = s.y + d.clientTop;
	} else F && q();
	L && !k && F && q();
	let J = F && !k && !L ? getHTMLOffset(F, U) : createCoords(0);
	return {
		x: V.left + U.scrollLeft - K.x - J.x,
		y: V.top + U.scrollTop - K.y - J.y,
		width: V.width,
		height: V.height
	};
}
function isStaticPositioned(s) {
	return getComputedStyle$2(s).position === "static";
}
function getTrueOffsetParent(s, d) {
	if (!isHTMLElement$1(s) || getComputedStyle$2(s).position === "fixed") return null;
	if (d) return d(s);
	let w = s.offsetParent;
	return getDocumentElement(s) === w && (w = w.ownerDocument.body), w;
}
function getOffsetParent(s, d) {
	let w = getWindow(s);
	if (isTopLayer(s)) return w;
	if (!isHTMLElement$1(s)) {
		let d = getParentNode(s);
		for (; d && !isLastTraversableNode(d);) {
			if (isElement(d) && !isStaticPositioned(d)) return d;
			d = getParentNode(d);
		}
		return w;
	}
	let k = getTrueOffsetParent(s, d);
	for (; k && isTableElement(k) && isStaticPositioned(k);) k = getTrueOffsetParent(k, d);
	return k && isLastTraversableNode(k) && isStaticPositioned(k) && !isContainingBlock(k) ? w : k || getContainingBlock(s) || w;
}
var getElementRects = async function(s) {
	let d = this.getOffsetParent || getOffsetParent, w = this.getDimensions, k = await w(s.floating);
	return {
		reference: getRectRelativeToOffsetParent(s.reference, await d(s.floating), s.strategy),
		floating: {
			x: 0,
			y: 0,
			width: k.width,
			height: k.height
		}
	};
};
function isRTL(s) {
	return getComputedStyle$2(s).direction === "rtl";
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
function rectsAreEqual(s, d) {
	return s.x === d.x && s.y === d.y && s.width === d.width && s.height === d.height;
}
function observeMove(s, d) {
	let w = null, k, F = getDocumentElement(s);
	function L() {
		var s;
		clearTimeout(k), (s = w) == null || s.disconnect(), w = null;
	}
	function V(U, K) {
		U === void 0 && (U = !1), K === void 0 && (K = 1), L();
		let q = s.getBoundingClientRect(), { left: J, top: X, width: $, height: pA } = q;
		if (U || d(), !$ || !pA) return;
		let mA = floor(X), hA = floor(F.clientWidth - (J + $)), gA = floor(F.clientHeight - (X + pA)), _A = floor(J), vA = {
			rootMargin: -mA + "px " + -hA + "px " + -gA + "px " + -_A + "px",
			threshold: max(0, min(1, K)) || 1
		}, yA = !0;
		function bA(d) {
			let w = d[0].intersectionRatio;
			if (w !== K) {
				if (!yA) return V();
				w ? V(!1, w) : k = setTimeout(() => {
					V(!1, 1e-7);
				}, 1e3);
			}
			w === 1 && !rectsAreEqual(q, s.getBoundingClientRect()) && V(), yA = !1;
		}
		try {
			w = new IntersectionObserver(bA, {
				...vA,
				root: F.ownerDocument
			});
		} catch {
			w = new IntersectionObserver(bA, vA);
		}
		w.observe(s);
	}
	return V(!0), L;
}
function autoUpdate(s, d, w, k) {
	k === void 0 && (k = {});
	let { ancestorScroll: F = !0, ancestorResize: L = !0, elementResize: V = typeof ResizeObserver == "function", layoutShift: U = typeof IntersectionObserver == "function", animationFrame: K = !1 } = k, q = unwrapElement(s), J = F || L ? [...q ? getOverflowAncestors(q) : [], ...getOverflowAncestors(d)] : [];
	J.forEach((s) => {
		F && s.addEventListener("scroll", w, { passive: !0 }), L && s.addEventListener("resize", w);
	});
	let X = q && U ? observeMove(q, w) : null, $ = -1, pA = null;
	V && (pA = new ResizeObserver((s) => {
		let [k] = s;
		k && k.target === q && pA && (pA.unobserve(d), cancelAnimationFrame($), $ = requestAnimationFrame(() => {
			var s;
			(s = pA) == null || s.observe(d);
		})), w();
	}), q && !K && pA.observe(q), pA.observe(d));
	let mA, hA = K ? getBoundingClientRect(s) : null;
	K && gA();
	function gA() {
		let d = getBoundingClientRect(s);
		hA && !rectsAreEqual(hA, d) && w(), hA = d, mA = requestAnimationFrame(gA);
	}
	return w(), () => {
		var s;
		J.forEach((s) => {
			F && s.removeEventListener("scroll", w), L && s.removeEventListener("resize", w);
		}), X?.(), (s = pA) == null || s.disconnect(), pA = null, K && cancelAnimationFrame(mA);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (s, d, w) => {
	let k = /* @__PURE__ */ new Map(), F = {
		platform,
		...w
	}, L = {
		...F.platform,
		_c: k
	};
	return computePosition$1(s, d, {
		...F,
		platform: L
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(s, d) {
	if (s === d) return !0;
	if (typeof s != typeof d) return !1;
	if (typeof s == "function" && s.toString() === d.toString()) return !0;
	let w, k, F;
	if (s && d && typeof s == "object") {
		if (Array.isArray(s)) {
			if (w = s.length, w !== d.length) return !1;
			for (k = w; k-- !== 0;) if (!deepEqual(s[k], d[k])) return !1;
			return !0;
		}
		if (F = Object.keys(s), w = F.length, w !== Object.keys(d).length) return !1;
		for (k = w; k-- !== 0;) if (!{}.hasOwnProperty.call(d, F[k])) return !1;
		for (k = w; k-- !== 0;) {
			let w = F[k];
			if (!(w === "_owner" && s.$$typeof) && !deepEqual(s[w], d[w])) return !1;
		}
		return !0;
	}
	return s !== s && d !== d;
}
function getDPR(s) {
	return typeof window > "u" ? 1 : (s.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(s, d) {
	let w = getDPR(s);
	return Math.round(d * w) / w;
}
function useLatestRef(d) {
	let w = React$1.useRef(d);
	return index(() => {
		w.current = d;
	}), w;
}
function useFloating(d) {
	d === void 0 && (d = {});
	let { placement: w = "bottom", strategy: k = "absolute", middleware: F = [], platform: L, elements: { reference: V, floating: U } = {}, transform: K = !0, whileElementsMounted: q, open: J } = d, [X, $] = React$1.useState({
		x: 0,
		y: 0,
		strategy: k,
		placement: w,
		middlewareData: {},
		isPositioned: !1
	}), [pA, mA] = React$1.useState(F);
	deepEqual(pA, F) || mA(F);
	let [hA, gA] = React$1.useState(null), [_A, vA] = React$1.useState(null), bA = React$1.useCallback((s) => {
		s !== wA.current && (wA.current = s, gA(s));
	}, []), xA = React$1.useCallback((s) => {
		s !== TA.current && (TA.current = s, vA(s));
	}, []), SA = V || hA, CA = U || _A, wA = React$1.useRef(null), TA = React$1.useRef(null), EA = React$1.useRef(X), DA = q != null, OA = useLatestRef(q), kA = useLatestRef(L), AA = useLatestRef(J), jA = React$1.useCallback(() => {
		if (!wA.current || !TA.current) return;
		let s = {
			placement: w,
			strategy: k,
			middleware: pA
		};
		kA.current && (s.platform = kA.current), computePosition(wA.current, TA.current, s).then((s) => {
			let d = {
				...s,
				isPositioned: AA.current !== !1
			};
			MA.current && !deepEqual(EA.current, d) && (EA.current = d, ReactDOM$1.flushSync(() => {
				$(d);
			}));
		});
	}, [
		pA,
		w,
		k,
		kA,
		AA
	]);
	index(() => {
		J === !1 && EA.current.isPositioned && (EA.current.isPositioned = !1, $((s) => ({
			...s,
			isPositioned: !1
		})));
	}, [J]);
	let MA = React$1.useRef(!1);
	index(() => (MA.current = !0, () => {
		MA.current = !1;
	}), []), index(() => {
		if (SA && (wA.current = SA), CA && (TA.current = CA), SA && CA) {
			if (OA.current) return OA.current(SA, CA, jA);
			jA();
		}
	}, [
		SA,
		CA,
		jA,
		OA,
		DA
	]);
	let NA = React$1.useMemo(() => ({
		reference: wA,
		floating: TA,
		setReference: bA,
		setFloating: xA
	}), [bA, xA]), PA = React$1.useMemo(() => ({
		reference: SA,
		floating: CA
	}), [SA, CA]), FA = React$1.useMemo(() => {
		let s = {
			position: k,
			left: 0,
			top: 0
		};
		if (!PA.floating) return s;
		let d = roundByDPR(PA.floating, X.x), w = roundByDPR(PA.floating, X.y);
		return K ? {
			...s,
			transform: "translate(" + d + "px, " + w + "px)",
			...getDPR(PA.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: k,
			left: d,
			top: w
		};
	}, [
		k,
		K,
		PA.floating,
		X.x,
		X.y
	]);
	return React$1.useMemo(() => ({
		...X,
		update: jA,
		refs: NA,
		elements: PA,
		floatingStyles: FA
	}), [
		X,
		jA,
		NA,
		PA,
		FA
	]);
}
var arrow$1$1 = (s) => {
	function d(s) {
		return {}.hasOwnProperty.call(s, "current");
	}
	return {
		name: "arrow",
		options: s,
		fn(w) {
			let { element: k, padding: F } = typeof s == "function" ? s(w) : s;
			return k && d(k) ? k.current == null ? {} : arrow$1({
				element: k.current,
				padding: F
			}).fn(w) : k ? arrow$1({
				element: k,
				padding: F
			}).fn(w) : {};
		}
	};
}, offset = (s, d) => ({
	...offset$1(s),
	options: [s, d]
}), shift = (s, d) => ({
	...shift$1(s),
	options: [s, d]
}), limitShift = (s, d) => ({
	...limitShift$1(s),
	options: [s, d]
}), flip = (s, d) => ({
	...flip$1(s),
	options: [s, d]
}), size = (s, d) => ({
	...size$1(s),
	options: [s, d]
}), hide = (s, d) => ({
	...hide$1(s),
	options: [s, d]
}), arrow = (s, d) => ({
	...arrow$1$1(s),
	options: [s, d]
}), NAME = "Arrow", Arrow$1 = React$1.forwardRef((s, d) => {
	let { children: w, width: k = 10, height: F = 5, ...L } = s;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...L,
		ref: d,
		width: k,
		height: F,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: s.asChild ? w : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME;
var Root$2 = Arrow$1, POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (d) => {
	let { __scopePopper: w, children: k } = d, [F, L] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: w,
		anchor: F,
		onAnchorChange: L,
		children: k
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME$1 = "PopperAnchor", PopperAnchor = React$1.forwardRef((d, w) => {
	let { __scopePopper: k, virtualRef: F, ...L } = d, V = usePopperContext(ANCHOR_NAME$1, k), U = React$1.useRef(null), K = useComposedRefs(w, U), q = React$1.useRef(null);
	return React$1.useEffect(() => {
		let s = q.current;
		q.current = F?.current || U.current, s !== q.current && V.onAnchorChange(q.current);
	}), F ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...L,
		ref: K
	});
});
PopperAnchor.displayName = ANCHOR_NAME$1;
var CONTENT_NAME$5 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$5), PopperContent = React$1.forwardRef((d, w) => {
	let { __scopePopper: k, side: F = "bottom", sideOffset: L = 0, align: V = "center", alignOffset: U = 0, arrowPadding: K = 0, avoidCollisions: q = !0, collisionBoundary: J = [], collisionPadding: X = 0, sticky: $ = "partial", hideWhenDetached: pA = !1, updatePositionStrategy: mA = "optimized", onPlaced: hA, ...gA } = d, _A = usePopperContext(CONTENT_NAME$5, k), [vA, yA] = React$1.useState(null), bA = useComposedRefs(w, (s) => yA(s)), [xA, SA] = React$1.useState(null), wA = useSize(xA), TA = wA?.width ?? 0, EA = wA?.height ?? 0, DA = F + (V === "center" ? "" : "-" + V), OA = typeof X == "number" ? X : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...X
	}, kA = Array.isArray(J) ? J : [J], AA = kA.length > 0, jA = {
		padding: OA,
		boundary: kA.filter(isNotNull$2),
		altBoundary: AA
	}, { refs: MA, floatingStyles: NA, placement: PA, isPositioned: FA, middlewareData: IA } = useFloating({
		strategy: "fixed",
		placement: DA,
		whileElementsMounted: (...s) => autoUpdate(...s, { animationFrame: mA === "always" }),
		elements: { reference: _A.anchor },
		middleware: [
			offset({
				mainAxis: L + EA,
				alignmentAxis: U
			}),
			q && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: $ === "partial" ? limitShift() : void 0,
				...jA
			}),
			q && flip({ ...jA }),
			size({
				...jA,
				apply: ({ elements: s, rects: d, availableWidth: w, availableHeight: k }) => {
					let { width: F, height: L } = d.reference, V = s.floating.style;
					V.setProperty("--radix-popper-available-width", `${w}px`), V.setProperty("--radix-popper-available-height", `${k}px`), V.setProperty("--radix-popper-anchor-width", `${F}px`), V.setProperty("--radix-popper-anchor-height", `${L}px`);
				}
			}),
			xA && arrow({
				element: xA,
				padding: K
			}),
			transformOrigin({
				arrowWidth: TA,
				arrowHeight: EA
			}),
			pA && hide({
				strategy: "referenceHidden",
				...jA
			})
		]
	}), [LA, RA] = getSideAndAlignFromPlacement(PA), zA = useCallbackRef(hA);
	useLayoutEffect2(() => {
		FA && zA?.();
	}, [FA, zA]);
	let BA = IA.arrow?.x, VA = IA.arrow?.y, HA = IA.arrow?.centerOffset !== 0, [UA, WA] = React$1.useState();
	return useLayoutEffect2(() => {
		vA && WA(window.getComputedStyle(vA).zIndex);
	}, [vA]), /* @__PURE__ */ jsx("div", {
		ref: MA.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...NA,
			transform: FA ? NA.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: UA,
			"--radix-popper-transform-origin": [IA.transformOrigin?.x, IA.transformOrigin?.y].join(" "),
			...IA.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: d.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: k,
			placedSide: LA,
			onArrowChange: SA,
			arrowX: BA,
			arrowY: VA,
			shouldHideArrow: HA,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": LA,
				"data-align": RA,
				...gA,
				ref: bA,
				style: {
					...gA.style,
					animation: FA ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME$5;
var ARROW_NAME$5 = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = React$1.forwardRef(function(s, d) {
	let { __scopePopper: w, ...k } = s, F = useContentContext(ARROW_NAME$5, w), L = OPPOSITE_SIDE[F.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: F.onArrowChange,
		style: {
			position: "absolute",
			left: F.arrowX,
			top: F.arrowY,
			[L]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[F.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[F.placedSide],
			visibility: F.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root$2, {
			...k,
			ref: d,
			style: {
				...k.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$5;
function isNotNull$2(s) {
	return s !== null;
}
var transformOrigin = (s) => ({
	name: "transformOrigin",
	options: s,
	fn(d) {
		let { placement: w, rects: k, middlewareData: F } = d, L = F.arrow?.centerOffset !== 0, V = L ? 0 : s.arrowWidth, U = L ? 0 : s.arrowHeight, [K, q] = getSideAndAlignFromPlacement(w), J = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[q], X = (F.arrow?.x ?? 0) + V / 2, $ = (F.arrow?.y ?? 0) + U / 2, pA = "", mA = "";
		return K === "bottom" ? (pA = L ? J : `${X}px`, mA = `${-U}px`) : K === "top" ? (pA = L ? J : `${X}px`, mA = `${k.floating.height + U}px`) : K === "right" ? (pA = `${-U}px`, mA = L ? J : `${$}px`) : K === "left" && (pA = `${k.floating.width + U}px`, mA = L ? J : `${$}px`), { data: {
			x: pA,
			y: mA
		} };
	}
});
function getSideAndAlignFromPlacement(s) {
	let [d, w = "center"] = s.split("-");
	return [d, w];
}
var Root2$3 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow, ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$4 = "RovingFocusGroup", [Collection$2, useCollection$2, createCollectionScope$2] = createCollection(GROUP_NAME$4), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME$4, [createCollectionScope$2]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$4), RovingFocusGroup = React$1.forwardRef((s, d) => /* @__PURE__ */ jsx(Collection$2.Provider, {
	scope: s.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$2.Slot, {
		scope: s.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...s,
			ref: d
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$4;
var RovingFocusGroupImpl = React$1.forwardRef((d, w) => {
	let { __scopeRovingFocusGroup: k, orientation: F, loop: L = !1, dir: V, currentTabStopId: U, defaultCurrentTabStopId: K, onCurrentTabStopIdChange: q, onEntryFocus: J, preventScrollOnEntryFocus: X = !1, ...$ } = d, pA = React$1.useRef(null), mA = useComposedRefs(w, pA), hA = useDirection(V), [gA, _A] = useControllableState({
		prop: U,
		defaultProp: K ?? null,
		onChange: q,
		caller: GROUP_NAME$4
	}), [vA, yA] = React$1.useState(!1), bA = useCallbackRef(J), xA = useCollection$2(k), SA = React$1.useRef(!1), [wA, TA] = React$1.useState(0);
	return React$1.useEffect(() => {
		let s = pA.current;
		if (s) return s.addEventListener(ENTRY_FOCUS, bA), () => s.removeEventListener(ENTRY_FOCUS, bA);
	}, [bA]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: k,
		orientation: F,
		dir: hA,
		loop: L,
		currentTabStopId: gA,
		onItemFocus: React$1.useCallback((s) => _A(s), [_A]),
		onItemShiftTab: React$1.useCallback(() => yA(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => TA((s) => s + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => TA((s) => s - 1), []),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			tabIndex: vA || wA === 0 ? -1 : 0,
			"data-orientation": F,
			...$,
			ref: mA,
			style: {
				outline: "none",
				...d.style
			},
			onMouseDown: composeEventHandlers(d.onMouseDown, () => {
				SA.current = !0;
			}),
			onFocus: composeEventHandlers(d.onFocus, (s) => {
				let d = !SA.current;
				if (s.target === s.currentTarget && d && !vA) {
					let d = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (s.currentTarget.dispatchEvent(d), !d.defaultPrevented) {
						let s = xA().filter((s) => s.focusable);
						focusFirst$1([
							s.find((s) => s.active),
							s.find((s) => s.id === gA),
							...s
						].filter(Boolean).map((s) => s.ref.current), X);
					}
				}
				SA.current = !1;
			}),
			onBlur: composeEventHandlers(d.onBlur, () => yA(!1))
		})
	});
}), ITEM_NAME$4 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((d, w) => {
	let { __scopeRovingFocusGroup: k, focusable: F = !0, active: L = !1, tabStopId: V, children: U, ...K } = d, q = useId$1(), J = V || q, X = useRovingFocusContext(ITEM_NAME$4, k), $ = X.currentTabStopId === J, pA = useCollection$2(k), { onFocusableItemAdd: mA, onFocusableItemRemove: hA, currentTabStopId: gA } = X;
	return React$1.useEffect(() => {
		if (F) return mA(), () => hA();
	}, [
		F,
		mA,
		hA
	]), /* @__PURE__ */ jsx(Collection$2.ItemSlot, {
		scope: k,
		id: J,
		focusable: F,
		active: L,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			tabIndex: $ ? 0 : -1,
			"data-orientation": X.orientation,
			...K,
			ref: w,
			onMouseDown: composeEventHandlers(d.onMouseDown, (s) => {
				F ? X.onItemFocus(J) : s.preventDefault();
			}),
			onFocus: composeEventHandlers(d.onFocus, () => X.onItemFocus(J)),
			onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
				if (s.key === "Tab" && s.shiftKey) {
					X.onItemShiftTab();
					return;
				}
				if (s.target !== s.currentTarget) return;
				let d = getFocusIntent(s, X.orientation, X.dir);
				if (d !== void 0) {
					if (s.metaKey || s.ctrlKey || s.altKey || s.shiftKey) return;
					s.preventDefault();
					let w = pA().filter((s) => s.focusable).map((s) => s.ref.current);
					if (d === "last") w.reverse();
					else if (d === "prev" || d === "next") {
						d === "prev" && w.reverse();
						let k = w.indexOf(s.currentTarget);
						w = X.loop ? wrapArray$2(w, k + 1) : w.slice(k + 1);
					}
					setTimeout(() => focusFirst$1(w));
				}
			}),
			children: typeof U == "function" ? U({
				isCurrentTabStop: $,
				hasTabStop: gA != null
			}) : U
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME$4;
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
function getDirectionAwareKey(s, d) {
	return d === "rtl" ? s === "ArrowLeft" ? "ArrowRight" : s === "ArrowRight" ? "ArrowLeft" : s : s;
}
function getFocusIntent(s, d, w) {
	let k = getDirectionAwareKey(s.key, w);
	if (!(d === "vertical" && ["ArrowLeft", "ArrowRight"].includes(k)) && !(d === "horizontal" && ["ArrowUp", "ArrowDown"].includes(k))) return MAP_KEY_TO_FOCUS_INTENT[k];
}
function focusFirst$1(s, d = !1) {
	let w = document.activeElement;
	for (let k of s) if (k === w || (k.focus({ preventScroll: d }), document.activeElement !== w)) return;
}
function wrapArray$2(s, d) {
	return s.map((w, k) => s[(d + k) % s.length]);
}
var Root$1 = RovingFocusGroup, Item$1 = RovingFocusGroupItem, SELECTION_KEYS$1 = ["Enter", " "], FIRST_KEYS = [
	"ArrowDown",
	"PageUp",
	"Home"
], LAST_KEYS = [
	"ArrowUp",
	"PageDown",
	"End"
], FIRST_LAST_KEYS = [...FIRST_KEYS, ...LAST_KEYS], SUB_OPEN_KEYS = {
	ltr: [...SELECTION_KEYS$1, "ArrowRight"],
	rtl: [...SELECTION_KEYS$1, "ArrowLeft"]
}, SUB_CLOSE_KEYS = {
	ltr: ["ArrowLeft"],
	rtl: ["ArrowRight"]
}, MENU_NAME = "Menu", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(MENU_NAME), [createMenuContext, createMenuScope] = createContextScope(MENU_NAME, [
	createCollectionScope$1,
	createPopperScope,
	createRovingFocusGroupScope
]), usePopperScope$2 = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (d) => {
	let { __scopeMenu: w, open: k = !1, children: F, dir: L, onOpenChange: V, modal: U = !0 } = d, K = usePopperScope$2(w), [q, J] = React$1.useState(null), X = React$1.useRef(!1), $ = useCallbackRef(V), pA = useDirection(L);
	return React$1.useEffect(() => {
		let s = () => {
			X.current = !0, document.addEventListener("pointerdown", d, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", d, {
				capture: !0,
				once: !0
			});
		}, d = () => X.current = !1;
		return document.addEventListener("keydown", s, { capture: !0 }), () => {
			document.removeEventListener("keydown", s, { capture: !0 }), document.removeEventListener("pointerdown", d, { capture: !0 }), document.removeEventListener("pointermove", d, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$3, {
		...K,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: w,
			open: k,
			onOpenChange: $,
			content: q,
			onContentChange: J,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: w,
				onClose: React$1.useCallback(() => $(!1), [$]),
				isUsingKeyboardRef: X,
				dir: pA,
				modal: U,
				children: F
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((s, d) => {
	let { __scopeMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$2(w),
		...k,
		ref: d
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$4 = "MenuPortal", [PortalProvider$1, usePortalContext$1] = createMenuContext(PORTAL_NAME$4, { forceMount: void 0 }), MenuPortal = (s) => {
	let { __scopeMenu: d, forceMount: w, children: k, container: F } = s, L = useMenuContext(PORTAL_NAME$4, d);
	return /* @__PURE__ */ jsx(PortalProvider$1, {
		scope: d,
		forceMount: w,
		children: /* @__PURE__ */ jsx(Presence, {
			present: w || L.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: F,
				children: k
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME$4;
var CONTENT_NAME$4 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$4), MenuContent = React$1.forwardRef((s, d) => {
	let w = usePortalContext$1(CONTENT_NAME$4, s.__scopeMenu), { forceMount: k = w.forceMount, ...F } = s, L = useMenuContext(CONTENT_NAME$4, s.__scopeMenu), V = useMenuRootContext(CONTENT_NAME$4, s.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection$1.Provider, {
		scope: s.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: k || L.open,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: s.__scopeMenu,
				children: V.modal ? /* @__PURE__ */ jsx(MenuRootContentModal, {
					...F,
					ref: d
				}) : /* @__PURE__ */ jsx(MenuRootContentNonModal, {
					...F,
					ref: d
				})
			})
		})
	});
}), MenuRootContentModal = React$1.forwardRef((d, w) => {
	let k = useMenuContext(CONTENT_NAME$4, d.__scopeMenu), F = React$1.useRef(null), L = useComposedRefs(w, F);
	return React$1.useEffect(() => {
		let s = F.current;
		if (s) return hideOthers(s);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...d,
		ref: L,
		trapFocus: k.open,
		disableOutsidePointerEvents: k.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(d.onFocusOutside, (s) => s.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => k.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((s, d) => {
	let w = useMenuContext(CONTENT_NAME$4, s.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...s,
		ref: d,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => w.onOpenChange(!1)
	});
}), Slot$1 = /* @__PURE__ */ createSlot("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((d, w) => {
	let { __scopeMenu: k, loop: F = !1, trapFocus: L, onOpenAutoFocus: V, onCloseAutoFocus: U, disableOutsidePointerEvents: K, onEntryFocus: q, onEscapeKeyDown: J, onPointerDownOutside: X, onFocusOutside: $, onInteractOutside: pA, onDismiss: mA, disableOutsideScroll: hA, ...gA } = d, _A = useMenuContext(CONTENT_NAME$4, k), vA = useMenuRootContext(CONTENT_NAME$4, k), yA = usePopperScope$2(k), bA = useRovingFocusGroupScope(k), xA = useCollection$1(k), [SA, wA] = React$1.useState(null), TA = React$1.useRef(null), EA = useComposedRefs(w, TA, _A.onContentChange), DA = React$1.useRef(0), OA = React$1.useRef(""), kA = React$1.useRef(0), AA = React$1.useRef(null), jA = React$1.useRef("right"), MA = React$1.useRef(0), NA = hA ? Combination_default : React$1.Fragment, PA = hA ? {
		as: Slot$1,
		allowPinchZoom: !0
	} : void 0, FA = (s) => {
		let d = OA.current + s, w = xA().filter((s) => !s.disabled), k = document.activeElement, F = w.find((s) => s.ref.current === k)?.textValue, L = getNextMatch(w.map((s) => s.textValue), d, F), V = w.find((s) => s.textValue === L)?.ref.current;
		(function s(d) {
			OA.current = d, window.clearTimeout(DA.current), d !== "" && (DA.current = window.setTimeout(() => s(""), 1e3));
		})(d), V && setTimeout(() => V.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(DA.current), []), useFocusGuards();
	let IA = React$1.useCallback((s) => jA.current === AA.current?.side && isPointerInGraceArea(s, AA.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: k,
		searchRef: OA,
		onItemEnter: React$1.useCallback((s) => {
			IA(s) && s.preventDefault();
		}, [IA]),
		onItemLeave: React$1.useCallback((s) => {
			IA(s) || (TA.current?.focus(), wA(null));
		}, [IA]),
		onTriggerLeave: React$1.useCallback((s) => {
			IA(s) && s.preventDefault();
		}, [IA]),
		pointerGraceTimerRef: kA,
		onPointerGraceIntentChange: React$1.useCallback((s) => {
			AA.current = s;
		}, []),
		children: /* @__PURE__ */ jsx(NA, {
			...PA,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: L,
				onMountAutoFocus: composeEventHandlers(V, (s) => {
					s.preventDefault(), TA.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: U,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: K,
					onEscapeKeyDown: J,
					onPointerDownOutside: X,
					onFocusOutside: $,
					onInteractOutside: pA,
					onDismiss: mA,
					children: /* @__PURE__ */ jsx(Root$1, {
						asChild: !0,
						...bA,
						dir: vA.dir,
						orientation: "vertical",
						loop: F,
						currentTabStopId: SA,
						onCurrentTabStopIdChange: wA,
						onEntryFocus: composeEventHandlers(q, (s) => {
							vA.isUsingKeyboardRef.current || s.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(_A.open),
							"data-radix-menu-content": "",
							dir: vA.dir,
							...yA,
							...gA,
							ref: EA,
							style: {
								outline: "none",
								...gA.style
							},
							onKeyDown: composeEventHandlers(gA.onKeyDown, (s) => {
								let d = s.target.closest("[data-radix-menu-content]") === s.currentTarget, w = s.ctrlKey || s.altKey || s.metaKey, k = s.key.length === 1;
								d && (s.key === "Tab" && s.preventDefault(), !w && k && FA(s.key));
								let F = TA.current;
								if (s.target !== F || !FIRST_LAST_KEYS.includes(s.key)) return;
								s.preventDefault();
								let L = xA().filter((s) => !s.disabled).map((s) => s.ref.current);
								LAST_KEYS.includes(s.key) && L.reverse(), focusFirst(L);
							}),
							onBlur: composeEventHandlers(d.onBlur, (s) => {
								s.currentTarget.contains(s.target) || (window.clearTimeout(DA.current), OA.current = "");
							}),
							onPointerMove: composeEventHandlers(d.onPointerMove, whenMouse((s) => {
								let d = s.target, w = MA.current !== s.clientX;
								s.currentTarget.contains(d) && w && (jA.current = s.clientX > MA.current ? "right" : "left", MA.current = s.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$4;
var GROUP_NAME$3 = "MenuGroup", MenuGroup = React$1.forwardRef((s, d) => {
	let { __scopeMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "group",
		...k,
		ref: d
	});
});
MenuGroup.displayName = GROUP_NAME$3;
var LABEL_NAME$3 = "MenuLabel", MenuLabel = React$1.forwardRef((s, d) => {
	let { __scopeMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		...k,
		ref: d
	});
});
MenuLabel.displayName = LABEL_NAME$3;
var ITEM_NAME$3 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((d, w) => {
	let { disabled: k = !1, onSelect: F, ...L } = d, V = React$1.useRef(null), U = useMenuRootContext(ITEM_NAME$3, d.__scopeMenu), K = useMenuContentContext(ITEM_NAME$3, d.__scopeMenu), q = useComposedRefs(w, V), J = React$1.useRef(!1), X = () => {
		let s = V.current;
		if (!k && s) {
			let d = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			s.addEventListener(ITEM_SELECT, (s) => F?.(s), { once: !0 }), dispatchDiscreteCustomEvent(s, d), d.defaultPrevented ? J.current = !1 : U.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...L,
		ref: q,
		disabled: k,
		onClick: composeEventHandlers(d.onClick, X),
		onPointerDown: (s) => {
			d.onPointerDown?.(s), J.current = !0;
		},
		onPointerUp: composeEventHandlers(d.onPointerUp, (s) => {
			J.current || s.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
			let d = K.searchRef.current !== "";
			k || d && s.key === " " || SELECTION_KEYS$1.includes(s.key) && (s.currentTarget.click(), s.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$3;
var MenuItemImpl = React$1.forwardRef((d, w) => {
	let { __scopeMenu: k, disabled: F = !1, textValue: L, ...V } = d, U = useMenuContentContext(ITEM_NAME$3, k), K = useRovingFocusGroupScope(k), q = React$1.useRef(null), J = useComposedRefs(w, q), [X, $] = React$1.useState(!1), [pA, mA] = React$1.useState("");
	return React$1.useEffect(() => {
		let s = q.current;
		s && mA((s.textContent ?? "").trim());
	}, [V.children]), /* @__PURE__ */ jsx(Collection$1.ItemSlot, {
		scope: k,
		disabled: F,
		textValue: L ?? pA,
		children: /* @__PURE__ */ jsx(Item$1, {
			asChild: !0,
			...K,
			focusable: !F,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "menuitem",
				"data-highlighted": X ? "" : void 0,
				"aria-disabled": F || void 0,
				"data-disabled": F ? "" : void 0,
				...V,
				ref: J,
				onPointerMove: composeEventHandlers(d.onPointerMove, whenMouse((s) => {
					F ? U.onItemLeave(s) : (U.onItemEnter(s), s.defaultPrevented || s.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(d.onPointerLeave, whenMouse((s) => U.onItemLeave(s))),
				onFocus: composeEventHandlers(d.onFocus, () => $(!0)),
				onBlur: composeEventHandlers(d.onBlur, () => $(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$2 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((s, d) => {
	let { checked: w = !1, onCheckedChange: k, ...F } = s;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: s.__scopeMenu,
		checked: w,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(w) ? "mixed" : w,
			...F,
			ref: d,
			"data-state": getCheckedState(w),
			onSelect: composeEventHandlers(F.onSelect, () => k?.(isIndeterminate(w) ? !0 : !w), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$2;
var RADIO_GROUP_NAME$2 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$2, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((s, d) => {
	let { value: w, onValueChange: k, ...F } = s, L = useCallbackRef(k);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: s.__scopeMenu,
		value: w,
		onValueChange: L,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...F,
			ref: d
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$2;
var RADIO_ITEM_NAME$2 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((s, d) => {
	let { value: w, ...k } = s, F = useRadioGroupContext(RADIO_ITEM_NAME$2, s.__scopeMenu), L = w === F.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: s.__scopeMenu,
		checked: L,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemradio",
			"aria-checked": L,
			...k,
			ref: d,
			"data-state": getCheckedState(L),
			onSelect: composeEventHandlers(k.onSelect, () => F.onValueChange?.(w), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$2;
var ITEM_INDICATOR_NAME$1 = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME$1, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((s, d) => {
	let { __scopeMenu: w, forceMount: k, ...F } = s, L = useItemIndicatorContext(ITEM_INDICATOR_NAME$1, w);
	return /* @__PURE__ */ jsx(Presence, {
		present: k || isIndeterminate(L.checked) || L.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			...F,
			ref: d,
			"data-state": getCheckedState(L.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME$1;
var SEPARATOR_NAME$3 = "MenuSeparator", MenuSeparator = React$1.forwardRef((s, d) => {
	let { __scopeMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...k,
		ref: d
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$3;
var ARROW_NAME$4 = "MenuArrow", MenuArrow = React$1.forwardRef((s, d) => {
	let { __scopeMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$2(w),
		...k,
		ref: d
	});
});
MenuArrow.displayName = ARROW_NAME$4;
var SUB_NAME$1 = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME$1), MenuSub = (d) => {
	let { __scopeMenu: w, children: k, open: F = !1, onOpenChange: L } = d, V = useMenuContext(SUB_NAME$1, w), U = usePopperScope$2(w), [K, q] = React$1.useState(null), [J, X] = React$1.useState(null), $ = useCallbackRef(L);
	return React$1.useEffect(() => (V.open === !1 && $(!1), () => $(!1)), [V.open, $]), /* @__PURE__ */ jsx(Root2$3, {
		...U,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: w,
			open: F,
			onOpenChange: $,
			content: J,
			onContentChange: X,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: w,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: K,
				onTriggerChange: q,
				children: k
			})
		})
	});
};
MenuSub.displayName = SUB_NAME$1;
var SUB_TRIGGER_NAME$2 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((d, w) => {
	let k = useMenuContext(SUB_TRIGGER_NAME$2, d.__scopeMenu), F = useMenuRootContext(SUB_TRIGGER_NAME$2, d.__scopeMenu), L = useMenuSubContext(SUB_TRIGGER_NAME$2, d.__scopeMenu), V = useMenuContentContext(SUB_TRIGGER_NAME$2, d.__scopeMenu), U = React$1.useRef(null), { pointerGraceTimerRef: K, onPointerGraceIntentChange: q } = V, J = { __scopeMenu: d.__scopeMenu }, X = React$1.useCallback(() => {
		U.current && window.clearTimeout(U.current), U.current = null;
	}, []);
	return React$1.useEffect(() => X, [X]), React$1.useEffect(() => {
		let s = K.current;
		return () => {
			window.clearTimeout(s), q(null);
		};
	}, [K, q]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...J,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: L.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": k.open,
			"aria-controls": L.contentId,
			"data-state": getOpenState(k.open),
			...d,
			ref: composeRefs(w, L.onTriggerChange),
			onClick: (s) => {
				d.onClick?.(s), !(d.disabled || s.defaultPrevented) && (s.currentTarget.focus(), k.open || k.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(d.onPointerMove, whenMouse((s) => {
				V.onItemEnter(s), !s.defaultPrevented && !d.disabled && !k.open && !U.current && (V.onPointerGraceIntentChange(null), U.current = window.setTimeout(() => {
					k.onOpenChange(!0), X();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(d.onPointerLeave, whenMouse((s) => {
				X();
				let d = k.content?.getBoundingClientRect();
				if (d) {
					let w = k.content?.dataset.side, F = w === "right", L = F ? -5 : 5, U = d[F ? "left" : "right"], q = d[F ? "right" : "left"];
					V.onPointerGraceIntentChange({
						area: [
							{
								x: s.clientX + L,
								y: s.clientY
							},
							{
								x: U,
								y: d.top
							},
							{
								x: q,
								y: d.top
							},
							{
								x: q,
								y: d.bottom
							},
							{
								x: U,
								y: d.bottom
							}
						],
						side: w
					}), window.clearTimeout(K.current), K.current = window.setTimeout(() => V.onPointerGraceIntentChange(null), 300);
				} else {
					if (V.onTriggerLeave(s), s.defaultPrevented) return;
					V.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
				let w = V.searchRef.current !== "";
				d.disabled || w && s.key === " " || SUB_OPEN_KEYS[F.dir].includes(s.key) && (k.onOpenChange(!0), k.content?.focus(), s.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$2;
var SUB_CONTENT_NAME$2 = "MenuSubContent", MenuSubContent = React$1.forwardRef((d, w) => {
	let k = usePortalContext$1(CONTENT_NAME$4, d.__scopeMenu), { forceMount: F = k.forceMount, ...L } = d, V = useMenuContext(CONTENT_NAME$4, d.__scopeMenu), U = useMenuRootContext(CONTENT_NAME$4, d.__scopeMenu), K = useMenuSubContext(SUB_CONTENT_NAME$2, d.__scopeMenu), q = React$1.useRef(null), J = useComposedRefs(w, q);
	return /* @__PURE__ */ jsx(Collection$1.Provider, {
		scope: d.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: F || V.open,
			children: /* @__PURE__ */ jsx(Collection$1.Slot, {
				scope: d.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: K.contentId,
					"aria-labelledby": K.triggerId,
					...L,
					ref: J,
					align: "start",
					side: U.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (s) => {
						U.isUsingKeyboardRef.current && q.current?.focus(), s.preventDefault();
					},
					onCloseAutoFocus: (s) => s.preventDefault(),
					onFocusOutside: composeEventHandlers(d.onFocusOutside, (s) => {
						s.target !== K.trigger && V.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(d.onEscapeKeyDown, (s) => {
						U.onClose(), s.preventDefault();
					}),
					onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
						let d = s.currentTarget.contains(s.target), w = SUB_CLOSE_KEYS[U.dir].includes(s.key);
						d && w && (V.onOpenChange(!1), K.trigger?.focus(), s.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$2;
function getOpenState(s) {
	return s ? "open" : "closed";
}
function isIndeterminate(s) {
	return s === "indeterminate";
}
function getCheckedState(s) {
	return isIndeterminate(s) ? "indeterminate" : s ? "checked" : "unchecked";
}
function focusFirst(s) {
	let d = document.activeElement;
	for (let w of s) if (w === d || (w.focus(), document.activeElement !== d)) return;
}
function wrapArray$1(s, d) {
	return s.map((w, k) => s[(d + k) % s.length]);
}
function getNextMatch(s, d, w) {
	let k = d.length > 1 && Array.from(d).every((s) => s === d[0]) ? d[0] : d, F = w ? s.indexOf(w) : -1, L = wrapArray$1(s, Math.max(F, 0));
	k.length === 1 && (L = L.filter((s) => s !== w));
	let V = L.find((s) => s.toLowerCase().startsWith(k.toLowerCase()));
	return V === w ? void 0 : V;
}
function isPointInPolygon$1(s, d) {
	let { x: w, y: k } = s, F = !1;
	for (let s = 0, L = d.length - 1; s < d.length; L = s++) {
		let V = d[s], U = d[L], K = V.x, q = V.y, J = U.x, X = U.y;
		q > k != X > k && w < (J - K) * (k - q) / (X - q) + K && (F = !F);
	}
	return F;
}
function isPointerInGraceArea(s, d) {
	return d ? isPointInPolygon$1({
		x: s.clientX,
		y: s.clientY
	}, d) : !1;
}
function whenMouse(s) {
	return (d) => d.pointerType === "mouse" ? s(d) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$2 = MenuPortal, Content2$3 = MenuContent, Group$1 = MenuGroup, Label$1 = MenuLabel, Item2$2 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator$1 = MenuItemIndicator, Separator$1 = MenuSeparator, Arrow2 = MenuArrow, Sub = MenuSub, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, CONTEXT_MENU_NAME = "ContextMenu", [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [createMenuScope]), useMenuScope$1 = createMenuScope(), [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME), ContextMenu = (d) => {
	let { __scopeContextMenu: w, children: k, onOpenChange: F, dir: L, modal: V = !0 } = d, [U, K] = React$1.useState(!1), q = useMenuScope$1(w), J = useCallbackRef(F), X = React$1.useCallback((s) => {
		K(s), J(s);
	}, [J]);
	return /* @__PURE__ */ jsx(ContextMenuProvider, {
		scope: w,
		open: U,
		onOpenChange: X,
		modal: V,
		children: /* @__PURE__ */ jsx(Root3, {
			...q,
			dir: L,
			open: U,
			onOpenChange: X,
			modal: V,
			children: k
		})
	});
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME$3 = "ContextMenuTrigger", ContextMenuTrigger = React$1.forwardRef((d, w) => {
	let { __scopeContextMenu: k, disabled: F = !1, ...L } = d, V = useContextMenuContext(TRIGGER_NAME$3, k), U = useMenuScope$1(k), K = React$1.useRef({
		x: 0,
		y: 0
	}), q = React$1.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...K.current
	}) }), J = React$1.useRef(0), X = React$1.useCallback(() => window.clearTimeout(J.current), []), $ = (s) => {
		K.current = {
			x: s.clientX,
			y: s.clientY
		}, V.onOpenChange(!0);
	};
	return React$1.useEffect(() => X, [X]), React$1.useEffect(() => void (F && X()), [F, X]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Anchor2, {
		...U,
		virtualRef: q
	}), /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": V.open ? "open" : "closed",
		"data-disabled": F ? "" : void 0,
		...L,
		ref: w,
		style: {
			WebkitTouchCallout: "none",
			...d.style
		},
		onContextMenu: F ? d.onContextMenu : composeEventHandlers(d.onContextMenu, (s) => {
			X(), $(s), s.preventDefault();
		}),
		onPointerDown: F ? d.onPointerDown : composeEventHandlers(d.onPointerDown, whenTouchOrPen((s) => {
			X(), J.current = window.setTimeout(() => $(s), 700);
		})),
		onPointerMove: F ? d.onPointerMove : composeEventHandlers(d.onPointerMove, whenTouchOrPen(X)),
		onPointerCancel: F ? d.onPointerCancel : composeEventHandlers(d.onPointerCancel, whenTouchOrPen(X)),
		onPointerUp: F ? d.onPointerUp : composeEventHandlers(d.onPointerUp, whenTouchOrPen(X))
	})] });
});
ContextMenuTrigger.displayName = TRIGGER_NAME$3;
var PORTAL_NAME$3 = "ContextMenuPortal", ContextMenuPortal = (s) => {
	let { __scopeContextMenu: d, ...w } = s;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope$1(d),
		...w
	});
};
ContextMenuPortal.displayName = PORTAL_NAME$3;
var CONTENT_NAME$3 = "ContextMenuContent", ContextMenuContent = React$1.forwardRef((d, w) => {
	let { __scopeContextMenu: k, ...F } = d, L = useContextMenuContext(CONTENT_NAME$3, k), V = useMenuScope$1(k), U = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$3, {
		...V,
		...F,
		ref: w,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (s) => {
			d.onCloseAutoFocus?.(s), !s.defaultPrevented && U.current && s.preventDefault(), U.current = !1;
		},
		onInteractOutside: (s) => {
			d.onInteractOutside?.(s), !s.defaultPrevented && !L.modal && (U.current = !0);
		},
		style: {
			...d.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ContextMenuContent.displayName = CONTENT_NAME$3;
var GROUP_NAME$2 = "ContextMenuGroup", ContextMenuGroup = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Group$1, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "ContextMenuLabel", ContextMenuLabel = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Label$1, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "ContextMenuItem", ContextMenuItem = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Item2$2, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuItem.displayName = ITEM_NAME$2;
var CHECKBOX_ITEM_NAME$1 = "ContextMenuCheckboxItem", ContextMenuCheckboxItem = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "ContextMenuRadioGroup", ContextMenuRadioGroup = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "ContextMenuRadioItem", ContextMenuRadioItem = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var INDICATOR_NAME$1 = "ContextMenuItemIndicator", ContextMenuItemIndicator = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(ItemIndicator$1, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME$1;
var SEPARATOR_NAME$2 = "ContextMenuSeparator", ContextMenuSeparator = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Separator$1, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$3 = "ContextMenuArrow", ContextMenuArrow = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuArrow.displayName = ARROW_NAME$3;
var SUB_NAME = "ContextMenuSub", ContextMenuSub = (s) => {
	let { __scopeContextMenu: d, children: w, onOpenChange: k, open: F, defaultOpen: L } = s, V = useMenuScope$1(d), [U, K] = useControllableState({
		prop: F,
		defaultProp: L ?? !1,
		onChange: k,
		caller: SUB_NAME
	});
	return /* @__PURE__ */ jsx(Sub, {
		...V,
		open: U,
		onOpenChange: K,
		children: w
	});
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "ContextMenuSubTrigger", ContextMenuSubTrigger = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope$1(w),
		...k,
		ref: d
	});
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "ContextMenuSubContent", ContextMenuSubContent = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope$1(w),
		...k,
		ref: d,
		style: {
			...s.style,
			"--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
ContextMenuSubContent.displayName = SUB_CONTENT_NAME$1;
function whenTouchOrPen(s) {
	return (d) => d.pointerType === "mouse" ? void 0 : s(d);
}
var Root2$2 = ContextMenu, Trigger$2 = ContextMenuTrigger, Portal2$1 = ContextMenuPortal, Content2$2 = ContextMenuContent, Item2$1 = ContextMenuItem, Separator2$1 = ContextMenuSeparator, Sub2$1 = ContextMenuSub, SubTrigger2$1 = ContextMenuSubTrigger, SubContent2$1 = ContextMenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu = (d) => {
	let { __scopeDropdownMenu: w, children: k, dir: F, open: L, defaultOpen: V, onOpenChange: U, modal: K = !0 } = d, q = useMenuScope(w), J = React$1.useRef(null), [X, $] = useControllableState({
		prop: L,
		defaultProp: V ?? !1,
		onChange: U,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: w,
		triggerId: useId$1(),
		triggerRef: J,
		contentId: useId$1(),
		open: X,
		onOpenChange: $,
		onOpenToggle: React$1.useCallback(() => $((s) => !s), [$]),
		modal: K,
		children: /* @__PURE__ */ jsx(Root3, {
			...q,
			open: X,
			onOpenChange: $,
			dir: F,
			modal: K,
			children: k
		})
	});
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$2 = "DropdownMenuTrigger", DropdownMenuTrigger = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, disabled: k = !1, ...F } = s, L = useDropdownMenuContext(TRIGGER_NAME$2, w);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(w),
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			id: L.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": L.open,
			"aria-controls": L.open ? L.contentId : void 0,
			"data-state": L.open ? "open" : "closed",
			"data-disabled": k ? "" : void 0,
			disabled: k,
			...F,
			ref: composeRefs(d, L.triggerRef),
			onPointerDown: composeEventHandlers(s.onPointerDown, (s) => {
				!k && s.button === 0 && s.ctrlKey === !1 && (L.onOpenToggle(), L.open || s.preventDefault());
			}),
			onKeyDown: composeEventHandlers(s.onKeyDown, (s) => {
				k || (["Enter", " "].includes(s.key) && L.onOpenToggle(), s.key === "ArrowDown" && L.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(s.key) && s.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger.displayName = TRIGGER_NAME$2;
var PORTAL_NAME$2 = "DropdownMenuPortal", DropdownMenuPortal = (s) => {
	let { __scopeDropdownMenu: d, ...w } = s;
	return /* @__PURE__ */ jsx(Portal$2, {
		...useMenuScope(d),
		...w
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$2 = "DropdownMenuContent", DropdownMenuContent = React$1.forwardRef((d, w) => {
	let { __scopeDropdownMenu: k, ...F } = d, L = useDropdownMenuContext(CONTENT_NAME$2, k), V = useMenuScope(k), U = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$3, {
		id: L.contentId,
		"aria-labelledby": L.triggerId,
		...V,
		...F,
		ref: w,
		onCloseAutoFocus: composeEventHandlers(d.onCloseAutoFocus, (s) => {
			U.current || L.triggerRef.current?.focus(), U.current = !1, s.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(d.onInteractOutside, (s) => {
			let d = s.detail.originalEvent, w = d.button === 0 && d.ctrlKey === !0, k = d.button === 2 || w;
			(!L.modal || k) && (U.current = !0);
		}),
		style: {
			...d.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuContent.displayName = CONTENT_NAME$2;
var GROUP_NAME$1 = "DropdownMenuGroup", DropdownMenuGroup = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Group$1, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuGroup.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "DropdownMenuLabel", DropdownMenuLabel = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Label$1, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuLabel.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "DropdownMenuItem", DropdownMenuItem = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Item2$2, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuItem.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(ItemIndicator$1, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME$1 = "DropdownMenuSeparator", DropdownMenuSeparator = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Separator$1, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$2 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$2;
var DropdownMenuSub = (s) => {
	let { __scopeDropdownMenu: d, children: w, open: k, onOpenChange: F, defaultOpen: L } = s, V = useMenuScope(d), [U, K] = useControllableState({
		prop: k,
		defaultProp: L ?? !1,
		onChange: F,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ jsx(Sub, {
		...V,
		open: U,
		onOpenChange: K,
		children: w
	});
}, SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(w),
		...k,
		ref: d
	});
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: w, ...k } = s;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(w),
		...k,
		ref: d,
		style: {
			...s.style,
			"--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
			"--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
			"--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
DropdownMenuSubContent.displayName = SUB_CONTENT_NAME;
var Root2$1 = DropdownMenu, Trigger$1 = DropdownMenuTrigger, Portal2 = DropdownMenuPortal, Content2$1 = DropdownMenuContent, Group2 = DropdownMenuGroup, Label2 = DropdownMenuLabel, Item2 = DropdownMenuItem, CheckboxItem2 = DropdownMenuCheckboxItem, RadioGroup2 = DropdownMenuRadioGroup, RadioItem2 = DropdownMenuRadioItem, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator, Sub2 = DropdownMenuSub, SubTrigger2 = DropdownMenuSubTrigger, SubContent2 = DropdownMenuSubContent;
function clamp$2(s, [d, w]) {
	return Math.min(w, Math.max(d, s));
}
function useStateMachine(d, w) {
	return React$1.useReducer((s, d) => w[s][d] ?? s, d);
}
var SCROLL_AREA_NAME = "ScrollArea", [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME), [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME), ScrollArea = React$1.forwardRef((d, w) => {
	let { __scopeScrollArea: k, type: F = "hover", dir: L, scrollHideDelay: V = 600, ...U } = d, [K, q] = React$1.useState(null), [J, X] = React$1.useState(null), [$, pA] = React$1.useState(null), [mA, hA] = React$1.useState(null), [gA, _A] = React$1.useState(null), [vA, yA] = React$1.useState(0), [bA, xA] = React$1.useState(0), [SA, wA] = React$1.useState(!1), [TA, EA] = React$1.useState(!1), DA = useComposedRefs(w, (s) => q(s)), OA = useDirection(L);
	return /* @__PURE__ */ jsx(ScrollAreaProvider, {
		scope: k,
		type: F,
		dir: OA,
		scrollHideDelay: V,
		scrollArea: K,
		viewport: J,
		onViewportChange: X,
		content: $,
		onContentChange: pA,
		scrollbarX: mA,
		onScrollbarXChange: hA,
		scrollbarXEnabled: SA,
		onScrollbarXEnabledChange: wA,
		scrollbarY: gA,
		onScrollbarYChange: _A,
		scrollbarYEnabled: TA,
		onScrollbarYEnabledChange: EA,
		onCornerWidthChange: yA,
		onCornerHeightChange: xA,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			dir: OA,
			...U,
			ref: DA,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": vA + "px",
				"--radix-scroll-area-corner-height": bA + "px",
				...d.style
			}
		})
	});
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME$1 = "ScrollAreaViewport", ScrollAreaViewport = React$1.forwardRef((d, w) => {
	let { __scopeScrollArea: k, children: F, nonce: L, ...V } = d, U = useScrollAreaContext(VIEWPORT_NAME$1, k), K = useComposedRefs(w, React$1.useRef(null), U.onViewportChange);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: L
	}), /* @__PURE__ */ jsx(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...V,
		ref: K,
		style: {
			overflowX: U.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: U.scrollbarYEnabled ? "scroll" : "hidden",
			...d.style
		},
		children: /* @__PURE__ */ jsx("div", {
			ref: U.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: F
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME$1;
var SCROLLBAR_NAME = "ScrollAreaScrollbar", ScrollAreaScrollbar = React$1.forwardRef((d, w) => {
	let { forceMount: k, ...F } = d, L = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), { onScrollbarXEnabledChange: V, onScrollbarYEnabledChange: U } = L, K = d.orientation === "horizontal";
	return React$1.useEffect(() => (K ? V(!0) : U(!0), () => {
		K ? V(!1) : U(!1);
	}), [
		K,
		V,
		U
	]), L.type === "hover" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarHover, {
		...F,
		ref: w,
		forceMount: k
	}) : L.type === "scroll" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarScroll, {
		...F,
		ref: w,
		forceMount: k
	}) : L.type === "auto" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
		...F,
		ref: w,
		forceMount: k
	}) : L.type === "always" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
		...F,
		ref: w
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React$1.forwardRef((d, w) => {
	let { forceMount: k, ...F } = d, L = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), [V, U] = React$1.useState(!1);
	return React$1.useEffect(() => {
		let s = L.scrollArea, d = 0;
		if (s) {
			let w = () => {
				window.clearTimeout(d), U(!0);
			}, k = () => {
				d = window.setTimeout(() => U(!1), L.scrollHideDelay);
			};
			return s.addEventListener("pointerenter", w), s.addEventListener("pointerleave", k), () => {
				window.clearTimeout(d), s.removeEventListener("pointerenter", w), s.removeEventListener("pointerleave", k);
			};
		}
	}, [L.scrollArea, L.scrollHideDelay]), /* @__PURE__ */ jsx(Presence, {
		present: k || V,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
			"data-state": V ? "visible" : "hidden",
			...F,
			ref: w
		})
	});
}), ScrollAreaScrollbarScroll = React$1.forwardRef((d, w) => {
	let { forceMount: k, ...F } = d, L = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), V = d.orientation === "horizontal", U = useDebounceCallback(() => q("SCROLL_END"), 100), [K, q] = useStateMachine("hidden", {
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
		if (K === "idle") {
			let s = window.setTimeout(() => q("HIDE"), L.scrollHideDelay);
			return () => window.clearTimeout(s);
		}
	}, [
		K,
		L.scrollHideDelay,
		q
	]), React$1.useEffect(() => {
		let s = L.viewport, d = V ? "scrollLeft" : "scrollTop";
		if (s) {
			let w = s[d], k = () => {
				let k = s[d];
				w !== k && (q("SCROLL"), U()), w = k;
			};
			return s.addEventListener("scroll", k), () => s.removeEventListener("scroll", k);
		}
	}, [
		L.viewport,
		V,
		q,
		U
	]), /* @__PURE__ */ jsx(Presence, {
		present: k || K !== "hidden",
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": K === "hidden" ? "hidden" : "visible",
			...F,
			ref: w,
			onPointerEnter: composeEventHandlers(d.onPointerEnter, () => q("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(d.onPointerLeave, () => q("POINTER_LEAVE"))
		})
	});
}), ScrollAreaScrollbarAuto = React$1.forwardRef((d, w) => {
	let k = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), { forceMount: F, ...L } = d, [V, U] = React$1.useState(!1), K = d.orientation === "horizontal", q = useDebounceCallback(() => {
		if (k.viewport) {
			let s = k.viewport.offsetWidth < k.viewport.scrollWidth, d = k.viewport.offsetHeight < k.viewport.scrollHeight;
			U(K ? s : d);
		}
	}, 10);
	return useResizeObserver(k.viewport, q), useResizeObserver(k.content, q), /* @__PURE__ */ jsx(Presence, {
		present: F || V,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": V ? "visible" : "hidden",
			...L,
			ref: w
		})
	});
}), ScrollAreaScrollbarVisible = React$1.forwardRef((d, w) => {
	let { orientation: k = "vertical", ...F } = d, L = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), V = React$1.useRef(null), U = React$1.useRef(0), [K, q] = React$1.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), J = getThumbRatio(K.viewport, K.content), X = {
		...F,
		sizes: K,
		onSizesChange: q,
		hasThumb: J > 0 && J < 1,
		onThumbChange: (s) => V.current = s,
		onThumbPointerUp: () => U.current = 0,
		onThumbPointerDown: (s) => U.current = s
	};
	function $(s, d) {
		return getScrollPositionFromPointer(s, U.current, K, d);
	}
	return k === "horizontal" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarX, {
		...X,
		ref: w,
		onThumbPositionChange: () => {
			if (L.viewport && V.current) {
				let s = L.viewport.scrollLeft, d = getThumbOffsetFromScroll(s, K, L.dir);
				V.current.style.transform = `translate3d(${d}px, 0, 0)`;
			}
		},
		onWheelScroll: (s) => {
			L.viewport && (L.viewport.scrollLeft = s);
		},
		onDragScroll: (s) => {
			L.viewport && (L.viewport.scrollLeft = $(s, L.dir));
		}
	}) : k === "vertical" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarY, {
		...X,
		ref: w,
		onThumbPositionChange: () => {
			if (L.viewport && V.current) {
				let s = L.viewport.scrollTop, d = getThumbOffsetFromScroll(s, K);
				V.current.style.transform = `translate3d(0, ${d}px, 0)`;
			}
		},
		onWheelScroll: (s) => {
			L.viewport && (L.viewport.scrollTop = s);
		},
		onDragScroll: (s) => {
			L.viewport && (L.viewport.scrollTop = $(s));
		}
	}) : null;
}), ScrollAreaScrollbarX = React$1.forwardRef((d, w) => {
	let { sizes: k, onSizesChange: F, ...L } = d, V = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), [U, K] = React$1.useState(), q = React$1.useRef(null), J = useComposedRefs(w, q, V.onScrollbarXChange);
	return React$1.useEffect(() => {
		q.current && K(getComputedStyle(q.current));
	}, [q]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...L,
		ref: J,
		sizes: k,
		style: {
			bottom: 0,
			left: V.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: V.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": getThumbSize(k) + "px",
			...d.style
		},
		onThumbPointerDown: (s) => d.onThumbPointerDown(s.x),
		onDragScroll: (s) => d.onDragScroll(s.x),
		onWheelScroll: (s, w) => {
			if (V.viewport) {
				let k = V.viewport.scrollLeft + s.deltaX;
				d.onWheelScroll(k), isScrollingWithinScrollbarBounds(k, w) && s.preventDefault();
			}
		},
		onResize: () => {
			q.current && V.viewport && U && F({
				content: V.viewport.scrollWidth,
				viewport: V.viewport.offsetWidth,
				scrollbar: {
					size: q.current.clientWidth,
					paddingStart: toInt(U.paddingLeft),
					paddingEnd: toInt(U.paddingRight)
				}
			});
		}
	});
}), ScrollAreaScrollbarY = React$1.forwardRef((d, w) => {
	let { sizes: k, onSizesChange: F, ...L } = d, V = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), [U, K] = React$1.useState(), q = React$1.useRef(null), J = useComposedRefs(w, q, V.onScrollbarYChange);
	return React$1.useEffect(() => {
		q.current && K(getComputedStyle(q.current));
	}, [q]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...L,
		ref: J,
		sizes: k,
		style: {
			top: 0,
			right: V.dir === "ltr" ? 0 : void 0,
			left: V.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": getThumbSize(k) + "px",
			...d.style
		},
		onThumbPointerDown: (s) => d.onThumbPointerDown(s.y),
		onDragScroll: (s) => d.onDragScroll(s.y),
		onWheelScroll: (s, w) => {
			if (V.viewport) {
				let k = V.viewport.scrollTop + s.deltaY;
				d.onWheelScroll(k), isScrollingWithinScrollbarBounds(k, w) && s.preventDefault();
			}
		},
		onResize: () => {
			q.current && V.viewport && U && F({
				content: V.viewport.scrollHeight,
				viewport: V.viewport.offsetHeight,
				scrollbar: {
					size: q.current.clientHeight,
					paddingStart: toInt(U.paddingTop),
					paddingEnd: toInt(U.paddingBottom)
				}
			});
		}
	});
}), [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME), ScrollAreaScrollbarImpl = React$1.forwardRef((d, w) => {
	let { __scopeScrollArea: k, sizes: F, hasThumb: L, onThumbChange: V, onThumbPointerUp: U, onThumbPointerDown: K, onThumbPositionChange: q, onDragScroll: J, onWheelScroll: X, onResize: $, ...pA } = d, mA = useScrollAreaContext(SCROLLBAR_NAME, k), [hA, gA] = React$1.useState(null), _A = useComposedRefs(w, (s) => gA(s)), vA = React$1.useRef(null), yA = React$1.useRef(""), bA = mA.viewport, xA = F.content - F.viewport, SA = useCallbackRef(X), wA = useCallbackRef(q), TA = useDebounceCallback($, 10);
	function EA(s) {
		vA.current && J({
			x: s.clientX - vA.current.left,
			y: s.clientY - vA.current.top
		});
	}
	return React$1.useEffect(() => {
		let s = (s) => {
			let d = s.target;
			hA?.contains(d) && SA(s, xA);
		};
		return document.addEventListener("wheel", s, { passive: !1 }), () => document.removeEventListener("wheel", s, { passive: !1 });
	}, [
		bA,
		hA,
		xA,
		SA
	]), React$1.useEffect(wA, [F, wA]), useResizeObserver(hA, TA), useResizeObserver(mA.content, TA), /* @__PURE__ */ jsx(ScrollbarProvider, {
		scope: k,
		scrollbar: hA,
		hasThumb: L,
		onThumbChange: useCallbackRef(V),
		onThumbPointerUp: useCallbackRef(U),
		onThumbPositionChange: wA,
		onThumbPointerDown: useCallbackRef(K),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			...pA,
			ref: _A,
			style: {
				position: "absolute",
				...pA.style
			},
			onPointerDown: composeEventHandlers(d.onPointerDown, (s) => {
				s.button === 0 && (s.target.setPointerCapture(s.pointerId), vA.current = hA.getBoundingClientRect(), yA.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", mA.viewport && (mA.viewport.style.scrollBehavior = "auto"), EA(s));
			}),
			onPointerMove: composeEventHandlers(d.onPointerMove, EA),
			onPointerUp: composeEventHandlers(d.onPointerUp, (s) => {
				let d = s.target;
				d.hasPointerCapture(s.pointerId) && d.releasePointerCapture(s.pointerId), document.body.style.webkitUserSelect = yA.current, mA.viewport && (mA.viewport.style.scrollBehavior = ""), vA.current = null;
			})
		})
	});
}), THUMB_NAME = "ScrollAreaThumb", ScrollAreaThumb = React$1.forwardRef((s, d) => {
	let { forceMount: w, ...k } = s, F = useScrollbarContext(THUMB_NAME, s.__scopeScrollArea);
	return /* @__PURE__ */ jsx(Presence, {
		present: w || F.hasThumb,
		children: /* @__PURE__ */ jsx(ScrollAreaThumbImpl, {
			ref: d,
			...k
		})
	});
}), ScrollAreaThumbImpl = React$1.forwardRef((d, w) => {
	let { __scopeScrollArea: k, style: F, ...L } = d, V = useScrollAreaContext(THUMB_NAME, k), U = useScrollbarContext(THUMB_NAME, k), { onThumbPositionChange: K } = U, q = useComposedRefs(w, (s) => U.onThumbChange(s)), J = React$1.useRef(void 0), X = useDebounceCallback(() => {
		J.current &&= (J.current(), void 0);
	}, 100);
	return React$1.useEffect(() => {
		let s = V.viewport;
		if (s) {
			let d = () => {
				X(), J.current || (J.current = addUnlinkedScrollListener(s, K), K());
			};
			return K(), s.addEventListener("scroll", d), () => s.removeEventListener("scroll", d);
		}
	}, [
		V.viewport,
		X,
		K
	]), /* @__PURE__ */ jsx(Primitive.div, {
		"data-state": U.hasThumb ? "visible" : "hidden",
		...L,
		ref: q,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...F
		},
		onPointerDownCapture: composeEventHandlers(d.onPointerDownCapture, (s) => {
			let d = s.target.getBoundingClientRect(), w = s.clientX - d.left, k = s.clientY - d.top;
			U.onThumbPointerDown({
				x: w,
				y: k
			});
		}),
		onPointerUp: composeEventHandlers(d.onPointerUp, U.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner", ScrollAreaCorner = React$1.forwardRef((s, d) => {
	let w = useScrollAreaContext(CORNER_NAME, s.__scopeScrollArea), k = !!(w.scrollbarX && w.scrollbarY);
	return w.type !== "scroll" && k ? /* @__PURE__ */ jsx(ScrollAreaCornerImpl, {
		...s,
		ref: d
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React$1.forwardRef((d, w) => {
	let { __scopeScrollArea: k, ...F } = d, L = useScrollAreaContext(CORNER_NAME, k), [V, U] = React$1.useState(0), [K, q] = React$1.useState(0), J = !!(V && K);
	return useResizeObserver(L.scrollbarX, () => {
		let s = L.scrollbarX?.offsetHeight || 0;
		L.onCornerHeightChange(s), q(s);
	}), useResizeObserver(L.scrollbarY, () => {
		let s = L.scrollbarY?.offsetWidth || 0;
		L.onCornerWidthChange(s), U(s);
	}), J ? /* @__PURE__ */ jsx(Primitive.div, {
		...F,
		ref: w,
		style: {
			width: V,
			height: K,
			position: "absolute",
			right: L.dir === "ltr" ? 0 : void 0,
			left: L.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...d.style
		}
	}) : null;
});
function toInt(s) {
	return s ? parseInt(s, 10) : 0;
}
function getThumbRatio(s, d) {
	let w = s / d;
	return isNaN(w) ? 0 : w;
}
function getThumbSize(s) {
	let d = getThumbRatio(s.viewport, s.content), w = s.scrollbar.paddingStart + s.scrollbar.paddingEnd, k = (s.scrollbar.size - w) * d;
	return Math.max(k, 18);
}
function getScrollPositionFromPointer(s, d, w, k = "ltr") {
	let F = getThumbSize(w), L = F / 2, V = d || L, U = F - V, K = w.scrollbar.paddingStart + V, q = w.scrollbar.size - w.scrollbar.paddingEnd - U, J = w.content - w.viewport, X = k === "ltr" ? [0, J] : [J * -1, 0];
	return linearScale([K, q], X)(s);
}
function getThumbOffsetFromScroll(s, d, w = "ltr") {
	let k = getThumbSize(d), F = d.scrollbar.paddingStart + d.scrollbar.paddingEnd, L = d.scrollbar.size - F, V = d.content - d.viewport, U = L - k, K = clamp$2(s, w === "ltr" ? [0, V] : [V * -1, 0]);
	return linearScale([0, V], [0, U])(K);
}
function linearScale(s, d) {
	return (w) => {
		if (s[0] === s[1] || d[0] === d[1]) return d[0];
		let k = (d[1] - d[0]) / (s[1] - s[0]);
		return d[0] + k * (w - s[0]);
	};
}
function isScrollingWithinScrollbarBounds(s, d) {
	return s > 0 && s < d;
}
var addUnlinkedScrollListener = (s, d = () => {}) => {
	let w = {
		left: s.scrollLeft,
		top: s.scrollTop
	}, k = 0;
	return (function F() {
		let L = {
			left: s.scrollLeft,
			top: s.scrollTop
		}, V = w.left !== L.left, U = w.top !== L.top;
		(V || U) && d(), w = L, k = window.requestAnimationFrame(F);
	})(), () => window.cancelAnimationFrame(k);
};
function useDebounceCallback(d, w) {
	let k = useCallbackRef(d), F = React$1.useRef(0);
	return React$1.useEffect(() => () => window.clearTimeout(F.current), []), React$1.useCallback(() => {
		window.clearTimeout(F.current), F.current = window.setTimeout(k, w);
	}, [k, w]);
}
function useResizeObserver(s, d) {
	let w = useCallbackRef(d);
	useLayoutEffect2(() => {
		let d = 0;
		if (s) {
			let k = new ResizeObserver(() => {
				cancelAnimationFrame(d), d = window.requestAnimationFrame(w);
			});
			return k.observe(s), () => {
				window.cancelAnimationFrame(d), k.unobserve(s);
			};
		}
	}, [s, w]);
}
var Root = ScrollArea, Viewport$1 = ScrollAreaViewport, Scrollbar = ScrollAreaScrollbar, Thumb = ScrollAreaThumb, Corner = ScrollAreaCorner, OPEN_KEYS = [
	" ",
	"Enter",
	"ArrowUp",
	"ArrowDown"
], SELECTION_KEYS = [" ", "Enter"], SELECT_NAME = "Select", [Collection, useCollection, createCollectionScope] = createCollection(SELECT_NAME), [createSelectContext, createSelectScope] = createContextScope(SELECT_NAME, [createCollectionScope, createPopperScope]), usePopperScope$1 = createPopperScope(), [SelectProvider, useSelectContext] = createSelectContext(SELECT_NAME), [SelectNativeOptionsProvider, useSelectNativeOptionsContext] = createSelectContext(SELECT_NAME), Select = (d) => {
	let { __scopeSelect: w, children: k, open: F, defaultOpen: L, onOpenChange: V, value: U, defaultValue: K, onValueChange: q, dir: J, name: X, autoComplete: $, disabled: pA, required: mA, form: hA } = d, gA = usePopperScope$1(w), [_A, vA] = React$1.useState(null), [yA, bA] = React$1.useState(null), [xA, SA] = React$1.useState(!1), TA = useDirection(J), [EA, DA] = useControllableState({
		prop: F,
		defaultProp: L ?? !1,
		onChange: V,
		caller: SELECT_NAME
	}), [OA, kA] = useControllableState({
		prop: U,
		defaultProp: K,
		onChange: q,
		caller: SELECT_NAME
	}), AA = React$1.useRef(null), jA = _A ? hA || !!_A.closest("form") : !0, [MA, NA] = React$1.useState(/* @__PURE__ */ new Set()), PA = Array.from(MA).map((s) => s.props.value).join(";");
	return /* @__PURE__ */ jsx(Root2$3, {
		...gA,
		children: /* @__PURE__ */ jsxs(SelectProvider, {
			required: mA,
			scope: w,
			trigger: _A,
			onTriggerChange: vA,
			valueNode: yA,
			onValueNodeChange: bA,
			valueNodeHasChildren: xA,
			onValueNodeHasChildrenChange: SA,
			contentId: useId$1(),
			value: OA,
			onValueChange: kA,
			open: EA,
			onOpenChange: DA,
			dir: TA,
			triggerPointerDownPosRef: AA,
			disabled: pA,
			children: [/* @__PURE__ */ jsx(Collection.Provider, {
				scope: w,
				children: /* @__PURE__ */ jsx(SelectNativeOptionsProvider, {
					scope: d.__scopeSelect,
					onNativeOptionAdd: React$1.useCallback((s) => {
						NA((d) => new Set(d).add(s));
					}, []),
					onNativeOptionRemove: React$1.useCallback((s) => {
						NA((d) => {
							let w = new Set(d);
							return w.delete(s), w;
						});
					}, []),
					children: k
				})
			}), jA ? /* @__PURE__ */ jsxs(SelectBubbleInput, {
				"aria-hidden": !0,
				required: mA,
				tabIndex: -1,
				name: X,
				autoComplete: $,
				value: OA,
				onChange: (s) => kA(s.target.value),
				disabled: pA,
				form: hA,
				children: [OA === void 0 ? /* @__PURE__ */ jsx("option", { value: "" }) : null, Array.from(MA)]
			}, PA) : null]
		})
	});
};
Select.displayName = SELECT_NAME;
var TRIGGER_NAME$1 = "SelectTrigger", SelectTrigger = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, disabled: F = !1, ...L } = d, V = usePopperScope$1(k), U = useSelectContext(TRIGGER_NAME$1, k), K = U.disabled || F, q = useComposedRefs(w, U.onTriggerChange), J = useCollection(k), X = React$1.useRef("touch"), [$, pA, mA] = useTypeaheadSearch((s) => {
		let d = J().filter((s) => !s.disabled), w = findNextItem(d, s, d.find((s) => s.value === U.value));
		w !== void 0 && U.onValueChange(w.value);
	}), hA = (s) => {
		K || (U.onOpenChange(!0), mA()), s && (U.triggerPointerDownPosRef.current = {
			x: Math.round(s.pageX),
			y: Math.round(s.pageY)
		});
	};
	return /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...V,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "combobox",
			"aria-controls": U.contentId,
			"aria-expanded": U.open,
			"aria-required": U.required,
			"aria-autocomplete": "none",
			dir: U.dir,
			"data-state": U.open ? "open" : "closed",
			disabled: K,
			"data-disabled": K ? "" : void 0,
			"data-placeholder": shouldShowPlaceholder(U.value) ? "" : void 0,
			...L,
			ref: q,
			onClick: composeEventHandlers(L.onClick, (s) => {
				s.currentTarget.focus(), X.current !== "mouse" && hA(s);
			}),
			onPointerDown: composeEventHandlers(L.onPointerDown, (s) => {
				X.current = s.pointerType;
				let d = s.target;
				d.hasPointerCapture(s.pointerId) && d.releasePointerCapture(s.pointerId), s.button === 0 && s.ctrlKey === !1 && s.pointerType === "mouse" && (hA(s), s.preventDefault());
			}),
			onKeyDown: composeEventHandlers(L.onKeyDown, (s) => {
				let d = $.current !== "";
				!(s.ctrlKey || s.altKey || s.metaKey) && s.key.length === 1 && pA(s.key), !(d && s.key === " ") && OPEN_KEYS.includes(s.key) && (hA(), s.preventDefault());
			})
		})
	});
});
SelectTrigger.displayName = TRIGGER_NAME$1;
var VALUE_NAME = "SelectValue", SelectValue = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, className: k, style: F, children: L, placeholder: V = "", ...U } = s, K = useSelectContext(VALUE_NAME, w), { onValueNodeHasChildrenChange: q } = K, J = L !== void 0, X = useComposedRefs(d, K.onValueNodeChange);
	return useLayoutEffect2(() => {
		q(J);
	}, [q, J]), /* @__PURE__ */ jsx(Primitive.span, {
		...U,
		ref: X,
		style: { pointerEvents: "none" },
		children: shouldShowPlaceholder(K.value) ? /* @__PURE__ */ jsx(Fragment$1, { children: V }) : L
	});
});
SelectValue.displayName = VALUE_NAME;
var ICON_NAME = "SelectIcon", SelectIcon = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, children: k, ...F } = s;
	return /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...F,
		ref: d,
		children: k || "▼"
	});
});
SelectIcon.displayName = ICON_NAME;
var PORTAL_NAME$1 = "SelectPortal", SelectPortal = (s) => /* @__PURE__ */ jsx(Portal, {
	asChild: !0,
	...s
});
SelectPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "SelectContent", SelectContent = React$1.forwardRef((d, w) => {
	let k = useSelectContext(CONTENT_NAME$1, d.__scopeSelect), [F, L] = React$1.useState();
	if (useLayoutEffect2(() => {
		L(new DocumentFragment());
	}, []), !k.open) {
		let s = F;
		return s ? ReactDOM$1.createPortal(/* @__PURE__ */ jsx(SelectContentProvider, {
			scope: d.__scopeSelect,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: d.__scopeSelect,
				children: /* @__PURE__ */ jsx("div", { children: d.children })
			})
		}), s) : null;
	}
	return /* @__PURE__ */ jsx(SelectContentImpl, {
		...d,
		ref: w
	});
});
SelectContent.displayName = CONTENT_NAME$1;
var CONTENT_MARGIN = 10, [SelectContentProvider, useSelectContentContext] = createSelectContext(CONTENT_NAME$1), CONTENT_IMPL_NAME = "SelectContentImpl", Slot = /* @__PURE__ */ createSlot("SelectContent.RemoveScroll"), SelectContentImpl = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, position: F = "item-aligned", onCloseAutoFocus: L, onEscapeKeyDown: V, onPointerDownOutside: U, side: K, sideOffset: q, align: J, alignOffset: X, arrowPadding: $, collisionBoundary: pA, collisionPadding: mA, sticky: hA, hideWhenDetached: gA, avoidCollisions: _A, ...vA } = d, yA = useSelectContext(CONTENT_NAME$1, k), [bA, xA] = React$1.useState(null), [SA, wA] = React$1.useState(null), TA = useComposedRefs(w, (s) => xA(s)), [EA, DA] = React$1.useState(null), [OA, kA] = React$1.useState(null), AA = useCollection(k), [jA, MA] = React$1.useState(!1), NA = React$1.useRef(!1);
	React$1.useEffect(() => {
		if (bA) return hideOthers(bA);
	}, [bA]), useFocusGuards();
	let PA = React$1.useCallback((s) => {
		let [d, ...w] = AA().map((s) => s.ref.current), [k] = w.slice(-1), F = document.activeElement;
		for (let w of s) if (w === F || (w?.scrollIntoView({ block: "nearest" }), w === d && SA && (SA.scrollTop = 0), w === k && SA && (SA.scrollTop = SA.scrollHeight), w?.focus(), document.activeElement !== F)) return;
	}, [AA, SA]), FA = React$1.useCallback(() => PA([EA, bA]), [
		PA,
		EA,
		bA
	]);
	React$1.useEffect(() => {
		jA && FA();
	}, [jA, FA]);
	let { onOpenChange: IA, triggerPointerDownPosRef: LA } = yA;
	React$1.useEffect(() => {
		if (bA) {
			let s = {
				x: 0,
				y: 0
			}, d = (d) => {
				s = {
					x: Math.abs(Math.round(d.pageX) - (LA.current?.x ?? 0)),
					y: Math.abs(Math.round(d.pageY) - (LA.current?.y ?? 0))
				};
			}, w = (w) => {
				s.x <= 10 && s.y <= 10 ? w.preventDefault() : bA.contains(w.target) || IA(!1), document.removeEventListener("pointermove", d), LA.current = null;
			};
			return LA.current !== null && (document.addEventListener("pointermove", d), document.addEventListener("pointerup", w, {
				capture: !0,
				once: !0
			})), () => {
				document.removeEventListener("pointermove", d), document.removeEventListener("pointerup", w, { capture: !0 });
			};
		}
	}, [
		bA,
		IA,
		LA
	]), React$1.useEffect(() => {
		let s = () => IA(!1);
		return window.addEventListener("blur", s), window.addEventListener("resize", s), () => {
			window.removeEventListener("blur", s), window.removeEventListener("resize", s);
		};
	}, [IA]);
	let [RA, zA] = useTypeaheadSearch((s) => {
		let d = AA().filter((s) => !s.disabled), w = findNextItem(d, s, d.find((s) => s.ref.current === document.activeElement));
		w && setTimeout(() => w.ref.current.focus());
	}), BA = React$1.useCallback((s, d, w) => {
		let k = !NA.current && !w;
		(yA.value !== void 0 && yA.value === d || k) && (DA(s), k && (NA.current = !0));
	}, [yA.value]), VA = React$1.useCallback(() => bA?.focus(), [bA]), HA = React$1.useCallback((s, d, w) => {
		let k = !NA.current && !w;
		(yA.value !== void 0 && yA.value === d || k) && kA(s);
	}, [yA.value]), UA = F === "popper" ? SelectPopperPosition : SelectItemAlignedPosition, WA = UA === SelectPopperPosition ? {
		side: K,
		sideOffset: q,
		align: J,
		alignOffset: X,
		arrowPadding: $,
		collisionBoundary: pA,
		collisionPadding: mA,
		sticky: hA,
		hideWhenDetached: gA,
		avoidCollisions: _A
	} : {};
	return /* @__PURE__ */ jsx(SelectContentProvider, {
		scope: k,
		content: bA,
		viewport: SA,
		onViewportChange: wA,
		itemRefCallback: BA,
		selectedItem: EA,
		onItemLeave: VA,
		itemTextRefCallback: HA,
		focusSelectedItem: FA,
		selectedItemText: OA,
		position: F,
		isPositioned: jA,
		searchRef: RA,
		children: /* @__PURE__ */ jsx(Combination_default, {
			as: Slot,
			allowPinchZoom: !0,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: yA.open,
				onMountAutoFocus: (s) => {
					s.preventDefault();
				},
				onUnmountAutoFocus: composeEventHandlers(L, (s) => {
					yA.trigger?.focus({ preventScroll: !0 }), s.preventDefault();
				}),
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: !0,
					onEscapeKeyDown: V,
					onPointerDownOutside: U,
					onFocusOutside: (s) => s.preventDefault(),
					onDismiss: () => yA.onOpenChange(!1),
					children: /* @__PURE__ */ jsx(UA, {
						role: "listbox",
						id: yA.contentId,
						"data-state": yA.open ? "open" : "closed",
						dir: yA.dir,
						onContextMenu: (s) => s.preventDefault(),
						...vA,
						...WA,
						onPlaced: () => MA(!0),
						ref: TA,
						style: {
							display: "flex",
							flexDirection: "column",
							outline: "none",
							...vA.style
						},
						onKeyDown: composeEventHandlers(vA.onKeyDown, (s) => {
							let d = s.ctrlKey || s.altKey || s.metaKey;
							if (s.key === "Tab" && s.preventDefault(), !d && s.key.length === 1 && zA(s.key), [
								"ArrowUp",
								"ArrowDown",
								"Home",
								"End"
							].includes(s.key)) {
								let d = AA().filter((s) => !s.disabled).map((s) => s.ref.current);
								if (["ArrowUp", "End"].includes(s.key) && (d = d.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(s.key)) {
									let w = s.target, k = d.indexOf(w);
									d = d.slice(k + 1);
								}
								setTimeout(() => PA(d)), s.preventDefault();
							}
						})
					})
				})
			})
		})
	});
});
SelectContentImpl.displayName = CONTENT_IMPL_NAME;
var ITEM_ALIGNED_POSITION_NAME = "SelectItemAlignedPosition", SelectItemAlignedPosition = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, onPlaced: F, ...L } = d, V = useSelectContext(CONTENT_NAME$1, k), U = useSelectContentContext(CONTENT_NAME$1, k), [K, q] = React$1.useState(null), [J, X] = React$1.useState(null), $ = useComposedRefs(w, (s) => X(s)), pA = useCollection(k), mA = React$1.useRef(!1), hA = React$1.useRef(!0), { viewport: gA, selectedItem: _A, selectedItemText: vA, focusSelectedItem: yA } = U, bA = React$1.useCallback(() => {
		if (V.trigger && V.valueNode && K && J && gA && _A && vA) {
			let s = V.trigger.getBoundingClientRect(), d = J.getBoundingClientRect(), w = V.valueNode.getBoundingClientRect(), k = vA.getBoundingClientRect();
			if (V.dir !== "rtl") {
				let F = k.left - d.left, L = w.left - F, V = s.left - L, U = s.width + V, q = Math.max(U, d.width), J = window.innerWidth - CONTENT_MARGIN, X = clamp$2(L, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, J - q)]);
				K.style.minWidth = U + "px", K.style.left = X + "px";
			} else {
				let F = d.right - k.right, L = window.innerWidth - w.right - F, V = window.innerWidth - s.right - L, U = s.width + V, q = Math.max(U, d.width), J = window.innerWidth - CONTENT_MARGIN, X = clamp$2(L, [CONTENT_MARGIN, Math.max(CONTENT_MARGIN, J - q)]);
				K.style.minWidth = U + "px", K.style.right = X + "px";
			}
			let L = pA(), U = window.innerHeight - CONTENT_MARGIN * 2, q = gA.scrollHeight, X = window.getComputedStyle(J), $ = parseInt(X.borderTopWidth, 10), hA = parseInt(X.paddingTop, 10), yA = parseInt(X.borderBottomWidth, 10), bA = parseInt(X.paddingBottom, 10), xA = $ + hA + q + bA + yA, SA = Math.min(_A.offsetHeight * 5, xA), CA = window.getComputedStyle(gA), wA = parseInt(CA.paddingTop, 10), TA = parseInt(CA.paddingBottom, 10), EA = s.top + s.height / 2 - CONTENT_MARGIN, DA = U - EA, OA = _A.offsetHeight / 2, kA = _A.offsetTop + OA, AA = $ + hA + kA, jA = xA - AA;
			if (AA <= EA) {
				let s = L.length > 0 && _A === L[L.length - 1].ref.current;
				K.style.bottom = "0px";
				let d = J.clientHeight - gA.offsetTop - gA.offsetHeight, w = AA + Math.max(DA, OA + (s ? TA : 0) + d + yA);
				K.style.height = w + "px";
			} else {
				let s = L.length > 0 && _A === L[0].ref.current;
				K.style.top = "0px";
				let d = Math.max(EA, $ + gA.offsetTop + (s ? wA : 0) + OA) + jA;
				K.style.height = d + "px", gA.scrollTop = AA - EA + gA.offsetTop;
			}
			K.style.margin = `${CONTENT_MARGIN}px 0`, K.style.minHeight = SA + "px", K.style.maxHeight = U + "px", F?.(), requestAnimationFrame(() => mA.current = !0);
		}
	}, [
		pA,
		V.trigger,
		V.valueNode,
		K,
		J,
		gA,
		_A,
		vA,
		V.dir,
		F
	]);
	useLayoutEffect2(() => bA(), [bA]);
	let [xA, SA] = React$1.useState();
	return useLayoutEffect2(() => {
		J && SA(window.getComputedStyle(J).zIndex);
	}, [J]), /* @__PURE__ */ jsx(SelectViewportProvider, {
		scope: k,
		contentWrapper: K,
		shouldExpandOnScrollRef: mA,
		onScrollButtonChange: React$1.useCallback((s) => {
			s && hA.current === !0 && (bA(), yA?.(), hA.current = !1);
		}, [bA, yA]),
		children: /* @__PURE__ */ jsx("div", {
			ref: q,
			style: {
				display: "flex",
				flexDirection: "column",
				position: "fixed",
				zIndex: xA
			},
			children: /* @__PURE__ */ jsx(Primitive.div, {
				...L,
				ref: $,
				style: {
					boxSizing: "border-box",
					maxHeight: "100%",
					...L.style
				}
			})
		})
	});
});
SelectItemAlignedPosition.displayName = ITEM_ALIGNED_POSITION_NAME;
var POPPER_POSITION_NAME = "SelectPopperPosition", SelectPopperPosition = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, align: k = "start", collisionPadding: F = CONTENT_MARGIN, ...L } = s;
	return /* @__PURE__ */ jsx(Content, {
		...usePopperScope$1(w),
		...L,
		ref: d,
		align: k,
		collisionPadding: F,
		style: {
			boxSizing: "border-box",
			...L.style,
			"--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
			"--radix-select-content-available-width": "var(--radix-popper-available-width)",
			"--radix-select-content-available-height": "var(--radix-popper-available-height)",
			"--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
			"--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
		}
	});
});
SelectPopperPosition.displayName = POPPER_POSITION_NAME;
var [SelectViewportProvider, useSelectViewportContext] = createSelectContext(CONTENT_NAME$1, {}), VIEWPORT_NAME = "SelectViewport", SelectViewport = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, nonce: F, ...L } = d, V = useSelectContentContext(VIEWPORT_NAME, k), U = useSelectViewportContext(VIEWPORT_NAME, k), K = useComposedRefs(w, V.onViewportChange), q = React$1.useRef(0);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}" },
		nonce: F
	}), /* @__PURE__ */ jsx(Collection.Slot, {
		scope: k,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-radix-select-viewport": "",
			role: "presentation",
			...L,
			ref: K,
			style: {
				position: "relative",
				flex: 1,
				overflow: "hidden auto",
				...L.style
			},
			onScroll: composeEventHandlers(L.onScroll, (s) => {
				let d = s.currentTarget, { contentWrapper: w, shouldExpandOnScrollRef: k } = U;
				if (k?.current && w) {
					let s = Math.abs(q.current - d.scrollTop);
					if (s > 0) {
						let k = window.innerHeight - CONTENT_MARGIN * 2, F = parseFloat(w.style.minHeight), L = parseFloat(w.style.height), V = Math.max(F, L);
						if (V < k) {
							let F = V + s, L = Math.min(k, F), U = F - L;
							w.style.height = L + "px", w.style.bottom === "0px" && (d.scrollTop = U > 0 ? U : 0, w.style.justifyContent = "flex-end");
						}
					}
				}
				q.current = d.scrollTop;
			})
		})
	})] });
});
SelectViewport.displayName = VIEWPORT_NAME;
var GROUP_NAME = "SelectGroup", [SelectGroupContextProvider, useSelectGroupContext] = createSelectContext(GROUP_NAME), SelectGroup = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, ...k } = s, F = useId$1();
	return /* @__PURE__ */ jsx(SelectGroupContextProvider, {
		scope: w,
		id: F,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			role: "group",
			"aria-labelledby": F,
			...k,
			ref: d
		})
	});
});
SelectGroup.displayName = GROUP_NAME;
var LABEL_NAME = "SelectLabel", SelectLabel = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, ...k } = s, F = useSelectGroupContext(LABEL_NAME, w);
	return /* @__PURE__ */ jsx(Primitive.div, {
		id: F.id,
		...k,
		ref: d
	});
});
SelectLabel.displayName = LABEL_NAME;
var ITEM_NAME = "SelectItem", [SelectItemContextProvider, useSelectItemContext] = createSelectContext(ITEM_NAME), SelectItem = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, value: F, disabled: L = !1, textValue: V, ...U } = d, K = useSelectContext(ITEM_NAME, k), q = useSelectContentContext(ITEM_NAME, k), J = K.value === F, [X, $] = React$1.useState(V ?? ""), [pA, mA] = React$1.useState(!1), hA = useComposedRefs(w, (s) => q.itemRefCallback?.(s, F, L)), gA = useId$1(), _A = React$1.useRef("touch"), vA = () => {
		L || (K.onValueChange(F), K.onOpenChange(!1));
	};
	if (F === "") throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
	return /* @__PURE__ */ jsx(SelectItemContextProvider, {
		scope: k,
		value: F,
		disabled: L,
		textId: gA,
		isSelected: J,
		onItemTextChange: React$1.useCallback((s) => {
			$((d) => d || (s?.textContent ?? "").trim());
		}, []),
		children: /* @__PURE__ */ jsx(Collection.ItemSlot, {
			scope: k,
			value: F,
			disabled: L,
			textValue: X,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "option",
				"aria-labelledby": gA,
				"data-highlighted": pA ? "" : void 0,
				"aria-selected": J && pA,
				"data-state": J ? "checked" : "unchecked",
				"aria-disabled": L || void 0,
				"data-disabled": L ? "" : void 0,
				tabIndex: L ? void 0 : -1,
				...U,
				ref: hA,
				onFocus: composeEventHandlers(U.onFocus, () => mA(!0)),
				onBlur: composeEventHandlers(U.onBlur, () => mA(!1)),
				onClick: composeEventHandlers(U.onClick, () => {
					_A.current !== "mouse" && vA();
				}),
				onPointerUp: composeEventHandlers(U.onPointerUp, () => {
					_A.current === "mouse" && vA();
				}),
				onPointerDown: composeEventHandlers(U.onPointerDown, (s) => {
					_A.current = s.pointerType;
				}),
				onPointerMove: composeEventHandlers(U.onPointerMove, (s) => {
					_A.current = s.pointerType, L ? q.onItemLeave?.() : _A.current === "mouse" && s.currentTarget.focus({ preventScroll: !0 });
				}),
				onPointerLeave: composeEventHandlers(U.onPointerLeave, (s) => {
					s.currentTarget === document.activeElement && q.onItemLeave?.();
				}),
				onKeyDown: composeEventHandlers(U.onKeyDown, (s) => {
					q.searchRef?.current !== "" && s.key === " " || (SELECTION_KEYS.includes(s.key) && vA(), s.key === " " && s.preventDefault());
				})
			})
		})
	});
});
SelectItem.displayName = ITEM_NAME;
var ITEM_TEXT_NAME = "SelectItemText", SelectItemText = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, className: F, style: L, ...V } = d, U = useSelectContext(ITEM_TEXT_NAME, k), K = useSelectContentContext(ITEM_TEXT_NAME, k), q = useSelectItemContext(ITEM_TEXT_NAME, k), J = useSelectNativeOptionsContext(ITEM_TEXT_NAME, k), [X, $] = React$1.useState(null), pA = useComposedRefs(w, (s) => $(s), q.onItemTextChange, (s) => K.itemTextRefCallback?.(s, q.value, q.disabled)), mA = X?.textContent, hA = React$1.useMemo(() => /* @__PURE__ */ jsx("option", {
		value: q.value,
		disabled: q.disabled,
		children: mA
	}, q.value), [
		q.disabled,
		q.value,
		mA
	]), { onNativeOptionAdd: gA, onNativeOptionRemove: _A } = J;
	return useLayoutEffect2(() => (gA(hA), () => _A(hA)), [
		gA,
		_A,
		hA
	]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Primitive.span, {
		id: q.textId,
		...V,
		ref: pA
	}), q.isSelected && U.valueNode && !U.valueNodeHasChildren ? ReactDOM$1.createPortal(V.children, U.valueNode) : null] });
});
SelectItemText.displayName = ITEM_TEXT_NAME;
var ITEM_INDICATOR_NAME = "SelectItemIndicator", SelectItemIndicator = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, ...k } = s;
	return useSelectItemContext(ITEM_INDICATOR_NAME, w).isSelected ? /* @__PURE__ */ jsx(Primitive.span, {
		"aria-hidden": !0,
		...k,
		ref: d
	}) : null;
});
SelectItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SCROLL_UP_BUTTON_NAME = "SelectScrollUpButton", SelectScrollUpButton = React$1.forwardRef((d, w) => {
	let k = useSelectContentContext(SCROLL_UP_BUTTON_NAME, d.__scopeSelect), F = useSelectViewportContext(SCROLL_UP_BUTTON_NAME, d.__scopeSelect), [L, V] = React$1.useState(!1), U = useComposedRefs(w, F.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (k.viewport && k.isPositioned) {
			let s = function() {
				V(d.scrollTop > 0);
			}, d = k.viewport;
			return s(), d.addEventListener("scroll", s), () => d.removeEventListener("scroll", s);
		}
	}, [k.viewport, k.isPositioned]), L ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...d,
		ref: U,
		onAutoScroll: () => {
			let { viewport: s, selectedItem: d } = k;
			s && d && (s.scrollTop -= d.offsetHeight);
		}
	}) : null;
});
SelectScrollUpButton.displayName = SCROLL_UP_BUTTON_NAME;
var SCROLL_DOWN_BUTTON_NAME = "SelectScrollDownButton", SelectScrollDownButton = React$1.forwardRef((d, w) => {
	let k = useSelectContentContext(SCROLL_DOWN_BUTTON_NAME, d.__scopeSelect), F = useSelectViewportContext(SCROLL_DOWN_BUTTON_NAME, d.__scopeSelect), [L, V] = React$1.useState(!1), U = useComposedRefs(w, F.onScrollButtonChange);
	return useLayoutEffect2(() => {
		if (k.viewport && k.isPositioned) {
			let s = function() {
				let s = d.scrollHeight - d.clientHeight;
				V(Math.ceil(d.scrollTop) < s);
			}, d = k.viewport;
			return s(), d.addEventListener("scroll", s), () => d.removeEventListener("scroll", s);
		}
	}, [k.viewport, k.isPositioned]), L ? /* @__PURE__ */ jsx(SelectScrollButtonImpl, {
		...d,
		ref: U,
		onAutoScroll: () => {
			let { viewport: s, selectedItem: d } = k;
			s && d && (s.scrollTop += d.offsetHeight);
		}
	}) : null;
});
SelectScrollDownButton.displayName = SCROLL_DOWN_BUTTON_NAME;
var SelectScrollButtonImpl = React$1.forwardRef((d, w) => {
	let { __scopeSelect: k, onAutoScroll: F, ...L } = d, V = useSelectContentContext("SelectScrollButton", k), U = React$1.useRef(null), K = useCollection(k), q = React$1.useCallback(() => {
		U.current !== null && (window.clearInterval(U.current), U.current = null);
	}, []);
	return React$1.useEffect(() => () => q(), [q]), useLayoutEffect2(() => {
		K().find((s) => s.ref.current === document.activeElement)?.ref.current?.scrollIntoView({ block: "nearest" });
	}, [K]), /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...L,
		ref: w,
		style: {
			flexShrink: 0,
			...L.style
		},
		onPointerDown: composeEventHandlers(L.onPointerDown, () => {
			U.current === null && (U.current = window.setInterval(F, 50));
		}),
		onPointerMove: composeEventHandlers(L.onPointerMove, () => {
			V.onItemLeave?.(), U.current === null && (U.current = window.setInterval(F, 50));
		}),
		onPointerLeave: composeEventHandlers(L.onPointerLeave, () => {
			q();
		})
	});
}), SEPARATOR_NAME = "SelectSeparator", SelectSeparator = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, ...k } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		"aria-hidden": !0,
		...k,
		ref: d
	});
});
SelectSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME$1 = "SelectArrow", SelectArrow = React$1.forwardRef((s, d) => {
	let { __scopeSelect: w, ...k } = s, F = usePopperScope$1(w), L = useSelectContext(ARROW_NAME$1, w), V = useSelectContentContext(ARROW_NAME$1, w);
	return L.open && V.position === "popper" ? /* @__PURE__ */ jsx(Arrow, {
		...F,
		...k,
		ref: d
	}) : null;
});
SelectArrow.displayName = ARROW_NAME$1;
var BUBBLE_INPUT_NAME = "SelectBubbleInput", SelectBubbleInput = React$1.forwardRef(({ __scopeSelect: d, value: w, ...k }, F) => {
	let L = React$1.useRef(null), V = useComposedRefs(F, L), U = usePrevious(w);
	return React$1.useEffect(() => {
		let s = L.current;
		if (!s) return;
		let d = window.HTMLSelectElement.prototype, k = Object.getOwnPropertyDescriptor(d, "value").set;
		if (U !== w && k) {
			let d = new Event("change", { bubbles: !0 });
			k.call(s, w), s.dispatchEvent(d);
		}
	}, [U, w]), /* @__PURE__ */ jsx(Primitive.select, {
		...k,
		style: {
			...VISUALLY_HIDDEN_STYLES,
			...k.style
		},
		ref: V,
		defaultValue: w
	});
});
SelectBubbleInput.displayName = BUBBLE_INPUT_NAME;
function shouldShowPlaceholder(s) {
	return s === "" || s === void 0;
}
function useTypeaheadSearch(d) {
	let w = useCallbackRef(d), k = React$1.useRef(""), F = React$1.useRef(0), L = React$1.useCallback((s) => {
		let d = k.current + s;
		w(d), (function s(d) {
			k.current = d, window.clearTimeout(F.current), d !== "" && (F.current = window.setTimeout(() => s(""), 1e3));
		})(d);
	}, [w]), V = React$1.useCallback(() => {
		k.current = "", window.clearTimeout(F.current);
	}, []);
	return React$1.useEffect(() => () => window.clearTimeout(F.current), []), [
		k,
		L,
		V
	];
}
function findNextItem(s, d, w) {
	let k = d.length > 1 && Array.from(d).every((s) => s === d[0]) ? d[0] : d, F = w ? s.indexOf(w) : -1, L = wrapArray(s, Math.max(F, 0));
	k.length === 1 && (L = L.filter((s) => s !== w));
	let V = L.find((s) => s.textValue.toLowerCase().startsWith(k.toLowerCase()));
	return V === w ? void 0 : V;
}
function wrapArray(s, d) {
	return s.map((w, k) => s[(d + k) % s.length]);
}
var Root2 = Select, Trigger = SelectTrigger, Value = SelectValue, Icon = SelectIcon, Portal$1 = SelectPortal, Content2 = SelectContent, Viewport = SelectViewport, Group = SelectGroup, Label = SelectLabel, Item = SelectItem, ItemText = SelectItemText, ItemIndicator = SelectItemIndicator, Separator = SelectSeparator, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider = (d) => {
	let { __scopeTooltip: w, delayDuration: k = DEFAULT_DELAY_DURATION, skipDelayDuration: F = 300, disableHoverableContent: L = !1, children: V } = d, U = React$1.useRef(!0), K = React$1.useRef(!1), q = React$1.useRef(0);
	return React$1.useEffect(() => {
		let s = q.current;
		return () => window.clearTimeout(s);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: w,
		isOpenDelayedRef: U,
		delayDuration: k,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(q.current), U.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(q.current), q.current = window.setTimeout(() => U.current = !0, F);
		}, [F]),
		isPointerInTransitRef: K,
		onPointerInTransitChange: React$1.useCallback((s) => {
			K.current = s;
		}, []),
		disableHoverableContent: L,
		children: V
	});
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip = (d) => {
	let { __scopeTooltip: w, children: k, open: F, defaultOpen: L, onOpenChange: V, disableHoverableContent: U, delayDuration: K } = d, q = useTooltipProviderContext(TOOLTIP_NAME, d.__scopeTooltip), J = usePopperScope(w), [X, $] = React$1.useState(null), pA = useId$1(), mA = React$1.useRef(0), hA = U ?? q.disableHoverableContent, gA = K ?? q.delayDuration, _A = React$1.useRef(!1), [vA, yA] = useControllableState({
		prop: F,
		defaultProp: L ?? !1,
		onChange: (s) => {
			s ? (q.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : q.onClose(), V?.(s);
		},
		caller: TOOLTIP_NAME
	}), bA = React$1.useMemo(() => vA ? _A.current ? "delayed-open" : "instant-open" : "closed", [vA]), xA = React$1.useCallback(() => {
		window.clearTimeout(mA.current), mA.current = 0, _A.current = !1, yA(!0);
	}, [yA]), SA = React$1.useCallback(() => {
		window.clearTimeout(mA.current), mA.current = 0, yA(!1);
	}, [yA]), wA = React$1.useCallback(() => {
		window.clearTimeout(mA.current), mA.current = window.setTimeout(() => {
			_A.current = !0, yA(!0), mA.current = 0;
		}, gA);
	}, [gA, yA]);
	return React$1.useEffect(() => () => {
		mA.current &&= (window.clearTimeout(mA.current), 0);
	}, []), /* @__PURE__ */ jsx(Root2$3, {
		...J,
		children: /* @__PURE__ */ jsx(TooltipContextProvider, {
			scope: w,
			contentId: pA,
			open: vA,
			stateAttribute: bA,
			trigger: X,
			onTriggerChange: $,
			onTriggerEnter: React$1.useCallback(() => {
				q.isOpenDelayedRef.current ? wA() : xA();
			}, [
				q.isOpenDelayedRef,
				wA,
				xA
			]),
			onTriggerLeave: React$1.useCallback(() => {
				hA ? SA() : (window.clearTimeout(mA.current), mA.current = 0);
			}, [SA, hA]),
			onOpen: xA,
			onClose: SA,
			disableHoverableContent: hA,
			children: k
		})
	});
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger = React$1.forwardRef((d, w) => {
	let { __scopeTooltip: k, ...F } = d, L = useTooltipContext(TRIGGER_NAME, k), V = useTooltipProviderContext(TRIGGER_NAME, k), U = usePopperScope(k), K = useComposedRefs(w, React$1.useRef(null), L.onTriggerChange), q = React$1.useRef(!1), J = React$1.useRef(!1), X = React$1.useCallback(() => q.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", X), [X]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...U,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": L.open ? L.contentId : void 0,
			"data-state": L.stateAttribute,
			...F,
			ref: K,
			onPointerMove: composeEventHandlers(d.onPointerMove, (s) => {
				s.pointerType !== "touch" && !J.current && !V.isPointerInTransitRef.current && (L.onTriggerEnter(), J.current = !0);
			}),
			onPointerLeave: composeEventHandlers(d.onPointerLeave, () => {
				L.onTriggerLeave(), J.current = !1;
			}),
			onPointerDown: composeEventHandlers(d.onPointerDown, () => {
				L.open && L.onClose(), q.current = !0, document.addEventListener("pointerup", X, { once: !0 });
			}),
			onFocus: composeEventHandlers(d.onFocus, () => {
				q.current || L.onOpen();
			}),
			onBlur: composeEventHandlers(d.onBlur, L.onClose),
			onClick: composeEventHandlers(d.onClick, L.onClose)
		})
	});
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (s) => {
	let { __scopeTooltip: d, forceMount: w, children: k, container: F } = s, L = useTooltipContext(PORTAL_NAME, d);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: d,
		forceMount: w,
		children: /* @__PURE__ */ jsx(Presence, {
			present: w || L.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: F,
				children: k
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent = React$1.forwardRef((s, d) => {
	let w = usePortalContext(CONTENT_NAME, s.__scopeTooltip), { forceMount: k = w.forceMount, side: F = "top", ...L } = s, V = useTooltipContext(CONTENT_NAME, s.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: k || V.open,
		children: V.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: F,
			...L,
			ref: d
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: F,
			...L,
			ref: d
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((d, w) => {
	let k = useTooltipContext(CONTENT_NAME, d.__scopeTooltip), F = useTooltipProviderContext(CONTENT_NAME, d.__scopeTooltip), L = React$1.useRef(null), V = useComposedRefs(w, L), [U, K] = React$1.useState(null), { trigger: q, onClose: J } = k, X = L.current, { onPointerInTransitChange: $ } = F, pA = React$1.useCallback(() => {
		K(null), $(!1);
	}, [$]), mA = React$1.useCallback((s, d) => {
		let w = s.currentTarget, k = {
			x: s.clientX,
			y: s.clientY
		}, F = getPaddedExitPoints(k, getExitSideFromRect(k, w.getBoundingClientRect())), L = getPointsFromRect(d.getBoundingClientRect());
		K(getHull([...F, ...L])), $(!0);
	}, [$]);
	return React$1.useEffect(() => () => pA(), [pA]), React$1.useEffect(() => {
		if (q && X) {
			let s = (s) => mA(s, X), d = (s) => mA(s, q);
			return q.addEventListener("pointerleave", s), X.addEventListener("pointerleave", d), () => {
				q.removeEventListener("pointerleave", s), X.removeEventListener("pointerleave", d);
			};
		}
	}, [
		q,
		X,
		mA,
		pA
	]), React$1.useEffect(() => {
		if (U) {
			let s = (s) => {
				let d = s.target, w = {
					x: s.clientX,
					y: s.clientY
				}, k = q?.contains(d) || X?.contains(d), F = !isPointInPolygon(w, U);
				k ? pA() : F && (pA(), J());
			};
			return document.addEventListener("pointermove", s), () => document.removeEventListener("pointermove", s);
		}
	}, [
		q,
		X,
		U,
		J,
		pA
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		...d,
		ref: V
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((d, w) => {
	let { __scopeTooltip: k, children: F, "aria-label": L, onEscapeKeyDown: V, onPointerDownOutside: U, ...K } = d, q = useTooltipContext(CONTENT_NAME, k), J = usePopperScope(k), { onClose: X } = q;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, X), () => document.removeEventListener(TOOLTIP_OPEN, X)), [X]), React$1.useEffect(() => {
		if (q.trigger) {
			let s = (s) => {
				s.target?.contains(q.trigger) && X();
			};
			return window.addEventListener("scroll", s, { capture: !0 }), () => window.removeEventListener("scroll", s, { capture: !0 });
		}
	}, [q.trigger, X]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: V,
		onPointerDownOutside: U,
		onFocusOutside: (s) => s.preventDefault(),
		onDismiss: X,
		children: /* @__PURE__ */ jsxs(Content, {
			"data-state": q.stateAttribute,
			...J,
			...K,
			ref: w,
			style: {
				...K.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: F }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: k,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root$4, {
					id: q.contentId,
					role: "tooltip",
					children: L || F
				})
			})]
		})
	});
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((s, d) => {
	let { __scopeTooltip: w, ...k } = s, F = usePopperScope(w);
	return useVisuallyHiddenContentContext(ARROW_NAME, w).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...F,
		...k,
		ref: d
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(s, d) {
	let w = Math.abs(d.top - s.y), k = Math.abs(d.bottom - s.y), F = Math.abs(d.right - s.x), L = Math.abs(d.left - s.x);
	switch (Math.min(w, k, F, L)) {
		case L: return "left";
		case F: return "right";
		case w: return "top";
		case k: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(s, d, w = 5) {
	let k = [];
	switch (d) {
		case "top":
			k.push({
				x: s.x - w,
				y: s.y + w
			}, {
				x: s.x + w,
				y: s.y + w
			});
			break;
		case "bottom":
			k.push({
				x: s.x - w,
				y: s.y - w
			}, {
				x: s.x + w,
				y: s.y - w
			});
			break;
		case "left":
			k.push({
				x: s.x + w,
				y: s.y - w
			}, {
				x: s.x + w,
				y: s.y + w
			});
			break;
		case "right":
			k.push({
				x: s.x - w,
				y: s.y - w
			}, {
				x: s.x - w,
				y: s.y + w
			});
			break;
	}
	return k;
}
function getPointsFromRect(s) {
	let { top: d, right: w, bottom: k, left: F } = s;
	return [
		{
			x: F,
			y: d
		},
		{
			x: w,
			y: d
		},
		{
			x: w,
			y: k
		},
		{
			x: F,
			y: k
		}
	];
}
function isPointInPolygon(s, d) {
	let { x: w, y: k } = s, F = !1;
	for (let s = 0, L = d.length - 1; s < d.length; L = s++) {
		let V = d[s], U = d[L], K = V.x, q = V.y, J = U.x, X = U.y;
		q > k != X > k && w < (J - K) * (k - q) / (X - q) + K && (F = !F);
	}
	return F;
}
function getHull(s) {
	let d = s.slice();
	return d.sort((s, d) => s.x < d.x ? -1 : s.x > d.x ? 1 : s.y < d.y ? -1 : s.y > d.y ? 1 : 0), getHullPresorted(d);
}
function getHullPresorted(s) {
	if (s.length <= 1) return s.slice();
	let d = [];
	for (let w = 0; w < s.length; w++) {
		let k = s[w];
		for (; d.length >= 2;) {
			let s = d[d.length - 1], w = d[d.length - 2];
			if ((s.x - w.x) * (k.y - w.y) >= (s.y - w.y) * (k.x - w.x)) d.pop();
			else break;
		}
		d.push(k);
	}
	d.pop();
	let w = [];
	for (let d = s.length - 1; d >= 0; d--) {
		let k = s[d];
		for (; w.length >= 2;) {
			let s = w[w.length - 1], d = w[w.length - 2];
			if ((s.x - d.x) * (k.y - d.y) >= (s.y - d.y) * (k.x - d.x)) w.pop();
			else break;
		}
		w.push(k);
	}
	return w.pop(), d.length === 1 && w.length === 1 && d[0].x === w[0].x && d[0].y === w[0].y ? d : d.concat(w);
}
var Provider = TooltipProvider, require_classnames = /* @__PURE__ */ __commonJSMin(((s, d) => {
	(function() {
		var s = {}.hasOwnProperty;
		function w() {
			for (var s = "", d = 0; d < arguments.length; d++) {
				var w = arguments[d];
				w && (s = F(s, k(w)));
			}
			return s;
		}
		function k(d) {
			if (typeof d == "string" || typeof d == "number") return d;
			if (typeof d != "object") return "";
			if (Array.isArray(d)) return w.apply(null, d);
			if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]")) return d.toString();
			var k = "";
			for (var L in d) s.call(d, L) && d[L] && (k = F(k, L));
			return k;
		}
		function F(s, d) {
			return d ? s ? s + " " + d : s + d : s;
		}
		d !== void 0 && d.exports ? (w.default = w, d.exports = w) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return w;
		}) : window.classNames = w;
	})();
})), o$4 = { asChild: { type: "boolean" } }, t$4 = {
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
}, e$4 = {
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
}, r$13 = [
	"1",
	"2",
	"3",
	"4"
], s$1 = {
	...o$4,
	align: {
		type: "enum",
		className: "rt-r-align",
		values: ["start", "center"],
		default: "center"
	},
	size: {
		type: "enum",
		className: "rt-r-size",
		values: r$13,
		default: "3",
		responsive: !0
	},
	width: t$4.width,
	minWidth: t$4.minWidth,
	maxWidth: {
		...t$4.maxWidth,
		default: "600px"
	},
	...e$4
}, o$8 = /* @__PURE__ */ "gray.gold.bronze.brown.yellow.amber.orange.tomato.red.ruby.crimson.pink.plum.purple.violet.iris.indigo.blue.cyan.teal.jade.green.grass.lime.mint.sky".split("."), e$7 = [
	"auto",
	"gray",
	"mauve",
	"slate",
	"sage",
	"olive",
	"sand"
], r$2 = { color: {
	type: "enum",
	values: o$8,
	default: void 0
} }, s$8 = { color: {
	type: "enum",
	values: o$8,
	default: ""
} }, o$3 = { highContrast: {
	type: "boolean",
	className: "rt-high-contrast",
	default: void 0
} }, r$11 = { trim: {
	type: "enum",
	className: "rt-r-lt",
	values: [
		"normal",
		"start",
		"end",
		"both"
	],
	responsive: !0
} }, t$7 = { align: {
	type: "enum",
	className: "rt-r-ta",
	values: [
		"left",
		"center",
		"right"
	],
	responsive: !0
} }, r$12 = { wrap: {
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
} }, t$8 = { weight: {
	type: "enum",
	className: "rt-r-weight",
	values: [
		"light",
		"regular",
		"medium",
		"bold"
	],
	responsive: !0
} }, m$3 = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
], a$10 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], n$8 = {
	as: {
		type: "enum",
		values: m$3,
		default: "h1"
	},
	...o$4,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: a$10,
		default: "6",
		responsive: !0
	},
	...t$8,
	...t$7,
	...r$11,
	...e$9,
	...r$12,
	...r$2,
	...o$3
}, e$11 = [
	"initial",
	"xs",
	"sm",
	"md",
	"lg",
	"xl"
];
function e$12(s, d) {
	return Object.prototype.hasOwnProperty.call(s, d);
}
function i$8(s) {
	return typeof s == "object" && Object.keys(s).some((s) => e$11.includes(s));
}
function R$3({ className: s, customProperties: d, ...w }) {
	return [g$3({
		allowArbitraryValues: !0,
		className: s,
		...w
	}), m$2({
		customProperties: d,
		...w
	})];
}
function g$3({ allowArbitraryValues: s, value: d, className: w, propValues: k, parseValue: F = (s) => s }) {
	let L = [];
	if (d) {
		if (typeof d == "string" && k.includes(d)) return l$4(w, d, F);
		if (i$8(d)) {
			let V = d;
			for (let d in V) {
				if (!e$12(V, d) || !e$11.includes(d)) continue;
				let U = V[d];
				if (U !== void 0) {
					if (k.includes(U)) {
						let s = l$4(w, U, F), k = d === "initial" ? s : `${d}:${s}`;
						L.push(k);
					} else if (s) {
						let s = d === "initial" ? w : `${d}:${w}`;
						L.push(s);
					}
				}
			}
			return L.join(" ");
		}
		if (s) return w;
	}
}
function l$4(s, d, w) {
	let k = s ? "-" : "", F = w(d), L = F?.startsWith("-");
	return `${L ? "-" : ""}${s}${k}${L ? F?.substring(1) : F}`;
}
function m$2({ customProperties: s, value: d, propValues: w, parseValue: k = (s) => s }) {
	let F = {};
	if (!(!d || typeof d == "string" && w.includes(d))) {
		if (typeof d == "string" && (F = Object.fromEntries(s.map((s) => [s, d]))), i$8(d)) {
			let k = d;
			for (let d in k) {
				if (!e$12(k, d) || !e$11.includes(d)) continue;
				let L = k[d];
				if (!w.includes(L)) for (let w of s) F = {
					[d === "initial" ? w : `${w}-${d}`]: L,
					...F
				};
			}
		}
		for (let s in F) {
			let d = F[s];
			d !== void 0 && (F[s] = k(d));
		}
		return F;
	}
}
function l$1(...s) {
	let d = {};
	for (let w of s) w && (d = {
		...d,
		...w
	});
	return Object.keys(d).length ? d : void 0;
}
var import_classnames$17 = /* @__PURE__ */ __toESM(require_classnames());
function N$1(...s) {
	return Object.assign({}, ...s);
}
function v(s, ...d) {
	let w, k, F = { ...s }, L = N$1(...d);
	for (let s in L) {
		let d = F[s], V = L[s];
		if (V.default !== void 0 && d === void 0 && (d = V.default), V.type === "enum" && ![V.default, ...V.values].includes(d) && !i$8(d) && (d = V.default), F[s] = d, "className" in V && V.className) {
			delete F[s];
			let L = "responsive" in V;
			if (!d || i$8(d) && !L) continue;
			if (i$8(d) && (V.default !== void 0 && d.initial === void 0 && (d.initial = V.default), V.type === "enum" && ([V.default, ...V.values].includes(d.initial) || (d.initial = V.default))), V.type === "enum") {
				let s = g$3({
					allowArbitraryValues: !1,
					value: d,
					className: V.className,
					propValues: V.values,
					parseValue: V.parseValue
				});
				w = (0, import_classnames$17.default)(w, s);
				continue;
			}
			if (V.type === "string" || V.type === "enum | string") {
				let s = V.type === "string" ? [] : V.values, [F, L] = R$3({
					className: V.className,
					customProperties: V.customProperties,
					propValues: s,
					parseValue: V.parseValue,
					value: d
				});
				k = l$1(k, L), w = (0, import_classnames$17.default)(w, F);
				continue;
			}
			if (V.type === "boolean" && d) {
				w = (0, import_classnames$17.default)(w, V.className);
				continue;
			}
		}
	}
	return F.className = (0, import_classnames$17.default)(w, s.className), F.style = l$1(k, s.style), F;
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
}, import_classnames$16 = /* @__PURE__ */ __toESM(require_classnames()), r$4 = React$1.forwardRef((d, w) => {
	let { children: k, className: F, asChild: L, as: V = "h1", color: U, ...K } = v(d, n$8, r$1);
	return React$1.createElement(Slot$3, {
		"data-accent-color": U,
		...K,
		ref: w,
		className: (0, import_classnames$16.default)("rt-Heading", F)
	}, L ? k : React$1.createElement(V, null, k));
});
r$4.displayName = "Heading";
var m$1 = [
	"span",
	"div",
	"label",
	"p"
], a$9 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], n$7 = {
	as: {
		type: "enum",
		values: m$1,
		default: "span"
	},
	...o$4,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: a$9,
		responsive: !0
	},
	...t$8,
	...t$7,
	...r$11,
	...e$9,
	...r$12,
	...r$2,
	...o$3
}, import_classnames$15 = /* @__PURE__ */ __toESM(require_classnames()), p$2 = React$1.forwardRef((d, w) => {
	let { children: k, className: F, asChild: L, as: V = "span", color: U, ...K } = v(d, n$7, r$1);
	return React$1.createElement(Slot$3, {
		"data-accent-color": U,
		...K,
		ref: w,
		className: (0, import_classnames$15.default)("rt-Text", F)
	}, L ? k : React$1.createElement(V, null, k));
});
p$2.displayName = "Text";
function a$8(s) {
	switch (s) {
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
} }, p$12 = [
	"inherit",
	"light",
	"dark"
], t$6 = ["solid", "translucent"], n$6 = [
	"90%",
	"95%",
	"100%",
	"105%",
	"110%"
], s$10 = {
	...o$4,
	hasBackground: {
		type: "boolean",
		default: !0
	},
	appearance: {
		type: "enum",
		values: p$12,
		default: "inherit"
	},
	accentColor: {
		type: "enum",
		values: o$8,
		default: "indigo"
	},
	grayColor: {
		type: "enum",
		values: e$7,
		default: "auto"
	},
	panelBackground: {
		type: "enum",
		values: t$6,
		default: "translucent"
	},
	radius: {
		type: "enum",
		values: e$8,
		default: "medium"
	},
	scaling: {
		type: "enum",
		values: n$6,
		default: "100%"
	}
}, import_classnames$14 = /* @__PURE__ */ __toESM(require_classnames()), d$4 = () => {}, P = React$1.createContext(void 0);
function H$1() {
	let d = React$1.useContext(P);
	if (d === void 0) throw Error("`useThemeContext` must be used within a `Theme`");
	return d;
}
var R = React$1.forwardRef((d, w) => React$1.useContext(P) === void 0 ? React$1.createElement(Provider, { delayDuration: 200 }, React$1.createElement(Provider$1, { dir: "ltr" }, React$1.createElement(I$3, {
	...d,
	ref: w
}))) : React$1.createElement(A$1, {
	...d,
	ref: w
}));
R.displayName = "Theme";
var I$3 = React$1.forwardRef((d, w) => {
	let { appearance: k = s$10.appearance.default, accentColor: F = s$10.accentColor.default, grayColor: L = s$10.grayColor.default, panelBackground: V = s$10.panelBackground.default, radius: U = s$10.radius.default, scaling: K = s$10.scaling.default, hasBackground: q = s$10.hasBackground.default, ...J } = d, [X, $] = React$1.useState(k);
	React$1.useEffect(() => $(k), [k]);
	let [pA, mA] = React$1.useState(F);
	React$1.useEffect(() => mA(F), [F]);
	let [hA, gA] = React$1.useState(L);
	React$1.useEffect(() => gA(L), [L]);
	let [_A, vA] = React$1.useState(V);
	React$1.useEffect(() => vA(V), [V]);
	let [yA, bA] = React$1.useState(U);
	React$1.useEffect(() => bA(U), [U]);
	let [xA, SA] = React$1.useState(K);
	return React$1.useEffect(() => SA(K), [K]), React$1.createElement(A$1, {
		...J,
		ref: w,
		isRoot: !0,
		hasBackground: q,
		appearance: X,
		accentColor: pA,
		grayColor: hA,
		panelBackground: _A,
		radius: yA,
		scaling: xA,
		onAppearanceChange: $,
		onAccentColorChange: mA,
		onGrayColorChange: gA,
		onPanelBackgroundChange: vA,
		onRadiusChange: bA,
		onScalingChange: SA
	});
});
I$3.displayName = "ThemeRoot";
var A$1 = React$1.forwardRef((d, w) => {
	let k = React$1.useContext(P), { asChild: F, isRoot: L, hasBackground: V, appearance: U = k?.appearance ?? s$10.appearance.default, accentColor: K = k?.accentColor ?? s$10.accentColor.default, grayColor: q = k?.resolvedGrayColor ?? s$10.grayColor.default, panelBackground: J = k?.panelBackground ?? s$10.panelBackground.default, radius: X = k?.radius ?? s$10.radius.default, scaling: $ = k?.scaling ?? s$10.scaling.default, onAppearanceChange: pA = d$4, onAccentColorChange: mA = d$4, onGrayColorChange: hA = d$4, onPanelBackgroundChange: gA = d$4, onRadiusChange: _A = d$4, onScalingChange: vA = d$4, ...yA } = d, bA = F ? Slot$3 : "div", xA = q === "auto" ? a$8(K) : q, SA = d.appearance === "light" || d.appearance === "dark", CA = V === void 0 ? L || SA : V;
	return React$1.createElement(P.Provider, { value: React$1.useMemo(() => ({
		appearance: U,
		accentColor: K,
		grayColor: q,
		resolvedGrayColor: xA,
		panelBackground: J,
		radius: X,
		scaling: $,
		onAppearanceChange: pA,
		onAccentColorChange: mA,
		onGrayColorChange: hA,
		onPanelBackgroundChange: gA,
		onRadiusChange: _A,
		onScalingChange: vA
	}), [
		U,
		K,
		q,
		xA,
		J,
		X,
		$,
		pA,
		mA,
		hA,
		gA,
		_A,
		vA
	]) }, React$1.createElement(bA, {
		"data-is-root-theme": L ? "true" : "false",
		"data-accent-color": K,
		"data-gray-color": xA,
		"data-has-background": CA ? "true" : "false",
		"data-panel-background": J,
		"data-radius": X,
		"data-scaling": $,
		ref: w,
		...yA,
		className: (0, import_classnames$14.default)("radix-themes", {
			light: U === "light",
			dark: U === "dark"
		}, yA.className)
	}));
});
A$1.displayName = "ThemeImpl";
var a$2 = (d) => {
	if (!React$1.isValidElement(d)) throw Error(`Expected a single React Element child, but got: ${React$1.Children.toArray(d).map((s) => typeof s == "object" && "type" in s && typeof s.type == "string" ? s.type : typeof s).join(", ")}`);
	return d;
};
function d$2(d, w) {
	let { asChild: k, children: F } = d;
	if (!k) return typeof w == "function" ? w(F) : w;
	let L = React$1.Children.only(F);
	return React$1.cloneElement(L, { children: typeof w == "function" ? w(L.props.children) : w });
}
var t$5 = [
	"1",
	"2",
	"3"
], a$7 = [
	"solid",
	"soft",
	"surface",
	"outline"
], p$11 = {
	...o$4,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: t$5,
		default: "1",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: a$7,
		default: "soft"
	},
	...s$8,
	...o$3,
	...r$3
}, import_classnames$13 = /* @__PURE__ */ __toESM(require_classnames()), e = React$1.forwardRef((d, w) => {
	let { asChild: k, className: F, color: L, radius: V, ...U } = v(d, p$11, r$1), K = k ? Slot$3 : "span";
	return React$1.createElement(K, {
		"data-accent-color": L,
		"data-radius": V,
		...U,
		ref: w,
		className: (0, import_classnames$13.default)("rt-reset", "rt-Badge", F)
	});
});
e.displayName = "Badge";
var e$2 = Slot$3, s$9 = ["div", "span"], o$7 = [
	"none",
	"inline",
	"inline-block",
	"block",
	"contents"
], p$9 = {
	as: {
		type: "enum",
		values: s$9,
		default: "div"
	},
	...o$4,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: o$7,
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
], p$3 = {
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
}, r$9 = [
	"visible",
	"hidden",
	"clip",
	"scroll",
	"auto"
], i$7 = [
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
], p$10 = ["0", "1"], n$5 = ["0", "1"], u$3 = {
	...p$3,
	...t$4,
	...e$4,
	position: {
		type: "enum",
		className: "rt-r-position",
		values: i$7,
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
		values: r$9,
		responsive: !0
	},
	overflowX: {
		type: "enum",
		className: "rt-r-ox",
		values: r$9,
		responsive: !0
	},
	overflowY: {
		type: "enum",
		className: "rt-r-oy",
		values: r$9,
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
		values: p$10,
		responsive: !0
	},
	flexGrow: {
		type: "enum | string",
		className: "rt-r-fg",
		customProperties: ["--flex-grow"],
		values: n$5,
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
}, import_classnames$12 = /* @__PURE__ */ __toESM(require_classnames()), p$1 = React$1.forwardRef((d, w) => {
	let { className: k, asChild: F, as: L = "div", ...V } = v(d, p$9, u$3, r$1);
	return React$1.createElement(F ? e$2 : L, {
		...V,
		ref: w,
		className: (0, import_classnames$12.default)("rt-Box", k)
	});
});
p$1.displayName = "Box";
var t$3 = [
	"1",
	"2",
	"3",
	"4"
], a$6 = [
	"classic",
	"solid",
	"soft",
	"surface",
	"outline",
	"ghost"
], i$6 = {
	...o$4,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: t$3,
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: a$6,
		default: "solid"
	},
	...s$8,
	...o$3,
	...r$3,
	loading: {
		type: "boolean",
		className: "rt-loading",
		default: !1
	}
}, e$3 = [
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
], p$7 = {
	gap: {
		type: "enum | string",
		className: "rt-r-gap",
		customProperties: ["--gap"],
		values: e$3,
		responsive: !0
	},
	gapX: {
		type: "enum | string",
		className: "rt-r-cg",
		customProperties: ["--column-gap"],
		values: e$3,
		responsive: !0
	},
	gapY: {
		type: "enum | string",
		className: "rt-r-rg",
		customProperties: ["--row-gap"],
		values: e$3,
		responsive: !0
	}
}, t$2 = ["div", "span"], p$8 = [
	"none",
	"inline-flex",
	"flex"
], a$5 = [
	"row",
	"column",
	"row-reverse",
	"column-reverse"
], o$6 = [
	"start",
	"center",
	"end",
	"baseline",
	"stretch"
], n$3 = [
	"start",
	"center",
	"end",
	"between"
], l$2 = [
	"nowrap",
	"wrap",
	"wrap-reverse"
], u$1 = {
	as: {
		type: "enum",
		values: t$2,
		default: "div"
	},
	...o$4,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: p$8,
		responsive: !0
	},
	direction: {
		type: "enum",
		className: "rt-r-fd",
		values: a$5,
		responsive: !0
	},
	align: {
		type: "enum",
		className: "rt-r-ai",
		values: o$6,
		responsive: !0
	},
	justify: {
		type: "enum",
		className: "rt-r-jc",
		values: n$3,
		parseValue: f$4,
		responsive: !0
	},
	wrap: {
		type: "enum",
		className: "rt-r-fw",
		values: l$2,
		responsive: !0
	},
	...p$7
};
function f$4(s) {
	return s === "between" ? "space-between" : s;
}
var import_classnames$11 = /* @__PURE__ */ __toESM(require_classnames()), p = React$1.forwardRef((d, w) => {
	let { className: k, asChild: F, as: L = "div", ...V } = v(d, u$1, u$3, r$1);
	return React$1.createElement(F ? e$2 : L, {
		...V,
		ref: w,
		className: (0, import_classnames$11.default)("rt-Flex", k)
	});
});
p.displayName = "Flex";
var s$7 = {
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
}, import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames()), s$5 = React$1.forwardRef((d, w) => {
	let { className: k, children: F, loading: L, ...V } = v(d, s$7, r$1);
	if (!L) return F;
	let U = React$1.createElement("span", {
		...V,
		ref: w,
		className: (0, import_classnames$10.default)("rt-Spinner", k)
	}, React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }));
	return F === void 0 ? U : React$1.createElement(p, {
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
	}, F), React$1.createElement(p, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, U))));
});
s$5.displayName = "Spinner";
var d$3 = Root$4;
function s$6(s, d) {
	if (s !== void 0) return typeof s == "string" ? d(s) : Object.fromEntries(Object.entries(s).map(([s, w]) => [s, d(w)]));
}
function r$8(s) {
	switch (s) {
		case "1": return "1";
		case "2":
		case "3": return "2";
		case "4": return "3";
	}
}
var import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames()), n = React$1.forwardRef((d, w) => {
	let { size: k = i$6.size.default } = d, { className: F, children: L, asChild: V, color: U, radius: K, disabled: q = d.loading, ...J } = v(d, i$6, r$1), X = V ? Slot$3 : "button";
	return React$1.createElement(X, {
		"data-disabled": q || void 0,
		"data-accent-color": U,
		"data-radius": K,
		...J,
		ref: w,
		className: (0, import_classnames$9.default)("rt-reset", "rt-BaseButton", F),
		disabled: q
	}, d.loading ? React$1.createElement(React$1.Fragment, null, React$1.createElement("span", {
		style: {
			display: "contents",
			visibility: "hidden"
		},
		"aria-hidden": !0
	}, L), React$1.createElement(d$3, null, L), React$1.createElement(p, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, React$1.createElement(s$5, { size: s$6(k, r$8) })))) : L);
});
n.displayName = "BaseButton";
var import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames()), o = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(n, {
	...w,
	ref: k,
	className: (0, import_classnames$8.default)("rt-Button", d)
}));
o.displayName = "Button";
var r$7 = React.forwardRef((s, w) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: w
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
})));
r$7.displayName = "ThickDividerHorizontalIcon";
var t = React.forwardRef((s, w) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: w
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
})));
t.displayName = "ThickCheckIcon";
var i$3 = React.forwardRef((s, w) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: w
}, React.createElement("path", { d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z" })));
i$3.displayName = "ChevronDownIcon";
var l = React.forwardRef((s, w) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: w
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z"
})));
l.displayName = "ThickChevronRightIcon";
var r$6 = [
	"1",
	"2",
	"3"
], o$5 = [
	"vertical",
	"horizontal",
	"both"
], t$1 = {
	...o$4,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: r$6,
		default: "1",
		responsive: !0
	},
	...r$3,
	scrollbars: {
		type: "enum",
		values: o$5,
		default: "both"
	}
};
function a$3(s) {
	let { m: d, mx: w, my: k, mt: F, mr: L, mb: V, ml: U, ...K } = s;
	return {
		m: d,
		mx: w,
		my: k,
		mt: F,
		mr: L,
		mb: V,
		ml: U,
		rest: K
	};
}
var import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames()), r$5 = r$1.m.values;
function S$1(s) {
	let [d, w] = R$3({
		className: "rt-r-m",
		customProperties: ["--margin"],
		propValues: r$5,
		value: s.m
	}), [k, F] = R$3({
		className: "rt-r-mx",
		customProperties: ["--margin-left", "--margin-right"],
		propValues: r$5,
		value: s.mx
	}), [L, V] = R$3({
		className: "rt-r-my",
		customProperties: ["--margin-top", "--margin-bottom"],
		propValues: r$5,
		value: s.my
	}), [U, K] = R$3({
		className: "rt-r-mt",
		customProperties: ["--margin-top"],
		propValues: r$5,
		value: s.mt
	}), [q, J] = R$3({
		className: "rt-r-mr",
		customProperties: ["--margin-right"],
		propValues: r$5,
		value: s.mr
	}), [X, $] = R$3({
		className: "rt-r-mb",
		customProperties: ["--margin-bottom"],
		propValues: r$5,
		value: s.mb
	}), [pA, mA] = R$3({
		className: "rt-r-ml",
		customProperties: ["--margin-left"],
		propValues: r$5,
		value: s.ml
	});
	return [(0, import_classnames$7.default)(d, k, L, U, q, X, pA), l$1(w, F, V, K, J, $, mA)];
}
var import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames()), c = React$1.forwardRef((d, w) => {
	let { rest: k, ...F } = a$3(d), [L, V] = S$1(F), { asChild: U, children: K, className: q, style: J, type: X, scrollHideDelay: $ = X === "scroll" ? void 0 : 0, dir: pA, size: mA = t$1.size.default, radius: hA = t$1.radius.default, scrollbars: gA = t$1.scrollbars.default, ..._A } = k;
	return React$1.createElement(Root, {
		type: X,
		scrollHideDelay: $,
		className: (0, import_classnames$6.default)("rt-ScrollAreaRoot", L, q),
		style: l$1(V, J),
		asChild: U
	}, d$2({
		asChild: U,
		children: K
	}, (d) => React$1.createElement(React$1.Fragment, null, React$1.createElement(Viewport$1, {
		..._A,
		ref: w,
		className: "rt-ScrollAreaViewport"
	}, d), React$1.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), gA === "vertical" ? null : React$1.createElement(Scrollbar, {
		"data-radius": hA,
		orientation: "horizontal",
		className: (0, import_classnames$6.default)("rt-ScrollAreaScrollbar", g$3({
			className: "rt-r-size",
			value: mA,
			propValues: t$1.size.values
		}))
	}, React$1.createElement(Thumb, { className: "rt-ScrollAreaThumb" })), gA === "horizontal" ? null : React$1.createElement(Scrollbar, {
		"data-radius": hA,
		orientation: "vertical",
		className: (0, import_classnames$6.default)("rt-ScrollAreaScrollbar", g$3({
			className: "rt-r-size",
			value: mA,
			propValues: t$1.size.values
		}))
	}, React$1.createElement(Thumb, { className: "rt-ScrollAreaThumb" })), gA === "both" ? React$1.createElement(Corner, { className: "rt-ScrollAreaCorner" }) : null)));
});
c.displayName = "ScrollArea";
var n$1 = {
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
	...o$3
}, a$1 = {
	...o$4,
	...r$2,
	shortcut: { type: "string" }
}, i$5 = {
	...r$2,
	shortcut: { type: "string" }
}, p$5 = { ...r$2 }, import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames()), s$2 = (d) => React$1.createElement(Root$3, {
	...d,
	modal: !0
});
s$2.displayName = "Dialog.Root";
var n$2 = React$1.forwardRef(({ children: d, ...w }, k) => React$1.createElement(Trigger$3, {
	...w,
	ref: k,
	asChild: !0
}, a$2(d)));
n$2.displayName = "Dialog.Trigger";
var p$6 = React$1.forwardRef(({ align: d, ...w }, k) => {
	let { align: F, ...L } = s$1, { className: V } = v({ align: d }, { align: F }), { className: U, forceMount: K, container: q, ...J } = v(w, L);
	return React$1.createElement(Portal$3, {
		container: q,
		forceMount: K
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Overlay, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, React$1.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, React$1.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${V}` }, React$1.createElement(Content$1, {
		...J,
		ref: k,
		className: (0, import_classnames$5.default)("rt-BaseDialogContent", "rt-DialogContent", U)
	}))))));
});
p$6.displayName = "Dialog.Content";
var g$2 = React$1.forwardRef((d, w) => React$1.createElement(Title, { asChild: !0 }, React$1.createElement(r$4, {
	size: "5",
	mb: "3",
	trim: "start",
	...d,
	asChild: !1,
	ref: w
})));
g$2.displayName = "Dialog.Title";
var m = React$1.forwardRef((d, w) => React$1.createElement(Description, { asChild: !0 }, React$1.createElement(p$2, {
	as: "p",
	size: "3",
	...d,
	asChild: !1,
	ref: w
})));
m.displayName = "Dialog.Description";
var D$1 = React$1.forwardRef(({ children: d, ...w }, k) => React$1.createElement(Close, {
	...w,
	ref: k,
	asChild: !0
}, a$2(d)));
D$1.displayName = "Dialog.Close";
var import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames()), I$2 = (d) => React$1.createElement(Root2$1, { ...d });
I$2.displayName = "DropdownMenu.Root";
var h$1 = React$1.forwardRef(({ children: d, ...w }, k) => React$1.createElement(Trigger$1, {
	...w,
	ref: k,
	asChild: !0
}, a$2(d)));
h$1.displayName = "DropdownMenu.Trigger";
var b = React$1.createContext({}), g$1 = React$1.forwardRef((d, w) => {
	let k = H$1(), { size: F = n$1.size.default, variant: L = n$1.variant.default, highContrast: V = n$1.highContrast.default } = d, { className: U, children: K, color: q, container: J, forceMount: X, ...$ } = v(d, n$1), pA = q || k.accentColor;
	return React$1.createElement(Portal2, {
		container: J,
		forceMount: X
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Content2$1, {
		"data-accent-color": pA,
		align: "start",
		sideOffset: 4,
		collisionPadding: 10,
		...$,
		asChild: !1,
		ref: w,
		className: (0, import_classnames$4.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-DropdownMenuContent", U)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$4.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, React$1.createElement(b.Provider, { value: React$1.useMemo(() => ({
		size: F,
		variant: L,
		color: pA,
		highContrast: V
	}), [
		F,
		L,
		pA,
		V
	]) }, K))))));
});
g$1.displayName = "DropdownMenu.Content";
var y$1 = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(Label2, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$4.default)("rt-BaseMenuLabel", "rt-DropdownMenuLabel", d)
}));
y$1.displayName = "DropdownMenu.Label";
var v$2 = React$1.forwardRef((d, w) => {
	let { className: k, children: F, color: L = a$1.color.default, shortcut: V, ...U } = d;
	return React$1.createElement(Item2, {
		"data-accent-color": L,
		...U,
		ref: w,
		className: (0, import_classnames$4.default)("rt-reset", "rt-BaseMenuItem", "rt-DropdownMenuItem", k)
	}, React$1.createElement(Slottable$1, null, F), V && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, V));
});
v$2.displayName = "DropdownMenu.Item";
var R$2 = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(Group2, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$4.default)("rt-BaseMenuGroup", "rt-DropdownMenuGroup", d)
}));
R$2.displayName = "DropdownMenu.Group";
var S = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(RadioGroup2, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$4.default)("rt-BaseMenuRadioGroup", "rt-DropdownMenuRadioGroup", d)
}));
S.displayName = "DropdownMenu.RadioGroup";
var x = React$1.forwardRef((d, w) => {
	let { children: k, className: F, color: L = p$5.color.default, ...V } = d;
	return React$1.createElement(RadioItem2, {
		...V,
		asChild: !1,
		ref: w,
		"data-accent-color": L,
		className: (0, import_classnames$4.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-DropdownMenuItem", "rt-DropdownMenuRadioItem", F)
	}, k, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t, { className: "rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon" })));
});
x.displayName = "DropdownMenu.RadioItem";
var T$1 = React$1.forwardRef((d, w) => {
	let { children: k, className: F, shortcut: L, color: V = i$5.color.default, ...U } = d;
	return React$1.createElement(CheckboxItem2, {
		...U,
		asChild: !1,
		ref: w,
		"data-accent-color": V,
		className: (0, import_classnames$4.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-DropdownMenuItem", "rt-DropdownMenuCheckboxItem", F)
	}, k, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), L && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, L));
});
T$1.displayName = "DropdownMenu.CheckboxItem";
var N = (d) => React$1.createElement(Sub2, { ...d });
N.displayName = "DropdownMenu.Sub";
var E = React$1.forwardRef((d, w) => {
	let { className: k, children: F, ...L } = d;
	return React$1.createElement(SubTrigger2, {
		...L,
		asChild: !1,
		ref: w,
		className: (0, import_classnames$4.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-DropdownMenuItem", "rt-DropdownMenuSubTrigger", k)
	}, F, React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, React$1.createElement(l, { className: "rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon" })));
});
E.displayName = "DropdownMenu.SubTrigger";
var G$1 = React$1.forwardRef((d, w) => {
	let { size: k, variant: F, color: L, highContrast: V } = React$1.useContext(b), { className: U, children: K, container: q, forceMount: J, ...X } = v({
		size: k,
		variant: F,
		color: L,
		highContrast: V,
		...d
	}, n$1);
	return React$1.createElement(Portal2, {
		container: q,
		forceMount: J
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(SubContent2, {
		"data-accent-color": L,
		alignOffset: -Number(k) * 4,
		sideOffset: 1,
		collisionPadding: 10,
		...X,
		asChild: !1,
		ref: w,
		className: (0, import_classnames$4.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-DropdownMenuContent", "rt-DropdownMenuSubContent", U)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$4.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, K)))));
});
G$1.displayName = "DropdownMenu.SubContent";
var B$1 = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(Separator2, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$4.default)("rt-BaseMenuSeparator", "rt-DropdownMenuSeparator", d)
}));
B$1.displayName = "DropdownMenu.Separator";
var import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames()), o$1 = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(n, {
	...w,
	ref: k,
	className: (0, import_classnames$3.default)("rt-IconButton", d)
}));
o$1.displayName = "IconButton";
var o$2 = { size: {
	type: "enum",
	className: "rt-r-size",
	values: [
		"1",
		"2",
		"3"
	],
	default: "2",
	responsive: !0
} }, i$4 = {
	variant: {
		type: "enum",
		className: "rt-variant",
		values: [
			"classic",
			"surface",
			"soft",
			"ghost"
		],
		default: "surface"
	},
	...r$2,
	...r$3,
	placeholder: { type: "string" }
}, p$4 = {
	variant: {
		type: "enum",
		className: "rt-variant",
		values: ["solid", "soft"],
		default: "solid"
	},
	...r$2,
	...o$3
}, import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames()), f$1 = React$1.createContext({}), C = (d) => {
	let { children: w, size: k = o$2.size.default, ...F } = d;
	return React$1.createElement(Root2, { ...F }, React$1.createElement(f$1.Provider, { value: React$1.useMemo(() => ({ size: k }), [k]) }, w));
};
C.displayName = "Select.Root";
var u$2 = React$1.forwardRef((d, w) => {
	let { children: k, className: F, color: L, radius: V, placeholder: U, ...K } = v({
		size: React$1.useContext(f$1)?.size,
		...d
	}, { size: o$2.size }, i$4, r$1);
	return React$1.createElement(Trigger, { asChild: !0 }, React$1.createElement("button", {
		"data-accent-color": L,
		"data-radius": V,
		...K,
		ref: w,
		className: (0, import_classnames$2.default)("rt-reset", "rt-SelectTrigger", F)
	}, React$1.createElement("span", { className: "rt-SelectTriggerInner" }, React$1.createElement(Value, { placeholder: U }, k)), React$1.createElement(Icon, { asChild: !0 }, React$1.createElement(i$3, { className: "rt-SelectIcon" }))));
});
u$2.displayName = "Select.Trigger";
var g = React$1.forwardRef((d, w) => {
	let { className: k, children: F, color: L, container: V, ...U } = v({
		size: React$1.useContext(f$1)?.size,
		...d
	}, { size: o$2.size }, p$4), K = H$1(), q = L || K.accentColor;
	return React$1.createElement(Portal$1, { container: V }, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Content2, {
		"data-accent-color": q,
		sideOffset: 4,
		...U,
		asChild: !1,
		ref: w,
		className: (0, import_classnames$2.default)({ "rt-PopperContent": U.position === "popper" }, "rt-SelectContent", k)
	}, React$1.createElement(Root, {
		type: "auto",
		className: "rt-ScrollAreaRoot"
	}, React$1.createElement(Viewport, {
		asChild: !0,
		className: "rt-SelectViewport"
	}, React$1.createElement(Viewport$1, {
		className: "rt-ScrollAreaViewport",
		style: { overflowY: void 0 }
	}, F)), React$1.createElement(Scrollbar, {
		className: "rt-ScrollAreaScrollbar rt-r-size-1",
		orientation: "vertical"
	}, React$1.createElement(Thumb, { className: "rt-ScrollAreaThumb" }))))));
});
g.displayName = "Select.Content";
var v$1 = React$1.forwardRef((d, w) => {
	let { className: k, children: F, ...L } = d;
	return React$1.createElement(Item, {
		...L,
		asChild: !1,
		ref: w,
		className: (0, import_classnames$2.default)("rt-SelectItem", k)
	}, React$1.createElement(ItemIndicator, { className: "rt-SelectItemIndicator" }, React$1.createElement(t, { className: "rt-SelectItemIndicatorIcon" })), React$1.createElement(ItemText, null, F));
});
v$1.displayName = "Select.Item";
var y = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(Group, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$2.default)("rt-SelectGroup", d)
}));
y.displayName = "Select.Group";
var h = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(Label, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$2.default)("rt-SelectLabel", d)
}));
h.displayName = "Select.Label";
var I$1 = React$1.forwardRef(({ className: d, ...w }, k) => React$1.createElement(Separator, {
	...w,
	asChild: !1,
	ref: k,
	className: (0, import_classnames$2.default)("rt-SelectSeparator", d)
}));
I$1.displayName = "Select.Separator";
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
}, import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames()), r = React$1.forwardRef((d, w) => {
	let { className: k, color: F, radius: L, style: V, ...U } = v(d, a, r$1);
	return React$1.createElement("div", {
		"data-accent-color": F,
		"data-radius": L,
		className: (0, import_classnames$1.default)("rt-TextAreaRoot", k),
		style: V
	}, React$1.createElement("textarea", {
		className: "rt-reset rt-TextAreaInput",
		ref: w,
		...U
	}));
});
r.displayName = "TextArea";
var f = {
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
}, i = {
	side: {
		type: "enum",
		values: ["left", "right"]
	},
	...r$2,
	gap: u$1.gap,
	px: p$3.px,
	pl: p$3.pl,
	pr: p$3.pr
}, import_classnames = /* @__PURE__ */ __toESM(require_classnames()), u = React$1.forwardRef((d, w) => {
	let k = React$1.useRef(null), { children: F, className: L, color: V, radius: U, style: K, ...q } = v(d, f, r$1);
	return React$1.createElement("div", {
		"data-accent-color": V,
		"data-radius": U,
		style: K,
		className: (0, import_classnames.default)("rt-TextFieldRoot", L),
		onPointerDown: (s) => {
			let d = s.target;
			if (d.closest("input, button, a")) return;
			let w = k.current;
			if (!w) return;
			let F = d.closest("\n            .rt-TextFieldSlot[data-side='right'],\n            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])\n          ") ? w.value.length : 0;
			requestAnimationFrame(() => {
				try {
					w.setSelectionRange(F, F);
				} catch {}
				w.focus();
			});
		}
	}, React$1.createElement("input", {
		spellCheck: "false",
		...q,
		ref: composeRefs(k, w),
		className: "rt-reset rt-TextFieldInput"
	}), F);
});
u.displayName = "TextField.Root";
var c$1 = React$1.forwardRef((d, w) => {
	let { className: k, color: F, side: L, ...V } = v(d, i);
	return React$1.createElement("div", {
		"data-accent-color": F,
		"data-side": L,
		...V,
		ref: w,
		className: (0, import_classnames.default)("rt-TextFieldSlot", k)
	});
});
c$1.displayName = "TextField.Slot";
function z(s, d = "Assertion error") {
	if (!s) throw Error(d);
}
function W({ group: s }) {
	let { orientation: d, panels: w } = s;
	return w.reduce((s, w) => (s += d === "horizontal" ? w.element.offsetWidth : w.element.offsetHeight, s), 0);
}
function ie(s, d) {
	return d.sort(s === "horizontal" ? Je : Qe);
}
function Je(s, d) {
	let w = s.element.offsetLeft - d.element.offsetLeft;
	return w === 0 ? s.element.offsetWidth - d.element.offsetWidth : w;
}
function Qe(s, d) {
	let w = s.element.offsetTop - d.element.offsetTop;
	return w === 0 ? s.element.offsetHeight - d.element.offsetHeight : w;
}
function Me(s) {
	return typeof s == "object" && !!s && "nodeType" in s && s.nodeType === Node.ELEMENT_NODE;
}
function Ee(s, d) {
	return {
		x: s.x >= d.left && s.x <= d.right ? 0 : Math.min(Math.abs(s.x - d.left), Math.abs(s.x - d.right)),
		y: s.y >= d.top && s.y <= d.bottom ? 0 : Math.min(Math.abs(s.y - d.top), Math.abs(s.y - d.bottom))
	};
}
function et({ orientation: s, rects: d, targetRect: w }) {
	let k = {
		x: w.x + w.width / 2,
		y: w.y + w.height / 2
	}, F, L = Number.MAX_VALUE;
	for (let w of d) {
		let { x: d, y: V } = Ee(k, w), U = s === "horizontal" ? d : V;
		U < L && (L = U, F = w);
	}
	return z(F, "No rect found"), F;
}
function Ie(s) {
	let { element: d, orientation: w, panels: k, separators: F } = s, L = ie(w, Array.from(d.children).filter(Me).map((s) => ({ element: s }))).map(({ element: s }) => s), V = [], U = !1, K, q = [];
	for (let d of L) if (d.hasAttribute("data-panel")) {
		let F = k.find((s) => s.element === d);
		if (F) {
			if (K) {
				let k = K.element.getBoundingClientRect(), L = d.getBoundingClientRect(), J;
				if (U) {
					let s = w === "horizontal" ? new DOMRect(k.right, k.top, 0, k.height) : new DOMRect(k.left, k.bottom, k.width, 0), d = w === "horizontal" ? new DOMRect(L.left, L.top, 0, L.height) : new DOMRect(L.left, L.top, L.width, 0);
					switch (q.length) {
						case 0:
							J = [s, d];
							break;
						case 1: {
							let F = q[0];
							J = [F, et({
								orientation: w,
								rects: [k, L],
								targetRect: F.element.getBoundingClientRect()
							}) === k ? d : s];
							break;
						}
						default:
							J = q;
							break;
					}
				} else J = q.length ? q : [w === "horizontal" ? new DOMRect(k.right, L.top, L.left - k.right, L.height) : new DOMRect(L.left, k.bottom, L.width, L.top - k.bottom)];
				for (let d of J) V.push({
					group: s,
					groupSize: W({ group: s }),
					panels: [K, F],
					separator: "width" in d ? void 0 : d,
					rect: "width" in d ? d : d.element.getBoundingClientRect()
				});
			}
			U = !1, K = F, q = [];
		}
	} else if (d.hasAttribute("data-separator")) {
		let s = F.find((s) => s.element === d);
		s ? q.push(s) : (K = void 0, q = []);
	} else U = !0;
	return V;
}
function tt(s, d) {
	let w = getComputedStyle(s);
	return d * parseFloat(w.fontSize);
}
function nt(s, d) {
	let w = getComputedStyle(s.ownerDocument.body);
	return d * parseFloat(w.fontSize);
}
function ot(s) {
	return s / 100 * window.innerHeight;
}
function rt(s) {
	return s / 100 * window.innerWidth;
}
function it(s) {
	switch (typeof s) {
		case "number": return [s, "px"];
		case "string": {
			let d = parseFloat(s);
			return s.endsWith("%") ? [d, "%"] : s.endsWith("px") ? [d, "px"] : s.endsWith("rem") ? [d, "rem"] : s.endsWith("em") ? [d, "em"] : s.endsWith("vh") ? [d, "vh"] : s.endsWith("vw") ? [d, "vw"] : [d, "%"];
		}
	}
}
function Q({ groupSize: s, panelElement: d, styleProp: w }) {
	let k, [F, L] = it(w);
	switch (L) {
		case "%":
			k = F / 100 * s;
			break;
		case "px":
			k = F;
			break;
		case "rem":
			k = nt(d, F);
			break;
		case "em":
			k = tt(d, F);
			break;
		case "vh":
			k = ot(F);
			break;
		case "vw":
			k = rt(F);
			break;
	}
	return k;
}
function G(s) {
	return parseFloat(s.toFixed(3));
}
function pe(s) {
	let { panels: d } = s, w = W({ group: s });
	return w === 0 ? d.map((s) => ({
		collapsedSize: 0,
		collapsible: s.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		minSize: 0,
		maxSize: 100,
		panelId: s.id
	})) : d.map((s) => {
		let { element: d, panelConstraints: k } = s, F = 0;
		k.collapsedSize && (F = G(Q({
			groupSize: w,
			panelElement: d,
			styleProp: k.collapsedSize
		}) / w * 100));
		let L;
		k.defaultSize && (L = G(Q({
			groupSize: w,
			panelElement: d,
			styleProp: k.defaultSize
		}) / w * 100));
		let V = 0;
		k.minSize && (V = G(Q({
			groupSize: w,
			panelElement: d,
			styleProp: k.minSize
		}) / w * 100));
		let U = 100;
		return k.maxSize && (U = G(Q({
			groupSize: w,
			panelElement: d,
			styleProp: k.maxSize
		}) / w * 100)), {
			collapsedSize: F,
			collapsible: k.collapsible === !0,
			defaultSize: L,
			minSize: V,
			maxSize: U,
			panelId: s.id
		};
	});
}
var st = class {
	#e = {};
	addListener(s, d) {
		let w = this.#e[s];
		return w === void 0 ? this.#e[s] = [d] : w.includes(d) || w.push(d), () => {
			this.removeListener(s, d);
		};
	}
	emit(s, d) {
		let w = this.#e[s];
		if (w !== void 0) if (w.length === 1) w[0].call(null, d);
		else {
			let s = !1, k = null, F = Array.from(w);
			for (let w = 0; w < F.length; w++) {
				let L = F[w];
				try {
					L.call(null, d);
				} catch (d) {
					k === null && (s = !0, k = d);
				}
			}
			if (s) throw k;
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(s, d) {
		let w = this.#e[s];
		if (w !== void 0) {
			let s = w.indexOf(d);
			s >= 0 && w.splice(s, 1);
		}
	}
};
function R$1(s, d, w = 0) {
	return Math.abs(G(s) - G(d)) <= w;
}
var M = {
	cursorFlags: 0,
	interactionState: { state: "inactive" },
	mountedGroups: /* @__PURE__ */ new Map()
}, T = new st();
function D() {
	return M;
}
function I(s) {
	let d = typeof s == "function" ? s(M) : s;
	if (M === d) return M;
	let w = M;
	return M = {
		...M,
		...d
	}, d.cursorFlags !== void 0 && T.emit("cursorFlagsChange", M.cursorFlags), d.interactionState !== void 0 && T.emit("interactionStateChange", M.interactionState), d.mountedGroups !== void 0 && (M.mountedGroups.forEach((s, d) => {
		s.derivedPanelConstraints.forEach((k) => {
			if (k.collapsible) {
				let { layout: F } = w.mountedGroups.get(d) ?? {};
				if (F) {
					let w = R$1(k.collapsedSize, s.layout[k.panelId]), L = R$1(k.collapsedSize, F[k.panelId]);
					w && !L && (d.inMemoryLastExpandedPanelSizes[k.panelId] = F[k.panelId]);
				}
			}
		});
	}), T.emit("mountedGroupsChange", M.mountedGroups)), M;
}
function at(s, d) {
	if (s.length !== d.length) return !1;
	for (let w = 0; w < s.length; w++) if (s[w] != d[w]) return !1;
	return !0;
}
function Y(s, d) {
	return R$1(s, d) ? 0 : s > d ? 1 : -1;
}
function H({ panelConstraints: s, size: d }) {
	let { collapsedSize: w = 0, collapsible: k, maxSize: F = 100, minSize: L = 0 } = s;
	if (Y(d, L) < 0) if (k) {
		let s = (w + L) / 2;
		d = Y(d, s) < 0 ? w : L;
	} else d = L;
	return d = Math.min(F, d), d = G(d), d;
}
function Z({ delta: s, initialLayout: d, panelConstraints: w, pivotIndices: k, prevLayout: F, trigger: L }) {
	if (R$1(s, 0)) return d;
	let V = Object.values(d), U = Object.values(F), K = [...V], [q, J] = k;
	z(q != null, "Invalid first pivot index"), z(J != null, "Invalid second pivot index");
	let X = 0;
	if (L === "keyboard") {
		{
			let d = s < 0 ? J : q, k = w[d];
			z(k, `Panel constraints not found for index ${d}`);
			let { collapsedSize: F = 0, collapsible: L, minSize: U = 0 } = k;
			if (L) {
				let w = V[d];
				if (z(w != null, `Previous layout not found for panel index ${d}`), R$1(w, F)) {
					let d = U - w;
					Y(d, Math.abs(s)) > 0 && (s = s < 0 ? 0 - d : d);
				}
			}
		}
		{
			let d = s < 0 ? q : J, k = w[d];
			z(k, `No panel constraints found for index ${d}`);
			let { collapsedSize: F = 0, collapsible: L, minSize: U = 0 } = k;
			if (L) {
				let w = V[d];
				if (z(w != null, `Previous layout not found for panel index ${d}`), R$1(w, U)) {
					let d = w - F;
					Y(d, Math.abs(s)) > 0 && (s = s < 0 ? 0 - d : d);
				}
			}
		}
	}
	{
		let d = s < 0 ? 1 : -1, k = s < 0 ? J : q, F = 0;
		for (;;) {
			let s = V[k];
			z(s != null, `Previous layout not found for panel index ${k}`);
			let L = H({
				panelConstraints: w[k],
				size: 100
			}) - s;
			if (F += L, k += d, k < 0 || k >= w.length) break;
		}
		let L = Math.min(Math.abs(s), Math.abs(F));
		s = s < 0 ? 0 - L : L;
	}
	{
		let d = s < 0 ? q : J;
		for (; d >= 0 && d < w.length;) {
			let k = Math.abs(s) - Math.abs(X), F = V[d];
			z(F != null, `Previous layout not found for panel index ${d}`);
			let L = F - k, U = H({
				panelConstraints: w[d],
				size: L
			});
			if (!R$1(F, U) && (X += F - U, K[d] = U, X.toFixed(3).localeCompare(Math.abs(s).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			s < 0 ? d-- : d++;
		}
	}
	if (at(U, K)) return F;
	{
		let d = s < 0 ? J : q, k = V[d];
		z(k != null, `Previous layout not found for panel index ${d}`);
		let F = k + X, L = H({
			panelConstraints: w[d],
			size: F
		});
		if (K[d] = L, !R$1(L, F)) {
			let d = F - L, k = s < 0 ? J : q;
			for (; k >= 0 && k < w.length;) {
				let F = K[k];
				z(F != null, `Previous layout not found for panel index ${k}`);
				let L = F + d, V = H({
					panelConstraints: w[k],
					size: L
				});
				if (R$1(F, V) || (d -= V - F, K[k] = V), R$1(d, 0)) break;
				s > 0 ? k-- : k++;
			}
		}
	}
	if (!R$1(Object.values(K).reduce((s, d) => d + s, 0), 100, .1)) return F;
	let $ = Object.keys(F);
	return K.reduce((s, d, w) => (s[$[w]] = d, s), {});
}
function te(s) {
	let { mountedGroups: d } = D();
	for (let [w] of d) if (w.separators.some((d) => d.element === s)) return w;
	throw Error("Could not find parent Group for separator element");
}
function B(s, d) {
	if (Object.keys(s).length !== Object.keys(d).length) return !1;
	for (let w in s) if (d[w] === void 0 || Y(s[w], d[w]) !== 0) return !1;
	return !0;
}
function _({ layout: s, panelConstraints: d }) {
	let w = [...Object.values(s)], k = w.reduce((s, d) => s + d, 0);
	if (w.length !== d.length) throw Error(`Invalid ${d.length} panel layout: ${w.map((s) => `${s}%`).join(", ")}`);
	if (!R$1(k, 100) && w.length > 0) for (let s = 0; s < d.length; s++) {
		let d = w[s];
		z(d != null, `No layout data found for index ${s}`), w[s] = 100 / k * d;
	}
	let F = 0;
	for (let s = 0; s < d.length; s++) {
		let k = w[s];
		z(k != null, `No layout data found for index ${s}`);
		let L = H({
			panelConstraints: d[s],
			size: k
		});
		k != L && (F += k - L, w[s] = L);
	}
	if (!R$1(F, 0)) for (let s = 0; s < d.length; s++) {
		let k = w[s];
		z(k != null, `No layout data found for index ${s}`);
		let L = k + F, V = H({
			panelConstraints: d[s],
			size: L
		});
		if (k !== V && (F -= V - k, w[s] = V, R$1(F, 0))) break;
	}
	let L = Object.keys(s);
	return w.reduce((s, d, w) => (s[L[w]] = d, s), {});
}
function ke({ groupId: s }) {
	let d = () => {
		let { mountedGroups: d } = D();
		for (let [w, k] of d) if (w.id === s) return {
			group: w,
			...k
		};
		throw Error(`Could not find Group with id "${s}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: s, layout: w } = d();
			return s ? {} : w;
		},
		setLayout(s) {
			let { defaultLayoutDeferred: w, derivedPanelConstraints: k, group: F, layout: L, separatorToPanels: V } = d(), U = _({
				layout: s,
				panelConstraints: k
			});
			return w ? L : (B(L, U) || I((s) => ({ mountedGroups: new Map(s.mountedGroups).set(F, {
				defaultLayoutDeferred: w,
				derivedPanelConstraints: k,
				layout: U,
				separatorToPanels: V
			}) })), U);
		}
	};
}
function Ge(s) {
	let { mountedGroups: d } = D(), w = d.get(s);
	return z(w, `Mounted Group ${s.id} not found`), w;
}
function O(s, d) {
	let w = te(s), k = Ge(w), F = w.separators.find((d) => d.element === s);
	z(F, "Matching separator not found");
	let L = k.separatorToPanels.get(F);
	z(L, "Matching panels not found");
	let V = L.map((s) => w.panels.indexOf(s)), U = ke({ groupId: w.id }).getLayout(), K = _({
		layout: Z({
			delta: d,
			initialLayout: U,
			panelConstraints: k.derivedPanelConstraints,
			pivotIndices: V,
			prevLayout: U,
			trigger: "keyboard"
		}),
		panelConstraints: k.derivedPanelConstraints
	});
	B(U, K) || I((s) => ({ mountedGroups: new Map(s.mountedGroups).set(w, {
		defaultLayoutDeferred: k.defaultLayoutDeferred,
		derivedPanelConstraints: k.derivedPanelConstraints,
		layout: K,
		separatorToPanels: k.separatorToPanels
	}) }));
}
function me(s) {
	if (s.defaultPrevented) return;
	let d = s.currentTarget, w = te(d);
	if (!w.disabled) switch (s.key) {
		case "ArrowDown":
			s.preventDefault(), w.orientation === "vertical" && O(d, 5);
			break;
		case "ArrowLeft":
			s.preventDefault(), w.orientation === "horizontal" && O(d, -5);
			break;
		case "ArrowRight":
			s.preventDefault(), w.orientation === "horizontal" && O(d, 5);
			break;
		case "ArrowUp":
			s.preventDefault(), w.orientation === "vertical" && O(d, -5);
			break;
		case "End":
			s.preventDefault(), O(d, 100);
			break;
		case "Enter": {
			s.preventDefault();
			let w = te(d), { derivedPanelConstraints: k, layout: F, separatorToPanels: L } = Ge(w), V = w.separators.find((s) => s.element === d);
			z(V, "Matching separator not found");
			let U = L.get(V);
			z(U, "Matching panels not found");
			let K = U[0], q = k.find((s) => s.panelId === K.id);
			if (z(q, "Panel metadata not found"), q.collapsible) {
				let s = F[K.id];
				O(d, (q.collapsedSize === s ? w.inMemoryLastExpandedPanelSizes[K.id] ?? q.minSize : q.collapsedSize) - s);
			}
			break;
		}
		case "F6": {
			s.preventDefault();
			let w = te(d).separators.map((s) => s.element), k = Array.from(w).findIndex((d) => d === s.currentTarget);
			z(k !== null, "Index not found"), w[s.shiftKey ? k > 0 ? k - 1 : w.length - 1 : k + 1 < w.length ? k + 1 : 0].focus();
			break;
		}
		case "Home":
			s.preventDefault(), O(d, -100);
			break;
	}
}
var lt = (s) => s, ne = () => {}, De = 1, Oe = 2, Te = 4, Ne = 8, he = {
	coarse: 10,
	precise: 5
};
function ut(s, d, w) {
	let k, F = {
		x: Infinity,
		y: Infinity
	};
	for (let L of d) {
		let d = Ee(w, L.rect);
		switch (s) {
			case "horizontal":
				d.x <= F.x && (k = L, F = d);
				break;
			case "vertical":
				d.y <= F.y && (k = L, F = d);
				break;
		}
	}
	return k ? {
		distance: F,
		hitRegion: k
	} : void 0;
}
var ee;
function ct() {
	return ee === void 0 && (ee = typeof matchMedia == "function" ? !!matchMedia("(pointer:coarse)").matches : !1), ee;
}
function ft(s) {
	return typeof s == "object" && !!s && "nodeType" in s && s.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function dt(s, d) {
	if (s === d) throw Error("Cannot compare node with itself");
	let w = {
		a: Se(s),
		b: Se(d)
	}, k;
	for (; w.a.at(-1) === w.b.at(-1);) s = w.a.pop(), d = w.b.pop(), k = s;
	z(k, "Stacking order can only be calculated for elements with a common ancestor");
	let F = {
		a: ge(ye(w.a)),
		b: ge(ye(w.b))
	};
	if (F.a === F.b) {
		let s = k.childNodes, d = {
			a: w.a.at(-1),
			b: w.b.at(-1)
		}, F = s.length;
		for (; F--;) {
			let w = s[F];
			if (w === d.a) return 1;
			if (w === d.b) return -1;
		}
	}
	return Math.sign(F.a - F.b);
}
var pt = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function mt(s) {
	let d = getComputedStyle(_e(s) ?? s).display;
	return d === "flex" || d === "inline-flex";
}
function ht(s) {
	let d = getComputedStyle(s);
	return !!(d.position === "fixed" || d.zIndex !== "auto" && (d.position !== "static" || mt(s)) || +d.opacity < 1 || "transform" in d && d.transform !== "none" || "webkitTransform" in d && d.webkitTransform !== "none" || "mixBlendMode" in d && d.mixBlendMode !== "normal" || "filter" in d && d.filter !== "none" || "webkitFilter" in d && d.webkitFilter !== "none" || "isolation" in d && d.isolation === "isolate" || pt.test(d.willChange) || d.webkitOverflowScrolling === "touch");
}
function ye(s) {
	let d = s.length;
	for (; d--;) {
		let w = s[d];
		if (z(w, "Missing node"), ht(w)) return w;
	}
	return null;
}
function ge(s) {
	return s && Number(getComputedStyle(s).zIndex) || 0;
}
function Se(s) {
	let d = [];
	for (; s;) d.push(s), s = _e(s);
	return d;
}
function _e(s) {
	let { parentNode: d } = s;
	return ft(d) ? d.host : d;
}
function yt(s, d) {
	return s.x < d.x + d.width && s.x + s.width > d.x && s.y < d.y + d.height && s.y + s.height > d.y;
}
function gt({ groupElement: s, hitRegion: d, pointerEventTarget: w }) {
	if (!Me(w) || w.contains(s) || s.contains(w)) return !0;
	if (dt(w, s) > 0) {
		let k = w;
		for (; k;) {
			if (k.contains(s)) return !0;
			if (yt(k.getBoundingClientRect(), d)) return !1;
			k = k.parentElement;
		}
	}
	return !0;
}
function Ae(s, d) {
	let w = [];
	return d.forEach((d, k) => {
		if (k.disabled) return;
		let F = ct() ? he.coarse : he.precise, L = Ie(k), V = ut(k.orientation, L, {
			x: s.clientX,
			y: s.clientY
		});
		V && V.distance.x <= F && V.distance.y <= F && gt({
			groupElement: k.element,
			hitRegion: V.hitRegion.rect,
			pointerEventTarget: s.target
		}) && w.push(V.hitRegion);
	}), w;
}
function ve(s) {
	if (s.defaultPrevented || s.pointerType === "mouse" && s.button > 0) return;
	let { mountedGroups: d } = D(), w = Ae(s, d), k = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Map(), U = !1;
	w.forEach((s) => {
		k.add(s.group), s.panels.forEach((s) => {
			F.add(s);
		}), s.separator && (L.add(s.separator), U || (U = !0, s.separator.element.focus()));
		let w = d.get(s.group);
		w && V.set(s.group, w.layout);
	}), I({ interactionState: {
		hitRegions: w,
		initialLayoutMap: V,
		pointerDownAtPoint: {
			x: s.clientX,
			y: s.clientY
		},
		state: "active"
	} }), w.length && s.preventDefault();
}
function St({ cursorFlags: s, groups: d, state: w }) {
	let k = 0, F = 0;
	switch (w) {
		case "active":
		case "hover": d.forEach((s) => {
			if (!s.disableCursor) switch (s.orientation) {
				case "horizontal":
					k++;
					break;
				case "vertical":
					F++;
					break;
			}
		});
	}
	if (k === 0 && F === 0) return null;
	switch (w) {
		case "active": {
			let d = (s & De) !== 0, w = (s & Oe) !== 0, k = (s & Te) !== 0, F = (s & Ne) !== 0;
			if (s) {
				if (d) return k ? "se-resize" : F ? "ne-resize" : "e-resize";
				if (w) return k ? "sw-resize" : F ? "nw-resize" : "w-resize";
				if (k) return "s-resize";
				if (F) return "n-resize";
			}
			break;
		}
	}
	return k > 0 && F > 0 ? "move" : k > 0 ? "ew-resize" : "ns-resize";
}
var xe = /* @__PURE__ */ new WeakMap();
function se(s) {
	if (s.defaultView === null || s.defaultView === void 0) return;
	let { prevStyle: d, styleSheet: w } = xe.get(s) ?? {};
	w === void 0 && (w = new s.defaultView.CSSStyleSheet(), s.adoptedStyleSheets = [w]);
	let { cursorFlags: k, interactionState: F } = D();
	switch (F.state) {
		case "active":
		case "hover": {
			let s = St({
				cursorFlags: k,
				groups: F.hitRegions.map((s) => s.group),
				state: F.state
			}), L = `*{cursor: ${s} !important; ${F.state === "active" ? "touch-action: none;" : ""} }`;
			if (d === L) return;
			d = L, s ? w.cssRules.length === 0 ? w.insertRule(L) : w.replaceSync(L) : w.cssRules.length === 1 && w.deleteRule(0);
			break;
		}
		case "inactive":
			d = void 0, w.cssRules.length === 1 && w.deleteRule(0);
			break;
	}
	xe.set(s, {
		prevStyle: d,
		styleSheet: w
	});
}
function $e({ document: s, event: d, hitRegions: w, initialLayoutMap: k, mountedGroups: F, pointerDownAtPoint: L }) {
	let V = 0, U = new Map(F);
	w.forEach((s) => {
		let { group: w, groupSize: K } = s, { disableCursor: q, orientation: J, panels: X } = w, $ = 0;
		$ = L ? J === "horizontal" ? (d.clientX - L.x) / K * 100 : (d.clientY - L.y) / K * 100 : J === "horizontal" ? d.clientX < 0 ? -100 : 100 : d.clientY < 0 ? -100 : 100;
		let pA = k.get(w), { defaultLayoutDeferred: mA, derivedPanelConstraints: hA, layout: gA, separatorToPanels: _A } = F.get(w) ?? { defaultLayoutDeferred: !1 };
		if (hA && pA && gA && _A) {
			let d = Z({
				delta: $,
				initialLayout: pA,
				panelConstraints: hA,
				pivotIndices: s.panels.map((s) => X.indexOf(s)),
				prevLayout: gA,
				trigger: "mouse-or-touch"
			});
			if (B(d, gA)) {
				if ($ !== 0 && !q) switch (J) {
					case "horizontal":
						V |= $ < 0 ? De : Oe;
						break;
					case "vertical":
						V |= $ < 0 ? Te : Ne;
						break;
				}
			} else {
				U.set(s.group, {
					defaultLayoutDeferred: mA,
					derivedPanelConstraints: hA,
					layout: d,
					separatorToPanels: _A
				});
				let w = s.group.panels.map(({ id: s }) => s).join(",");
				s.group.inMemoryLayouts[w] = d;
			}
		}
	}), I({
		cursorFlags: V,
		mountedGroups: U
	}), se(s);
}
function ze(s) {
	let { interactionState: d, mountedGroups: w } = D();
	switch (d.state) {
		case "active": $e({
			document: s.currentTarget,
			event: s,
			hitRegions: d.hitRegions,
			initialLayoutMap: d.initialLayoutMap,
			mountedGroups: w
		});
	}
}
function be(s) {
	if (s.defaultPrevented) return;
	let { interactionState: d, mountedGroups: w } = D();
	switch (d.state) {
		case "active":
			if (s.buttons === 0) {
				I((s) => s.interactionState.state === "inactive" ? s : {
					cursorFlags: 0,
					interactionState: { state: "inactive" }
				});
				return;
			}
			$e({
				document: s.currentTarget,
				event: s,
				hitRegions: d.hitRegions,
				initialLayoutMap: d.initialLayoutMap,
				mountedGroups: w,
				pointerDownAtPoint: d.pointerDownAtPoint
			});
			break;
		default: {
			let k = Ae(s, w);
			k.length === 0 ? d.state !== "inactive" && I({ interactionState: { state: "inactive" } }) : I({ interactionState: {
				hitRegions: k,
				state: "hover"
			} }), se(s.currentTarget);
			break;
		}
	}
}
function we(s) {
	if (s.defaultPrevented || s.pointerType === "mouse" && s.button > 0) return;
	s.preventDefault();
	let { interactionState: d } = D();
	switch (d.state) {
		case "active": I({
			cursorFlags: 0,
			interactionState: { state: "inactive" }
		}), se(s.currentTarget);
	}
}
function Le(s) {
	let d = 0, w = 0, k = {};
	for (let F of s) if (F.defaultSize !== void 0) {
		d++;
		let s = G(F.defaultSize);
		w += s, k[F.panelId] = s;
	} else k[F.panelId] = void 0;
	let F = s.length - d;
	if (F !== 0) {
		let d = G((100 - w) / F);
		for (let w of s) w.defaultSize === void 0 && (k[w.panelId] = d);
	}
	return k;
}
function vt(s, d, w) {
	if (!w[0]) return;
	let k = s.panels.find((s) => s.element === d);
	if (!k || !k.onResize) return;
	let F = W({ group: s }), L = s.orientation === "horizontal" ? k.element.offsetWidth : k.element.offsetHeight, V = k.mutableValues.prevSize, U = {
		asPercentage: G(L / F * 100),
		inPixels: L
	};
	k.mutableValues.prevSize = U, k.onResize(U, k.id, V);
}
function xt(s, d) {
	if (Object.keys(s).length !== Object.keys(d).length) return !1;
	for (let w in s) if (s[w] !== d[w]) return !1;
	return !0;
}
function zt(s, d) {
	let w = s.map((s) => s.id), k = Object.keys(d);
	if (w.length !== k.length) return !1;
	for (let s of w) if (!k.includes(s)) return !1;
	return !0;
}
var j = /* @__PURE__ */ new Map();
function bt(s) {
	let d = !0;
	z(s.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
	let w = s.element.ownerDocument.defaultView.ResizeObserver, k = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set(), L = new w((w) => {
		for (let k of w) {
			let { borderBoxSize: w, target: F } = k;
			if (F === s.element) {
				if (d) {
					if (W({ group: s }) === 0) return;
					I((d) => {
						let w = d.mountedGroups.get(s);
						if (w) {
							let k = pe(s), F = w.defaultLayoutDeferred ? Le(k) : w.layout, L = _({
								layout: F,
								panelConstraints: k
							});
							return !w.defaultLayoutDeferred && B(F, L) && xt(w.derivedPanelConstraints, k) ? d : { mountedGroups: new Map(d.mountedGroups).set(s, {
								defaultLayoutDeferred: !1,
								derivedPanelConstraints: k,
								layout: L,
								separatorToPanels: w.separatorToPanels
							}) };
						}
						return d;
					});
				}
			} else vt(s, F, w);
		}
	});
	L.observe(s.element), s.panels.forEach((s) => {
		z(!k.has(s.id), `Panel ids must be unique; id "${s.id}" was used more than once`), k.add(s.id), s.onResize && L.observe(s.element);
	});
	let V = W({ group: s }), U = pe(s), K = s.panels.map(({ id: s }) => s).join(","), q = s.defaultLayout;
	q && (zt(s.panels, q) || (q = void 0));
	let J = _({
		layout: s.inMemoryLayouts[K] ?? q ?? Le(U),
		panelConstraints: U
	}), X = Ie(s), $ = s.element.ownerDocument;
	return I((d) => {
		let w = /* @__PURE__ */ new Map();
		return j.set($, (j.get($) ?? 0) + 1), X.forEach((s) => {
			s.separator && w.set(s.separator, s.panels);
		}), { mountedGroups: new Map(d.mountedGroups).set(s, {
			defaultLayoutDeferred: V === 0,
			derivedPanelConstraints: U,
			layout: J,
			separatorToPanels: w
		}) };
	}), s.separators.forEach((s) => {
		z(!F.has(s.id), `Separator ids must be unique; id "${s.id}" was used more than once`), F.add(s.id), s.element.addEventListener("keydown", me);
	}), j.get($) === 1 && ($.addEventListener("pointerdown", ve, !0), $.addEventListener("pointerleave", ze), $.addEventListener("pointermove", be), $.addEventListener("pointerup", we, !0)), function() {
		d = !1, j.set($, Math.max(0, (j.get($) ?? 0) - 1)), I((d) => {
			let w = new Map(d.mountedGroups);
			return w.delete(s), { mountedGroups: w };
		}), s.separators.forEach((s) => {
			s.element.removeEventListener("keydown", me);
		}), j.get($) || ($.removeEventListener("pointerdown", ve, !0), $.removeEventListener("pointerleave", ze), $.removeEventListener("pointermove", be), $.removeEventListener("pointerup", we, !0)), L.disconnect();
	};
}
function wt() {
	let [s, d] = useState({});
	return [s, useCallback(() => d({}), [])];
}
function ae(s) {
	let d = useId();
	return `${s ?? d}`;
}
var A = typeof window < "u" ? useLayoutEffect : useEffect;
function le(s) {
	let d = useRef(s);
	return A(() => {
		d.current = s;
	}, [s]), useCallback((...s) => d.current?.(...s), [d]);
}
function ue(...s) {
	return le((d) => {
		s.forEach((s) => {
			if (s) switch (typeof s) {
				case "function":
					s(d);
					break;
				case "object":
					s.current = d;
					break;
			}
		});
	});
}
function Lt(s) {
	let d = useRef({ ...s });
	return A(() => {
		for (let w in s) d.current[w] = s[w];
	}, [s]), d.current;
}
var Fe = "--react-resizable-panels--panel--pointer-events";
function Ve(s, d) {
	return `--react-resizable-panels--${s.replace(/[^a-zA-Z0-9\-_]/g, "")}--${d.replace(/[^a-zA-Z0-9\-_]/g, "")}`;
}
var je = createContext(null);
function Pt(s, d) {
	let w = useRef({
		getLayout: () => ({}),
		setLayout: lt
	});
	useImperativeHandle(d, () => w.current, []), A(() => {
		Object.assign(w.current, ke({ groupId: s }));
	});
}
function Rt({ children: s, className: d, defaultLayout: w, disableCursor: k, disabled: F, elementRef: L, groupRef: V, id: U, onLayoutChange: K, orientation: q = "horizontal", style: J, ...$ }) {
	let pA = useRef({}), mA = le((s) => {
		B(pA.current, s) || (pA.current = s, K?.(s));
	}), hA = ae(U), yA = useRef(null), [bA, xA] = useState(!1), [SA, wA] = useState(w ?? {}), [TA, EA] = wt(), DA = useRef({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		separators: []
	}), OA = ue(yA, L);
	Pt(hA, V);
	let kA = useMemo(() => ({
		id: hA,
		orientation: q,
		registerPanel: (s) => {
			let d = DA.current;
			return d.panels = ie(q, [...d.panels, s]), EA(), () => {
				d.panels = d.panels.filter((d) => d !== s), EA();
			};
		},
		registerSeparator: (s) => {
			let d = DA.current;
			return d.separators = ie(q, [...d.separators, s]), EA(), () => {
				d.separators = d.separators.filter((d) => d !== s), EA();
			};
		}
	}), [
		hA,
		EA,
		q
	]), AA = Lt({
		defaultLayout: w,
		disableCursor: k
	}), jA = useRef(null);
	A(() => {
		let s = yA.current;
		if (s === null) return;
		let d = DA.current, w = {
			defaultLayout: AA.defaultLayout,
			disableCursor: !!AA.disableCursor,
			disabled: !!F,
			element: s,
			id: hA,
			inMemoryLastExpandedPanelSizes: DA.current.lastExpandedPanelSizes,
			inMemoryLayouts: DA.current.layouts,
			orientation: q,
			panels: d.panels,
			separators: d.separators
		};
		jA.current = w;
		let k = bt(w), L = D().mountedGroups.get(w);
		if (L) {
			let { defaultLayoutDeferred: s, derivedPanelConstraints: d, layout: w } = L;
			!s && d.length > 0 && (wA(w), mA?.(w));
		}
		let V = T.addListener("interactionStateChange", (s) => {
			switch (s.state) {
				case "active":
					xA(s.hitRegions.some((s) => s.group === w));
					break;
				default:
					xA(!1);
					break;
			}
		}), U = T.addListener("mountedGroupsChange", (s) => {
			let d = s.get(w);
			if (d) {
				let { defaultLayoutDeferred: s, derivedPanelConstraints: w, layout: k } = d;
				if (s || w.length === 0) return;
				wA(k), mA?.(k);
			}
		});
		return () => {
			jA.current = null, k(), V(), U();
		};
	}, [
		F,
		hA,
		mA,
		q,
		TA,
		AA
	]), useEffect(() => {
		let s = jA.current;
		s && (s.defaultLayout = w, s.disableCursor = !!k);
	});
	let MA = { [Fe]: bA ? "none" : void 0 };
	for (let s in SA) {
		let d = Ve(hA, s);
		MA[d] = SA[s];
	}
	return /* @__PURE__ */ jsx(je.Provider, {
		value: kA,
		children: /* @__PURE__ */ jsx("div", {
			...$,
			"aria-orientation": q,
			className: d,
			"data-group": !0,
			"data-testid": hA,
			id: hA,
			ref: OA,
			style: {
				height: "100%",
				width: "100%",
				overflow: "hidden",
				...J,
				...MA,
				display: "flex",
				flexDirection: q === "horizontal" ? "row" : "column",
				flexWrap: "nowrap"
			},
			children: s
		})
	});
}
Rt.displayName = "Group";
function ce() {
	let s = useContext(je);
	return z(s, "Group Context not found; did you render a Panel or Separator outside of a Group?"), s;
}
function Et({ groupId: s, panelId: d }) {
	let w = () => {
		let { mountedGroups: d } = D();
		for (let [w, { defaultLayoutDeferred: k, derivedPanelConstraints: F, layout: L, separatorToPanels: V }] of d) if (w.id === s) return {
			defaultLayoutDeferred: k,
			derivedPanelConstraints: F,
			group: w,
			layout: L,
			separatorToPanels: V
		};
		throw Error(`Group ${s} not found`);
	}, k = () => {
		let s = w().derivedPanelConstraints.find((s) => s.panelId === d);
		if (s !== void 0) return s;
		throw Error(`Panel constraints not found for Panel ${d}`);
	}, F = () => {
		let s = w().group.panels.find((s) => s.id === d);
		if (s !== void 0) return s;
		throw Error(`Layout not found for Panel ${d}`);
	}, L = () => {
		let s = w().layout[d];
		if (s !== void 0) return s;
		throw Error(`Layout not found for Panel ${d}`);
	}, V = (s) => {
		let k = L();
		if (s === k) return;
		let { defaultLayoutDeferred: F, derivedPanelConstraints: V, group: U, layout: K, separatorToPanels: q } = w(), J = U.panels.findIndex((s) => s.id === d), X = J === U.panels.length - 1, $ = _({
			layout: Z({
				delta: X ? k - s : s - k,
				initialLayout: K,
				panelConstraints: V,
				pivotIndices: X ? [J - 1, J] : [J, J + 1],
				prevLayout: K,
				trigger: "imperative-api"
			}),
			panelConstraints: V
		});
		B(K, $) || I((s) => ({ mountedGroups: new Map(s.mountedGroups).set(U, {
			defaultLayoutDeferred: F,
			derivedPanelConstraints: V,
			layout: $,
			separatorToPanels: q
		}) }));
	};
	return {
		collapse: () => {
			let { collapsible: s, collapsedSize: d } = k(), { mutableValues: w } = F(), U = L();
			s && U !== d && (w.expandToSize = U, V(d));
		},
		expand: () => {
			let { collapsible: s, collapsedSize: d, minSize: w } = k(), { mutableValues: U } = F(), K = L();
			if (s && K === d) {
				let s = U.expandToSize ?? w;
				s === 0 && (s = 1), V(s);
			}
		},
		getSize: () => {
			let { group: s } = w(), d = L(), { element: k } = F();
			return {
				asPercentage: d,
				inPixels: s.orientation === "horizontal" ? k.offsetWidth : k.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: s, collapsedSize: d } = k(), w = L();
			return s && R$1(d, w);
		},
		resize: (s) => {
			if (L() !== s) {
				let d;
				switch (typeof s) {
					case "number": {
						let { group: k } = w();
						d = G(s / W({ group: k }) * 100);
						break;
					}
					case "string":
						d = parseFloat(s);
						break;
				}
				V(d);
			}
		}
	};
}
function It(s, d) {
	let { id: w } = ce(), k = useRef({
		collapse: ne,
		expand: ne,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: ne
	});
	useImperativeHandle(d, () => k.current, []), A(() => {
		Object.assign(k.current, Et({
			groupId: w,
			panelId: s
		}));
	});
}
function kt({ children: s, className: d, collapsedSize: w = "0%", collapsible: k = !1, defaultSize: F, elementRef: L, id: V, maxSize: U = "100%", minSize: K = "0%", onResize: q, panelRef: J, style: X, ...$ }) {
	let pA = !!V, mA = ae(V), hA = useRef(null), gA = ue(hA, L), { id: vA, registerPanel: yA } = ce(), bA = q !== null, xA = le((s, d, w) => {
		q?.(s, V, w);
	});
	A(() => {
		let s = hA.current;
		if (s !== null) return yA({
			element: s,
			id: mA,
			idIsStable: pA,
			mutableValues: {
				expandToSize: void 0,
				prevSize: void 0
			},
			onResize: bA ? xA : void 0,
			panelConstraints: {
				collapsedSize: w,
				collapsible: k,
				defaultSize: F,
				maxSize: U,
				minSize: K
			}
		});
	}, [
		w,
		k,
		F,
		bA,
		mA,
		pA,
		U,
		K,
		xA,
		yA
	]), It(mA, J);
	let SA = Ve(vA, mA);
	return /* @__PURE__ */ jsx("div", {
		...$,
		"data-panel": !0,
		"data-testid": mA,
		id: mA,
		ref: gA,
		style: {
			...Gt,
			flexBasis: 0,
			flexGrow: `var(${SA}, 1)`,
			flexShrink: 1,
			overflow: "hidden",
			pointerEvents: `var(${Fe})`
		},
		children: /* @__PURE__ */ jsx("div", {
			className: d,
			style: {
				width: "100%",
				height: "100%",
				...X
			},
			children: s
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
function Dt({ layout: s, panelConstraints: d, panelId: w, panelIndex: k }) {
	let F, L, V = s[w], U = d.find((s) => s.panelId === w);
	if (U) {
		let K = U.maxSize, q = L = U.collapsible ? U.collapsedSize : U.minSize, J = [k, k + 1];
		L = _({
			layout: Z({
				delta: q - V,
				initialLayout: s,
				panelConstraints: d,
				pivotIndices: J,
				prevLayout: s,
				trigger: "keyboard"
			}),
			panelConstraints: d
		})[w], F = _({
			layout: Z({
				delta: K - V,
				initialLayout: s,
				panelConstraints: d,
				pivotIndices: J,
				prevLayout: s,
				trigger: "keyboard"
			}),
			panelConstraints: d
		})[w];
	}
	return {
		valueControls: w,
		valueMax: F,
		valueMin: L,
		valueNow: V
	};
}
function Ot({ children: s, className: d, elementRef: w, id: k, style: F, ...L }) {
	let V = ae(k), [U, K] = useState({}), [q, J] = useState("inactive"), X = useRef(null), $ = ue(X, w), { id: pA, orientation: mA, registerSeparator: hA } = ce(), gA = mA === "horizontal" ? "vertical" : "horizontal";
	return A(() => {
		let s = X.current;
		if (s !== null) {
			let d = {
				element: s,
				id: V
			}, w = hA(d), k = T.addListener("interactionStateChange", (s) => {
				J(s.state !== "inactive" && s.hitRegions.some((s) => s.separator === d) ? s.state : "inactive");
			}), F = T.addListener("mountedGroupsChange", (s) => {
				s.forEach(({ derivedPanelConstraints: s, layout: w, separatorToPanels: k }, F) => {
					if (F.id === pA) {
						let L = k.get(d);
						if (L) {
							let d = L[0], k = F.panels.indexOf(d);
							K(Dt({
								layout: w,
								panelConstraints: s,
								panelId: d.id,
								panelIndex: k
							}));
						}
					}
				});
			});
			return () => {
				k(), F(), w();
			};
		}
	}, [
		pA,
		V,
		hA
	]), /* @__PURE__ */ jsx("div", {
		...L,
		"aria-controls": U.valueControls,
		"aria-orientation": gA,
		"aria-valuemax": U.valueMax,
		"aria-valuemin": U.valueMin,
		"aria-valuenow": U.valueNow,
		children: s,
		className: d,
		"data-separator": q,
		"data-testid": V,
		id: V,
		ref: $,
		role: "separator",
		style: {
			flexBasis: "auto",
			...F,
			flexGrow: 0,
			flexShrink: 0
		},
		tabIndex: 0
	});
}
Ot.displayName = "Separator";
function _objectWithoutPropertiesLoose(s, d) {
	if (s == null) return {};
	var w = {}, k = Object.keys(s), F, L;
	for (L = 0; L < k.length; L++) F = k[L], !(d.indexOf(F) >= 0) && (w[F] = s[F]);
	return w;
}
var _excluded$T = ["color"], CheckIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$T);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$Y = ["color"], ChevronRightIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$Y);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1M = ["color"], DoubleArrowLeftIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$1M);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1N = ["color"], DoubleArrowRightIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$1N);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$25 = ["color"], EyeNoneIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$25);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$26 = ["color"], EyeOpenIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$26);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$2l = ["color"], GearIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$2l);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3V = ["color"], Share1Icon = /* @__PURE__ */ forwardRef(function(s, d) {
	var w = s.color, k = w === void 0 ? "currentColor" : w, F = _objectWithoutPropertiesLoose(s, _excluded$3V);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, F, { ref: d }), createElement("path", {
		d: "M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",
		fill: k,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), EditorContext = createContext(void 0), SAFE_FONTS = [
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
const EditorProvider = ({ children: s, isList: w = !1, availableProps: k = [], theme: F = "light" }) => {
	let [L, V] = useState({
		elements: [],
		selectedElementId: null,
		isList: w,
		mockData: [],
		singleMockData: {},
		listSettings: {
			sortOrder: "asc",
			newestPosition: "bottom",
			scrollDirection: "down"
		},
		availableProps: k,
		availableFonts: [
			...SAFE_FONTS,
			"Roboto",
			"Open Sans",
			"Lato",
			"Montserrat"
		],
		theme: F
	});
	React.useEffect(() => {
		L.availableFonts.forEach((s) => {
			if (SAFE_FONTS.includes(s)) return;
			let d = `font-${s.replace(/\s+/g, "-").toLowerCase()}`;
			if (!document.getElementById(d)) {
				let w = document.createElement("link");
				w.id = d, w.href = `https://fonts.googleapis.com/css2?family=${s.replace(/ /g, "+")}&display=swap`, w.rel = "stylesheet", document.head.appendChild(w);
			}
		});
	}, [L.availableFonts]), React.useEffect(() => {
		V((s) => ({
			...s,
			isList: w,
			availableProps: k,
			theme: F
		}));
	}, [
		w,
		k,
		F
	]);
	let U = React.useCallback((s) => {
		V((d) => ({
			...d,
			canvasHeight: s
		}));
	}, []), K = React.useCallback((s) => {
		V((d) => ({
			...d,
			...s,
			isList: s.isList ?? d.isList,
			availableProps: s.availableProps ?? d.availableProps,
			availableFonts: s.availableFonts ?? d.availableFonts,
			selectedElementId: null
		}));
	}, []), q = React.useCallback((s) => {
		let d = {};
		s.type === "box" && (d.backgroundColor = "var(--gray-4)");
		let w = {
			id: crypto.randomUUID(),
			x: 50,
			y: 50,
			width: 200,
			height: s.type === "text" ? 50 : 150,
			...s,
			style: {
				...d,
				...s.style || {}
			}
		};
		V((s) => ({
			...s,
			elements: [...s.elements, w]
		}));
	}, []), J = React.useCallback((s) => {
		V((d) => ({
			...d,
			elements: d.elements.filter((d) => d.id !== s),
			selectedElementId: d.selectedElementId === s ? null : d.selectedElementId
		}));
	}, []), X = React.useCallback((s) => {
		V((d) => ({
			...d,
			selectedElementId: s
		}));
	}, []), $ = React.useCallback((s, d) => {
		V((w) => {
			let k = [...w.elements], F = k[s];
			return k.splice(s, 1), k.splice(d, 0, F), {
				...w,
				elements: k
			};
		});
	}, []), pA = React.useCallback((s, d) => {
		V((w) => ({
			...w,
			elements: w.elements.map((w) => w.id === s ? {
				...w,
				...d
			} : w)
		}));
	}, []), mA = React.useCallback((s, d) => {
		V((w) => ({
			...w,
			mockData: s,
			singleMockData: d
		}));
	}, []), hA = React.useCallback((s) => {
		V((d) => ({
			...d,
			listSettings: {
				...d.listSettings,
				...s
			}
		}));
	}, []), gA = React.useMemo(() => ({
		state: L,
		addElement: q,
		removeElement: J,
		selectElement: X,
		moveElement: $,
		updateElement: pA,
		setMockData: mA,
		updateListSettings: hA,
		setCanvasHeight: U,
		loadState: K
	}), [
		L,
		q,
		J,
		X,
		$,
		pA,
		mA,
		hA,
		U,
		K
	]);
	return /* @__PURE__ */ jsx(EditorContext.Provider, {
		value: gA,
		children: s
	});
}, useEditor = () => {
	let s = useContext(EditorContext);
	if (!s) throw Error("useEditor must be used within an EditorProvider");
	return s;
};
var __assign$1 = function() {
	return __assign$1 = Object.assign || function(s) {
		for (var d, w = 1, k = arguments.length; w < k; w++) for (var F in d = arguments[w], d) Object.prototype.hasOwnProperty.call(d, F) && (s[F] = d[F]);
		return s;
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
}, Resizer = memo(function(s) {
	var d = s.onResizeStart, w = s.direction, k = s.children, F = s.replaceStyles, L = s.className, V = useCallback(function(s) {
		d(s, w);
	}, [d, w]), U = useCallback(function(s) {
		d(s, w);
	}, [d, w]), K = useMemo(function() {
		return __assign$1(__assign$1({
			position: "absolute",
			userSelect: "none"
		}, styles[w]), F ?? {});
	}, [F, w]);
	return jsx("div", {
		className: L || void 0,
		style: K,
		onMouseDown: V,
		onTouchStart: U,
		children: k
	});
}), __extends = (function() {
	var s = function(d, w) {
		return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, d) {
			s.__proto__ = d;
		} || function(s, d) {
			for (var w in d) Object.prototype.hasOwnProperty.call(d, w) && (s[w] = d[w]);
		}, s(d, w);
	};
	return function(d, w) {
		if (typeof w != "function" && w !== null) throw TypeError("Class extends value " + String(w) + " is not a constructor or null");
		s(d, w);
		function k() {
			this.constructor = d;
		}
		d.prototype = w === null ? Object.create(w) : (k.prototype = w.prototype, new k());
	};
})(), __assign = function() {
	return __assign = Object.assign || function(s) {
		for (var d, w = 1, k = arguments.length; w < k; w++) for (var F in d = arguments[w], d) Object.prototype.hasOwnProperty.call(d, F) && (s[F] = d[F]);
		return s;
	}, __assign.apply(this, arguments);
}, DEFAULT_SIZE = {
	width: "auto",
	height: "auto"
}, clamp$1 = function(s, d, w) {
	return Math.max(Math.min(s, w), d);
}, snap = function(s, d, w) {
	var k = Math.round(s / d);
	return k * d + w * (k - 1);
}, hasDirection = function(s, d) {
	return new RegExp(s, "i").test(d);
}, isTouchEvent = function(s) {
	return !!(s.touches && s.touches.length);
}, isMouseEvent = function(s) {
	return !!((s.clientX || s.clientX === 0) && (s.clientY || s.clientY === 0));
}, findClosestSnap = function(s, d, w) {
	w === void 0 && (w = 0);
	var k = d.reduce(function(w, k, F) {
		return Math.abs(k - s) < Math.abs(d[w] - s) ? F : w;
	}, 0), F = Math.abs(d[k] - s);
	return w === 0 || F < w ? d[k] : s;
}, getStringSize = function(s) {
	return s = s.toString(), s === "auto" || s.endsWith("px") || s.endsWith("%") || s.endsWith("vh") || s.endsWith("vw") || s.endsWith("vmax") || s.endsWith("vmin") ? s : `${s}px`;
}, getPixelSize = function(s, d, w, k) {
	if (s && typeof s == "string") {
		if (s.endsWith("px")) return Number(s.replace("px", ""));
		if (s.endsWith("%")) {
			var F = Number(s.replace("%", "")) / 100;
			return d * F;
		}
		if (s.endsWith("vw")) {
			var F = Number(s.replace("vw", "")) / 100;
			return w * F;
		}
		if (s.endsWith("vh")) {
			var F = Number(s.replace("vh", "")) / 100;
			return k * F;
		}
	}
	return s;
}, calculateNewMax = function(s, d, w, k, F, L, V) {
	return k = getPixelSize(k, s.width, d, w), F = getPixelSize(F, s.height, d, w), L = getPixelSize(L, s.width, d, w), V = getPixelSize(V, s.height, d, w), {
		maxWidth: k === void 0 ? void 0 : Number(k),
		maxHeight: F === void 0 ? void 0 : Number(F),
		minWidth: L === void 0 ? void 0 : Number(L),
		minHeight: V === void 0 ? void 0 : Number(V)
	};
}, normalizeToPair = function(s) {
	return Array.isArray(s) ? s : [s, s];
}, definedProps = /* @__PURE__ */ "as.ref.style.className.grid.gridGap.snap.bounds.boundsByDirection.size.defaultSize.minWidth.minHeight.maxWidth.maxHeight.lockAspectRatio.lockAspectRatioExtraWidth.lockAspectRatioExtraHeight.enable.handleStyles.handleClasses.handleWrapperStyle.handleWrapperClass.children.onResizeStart.onResize.onResizeStop.handleComponent.scale.resizeRatio.snapGap".split("."), baseClassName = "__resizable_base__", Resizable = function(s) {
	__extends(d, s);
	function d(d) {
		var w = s.call(this, d) || this;
		return w.ratio = 1, w.resizable = null, w.parentLeft = 0, w.parentTop = 0, w.resizableLeft = 0, w.resizableRight = 0, w.resizableTop = 0, w.resizableBottom = 0, w.targetLeft = 0, w.targetTop = 0, w.delta = {
			width: 0,
			height: 0
		}, w.appendBase = function() {
			if (!w.resizable || !w.window) return null;
			var s = w.parentNode;
			if (!s) return null;
			var d = w.window.document.createElement("div");
			return d.style.width = "100%", d.style.height = "100%", d.style.position = "absolute", d.style.transform = "scale(0, 0)", d.style.left = "0", d.style.flex = "0 0 100%", d.classList ? d.classList.add(baseClassName) : d.className += baseClassName, s.appendChild(d), d;
		}, w.removeBase = function(s) {
			var d = w.parentNode;
			d && d.removeChild(s);
		}, w.state = {
			isResizing: !1,
			width: w.propsSize?.width ?? "auto",
			height: w.propsSize?.height ?? "auto",
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
		}, w.onResizeStart = w.onResizeStart.bind(w), w.onMouseMove = w.onMouseMove.bind(w), w.onMouseUp = w.onMouseUp.bind(w), w;
	}
	return Object.defineProperty(d.prototype, "parentNode", {
		get: function() {
			return this.resizable ? this.resizable.parentNode : null;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(d.prototype, "window", {
		get: function() {
			return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(d.prototype, "propsSize", {
		get: function() {
			return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(d.prototype, "size", {
		get: function() {
			var s = 0, d = 0;
			if (this.resizable && this.window) {
				var w = this.resizable.offsetWidth, k = this.resizable.offsetHeight, F = this.resizable.style.position;
				F !== "relative" && (this.resizable.style.position = "relative"), s = this.resizable.style.width === "auto" ? w : this.resizable.offsetWidth, d = this.resizable.style.height === "auto" ? k : this.resizable.offsetHeight, this.resizable.style.position = F;
			}
			return {
				width: s,
				height: d
			};
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(d.prototype, "sizeStyle", {
		get: function() {
			var s = this, d = this.props.size, w = function(d) {
				if (s.state[d] === void 0 || s.state[d] === "auto") return "auto";
				if (s.propsSize && s.propsSize[d] && s.propsSize[d]?.toString().endsWith("%")) {
					if (s.state[d].toString().endsWith("%")) return s.state[d].toString();
					var w = s.getParentSize();
					return `${Number(s.state[d].toString().replace("px", "")) / w[d] * 100}%`;
				}
				return getStringSize(s.state[d]);
			};
			return {
				width: d && d.width !== void 0 && !this.state.isResizing ? getStringSize(d.width) : w("width"),
				height: d && d.height !== void 0 && !this.state.isResizing ? getStringSize(d.height) : w("height")
			};
		},
		enumerable: !1,
		configurable: !0
	}), d.prototype.getParentSize = function() {
		if (!this.parentNode) return this.window ? {
			width: this.window.innerWidth,
			height: this.window.innerHeight
		} : {
			width: 0,
			height: 0
		};
		var s = this.appendBase();
		if (!s) return {
			width: 0,
			height: 0
		};
		var d = !1, w = this.parentNode.style.flexWrap;
		w !== "wrap" && (d = !0, this.parentNode.style.flexWrap = "wrap"), s.style.position = "relative", s.style.minWidth = "100%", s.style.minHeight = "100%";
		var k = {
			width: s.offsetWidth,
			height: s.offsetHeight
		};
		return d && (this.parentNode.style.flexWrap = w), this.removeBase(s), k;
	}, d.prototype.bindEvents = function() {
		this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
			capture: !0,
			passive: !1
		}), this.window.addEventListener("touchend", this.onMouseUp));
	}, d.prototype.unbindEvents = function() {
		this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
	}, d.prototype.componentDidMount = function() {
		if (!(!this.resizable || !this.window)) {
			var s = this.window.getComputedStyle(this.resizable);
			this.setState({
				width: this.state.width || this.size.width,
				height: this.state.height || this.size.height,
				flexBasis: s.flexBasis === "auto" ? void 0 : s.flexBasis
			});
		}
	}, d.prototype.componentWillUnmount = function() {
		this.window && this.unbindEvents();
	}, d.prototype.createSizeForCssProperty = function(s, d) {
		var w = this.propsSize && this.propsSize[d];
		return this.state[d] === "auto" && this.state.original[d] === s && (w === void 0 || w === "auto") ? "auto" : s;
	}, d.prototype.calculateNewMaxFromBoundary = function(s, d) {
		var w = this.props.boundsByDirection, k = this.state.direction, F = w && hasDirection("left", k), L = w && hasDirection("top", k), V, U;
		if (this.props.bounds === "parent") {
			var K = this.parentNode;
			K && (V = F ? this.resizableRight - this.parentLeft : K.offsetWidth + (this.parentLeft - this.resizableLeft), U = L ? this.resizableBottom - this.parentTop : K.offsetHeight + (this.parentTop - this.resizableTop));
		} else this.props.bounds === "window" ? this.window && (V = F ? this.resizableRight : this.window.innerWidth - this.resizableLeft, U = L ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (V = F ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), U = L ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
		return V && Number.isFinite(V) && (s = s && s < V ? s : V), U && Number.isFinite(U) && (d = d && d < U ? d : U), {
			maxWidth: s,
			maxHeight: d
		};
	}, d.prototype.calculateNewSizeFromDirection = function(s, d) {
		var w = this.props.scale || 1, k = normalizeToPair(this.props.resizeRatio || 1), F = k[0], L = k[1], V = this.state, U = V.direction, K = V.original, q = this.props, J = q.lockAspectRatio, X = q.lockAspectRatioExtraHeight, $ = q.lockAspectRatioExtraWidth, pA = K.width, mA = K.height, hA = X || 0, gA = $ || 0;
		return hasDirection("right", U) && (pA = K.width + (s - K.x) * F / w, J && (mA = (pA - gA) / this.ratio + hA)), hasDirection("left", U) && (pA = K.width - (s - K.x) * F / w, J && (mA = (pA - gA) / this.ratio + hA)), hasDirection("bottom", U) && (mA = K.height + (d - K.y) * L / w, J && (pA = (mA - hA) * this.ratio + gA)), hasDirection("top", U) && (mA = K.height - (d - K.y) * L / w, J && (pA = (mA - hA) * this.ratio + gA)), {
			newWidth: pA,
			newHeight: mA
		};
	}, d.prototype.calculateNewSizeFromAspectRatio = function(s, d, w, k) {
		var F = this.props, L = F.lockAspectRatio, V = F.lockAspectRatioExtraHeight, U = F.lockAspectRatioExtraWidth, K = k.width === void 0 ? 10 : k.width, q = w.width === void 0 || w.width < 0 ? s : w.width, J = k.height === void 0 ? 10 : k.height, X = w.height === void 0 || w.height < 0 ? d : w.height, $ = V || 0, pA = U || 0;
		if (L) {
			var mA = (J - $) * this.ratio + pA, hA = (X - $) * this.ratio + pA, gA = (K - pA) / this.ratio + $, _A = (q - pA) / this.ratio + $, vA = Math.max(K, mA), yA = Math.min(q, hA), bA = Math.max(J, gA), xA = Math.min(X, _A);
			s = clamp$1(s, vA, yA), d = clamp$1(d, bA, xA);
		} else s = clamp$1(s, K, q), d = clamp$1(d, J, X);
		return {
			newWidth: s,
			newHeight: d
		};
	}, d.prototype.setBoundingClientRect = function() {
		var s = 1 / (this.props.scale || 1);
		if (this.props.bounds === "parent") {
			var d = this.parentNode;
			if (d) {
				var w = d.getBoundingClientRect();
				this.parentLeft = w.left * s, this.parentTop = w.top * s;
			}
		}
		if (this.props.bounds && typeof this.props.bounds != "string") {
			var k = this.props.bounds.getBoundingClientRect();
			this.targetLeft = k.left * s, this.targetTop = k.top * s;
		}
		if (this.resizable) {
			var F = this.resizable.getBoundingClientRect(), L = F.left, V = F.top, U = F.right, K = F.bottom;
			this.resizableLeft = L * s, this.resizableRight = U * s, this.resizableTop = V * s, this.resizableBottom = K * s;
		}
	}, d.prototype.onResizeStart = function(s, d) {
		if (!(!this.resizable || !this.window)) {
			var w = 0, k = 0;
			if (s.nativeEvent && isMouseEvent(s.nativeEvent) ? (w = s.nativeEvent.clientX, k = s.nativeEvent.clientY) : s.nativeEvent && isTouchEvent(s.nativeEvent) && (w = s.nativeEvent.touches[0].clientX, k = s.nativeEvent.touches[0].clientY), !(this.props.onResizeStart && this.resizable && this.props.onResizeStart(s, d, this.resizable) === !1)) {
				this.props.size && (this.props.size.height !== void 0 && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), this.props.size.width !== void 0 && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
				var F, L = this.window.getComputedStyle(this.resizable);
				if (L.flexBasis !== "auto") {
					var V = this.parentNode;
					V && (this.flexDir = this.window.getComputedStyle(V).flexDirection.startsWith("row") ? "row" : "column", F = L.flexBasis);
				}
				this.setBoundingClientRect(), this.bindEvents();
				var U = {
					original: {
						x: w,
						y: k,
						width: this.size.width,
						height: this.size.height
					},
					isResizing: !0,
					backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(s.target).cursor || "auto" }),
					direction: d,
					flexBasis: F
				};
				this.setState(U);
			}
		}
	}, d.prototype.onMouseMove = function(s) {
		var d = this;
		if (!(!this.state.isResizing || !this.resizable || !this.window)) {
			if (this.window.TouchEvent && isTouchEvent(s)) try {
				s.preventDefault(), s.stopPropagation();
			} catch {}
			var w = this.props, k = w.maxWidth, F = w.maxHeight, L = w.minWidth, V = w.minHeight, U = isTouchEvent(s) ? s.touches[0].clientX : s.clientX, K = isTouchEvent(s) ? s.touches[0].clientY : s.clientY, q = this.state, J = q.direction, X = q.original, $ = q.width, pA = q.height, mA = this.getParentSize(), hA = calculateNewMax(mA, this.window.innerWidth, this.window.innerHeight, k, F, L, V);
			k = hA.maxWidth, F = hA.maxHeight, L = hA.minWidth, V = hA.minHeight;
			var gA = this.calculateNewSizeFromDirection(U, K), _A = gA.newHeight, vA = gA.newWidth, yA = this.calculateNewMaxFromBoundary(k, F);
			this.props.snap && this.props.snap.x && (vA = findClosestSnap(vA, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (_A = findClosestSnap(_A, this.props.snap.y, this.props.snapGap));
			var bA = this.calculateNewSizeFromAspectRatio(vA, _A, {
				width: yA.maxWidth,
				height: yA.maxHeight
			}, {
				width: L,
				height: V
			});
			if (vA = bA.newWidth, _A = bA.newHeight, this.props.grid) {
				var SA = snap(vA, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), CA = snap(_A, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), wA = this.props.snapGap || 0, TA = wA === 0 || Math.abs(SA - vA) <= wA ? SA : vA, EA = wA === 0 || Math.abs(CA - _A) <= wA ? CA : _A;
				vA = TA, _A = EA;
			}
			var DA = {
				width: vA - X.width,
				height: _A - X.height
			};
			if (this.delta = DA, $ && typeof $ == "string") {
				if ($.endsWith("%")) {
					var OA = vA / mA.width * 100;
					vA = `${OA}%`;
				} else if ($.endsWith("vw")) {
					var kA = vA / this.window.innerWidth * 100;
					vA = `${kA}vw`;
				} else if ($.endsWith("vh")) {
					var AA = vA / this.window.innerHeight * 100;
					vA = `${AA}vh`;
				}
			}
			if (pA && typeof pA == "string") {
				if (pA.endsWith("%")) {
					var OA = _A / mA.height * 100;
					_A = `${OA}%`;
				} else if (pA.endsWith("vw")) {
					var kA = _A / this.window.innerWidth * 100;
					_A = `${kA}vw`;
				} else if (pA.endsWith("vh")) {
					var AA = _A / this.window.innerHeight * 100;
					_A = `${AA}vh`;
				}
			}
			var jA = {
				width: this.createSizeForCssProperty(vA, "width"),
				height: this.createSizeForCssProperty(_A, "height")
			};
			this.flexDir === "row" ? jA.flexBasis = jA.width : this.flexDir === "column" && (jA.flexBasis = jA.height);
			var MA = this.state.width !== jA.width, NA = this.state.height !== jA.height, PA = this.state.flexBasis !== jA.flexBasis, FA = MA || NA || PA;
			FA && flushSync(function() {
				d.setState(jA);
			}), this.props.onResize && FA && this.props.onResize(s, J, this.resizable, DA);
		}
	}, d.prototype.onMouseUp = function(s) {
		var d = this.state, w = d.isResizing, k = d.direction;
		d.original, !(!w || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(s, k, this.resizable, this.delta), this.props.size && this.setState({
			width: this.props.size.width ?? "auto",
			height: this.props.size.height ?? "auto"
		}), this.unbindEvents(), this.setState({
			isResizing: !1,
			backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: "auto" })
		}));
	}, d.prototype.updateSize = function(s) {
		this.setState({
			width: s.width ?? "auto",
			height: s.height ?? "auto"
		});
	}, d.prototype.renderResizer = function() {
		var s = this, d = this.props, w = d.enable, k = d.handleStyles, F = d.handleClasses, L = d.handleWrapperStyle, V = d.handleWrapperClass, U = d.handleComponent;
		return w ? jsx("div", {
			className: V,
			style: L,
			children: Object.keys(w).map(function(d) {
				return w[d] === !1 ? null : jsx(Resizer, {
					direction: d,
					onResizeStart: s.onResizeStart,
					replaceStyles: k && k[d],
					className: F && F[d],
					children: U && U[d] ? U[d] : null
				}, d);
			})
		}) : null;
	}, d.prototype.render = function() {
		var s = this, d = Object.keys(this.props).reduce(function(d, w) {
			return definedProps.indexOf(w) === -1 && (d[w] = s.props[w]), d;
		}, {}), w = __assign(__assign(__assign({
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
		return this.state.flexBasis && (w.flexBasis = this.state.flexBasis), jsxs(this.props.as || "div", __assign({
			style: w,
			className: this.props.className
		}, d, {
			ref: function(d) {
				d && (s.resizable = d);
			},
			children: [
				this.state.isResizing && jsx("div", { style: this.state.backgroundStyle }),
				this.props.children,
				this.renderResizer()
			]
		}));
	}, d.defaultProps = {
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
	}, d;
}(PureComponent);
const ElementContextMenu = ({ children: s, element: d }) => {
	let { updateElement: w, removeElement: k, addElement: F, moveElement: L, state: V } = useEditor(), [U, K] = useState(!1), [q, J] = useState(!1), [X, $] = useState(d.content), [pA, mA] = useState(d.dataBinding || ""), hA = useRef(null), gA = useRef(null), yA = (s) => {
		let d = hA.current;
		if (d) {
			let w = d.selectionStart, k = d.selectionEnd, F = X;
			$(F.substring(0, w) + `{{${s}}}` + F.substring(k)), setTimeout(() => {
				d.focus();
				let k = w + s.length + 4;
				d.setSelectionRange(k, k);
			}, 0);
		} else $((d) => d + `{{${s}}}`);
	}, bA = (s) => {
		w(d.id, { style: {
			...d.style,
			...s
		} });
	}, xA = () => {
		let s = V.elements.findIndex((s) => s.id === d.id);
		s < V.elements.length - 1 && L(s, V.elements.length - 1);
	}, TA = () => {
		let s = V.elements.findIndex((s) => s.id === d.id);
		s > 0 && L(s, 0);
	}, EA = () => {
		F({
			type: d.type,
			content: d.content,
			x: d.x + 20,
			y: d.y + 20,
			width: d.width,
			height: d.height,
			style: d.style
		});
	}, DA = [
		"#000000",
		"#FFFFFF",
		"#FF0000",
		"#00FF00",
		"#0000FF",
		"#FFA500",
		"#808080",
		"#800080",
		"transparent"
	];
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [
		/* @__PURE__ */ jsx(s$2, {
			open: U,
			onOpenChange: K,
			children: /* @__PURE__ */ jsxs(p$6, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$2, { children: "Editar Texto" }), /* @__PURE__ */ jsxs(p, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(r, {
							ref: hA,
							value: X,
							onChange: (s) => $(s.target.value),
							placeholder: "Digite o novo texto...",
							style: { height: 100 }
						}),
						V.availableProps && V.availableProps.length > 0 && /* @__PURE__ */ jsxs(p, {
							direction: "column",
							gap: "2",
							children: [/* @__PURE__ */ jsx(p$2, {
								size: "1",
								color: "gray",
								children: "Inserir variável:"
							}), /* @__PURE__ */ jsx(p, {
								gap: "2",
								wrap: "wrap",
								children: V.availableProps.map((s) => /* @__PURE__ */ jsx(e, {
									color: "blue",
									variant: "surface",
									style: { cursor: "pointer" },
									onClick: () => yA(s.dataName),
									children: s.name
								}, s.dataName))
							})]
						}),
						/* @__PURE__ */ jsxs(p, {
							gap: "3",
							justify: "end",
							children: [/* @__PURE__ */ jsx(D$1, { children: /* @__PURE__ */ jsx(o, {
								variant: "soft",
								color: "gray",
								children: "Cancelar"
							}) }), /* @__PURE__ */ jsx(o, {
								onClick: () => {
									w(d.id, { content: X }), K(!1);
								},
								children: "Salvar"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(s$2, {
			open: q,
			onOpenChange: J,
			children: /* @__PURE__ */ jsxs(p$6, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$2, { children: "Vincular Dados Manualmente" }), /* @__PURE__ */ jsxs(p, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(p$2, {
							size: "2",
							children: "Nome da propriedade (ex: titulo, preco, imagem):"
						}),
						/* @__PURE__ */ jsx(u, {
							value: pA,
							onChange: (s) => mA(s.target.value),
							placeholder: "propriedade"
						}),
						/* @__PURE__ */ jsxs(p, {
							gap: "3",
							justify: "end",
							children: [/* @__PURE__ */ jsx(D$1, { children: /* @__PURE__ */ jsx(o, {
								variant: "soft",
								color: "gray",
								children: "Cancelar"
							}) }), /* @__PURE__ */ jsx(o, {
								onClick: () => {
									let s = pA, k = { dataBinding: s };
									d.type === "text" && (k.content = `{{${s}}}`), w(d.id, k), J(!1);
								},
								children: "Vincular"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx("input", {
			type: "file",
			ref: gA,
			style: { display: "none" },
			accept: "image/*",
			onChange: (s) => {
				let k = s.target.files?.[0];
				if (k) {
					let s = new FileReader();
					s.onload = (s) => {
						s.target?.result && w(d.id, { content: s.target.result });
					}, s.readAsDataURL(k);
				}
			}
		}),
		/* @__PURE__ */ jsxs(Root2$2, { children: [/* @__PURE__ */ jsx(Trigger$2, {
			asChild: !0,
			children: /* @__PURE__ */ jsx("div", {
				style: { display: "contents" },
				children: s
			})
		}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(Content2$2, {
			className: "ContextMenuContent",
			children: [
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: [
						"Vincular Dados",
						d.dataBinding && /* @__PURE__ */ jsxs("span", {
							style: {
								fontSize: 10,
								marginLeft: 4,
								opacity: .7
							},
							children: [
								"(",
								d.dataBinding,
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
						V.availableProps && V.availableProps.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [V.availableProps.map((s) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								let k = { dataBinding: s.dataName };
								d.type === "text" && (k.content = `{{${s.dataName}}}`), w(d.id, k);
							},
							children: [
								s.name,
								" ",
								/* @__PURE__ */ jsx("div", {
									className: "RightSlot",
									children: s.dataName
								})
							]
						}, s.dataName)), /* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" })] }),
						/* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								mA(d.dataBinding || ""), J(!0);
							},
							children: "Outro / Manual..."
						}),
						d.dataBinding && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => w(d.id, { dataBinding: void 0 }),
							style: { color: "var(--red-9)" },
							children: "Remover Vínculo"
						})] })
					]
				}) })] }),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				d.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => {
						$(d.content), K(!0);
					},
					children: "Editar Texto..."
				}), /* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" })] }),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: EA,
					children: "Duplicar"
				}),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => k(d.id),
					children: "Excluir"
				}),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				d.type === "image" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
							onSelect: () => gA.current?.click(),
							children: "Carregar do Computador"
						}), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								setTimeout(() => {
									let s = window.prompt("Insira a URL da imagem:", d.content);
									s !== null && w(d.id, { content: s });
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
								onSelect: () => bA({ objectFit: "cover" }),
								children: "Preencher (Cover)"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => bA({ objectFit: "contain" }),
								children: "Ajustar (Contain)"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => bA({ objectFit: "fill" }),
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
						onSelect: xA,
						children: "Trazer para frente"
					}), /* @__PURE__ */ jsx(Item2$1, {
						className: "ContextMenuItem",
						onSelect: TA,
						children: "Enviar para trás"
					})]
				}) })] }),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				d.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
						children: V.availableFonts && V.availableFonts.map((s) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => bA({ fontFamily: s }),
							style: { fontFamily: s },
							children: [s, d.style?.fontFamily === s && /* @__PURE__ */ jsx("div", {
								className: "RightSlot",
								children: /* @__PURE__ */ jsx(CheckIcon, {})
							})]
						}, s))
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
						].map((s) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => bA({ fontSize: `${s}px` }),
							children: [s, "px"]
						}, s))
					}) })] }),
					/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
						className: "ContextMenuSubTrigger",
						children: ["Cor do Texto", /* @__PURE__ */ jsx("div", {
							className: "RightSlot",
							children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
						})]
					}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsx(SubContent2$1, {
						className: "ContextMenuSubContent",
						sideOffset: 2,
						alignOffset: -5,
						children: DA.filter((s) => s !== "transparent").map((s) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => bA({ color: s }),
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								backgroundColor: s,
								marginRight: 8,
								border: "1px solid #ccc"
							} }), s]
						}, s))
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
							onSelect: () => bA({ fontWeight: "normal" }),
							children: "Normal"
						}), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => bA({ fontWeight: "bold" }),
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
								onSelect: () => bA({ textAlign: "left" }),
								children: "Esquerda"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => bA({ textAlign: "center" }),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => bA({ textAlign: "right" }),
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
								onSelect: () => bA({
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start"
								}),
								children: "Topo"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => bA({
									display: "flex",
									flexDirection: "column",
									justifyContent: "center"
								}),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => bA({
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
				}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsx(SubContent2$1, {
					className: "ContextMenuSubContent",
					sideOffset: 2,
					alignOffset: -5,
					children: DA.map((s) => /* @__PURE__ */ jsxs(Item2$1, {
						className: "ContextMenuItem",
						onSelect: () => bA({ backgroundColor: s }),
						children: [/* @__PURE__ */ jsx("div", { style: {
							width: 12,
							height: 12,
							backgroundColor: s,
							marginRight: 8,
							border: "1px solid #ccc"
						} }), s === "transparent" ? "Transparente" : s]
					}, s))
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
					].map((s) => /* @__PURE__ */ jsx(Item2$1, {
						className: "ContextMenuItem",
						onSelect: () => bA({ borderRadius: typeof s == "number" ? `${s}px` : s }),
						children: s === "50%" ? "Círculo" : `${s}px`
					}, s))
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
					].map((s) => /* @__PURE__ */ jsxs(Item2$1, {
						className: "ContextMenuItem",
						onSelect: () => bA({ padding: `${s}px` }),
						children: [s, "px"]
					}, s))
				}) })] })
			]
		}) })] })
	] });
};
var DraggableResizableElement = ({ element: s, isSelected: d }) => {
	let { selectElement: w, updateElement: k, state: F } = useEditor(), [L, V] = useState(!1), [U, K] = useState(!1), q = useRef({
		x: 0,
		y: 0
	}), J = useRef({
		x: 0,
		y: 0
	}), $ = F.canvasHeight || 150, pA = useRef(0), mA = useRef(0), hA = useRef({
		x: 0,
		y: 0
	}), gA = F.isList ? F.mockData.length > 0 ? F.mockData[0] : null : F.singleMockData, yA = s.content;
	if (gA) {
		if (s.type === "text") yA = yA.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let w = gA[d.trim()];
			return w == null ? s : String(w);
		});
		else if (s.type === "image") if (s.dataBinding) {
			let d = gA[s.dataBinding];
			d != null && (yA = String(d));
		} else yA = yA.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let w = gA[d.trim()];
			return w == null ? s : String(w);
		});
	}
	let bA = (d) => {
		d.stopPropagation(), w(s.id);
	}, xA = (d) => {
		d.button === 0 && (d.stopPropagation(), w(s.id), V(!0), q.current = {
			x: d.clientX,
			y: d.clientY
		}, J.current = {
			x: s.x,
			y: s.y
		});
	}, SA = (d) => {
		d.stopPropagation(), d.preventDefault(), K(!0);
		let w = d.target.closest(".resizable-element");
		if (w) {
			let k = w.getBoundingClientRect();
			hA.current = {
				x: k.left + k.width / 2,
				y: k.top + k.height / 2
			};
			let F = d.clientX - hA.current.x, L = d.clientY - hA.current.y;
			pA.current = Math.atan2(L, F) * (180 / Math.PI), mA.current = s.rotation || 0;
		}
	};
	useEffect(() => {
		let d = (d) => {
			if (L) {
				let w = d.clientX - q.current.x, L = d.clientY - q.current.y, V = J.current.x + w, U = J.current.y + L;
				F.isList && (U = Math.max(0, U), U + s.height > $ && (U = Math.max(0, $ - s.height))), k(s.id, {
					x: V,
					y: U
				});
			}
			if (U) {
				let w = d.clientX - hA.current.x, F = d.clientY - hA.current.y, L = Math.atan2(F, w) * (180 / Math.PI) - pA.current;
				k(s.id, { rotation: (mA.current + L) % 360 });
			}
		}, w = () => {
			L && V(!1), U && K(!1);
		};
		return (L || U) && (window.addEventListener("mousemove", d), window.addEventListener("mouseup", w)), () => {
			window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", w);
		};
	}, [
		L,
		U,
		s.id,
		k
	]);
	let TA = {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		padding: s.type === "image" || s.type === "text" ? 0 : "8px",
		border: d ? "2px solid var(--accent-9)" : "1px dashed transparent",
		outline: d ? "none" : "1px solid transparent",
		cursor: L ? "grabbing" : "grab",
		borderRadius: "var(--radius-2)",
		overflow: "hidden",
		userSelect: "none",
		...s.style
	};
	return /* @__PURE__ */ jsx(Resizable, {
		className: "resizable-element",
		size: {
			width: s.width,
			height: s.height
		},
		maxHeight: F.isList ? Math.max(10, $ - s.y) : void 0,
		onResizeStop: (d, w, F, L) => {
			k(s.id, {
				width: s.width + L.width,
				height: s.height + L.height
			});
		},
		style: {
			position: "absolute",
			transform: `translate(${s.x}px, ${s.y}px) rotate(${s.rotation || 0}deg)`
		},
		enable: d ? void 0 : !1,
		children: /* @__PURE__ */ jsx(ElementContextMenu, {
			element: s,
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					width: "100%",
					height: "100%",
					position: "relative"
				},
				children: [/* @__PURE__ */ jsxs(p$1, {
					style: TA,
					onMouseDown: xA,
					onClick: bA,
					onMouseEnter: (s) => {
						d || (s.currentTarget.style.borderColor = "var(--gray-6)");
					},
					onMouseLeave: (s) => {
						d || (s.currentTarget.style.borderColor = "transparent");
					},
					children: [
						s.type === "text" && /* @__PURE__ */ jsx(p$2, {
							style: {
								width: "100%",
								height: "100%"
							},
							children: yA
						}),
						s.type === "image" && (yA ? /* @__PURE__ */ jsx("img", {
							src: yA,
							alt: "Element",
							style: {
								width: "100%",
								height: "100%",
								objectFit: s.style?.objectFit || "cover",
								display: "block",
								pointerEvents: "none"
							}
						}) : /* @__PURE__ */ jsx(p$1, {
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
						s.type === "box" && /* @__PURE__ */ jsx(p$1, { style: {
							width: "100%",
							height: "100%"
						} })
					]
				}), d && /* @__PURE__ */ jsx(p$1, {
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
					onMouseDown: SA,
					children: /* @__PURE__ */ jsx(p$1, { style: {
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
};
const Canvas = () => {
	let { state: s, selectElement: d } = useEditor(), w = () => {
		d(null);
	}, k = s.canvasHeight || 150;
	return /* @__PURE__ */ jsxs(p$1, {
		onClick: w,
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
			s.isList && /* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					top: k,
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
						k,
						"px)"
					]
				})
			}),
			s.elements.length === 0 && /* @__PURE__ */ jsx(p, {
				align: "center",
				justify: "center",
				style: {
					height: "100%",
					color: "var(--gray-8)",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ jsx(p$2, { children: "Adicione elementos e arraste livremente" })
			}),
			s.elements.map((d) => /* @__PURE__ */ jsx(DraggableResizableElement, {
				element: d,
				isSelected: s.selectedElementId === d.id
			}, d.id))
		]
	});
};
var LayoutGroupContext = createContext({});
function useConstant(s) {
	let d = useRef(null);
	return d.current === null && (d.current = s()), d.current;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect, PresenceContext = /* @__PURE__ */ createContext(null);
function addUniqueItem(s, d) {
	s.indexOf(d) === -1 && s.push(d);
}
function removeItem(s, d) {
	let w = s.indexOf(d);
	w > -1 && s.splice(w, 1);
}
var clamp = (s, d, w) => w > d ? d : w < s ? s : w;
function formatErrorMessage(s, d) {
	return d ? `${s}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${d}` : s;
}
var warning = () => {}, invariant = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (warning = (s, d, w) => {
	!s && typeof console < "u" && console.warn(formatErrorMessage(d, w));
}, invariant = (s, d, w) => {
	if (!s) throw Error(formatErrorMessage(d, w));
});
var MotionGlobalConfig = {}, isNumericalString = (s) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s);
function isObject(s) {
	return typeof s == "object" && !!s;
}
var isZeroValueString = (s) => /^0[^.\s]+$/u.test(s);
/* @__NO_SIDE_EFFECTS__ */
function memo$1(s) {
	let d;
	return () => (d === void 0 && (d = s()), d);
}
var noop = /* @__NO_SIDE_EFFECTS__ */ (s) => s, combineFunctions = (s, d) => (w) => d(s(w)), pipe = (...s) => s.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (s, d, w) => {
	let k = d - s;
	return k === 0 ? 1 : (w - s) / k;
}, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(s) {
		return addUniqueItem(this.subscriptions, s), () => removeItem(this.subscriptions, s);
	}
	notify(s, d, w) {
		let k = this.subscriptions.length;
		if (k) if (k === 1) this.subscriptions[0](s, d, w);
		else for (let F = 0; F < k; F++) {
			let k = this.subscriptions[F];
			k && k(s, d, w);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (s) => s * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (s) => s / 1e3;
function velocityPerSecond(s, d) {
	return d ? s * (1e3 / d) : 0;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(s, d, w) {
	s || warned.has(d) || (console.warn(formatErrorMessage(d, w)), warned.add(d));
}
var calcBezier = (s, d, w) => (((1 - 3 * w + 3 * d) * s + (3 * w - 6 * d)) * s + 3 * d) * s, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(s, d, w, k, F) {
	let L, V, U = 0;
	do
		V = d + (w - d) / 2, L = calcBezier(V, k, F) - s, L > 0 ? w = V : d = V;
	while (Math.abs(L) > subdivisionPrecision && ++U < subdivisionMaxIterations);
	return V;
}
function cubicBezier(s, d, w, k) {
	if (s === d && w === k) return noop;
	let F = (d) => binarySubdivide(d, 0, 1, s, w);
	return (s) => s === 0 || s === 1 ? s : calcBezier(F(s), d, k);
}
var mirrorEasing = (s) => (d) => d <= .5 ? s(2 * d) / 2 : (2 - s(2 * (1 - d))) / 2, reverseEasing = (s) => (d) => 1 - s(1 - d), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (s) => (s *= 2) < 1 ? .5 * backIn(s) : .5 * (2 - 2 ** (-10 * (s - 1))), circIn = (s) => 1 - Math.sin(Math.acos(s)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (s) => Array.isArray(s) && typeof s[0] != "number", isBezierDefinition = (s) => Array.isArray(s) && typeof s[0] == "number", easingLookup = {
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
}, isValidEasing = (s) => typeof s == "string", easingDefinitionToFunction = (s) => {
	if (isBezierDefinition(s)) {
		invariant(s.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
		let [d, w, k, F] = s;
		return cubicBezier(d, w, k, F);
	} else if (isValidEasing(s)) return invariant(easingLookup[s] !== void 0, `Invalid easing type '${s}'`, "invalid-easing-type"), easingLookup[s];
	return s;
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
function createRenderStep(s, d) {
	let w = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), F = !1, L = !1, V = /* @__PURE__ */ new WeakSet(), U = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, K = 0;
	function q(d) {
		V.has(d) && (J.schedule(d), s()), K++, d(U);
	}
	let J = {
		schedule: (s, d = !1, L = !1) => {
			let U = L && F ? w : k;
			return d && V.add(s), U.has(s) || U.add(s), s;
		},
		cancel: (s) => {
			k.delete(s), V.delete(s);
		},
		process: (s) => {
			if (U = s, F) {
				L = !0;
				return;
			}
			F = !0, [w, k] = [k, w], w.forEach(q), d && statsBuffer.value && statsBuffer.value.frameloop[d].push(K), K = 0, w.clear(), F = !1, L && (L = !1, J.process(s));
		}
	};
	return J;
}
var maxElapsed = 40;
function createRenderBatcher(s, d) {
	let w = !1, k = !0, F = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, L = () => w = !0, V = stepsOrder.reduce((s, w) => (s[w] = createRenderStep(L, d ? w : void 0), s), {}), { setup: U, read: K, resolveKeyframes: q, preUpdate: J, update: X, preRender: $, render: pA, postRender: mA } = V, hA = () => {
		let L = MotionGlobalConfig.useManualTiming ? F.timestamp : performance.now();
		w = !1, MotionGlobalConfig.useManualTiming || (F.delta = k ? 1e3 / 60 : Math.max(Math.min(L - F.timestamp, maxElapsed), 1)), F.timestamp = L, F.isProcessing = !0, U.process(F), K.process(F), q.process(F), J.process(F), X.process(F), $.process(F), pA.process(F), mA.process(F), F.isProcessing = !1, w && d && (k = !1, s(hA));
	}, gA = () => {
		w = !0, k = !0, F.isProcessing || s(hA);
	};
	return {
		schedule: stepsOrder.reduce((s, d) => {
			let k = V[d];
			return s[d] = (s, d = !1, F = !1) => (w || gA(), k.schedule(s, d, F)), s;
		}, {}),
		cancel: (s) => {
			for (let d = 0; d < stepsOrder.length; d++) V[stepsOrder[d]].cancel(s);
		},
		state: F,
		steps: V
	};
}
var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame < "u" ? requestAnimationFrame : noop, !0), now;
function clearTime() {
	now = void 0;
}
var time = {
	now: () => (now === void 0 && time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now()), now),
	set: (s) => {
		now = s, queueMicrotask(clearTime);
	}
}, activeAnimations = {
	layout: 0,
	mainThread: 0,
	waapi: 0
}, checkStringStartsWith = (s) => (d) => typeof d == "string" && d.startsWith(s), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (s) => startsAsVariableToken(s) ? singleCssVariableRegex.test(s.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function containsCSSVariable(s) {
	return typeof s == "string" ? s.split("/*")[0].includes("var(--") : !1;
}
var number = {
	test: (s) => typeof s == "number",
	parse: parseFloat,
	transform: (s) => s
}, alpha = {
	...number,
	transform: (s) => clamp(0, 1, s)
}, scale = {
	...number,
	default: 1
}, sanitize = (s) => Math.round(s * 1e5) / 1e5, floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function isNullish(s) {
	return s == null;
}
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (s, d) => (w) => !!(typeof w == "string" && singleColorRegex.test(w) && w.startsWith(s) || d && !isNullish(w) && Object.prototype.hasOwnProperty.call(w, d)), splitColor = (s, d, w) => (k) => {
	if (typeof k != "string") return k;
	let [F, L, V, U] = k.match(floatRegex);
	return {
		[s]: parseFloat(F),
		[d]: parseFloat(L),
		[w]: parseFloat(V),
		alpha: U === void 0 ? 1 : parseFloat(U)
	};
}, clampRgbUnit = (s) => clamp(0, 255, s), rgbUnit = {
	...number,
	transform: (s) => Math.round(clampRgbUnit(s))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: s, green: d, blue: w, alpha: k = 1 }) => "rgba(" + rgbUnit.transform(s) + ", " + rgbUnit.transform(d) + ", " + rgbUnit.transform(w) + ", " + sanitize(alpha.transform(k)) + ")"
};
function parseHex(s) {
	let d = "", w = "", k = "", F = "";
	return s.length > 5 ? (d = s.substring(1, 3), w = s.substring(3, 5), k = s.substring(5, 7), F = s.substring(7, 9)) : (d = s.substring(1, 2), w = s.substring(2, 3), k = s.substring(3, 4), F = s.substring(4, 5), d += d, w += w, k += k, F += F), {
		red: parseInt(d, 16),
		green: parseInt(w, 16),
		blue: parseInt(k, 16),
		alpha: F ? parseInt(F, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, createUnitType = /* @__NO_SIDE_EFFECTS__ */ (s) => ({
	test: (d) => typeof d == "string" && d.endsWith(s) && d.split(" ").length === 1,
	parse: parseFloat,
	transform: (d) => `${d}${s}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (s) => percent.parse(s) / 100,
	transform: (s) => percent.transform(s * 100)
}))(), hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: s, saturation: d, lightness: w, alpha: k = 1 }) => "hsla(" + Math.round(s) + ", " + percent.transform(sanitize(d)) + ", " + percent.transform(sanitize(w)) + ", " + sanitize(alpha.transform(k)) + ")"
}, color = {
	test: (s) => rgba.test(s) || hex.test(s) || hsla.test(s),
	parse: (s) => rgba.test(s) ? rgba.parse(s) : hsla.test(s) ? hsla.parse(s) : hex.parse(s),
	transform: (s) => typeof s == "string" ? s : s.hasOwnProperty("red") ? rgba.transform(s) : hsla.transform(s),
	getAnimatableNone: (s) => {
		let d = color.parse(s);
		return d.alpha = 0, color.transform(d);
	}
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(s) {
	return isNaN(s) && typeof s == "string" && (s.match(floatRegex)?.length || 0) + (s.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(s) {
	let d = s.toString(), w = [], k = {
		color: [],
		number: [],
		var: []
	}, F = [], L = 0;
	return {
		values: w,
		split: d.replace(complexRegex, (s) => (color.test(s) ? (k.color.push(L), F.push(COLOR_TOKEN), w.push(color.parse(s))) : s.startsWith(VAR_FUNCTION_TOKEN) ? (k.var.push(L), F.push(VAR_TOKEN), w.push(s)) : (k.number.push(L), F.push(NUMBER_TOKEN), w.push(parseFloat(s))), ++L, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: k,
		types: F
	};
}
function parseComplexValue(s) {
	return analyseComplexValue(s).values;
}
function createTransformer(s) {
	let { split: d, types: w } = analyseComplexValue(s), k = d.length;
	return (s) => {
		let F = "";
		for (let L = 0; L < k; L++) if (F += d[L], s[L] !== void 0) {
			let d = w[L];
			d === NUMBER_TOKEN ? F += sanitize(s[L]) : d === COLOR_TOKEN ? F += color.transform(s[L]) : F += s[L];
		}
		return F;
	};
}
var convertNumbersToZero = (s) => typeof s == "number" ? 0 : color.test(s) ? color.getAnimatableNone(s) : s;
function getAnimatableNone$1(s) {
	let d = parseComplexValue(s);
	return createTransformer(s)(d.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
function hueToRgb(s, d, w) {
	return w < 0 && (w += 1), w > 1 && --w, w < 1 / 6 ? s + (d - s) * 6 * w : w < 1 / 2 ? d : w < 2 / 3 ? s + (d - s) * (2 / 3 - w) * 6 : s;
}
function hslaToRgba({ hue: s, saturation: d, lightness: w, alpha: k }) {
	s /= 360, d /= 100, w /= 100;
	let F = 0, L = 0, V = 0;
	if (!d) F = L = V = w;
	else {
		let k = w < .5 ? w * (1 + d) : w + d - w * d, U = 2 * w - k;
		F = hueToRgb(U, k, s + 1 / 3), L = hueToRgb(U, k, s), V = hueToRgb(U, k, s - 1 / 3);
	}
	return {
		red: Math.round(F * 255),
		green: Math.round(L * 255),
		blue: Math.round(V * 255),
		alpha: k
	};
}
function mixImmediate(s, d) {
	return (w) => w > 0 ? d : s;
}
var mixNumber = (s, d, w) => s + (d - s) * w, mixLinearColor = (s, d, w) => {
	let k = s * s, F = w * (d * d - k) + k;
	return F < 0 ? 0 : Math.sqrt(F);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (s) => colorTypes.find((d) => d.test(s));
function asRGBA(s) {
	let d = getColorType(s);
	if (warning(!!d, `'${s}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !d) return !1;
	let w = d.parse(s);
	return d === hsla && (w = hslaToRgba(w)), w;
}
var mixColor = (s, d) => {
	let w = asRGBA(s), k = asRGBA(d);
	if (!w || !k) return mixImmediate(s, d);
	let F = { ...w };
	return (s) => (F.red = mixLinearColor(w.red, k.red, s), F.green = mixLinearColor(w.green, k.green, s), F.blue = mixLinearColor(w.blue, k.blue, s), F.alpha = mixNumber(w.alpha, k.alpha, s), rgba.transform(F));
}, invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(s, d) {
	return invisibleValues.has(s) ? (w) => w <= 0 ? s : d : (w) => w >= 1 ? d : s;
}
function mixNumber$1(s, d) {
	return (w) => mixNumber(s, d, w);
}
function getMixer(s) {
	return typeof s == "number" ? mixNumber$1 : typeof s == "string" ? isCSSVariableToken(s) ? mixImmediate : color.test(s) ? mixColor : mixComplex : Array.isArray(s) ? mixArray : typeof s == "object" ? color.test(s) ? mixColor : mixObject : mixImmediate;
}
function mixArray(s, d) {
	let w = [...s], k = w.length, F = s.map((s, w) => getMixer(s)(s, d[w]));
	return (s) => {
		for (let d = 0; d < k; d++) w[d] = F[d](s);
		return w;
	};
}
function mixObject(s, d) {
	let w = {
		...s,
		...d
	}, k = {};
	for (let F in w) s[F] !== void 0 && d[F] !== void 0 && (k[F] = getMixer(s[F])(s[F], d[F]));
	return (s) => {
		for (let d in k) w[d] = k[d](s);
		return w;
	};
}
function matchOrder(s, d) {
	let w = [], k = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let F = 0; F < d.values.length; F++) {
		let L = d.types[F], V = s.indexes[L][k[L]];
		w[F] = s.values[V] ?? 0, k[L]++;
	}
	return w;
}
var mixComplex = (s, d) => {
	let w = complex.createTransformer(d), k = analyseComplexValue(s), F = analyseComplexValue(d);
	return k.indexes.var.length === F.indexes.var.length && k.indexes.color.length === F.indexes.color.length && k.indexes.number.length >= F.indexes.number.length ? invisibleValues.has(s) && !F.values.length || invisibleValues.has(d) && !k.values.length ? mixVisibility(s, d) : pipe(mixArray(matchOrder(k, F), F.values), w) : (warning(!0, `Complex values '${s}' and '${d}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(s, d));
};
function mix(s, d, w) {
	return typeof s == "number" && typeof d == "number" && typeof w == "number" ? mixNumber(s, d, w) : getMixer(s)(s, d);
}
var frameloopDriver = (s) => {
	let d = ({ timestamp: d }) => s(d);
	return {
		start: (s = !0) => frame.update(d, s),
		stop: () => cancelFrame(d),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generateLinearEasing = (s, d, w = 10) => {
	let k = "", F = Math.max(Math.round(d / w), 2);
	for (let d = 0; d < F; d++) k += Math.round(s(d / (F - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${k.substring(0, k.length - 2)})`;
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(s) {
	let d = 0, w = s.next(d);
	for (; !w.done && d < 2e4;) d += 50, w = s.next(d);
	return d >= 2e4 ? Infinity : d;
}
function createGeneratorEasing(s, d = 100, w) {
	let k = w({
		...s,
		keyframes: [0, d]
	}), F = Math.min(calcGeneratorDuration(k), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (s) => k.next(F * s).value / d,
		duration: /* @__PURE__ */ millisecondsToSeconds(F)
	};
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(s, d, w) {
	let k = Math.max(d - velocitySampleDuration, 0);
	return velocityPerSecond(w - s(k), d - k);
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
function findSpring({ duration: s = springDefaults.duration, bounce: d = springDefaults.bounce, velocity: w = springDefaults.velocity, mass: k = springDefaults.mass }) {
	let F, L;
	warning(s <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let V = 1 - d;
	V = clamp(springDefaults.minDamping, springDefaults.maxDamping, V), s = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(s)), V < 1 ? (F = (d) => {
		let k = d * V, F = k * s, L = k - w, U = calcAngularFreq(d, V), K = Math.exp(-F);
		return safeMin - L / U * K;
	}, L = (d) => {
		let k = d * V * s, L = k * w + w, U = V ** 2 * d ** 2 * s, K = Math.exp(-k), q = calcAngularFreq(d ** 2, V);
		return (-F(d) + safeMin > 0 ? -1 : 1) * ((L - U) * K) / q;
	}) : (F = (d) => {
		let k = Math.exp(-d * s), F = (d - w) * s + 1;
		return -safeMin + k * F;
	}, L = (d) => Math.exp(-d * s) * ((w - d) * (s * s)));
	let U = 5 / s, K = approximateRoot(F, L, U);
	if (s = /* @__PURE__ */ secondsToMilliseconds(s), isNaN(K)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: s
	};
	{
		let d = K ** 2 * k;
		return {
			stiffness: d,
			damping: V * 2 * Math.sqrt(k * d),
			duration: s
		};
	}
}
var rootIterations = 12;
function approximateRoot(s, d, w) {
	let k = w;
	for (let w = 1; w < rootIterations; w++) k -= s(k) / d(k);
	return k;
}
function calcAngularFreq(s, d) {
	return s * Math.sqrt(1 - d * d);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(s, d) {
	return d.some((d) => s[d] !== void 0);
}
function getSpringOptions(s) {
	let d = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...s
	};
	if (!isSpringType(s, physicsKeys) && isSpringType(s, durationKeys)) if (s.visualDuration) {
		let w = s.visualDuration, k = 2 * Math.PI / (w * 1.2), F = k * k, L = 2 * clamp(.05, 1, 1 - (s.bounce || 0)) * Math.sqrt(F);
		d = {
			...d,
			mass: springDefaults.mass,
			stiffness: F,
			damping: L
		};
	} else {
		let w = findSpring(s);
		d = {
			...d,
			...w,
			mass: springDefaults.mass
		}, d.isResolvedFromDuration = !0;
	}
	return d;
}
function spring(s = springDefaults.visualDuration, d = springDefaults.bounce) {
	let w = typeof s == "object" ? s : {
		visualDuration: s,
		keyframes: [0, 1],
		bounce: d
	}, { restSpeed: k, restDelta: F } = w, L = w.keyframes[0], V = w.keyframes[w.keyframes.length - 1], U = {
		done: !1,
		value: L
	}, { stiffness: K, damping: q, mass: J, duration: X, velocity: $, isResolvedFromDuration: pA } = getSpringOptions({
		...w,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(w.velocity || 0)
	}), mA = $ || 0, hA = q / (2 * Math.sqrt(K * J)), gA = V - L, _A = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(K / J)), vA = Math.abs(gA) < 5;
	k ||= vA ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, F ||= vA ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let yA;
	if (hA < 1) {
		let s = calcAngularFreq(_A, hA);
		yA = (d) => V - Math.exp(-hA * _A * d) * ((mA + hA * _A * gA) / s * Math.sin(s * d) + gA * Math.cos(s * d));
	} else if (hA === 1) yA = (s) => V - Math.exp(-_A * s) * (gA + (mA + _A * gA) * s);
	else {
		let s = _A * Math.sqrt(hA * hA - 1);
		yA = (d) => {
			let w = Math.exp(-hA * _A * d), k = Math.min(s * d, 300);
			return V - w * ((mA + hA * _A * gA) * Math.sinh(k) + s * gA * Math.cosh(k)) / s;
		};
	}
	let bA = {
		calculatedDuration: pA && X || null,
		next: (s) => {
			let d = yA(s);
			if (pA) U.done = s >= X;
			else {
				let w = s === 0 ? mA : 0;
				hA < 1 && (w = s === 0 ? /* @__PURE__ */ secondsToMilliseconds(mA) : calcGeneratorVelocity(yA, s, d));
				let L = Math.abs(w) <= k, K = Math.abs(V - d) <= F;
				U.done = L && K;
			}
			return U.value = U.done ? V : d, U;
		},
		toString: () => {
			let s = Math.min(calcGeneratorDuration(bA), maxGeneratorDuration), d = generateLinearEasing((d) => bA.next(s * d).value, s, 30);
			return s + "ms " + d;
		},
		toTransition: () => {}
	};
	return bA;
}
spring.applyToOptions = (s) => {
	let d = createGeneratorEasing(s, 100, spring);
	return s.ease = d.ease, s.duration = /* @__PURE__ */ secondsToMilliseconds(d.duration), s.type = "keyframes", s;
};
function inertia({ keyframes: s, velocity: d = 0, power: w = .8, timeConstant: k = 325, bounceDamping: F = 10, bounceStiffness: L = 500, modifyTarget: V, min: U, max: K, restDelta: q = .5, restSpeed: J }) {
	let X = s[0], $ = {
		done: !1,
		value: X
	}, pA = (s) => U !== void 0 && s < U || K !== void 0 && s > K, mA = (s) => U === void 0 ? K : K === void 0 || Math.abs(U - s) < Math.abs(K - s) ? U : K, hA = w * d, gA = X + hA, _A = V === void 0 ? gA : V(gA);
	_A !== gA && (hA = _A - X);
	let vA = (s) => -hA * Math.exp(-s / k), yA = (s) => _A + vA(s), bA = (s) => {
		let d = vA(s), w = yA(s);
		$.done = Math.abs(d) <= q, $.value = $.done ? _A : w;
	}, xA, SA, CA = (s) => {
		pA($.value) && (xA = s, SA = spring({
			keyframes: [$.value, mA($.value)],
			velocity: calcGeneratorVelocity(yA, s, $.value),
			damping: F,
			stiffness: L,
			restDelta: q,
			restSpeed: J
		}));
	};
	return CA(0), {
		calculatedDuration: null,
		next: (s) => {
			let d = !1;
			return !SA && xA === void 0 && (d = !0, bA(s), CA(s)), xA !== void 0 && s >= xA ? SA.next(s - xA) : (!d && bA(s), $);
		}
	};
}
function createMixers(s, d, w) {
	let k = [], F = w || MotionGlobalConfig.mix || mix, L = s.length - 1;
	for (let w = 0; w < L; w++) {
		let L = F(s[w], s[w + 1]);
		d && (L = pipe(Array.isArray(d) ? d[w] || noop : d, L)), k.push(L);
	}
	return k;
}
function interpolate(s, d, { clamp: w = !0, ease: k, mixer: F } = {}) {
	let L = s.length;
	if (invariant(L === d.length, "Both input and output ranges must be the same length", "range-length"), L === 1) return () => d[0];
	if (L === 2 && d[0] === d[1]) return () => d[1];
	let V = s[0] === s[1];
	s[0] > s[L - 1] && (s = [...s].reverse(), d = [...d].reverse());
	let U = createMixers(d, k, F), K = U.length, q = (w) => {
		if (V && w < s[0]) return d[0];
		let k = 0;
		if (K > 1) for (; k < s.length - 2 && !(w < s[k + 1]); k++);
		let F = /* @__PURE__ */ progress(s[k], s[k + 1], w);
		return U[k](F);
	};
	return w ? (d) => q(clamp(s[0], s[L - 1], d)) : q;
}
function fillOffset(s, d) {
	let w = s[s.length - 1];
	for (let k = 1; k <= d; k++) {
		let F = /* @__PURE__ */ progress(0, d, k);
		s.push(mixNumber(w, 1, F));
	}
}
function defaultOffset(s) {
	let d = [0];
	return fillOffset(d, s.length - 1), d;
}
function convertOffsetToTimes(s, d) {
	return s.map((s) => s * d);
}
function defaultEasing(s, d) {
	return s.map(() => d || easeInOut).splice(0, s.length - 1);
}
function keyframes({ duration: s = 300, keyframes: d, times: w, ease: k = "easeInOut" }) {
	let F = isEasingArray(k) ? k.map(easingDefinitionToFunction) : easingDefinitionToFunction(k), L = {
		done: !1,
		value: d[0]
	}, V = interpolate(convertOffsetToTimes(w && w.length === d.length ? w : defaultOffset(d), s), d, { ease: Array.isArray(F) ? F : defaultEasing(d, F) });
	return {
		calculatedDuration: s,
		next: (d) => (L.value = V(d), L.done = d >= s, L)
	};
}
var isNotNull$1 = (s) => s !== null;
function getFinalKeyframe$1(s, { repeat: d, repeatType: w = "loop" }, k, F = 1) {
	let L = s.filter(isNotNull$1), V = F < 0 || d && w !== "loop" && d % 2 == 1 ? 0 : L.length - 1;
	return !V || k === void 0 ? L[V] : k;
}
var transitionTypeMap = {
	decay: inertia,
	inertia,
	tween: keyframes,
	keyframes,
	spring
};
function replaceTransitionType(s) {
	typeof s.type == "string" && (s.type = transitionTypeMap[s.type]);
}
var WithPromise = class {
	constructor() {
		this.updateFinished();
	}
	get finished() {
		return this._finished;
	}
	updateFinished() {
		this._finished = new Promise((s) => {
			this.resolve = s;
		});
	}
	notifyFinished() {
		this.resolve();
	}
	then(s, d) {
		return this.finished.then(s, d);
	}
}, percentToProgress = (s) => s / 100, JSAnimation = class extends WithPromise {
	constructor(s) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
			let { motionValue: s } = this.options;
			s && s.updatedAt !== time.now() && this.tick(time.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, activeAnimations.mainThread++, this.options = s, this.initAnimation(), this.play(), s.autoplay === !1 && this.pause();
	}
	initAnimation() {
		let { options: s } = this;
		replaceTransitionType(s);
		let { type: d = keyframes, repeat: w = 0, repeatDelay: k = 0, repeatType: F, velocity: L = 0 } = s, { keyframes: V } = s, U = d || keyframes;
		process.env.NODE_ENV !== "production" && U !== keyframes && invariant(V.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${V}`, "spring-two-frames"), U !== keyframes && typeof V[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(V[0], V[1])), V = [0, 100]);
		let K = U({
			...s,
			keyframes: V
		});
		F === "mirror" && (this.mirroredGenerator = U({
			...s,
			keyframes: [...V].reverse(),
			velocity: -L
		})), K.calculatedDuration === null && (K.calculatedDuration = calcGeneratorDuration(K));
		let { calculatedDuration: q } = K;
		this.calculatedDuration = q, this.resolvedDuration = q + k, this.totalDuration = this.resolvedDuration * (w + 1) - k, this.generator = K;
	}
	updateTime(s) {
		let d = Math.round(s - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = d : this.currentTime = this.holdTime;
	}
	tick(s, d = !1) {
		let { generator: w, totalDuration: k, mixKeyframes: F, mirroredGenerator: L, resolvedDuration: V, calculatedDuration: U } = this;
		if (this.startTime === null) return w.next(0);
		let { delay: K = 0, keyframes: q, repeat: J, repeatType: X, repeatDelay: $, type: pA, onUpdate: mA, finalKeyframe: hA } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - k / this.speed, this.startTime)), d ? this.currentTime = s : this.updateTime(s);
		let gA = this.currentTime - K * (this.playbackSpeed >= 0 ? 1 : -1), _A = this.playbackSpeed >= 0 ? gA < 0 : gA > k;
		this.currentTime = Math.max(gA, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = k);
		let vA = this.currentTime, yA = w;
		if (J) {
			let s = Math.min(this.currentTime, k) / V, d = Math.floor(s), w = s % 1;
			!w && s >= 1 && (w = 1), w === 1 && d--, d = Math.min(d, J + 1), d % 2 && (X === "reverse" ? (w = 1 - w, $ && (w -= $ / V)) : X === "mirror" && (yA = L)), vA = clamp(0, 1, w) * V;
		}
		let bA = _A ? {
			done: !1,
			value: q[0]
		} : yA.next(vA);
		F && (bA.value = F(bA.value));
		let { done: xA } = bA;
		!_A && U !== null && (xA = this.playbackSpeed >= 0 ? this.currentTime >= k : this.currentTime <= 0);
		let SA = this.holdTime === null && (this.state === "finished" || this.state === "running" && xA);
		return SA && pA !== inertia && (bA.value = getFinalKeyframe$1(q, this.options, hA, this.speed)), mA && mA(bA.value), SA && this.finish(), bA;
	}
	then(s, d) {
		return this.finished.then(s, d);
	}
	get duration() {
		return /* @__PURE__ */ millisecondsToSeconds(this.calculatedDuration);
	}
	get iterationDuration() {
		let { delay: s = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(s);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(this.currentTime);
	}
	set time(s) {
		s = /* @__PURE__ */ secondsToMilliseconds(s), this.currentTime = s, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = s : this.driver && (this.startTime = this.driver.now() - s / this.playbackSpeed), this.driver?.start(!1);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(s) {
		this.updateTime(time.now());
		let d = this.playbackSpeed !== s;
		this.playbackSpeed = s, d && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: s = frameloopDriver, startTime: d } = this.options;
		this.driver ||= s((s) => this.tick(s)), this.options.onPlay?.();
		let w = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = w) : this.holdTime === null ? this.startTime ||= d ?? w : this.startTime = w - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
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
	sample(s) {
		return this.startTime = 0, this.tick(s, !0);
	}
	attachTimeline(s) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), s.observe(this);
	}
};
function fillWildcards(s) {
	for (let d = 1; d < s.length; d++) s[d] ?? (s[d] = s[d - 1]);
}
var radToDeg = (s) => s * 180 / Math.PI, rotate = (s) => rebaseAngle(radToDeg(Math.atan2(s[1], s[0]))), matrix2dParsers = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scale: (s) => (Math.abs(s[0]) + Math.abs(s[3])) / 2,
	rotate,
	rotateZ: rotate,
	skewX: (s) => radToDeg(Math.atan(s[1])),
	skewY: (s) => radToDeg(Math.atan(s[2])),
	skew: (s) => (Math.abs(s[1]) + Math.abs(s[2])) / 2
}, rebaseAngle = (s) => (s %= 360, s < 0 && (s += 360), s), rotateZ = rotate, scaleX = (s) => Math.sqrt(s[0] * s[0] + s[1] * s[1]), scaleY = (s) => Math.sqrt(s[4] * s[4] + s[5] * s[5]), matrix3dParsers = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX,
	scaleY,
	scale: (s) => (scaleX(s) + scaleY(s)) / 2,
	rotateX: (s) => rebaseAngle(radToDeg(Math.atan2(s[6], s[5]))),
	rotateY: (s) => rebaseAngle(radToDeg(Math.atan2(-s[2], s[0]))),
	rotateZ,
	rotate: rotateZ,
	skewX: (s) => radToDeg(Math.atan(s[4])),
	skewY: (s) => radToDeg(Math.atan(s[1])),
	skew: (s) => (Math.abs(s[1]) + Math.abs(s[4])) / 2
};
function defaultTransformValue(s) {
	return s.includes("scale") ? 1 : 0;
}
function parseValueFromTransform(s, d) {
	if (!s || s === "none") return defaultTransformValue(d);
	let w = s.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), k, F;
	if (w) k = matrix3dParsers, F = w;
	else {
		let d = s.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		k = matrix2dParsers, F = d;
	}
	if (!F) return defaultTransformValue(d);
	let L = k[d], V = F[1].split(",").map(convertTransformToNumber);
	return typeof L == "function" ? L(V) : V[L];
}
var readTransformValue = (s, d) => {
	let { transform: w = "none" } = getComputedStyle(s);
	return parseValueFromTransform(w, d);
};
function convertTransformToNumber(s) {
	return parseFloat(s.trim());
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
], transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))(), isNumOrPxType = (s) => s === number || s === px, transformKeys = new Set([
	"x",
	"y",
	"z"
]), nonTranslationalTransformKeys = transformPropOrder.filter((s) => !transformKeys.has(s));
function removeNonTranslationalTransform(s) {
	let d = [];
	return nonTranslationalTransformKeys.forEach((w) => {
		let k = s.getValue(w);
		k !== void 0 && (d.push([w, k.get()]), k.set(w.startsWith("scale") ? 1 : 0));
	}), d;
}
var positionalValues = {
	width: ({ x: s }, { paddingLeft: d = "0", paddingRight: w = "0" }) => s.max - s.min - parseFloat(d) - parseFloat(w),
	height: ({ y: s }, { paddingTop: d = "0", paddingBottom: w = "0" }) => s.max - s.min - parseFloat(d) - parseFloat(w),
	top: (s, { top: d }) => parseFloat(d),
	left: (s, { left: d }) => parseFloat(d),
	bottom: ({ y: s }, { top: d }) => parseFloat(d) + (s.max - s.min),
	right: ({ x: s }, { left: d }) => parseFloat(d) + (s.max - s.min),
	x: (s, { transform: d }) => parseValueFromTransform(d, "x"),
	y: (s, { transform: d }) => parseValueFromTransform(d, "y")
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1, isForced = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let s = Array.from(toResolve).filter((s) => s.needsMeasurement), d = new Set(s.map((s) => s.element)), w = /* @__PURE__ */ new Map();
		d.forEach((s) => {
			let d = removeNonTranslationalTransform(s);
			d.length && (w.set(s, d), s.render());
		}), s.forEach((s) => s.measureInitialState()), d.forEach((s) => {
			s.render();
			let d = w.get(s);
			d && d.forEach(([d, w]) => {
				s.getValue(d)?.set(w);
			});
		}), s.forEach((s) => s.measureEndState()), s.forEach((s) => {
			s.suspendedScrollY !== void 0 && window.scrollTo(0, s.suspendedScrollY);
		});
	}
	anyNeedsMeasurement = !1, isScheduled = !1, toResolve.forEach((s) => s.complete(isForced)), toResolve.clear();
}
function readAllKeyframes() {
	toResolve.forEach((s) => {
		s.readKeyframes(), s.needsMeasurement && (anyNeedsMeasurement = !0);
	});
}
function flushKeyframeResolvers() {
	isForced = !0, readAllKeyframes(), measureAllKeyframes(), isForced = !1;
}
var KeyframeResolver = class {
	constructor(s, d, w, k, F, L = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...s], this.onComplete = d, this.name = w, this.motionValue = k, this.element = F, this.isAsync = L;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: s, name: d, element: w, motionValue: k } = this;
		if (s[0] === null) {
			let F = k?.get(), L = s[s.length - 1];
			if (F !== void 0) s[0] = F;
			else if (w && d) {
				let k = w.readValue(d, L);
				k != null && (s[0] = k);
			}
			s[0] === void 0 && (s[0] = L), k && F === void 0 && k.set(s[0]);
		}
		fillWildcards(s);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(s = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, s), toResolve.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (toResolve.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, isCSSVar = (s) => s.startsWith("--");
function setStyle(s, d, w) {
	isCSSVar(d) ? s.style.setProperty(d, w) : s.style[d] = w;
}
var supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0), supportsFlags = {};
function memoSupports(s, d) {
	let w = /* @__PURE__ */ memo$1(s);
	return () => supportsFlags[d] ?? w();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([s, d, w, k]) => `cubic-bezier(${s}, ${d}, ${w}, ${k})`, supportedWaapiEasing = {
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
function mapEasingToNativeEasing(s, d) {
	if (s) return typeof s == "function" ? supportsLinearEasing() ? generateLinearEasing(s, d) : "ease-out" : isBezierDefinition(s) ? cubicBezierAsString(s) : Array.isArray(s) ? s.map((s) => mapEasingToNativeEasing(s, d) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[s];
}
function startWaapiAnimation(s, d, w, { delay: k = 0, duration: F = 300, repeat: L = 0, repeatType: V = "loop", ease: U = "easeOut", times: K } = {}, q = void 0) {
	let J = { [d]: w };
	K && (J.offset = K);
	let X = mapEasingToNativeEasing(U, F);
	Array.isArray(X) && (J.easing = X), statsBuffer.value && activeAnimations.waapi++;
	let $ = {
		delay: k,
		duration: F,
		easing: Array.isArray(X) ? "linear" : X,
		fill: "both",
		iterations: L + 1,
		direction: V === "reverse" ? "alternate" : "normal"
	};
	q && ($.pseudoElement = q);
	let pA = s.animate(J, $);
	return statsBuffer.value && pA.finished.finally(() => {
		activeAnimations.waapi--;
	}), pA;
}
function isGenerator(s) {
	return typeof s == "function" && "applyToOptions" in s;
}
function applyGeneratorOptions({ type: s, ...d }) {
	return isGenerator(s) && supportsLinearEasing() ? s.applyToOptions(d) : (d.duration ??= 300, d.ease ??= "easeOut", d);
}
var NativeAnimation = class extends WithPromise {
	constructor(s) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !s) return;
		let { element: d, name: w, keyframes: k, pseudoElement: F, allowFlatten: L = !1, finalKeyframe: V, onComplete: U } = s;
		this.isPseudoElement = !!F, this.allowFlatten = L, this.options = s, invariant(typeof s.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let K = applyGeneratorOptions(s);
		this.animation = startWaapiAnimation(d, w, k, K, F), K.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !F) {
				let s = getFinalKeyframe$1(k, this.options, V, this.speed);
				this.updateMotionValue ? this.updateMotionValue(s) : setStyle(d, w, s), this.animation.cancel();
			}
			U?.(), this.notifyFinished();
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
		let { state: s } = this;
		s === "idle" || s === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
	}
	commitStyles() {
		this.isPseudoElement || this.animation.commitStyles?.();
	}
	get duration() {
		let s = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ millisecondsToSeconds(Number(s));
	}
	get iterationDuration() {
		let { delay: s = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ millisecondsToSeconds(s);
	}
	get time() {
		return /* @__PURE__ */ millisecondsToSeconds(Number(this.animation.currentTime) || 0);
	}
	set time(s) {
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ secondsToMilliseconds(s);
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(s) {
		s < 0 && (this.finishedTime = null), this.animation.playbackRate = s;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(s) {
		this.manualStartTime = this.animation.startTime = s;
	}
	attachTimeline({ timeline: s, observe: d }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, s && supportsScrollTimeline() ? (this.animation.timeline = s, noop) : d(this);
	}
}, unsupportedEasingFunctions = {
	anticipate,
	backInOut,
	circInOut
};
function isUnsupportedEase(s) {
	return s in unsupportedEasingFunctions;
}
function replaceStringEasing(s) {
	typeof s.ease == "string" && isUnsupportedEase(s.ease) && (s.ease = unsupportedEasingFunctions[s.ease]);
}
var sampleDelta = 10, NativeAnimationExtended = class extends NativeAnimation {
	constructor(s) {
		replaceStringEasing(s), replaceTransitionType(s), super(s), s.startTime !== void 0 && (this.startTime = s.startTime), this.options = s;
	}
	updateMotionValue(s) {
		let { motionValue: d, onUpdate: w, onComplete: k, element: F, ...L } = this.options;
		if (!d) return;
		if (s !== void 0) {
			d.set(s);
			return;
		}
		let V = new JSAnimation({
			...L,
			autoplay: !1
		}), U = Math.max(sampleDelta, time.now() - this.startTime), K = clamp(0, sampleDelta, U - sampleDelta);
		d.setWithVelocity(V.sample(Math.max(0, U - K)).value, V.sample(U).value, K), V.stop();
	}
}, isAnimatable = (s, d) => d === "zIndex" ? !1 : !!(typeof s == "number" || Array.isArray(s) || typeof s == "string" && (complex.test(s) || s === "0") && !s.startsWith("url("));
function hasKeyframesChanged(s) {
	let d = s[0];
	if (s.length === 1) return !0;
	for (let w = 0; w < s.length; w++) if (s[w] !== d) return !0;
}
function canAnimate(s, d, w, k) {
	let F = s[0];
	if (F === null) return !1;
	if (d === "display" || d === "visibility") return !0;
	let L = s[s.length - 1], V = isAnimatable(F, d), U = isAnimatable(L, d);
	return warning(V === U, `You are trying to animate ${d} from "${F}" to "${L}". "${V ? L : F}" is not an animatable value.`, "value-not-animatable"), !V || !U ? !1 : hasKeyframesChanged(s) || (w === "spring" || isGenerator(w)) && k;
}
function makeAnimationInstant(s) {
	s.duration = 0, s.type = "keyframes";
}
var acceleratedValues = new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), supportsWaapi = /* @__PURE__ */ memo$1(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function supportsBrowserAnimation(s) {
	let { motionValue: d, name: w, repeatDelay: k, repeatType: F, damping: L, type: V } = s;
	if (!(d?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: U, transformTemplate: K } = d.owner.getProps();
	return supportsWaapi() && w && acceleratedValues.has(w) && (w !== "transform" || !K) && !U && !k && F !== "mirror" && L !== 0 && V !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: s = !0, delay: d = 0, type: w = "keyframes", repeat: k = 0, repeatDelay: F = 0, repeatType: L = "loop", keyframes: V, name: U, motionValue: K, element: q, ...J }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let X = {
			autoplay: s,
			delay: d,
			type: w,
			repeat: k,
			repeatDelay: F,
			repeatType: L,
			name: U,
			motionValue: K,
			element: q,
			...J
		};
		this.keyframeResolver = new (q?.KeyframeResolver || KeyframeResolver)(V, (s, d, w) => this.onKeyframesResolved(s, d, X, !w), U, K, q), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(s, d, w, k) {
		this.keyframeResolver = void 0;
		let { name: F, type: L, velocity: V, delay: U, isHandoff: K, onUpdate: q } = w;
		this.resolvedAt = time.now(), canAnimate(s, F, L, V) || ((MotionGlobalConfig.instantAnimations || !U) && q?.(getFinalKeyframe$1(s, w, d)), s[0] = s[s.length - 1], makeAnimationInstant(w), w.repeat = 0);
		let J = {
			startTime: k ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: d,
			...w,
			keyframes: s
		}, X = !K && supportsBrowserAnimation(J) ? new NativeAnimationExtended({
			...J,
			element: J.motionValue.owner.current
		}) : new JSAnimation(J);
		X.finished.then(() => this.notifyFinished()).catch(noop), this.pendingTimeline &&= (this.stopTimeline = X.attachTimeline(this.pendingTimeline), void 0), this._animation = X;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(s, d) {
		return this.finished.finally(s).then(() => {});
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
	set time(s) {
		this.animation.time = s;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(s) {
		this.animation.speed = s;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(s) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(s) : this.pendingTimeline = s, () => this.stop();
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
function parseCSSVariable(s) {
	let d = splitCSSVariableRegex.exec(s);
	if (!d) return [,];
	let [, w, k, F] = d;
	return [`--${w ?? k}`, F];
}
var maxDepth = 4;
function getVariableValue(s, d, w = 1) {
	invariant(w <= maxDepth, `Max CSS variable fallback depth detected in property "${s}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [k, F] = parseCSSVariable(s);
	if (!k) return;
	let L = window.getComputedStyle(d).getPropertyValue(k);
	if (L) {
		let s = L.trim();
		return isNumericalString(s) ? parseFloat(s) : s;
	}
	return isCSSVariableToken(F) ? getVariableValue(F, d, w + 1) : F;
}
function getValueTransition(s, d) {
	return s?.[d] ?? s?.default ?? s;
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
	test: (s) => s === "auto",
	parse: (s) => s
}, testValueType = (s) => (d) => d.test(s), dimensionValueTypes = [
	number,
	px,
	percent,
	degrees,
	vw,
	vh,
	auto
], findDimensionValueType = (s) => dimensionValueTypes.find(testValueType(s));
function isNone(s) {
	return typeof s == "number" ? s === 0 : s === null ? !0 : s === "none" || s === "0" || isZeroValueString(s);
}
var maxDefaults = new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function applyDefaultFilter(s) {
	let [d, w] = s.slice(0, -1).split("(");
	if (d === "drop-shadow") return s;
	let [k] = w.match(floatRegex) || [];
	if (!k) return s;
	let F = w.replace(k, ""), L = maxDefaults.has(d) ? 1 : 0;
	return k !== w && (L *= 100), d + "(" + L + F + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (s) => {
		let d = s.match(functionRegex);
		return d ? d.map(applyDefaultFilter).join(" ") : s;
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
}, getDefaultValueType = (s) => defaultValueTypes[s];
function getAnimatableNone(s, d) {
	let w = getDefaultValueType(s);
	return w !== filter && (w = complex), w.getAnimatableNone ? w.getAnimatableNone(d) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(s, d, w) {
	let k = 0, F;
	for (; k < s.length && !F;) {
		let d = s[k];
		typeof d == "string" && !invalidTemplates.has(d) && analyseComplexValue(d).values.length && (F = s[k]), k++;
	}
	if (F && w) for (let k of d) s[k] = getAnimatableNone(w, F);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(s, d, w, k, F) {
		super(s, d, w, k, F, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: s, element: d, name: w } = this;
		if (!d || !d.current) return;
		super.readKeyframes();
		for (let w = 0; w < s.length; w++) {
			let k = s[w];
			if (typeof k == "string" && (k = k.trim(), isCSSVariableToken(k))) {
				let F = getVariableValue(k, d.current);
				F !== void 0 && (s[w] = F), w === s.length - 1 && (this.finalKeyframe = k);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(w) || s.length !== 2) return;
		let [k, F] = s, L = findDimensionValueType(k), V = findDimensionValueType(F);
		if (containsCSSVariable(k) !== containsCSSVariable(F) && positionalValues[w]) {
			this.needsMeasurement = !0;
			return;
		}
		if (L !== V) if (isNumOrPxType(L) && isNumOrPxType(V)) for (let d = 0; d < s.length; d++) {
			let w = s[d];
			typeof w == "string" && (s[d] = parseFloat(w));
		}
		else positionalValues[w] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: s, name: d } = this, w = [];
		for (let d = 0; d < s.length; d++) (s[d] === null || isNone(s[d])) && w.push(d);
		w.length && makeNoneKeyframesAnimatable(s, w, d);
	}
	measureInitialState() {
		let { element: s, unresolvedKeyframes: d, name: w } = this;
		if (!s || !s.current) return;
		w === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[w](s.measureViewportBox(), window.getComputedStyle(s.current)), d[0] = this.measuredOrigin;
		let k = d[d.length - 1];
		k !== void 0 && s.getValue(w, k).jump(k, !1);
	}
	measureEndState() {
		let { element: s, name: d, unresolvedKeyframes: w } = this;
		if (!s || !s.current) return;
		let k = s.getValue(d);
		k && k.jump(this.measuredOrigin, !1);
		let F = w.length - 1, L = w[F];
		w[F] = positionalValues[d](s.measureViewportBox(), window.getComputedStyle(s.current)), L !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = L), this.removedTransforms?.length && this.removedTransforms.forEach(([d, w]) => {
			s.getValue(d).set(w);
		}), this.resolveNoneKeyframes();
	}
};
function resolveElements(s, d, w) {
	if (s instanceof EventTarget) return [s];
	if (typeof s == "string") {
		let k = document;
		d && (k = d.current);
		let F = w?.[s] ?? k.querySelectorAll(s);
		return F ? Array.from(F) : [];
	}
	return Array.from(s);
}
var getValueAsType = (s, d) => d && typeof s == "number" ? d.transform(s) : s;
function isHTMLElement(s) {
	return isObject(s) && "offsetHeight" in s;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (s) => !isNaN(parseFloat(s)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(s, d = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (s) => {
			let d = time.now();
			if (this.updatedAt !== d && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(s), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let s of this.dependents) s.dirty();
		}, this.hasAnimated = !1, this.setCurrent(s), this.owner = d.owner;
	}
	setCurrent(s) {
		this.current = s, this.updatedAt = time.now(), this.canTrackVelocity === null && s !== void 0 && (this.canTrackVelocity = isFloat(this.current));
	}
	setPrevFrameValue(s = this.current) {
		this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(s) {
		return process.env.NODE_ENV !== "production" && warnOnce(!1, "value.onChange(callback) is deprecated. Switch to value.on(\"change\", callback)."), this.on("change", s);
	}
	on(s, d) {
		this.events[s] || (this.events[s] = new SubscriptionManager());
		let w = this.events[s].add(d);
		return s === "change" ? () => {
			w(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : w;
	}
	clearListeners() {
		for (let s in this.events) this.events[s].clear();
	}
	attach(s, d) {
		this.passiveEffect = s, this.stopPassiveEffect = d;
	}
	set(s) {
		this.passiveEffect ? this.passiveEffect(s, this.updateAndNotify) : this.updateAndNotify(s);
	}
	setWithVelocity(s, d, w) {
		this.set(d), this.prev = void 0, this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt - w;
	}
	jump(s, d = !0) {
		this.updateAndNotify(s), this.prev = s, this.prevUpdatedAt = this.prevFrameValue = void 0, d && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
	}
	dirty() {
		this.events.change?.notify(this.current);
	}
	addDependent(s) {
		this.dependents ||= /* @__PURE__ */ new Set(), this.dependents.add(s);
	}
	removeDependent(s) {
		this.dependents && this.dependents.delete(s);
	}
	get() {
		return collectMotionValues.current && collectMotionValues.current.push(this), this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let s = time.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || s - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
		let d = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), d);
	}
	start(s) {
		return this.stop(), new Promise((d) => {
			this.hasAnimated = !0, this.animation = s(d), this.events.animationStart && this.events.animationStart.notify();
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
function motionValue(s, d) {
	return new MotionValue(s, d);
}
var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, !1), isDragging = {
	x: !1,
	y: !1
};
function isDragActive() {
	return isDragging.x || isDragging.y;
}
function setDragLock(s) {
	return s === "x" || s === "y" ? isDragging[s] ? null : (isDragging[s] = !0, () => {
		isDragging[s] = !1;
	}) : isDragging.x || isDragging.y ? null : (isDragging.x = isDragging.y = !0, () => {
		isDragging.x = isDragging.y = !1;
	});
}
function setupGesture(s, d) {
	let w = resolveElements(s), k = new AbortController();
	return [
		w,
		{
			passive: !0,
			...d,
			signal: k.signal
		},
		() => k.abort()
	];
}
function isValidHover(s) {
	return !(s.pointerType === "touch" || isDragActive());
}
function hover(s, d, w = {}) {
	let [k, F, L] = setupGesture(s, w), V = (s) => {
		if (!isValidHover(s)) return;
		let { target: w } = s, k = d(w, s);
		if (typeof k != "function" || !w) return;
		let L = (s) => {
			isValidHover(s) && (k(s), w.removeEventListener("pointerleave", L));
		};
		w.addEventListener("pointerleave", L, F);
	};
	return k.forEach((s) => {
		s.addEventListener("pointerenter", V, F);
	}), L;
}
var isNodeOrChild = (s, d) => d ? s === d ? !0 : isNodeOrChild(s, d.parentElement) : !1, isPrimaryPointer = (s) => s.pointerType === "mouse" ? typeof s.button != "number" || s.button <= 0 : s.isPrimary !== !1, interactiveElements = new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function isElementKeyboardAccessible(s) {
	return interactiveElements.has(s.tagName) || s.isContentEditable === !0;
}
var isPressing = /* @__PURE__ */ new WeakSet();
function filterEvents(s) {
	return (d) => {
		d.key === "Enter" && s(d);
	};
}
function firePointerEvent(s, d) {
	s.dispatchEvent(new PointerEvent("pointer" + d, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (s, d) => {
	let w = s.currentTarget;
	if (!w) return;
	let k = filterEvents(() => {
		if (isPressing.has(w)) return;
		firePointerEvent(w, "down");
		let s = filterEvents(() => {
			firePointerEvent(w, "up");
		});
		w.addEventListener("keyup", s, d), w.addEventListener("blur", () => firePointerEvent(w, "cancel"), d);
	});
	w.addEventListener("keydown", k, d), w.addEventListener("blur", () => w.removeEventListener("keydown", k), d);
};
function isValidPressEvent(s) {
	return isPrimaryPointer(s) && !isDragActive();
}
function press(s, d, w = {}) {
	let [k, F, L] = setupGesture(s, w), V = (s) => {
		let k = s.currentTarget;
		if (!isValidPressEvent(s)) return;
		isPressing.add(k);
		let L = d(k, s), V = (s, d) => {
			window.removeEventListener("pointerup", U), window.removeEventListener("pointercancel", K), isPressing.has(k) && isPressing.delete(k), isValidPressEvent(s) && typeof L == "function" && L(s, { success: d });
		}, U = (s) => {
			V(s, k === window || k === document || w.useGlobalTarget || isNodeOrChild(k, s.target));
		}, K = (s) => {
			V(s, !1);
		};
		window.addEventListener("pointerup", U, F), window.addEventListener("pointercancel", K, F);
	};
	return k.forEach((s) => {
		(w.useGlobalTarget ? window : s).addEventListener("pointerdown", V, F), isHTMLElement(s) && (s.addEventListener("focus", (s) => enableKeyboardPress(s, F)), !isElementKeyboardAccessible(s) && !s.hasAttribute("tabindex") && (s.tabIndex = 0));
	}), L;
}
function isSVGElement(s) {
	return isObject(s) && "ownerSVGElement" in s;
}
function isSVGSVGElement(s) {
	return isSVGElement(s) && s.tagName === "svg";
}
var isMotionValue = (s) => !!(s && s.getVelocity), valueTypes = [
	...dimensionValueTypes,
	color,
	complex
], findValueType = (s) => valueTypes.find(testValueType(s)), MotionConfigContext = createContext({
	transformPagePoint: (s) => s,
	isStatic: !1,
	reducedMotion: "never"
});
function usePresence(s = !0) {
	let d = useContext(PresenceContext);
	if (d === null) return [!0, null];
	let { isPresent: w, onExitComplete: k, register: F } = d, L = useId();
	useEffect(() => {
		if (s) return F(L);
	}, [s]);
	let V = useCallback(() => s && k && k(L), [
		L,
		k,
		s
	]);
	return !w && k ? [!1, V] : [!0];
}
var LazyContext = createContext({ strict: !1 }), featureProps = {
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
for (let s in featureProps) featureDefinitions[s] = { isEnabled: (d) => featureProps[s].some((s) => !!d[s]) };
function loadFeatures(s) {
	for (let d in s) featureDefinitions[d] = {
		...featureDefinitions[d],
		...s[d]
	};
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function isValidMotionProp(s) {
	return s.startsWith("while") || s.startsWith("drag") && s !== "draggable" || s.startsWith("layout") || s.startsWith("onTap") || s.startsWith("onPan") || s.startsWith("onLayout") || validMotionProps.has(s);
}
function memoize(s) {
	var d = Object.create(null);
	return function(w) {
		return d[w] === void 0 && (d[w] = s(w)), d[w];
	};
}
var init_emotion_memoize_esm = __esmMin((() => {})), emotion_is_prop_valid_esm_exports = /* @__PURE__ */ __export({ default: () => isPropValid }), reactPropsRegex, isPropValid, init_emotion_is_prop_valid_esm = __esmMin((() => {
	init_emotion_memoize_esm(), reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize(function(s) {
		return reactPropsRegex.test(s) || s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) < 91;
	});
})), shouldForward = (s) => !isValidMotionProp(s);
function loadExternalIsValidProp(s) {
	typeof s == "function" && (shouldForward = (d) => d.startsWith("on") ? !isValidMotionProp(d) : s(d));
}
try {
	loadExternalIsValidProp((init_emotion_is_prop_valid_esm(), __toCommonJS(emotion_is_prop_valid_esm_exports)).default);
} catch {}
function filterProps(s, d, w) {
	let k = {};
	for (let F in s) F === "values" && typeof s.values == "object" || (shouldForward(F) || w === !0 && isValidMotionProp(F) || !d && !isValidMotionProp(F) || s.draggable && F.startsWith("onDrag")) && (k[F] = s[F]);
	return k;
}
var MotionContext = /* @__PURE__ */ createContext({});
function isAnimationControls(s) {
	return typeof s == "object" && !!s && typeof s.start == "function";
}
function isVariantLabel(s) {
	return typeof s == "string" || Array.isArray(s);
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
function isControllingVariants(s) {
	return isAnimationControls(s.animate) || variantProps.some((d) => isVariantLabel(s[d]));
}
function isVariantNode(s) {
	return !!(isControllingVariants(s) || s.variants);
}
function getCurrentTreeVariants(s, d) {
	if (isControllingVariants(s)) {
		let { initial: d, animate: w } = s;
		return {
			initial: d === !1 || isVariantLabel(d) ? d : void 0,
			animate: isVariantLabel(w) ? w : void 0
		};
	}
	return s.inherit === !1 ? {} : d;
}
function useCreateMotionContext(s) {
	let { initial: d, animate: w } = getCurrentTreeVariants(s, useContext(MotionContext));
	return useMemo(() => ({
		initial: d,
		animate: w
	}), [variantLabelsAsDependency(d), variantLabelsAsDependency(w)]);
}
function variantLabelsAsDependency(s) {
	return Array.isArray(s) ? s.join(" ") : s;
}
function pixelsToPercent(s, d) {
	return d.max === d.min ? 0 : s / (d.max - d.min) * 100;
}
var correctBorderRadius = { correct: (s, d) => {
	if (!d.target) return s;
	if (typeof s == "string") if (px.test(s)) s = parseFloat(s);
	else return s;
	return `${pixelsToPercent(s, d.target.x)}% ${pixelsToPercent(s, d.target.y)}%`;
} }, correctBoxShadow = { correct: (s, { treeScale: d, projectionDelta: w }) => {
	let k = s, F = complex.parse(s);
	if (F.length > 5) return k;
	let L = complex.createTransformer(s), V = typeof F[0] == "number" ? 0 : 1, U = w.x.scale * d.x, K = w.y.scale * d.y;
	F[0 + V] /= U, F[1 + V] /= K;
	let q = mixNumber(U, K, .5);
	return typeof F[2 + V] == "number" && (F[2 + V] /= q), typeof F[3 + V] == "number" && (F[3 + V] /= q), L(F);
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
function isForcedMotionValue(s, { layout: d, layoutId: w }) {
	return transformProps.has(s) || s.startsWith("origin") || (d || w !== void 0) && (!!scaleCorrectors[s] || s === "opacity");
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(s, d, w) {
	let k = "", F = !0;
	for (let L = 0; L < numTransforms; L++) {
		let V = transformPropOrder[L], U = s[V];
		if (U === void 0) continue;
		let K = !0;
		if (K = typeof U == "number" ? U === (V.startsWith("scale") ? 1 : 0) : parseFloat(U) === 0, !K || w) {
			let s = getValueAsType(U, numberValueTypes[V]);
			if (!K) {
				F = !1;
				let d = translateAlias[V] || V;
				k += `${d}(${s}) `;
			}
			w && (d[V] = s);
		}
	}
	return k = k.trim(), w ? k = w(d, F ? "" : k) : F && (k = "none"), k;
}
function buildHTMLStyles(s, d, w) {
	let { style: k, vars: F, transformOrigin: L } = s, V = !1, U = !1;
	for (let s in d) {
		let w = d[s];
		if (transformProps.has(s)) {
			V = !0;
			continue;
		} else if (isCSSVariableName(s)) {
			F[s] = w;
			continue;
		} else {
			let d = getValueAsType(w, numberValueTypes[s]);
			s.startsWith("origin") ? (U = !0, L[s] = d) : k[s] = d;
		}
	}
	if (d.transform || (V || w ? k.transform = buildTransform(d, s.transform, w) : k.transform &&= "none"), U) {
		let { originX: s = "50%", originY: d = "50%", originZ: w = 0 } = L;
		k.transformOrigin = `${s} ${d} ${w}`;
	}
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(s, d, w) {
	for (let k in d) !isMotionValue(d[k]) && !isForcedMotionValue(k, w) && (s[k] = d[k]);
}
function useInitialMotionValues({ transformTemplate: s }, d) {
	return useMemo(() => {
		let w = createHtmlRenderState();
		return buildHTMLStyles(w, d, s), Object.assign({}, w.vars, w.style);
	}, [d]);
}
function useStyle(s, d) {
	let w = s.style || {}, k = {};
	return copyRawValuesOnly(k, w, s), Object.assign(k, useInitialMotionValues(s, d)), k;
}
function useHTMLProps(s, d) {
	let w = {}, k = useStyle(s, d);
	return s.drag && s.dragListener !== !1 && (w.draggable = !1, k.userSelect = k.WebkitUserSelect = k.WebkitTouchCallout = "none", k.touchAction = s.drag === !0 ? "none" : `pan-${s.drag === "x" ? "y" : "x"}`), s.tabIndex === void 0 && (s.onTap || s.onTapStart || s.whileTap) && (w.tabIndex = 0), w.style = k, w;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(s, d, w = 1, k = 0, F = !0) {
	s.pathLength = 1;
	let L = F ? dashKeys : camelKeys;
	s[L.offset] = px.transform(-k);
	let V = px.transform(d), U = px.transform(w);
	s[L.array] = `${V} ${U}`;
}
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(s, { attrX: d, attrY: w, attrScale: k, pathLength: F, pathSpacing: L = 1, pathOffset: V = 0, ...U }, K, q, J) {
	if (buildHTMLStyles(s, U, q), K) {
		s.style.viewBox && (s.attrs.viewBox = s.style.viewBox);
		return;
	}
	s.attrs = s.style, s.style = {};
	let { attrs: X, style: $ } = s;
	X.transform && ($.transform = X.transform, delete X.transform), ($.transform || X.transformOrigin) && ($.transformOrigin = X.transformOrigin ?? "50% 50%", delete X.transformOrigin), $.transform && ($.transformBox = J?.transformBox ?? "fill-box", delete X.transformBox);
	for (let s of cssMotionPathProperties) X[s] !== void 0 && ($[s] = X[s], delete X[s]);
	d !== void 0 && (X.x = d), w !== void 0 && (X.y = w), k !== void 0 && (X.scale = k), F !== void 0 && buildSVGPath(X, F, L, V, !1);
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (s) => typeof s == "string" && s.toLowerCase() === "svg";
function useSVGProps(s, d, w, k) {
	let F = useMemo(() => {
		let w = createSvgRenderState();
		return buildSVGAttrs(w, d, isSVGTag(k), s.transformTemplate, s.style), {
			...w.attrs,
			style: { ...w.style }
		};
	}, [d]);
	if (s.style) {
		let d = {};
		copyRawValuesOnly(d, s.style, s), F.style = {
			...d,
			...F.style
		};
	}
	return F;
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
function isSVGComponent(s) {
	return typeof s != "string" || s.includes("-") ? !1 : !!(lowercaseSVGElements.indexOf(s) > -1 || /[A-Z]/u.test(s));
}
function useRender(s, d, w, { latestValues: F }, L, U = !1, K) {
	let q = (K ?? isSVGComponent(s) ? useSVGProps : useHTMLProps)(d, F, L, s), J = filterProps(d, typeof s == "string", U), X = s === Fragment ? {} : {
		...J,
		...q,
		ref: w
	}, { children: $ } = d, pA = useMemo(() => isMotionValue($) ? $.get() : $, [$]);
	return createElement(s, {
		...X,
		children: pA
	});
}
function getValueState(s) {
	let d = [{}, {}];
	return s?.values.forEach((s, w) => {
		d[0][w] = s.get(), d[1][w] = s.getVelocity();
	}), d;
}
function resolveVariantFromProps(s, d, w, k) {
	if (typeof d == "function") {
		let [F, L] = getValueState(k);
		d = d(w === void 0 ? s.custom : w, F, L);
	}
	if (typeof d == "string" && (d = s.variants && s.variants[d]), typeof d == "function") {
		let [F, L] = getValueState(k);
		d = d(w === void 0 ? s.custom : w, F, L);
	}
	return d;
}
function resolveMotionValue(s) {
	return isMotionValue(s) ? s.get() : s;
}
function makeState({ scrapeMotionValuesFromProps: s, createRenderState: d }, w, k, F) {
	return {
		latestValues: makeLatestValues(w, k, F, s),
		renderState: d()
	};
}
function makeLatestValues(s, d, w, k) {
	let F = {}, L = k(s, {});
	for (let s in L) F[s] = resolveMotionValue(L[s]);
	let { initial: V, animate: U } = s, K = isControllingVariants(s), q = isVariantNode(s);
	d && q && !K && s.inherit !== !1 && (V === void 0 && (V = d.initial), U === void 0 && (U = d.animate));
	let J = w ? w.initial === !1 : !1;
	J ||= V === !1;
	let X = J ? U : V;
	if (X && typeof X != "boolean" && !isAnimationControls(X)) {
		let d = Array.isArray(X) ? X : [X];
		for (let w = 0; w < d.length; w++) {
			let k = resolveVariantFromProps(s, d[w]);
			if (k) {
				let { transitionEnd: s, transition: d, ...w } = k;
				for (let s in w) {
					let d = w[s];
					if (Array.isArray(d)) {
						let s = J ? d.length - 1 : 0;
						d = d[s];
					}
					d !== null && (F[s] = d);
				}
				for (let d in s) F[d] = s[d];
			}
		}
	}
	return F;
}
var makeUseVisualState = (s) => (d, w) => {
	let k = useContext(MotionContext), F = useContext(PresenceContext), L = () => makeState(s, d, k, F);
	return w ? L() : useConstant(L);
};
function scrapeMotionValuesFromProps$1(s, d, w) {
	let { style: k } = s, F = {};
	for (let L in k) (isMotionValue(k[L]) || d.style && isMotionValue(d.style[L]) || isForcedMotionValue(L, s) || w?.getValue(L)?.liveStyle !== void 0) && (F[L] = k[L]);
	return F;
}
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
function scrapeMotionValuesFromProps(s, d, w) {
	let k = scrapeMotionValuesFromProps$1(s, d, w);
	for (let w in s) if (isMotionValue(s[w]) || isMotionValue(d[w])) {
		let d = transformPropOrder.indexOf(w) === -1 ? w : "attr" + w.charAt(0).toUpperCase() + w.substring(1);
		k[d] = s[w];
	}
	return k;
}
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(s, d, w) {
	let k = useRef(w);
	useInsertionEffect(() => {
		k.current = w;
	});
	let F = useRef(null);
	return useCallback((w) => {
		w && s.onMount?.(w), d && (w ? d.mount(w) : d.unmount());
		let L = k.current;
		if (typeof L == "function") if (w) {
			let s = L(w);
			typeof s == "function" && (F.current = s);
		} else F.current ? (F.current(), F.current = null) : L(w);
		else L && (L.current = w);
	}, [d]);
}
var camelToDash = (s) => s.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), SwitchLayoutGroupContext = createContext({});
function isRefObject(s) {
	return s && typeof s == "object" && Object.prototype.hasOwnProperty.call(s, "current");
}
function useVisualElement(s, d, w, k, F, L) {
	let { visualElement: V } = useContext(MotionContext), U = useContext(LazyContext), K = useContext(PresenceContext), q = useContext(MotionConfigContext).reducedMotion, $ = useRef(null);
	k ||= U.renderer, !$.current && k && ($.current = k(s, {
		visualState: d,
		parent: V,
		props: w,
		presenceContext: K,
		blockInitialAnimation: K ? K.initial === !1 : !1,
		reducedMotionConfig: q,
		isSVG: L
	}));
	let pA = $.current, hA = useContext(SwitchLayoutGroupContext);
	pA && !pA.projection && F && (pA.type === "html" || pA.type === "svg") && createProjectionNode$1($.current, w, F, hA);
	let gA = useRef(!1);
	useInsertionEffect(() => {
		pA && gA.current && pA.update(w, K);
	});
	let vA = w[optimizedAppearDataAttribute], yA = useRef(!!vA && !window.MotionHandoffIsComplete?.(vA) && window.MotionHasOptimisedAnimation?.(vA));
	return useIsomorphicLayoutEffect(() => {
		pA && (gA.current = !0, window.MotionIsMounted = !0, pA.updateFeatures(), pA.scheduleRenderMicrotask(), yA.current && pA.animationState && pA.animationState.animateChanges());
	}), useEffect(() => {
		pA && (!yA.current && pA.animationState && pA.animationState.animateChanges(), yA.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(vA);
		}), !1), pA.enteringChildren = void 0);
	}), pA;
}
function createProjectionNode$1(s, d, w, k) {
	let { layoutId: F, layout: L, drag: V, dragConstraints: U, layoutScroll: K, layoutRoot: q, layoutCrossfade: J } = d;
	s.projection = new w(s.latestValues, d["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(s.parent)), s.projection.setOptions({
		layoutId: F,
		layout: L,
		alwaysMeasureLayout: !!V || U && isRefObject(U),
		visualElement: s,
		animationType: typeof L == "string" ? L : "both",
		initialPromotionConfig: k,
		crossfade: J,
		layoutScroll: K,
		layoutRoot: q
	});
}
function getClosestProjectingNode(s) {
	if (s) return s.options.allowProjection === !1 ? getClosestProjectingNode(s.parent) : s.projection;
}
function createMotionComponent(s, { forwardMotionProps: d = !1, type: w } = {}, k, F) {
	k && loadFeatures(k);
	let L = w ? w === "svg" : isSVGComponent(s), V = L ? useSVGVisualState : useHTMLVisualState;
	function K(w, U) {
		let K, q = {
			...useContext(MotionConfigContext),
			...w,
			layoutId: useLayoutId(w)
		}, { isStatic: X } = q, $ = useCreateMotionContext(w), pA = V(w, X);
		if (!X && isBrowser) {
			useStrictMode(q, k);
			let d = getProjectionFunctionality(q);
			K = d.MeasureLayout, $.visualElement = useVisualElement(s, pA, q, F, d.ProjectionNode, L);
		}
		return jsxs(MotionContext.Provider, {
			value: $,
			children: [K && $.visualElement ? jsx(K, {
				visualElement: $.visualElement,
				...q
			}) : null, useRender(s, w, useMotionRef(pA, $.visualElement, U), pA, X, d, L)]
		});
	}
	K.displayName = `motion.${typeof s == "string" ? s : `create(${s.displayName ?? s.name ?? ""})`}`;
	let q = forwardRef(K);
	return q[motionComponentSymbol] = s, q;
}
function useLayoutId({ layoutId: s }) {
	let d = useContext(LayoutGroupContext).id;
	return d && s !== void 0 ? d + "-" + s : s;
}
function useStrictMode(s, d) {
	let w = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && d && w) {
		let d = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		s.ignoreStrict ? warning(!1, d, "lazy-strict-mode") : invariant(!1, d, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(s) {
	let { drag: d, layout: w } = featureDefinitions;
	if (!d && !w) return {};
	let k = {
		...d,
		...w
	};
	return {
		MeasureLayout: d?.isEnabled(s) || w?.isEnabled(s) ? k.MeasureLayout : void 0,
		ProjectionNode: k.ProjectionNode
	};
}
function createMotionProxy(s, d) {
	if (typeof Proxy > "u") return createMotionComponent;
	let w = /* @__PURE__ */ new Map(), k = (w, k) => createMotionComponent(w, k, s, d);
	return new Proxy((s, d) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), k(s, d)), { get: (F, L) => L === "create" ? k : (w.has(L) || w.set(L, createMotionComponent(L, void 0, s, d)), w.get(L)) });
}
function convertBoundingBoxToBox({ top: s, left: d, right: w, bottom: k }) {
	return {
		x: {
			min: d,
			max: w
		},
		y: {
			min: s,
			max: k
		}
	};
}
function convertBoxToBoundingBox({ x: s, y: d }) {
	return {
		top: d.min,
		right: s.max,
		bottom: d.max,
		left: s.min
	};
}
function transformBoxPoints(s, d) {
	if (!d) return s;
	let w = d({
		x: s.left,
		y: s.top
	}), k = d({
		x: s.right,
		y: s.bottom
	});
	return {
		top: w.y,
		left: w.x,
		bottom: k.y,
		right: k.x
	};
}
function isIdentityScale(s) {
	return s === void 0 || s === 1;
}
function hasScale({ scale: s, scaleX: d, scaleY: w }) {
	return !isIdentityScale(s) || !isIdentityScale(d) || !isIdentityScale(w);
}
function hasTransform(s) {
	return hasScale(s) || has2DTranslate(s) || s.z || s.rotate || s.rotateX || s.rotateY || s.skewX || s.skewY;
}
function has2DTranslate(s) {
	return is2DTranslate(s.x) || is2DTranslate(s.y);
}
function is2DTranslate(s) {
	return s && s !== "0%";
}
function scalePoint(s, d, w) {
	return w + d * (s - w);
}
function applyPointDelta(s, d, w, k, F) {
	return F !== void 0 && (s = scalePoint(s, F, k)), scalePoint(s, w, k) + d;
}
function applyAxisDelta(s, d = 0, w = 1, k, F) {
	s.min = applyPointDelta(s.min, d, w, k, F), s.max = applyPointDelta(s.max, d, w, k, F);
}
function applyBoxDelta(s, { x: d, y: w }) {
	applyAxisDelta(s.x, d.translate, d.scale, d.originPoint), applyAxisDelta(s.y, w.translate, w.scale, w.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(s, d, w, k = !1) {
	let F = w.length;
	if (!F) return;
	d.x = d.y = 1;
	let L, V;
	for (let U = 0; U < F; U++) {
		L = w[U], V = L.projectionDelta;
		let { visualElement: F } = L.options;
		F && F.props.style && F.props.style.display === "contents" || (k && L.options.layoutScroll && L.scroll && L !== L.root && transformBox(s, {
			x: -L.scroll.offset.x,
			y: -L.scroll.offset.y
		}), V && (d.x *= V.x.scale, d.y *= V.y.scale, applyBoxDelta(s, V)), k && hasTransform(L.latestValues) && transformBox(s, L.latestValues));
	}
	d.x < TREE_SCALE_SNAP_MAX && d.x > TREE_SCALE_SNAP_MIN && (d.x = 1), d.y < TREE_SCALE_SNAP_MAX && d.y > TREE_SCALE_SNAP_MIN && (d.y = 1);
}
function translateAxis(s, d) {
	s.min += d, s.max += d;
}
function transformAxis(s, d, w, k, F = .5) {
	applyAxisDelta(s, d, w, mixNumber(s.min, s.max, F), k);
}
function transformBox(s, d) {
	transformAxis(s.x, d.x, d.scaleX, d.scale, d.originX), transformAxis(s.y, d.y, d.scaleY, d.scale, d.originY);
}
function measureViewportBox(s, d) {
	return convertBoundingBoxToBox(transformBoxPoints(s.getBoundingClientRect(), d));
}
function measurePageBox(s, d, w) {
	let k = measureViewportBox(s, w), { scroll: F } = d;
	return F && (translateAxis(k.x, F.offset.x), translateAxis(k.y, F.offset.y)), k;
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
		let s = window.matchMedia("(prefers-reduced-motion)"), d = () => prefersReducedMotion.current = s.matches;
		s.addEventListener("change", d), d();
	} else prefersReducedMotion.current = !1;
}
var visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(s, d, w) {
	for (let k in d) {
		let F = d[k], L = w[k];
		if (isMotionValue(F)) s.addValue(k, F);
		else if (isMotionValue(L)) s.addValue(k, motionValue(F, { owner: s }));
		else if (L !== F) if (s.hasValue(k)) {
			let d = s.getValue(k);
			d.liveStyle === !0 ? d.jump(F) : d.hasAnimated || d.set(F);
		} else {
			let d = s.getStaticValue(k);
			s.addValue(k, motionValue(d === void 0 ? F : d, { owner: s }));
		}
	}
	for (let k in w) d[k] === void 0 && s.removeValue(k);
	return d;
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
	scrapeMotionValuesFromProps(s, d, w) {
		return {};
	}
	constructor({ parent: s, props: d, presenceContext: w, reducedMotionConfig: k, blockInitialAnimation: F, visualState: L }, V = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let s = time.now();
			this.renderScheduledAt < s && (this.renderScheduledAt = s, frame.render(this.render, !1, !0));
		};
		let { latestValues: U, renderState: K } = L;
		this.latestValues = U, this.baseTarget = { ...U }, this.initialValues = d.initial ? { ...U } : {}, this.renderState = K, this.parent = s, this.props = d, this.presenceContext = w, this.depth = s ? s.depth + 1 : 0, this.reducedMotionConfig = k, this.options = V, this.blockInitialAnimation = !!F, this.isControllingVariants = isControllingVariants(d), this.isVariantNode = isVariantNode(d), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(s && s.current);
		let { willChange: q, ...J } = this.scrapeMotionValuesFromProps(d, {}, this);
		for (let s in J) {
			let d = J[s];
			U[s] !== void 0 && isMotionValue(d) && d.set(U[s]);
		}
	}
	mount(s) {
		this.current = s, visualElementStore.set(s, this), this.projection && !this.projection.instance && this.projection.mount(s), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((s, d) => this.bindToMotionValue(d, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = prefersReducedMotion.current), process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		for (let s in this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((s) => s()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[s].clear();
		for (let s in this.features) {
			let d = this.features[s];
			d && (d.unmount(), d.isMounted = !1);
		}
		this.current = null;
	}
	addChild(s) {
		this.children.add(s), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(s);
	}
	removeChild(s) {
		this.children.delete(s), this.enteringChildren && this.enteringChildren.delete(s);
	}
	bindToMotionValue(s, d) {
		this.valueSubscriptions.has(s) && this.valueSubscriptions.get(s)();
		let w = transformProps.has(s);
		w && this.onBindTransform && this.onBindTransform();
		let k = d.on("change", (d) => {
			this.latestValues[s] = d, this.props.onUpdate && frame.preRender(this.notifyUpdate), w && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), F;
		window.MotionCheckAppearSync && (F = window.MotionCheckAppearSync(this, s, d)), this.valueSubscriptions.set(s, () => {
			k(), F && F(), d.owner && d.stop();
		});
	}
	sortNodePosition(s) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== s.type ? 0 : this.sortInstanceNodePosition(this.current, s.current);
	}
	updateFeatures() {
		let s = "animation";
		for (s in featureDefinitions) {
			let d = featureDefinitions[s];
			if (!d) continue;
			let { isEnabled: w, Feature: k } = d;
			if (!this.features[s] && k && w(this.props) && (this.features[s] = new k(this)), this.features[s]) {
				let d = this.features[s];
				d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
	}
	getStaticValue(s) {
		return this.latestValues[s];
	}
	setStaticValue(s, d) {
		this.latestValues[s] = d;
	}
	update(s, d) {
		(s.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = s, this.prevPresenceContext = this.presenceContext, this.presenceContext = d;
		for (let d = 0; d < propEventHandlers.length; d++) {
			let w = propEventHandlers[d];
			this.propEventSubscriptions[w] && (this.propEventSubscriptions[w](), delete this.propEventSubscriptions[w]);
			let k = s["on" + w];
			k && (this.propEventSubscriptions[w] = this.on(w, k));
		}
		this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(s, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
	}
	getProps() {
		return this.props;
	}
	getVariant(s) {
		return this.props.variants ? this.props.variants[s] : void 0;
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
	addVariantChild(s) {
		let d = this.getClosestVariantNode();
		if (d) return d.variantChildren && d.variantChildren.add(s), () => d.variantChildren.delete(s);
	}
	addValue(s, d) {
		let w = this.values.get(s);
		d !== w && (w && this.removeValue(s), this.bindToMotionValue(s, d), this.values.set(s, d), this.latestValues[s] = d.get());
	}
	removeValue(s) {
		this.values.delete(s);
		let d = this.valueSubscriptions.get(s);
		d && (d(), this.valueSubscriptions.delete(s)), delete this.latestValues[s], this.removeValueFromRenderState(s, this.renderState);
	}
	hasValue(s) {
		return this.values.has(s);
	}
	getValue(s, d) {
		if (this.props.values && this.props.values[s]) return this.props.values[s];
		let w = this.values.get(s);
		return w === void 0 && d !== void 0 && (w = motionValue(d === null ? void 0 : d, { owner: this }), this.addValue(s, w)), w;
	}
	readValue(s, d) {
		let w = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : this.getBaseTargetFromProps(this.props, s) ?? this.readValueFromInstance(this.current, s, this.options);
		return w != null && (typeof w == "string" && (isNumericalString(w) || isZeroValueString(w)) ? w = parseFloat(w) : !findValueType(w) && complex.test(d) && (w = getAnimatableNone(s, d)), this.setBaseTarget(s, isMotionValue(w) ? w.get() : w)), isMotionValue(w) ? w.get() : w;
	}
	setBaseTarget(s, d) {
		this.baseTarget[s] = d;
	}
	getBaseTarget(s) {
		let { initial: d } = this.props, w;
		if (typeof d == "string" || typeof d == "object") {
			let k = resolveVariantFromProps(this.props, d, this.presenceContext?.custom);
			k && (w = k[s]);
		}
		if (d && w !== void 0) return w;
		let k = this.getBaseTargetFromProps(this.props, s);
		return k !== void 0 && !isMotionValue(k) ? k : this.initialValues[s] !== void 0 && w === void 0 ? void 0 : this.baseTarget[s];
	}
	on(s, d) {
		return this.events[s] || (this.events[s] = new SubscriptionManager()), this.events[s].add(d);
	}
	notify(s, ...d) {
		this.events[s] && this.events[s].notify(...d);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(s, d) {
		return s.compareDocumentPosition(d) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(s, d) {
		return s.style ? s.style[d] : void 0;
	}
	removeValueFromRenderState(s, { vars: d, style: w }) {
		delete d[s], delete w[s];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: s } = this.props;
		isMotionValue(s) && (this.childSubscription = s.on("change", (s) => {
			this.current && (this.current.textContent = `${s}`);
		}));
	}
};
function renderHTML(s, { style: d, vars: w }, k, F) {
	let L = s.style, V;
	for (V in d) L[V] = d[V];
	for (V in F?.applyProjectionStyles(L, k), w) L.setProperty(V, w[V]);
}
function getComputedStyle$1(s) {
	return window.getComputedStyle(s);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(s, d) {
		if (transformProps.has(d)) return this.projection?.isProjecting ? defaultTransformValue(d) : readTransformValue(s, d);
		{
			let w = getComputedStyle$1(s), k = (isCSSVariableName(d) ? w.getPropertyValue(d) : w[d]) || 0;
			return typeof k == "string" ? k.trim() : k;
		}
	}
	measureInstanceViewportBox(s, { transformPagePoint: d }) {
		return measureViewportBox(s, d);
	}
	build(s, d, w) {
		buildHTMLStyles(s, d, w.transformTemplate);
	}
	scrapeMotionValuesFromProps(s, d, w) {
		return scrapeMotionValuesFromProps$1(s, d, w);
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
function renderSVG(s, d, w, k) {
	for (let w in renderHTML(s, d, void 0, k), d.attrs) s.setAttribute(camelCaseAttributes.has(w) ? w : camelToDash(w), d.attrs[w]);
}
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(s, d) {
		return s[d];
	}
	readValueFromInstance(s, d) {
		if (transformProps.has(d)) {
			let s = getDefaultValueType(d);
			return s && s.default || 0;
		}
		return d = camelCaseAttributes.has(d) ? d : camelToDash(d), s.getAttribute(d);
	}
	scrapeMotionValuesFromProps(s, d, w) {
		return scrapeMotionValuesFromProps(s, d, w);
	}
	build(s, d, w) {
		buildSVGAttrs(s, d, this.isSVGTag, w.transformTemplate, w.style);
	}
	renderInstance(s, d, w, k) {
		renderSVG(s, d, w, k);
	}
	mount(s) {
		this.isSVGTag = isSVGTag(s.tagName), super.mount(s);
	}
}, createDomVisualElement = (s, d) => d.isSVG ?? isSVGComponent(s) ? new SVGVisualElement(d) : new HTMLVisualElement(d, { allowProjection: s !== Fragment });
function resolveVariant(s, d, w) {
	let k = s.getProps();
	return resolveVariantFromProps(k, d, w === void 0 ? k.custom : w, s);
}
var isKeyframesTarget = (s) => Array.isArray(s);
function setMotionValue(s, d, w) {
	s.hasValue(d) ? s.getValue(d).set(w) : s.addValue(d, motionValue(w));
}
function resolveFinalValueInKeyframes(s) {
	return isKeyframesTarget(s) ? s[s.length - 1] || 0 : s;
}
function setTarget(s, d) {
	let { transitionEnd: w = {}, transition: k = {}, ...F } = resolveVariant(s, d) || {};
	for (let d in F = {
		...F,
		...w
	}, F) setMotionValue(s, d, resolveFinalValueInKeyframes(F[d]));
}
function isWillChangeMotionValue(s) {
	return !!(isMotionValue(s) && s.add);
}
function addValueToWillChange(s, d) {
	let w = s.getValue("willChange");
	if (isWillChangeMotionValue(w)) return w.add(d);
	if (!w && MotionGlobalConfig.WillChange) {
		let w = new MotionGlobalConfig.WillChange("auto");
		s.addValue("willChange", w), w.add(d);
	}
}
function getOptimisedAppearId(s) {
	return s.props[optimizedAppearDataAttribute];
}
var isNotNull = (s) => s !== null;
function getFinalKeyframe(s, { repeat: d, repeatType: w = "loop" }, k) {
	let F = s.filter(isNotNull), L = d && w !== "loop" && d % 2 == 1 ? 0 : F.length - 1;
	return !L || k === void 0 ? F[L] : k;
}
var underDampedSpring = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, criticallyDampedSpring = (s) => ({
	type: "spring",
	stiffness: 550,
	damping: s === 0 ? 2 * Math.sqrt(550) : 30,
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
}, getDefaultTransition = (s, { keyframes: d }) => d.length > 2 ? keyframesTransition : transformProps.has(s) ? s.startsWith("scale") ? criticallyDampedSpring(d[1]) : underDampedSpring : ease;
function isTransitionDefined({ when: s, delay: d, delayChildren: w, staggerChildren: k, staggerDirection: F, repeat: L, repeatType: V, repeatDelay: U, from: K, elapsed: q, ...J }) {
	return !!Object.keys(J).length;
}
var animateMotionValue = (s, d, w, k = {}, F, L) => (V) => {
	let U = getValueTransition(k, s) || {}, K = U.delay || k.delay || 0, { elapsed: q = 0 } = k;
	q -= /* @__PURE__ */ secondsToMilliseconds(K);
	let J = {
		keyframes: Array.isArray(w) ? w : [null, w],
		ease: "easeOut",
		velocity: d.getVelocity(),
		...U,
		delay: -q,
		onUpdate: (s) => {
			d.set(s), U.onUpdate && U.onUpdate(s);
		},
		onComplete: () => {
			V(), U.onComplete && U.onComplete();
		},
		name: s,
		motionValue: d,
		element: L ? void 0 : F
	};
	isTransitionDefined(U) || Object.assign(J, getDefaultTransition(s, J)), J.duration &&= /* @__PURE__ */ secondsToMilliseconds(J.duration), J.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(J.repeatDelay), J.from !== void 0 && (J.keyframes[0] = J.from);
	let X = !1;
	if ((J.type === !1 || J.duration === 0 && !J.repeatDelay) && (makeAnimationInstant(J), J.delay === 0 && (X = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) && (X = !0, makeAnimationInstant(J), J.delay = 0), J.allowFlatten = !U.type && !U.ease, X && !L && d.get() !== void 0) {
		let s = getFinalKeyframe(J.keyframes, U);
		if (s !== void 0) {
			frame.update(() => {
				J.onUpdate(s), J.onComplete();
			});
			return;
		}
	}
	return U.isSync ? new JSAnimation(J) : new AsyncMotionValueAnimation(J);
};
function shouldBlockAnimation({ protectedKeys: s, needsAnimating: d }, w) {
	let k = s.hasOwnProperty(w) && d[w] !== !0;
	return d[w] = !1, k;
}
function animateTarget(s, d, { delay: w = 0, transitionOverride: k, type: F } = {}) {
	let { transition: L = s.getDefaultTransition(), transitionEnd: V, ...U } = d;
	k && (L = k);
	let K = [], q = F && s.animationState && s.animationState.getState()[F];
	for (let d in U) {
		let k = s.getValue(d, s.latestValues[d] ?? null), F = U[d];
		if (F === void 0 || q && shouldBlockAnimation(q, d)) continue;
		let V = {
			delay: w,
			...getValueTransition(L || {}, d)
		}, J = k.get();
		if (J !== void 0 && !k.isAnimating && !Array.isArray(F) && F === J && !V.velocity) continue;
		let X = !1;
		if (window.MotionHandoffAnimation) {
			let w = getOptimisedAppearId(s);
			if (w) {
				let s = window.MotionHandoffAnimation(w, d, frame);
				s !== null && (V.startTime = s, X = !0);
			}
		}
		addValueToWillChange(s, d), k.start(animateMotionValue(d, k, F, s.shouldReduceMotion && positionalKeys.has(d) ? { type: !1 } : V, s, X));
		let $ = k.animation;
		$ && K.push($);
	}
	return V && Promise.all(K).then(() => {
		frame.update(() => {
			V && setTarget(s, V);
		});
	}), K;
}
function calcChildStagger(s, d, w, k = 0, F = 1) {
	let L = Array.from(s).sort((s, d) => s.sortNodePosition(d)).indexOf(d), V = s.size, U = (V - 1) * k;
	return typeof w == "function" ? w(L, V) : F === 1 ? L * k : U - L * k;
}
function animateVariant(s, d, w = {}) {
	let k = resolveVariant(s, d, w.type === "exit" ? s.presenceContext?.custom : void 0), { transition: F = s.getDefaultTransition() || {} } = k || {};
	w.transitionOverride && (F = w.transitionOverride);
	let L = k ? () => Promise.all(animateTarget(s, k, w)) : () => Promise.resolve(), V = s.variantChildren && s.variantChildren.size ? (k = 0) => {
		let { delayChildren: L = 0, staggerChildren: V, staggerDirection: U } = F;
		return animateChildren(s, d, k, L, V, U, w);
	} : () => Promise.resolve(), { when: U } = F;
	if (U) {
		let [s, d] = U === "beforeChildren" ? [L, V] : [V, L];
		return s().then(() => d());
	} else return Promise.all([L(), V(w.delay)]);
}
function animateChildren(s, d, w = 0, k = 0, F = 0, L = 1, V) {
	let U = [];
	for (let K of s.variantChildren) K.notify("AnimationStart", d), U.push(animateVariant(K, d, {
		...V,
		delay: w + (typeof k == "function" ? 0 : k) + calcChildStagger(s.variantChildren, K, k, F, L)
	}).then(() => K.notify("AnimationComplete", d)));
	return Promise.all(U);
}
function animateVisualElement(s, d, w = {}) {
	s.notify("AnimationStart", d);
	let k;
	if (Array.isArray(d)) {
		let F = d.map((d) => animateVariant(s, d, w));
		k = Promise.all(F);
	} else if (typeof d == "string") k = animateVariant(s, d, w);
	else {
		let F = typeof d == "function" ? resolveVariant(s, d, w.custom) : d;
		k = Promise.all(animateTarget(s, F, w));
	}
	return k.then(() => {
		s.notify("AnimationComplete", d);
	});
}
function shallowCompare(s, d) {
	if (!Array.isArray(d)) return !1;
	let w = d.length;
	if (w !== s.length) return !1;
	for (let k = 0; k < w; k++) if (d[k] !== s[k]) return !1;
	return !0;
}
var numVariantProps = variantProps.length;
function getVariantContext(s) {
	if (!s) return;
	if (!s.isControllingVariants) {
		let d = s.parent && getVariantContext(s.parent) || {};
		return s.props.initial !== void 0 && (d.initial = s.props.initial), d;
	}
	let d = {};
	for (let w = 0; w < numVariantProps; w++) {
		let k = variantProps[w], F = s.props[k];
		(isVariantLabel(F) || F === !1) && (d[k] = F);
	}
	return d;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(s) {
	return (d) => Promise.all(d.map(({ animation: d, options: w }) => animateVisualElement(s, d, w)));
}
function createAnimationState(s) {
	let d = animateList(s), w = createState(), k = !0, F = (d) => (w, k) => {
		let F = resolveVariant(s, k, d === "exit" ? s.presenceContext?.custom : void 0);
		if (F) {
			let { transition: s, transitionEnd: d, ...k } = F;
			w = {
				...w,
				...k,
				...d
			};
		}
		return w;
	};
	function L(w) {
		d = w(s);
	}
	function V(L) {
		let { props: V } = s, U = getVariantContext(s.parent) || {}, K = [], q = /* @__PURE__ */ new Set(), J = {}, X = Infinity;
		for (let d = 0; d < numAnimationTypes; d++) {
			let $ = reversePriorityOrder[d], pA = w[$], mA = V[$] === void 0 ? U[$] : V[$], hA = isVariantLabel(mA), gA = $ === L ? pA.isActive : null;
			gA === !1 && (X = d);
			let _A = mA === U[$] && mA !== V[$] && hA;
			if (_A && k && s.manuallyAnimateOnMount && (_A = !1), pA.protectedKeys = { ...J }, !pA.isActive && gA === null || !mA && !pA.prevProp || isAnimationControls(mA) || typeof mA == "boolean") continue;
			let vA = checkVariantsDidChange(pA.prevProp, mA), yA = vA || $ === L && pA.isActive && !_A && hA || d > X && hA, bA = !1, xA = Array.isArray(mA) ? mA : [mA], SA = xA.reduce(F($), {});
			gA === !1 && (SA = {});
			let { prevResolvedValues: CA = {} } = pA, wA = {
				...CA,
				...SA
			}, TA = (d) => {
				yA = !0, q.has(d) && (bA = !0, q.delete(d)), pA.needsAnimating[d] = !0;
				let w = s.getValue(d);
				w && (w.liveStyle = !1);
			};
			for (let s in wA) {
				let d = SA[s], w = CA[s];
				if (J.hasOwnProperty(s)) continue;
				let k = !1;
				k = isKeyframesTarget(d) && isKeyframesTarget(w) ? !shallowCompare(d, w) : d !== w, k ? d == null ? q.add(s) : TA(s) : d !== void 0 && q.has(s) ? TA(s) : pA.protectedKeys[s] = !0;
			}
			pA.prevProp = mA, pA.prevResolvedValues = SA, pA.isActive && (J = {
				...J,
				...SA
			}), k && s.blockInitialAnimation && (yA = !1);
			let EA = _A && vA;
			yA && (!EA || bA) && K.push(...xA.map((d) => {
				let w = { type: $ };
				if (typeof d == "string" && k && !EA && s.manuallyAnimateOnMount && s.parent) {
					let { parent: k } = s, F = resolveVariant(k, d);
					if (k.enteringChildren && F) {
						let { delayChildren: d } = F.transition || {};
						w.delay = calcChildStagger(k.enteringChildren, s, d);
					}
				}
				return {
					animation: d,
					options: w
				};
			}));
		}
		if (q.size) {
			let d = {};
			if (typeof V.initial != "boolean") {
				let w = resolveVariant(s, Array.isArray(V.initial) ? V.initial[0] : V.initial);
				w && w.transition && (d.transition = w.transition);
			}
			q.forEach((w) => {
				let k = s.getBaseTarget(w), F = s.getValue(w);
				F && (F.liveStyle = !0), d[w] = k ?? null;
			}), K.push({ animation: d });
		}
		let $ = !!K.length;
		return k && (V.initial === !1 || V.initial === V.animate) && !s.manuallyAnimateOnMount && ($ = !1), k = !1, $ ? d(K) : Promise.resolve();
	}
	function U(d, k) {
		if (w[d].isActive === k) return Promise.resolve();
		s.variantChildren?.forEach((s) => s.animationState?.setActive(d, k)), w[d].isActive = k;
		let F = V(d);
		for (let s in w) w[s].protectedKeys = {};
		return F;
	}
	return {
		animateChanges: V,
		setActive: U,
		setAnimateFunction: L,
		getState: () => w,
		reset: () => {
			w = createState();
		}
	};
}
function checkVariantsDidChange(s, d) {
	return typeof d == "string" ? d !== s : Array.isArray(d) ? !shallowCompare(d, s) : !1;
}
function createTypeState(s = !1) {
	return {
		isActive: s,
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
	constructor(s) {
		this.isMounted = !1, this.node = s;
	}
	update() {}
}, AnimationFeature = class extends Feature {
	constructor(s) {
		super(s), s.animationState ||= createAnimationState(s);
	}
	updateAnimationControlsSubscription() {
		let { animate: s } = this.node.getProps();
		isAnimationControls(s) && (this.unmountControls = s.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		let { animate: s } = this.node.getProps(), { animate: d } = this.node.prevProps || {};
		s !== d && this.updateAnimationControlsSubscription();
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
			let { isPresent: s, onExitComplete: d } = this.node.presenceContext, { isPresent: w } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || s === w) return;
			let k = this.node.animationState.setActive("exit", !s);
			d && !s && k.then(() => {
				d(this.id);
			});
		}
		mount() {
			let { register: s, onExitComplete: d } = this.node.presenceContext || {};
			d && d(this.id), s && (this.unmount = s(this.id));
		}
		unmount() {}
	} }
};
function addDomEvent(s, d, w, k = { passive: !0 }) {
	return s.addEventListener(d, w, k), () => s.removeEventListener(d, w);
}
function extractEventInfo(s) {
	return { point: {
		x: s.pageX,
		y: s.pageY
	} };
}
var addPointerInfo = (s) => (d) => isPrimaryPointer(d) && s(d, extractEventInfo(d));
function addPointerEvent(s, d, w, k) {
	return addDomEvent(s, d, addPointerInfo(w), k);
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(s) {
	return s.max - s.min;
}
function isNear(s, d, w) {
	return Math.abs(s - d) <= w;
}
function calcAxisDelta(s, d, w, k = .5) {
	s.origin = k, s.originPoint = mixNumber(d.min, d.max, s.origin), s.scale = calcLength(w) / calcLength(d), s.translate = mixNumber(w.min, w.max, s.origin) - s.originPoint, (s.scale >= SCALE_MIN && s.scale <= SCALE_MAX || isNaN(s.scale)) && (s.scale = 1), (s.translate >= TRANSLATE_MIN && s.translate <= TRANSLATE_MAX || isNaN(s.translate)) && (s.translate = 0);
}
function calcBoxDelta(s, d, w, k) {
	calcAxisDelta(s.x, d.x, w.x, k ? k.originX : void 0), calcAxisDelta(s.y, d.y, w.y, k ? k.originY : void 0);
}
function calcRelativeAxis(s, d, w) {
	s.min = w.min + d.min, s.max = s.min + calcLength(d);
}
function calcRelativeBox(s, d, w) {
	calcRelativeAxis(s.x, d.x, w.x), calcRelativeAxis(s.y, d.y, w.y);
}
function calcRelativeAxisPosition(s, d, w) {
	s.min = d.min - w.min, s.max = s.min + calcLength(d);
}
function calcRelativePosition(s, d, w) {
	calcRelativeAxisPosition(s.x, d.x, w.x), calcRelativeAxisPosition(s.y, d.y, w.y);
}
function eachAxis(s) {
	return [s("x"), s("y")];
}
var getContextWindow = ({ current: s }) => s ? s.ownerDocument.defaultView : null, distance = (s, d) => Math.abs(s - d);
function distance2D(s, d) {
	let w = distance(s.x, d.x), k = distance(s.y, d.y);
	return Math.sqrt(w ** 2 + k ** 2);
}
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]), PanSession = class {
	constructor(s, d, { transformPagePoint: w, contextWindow: k = window, dragSnapToOrigin: F = !1, distanceThreshold: L = 3, element: V } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (s) => {
			this.handleScroll(s.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let s = getPanInfo(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, w = distance2D(s.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!d && !w) return;
			let { point: k } = s, { timestamp: F } = frameData;
			this.history.push({
				...k,
				timestamp: F
			});
			let { onStart: L, onMove: V } = this.handlers;
			d || (L && L(this.lastMoveEvent, s), this.startEvent = this.lastMoveEvent), V && V(this.lastMoveEvent, s);
		}, this.handlePointerMove = (s, d) => {
			this.lastMoveEvent = s, this.lastMoveEventInfo = transformPoint(d, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (s, d) => {
			this.end();
			let { onEnd: w, onSessionEnd: k, resumeAnimation: F } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && F && F(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let L = getPanInfo(s.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(d, this.transformPagePoint), this.history);
			this.startEvent && w && w(s, L), k && k(s, L);
		}, !isPrimaryPointer(s)) return;
		this.dragSnapToOrigin = F, this.handlers = d, this.transformPagePoint = w, this.distanceThreshold = L, this.contextWindow = k || window;
		let U = transformPoint(extractEventInfo(s), this.transformPagePoint), { point: K } = U, { timestamp: q } = frameData;
		this.history = [{
			...K,
			timestamp: q
		}];
		let { onSessionStart: J } = d;
		J && J(s, getPanInfo(U, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp)), V && this.startScrollTracking(V);
	}
	startScrollTracking(s) {
		let d = s.parentElement;
		for (; d;) {
			let s = getComputedStyle(d);
			(overflowStyles.has(s.overflowX) || overflowStyles.has(s.overflowY)) && this.scrollPositions.set(d, {
				x: d.scrollLeft,
				y: d.scrollTop
			}), d = d.parentElement;
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
	handleScroll(s) {
		let d = this.scrollPositions.get(s);
		if (!d) return;
		let w = s === window, k = w ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: s.scrollLeft,
			y: s.scrollTop
		}, F = {
			x: k.x - d.x,
			y: k.y - d.y
		};
		F.x === 0 && F.y === 0 || (w ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += F.x, this.lastMoveEventInfo.point.y += F.y) : this.history.length > 0 && (this.history[0].x -= F.x, this.history[0].y -= F.y), this.scrollPositions.set(s, k), frame.update(this.updatePoint, !0));
	}
	updateHandlers(s) {
		this.handlers = s;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), cancelFrame(this.updatePoint);
	}
};
function transformPoint(s, d) {
	return d ? { point: d(s.point) } : s;
}
function subtractPoint(s, d) {
	return {
		x: s.x - d.x,
		y: s.y - d.y
	};
}
function getPanInfo({ point: s }, d) {
	return {
		point: s,
		delta: subtractPoint(s, lastDevicePoint(d)),
		offset: subtractPoint(s, startDevicePoint(d)),
		velocity: getVelocity(d, .1)
	};
}
function startDevicePoint(s) {
	return s[0];
}
function lastDevicePoint(s) {
	return s[s.length - 1];
}
function getVelocity(s, d) {
	if (s.length < 2) return {
		x: 0,
		y: 0
	};
	let w = s.length - 1, k = null, F = lastDevicePoint(s);
	for (; w >= 0 && (k = s[w], !(F.timestamp - k.timestamp > /* @__PURE__ */ secondsToMilliseconds(d)));) w--;
	if (!k) return {
		x: 0,
		y: 0
	};
	let L = /* @__PURE__ */ millisecondsToSeconds(F.timestamp - k.timestamp);
	if (L === 0) return {
		x: 0,
		y: 0
	};
	let V = {
		x: (F.x - k.x) / L,
		y: (F.y - k.y) / L
	};
	return V.x === Infinity && (V.x = 0), V.y === Infinity && (V.y = 0), V;
}
function applyConstraints(s, { min: d, max: w }, k) {
	return d !== void 0 && s < d ? s = k ? mixNumber(d, s, k.min) : Math.max(s, d) : w !== void 0 && s > w && (s = k ? mixNumber(w, s, k.max) : Math.min(s, w)), s;
}
function calcRelativeAxisConstraints(s, d, w) {
	return {
		min: d === void 0 ? void 0 : s.min + d,
		max: w === void 0 ? void 0 : s.max + w - (s.max - s.min)
	};
}
function calcRelativeConstraints(s, { top: d, left: w, bottom: k, right: F }) {
	return {
		x: calcRelativeAxisConstraints(s.x, w, F),
		y: calcRelativeAxisConstraints(s.y, d, k)
	};
}
function calcViewportAxisConstraints(s, d) {
	let w = d.min - s.min, k = d.max - s.max;
	return d.max - d.min < s.max - s.min && ([w, k] = [k, w]), {
		min: w,
		max: k
	};
}
function calcViewportConstraints(s, d) {
	return {
		x: calcViewportAxisConstraints(s.x, d.x),
		y: calcViewportAxisConstraints(s.y, d.y)
	};
}
function calcOrigin(s, d) {
	let w = .5, k = calcLength(s), F = calcLength(d);
	return F > k ? w = /* @__PURE__ */ progress(d.min, d.max - k, s.min) : k > F && (w = /* @__PURE__ */ progress(s.min, s.max - F, d.min)), clamp(0, 1, w);
}
function rebaseAxisConstraints(s, d) {
	let w = {};
	return d.min !== void 0 && (w.min = d.min - s.min), d.max !== void 0 && (w.max = d.max - s.min), w;
}
var defaultElastic = .35;
function resolveDragElastic(s = defaultElastic) {
	return s === !1 ? s = 0 : s === !0 && (s = defaultElastic), {
		x: resolveAxisElastic(s, "left", "right"),
		y: resolveAxisElastic(s, "top", "bottom")
	};
}
function resolveAxisElastic(s, d, w) {
	return {
		min: resolvePointElastic(s, d),
		max: resolvePointElastic(s, w)
	};
}
function resolvePointElastic(s, d) {
	return typeof s == "number" ? s : s[d] || 0;
}
var elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
	constructor(s) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = s;
	}
	start(s, { snapToCursor: d = !1, distanceThreshold: w } = {}) {
		let { presenceContext: k } = this.visualElement;
		if (k && k.isPresent === !1) return;
		let F = (s) => {
			d ? (this.stopAnimation(), this.snapToCursor(extractEventInfo(s).point)) : this.pauseAnimation();
		}, L = (s, d) => {
			this.stopAnimation();
			let { drag: w, dragPropagation: k, onDragStart: F } = this.getProps();
			if (w && !k && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(w), !this.openDragLock)) return;
			this.latestPointerEvent = s, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((s) => {
				let d = this.getAxisMotionValue(s).get() || 0;
				if (percent.test(d)) {
					let { projection: w } = this.visualElement;
					if (w && w.layout) {
						let k = w.layout.layoutBox[s];
						k && (d = calcLength(k) * (parseFloat(d) / 100));
					}
				}
				this.originPoint[s] = d;
			}), F && frame.postRender(() => F(s, d)), addValueToWillChange(this.visualElement, "transform");
			let { animationState: L } = this.visualElement;
			L && L.setActive("whileDrag", !0);
		}, V = (s, d) => {
			this.latestPointerEvent = s, this.latestPanInfo = d;
			let { dragPropagation: w, dragDirectionLock: k, onDirectionLock: F, onDrag: L } = this.getProps();
			if (!w && !this.openDragLock) return;
			let { offset: V } = d;
			if (k && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(V), this.currentDirection !== null && F && F(this.currentDirection);
				return;
			}
			this.updateAxis("x", d.point, V), this.updateAxis("y", d.point, V), this.visualElement.render(), L && L(s, d);
		}, U = (s, d) => {
			this.latestPointerEvent = s, this.latestPanInfo = d, this.stop(s, d), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, K = () => eachAxis((s) => this.getAnimationState(s) === "paused" && this.getAxisMotionValue(s).animation?.play()), { dragSnapToOrigin: q } = this.getProps();
		this.panSession = new PanSession(s, {
			onSessionStart: F,
			onStart: L,
			onMove: V,
			onSessionEnd: U,
			resumeAnimation: K
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: q,
			distanceThreshold: w,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(s, d) {
		let w = s || this.latestPointerEvent, k = d || this.latestPanInfo, F = this.isDragging;
		if (this.cancel(), !F || !k || !w) return;
		let { velocity: L } = k;
		this.startAnimation(L);
		let { onDragEnd: V } = this.getProps();
		V && frame.postRender(() => V(w, k));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: s, animationState: d } = this.visualElement;
		s && (s.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: w } = this.getProps();
		!w && this.openDragLock && (this.openDragLock(), this.openDragLock = null), d && d.setActive("whileDrag", !1);
	}
	updateAxis(s, d, w) {
		let { drag: k } = this.getProps();
		if (!w || !shouldDrag(s, k, this.currentDirection)) return;
		let F = this.getAxisMotionValue(s), L = this.originPoint[s] + w[s];
		this.constraints && this.constraints[s] && (L = applyConstraints(L, this.constraints[s], this.elastic[s])), F.set(L);
	}
	resolveConstraints() {
		let { dragConstraints: s, dragElastic: d } = this.getProps(), w = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, k = this.constraints;
		s && isRefObject(s) ? this.constraints ||= this.resolveRefConstraints() : s && w ? this.constraints = calcRelativeConstraints(w.layoutBox, s) : this.constraints = !1, this.elastic = resolveDragElastic(d), k !== this.constraints && w && this.constraints && !this.hasMutatedConstraints && eachAxis((s) => {
			this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = rebaseAxisConstraints(w.layoutBox[s], this.constraints[s]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: s, onMeasureDragConstraints: d } = this.getProps();
		if (!s || !isRefObject(s)) return !1;
		let w = s.current;
		invariant(w !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: k } = this.visualElement;
		if (!k || !k.layout) return !1;
		let F = measurePageBox(w, k.root, this.visualElement.getTransformPagePoint()), L = calcViewportConstraints(k.layout.layoutBox, F);
		if (d) {
			let s = d(convertBoxToBoundingBox(L));
			this.hasMutatedConstraints = !!s, s && (L = convertBoundingBoxToBox(s));
		}
		return L;
	}
	startAnimation(s) {
		let { drag: d, dragMomentum: w, dragElastic: k, dragTransition: F, dragSnapToOrigin: L, onDragTransitionEnd: V } = this.getProps(), U = this.constraints || {}, K = eachAxis((V) => {
			if (!shouldDrag(V, d, this.currentDirection)) return;
			let K = U && U[V] || {};
			L && (K = {
				min: 0,
				max: 0
			});
			let q = k ? 200 : 1e6, J = k ? 40 : 1e7, X = {
				type: "inertia",
				velocity: w ? s[V] : 0,
				bounceStiffness: q,
				bounceDamping: J,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...F,
				...K
			};
			return this.startAxisValueAnimation(V, X);
		});
		return Promise.all(K).then(V);
	}
	startAxisValueAnimation(s, d) {
		let w = this.getAxisMotionValue(s);
		return addValueToWillChange(this.visualElement, s), w.start(animateMotionValue(s, w, 0, d, this.visualElement, !1));
	}
	stopAnimation() {
		eachAxis((s) => this.getAxisMotionValue(s).stop());
	}
	pauseAnimation() {
		eachAxis((s) => this.getAxisMotionValue(s).animation?.pause());
	}
	getAnimationState(s) {
		return this.getAxisMotionValue(s).animation?.state;
	}
	getAxisMotionValue(s) {
		let d = `_drag${s.toUpperCase()}`, w = this.visualElement.getProps();
		return w[d] || this.visualElement.getValue(s, (w.initial ? w.initial[s] : void 0) || 0);
	}
	snapToCursor(s) {
		eachAxis((d) => {
			let { drag: w } = this.getProps();
			if (!shouldDrag(d, w, this.currentDirection)) return;
			let { projection: k } = this.visualElement, F = this.getAxisMotionValue(d);
			if (k && k.layout) {
				let { min: w, max: L } = k.layout.layoutBox[d], V = F.get() || 0;
				F.set(s[d] - mixNumber(w, L, .5) + V);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: s, dragConstraints: d } = this.getProps(), { projection: w } = this.visualElement;
		if (!isRefObject(d) || !w || !this.constraints) return;
		this.stopAnimation();
		let k = {
			x: 0,
			y: 0
		};
		eachAxis((s) => {
			let d = this.getAxisMotionValue(s);
			if (d && this.constraints !== !1) {
				let w = d.get();
				k[s] = calcOrigin({
					min: w,
					max: w
				}, this.constraints[s]);
			}
		});
		let { transformTemplate: F } = this.visualElement.getProps();
		this.visualElement.current.style.transform = F ? F({}, "") : "none", w.root && w.root.updateScroll(), w.updateLayout(), this.resolveConstraints(), eachAxis((d) => {
			if (!shouldDrag(d, s, null)) return;
			let w = this.getAxisMotionValue(d), { min: F, max: L } = this.constraints[d];
			w.set(mixNumber(F, L, k[d]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let s = this.visualElement.current, d = addPointerEvent(s, "pointerdown", (s) => {
			let { drag: d, dragListener: w = !0 } = this.getProps();
			d && w && !isElementKeyboardAccessible(s.target) && this.start(s);
		}), w = () => {
			let { dragConstraints: s } = this.getProps();
			isRefObject(s) && s.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: k } = this.visualElement, F = k.addEventListener("measure", w);
		k && !k.layout && (k.root && k.root.updateScroll(), k.updateLayout()), frame.read(w);
		let L = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), V = k.addEventListener("didUpdate", (({ delta: s, hasLayoutChanged: d }) => {
			this.isDragging && d && (eachAxis((d) => {
				let w = this.getAxisMotionValue(d);
				w && (this.originPoint[d] += s[d].translate, w.set(w.get() + s[d].translate));
			}), this.visualElement.render());
		}));
		return () => {
			L(), d(), F(), V && V();
		};
	}
	getProps() {
		let s = this.visualElement.getProps(), { drag: d = !1, dragDirectionLock: w = !1, dragPropagation: k = !1, dragConstraints: F = !1, dragElastic: L = defaultElastic, dragMomentum: V = !0 } = s;
		return {
			...s,
			drag: d,
			dragDirectionLock: w,
			dragPropagation: k,
			dragConstraints: F,
			dragElastic: L,
			dragMomentum: V
		};
	}
};
function shouldDrag(s, d, w) {
	return (d === !0 || d === s) && (w === null || w === s);
}
function getCurrentDirection(s, d = 10) {
	let w = null;
	return Math.abs(s.y) > d ? w = "y" : Math.abs(s.x) > d && (w = "x"), w;
}
var DragGesture = class extends Feature {
	constructor(s) {
		super(s), this.removeGroupControls = noop, this.removeListeners = noop, this.controls = new VisualElementDragControls(s);
	}
	mount() {
		let { dragControls: s } = this.node.getProps();
		s && (this.removeGroupControls = s.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || noop;
	}
	update() {
		let { dragControls: s } = this.node.getProps(), { dragControls: d } = this.node.prevProps || {};
		s !== d && (this.removeGroupControls(), s && (this.removeGroupControls = s.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, asyncHandler = (s) => (d, w) => {
	s && frame.postRender(() => s(d, w));
}, PanGesture = class extends Feature {
	constructor() {
		super(...arguments), this.removePointerDownListener = noop;
	}
	onPointerDown(s) {
		this.session = new PanSession(s, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: getContextWindow(this.node)
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: s, onPanStart: d, onPan: w, onPanEnd: k } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(s),
			onStart: asyncHandler(d),
			onMove: w,
			onEnd: (s, d) => {
				delete this.session, k && frame.postRender(() => k(s, d));
			}
		};
	}
	mount() {
		this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (s) => this.onPointerDown(s));
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
		let { visualElement: s, layoutGroup: d, switchLayoutGroup: w, layoutId: k } = this.props, { projection: F } = s;
		F && (d.group && d.group.add(F), w && w.register && k && w.register(F), hasTakenAnySnapshot && F.root.didUpdate(), F.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), F.setOptions({
			...F.options,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(s) {
		let { layoutDependency: d, visualElement: w, drag: k, isPresent: F } = this.props, { projection: L } = w;
		return L ? (L.isPresent = F, hasTakenAnySnapshot = !0, k || s.layoutDependency !== d || d === void 0 || s.isPresent !== F ? L.willUpdate() : this.safeToRemove(), s.isPresent !== F && (F ? L.promote() : L.relegate() || frame.postRender(() => {
			let s = L.getStack();
			(!s || !s.members.length) && this.safeToRemove();
		})), null) : null;
	}
	componentDidUpdate() {
		let { projection: s } = this.props.visualElement;
		s && (s.root.didUpdate(), microtask.postRender(() => {
			!s.currentAnimation && s.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: s, layoutGroup: d, switchLayoutGroup: w } = this.props, { projection: k } = s;
		hasTakenAnySnapshot = !0, k && (k.scheduleCheckAfterUnmount(), d && d.group && d.group.remove(k), w && w.deregister && w.deregister(k));
	}
	safeToRemove() {
		let { safeToRemove: s } = this.props;
		s && s();
	}
	render() {
		return null;
	}
};
function MeasureLayout(s) {
	let [d, w] = usePresence(), k = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...s,
		layoutGroup: k,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: d,
		safeToRemove: w
	});
}
function animateSingleValue(s, d, w) {
	let k = isMotionValue(s) ? s : motionValue(s);
	return k.start(animateMotionValue("", k, d, w)), k.animation;
}
var compareByDepth = (s, d) => s.depth - d.depth, FlatTree = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(s) {
		addUniqueItem(this.children, s), this.isDirty = !0;
	}
	remove(s) {
		removeItem(this.children, s), this.isDirty = !0;
	}
	forEach(s) {
		this.isDirty && this.children.sort(compareByDepth), this.isDirty = !1, this.children.forEach(s);
	}
};
function delay(s, d) {
	let w = time.now(), k = ({ timestamp: F }) => {
		let L = F - w;
		L >= d && (cancelFrame(k), s(L - d));
	};
	return frame.setup(k, !0), () => cancelFrame(k);
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (s) => typeof s == "string" ? parseFloat(s) : s, isPx = (s) => typeof s == "number" || px.test(s);
function mixValues(s, d, w, k, F, L) {
	F ? (s.opacity = mixNumber(0, w.opacity ?? 1, easeCrossfadeIn(k)), s.opacityExit = mixNumber(d.opacity ?? 1, 0, easeCrossfadeOut(k))) : L && (s.opacity = mixNumber(d.opacity ?? 1, w.opacity ?? 1, k));
	for (let F = 0; F < numBorders; F++) {
		let L = `border${borders[F]}Radius`, V = getRadius(d, L), U = getRadius(w, L);
		V === void 0 && U === void 0 || (V ||= 0, U ||= 0, V === 0 || U === 0 || isPx(V) === isPx(U) ? (s[L] = Math.max(mixNumber(asNumber(V), asNumber(U), k), 0), (percent.test(U) || percent.test(V)) && (s[L] += "%")) : s[L] = U);
	}
	(d.rotate || w.rotate) && (s.rotate = mixNumber(d.rotate || 0, w.rotate || 0, k));
}
function getRadius(s, d) {
	return s[d] === void 0 ? s.borderRadius : s[d];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(s, d, w) {
	return (k) => k < s ? 0 : k > d ? 1 : w(/* @__PURE__ */ progress(s, d, k));
}
function copyAxisInto(s, d) {
	s.min = d.min, s.max = d.max;
}
function copyBoxInto(s, d) {
	copyAxisInto(s.x, d.x), copyAxisInto(s.y, d.y);
}
function copyAxisDeltaInto(s, d) {
	s.translate = d.translate, s.scale = d.scale, s.originPoint = d.originPoint, s.origin = d.origin;
}
function removePointDelta(s, d, w, k, F) {
	return s -= d, s = scalePoint(s, 1 / w, k), F !== void 0 && (s = scalePoint(s, 1 / F, k)), s;
}
function removeAxisDelta(s, d = 0, w = 1, k = .5, F, L = s, V = s) {
	if (percent.test(d) && (d = parseFloat(d), d = mixNumber(V.min, V.max, d / 100) - V.min), typeof d != "number") return;
	let U = mixNumber(L.min, L.max, k);
	s === L && (U -= d), s.min = removePointDelta(s.min, d, w, U, F), s.max = removePointDelta(s.max, d, w, U, F);
}
function removeAxisTransforms(s, d, [w, k, F], L, V) {
	removeAxisDelta(s, d[w], d[k], d[F], d.scale, L, V);
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
function removeBoxTransforms(s, d, w, k) {
	removeAxisTransforms(s.x, d, xKeys, w ? w.x : void 0, k ? k.x : void 0), removeAxisTransforms(s.y, d, yKeys, w ? w.y : void 0, k ? k.y : void 0);
}
function isAxisDeltaZero(s) {
	return s.translate === 0 && s.scale === 1;
}
function isDeltaZero(s) {
	return isAxisDeltaZero(s.x) && isAxisDeltaZero(s.y);
}
function axisEquals(s, d) {
	return s.min === d.min && s.max === d.max;
}
function boxEquals(s, d) {
	return axisEquals(s.x, d.x) && axisEquals(s.y, d.y);
}
function axisEqualsRounded(s, d) {
	return Math.round(s.min) === Math.round(d.min) && Math.round(s.max) === Math.round(d.max);
}
function boxEqualsRounded(s, d) {
	return axisEqualsRounded(s.x, d.x) && axisEqualsRounded(s.y, d.y);
}
function aspectRatio(s) {
	return calcLength(s.x) / calcLength(s.y);
}
function axisDeltaEquals(s, d) {
	return s.translate === d.translate && s.scale === d.scale && s.originPoint === d.originPoint;
}
var NodeStack = class {
	constructor() {
		this.members = [];
	}
	add(s) {
		addUniqueItem(this.members, s), s.scheduleRender();
	}
	remove(s) {
		if (removeItem(this.members, s), s === this.prevLead && (this.prevLead = void 0), s === this.lead) {
			let s = this.members[this.members.length - 1];
			s && this.promote(s);
		}
	}
	relegate(s) {
		let d = this.members.findIndex((d) => s === d);
		if (d === 0) return !1;
		let w;
		for (let s = d; s >= 0; s--) {
			let d = this.members[s];
			if (d.isPresent !== !1) {
				w = d;
				break;
			}
		}
		return w ? (this.promote(w), !0) : !1;
	}
	promote(s, d) {
		let w = this.lead;
		if (s !== w && (this.prevLead = w, this.lead = s, s.show(), w)) {
			w.instance && w.scheduleRender(), s.scheduleRender(), s.resumeFrom = w, d && (s.resumeFrom.preserveOpacity = !0), w.snapshot && (s.snapshot = w.snapshot, s.snapshot.latestValues = w.animationValues || w.latestValues), s.root && s.root.isUpdating && (s.isLayoutDirty = !0);
			let { crossfade: k } = s.options;
			k === !1 && w.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((s) => {
			let { options: d, resumingFrom: w } = s;
			d.onExitComplete && d.onExitComplete(), w && w.options.onExitComplete && w.options.onExitComplete();
		});
	}
	scheduleRender() {
		this.members.forEach((s) => {
			s.instance && s.scheduleRender(!1);
		});
	}
	removeLeadSnapshot() {
		this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
	}
};
function buildProjectionTransform(s, d, w) {
	let k = "", F = s.x.translate / d.x, L = s.y.translate / d.y, V = w?.z || 0;
	if ((F || L || V) && (k = `translate3d(${F}px, ${L}px, ${V}px) `), (d.x !== 1 || d.y !== 1) && (k += `scale(${1 / d.x}, ${1 / d.y}) `), w) {
		let { transformPerspective: s, rotate: d, rotateX: F, rotateY: L, skewX: V, skewY: U } = w;
		s && (k = `perspective(${s}px) ${k}`), d && (k += `rotate(${d}deg) `), F && (k += `rotateX(${F}deg) `), L && (k += `rotateY(${L}deg) `), V && (k += `skewX(${V}deg) `), U && (k += `skewY(${U}deg) `);
	}
	let U = s.x.scale * d.x, K = s.y.scale * d.y;
	return (U !== 1 || K !== 1) && (k += `scale(${U}, ${K})`), k || "none";
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
function resetDistortingTransform(s, d, w, k) {
	let { latestValues: F } = d;
	F[s] && (w[s] = F[s], d.setStaticValue(s, 0), k && (k[s] = 0));
}
function cancelTreeOptimisedTransformAnimations(s) {
	if (s.hasCheckedOptimisedAppear = !0, s.root === s) return;
	let { visualElement: d } = s.options;
	if (!d) return;
	let w = getOptimisedAppearId(d);
	if (window.MotionHasOptimisedAnimation(w, "transform")) {
		let { layout: d, layoutId: k } = s.options;
		window.MotionCancelOptimisedAnimation(w, "transform", frame, !(d || k));
	}
	let { parent: k } = s;
	k && !k.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(k);
}
function createProjectionNode({ attachResizeListener: s, defaultParent: d, measureScroll: w, checkIsScrollRoot: k, resetTransform: F }) {
	return class {
		constructor(s = {}, w = d?.()) {
			this.id = id++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, statsBuffer.value && (metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), statsBuffer.addProjectionMetrics && statsBuffer.addProjectionMetrics(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = w ? w.root || w : this, this.path = w ? [...w.path, w] : [], this.parent = w, this.depth = w ? w.depth + 1 : 0;
			for (let s = 0; s < this.path.length; s++) this.path[s].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(s, d) {
			return this.eventHandlers.has(s) || this.eventHandlers.set(s, new SubscriptionManager()), this.eventHandlers.get(s).add(d);
		}
		notifyListeners(s, ...d) {
			let w = this.eventHandlers.get(s);
			w && w.notify(...d);
		}
		hasListeners(s) {
			return this.eventHandlers.has(s);
		}
		mount(d) {
			if (this.instance) return;
			this.isSVG = isSVGElement(d) && !isSVGSVGElement(d), this.instance = d;
			let { layoutId: w, layout: k, visualElement: F } = this.options;
			if (F && !F.current && F.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (k || w) && (this.isLayoutDirty = !0), s) {
				let w, k = 0, F = () => this.root.updateBlockedByResize = !1;
				frame.read(() => {
					k = window.innerWidth;
				}), s(d, () => {
					let s = window.innerWidth;
					s !== k && (k = s, this.root.updateBlockedByResize = !0, w && w(), w = delay(F, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation)));
				});
			}
			w && this.root.registerSharedNode(w, this), this.options.animate !== !1 && F && (w || k) && this.addEventListener("didUpdate", ({ delta: s, hasLayoutChanged: d, hasRelativeLayoutChanged: w, layout: k }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let L = this.options.transition || F.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: V, onLayoutAnimationComplete: U } = F.getProps(), K = !this.targetLayout || !boxEqualsRounded(this.targetLayout, k), q = !d && w;
				if (this.options.layoutRoot || this.resumeFrom || q || d && (K || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let d = {
						...getValueTransition(L, "layout"),
						onPlay: V,
						onComplete: U
					};
					(F.shouldReduceMotion || this.options.layoutRoot) && (d.delay = 0, d.type = !1), this.startAnimation(d), this.setAnimationOrigin(s, q);
				} else d || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = k;
			});
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
			let s = this.getStack();
			s && s.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), cancelFrame(this.updateProjection);
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
			let { visualElement: s } = this.options;
			return s && s.getProps().transformTemplate;
		}
		willUpdate(s = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete && this.options.onExitComplete();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			this.isLayoutDirty = !0;
			for (let s = 0; s < this.path.length; s++) {
				let d = this.path[s];
				d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
			}
			let { layoutId: d, layout: w } = this.options;
			if (d === void 0 && !w) return;
			let k = this.getTransformTemplate();
			this.prevTransformTemplateValue = k ? k(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
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
			let s = time.now();
			frameData.delta = clamp(0, 1e3 / 60, s - frameData.timestamp), frameData.timestamp = s, frameData.isProcessing = !0, frameSteps.update.process(frameData), frameSteps.preRender.process(frameData), frameSteps.render.process(frameData), frameData.isProcessing = !1;
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
			if (this.resumeFrom && !this.resumeFrom.instance) for (let s = 0; s < this.path.length; s++) this.path[s].updateScroll();
			let s = this.layout;
			this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = createBox(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: d } = this.options;
			d && d.notify("LayoutMeasure", this.layout.layoutBox, s ? s.layoutBox : void 0);
		}
		updateScroll(s = "measure") {
			let d = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === s && (d = !1), d && this.instance) {
				let d = k(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: s,
					isRoot: d,
					offset: w(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : d
				};
			}
		}
		resetTransform() {
			if (!F) return;
			let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, d = this.projectionDelta && !isDeltaZero(this.projectionDelta), w = this.getTransformTemplate(), k = w ? w(this.latestValues, "") : void 0, L = k !== this.prevTransformTemplateValue;
			s && this.instance && (d || hasTransform(this.latestValues) || L) && (F(this.instance, k), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(s = !0) {
			let d = this.measurePageBox(), w = this.removeElementScroll(d);
			return s && (w = this.removeTransform(w)), roundBox(w), {
				animationId: this.root.animationId,
				measuredBox: d,
				layoutBox: w,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: s } = this.options;
			if (!s) return createBox();
			let d = s.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				let { scroll: s } = this.root;
				s && (translateAxis(d.x, s.offset.x), translateAxis(d.y, s.offset.y));
			}
			return d;
		}
		removeElementScroll(s) {
			let d = createBox();
			if (copyBoxInto(d, s), this.scroll?.wasRoot) return d;
			for (let w = 0; w < this.path.length; w++) {
				let k = this.path[w], { scroll: F, options: L } = k;
				k !== this.root && F && L.layoutScroll && (F.wasRoot && copyBoxInto(d, s), translateAxis(d.x, F.offset.x), translateAxis(d.y, F.offset.y));
			}
			return d;
		}
		applyTransform(s, d = !1) {
			let w = createBox();
			copyBoxInto(w, s);
			for (let s = 0; s < this.path.length; s++) {
				let k = this.path[s];
				!d && k.options.layoutScroll && k.scroll && k !== k.root && transformBox(w, {
					x: -k.scroll.offset.x,
					y: -k.scroll.offset.y
				}), hasTransform(k.latestValues) && transformBox(w, k.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(w, this.latestValues), w;
		}
		removeTransform(s) {
			let d = createBox();
			copyBoxInto(d, s);
			for (let s = 0; s < this.path.length; s++) {
				let w = this.path[s];
				if (!w.instance || !hasTransform(w.latestValues)) continue;
				hasScale(w.latestValues) && w.updateSnapshot();
				let k = createBox();
				copyBoxInto(k, w.measurePageBox()), removeBoxTransforms(d, w.latestValues, w.snapshot ? w.snapshot.layoutBox : void 0, k);
			}
			return hasTransform(this.latestValues) && removeBoxTransforms(d, this.latestValues), d;
		}
		setTargetDelta(s) {
			this.targetDelta = s, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(s) {
			this.options = {
				...this.options,
				...s,
				crossfade: s.crossfade === void 0 ? !0 : s.crossfade
			};
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(s = !1) {
			let d = this.getLead();
			this.isProjectionDirty ||= d.isProjectionDirty, this.isTransformDirty ||= d.isTransformDirty, this.isSharedProjectionDirty ||= d.isSharedProjectionDirty;
			let w = !!this.resumingFrom || this !== d;
			if (!(s || w && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: k, layoutId: F } = this.options;
			if (!this.layout || !(k || F)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			let L = this.getClosestProjectingParent();
			L && this.linkedParentVersion !== L.layoutVersion && !L.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (L && L.layout ? this.createRelativeTarget(L, this.layout.layoutBox, L.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, L && !!L.resumingFrom == !!this.resumingFrom && !L.options.layoutScroll && L.target && this.animationProgress !== 1 ? this.createRelativeTarget(L, this.target, L.target) : this.relativeParent = this.relativeTarget = void 0), statsBuffer.value && metrics.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(s, d, w) {
			this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, d, w), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let s = this.getLead(), d = !!this.resumingFrom || this !== s, w = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (w = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (w = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (w = !1), w) return;
			let { layout: k, layoutId: F } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(k || F)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let L = this.treeScale.x, V = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, d), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = createBox());
			let { target: U } = s;
			if (!U) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, U, this.latestValues), (this.treeScale.x !== L || this.treeScale.y !== V || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", U)), statsBuffer.value && metrics.calculatedProjections++;
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(s = !0) {
			if (this.options.visualElement?.scheduleRender(), s) {
				let s = this.getStack();
				s && s.scheduleRender();
			}
			this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = createDelta(), this.projectionDelta = createDelta(), this.projectionDeltaWithTransform = createDelta();
		}
		setAnimationOrigin(s, d = !1) {
			let w = this.snapshot, k = w ? w.latestValues : {}, F = { ...this.latestValues }, L = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
			let V = createBox(), U = (w ? w.source : void 0) !== (this.layout ? this.layout.source : void 0), K = this.getStack(), q = !K || K.members.length <= 1, J = !!(U && !q && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let X;
			this.mixTargetDelta = (d) => {
				let w = d / 1e3;
				mixAxisDelta(L.x, s.x, w), mixAxisDelta(L.y, s.y, w), this.setTargetDelta(L), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(V, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, V, w), X && boxEquals(this.relativeTarget, X) && (this.isProjectionDirty = !1), X ||= createBox(), copyBoxInto(X, this.relativeTarget)), U && (this.animationValues = F, mixValues(F, k, this.latestValues, w, J, q)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(s) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (cancelFrame(this.pendingAnimation), void 0), this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = !0, activeAnimations.layout++, this.motionValue ||= motionValue(0), this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...s,
					velocity: 0,
					isSync: !0,
					onUpdate: (d) => {
						this.mixTargetDelta(d), s.onUpdate && s.onUpdate(d);
					},
					onStop: () => {
						activeAnimations.layout--;
					},
					onComplete: () => {
						activeAnimations.layout--, s.onComplete && s.onComplete(), this.completeAnimation();
					}
				}), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let s = this.getStack();
			s && s.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(animationTarget), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let s = this.getLead(), { targetWithTransforms: d, target: w, layout: k, latestValues: F } = s;
			if (!(!d || !w || !k)) {
				if (this !== s && this.layout && k && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, k.layoutBox)) {
					w = this.target || createBox();
					let d = calcLength(this.layout.layoutBox.x);
					w.x.min = s.target.x.min, w.x.max = w.x.min + d;
					let k = calcLength(this.layout.layoutBox.y);
					w.y.min = s.target.y.min, w.y.max = w.y.min + k;
				}
				copyBoxInto(d, w), transformBox(d, F), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, d, F);
			}
		}
		registerSharedNode(s, d) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new NodeStack()), this.sharedNodes.get(s).add(d);
			let w = d.options.initialPromotionConfig;
			d.promote({
				transition: w ? w.transition : void 0,
				preserveFollowOpacity: w && w.shouldPreserveFollowOpacity ? w.shouldPreserveFollowOpacity(d) : void 0
			});
		}
		isLead() {
			let s = this.getStack();
			return s ? s.lead === this : !0;
		}
		getLead() {
			let { layoutId: s } = this.options;
			return s && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: s } = this.options;
			return s ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: s } = this.options;
			if (s) return this.root.sharedNodes.get(s);
		}
		promote({ needsReset: s, transition: d, preserveFollowOpacity: w } = {}) {
			let k = this.getStack();
			k && k.promote(this, w), s && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({ transition: d });
		}
		relegate() {
			let s = this.getStack();
			return s ? s.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: s } = this.options;
			if (!s) return;
			let d = !1, { latestValues: w } = s;
			if ((w.z || w.rotate || w.rotateX || w.rotateY || w.rotateZ || w.skewX || w.skewY) && (d = !0), !d) return;
			let k = {};
			w.z && resetDistortingTransform("z", s, k, this.animationValues);
			for (let d = 0; d < transformAxes.length; d++) resetDistortingTransform(`rotate${transformAxes[d]}`, s, k, this.animationValues), resetDistortingTransform(`skew${transformAxes[d]}`, s, k, this.animationValues);
			for (let d in s.render(), k) s.setStaticValue(d, k[d]), this.animationValues && (this.animationValues[d] = k[d]);
			s.scheduleRender();
		}
		applyProjectionStyles(s, d) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				s.visibility = "hidden";
				return;
			}
			let w = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = resolveMotionValue(d?.pointerEvents) || "", s.transform = w ? w(this.latestValues, "") : "none";
				return;
			}
			let k = this.getLead();
			if (!this.projectionDelta || !this.layout || !k.target) {
				this.options.layoutId && (s.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, s.pointerEvents = resolveMotionValue(d?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (s.transform = w ? w({}, "") : "none", this.hasProjected = !1);
				return;
			}
			s.visibility = "";
			let F = k.animationValues || k.latestValues;
			this.applyTransformsToTarget();
			let L = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, F);
			w && (L = w(F, L)), s.transform = L;
			let { x: V, y: U } = this.projectionDelta;
			for (let d in s.transformOrigin = `${V.origin * 100}% ${U.origin * 100}% 0`, k.animationValues ? s.opacity = k === this ? F.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : F.opacityExit : s.opacity = k === this ? F.opacity === void 0 ? "" : F.opacity : F.opacityExit === void 0 ? 0 : F.opacityExit, scaleCorrectors) {
				if (F[d] === void 0) continue;
				let { correct: w, applyTo: V, isCSSVariable: U } = scaleCorrectors[d], K = L === "none" ? F[d] : w(F[d], k);
				if (V) {
					let d = V.length;
					for (let w = 0; w < d; w++) s[V[w]] = K;
				} else U ? this.options.visualElement.renderState.vars[d] = K : s[d] = K;
			}
			this.options.layoutId && (s.pointerEvents = k === this ? resolveMotionValue(d?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((s) => s.currentAnimation?.stop()), this.root.nodes.forEach(clearMeasurements), this.root.sharedNodes.clear();
		}
	};
}
function updateLayout(s) {
	s.updateLayout();
}
function notifyLayoutUpdate(s) {
	let d = s.resumeFrom?.snapshot || s.snapshot;
	if (s.isLead() && s.layout && d && s.hasListeners("didUpdate")) {
		let { layoutBox: w, measuredBox: k } = s.layout, { animationType: F } = s.options, L = d.source !== s.layout.source;
		F === "size" ? eachAxis((s) => {
			let k = L ? d.measuredBox[s] : d.layoutBox[s], F = calcLength(k);
			k.min = w[s].min, k.max = k.min + F;
		}) : shouldAnimatePositionOnly(F, d.layoutBox, w) && eachAxis((k) => {
			let F = L ? d.measuredBox[k] : d.layoutBox[k], V = calcLength(w[k]);
			F.max = F.min + V, s.relativeTarget && !s.currentAnimation && (s.isProjectionDirty = !0, s.relativeTarget[k].max = s.relativeTarget[k].min + V);
		});
		let V = createDelta();
		calcBoxDelta(V, w, d.layoutBox);
		let U = createDelta();
		L ? calcBoxDelta(U, s.applyTransform(k, !0), d.measuredBox) : calcBoxDelta(U, w, d.layoutBox);
		let K = !isDeltaZero(V), q = !1;
		if (!s.resumeFrom) {
			let k = s.getClosestProjectingParent();
			if (k && !k.resumeFrom) {
				let { snapshot: F, layout: L } = k;
				if (F && L) {
					let V = createBox();
					calcRelativePosition(V, d.layoutBox, F.layoutBox);
					let U = createBox();
					calcRelativePosition(U, w, L.layoutBox), boxEqualsRounded(V, U) || (q = !0), k.options.layoutRoot && (s.relativeTarget = U, s.relativeTargetOrigin = V, s.relativeParent = k);
				}
			}
		}
		s.notifyListeners("didUpdate", {
			layout: w,
			snapshot: d,
			delta: U,
			layoutDelta: V,
			hasLayoutChanged: K,
			hasRelativeLayoutChanged: q
		});
	} else if (s.isLead()) {
		let { onExitComplete: d } = s.options;
		d && d();
	}
	s.options.transition = void 0;
}
function propagateDirtyNodes(s) {
	statsBuffer.value && metrics.nodes++, s.parent && (s.isProjecting() || (s.isProjectionDirty = s.parent.isProjectionDirty), s.isSharedProjectionDirty ||= !!(s.isProjectionDirty || s.parent.isProjectionDirty || s.parent.isSharedProjectionDirty), s.isTransformDirty ||= s.parent.isTransformDirty);
}
function cleanDirtyNodes(s) {
	s.isProjectionDirty = s.isSharedProjectionDirty = s.isTransformDirty = !1;
}
function clearSnapshot(s) {
	s.clearSnapshot();
}
function clearMeasurements(s) {
	s.clearMeasurements();
}
function clearIsLayoutDirty(s) {
	s.isLayoutDirty = !1;
}
function resetTransformStyle(s) {
	let { visualElement: d } = s.options;
	d && d.getProps().onBeforeLayoutMeasure && d.notify("BeforeLayoutMeasure"), s.resetTransform();
}
function finishAnimation(s) {
	s.finishAnimation(), s.targetDelta = s.relativeTarget = s.target = void 0, s.isProjectionDirty = !0;
}
function resolveTargetDelta(s) {
	s.resolveTargetDelta();
}
function calcProjection(s) {
	s.calcProjection();
}
function resetSkewAndRotation(s) {
	s.resetSkewAndRotation();
}
function removeLeadSnapshots(s) {
	s.removeLeadSnapshot();
}
function mixAxisDelta(s, d, w) {
	s.translate = mixNumber(d.translate, 0, w), s.scale = mixNumber(d.scale, 1, w), s.origin = d.origin, s.originPoint = d.originPoint;
}
function mixAxis(s, d, w, k) {
	s.min = mixNumber(d.min, w.min, k), s.max = mixNumber(d.max, w.max, k);
}
function mixBox(s, d, w, k) {
	mixAxis(s.x, d.x, w.x, k), mixAxis(s.y, d.y, w.y, k);
}
function hasOpacityCrossfade(s) {
	return s.animationValues && s.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
}, userAgentContains = (s) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(s), roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
function roundAxis(s) {
	s.min = roundPoint(s.min), s.max = roundPoint(s.max);
}
function roundBox(s) {
	roundAxis(s.x), roundAxis(s.y);
}
function shouldAnimatePositionOnly(s, d, w) {
	return s === "position" || s === "preserve-aspect" && !isNear(aspectRatio(d), aspectRatio(w), .2);
}
function checkNodeWasScrollRoot(s) {
	return s !== s.root && s.scroll?.wasRoot;
}
var DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (s, d) => addDomEvent(s, "resize", d),
	measureScroll: () => ({
		x: document.documentElement.scrollLeft || document.body.scrollLeft,
		y: document.documentElement.scrollTop || document.body.scrollTop
	}),
	checkIsScrollRoot: () => !0
}), rootProjectionNode = { current: void 0 }, HTMLProjectionNode = createProjectionNode({
	measureScroll: (s) => ({
		x: s.scrollLeft,
		y: s.scrollTop
	}),
	defaultParent: () => {
		if (!rootProjectionNode.current) {
			let s = new DocumentProjectionNode({});
			s.mount(window), s.setOptions({ layoutScroll: !0 }), rootProjectionNode.current = s;
		}
		return rootProjectionNode.current;
	},
	resetTransform: (s, d) => {
		s.style.transform = d === void 0 ? "none" : d;
	},
	checkIsScrollRoot: (s) => window.getComputedStyle(s).position === "fixed"
}), drag = {
	pan: { Feature: PanGesture },
	drag: {
		Feature: DragGesture,
		ProjectionNode: HTMLProjectionNode,
		MeasureLayout
	}
};
function handleHoverEvent(s, d, w) {
	let { props: k } = s;
	s.animationState && k.whileHover && s.animationState.setActive("whileHover", w === "Start");
	let F = k["onHover" + w];
	F && frame.postRender(() => F(d, extractEventInfo(d)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: s } = this.node;
		s && (this.unmount = hover(s, (s, d) => (handleHoverEvent(this.node, d, "Start"), (s) => handleHoverEvent(this.node, s, "End"))));
	}
	unmount() {}
}, FocusGesture = class extends Feature {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let s = !1;
		try {
			s = this.node.current.matches(":focus-visible");
		} catch {
			s = !0;
		}
		!s || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		!this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
function handlePressEvent(s, d, w) {
	let { props: k } = s;
	if (s.current instanceof HTMLButtonElement && s.current.disabled) return;
	s.animationState && k.whileTap && s.animationState.setActive("whileTap", w === "Start");
	let F = k["onTap" + (w === "End" ? "" : w)];
	F && frame.postRender(() => F(d, extractEventInfo(d)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: s } = this.node;
		s && (this.unmount = press(s, (s, d) => (handlePressEvent(this.node, d, "Start"), (s, { success: d }) => handlePressEvent(this.node, s, d ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (s) => {
	let d = observerCallbacks.get(s.target);
	d && d(s);
}, fireAllObserverCallbacks = (s) => {
	s.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: s, ...d }) {
	let w = s || document;
	observers.has(w) || observers.set(w, {});
	let k = observers.get(w), F = JSON.stringify(d);
	return k[F] || (k[F] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: s,
		...d
	})), k[F];
}
function observeIntersection(s, d, w) {
	let k = initIntersectionObserver(d);
	return observerCallbacks.set(s, w), k.observe(s), () => {
		observerCallbacks.delete(s), k.unobserve(s);
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
		let { viewport: s = {} } = this.node.getProps(), { root: d, margin: w, amount: k = "some", once: F } = s, L = {
			root: d ? d.current : void 0,
			rootMargin: w,
			threshold: typeof k == "number" ? k : thresholdNames[k]
		};
		return observeIntersection(this.node.current, L, (s) => {
			let { isIntersecting: d } = s;
			if (this.isInView === d || (this.isInView = d, F && !d && this.hasEnteredView)) return;
			d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
			let { onViewportEnter: w, onViewportLeave: k } = this.node.getProps(), L = d ? w : k;
			L && L(s);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: s, prevProps: d } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(s, d)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: s = {} }, { viewport: d = {} } = {}) {
	return (w) => s[w] !== d[w];
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
}, createDomVisualElement), PreviewElementRenderer = ({ element: s, offsetY: d = 0, dataContext: w }) => {
	let k = s.content;
	if (w) {
		if (s.type === "text") k = k.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let k = w[d.trim()];
			return k == null ? s : String(k);
		});
		else if (s.type === "image") if (s.dataBinding) {
			let d = w[s.dataBinding];
			d != null && (k = String(d));
		} else k = k.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let k = w[d.trim()];
			return k == null ? s : String(k);
		});
	}
	return /* @__PURE__ */ jsxs(p$1, {
		style: {
			position: "absolute",
			left: 0,
			top: 0,
			width: `${s.width}px`,
			height: `${s.height}px`,
			transform: `translate(${s.x}px, ${s.y + d}px) rotate(${s.rotation || 0}deg)`,
			padding: s.type === "image" || s.type === "text" ? 0 : "8px",
			overflow: "hidden",
			...s.style
		},
		children: [
			s.type === "text" && /* @__PURE__ */ jsx(p$2, { children: k }),
			s.type === "image" && (k ? /* @__PURE__ */ jsx("img", {
				src: k,
				alt: "Element",
				style: {
					width: "100%",
					height: "100%",
					objectFit: s.style?.objectFit || "cover",
					display: "block"
				}
			}) : /* @__PURE__ */ jsx(p$1, {
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
			s.type === "box" && /* @__PURE__ */ jsx(p$1, { style: {
				width: "100%",
				height: "100%"
			} })
		]
	});
}, ListItem = ({ children: s, index: d, height: w }) => /* @__PURE__ */ jsx(motion.div, {
	initial: {
		opacity: 0,
		y: 20,
		scale: .95
	},
	animate: {
		opacity: 1,
		y: 0,
		scale: 1
	},
	transition: {
		duration: .4,
		delay: d * .05,
		ease: "easeOut"
	},
	whileHover: {
		scale: 1.02,
		transition: { duration: .2 }
	},
	style: {
		position: "relative",
		height: w,
		width: "100%",
		marginBottom: "20px",
		transformOrigin: "center center"
	},
	children: s
});
const Preview = () => {
	let { state: s } = useEditor(), w = React.useMemo(() => s.canvasHeight ? s.canvasHeight : s.elements.length === 0 ? 0 : Math.max(...s.elements.map((s) => s.y + s.height)), [s.elements, s.canvasHeight]);
	return /* @__PURE__ */ jsx(p$1, {
		style: {
			width: "100%",
			height: "100%",
			position: "relative",
			overflow: "hidden",
			backgroundColor: "var(--color-panel-solid)"
		},
		children: /* @__PURE__ */ jsx(c, {
			type: "auto",
			scrollbars: "vertical",
			style: {
				height: "100%",
				width: "100%"
			},
			children: /* @__PURE__ */ jsx(p$1, {
				style: {
					position: "relative",
					minHeight: "100%",
					width: "100%"
				},
				children: (() => {
					if (s.elements.length === 0) return /* @__PURE__ */ jsx(p, {
						align: "center",
						justify: "center",
						style: { height: "100%" },
						children: /* @__PURE__ */ jsx(p$2, {
							color: "gray",
							children: "Preview vazio"
						})
					});
					if (s.isList) {
						let d = s.mockData.length > 0 ? s.mockData : Array.from({ length: 10 }).map((s, d) => ({ id: d }));
						if (s.listSettings.sortProp) {
							let w = s.listSettings.sortProp, k = s.listSettings.sortOrder === "asc" ? 1 : -1;
							d = [...d].sort((s, d) => {
								let F = s[w], L = d[w];
								return F < L ? -1 * k : F > L ? 1 * k : 0;
							});
						}
						return s.listSettings.newestPosition === "top" && (d = [...d].reverse()), /* @__PURE__ */ jsx(p, {
							direction: "column",
							justify: s.listSettings.newestPosition === "top" ? "start" : "end",
							p: "4",
							style: {
								width: "100%",
								minHeight: "100%"
							},
							children: d.map((d, k) => /* @__PURE__ */ jsx(ListItem, {
								index: k,
								height: w,
								children: s.elements.map((s) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
									element: s,
									offsetY: 0,
									dataContext: d
								}, `${s.id}-${k}`))
							}, k))
						});
					}
					return s.elements.map((d) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
						element: d,
						dataContext: s.singleMockData
					}, d.id));
				})()
			})
		})
	});
}, EditorSettings = () => {
	let { state: s, updateListSettings: d, setCanvasHeight: w } = useEditor(), [k, F] = useState(""), [L, V] = useState("150");
	return useEffect(() => {
		F(s.listSettings.sortProp || "__none__"), V(String(s.canvasHeight || 150));
	}, [s.listSettings.sortProp, s.canvasHeight]), useEffect(() => {
		let s = parseInt(L, 10);
		!isNaN(s) && s > 0 && w(s);
	}, [L, w]), /* @__PURE__ */ jsxs(s$2, { children: [/* @__PURE__ */ jsx(n$2, { children: /* @__PURE__ */ jsxs(o, {
		variant: "soft",
		color: "gray",
		style: {
			width: "100%",
			justifyContent: "center",
			cursor: "pointer"
		},
		children: [/* @__PURE__ */ jsx(GearIcon, {}), " Configurações"]
	}) }), /* @__PURE__ */ jsxs(p$6, {
		style: { maxWidth: 600 },
		children: [
			/* @__PURE__ */ jsx(g$2, { children: "Configurações do Editor" }),
			/* @__PURE__ */ jsx(m, {
				size: "2",
				mb: "4",
				children: "Configure o comportamento da lista."
			}),
			/* @__PURE__ */ jsx(p$1, {
				pt: "3",
				children: /* @__PURE__ */ jsxs(p, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(p$2, {
							size: "2",
							weight: "bold",
							children: "Ordenação"
						}),
						/* @__PURE__ */ jsxs(p, {
							gap: "3",
							align: "center",
							children: [/* @__PURE__ */ jsxs(p$1, {
								flexGrow: "1",
								children: [/* @__PURE__ */ jsx(p$2, {
									size: "1",
									mb: "1",
									as: "div",
									children: "Propriedade para Ordenar (ex: data, id)"
								}), /* @__PURE__ */ jsxs(C, {
									value: k,
									onValueChange: (s) => F(s),
									children: [/* @__PURE__ */ jsx(u$2, {
										style: { width: "100%" },
										placeholder: "Selecione..."
									}), /* @__PURE__ */ jsxs(g, { children: [/* @__PURE__ */ jsx(v$1, {
										value: "__none__",
										children: "(Nenhum)"
									}), s.availableProps.map((s) => /* @__PURE__ */ jsx(v$1, {
										value: s.dataName,
										children: s.name
									}, s.dataName))] })]
								})]
							}), /* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
								size: "1",
								mb: "1",
								as: "div",
								children: "Direção"
							}), /* @__PURE__ */ jsxs(C, {
								value: s.listSettings.sortOrder,
								onValueChange: (s) => d({ sortOrder: s }),
								children: [/* @__PURE__ */ jsx(u$2, {}), /* @__PURE__ */ jsxs(g, { children: [/* @__PURE__ */ jsx(v$1, {
									value: "asc",
									children: "Crescente (A-Z)"
								}), /* @__PURE__ */ jsx(v$1, {
									value: "desc",
									children: "Decrescente (Z-A)"
								})] })]
							})] })]
						}),
						/* @__PURE__ */ jsxs(p, {
							gap: "3",
							align: "center",
							children: [/* @__PURE__ */ jsxs(p$1, {
								flexGrow: "1",
								children: [/* @__PURE__ */ jsx(p$2, {
									size: "1",
									mb: "1",
									as: "div",
									children: "Posição do Recente"
								}), /* @__PURE__ */ jsxs(C, {
									value: s.listSettings.newestPosition || "bottom",
									onValueChange: (s) => d({ newestPosition: s }),
									children: [/* @__PURE__ */ jsx(u$2, { style: { width: "100%" } }), /* @__PURE__ */ jsxs(g, { children: [/* @__PURE__ */ jsx(v$1, {
										value: "top",
										children: "Topo (Início)"
									}), /* @__PURE__ */ jsx(v$1, {
										value: "bottom",
										children: "Base (Final)"
									})] })]
								})]
							}), /* @__PURE__ */ jsxs(p$1, {
								flexGrow: "1",
								children: [/* @__PURE__ */ jsx(p$2, {
									size: "1",
									mb: "1",
									as: "div",
									children: "Comportamento de Rolagem"
								}), /* @__PURE__ */ jsxs(C, {
									value: s.listSettings.scrollDirection || "down",
									onValueChange: (s) => d({ scrollDirection: s }),
									children: [/* @__PURE__ */ jsx(u$2, { style: { width: "100%" } }), /* @__PURE__ */ jsxs(g, { children: [/* @__PURE__ */ jsx(v$1, {
										value: "down",
										children: "Descer (Padrão)"
									}), /* @__PURE__ */ jsx(v$1, {
										value: "up",
										children: "Subir (Chat)"
									})] })]
								})]
							})]
						}),
						/* @__PURE__ */ jsxs(p$1, { children: [
							/* @__PURE__ */ jsx(p$2, {
								size: "1",
								mb: "1",
								as: "div",
								children: "Altura do Item da Lista (px)"
							}),
							/* @__PURE__ */ jsx(u, {
								type: "number",
								min: "10",
								value: L,
								onChange: (s) => V(s.target.value)
							}),
							/* @__PURE__ */ jsx(p$2, {
								size: "1",
								color: "gray",
								children: "Define a altura visual de cada item na lista para referência."
							})
						] }),
						/* @__PURE__ */ jsx(p$2, {
							size: "1",
							color: "gray",
							children: "Essa propriedade será usada para ordenar os itens no modo lista."
						})
					]
				})
			}),
			/* @__PURE__ */ jsxs(p, {
				gap: "3",
				mt: "4",
				justify: "end",
				children: [/* @__PURE__ */ jsx(D$1, { children: /* @__PURE__ */ jsx(o, {
					variant: "soft",
					color: "gray",
					children: "Cancelar"
				}) }), /* @__PURE__ */ jsx(D$1, { children: /* @__PURE__ */ jsx(o, {
					onClick: () => {
						d({ sortProp: k === "__none__" ? "" : k });
					},
					children: "Salvar Alterações"
				}) })]
			})
		]
	})] });
};
var EditorContent = ({ layout: s, initialState: w, onSave: k, theme: F = "light" }) => {
	let [L, V] = useState(!0), [U, K] = useState(!0), { addElement: q, loadState: J, state: X } = useEditor();
	React.useEffect(() => {
		if (w) try {
			let s = typeof w == "string" ? JSON.parse(w) : w;
			Array.isArray(s) ? J({ elements: s }) : s.elements && J(s);
		} catch (s) {
			console.error("Failed to load initial state", s);
		}
	}, [w, J]);
	let $ = (s) => {
		console.log(`Adding element of type: ${s}`), q({
			type: s,
			content: `New ${s}`
		});
	};
	return /* @__PURE__ */ jsx(R, {
		appearance: F,
		accentColor: "blue",
		grayColor: "slate",
		radius: "medium",
		scaling: "100%",
		children: /* @__PURE__ */ jsxs(p, {
			direction: "row",
			style: {
				height: "100vh",
				width: "100%",
				overflow: "hidden",
				backgroundColor: "var(--color-background)"
			},
			children: [U && /* @__PURE__ */ jsxs(p, {
				direction: "column",
				width: "280px",
				style: {
					borderRight: "1px solid var(--gray-5)",
					backgroundColor: "var(--gray-2)",
					flexShrink: 0,
					height: "100%"
				},
				children: [/* @__PURE__ */ jsx(p$1, {
					p: "4",
					style: {
						borderBottom: "1px solid var(--gray-5)",
						backgroundColor: "var(--gray-2)"
					},
					children: /* @__PURE__ */ jsx(p, {
						direction: "column",
						gap: "3",
						children: /* @__PURE__ */ jsxs(p$1, { children: [
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
									/* @__PURE__ */ jsx(v$2, {
										onSelect: () => $("text"),
										children: "Texto"
									}),
									/* @__PURE__ */ jsx(v$2, {
										onSelect: () => $("image"),
										children: "Imagem"
									}),
									/* @__PURE__ */ jsx(v$2, {
										onSelect: () => $("box"),
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
									if (k) {
										let s = {
											elements: X.elements,
											isList: X.isList,
											mockData: X.mockData,
											singleMockData: X.singleMockData,
											listSettings: X.listSettings,
											canvasHeight: X.canvasHeight
										};
										k(JSON.stringify(s, null, 2));
									}
								},
								children: [/* @__PURE__ */ jsx(Share1Icon, {}), " Salvar Alterações"]
							}),
							/* @__PURE__ */ jsx(p$1, {
								mt: "2",
								children: /* @__PURE__ */ jsx(EditorSettings, {})
							})
						] })
					})
				}), /* @__PURE__ */ jsx(c, {
					type: "auto",
					scrollbars: "vertical",
					style: { flex: 1 },
					children: /* @__PURE__ */ jsx(p, {
						direction: "column",
						gap: "4",
						p: "4",
						children: /* @__PURE__ */ jsxs(p$1, { children: [
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
								children: "Clique para copiar ou arraste (futuramente)"
							}),
							/* @__PURE__ */ jsxs(p, {
								direction: "column",
								gap: "2",
								children: [s.props.map((s, d) => /* @__PURE__ */ jsxs(e, {
									color: "blue",
									variant: "soft",
									size: "2",
									style: {
										padding: "8px",
										justifyContent: "flex-start"
									},
									title: s.dataName,
									children: [s.name, /* @__PURE__ */ jsx(p$2, {
										color: "gray",
										style: {
											marginLeft: "auto",
											fontSize: "10px"
										},
										children: `{{${s.dataName}}}`
									})]
								}, d)), s.props.length === 0 && /* @__PURE__ */ jsx(p$2, {
									size: "1",
									color: "gray",
									style: { fontStyle: "italic" },
									children: "Nenhuma variável configurada."
								})]
							})
						] })
					})
				})]
			}), /* @__PURE__ */ jsxs(p$1, {
				style: {
					flex: 1,
					position: "relative",
					height: "100%"
				},
				children: [
					/* @__PURE__ */ jsx(p$1, {
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
							onClick: () => K(!U),
							title: U ? "Ocultar Barra Lateral" : "Mostrar Barra Lateral",
							children: jsx(U ? DoubleArrowLeftIcon : DoubleArrowRightIcon, {})
						})
					}),
					/* @__PURE__ */ jsx(p, {
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
							color: L ? "blue" : "gray",
							onClick: () => V(!L),
							title: L ? "Ocultar Preview" : "Mostrar Preview",
							children: jsx(L ? EyeOpenIcon : EyeNoneIcon, {})
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
								children: /* @__PURE__ */ jsx(p$1, {
									style: {
										height: "100%",
										width: "100%",
										backgroundColor: "var(--color-background)"
									},
									children: /* @__PURE__ */ jsx(Canvas, {})
								})
							}),
							L && /* @__PURE__ */ jsx(Ot, { style: {
								width: "4px",
								backgroundColor: "var(--gray-6)",
								cursor: "col-resize",
								transition: "background-color 0.2s"
							} }),
							L && /* @__PURE__ */ jsx(kt, {
								defaultSize: 50,
								minSize: 20,
								children: /* @__PURE__ */ jsx(p$1, {
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
		})
	});
};
const GenericEditor = (s) => /* @__PURE__ */ jsx(EditorProvider, {
	isList: s.layout.isList,
	availableProps: s.layout.props,
	theme: s.theme,
	children: /* @__PURE__ */ jsx(EditorContent, { ...s })
}), generateHTML = (s, d, w = {}) => Function("elements", "data", "options", getRendererCode() + "\nreturn renderTemplate(elements, data, options);")(s, d, w), getRendererCode = () => "\n/**\n * Render Template\n * @param {Array} elements - The JSON configuration of elements\n * @param {Object|Array} data - The data object to inject (Object for single, Array for list)\n * @param {Object} options - { isList: boolean, listSettings: { sortProp: string, sortOrder: 'asc'|'desc', newestPosition: 'top'|'bottom', scrollDirection: 'up'|'down' }, canvasHeight: number }\n * @returns {string} - The generated HTML string\n */\nfunction renderTemplate(elements, data, options = {}) {\n    const { isList, listSettings, canvasHeight } = options;\n\n    const camelToKebab = (string) => {\n        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();\n    };\n\n    const styleObjectToString = (style) => {\n        if (!style) return '';\n        const pxProps = ['width', 'height', 'top', 'left', 'right', 'bottom', 'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth'];\n        \n        return Object.entries(style)\n            .map(([key, value]) => {\n                if (value === undefined || value === null) return '';\n                const cssKey = camelToKebab(key);\n                const cssValue = (typeof value === 'number' && pxProps.includes(key)) ? value + 'px' : value;\n                return `${cssKey}: ${cssValue}`;\n            })\n            .filter(Boolean)\n            .join('; ');\n    };\n\n    const renderItem = (itemData, index = 0, offsetY = 0) => {\n        return elements.map(element => {\n            let content = element.content;\n            let imgSrc = '';\n\n            if (element.type === 'text') {\n                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                    const val = itemData[key.trim()];\n                    return val !== undefined && val !== null ? String(val) : match;\n                });\n            } else if (element.type === 'image') {\n                 if (element.dataBinding) {\n                    const val = itemData[element.dataBinding];\n                    if (val !== undefined && val !== null) {\n                        imgSrc = String(val);\n                    } else {\n                        imgSrc = content;\n                    }\n                 } else {\n                     imgSrc = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                        const val = itemData[key.trim()];\n                        return val !== undefined && val !== null ? String(val) : match;\n                    });\n                 }\n            }\n\n            const baseStyle = {\n                position: 'absolute',\n                left: element.x,\n                top: element.y + offsetY,\n                width: element.width,\n                height: element.height,\n                transform: element.rotation ? `rotate(${element.rotation}deg)` : undefined,\n                overflow: 'hidden',\n                ...element.style\n            };\n            \n            // Fix: remove padding if it's not explicitly set, or handle it for text\n            if (element.type === 'text' && !baseStyle.padding) {\n                // baseStyle.padding = '8px'; // Removed default padding to respect resize box\n            }\n            \n            const styleString = styleObjectToString(baseStyle);\n\n            if (element.type === 'text') {\n                return `<div style=\"${styleString}\">${content}</div>`;\n            } else if (element.type === 'image') {\n                const imgStyle = styleObjectToString({\n                    width: '100%',\n                    height: '100%',\n                    objectFit: element.style?.objectFit || 'cover',\n                    display: 'block'\n                });\n                return `<div style=\"${styleString}\"><img src=\"${imgSrc}\" alt=\"Element\" style=\"${imgStyle}\" /></div>`;\n            } else if (element.type === 'box') {\n                 return `<div style=\"${styleString}\"></div>`;\n            }\n            return '';\n        }).join('\\n');\n    };\n\n    if (isList && Array.isArray(data)) {\n        // Calculate item height\n        const itemHeight = canvasHeight || Math.max(...elements.map(el => el.y + el.height));\n\n        // Sort data\n        let listData = [...data];\n        if (listSettings && listSettings.sortProp) {\n            const prop = listSettings.sortProp;\n            const order = listSettings.sortOrder === 'asc' ? 1 : -1;\n            listData.sort((a, b) => {\n                const valA = a[prop];\n                const valB = b[prop];\n                if (valA < valB) return -1 * order;\n                if (valA > valB) return 1 * order;\n                return 0;\n            });\n        }\n        \n        // Handle newest position\n        if (listSettings && listSettings.newestPosition === 'top') {\n             listData.reverse();\n        }\n\n        // Generate HTML for all items\n        const itemsHtml = listData.map((item, index) => {\n             const itemHtml = renderItem(item, index, 0); \n             const itemContainerStyle = styleObjectToString({\n                 position: 'relative',\n                 height: itemHeight,\n                 width: '100%',\n                 marginBottom: 0\n             });\n             \n             return `<div class=\"list-item\" style=\"${itemContainerStyle}\">${itemHtml}</div>`;\n        }).join('\\n');\n\n        // Animation Styles based on settings\n        const scrollDirection = (listSettings && listSettings.scrollDirection) || 'down';\n        \n        const justify = (listSettings && listSettings.newestPosition === 'top') ? 'flex-start' : 'flex-end';\n\n        const animationCss = `\n            @keyframes slideIn {\n                from { opacity: 0; transform: translateY(20px); }\n                to { opacity: 1; transform: translateY(0); }\n            }\n            .list-wrapper {\n                display: flex;\n                flex-direction: column;\n                justify-content: ${justify};\n                height: 100%;\n                width: 100%;\n                overflow-y: auto;\n                overflow-x: hidden;\n                box-sizing: border-box;\n                padding: 10px;\n            }\n            .list-item {\n                flex-shrink: 0;\n                animation: slideIn 0.3s ease-out;\n                margin-bottom: 10px;\n                width: 100%;\n                position: relative;\n            }\n        `;\n\n        return `\n            <style>${animationCss}</style>\n            <div class=\"list-wrapper\">\n                ${itemsHtml}\n            </div>\n        `;\n    }\n\n    // Single Item\n    const contentHtml = renderItem(data);\n    return `<div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\">${contentHtml}</div>`;\n}\n";
export { GenericEditor as EditorContent, generateHTML };
