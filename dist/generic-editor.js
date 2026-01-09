import * as React$1 from "react";
import React, { Component, Fragment, PureComponent, createContext, createElement, forwardRef, memo, useCallback, useContext, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM, { flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __esmMin = (n, s) => () => (n && (s = n(n = 0)), s), __commonJSMin = (n, s) => () => (s || n((s = { exports: {} }).exports, s), s.exports), __export = (n) => {
	let s = {};
	for (var d in n) __defProp(s, d, {
		get: n[d],
		enumerable: !0
	});
	return s;
}, __copyProps = (n, s, d, C) => {
	if (s && typeof s == "object" || typeof s == "function") for (var w = __getOwnPropNames(s), k = 0, F = w.length, L; k < F; k++) L = w[k], !__hasOwnProp.call(n, L) && L !== d && __defProp(n, L, {
		get: ((n) => s[n]).bind(null, L),
		enumerable: !(C = __getOwnPropDesc(s, L)) || C.enumerable
	});
	return n;
}, __toESM = (n, s, d) => (d = n == null ? {} : __create(__getProtoOf(n)), __copyProps(s || !n || !n.__esModule ? __defProp(d, "default", {
	value: n,
	enumerable: !0
}) : d, n)), __toCommonJS = (n) => __copyProps(__defProp({}, "__esModule", { value: !0 }), n);
function setRef(n, s) {
	if (typeof n == "function") return n(s);
	n != null && (n.current = s);
}
function composeRefs(...n) {
	return (s) => {
		let d = !1, C = n.map((n) => {
			let C = setRef(n, s);
			return !d && typeof C == "function" && (d = !0), C;
		});
		if (d) return () => {
			for (let s = 0; s < C.length; s++) {
				let d = C[s];
				typeof d == "function" ? d() : setRef(n[s], null);
			}
		};
	};
}
function useComposedRefs(...s) {
	return React$1.useCallback(composeRefs(...s), s);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(s) {
	let d = /* @__PURE__ */ createSlotClone(s), C = React$1.forwardRef((s, C) => {
		let { children: w, ...k } = s, F = React$1.Children.toArray(w), L = F.find(isSlottable);
		if (L) {
			let s = L.props.children, w = F.map((d) => d === L ? React$1.Children.count(s) > 1 ? React$1.Children.only(null) : React$1.isValidElement(s) ? s.props.children : null : d);
			return /* @__PURE__ */ jsx(d, {
				...k,
				ref: C,
				children: React$1.isValidElement(s) ? React$1.cloneElement(s, void 0, w) : null
			});
		}
		return /* @__PURE__ */ jsx(d, {
			...k,
			ref: C,
			children: w
		});
	});
	return C.displayName = `${s}.Slot`, C;
}
var Slot$2 = /* @__PURE__ */ createSlot("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(s) {
	let d = React$1.forwardRef((s, d) => {
		let { children: C, ...w } = s;
		if (React$1.isValidElement(C)) {
			let s = getElementRef$1(C), k = mergeProps(w, C.props);
			return C.type !== React$1.Fragment && (k.ref = d ? composeRefs(d, s) : s), React$1.cloneElement(C, k);
		}
		return React$1.Children.count(C) > 1 ? React$1.Children.only(null) : null;
	});
	return d.displayName = `${s}.SlotClone`, d;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
/* @__NO_SIDE_EFFECTS__ */
function createSlottable(n) {
	let s = ({ children: n }) => /* @__PURE__ */ jsx(Fragment$1, { children: n });
	return s.displayName = `${n}.Slottable`, s.__radixId = SLOTTABLE_IDENTIFIER, s;
}
var Slottable$1 = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(s) {
	return React$1.isValidElement(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(n, s) {
	let d = { ...s };
	for (let C in s) {
		let w = n[C], k = s[C];
		/^on[A-Z]/.test(C) ? w && k ? d[C] = (...n) => {
			let s = k(...n);
			return w(...n), s;
		} : w && (d[C] = w) : C === "style" ? d[C] = {
			...w,
			...k
		} : C === "className" && (d[C] = [w, k].filter(Boolean).join(" "));
	}
	return {
		...n,
		...d
	};
}
function getElementRef$1(n) {
	let s = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, d = s && "isReactWarning" in s && s.isReactWarning;
	return d ? n.ref : (s = Object.getOwnPropertyDescriptor(n, "ref")?.get, d = s && "isReactWarning" in s && s.isReactWarning, d ? n.props.ref : n.props.ref || n.ref);
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
].reduce((s, d) => {
	let C = /* @__PURE__ */ createSlot(`Primitive.${d}`), w = React$1.forwardRef((n, s) => {
		let { asChild: w, ...k } = n, F = w ? C : d;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(F, {
			...k,
			ref: s
		});
	});
	return w.displayName = `Primitive.${d}`, {
		...s,
		[d]: w
	};
}, {});
function dispatchDiscreteCustomEvent(n, s) {
	n && ReactDOM$1.flushSync(() => n.dispatchEvent(s));
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
}), NAME$1 = "VisuallyHidden", VisuallyHidden = React$1.forwardRef((n, s) => /* @__PURE__ */ jsx(Primitive.span, {
	...n,
	ref: s,
	style: {
		...VISUALLY_HIDDEN_STYLES,
		...n.style
	}
}));
VisuallyHidden.displayName = NAME$1;
var Root$5 = VisuallyHidden;
function createContext2(s, d) {
	let C = React$1.createContext(d), w = (s) => {
		let { children: d, ...w } = s, k = React$1.useMemo(() => w, Object.values(w));
		return /* @__PURE__ */ jsx(C.Provider, {
			value: k,
			children: d
		});
	};
	w.displayName = s + "Provider";
	function k(w) {
		let k = React$1.useContext(C);
		if (k) return k;
		if (d !== void 0) return d;
		throw Error(`\`${w}\` must be used within \`${s}\``);
	}
	return [w, k];
}
function createContextScope(s, d = []) {
	let C = [];
	function w(d, w) {
		let k = React$1.createContext(w), F = C.length;
		C = [...C, w];
		let L = (d) => {
			let { scope: C, children: w, ...L } = d, V = C?.[s]?.[F] || k, U = React$1.useMemo(() => L, Object.values(L));
			return /* @__PURE__ */ jsx(V.Provider, {
				value: U,
				children: w
			});
		};
		L.displayName = d + "Provider";
		function V(C, L) {
			let V = L?.[s]?.[F] || k, U = React$1.useContext(V);
			if (U) return U;
			if (w !== void 0) return w;
			throw Error(`\`${C}\` must be used within \`${d}\``);
		}
		return [L, V];
	}
	let k = () => {
		let d = C.map((s) => React$1.createContext(s));
		return function(C) {
			let w = C?.[s] || d;
			return React$1.useMemo(() => ({ [`__scope${s}`]: {
				...C,
				[s]: w
			} }), [C, w]);
		};
	};
	return k.scopeName = s, [w, composeContextScopes(k, ...d)];
}
function composeContextScopes(...s) {
	let d = s[0];
	if (s.length === 1) return d;
	let C = () => {
		let C = s.map((n) => ({
			useScope: n(),
			scopeName: n.scopeName
		}));
		return function(s) {
			let w = C.reduce((n, { useScope: d, scopeName: C }) => {
				let w = d(s)[`__scope${C}`];
				return {
					...n,
					...w
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${d.scopeName}`]: w }), [w]);
		};
	};
	return C.scopeName = d.scopeName, C;
}
function createCollection(n) {
	let d = n + "CollectionProvider", [C, w] = createContextScope(d), [k, F] = C(d, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), L = (n) => {
		let { scope: d, children: C } = n, w = React.useRef(null), F = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(k, {
			scope: d,
			itemMap: F,
			collectionRef: w,
			children: C
		});
	};
	L.displayName = d;
	let V = n + "CollectionSlot", U = /* @__PURE__ */ createSlot(V), K = React.forwardRef((n, s) => {
		let { scope: d, children: C } = n;
		return /* @__PURE__ */ jsx(U, {
			ref: useComposedRefs(s, F(V, d).collectionRef),
			children: C
		});
	});
	K.displayName = V;
	let q = n + "CollectionItemSlot", J = "data-radix-collection-item", X = /* @__PURE__ */ createSlot(q), $ = React.forwardRef((n, d) => {
		let { scope: C, children: w, ...k } = n, L = React.useRef(null), V = useComposedRefs(d, L), U = F(q, C);
		return React.useEffect(() => (U.itemMap.set(L, {
			ref: L,
			...k
		}), () => void U.itemMap.delete(L))), /* @__PURE__ */ jsx(X, {
			[J]: "",
			ref: V,
			children: w
		});
	});
	$.displayName = q;
	function Hk(d) {
		let C = F(n + "CollectionConsumer", d);
		return React.useCallback(() => {
			let n = C.collectionRef.current;
			if (!n) return [];
			let s = Array.from(n.querySelectorAll(`[${J}]`));
			return Array.from(C.itemMap.values()).sort((n, d) => s.indexOf(n.ref.current) - s.indexOf(d.ref.current));
		}, [C.collectionRef, C.itemMap]);
	}
	return [
		{
			Provider: L,
			Slot: K,
			ItemSlot: $
		},
		Hk,
		w
	];
}
typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(n, s, { checkForDefaultPrevented: d = !0 } = {}) {
	return function(C) {
		if (n?.(C), d === !1 || !C.defaultPrevented) return s?.(C);
	};
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: s, defaultProp: d, onChange: C = () => {}, caller: w }) {
	let [k, F, L] = useUncontrolledState({
		defaultProp: d,
		onChange: C
	}), V = s !== void 0, U = V ? s : k;
	{
		let d = React$1.useRef(s !== void 0);
		React$1.useEffect(() => {
			let n = d.current;
			if (n !== V) {
				let s = n ? "controlled" : "uncontrolled", d = V ? "controlled" : "uncontrolled";
				console.warn(`${w} is changing from ${s} to ${d}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			d.current = V;
		}, [V, w]);
	}
	return [U, React$1.useCallback((n) => {
		if (V) {
			let d = isFunction(n) ? n(s) : n;
			d !== s && L.current?.(d);
		} else F(n);
	}, [
		V,
		s,
		F,
		L
	])];
}
function useUncontrolledState({ defaultProp: s, onChange: d }) {
	let [C, w] = React$1.useState(s), k = React$1.useRef(C), F = React$1.useRef(d);
	return useInsertionEffect$1(() => {
		F.current = d;
	}, [d]), React$1.useEffect(() => {
		k.current !== C && (F.current?.(C), k.current = C);
	}, [C, k]), [
		C,
		w,
		F
	];
}
function isFunction(n) {
	return typeof n == "function";
}
function useStateMachine$1(s, d) {
	return React$1.useReducer((n, s) => d[n][s] ?? n, s);
}
var Presence = (s) => {
	let { present: d, children: C } = s, w = usePresence$1(d), k = typeof C == "function" ? C({ present: w.isPresent }) : React$1.Children.only(C), F = useComposedRefs(w.ref, getElementRef(k));
	return typeof C == "function" || w.isPresent ? React$1.cloneElement(k, { ref: F }) : null;
};
Presence.displayName = "Presence";
function usePresence$1(s) {
	let [d, C] = React$1.useState(), w = React$1.useRef(null), k = React$1.useRef(s), F = React$1.useRef("none"), [L, V] = useStateMachine$1(s ? "mounted" : "unmounted", {
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
		let n = getAnimationName(w.current);
		F.current = L === "mounted" ? n : "none";
	}, [L]), useLayoutEffect2(() => {
		let n = w.current, d = k.current;
		if (d !== s) {
			let C = F.current, w = getAnimationName(n);
			s ? V("MOUNT") : w === "none" || n?.display === "none" ? V("UNMOUNT") : V(d && C !== w ? "ANIMATION_OUT" : "UNMOUNT"), k.current = s;
		}
	}, [s, V]), useLayoutEffect2(() => {
		if (d) {
			let n, s = d.ownerDocument.defaultView ?? window, C = (C) => {
				let F = getAnimationName(w.current).includes(CSS.escape(C.animationName));
				if (C.target === d && F && (V("ANIMATION_END"), !k.current)) {
					let C = d.style.animationFillMode;
					d.style.animationFillMode = "forwards", n = s.setTimeout(() => {
						d.style.animationFillMode === "forwards" && (d.style.animationFillMode = C);
					});
				}
			}, L = (n) => {
				n.target === d && (F.current = getAnimationName(w.current));
			};
			return d.addEventListener("animationstart", L), d.addEventListener("animationcancel", C), d.addEventListener("animationend", C), () => {
				s.clearTimeout(n), d.removeEventListener("animationstart", L), d.removeEventListener("animationcancel", C), d.removeEventListener("animationend", C);
			};
		} else V("ANIMATION_END");
	}, [d, V]), {
		isPresent: ["mounted", "unmountSuspended"].includes(L),
		ref: React$1.useCallback((n) => {
			w.current = n ? getComputedStyle(n) : null, C(n);
		}, [])
	};
}
function getAnimationName(n) {
	return n?.animationName || "none";
}
function getElementRef(n) {
	let s = Object.getOwnPropertyDescriptor(n.props, "ref")?.get, d = s && "isReactWarning" in s && s.isReactWarning;
	return d ? n.ref : (s = Object.getOwnPropertyDescriptor(n, "ref")?.get, d = s && "isReactWarning" in s && s.isReactWarning, d ? n.props.ref : n.props.ref || n.ref);
}
var useReactId = React$1.useId || (() => void 0), count$1 = 0;
function useId$1(s) {
	let [d, C] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		s || C((n) => n ?? String(count$1++));
	}, [s]), s || (d ? `radix-${d}` : "");
}
var DirectionContext = React$1.createContext(void 0), DirectionProvider = (n) => {
	let { dir: s, children: d } = n;
	return /* @__PURE__ */ jsx(DirectionContext.Provider, {
		value: s,
		children: d
	});
};
function useDirection(s) {
	let d = React$1.useContext(DirectionContext);
	return s || d || "ltr";
}
var Provider$1 = DirectionProvider;
function useCallbackRef(s) {
	let d = React$1.useRef(s);
	return React$1.useEffect(() => {
		d.current = s;
	}), React$1.useMemo(() => (...n) => d.current?.(...n), []);
}
function useEscapeKeydown(s, d = globalThis?.document) {
	let C = useCallbackRef(s);
	React$1.useEffect(() => {
		let n = (n) => {
			n.key === "Escape" && C(n);
		};
		return d.addEventListener("keydown", n, { capture: !0 }), () => d.removeEventListener("keydown", n, { capture: !0 });
	}, [C, d]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((s, d) => {
	let { disableOutsidePointerEvents: C = !1, onEscapeKeyDown: w, onPointerDownOutside: k, onFocusOutside: F, onInteractOutside: L, onDismiss: V, ...U } = s, K = React$1.useContext(DismissableLayerContext), [q, J] = React$1.useState(null), X = q?.ownerDocument ?? globalThis?.document, [, $] = React$1.useState({}), Hk = useComposedRefs(d, (n) => J(n)), Uk = Array.from(K.layers), [Wk] = [...K.layersWithOutsidePointerEventsDisabled].slice(-1), Gk = Uk.indexOf(Wk), Kk = q ? Uk.indexOf(q) : -1, qk = K.layersWithOutsidePointerEventsDisabled.size > 0, Jk = Kk >= Gk, Yk = usePointerDownOutside((n) => {
		let s = n.target, d = [...K.branches].some((n) => n.contains(s));
		!Jk || d || (k?.(n), L?.(n), n.defaultPrevented || V?.());
	}, X), Zk = useFocusOutside((n) => {
		let s = n.target;
		[...K.branches].some((n) => n.contains(s)) || (F?.(n), L?.(n), n.defaultPrevented || V?.());
	}, X);
	return useEscapeKeydown((n) => {
		Kk === K.layers.size - 1 && (w?.(n), !n.defaultPrevented && V && (n.preventDefault(), V()));
	}, X), React$1.useEffect(() => {
		if (q) return C && (K.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = X.body.style.pointerEvents, X.body.style.pointerEvents = "none"), K.layersWithOutsidePointerEventsDisabled.add(q)), K.layers.add(q), dispatchUpdate(), () => {
			C && K.layersWithOutsidePointerEventsDisabled.size === 1 && (X.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		q,
		X,
		C,
		K
	]), React$1.useEffect(() => () => {
		q && (K.layers.delete(q), K.layersWithOutsidePointerEventsDisabled.delete(q), dispatchUpdate());
	}, [q, K]), React$1.useEffect(() => {
		let n = () => $({});
		return document.addEventListener(CONTEXT_UPDATE, n), () => document.removeEventListener(CONTEXT_UPDATE, n);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...U,
		ref: Hk,
		style: {
			pointerEvents: qk ? Jk ? "auto" : "none" : void 0,
			...s.style
		},
		onFocusCapture: composeEventHandlers(s.onFocusCapture, Zk.onFocusCapture),
		onBlurCapture: composeEventHandlers(s.onBlurCapture, Zk.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(s.onPointerDownCapture, Yk.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((s, d) => {
	let C = React$1.useContext(DismissableLayerContext), w = React$1.useRef(null), k = useComposedRefs(d, w);
	return React$1.useEffect(() => {
		let n = w.current;
		if (n) return C.branches.add(n), () => {
			C.branches.delete(n);
		};
	}, [C.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		...s,
		ref: k
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(s, d = globalThis?.document) {
	let C = useCallbackRef(s), w = React$1.useRef(!1), k = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let n = (n) => {
			if (n.target && !w.current) {
				let s = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, C, w, { discrete: !0 });
				}, w = { originalEvent: n };
				n.pointerType === "touch" ? (d.removeEventListener("click", k.current), k.current = s, d.addEventListener("click", k.current, { once: !0 })) : s();
			} else d.removeEventListener("click", k.current);
			w.current = !1;
		}, s = window.setTimeout(() => {
			d.addEventListener("pointerdown", n);
		}, 0);
		return () => {
			window.clearTimeout(s), d.removeEventListener("pointerdown", n), d.removeEventListener("click", k.current);
		};
	}, [d, C]), { onPointerDownCapture: () => w.current = !0 };
}
function useFocusOutside(s, d = globalThis?.document) {
	let C = useCallbackRef(s), w = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let n = (n) => {
			n.target && !w.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, C, { originalEvent: n }, { discrete: !1 });
		};
		return d.addEventListener("focusin", n), () => d.removeEventListener("focusin", n);
	}, [d, C]), {
		onFocusCapture: () => w.current = !0,
		onBlurCapture: () => w.current = !1
	};
}
function dispatchUpdate() {
	let n = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(n);
}
function handleAndDispatchCustomEvent(n, s, d, { discrete: C }) {
	let w = d.originalEvent.target, k = new CustomEvent(n, {
		bubbles: !1,
		cancelable: !0,
		detail: d
	});
	s && w.addEventListener(n, s, { once: !0 }), C ? dispatchDiscreteCustomEvent(w, k) : w.dispatchEvent(k);
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS$1 = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((s, d) => {
	let { loop: C = !1, trapped: w = !1, onMountAutoFocus: k, onUnmountAutoFocus: F, ...L } = s, [V, U] = React$1.useState(null), K = useCallbackRef(k), q = useCallbackRef(F), J = React$1.useRef(null), X = useComposedRefs(d, (n) => U(n)), $ = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (w) {
			let n = function(n) {
				if ($.paused || !V) return;
				let s = n.target;
				V.contains(s) ? J.current = s : focus(J.current, { select: !0 });
			}, s = function(n) {
				if ($.paused || !V) return;
				let s = n.relatedTarget;
				s !== null && (V.contains(s) || focus(J.current, { select: !0 }));
			}, d = function(n) {
				if (document.activeElement === document.body) for (let s of n) s.removedNodes.length > 0 && focus(V);
			};
			document.addEventListener("focusin", n), document.addEventListener("focusout", s);
			let C = new MutationObserver(d);
			return V && C.observe(V, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", n), document.removeEventListener("focusout", s), C.disconnect();
			};
		}
	}, [
		w,
		V,
		$.paused
	]), React$1.useEffect(() => {
		if (V) {
			focusScopesStack.add($);
			let n = document.activeElement;
			if (!V.contains(n)) {
				let s = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
				V.addEventListener(AUTOFOCUS_ON_MOUNT, K), V.dispatchEvent(s), s.defaultPrevented || (focusFirst$2(removeLinks(getTabbableCandidates(V)), { select: !0 }), document.activeElement === n && focus(V));
			}
			return () => {
				V.removeEventListener(AUTOFOCUS_ON_MOUNT, K), setTimeout(() => {
					let s = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
					V.addEventListener(AUTOFOCUS_ON_UNMOUNT, q), V.dispatchEvent(s), s.defaultPrevented || focus(n ?? document.body, { select: !0 }), V.removeEventListener(AUTOFOCUS_ON_UNMOUNT, q), focusScopesStack.remove($);
				}, 0);
			};
		}
	}, [
		V,
		K,
		q,
		$
	]);
	let Hk = React$1.useCallback((n) => {
		if (!C && !w || $.paused) return;
		let s = n.key === "Tab" && !n.altKey && !n.ctrlKey && !n.metaKey, d = document.activeElement;
		if (s && d) {
			let s = n.currentTarget, [w, k] = getTabbableEdges(s);
			w && k ? !n.shiftKey && d === k ? (n.preventDefault(), C && focus(w, { select: !0 })) : n.shiftKey && d === w && (n.preventDefault(), C && focus(k, { select: !0 })) : d === s && n.preventDefault();
		}
	}, [
		C,
		w,
		$.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...L,
		ref: X,
		onKeyDown: Hk
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(n, { select: s = !1 } = {}) {
	let d = document.activeElement;
	for (let C of n) if (focus(C, { select: s }), document.activeElement !== d) return;
}
function getTabbableEdges(n) {
	let s = getTabbableCandidates(n);
	return [findVisible(s, n), findVisible(s.reverse(), n)];
}
function getTabbableCandidates(n) {
	let s = [], d = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, { acceptNode: (n) => {
		let s = n.tagName === "INPUT" && n.type === "hidden";
		return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; d.nextNode();) s.push(d.currentNode);
	return s;
}
function findVisible(n, s) {
	for (let d of n) if (!isHidden(d, { upTo: s })) return d;
}
function isHidden(n, { upTo: s }) {
	if (getComputedStyle(n).visibility === "hidden") return !0;
	for (; n;) {
		if (s !== void 0 && n === s) return !1;
		if (getComputedStyle(n).display === "none") return !0;
		n = n.parentElement;
	}
	return !1;
}
function isSelectableInput(n) {
	return n instanceof HTMLInputElement && "select" in n;
}
function focus(n, { select: s = !1 } = {}) {
	if (n && n.focus) {
		let d = document.activeElement;
		n.focus({ preventScroll: !0 }), n !== d && isSelectableInput(n) && s && n.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let n = [];
	return {
		add(s) {
			let d = n[0];
			s !== d && d?.pause(), n = arrayRemove(n, s), n.unshift(s);
		},
		remove(s) {
			n = arrayRemove(n, s), n[0]?.resume();
		}
	};
}
function arrayRemove(n, s) {
	let d = [...n], C = d.indexOf(s);
	return C !== -1 && d.splice(C, 1), d;
}
function removeLinks(n) {
	return n.filter((n) => n.tagName !== "A");
}
var PORTAL_NAME$5 = "Portal", Portal = React$1.forwardRef((s, d) => {
	let { container: C, ...w } = s, [k, F] = React$1.useState(!1);
	useLayoutEffect2(() => F(!0), []);
	let L = C || k && globalThis?.document?.body;
	return L ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...w,
		ref: d
	}), L) : null;
});
Portal.displayName = PORTAL_NAME$5;
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
		for (var s, d = 1, C = arguments.length; d < C; d++) for (var w in s = arguments[d], s) Object.prototype.hasOwnProperty.call(s, w) && (n[w] = s[w]);
		return n;
	}, __assign$2.apply(this, arguments);
};
function __rest(n, s) {
	var d = {};
	for (var C in n) Object.prototype.hasOwnProperty.call(n, C) && s.indexOf(C) < 0 && (d[C] = n[C]);
	if (n != null && typeof Object.getOwnPropertySymbols == "function") for (var w = 0, C = Object.getOwnPropertySymbols(n); w < C.length; w++) s.indexOf(C[w]) < 0 && Object.prototype.propertyIsEnumerable.call(n, C[w]) && (d[C[w]] = n[C[w]]);
	return d;
}
function __spreadArray(n, s, d) {
	if (d || arguments.length === 2) for (var C = 0, w = s.length, k; C < w; C++) (k || !(C in s)) && (k ||= Array.prototype.slice.call(s, 0, C), k[C] = s[C]);
	return n.concat(k || Array.prototype.slice.call(s));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(n, s) {
	return typeof n == "function" ? n(s) : n && (n.current = s), n;
}
function useCallbackRef$1(n, s) {
	var d = useState(function() {
		return {
			value: n,
			callback: s,
			facade: {
				get current() {
					return d.value;
				},
				set current(n) {
					var s = d.value;
					s !== n && (d.value = n, d.callback(n, s));
				}
			}
		};
	})[0];
	return d.callback = s, d.facade;
}
var useIsomorphicLayoutEffect$1 = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(n, s) {
	var d = useCallbackRef$1(s || null, function(s) {
		return n.forEach(function(n) {
			return assignRef(n, s);
		});
	});
	return useIsomorphicLayoutEffect$1(function() {
		var s = currentValues.get(d);
		if (s) {
			var C = new Set(s), w = new Set(n), k = d.current;
			C.forEach(function(n) {
				w.has(n) || assignRef(n, null);
			}), w.forEach(function(n) {
				C.has(n) || assignRef(n, k);
			});
		}
		currentValues.set(d, n);
	}, [n]), d;
}
function ItoI(n) {
	return n;
}
function innerCreateMedium(n, s) {
	s === void 0 && (s = ItoI);
	var d = [], C = !1;
	return {
		read: function() {
			if (C) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return d.length ? d[d.length - 1] : n;
		},
		useMedium: function(n) {
			var w = s(n, C);
			return d.push(w), function() {
				d = d.filter(function(n) {
					return n !== w;
				});
			};
		},
		assignSyncMedium: function(n) {
			for (C = !0; d.length;) {
				var s = d;
				d = [], s.forEach(n);
			}
			d = {
				push: function(s) {
					return n(s);
				},
				filter: function() {
					return d;
				}
			};
		},
		assignMedium: function(n) {
			C = !0;
			var s = [];
			if (d.length) {
				var w = d;
				d = [], w.forEach(n), s = d;
			}
			var k = function() {
				var d = s;
				s = [], d.forEach(n);
			}, F = function() {
				return Promise.resolve().then(k);
			};
			F(), d = {
				push: function(n) {
					s.push(n), F();
				},
				filter: function(n) {
					return s = s.filter(n), d;
				}
			};
		}
	};
}
function createSidecarMedium(n) {
	n === void 0 && (n = {});
	var s = innerCreateMedium(null);
	return s.options = __assign$2({
		async: !0,
		ssr: !1
	}, n), s;
}
var SideCar = function(s) {
	var d = s.sideCar, C = __rest(s, ["sideCar"]);
	if (!d) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var w = d.read();
	if (!w) throw Error("Sidecar medium not found");
	return React$1.createElement(w, __assign$2({}, C));
};
SideCar.isSideCarExport = !0;
function exportSidecar(n, s) {
	return n.useMedium(s), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(s, d) {
	var C = React$1.useRef(null), w = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), k = w[0], F = w[1], L = s.forwardProps, V = s.children, U = s.className, K = s.removeScrollBar, q = s.enabled, J = s.shards, X = s.sideCar, $ = s.noRelative, Hk = s.noIsolation, Uk = s.inert, Wk = s.allowPinchZoom, Gk = s.as, Kk = Gk === void 0 ? "div" : Gk, qk = s.gapMode, Jk = __rest(s, [
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
	]), Yk = X, Xk = useMergeRefs([C, d]), Zk = __assign$2(__assign$2({}, Jk), k);
	return React$1.createElement(React$1.Fragment, null, q && React$1.createElement(Yk, {
		sideCar: effectCar,
		removeScrollBar: K,
		shards: J,
		noRelative: $,
		noIsolation: Hk,
		inert: Uk,
		setCallbacks: F,
		allowPinchZoom: !!Wk,
		lockRef: C,
		gapMode: qk
	}), L ? React$1.cloneElement(React$1.Children.only(V), __assign$2(__assign$2({}, Zk), { ref: Xk })) : React$1.createElement(Kk, __assign$2({}, Zk, {
		className: U,
		ref: Xk
	}), V));
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
	var s = getNonce();
	return s && n.setAttribute("nonce", s), n;
}
function injectStyles(n, s) {
	n.styleSheet ? n.styleSheet.cssText = s : n.appendChild(document.createTextNode(s));
}
function insertStyleTag(n) {
	(document.head || document.getElementsByTagName("head")[0]).appendChild(n);
}
var stylesheetSingleton = function() {
	var n = 0, s = null;
	return {
		add: function(d) {
			n == 0 && (s = makeStyleTag()) && (injectStyles(s, d), insertStyleTag(s)), n++;
		},
		remove: function() {
			n--, !n && s && (s.parentNode && s.parentNode.removeChild(s), s = null);
		}
	};
}, styleHookSingleton = function() {
	var s = stylesheetSingleton();
	return function(d, C) {
		React$1.useEffect(function() {
			return s.add(d), function() {
				s.remove();
			};
		}, [d && C]);
	};
}, styleSingleton = function() {
	var n = styleHookSingleton();
	return function(s) {
		var d = s.styles, C = s.dynamic;
		return n(d, C), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(n) {
	return parseInt(n || "", 10) || 0;
}, getOffset = function(n) {
	var s = window.getComputedStyle(document.body), d = s[n === "padding" ? "paddingLeft" : "marginLeft"], C = s[n === "padding" ? "paddingTop" : "marginTop"], w = s[n === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(d),
		parse(C),
		parse(w)
	];
}, getGapWidth = function(n) {
	if (n === void 0 && (n = "margin"), typeof window > "u") return zeroGap;
	var s = getOffset(n), d = document.documentElement.clientWidth, C = window.innerWidth;
	return {
		left: s[0],
		top: s[1],
		right: s[2],
		gap: Math.max(0, C - d + s[2] - s[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(n, s, d, C) {
	var w = n.left, k = n.top, F = n.right, L = n.gap;
	return d === void 0 && (d = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${C};
   padding-right: ${L}px ${C};
  }
  body[${lockAttribute}] {
    overflow: hidden ${C};
    overscroll-behavior: contain;
    ${[
		s && `position: relative ${C};`,
		d === "margin" && `
    padding-left: ${w}px;
    padding-top: ${k}px;
    padding-right: ${F}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${L}px ${C};
    `,
		d === "padding" && `padding-right: ${L}px ${C};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${L}px ${C};
  }
  
  .${fullWidthClassName} {
    margin-right: ${L}px ${C};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${C};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${C};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${L}px;
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
}, RemoveScrollBar = function(s) {
	var d = s.noRelative, C = s.noImportant, w = s.gapMode, k = w === void 0 ? "margin" : w;
	useLockAttribute();
	var F = React$1.useMemo(function() {
		return getGapWidth(k);
	}, [k]);
	return React$1.createElement(Style, { styles: getStyles(F, !d, k, C ? "" : "!important") });
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
}, elementCanBeScrolled = function(n, s) {
	if (!(n instanceof Element)) return !1;
	var d = window.getComputedStyle(n);
	return d[s] !== "hidden" && !(d.overflowY === d.overflowX && !alwaysContainsScroll(n) && d[s] === "visible");
}, elementCouldBeVScrolled = function(n) {
	return elementCanBeScrolled(n, "overflowY");
}, elementCouldBeHScrolled = function(n) {
	return elementCanBeScrolled(n, "overflowX");
}, locationCouldBeScrolled = function(n, s) {
	var d = s.ownerDocument, C = s;
	do {
		if (typeof ShadowRoot < "u" && C instanceof ShadowRoot && (C = C.host), elementCouldBeScrolled(n, C)) {
			var w = getScrollVariables(n, C);
			if (w[1] > w[2]) return !0;
		}
		C = C.parentNode;
	} while (C && C !== d.body);
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
}, elementCouldBeScrolled = function(n, s) {
	return n === "v" ? elementCouldBeVScrolled(s) : elementCouldBeHScrolled(s);
}, getScrollVariables = function(n, s) {
	return n === "v" ? getVScrollVariables(s) : getHScrollVariables(s);
}, getDirectionFactor = function(n, s) {
	return n === "h" && s === "rtl" ? -1 : 1;
}, handleScroll = function(n, s, d, C, w) {
	var k = getDirectionFactor(n, window.getComputedStyle(s).direction), F = k * C, L = d.target, V = s.contains(L), U = !1, K = F > 0, q = 0, J = 0;
	do {
		if (!L) break;
		var X = getScrollVariables(n, L), $ = X[0], Hk = X[1] - X[2] - k * $;
		($ || Hk) && elementCouldBeScrolled(n, L) && (q += Hk, J += $);
		var Uk = L.parentNode;
		L = Uk && Uk.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Uk.host : Uk;
	} while (!V && L !== document.body || V && (s.contains(L) || s === L));
	return (K && (w && Math.abs(q) < 1 || !w && F > q) || !K && (w && Math.abs(J) < 1 || !w && -F > J)) && (U = !0), U;
}, getTouchXY = function(n) {
	return "changedTouches" in n ? [n.changedTouches[0].clientX, n.changedTouches[0].clientY] : [0, 0];
}, getDeltaXY = function(n) {
	return [n.deltaX, n.deltaY];
}, extractRef = function(n) {
	return n && "current" in n ? n.current : n;
}, deltaCompare = function(n, s) {
	return n[0] === s[0] && n[1] === s[1];
}, generateStyle = function(n) {
	return `
  .block-interactivity-${n} {pointer-events: none;}
  .allow-interactivity-${n} {pointer-events: all;}
`;
}, idCounter = 0, lockStack = [];
function RemoveScrollSideCar(s) {
	var d = React$1.useRef([]), C = React$1.useRef([0, 0]), w = React$1.useRef(), k = React$1.useState(idCounter++)[0], F = React$1.useState(styleSingleton)[0], L = React$1.useRef(s);
	React$1.useEffect(function() {
		L.current = s;
	}, [s]), React$1.useEffect(function() {
		if (s.inert) {
			document.body.classList.add(`block-interactivity-${k}`);
			var n = __spreadArray([s.lockRef.current], (s.shards || []).map(extractRef), !0).filter(Boolean);
			return n.forEach(function(n) {
				return n.classList.add(`allow-interactivity-${k}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${k}`), n.forEach(function(n) {
					return n.classList.remove(`allow-interactivity-${k}`);
				});
			};
		}
	}, [
		s.inert,
		s.lockRef.current,
		s.shards
	]);
	var V = React$1.useCallback(function(n, s) {
		if ("touches" in n && n.touches.length === 2 || n.type === "wheel" && n.ctrlKey) return !L.current.allowPinchZoom;
		var d = getTouchXY(n), k = C.current, F = "deltaX" in n ? n.deltaX : k[0] - d[0], V = "deltaY" in n ? n.deltaY : k[1] - d[1], U, K = n.target, q = Math.abs(F) > Math.abs(V) ? "h" : "v";
		if ("touches" in n && q === "h" && K.type === "range") return !1;
		var J = window.getSelection(), X = J && J.anchorNode;
		if (X && (X === K || X.contains(K))) return !1;
		var $ = locationCouldBeScrolled(q, K);
		if (!$) return !0;
		if ($ ? U = q : (U = q === "v" ? "h" : "v", $ = locationCouldBeScrolled(q, K)), !$) return !1;
		if (!w.current && "changedTouches" in n && (F || V) && (w.current = U), !U) return !0;
		var Hk = w.current || U;
		return handleScroll(Hk, s, n, Hk === "h" ? F : V, !0);
	}, []), U = React$1.useCallback(function(n) {
		var s = n;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== F)) {
			var C = "deltaY" in s ? getDeltaXY(s) : getTouchXY(s), w = d.current.filter(function(n) {
				return n.name === s.type && (n.target === s.target || s.target === n.shadowParent) && deltaCompare(n.delta, C);
			})[0];
			if (w && w.should) {
				s.cancelable && s.preventDefault();
				return;
			}
			if (!w) {
				var k = (L.current.shards || []).map(extractRef).filter(Boolean).filter(function(n) {
					return n.contains(s.target);
				});
				(k.length > 0 ? V(s, k[0]) : !L.current.noIsolation) && s.cancelable && s.preventDefault();
			}
		}
	}, []), K = React$1.useCallback(function(n, s, C, w) {
		var k = {
			name: n,
			delta: s,
			target: C,
			should: w,
			shadowParent: getOutermostShadowParent(C)
		};
		d.current.push(k), setTimeout(function() {
			d.current = d.current.filter(function(n) {
				return n !== k;
			});
		}, 1);
	}, []), q = React$1.useCallback(function(n) {
		C.current = getTouchXY(n), w.current = void 0;
	}, []), J = React$1.useCallback(function(n) {
		K(n.type, getDeltaXY(n), n.target, V(n, s.lockRef.current));
	}, []), X = React$1.useCallback(function(n) {
		K(n.type, getTouchXY(n), n.target, V(n, s.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(F), s.setCallbacks({
			onScrollCapture: J,
			onWheelCapture: J,
			onTouchMoveCapture: X
		}), document.addEventListener("wheel", U, nonPassive), document.addEventListener("touchmove", U, nonPassive), document.addEventListener("touchstart", q, nonPassive), function() {
			lockStack = lockStack.filter(function(n) {
				return n !== F;
			}), document.removeEventListener("wheel", U, nonPassive), document.removeEventListener("touchmove", U, nonPassive), document.removeEventListener("touchstart", q, nonPassive);
		};
	}, []);
	var $ = s.removeScrollBar, Hk = s.inert;
	return React$1.createElement(React$1.Fragment, null, Hk ? React$1.createElement(F, { styles: generateStyle(k) }) : null, $ ? React$1.createElement(RemoveScrollBar, {
		noRelative: s.noRelative,
		gapMode: s.gapMode
	}) : null);
}
function getOutermostShadowParent(n) {
	for (var s = null; n !== null;) n instanceof ShadowRoot && (s = n.host, n = n.host), n = n.parentNode;
	return s;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(s, d) {
	return React$1.createElement(RemoveScroll, __assign$2({}, s, {
		ref: d,
		sideCar: sidecar_default
	}));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
var Combination_default = ReactRemoveScroll, getDefaultParent = function(n) {
	return typeof document > "u" ? null : (Array.isArray(n) ? n[0] : n).ownerDocument.body;
}, counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {}, lockCount = 0, unwrapHost = function(n) {
	return n && (n.host || unwrapHost(n.parentNode));
}, correctTargets = function(n, s) {
	return s.map(function(s) {
		if (n.contains(s)) return s;
		var d = unwrapHost(s);
		return d && n.contains(d) ? d : (console.error("aria-hidden", s, "in not contained inside", n, ". Doing nothing"), null);
	}).filter(function(n) {
		return !!n;
	});
}, applyAttributeToOthers = function(n, s, d, C) {
	var w = correctTargets(s, Array.isArray(n) ? n : [n]);
	markerMap[d] || (markerMap[d] = /* @__PURE__ */ new WeakMap());
	var k = markerMap[d], F = [], L = /* @__PURE__ */ new Set(), V = new Set(w), U = function(n) {
		!n || L.has(n) || (L.add(n), U(n.parentNode));
	};
	w.forEach(U);
	var K = function(n) {
		!n || V.has(n) || Array.prototype.forEach.call(n.children, function(n) {
			if (L.has(n)) K(n);
			else try {
				var s = n.getAttribute(C), w = s !== null && s !== "false", V = (counterMap.get(n) || 0) + 1, U = (k.get(n) || 0) + 1;
				counterMap.set(n, V), k.set(n, U), F.push(n), V === 1 && w && uncontrolledNodes.set(n, !0), U === 1 && n.setAttribute(d, "true"), w || n.setAttribute(C, "true");
			} catch (s) {
				console.error("aria-hidden: cannot operate on ", n, s);
			}
		});
	};
	return K(s), L.clear(), lockCount++, function() {
		F.forEach(function(n) {
			var s = counterMap.get(n) - 1, w = k.get(n) - 1;
			counterMap.set(n, s), k.set(n, w), s || (uncontrolledNodes.has(n) || n.removeAttribute(C), uncontrolledNodes.delete(n)), w || n.removeAttribute(d);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(n, s, d) {
	d === void 0 && (d = "data-aria-hidden");
	var C = Array.from(Array.isArray(n) ? n : [n]), w = s || getDefaultParent(n);
	return w ? (C.push.apply(C, Array.from(w.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(C, w, d, "aria-hidden")) : function() {
		return null;
	};
}, DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog = (s) => {
	let { __scopeDialog: d, children: C, open: w, defaultOpen: k, onOpenChange: F, modal: L = !0 } = s, V = React$1.useRef(null), U = React$1.useRef(null), [K, q] = useControllableState({
		prop: w,
		defaultProp: k ?? !1,
		onChange: F,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: d,
		triggerRef: V,
		contentRef: U,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: K,
		onOpenChange: q,
		onOpenToggle: React$1.useCallback(() => q((n) => !n), [q]),
		modal: L,
		children: C
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$4 = "DialogTrigger", DialogTrigger = React$1.forwardRef((n, s) => {
	let { __scopeDialog: d, ...C } = n, w = useDialogContext(TRIGGER_NAME$4, d), k = useComposedRefs(s, w.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": w.open,
		"aria-controls": w.contentId,
		"data-state": getState$1(w.open),
		...C,
		ref: k,
		onClick: composeEventHandlers(n.onClick, w.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME$4;
var PORTAL_NAME$4 = "DialogPortal", [PortalProvider$2, usePortalContext$2] = createDialogContext(PORTAL_NAME$4, { forceMount: void 0 }), DialogPortal = (s) => {
	let { __scopeDialog: d, forceMount: C, children: w, container: k } = s, F = useDialogContext(PORTAL_NAME$4, d);
	return /* @__PURE__ */ jsx(PortalProvider$2, {
		scope: d,
		forceMount: C,
		children: React$1.Children.map(w, (n) => /* @__PURE__ */ jsx(Presence, {
			present: C || F.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: k,
				children: n
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME$4;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay = React$1.forwardRef((n, s) => {
	let d = usePortalContext$2(OVERLAY_NAME, n.__scopeDialog), { forceMount: C = d.forceMount, ...w } = n, k = useDialogContext(OVERLAY_NAME, n.__scopeDialog);
	return k.modal ? /* @__PURE__ */ jsx(Presence, {
		present: C || k.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...w,
			ref: s
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot$1 = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((n, s) => {
	let { __scopeDialog: d, ...C } = n, w = useDialogContext(OVERLAY_NAME, d);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot$1,
		allowPinchZoom: !0,
		shards: [w.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState$1(w.open),
			...C,
			ref: s,
			style: {
				pointerEvents: "auto",
				...C.style
			}
		})
	});
}), CONTENT_NAME$6 = "DialogContent", DialogContent = React$1.forwardRef((n, s) => {
	let d = usePortalContext$2(CONTENT_NAME$6, n.__scopeDialog), { forceMount: C = d.forceMount, ...w } = n, k = useDialogContext(CONTENT_NAME$6, n.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: C || k.open,
		children: k.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...w,
			ref: s
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...w,
			ref: s
		})
	});
});
DialogContent.displayName = CONTENT_NAME$6;
var DialogContentModal = React$1.forwardRef((s, d) => {
	let C = useDialogContext(CONTENT_NAME$6, s.__scopeDialog), w = React$1.useRef(null), k = useComposedRefs(d, C.contentRef, w);
	return React$1.useEffect(() => {
		let n = w.current;
		if (n) return hideOthers(n);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		...s,
		ref: k,
		trapFocus: C.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(s.onCloseAutoFocus, (n) => {
			n.preventDefault(), C.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(s.onPointerDownOutside, (n) => {
			let s = n.detail.originalEvent, d = s.button === 0 && s.ctrlKey === !0;
			(s.button === 2 || d) && n.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(s.onFocusOutside, (n) => n.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((s, d) => {
	let C = useDialogContext(CONTENT_NAME$6, s.__scopeDialog), w = React$1.useRef(!1), k = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		...s,
		ref: d,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (n) => {
			s.onCloseAutoFocus?.(n), n.defaultPrevented || (w.current || C.triggerRef.current?.focus(), n.preventDefault()), w.current = !1, k.current = !1;
		},
		onInteractOutside: (n) => {
			s.onInteractOutside?.(n), n.defaultPrevented || (w.current = !0, n.detail.originalEvent.type === "pointerdown" && (k.current = !0));
			let d = n.target;
			C.triggerRef.current?.contains(d) && n.preventDefault(), n.detail.originalEvent.type === "focusin" && k.current && n.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((s, d) => {
	let { __scopeDialog: C, trapFocus: w, onOpenAutoFocus: k, onCloseAutoFocus: F, ...L } = s, V = useDialogContext(CONTENT_NAME$6, C), U = React$1.useRef(null), K = useComposedRefs(d, U);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: w,
		onMountAutoFocus: k,
		onUnmountAutoFocus: F,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: V.contentId,
			"aria-describedby": V.descriptionId,
			"aria-labelledby": V.titleId,
			"data-state": getState$1(V.open),
			...L,
			ref: K,
			onDismiss: () => V.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: V.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: U,
		descriptionId: V.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle = React$1.forwardRef((n, s) => {
	let { __scopeDialog: d, ...C } = n, w = useDialogContext(TITLE_NAME, d);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: w.titleId,
		...C,
		ref: s
	});
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription = React$1.forwardRef((n, s) => {
	let { __scopeDialog: d, ...C } = n, w = useDialogContext(DESCRIPTION_NAME, d);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: w.descriptionId,
		...C,
		ref: s
	});
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose = React$1.forwardRef((n, s) => {
	let { __scopeDialog: d, ...C } = n, w = useDialogContext(CLOSE_NAME, d);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...C,
		ref: s,
		onClick: composeEventHandlers(n.onClick, () => w.onOpenChange(!1))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState$1(n) {
	return n ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME$6,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: s }) => {
	let d = useWarningContext(TITLE_WARNING_NAME), C = `\`${d.contentName}\` requires a \`${d.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${d.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${d.docsSlug}`;
	return React$1.useEffect(() => {
		s && (document.getElementById(s) || console.error(C));
	}, [C, s]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: s, descriptionId: d }) => {
	let C = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let n = s.current?.getAttribute("aria-describedby");
		d && n && (document.getElementById(d) || console.warn(C));
	}, [
		C,
		s,
		d
	]), null;
}, Root$4 = Dialog, Trigger$3 = DialogTrigger, Portal$2 = DialogPortal, Overlay = DialogOverlay, Content$2 = DialogContent, Title = DialogTitle, Description = DialogDescription, Close = DialogClose;
function usePrevious(s) {
	let d = React$1.useRef({
		value: s,
		previous: s
	});
	return React$1.useMemo(() => (d.current.value !== s && (d.current.previous = d.current.value, d.current.value = s), d.current.previous), [s]);
}
function useSize(s) {
	let [d, C] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (s) {
			C({
				width: s.offsetWidth,
				height: s.offsetHeight
			});
			let n = new ResizeObserver((n) => {
				if (!Array.isArray(n) || !n.length) return;
				let d = n[0], w, k;
				if ("borderBoxSize" in d) {
					let n = d.borderBoxSize, s = Array.isArray(n) ? n[0] : n;
					w = s.inlineSize, k = s.blockSize;
				} else w = s.offsetWidth, k = s.offsetHeight;
				C({
					width: w,
					height: k
				});
			});
			return n.observe(s, { box: "border-box" }), () => n.unobserve(s);
		} else C(void 0);
	}, [s]), d;
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
function clamp$3(n, s, d) {
	return max(n, min(s, d));
}
function evaluate(n, s) {
	return typeof n == "function" ? n(s) : n;
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
function getAlignmentSides(n, s, d) {
	d === void 0 && (d = !1);
	let C = getAlignment(n), w = getAlignmentAxis(n), k = getAxisLength(w), F = w === "x" ? C === (d ? "end" : "start") ? "right" : "left" : C === "start" ? "bottom" : "top";
	return s.reference[k] > s.floating[k] && (F = getOppositePlacement(F)), [F, getOppositePlacement(F)];
}
function getExpandedPlacements(n) {
	let s = getOppositePlacement(n);
	return [
		getOppositeAlignmentPlacement(n),
		s,
		getOppositeAlignmentPlacement(s)
	];
}
function getOppositeAlignmentPlacement(n) {
	return n.replace(/start|end/g, (n) => oppositeAlignmentMap[n]);
}
var lrPlacement = ["left", "right"], rlPlacement = ["right", "left"], tbPlacement = ["top", "bottom"], btPlacement = ["bottom", "top"];
function getSideList(n, s, d) {
	switch (n) {
		case "top":
		case "bottom": return d ? s ? rlPlacement : lrPlacement : s ? lrPlacement : rlPlacement;
		case "left":
		case "right": return s ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(n, s, d, C) {
	let w = getAlignment(n), k = getSideList(getSide(n), d === "start", C);
	return w && (k = k.map((n) => n + "-" + w), s && (k = k.concat(k.map(getOppositeAlignmentPlacement)))), k;
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
	let { x: s, y: d, width: C, height: w } = n;
	return {
		width: C,
		height: w,
		top: d,
		left: s,
		right: s + C,
		bottom: d + w,
		x: s,
		y: d
	};
}
function computeCoordsFromPlacement(n, s, d) {
	let { reference: C, floating: w } = n, k = getSideAxis(s), F = getAlignmentAxis(s), L = getAxisLength(F), V = getSide(s), U = k === "y", K = C.x + C.width / 2 - w.width / 2, q = C.y + C.height / 2 - w.height / 2, J = C[L] / 2 - w[L] / 2, X;
	switch (V) {
		case "top":
			X = {
				x: K,
				y: C.y - w.height
			};
			break;
		case "bottom":
			X = {
				x: K,
				y: C.y + C.height
			};
			break;
		case "right":
			X = {
				x: C.x + C.width,
				y: q
			};
			break;
		case "left":
			X = {
				x: C.x - w.width,
				y: q
			};
			break;
		default: X = {
			x: C.x,
			y: C.y
		};
	}
	switch (getAlignment(s)) {
		case "start":
			X[F] -= J * (d && U ? -1 : 1);
			break;
		case "end":
			X[F] += J * (d && U ? -1 : 1);
			break;
	}
	return X;
}
var computePosition$1 = async (n, s, d) => {
	let { placement: C = "bottom", strategy: w = "absolute", middleware: k = [], platform: F } = d, L = k.filter(Boolean), V = await (F.isRTL == null ? void 0 : F.isRTL(s)), U = await F.getElementRects({
		reference: n,
		floating: s,
		strategy: w
	}), { x: K, y: q } = computeCoordsFromPlacement(U, C, V), J = C, X = {}, $ = 0;
	for (let d = 0; d < L.length; d++) {
		let { name: k, fn: Hk } = L[d], { x: Uk, y: Wk, data: Gk, reset: Kk } = await Hk({
			x: K,
			y: q,
			initialPlacement: C,
			placement: J,
			strategy: w,
			middlewareData: X,
			rects: U,
			platform: F,
			elements: {
				reference: n,
				floating: s
			}
		});
		K = Uk ?? K, q = Wk ?? q, X = {
			...X,
			[k]: {
				...X[k],
				...Gk
			}
		}, Kk && $ <= 50 && ($++, typeof Kk == "object" && (Kk.placement && (J = Kk.placement), Kk.rects && (U = Kk.rects === !0 ? await F.getElementRects({
			reference: n,
			floating: s,
			strategy: w
		}) : Kk.rects), {x: K, y: q} = computeCoordsFromPlacement(U, J, V)), d = -1);
	}
	return {
		x: K,
		y: q,
		placement: J,
		strategy: w,
		middlewareData: X
	};
};
async function detectOverflow$1(n, s) {
	s === void 0 && (s = {});
	let { x: d, y: C, platform: w, rects: k, elements: F, strategy: L } = n, { boundary: V = "clippingAncestors", rootBoundary: U = "viewport", elementContext: K = "floating", altBoundary: q = !1, padding: J = 0 } = evaluate(s, n), X = getPaddingObject(J), $ = F[q ? K === "floating" ? "reference" : "floating" : K], Hk = rectToClientRect(await w.getClippingRect({
		element: await (w.isElement == null ? void 0 : w.isElement($)) ?? !0 ? $ : $.contextElement || await (w.getDocumentElement == null ? void 0 : w.getDocumentElement(F.floating)),
		boundary: V,
		rootBoundary: U,
		strategy: L
	})), Uk = K === "floating" ? {
		x: d,
		y: C,
		width: k.floating.width,
		height: k.floating.height
	} : k.reference, Wk = await (w.getOffsetParent == null ? void 0 : w.getOffsetParent(F.floating)), Gk = await (w.isElement == null ? void 0 : w.isElement(Wk)) && await (w.getScale == null ? void 0 : w.getScale(Wk)) || {
		x: 1,
		y: 1
	}, Kk = rectToClientRect(w.convertOffsetParentRelativeRectToViewportRelativeRect ? await w.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: F,
		rect: Uk,
		offsetParent: Wk,
		strategy: L
	}) : Uk);
	return {
		top: (Hk.top - Kk.top + X.top) / Gk.y,
		bottom: (Kk.bottom - Hk.bottom + X.bottom) / Gk.y,
		left: (Hk.left - Kk.left + X.left) / Gk.x,
		right: (Kk.right - Hk.right + X.right) / Gk.x
	};
}
var arrow$2 = (n) => ({
	name: "arrow",
	options: n,
	async fn(s) {
		let { x: d, y: C, placement: w, rects: k, platform: F, elements: L, middlewareData: V } = s, { element: U, padding: K = 0 } = evaluate(n, s) || {};
		if (U == null) return {};
		let q = getPaddingObject(K), J = {
			x: d,
			y: C
		}, X = getAlignmentAxis(w), $ = getAxisLength(X), Hk = await F.getDimensions(U), Uk = X === "y", Wk = Uk ? "top" : "left", Gk = Uk ? "bottom" : "right", Kk = Uk ? "clientHeight" : "clientWidth", qk = k.reference[$] + k.reference[X] - J[X] - k.floating[$], Jk = J[X] - k.reference[X], Yk = await (F.getOffsetParent == null ? void 0 : F.getOffsetParent(U)), Xk = Yk ? Yk[Kk] : 0;
		(!Xk || !await (F.isElement == null ? void 0 : F.isElement(Yk))) && (Xk = L.floating[Kk] || k.floating[$]);
		let Zk = qk / 2 - Jk / 2, Qk = Xk / 2 - Hk[$] / 2 - 1, $k = min(q[Wk], Qk), eA = min(q[Gk], Qk), tA = $k, nA = Xk - Hk[$] - eA, rA = Xk / 2 - Hk[$] / 2 + Zk, iA = clamp$3(tA, rA, nA), aA = !V.arrow && getAlignment(w) != null && rA !== iA && k.reference[$] / 2 - (rA < tA ? $k : eA) - Hk[$] / 2 < 0, oA = aA ? rA < tA ? rA - tA : rA - nA : 0;
		return {
			[X]: J[X] + oA,
			data: {
				[X]: iA,
				centerOffset: rA - iA - oA,
				...aA && { alignmentOffset: oA }
			},
			reset: aA
		};
	}
}), flip$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "flip",
		options: n,
		async fn(s) {
			var d;
			let { placement: C, middlewareData: w, rects: k, initialPlacement: F, platform: L, elements: V } = s, { mainAxis: U = !0, crossAxis: K = !0, fallbackPlacements: q, fallbackStrategy: J = "bestFit", fallbackAxisSideDirection: X = "none", flipAlignment: $ = !0, ...Hk } = evaluate(n, s);
			if ((d = w.arrow) != null && d.alignmentOffset) return {};
			let Uk = getSide(C), Wk = getSideAxis(F), Gk = getSide(F) === F, Kk = await (L.isRTL == null ? void 0 : L.isRTL(V.floating)), qk = q || (Gk || !$ ? [getOppositePlacement(F)] : getExpandedPlacements(F)), Jk = X !== "none";
			!q && Jk && qk.push(...getOppositeAxisPlacements(F, $, X, Kk));
			let Yk = [F, ...qk], Xk = await detectOverflow$1(s, Hk), Zk = [], Qk = w.flip?.overflows || [];
			if (U && Zk.push(Xk[Uk]), K) {
				let n = getAlignmentSides(C, k, Kk);
				Zk.push(Xk[n[0]], Xk[n[1]]);
			}
			if (Qk = [...Qk, {
				placement: C,
				overflows: Zk
			}], !Zk.every((n) => n <= 0)) {
				let n = (w.flip?.index || 0) + 1, s = Yk[n];
				if (s && (!(K === "alignment" && Wk !== getSideAxis(s)) || Qk.every((n) => getSideAxis(n.placement) === Wk ? n.overflows[0] > 0 : !0))) return {
					data: {
						index: n,
						overflows: Qk
					},
					reset: { placement: s }
				};
				let d = Qk.filter((n) => n.overflows[0] <= 0).sort((n, s) => n.overflows[1] - s.overflows[1])[0]?.placement;
				if (!d) switch (J) {
					case "bestFit": {
						let n = Qk.filter((n) => {
							if (Jk) {
								let s = getSideAxis(n.placement);
								return s === Wk || s === "y";
							}
							return !0;
						}).map((n) => [n.placement, n.overflows.filter((n) => n > 0).reduce((n, s) => n + s, 0)]).sort((n, s) => n[1] - s[1])[0]?.[0];
						n && (d = n);
						break;
					}
					case "initialPlacement":
						d = F;
						break;
				}
				if (C !== d) return { reset: { placement: d } };
			}
			return {};
		}
	};
};
function getSideOffsets(n, s) {
	return {
		top: n.top - s.height,
		right: n.right - s.width,
		bottom: n.bottom - s.height,
		left: n.left - s.width
	};
}
function isAnySideFullyClipped(n) {
	return sides.some((s) => n[s] >= 0);
}
var hide$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "hide",
		options: n,
		async fn(s) {
			let { rects: d } = s, { strategy: C = "referenceHidden", ...w } = evaluate(n, s);
			switch (C) {
				case "referenceHidden": {
					let n = getSideOffsets(await detectOverflow$1(s, {
						...w,
						elementContext: "reference"
					}), d.reference);
					return { data: {
						referenceHiddenOffsets: n,
						referenceHidden: isAnySideFullyClipped(n)
					} };
				}
				case "escaped": {
					let n = getSideOffsets(await detectOverflow$1(s, {
						...w,
						altBoundary: !0
					}), d.floating);
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
async function convertValueToCoords(n, s) {
	let { placement: d, platform: C, elements: w } = n, k = await (C.isRTL == null ? void 0 : C.isRTL(w.floating)), F = getSide(d), L = getAlignment(d), V = getSideAxis(d) === "y", U = originSides.has(F) ? -1 : 1, K = k && V ? -1 : 1, q = evaluate(s, n), { mainAxis: J, crossAxis: X, alignmentAxis: $ } = typeof q == "number" ? {
		mainAxis: q,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: q.mainAxis || 0,
		crossAxis: q.crossAxis || 0,
		alignmentAxis: q.alignmentAxis
	};
	return L && typeof $ == "number" && (X = L === "end" ? $ * -1 : $), V ? {
		x: X * K,
		y: J * U
	} : {
		x: J * U,
		y: X * K
	};
}
var offset$2 = function(n) {
	return n === void 0 && (n = 0), {
		name: "offset",
		options: n,
		async fn(s) {
			var d;
			let { x: C, y: w, placement: k, middlewareData: F } = s, L = await convertValueToCoords(s, n);
			return k === F.offset?.placement && (d = F.arrow) != null && d.alignmentOffset ? {} : {
				x: C + L.x,
				y: w + L.y,
				data: {
					...L,
					placement: k
				}
			};
		}
	};
}, shift$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "shift",
		options: n,
		async fn(s) {
			let { x: d, y: C, placement: w } = s, { mainAxis: k = !0, crossAxis: F = !1, limiter: L = { fn: (n) => {
				let { x: s, y: d } = n;
				return {
					x: s,
					y: d
				};
			} }, ...V } = evaluate(n, s), U = {
				x: d,
				y: C
			}, K = await detectOverflow$1(s, V), q = getSideAxis(getSide(w)), J = getOppositeAxis(q), X = U[J], $ = U[q];
			if (k) {
				let n = J === "y" ? "top" : "left", s = J === "y" ? "bottom" : "right", d = X + K[n], C = X - K[s];
				X = clamp$3(d, X, C);
			}
			if (F) {
				let n = q === "y" ? "top" : "left", s = q === "y" ? "bottom" : "right", d = $ + K[n], C = $ - K[s];
				$ = clamp$3(d, $, C);
			}
			let Hk = L.fn({
				...s,
				[J]: X,
				[q]: $
			});
			return {
				...Hk,
				data: {
					x: Hk.x - d,
					y: Hk.y - C,
					enabled: {
						[J]: k,
						[q]: F
					}
				}
			};
		}
	};
}, limitShift$2 = function(n) {
	return n === void 0 && (n = {}), {
		options: n,
		fn(s) {
			let { x: d, y: C, placement: w, rects: k, middlewareData: F } = s, { offset: L = 0, mainAxis: V = !0, crossAxis: U = !0 } = evaluate(n, s), K = {
				x: d,
				y: C
			}, q = getSideAxis(w), J = getOppositeAxis(q), X = K[J], $ = K[q], Hk = evaluate(L, s), Uk = typeof Hk == "number" ? {
				mainAxis: Hk,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...Hk
			};
			if (V) {
				let n = J === "y" ? "height" : "width", s = k.reference[J] - k.floating[n] + Uk.mainAxis, d = k.reference[J] + k.reference[n] - Uk.mainAxis;
				X < s ? X = s : X > d && (X = d);
			}
			if (U) {
				let n = J === "y" ? "width" : "height", s = originSides.has(getSide(w)), d = k.reference[q] - k.floating[n] + (s && F.offset?.[q] || 0) + (s ? 0 : Uk.crossAxis), C = k.reference[q] + k.reference[n] + (s ? 0 : F.offset?.[q] || 0) - (s ? Uk.crossAxis : 0);
				$ < d ? $ = d : $ > C && ($ = C);
			}
			return {
				[J]: X,
				[q]: $
			};
		}
	};
}, size$2 = function(n) {
	return n === void 0 && (n = {}), {
		name: "size",
		options: n,
		async fn(s) {
			var d, C;
			let { placement: w, rects: k, platform: F, elements: L } = s, { apply: V = () => {}, ...U } = evaluate(n, s), K = await detectOverflow$1(s, U), q = getSide(w), J = getAlignment(w), X = getSideAxis(w) === "y", { width: $, height: Hk } = k.floating, Uk, Wk;
			q === "top" || q === "bottom" ? (Uk = q, Wk = J === (await (F.isRTL == null ? void 0 : F.isRTL(L.floating)) ? "start" : "end") ? "left" : "right") : (Wk = q, Uk = J === "end" ? "top" : "bottom");
			let Gk = Hk - K.top - K.bottom, Kk = $ - K.left - K.right, qk = min(Hk - K[Uk], Gk), Jk = min($ - K[Wk], Kk), Yk = !s.middlewareData.shift, Xk = qk, Zk = Jk;
			if ((d = s.middlewareData.shift) != null && d.enabled.x && (Zk = Kk), (C = s.middlewareData.shift) != null && C.enabled.y && (Xk = Gk), Yk && !J) {
				let n = max(K.left, 0), s = max(K.right, 0), d = max(K.top, 0), C = max(K.bottom, 0);
				X ? Zk = $ - 2 * (n !== 0 || s !== 0 ? n + s : max(K.left, K.right)) : Xk = Hk - 2 * (d !== 0 || C !== 0 ? d + C : max(K.top, K.bottom));
			}
			await V({
				...s,
				availableWidth: Zk,
				availableHeight: Xk
			});
			let Qk = await F.getDimensions(L.floating);
			return $ !== Qk.width || Hk !== Qk.height ? { reset: { rects: !0 } } : {};
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
	var s;
	return (n == null || (s = n.ownerDocument) == null ? void 0 : s.defaultView) || window;
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
	let { overflow: s, overflowX: d, overflowY: C, display: w } = getComputedStyle$2(n);
	return /auto|scroll|overlay|hidden|clip/.test(s + C + d) && !invalidOverflowDisplayValues.has(w);
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
	return topLayerSelectors.some((s) => {
		try {
			return n.matches(s);
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
	let s = isWebKit(), d = isElement(n) ? getComputedStyle$2(n) : n;
	return transformProperties.some((n) => d[n] ? d[n] !== "none" : !1) || (d.containerType ? d.containerType !== "normal" : !1) || !s && (d.backdropFilter ? d.backdropFilter !== "none" : !1) || !s && (d.filter ? d.filter !== "none" : !1) || willChangeValues.some((n) => (d.willChange || "").includes(n)) || containValues.some((n) => (d.contain || "").includes(n));
}
function getContainingBlock(n) {
	let s = getParentNode(n);
	for (; isHTMLElement$1(s) && !isLastTraversableNode(s);) {
		if (isContainingBlock(s)) return s;
		if (isTopLayer(s)) return null;
		s = getParentNode(s);
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
	let s = n.assignedSlot || n.parentNode || isShadowRoot(n) && n.host || getDocumentElement(n);
	return isShadowRoot(s) ? s.host : s;
}
function getNearestOverflowAncestor(n) {
	let s = getParentNode(n);
	return isLastTraversableNode(s) ? n.ownerDocument ? n.ownerDocument.body : n.body : isHTMLElement$1(s) && isOverflowElement(s) ? s : getNearestOverflowAncestor(s);
}
function getOverflowAncestors(n, s, d) {
	s === void 0 && (s = []), d === void 0 && (d = !0);
	let C = getNearestOverflowAncestor(n), w = C === n.ownerDocument?.body, k = getWindow(C);
	if (w) {
		let n = getFrameElement(k);
		return s.concat(k, k.visualViewport || [], isOverflowElement(C) ? C : [], n && d ? getOverflowAncestors(n) : []);
	}
	return s.concat(C, getOverflowAncestors(C, [], d));
}
function getFrameElement(n) {
	return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function getCssDimensions(n) {
	let s = getComputedStyle$2(n), d = parseFloat(s.width) || 0, C = parseFloat(s.height) || 0, w = isHTMLElement$1(n), k = w ? n.offsetWidth : d, F = w ? n.offsetHeight : C, L = round(d) !== k || round(C) !== F;
	return L && (d = k, C = F), {
		width: d,
		height: C,
		$: L
	};
}
function unwrapElement(n) {
	return isElement(n) ? n : n.contextElement;
}
function getScale(n) {
	let s = unwrapElement(n);
	if (!isHTMLElement$1(s)) return createCoords(1);
	let d = s.getBoundingClientRect(), { width: C, height: w, $: k } = getCssDimensions(s), F = (k ? round(d.width) : d.width) / C, L = (k ? round(d.height) : d.height) / w;
	return (!F || !Number.isFinite(F)) && (F = 1), (!L || !Number.isFinite(L)) && (L = 1), {
		x: F,
		y: L
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(n) {
	let s = getWindow(n);
	return !isWebKit() || !s.visualViewport ? noOffsets : {
		x: s.visualViewport.offsetLeft,
		y: s.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(n, s, d) {
	return s === void 0 && (s = !1), !d || s && d !== getWindow(n) ? !1 : s;
}
function getBoundingClientRect(n, s, d, C) {
	s === void 0 && (s = !1), d === void 0 && (d = !1);
	let w = n.getBoundingClientRect(), k = unwrapElement(n), F = createCoords(1);
	s && (C ? isElement(C) && (F = getScale(C)) : F = getScale(n));
	let L = shouldAddVisualOffsets(k, d, C) ? getVisualOffsets(k) : createCoords(0), V = (w.left + L.x) / F.x, U = (w.top + L.y) / F.y, K = w.width / F.x, q = w.height / F.y;
	if (k) {
		let n = getWindow(k), s = C && isElement(C) ? getWindow(C) : C, d = n, w = getFrameElement(d);
		for (; w && C && s !== d;) {
			let n = getScale(w), s = w.getBoundingClientRect(), C = getComputedStyle$2(w), k = s.left + (w.clientLeft + parseFloat(C.paddingLeft)) * n.x, F = s.top + (w.clientTop + parseFloat(C.paddingTop)) * n.y;
			V *= n.x, U *= n.y, K *= n.x, q *= n.y, V += k, U += F, d = getWindow(w), w = getFrameElement(d);
		}
	}
	return rectToClientRect({
		width: K,
		height: q,
		x: V,
		y: U
	});
}
function getWindowScrollBarX(n, s) {
	let d = getNodeScroll(n).scrollLeft;
	return s ? s.left + d : getBoundingClientRect(getDocumentElement(n)).left + d;
}
function getHTMLOffset(n, s) {
	let d = n.getBoundingClientRect();
	return {
		x: d.left + s.scrollLeft - getWindowScrollBarX(n, d),
		y: d.top + s.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(n) {
	let { elements: s, rect: d, offsetParent: C, strategy: w } = n, k = w === "fixed", F = getDocumentElement(C), L = s ? isTopLayer(s.floating) : !1;
	if (C === F || L && k) return d;
	let V = {
		scrollLeft: 0,
		scrollTop: 0
	}, U = createCoords(1), K = createCoords(0), q = isHTMLElement$1(C);
	if ((q || !q && !k) && ((getNodeName(C) !== "body" || isOverflowElement(F)) && (V = getNodeScroll(C)), isHTMLElement$1(C))) {
		let n = getBoundingClientRect(C);
		U = getScale(C), K.x = n.x + C.clientLeft, K.y = n.y + C.clientTop;
	}
	let J = F && !q && !k ? getHTMLOffset(F, V) : createCoords(0);
	return {
		width: d.width * U.x,
		height: d.height * U.y,
		x: d.x * U.x - V.scrollLeft * U.x + K.x + J.x,
		y: d.y * U.y - V.scrollTop * U.y + K.y + J.y
	};
}
function getClientRects(n) {
	return Array.from(n.getClientRects());
}
function getDocumentRect(n) {
	let s = getDocumentElement(n), d = getNodeScroll(n), C = n.ownerDocument.body, w = max(s.scrollWidth, s.clientWidth, C.scrollWidth, C.clientWidth), k = max(s.scrollHeight, s.clientHeight, C.scrollHeight, C.clientHeight), F = -d.scrollLeft + getWindowScrollBarX(n), L = -d.scrollTop;
	return getComputedStyle$2(C).direction === "rtl" && (F += max(s.clientWidth, C.clientWidth) - w), {
		width: w,
		height: k,
		x: F,
		y: L
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(n, s) {
	let d = getWindow(n), C = getDocumentElement(n), w = d.visualViewport, k = C.clientWidth, F = C.clientHeight, L = 0, V = 0;
	if (w) {
		k = w.width, F = w.height;
		let n = isWebKit();
		(!n || n && s === "fixed") && (L = w.offsetLeft, V = w.offsetTop);
	}
	let U = getWindowScrollBarX(C);
	if (U <= 0) {
		let n = C.ownerDocument, s = n.body, d = getComputedStyle(s), w = n.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight) || 0, F = Math.abs(C.clientWidth - s.clientWidth - w);
		F <= SCROLLBAR_MAX && (k -= F);
	} else U <= SCROLLBAR_MAX && (k += U);
	return {
		width: k,
		height: F,
		x: L,
		y: V
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(n, s) {
	let d = getBoundingClientRect(n, !0, s === "fixed"), C = d.top + n.clientTop, w = d.left + n.clientLeft, k = isHTMLElement$1(n) ? getScale(n) : createCoords(1);
	return {
		width: n.clientWidth * k.x,
		height: n.clientHeight * k.y,
		x: w * k.x,
		y: C * k.y
	};
}
function getClientRectFromClippingAncestor(n, s, d) {
	let C;
	if (s === "viewport") C = getViewportRect(n, d);
	else if (s === "document") C = getDocumentRect(getDocumentElement(n));
	else if (isElement(s)) C = getInnerBoundingClientRect(s, d);
	else {
		let d = getVisualOffsets(n);
		C = {
			x: s.x - d.x,
			y: s.y - d.y,
			width: s.width,
			height: s.height
		};
	}
	return rectToClientRect(C);
}
function hasFixedPositionAncestor(n, s) {
	let d = getParentNode(n);
	return d === s || !isElement(d) || isLastTraversableNode(d) ? !1 : getComputedStyle$2(d).position === "fixed" || hasFixedPositionAncestor(d, s);
}
function getClippingElementAncestors(n, s) {
	let d = s.get(n);
	if (d) return d;
	let C = getOverflowAncestors(n, [], !1).filter((n) => isElement(n) && getNodeName(n) !== "body"), w = null, k = getComputedStyle$2(n).position === "fixed", F = k ? getParentNode(n) : n;
	for (; isElement(F) && !isLastTraversableNode(F);) {
		let s = getComputedStyle$2(F), d = isContainingBlock(F);
		!d && s.position === "fixed" && (w = null), (k ? !d && !w : !d && s.position === "static" && w && absoluteOrFixed.has(w.position) || isOverflowElement(F) && !d && hasFixedPositionAncestor(n, F)) ? C = C.filter((n) => n !== F) : w = s, F = getParentNode(F);
	}
	return s.set(n, C), C;
}
function getClippingRect(n) {
	let { element: s, boundary: d, rootBoundary: C, strategy: w } = n, k = [...d === "clippingAncestors" ? isTopLayer(s) ? [] : getClippingElementAncestors(s, this._c) : [].concat(d), C], F = k[0], L = k.reduce((n, d) => {
		let C = getClientRectFromClippingAncestor(s, d, w);
		return n.top = max(C.top, n.top), n.right = min(C.right, n.right), n.bottom = min(C.bottom, n.bottom), n.left = max(C.left, n.left), n;
	}, getClientRectFromClippingAncestor(s, F, w));
	return {
		width: L.right - L.left,
		height: L.bottom - L.top,
		x: L.left,
		y: L.top
	};
}
function getDimensions(n) {
	let { width: s, height: d } = getCssDimensions(n);
	return {
		width: s,
		height: d
	};
}
function getRectRelativeToOffsetParent(n, s, d) {
	let C = isHTMLElement$1(s), w = getDocumentElement(s), k = d === "fixed", F = getBoundingClientRect(n, !0, k, s), L = {
		scrollLeft: 0,
		scrollTop: 0
	}, V = createCoords(0);
	function U() {
		V.x = getWindowScrollBarX(w);
	}
	if (C || !C && !k) if ((getNodeName(s) !== "body" || isOverflowElement(w)) && (L = getNodeScroll(s)), C) {
		let n = getBoundingClientRect(s, !0, k, s);
		V.x = n.x + s.clientLeft, V.y = n.y + s.clientTop;
	} else w && U();
	k && !C && w && U();
	let K = w && !C && !k ? getHTMLOffset(w, L) : createCoords(0);
	return {
		x: F.left + L.scrollLeft - V.x - K.x,
		y: F.top + L.scrollTop - V.y - K.y,
		width: F.width,
		height: F.height
	};
}
function isStaticPositioned(n) {
	return getComputedStyle$2(n).position === "static";
}
function getTrueOffsetParent(n, s) {
	if (!isHTMLElement$1(n) || getComputedStyle$2(n).position === "fixed") return null;
	if (s) return s(n);
	let d = n.offsetParent;
	return getDocumentElement(n) === d && (d = d.ownerDocument.body), d;
}
function getOffsetParent(n, s) {
	let d = getWindow(n);
	if (isTopLayer(n)) return d;
	if (!isHTMLElement$1(n)) {
		let s = getParentNode(n);
		for (; s && !isLastTraversableNode(s);) {
			if (isElement(s) && !isStaticPositioned(s)) return s;
			s = getParentNode(s);
		}
		return d;
	}
	let C = getTrueOffsetParent(n, s);
	for (; C && isTableElement(C) && isStaticPositioned(C);) C = getTrueOffsetParent(C, s);
	return C && isLastTraversableNode(C) && isStaticPositioned(C) && !isContainingBlock(C) ? d : C || getContainingBlock(n) || d;
}
var getElementRects = async function(n) {
	let s = this.getOffsetParent || getOffsetParent, d = this.getDimensions, C = await d(n.floating);
	return {
		reference: getRectRelativeToOffsetParent(n.reference, await s(n.floating), n.strategy),
		floating: {
			x: 0,
			y: 0,
			width: C.width,
			height: C.height
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
function rectsAreEqual(n, s) {
	return n.x === s.x && n.y === s.y && n.width === s.width && n.height === s.height;
}
function observeMove(n, s) {
	let d = null, C, w = getDocumentElement(n);
	function k() {
		var n;
		clearTimeout(C), (n = d) == null || n.disconnect(), d = null;
	}
	function F(L, V) {
		L === void 0 && (L = !1), V === void 0 && (V = 1), k();
		let U = n.getBoundingClientRect(), { left: K, top: q, width: J, height: X } = U;
		if (L || s(), !J || !X) return;
		let $ = floor(q), Hk = floor(w.clientWidth - (K + J)), Uk = floor(w.clientHeight - (q + X)), Wk = floor(K), Gk = {
			rootMargin: -$ + "px " + -Hk + "px " + -Uk + "px " + -Wk + "px",
			threshold: max(0, min(1, V)) || 1
		}, Kk = !0;
		function qk(s) {
			let d = s[0].intersectionRatio;
			if (d !== V) {
				if (!Kk) return F();
				d ? F(!1, d) : C = setTimeout(() => {
					F(!1, 1e-7);
				}, 1e3);
			}
			d === 1 && !rectsAreEqual(U, n.getBoundingClientRect()) && F(), Kk = !1;
		}
		try {
			d = new IntersectionObserver(qk, {
				...Gk,
				root: w.ownerDocument
			});
		} catch {
			d = new IntersectionObserver(qk, Gk);
		}
		d.observe(n);
	}
	return F(!0), k;
}
function autoUpdate(n, s, d, C) {
	C === void 0 && (C = {});
	let { ancestorScroll: w = !0, ancestorResize: k = !0, elementResize: F = typeof ResizeObserver == "function", layoutShift: L = typeof IntersectionObserver == "function", animationFrame: V = !1 } = C, U = unwrapElement(n), K = w || k ? [...U ? getOverflowAncestors(U) : [], ...getOverflowAncestors(s)] : [];
	K.forEach((n) => {
		w && n.addEventListener("scroll", d, { passive: !0 }), k && n.addEventListener("resize", d);
	});
	let q = U && L ? observeMove(U, d) : null, J = -1, X = null;
	F && (X = new ResizeObserver((n) => {
		let [C] = n;
		C && C.target === U && X && (X.unobserve(s), cancelAnimationFrame(J), J = requestAnimationFrame(() => {
			var n;
			(n = X) == null || n.observe(s);
		})), d();
	}), U && !V && X.observe(U), X.observe(s));
	let $, Hk = V ? getBoundingClientRect(n) : null;
	V && Uk();
	function Uk() {
		let s = getBoundingClientRect(n);
		Hk && !rectsAreEqual(Hk, s) && d(), Hk = s, $ = requestAnimationFrame(Uk);
	}
	return d(), () => {
		var n;
		K.forEach((n) => {
			w && n.removeEventListener("scroll", d), k && n.removeEventListener("resize", d);
		}), q?.(), (n = X) == null || n.disconnect(), X = null, V && cancelAnimationFrame($);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (n, s, d) => {
	let C = /* @__PURE__ */ new Map(), w = {
		platform,
		...d
	}, k = {
		...w.platform,
		_c: C
	};
	return computePosition$1(n, s, {
		...w,
		platform: k
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(n, s) {
	if (n === s) return !0;
	if (typeof n != typeof s) return !1;
	if (typeof n == "function" && n.toString() === s.toString()) return !0;
	let d, C, w;
	if (n && s && typeof n == "object") {
		if (Array.isArray(n)) {
			if (d = n.length, d !== s.length) return !1;
			for (C = d; C-- !== 0;) if (!deepEqual(n[C], s[C])) return !1;
			return !0;
		}
		if (w = Object.keys(n), d = w.length, d !== Object.keys(s).length) return !1;
		for (C = d; C-- !== 0;) if (!{}.hasOwnProperty.call(s, w[C])) return !1;
		for (C = d; C-- !== 0;) {
			let d = w[C];
			if (!(d === "_owner" && n.$$typeof) && !deepEqual(n[d], s[d])) return !1;
		}
		return !0;
	}
	return n !== n && s !== s;
}
function getDPR(n) {
	return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(n, s) {
	let d = getDPR(n);
	return Math.round(s * d) / d;
}
function useLatestRef(s) {
	let d = React$1.useRef(s);
	return index(() => {
		d.current = s;
	}), d;
}
function useFloating(s) {
	s === void 0 && (s = {});
	let { placement: d = "bottom", strategy: C = "absolute", middleware: w = [], platform: k, elements: { reference: F, floating: L } = {}, transform: V = !0, whileElementsMounted: U, open: K } = s, [q, J] = React$1.useState({
		x: 0,
		y: 0,
		strategy: C,
		placement: d,
		middlewareData: {},
		isPositioned: !1
	}), [X, $] = React$1.useState(w);
	deepEqual(X, w) || $(w);
	let [Hk, Uk] = React$1.useState(null), [Wk, Gk] = React$1.useState(null), qk = React$1.useCallback((n) => {
		n !== Zk.current && (Zk.current = n, Uk(n));
	}, []), Jk = React$1.useCallback((n) => {
		n !== Qk.current && (Qk.current = n, Gk(n));
	}, []), Yk = F || Hk, Xk = L || Wk, Zk = React$1.useRef(null), Qk = React$1.useRef(null), $k = React$1.useRef(q), eA = U != null, tA = useLatestRef(U), nA = useLatestRef(k), rA = useLatestRef(K), iA = React$1.useCallback(() => {
		if (!Zk.current || !Qk.current) return;
		let n = {
			placement: d,
			strategy: C,
			middleware: X
		};
		nA.current && (n.platform = nA.current), computePosition(Zk.current, Qk.current, n).then((n) => {
			let s = {
				...n,
				isPositioned: rA.current !== !1
			};
			aA.current && !deepEqual($k.current, s) && ($k.current = s, ReactDOM$1.flushSync(() => {
				J(s);
			}));
		});
	}, [
		X,
		d,
		C,
		nA,
		rA
	]);
	index(() => {
		K === !1 && $k.current.isPositioned && ($k.current.isPositioned = !1, J((n) => ({
			...n,
			isPositioned: !1
		})));
	}, [K]);
	let aA = React$1.useRef(!1);
	index(() => (aA.current = !0, () => {
		aA.current = !1;
	}), []), index(() => {
		if (Yk && (Zk.current = Yk), Xk && (Qk.current = Xk), Yk && Xk) {
			if (tA.current) return tA.current(Yk, Xk, iA);
			iA();
		}
	}, [
		Yk,
		Xk,
		iA,
		tA,
		eA
	]);
	let oA = React$1.useMemo(() => ({
		reference: Zk,
		floating: Qk,
		setReference: qk,
		setFloating: Jk
	}), [qk, Jk]), sA = React$1.useMemo(() => ({
		reference: Yk,
		floating: Xk
	}), [Yk, Xk]), cA = React$1.useMemo(() => {
		let n = {
			position: C,
			left: 0,
			top: 0
		};
		if (!sA.floating) return n;
		let s = roundByDPR(sA.floating, q.x), d = roundByDPR(sA.floating, q.y);
		return V ? {
			...n,
			transform: "translate(" + s + "px, " + d + "px)",
			...getDPR(sA.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: C,
			left: s,
			top: d
		};
	}, [
		C,
		V,
		sA.floating,
		q.x,
		q.y
	]);
	return React$1.useMemo(() => ({
		...q,
		update: iA,
		refs: oA,
		elements: sA,
		floatingStyles: cA
	}), [
		q,
		iA,
		oA,
		sA,
		cA
	]);
}
var arrow$1$1 = (n) => {
	function s(n) {
		return {}.hasOwnProperty.call(n, "current");
	}
	return {
		name: "arrow",
		options: n,
		fn(d) {
			let { element: C, padding: w } = typeof n == "function" ? n(d) : n;
			return C && s(C) ? C.current == null ? {} : arrow$1({
				element: C.current,
				padding: w
			}).fn(d) : C ? arrow$1({
				element: C,
				padding: w
			}).fn(d) : {};
		}
	};
}, offset = (n, s) => ({
	...offset$1(n),
	options: [n, s]
}), shift = (n, s) => ({
	...shift$1(n),
	options: [n, s]
}), limitShift = (n, s) => ({
	...limitShift$1(n),
	options: [n, s]
}), flip = (n, s) => ({
	...flip$1(n),
	options: [n, s]
}), size = (n, s) => ({
	...size$1(n),
	options: [n, s]
}), hide = (n, s) => ({
	...hide$1(n),
	options: [n, s]
}), arrow = (n, s) => ({
	...arrow$1$1(n),
	options: [n, s]
}), NAME = "Arrow", Arrow$1 = React$1.forwardRef((n, s) => {
	let { children: d, width: C = 10, height: w = 5, ...k } = n;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...k,
		ref: s,
		width: C,
		height: w,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: n.asChild ? d : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME;
var Root$3 = Arrow$1, POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (s) => {
	let { __scopePopper: d, children: C } = s, [w, k] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: d,
		anchor: w,
		onAnchorChange: k,
		children: C
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME$1 = "PopperAnchor", PopperAnchor = React$1.forwardRef((s, d) => {
	let { __scopePopper: C, virtualRef: w, ...k } = s, F = usePopperContext(ANCHOR_NAME$1, C), L = React$1.useRef(null), V = useComposedRefs(d, L), U = React$1.useRef(null);
	return React$1.useEffect(() => {
		let n = U.current;
		U.current = w?.current || L.current, n !== U.current && F.onAnchorChange(U.current);
	}), w ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...k,
		ref: V
	});
});
PopperAnchor.displayName = ANCHOR_NAME$1;
var CONTENT_NAME$5 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$5), PopperContent = React$1.forwardRef((s, d) => {
	let { __scopePopper: C, side: w = "bottom", sideOffset: k = 0, align: F = "center", alignOffset: L = 0, arrowPadding: V = 0, avoidCollisions: U = !0, collisionBoundary: K = [], collisionPadding: q = 0, sticky: J = "partial", hideWhenDetached: X = !1, updatePositionStrategy: $ = "optimized", onPlaced: Hk, ...Uk } = s, Wk = usePopperContext(CONTENT_NAME$5, C), [Gk, Kk] = React$1.useState(null), qk = useComposedRefs(d, (n) => Kk(n)), [Jk, Yk] = React$1.useState(null), Zk = useSize(Jk), Qk = Zk?.width ?? 0, $k = Zk?.height ?? 0, eA = w + (F === "center" ? "" : "-" + F), tA = typeof q == "number" ? q : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...q
	}, nA = Array.isArray(K) ? K : [K], rA = nA.length > 0, iA = {
		padding: tA,
		boundary: nA.filter(isNotNull$2),
		altBoundary: rA
	}, { refs: aA, floatingStyles: oA, placement: sA, isPositioned: cA, middlewareData: lA } = useFloating({
		strategy: "fixed",
		placement: eA,
		whileElementsMounted: (...n) => autoUpdate(...n, { animationFrame: $ === "always" }),
		elements: { reference: Wk.anchor },
		middleware: [
			offset({
				mainAxis: k + $k,
				alignmentAxis: L
			}),
			U && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: J === "partial" ? limitShift() : void 0,
				...iA
			}),
			U && flip({ ...iA }),
			size({
				...iA,
				apply: ({ elements: n, rects: s, availableWidth: d, availableHeight: C }) => {
					let { width: w, height: k } = s.reference, F = n.floating.style;
					F.setProperty("--radix-popper-available-width", `${d}px`), F.setProperty("--radix-popper-available-height", `${C}px`), F.setProperty("--radix-popper-anchor-width", `${w}px`), F.setProperty("--radix-popper-anchor-height", `${k}px`);
				}
			}),
			Jk && arrow({
				element: Jk,
				padding: V
			}),
			transformOrigin({
				arrowWidth: Qk,
				arrowHeight: $k
			}),
			X && hide({
				strategy: "referenceHidden",
				...iA
			})
		]
	}), [uA, dA] = getSideAndAlignFromPlacement(sA), fA = useCallbackRef(Hk);
	useLayoutEffect2(() => {
		cA && fA?.();
	}, [cA, fA]);
	let pA = lA.arrow?.x, mA = lA.arrow?.y, hA = lA.arrow?.centerOffset !== 0, [gA, _A] = React$1.useState();
	return useLayoutEffect2(() => {
		Gk && _A(window.getComputedStyle(Gk).zIndex);
	}, [Gk]), /* @__PURE__ */ jsx("div", {
		ref: aA.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...oA,
			transform: cA ? oA.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: gA,
			"--radix-popper-transform-origin": [lA.transformOrigin?.x, lA.transformOrigin?.y].join(" "),
			...lA.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: s.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: C,
			placedSide: uA,
			onArrowChange: Yk,
			arrowX: pA,
			arrowY: mA,
			shouldHideArrow: hA,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": uA,
				"data-align": dA,
				...Uk,
				ref: qk,
				style: {
					...Uk.style,
					animation: cA ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME$5;
var ARROW_NAME$4 = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = React$1.forwardRef(function(n, s) {
	let { __scopePopper: d, ...C } = n, w = useContentContext(ARROW_NAME$4, d), k = OPPOSITE_SIDE[w.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: w.onArrowChange,
		style: {
			position: "absolute",
			left: w.arrowX,
			top: w.arrowY,
			[k]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[w.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[w.placedSide],
			visibility: w.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root$3, {
			...C,
			ref: s,
			style: {
				...C.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$4;
function isNotNull$2(n) {
	return n !== null;
}
var transformOrigin = (n) => ({
	name: "transformOrigin",
	options: n,
	fn(s) {
		let { placement: d, rects: C, middlewareData: w } = s, k = w.arrow?.centerOffset !== 0, F = k ? 0 : n.arrowWidth, L = k ? 0 : n.arrowHeight, [V, U] = getSideAndAlignFromPlacement(d), K = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[U], q = (w.arrow?.x ?? 0) + F / 2, J = (w.arrow?.y ?? 0) + L / 2, X = "", $ = "";
		return V === "bottom" ? (X = k ? K : `${q}px`, $ = `${-L}px`) : V === "top" ? (X = k ? K : `${q}px`, $ = `${C.floating.height + L}px`) : V === "right" ? (X = `${-L}px`, $ = k ? K : `${J}px`) : V === "left" && (X = `${C.floating.width + L}px`, $ = k ? K : `${J}px`), { data: {
			x: X,
			y: $
		} };
	}
});
function getSideAndAlignFromPlacement(n) {
	let [s, d = "center"] = n.split("-");
	return [s, d];
}
var Root2$3 = Popper, Anchor = PopperAnchor, Content$1 = PopperContent, Arrow = PopperArrow, ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$3 = "RovingFocusGroup", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME$3), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME$3, [createCollectionScope$1]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$3), RovingFocusGroup = React$1.forwardRef((n, s) => /* @__PURE__ */ jsx(Collection$1.Provider, {
	scope: n.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$1.Slot, {
		scope: n.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...n,
			ref: s
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$3;
var RovingFocusGroupImpl = React$1.forwardRef((s, d) => {
	let { __scopeRovingFocusGroup: C, orientation: w, loop: k = !1, dir: F, currentTabStopId: L, defaultCurrentTabStopId: V, onCurrentTabStopIdChange: U, onEntryFocus: K, preventScrollOnEntryFocus: q = !1, ...J } = s, X = React$1.useRef(null), $ = useComposedRefs(d, X), Hk = useDirection(F), [Uk, Wk] = useControllableState({
		prop: L,
		defaultProp: V ?? null,
		onChange: U,
		caller: GROUP_NAME$3
	}), [Gk, Kk] = React$1.useState(!1), qk = useCallbackRef(K), Jk = useCollection$1(C), Yk = React$1.useRef(!1), [Zk, Qk] = React$1.useState(0);
	return React$1.useEffect(() => {
		let n = X.current;
		if (n) return n.addEventListener(ENTRY_FOCUS, qk), () => n.removeEventListener(ENTRY_FOCUS, qk);
	}, [qk]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: C,
		orientation: w,
		dir: Hk,
		loop: k,
		currentTabStopId: Uk,
		onItemFocus: React$1.useCallback((n) => Wk(n), [Wk]),
		onItemShiftTab: React$1.useCallback(() => Kk(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => Qk((n) => n + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => Qk((n) => n - 1), []),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			tabIndex: Gk || Zk === 0 ? -1 : 0,
			"data-orientation": w,
			...J,
			ref: $,
			style: {
				outline: "none",
				...s.style
			},
			onMouseDown: composeEventHandlers(s.onMouseDown, () => {
				Yk.current = !0;
			}),
			onFocus: composeEventHandlers(s.onFocus, (n) => {
				let s = !Yk.current;
				if (n.target === n.currentTarget && s && !Gk) {
					let s = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (n.currentTarget.dispatchEvent(s), !s.defaultPrevented) {
						let n = Jk().filter((n) => n.focusable);
						focusFirst$1([
							n.find((n) => n.active),
							n.find((n) => n.id === Uk),
							...n
						].filter(Boolean).map((n) => n.ref.current), q);
					}
				}
				Yk.current = !1;
			}),
			onBlur: composeEventHandlers(s.onBlur, () => Kk(!1))
		})
	});
}), ITEM_NAME$3 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((s, d) => {
	let { __scopeRovingFocusGroup: C, focusable: w = !0, active: k = !1, tabStopId: F, children: L, ...V } = s, U = useId$1(), K = F || U, q = useRovingFocusContext(ITEM_NAME$3, C), J = q.currentTabStopId === K, X = useCollection$1(C), { onFocusableItemAdd: $, onFocusableItemRemove: Hk, currentTabStopId: Uk } = q;
	return React$1.useEffect(() => {
		if (w) return $(), () => Hk();
	}, [
		w,
		$,
		Hk
	]), /* @__PURE__ */ jsx(Collection$1.ItemSlot, {
		scope: C,
		id: K,
		focusable: w,
		active: k,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			tabIndex: J ? 0 : -1,
			"data-orientation": q.orientation,
			...V,
			ref: d,
			onMouseDown: composeEventHandlers(s.onMouseDown, (n) => {
				w ? q.onItemFocus(K) : n.preventDefault();
			}),
			onFocus: composeEventHandlers(s.onFocus, () => q.onItemFocus(K)),
			onKeyDown: composeEventHandlers(s.onKeyDown, (n) => {
				if (n.key === "Tab" && n.shiftKey) {
					q.onItemShiftTab();
					return;
				}
				if (n.target !== n.currentTarget) return;
				let s = getFocusIntent(n, q.orientation, q.dir);
				if (s !== void 0) {
					if (n.metaKey || n.ctrlKey || n.altKey || n.shiftKey) return;
					n.preventDefault();
					let d = X().filter((n) => n.focusable).map((n) => n.ref.current);
					if (s === "last") d.reverse();
					else if (s === "prev" || s === "next") {
						s === "prev" && d.reverse();
						let C = d.indexOf(n.currentTarget);
						d = q.loop ? wrapArray$1(d, C + 1) : d.slice(C + 1);
					}
					setTimeout(() => focusFirst$1(d));
				}
			}),
			children: typeof L == "function" ? L({
				isCurrentTabStop: J,
				hasTabStop: Uk != null
			}) : L
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
function getDirectionAwareKey(n, s) {
	return s === "rtl" ? n === "ArrowLeft" ? "ArrowRight" : n === "ArrowRight" ? "ArrowLeft" : n : n;
}
function getFocusIntent(n, s, d) {
	let C = getDirectionAwareKey(n.key, d);
	if (!(s === "vertical" && ["ArrowLeft", "ArrowRight"].includes(C)) && !(s === "horizontal" && ["ArrowUp", "ArrowDown"].includes(C))) return MAP_KEY_TO_FOCUS_INTENT[C];
}
function focusFirst$1(n, s = !1) {
	let d = document.activeElement;
	for (let C of n) if (C === d || (C.focus({ preventScroll: s }), document.activeElement !== d)) return;
}
function wrapArray$1(n, s) {
	return n.map((d, C) => n[(s + C) % n.length]);
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
]), usePopperScope$1 = createPopperScope(), useRovingFocusGroupScope$1 = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (s) => {
	let { __scopeMenu: d, open: C = !1, children: w, dir: k, onOpenChange: F, modal: L = !0 } = s, V = usePopperScope$1(d), [U, K] = React$1.useState(null), q = React$1.useRef(!1), J = useCallbackRef(F), X = useDirection(k);
	return React$1.useEffect(() => {
		let n = () => {
			q.current = !0, document.addEventListener("pointerdown", s, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", s, {
				capture: !0,
				once: !0
			});
		}, s = () => q.current = !1;
		return document.addEventListener("keydown", n, { capture: !0 }), () => {
			document.removeEventListener("keydown", n, { capture: !0 }), document.removeEventListener("pointerdown", s, { capture: !0 }), document.removeEventListener("pointermove", s, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$3, {
		...V,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: d,
			open: C,
			onOpenChange: J,
			content: U,
			onContentChange: K,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: d,
				onClose: React$1.useCallback(() => J(!1), [J]),
				isUsingKeyboardRef: q,
				dir: X,
				modal: L,
				children: w
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((n, s) => {
	let { __scopeMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$1(d),
		...C,
		ref: s
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$3 = "MenuPortal", [PortalProvider$1, usePortalContext$1] = createMenuContext(PORTAL_NAME$3, { forceMount: void 0 }), MenuPortal = (n) => {
	let { __scopeMenu: s, forceMount: d, children: C, container: w } = n, k = useMenuContext(PORTAL_NAME$3, s);
	return /* @__PURE__ */ jsx(PortalProvider$1, {
		scope: s,
		forceMount: d,
		children: /* @__PURE__ */ jsx(Presence, {
			present: d || k.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: w,
				children: C
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME$3;
var CONTENT_NAME$4 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$4), MenuContent = React$1.forwardRef((n, s) => {
	let d = usePortalContext$1(CONTENT_NAME$4, n.__scopeMenu), { forceMount: C = d.forceMount, ...w } = n, k = useMenuContext(CONTENT_NAME$4, n.__scopeMenu), F = useMenuRootContext(CONTENT_NAME$4, n.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection.Provider, {
		scope: n.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: C || k.open,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: n.__scopeMenu,
				children: F.modal ? /* @__PURE__ */ jsx(MenuRootContentModal, {
					...w,
					ref: s
				}) : /* @__PURE__ */ jsx(MenuRootContentNonModal, {
					...w,
					ref: s
				})
			})
		})
	});
}), MenuRootContentModal = React$1.forwardRef((s, d) => {
	let C = useMenuContext(CONTENT_NAME$4, s.__scopeMenu), w = React$1.useRef(null), k = useComposedRefs(d, w);
	return React$1.useEffect(() => {
		let n = w.current;
		if (n) return hideOthers(n);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...s,
		ref: k,
		trapFocus: C.open,
		disableOutsidePointerEvents: C.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(s.onFocusOutside, (n) => n.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => C.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((n, s) => {
	let d = useMenuContext(CONTENT_NAME$4, n.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...n,
		ref: s,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => d.onOpenChange(!1)
	});
}), Slot = /* @__PURE__ */ createSlot("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, loop: w = !1, trapFocus: k, onOpenAutoFocus: F, onCloseAutoFocus: L, disableOutsidePointerEvents: V, onEntryFocus: U, onEscapeKeyDown: K, onPointerDownOutside: q, onFocusOutside: J, onInteractOutside: X, onDismiss: $, disableOutsideScroll: Hk, ...Uk } = s, Wk = useMenuContext(CONTENT_NAME$4, C), Gk = useMenuRootContext(CONTENT_NAME$4, C), Kk = usePopperScope$1(C), qk = useRovingFocusGroupScope$1(C), Jk = useCollection(C), [Yk, Zk] = React$1.useState(null), Qk = React$1.useRef(null), $k = useComposedRefs(d, Qk, Wk.onContentChange), eA = React$1.useRef(0), tA = React$1.useRef(""), nA = React$1.useRef(0), rA = React$1.useRef(null), iA = React$1.useRef("right"), aA = React$1.useRef(0), oA = Hk ? Combination_default : React$1.Fragment, sA = Hk ? {
		as: Slot,
		allowPinchZoom: !0
	} : void 0, cA = (n) => {
		let s = tA.current + n, d = Jk().filter((n) => !n.disabled), C = document.activeElement, w = d.find((n) => n.ref.current === C)?.textValue, k = getNextMatch(d.map((n) => n.textValue), s, w), F = d.find((n) => n.textValue === k)?.ref.current;
		(function n(s) {
			tA.current = s, window.clearTimeout(eA.current), s !== "" && (eA.current = window.setTimeout(() => n(""), 1e3));
		})(s), F && setTimeout(() => F.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(eA.current), []), useFocusGuards();
	let lA = React$1.useCallback((n) => iA.current === rA.current?.side && isPointerInGraceArea(n, rA.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: C,
		searchRef: tA,
		onItemEnter: React$1.useCallback((n) => {
			lA(n) && n.preventDefault();
		}, [lA]),
		onItemLeave: React$1.useCallback((n) => {
			lA(n) || (Qk.current?.focus(), Zk(null));
		}, [lA]),
		onTriggerLeave: React$1.useCallback((n) => {
			lA(n) && n.preventDefault();
		}, [lA]),
		pointerGraceTimerRef: nA,
		onPointerGraceIntentChange: React$1.useCallback((n) => {
			rA.current = n;
		}, []),
		children: /* @__PURE__ */ jsx(oA, {
			...sA,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: k,
				onMountAutoFocus: composeEventHandlers(F, (n) => {
					n.preventDefault(), Qk.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: L,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: V,
					onEscapeKeyDown: K,
					onPointerDownOutside: q,
					onFocusOutside: J,
					onInteractOutside: X,
					onDismiss: $,
					children: /* @__PURE__ */ jsx(Root$2, {
						asChild: !0,
						...qk,
						dir: Gk.dir,
						orientation: "vertical",
						loop: w,
						currentTabStopId: Yk,
						onCurrentTabStopIdChange: Zk,
						onEntryFocus: composeEventHandlers(U, (n) => {
							Gk.isUsingKeyboardRef.current || n.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content$1, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(Wk.open),
							"data-radix-menu-content": "",
							dir: Gk.dir,
							...Kk,
							...Uk,
							ref: $k,
							style: {
								outline: "none",
								...Uk.style
							},
							onKeyDown: composeEventHandlers(Uk.onKeyDown, (n) => {
								let s = n.target.closest("[data-radix-menu-content]") === n.currentTarget, d = n.ctrlKey || n.altKey || n.metaKey, C = n.key.length === 1;
								s && (n.key === "Tab" && n.preventDefault(), !d && C && cA(n.key));
								let w = Qk.current;
								if (n.target !== w || !FIRST_LAST_KEYS.includes(n.key)) return;
								n.preventDefault();
								let k = Jk().filter((n) => !n.disabled).map((n) => n.ref.current);
								LAST_KEYS.includes(n.key) && k.reverse(), focusFirst(k);
							}),
							onBlur: composeEventHandlers(s.onBlur, (n) => {
								n.currentTarget.contains(n.target) || (window.clearTimeout(eA.current), tA.current = "");
							}),
							onPointerMove: composeEventHandlers(s.onPointerMove, whenMouse((n) => {
								let s = n.target, d = aA.current !== n.clientX;
								n.currentTarget.contains(s) && d && (iA.current = n.clientX > aA.current ? "right" : "left", aA.current = n.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$4;
var GROUP_NAME$2 = "MenuGroup", MenuGroup = React$1.forwardRef((n, s) => {
	let { __scopeMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "group",
		...C,
		ref: s
	});
});
MenuGroup.displayName = GROUP_NAME$2;
var LABEL_NAME$2 = "MenuLabel", MenuLabel = React$1.forwardRef((n, s) => {
	let { __scopeMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Primitive.div, {
		...C,
		ref: s
	});
});
MenuLabel.displayName = LABEL_NAME$2;
var ITEM_NAME$2 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem = React$1.forwardRef((s, d) => {
	let { disabled: C = !1, onSelect: w, ...k } = s, F = React$1.useRef(null), L = useMenuRootContext(ITEM_NAME$2, s.__scopeMenu), V = useMenuContentContext(ITEM_NAME$2, s.__scopeMenu), U = useComposedRefs(d, F), K = React$1.useRef(!1), q = () => {
		let n = F.current;
		if (!C && n) {
			let s = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			n.addEventListener(ITEM_SELECT, (n) => w?.(n), { once: !0 }), dispatchDiscreteCustomEvent(n, s), s.defaultPrevented ? K.current = !1 : L.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...k,
		ref: U,
		disabled: C,
		onClick: composeEventHandlers(s.onClick, q),
		onPointerDown: (n) => {
			s.onPointerDown?.(n), K.current = !0;
		},
		onPointerUp: composeEventHandlers(s.onPointerUp, (n) => {
			K.current || n.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(s.onKeyDown, (n) => {
			let s = V.searchRef.current !== "";
			C || s && n.key === " " || SELECTION_KEYS.includes(n.key) && (n.currentTarget.click(), n.preventDefault());
		})
	});
});
MenuItem.displayName = ITEM_NAME$2;
var MenuItemImpl = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, disabled: w = !1, textValue: k, ...F } = s, L = useMenuContentContext(ITEM_NAME$2, C), V = useRovingFocusGroupScope$1(C), U = React$1.useRef(null), K = useComposedRefs(d, U), [q, J] = React$1.useState(!1), [X, $] = React$1.useState("");
	return React$1.useEffect(() => {
		let n = U.current;
		n && $((n.textContent ?? "").trim());
	}, [F.children]), /* @__PURE__ */ jsx(Collection.ItemSlot, {
		scope: C,
		disabled: w,
		textValue: k ?? X,
		children: /* @__PURE__ */ jsx(Item, {
			asChild: !0,
			...V,
			focusable: !w,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "menuitem",
				"data-highlighted": q ? "" : void 0,
				"aria-disabled": w || void 0,
				"data-disabled": w ? "" : void 0,
				...F,
				ref: K,
				onPointerMove: composeEventHandlers(s.onPointerMove, whenMouse((n) => {
					w ? L.onItemLeave(n) : (L.onItemEnter(n), n.defaultPrevented || n.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(s.onPointerLeave, whenMouse((n) => L.onItemLeave(n))),
				onFocus: composeEventHandlers(s.onFocus, () => J(!0)),
				onBlur: composeEventHandlers(s.onBlur, () => J(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$2 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((n, s) => {
	let { checked: d = !1, onCheckedChange: C, ...w } = n;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: n.__scopeMenu,
		checked: d,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(d) ? "mixed" : d,
			...w,
			ref: s,
			"data-state": getCheckedState(d),
			onSelect: composeEventHandlers(w.onSelect, () => C?.(isIndeterminate(d) ? !0 : !d), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$2;
var RADIO_GROUP_NAME$2 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$2, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((n, s) => {
	let { value: d, onValueChange: C, ...w } = n, k = useCallbackRef(C);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: n.__scopeMenu,
		value: d,
		onValueChange: k,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...w,
			ref: s
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$2;
var RADIO_ITEM_NAME$2 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((n, s) => {
	let { value: d, ...C } = n, w = useRadioGroupContext(RADIO_ITEM_NAME$2, n.__scopeMenu), k = d === w.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: n.__scopeMenu,
		checked: k,
		children: /* @__PURE__ */ jsx(MenuItem, {
			role: "menuitemradio",
			"aria-checked": k,
			...C,
			ref: s,
			"data-state": getCheckedState(k),
			onSelect: composeEventHandlers(C.onSelect, () => w.onValueChange?.(d), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$2;
var ITEM_INDICATOR_NAME = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((n, s) => {
	let { __scopeMenu: d, forceMount: C, ...w } = n, k = useItemIndicatorContext(ITEM_INDICATOR_NAME, d);
	return /* @__PURE__ */ jsx(Presence, {
		present: C || isIndeterminate(k.checked) || k.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			...w,
			ref: s,
			"data-state": getCheckedState(k.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME$2 = "MenuSeparator", MenuSeparator = React$1.forwardRef((n, s) => {
	let { __scopeMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...C,
		ref: s
	});
});
MenuSeparator.displayName = SEPARATOR_NAME$2;
var ARROW_NAME$3 = "MenuArrow", MenuArrow = React$1.forwardRef((n, s) => {
	let { __scopeMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(d),
		...C,
		ref: s
	});
});
MenuArrow.displayName = ARROW_NAME$3;
var SUB_NAME$1 = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME$1), MenuSub = (s) => {
	let { __scopeMenu: d, children: C, open: w = !1, onOpenChange: k } = s, F = useMenuContext(SUB_NAME$1, d), L = usePopperScope$1(d), [V, U] = React$1.useState(null), [K, q] = React$1.useState(null), J = useCallbackRef(k);
	return React$1.useEffect(() => (F.open === !1 && J(!1), () => J(!1)), [F.open, J]), /* @__PURE__ */ jsx(Root2$3, {
		...L,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: d,
			open: w,
			onOpenChange: J,
			content: K,
			onContentChange: q,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: d,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: V,
				onTriggerChange: U,
				children: C
			})
		})
	});
};
MenuSub.displayName = SUB_NAME$1;
var SUB_TRIGGER_NAME$2 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((s, d) => {
	let C = useMenuContext(SUB_TRIGGER_NAME$2, s.__scopeMenu), w = useMenuRootContext(SUB_TRIGGER_NAME$2, s.__scopeMenu), k = useMenuSubContext(SUB_TRIGGER_NAME$2, s.__scopeMenu), F = useMenuContentContext(SUB_TRIGGER_NAME$2, s.__scopeMenu), L = React$1.useRef(null), { pointerGraceTimerRef: V, onPointerGraceIntentChange: U } = F, K = { __scopeMenu: s.__scopeMenu }, q = React$1.useCallback(() => {
		L.current && window.clearTimeout(L.current), L.current = null;
	}, []);
	return React$1.useEffect(() => q, [q]), React$1.useEffect(() => {
		let n = V.current;
		return () => {
			window.clearTimeout(n), U(null);
		};
	}, [V, U]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...K,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: k.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": C.open,
			"aria-controls": k.contentId,
			"data-state": getOpenState(C.open),
			...s,
			ref: composeRefs(d, k.onTriggerChange),
			onClick: (n) => {
				s.onClick?.(n), !(s.disabled || n.defaultPrevented) && (n.currentTarget.focus(), C.open || C.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(s.onPointerMove, whenMouse((n) => {
				F.onItemEnter(n), !n.defaultPrevented && !s.disabled && !C.open && !L.current && (F.onPointerGraceIntentChange(null), L.current = window.setTimeout(() => {
					C.onOpenChange(!0), q();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(s.onPointerLeave, whenMouse((n) => {
				q();
				let s = C.content?.getBoundingClientRect();
				if (s) {
					let d = C.content?.dataset.side, w = d === "right", k = w ? -5 : 5, L = s[w ? "left" : "right"], U = s[w ? "right" : "left"];
					F.onPointerGraceIntentChange({
						area: [
							{
								x: n.clientX + k,
								y: n.clientY
							},
							{
								x: L,
								y: s.top
							},
							{
								x: U,
								y: s.top
							},
							{
								x: U,
								y: s.bottom
							},
							{
								x: L,
								y: s.bottom
							}
						],
						side: d
					}), window.clearTimeout(V.current), V.current = window.setTimeout(() => F.onPointerGraceIntentChange(null), 300);
				} else {
					if (F.onTriggerLeave(n), n.defaultPrevented) return;
					F.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(s.onKeyDown, (n) => {
				let d = F.searchRef.current !== "";
				s.disabled || d && n.key === " " || SUB_OPEN_KEYS[w.dir].includes(n.key) && (C.onOpenChange(!0), C.content?.focus(), n.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$2;
var SUB_CONTENT_NAME$2 = "MenuSubContent", MenuSubContent = React$1.forwardRef((s, d) => {
	let C = usePortalContext$1(CONTENT_NAME$4, s.__scopeMenu), { forceMount: w = C.forceMount, ...k } = s, F = useMenuContext(CONTENT_NAME$4, s.__scopeMenu), L = useMenuRootContext(CONTENT_NAME$4, s.__scopeMenu), V = useMenuSubContext(SUB_CONTENT_NAME$2, s.__scopeMenu), U = React$1.useRef(null), K = useComposedRefs(d, U);
	return /* @__PURE__ */ jsx(Collection.Provider, {
		scope: s.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: w || F.open,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: s.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: V.contentId,
					"aria-labelledby": V.triggerId,
					...k,
					ref: K,
					align: "start",
					side: L.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (n) => {
						L.isUsingKeyboardRef.current && U.current?.focus(), n.preventDefault();
					},
					onCloseAutoFocus: (n) => n.preventDefault(),
					onFocusOutside: composeEventHandlers(s.onFocusOutside, (n) => {
						n.target !== V.trigger && F.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(s.onEscapeKeyDown, (n) => {
						L.onClose(), n.preventDefault();
					}),
					onKeyDown: composeEventHandlers(s.onKeyDown, (n) => {
						let s = n.currentTarget.contains(n.target), d = SUB_CLOSE_KEYS[L.dir].includes(n.key);
						s && d && (F.onOpenChange(!1), V.trigger?.focus(), n.preventDefault());
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
	let s = document.activeElement;
	for (let d of n) if (d === s || (d.focus(), document.activeElement !== s)) return;
}
function wrapArray(n, s) {
	return n.map((d, C) => n[(s + C) % n.length]);
}
function getNextMatch(n, s, d) {
	let C = s.length > 1 && Array.from(s).every((n) => n === s[0]) ? s[0] : s, w = d ? n.indexOf(d) : -1, k = wrapArray(n, Math.max(w, 0));
	C.length === 1 && (k = k.filter((n) => n !== d));
	let F = k.find((n) => n.toLowerCase().startsWith(C.toLowerCase()));
	return F === d ? void 0 : F;
}
function isPointInPolygon$1(n, s) {
	let { x: d, y: C } = n, w = !1;
	for (let n = 0, k = s.length - 1; n < s.length; k = n++) {
		let F = s[n], L = s[k], V = F.x, U = F.y, K = L.x, q = L.y;
		U > C != q > C && d < (K - V) * (C - U) / (q - U) + V && (w = !w);
	}
	return w;
}
function isPointerInGraceArea(n, s) {
	return s ? isPointInPolygon$1({
		x: n.clientX,
		y: n.clientY
	}, s) : !1;
}
function whenMouse(n) {
	return (s) => s.pointerType === "mouse" ? n(s) : void 0;
}
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$1 = MenuPortal, Content2$2 = MenuContent, Group = MenuGroup, Label = MenuLabel, Item2$2 = MenuItem, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator = MenuItemIndicator, Separator = MenuSeparator, Arrow2 = MenuArrow, Sub = MenuSub, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, CONTEXT_MENU_NAME = "ContextMenu", [createContextMenuContext, createContextMenuScope] = createContextScope(CONTEXT_MENU_NAME, [createMenuScope]), useMenuScope$1 = createMenuScope(), [ContextMenuProvider, useContextMenuContext] = createContextMenuContext(CONTEXT_MENU_NAME), ContextMenu = (s) => {
	let { __scopeContextMenu: d, children: C, onOpenChange: w, dir: k, modal: F = !0 } = s, [L, V] = React$1.useState(!1), U = useMenuScope$1(d), K = useCallbackRef(w), q = React$1.useCallback((n) => {
		V(n), K(n);
	}, [K]);
	return /* @__PURE__ */ jsx(ContextMenuProvider, {
		scope: d,
		open: L,
		onOpenChange: q,
		modal: F,
		children: /* @__PURE__ */ jsx(Root3, {
			...U,
			dir: k,
			open: L,
			onOpenChange: q,
			modal: F,
			children: C
		})
	});
};
ContextMenu.displayName = CONTEXT_MENU_NAME;
var TRIGGER_NAME$3 = "ContextMenuTrigger", ContextMenuTrigger = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: C, disabled: w = !1, ...k } = s, F = useContextMenuContext(TRIGGER_NAME$3, C), L = useMenuScope$1(C), V = React$1.useRef({
		x: 0,
		y: 0
	}), U = React$1.useRef({ getBoundingClientRect: () => DOMRect.fromRect({
		width: 0,
		height: 0,
		...V.current
	}) }), K = React$1.useRef(0), q = React$1.useCallback(() => window.clearTimeout(K.current), []), J = (n) => {
		V.current = {
			x: n.clientX,
			y: n.clientY
		}, F.onOpenChange(!0);
	};
	return React$1.useEffect(() => q, [q]), React$1.useEffect(() => void (w && q()), [w, q]), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Anchor2, {
		...L,
		virtualRef: U
	}), /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": F.open ? "open" : "closed",
		"data-disabled": w ? "" : void 0,
		...k,
		ref: d,
		style: {
			WebkitTouchCallout: "none",
			...s.style
		},
		onContextMenu: w ? s.onContextMenu : composeEventHandlers(s.onContextMenu, (n) => {
			q(), J(n), n.preventDefault();
		}),
		onPointerDown: w ? s.onPointerDown : composeEventHandlers(s.onPointerDown, whenTouchOrPen((n) => {
			q(), K.current = window.setTimeout(() => J(n), 700);
		})),
		onPointerMove: w ? s.onPointerMove : composeEventHandlers(s.onPointerMove, whenTouchOrPen(q)),
		onPointerCancel: w ? s.onPointerCancel : composeEventHandlers(s.onPointerCancel, whenTouchOrPen(q)),
		onPointerUp: w ? s.onPointerUp : composeEventHandlers(s.onPointerUp, whenTouchOrPen(q))
	})] });
});
ContextMenuTrigger.displayName = TRIGGER_NAME$3;
var PORTAL_NAME$2 = "ContextMenuPortal", ContextMenuPortal = (n) => {
	let { __scopeContextMenu: s, ...d } = n;
	return /* @__PURE__ */ jsx(Portal$1, {
		...useMenuScope$1(s),
		...d
	});
};
ContextMenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$3 = "ContextMenuContent", ContextMenuContent = React$1.forwardRef((s, d) => {
	let { __scopeContextMenu: C, ...w } = s, k = useContextMenuContext(CONTENT_NAME$3, C), F = useMenuScope$1(C), L = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$2, {
		...F,
		...w,
		ref: d,
		side: "right",
		sideOffset: 2,
		align: "start",
		onCloseAutoFocus: (n) => {
			s.onCloseAutoFocus?.(n), !n.defaultPrevented && L.current && n.preventDefault(), L.current = !1;
		},
		onInteractOutside: (n) => {
			s.onInteractOutside?.(n), !n.defaultPrevented && !k.modal && (L.current = !0);
		},
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
ContextMenuContent.displayName = CONTENT_NAME$3;
var GROUP_NAME$1 = "ContextMenuGroup", ContextMenuGroup = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuGroup.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "ContextMenuLabel", ContextMenuLabel = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Label, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuLabel.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "ContextMenuItem", ContextMenuItem = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Item2$2, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuItem.displayName = ITEM_NAME$1;
var CHECKBOX_ITEM_NAME$1 = "ContextMenuCheckboxItem", ContextMenuCheckboxItem = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "ContextMenuRadioGroup", ContextMenuRadioGroup = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "ContextMenuRadioItem", ContextMenuRadioItem = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var INDICATOR_NAME$1 = "ContextMenuItemIndicator", ContextMenuItemIndicator = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(ItemIndicator, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuItemIndicator.displayName = INDICATOR_NAME$1;
var SEPARATOR_NAME$1 = "ContextMenuSeparator", ContextMenuSeparator = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Separator, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuSeparator.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$2 = "ContextMenuArrow", ContextMenuArrow = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuArrow.displayName = ARROW_NAME$2;
var SUB_NAME = "ContextMenuSub", ContextMenuSub = (n) => {
	let { __scopeContextMenu: s, children: d, onOpenChange: C, open: w, defaultOpen: k } = n, F = useMenuScope$1(s), [L, V] = useControllableState({
		prop: w,
		defaultProp: k ?? !1,
		onChange: C,
		caller: SUB_NAME
	});
	return /* @__PURE__ */ jsx(Sub, {
		...F,
		open: L,
		onOpenChange: V,
		children: d
	});
};
ContextMenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "ContextMenuSubTrigger", ContextMenuSubTrigger = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope$1(d),
		...C,
		ref: s
	});
});
ContextMenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "ContextMenuSubContent", ContextMenuSubContent = React$1.forwardRef((n, s) => {
	let { __scopeContextMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope$1(d),
		...C,
		ref: s,
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
	return (s) => s.pointerType === "mouse" ? void 0 : n(s);
}
var Root2$2 = ContextMenu, Trigger$2 = ContextMenuTrigger, Portal2$1 = ContextMenuPortal, Content2$1 = ContextMenuContent, Item2$1 = ContextMenuItem, Separator2$1 = ContextMenuSeparator, Sub2$1 = ContextMenuSub, SubTrigger2$1 = ContextMenuSubTrigger, SubContent2$1 = ContextMenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu = (s) => {
	let { __scopeDropdownMenu: d, children: C, dir: w, open: k, defaultOpen: F, onOpenChange: L, modal: V = !0 } = s, U = useMenuScope(d), K = React$1.useRef(null), [q, J] = useControllableState({
		prop: k,
		defaultProp: F ?? !1,
		onChange: L,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: d,
		triggerId: useId$1(),
		triggerRef: K,
		contentId: useId$1(),
		open: q,
		onOpenChange: J,
		onOpenToggle: React$1.useCallback(() => J((n) => !n), [J]),
		modal: V,
		children: /* @__PURE__ */ jsx(Root3, {
			...U,
			open: q,
			onOpenChange: J,
			dir: w,
			modal: V,
			children: C
		})
	});
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$2 = "DropdownMenuTrigger", DropdownMenuTrigger = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, disabled: C = !1, ...w } = n, k = useDropdownMenuContext(TRIGGER_NAME$2, d);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(d),
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			id: k.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": k.open,
			"aria-controls": k.open ? k.contentId : void 0,
			"data-state": k.open ? "open" : "closed",
			"data-disabled": C ? "" : void 0,
			disabled: C,
			...w,
			ref: composeRefs(s, k.triggerRef),
			onPointerDown: composeEventHandlers(n.onPointerDown, (n) => {
				!C && n.button === 0 && n.ctrlKey === !1 && (k.onOpenToggle(), k.open || n.preventDefault());
			}),
			onKeyDown: composeEventHandlers(n.onKeyDown, (n) => {
				C || (["Enter", " "].includes(n.key) && k.onOpenToggle(), n.key === "ArrowDown" && k.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(n.key) && n.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger.displayName = TRIGGER_NAME$2;
var PORTAL_NAME$1 = "DropdownMenuPortal", DropdownMenuPortal = (n) => {
	let { __scopeDropdownMenu: s, ...d } = n;
	return /* @__PURE__ */ jsx(Portal$1, {
		...useMenuScope(s),
		...d
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$2 = "DropdownMenuContent", DropdownMenuContent = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s, k = useDropdownMenuContext(CONTENT_NAME$2, C), F = useMenuScope(C), L = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$2, {
		id: k.contentId,
		"aria-labelledby": k.triggerId,
		...F,
		...w,
		ref: d,
		onCloseAutoFocus: composeEventHandlers(s.onCloseAutoFocus, (n) => {
			L.current || k.triggerRef.current?.focus(), L.current = !1, n.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(s.onInteractOutside, (n) => {
			let s = n.detail.originalEvent, d = s.button === 0 && s.ctrlKey === !0, C = s.button === 2 || d;
			(!k.modal || C) && (L.current = !0);
		}),
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
DropdownMenuContent.displayName = CONTENT_NAME$2;
var GROUP_NAME = "DropdownMenuGroup", DropdownMenuGroup = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel", DropdownMenuLabel = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Label, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem", DropdownMenuItem = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Item2$2, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(ItemIndicator, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator", DropdownMenuSeparator = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Separator, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME$1 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$1;
var DropdownMenuSub = (n) => {
	let { __scopeDropdownMenu: s, children: d, open: C, onOpenChange: w, defaultOpen: k } = n, F = useMenuScope(s), [L, V] = useControllableState({
		prop: C,
		defaultProp: k ?? !1,
		onChange: w,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ jsx(Sub, {
		...F,
		open: L,
		onOpenChange: V,
		children: d
	});
}, SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(d),
		...C,
		ref: s
	});
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent = React$1.forwardRef((n, s) => {
	let { __scopeDropdownMenu: d, ...C } = n;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(d),
		...C,
		ref: s,
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
var Root2$1 = DropdownMenu, Trigger$1 = DropdownMenuTrigger, Portal2 = DropdownMenuPortal, Content2 = DropdownMenuContent, Group2 = DropdownMenuGroup, Label2 = DropdownMenuLabel, Item2 = DropdownMenuItem, CheckboxItem2 = DropdownMenuCheckboxItem, RadioGroup2 = DropdownMenuRadioGroup, RadioItem2 = DropdownMenuRadioItem, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator, Sub2 = DropdownMenuSub, SubTrigger2 = DropdownMenuSubTrigger, SubContent2 = DropdownMenuSubContent;
function clamp$2(n, [s, d]) {
	return Math.min(d, Math.max(s, n));
}
function useStateMachine(s, d) {
	return React$1.useReducer((n, s) => d[n][s] ?? n, s);
}
var SCROLL_AREA_NAME = "ScrollArea", [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME), [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME), ScrollArea = React$1.forwardRef((s, d) => {
	let { __scopeScrollArea: C, type: w = "hover", dir: k, scrollHideDelay: F = 600, ...L } = s, [V, U] = React$1.useState(null), [K, q] = React$1.useState(null), [J, X] = React$1.useState(null), [$, Hk] = React$1.useState(null), [Uk, Wk] = React$1.useState(null), [Gk, Kk] = React$1.useState(0), [qk, Jk] = React$1.useState(0), [Yk, Zk] = React$1.useState(!1), [Qk, $k] = React$1.useState(!1), eA = useComposedRefs(d, (n) => U(n)), tA = useDirection(k);
	return /* @__PURE__ */ jsx(ScrollAreaProvider, {
		scope: C,
		type: w,
		dir: tA,
		scrollHideDelay: F,
		scrollArea: V,
		viewport: K,
		onViewportChange: q,
		content: J,
		onContentChange: X,
		scrollbarX: $,
		onScrollbarXChange: Hk,
		scrollbarXEnabled: Yk,
		onScrollbarXEnabledChange: Zk,
		scrollbarY: Uk,
		onScrollbarYChange: Wk,
		scrollbarYEnabled: Qk,
		onScrollbarYEnabledChange: $k,
		onCornerWidthChange: Kk,
		onCornerHeightChange: Jk,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			dir: tA,
			...L,
			ref: eA,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": Gk + "px",
				"--radix-scroll-area-corner-height": qk + "px",
				...s.style
			}
		})
	});
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport", ScrollAreaViewport = React$1.forwardRef((s, d) => {
	let { __scopeScrollArea: C, children: w, nonce: k, ...F } = s, L = useScrollAreaContext(VIEWPORT_NAME, C), V = useComposedRefs(d, React$1.useRef(null), L.onViewportChange);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: k
	}), /* @__PURE__ */ jsx(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...F,
		ref: V,
		style: {
			overflowX: L.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: L.scrollbarYEnabled ? "scroll" : "hidden",
			...s.style
		},
		children: /* @__PURE__ */ jsx("div", {
			ref: L.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: w
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar", ScrollAreaScrollbar = React$1.forwardRef((s, d) => {
	let { forceMount: C, ...w } = s, k = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), { onScrollbarXEnabledChange: F, onScrollbarYEnabledChange: L } = k, V = s.orientation === "horizontal";
	return React$1.useEffect(() => (V ? F(!0) : L(!0), () => {
		V ? F(!1) : L(!1);
	}), [
		V,
		F,
		L
	]), k.type === "hover" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarHover, {
		...w,
		ref: d,
		forceMount: C
	}) : k.type === "scroll" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarScroll, {
		...w,
		ref: d,
		forceMount: C
	}) : k.type === "auto" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
		...w,
		ref: d,
		forceMount: C
	}) : k.type === "always" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
		...w,
		ref: d
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React$1.forwardRef((s, d) => {
	let { forceMount: C, ...w } = s, k = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), [F, L] = React$1.useState(!1);
	return React$1.useEffect(() => {
		let n = k.scrollArea, s = 0;
		if (n) {
			let d = () => {
				window.clearTimeout(s), L(!0);
			}, C = () => {
				s = window.setTimeout(() => L(!1), k.scrollHideDelay);
			};
			return n.addEventListener("pointerenter", d), n.addEventListener("pointerleave", C), () => {
				window.clearTimeout(s), n.removeEventListener("pointerenter", d), n.removeEventListener("pointerleave", C);
			};
		}
	}, [k.scrollArea, k.scrollHideDelay]), /* @__PURE__ */ jsx(Presence, {
		present: C || F,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
			"data-state": F ? "visible" : "hidden",
			...w,
			ref: d
		})
	});
}), ScrollAreaScrollbarScroll = React$1.forwardRef((s, d) => {
	let { forceMount: C, ...w } = s, k = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), F = s.orientation === "horizontal", L = useDebounceCallback(() => U("SCROLL_END"), 100), [V, U] = useStateMachine("hidden", {
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
		if (V === "idle") {
			let n = window.setTimeout(() => U("HIDE"), k.scrollHideDelay);
			return () => window.clearTimeout(n);
		}
	}, [
		V,
		k.scrollHideDelay,
		U
	]), React$1.useEffect(() => {
		let n = k.viewport, s = F ? "scrollLeft" : "scrollTop";
		if (n) {
			let d = n[s], C = () => {
				let C = n[s];
				d !== C && (U("SCROLL"), L()), d = C;
			};
			return n.addEventListener("scroll", C), () => n.removeEventListener("scroll", C);
		}
	}, [
		k.viewport,
		F,
		U,
		L
	]), /* @__PURE__ */ jsx(Presence, {
		present: C || V !== "hidden",
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": V === "hidden" ? "hidden" : "visible",
			...w,
			ref: d,
			onPointerEnter: composeEventHandlers(s.onPointerEnter, () => U("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(s.onPointerLeave, () => U("POINTER_LEAVE"))
		})
	});
}), ScrollAreaScrollbarAuto = React$1.forwardRef((s, d) => {
	let C = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), { forceMount: w, ...k } = s, [F, L] = React$1.useState(!1), V = s.orientation === "horizontal", U = useDebounceCallback(() => {
		if (C.viewport) {
			let n = C.viewport.offsetWidth < C.viewport.scrollWidth, s = C.viewport.offsetHeight < C.viewport.scrollHeight;
			L(V ? n : s);
		}
	}, 10);
	return useResizeObserver(C.viewport, U), useResizeObserver(C.content, U), /* @__PURE__ */ jsx(Presence, {
		present: w || F,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": F ? "visible" : "hidden",
			...k,
			ref: d
		})
	});
}), ScrollAreaScrollbarVisible = React$1.forwardRef((s, d) => {
	let { orientation: C = "vertical", ...w } = s, k = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), F = React$1.useRef(null), L = React$1.useRef(0), [V, U] = React$1.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), K = getThumbRatio(V.viewport, V.content), q = {
		...w,
		sizes: V,
		onSizesChange: U,
		hasThumb: K > 0 && K < 1,
		onThumbChange: (n) => F.current = n,
		onThumbPointerUp: () => L.current = 0,
		onThumbPointerDown: (n) => L.current = n
	};
	function J(n, s) {
		return getScrollPositionFromPointer(n, L.current, V, s);
	}
	return C === "horizontal" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarX, {
		...q,
		ref: d,
		onThumbPositionChange: () => {
			if (k.viewport && F.current) {
				let n = k.viewport.scrollLeft, s = getThumbOffsetFromScroll(n, V, k.dir);
				F.current.style.transform = `translate3d(${s}px, 0, 0)`;
			}
		},
		onWheelScroll: (n) => {
			k.viewport && (k.viewport.scrollLeft = n);
		},
		onDragScroll: (n) => {
			k.viewport && (k.viewport.scrollLeft = J(n, k.dir));
		}
	}) : C === "vertical" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarY, {
		...q,
		ref: d,
		onThumbPositionChange: () => {
			if (k.viewport && F.current) {
				let n = k.viewport.scrollTop, s = getThumbOffsetFromScroll(n, V);
				F.current.style.transform = `translate3d(0, ${s}px, 0)`;
			}
		},
		onWheelScroll: (n) => {
			k.viewport && (k.viewport.scrollTop = n);
		},
		onDragScroll: (n) => {
			k.viewport && (k.viewport.scrollTop = J(n));
		}
	}) : null;
}), ScrollAreaScrollbarX = React$1.forwardRef((s, d) => {
	let { sizes: C, onSizesChange: w, ...k } = s, F = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), [L, V] = React$1.useState(), U = React$1.useRef(null), K = useComposedRefs(d, U, F.onScrollbarXChange);
	return React$1.useEffect(() => {
		U.current && V(getComputedStyle(U.current));
	}, [U]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...k,
		ref: K,
		sizes: C,
		style: {
			bottom: 0,
			left: F.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: F.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": getThumbSize(C) + "px",
			...s.style
		},
		onThumbPointerDown: (n) => s.onThumbPointerDown(n.x),
		onDragScroll: (n) => s.onDragScroll(n.x),
		onWheelScroll: (n, d) => {
			if (F.viewport) {
				let C = F.viewport.scrollLeft + n.deltaX;
				s.onWheelScroll(C), isScrollingWithinScrollbarBounds(C, d) && n.preventDefault();
			}
		},
		onResize: () => {
			U.current && F.viewport && L && w({
				content: F.viewport.scrollWidth,
				viewport: F.viewport.offsetWidth,
				scrollbar: {
					size: U.current.clientWidth,
					paddingStart: toInt(L.paddingLeft),
					paddingEnd: toInt(L.paddingRight)
				}
			});
		}
	});
}), ScrollAreaScrollbarY = React$1.forwardRef((s, d) => {
	let { sizes: C, onSizesChange: w, ...k } = s, F = useScrollAreaContext(SCROLLBAR_NAME, s.__scopeScrollArea), [L, V] = React$1.useState(), U = React$1.useRef(null), K = useComposedRefs(d, U, F.onScrollbarYChange);
	return React$1.useEffect(() => {
		U.current && V(getComputedStyle(U.current));
	}, [U]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...k,
		ref: K,
		sizes: C,
		style: {
			top: 0,
			right: F.dir === "ltr" ? 0 : void 0,
			left: F.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": getThumbSize(C) + "px",
			...s.style
		},
		onThumbPointerDown: (n) => s.onThumbPointerDown(n.y),
		onDragScroll: (n) => s.onDragScroll(n.y),
		onWheelScroll: (n, d) => {
			if (F.viewport) {
				let C = F.viewport.scrollTop + n.deltaY;
				s.onWheelScroll(C), isScrollingWithinScrollbarBounds(C, d) && n.preventDefault();
			}
		},
		onResize: () => {
			U.current && F.viewport && L && w({
				content: F.viewport.scrollHeight,
				viewport: F.viewport.offsetHeight,
				scrollbar: {
					size: U.current.clientHeight,
					paddingStart: toInt(L.paddingTop),
					paddingEnd: toInt(L.paddingBottom)
				}
			});
		}
	});
}), [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME), ScrollAreaScrollbarImpl = React$1.forwardRef((s, d) => {
	let { __scopeScrollArea: C, sizes: w, hasThumb: k, onThumbChange: F, onThumbPointerUp: L, onThumbPointerDown: V, onThumbPositionChange: U, onDragScroll: K, onWheelScroll: q, onResize: J, ...X } = s, $ = useScrollAreaContext(SCROLLBAR_NAME, C), [Hk, Uk] = React$1.useState(null), Wk = useComposedRefs(d, (n) => Uk(n)), Gk = React$1.useRef(null), Kk = React$1.useRef(""), qk = $.viewport, Jk = w.content - w.viewport, Yk = useCallbackRef(q), Zk = useCallbackRef(U), Qk = useDebounceCallback(J, 10);
	function $k(n) {
		Gk.current && K({
			x: n.clientX - Gk.current.left,
			y: n.clientY - Gk.current.top
		});
	}
	return React$1.useEffect(() => {
		let n = (n) => {
			let s = n.target;
			Hk?.contains(s) && Yk(n, Jk);
		};
		return document.addEventListener("wheel", n, { passive: !1 }), () => document.removeEventListener("wheel", n, { passive: !1 });
	}, [
		qk,
		Hk,
		Jk,
		Yk
	]), React$1.useEffect(Zk, [w, Zk]), useResizeObserver(Hk, Qk), useResizeObserver($.content, Qk), /* @__PURE__ */ jsx(ScrollbarProvider, {
		scope: C,
		scrollbar: Hk,
		hasThumb: k,
		onThumbChange: useCallbackRef(F),
		onThumbPointerUp: useCallbackRef(L),
		onThumbPositionChange: Zk,
		onThumbPointerDown: useCallbackRef(V),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			...X,
			ref: Wk,
			style: {
				position: "absolute",
				...X.style
			},
			onPointerDown: composeEventHandlers(s.onPointerDown, (n) => {
				n.button === 0 && (n.target.setPointerCapture(n.pointerId), Gk.current = Hk.getBoundingClientRect(), Kk.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", $.viewport && ($.viewport.style.scrollBehavior = "auto"), $k(n));
			}),
			onPointerMove: composeEventHandlers(s.onPointerMove, $k),
			onPointerUp: composeEventHandlers(s.onPointerUp, (n) => {
				let s = n.target;
				s.hasPointerCapture(n.pointerId) && s.releasePointerCapture(n.pointerId), document.body.style.webkitUserSelect = Kk.current, $.viewport && ($.viewport.style.scrollBehavior = ""), Gk.current = null;
			})
		})
	});
}), THUMB_NAME$1 = "ScrollAreaThumb", ScrollAreaThumb = React$1.forwardRef((n, s) => {
	let { forceMount: d, ...C } = n, w = useScrollbarContext(THUMB_NAME$1, n.__scopeScrollArea);
	return /* @__PURE__ */ jsx(Presence, {
		present: d || w.hasThumb,
		children: /* @__PURE__ */ jsx(ScrollAreaThumbImpl, {
			ref: s,
			...C
		})
	});
}), ScrollAreaThumbImpl = React$1.forwardRef((s, d) => {
	let { __scopeScrollArea: C, style: w, ...k } = s, F = useScrollAreaContext(THUMB_NAME$1, C), L = useScrollbarContext(THUMB_NAME$1, C), { onThumbPositionChange: V } = L, U = useComposedRefs(d, (n) => L.onThumbChange(n)), K = React$1.useRef(void 0), q = useDebounceCallback(() => {
		K.current &&= (K.current(), void 0);
	}, 100);
	return React$1.useEffect(() => {
		let n = F.viewport;
		if (n) {
			let s = () => {
				q(), K.current || (K.current = addUnlinkedScrollListener(n, V), V());
			};
			return V(), n.addEventListener("scroll", s), () => n.removeEventListener("scroll", s);
		}
	}, [
		F.viewport,
		q,
		V
	]), /* @__PURE__ */ jsx(Primitive.div, {
		"data-state": L.hasThumb ? "visible" : "hidden",
		...k,
		ref: U,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...w
		},
		onPointerDownCapture: composeEventHandlers(s.onPointerDownCapture, (n) => {
			let s = n.target.getBoundingClientRect(), d = n.clientX - s.left, C = n.clientY - s.top;
			L.onThumbPointerDown({
				x: d,
				y: C
			});
		}),
		onPointerUp: composeEventHandlers(s.onPointerUp, L.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME$1;
var CORNER_NAME = "ScrollAreaCorner", ScrollAreaCorner = React$1.forwardRef((n, s) => {
	let d = useScrollAreaContext(CORNER_NAME, n.__scopeScrollArea), C = !!(d.scrollbarX && d.scrollbarY);
	return d.type !== "scroll" && C ? /* @__PURE__ */ jsx(ScrollAreaCornerImpl, {
		...n,
		ref: s
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React$1.forwardRef((s, d) => {
	let { __scopeScrollArea: C, ...w } = s, k = useScrollAreaContext(CORNER_NAME, C), [F, L] = React$1.useState(0), [V, U] = React$1.useState(0), K = !!(F && V);
	return useResizeObserver(k.scrollbarX, () => {
		let n = k.scrollbarX?.offsetHeight || 0;
		k.onCornerHeightChange(n), U(n);
	}), useResizeObserver(k.scrollbarY, () => {
		let n = k.scrollbarY?.offsetWidth || 0;
		k.onCornerWidthChange(n), L(n);
	}), K ? /* @__PURE__ */ jsx(Primitive.div, {
		...w,
		ref: d,
		style: {
			width: F,
			height: V,
			position: "absolute",
			right: k.dir === "ltr" ? 0 : void 0,
			left: k.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...s.style
		}
	}) : null;
});
function toInt(n) {
	return n ? parseInt(n, 10) : 0;
}
function getThumbRatio(n, s) {
	let d = n / s;
	return isNaN(d) ? 0 : d;
}
function getThumbSize(n) {
	let s = getThumbRatio(n.viewport, n.content), d = n.scrollbar.paddingStart + n.scrollbar.paddingEnd, C = (n.scrollbar.size - d) * s;
	return Math.max(C, 18);
}
function getScrollPositionFromPointer(n, s, d, C = "ltr") {
	let w = getThumbSize(d), k = w / 2, F = s || k, L = w - F, V = d.scrollbar.paddingStart + F, U = d.scrollbar.size - d.scrollbar.paddingEnd - L, K = d.content - d.viewport, q = C === "ltr" ? [0, K] : [K * -1, 0];
	return linearScale([V, U], q)(n);
}
function getThumbOffsetFromScroll(n, s, d = "ltr") {
	let C = getThumbSize(s), w = s.scrollbar.paddingStart + s.scrollbar.paddingEnd, k = s.scrollbar.size - w, F = s.content - s.viewport, L = k - C, V = clamp$2(n, d === "ltr" ? [0, F] : [F * -1, 0]);
	return linearScale([0, F], [0, L])(V);
}
function linearScale(n, s) {
	return (d) => {
		if (n[0] === n[1] || s[0] === s[1]) return s[0];
		let C = (s[1] - s[0]) / (n[1] - n[0]);
		return s[0] + C * (d - n[0]);
	};
}
function isScrollingWithinScrollbarBounds(n, s) {
	return n > 0 && n < s;
}
var addUnlinkedScrollListener = (n, s = () => {}) => {
	let d = {
		left: n.scrollLeft,
		top: n.scrollTop
	}, C = 0;
	return (function w() {
		let k = {
			left: n.scrollLeft,
			top: n.scrollTop
		}, F = d.left !== k.left, L = d.top !== k.top;
		(F || L) && s(), d = k, C = window.requestAnimationFrame(w);
	})(), () => window.cancelAnimationFrame(C);
};
function useDebounceCallback(s, d) {
	let C = useCallbackRef(s), w = React$1.useRef(0);
	return React$1.useEffect(() => () => window.clearTimeout(w.current), []), React$1.useCallback(() => {
		window.clearTimeout(w.current), w.current = window.setTimeout(C, d);
	}, [C, d]);
}
function useResizeObserver(n, s) {
	let d = useCallbackRef(s);
	useLayoutEffect2(() => {
		let s = 0;
		if (n) {
			let C = new ResizeObserver(() => {
				cancelAnimationFrame(s), s = window.requestAnimationFrame(d);
			});
			return C.observe(n), () => {
				window.cancelAnimationFrame(s), C.unobserve(n);
			};
		}
	}, [n, d]);
}
var Root$1 = ScrollArea, Viewport = ScrollAreaViewport, Scrollbar = ScrollAreaScrollbar, Thumb$1 = ScrollAreaThumb, Corner = ScrollAreaCorner, SWITCH_NAME = "Switch", [createSwitchContext, createSwitchScope] = createContextScope(SWITCH_NAME), [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME), Switch = React$1.forwardRef((s, d) => {
	let { __scopeSwitch: C, name: w, checked: k, defaultChecked: F, required: L, disabled: V, value: U = "on", onCheckedChange: K, form: q, ...J } = s, [X, $] = React$1.useState(null), Hk = useComposedRefs(d, (n) => $(n)), Uk = React$1.useRef(!1), Wk = X ? q || !!X.closest("form") : !0, [Gk, Kk] = useControllableState({
		prop: k,
		defaultProp: F ?? !1,
		onChange: K,
		caller: SWITCH_NAME
	});
	return /* @__PURE__ */ jsxs(SwitchProvider, {
		scope: C,
		checked: Gk,
		disabled: V,
		children: [/* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "switch",
			"aria-checked": Gk,
			"aria-required": L,
			"data-state": getState(Gk),
			"data-disabled": V ? "" : void 0,
			disabled: V,
			value: U,
			...J,
			ref: Hk,
			onClick: composeEventHandlers(s.onClick, (n) => {
				Kk((n) => !n), Wk && (Uk.current = n.isPropagationStopped(), Uk.current || n.stopPropagation());
			})
		}), Wk && /* @__PURE__ */ jsx(SwitchBubbleInput, {
			control: X,
			bubbles: !Uk.current,
			name: w,
			value: U,
			checked: Gk,
			required: L,
			disabled: V,
			form: q,
			style: { transform: "translateX(-100%)" }
		})]
	});
});
Switch.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb", SwitchThumb = React$1.forwardRef((n, s) => {
	let { __scopeSwitch: d, ...C } = n, w = useSwitchContext(THUMB_NAME, d);
	return /* @__PURE__ */ jsx(Primitive.span, {
		"data-state": getState(w.checked),
		"data-disabled": w.disabled ? "" : void 0,
		...C,
		ref: s
	});
});
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput", SwitchBubbleInput = React$1.forwardRef(({ __scopeSwitch: s, control: d, checked: C, bubbles: w = !0, ...k }, F) => {
	let L = React$1.useRef(null), V = useComposedRefs(L, F), U = usePrevious(C), K = useSize(d);
	return React$1.useEffect(() => {
		let n = L.current;
		if (!n) return;
		let s = window.HTMLInputElement.prototype, d = Object.getOwnPropertyDescriptor(s, "checked").set;
		if (U !== C && d) {
			let s = new Event("click", { bubbles: w });
			d.call(n, C), n.dispatchEvent(s);
		}
	}, [
		U,
		C,
		w
	]), /* @__PURE__ */ jsx("input", {
		type: "checkbox",
		"aria-hidden": !0,
		defaultChecked: C,
		...k,
		tabIndex: -1,
		ref: V,
		style: {
			...k.style,
			...K,
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
var Root = Switch, Thumb = SwitchThumb, TABS_NAME = "Tabs", [createTabsContext, createTabsScope] = createContextScope(TABS_NAME, [createRovingFocusGroupScope]), useRovingFocusGroupScope = createRovingFocusGroupScope(), [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME), Tabs = React$1.forwardRef((n, s) => {
	let { __scopeTabs: d, value: C, onValueChange: w, defaultValue: k, orientation: F = "horizontal", dir: L, activationMode: V = "automatic", ...U } = n, K = useDirection(L), [q, J] = useControllableState({
		prop: C,
		onChange: w,
		defaultProp: k ?? "",
		caller: TABS_NAME
	});
	return /* @__PURE__ */ jsx(TabsProvider, {
		scope: d,
		baseId: useId$1(),
		value: q,
		onValueChange: J,
		orientation: F,
		dir: K,
		activationMode: V,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			dir: K,
			"data-orientation": F,
			...U,
			ref: s
		})
	});
});
Tabs.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList", TabsList = React$1.forwardRef((n, s) => {
	let { __scopeTabs: d, loop: C = !0, ...w } = n, k = useTabsContext(TAB_LIST_NAME, d);
	return /* @__PURE__ */ jsx(Root$2, {
		asChild: !0,
		...useRovingFocusGroupScope(d),
		orientation: k.orientation,
		dir: k.dir,
		loop: C,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			role: "tablist",
			"aria-orientation": k.orientation,
			...w,
			ref: s
		})
	});
});
TabsList.displayName = TAB_LIST_NAME;
var TRIGGER_NAME$1 = "TabsTrigger", TabsTrigger = React$1.forwardRef((n, s) => {
	let { __scopeTabs: d, value: C, disabled: w = !1, ...k } = n, F = useTabsContext(TRIGGER_NAME$1, d), L = useRovingFocusGroupScope(d), V = makeTriggerId(F.baseId, C), U = makeContentId(F.baseId, C), K = C === F.value;
	return /* @__PURE__ */ jsx(Item, {
		asChild: !0,
		...L,
		focusable: !w,
		active: K,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			role: "tab",
			"aria-selected": K,
			"aria-controls": U,
			"data-state": K ? "active" : "inactive",
			"data-disabled": w ? "" : void 0,
			disabled: w,
			id: V,
			...k,
			ref: s,
			onMouseDown: composeEventHandlers(n.onMouseDown, (n) => {
				!w && n.button === 0 && n.ctrlKey === !1 ? F.onValueChange(C) : n.preventDefault();
			}),
			onKeyDown: composeEventHandlers(n.onKeyDown, (n) => {
				[" ", "Enter"].includes(n.key) && F.onValueChange(C);
			}),
			onFocus: composeEventHandlers(n.onFocus, () => {
				let n = F.activationMode !== "manual";
				!K && !w && n && F.onValueChange(C);
			})
		})
	});
});
TabsTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "TabsContent", TabsContent = React$1.forwardRef((s, d) => {
	let { __scopeTabs: C, value: w, forceMount: k, children: F, ...L } = s, V = useTabsContext(CONTENT_NAME$1, C), U = makeTriggerId(V.baseId, w), K = makeContentId(V.baseId, w), q = w === V.value, J = React$1.useRef(q);
	return React$1.useEffect(() => {
		let n = requestAnimationFrame(() => J.current = !1);
		return () => cancelAnimationFrame(n);
	}, []), /* @__PURE__ */ jsx(Presence, {
		present: k || q,
		children: ({ present: n }) => /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": q ? "active" : "inactive",
			"data-orientation": V.orientation,
			role: "tabpanel",
			"aria-labelledby": U,
			hidden: !n,
			id: K,
			tabIndex: 0,
			...L,
			ref: d,
			style: {
				...s.style,
				animationDuration: J.current ? "0s" : void 0
			},
			children: n && F
		})
	});
});
TabsContent.displayName = CONTENT_NAME$1;
function makeTriggerId(n, s) {
	return `${n}-trigger-${s}`;
}
function makeContentId(n, s) {
	return `${n}-content-${s}`;
}
var Root2 = Tabs, List = TabsList, Trigger = TabsTrigger, Content = TabsContent, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider = (s) => {
	let { __scopeTooltip: d, delayDuration: C = DEFAULT_DELAY_DURATION, skipDelayDuration: w = 300, disableHoverableContent: k = !1, children: F } = s, L = React$1.useRef(!0), V = React$1.useRef(!1), U = React$1.useRef(0);
	return React$1.useEffect(() => {
		let n = U.current;
		return () => window.clearTimeout(n);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: d,
		isOpenDelayedRef: L,
		delayDuration: C,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(U.current), L.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(U.current), U.current = window.setTimeout(() => L.current = !0, w);
		}, [w]),
		isPointerInTransitRef: V,
		onPointerInTransitChange: React$1.useCallback((n) => {
			V.current = n;
		}, []),
		disableHoverableContent: k,
		children: F
	});
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip = (s) => {
	let { __scopeTooltip: d, children: C, open: w, defaultOpen: k, onOpenChange: F, disableHoverableContent: L, delayDuration: V } = s, U = useTooltipProviderContext(TOOLTIP_NAME, s.__scopeTooltip), K = usePopperScope(d), [q, J] = React$1.useState(null), X = useId$1(), $ = React$1.useRef(0), Hk = L ?? U.disableHoverableContent, Uk = V ?? U.delayDuration, Wk = React$1.useRef(!1), [Gk, Kk] = useControllableState({
		prop: w,
		defaultProp: k ?? !1,
		onChange: (n) => {
			n ? (U.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : U.onClose(), F?.(n);
		},
		caller: TOOLTIP_NAME
	}), qk = React$1.useMemo(() => Gk ? Wk.current ? "delayed-open" : "instant-open" : "closed", [Gk]), Jk = React$1.useCallback(() => {
		window.clearTimeout($.current), $.current = 0, Wk.current = !1, Kk(!0);
	}, [Kk]), Yk = React$1.useCallback(() => {
		window.clearTimeout($.current), $.current = 0, Kk(!1);
	}, [Kk]), Zk = React$1.useCallback(() => {
		window.clearTimeout($.current), $.current = window.setTimeout(() => {
			Wk.current = !0, Kk(!0), $.current = 0;
		}, Uk);
	}, [Uk, Kk]);
	return React$1.useEffect(() => () => {
		$.current &&= (window.clearTimeout($.current), 0);
	}, []), /* @__PURE__ */ jsx(Root2$3, {
		...K,
		children: /* @__PURE__ */ jsx(TooltipContextProvider, {
			scope: d,
			contentId: X,
			open: Gk,
			stateAttribute: qk,
			trigger: q,
			onTriggerChange: J,
			onTriggerEnter: React$1.useCallback(() => {
				U.isOpenDelayedRef.current ? Zk() : Jk();
			}, [
				U.isOpenDelayedRef,
				Zk,
				Jk
			]),
			onTriggerLeave: React$1.useCallback(() => {
				Hk ? Yk() : (window.clearTimeout($.current), $.current = 0);
			}, [Yk, Hk]),
			onOpen: Jk,
			onClose: Yk,
			disableHoverableContent: Hk,
			children: C
		})
	});
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger = React$1.forwardRef((s, d) => {
	let { __scopeTooltip: C, ...w } = s, k = useTooltipContext(TRIGGER_NAME, C), F = useTooltipProviderContext(TRIGGER_NAME, C), L = usePopperScope(C), V = useComposedRefs(d, React$1.useRef(null), k.onTriggerChange), U = React$1.useRef(!1), K = React$1.useRef(!1), q = React$1.useCallback(() => U.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", q), [q]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...L,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": k.open ? k.contentId : void 0,
			"data-state": k.stateAttribute,
			...w,
			ref: V,
			onPointerMove: composeEventHandlers(s.onPointerMove, (n) => {
				n.pointerType !== "touch" && !K.current && !F.isPointerInTransitRef.current && (k.onTriggerEnter(), K.current = !0);
			}),
			onPointerLeave: composeEventHandlers(s.onPointerLeave, () => {
				k.onTriggerLeave(), K.current = !1;
			}),
			onPointerDown: composeEventHandlers(s.onPointerDown, () => {
				k.open && k.onClose(), U.current = !0, document.addEventListener("pointerup", q, { once: !0 });
			}),
			onFocus: composeEventHandlers(s.onFocus, () => {
				U.current || k.onOpen();
			}),
			onBlur: composeEventHandlers(s.onBlur, k.onClose),
			onClick: composeEventHandlers(s.onClick, k.onClose)
		})
	});
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (n) => {
	let { __scopeTooltip: s, forceMount: d, children: C, container: w } = n, k = useTooltipContext(PORTAL_NAME, s);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: s,
		forceMount: d,
		children: /* @__PURE__ */ jsx(Presence, {
			present: d || k.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: w,
				children: C
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent = React$1.forwardRef((n, s) => {
	let d = usePortalContext(CONTENT_NAME, n.__scopeTooltip), { forceMount: C = d.forceMount, side: w = "top", ...k } = n, F = useTooltipContext(CONTENT_NAME, n.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: C || F.open,
		children: F.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: w,
			...k,
			ref: s
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: w,
			...k,
			ref: s
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((s, d) => {
	let C = useTooltipContext(CONTENT_NAME, s.__scopeTooltip), w = useTooltipProviderContext(CONTENT_NAME, s.__scopeTooltip), k = React$1.useRef(null), F = useComposedRefs(d, k), [L, V] = React$1.useState(null), { trigger: U, onClose: K } = C, q = k.current, { onPointerInTransitChange: J } = w, X = React$1.useCallback(() => {
		V(null), J(!1);
	}, [J]), $ = React$1.useCallback((n, s) => {
		let d = n.currentTarget, C = {
			x: n.clientX,
			y: n.clientY
		}, w = getPaddedExitPoints(C, getExitSideFromRect(C, d.getBoundingClientRect())), k = getPointsFromRect(s.getBoundingClientRect());
		V(getHull([...w, ...k])), J(!0);
	}, [J]);
	return React$1.useEffect(() => () => X(), [X]), React$1.useEffect(() => {
		if (U && q) {
			let n = (n) => $(n, q), s = (n) => $(n, U);
			return U.addEventListener("pointerleave", n), q.addEventListener("pointerleave", s), () => {
				U.removeEventListener("pointerleave", n), q.removeEventListener("pointerleave", s);
			};
		}
	}, [
		U,
		q,
		$,
		X
	]), React$1.useEffect(() => {
		if (L) {
			let n = (n) => {
				let s = n.target, d = {
					x: n.clientX,
					y: n.clientY
				}, C = U?.contains(s) || q?.contains(s), w = !isPointInPolygon(d, L);
				C ? X() : w && (X(), K());
			};
			return document.addEventListener("pointermove", n), () => document.removeEventListener("pointermove", n);
		}
	}, [
		U,
		q,
		L,
		K,
		X
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		...s,
		ref: F
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((s, d) => {
	let { __scopeTooltip: C, children: w, "aria-label": k, onEscapeKeyDown: F, onPointerDownOutside: L, ...V } = s, U = useTooltipContext(CONTENT_NAME, C), K = usePopperScope(C), { onClose: q } = U;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, q), () => document.removeEventListener(TOOLTIP_OPEN, q)), [q]), React$1.useEffect(() => {
		if (U.trigger) {
			let n = (n) => {
				n.target?.contains(U.trigger) && q();
			};
			return window.addEventListener("scroll", n, { capture: !0 }), () => window.removeEventListener("scroll", n, { capture: !0 });
		}
	}, [U.trigger, q]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: F,
		onPointerDownOutside: L,
		onFocusOutside: (n) => n.preventDefault(),
		onDismiss: q,
		children: /* @__PURE__ */ jsxs(Content$1, {
			"data-state": U.stateAttribute,
			...K,
			...V,
			ref: d,
			style: {
				...V.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: w }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: C,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root$5, {
					id: U.contentId,
					role: "tooltip",
					children: k || w
				})
			})]
		})
	});
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((n, s) => {
	let { __scopeTooltip: d, ...C } = n, w = usePopperScope(d);
	return useVisuallyHiddenContentContext(ARROW_NAME, d).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...w,
		...C,
		ref: s
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(n, s) {
	let d = Math.abs(s.top - n.y), C = Math.abs(s.bottom - n.y), w = Math.abs(s.right - n.x), k = Math.abs(s.left - n.x);
	switch (Math.min(d, C, w, k)) {
		case k: return "left";
		case w: return "right";
		case d: return "top";
		case C: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(n, s, d = 5) {
	let C = [];
	switch (s) {
		case "top":
			C.push({
				x: n.x - d,
				y: n.y + d
			}, {
				x: n.x + d,
				y: n.y + d
			});
			break;
		case "bottom":
			C.push({
				x: n.x - d,
				y: n.y - d
			}, {
				x: n.x + d,
				y: n.y - d
			});
			break;
		case "left":
			C.push({
				x: n.x + d,
				y: n.y - d
			}, {
				x: n.x + d,
				y: n.y + d
			});
			break;
		case "right":
			C.push({
				x: n.x - d,
				y: n.y - d
			}, {
				x: n.x - d,
				y: n.y + d
			});
			break;
	}
	return C;
}
function getPointsFromRect(n) {
	let { top: s, right: d, bottom: C, left: w } = n;
	return [
		{
			x: w,
			y: s
		},
		{
			x: d,
			y: s
		},
		{
			x: d,
			y: C
		},
		{
			x: w,
			y: C
		}
	];
}
function isPointInPolygon(n, s) {
	let { x: d, y: C } = n, w = !1;
	for (let n = 0, k = s.length - 1; n < s.length; k = n++) {
		let F = s[n], L = s[k], V = F.x, U = F.y, K = L.x, q = L.y;
		U > C != q > C && d < (K - V) * (C - U) / (q - U) + V && (w = !w);
	}
	return w;
}
function getHull(n) {
	let s = n.slice();
	return s.sort((n, s) => n.x < s.x ? -1 : n.x > s.x ? 1 : n.y < s.y ? -1 : n.y > s.y ? 1 : 0), getHullPresorted(s);
}
function getHullPresorted(n) {
	if (n.length <= 1) return n.slice();
	let s = [];
	for (let d = 0; d < n.length; d++) {
		let C = n[d];
		for (; s.length >= 2;) {
			let n = s[s.length - 1], d = s[s.length - 2];
			if ((n.x - d.x) * (C.y - d.y) >= (n.y - d.y) * (C.x - d.x)) s.pop();
			else break;
		}
		s.push(C);
	}
	s.pop();
	let d = [];
	for (let s = n.length - 1; s >= 0; s--) {
		let C = n[s];
		for (; d.length >= 2;) {
			let n = d[d.length - 1], s = d[d.length - 2];
			if ((n.x - s.x) * (C.y - s.y) >= (n.y - s.y) * (C.x - s.x)) d.pop();
			else break;
		}
		d.push(C);
	}
	return d.pop(), s.length === 1 && d.length === 1 && s[0].x === d[0].x && s[0].y === d[0].y ? s : s.concat(d);
}
var Provider = TooltipProvider, require_classnames = /* @__PURE__ */ __commonJSMin(((n, s) => {
	(function() {
		var n = {}.hasOwnProperty;
		function d() {
			for (var n = "", s = 0; s < arguments.length; s++) {
				var d = arguments[s];
				d && (n = w(n, C(d)));
			}
			return n;
		}
		function C(s) {
			if (typeof s == "string" || typeof s == "number") return s;
			if (typeof s != "object") return "";
			if (Array.isArray(s)) return d.apply(null, s);
			if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]")) return s.toString();
			var C = "";
			for (var k in s) n.call(s, k) && s[k] && (C = w(C, k));
			return C;
		}
		function w(n, s) {
			return s ? n ? n + " " + s : n + s : n;
		}
		s !== void 0 && s.exports ? (d.default = d, s.exports = d) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return d;
		}) : window.classNames = d;
	})();
})), o$5 = { asChild: { type: "boolean" } }, t$5 = {
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
}, r$15 = [
	"1",
	"2",
	"3",
	"4"
], s$1 = {
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
		values: r$15,
		default: "3",
		responsive: !0
	},
	width: t$5.width,
	minWidth: t$5.minWidth,
	maxWidth: {
		...t$5.maxWidth,
		default: "600px"
	},
	...e$4
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
} }, s$9 = { color: {
	type: "enum",
	values: o$9,
	default: ""
} }, o$4 = { highContrast: {
	type: "boolean",
	className: "rt-high-contrast",
	default: void 0
} }, r$13 = { trim: {
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
} }, r$14 = { wrap: {
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
} }, m$5 = [
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
		values: m$5,
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
	...r$13,
	...e$9,
	...r$14,
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
function e$12(n, s) {
	return Object.prototype.hasOwnProperty.call(n, s);
}
function i$8(n) {
	return typeof n == "object" && Object.keys(n).some((n) => e$11.includes(n));
}
function R$3({ className: n, customProperties: s, ...d }) {
	return [g$2({
		allowArbitraryValues: !0,
		className: n,
		...d
	}), m$4({
		customProperties: s,
		...d
	})];
}
function g$2({ allowArbitraryValues: n, value: s, className: d, propValues: C, parseValue: w = (n) => n }) {
	let k = [];
	if (s) {
		if (typeof s == "string" && C.includes(s)) return l$5(d, s, w);
		if (i$8(s)) {
			let F = s;
			for (let s in F) {
				if (!e$12(F, s) || !e$11.includes(s)) continue;
				let L = F[s];
				if (L !== void 0) {
					if (C.includes(L)) {
						let n = l$5(d, L, w), C = s === "initial" ? n : `${s}:${n}`;
						k.push(C);
					} else if (n) {
						let n = s === "initial" ? d : `${s}:${d}`;
						k.push(n);
					}
				}
			}
			return k.join(" ");
		}
		if (n) return d;
	}
}
function l$5(n, s, d) {
	let C = n ? "-" : "", w = d(s), k = w?.startsWith("-");
	return `${k ? "-" : ""}${n}${C}${k ? w?.substring(1) : w}`;
}
function m$4({ customProperties: n, value: s, propValues: d, parseValue: C = (n) => n }) {
	let w = {};
	if (!(!s || typeof s == "string" && d.includes(s))) {
		if (typeof s == "string" && (w = Object.fromEntries(n.map((n) => [n, s]))), i$8(s)) {
			let C = s;
			for (let s in C) {
				if (!e$12(C, s) || !e$11.includes(s)) continue;
				let k = C[s];
				if (!d.includes(k)) for (let d of n) w = {
					[s === "initial" ? d : `${d}-${s}`]: k,
					...w
				};
			}
		}
		for (let n in w) {
			let s = w[n];
			s !== void 0 && (w[n] = C(s));
		}
		return w;
	}
}
function l$1(...n) {
	let s = {};
	for (let d of n) d && (s = {
		...s,
		...d
	});
	return Object.keys(s).length ? s : void 0;
}
var import_classnames$20 = /* @__PURE__ */ __toESM(require_classnames());
function N$1(...n) {
	return Object.assign({}, ...n);
}
function v(n, ...s) {
	let d, C, w = { ...n }, k = N$1(...s);
	for (let n in k) {
		let s = w[n], F = k[n];
		if (F.default !== void 0 && s === void 0 && (s = F.default), F.type === "enum" && ![F.default, ...F.values].includes(s) && !i$8(s) && (s = F.default), w[n] = s, "className" in F && F.className) {
			delete w[n];
			let k = "responsive" in F;
			if (!s || i$8(s) && !k) continue;
			if (i$8(s) && (F.default !== void 0 && s.initial === void 0 && (s.initial = F.default), F.type === "enum" && ([F.default, ...F.values].includes(s.initial) || (s.initial = F.default))), F.type === "enum") {
				let n = g$2({
					allowArbitraryValues: !1,
					value: s,
					className: F.className,
					propValues: F.values,
					parseValue: F.parseValue
				});
				d = (0, import_classnames$20.default)(d, n);
				continue;
			}
			if (F.type === "string" || F.type === "enum | string") {
				let n = F.type === "string" ? [] : F.values, [w, k] = R$3({
					className: F.className,
					customProperties: F.customProperties,
					propValues: n,
					parseValue: F.parseValue,
					value: s
				});
				C = l$1(C, k), d = (0, import_classnames$20.default)(d, w);
				continue;
			}
			if (F.type === "boolean" && s) {
				d = (0, import_classnames$20.default)(d, F.className);
				continue;
			}
		}
	}
	return w.className = (0, import_classnames$20.default)(d, n.className), w.style = l$1(C, n.style), w;
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
}, import_classnames$19 = /* @__PURE__ */ __toESM(require_classnames()), r$5 = React$1.forwardRef((s, d) => {
	let { children: C, className: w, asChild: k, as: F = "h1", color: L, ...V } = v(s, n$10, r$1);
	return React$1.createElement(Slot$2, {
		"data-accent-color": L,
		...V,
		ref: d,
		className: (0, import_classnames$19.default)("rt-Heading", w)
	}, k ? C : React$1.createElement(F, null, C));
});
r$5.displayName = "Heading";
var m$3 = [
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
		values: m$3,
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
	...r$13,
	...e$9,
	...r$14,
	...r$2,
	...o$4
}, import_classnames$18 = /* @__PURE__ */ __toESM(require_classnames()), p$2 = React$1.forwardRef((s, d) => {
	let { children: C, className: w, asChild: k, as: F = "span", color: L, ...V } = v(s, n$9, r$1);
	return React$1.createElement(Slot$2, {
		"data-accent-color": L,
		...V,
		ref: d,
		className: (0, import_classnames$18.default)("rt-Text", w)
	}, k ? C : React$1.createElement(F, null, C));
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
} }, p$13 = [
	"inherit",
	"light",
	"dark"
], t$7 = ["solid", "translucent"], n$8 = [
	"90%",
	"95%",
	"100%",
	"105%",
	"110%"
], s$11 = {
	...o$5,
	hasBackground: {
		type: "boolean",
		default: !0
	},
	appearance: {
		type: "enum",
		values: p$13,
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
}, import_classnames$17 = /* @__PURE__ */ __toESM(require_classnames()), d$4 = () => {}, P$1 = React$1.createContext(void 0);
function H$1() {
	let s = React$1.useContext(P$1);
	if (s === void 0) throw Error("`useThemeContext` must be used within a `Theme`");
	return s;
}
var R = React$1.forwardRef((s, d) => React$1.useContext(P$1) === void 0 ? React$1.createElement(Provider, { delayDuration: 200 }, React$1.createElement(Provider$1, { dir: "ltr" }, React$1.createElement(I$2, {
	...s,
	ref: d
}))) : React$1.createElement(A$1, {
	...s,
	ref: d
}));
R.displayName = "Theme";
var I$2 = React$1.forwardRef((s, d) => {
	let { appearance: C = s$11.appearance.default, accentColor: w = s$11.accentColor.default, grayColor: k = s$11.grayColor.default, panelBackground: F = s$11.panelBackground.default, radius: L = s$11.radius.default, scaling: V = s$11.scaling.default, hasBackground: U = s$11.hasBackground.default, ...K } = s, [q, J] = React$1.useState(C);
	React$1.useEffect(() => J(C), [C]);
	let [X, $] = React$1.useState(w);
	React$1.useEffect(() => $(w), [w]);
	let [Hk, Uk] = React$1.useState(k);
	React$1.useEffect(() => Uk(k), [k]);
	let [Wk, Gk] = React$1.useState(F);
	React$1.useEffect(() => Gk(F), [F]);
	let [Kk, qk] = React$1.useState(L);
	React$1.useEffect(() => qk(L), [L]);
	let [Jk, Yk] = React$1.useState(V);
	return React$1.useEffect(() => Yk(V), [V]), React$1.createElement(A$1, {
		...K,
		ref: d,
		isRoot: !0,
		hasBackground: U,
		appearance: q,
		accentColor: X,
		grayColor: Hk,
		panelBackground: Wk,
		radius: Kk,
		scaling: Jk,
		onAppearanceChange: J,
		onAccentColorChange: $,
		onGrayColorChange: Uk,
		onPanelBackgroundChange: Gk,
		onRadiusChange: qk,
		onScalingChange: Yk
	});
});
I$2.displayName = "ThemeRoot";
var A$1 = React$1.forwardRef((s, d) => {
	let C = React$1.useContext(P$1), { asChild: w, isRoot: k, hasBackground: F, appearance: L = C?.appearance ?? s$11.appearance.default, accentColor: V = C?.accentColor ?? s$11.accentColor.default, grayColor: U = C?.resolvedGrayColor ?? s$11.grayColor.default, panelBackground: K = C?.panelBackground ?? s$11.panelBackground.default, radius: q = C?.radius ?? s$11.radius.default, scaling: J = C?.scaling ?? s$11.scaling.default, onAppearanceChange: X = d$4, onAccentColorChange: $ = d$4, onGrayColorChange: Hk = d$4, onPanelBackgroundChange: Uk = d$4, onRadiusChange: Wk = d$4, onScalingChange: Gk = d$4, ...Kk } = s, qk = w ? Slot$2 : "div", Jk = U === "auto" ? a$12(V) : U, Yk = s.appearance === "light" || s.appearance === "dark", Xk = F === void 0 ? k || Yk : F;
	return React$1.createElement(P$1.Provider, { value: React$1.useMemo(() => ({
		appearance: L,
		accentColor: V,
		grayColor: U,
		resolvedGrayColor: Jk,
		panelBackground: K,
		radius: q,
		scaling: J,
		onAppearanceChange: X,
		onAccentColorChange: $,
		onGrayColorChange: Hk,
		onPanelBackgroundChange: Uk,
		onRadiusChange: Wk,
		onScalingChange: Gk
	}), [
		L,
		V,
		U,
		Jk,
		K,
		q,
		J,
		X,
		$,
		Hk,
		Uk,
		Wk,
		Gk
	]) }, React$1.createElement(qk, {
		"data-is-root-theme": k ? "true" : "false",
		"data-accent-color": V,
		"data-gray-color": Jk,
		"data-has-background": Xk ? "true" : "false",
		"data-panel-background": K,
		"data-radius": q,
		"data-scaling": J,
		ref: d,
		...Kk,
		className: (0, import_classnames$17.default)("radix-themes", {
			light: L === "light",
			dark: L === "dark"
		}, Kk.className)
	}));
});
A$1.displayName = "ThemeImpl";
var a$4 = (s) => {
	if (!React$1.isValidElement(s)) throw Error(`Expected a single React Element child, but got: ${React$1.Children.toArray(s).map((n) => typeof n == "object" && "type" in n && typeof n.type == "string" ? n.type : typeof n).join(", ")}`);
	return s;
};
function d$2(s, d) {
	let { asChild: C, children: w } = s;
	if (!C) return typeof d == "function" ? d(w) : d;
	let k = React$1.Children.only(w);
	return React$1.cloneElement(k, { children: typeof d == "function" ? d(k.props.children) : d });
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
], p$12 = {
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
	...s$9,
	...o$4,
	...r$3
}, import_classnames$16 = /* @__PURE__ */ __toESM(require_classnames()), e = React$1.forwardRef((s, d) => {
	let { asChild: C, className: w, color: k, radius: F, ...L } = v(s, p$12, r$1), V = C ? Slot$2 : "span";
	return React$1.createElement(V, {
		"data-accent-color": k,
		"data-radius": F,
		...L,
		ref: d,
		className: (0, import_classnames$16.default)("rt-reset", "rt-Badge", w)
	});
});
e.displayName = "Badge";
var e$1 = Slot$2, s$10 = ["div", "span"], o$8 = [
	"none",
	"inline",
	"inline-block",
	"block",
	"contents"
], p$10 = {
	as: {
		type: "enum",
		values: s$10,
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
}, r$11 = [
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
], p$11 = ["0", "1"], n$7 = ["0", "1"], u$2 = {
	...p$3,
	...t$5,
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
		values: r$11,
		responsive: !0
	},
	overflowX: {
		type: "enum",
		className: "rt-r-ox",
		values: r$11,
		responsive: !0
	},
	overflowY: {
		type: "enum",
		className: "rt-r-oy",
		values: r$11,
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
		values: p$11,
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
}, import_classnames$15 = /* @__PURE__ */ __toESM(require_classnames()), p$1 = React$1.forwardRef((s, d) => {
	let { className: C, asChild: w, as: k = "div", ...F } = v(s, p$10, u$2, r$1);
	return React$1.createElement(w ? e$1 : k, {
		...F,
		ref: d,
		className: (0, import_classnames$15.default)("rt-Box", C)
	});
});
p$1.displayName = "Box";
var t$4 = [
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
], i$6 = {
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: t$4,
		default: "2",
		responsive: !0
	},
	variant: {
		type: "enum",
		className: "rt-variant",
		values: a$10,
		default: "solid"
	},
	...s$9,
	...o$4,
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
}, t$3 = ["div", "span"], p$9 = [
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
], u$1 = {
	as: {
		type: "enum",
		values: t$3,
		default: "div"
	},
	...o$5,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: p$9,
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
		parseValue: f$5,
		responsive: !0
	},
	wrap: {
		type: "enum",
		className: "rt-r-fw",
		values: l$3,
		responsive: !0
	},
	...p$7
};
function f$5(n) {
	return n === "between" ? "space-between" : n;
}
var import_classnames$14 = /* @__PURE__ */ __toESM(require_classnames()), p = React$1.forwardRef((s, d) => {
	let { className: C, asChild: w, as: k = "div", ...F } = v(s, u$1, u$2, r$1);
	return React$1.createElement(w ? e$1 : k, {
		...F,
		ref: d,
		className: (0, import_classnames$14.default)("rt-Flex", C)
	});
});
p.displayName = "Flex";
var s$8 = {
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
}, import_classnames$13 = /* @__PURE__ */ __toESM(require_classnames()), s$6 = React$1.forwardRef((s, d) => {
	let { className: C, children: w, loading: k, ...F } = v(s, s$8, r$1);
	if (!k) return w;
	let L = React$1.createElement("span", {
		...F,
		ref: d,
		className: (0, import_classnames$13.default)("rt-Spinner", C)
	}, React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }));
	return w === void 0 ? L : React$1.createElement(p, {
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
	}, w), React$1.createElement(p, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, L))));
});
s$6.displayName = "Spinner";
var d$3 = Root$5;
function s$7(n, s) {
	if (n !== void 0) return typeof n == "string" ? s(n) : Object.fromEntries(Object.entries(n).map(([n, d]) => [n, s(d)]));
}
function r$10(n) {
	switch (n) {
		case "1": return "1";
		case "2":
		case "3": return "2";
		case "4": return "3";
	}
}
var import_classnames$12 = /* @__PURE__ */ __toESM(require_classnames()), n$1 = React$1.forwardRef((s, d) => {
	let { size: C = i$6.size.default } = s, { className: w, children: k, asChild: F, color: L, radius: V, disabled: U = s.loading, ...K } = v(s, i$6, r$1), q = F ? Slot$2 : "button";
	return React$1.createElement(q, {
		"data-disabled": U || void 0,
		"data-accent-color": L,
		"data-radius": V,
		...K,
		ref: d,
		className: (0, import_classnames$12.default)("rt-reset", "rt-BaseButton", w),
		disabled: U
	}, s.loading ? React$1.createElement(React$1.Fragment, null, React$1.createElement("span", {
		style: {
			display: "contents",
			visibility: "hidden"
		},
		"aria-hidden": !0
	}, k), React$1.createElement(d$3, null, k), React$1.createElement(p, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, React$1.createElement(s$6, { size: s$7(C, r$10) })))) : k);
});
n$1.displayName = "BaseButton";
var import_classnames$11 = /* @__PURE__ */ __toESM(require_classnames()), o = React$1.forwardRef(({ className: s, ...d }, C) => React$1.createElement(n$1, {
	...d,
	ref: C,
	className: (0, import_classnames$11.default)("rt-Button", s)
}));
o.displayName = "Button";
var a$7 = ["div", "span"], n$4 = [
	"none",
	"inline-grid",
	"grid"
], p$8 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], u$3 = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9"
], i$5 = [
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
], f$3 = [
	"start",
	"center",
	"end",
	"between"
], s$4 = {
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
		values: p$8,
		parseValue: r$9,
		responsive: !0
	},
	rows: {
		type: "enum | string",
		className: "rt-r-gtr",
		customProperties: ["--grid-template-rows"],
		values: u$3,
		parseValue: r$9,
		responsive: !0
	},
	flow: {
		type: "enum",
		className: "rt-r-gaf",
		values: i$5,
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
		values: f$3,
		parseValue: m$2,
		responsive: !0
	},
	...p$7
};
function r$9(n) {
	return s$4.columns.values.includes(n) ? n : n?.match(/^\d+$/) ? `repeat(${n}, minmax(0, 1fr))` : n;
}
function m$2(n) {
	return n === "between" ? "space-between" : n;
}
var import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames()), o$2 = React$1.forwardRef((s, d) => {
	let { className: C, asChild: w, as: k = "div", ...F } = v(s, s$4, u$2, r$1);
	return React$1.createElement(w ? e$1 : k, {
		...F,
		ref: d,
		className: (0, import_classnames$10.default)("rt-Grid", C)
	});
});
o$2.displayName = "Grid";
var r$8 = React.forwardRef((n, d) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: d
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
})));
r$8.displayName = "ThickDividerHorizontalIcon";
var t$1 = React.forwardRef((n, d) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: d
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
})));
t$1.displayName = "ThickCheckIcon";
var i$4 = React.forwardRef((n, d) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: d
}, React.createElement("path", { d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z" })));
i$4.displayName = "ChevronDownIcon";
var l = React.forwardRef((n, d) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...n,
	ref: d
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M3.23826 0.201711C3.54108 -0.0809141 4.01567 -0.0645489 4.29829 0.238264L7.79829 3.98826C8.06724 4.27642 8.06724 4.72359 7.79829 5.01174L4.29829 8.76174C4.01567 9.06455 3.54108 9.08092 3.23826 8.79829C2.93545 8.51567 2.91909 8.04108 3.20171 7.73826L6.22409 4.5L3.20171 1.26174C2.91909 0.958928 2.93545 0.484337 3.23826 0.201711Z"
})));
l.displayName = "ThickChevronRightIcon";
var r$7 = [
	"1",
	"2",
	"3"
], o$6 = [
	"vertical",
	"horizontal",
	"both"
], t$2 = {
	...o$5,
	size: {
		type: "enum",
		className: "rt-r-size",
		values: r$7,
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
	let { m: s, mx: d, my: C, mt: w, mr: k, mb: F, ml: L, ...V } = n;
	return {
		m: s,
		mx: d,
		my: C,
		mt: w,
		mr: k,
		mb: F,
		ml: L,
		rest: V
	};
}
var import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames()), r$6 = r$1.m.values;
function S$1(n) {
	let [s, d] = R$3({
		className: "rt-r-m",
		customProperties: ["--margin"],
		propValues: r$6,
		value: n.m
	}), [C, w] = R$3({
		className: "rt-r-mx",
		customProperties: ["--margin-left", "--margin-right"],
		propValues: r$6,
		value: n.mx
	}), [k, F] = R$3({
		className: "rt-r-my",
		customProperties: ["--margin-top", "--margin-bottom"],
		propValues: r$6,
		value: n.my
	}), [L, V] = R$3({
		className: "rt-r-mt",
		customProperties: ["--margin-top"],
		propValues: r$6,
		value: n.mt
	}), [U, K] = R$3({
		className: "rt-r-mr",
		customProperties: ["--margin-right"],
		propValues: r$6,
		value: n.mr
	}), [q, J] = R$3({
		className: "rt-r-mb",
		customProperties: ["--margin-bottom"],
		propValues: r$6,
		value: n.mb
	}), [X, $] = R$3({
		className: "rt-r-ml",
		customProperties: ["--margin-left"],
		propValues: r$6,
		value: n.ml
	});
	return [(0, import_classnames$9.default)(s, C, k, L, U, q, X), l$1(d, w, F, V, K, J, $)];
}
var import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames()), c = React$1.forwardRef((s, d) => {
	let { rest: C, ...w } = a$5(s), [k, F] = S$1(w), { asChild: L, children: V, className: U, style: K, type: q, scrollHideDelay: J = q === "scroll" ? void 0 : 0, dir: X, size: $ = t$2.size.default, radius: Hk = t$2.radius.default, scrollbars: Uk = t$2.scrollbars.default, ...Wk } = C;
	return React$1.createElement(Root$1, {
		type: q,
		scrollHideDelay: J,
		className: (0, import_classnames$8.default)("rt-ScrollAreaRoot", k, U),
		style: l$1(F, K),
		asChild: L
	}, d$2({
		asChild: L,
		children: V
	}, (s) => React$1.createElement(React$1.Fragment, null, React$1.createElement(Viewport, {
		...Wk,
		ref: d,
		className: "rt-ScrollAreaViewport"
	}, s), React$1.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), Uk === "vertical" ? null : React$1.createElement(Scrollbar, {
		"data-radius": Hk,
		orientation: "horizontal",
		className: (0, import_classnames$8.default)("rt-ScrollAreaScrollbar", g$2({
			className: "rt-r-size",
			value: $,
			propValues: t$2.size.values
		}))
	}, React$1.createElement(Thumb$1, { className: "rt-ScrollAreaThumb" })), Uk === "horizontal" ? null : React$1.createElement(Scrollbar, {
		"data-radius": Hk,
		orientation: "vertical",
		className: (0, import_classnames$8.default)("rt-ScrollAreaScrollbar", g$2({
			className: "rt-r-size",
			value: $,
			propValues: t$2.size.values
		}))
	}, React$1.createElement(Thumb$1, { className: "rt-ScrollAreaThumb" })), Uk === "both" ? React$1.createElement(Corner, { className: "rt-ScrollAreaCorner" }) : null)));
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
}, a$3 = {
	...o$5,
	...r$2,
	shortcut: { type: "string" }
}, i$3 = {
	...r$2,
	shortcut: { type: "string" }
}, p$5 = { ...r$2 }, import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames()), s$2 = (s) => React$1.createElement(Root$4, {
	...s,
	modal: !0
});
s$2.displayName = "Dialog.Root";
var n$3 = React$1.forwardRef(({ children: s, ...d }, C) => React$1.createElement(Trigger$3, {
	...d,
	ref: C,
	asChild: !0
}, a$4(s)));
n$3.displayName = "Dialog.Trigger";
var p$6 = React$1.forwardRef(({ align: s, ...d }, C) => {
	let { align: w, ...k } = s$1, { className: F } = v({ align: s }, { align: w }), { className: L, forceMount: V, container: U, ...K } = v(d, k);
	return React$1.createElement(Portal$2, {
		container: U,
		forceMount: V
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Overlay, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, React$1.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, React$1.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${F}` }, React$1.createElement(Content$2, {
		...K,
		ref: C,
		className: (0, import_classnames$7.default)("rt-BaseDialogContent", "rt-DialogContent", L)
	}))))));
});
p$6.displayName = "Dialog.Content";
var g$1 = React$1.forwardRef((s, d) => React$1.createElement(Title, { asChild: !0 }, React$1.createElement(r$5, {
	size: "5",
	mb: "3",
	trim: "start",
	...s,
	asChild: !1,
	ref: d
})));
g$1.displayName = "Dialog.Title";
var m$1 = React$1.forwardRef((s, d) => React$1.createElement(Description, { asChild: !0 }, React$1.createElement(p$2, {
	as: "p",
	size: "3",
	...s,
	asChild: !1,
	ref: d
})));
m$1.displayName = "Dialog.Description";
var D$1 = React$1.forwardRef(({ children: s, ...d }, C) => React$1.createElement(Close, {
	...d,
	ref: C,
	asChild: !0
}, a$4(s)));
D$1.displayName = "Dialog.Close";
var import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames()), I$1 = (s) => React$1.createElement(Root2$1, { ...s });
I$1.displayName = "DropdownMenu.Root";
var h = React$1.forwardRef(({ children: s, ...d }, C) => React$1.createElement(Trigger$1, {
	...d,
	ref: C,
	asChild: !0
}, a$4(s)));
h.displayName = "DropdownMenu.Trigger";
var b$1 = React$1.createContext({}), g = React$1.forwardRef((s, d) => {
	let C = H$1(), { size: w = n$2.size.default, variant: k = n$2.variant.default, highContrast: F = n$2.highContrast.default } = s, { className: L, children: V, color: U, container: K, forceMount: q, ...J } = v(s, n$2), X = U || C.accentColor;
	return React$1.createElement(Portal2, {
		container: K,
		forceMount: q
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Content2, {
		"data-accent-color": X,
		align: "start",
		sideOffset: 4,
		collisionPadding: 10,
		...J,
		asChild: !1,
		ref: d,
		className: (0, import_classnames$6.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-DropdownMenuContent", L)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$6.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, React$1.createElement(b$1.Provider, { value: React$1.useMemo(() => ({
		size: w,
		variant: k,
		color: X,
		highContrast: F
	}), [
		w,
		k,
		X,
		F
	]) }, V))))));
});
g.displayName = "DropdownMenu.Content";
var y = React$1.forwardRef(({ className: s, ...d }, C) => React$1.createElement(Label2, {
	...d,
	asChild: !1,
	ref: C,
	className: (0, import_classnames$6.default)("rt-BaseMenuLabel", "rt-DropdownMenuLabel", s)
}));
y.displayName = "DropdownMenu.Label";
var v$1 = React$1.forwardRef((s, d) => {
	let { className: C, children: w, color: k = a$3.color.default, shortcut: F, ...L } = s;
	return React$1.createElement(Item2, {
		"data-accent-color": k,
		...L,
		ref: d,
		className: (0, import_classnames$6.default)("rt-reset", "rt-BaseMenuItem", "rt-DropdownMenuItem", C)
	}, React$1.createElement(Slottable$1, null, w), F && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, F));
});
v$1.displayName = "DropdownMenu.Item";
var R$2 = React$1.forwardRef(({ className: s, ...d }, C) => React$1.createElement(Group2, {
	...d,
	asChild: !1,
	ref: C,
	className: (0, import_classnames$6.default)("rt-BaseMenuGroup", "rt-DropdownMenuGroup", s)
}));
R$2.displayName = "DropdownMenu.Group";
var S = React$1.forwardRef(({ className: s, ...d }, C) => React$1.createElement(RadioGroup2, {
	...d,
	asChild: !1,
	ref: C,
	className: (0, import_classnames$6.default)("rt-BaseMenuRadioGroup", "rt-DropdownMenuRadioGroup", s)
}));
S.displayName = "DropdownMenu.RadioGroup";
var x = React$1.forwardRef((s, d) => {
	let { children: C, className: w, color: k = p$5.color.default, ...F } = s;
	return React$1.createElement(RadioItem2, {
		...F,
		asChild: !1,
		ref: d,
		"data-accent-color": k,
		className: (0, import_classnames$6.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-DropdownMenuItem", "rt-DropdownMenuRadioItem", w)
	}, C, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t$1, { className: "rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon" })));
});
x.displayName = "DropdownMenu.RadioItem";
var T$1 = React$1.forwardRef((s, d) => {
	let { children: C, className: w, shortcut: k, color: F = i$3.color.default, ...L } = s;
	return React$1.createElement(CheckboxItem2, {
		...L,
		asChild: !1,
		ref: d,
		"data-accent-color": F,
		className: (0, import_classnames$6.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-DropdownMenuItem", "rt-DropdownMenuCheckboxItem", w)
	}, C, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t$1, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), k && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, k));
});
T$1.displayName = "DropdownMenu.CheckboxItem";
var N = (s) => React$1.createElement(Sub2, { ...s });
N.displayName = "DropdownMenu.Sub";
var E = React$1.forwardRef((s, d) => {
	let { className: C, children: w, ...k } = s;
	return React$1.createElement(SubTrigger2, {
		...k,
		asChild: !1,
		ref: d,
		className: (0, import_classnames$6.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-DropdownMenuItem", "rt-DropdownMenuSubTrigger", C)
	}, w, React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, React$1.createElement(l, { className: "rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon" })));
});
E.displayName = "DropdownMenu.SubTrigger";
var G$1 = React$1.forwardRef((s, d) => {
	let { size: C, variant: w, color: k, highContrast: F } = React$1.useContext(b$1), { className: L, children: V, container: U, forceMount: K, ...q } = v({
		size: C,
		variant: w,
		color: k,
		highContrast: F,
		...s
	}, n$2);
	return React$1.createElement(Portal2, {
		container: U,
		forceMount: K
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(SubContent2, {
		"data-accent-color": k,
		alignOffset: -Number(C) * 4,
		sideOffset: 1,
		collisionPadding: 10,
		...q,
		asChild: !1,
		ref: d,
		className: (0, import_classnames$6.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-DropdownMenuContent", "rt-DropdownMenuSubContent", L)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$6.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, V)))));
});
G$1.displayName = "DropdownMenu.SubContent";
var B$1 = React$1.forwardRef(({ className: s, ...d }, C) => React$1.createElement(Separator2, {
	...d,
	asChild: !1,
	ref: C,
	className: (0, import_classnames$6.default)("rt-BaseMenuSeparator", "rt-DropdownMenuSeparator", s)
}));
B$1.displayName = "DropdownMenu.Separator";
var import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames()), o$1 = React$1.forwardRef(({ className: s, ...d }, C) => React$1.createElement(n$1, {
	...d,
	ref: C,
	className: (0, import_classnames$5.default)("rt-IconButton", s)
}));
o$1.displayName = "IconButton";
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
}, import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames()), o$3 = React$1.forwardRef((s, d) => {
	let { className: C, color: w, decorative: k, ...F } = v(s, t, r$1);
	return React$1.createElement("span", {
		"data-accent-color": w,
		role: k ? void 0 : "separator",
		...F,
		ref: d,
		className: (0, import_classnames$4.default)("rt-Separator", C)
	});
});
o$3.displayName = "Separator";
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
}, import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames()), i = React$1.forwardRef((s, d) => {
	let { className: C, color: w, radius: k, ...F } = v(s, a$2, r$1);
	return React$1.createElement(Root, {
		"data-accent-color": w,
		"data-radius": k,
		...F,
		asChild: !1,
		ref: d,
		className: (0, import_classnames$3.default)("rt-reset", "rt-SwitchRoot", C)
	}, React$1.createElement(Thumb, { className: (0, import_classnames$3.default)("rt-SwitchThumb", { "rt-high-contrast": s.highContrast }) }));
});
i.displayName = "Switch";
var p$4 = {
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
}, import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames()), m = React$1.forwardRef((s, d) => {
	let { className: C, ...w } = v(s, r$1);
	return React$1.createElement(Root2, {
		...w,
		ref: d,
		className: (0, import_classnames$2.default)("rt-TabsRoot", C)
	});
});
m.displayName = "Tabs.Root";
var b = React$1.forwardRef((s, d) => {
	let { className: C, color: w, ...k } = v(s, p$4, r$1);
	return React$1.createElement(List, {
		"data-accent-color": w,
		...k,
		asChild: !1,
		ref: d,
		className: (0, import_classnames$2.default)("rt-BaseTabList", "rt-TabsList", C)
	});
});
b.displayName = "Tabs.List";
var P = React$1.forwardRef((s, d) => {
	let { className: C, children: w, ...k } = s;
	return React$1.createElement(Trigger, {
		...k,
		asChild: !1,
		ref: d,
		className: (0, import_classnames$2.default)("rt-reset", "rt-BaseTabListTrigger", "rt-TabsTrigger", C)
	}, React$1.createElement("span", { className: "rt-BaseTabListTriggerInner rt-TabsTriggerInner" }, w), React$1.createElement("span", { className: "rt-BaseTabListTriggerInnerHidden rt-TabsTriggerInnerHidden" }, w));
});
P.displayName = "Tabs.Trigger";
var f$1 = React$1.forwardRef((s, d) => {
	let { className: C, ...w } = v(s, r$1);
	return React$1.createElement(Content, {
		...w,
		ref: d,
		className: (0, import_classnames$2.default)("rt-TabsContent", C)
	});
});
f$1.displayName = "Tabs.Content";
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
}, import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames()), r = React$1.forwardRef((s, d) => {
	let { className: C, color: w, radius: k, style: F, ...L } = v(s, a, r$1);
	return React$1.createElement("div", {
		"data-accent-color": w,
		"data-radius": k,
		className: (0, import_classnames$1.default)("rt-TextAreaRoot", C),
		style: F
	}, React$1.createElement("textarea", {
		className: "rt-reset rt-TextAreaInput",
		ref: d,
		...L
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
}, i$1 = {
	side: {
		type: "enum",
		values: ["left", "right"]
	},
	...r$2,
	gap: u$1.gap,
	px: p$3.px,
	pl: p$3.pl,
	pr: p$3.pr
}, import_classnames = /* @__PURE__ */ __toESM(require_classnames()), u = React$1.forwardRef((s, d) => {
	let C = React$1.useRef(null), { children: w, className: k, color: F, radius: L, style: V, ...U } = v(s, f, r$1);
	return React$1.createElement("div", {
		"data-accent-color": F,
		"data-radius": L,
		style: V,
		className: (0, import_classnames.default)("rt-TextFieldRoot", k),
		onPointerDown: (n) => {
			let s = n.target;
			if (s.closest("input, button, a")) return;
			let d = C.current;
			if (!d) return;
			let w = s.closest("\n            .rt-TextFieldSlot[data-side='right'],\n            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])\n          ") ? d.value.length : 0;
			requestAnimationFrame(() => {
				try {
					d.setSelectionRange(w, w);
				} catch {}
				d.focus();
			});
		}
	}, React$1.createElement("input", {
		spellCheck: "false",
		...U,
		ref: composeRefs(C, d),
		className: "rt-reset rt-TextFieldInput"
	}), w);
});
u.displayName = "TextField.Root";
var c$1 = React$1.forwardRef((s, d) => {
	let { className: C, color: w, side: k, ...F } = v(s, i$1);
	return React$1.createElement("div", {
		"data-accent-color": w,
		"data-side": k,
		...F,
		ref: d,
		className: (0, import_classnames.default)("rt-TextFieldSlot", C)
	});
});
c$1.displayName = "TextField.Slot";
function z(n, s = "Assertion error") {
	if (!n) throw Error(s);
}
function W({ group: n }) {
	let { orientation: s, panels: d } = n;
	return d.reduce((n, d) => (n += s === "horizontal" ? d.element.offsetWidth : d.element.offsetHeight, n), 0);
}
function ie(n, s) {
	return s.sort(n === "horizontal" ? Je : Qe);
}
function Je(n, s) {
	let d = n.element.offsetLeft - s.element.offsetLeft;
	return d === 0 ? n.element.offsetWidth - s.element.offsetWidth : d;
}
function Qe(n, s) {
	let d = n.element.offsetTop - s.element.offsetTop;
	return d === 0 ? n.element.offsetHeight - s.element.offsetHeight : d;
}
function Me(n) {
	return typeof n == "object" && !!n && "nodeType" in n && n.nodeType === Node.ELEMENT_NODE;
}
function Ee(n, s) {
	return {
		x: n.x >= s.left && n.x <= s.right ? 0 : Math.min(Math.abs(n.x - s.left), Math.abs(n.x - s.right)),
		y: n.y >= s.top && n.y <= s.bottom ? 0 : Math.min(Math.abs(n.y - s.top), Math.abs(n.y - s.bottom))
	};
}
function et({ orientation: n, rects: s, targetRect: d }) {
	let C = {
		x: d.x + d.width / 2,
		y: d.y + d.height / 2
	}, w, k = Number.MAX_VALUE;
	for (let d of s) {
		let { x: s, y: F } = Ee(C, d), L = n === "horizontal" ? s : F;
		L < k && (k = L, w = d);
	}
	return z(w, "No rect found"), w;
}
function Ie(n) {
	let { element: s, orientation: d, panels: C, separators: w } = n, k = ie(d, Array.from(s.children).filter(Me).map((n) => ({ element: n }))).map(({ element: n }) => n), F = [], L = !1, V, U = [];
	for (let s of k) if (s.hasAttribute("data-panel")) {
		let w = C.find((n) => n.element === s);
		if (w) {
			if (V) {
				let C = V.element.getBoundingClientRect(), k = s.getBoundingClientRect(), K;
				if (L) {
					let n = d === "horizontal" ? new DOMRect(C.right, C.top, 0, C.height) : new DOMRect(C.left, C.bottom, C.width, 0), s = d === "horizontal" ? new DOMRect(k.left, k.top, 0, k.height) : new DOMRect(k.left, k.top, k.width, 0);
					switch (U.length) {
						case 0:
							K = [n, s];
							break;
						case 1: {
							let w = U[0];
							K = [w, et({
								orientation: d,
								rects: [C, k],
								targetRect: w.element.getBoundingClientRect()
							}) === C ? s : n];
							break;
						}
						default:
							K = U;
							break;
					}
				} else K = U.length ? U : [d === "horizontal" ? new DOMRect(C.right, k.top, k.left - C.right, k.height) : new DOMRect(k.left, C.bottom, k.width, k.top - C.bottom)];
				for (let s of K) F.push({
					group: n,
					groupSize: W({ group: n }),
					panels: [V, w],
					separator: "width" in s ? void 0 : s,
					rect: "width" in s ? s : s.element.getBoundingClientRect()
				});
			}
			L = !1, V = w, U = [];
		}
	} else if (s.hasAttribute("data-separator")) {
		let n = w.find((n) => n.element === s);
		n ? U.push(n) : (V = void 0, U = []);
	} else L = !0;
	return F;
}
function tt(n, s) {
	let d = getComputedStyle(n);
	return s * parseFloat(d.fontSize);
}
function nt(n, s) {
	let d = getComputedStyle(n.ownerDocument.body);
	return s * parseFloat(d.fontSize);
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
			let s = parseFloat(n);
			return n.endsWith("%") ? [s, "%"] : n.endsWith("px") ? [s, "px"] : n.endsWith("rem") ? [s, "rem"] : n.endsWith("em") ? [s, "em"] : n.endsWith("vh") ? [s, "vh"] : n.endsWith("vw") ? [s, "vw"] : [s, "%"];
		}
	}
}
function Q({ groupSize: n, panelElement: s, styleProp: d }) {
	let C, [w, k] = it(d);
	switch (k) {
		case "%":
			C = w / 100 * n;
			break;
		case "px":
			C = w;
			break;
		case "rem":
			C = nt(s, w);
			break;
		case "em":
			C = tt(s, w);
			break;
		case "vh":
			C = ot(w);
			break;
		case "vw":
			C = rt(w);
			break;
	}
	return C;
}
function G(n) {
	return parseFloat(n.toFixed(3));
}
function pe(n) {
	let { panels: s } = n, d = W({ group: n });
	return d === 0 ? s.map((n) => ({
		collapsedSize: 0,
		collapsible: n.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		minSize: 0,
		maxSize: 100,
		panelId: n.id
	})) : s.map((n) => {
		let { element: s, panelConstraints: C } = n, w = 0;
		C.collapsedSize && (w = G(Q({
			groupSize: d,
			panelElement: s,
			styleProp: C.collapsedSize
		}) / d * 100));
		let k;
		C.defaultSize && (k = G(Q({
			groupSize: d,
			panelElement: s,
			styleProp: C.defaultSize
		}) / d * 100));
		let F = 0;
		C.minSize && (F = G(Q({
			groupSize: d,
			panelElement: s,
			styleProp: C.minSize
		}) / d * 100));
		let L = 100;
		return C.maxSize && (L = G(Q({
			groupSize: d,
			panelElement: s,
			styleProp: C.maxSize
		}) / d * 100)), {
			collapsedSize: w,
			collapsible: C.collapsible === !0,
			defaultSize: k,
			minSize: F,
			maxSize: L,
			panelId: n.id
		};
	});
}
var st = class {
	#e = {};
	addListener(n, s) {
		let d = this.#e[n];
		return d === void 0 ? this.#e[n] = [s] : d.includes(s) || d.push(s), () => {
			this.removeListener(n, s);
		};
	}
	emit(n, s) {
		let d = this.#e[n];
		if (d !== void 0) if (d.length === 1) d[0].call(null, s);
		else {
			let n = !1, C = null, w = Array.from(d);
			for (let d = 0; d < w.length; d++) {
				let k = w[d];
				try {
					k.call(null, s);
				} catch (s) {
					C === null && (n = !0, C = s);
				}
			}
			if (n) throw C;
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(n, s) {
		let d = this.#e[n];
		if (d !== void 0) {
			let n = d.indexOf(s);
			n >= 0 && d.splice(n, 1);
		}
	}
};
function R$1(n, s, d = 0) {
	return Math.abs(G(n) - G(s)) <= d;
}
var M = {
	cursorFlags: 0,
	interactionState: { state: "inactive" },
	mountedGroups: /* @__PURE__ */ new Map()
}, T = new st();
function D() {
	return M;
}
function I(n) {
	let s = typeof n == "function" ? n(M) : n;
	if (M === s) return M;
	let d = M;
	return M = {
		...M,
		...s
	}, s.cursorFlags !== void 0 && T.emit("cursorFlagsChange", M.cursorFlags), s.interactionState !== void 0 && T.emit("interactionStateChange", M.interactionState), s.mountedGroups !== void 0 && (M.mountedGroups.forEach((n, s) => {
		n.derivedPanelConstraints.forEach((C) => {
			if (C.collapsible) {
				let { layout: w } = d.mountedGroups.get(s) ?? {};
				if (w) {
					let d = R$1(C.collapsedSize, n.layout[C.panelId]), k = R$1(C.collapsedSize, w[C.panelId]);
					d && !k && (s.inMemoryLastExpandedPanelSizes[C.panelId] = w[C.panelId]);
				}
			}
		});
	}), T.emit("mountedGroupsChange", M.mountedGroups)), M;
}
function at(n, s) {
	if (n.length !== s.length) return !1;
	for (let d = 0; d < n.length; d++) if (n[d] != s[d]) return !1;
	return !0;
}
function Y(n, s) {
	return R$1(n, s) ? 0 : n > s ? 1 : -1;
}
function H({ panelConstraints: n, size: s }) {
	let { collapsedSize: d = 0, collapsible: C, maxSize: w = 100, minSize: k = 0 } = n;
	if (Y(s, k) < 0) if (C) {
		let n = (d + k) / 2;
		s = Y(s, n) < 0 ? d : k;
	} else s = k;
	return s = Math.min(w, s), s = G(s), s;
}
function Z({ delta: n, initialLayout: s, panelConstraints: d, pivotIndices: C, prevLayout: w, trigger: k }) {
	if (R$1(n, 0)) return s;
	let F = Object.values(s), L = Object.values(w), V = [...F], [U, K] = C;
	z(U != null, "Invalid first pivot index"), z(K != null, "Invalid second pivot index");
	let q = 0;
	if (k === "keyboard") {
		{
			let s = n < 0 ? K : U, C = d[s];
			z(C, `Panel constraints not found for index ${s}`);
			let { collapsedSize: w = 0, collapsible: k, minSize: L = 0 } = C;
			if (k) {
				let d = F[s];
				if (z(d != null, `Previous layout not found for panel index ${s}`), R$1(d, w)) {
					let s = L - d;
					Y(s, Math.abs(n)) > 0 && (n = n < 0 ? 0 - s : s);
				}
			}
		}
		{
			let s = n < 0 ? U : K, C = d[s];
			z(C, `No panel constraints found for index ${s}`);
			let { collapsedSize: w = 0, collapsible: k, minSize: L = 0 } = C;
			if (k) {
				let d = F[s];
				if (z(d != null, `Previous layout not found for panel index ${s}`), R$1(d, L)) {
					let s = d - w;
					Y(s, Math.abs(n)) > 0 && (n = n < 0 ? 0 - s : s);
				}
			}
		}
	}
	{
		let s = n < 0 ? 1 : -1, C = n < 0 ? K : U, w = 0;
		for (;;) {
			let n = F[C];
			z(n != null, `Previous layout not found for panel index ${C}`);
			let k = H({
				panelConstraints: d[C],
				size: 100
			}) - n;
			if (w += k, C += s, C < 0 || C >= d.length) break;
		}
		let k = Math.min(Math.abs(n), Math.abs(w));
		n = n < 0 ? 0 - k : k;
	}
	{
		let s = n < 0 ? U : K;
		for (; s >= 0 && s < d.length;) {
			let C = Math.abs(n) - Math.abs(q), w = F[s];
			z(w != null, `Previous layout not found for panel index ${s}`);
			let k = w - C, L = H({
				panelConstraints: d[s],
				size: k
			});
			if (!R$1(w, L) && (q += w - L, V[s] = L, q.toFixed(3).localeCompare(Math.abs(n).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			n < 0 ? s-- : s++;
		}
	}
	if (at(L, V)) return w;
	{
		let s = n < 0 ? K : U, C = F[s];
		z(C != null, `Previous layout not found for panel index ${s}`);
		let w = C + q, k = H({
			panelConstraints: d[s],
			size: w
		});
		if (V[s] = k, !R$1(k, w)) {
			let s = w - k, C = n < 0 ? K : U;
			for (; C >= 0 && C < d.length;) {
				let w = V[C];
				z(w != null, `Previous layout not found for panel index ${C}`);
				let k = w + s, F = H({
					panelConstraints: d[C],
					size: k
				});
				if (R$1(w, F) || (s -= F - w, V[C] = F), R$1(s, 0)) break;
				n > 0 ? C-- : C++;
			}
		}
	}
	if (!R$1(Object.values(V).reduce((n, s) => s + n, 0), 100, .1)) return w;
	let J = Object.keys(w);
	return V.reduce((n, s, d) => (n[J[d]] = s, n), {});
}
function te(n) {
	let { mountedGroups: s } = D();
	for (let [d] of s) if (d.separators.some((s) => s.element === n)) return d;
	throw Error("Could not find parent Group for separator element");
}
function B(n, s) {
	if (Object.keys(n).length !== Object.keys(s).length) return !1;
	for (let d in n) if (s[d] === void 0 || Y(n[d], s[d]) !== 0) return !1;
	return !0;
}
function _({ layout: n, panelConstraints: s }) {
	let d = [...Object.values(n)], C = d.reduce((n, s) => n + s, 0);
	if (d.length !== s.length) throw Error(`Invalid ${s.length} panel layout: ${d.map((n) => `${n}%`).join(", ")}`);
	if (!R$1(C, 100) && d.length > 0) for (let n = 0; n < s.length; n++) {
		let s = d[n];
		z(s != null, `No layout data found for index ${n}`), d[n] = 100 / C * s;
	}
	let w = 0;
	for (let n = 0; n < s.length; n++) {
		let C = d[n];
		z(C != null, `No layout data found for index ${n}`);
		let k = H({
			panelConstraints: s[n],
			size: C
		});
		C != k && (w += C - k, d[n] = k);
	}
	if (!R$1(w, 0)) for (let n = 0; n < s.length; n++) {
		let C = d[n];
		z(C != null, `No layout data found for index ${n}`);
		let k = C + w, F = H({
			panelConstraints: s[n],
			size: k
		});
		if (C !== F && (w -= F - C, d[n] = F, R$1(w, 0))) break;
	}
	let k = Object.keys(n);
	return d.reduce((n, s, d) => (n[k[d]] = s, n), {});
}
function ke({ groupId: n }) {
	let s = () => {
		let { mountedGroups: s } = D();
		for (let [d, C] of s) if (d.id === n) return {
			group: d,
			...C
		};
		throw Error(`Could not find Group with id "${n}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: n, layout: d } = s();
			return n ? {} : d;
		},
		setLayout(n) {
			let { defaultLayoutDeferred: d, derivedPanelConstraints: C, group: w, layout: k, separatorToPanels: F } = s(), L = _({
				layout: n,
				panelConstraints: C
			});
			return d ? k : (B(k, L) || I((n) => ({ mountedGroups: new Map(n.mountedGroups).set(w, {
				defaultLayoutDeferred: d,
				derivedPanelConstraints: C,
				layout: L,
				separatorToPanels: F
			}) })), L);
		}
	};
}
function Ge(n) {
	let { mountedGroups: s } = D(), d = s.get(n);
	return z(d, `Mounted Group ${n.id} not found`), d;
}
function O(n, s) {
	let d = te(n), C = Ge(d), w = d.separators.find((s) => s.element === n);
	z(w, "Matching separator not found");
	let k = C.separatorToPanels.get(w);
	z(k, "Matching panels not found");
	let F = k.map((n) => d.panels.indexOf(n)), L = ke({ groupId: d.id }).getLayout(), V = _({
		layout: Z({
			delta: s,
			initialLayout: L,
			panelConstraints: C.derivedPanelConstraints,
			pivotIndices: F,
			prevLayout: L,
			trigger: "keyboard"
		}),
		panelConstraints: C.derivedPanelConstraints
	});
	B(L, V) || I((n) => ({ mountedGroups: new Map(n.mountedGroups).set(d, {
		defaultLayoutDeferred: C.defaultLayoutDeferred,
		derivedPanelConstraints: C.derivedPanelConstraints,
		layout: V,
		separatorToPanels: C.separatorToPanels
	}) }));
}
function me(n) {
	if (n.defaultPrevented) return;
	let s = n.currentTarget, d = te(s);
	if (!d.disabled) switch (n.key) {
		case "ArrowDown":
			n.preventDefault(), d.orientation === "vertical" && O(s, 5);
			break;
		case "ArrowLeft":
			n.preventDefault(), d.orientation === "horizontal" && O(s, -5);
			break;
		case "ArrowRight":
			n.preventDefault(), d.orientation === "horizontal" && O(s, 5);
			break;
		case "ArrowUp":
			n.preventDefault(), d.orientation === "vertical" && O(s, -5);
			break;
		case "End":
			n.preventDefault(), O(s, 100);
			break;
		case "Enter": {
			n.preventDefault();
			let d = te(s), { derivedPanelConstraints: C, layout: w, separatorToPanels: k } = Ge(d), F = d.separators.find((n) => n.element === s);
			z(F, "Matching separator not found");
			let L = k.get(F);
			z(L, "Matching panels not found");
			let V = L[0], U = C.find((n) => n.panelId === V.id);
			if (z(U, "Panel metadata not found"), U.collapsible) {
				let n = w[V.id];
				O(s, (U.collapsedSize === n ? d.inMemoryLastExpandedPanelSizes[V.id] ?? U.minSize : U.collapsedSize) - n);
			}
			break;
		}
		case "F6": {
			n.preventDefault();
			let d = te(s).separators.map((n) => n.element), C = Array.from(d).findIndex((s) => s === n.currentTarget);
			z(C !== null, "Index not found"), d[n.shiftKey ? C > 0 ? C - 1 : d.length - 1 : C + 1 < d.length ? C + 1 : 0].focus();
			break;
		}
		case "Home":
			n.preventDefault(), O(s, -100);
			break;
	}
}
var lt = (n) => n, ne = () => {}, De = 1, Oe = 2, Te = 4, Ne = 8, he = {
	coarse: 10,
	precise: 5
};
function ut(n, s, d) {
	let C, w = {
		x: Infinity,
		y: Infinity
	};
	for (let k of s) {
		let s = Ee(d, k.rect);
		switch (n) {
			case "horizontal":
				s.x <= w.x && (C = k, w = s);
				break;
			case "vertical":
				s.y <= w.y && (C = k, w = s);
				break;
		}
	}
	return C ? {
		distance: w,
		hitRegion: C
	} : void 0;
}
var ee;
function ct() {
	return ee === void 0 && (ee = typeof matchMedia == "function" ? !!matchMedia("(pointer:coarse)").matches : !1), ee;
}
function ft(n) {
	return typeof n == "object" && !!n && "nodeType" in n && n.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}
function dt(n, s) {
	if (n === s) throw Error("Cannot compare node with itself");
	let d = {
		a: Se(n),
		b: Se(s)
	}, C;
	for (; d.a.at(-1) === d.b.at(-1);) n = d.a.pop(), s = d.b.pop(), C = n;
	z(C, "Stacking order can only be calculated for elements with a common ancestor");
	let w = {
		a: ge(ye(d.a)),
		b: ge(ye(d.b))
	};
	if (w.a === w.b) {
		let n = C.childNodes, s = {
			a: d.a.at(-1),
			b: d.b.at(-1)
		}, w = n.length;
		for (; w--;) {
			let d = n[w];
			if (d === s.a) return 1;
			if (d === s.b) return -1;
		}
	}
	return Math.sign(w.a - w.b);
}
var pt = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function mt(n) {
	let s = getComputedStyle(_e(n) ?? n).display;
	return s === "flex" || s === "inline-flex";
}
function ht(n) {
	let s = getComputedStyle(n);
	return !!(s.position === "fixed" || s.zIndex !== "auto" && (s.position !== "static" || mt(n)) || +s.opacity < 1 || "transform" in s && s.transform !== "none" || "webkitTransform" in s && s.webkitTransform !== "none" || "mixBlendMode" in s && s.mixBlendMode !== "normal" || "filter" in s && s.filter !== "none" || "webkitFilter" in s && s.webkitFilter !== "none" || "isolation" in s && s.isolation === "isolate" || pt.test(s.willChange) || s.webkitOverflowScrolling === "touch");
}
function ye(n) {
	let s = n.length;
	for (; s--;) {
		let d = n[s];
		if (z(d, "Missing node"), ht(d)) return d;
	}
	return null;
}
function ge(n) {
	return n && Number(getComputedStyle(n).zIndex) || 0;
}
function Se(n) {
	let s = [];
	for (; n;) s.push(n), n = _e(n);
	return s;
}
function _e(n) {
	let { parentNode: s } = n;
	return ft(s) ? s.host : s;
}
function yt(n, s) {
	return n.x < s.x + s.width && n.x + n.width > s.x && n.y < s.y + s.height && n.y + n.height > s.y;
}
function gt({ groupElement: n, hitRegion: s, pointerEventTarget: d }) {
	if (!Me(d) || d.contains(n) || n.contains(d)) return !0;
	if (dt(d, n) > 0) {
		let C = d;
		for (; C;) {
			if (C.contains(n)) return !0;
			if (yt(C.getBoundingClientRect(), s)) return !1;
			C = C.parentElement;
		}
	}
	return !0;
}
function Ae(n, s) {
	let d = [];
	return s.forEach((s, C) => {
		if (C.disabled) return;
		let w = ct() ? he.coarse : he.precise, k = Ie(C), F = ut(C.orientation, k, {
			x: n.clientX,
			y: n.clientY
		});
		F && F.distance.x <= w && F.distance.y <= w && gt({
			groupElement: C.element,
			hitRegion: F.hitRegion.rect,
			pointerEventTarget: n.target
		}) && d.push(F.hitRegion);
	}), d;
}
function ve(n) {
	if (n.defaultPrevented || n.pointerType === "mouse" && n.button > 0) return;
	let { mountedGroups: s } = D(), d = Ae(n, s), C = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Map(), L = !1;
	d.forEach((n) => {
		C.add(n.group), n.panels.forEach((n) => {
			w.add(n);
		}), n.separator && (k.add(n.separator), L || (L = !0, n.separator.element.focus()));
		let d = s.get(n.group);
		d && F.set(n.group, d.layout);
	}), I({ interactionState: {
		hitRegions: d,
		initialLayoutMap: F,
		pointerDownAtPoint: {
			x: n.clientX,
			y: n.clientY
		},
		state: "active"
	} }), d.length && n.preventDefault();
}
function St({ cursorFlags: n, groups: s, state: d }) {
	let C = 0, w = 0;
	switch (d) {
		case "active":
		case "hover": s.forEach((n) => {
			if (!n.disableCursor) switch (n.orientation) {
				case "horizontal":
					C++;
					break;
				case "vertical":
					w++;
					break;
			}
		});
	}
	if (C === 0 && w === 0) return null;
	switch (d) {
		case "active": {
			let s = (n & De) !== 0, d = (n & Oe) !== 0, C = (n & Te) !== 0, w = (n & Ne) !== 0;
			if (n) {
				if (s) return C ? "se-resize" : w ? "ne-resize" : "e-resize";
				if (d) return C ? "sw-resize" : w ? "nw-resize" : "w-resize";
				if (C) return "s-resize";
				if (w) return "n-resize";
			}
			break;
		}
	}
	return C > 0 && w > 0 ? "move" : C > 0 ? "ew-resize" : "ns-resize";
}
var xe = /* @__PURE__ */ new WeakMap();
function se(n) {
	if (n.defaultView === null || n.defaultView === void 0) return;
	let { prevStyle: s, styleSheet: d } = xe.get(n) ?? {};
	d === void 0 && (d = new n.defaultView.CSSStyleSheet(), n.adoptedStyleSheets = [d]);
	let { cursorFlags: C, interactionState: w } = D();
	switch (w.state) {
		case "active":
		case "hover": {
			let n = St({
				cursorFlags: C,
				groups: w.hitRegions.map((n) => n.group),
				state: w.state
			}), k = `*{cursor: ${n} !important; ${w.state === "active" ? "touch-action: none;" : ""} }`;
			if (s === k) return;
			s = k, n ? d.cssRules.length === 0 ? d.insertRule(k) : d.replaceSync(k) : d.cssRules.length === 1 && d.deleteRule(0);
			break;
		}
		case "inactive":
			s = void 0, d.cssRules.length === 1 && d.deleteRule(0);
			break;
	}
	xe.set(n, {
		prevStyle: s,
		styleSheet: d
	});
}
function $e({ document: n, event: s, hitRegions: d, initialLayoutMap: C, mountedGroups: w, pointerDownAtPoint: k }) {
	let F = 0, L = new Map(w);
	d.forEach((n) => {
		let { group: d, groupSize: V } = n, { disableCursor: U, orientation: K, panels: q } = d, J = 0;
		J = k ? K === "horizontal" ? (s.clientX - k.x) / V * 100 : (s.clientY - k.y) / V * 100 : K === "horizontal" ? s.clientX < 0 ? -100 : 100 : s.clientY < 0 ? -100 : 100;
		let X = C.get(d), { defaultLayoutDeferred: $, derivedPanelConstraints: Hk, layout: Uk, separatorToPanels: Wk } = w.get(d) ?? { defaultLayoutDeferred: !1 };
		if (Hk && X && Uk && Wk) {
			let s = Z({
				delta: J,
				initialLayout: X,
				panelConstraints: Hk,
				pivotIndices: n.panels.map((n) => q.indexOf(n)),
				prevLayout: Uk,
				trigger: "mouse-or-touch"
			});
			if (B(s, Uk)) {
				if (J !== 0 && !U) switch (K) {
					case "horizontal":
						F |= J < 0 ? De : Oe;
						break;
					case "vertical":
						F |= J < 0 ? Te : Ne;
						break;
				}
			} else {
				L.set(n.group, {
					defaultLayoutDeferred: $,
					derivedPanelConstraints: Hk,
					layout: s,
					separatorToPanels: Wk
				});
				let d = n.group.panels.map(({ id: n }) => n).join(",");
				n.group.inMemoryLayouts[d] = s;
			}
		}
	}), I({
		cursorFlags: F,
		mountedGroups: L
	}), se(n);
}
function ze(n) {
	let { interactionState: s, mountedGroups: d } = D();
	switch (s.state) {
		case "active": $e({
			document: n.currentTarget,
			event: n,
			hitRegions: s.hitRegions,
			initialLayoutMap: s.initialLayoutMap,
			mountedGroups: d
		});
	}
}
function be(n) {
	if (n.defaultPrevented) return;
	let { interactionState: s, mountedGroups: d } = D();
	switch (s.state) {
		case "active":
			if (n.buttons === 0) {
				I((n) => n.interactionState.state === "inactive" ? n : {
					cursorFlags: 0,
					interactionState: { state: "inactive" }
				});
				return;
			}
			$e({
				document: n.currentTarget,
				event: n,
				hitRegions: s.hitRegions,
				initialLayoutMap: s.initialLayoutMap,
				mountedGroups: d,
				pointerDownAtPoint: s.pointerDownAtPoint
			});
			break;
		default: {
			let C = Ae(n, d);
			C.length === 0 ? s.state !== "inactive" && I({ interactionState: { state: "inactive" } }) : I({ interactionState: {
				hitRegions: C,
				state: "hover"
			} }), se(n.currentTarget);
			break;
		}
	}
}
function we(n) {
	if (n.defaultPrevented || n.pointerType === "mouse" && n.button > 0) return;
	n.preventDefault();
	let { interactionState: s } = D();
	switch (s.state) {
		case "active": I({
			cursorFlags: 0,
			interactionState: { state: "inactive" }
		}), se(n.currentTarget);
	}
}
function Le(n) {
	let s = 0, d = 0, C = {};
	for (let w of n) if (w.defaultSize !== void 0) {
		s++;
		let n = G(w.defaultSize);
		d += n, C[w.panelId] = n;
	} else C[w.panelId] = void 0;
	let w = n.length - s;
	if (w !== 0) {
		let s = G((100 - d) / w);
		for (let d of n) d.defaultSize === void 0 && (C[d.panelId] = s);
	}
	return C;
}
function vt(n, s, d) {
	if (!d[0]) return;
	let C = n.panels.find((n) => n.element === s);
	if (!C || !C.onResize) return;
	let w = W({ group: n }), k = n.orientation === "horizontal" ? C.element.offsetWidth : C.element.offsetHeight, F = C.mutableValues.prevSize, L = {
		asPercentage: G(k / w * 100),
		inPixels: k
	};
	C.mutableValues.prevSize = L, C.onResize(L, C.id, F);
}
function xt(n, s) {
	if (Object.keys(n).length !== Object.keys(s).length) return !1;
	for (let d in n) if (n[d] !== s[d]) return !1;
	return !0;
}
function zt(n, s) {
	let d = n.map((n) => n.id), C = Object.keys(s);
	if (d.length !== C.length) return !1;
	for (let n of d) if (!C.includes(n)) return !1;
	return !0;
}
var j = /* @__PURE__ */ new Map();
function bt(n) {
	let s = !0;
	z(n.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
	let d = n.element.ownerDocument.defaultView.ResizeObserver, C = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), k = new d((d) => {
		for (let C of d) {
			let { borderBoxSize: d, target: w } = C;
			if (w === n.element) {
				if (s) {
					if (W({ group: n }) === 0) return;
					I((s) => {
						let d = s.mountedGroups.get(n);
						if (d) {
							let C = pe(n), w = d.defaultLayoutDeferred ? Le(C) : d.layout, k = _({
								layout: w,
								panelConstraints: C
							});
							return !d.defaultLayoutDeferred && B(w, k) && xt(d.derivedPanelConstraints, C) ? s : { mountedGroups: new Map(s.mountedGroups).set(n, {
								defaultLayoutDeferred: !1,
								derivedPanelConstraints: C,
								layout: k,
								separatorToPanels: d.separatorToPanels
							}) };
						}
						return s;
					});
				}
			} else vt(n, w, d);
		}
	});
	k.observe(n.element), n.panels.forEach((n) => {
		z(!C.has(n.id), `Panel ids must be unique; id "${n.id}" was used more than once`), C.add(n.id), n.onResize && k.observe(n.element);
	});
	let F = W({ group: n }), L = pe(n), V = n.panels.map(({ id: n }) => n).join(","), U = n.defaultLayout;
	U && (zt(n.panels, U) || (U = void 0));
	let K = _({
		layout: n.inMemoryLayouts[V] ?? U ?? Le(L),
		panelConstraints: L
	}), q = Ie(n), J = n.element.ownerDocument;
	return I((s) => {
		let d = /* @__PURE__ */ new Map();
		return j.set(J, (j.get(J) ?? 0) + 1), q.forEach((n) => {
			n.separator && d.set(n.separator, n.panels);
		}), { mountedGroups: new Map(s.mountedGroups).set(n, {
			defaultLayoutDeferred: F === 0,
			derivedPanelConstraints: L,
			layout: K,
			separatorToPanels: d
		}) };
	}), n.separators.forEach((n) => {
		z(!w.has(n.id), `Separator ids must be unique; id "${n.id}" was used more than once`), w.add(n.id), n.element.addEventListener("keydown", me);
	}), j.get(J) === 1 && (J.addEventListener("pointerdown", ve, !0), J.addEventListener("pointerleave", ze), J.addEventListener("pointermove", be), J.addEventListener("pointerup", we, !0)), function() {
		s = !1, j.set(J, Math.max(0, (j.get(J) ?? 0) - 1)), I((s) => {
			let d = new Map(s.mountedGroups);
			return d.delete(n), { mountedGroups: d };
		}), n.separators.forEach((n) => {
			n.element.removeEventListener("keydown", me);
		}), j.get(J) || (J.removeEventListener("pointerdown", ve, !0), J.removeEventListener("pointerleave", ze), J.removeEventListener("pointermove", be), J.removeEventListener("pointerup", we, !0)), k.disconnect();
	};
}
function wt() {
	let [n, s] = useState({});
	return [n, useCallback(() => s({}), [])];
}
function ae(n) {
	let s = useId();
	return `${n ?? s}`;
}
var A = typeof window < "u" ? useLayoutEffect : useEffect;
function le(n) {
	let s = useRef(n);
	return A(() => {
		s.current = n;
	}, [n]), useCallback((...n) => s.current?.(...n), [s]);
}
function ue(...n) {
	return le((s) => {
		n.forEach((n) => {
			if (n) switch (typeof n) {
				case "function":
					n(s);
					break;
				case "object":
					n.current = s;
					break;
			}
		});
	});
}
function Lt(n) {
	let s = useRef({ ...n });
	return A(() => {
		for (let d in n) s.current[d] = n[d];
	}, [n]), s.current;
}
var Fe = "--react-resizable-panels--panel--pointer-events";
function Ve(n, s) {
	return `--react-resizable-panels--${n.replace(/[^a-zA-Z0-9\-_]/g, "")}--${s.replace(/[^a-zA-Z0-9\-_]/g, "")}`;
}
var je = createContext(null);
function Pt(n, s) {
	let d = useRef({
		getLayout: () => ({}),
		setLayout: lt
	});
	useImperativeHandle(s, () => d.current, []), A(() => {
		Object.assign(d.current, ke({ groupId: n }));
	});
}
function Rt({ children: n, className: s, defaultLayout: d, disableCursor: C, disabled: w, elementRef: k, groupRef: F, id: L, onLayoutChange: V, orientation: U = "horizontal", style: K, ...J }) {
	let X = useRef({}), $ = le((n) => {
		B(X.current, n) || (X.current = n, V?.(n));
	}), Hk = ae(L), Kk = useRef(null), [qk, Jk] = useState(!1), [Yk, Zk] = useState(d ?? {}), [Qk, $k] = wt(), eA = useRef({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		separators: []
	}), tA = ue(Kk, k);
	Pt(Hk, F);
	let nA = useMemo(() => ({
		id: Hk,
		orientation: U,
		registerPanel: (n) => {
			let s = eA.current;
			return s.panels = ie(U, [...s.panels, n]), $k(), () => {
				s.panels = s.panels.filter((s) => s !== n), $k();
			};
		},
		registerSeparator: (n) => {
			let s = eA.current;
			return s.separators = ie(U, [...s.separators, n]), $k(), () => {
				s.separators = s.separators.filter((s) => s !== n), $k();
			};
		}
	}), [
		Hk,
		$k,
		U
	]), rA = Lt({
		defaultLayout: d,
		disableCursor: C
	}), iA = useRef(null);
	A(() => {
		let n = Kk.current;
		if (n === null) return;
		let s = eA.current, d = {
			defaultLayout: rA.defaultLayout,
			disableCursor: !!rA.disableCursor,
			disabled: !!w,
			element: n,
			id: Hk,
			inMemoryLastExpandedPanelSizes: eA.current.lastExpandedPanelSizes,
			inMemoryLayouts: eA.current.layouts,
			orientation: U,
			panels: s.panels,
			separators: s.separators
		};
		iA.current = d;
		let C = bt(d), k = D().mountedGroups.get(d);
		if (k) {
			let { defaultLayoutDeferred: n, derivedPanelConstraints: s, layout: d } = k;
			!n && s.length > 0 && (Zk(d), $?.(d));
		}
		let F = T.addListener("interactionStateChange", (n) => {
			switch (n.state) {
				case "active":
					Jk(n.hitRegions.some((n) => n.group === d));
					break;
				default:
					Jk(!1);
					break;
			}
		}), L = T.addListener("mountedGroupsChange", (n) => {
			let s = n.get(d);
			if (s) {
				let { defaultLayoutDeferred: n, derivedPanelConstraints: d, layout: C } = s;
				if (n || d.length === 0) return;
				Zk(C), $?.(C);
			}
		});
		return () => {
			iA.current = null, C(), F(), L();
		};
	}, [
		w,
		Hk,
		$,
		U,
		Qk,
		rA
	]), useEffect(() => {
		let n = iA.current;
		n && (n.defaultLayout = d, n.disableCursor = !!C);
	});
	let aA = { [Fe]: qk ? "none" : void 0 };
	for (let n in Yk) {
		let s = Ve(Hk, n);
		aA[s] = Yk[n];
	}
	return /* @__PURE__ */ jsx(je.Provider, {
		value: nA,
		children: /* @__PURE__ */ jsx("div", {
			...J,
			"aria-orientation": U,
			className: s,
			"data-group": !0,
			"data-testid": Hk,
			id: Hk,
			ref: tA,
			style: {
				height: "100%",
				width: "100%",
				overflow: "hidden",
				...K,
				...aA,
				display: "flex",
				flexDirection: U === "horizontal" ? "row" : "column",
				flexWrap: "nowrap"
			},
			children: n
		})
	});
}
Rt.displayName = "Group";
function ce() {
	let n = useContext(je);
	return z(n, "Group Context not found; did you render a Panel or Separator outside of a Group?"), n;
}
function Et({ groupId: n, panelId: s }) {
	let d = () => {
		let { mountedGroups: s } = D();
		for (let [d, { defaultLayoutDeferred: C, derivedPanelConstraints: w, layout: k, separatorToPanels: F }] of s) if (d.id === n) return {
			defaultLayoutDeferred: C,
			derivedPanelConstraints: w,
			group: d,
			layout: k,
			separatorToPanels: F
		};
		throw Error(`Group ${n} not found`);
	}, C = () => {
		let n = d().derivedPanelConstraints.find((n) => n.panelId === s);
		if (n !== void 0) return n;
		throw Error(`Panel constraints not found for Panel ${s}`);
	}, w = () => {
		let n = d().group.panels.find((n) => n.id === s);
		if (n !== void 0) return n;
		throw Error(`Layout not found for Panel ${s}`);
	}, k = () => {
		let n = d().layout[s];
		if (n !== void 0) return n;
		throw Error(`Layout not found for Panel ${s}`);
	}, F = (n) => {
		let C = k();
		if (n === C) return;
		let { defaultLayoutDeferred: w, derivedPanelConstraints: F, group: L, layout: V, separatorToPanels: U } = d(), K = L.panels.findIndex((n) => n.id === s), q = K === L.panels.length - 1, J = _({
			layout: Z({
				delta: q ? C - n : n - C,
				initialLayout: V,
				panelConstraints: F,
				pivotIndices: q ? [K - 1, K] : [K, K + 1],
				prevLayout: V,
				trigger: "imperative-api"
			}),
			panelConstraints: F
		});
		B(V, J) || I((n) => ({ mountedGroups: new Map(n.mountedGroups).set(L, {
			defaultLayoutDeferred: w,
			derivedPanelConstraints: F,
			layout: J,
			separatorToPanels: U
		}) }));
	};
	return {
		collapse: () => {
			let { collapsible: n, collapsedSize: s } = C(), { mutableValues: d } = w(), L = k();
			n && L !== s && (d.expandToSize = L, F(s));
		},
		expand: () => {
			let { collapsible: n, collapsedSize: s, minSize: d } = C(), { mutableValues: L } = w(), V = k();
			if (n && V === s) {
				let n = L.expandToSize ?? d;
				n === 0 && (n = 1), F(n);
			}
		},
		getSize: () => {
			let { group: n } = d(), s = k(), { element: C } = w();
			return {
				asPercentage: s,
				inPixels: n.orientation === "horizontal" ? C.offsetWidth : C.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: n, collapsedSize: s } = C(), d = k();
			return n && R$1(s, d);
		},
		resize: (n) => {
			if (k() !== n) {
				let s;
				switch (typeof n) {
					case "number": {
						let { group: C } = d();
						s = G(n / W({ group: C }) * 100);
						break;
					}
					case "string":
						s = parseFloat(n);
						break;
				}
				F(s);
			}
		}
	};
}
function It(n, s) {
	let { id: d } = ce(), C = useRef({
		collapse: ne,
		expand: ne,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: ne
	});
	useImperativeHandle(s, () => C.current, []), A(() => {
		Object.assign(C.current, Et({
			groupId: d,
			panelId: n
		}));
	});
}
function kt({ children: n, className: s, collapsedSize: d = "0%", collapsible: C = !1, defaultSize: w, elementRef: k, id: F, maxSize: L = "100%", minSize: V = "0%", onResize: U, panelRef: K, style: q, ...J }) {
	let X = !!F, $ = ae(F), Hk = useRef(null), Uk = ue(Hk, k), { id: Gk, registerPanel: Kk } = ce(), qk = U !== null, Jk = le((n, s, d) => {
		U?.(n, F, d);
	});
	A(() => {
		let n = Hk.current;
		if (n !== null) return Kk({
			element: n,
			id: $,
			idIsStable: X,
			mutableValues: {
				expandToSize: void 0,
				prevSize: void 0
			},
			onResize: qk ? Jk : void 0,
			panelConstraints: {
				collapsedSize: d,
				collapsible: C,
				defaultSize: w,
				maxSize: L,
				minSize: V
			}
		});
	}, [
		d,
		C,
		w,
		qk,
		$,
		X,
		L,
		V,
		Jk,
		Kk
	]), It($, K);
	let Yk = Ve(Gk, $);
	return /* @__PURE__ */ jsx("div", {
		...J,
		"data-panel": !0,
		"data-testid": $,
		id: $,
		ref: Uk,
		style: {
			...Gt,
			flexBasis: 0,
			flexGrow: `var(${Yk}, 1)`,
			flexShrink: 1,
			overflow: "hidden",
			pointerEvents: `var(${Fe})`
		},
		children: /* @__PURE__ */ jsx("div", {
			className: s,
			style: {
				width: "100%",
				height: "100%",
				...q
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
function Dt({ layout: n, panelConstraints: s, panelId: d, panelIndex: C }) {
	let w, k, F = n[d], L = s.find((n) => n.panelId === d);
	if (L) {
		let V = L.maxSize, U = k = L.collapsible ? L.collapsedSize : L.minSize, K = [C, C + 1];
		k = _({
			layout: Z({
				delta: U - F,
				initialLayout: n,
				panelConstraints: s,
				pivotIndices: K,
				prevLayout: n,
				trigger: "keyboard"
			}),
			panelConstraints: s
		})[d], w = _({
			layout: Z({
				delta: V - F,
				initialLayout: n,
				panelConstraints: s,
				pivotIndices: K,
				prevLayout: n,
				trigger: "keyboard"
			}),
			panelConstraints: s
		})[d];
	}
	return {
		valueControls: d,
		valueMax: w,
		valueMin: k,
		valueNow: F
	};
}
function Ot({ children: n, className: s, elementRef: d, id: C, style: w, ...k }) {
	let F = ae(C), [L, V] = useState({}), [U, K] = useState("inactive"), q = useRef(null), J = ue(q, d), { id: X, orientation: $, registerSeparator: Hk } = ce(), Uk = $ === "horizontal" ? "vertical" : "horizontal";
	return A(() => {
		let n = q.current;
		if (n !== null) {
			let s = {
				element: n,
				id: F
			}, d = Hk(s), C = T.addListener("interactionStateChange", (n) => {
				K(n.state !== "inactive" && n.hitRegions.some((n) => n.separator === s) ? n.state : "inactive");
			}), w = T.addListener("mountedGroupsChange", (n) => {
				n.forEach(({ derivedPanelConstraints: n, layout: d, separatorToPanels: C }, w) => {
					if (w.id === X) {
						let k = C.get(s);
						if (k) {
							let s = k[0], C = w.panels.indexOf(s);
							V(Dt({
								layout: d,
								panelConstraints: n,
								panelId: s.id,
								panelIndex: C
							}));
						}
					}
				});
			});
			return () => {
				C(), w(), d();
			};
		}
	}, [
		X,
		F,
		Hk
	]), /* @__PURE__ */ jsx("div", {
		...k,
		"aria-controls": L.valueControls,
		"aria-orientation": Uk,
		"aria-valuemax": L.valueMax,
		"aria-valuemin": L.valueMin,
		"aria-valuenow": L.valueNow,
		children: n,
		className: s,
		"data-separator": U,
		"data-testid": F,
		id: F,
		ref: J,
		role: "separator",
		style: {
			flexBasis: "auto",
			...w,
			flexGrow: 0,
			flexShrink: 0
		},
		tabIndex: 0
	});
}
Ot.displayName = "Separator";
function _objectWithoutPropertiesLoose(n, s) {
	if (n == null) return {};
	var d = {}, C = Object.keys(n), w, k;
	for (k = 0; k < C.length; k++) w = C[k], !(s.indexOf(w) >= 0) && (d[w] = n[w]);
	return d;
}
var _excluded$T = ["color"], CheckIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$T);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$Y = ["color"], ChevronRightIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$Y);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1r = ["color"], Cross2Icon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$1r);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1M = ["color"], DoubleArrowLeftIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$1M);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1N = ["color"], DoubleArrowRightIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$1N);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$25 = ["color"], EyeNoneIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$25);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$26 = ["color"], EyeOpenIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$26);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$2l = ["color"], GearIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$2l);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3x = ["color"], PlusIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$3x);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3V = ["color"], Share1Icon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$3V);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",
		fill: C,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$4G = ["color"], TrashIcon = /* @__PURE__ */ forwardRef(function(n, s) {
	var d = n.color, C = d === void 0 ? "currentColor" : d, w = _objectWithoutPropertiesLoose(n, _excluded$4G);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, w, { ref: s }), createElement("path", {
		d: "M5.5 1C5.22386 1 5 1.22386 5 1.5C5 1.77614 5.22386 2 5.5 2H9.5C9.77614 2 10 1.77614 10 1.5C10 1.22386 9.77614 1 9.5 1H5.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H5H10H11.5C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H11V12C11 12.5523 10.5523 13 10 13H5C4.44772 13 4 12.5523 4 12V4L3.5 4C3.22386 4 3 3.77614 3 3.5ZM5 4H10V12H5V4Z",
		fill: C,
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
const EditorProvider = ({ children: n, isList: d = !1, availableProps: C = [], theme: w = "light" }) => {
	let [k, F] = useState({
		elements: [],
		selectedElementId: null,
		isList: d,
		mockData: [],
		singleMockData: {},
		listSettings: {
			sortOrder: "asc",
			newestPosition: "bottom",
			scrollDirection: "down"
		},
		availableProps: C,
		availableFonts: [
			...SAFE_FONTS,
			"Roboto",
			"Open Sans",
			"Lato",
			"Montserrat"
		],
		theme: w
	});
	React.useEffect(() => {
		k.availableFonts.forEach((n) => {
			if (SAFE_FONTS.includes(n)) return;
			let s = `font-${n.replace(/\s+/g, "-").toLowerCase()}`;
			if (!document.getElementById(s)) {
				let d = document.createElement("link");
				d.id = s, d.href = `https://fonts.googleapis.com/css2?family=${n.replace(/ /g, "+")}&display=swap`, d.rel = "stylesheet", document.head.appendChild(d);
			}
		});
	}, [k.availableFonts]), React.useEffect(() => {
		F((n) => ({
			...n,
			isList: d,
			availableProps: C,
			theme: w
		}));
	}, [
		d,
		C,
		w
	]);
	let L = React.useCallback((n) => {
		F((s) => ({
			...s,
			canvasHeight: n
		}));
	}, []), V = React.useCallback((n) => {
		F((s) => ({
			...s,
			...n,
			isList: n.isList ?? s.isList,
			availableProps: n.availableProps ?? s.availableProps,
			availableFonts: n.availableFonts ?? s.availableFonts,
			selectedElementId: null
		}));
	}, []), U = React.useCallback((n) => {
		let s = {};
		n.type === "box" && (s.backgroundColor = "var(--gray-4)");
		let d = {
			id: crypto.randomUUID(),
			x: 50,
			y: 50,
			width: 200,
			height: n.type === "text" ? 50 : 150,
			...n,
			style: {
				...s,
				...n.style || {}
			}
		};
		F((n) => ({
			...n,
			elements: [...n.elements, d]
		}));
	}, []), K = React.useCallback((n) => {
		F((s) => ({
			...s,
			elements: s.elements.filter((s) => s.id !== n),
			selectedElementId: s.selectedElementId === n ? null : s.selectedElementId
		}));
	}, []), q = React.useCallback((n) => {
		F((s) => ({
			...s,
			selectedElementId: n
		}));
	}, []), J = React.useCallback((n, s) => {
		F((d) => {
			let C = [...d.elements], w = C[n];
			return C.splice(n, 1), C.splice(s, 0, w), {
				...d,
				elements: C
			};
		});
	}, []), X = React.useCallback((n, s) => {
		F((d) => ({
			...d,
			elements: d.elements.map((d) => d.id === n ? {
				...d,
				...s
			} : d)
		}));
	}, []), $ = React.useCallback((n, s) => {
		F((d) => ({
			...d,
			mockData: n,
			singleMockData: s
		}));
	}, []), Hk = React.useCallback((n) => {
		F((s) => ({
			...s,
			listSettings: {
				...s.listSettings,
				...n
			}
		}));
	}, []), Uk = React.useMemo(() => ({
		state: k,
		addElement: U,
		removeElement: K,
		selectElement: q,
		moveElement: J,
		updateElement: X,
		setMockData: $,
		updateListSettings: Hk,
		setCanvasHeight: L,
		loadState: V
	}), [
		k,
		U,
		K,
		q,
		J,
		X,
		$,
		Hk,
		L,
		V
	]);
	return /* @__PURE__ */ jsx(EditorContext.Provider, {
		value: Uk,
		children: n
	});
}, useEditor = () => {
	let n = useContext(EditorContext);
	if (!n) throw Error("useEditor must be used within an EditorProvider");
	return n;
};
var __assign$1 = function() {
	return __assign$1 = Object.assign || function(n) {
		for (var s, d = 1, C = arguments.length; d < C; d++) for (var w in s = arguments[d], s) Object.prototype.hasOwnProperty.call(s, w) && (n[w] = s[w]);
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
	var s = n.onResizeStart, d = n.direction, C = n.children, w = n.replaceStyles, k = n.className, F = useCallback(function(n) {
		s(n, d);
	}, [s, d]), L = useCallback(function(n) {
		s(n, d);
	}, [s, d]), V = useMemo(function() {
		return __assign$1(__assign$1({
			position: "absolute",
			userSelect: "none"
		}, styles[d]), w ?? {});
	}, [w, d]);
	return jsx("div", {
		className: k || void 0,
		style: V,
		onMouseDown: F,
		onTouchStart: L,
		children: C
	});
}), __extends = (function() {
	var n = function(s, d) {
		return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
			n.__proto__ = s;
		} || function(n, s) {
			for (var d in s) Object.prototype.hasOwnProperty.call(s, d) && (n[d] = s[d]);
		}, n(s, d);
	};
	return function(s, d) {
		if (typeof d != "function" && d !== null) throw TypeError("Class extends value " + String(d) + " is not a constructor or null");
		n(s, d);
		function C() {
			this.constructor = s;
		}
		s.prototype = d === null ? Object.create(d) : (C.prototype = d.prototype, new C());
	};
})(), __assign = function() {
	return __assign = Object.assign || function(n) {
		for (var s, d = 1, C = arguments.length; d < C; d++) for (var w in s = arguments[d], s) Object.prototype.hasOwnProperty.call(s, w) && (n[w] = s[w]);
		return n;
	}, __assign.apply(this, arguments);
}, DEFAULT_SIZE = {
	width: "auto",
	height: "auto"
}, clamp$1 = function(n, s, d) {
	return Math.max(Math.min(n, d), s);
}, snap = function(n, s, d) {
	var C = Math.round(n / s);
	return C * s + d * (C - 1);
}, hasDirection = function(n, s) {
	return new RegExp(n, "i").test(s);
}, isTouchEvent = function(n) {
	return !!(n.touches && n.touches.length);
}, isMouseEvent = function(n) {
	return !!((n.clientX || n.clientX === 0) && (n.clientY || n.clientY === 0));
}, findClosestSnap = function(n, s, d) {
	d === void 0 && (d = 0);
	var C = s.reduce(function(d, C, w) {
		return Math.abs(C - n) < Math.abs(s[d] - n) ? w : d;
	}, 0), w = Math.abs(s[C] - n);
	return d === 0 || w < d ? s[C] : n;
}, getStringSize = function(n) {
	return n = n.toString(), n === "auto" || n.endsWith("px") || n.endsWith("%") || n.endsWith("vh") || n.endsWith("vw") || n.endsWith("vmax") || n.endsWith("vmin") ? n : `${n}px`;
}, getPixelSize = function(n, s, d, C) {
	if (n && typeof n == "string") {
		if (n.endsWith("px")) return Number(n.replace("px", ""));
		if (n.endsWith("%")) {
			var w = Number(n.replace("%", "")) / 100;
			return s * w;
		}
		if (n.endsWith("vw")) {
			var w = Number(n.replace("vw", "")) / 100;
			return d * w;
		}
		if (n.endsWith("vh")) {
			var w = Number(n.replace("vh", "")) / 100;
			return C * w;
		}
	}
	return n;
}, calculateNewMax = function(n, s, d, C, w, k, F) {
	return C = getPixelSize(C, n.width, s, d), w = getPixelSize(w, n.height, s, d), k = getPixelSize(k, n.width, s, d), F = getPixelSize(F, n.height, s, d), {
		maxWidth: C === void 0 ? void 0 : Number(C),
		maxHeight: w === void 0 ? void 0 : Number(w),
		minWidth: k === void 0 ? void 0 : Number(k),
		minHeight: F === void 0 ? void 0 : Number(F)
	};
}, normalizeToPair = function(n) {
	return Array.isArray(n) ? n : [n, n];
}, definedProps = /* @__PURE__ */ "as.ref.style.className.grid.gridGap.snap.bounds.boundsByDirection.size.defaultSize.minWidth.minHeight.maxWidth.maxHeight.lockAspectRatio.lockAspectRatioExtraWidth.lockAspectRatioExtraHeight.enable.handleStyles.handleClasses.handleWrapperStyle.handleWrapperClass.children.onResizeStart.onResize.onResizeStop.handleComponent.scale.resizeRatio.snapGap".split("."), baseClassName = "__resizable_base__", Resizable = function(n) {
	__extends(s, n);
	function s(s) {
		var d = n.call(this, s) || this;
		return d.ratio = 1, d.resizable = null, d.parentLeft = 0, d.parentTop = 0, d.resizableLeft = 0, d.resizableRight = 0, d.resizableTop = 0, d.resizableBottom = 0, d.targetLeft = 0, d.targetTop = 0, d.delta = {
			width: 0,
			height: 0
		}, d.appendBase = function() {
			if (!d.resizable || !d.window) return null;
			var n = d.parentNode;
			if (!n) return null;
			var s = d.window.document.createElement("div");
			return s.style.width = "100%", s.style.height = "100%", s.style.position = "absolute", s.style.transform = "scale(0, 0)", s.style.left = "0", s.style.flex = "0 0 100%", s.classList ? s.classList.add(baseClassName) : s.className += baseClassName, n.appendChild(s), s;
		}, d.removeBase = function(n) {
			var s = d.parentNode;
			s && s.removeChild(n);
		}, d.state = {
			isResizing: !1,
			width: d.propsSize?.width ?? "auto",
			height: d.propsSize?.height ?? "auto",
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
		}, d.onResizeStart = d.onResizeStart.bind(d), d.onMouseMove = d.onMouseMove.bind(d), d.onMouseUp = d.onMouseUp.bind(d), d;
	}
	return Object.defineProperty(s.prototype, "parentNode", {
		get: function() {
			return this.resizable ? this.resizable.parentNode : null;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(s.prototype, "window", {
		get: function() {
			return !this.resizable || !this.resizable.ownerDocument ? null : this.resizable.ownerDocument.defaultView;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(s.prototype, "propsSize", {
		get: function() {
			return this.props.size || this.props.defaultSize || DEFAULT_SIZE;
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(s.prototype, "size", {
		get: function() {
			var n = 0, s = 0;
			if (this.resizable && this.window) {
				var d = this.resizable.offsetWidth, C = this.resizable.offsetHeight, w = this.resizable.style.position;
				w !== "relative" && (this.resizable.style.position = "relative"), n = this.resizable.style.width === "auto" ? d : this.resizable.offsetWidth, s = this.resizable.style.height === "auto" ? C : this.resizable.offsetHeight, this.resizable.style.position = w;
			}
			return {
				width: n,
				height: s
			};
		},
		enumerable: !1,
		configurable: !0
	}), Object.defineProperty(s.prototype, "sizeStyle", {
		get: function() {
			var n = this, s = this.props.size, d = function(s) {
				if (n.state[s] === void 0 || n.state[s] === "auto") return "auto";
				if (n.propsSize && n.propsSize[s] && n.propsSize[s]?.toString().endsWith("%")) {
					if (n.state[s].toString().endsWith("%")) return n.state[s].toString();
					var d = n.getParentSize();
					return `${Number(n.state[s].toString().replace("px", "")) / d[s] * 100}%`;
				}
				return getStringSize(n.state[s]);
			};
			return {
				width: s && s.width !== void 0 && !this.state.isResizing ? getStringSize(s.width) : d("width"),
				height: s && s.height !== void 0 && !this.state.isResizing ? getStringSize(s.height) : d("height")
			};
		},
		enumerable: !1,
		configurable: !0
	}), s.prototype.getParentSize = function() {
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
		var s = !1, d = this.parentNode.style.flexWrap;
		d !== "wrap" && (s = !0, this.parentNode.style.flexWrap = "wrap"), n.style.position = "relative", n.style.minWidth = "100%", n.style.minHeight = "100%";
		var C = {
			width: n.offsetWidth,
			height: n.offsetHeight
		};
		return s && (this.parentNode.style.flexWrap = d), this.removeBase(n), C;
	}, s.prototype.bindEvents = function() {
		this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
			capture: !0,
			passive: !1
		}), this.window.addEventListener("touchend", this.onMouseUp));
	}, s.prototype.unbindEvents = function() {
		this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp));
	}, s.prototype.componentDidMount = function() {
		if (!(!this.resizable || !this.window)) {
			var n = this.window.getComputedStyle(this.resizable);
			this.setState({
				width: this.state.width || this.size.width,
				height: this.state.height || this.size.height,
				flexBasis: n.flexBasis === "auto" ? void 0 : n.flexBasis
			});
		}
	}, s.prototype.componentWillUnmount = function() {
		this.window && this.unbindEvents();
	}, s.prototype.createSizeForCssProperty = function(n, s) {
		var d = this.propsSize && this.propsSize[s];
		return this.state[s] === "auto" && this.state.original[s] === n && (d === void 0 || d === "auto") ? "auto" : n;
	}, s.prototype.calculateNewMaxFromBoundary = function(n, s) {
		var d = this.props.boundsByDirection, C = this.state.direction, w = d && hasDirection("left", C), k = d && hasDirection("top", C), F, L;
		if (this.props.bounds === "parent") {
			var V = this.parentNode;
			V && (F = w ? this.resizableRight - this.parentLeft : V.offsetWidth + (this.parentLeft - this.resizableLeft), L = k ? this.resizableBottom - this.parentTop : V.offsetHeight + (this.parentTop - this.resizableTop));
		} else this.props.bounds === "window" ? this.window && (F = w ? this.resizableRight : this.window.innerWidth - this.resizableLeft, L = k ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (F = w ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), L = k ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
		return F && Number.isFinite(F) && (n = n && n < F ? n : F), L && Number.isFinite(L) && (s = s && s < L ? s : L), {
			maxWidth: n,
			maxHeight: s
		};
	}, s.prototype.calculateNewSizeFromDirection = function(n, s) {
		var d = this.props.scale || 1, C = normalizeToPair(this.props.resizeRatio || 1), w = C[0], k = C[1], F = this.state, L = F.direction, V = F.original, U = this.props, K = U.lockAspectRatio, q = U.lockAspectRatioExtraHeight, J = U.lockAspectRatioExtraWidth, X = V.width, $ = V.height, Hk = q || 0, Uk = J || 0;
		return hasDirection("right", L) && (X = V.width + (n - V.x) * w / d, K && ($ = (X - Uk) / this.ratio + Hk)), hasDirection("left", L) && (X = V.width - (n - V.x) * w / d, K && ($ = (X - Uk) / this.ratio + Hk)), hasDirection("bottom", L) && ($ = V.height + (s - V.y) * k / d, K && (X = ($ - Hk) * this.ratio + Uk)), hasDirection("top", L) && ($ = V.height - (s - V.y) * k / d, K && (X = ($ - Hk) * this.ratio + Uk)), {
			newWidth: X,
			newHeight: $
		};
	}, s.prototype.calculateNewSizeFromAspectRatio = function(n, s, d, C) {
		var w = this.props, k = w.lockAspectRatio, F = w.lockAspectRatioExtraHeight, L = w.lockAspectRatioExtraWidth, V = C.width === void 0 ? 10 : C.width, U = d.width === void 0 || d.width < 0 ? n : d.width, K = C.height === void 0 ? 10 : C.height, q = d.height === void 0 || d.height < 0 ? s : d.height, J = F || 0, X = L || 0;
		if (k) {
			var $ = (K - J) * this.ratio + X, Hk = (q - J) * this.ratio + X, Uk = (V - X) / this.ratio + J, Wk = (U - X) / this.ratio + J, Gk = Math.max(V, $), Kk = Math.min(U, Hk), qk = Math.max(K, Uk), Jk = Math.min(q, Wk);
			n = clamp$1(n, Gk, Kk), s = clamp$1(s, qk, Jk);
		} else n = clamp$1(n, V, U), s = clamp$1(s, K, q);
		return {
			newWidth: n,
			newHeight: s
		};
	}, s.prototype.setBoundingClientRect = function() {
		var n = 1 / (this.props.scale || 1);
		if (this.props.bounds === "parent") {
			var s = this.parentNode;
			if (s) {
				var d = s.getBoundingClientRect();
				this.parentLeft = d.left * n, this.parentTop = d.top * n;
			}
		}
		if (this.props.bounds && typeof this.props.bounds != "string") {
			var C = this.props.bounds.getBoundingClientRect();
			this.targetLeft = C.left * n, this.targetTop = C.top * n;
		}
		if (this.resizable) {
			var w = this.resizable.getBoundingClientRect(), k = w.left, F = w.top, L = w.right, V = w.bottom;
			this.resizableLeft = k * n, this.resizableRight = L * n, this.resizableTop = F * n, this.resizableBottom = V * n;
		}
	}, s.prototype.onResizeStart = function(n, s) {
		if (!(!this.resizable || !this.window)) {
			var d = 0, C = 0;
			if (n.nativeEvent && isMouseEvent(n.nativeEvent) ? (d = n.nativeEvent.clientX, C = n.nativeEvent.clientY) : n.nativeEvent && isTouchEvent(n.nativeEvent) && (d = n.nativeEvent.touches[0].clientX, C = n.nativeEvent.touches[0].clientY), !(this.props.onResizeStart && this.resizable && this.props.onResizeStart(n, s, this.resizable) === !1)) {
				this.props.size && (this.props.size.height !== void 0 && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), this.props.size.width !== void 0 && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
				var w, k = this.window.getComputedStyle(this.resizable);
				if (k.flexBasis !== "auto") {
					var F = this.parentNode;
					F && (this.flexDir = this.window.getComputedStyle(F).flexDirection.startsWith("row") ? "row" : "column", w = k.flexBasis);
				}
				this.setBoundingClientRect(), this.bindEvents();
				var L = {
					original: {
						x: d,
						y: C,
						width: this.size.width,
						height: this.size.height
					},
					isResizing: !0,
					backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(n.target).cursor || "auto" }),
					direction: s,
					flexBasis: w
				};
				this.setState(L);
			}
		}
	}, s.prototype.onMouseMove = function(n) {
		var s = this;
		if (!(!this.state.isResizing || !this.resizable || !this.window)) {
			if (this.window.TouchEvent && isTouchEvent(n)) try {
				n.preventDefault(), n.stopPropagation();
			} catch {}
			var d = this.props, C = d.maxWidth, w = d.maxHeight, k = d.minWidth, F = d.minHeight, L = isTouchEvent(n) ? n.touches[0].clientX : n.clientX, V = isTouchEvent(n) ? n.touches[0].clientY : n.clientY, U = this.state, K = U.direction, q = U.original, J = U.width, X = U.height, $ = this.getParentSize(), Hk = calculateNewMax($, this.window.innerWidth, this.window.innerHeight, C, w, k, F);
			C = Hk.maxWidth, w = Hk.maxHeight, k = Hk.minWidth, F = Hk.minHeight;
			var Uk = this.calculateNewSizeFromDirection(L, V), Wk = Uk.newHeight, Gk = Uk.newWidth, Kk = this.calculateNewMaxFromBoundary(C, w);
			this.props.snap && this.props.snap.x && (Gk = findClosestSnap(Gk, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (Wk = findClosestSnap(Wk, this.props.snap.y, this.props.snapGap));
			var qk = this.calculateNewSizeFromAspectRatio(Gk, Wk, {
				width: Kk.maxWidth,
				height: Kk.maxHeight
			}, {
				width: k,
				height: F
			});
			if (Gk = qk.newWidth, Wk = qk.newHeight, this.props.grid) {
				var Yk = snap(Gk, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), Xk = snap(Wk, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), Zk = this.props.snapGap || 0, Qk = Zk === 0 || Math.abs(Yk - Gk) <= Zk ? Yk : Gk, $k = Zk === 0 || Math.abs(Xk - Wk) <= Zk ? Xk : Wk;
				Gk = Qk, Wk = $k;
			}
			var eA = {
				width: Gk - q.width,
				height: Wk - q.height
			};
			if (this.delta = eA, J && typeof J == "string") {
				if (J.endsWith("%")) {
					var tA = Gk / $.width * 100;
					Gk = `${tA}%`;
				} else if (J.endsWith("vw")) {
					var nA = Gk / this.window.innerWidth * 100;
					Gk = `${nA}vw`;
				} else if (J.endsWith("vh")) {
					var rA = Gk / this.window.innerHeight * 100;
					Gk = `${rA}vh`;
				}
			}
			if (X && typeof X == "string") {
				if (X.endsWith("%")) {
					var tA = Wk / $.height * 100;
					Wk = `${tA}%`;
				} else if (X.endsWith("vw")) {
					var nA = Wk / this.window.innerWidth * 100;
					Wk = `${nA}vw`;
				} else if (X.endsWith("vh")) {
					var rA = Wk / this.window.innerHeight * 100;
					Wk = `${rA}vh`;
				}
			}
			var iA = {
				width: this.createSizeForCssProperty(Gk, "width"),
				height: this.createSizeForCssProperty(Wk, "height")
			};
			this.flexDir === "row" ? iA.flexBasis = iA.width : this.flexDir === "column" && (iA.flexBasis = iA.height);
			var aA = this.state.width !== iA.width, oA = this.state.height !== iA.height, sA = this.state.flexBasis !== iA.flexBasis, cA = aA || oA || sA;
			cA && flushSync(function() {
				s.setState(iA);
			}), this.props.onResize && cA && this.props.onResize(n, K, this.resizable, eA);
		}
	}, s.prototype.onMouseUp = function(n) {
		var s = this.state, d = s.isResizing, C = s.direction;
		s.original, !(!d || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(n, C, this.resizable, this.delta), this.props.size && this.setState({
			width: this.props.size.width ?? "auto",
			height: this.props.size.height ?? "auto"
		}), this.unbindEvents(), this.setState({
			isResizing: !1,
			backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: "auto" })
		}));
	}, s.prototype.updateSize = function(n) {
		this.setState({
			width: n.width ?? "auto",
			height: n.height ?? "auto"
		});
	}, s.prototype.renderResizer = function() {
		var n = this, s = this.props, d = s.enable, C = s.handleStyles, w = s.handleClasses, k = s.handleWrapperStyle, F = s.handleWrapperClass, L = s.handleComponent;
		return d ? jsx("div", {
			className: F,
			style: k,
			children: Object.keys(d).map(function(s) {
				return d[s] === !1 ? null : jsx(Resizer, {
					direction: s,
					onResizeStart: n.onResizeStart,
					replaceStyles: C && C[s],
					className: w && w[s],
					children: L && L[s] ? L[s] : null
				}, s);
			})
		}) : null;
	}, s.prototype.render = function() {
		var n = this, s = Object.keys(this.props).reduce(function(s, d) {
			return definedProps.indexOf(d) === -1 && (s[d] = n.props[d]), s;
		}, {}), d = __assign(__assign(__assign({
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
		return this.state.flexBasis && (d.flexBasis = this.state.flexBasis), jsxs(this.props.as || "div", __assign({
			style: d,
			className: this.props.className
		}, s, {
			ref: function(s) {
				s && (n.resizable = s);
			},
			children: [
				this.state.isResizing && jsx("div", { style: this.state.backgroundStyle }),
				this.props.children,
				this.renderResizer()
			]
		}));
	}, s.defaultProps = {
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
	}, s;
}(PureComponent);
const ElementAdvancedSettings = ({ elementId: n, open: s, onOpenChange: d }) => {
	let { state: C, updateElement: w } = useEditor(), k = C.elements.find((s) => s.id === n);
	return k ? /* @__PURE__ */ jsx(s$2, {
		open: s,
		onOpenChange: d,
		children: /* @__PURE__ */ jsxs(p$6, {
			style: {
				maxWidth: 600,
				minHeight: 400
			},
			children: [
				/* @__PURE__ */ jsx(g$1, { children: "Configurações Avançadas" }),
				/* @__PURE__ */ jsxs(m, {
					defaultValue: "formatting",
					children: [/* @__PURE__ */ jsxs(b, { children: [/* @__PURE__ */ jsx(P, {
						value: "formatting",
						children: "Formatação de Dados"
					}), /* @__PURE__ */ jsx(P, {
						value: "conditional",
						children: "Formatação Condicional"
					})] }), /* @__PURE__ */ jsxs(p$1, {
						pt: "3",
						children: [/* @__PURE__ */ jsx(f$1, {
							value: "formatting",
							children: /* @__PURE__ */ jsx(FormattingSettings, {
								element: k,
								updateElement: w
							})
						}), /* @__PURE__ */ jsx(f$1, {
							value: "conditional",
							children: /* @__PURE__ */ jsx(ConditionalSettings, {
								element: k,
								updateElement: w,
								availableProps: C.availableProps
							})
						})]
					})]
				}),
				/* @__PURE__ */ jsx(p, {
					justify: "end",
					mt: "4",
					children: /* @__PURE__ */ jsx(D$1, { children: /* @__PURE__ */ jsx(o, {
						variant: "soft",
						color: "gray",
						children: "Fechar"
					}) })
				})
			]
		})
	}) : null;
};
var FormattingSettings = ({ element: n, updateElement: s }) => {
	let d = n.formatting || { type: "text" }, C = (C) => {
		s(n.id, { formatting: {
			...d,
			...C
		} });
	};
	return /* @__PURE__ */ jsxs(p, {
		direction: "column",
		gap: "3",
		children: [
			/* @__PURE__ */ jsx(p$2, {
				size: "2",
				color: "gray",
				children: "Configure como os dados serão exibidos quando substituídos."
			}),
			n.type === "text" && /* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsxs(p, {
				align: "center",
				gap: "2",
				mb: "3",
				children: [/* @__PURE__ */ jsx(i, {
					checked: n.autoGrow || !1,
					onCheckedChange: (d) => s(n.id, { autoGrow: d })
				}), /* @__PURE__ */ jsx(p$2, {
					size: "2",
					children: "Expandir altura automaticamente (Multilinha)"
				})]
			}), /* @__PURE__ */ jsx(o$3, {
				size: "4",
				mb: "3"
			})] }),
			/* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
				size: "1",
				mb: "1",
				as: "div",
				children: "Tipo de Formatação"
			}), /* @__PURE__ */ jsxs("select", {
				value: d.type,
				onChange: (n) => C({ type: n.target.value }),
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
			d.type === "boolean" && /* @__PURE__ */ jsxs(o$2, {
				columns: "2",
				gap: "3",
				children: [/* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Texto para Verdadeiro"
				}), /* @__PURE__ */ jsx(u, {
					placeholder: "Ex: Sim",
					value: d.trueLabel || "",
					onChange: (n) => C({ trueLabel: n.target.value })
				})] }), /* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Texto para Falso"
				}), /* @__PURE__ */ jsx(u, {
					placeholder: "Ex: Não",
					value: d.falseLabel || "",
					onChange: (n) => C({ falseLabel: n.target.value })
				})] })]
			}),
			d.type === "date" && /* @__PURE__ */ jsxs(p$1, { children: [
				/* @__PURE__ */ jsx(p$2, {
					size: "1",
					mb: "1",
					as: "div",
					children: "Formato da Data"
				}),
				/* @__PURE__ */ jsx(u, {
					placeholder: "Ex: DD/MM/YYYY",
					value: d.dateFormat || "",
					onChange: (n) => C({ dateFormat: n.target.value })
				}),
				/* @__PURE__ */ jsx(p$2, {
					size: "1",
					color: "gray",
					mt: "1",
					children: "Use DD, MM, YYYY, HH, mm, ss."
				})
			] }),
			d.type === "number" && /* @__PURE__ */ jsxs(p, {
				direction: "column",
				gap: "3",
				children: [
					/* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Estilo"
					}), /* @__PURE__ */ jsxs("select", {
						value: d.numberFormat || "decimal",
						onChange: (n) => C({ numberFormat: n.target.value }),
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
					d.numberFormat === "currency" && /* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Símbolo da Moeda"
					}), /* @__PURE__ */ jsx(u, {
						placeholder: "Ex: R$",
						value: d.currencySymbol || "",
						onChange: (n) => C({ currencySymbol: n.target.value })
					})] }),
					/* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Casas Decimais"
					}), /* @__PURE__ */ jsx(u, {
						type: "number",
						placeholder: "2",
						value: d.decimalPlaces === void 0 ? "" : d.decimalPlaces,
						onChange: (n) => C({ decimalPlaces: parseInt(n.target.value) || 0 })
					})] })
				]
			})
		]
	});
}, ConditionalSettings = ({ element: n, updateElement: s, availableProps: d }) => {
	let C = n.conditions || [], [w, k] = useState(null), F = () => {
		let w = {
			id: crypto.randomUUID(),
			property: d.length > 0 ? d[0].dataName : "",
			operator: "equals",
			value: "",
			style: { color: "#ff0000" }
		};
		s(n.id, { conditions: [...C, w] }), k(w.id);
	}, L = (d) => {
		s(n.id, { conditions: C.filter((n) => n.id !== d) }), w === d && k(null);
	}, V = (d, w) => {
		s(n.id, { conditions: C.map((n) => n.id === d ? {
			...n,
			...w
		} : n) });
	}, U = (n, s) => {
		let d = C.find((s) => s.id === n);
		d && V(n, { style: {
			...d.style,
			...s
		} });
	}, K = C.find((n) => n.id === w);
	return /* @__PURE__ */ jsx(p, {
		direction: "column",
		gap: "3",
		children: w ? /* @__PURE__ */ jsxs(p, {
			direction: "column",
			gap: "3",
			children: [/* @__PURE__ */ jsxs(p, {
				justify: "between",
				align: "center",
				children: [/* @__PURE__ */ jsx(p$2, {
					weight: "bold",
					children: "Editar Regra"
				}), /* @__PURE__ */ jsx(o, {
					variant: "ghost",
					onClick: () => k(null),
					children: "Voltar"
				})]
			}), K && /* @__PURE__ */ jsxs(Fragment$1, { children: [
				/* @__PURE__ */ jsxs(p$1, { children: [
					/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Propriedade"
					}),
					/* @__PURE__ */ jsxs("select", {
						value: K.property,
						onChange: (n) => V(K.id, { property: n.target.value }),
						style: {
							width: "100%",
							padding: "6px",
							borderRadius: "4px",
							border: "1px solid var(--gray-6)",
							backgroundColor: "var(--color-panel-solid)",
							color: "var(--gray-12)",
							fontSize: "14px"
						},
						children: [d.map((n) => /* @__PURE__ */ jsx("option", {
							value: n.dataName,
							children: n.name
						}, n.dataName)), /* @__PURE__ */ jsx("option", {
							value: "__custom__",
							children: "Outra..."
						})]
					}),
					K.property === "__custom__" && /* @__PURE__ */ jsx(u, {
						placeholder: "Nome da propriedade",
						mt: "2",
						onChange: (n) => V(K.id, { property: n.target.value })
					})
				] }),
				/* @__PURE__ */ jsxs(p, {
					gap: "2",
					children: [/* @__PURE__ */ jsxs(p$1, {
						flexGrow: "1",
						children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Operador"
						}), /* @__PURE__ */ jsxs("select", {
							value: K.operator,
							onChange: (n) => V(K.id, { operator: n.target.value }),
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
					].includes(K.operator) && /* @__PURE__ */ jsxs(p$1, {
						flexGrow: "1",
						children: [/* @__PURE__ */ jsx(p$2, {
							size: "1",
							mb: "1",
							as: "div",
							children: "Valor"
						}), /* @__PURE__ */ jsx(u, {
							value: K.value,
							onChange: (n) => V(K.id, { value: n.target.value })
						})]
					})]
				}),
				/* @__PURE__ */ jsx(o$3, {
					size: "4",
					my: "2"
				}),
				/* @__PURE__ */ jsx(p$2, {
					size: "2",
					weight: "bold",
					children: "Aplicar Estilos"
				}),
				/* @__PURE__ */ jsxs(o$2, {
					columns: "2",
					gap: "3",
					children: [/* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Cor do Texto"
					}), /* @__PURE__ */ jsx("input", {
						type: "color",
						value: K.style.color || "#000000",
						onChange: (n) => U(K.id, { color: n.target.value }),
						style: {
							width: "100%",
							height: 32
						}
					})] }), /* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
						size: "1",
						mb: "1",
						as: "div",
						children: "Cor de Fundo"
					}), /* @__PURE__ */ jsxs(p, {
						gap: "2",
						children: [/* @__PURE__ */ jsx("input", {
							type: "color",
							value: K.style.backgroundColor || "#ffffff",
							onChange: (n) => U(K.id, { backgroundColor: n.target.value }),
							style: {
								width: "100%",
								height: 32
							}
						}), /* @__PURE__ */ jsx(o$1, {
							variant: "outline",
							onClick: () => U(K.id, { backgroundColor: void 0 }),
							title: "Limpar fundo",
							children: /* @__PURE__ */ jsx(Cross2Icon, {})
						})]
					})] })]
				}),
				/* @__PURE__ */ jsxs(p, {
					gap: "3",
					mt: "2",
					children: [
						/* @__PURE__ */ jsx(o, {
							variant: K.style.fontWeight === "bold" ? "solid" : "outline",
							onClick: () => U(K.id, { fontWeight: K.style.fontWeight === "bold" ? "normal" : "bold" }),
							children: "Bold"
						}),
						/* @__PURE__ */ jsx(o, {
							variant: K.style.fontStyle === "italic" ? "solid" : "outline",
							onClick: () => U(K.id, { fontStyle: K.style.fontStyle === "italic" ? "normal" : "italic" }),
							children: "Italic"
						}),
						/* @__PURE__ */ jsx(o, {
							variant: K.style.textDecoration === "line-through" ? "solid" : "outline",
							onClick: () => U(K.id, { textDecoration: K.style.textDecoration === "line-through" ? "none" : "line-through" }),
							children: "Riscado"
						})
					]
				})
			] })]
		}) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
			/* @__PURE__ */ jsx(p$2, {
				size: "2",
				color: "gray",
				children: "Adicione regras para alterar o estilo baseada no valor dos dados."
			}),
			/* @__PURE__ */ jsxs(p$1, {
				style: {
					maxHeight: 200,
					overflowY: "auto",
					border: "1px solid var(--gray-5)",
					borderRadius: 4
				},
				children: [C.length === 0 && /* @__PURE__ */ jsx(p, {
					align: "center",
					justify: "center",
					p: "4",
					children: /* @__PURE__ */ jsx(p$2, {
						color: "gray",
						children: "Nenhuma regra definida."
					})
				}), C.map((n) => /* @__PURE__ */ jsxs(p, {
					align: "center",
					justify: "between",
					p: "2",
					style: { borderBottom: "1px solid var(--gray-4)" },
					children: [/* @__PURE__ */ jsxs(p$1, {
						onClick: () => k(n.id),
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
						}), /* @__PURE__ */ jsxs(p, {
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
						onClick: () => L(n.id),
						children: /* @__PURE__ */ jsx(TrashIcon, {})
					})]
				}, n.id))]
			}),
			/* @__PURE__ */ jsxs(o, {
				onClick: F,
				children: [/* @__PURE__ */ jsx(PlusIcon, {}), " Adicionar Regra"]
			})
		] })
	});
};
const ElementContextMenu = ({ children: n, element: s }) => {
	let { updateElement: d, removeElement: C, addElement: w, moveElement: k, state: F } = useEditor(), [L, V] = useState(!1), [U, K] = useState(!1), [q, J] = useState(!1), [X, $] = useState(s.content), [Hk, Uk] = useState(s.dataBinding || ""), Kk = useRef(null), qk = useRef(null), Jk = (n) => {
		let s = Kk.current;
		if (s) {
			let d = s.selectionStart, C = s.selectionEnd, w = X;
			$(w.substring(0, d) + `{{${n}}}` + w.substring(C)), setTimeout(() => {
				s.focus();
				let C = d + n.length + 4;
				s.setSelectionRange(C, C);
			}, 0);
		} else $((s) => s + `{{${n}}}`);
	}, Qk = (n) => {
		d(s.id, { style: {
			...s.style,
			...n
		} });
	}, $k = () => {
		let n = F.elements.findIndex((n) => n.id === s.id);
		n < F.elements.length - 1 && k(n, F.elements.length - 1);
	}, eA = () => {
		let n = F.elements.findIndex((n) => n.id === s.id);
		n > 0 && k(n, 0);
	}, tA = () => {
		w({
			type: s.type,
			content: s.content,
			x: s.x + 20,
			y: s.y + 20,
			width: s.width,
			height: s.height,
			style: s.style
		});
	}, nA = [
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
			open: L,
			onOpenChange: V,
			children: /* @__PURE__ */ jsxs(p$6, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$1, { children: "Editar Texto" }), /* @__PURE__ */ jsxs(p, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(r, {
							ref: Kk,
							value: X,
							onChange: (n) => $(n.target.value),
							placeholder: "Digite o novo texto...",
							style: { height: 100 }
						}),
						F.availableProps && F.availableProps.length > 0 && /* @__PURE__ */ jsxs(p, {
							direction: "column",
							gap: "2",
							children: [/* @__PURE__ */ jsx(p$2, {
								size: "1",
								color: "gray",
								children: "Inserir variável:"
							}), /* @__PURE__ */ jsx(p, {
								gap: "2",
								wrap: "wrap",
								children: F.availableProps.map((n) => /* @__PURE__ */ jsx(e, {
									color: "blue",
									variant: "surface",
									style: { cursor: "pointer" },
									onClick: () => Jk(n.dataName),
									children: n.name
								}, n.dataName))
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
									d(s.id, { content: X }), V(!1);
								},
								children: "Salvar"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(s$2, {
			open: U,
			onOpenChange: K,
			children: /* @__PURE__ */ jsxs(p$6, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$1, { children: "Vincular Dados Manualmente" }), /* @__PURE__ */ jsxs(p, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(p$2, {
							size: "2",
							children: "Nome da propriedade (ex: titulo, preco, imagem):"
						}),
						/* @__PURE__ */ jsx(u, {
							value: Hk,
							onChange: (n) => Uk(n.target.value),
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
									let n = Hk, C = { dataBinding: n };
									s.type === "text" && (C.content = `{{${n}}}`), d(s.id, C), K(!1);
								},
								children: "Vincular"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(ElementAdvancedSettings, {
			elementId: s.id,
			open: q,
			onOpenChange: J
		}),
		/* @__PURE__ */ jsx("input", {
			type: "file",
			ref: qk,
			style: { display: "none" },
			accept: "image/*",
			onChange: (n) => {
				let C = n.target.files?.[0];
				if (C) {
					let n = new FileReader();
					n.onload = (n) => {
						n.target?.result && d(s.id, { content: n.target.result });
					}, n.readAsDataURL(C);
				}
			}
		}),
		/* @__PURE__ */ jsxs(Root2$2, { children: [/* @__PURE__ */ jsx(Trigger$2, {
			asChild: !0,
			children: /* @__PURE__ */ jsx("div", {
				style: { display: "contents" },
				children: n
			})
		}), /* @__PURE__ */ jsx(Portal2$1, { children: /* @__PURE__ */ jsxs(Content2$1, {
			className: "ContextMenuContent",
			children: [
				/* @__PURE__ */ jsxs(Sub2$1, { children: [/* @__PURE__ */ jsxs(SubTrigger2$1, {
					className: "ContextMenuSubTrigger",
					children: [
						"Vincular Dados",
						s.dataBinding && /* @__PURE__ */ jsxs("span", {
							style: {
								fontSize: 10,
								marginLeft: 4,
								opacity: .7
							},
							children: [
								"(",
								s.dataBinding,
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
						F.availableProps && F.availableProps.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [F.availableProps.map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								let C = { dataBinding: n.dataName };
								s.type === "text" && (C.content = `{{${n.dataName}}}`), d(s.id, C);
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
								Uk(s.dataBinding || ""), K(!0);
							},
							children: "Outro / Manual..."
						}),
						s.dataBinding && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => d(s.id, { dataBinding: void 0 }),
							style: { color: "var(--red-9)" },
							children: "Remover Vínculo"
						})] })
					]
				}) })] }),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				s.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => {
						$(s.content), V(!0);
					},
					children: "Editar Texto..."
				}), /* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" })] }),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => J(!0),
					children: "Configurações Avançadas..."
				}),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: tA,
					children: "Duplicar"
				}),
				/* @__PURE__ */ jsx(Item2$1, {
					className: "ContextMenuItem",
					onSelect: () => C(s.id),
					children: "Excluir"
				}),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				s.type === "image" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
							onSelect: () => qk.current?.click(),
							children: "Carregar do Computador"
						}), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => {
								setTimeout(() => {
									let n = window.prompt("Insira a URL da imagem:", s.content);
									n !== null && d(s.id, { content: n });
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
								onSelect: () => Qk({ objectFit: "cover" }),
								children: "Preencher (Cover)"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Qk({ objectFit: "contain" }),
								children: "Ajustar (Contain)"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Qk({ objectFit: "fill" }),
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
						onSelect: $k,
						children: "Trazer para frente"
					}), /* @__PURE__ */ jsx(Item2$1, {
						className: "ContextMenuItem",
						onSelect: eA,
						children: "Enviar para trás"
					})]
				}) })] }),
				/* @__PURE__ */ jsx(Separator2$1, { className: "ContextMenuSeparator" }),
				s.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
						children: F.availableFonts && F.availableFonts.map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Qk({ fontFamily: n }),
							style: { fontFamily: n },
							children: [n, s.style?.fontFamily === n && /* @__PURE__ */ jsx("div", {
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
							onSelect: () => Qk({ fontSize: `${n}px` }),
							children: [n, "px"]
						}, n))
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
						children: nA.filter((n) => n !== "transparent").map((n) => /* @__PURE__ */ jsxs(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Qk({ color: n }),
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								backgroundColor: n,
								marginRight: 8,
								border: "1px solid #ccc"
							} }), n]
						}, n))
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
							onSelect: () => Qk({ fontWeight: "normal" }),
							children: "Normal"
						}), /* @__PURE__ */ jsx(Item2$1, {
							className: "ContextMenuItem",
							onSelect: () => Qk({ fontWeight: "bold" }),
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
								onSelect: () => Qk({ textAlign: "left" }),
								children: "Esquerda"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Qk({ textAlign: "center" }),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Qk({ textAlign: "right" }),
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
								onSelect: () => Qk({
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start"
								}),
								children: "Topo"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Qk({
									display: "flex",
									flexDirection: "column",
									justifyContent: "center"
								}),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(Item2$1, {
								className: "ContextMenuItem",
								onSelect: () => Qk({
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
					children: nA.map((n) => /* @__PURE__ */ jsxs(Item2$1, {
						className: "ContextMenuItem",
						onSelect: () => Qk({ backgroundColor: n }),
						children: [/* @__PURE__ */ jsx("div", { style: {
							width: 12,
							height: 12,
							backgroundColor: n,
							marginRight: 8,
							border: "1px solid #ccc"
						} }), n === "transparent" ? "Transparente" : n]
					}, n))
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
						onSelect: () => Qk({ borderRadius: typeof n == "number" ? `${n}px` : n }),
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
						onSelect: () => Qk({ padding: `${n}px` }),
						children: [n, "px"]
					}, n))
				}) })] })
			]
		}) })] })
	] });
};
var formatValue = (n, s) => {
	if (n == null) return "";
	if (s.type === "boolean") return String(n) === "true" || n === !0 || typeof n == "number" && n > 0 ? s.trueLabel || "Sim" : s.falseLabel || "Não";
	if (s.type === "date") try {
		let d = new Date(n);
		if (isNaN(d.getTime())) return String(n);
		if (s.dateFormat) {
			let n = d.getDate().toString().padStart(2, "0"), C = (d.getMonth() + 1).toString().padStart(2, "0"), w = d.getFullYear(), k = d.getHours().toString().padStart(2, "0"), F = d.getMinutes().toString().padStart(2, "0"), L = d.getSeconds().toString().padStart(2, "0");
			return s.dateFormat.replace("DD", n).replace("MM", C).replace("YYYY", String(w)).replace("HH", k).replace("mm", F).replace("ss", L);
		}
		return d.toLocaleDateString();
	} catch {
		return String(n);
	}
	if (s.type === "number") {
		let d = parseFloat(n);
		return isNaN(d) ? String(n) : s.numberFormat === "currency" ? (s.currencySymbol || "R$") + " " + d.toFixed(s.decimalPlaces || 2) : s.numberFormat === "percent" ? d.toFixed(s.decimalPlaces || 0) + "%" : d.toFixed(s.decimalPlaces || 0);
	}
	return String(n);
}, checkCondition = (n, s, d) => {
	let C = String(n).toLowerCase(), w = String(d).toLowerCase();
	switch (s) {
		case "equals": return C === w;
		case "notEquals": return C !== w;
		case "contains": return C.includes(w);
		case "greaterThan": return parseFloat(C) > parseFloat(w);
		case "lessThan": return parseFloat(C) < parseFloat(w);
		case "truthy": return !!n;
		case "falsy": return !n;
		default: return !1;
	}
}, DraggableResizableElement = ({ element: n, isSelected: s }) => {
	let { selectElement: d, updateElement: C, state: w } = useEditor(), [k, F] = useState(!1), [L, V] = useState(!1), U = useRef({
		x: 0,
		y: 0
	}), K = useRef({
		x: 0,
		y: 0
	}), J = w.canvasHeight || 150, X = useRef(0), $ = useRef(0), Hk = useRef({
		x: 0,
		y: 0
	}), Uk = w.isList ? w.mockData.length > 0 ? w.mockData[0] : null : w.singleMockData, Kk = n.content, qk = {};
	if (Uk) {
		if (n.type === "text") Kk = Kk.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let C = Uk[d.trim()];
			return C == null ? s : n.formatting ? formatValue(C, n.formatting) : String(C);
		});
		else if (n.type === "image") if (n.dataBinding) {
			let s = Uk[n.dataBinding];
			s != null && (Kk = String(s));
		} else Kk = Kk.replace(/\{\{(.*?)\}\}/g, (n, s) => {
			let d = Uk[s.trim()];
			return d == null ? n : String(d);
		});
		n.conditions && n.conditions.forEach((n) => {
			let s = Uk[n.property];
			checkCondition(s, n.operator, n.value) && (qk = {
				...qk,
				...n.style
			});
		});
	}
	let Jk = (s) => {
		s.stopPropagation(), d(n.id);
	}, Yk = (s) => {
		s.button === 0 && (s.stopPropagation(), d(n.id), F(!0), U.current = {
			x: s.clientX,
			y: s.clientY
		}, K.current = {
			x: n.x,
			y: n.y
		});
	}, Qk = (s) => {
		s.stopPropagation(), s.preventDefault(), V(!0);
		let d = s.target.closest(".resizable-element");
		if (d) {
			let C = d.getBoundingClientRect();
			Hk.current = {
				x: C.left + C.width / 2,
				y: C.top + C.height / 2
			};
			let w = s.clientX - Hk.current.x, k = s.clientY - Hk.current.y;
			X.current = Math.atan2(k, w) * (180 / Math.PI), $.current = n.rotation || 0;
		}
	};
	useEffect(() => {
		let s = (s) => {
			if (k) {
				let d = s.clientX - U.current.x, k = s.clientY - U.current.y, F = K.current.x + d, L = K.current.y + k;
				w.isList && (L = Math.max(0, L), L + n.height > J && (L = Math.max(0, J - n.height))), C(n.id, {
					x: F,
					y: L
				});
			}
			if (L) {
				let d = s.clientX - Hk.current.x, w = s.clientY - Hk.current.y, k = Math.atan2(w, d) * (180 / Math.PI) - X.current;
				C(n.id, { rotation: ($.current + k) % 360 });
			}
		}, d = () => {
			k && F(!1), L && V(!1);
		};
		return (k || L) && (window.addEventListener("mousemove", s), window.addEventListener("mouseup", d)), () => {
			window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", d);
		};
	}, [
		k,
		L,
		n.id,
		C
	]);
	let $k = {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: n.autoGrow ? "auto" : "100%",
		minHeight: n.autoGrow ? "100%" : void 0,
		padding: n.type === "image" || n.type === "text" ? 0 : "8px",
		border: s ? "2px solid var(--accent-9)" : "1px dashed transparent",
		outline: s ? "none" : "1px solid transparent",
		cursor: k ? "grabbing" : "grab",
		borderRadius: "var(--radius-2)",
		overflow: n.autoGrow ? "visible" : "hidden",
		whiteSpace: n.autoGrow ? "pre-wrap" : void 0,
		wordBreak: n.autoGrow ? "break-word" : void 0,
		userSelect: "none",
		...n.style,
		...qk
	};
	return /* @__PURE__ */ jsx(Resizable, {
		className: "resizable-element",
		size: {
			width: n.width,
			height: n.autoGrow ? "auto" : n.height
		},
		maxHeight: w.isList ? Math.max(10, J - n.y) : void 0,
		onResizeStop: (s, d, w, k) => {
			C(n.id, {
				width: n.width + k.width,
				height: n.height + k.height
			});
		},
		style: {
			position: "absolute",
			transform: `translate(${n.x}px, ${n.y}px) rotate(${n.rotation || 0}deg)`,
			height: n.autoGrow ? "auto" : void 0
		},
		enable: s && !n.autoGrow ? void 0 : {
			top: !1,
			right: s,
			bottom: !1,
			left: s,
			topRight: !1,
			bottomRight: s,
			bottomLeft: !1,
			topLeft: !1
		},
		children: /* @__PURE__ */ jsx(ElementContextMenu, {
			element: n,
			children: /* @__PURE__ */ jsxs("div", {
				style: {
					width: "100%",
					height: "100%",
					position: "relative"
				},
				children: [/* @__PURE__ */ jsxs(p$1, {
					style: $k,
					onMouseDown: Yk,
					onClick: Jk,
					onMouseEnter: (n) => {
						s || (n.currentTarget.style.borderColor = "var(--gray-6)");
					},
					onMouseLeave: (n) => {
						s || (n.currentTarget.style.borderColor = "transparent");
					},
					children: [
						n.type === "text" && /* @__PURE__ */ jsx(p$2, {
							style: {
								width: "100%",
								height: "100%"
							},
							children: Kk
						}),
						n.type === "image" && (Kk ? /* @__PURE__ */ jsx("img", {
							src: Kk,
							alt: "Element",
							style: {
								width: "100%",
								height: "100%",
								objectFit: n.style?.objectFit || "cover",
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
						n.type === "box" && /* @__PURE__ */ jsx(p$1, { style: {
							width: "100%",
							height: "100%"
						} })
					]
				}), s && /* @__PURE__ */ jsx(p$1, {
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
					onMouseDown: Qk,
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
	let { state: n, selectElement: s } = useEditor(), d = () => {
		s(null);
	}, C = n.canvasHeight || 150;
	return /* @__PURE__ */ jsxs(p$1, {
		onClick: d,
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
			n.isList && /* @__PURE__ */ jsx("div", {
				style: {
					position: "absolute",
					top: C,
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
						C,
						"px)"
					]
				})
			}),
			n.elements.length === 0 && /* @__PURE__ */ jsx(p, {
				align: "center",
				justify: "center",
				style: {
					height: "100%",
					color: "var(--gray-8)",
					pointerEvents: "none"
				},
				children: /* @__PURE__ */ jsx(p$2, { children: "Adicione elementos e arraste livremente" })
			}),
			n.elements.map((s) => /* @__PURE__ */ jsx(DraggableResizableElement, {
				element: s,
				isSelected: n.selectedElementId === s.id
			}, s.id))
		]
	});
};
var LayoutGroupContext = createContext({});
function useConstant(n) {
	let s = useRef(null);
	return s.current === null && (s.current = n()), s.current;
}
var isBrowser = typeof window < "u", useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect, PresenceContext = /* @__PURE__ */ createContext(null);
function addUniqueItem(n, s) {
	n.indexOf(s) === -1 && n.push(s);
}
function removeItem(n, s) {
	let d = n.indexOf(s);
	d > -1 && n.splice(d, 1);
}
var clamp = (n, s, d) => d > s ? s : d < n ? n : d;
function formatErrorMessage(n, s) {
	return s ? `${n}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${s}` : n;
}
var warning = () => {}, invariant = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (warning = (n, s, d) => {
	!n && typeof console < "u" && console.warn(formatErrorMessage(s, d));
}, invariant = (n, s, d) => {
	if (!n) throw Error(formatErrorMessage(s, d));
});
var MotionGlobalConfig = {}, isNumericalString = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function isObject(n) {
	return typeof n == "object" && !!n;
}
var isZeroValueString = (n) => /^0[^.\s]+$/u.test(n);
/* @__NO_SIDE_EFFECTS__ */
function memo$1(n) {
	let s;
	return () => (s === void 0 && (s = n()), s);
}
var noop = /* @__NO_SIDE_EFFECTS__ */ (n) => n, combineFunctions = (n, s) => (d) => s(n(d)), pipe = (...n) => n.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (n, s, d) => {
	let C = s - n;
	return C === 0 ? 1 : (d - n) / C;
}, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(n) {
		return addUniqueItem(this.subscriptions, n), () => removeItem(this.subscriptions, n);
	}
	notify(n, s, d) {
		let C = this.subscriptions.length;
		if (C) if (C === 1) this.subscriptions[0](n, s, d);
		else for (let w = 0; w < C; w++) {
			let C = this.subscriptions[w];
			C && C(n, s, d);
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (n) => n * 1e3, millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (n) => n / 1e3;
function velocityPerSecond(n, s) {
	return s ? n * (1e3 / s) : 0;
}
var warned = /* @__PURE__ */ new Set();
function warnOnce(n, s, d) {
	n || warned.has(s) || (console.warn(formatErrorMessage(s, d)), warned.add(s));
}
var calcBezier = (n, s, d) => (((1 - 3 * d + 3 * s) * n + (3 * d - 6 * s)) * n + 3 * s) * n, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(n, s, d, C, w) {
	let k, F, L = 0;
	do
		F = s + (d - s) / 2, k = calcBezier(F, C, w) - n, k > 0 ? d = F : s = F;
	while (Math.abs(k) > subdivisionPrecision && ++L < subdivisionMaxIterations);
	return F;
}
function cubicBezier(n, s, d, C) {
	if (n === s && d === C) return noop;
	let w = (s) => binarySubdivide(s, 0, 1, n, d);
	return (n) => n === 0 || n === 1 ? n : calcBezier(w(n), s, C);
}
var mirrorEasing = (n) => (s) => s <= .5 ? n(2 * s) / 2 : (2 - n(2 * (1 - s))) / 2, reverseEasing = (n) => (s) => 1 - n(1 - s), backOut = /* @__PURE__ */ cubicBezier(.33, 1.53, .69, .99), backIn = /* @__PURE__ */ reverseEasing(backOut), backInOut = /* @__PURE__ */ mirrorEasing(backIn), anticipate = (n) => (n *= 2) < 1 ? .5 * backIn(n) : .5 * (2 - 2 ** (-10 * (n - 1))), circIn = (n) => 1 - Math.sin(Math.acos(n)), circOut = reverseEasing(circIn), circInOut = mirrorEasing(circIn), easeIn = /* @__PURE__ */ cubicBezier(.42, 0, 1, 1), easeOut = /* @__PURE__ */ cubicBezier(0, 0, .58, 1), easeInOut = /* @__PURE__ */ cubicBezier(.42, 0, .58, 1), isEasingArray = (n) => Array.isArray(n) && typeof n[0] != "number", isBezierDefinition = (n) => Array.isArray(n) && typeof n[0] == "number", easingLookup = {
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
		let [s, d, C, w] = n;
		return cubicBezier(s, d, C, w);
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
function createRenderStep(n, s) {
	let d = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set(), w = !1, k = !1, F = /* @__PURE__ */ new WeakSet(), L = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, V = 0;
	function U(s) {
		F.has(s) && (K.schedule(s), n()), V++, s(L);
	}
	let K = {
		schedule: (n, s = !1, k = !1) => {
			let L = k && w ? d : C;
			return s && F.add(n), L.has(n) || L.add(n), n;
		},
		cancel: (n) => {
			C.delete(n), F.delete(n);
		},
		process: (n) => {
			if (L = n, w) {
				k = !0;
				return;
			}
			w = !0, [d, C] = [C, d], d.forEach(U), s && statsBuffer.value && statsBuffer.value.frameloop[s].push(V), V = 0, d.clear(), w = !1, k && (k = !1, K.process(n));
		}
	};
	return K;
}
var maxElapsed = 40;
function createRenderBatcher(n, s) {
	let d = !1, C = !0, w = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, k = () => d = !0, F = stepsOrder.reduce((n, d) => (n[d] = createRenderStep(k, s ? d : void 0), n), {}), { setup: L, read: V, resolveKeyframes: U, preUpdate: K, update: q, preRender: J, render: X, postRender: $ } = F, Hk = () => {
		let k = MotionGlobalConfig.useManualTiming ? w.timestamp : performance.now();
		d = !1, MotionGlobalConfig.useManualTiming || (w.delta = C ? 1e3 / 60 : Math.max(Math.min(k - w.timestamp, maxElapsed), 1)), w.timestamp = k, w.isProcessing = !0, L.process(w), V.process(w), U.process(w), K.process(w), q.process(w), J.process(w), X.process(w), $.process(w), w.isProcessing = !1, d && s && (C = !1, n(Hk));
	}, Uk = () => {
		d = !0, C = !0, w.isProcessing || n(Hk);
	};
	return {
		schedule: stepsOrder.reduce((n, s) => {
			let C = F[s];
			return n[s] = (n, s = !1, w = !1) => (d || Uk(), C.schedule(n, s, w)), n;
		}, {}),
		cancel: (n) => {
			for (let s = 0; s < stepsOrder.length; s++) F[stepsOrder[s]].cancel(n);
		},
		state: w,
		steps: F
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
}, checkStringStartsWith = (n) => (s) => typeof s == "string" && s.startsWith(n), isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--"), startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--"), isCSSVariableToken = (n) => startsAsVariableToken(n) ? singleCssVariableRegex.test(n.split("/*")[0].trim()) : !1, singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
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
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (n, s) => (d) => !!(typeof d == "string" && singleColorRegex.test(d) && d.startsWith(n) || s && !isNullish(d) && Object.prototype.hasOwnProperty.call(d, s)), splitColor = (n, s, d) => (C) => {
	if (typeof C != "string") return C;
	let [w, k, F, L] = C.match(floatRegex);
	return {
		[n]: parseFloat(w),
		[s]: parseFloat(k),
		[d]: parseFloat(F),
		alpha: L === void 0 ? 1 : parseFloat(L)
	};
}, clampRgbUnit = (n) => clamp(0, 255, n), rgbUnit = {
	...number,
	transform: (n) => Math.round(clampRgbUnit(n))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: n, green: s, blue: d, alpha: C = 1 }) => "rgba(" + rgbUnit.transform(n) + ", " + rgbUnit.transform(s) + ", " + rgbUnit.transform(d) + ", " + sanitize(alpha.transform(C)) + ")"
};
function parseHex(n) {
	let s = "", d = "", C = "", w = "";
	return n.length > 5 ? (s = n.substring(1, 3), d = n.substring(3, 5), C = n.substring(5, 7), w = n.substring(7, 9)) : (s = n.substring(1, 2), d = n.substring(2, 3), C = n.substring(3, 4), w = n.substring(4, 5), s += s, d += d, C += C, w += w), {
		red: parseInt(s, 16),
		green: parseInt(d, 16),
		blue: parseInt(C, 16),
		alpha: w ? parseInt(w, 16) / 255 : 1
	};
}
var hex = {
	test: /* @__PURE__ */ isColorString("#"),
	parse: parseHex,
	transform: rgba.transform
}, createUnitType = /* @__NO_SIDE_EFFECTS__ */ (n) => ({
	test: (s) => typeof s == "string" && s.endsWith(n) && s.split(" ").length === 1,
	parse: parseFloat,
	transform: (s) => `${s}${n}`
}), degrees = /* @__PURE__ */ createUnitType("deg"), percent = /* @__PURE__ */ createUnitType("%"), px = /* @__PURE__ */ createUnitType("px"), vh = /* @__PURE__ */ createUnitType("vh"), vw = /* @__PURE__ */ createUnitType("vw"), progressPercentage = /* @__PURE__ */ (() => ({
	...percent,
	parse: (n) => percent.parse(n) / 100,
	transform: (n) => percent.transform(n * 100)
}))(), hsla = {
	test: /* @__PURE__ */ isColorString("hsl", "hue"),
	parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
	transform: ({ hue: n, saturation: s, lightness: d, alpha: C = 1 }) => "hsla(" + Math.round(n) + ", " + percent.transform(sanitize(s)) + ", " + percent.transform(sanitize(d)) + ", " + sanitize(alpha.transform(C)) + ")"
}, color = {
	test: (n) => rgba.test(n) || hex.test(n) || hsla.test(n),
	parse: (n) => rgba.test(n) ? rgba.parse(n) : hsla.test(n) ? hsla.parse(n) : hex.parse(n),
	transform: (n) => typeof n == "string" ? n : n.hasOwnProperty("red") ? rgba.transform(n) : hsla.transform(n),
	getAnimatableNone: (n) => {
		let s = color.parse(n);
		return s.alpha = 0, color.transform(s);
	}
}, colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function test(n) {
	return isNaN(n) && typeof n == "string" && (n.match(floatRegex)?.length || 0) + (n.match(colorRegex)?.length || 0) > 0;
}
var NUMBER_TOKEN = "number", COLOR_TOKEN = "color", VAR_TOKEN = "var", VAR_FUNCTION_TOKEN = "var(", SPLIT_TOKEN = "${}", complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(n) {
	let s = n.toString(), d = [], C = {
		color: [],
		number: [],
		var: []
	}, w = [], k = 0;
	return {
		values: d,
		split: s.replace(complexRegex, (n) => (color.test(n) ? (C.color.push(k), w.push(COLOR_TOKEN), d.push(color.parse(n))) : n.startsWith(VAR_FUNCTION_TOKEN) ? (C.var.push(k), w.push(VAR_TOKEN), d.push(n)) : (C.number.push(k), w.push(NUMBER_TOKEN), d.push(parseFloat(n))), ++k, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: C,
		types: w
	};
}
function parseComplexValue(n) {
	return analyseComplexValue(n).values;
}
function createTransformer(n) {
	let { split: s, types: d } = analyseComplexValue(n), C = s.length;
	return (n) => {
		let w = "";
		for (let k = 0; k < C; k++) if (w += s[k], n[k] !== void 0) {
			let s = d[k];
			s === NUMBER_TOKEN ? w += sanitize(n[k]) : s === COLOR_TOKEN ? w += color.transform(n[k]) : w += n[k];
		}
		return w;
	};
}
var convertNumbersToZero = (n) => typeof n == "number" ? 0 : color.test(n) ? color.getAnimatableNone(n) : n;
function getAnimatableNone$1(n) {
	let s = parseComplexValue(n);
	return createTransformer(n)(s.map(convertNumbersToZero));
}
var complex = {
	test,
	parse: parseComplexValue,
	createTransformer,
	getAnimatableNone: getAnimatableNone$1
};
function hueToRgb(n, s, d) {
	return d < 0 && (d += 1), d > 1 && --d, d < 1 / 6 ? n + (s - n) * 6 * d : d < 1 / 2 ? s : d < 2 / 3 ? n + (s - n) * (2 / 3 - d) * 6 : n;
}
function hslaToRgba({ hue: n, saturation: s, lightness: d, alpha: C }) {
	n /= 360, s /= 100, d /= 100;
	let w = 0, k = 0, F = 0;
	if (!s) w = k = F = d;
	else {
		let C = d < .5 ? d * (1 + s) : d + s - d * s, L = 2 * d - C;
		w = hueToRgb(L, C, n + 1 / 3), k = hueToRgb(L, C, n), F = hueToRgb(L, C, n - 1 / 3);
	}
	return {
		red: Math.round(w * 255),
		green: Math.round(k * 255),
		blue: Math.round(F * 255),
		alpha: C
	};
}
function mixImmediate(n, s) {
	return (d) => d > 0 ? s : n;
}
var mixNumber = (n, s, d) => n + (s - n) * d, mixLinearColor = (n, s, d) => {
	let C = n * n, w = d * (s * s - C) + C;
	return w < 0 ? 0 : Math.sqrt(w);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (n) => colorTypes.find((s) => s.test(n));
function asRGBA(n) {
	let s = getColorType(n);
	if (warning(!!s, `'${n}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !s) return !1;
	let d = s.parse(n);
	return s === hsla && (d = hslaToRgba(d)), d;
}
var mixColor = (n, s) => {
	let d = asRGBA(n), C = asRGBA(s);
	if (!d || !C) return mixImmediate(n, s);
	let w = { ...d };
	return (n) => (w.red = mixLinearColor(d.red, C.red, n), w.green = mixLinearColor(d.green, C.green, n), w.blue = mixLinearColor(d.blue, C.blue, n), w.alpha = mixNumber(d.alpha, C.alpha, n), rgba.transform(w));
}, invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(n, s) {
	return invisibleValues.has(n) ? (d) => d <= 0 ? n : s : (d) => d >= 1 ? s : n;
}
function mixNumber$1(n, s) {
	return (d) => mixNumber(n, s, d);
}
function getMixer(n) {
	return typeof n == "number" ? mixNumber$1 : typeof n == "string" ? isCSSVariableToken(n) ? mixImmediate : color.test(n) ? mixColor : mixComplex : Array.isArray(n) ? mixArray : typeof n == "object" ? color.test(n) ? mixColor : mixObject : mixImmediate;
}
function mixArray(n, s) {
	let d = [...n], C = d.length, w = n.map((n, d) => getMixer(n)(n, s[d]));
	return (n) => {
		for (let s = 0; s < C; s++) d[s] = w[s](n);
		return d;
	};
}
function mixObject(n, s) {
	let d = {
		...n,
		...s
	}, C = {};
	for (let w in d) n[w] !== void 0 && s[w] !== void 0 && (C[w] = getMixer(n[w])(n[w], s[w]));
	return (n) => {
		for (let s in C) d[s] = C[s](n);
		return d;
	};
}
function matchOrder(n, s) {
	let d = [], C = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let w = 0; w < s.values.length; w++) {
		let k = s.types[w], F = n.indexes[k][C[k]];
		d[w] = n.values[F] ?? 0, C[k]++;
	}
	return d;
}
var mixComplex = (n, s) => {
	let d = complex.createTransformer(s), C = analyseComplexValue(n), w = analyseComplexValue(s);
	return C.indexes.var.length === w.indexes.var.length && C.indexes.color.length === w.indexes.color.length && C.indexes.number.length >= w.indexes.number.length ? invisibleValues.has(n) && !w.values.length || invisibleValues.has(s) && !C.values.length ? mixVisibility(n, s) : pipe(mixArray(matchOrder(C, w), w.values), d) : (warning(!0, `Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(n, s));
};
function mix(n, s, d) {
	return typeof n == "number" && typeof s == "number" && typeof d == "number" ? mixNumber(n, s, d) : getMixer(n)(n, s);
}
var frameloopDriver = (n) => {
	let s = ({ timestamp: s }) => n(s);
	return {
		start: (n = !0) => frame.update(s, n),
		stop: () => cancelFrame(s),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generateLinearEasing = (n, s, d = 10) => {
	let C = "", w = Math.max(Math.round(s / d), 2);
	for (let s = 0; s < w; s++) C += Math.round(n(s / (w - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${C.substring(0, C.length - 2)})`;
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(n) {
	let s = 0, d = n.next(s);
	for (; !d.done && s < 2e4;) s += 50, d = n.next(s);
	return s >= 2e4 ? Infinity : s;
}
function createGeneratorEasing(n, s = 100, d) {
	let C = d({
		...n,
		keyframes: [0, s]
	}), w = Math.min(calcGeneratorDuration(C), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (n) => C.next(w * n).value / s,
		duration: /* @__PURE__ */ millisecondsToSeconds(w)
	};
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(n, s, d) {
	let C = Math.max(s - velocitySampleDuration, 0);
	return velocityPerSecond(d - n(C), s - C);
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
function findSpring({ duration: n = springDefaults.duration, bounce: s = springDefaults.bounce, velocity: d = springDefaults.velocity, mass: C = springDefaults.mass }) {
	let w, k;
	warning(n <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let F = 1 - s;
	F = clamp(springDefaults.minDamping, springDefaults.maxDamping, F), n = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(n)), F < 1 ? (w = (s) => {
		let C = s * F, w = C * n, k = C - d, L = calcAngularFreq(s, F), V = Math.exp(-w);
		return safeMin - k / L * V;
	}, k = (s) => {
		let C = s * F * n, k = C * d + d, L = F ** 2 * s ** 2 * n, V = Math.exp(-C), U = calcAngularFreq(s ** 2, F);
		return (-w(s) + safeMin > 0 ? -1 : 1) * ((k - L) * V) / U;
	}) : (w = (s) => {
		let C = Math.exp(-s * n), w = (s - d) * n + 1;
		return -safeMin + C * w;
	}, k = (s) => Math.exp(-s * n) * ((d - s) * (n * n)));
	let L = 5 / n, V = approximateRoot(w, k, L);
	if (n = /* @__PURE__ */ secondsToMilliseconds(n), isNaN(V)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: n
	};
	{
		let s = V ** 2 * C;
		return {
			stiffness: s,
			damping: F * 2 * Math.sqrt(C * s),
			duration: n
		};
	}
}
var rootIterations = 12;
function approximateRoot(n, s, d) {
	let C = d;
	for (let d = 1; d < rootIterations; d++) C -= n(C) / s(C);
	return C;
}
function calcAngularFreq(n, s) {
	return n * Math.sqrt(1 - s * s);
}
var durationKeys = ["duration", "bounce"], physicsKeys = [
	"stiffness",
	"damping",
	"mass"
];
function isSpringType(n, s) {
	return s.some((s) => n[s] !== void 0);
}
function getSpringOptions(n) {
	let s = {
		velocity: springDefaults.velocity,
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		mass: springDefaults.mass,
		isResolvedFromDuration: !1,
		...n
	};
	if (!isSpringType(n, physicsKeys) && isSpringType(n, durationKeys)) if (n.visualDuration) {
		let d = n.visualDuration, C = 2 * Math.PI / (d * 1.2), w = C * C, k = 2 * clamp(.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(w);
		s = {
			...s,
			mass: springDefaults.mass,
			stiffness: w,
			damping: k
		};
	} else {
		let d = findSpring(n);
		s = {
			...s,
			...d,
			mass: springDefaults.mass
		}, s.isResolvedFromDuration = !0;
	}
	return s;
}
function spring(n = springDefaults.visualDuration, s = springDefaults.bounce) {
	let d = typeof n == "object" ? n : {
		visualDuration: n,
		keyframes: [0, 1],
		bounce: s
	}, { restSpeed: C, restDelta: w } = d, k = d.keyframes[0], F = d.keyframes[d.keyframes.length - 1], L = {
		done: !1,
		value: k
	}, { stiffness: V, damping: U, mass: K, duration: q, velocity: J, isResolvedFromDuration: X } = getSpringOptions({
		...d,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(d.velocity || 0)
	}), $ = J || 0, Hk = U / (2 * Math.sqrt(V * K)), Uk = F - k, Wk = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(V / K)), Gk = Math.abs(Uk) < 5;
	C ||= Gk ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, w ||= Gk ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let Kk;
	if (Hk < 1) {
		let n = calcAngularFreq(Wk, Hk);
		Kk = (s) => F - Math.exp(-Hk * Wk * s) * (($ + Hk * Wk * Uk) / n * Math.sin(n * s) + Uk * Math.cos(n * s));
	} else if (Hk === 1) Kk = (n) => F - Math.exp(-Wk * n) * (Uk + ($ + Wk * Uk) * n);
	else {
		let n = Wk * Math.sqrt(Hk * Hk - 1);
		Kk = (s) => {
			let d = Math.exp(-Hk * Wk * s), C = Math.min(n * s, 300);
			return F - d * (($ + Hk * Wk * Uk) * Math.sinh(C) + n * Uk * Math.cosh(C)) / n;
		};
	}
	let qk = {
		calculatedDuration: X && q || null,
		next: (n) => {
			let s = Kk(n);
			if (X) L.done = n >= q;
			else {
				let d = n === 0 ? $ : 0;
				Hk < 1 && (d = n === 0 ? /* @__PURE__ */ secondsToMilliseconds($) : calcGeneratorVelocity(Kk, n, s));
				let k = Math.abs(d) <= C, V = Math.abs(F - s) <= w;
				L.done = k && V;
			}
			return L.value = L.done ? F : s, L;
		},
		toString: () => {
			let n = Math.min(calcGeneratorDuration(qk), maxGeneratorDuration), s = generateLinearEasing((s) => qk.next(n * s).value, n, 30);
			return n + "ms " + s;
		},
		toTransition: () => {}
	};
	return qk;
}
spring.applyToOptions = (n) => {
	let s = createGeneratorEasing(n, 100, spring);
	return n.ease = s.ease, n.duration = /* @__PURE__ */ secondsToMilliseconds(s.duration), n.type = "keyframes", n;
};
function inertia({ keyframes: n, velocity: s = 0, power: d = .8, timeConstant: C = 325, bounceDamping: w = 10, bounceStiffness: k = 500, modifyTarget: F, min: L, max: V, restDelta: U = .5, restSpeed: K }) {
	let q = n[0], J = {
		done: !1,
		value: q
	}, X = (n) => L !== void 0 && n < L || V !== void 0 && n > V, $ = (n) => L === void 0 ? V : V === void 0 || Math.abs(L - n) < Math.abs(V - n) ? L : V, Hk = d * s, Uk = q + Hk, Wk = F === void 0 ? Uk : F(Uk);
	Wk !== Uk && (Hk = Wk - q);
	let Gk = (n) => -Hk * Math.exp(-n / C), Kk = (n) => Wk + Gk(n), qk = (n) => {
		let s = Gk(n), d = Kk(n);
		J.done = Math.abs(s) <= U, J.value = J.done ? Wk : d;
	}, Jk, Yk, Xk = (n) => {
		X(J.value) && (Jk = n, Yk = spring({
			keyframes: [J.value, $(J.value)],
			velocity: calcGeneratorVelocity(Kk, n, J.value),
			damping: w,
			stiffness: k,
			restDelta: U,
			restSpeed: K
		}));
	};
	return Xk(0), {
		calculatedDuration: null,
		next: (n) => {
			let s = !1;
			return !Yk && Jk === void 0 && (s = !0, qk(n), Xk(n)), Jk !== void 0 && n >= Jk ? Yk.next(n - Jk) : (!s && qk(n), J);
		}
	};
}
function createMixers(n, s, d) {
	let C = [], w = d || MotionGlobalConfig.mix || mix, k = n.length - 1;
	for (let d = 0; d < k; d++) {
		let k = w(n[d], n[d + 1]);
		s && (k = pipe(Array.isArray(s) ? s[d] || noop : s, k)), C.push(k);
	}
	return C;
}
function interpolate(n, s, { clamp: d = !0, ease: C, mixer: w } = {}) {
	let k = n.length;
	if (invariant(k === s.length, "Both input and output ranges must be the same length", "range-length"), k === 1) return () => s[0];
	if (k === 2 && s[0] === s[1]) return () => s[1];
	let F = n[0] === n[1];
	n[0] > n[k - 1] && (n = [...n].reverse(), s = [...s].reverse());
	let L = createMixers(s, C, w), V = L.length, U = (d) => {
		if (F && d < n[0]) return s[0];
		let C = 0;
		if (V > 1) for (; C < n.length - 2 && !(d < n[C + 1]); C++);
		let w = /* @__PURE__ */ progress(n[C], n[C + 1], d);
		return L[C](w);
	};
	return d ? (s) => U(clamp(n[0], n[k - 1], s)) : U;
}
function fillOffset(n, s) {
	let d = n[n.length - 1];
	for (let C = 1; C <= s; C++) {
		let w = /* @__PURE__ */ progress(0, s, C);
		n.push(mixNumber(d, 1, w));
	}
}
function defaultOffset(n) {
	let s = [0];
	return fillOffset(s, n.length - 1), s;
}
function convertOffsetToTimes(n, s) {
	return n.map((n) => n * s);
}
function defaultEasing(n, s) {
	return n.map(() => s || easeInOut).splice(0, n.length - 1);
}
function keyframes({ duration: n = 300, keyframes: s, times: d, ease: C = "easeInOut" }) {
	let w = isEasingArray(C) ? C.map(easingDefinitionToFunction) : easingDefinitionToFunction(C), k = {
		done: !1,
		value: s[0]
	}, F = interpolate(convertOffsetToTimes(d && d.length === s.length ? d : defaultOffset(s), n), s, { ease: Array.isArray(w) ? w : defaultEasing(s, w) });
	return {
		calculatedDuration: n,
		next: (s) => (k.value = F(s), k.done = s >= n, k)
	};
}
var isNotNull$1 = (n) => n !== null;
function getFinalKeyframe$1(n, { repeat: s, repeatType: d = "loop" }, C, w = 1) {
	let k = n.filter(isNotNull$1), F = w < 0 || s && d !== "loop" && s % 2 == 1 ? 0 : k.length - 1;
	return !F || C === void 0 ? k[F] : C;
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
	then(n, s) {
		return this.finished.then(n, s);
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
		let { type: s = keyframes, repeat: d = 0, repeatDelay: C = 0, repeatType: w, velocity: k = 0 } = n, { keyframes: F } = n, L = s || keyframes;
		process.env.NODE_ENV !== "production" && L !== keyframes && invariant(F.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${F}`, "spring-two-frames"), L !== keyframes && typeof F[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(F[0], F[1])), F = [0, 100]);
		let V = L({
			...n,
			keyframes: F
		});
		w === "mirror" && (this.mirroredGenerator = L({
			...n,
			keyframes: [...F].reverse(),
			velocity: -k
		})), V.calculatedDuration === null && (V.calculatedDuration = calcGeneratorDuration(V));
		let { calculatedDuration: U } = V;
		this.calculatedDuration = U, this.resolvedDuration = U + C, this.totalDuration = this.resolvedDuration * (d + 1) - C, this.generator = V;
	}
	updateTime(n) {
		let s = Math.round(n - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = s : this.currentTime = this.holdTime;
	}
	tick(n, s = !1) {
		let { generator: d, totalDuration: C, mixKeyframes: w, mirroredGenerator: k, resolvedDuration: F, calculatedDuration: L } = this;
		if (this.startTime === null) return d.next(0);
		let { delay: V = 0, keyframes: U, repeat: K, repeatType: q, repeatDelay: J, type: X, onUpdate: $, finalKeyframe: Hk } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, n) : this.speed < 0 && (this.startTime = Math.min(n - C / this.speed, this.startTime)), s ? this.currentTime = n : this.updateTime(n);
		let Uk = this.currentTime - V * (this.playbackSpeed >= 0 ? 1 : -1), Wk = this.playbackSpeed >= 0 ? Uk < 0 : Uk > C;
		this.currentTime = Math.max(Uk, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = C);
		let Gk = this.currentTime, Kk = d;
		if (K) {
			let n = Math.min(this.currentTime, C) / F, s = Math.floor(n), d = n % 1;
			!d && n >= 1 && (d = 1), d === 1 && s--, s = Math.min(s, K + 1), s % 2 && (q === "reverse" ? (d = 1 - d, J && (d -= J / F)) : q === "mirror" && (Kk = k)), Gk = clamp(0, 1, d) * F;
		}
		let qk = Wk ? {
			done: !1,
			value: U[0]
		} : Kk.next(Gk);
		w && (qk.value = w(qk.value));
		let { done: Jk } = qk;
		!Wk && L !== null && (Jk = this.playbackSpeed >= 0 ? this.currentTime >= C : this.currentTime <= 0);
		let Yk = this.holdTime === null && (this.state === "finished" || this.state === "running" && Jk);
		return Yk && X !== inertia && (qk.value = getFinalKeyframe$1(U, this.options, Hk, this.speed)), $ && $(qk.value), Yk && this.finish(), qk;
	}
	then(n, s) {
		return this.finished.then(n, s);
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
		let s = this.playbackSpeed !== n;
		this.playbackSpeed = n, s && (this.time = /* @__PURE__ */ millisecondsToSeconds(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: n = frameloopDriver, startTime: s } = this.options;
		this.driver ||= n((n) => this.tick(n)), this.options.onPlay?.();
		let d = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = d) : this.holdTime === null ? this.startTime ||= s ?? d : this.startTime = d - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
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
	for (let s = 1; s < n.length; s++) n[s] ?? (n[s] = n[s - 1]);
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
function parseValueFromTransform(n, s) {
	if (!n || n === "none") return defaultTransformValue(s);
	let d = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), C, w;
	if (d) C = matrix3dParsers, w = d;
	else {
		let s = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		C = matrix2dParsers, w = s;
	}
	if (!w) return defaultTransformValue(s);
	let k = C[s], F = w[1].split(",").map(convertTransformToNumber);
	return typeof k == "function" ? k(F) : F[k];
}
var readTransformValue = (n, s) => {
	let { transform: d = "none" } = getComputedStyle(n);
	return parseValueFromTransform(d, s);
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
	let s = [];
	return nonTranslationalTransformKeys.forEach((d) => {
		let C = n.getValue(d);
		C !== void 0 && (s.push([d, C.get()]), C.set(d.startsWith("scale") ? 1 : 0));
	}), s;
}
var positionalValues = {
	width: ({ x: n }, { paddingLeft: s = "0", paddingRight: d = "0" }) => n.max - n.min - parseFloat(s) - parseFloat(d),
	height: ({ y: n }, { paddingTop: s = "0", paddingBottom: d = "0" }) => n.max - n.min - parseFloat(s) - parseFloat(d),
	top: (n, { top: s }) => parseFloat(s),
	left: (n, { left: s }) => parseFloat(s),
	bottom: ({ y: n }, { top: s }) => parseFloat(s) + (n.max - n.min),
	right: ({ x: n }, { left: s }) => parseFloat(s) + (n.max - n.min),
	x: (n, { transform: s }) => parseValueFromTransform(s, "x"),
	y: (n, { transform: s }) => parseValueFromTransform(s, "y")
};
positionalValues.translateX = positionalValues.x, positionalValues.translateY = positionalValues.y;
var toResolve = /* @__PURE__ */ new Set(), isScheduled = !1, anyNeedsMeasurement = !1, isForced = !1;
function measureAllKeyframes() {
	if (anyNeedsMeasurement) {
		let n = Array.from(toResolve).filter((n) => n.needsMeasurement), s = new Set(n.map((n) => n.element)), d = /* @__PURE__ */ new Map();
		s.forEach((n) => {
			let s = removeNonTranslationalTransform(n);
			s.length && (d.set(n, s), n.render());
		}), n.forEach((n) => n.measureInitialState()), s.forEach((n) => {
			n.render();
			let s = d.get(n);
			s && s.forEach(([s, d]) => {
				n.getValue(s)?.set(d);
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
	constructor(n, s, d, C, w, k = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...n], this.onComplete = s, this.name = d, this.motionValue = C, this.element = w, this.isAsync = k;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: n, name: s, element: d, motionValue: C } = this;
		if (n[0] === null) {
			let w = C?.get(), k = n[n.length - 1];
			if (w !== void 0) n[0] = w;
			else if (d && s) {
				let C = d.readValue(s, k);
				C != null && (n[0] = C);
			}
			n[0] === void 0 && (n[0] = k), C && w === void 0 && C.set(n[0]);
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
function setStyle(n, s, d) {
	isCSSVar(s) ? n.style.setProperty(s, d) : n.style[s] = d;
}
var supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0), supportsFlags = {};
function memoSupports(n, s) {
	let d = /* @__PURE__ */ memo$1(n);
	return () => supportsFlags[s] ?? d();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([n, s, d, C]) => `cubic-bezier(${n}, ${s}, ${d}, ${C})`, supportedWaapiEasing = {
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
function mapEasingToNativeEasing(n, s) {
	if (n) return typeof n == "function" ? supportsLinearEasing() ? generateLinearEasing(n, s) : "ease-out" : isBezierDefinition(n) ? cubicBezierAsString(n) : Array.isArray(n) ? n.map((n) => mapEasingToNativeEasing(n, s) || supportedWaapiEasing.easeOut) : supportedWaapiEasing[n];
}
function startWaapiAnimation(n, s, d, { delay: C = 0, duration: w = 300, repeat: k = 0, repeatType: F = "loop", ease: L = "easeOut", times: V } = {}, U = void 0) {
	let K = { [s]: d };
	V && (K.offset = V);
	let q = mapEasingToNativeEasing(L, w);
	Array.isArray(q) && (K.easing = q), statsBuffer.value && activeAnimations.waapi++;
	let J = {
		delay: C,
		duration: w,
		easing: Array.isArray(q) ? "linear" : q,
		fill: "both",
		iterations: k + 1,
		direction: F === "reverse" ? "alternate" : "normal"
	};
	U && (J.pseudoElement = U);
	let X = n.animate(K, J);
	return statsBuffer.value && X.finished.finally(() => {
		activeAnimations.waapi--;
	}), X;
}
function isGenerator(n) {
	return typeof n == "function" && "applyToOptions" in n;
}
function applyGeneratorOptions({ type: n, ...s }) {
	return isGenerator(n) && supportsLinearEasing() ? n.applyToOptions(s) : (s.duration ??= 300, s.ease ??= "easeOut", s);
}
var NativeAnimation = class extends WithPromise {
	constructor(n) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !n) return;
		let { element: s, name: d, keyframes: C, pseudoElement: w, allowFlatten: k = !1, finalKeyframe: F, onComplete: L } = n;
		this.isPseudoElement = !!w, this.allowFlatten = k, this.options = n, invariant(typeof n.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let V = applyGeneratorOptions(n);
		this.animation = startWaapiAnimation(s, d, C, V, w), V.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !w) {
				let n = getFinalKeyframe$1(C, this.options, F, this.speed);
				this.updateMotionValue ? this.updateMotionValue(n) : setStyle(s, d, n), this.animation.cancel();
			}
			L?.(), this.notifyFinished();
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
	attachTimeline({ timeline: n, observe: s }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, n && supportsScrollTimeline() ? (this.animation.timeline = n, noop) : s(this);
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
		let { motionValue: s, onUpdate: d, onComplete: C, element: w, ...k } = this.options;
		if (!s) return;
		if (n !== void 0) {
			s.set(n);
			return;
		}
		let F = new JSAnimation({
			...k,
			autoplay: !1
		}), L = Math.max(sampleDelta, time.now() - this.startTime), V = clamp(0, sampleDelta, L - sampleDelta);
		s.setWithVelocity(F.sample(Math.max(0, L - V)).value, F.sample(L).value, V), F.stop();
	}
}, isAnimatable = (n, s) => s === "zIndex" ? !1 : !!(typeof n == "number" || Array.isArray(n) || typeof n == "string" && (complex.test(n) || n === "0") && !n.startsWith("url("));
function hasKeyframesChanged(n) {
	let s = n[0];
	if (n.length === 1) return !0;
	for (let d = 0; d < n.length; d++) if (n[d] !== s) return !0;
}
function canAnimate(n, s, d, C) {
	let w = n[0];
	if (w === null) return !1;
	if (s === "display" || s === "visibility") return !0;
	let k = n[n.length - 1], F = isAnimatable(w, s), L = isAnimatable(k, s);
	return warning(F === L, `You are trying to animate ${s} from "${w}" to "${k}". "${F ? k : w}" is not an animatable value.`, "value-not-animatable"), !F || !L ? !1 : hasKeyframesChanged(n) || (d === "spring" || isGenerator(d)) && C;
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
	let { motionValue: s, name: d, repeatDelay: C, repeatType: w, damping: k, type: F } = n;
	if (!(s?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: L, transformTemplate: V } = s.owner.getProps();
	return supportsWaapi() && d && acceleratedValues.has(d) && (d !== "transform" || !V) && !L && !C && w !== "mirror" && k !== 0 && F !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: n = !0, delay: s = 0, type: d = "keyframes", repeat: C = 0, repeatDelay: w = 0, repeatType: k = "loop", keyframes: F, name: L, motionValue: V, element: U, ...K }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let q = {
			autoplay: n,
			delay: s,
			type: d,
			repeat: C,
			repeatDelay: w,
			repeatType: k,
			name: L,
			motionValue: V,
			element: U,
			...K
		};
		this.keyframeResolver = new (U?.KeyframeResolver || KeyframeResolver)(F, (n, s, d) => this.onKeyframesResolved(n, s, q, !d), L, V, U), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(n, s, d, C) {
		this.keyframeResolver = void 0;
		let { name: w, type: k, velocity: F, delay: L, isHandoff: V, onUpdate: U } = d;
		this.resolvedAt = time.now(), canAnimate(n, w, k, F) || ((MotionGlobalConfig.instantAnimations || !L) && U?.(getFinalKeyframe$1(n, d, s)), n[0] = n[n.length - 1], makeAnimationInstant(d), d.repeat = 0);
		let K = {
			startTime: C ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: s,
			...d,
			keyframes: n
		}, q = !V && supportsBrowserAnimation(K) ? new NativeAnimationExtended({
			...K,
			element: K.motionValue.owner.current
		}) : new JSAnimation(K);
		q.finished.then(() => this.notifyFinished()).catch(noop), this.pendingTimeline &&= (this.stopTimeline = q.attachTimeline(this.pendingTimeline), void 0), this._animation = q;
	}
	get finished() {
		return this._animation ? this.animation.finished : this._finished;
	}
	then(n, s) {
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
	let s = splitCSSVariableRegex.exec(n);
	if (!s) return [,];
	let [, d, C, w] = s;
	return [`--${d ?? C}`, w];
}
var maxDepth = 4;
function getVariableValue(n, s, d = 1) {
	invariant(d <= maxDepth, `Max CSS variable fallback depth detected in property "${n}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [C, w] = parseCSSVariable(n);
	if (!C) return;
	let k = window.getComputedStyle(s).getPropertyValue(C);
	if (k) {
		let n = k.trim();
		return isNumericalString(n) ? parseFloat(n) : n;
	}
	return isCSSVariableToken(w) ? getVariableValue(w, s, d + 1) : w;
}
function getValueTransition(n, s) {
	return n?.[s] ?? n?.default ?? n;
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
}, testValueType = (n) => (s) => s.test(n), dimensionValueTypes = [
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
	let [s, d] = n.slice(0, -1).split("(");
	if (s === "drop-shadow") return n;
	let [C] = d.match(floatRegex) || [];
	if (!C) return n;
	let w = d.replace(C, ""), k = maxDefaults.has(s) ? 1 : 0;
	return C !== d && (k *= 100), s + "(" + k + w + ")";
}
var functionRegex = /\b([a-z-]*)\(.*?\)/gu, filter = {
	...complex,
	getAnimatableNone: (n) => {
		let s = n.match(functionRegex);
		return s ? s.map(applyDefaultFilter).join(" ") : n;
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
function getAnimatableNone(n, s) {
	let d = getDefaultValueType(n);
	return d !== filter && (d = complex), d.getAnimatableNone ? d.getAnimatableNone(s) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(n, s, d) {
	let C = 0, w;
	for (; C < n.length && !w;) {
		let s = n[C];
		typeof s == "string" && !invalidTemplates.has(s) && analyseComplexValue(s).values.length && (w = n[C]), C++;
	}
	if (w && d) for (let C of s) n[C] = getAnimatableNone(d, w);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(n, s, d, C, w) {
		super(n, s, d, C, w, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: n, element: s, name: d } = this;
		if (!s || !s.current) return;
		super.readKeyframes();
		for (let d = 0; d < n.length; d++) {
			let C = n[d];
			if (typeof C == "string" && (C = C.trim(), isCSSVariableToken(C))) {
				let w = getVariableValue(C, s.current);
				w !== void 0 && (n[d] = w), d === n.length - 1 && (this.finalKeyframe = C);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(d) || n.length !== 2) return;
		let [C, w] = n, k = findDimensionValueType(C), F = findDimensionValueType(w);
		if (containsCSSVariable(C) !== containsCSSVariable(w) && positionalValues[d]) {
			this.needsMeasurement = !0;
			return;
		}
		if (k !== F) if (isNumOrPxType(k) && isNumOrPxType(F)) for (let s = 0; s < n.length; s++) {
			let d = n[s];
			typeof d == "string" && (n[s] = parseFloat(d));
		}
		else positionalValues[d] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: n, name: s } = this, d = [];
		for (let s = 0; s < n.length; s++) (n[s] === null || isNone(n[s])) && d.push(s);
		d.length && makeNoneKeyframesAnimatable(n, d, s);
	}
	measureInitialState() {
		let { element: n, unresolvedKeyframes: s, name: d } = this;
		if (!n || !n.current) return;
		d === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[d](n.measureViewportBox(), window.getComputedStyle(n.current)), s[0] = this.measuredOrigin;
		let C = s[s.length - 1];
		C !== void 0 && n.getValue(d, C).jump(C, !1);
	}
	measureEndState() {
		let { element: n, name: s, unresolvedKeyframes: d } = this;
		if (!n || !n.current) return;
		let C = n.getValue(s);
		C && C.jump(this.measuredOrigin, !1);
		let w = d.length - 1, k = d[w];
		d[w] = positionalValues[s](n.measureViewportBox(), window.getComputedStyle(n.current)), k !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = k), this.removedTransforms?.length && this.removedTransforms.forEach(([s, d]) => {
			n.getValue(s).set(d);
		}), this.resolveNoneKeyframes();
	}
};
function resolveElements(n, s, d) {
	if (n instanceof EventTarget) return [n];
	if (typeof n == "string") {
		let C = document;
		s && (C = s.current);
		let w = d?.[n] ?? C.querySelectorAll(n);
		return w ? Array.from(w) : [];
	}
	return Array.from(n);
}
var getValueAsType = (n, s) => s && typeof n == "number" ? s.transform(n) : n;
function isHTMLElement(n) {
	return isObject(n) && "offsetHeight" in n;
}
var MAX_VELOCITY_DELTA = 30, isFloat = (n) => !isNaN(parseFloat(n)), collectMotionValues = { current: void 0 }, MotionValue = class {
	constructor(n, s = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (n) => {
			let s = time.now();
			if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(n), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents)) for (let n of this.dependents) n.dirty();
		}, this.hasAnimated = !1, this.setCurrent(n), this.owner = s.owner;
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
	on(n, s) {
		this.events[n] || (this.events[n] = new SubscriptionManager());
		let d = this.events[n].add(s);
		return n === "change" ? () => {
			d(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : d;
	}
	clearListeners() {
		for (let n in this.events) this.events[n].clear();
	}
	attach(n, s) {
		this.passiveEffect = n, this.stopPassiveEffect = s;
	}
	set(n) {
		this.passiveEffect ? this.passiveEffect(n, this.updateAndNotify) : this.updateAndNotify(n);
	}
	setWithVelocity(n, s, d) {
		this.set(s), this.prev = void 0, this.prevFrameValue = n, this.prevUpdatedAt = this.updatedAt - d;
	}
	jump(n, s = !0) {
		this.updateAndNotify(n), this.prev = n, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
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
		let s = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
		return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
	}
	start(n) {
		return this.stop(), new Promise((s) => {
			this.hasAnimated = !0, this.animation = n(s), this.events.animationStart && this.events.animationStart.notify();
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
function motionValue(n, s) {
	return new MotionValue(n, s);
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
function setupGesture(n, s) {
	let d = resolveElements(n), C = new AbortController();
	return [
		d,
		{
			passive: !0,
			...s,
			signal: C.signal
		},
		() => C.abort()
	];
}
function isValidHover(n) {
	return !(n.pointerType === "touch" || isDragActive());
}
function hover(n, s, d = {}) {
	let [C, w, k] = setupGesture(n, d), F = (n) => {
		if (!isValidHover(n)) return;
		let { target: d } = n, C = s(d, n);
		if (typeof C != "function" || !d) return;
		let k = (n) => {
			isValidHover(n) && (C(n), d.removeEventListener("pointerleave", k));
		};
		d.addEventListener("pointerleave", k, w);
	};
	return C.forEach((n) => {
		n.addEventListener("pointerenter", F, w);
	}), k;
}
var isNodeOrChild = (n, s) => s ? n === s ? !0 : isNodeOrChild(n, s.parentElement) : !1, isPrimaryPointer = (n) => n.pointerType === "mouse" ? typeof n.button != "number" || n.button <= 0 : n.isPrimary !== !1, interactiveElements = new Set([
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
	return (s) => {
		s.key === "Enter" && n(s);
	};
}
function firePointerEvent(n, s) {
	n.dispatchEvent(new PointerEvent("pointer" + s, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var enableKeyboardPress = (n, s) => {
	let d = n.currentTarget;
	if (!d) return;
	let C = filterEvents(() => {
		if (isPressing.has(d)) return;
		firePointerEvent(d, "down");
		let n = filterEvents(() => {
			firePointerEvent(d, "up");
		});
		d.addEventListener("keyup", n, s), d.addEventListener("blur", () => firePointerEvent(d, "cancel"), s);
	});
	d.addEventListener("keydown", C, s), d.addEventListener("blur", () => d.removeEventListener("keydown", C), s);
};
function isValidPressEvent(n) {
	return isPrimaryPointer(n) && !isDragActive();
}
function press(n, s, d = {}) {
	let [C, w, k] = setupGesture(n, d), F = (n) => {
		let C = n.currentTarget;
		if (!isValidPressEvent(n)) return;
		isPressing.add(C);
		let k = s(C, n), F = (n, s) => {
			window.removeEventListener("pointerup", L), window.removeEventListener("pointercancel", V), isPressing.has(C) && isPressing.delete(C), isValidPressEvent(n) && typeof k == "function" && k(n, { success: s });
		}, L = (n) => {
			F(n, C === window || C === document || d.useGlobalTarget || isNodeOrChild(C, n.target));
		}, V = (n) => {
			F(n, !1);
		};
		window.addEventListener("pointerup", L, w), window.addEventListener("pointercancel", V, w);
	};
	return C.forEach((n) => {
		(d.useGlobalTarget ? window : n).addEventListener("pointerdown", F, w), isHTMLElement(n) && (n.addEventListener("focus", (n) => enableKeyboardPress(n, w)), !isElementKeyboardAccessible(n) && !n.hasAttribute("tabindex") && (n.tabIndex = 0));
	}), k;
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
function usePresence(n = !0) {
	let s = useContext(PresenceContext);
	if (s === null) return [!0, null];
	let { isPresent: d, onExitComplete: C, register: w } = s, k = useId();
	useEffect(() => {
		if (n) return w(k);
	}, [n]);
	let F = useCallback(() => n && C && C(k), [
		k,
		C,
		n
	]);
	return !d && C ? [!1, F] : [!0];
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
for (let n in featureProps) featureDefinitions[n] = { isEnabled: (s) => featureProps[n].some((n) => !!s[n]) };
function loadFeatures(n) {
	for (let s in n) featureDefinitions[s] = {
		...featureDefinitions[s],
		...n[s]
	};
}
var validMotionProps = new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport".split("."));
function isValidMotionProp(n) {
	return n.startsWith("while") || n.startsWith("drag") && n !== "draggable" || n.startsWith("layout") || n.startsWith("onTap") || n.startsWith("onPan") || n.startsWith("onLayout") || validMotionProps.has(n);
}
function memoize(n) {
	var s = Object.create(null);
	return function(d) {
		return s[d] === void 0 && (s[d] = n(d)), s[d];
	};
}
var init_emotion_memoize_esm = __esmMin((() => {})), emotion_is_prop_valid_esm_exports = /* @__PURE__ */ __export({ default: () => isPropValid }), reactPropsRegex, isPropValid, init_emotion_is_prop_valid_esm = __esmMin((() => {
	init_emotion_memoize_esm(), reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, isPropValid = /* @__PURE__ */ memoize(function(n) {
		return reactPropsRegex.test(n) || n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && n.charCodeAt(2) < 91;
	});
})), shouldForward = (n) => !isValidMotionProp(n);
function loadExternalIsValidProp(n) {
	typeof n == "function" && (shouldForward = (s) => s.startsWith("on") ? !isValidMotionProp(s) : n(s));
}
try {
	loadExternalIsValidProp((init_emotion_is_prop_valid_esm(), __toCommonJS(emotion_is_prop_valid_esm_exports)).default);
} catch {}
function filterProps(n, s, d) {
	let C = {};
	for (let w in n) w === "values" && typeof n.values == "object" || (shouldForward(w) || d === !0 && isValidMotionProp(w) || !s && !isValidMotionProp(w) || n.draggable && w.startsWith("onDrag")) && (C[w] = n[w]);
	return C;
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
	return isAnimationControls(n.animate) || variantProps.some((s) => isVariantLabel(n[s]));
}
function isVariantNode(n) {
	return !!(isControllingVariants(n) || n.variants);
}
function getCurrentTreeVariants(n, s) {
	if (isControllingVariants(n)) {
		let { initial: s, animate: d } = n;
		return {
			initial: s === !1 || isVariantLabel(s) ? s : void 0,
			animate: isVariantLabel(d) ? d : void 0
		};
	}
	return n.inherit === !1 ? {} : s;
}
function useCreateMotionContext(n) {
	let { initial: s, animate: d } = getCurrentTreeVariants(n, useContext(MotionContext));
	return useMemo(() => ({
		initial: s,
		animate: d
	}), [variantLabelsAsDependency(s), variantLabelsAsDependency(d)]);
}
function variantLabelsAsDependency(n) {
	return Array.isArray(n) ? n.join(" ") : n;
}
function pixelsToPercent(n, s) {
	return s.max === s.min ? 0 : n / (s.max - s.min) * 100;
}
var correctBorderRadius = { correct: (n, s) => {
	if (!s.target) return n;
	if (typeof n == "string") if (px.test(n)) n = parseFloat(n);
	else return n;
	return `${pixelsToPercent(n, s.target.x)}% ${pixelsToPercent(n, s.target.y)}%`;
} }, correctBoxShadow = { correct: (n, { treeScale: s, projectionDelta: d }) => {
	let C = n, w = complex.parse(n);
	if (w.length > 5) return C;
	let k = complex.createTransformer(n), F = typeof w[0] == "number" ? 0 : 1, L = d.x.scale * s.x, V = d.y.scale * s.y;
	w[0 + F] /= L, w[1 + F] /= V;
	let U = mixNumber(L, V, .5);
	return typeof w[2 + F] == "number" && (w[2 + F] /= U), typeof w[3 + F] == "number" && (w[3 + F] /= U), k(w);
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
function isForcedMotionValue(n, { layout: s, layoutId: d }) {
	return transformProps.has(n) || n.startsWith("origin") || (s || d !== void 0) && (!!scaleCorrectors[n] || n === "opacity");
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(n, s, d) {
	let C = "", w = !0;
	for (let k = 0; k < numTransforms; k++) {
		let F = transformPropOrder[k], L = n[F];
		if (L === void 0) continue;
		let V = !0;
		if (V = typeof L == "number" ? L === (F.startsWith("scale") ? 1 : 0) : parseFloat(L) === 0, !V || d) {
			let n = getValueAsType(L, numberValueTypes[F]);
			if (!V) {
				w = !1;
				let s = translateAlias[F] || F;
				C += `${s}(${n}) `;
			}
			d && (s[F] = n);
		}
	}
	return C = C.trim(), d ? C = d(s, w ? "" : C) : w && (C = "none"), C;
}
function buildHTMLStyles(n, s, d) {
	let { style: C, vars: w, transformOrigin: k } = n, F = !1, L = !1;
	for (let n in s) {
		let d = s[n];
		if (transformProps.has(n)) {
			F = !0;
			continue;
		} else if (isCSSVariableName(n)) {
			w[n] = d;
			continue;
		} else {
			let s = getValueAsType(d, numberValueTypes[n]);
			n.startsWith("origin") ? (L = !0, k[n] = s) : C[n] = s;
		}
	}
	if (s.transform || (F || d ? C.transform = buildTransform(s, n.transform, d) : C.transform &&= "none"), L) {
		let { originX: n = "50%", originY: s = "50%", originZ: d = 0 } = k;
		C.transformOrigin = `${n} ${s} ${d}`;
	}
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(n, s, d) {
	for (let C in s) !isMotionValue(s[C]) && !isForcedMotionValue(C, d) && (n[C] = s[C]);
}
function useInitialMotionValues({ transformTemplate: n }, s) {
	return useMemo(() => {
		let d = createHtmlRenderState();
		return buildHTMLStyles(d, s, n), Object.assign({}, d.vars, d.style);
	}, [s]);
}
function useStyle(n, s) {
	let d = n.style || {}, C = {};
	return copyRawValuesOnly(C, d, n), Object.assign(C, useInitialMotionValues(n, s)), C;
}
function useHTMLProps(n, s) {
	let d = {}, C = useStyle(n, s);
	return n.drag && n.dragListener !== !1 && (d.draggable = !1, C.userSelect = C.WebkitUserSelect = C.WebkitTouchCallout = "none", C.touchAction = n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`), n.tabIndex === void 0 && (n.onTap || n.onTapStart || n.whileTap) && (d.tabIndex = 0), d.style = C, d;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(n, s, d = 1, C = 0, w = !0) {
	n.pathLength = 1;
	let k = w ? dashKeys : camelKeys;
	n[k.offset] = px.transform(-C);
	let F = px.transform(s), L = px.transform(d);
	n[k.array] = `${F} ${L}`;
}
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(n, { attrX: s, attrY: d, attrScale: C, pathLength: w, pathSpacing: k = 1, pathOffset: F = 0, ...L }, V, U, K) {
	if (buildHTMLStyles(n, L, U), V) {
		n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
		return;
	}
	n.attrs = n.style, n.style = {};
	let { attrs: q, style: J } = n;
	q.transform && (J.transform = q.transform, delete q.transform), (J.transform || q.transformOrigin) && (J.transformOrigin = q.transformOrigin ?? "50% 50%", delete q.transformOrigin), J.transform && (J.transformBox = K?.transformBox ?? "fill-box", delete q.transformBox);
	for (let n of cssMotionPathProperties) q[n] !== void 0 && (J[n] = q[n], delete q[n]);
	s !== void 0 && (q.x = s), d !== void 0 && (q.y = d), C !== void 0 && (q.scale = C), w !== void 0 && buildSVGPath(q, w, k, F, !1);
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function useSVGProps(n, s, d, C) {
	let w = useMemo(() => {
		let d = createSvgRenderState();
		return buildSVGAttrs(d, s, isSVGTag(C), n.transformTemplate, n.style), {
			...d.attrs,
			style: { ...d.style }
		};
	}, [s]);
	if (n.style) {
		let s = {};
		copyRawValuesOnly(s, n.style, n), w.style = {
			...s,
			...w.style
		};
	}
	return w;
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
function useRender(n, s, d, { latestValues: w }, k, L = !1, V) {
	let U = (V ?? isSVGComponent(n) ? useSVGProps : useHTMLProps)(s, w, k, n), K = filterProps(s, typeof n == "string", L), q = n === Fragment ? {} : {
		...K,
		...U,
		ref: d
	}, { children: J } = s, X = useMemo(() => isMotionValue(J) ? J.get() : J, [J]);
	return createElement(n, {
		...q,
		children: X
	});
}
function getValueState(n) {
	let s = [{}, {}];
	return n?.values.forEach((n, d) => {
		s[0][d] = n.get(), s[1][d] = n.getVelocity();
	}), s;
}
function resolveVariantFromProps(n, s, d, C) {
	if (typeof s == "function") {
		let [w, k] = getValueState(C);
		s = s(d === void 0 ? n.custom : d, w, k);
	}
	if (typeof s == "string" && (s = n.variants && n.variants[s]), typeof s == "function") {
		let [w, k] = getValueState(C);
		s = s(d === void 0 ? n.custom : d, w, k);
	}
	return s;
}
function resolveMotionValue(n) {
	return isMotionValue(n) ? n.get() : n;
}
function makeState({ scrapeMotionValuesFromProps: n, createRenderState: s }, d, C, w) {
	return {
		latestValues: makeLatestValues(d, C, w, n),
		renderState: s()
	};
}
function makeLatestValues(n, s, d, C) {
	let w = {}, k = C(n, {});
	for (let n in k) w[n] = resolveMotionValue(k[n]);
	let { initial: F, animate: L } = n, V = isControllingVariants(n), U = isVariantNode(n);
	s && U && !V && n.inherit !== !1 && (F === void 0 && (F = s.initial), L === void 0 && (L = s.animate));
	let K = d ? d.initial === !1 : !1;
	K ||= F === !1;
	let q = K ? L : F;
	if (q && typeof q != "boolean" && !isAnimationControls(q)) {
		let s = Array.isArray(q) ? q : [q];
		for (let d = 0; d < s.length; d++) {
			let C = resolveVariantFromProps(n, s[d]);
			if (C) {
				let { transitionEnd: n, transition: s, ...d } = C;
				for (let n in d) {
					let s = d[n];
					if (Array.isArray(s)) {
						let n = K ? s.length - 1 : 0;
						s = s[n];
					}
					s !== null && (w[n] = s);
				}
				for (let s in n) w[s] = n[s];
			}
		}
	}
	return w;
}
var makeUseVisualState = (n) => (s, d) => {
	let C = useContext(MotionContext), w = useContext(PresenceContext), k = () => makeState(n, s, C, w);
	return d ? k() : useConstant(k);
};
function scrapeMotionValuesFromProps$1(n, s, d) {
	let { style: C } = n, w = {};
	for (let k in C) (isMotionValue(C[k]) || s.style && isMotionValue(s.style[k]) || isForcedMotionValue(k, n) || d?.getValue(k)?.liveStyle !== void 0) && (w[k] = C[k]);
	return w;
}
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
function scrapeMotionValuesFromProps(n, s, d) {
	let C = scrapeMotionValuesFromProps$1(n, s, d);
	for (let d in n) if (isMotionValue(n[d]) || isMotionValue(s[d])) {
		let s = transformPropOrder.indexOf(d) === -1 ? d : "attr" + d.charAt(0).toUpperCase() + d.substring(1);
		C[s] = n[d];
	}
	return C;
}
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(n, s, d) {
	let C = useRef(d);
	useInsertionEffect(() => {
		C.current = d;
	});
	let w = useRef(null);
	return useCallback((d) => {
		d && n.onMount?.(d), s && (d ? s.mount(d) : s.unmount());
		let k = C.current;
		if (typeof k == "function") if (d) {
			let n = k(d);
			typeof n == "function" && (w.current = n);
		} else w.current ? (w.current(), w.current = null) : k(d);
		else k && (k.current = d);
	}, [s]);
}
var camelToDash = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), SwitchLayoutGroupContext = createContext({});
function isRefObject(n) {
	return n && typeof n == "object" && Object.prototype.hasOwnProperty.call(n, "current");
}
function useVisualElement(n, s, d, C, w, k) {
	let { visualElement: F } = useContext(MotionContext), L = useContext(LazyContext), V = useContext(PresenceContext), U = useContext(MotionConfigContext).reducedMotion, J = useRef(null);
	C ||= L.renderer, !J.current && C && (J.current = C(n, {
		visualState: s,
		parent: F,
		props: d,
		presenceContext: V,
		blockInitialAnimation: V ? V.initial === !1 : !1,
		reducedMotionConfig: U,
		isSVG: k
	}));
	let X = J.current, Hk = useContext(SwitchLayoutGroupContext);
	X && !X.projection && w && (X.type === "html" || X.type === "svg") && createProjectionNode$1(J.current, d, w, Hk);
	let Uk = useRef(!1);
	useInsertionEffect(() => {
		X && Uk.current && X.update(d, V);
	});
	let Gk = d[optimizedAppearDataAttribute], Kk = useRef(!!Gk && !window.MotionHandoffIsComplete?.(Gk) && window.MotionHasOptimisedAnimation?.(Gk));
	return useIsomorphicLayoutEffect(() => {
		X && (Uk.current = !0, window.MotionIsMounted = !0, X.updateFeatures(), X.scheduleRenderMicrotask(), Kk.current && X.animationState && X.animationState.animateChanges());
	}), useEffect(() => {
		X && (!Kk.current && X.animationState && X.animationState.animateChanges(), Kk.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(Gk);
		}), !1), X.enteringChildren = void 0);
	}), X;
}
function createProjectionNode$1(n, s, d, C) {
	let { layoutId: w, layout: k, drag: F, dragConstraints: L, layoutScroll: V, layoutRoot: U, layoutCrossfade: K } = s;
	n.projection = new d(n.latestValues, s["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(n.parent)), n.projection.setOptions({
		layoutId: w,
		layout: k,
		alwaysMeasureLayout: !!F || L && isRefObject(L),
		visualElement: n,
		animationType: typeof k == "string" ? k : "both",
		initialPromotionConfig: C,
		crossfade: K,
		layoutScroll: V,
		layoutRoot: U
	});
}
function getClosestProjectingNode(n) {
	if (n) return n.options.allowProjection === !1 ? getClosestProjectingNode(n.parent) : n.projection;
}
function createMotionComponent(n, { forwardMotionProps: s = !1, type: d } = {}, C, w) {
	C && loadFeatures(C);
	let k = d ? d === "svg" : isSVGComponent(n), F = k ? useSVGVisualState : useHTMLVisualState;
	function V(d, L) {
		let V, U = {
			...useContext(MotionConfigContext),
			...d,
			layoutId: useLayoutId(d)
		}, { isStatic: q } = U, J = useCreateMotionContext(d), X = F(d, q);
		if (!q && isBrowser) {
			useStrictMode(U, C);
			let s = getProjectionFunctionality(U);
			V = s.MeasureLayout, J.visualElement = useVisualElement(n, X, U, w, s.ProjectionNode, k);
		}
		return jsxs(MotionContext.Provider, {
			value: J,
			children: [V && J.visualElement ? jsx(V, {
				visualElement: J.visualElement,
				...U
			}) : null, useRender(n, d, useMotionRef(X, J.visualElement, L), X, q, s, k)]
		});
	}
	V.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
	let U = forwardRef(V);
	return U[motionComponentSymbol] = n, U;
}
function useLayoutId({ layoutId: n }) {
	let s = useContext(LayoutGroupContext).id;
	return s && n !== void 0 ? s + "-" + n : n;
}
function useStrictMode(n, s) {
	let d = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && s && d) {
		let s = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		n.ignoreStrict ? warning(!1, s, "lazy-strict-mode") : invariant(!1, s, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(n) {
	let { drag: s, layout: d } = featureDefinitions;
	if (!s && !d) return {};
	let C = {
		...s,
		...d
	};
	return {
		MeasureLayout: s?.isEnabled(n) || d?.isEnabled(n) ? C.MeasureLayout : void 0,
		ProjectionNode: C.ProjectionNode
	};
}
function createMotionProxy(n, s) {
	if (typeof Proxy > "u") return createMotionComponent;
	let d = /* @__PURE__ */ new Map(), C = (d, C) => createMotionComponent(d, C, n, s);
	return new Proxy((n, s) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), C(n, s)), { get: (w, k) => k === "create" ? C : (d.has(k) || d.set(k, createMotionComponent(k, void 0, n, s)), d.get(k)) });
}
function convertBoundingBoxToBox({ top: n, left: s, right: d, bottom: C }) {
	return {
		x: {
			min: s,
			max: d
		},
		y: {
			min: n,
			max: C
		}
	};
}
function convertBoxToBoundingBox({ x: n, y: s }) {
	return {
		top: s.min,
		right: n.max,
		bottom: s.max,
		left: n.min
	};
}
function transformBoxPoints(n, s) {
	if (!s) return n;
	let d = s({
		x: n.left,
		y: n.top
	}), C = s({
		x: n.right,
		y: n.bottom
	});
	return {
		top: d.y,
		left: d.x,
		bottom: C.y,
		right: C.x
	};
}
function isIdentityScale(n) {
	return n === void 0 || n === 1;
}
function hasScale({ scale: n, scaleX: s, scaleY: d }) {
	return !isIdentityScale(n) || !isIdentityScale(s) || !isIdentityScale(d);
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
function scalePoint(n, s, d) {
	return d + s * (n - d);
}
function applyPointDelta(n, s, d, C, w) {
	return w !== void 0 && (n = scalePoint(n, w, C)), scalePoint(n, d, C) + s;
}
function applyAxisDelta(n, s = 0, d = 1, C, w) {
	n.min = applyPointDelta(n.min, s, d, C, w), n.max = applyPointDelta(n.max, s, d, C, w);
}
function applyBoxDelta(n, { x: s, y: d }) {
	applyAxisDelta(n.x, s.translate, s.scale, s.originPoint), applyAxisDelta(n.y, d.translate, d.scale, d.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(n, s, d, C = !1) {
	let w = d.length;
	if (!w) return;
	s.x = s.y = 1;
	let k, F;
	for (let L = 0; L < w; L++) {
		k = d[L], F = k.projectionDelta;
		let { visualElement: w } = k.options;
		w && w.props.style && w.props.style.display === "contents" || (C && k.options.layoutScroll && k.scroll && k !== k.root && transformBox(n, {
			x: -k.scroll.offset.x,
			y: -k.scroll.offset.y
		}), F && (s.x *= F.x.scale, s.y *= F.y.scale, applyBoxDelta(n, F)), C && hasTransform(k.latestValues) && transformBox(n, k.latestValues));
	}
	s.x < TREE_SCALE_SNAP_MAX && s.x > TREE_SCALE_SNAP_MIN && (s.x = 1), s.y < TREE_SCALE_SNAP_MAX && s.y > TREE_SCALE_SNAP_MIN && (s.y = 1);
}
function translateAxis(n, s) {
	n.min += s, n.max += s;
}
function transformAxis(n, s, d, C, w = .5) {
	applyAxisDelta(n, s, d, mixNumber(n.min, n.max, w), C);
}
function transformBox(n, s) {
	transformAxis(n.x, s.x, s.scaleX, s.scale, s.originX), transformAxis(n.y, s.y, s.scaleY, s.scale, s.originY);
}
function measureViewportBox(n, s) {
	return convertBoundingBoxToBox(transformBoxPoints(n.getBoundingClientRect(), s));
}
function measurePageBox(n, s, d) {
	let C = measureViewportBox(n, d), { scroll: w } = s;
	return w && (translateAxis(C.x, w.offset.x), translateAxis(C.y, w.offset.y)), C;
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
		let n = window.matchMedia("(prefers-reduced-motion)"), s = () => prefersReducedMotion.current = n.matches;
		n.addEventListener("change", s), s();
	} else prefersReducedMotion.current = !1;
}
var visualElementStore = /* @__PURE__ */ new WeakMap();
function updateMotionValuesFromProps(n, s, d) {
	for (let C in s) {
		let w = s[C], k = d[C];
		if (isMotionValue(w)) n.addValue(C, w);
		else if (isMotionValue(k)) n.addValue(C, motionValue(w, { owner: n }));
		else if (k !== w) if (n.hasValue(C)) {
			let s = n.getValue(C);
			s.liveStyle === !0 ? s.jump(w) : s.hasAnimated || s.set(w);
		} else {
			let s = n.getStaticValue(C);
			n.addValue(C, motionValue(s === void 0 ? w : s, { owner: n }));
		}
	}
	for (let C in d) s[C] === void 0 && n.removeValue(C);
	return s;
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
	scrapeMotionValuesFromProps(n, s, d) {
		return {};
	}
	constructor({ parent: n, props: s, presenceContext: d, reducedMotionConfig: C, blockInitialAnimation: w, visualState: k }, F = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let n = time.now();
			this.renderScheduledAt < n && (this.renderScheduledAt = n, frame.render(this.render, !1, !0));
		};
		let { latestValues: L, renderState: V } = k;
		this.latestValues = L, this.baseTarget = { ...L }, this.initialValues = s.initial ? { ...L } : {}, this.renderState = V, this.parent = n, this.props = s, this.presenceContext = d, this.depth = n ? n.depth + 1 : 0, this.reducedMotionConfig = C, this.options = F, this.blockInitialAnimation = !!w, this.isControllingVariants = isControllingVariants(s), this.isVariantNode = isVariantNode(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(n && n.current);
		let { willChange: U, ...K } = this.scrapeMotionValuesFromProps(s, {}, this);
		for (let n in K) {
			let s = K[n];
			L[n] !== void 0 && isMotionValue(s) && s.set(L[n]);
		}
	}
	mount(n) {
		this.current = n, visualElementStore.set(n, this), this.projection && !this.projection.instance && this.projection.mount(n), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, s) => this.bindToMotionValue(s, n)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (hasReducedMotionListener.current || initPrefersReducedMotion(), this.shouldReduceMotion = prefersReducedMotion.current), process.env.NODE_ENV !== "production" && warnOnce(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), this.parent?.addChild(this), this.update(this.props, this.presenceContext);
	}
	unmount() {
		for (let n in this.projection && this.projection.unmount(), cancelFrame(this.notifyUpdate), cancelFrame(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[n].clear();
		for (let n in this.features) {
			let s = this.features[n];
			s && (s.unmount(), s.isMounted = !1);
		}
		this.current = null;
	}
	addChild(n) {
		this.children.add(n), this.enteringChildren ??= /* @__PURE__ */ new Set(), this.enteringChildren.add(n);
	}
	removeChild(n) {
		this.children.delete(n), this.enteringChildren && this.enteringChildren.delete(n);
	}
	bindToMotionValue(n, s) {
		this.valueSubscriptions.has(n) && this.valueSubscriptions.get(n)();
		let d = transformProps.has(n);
		d && this.onBindTransform && this.onBindTransform();
		let C = s.on("change", (s) => {
			this.latestValues[n] = s, this.props.onUpdate && frame.preRender(this.notifyUpdate), d && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), w;
		window.MotionCheckAppearSync && (w = window.MotionCheckAppearSync(this, n, s)), this.valueSubscriptions.set(n, () => {
			C(), w && w(), s.owner && s.stop();
		});
	}
	sortNodePosition(n) {
		return !this.current || !this.sortInstanceNodePosition || this.type !== n.type ? 0 : this.sortInstanceNodePosition(this.current, n.current);
	}
	updateFeatures() {
		let n = "animation";
		for (n in featureDefinitions) {
			let s = featureDefinitions[n];
			if (!s) continue;
			let { isEnabled: d, Feature: C } = s;
			if (!this.features[n] && C && d(this.props) && (this.features[n] = new C(this)), this.features[n]) {
				let s = this.features[n];
				s.isMounted ? s.update() : (s.mount(), s.isMounted = !0);
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
	setStaticValue(n, s) {
		this.latestValues[n] = s;
	}
	update(n, s) {
		(n.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = n, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
		for (let s = 0; s < propEventHandlers.length; s++) {
			let d = propEventHandlers[s];
			this.propEventSubscriptions[d] && (this.propEventSubscriptions[d](), delete this.propEventSubscriptions[d]);
			let C = n["on" + d];
			C && (this.propEventSubscriptions[d] = this.on(d, C));
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
		let s = this.getClosestVariantNode();
		if (s) return s.variantChildren && s.variantChildren.add(n), () => s.variantChildren.delete(n);
	}
	addValue(n, s) {
		let d = this.values.get(n);
		s !== d && (d && this.removeValue(n), this.bindToMotionValue(n, s), this.values.set(n, s), this.latestValues[n] = s.get());
	}
	removeValue(n) {
		this.values.delete(n);
		let s = this.valueSubscriptions.get(n);
		s && (s(), this.valueSubscriptions.delete(n)), delete this.latestValues[n], this.removeValueFromRenderState(n, this.renderState);
	}
	hasValue(n) {
		return this.values.has(n);
	}
	getValue(n, s) {
		if (this.props.values && this.props.values[n]) return this.props.values[n];
		let d = this.values.get(n);
		return d === void 0 && s !== void 0 && (d = motionValue(s === null ? void 0 : s, { owner: this }), this.addValue(n, d)), d;
	}
	readValue(n, s) {
		let d = this.latestValues[n] !== void 0 || !this.current ? this.latestValues[n] : this.getBaseTargetFromProps(this.props, n) ?? this.readValueFromInstance(this.current, n, this.options);
		return d != null && (typeof d == "string" && (isNumericalString(d) || isZeroValueString(d)) ? d = parseFloat(d) : !findValueType(d) && complex.test(s) && (d = getAnimatableNone(n, s)), this.setBaseTarget(n, isMotionValue(d) ? d.get() : d)), isMotionValue(d) ? d.get() : d;
	}
	setBaseTarget(n, s) {
		this.baseTarget[n] = s;
	}
	getBaseTarget(n) {
		let { initial: s } = this.props, d;
		if (typeof s == "string" || typeof s == "object") {
			let C = resolveVariantFromProps(this.props, s, this.presenceContext?.custom);
			C && (d = C[n]);
		}
		if (s && d !== void 0) return d;
		let C = this.getBaseTargetFromProps(this.props, n);
		return C !== void 0 && !isMotionValue(C) ? C : this.initialValues[n] !== void 0 && d === void 0 ? void 0 : this.baseTarget[n];
	}
	on(n, s) {
		return this.events[n] || (this.events[n] = new SubscriptionManager()), this.events[n].add(s);
	}
	notify(n, ...s) {
		this.events[n] && this.events[n].notify(...s);
	}
	scheduleRenderMicrotask() {
		microtask.render(this.render);
	}
}, DOMVisualElement = class extends VisualElement {
	constructor() {
		super(...arguments), this.KeyframeResolver = DOMKeyframesResolver;
	}
	sortInstanceNodePosition(n, s) {
		return n.compareDocumentPosition(s) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(n, s) {
		return n.style ? n.style[s] : void 0;
	}
	removeValueFromRenderState(n, { vars: s, style: d }) {
		delete s[n], delete d[n];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: n } = this.props;
		isMotionValue(n) && (this.childSubscription = n.on("change", (n) => {
			this.current && (this.current.textContent = `${n}`);
		}));
	}
};
function renderHTML(n, { style: s, vars: d }, C, w) {
	let k = n.style, F;
	for (F in s) k[F] = s[F];
	for (F in w?.applyProjectionStyles(k, C), d) k.setProperty(F, d[F]);
}
function getComputedStyle$1(n) {
	return window.getComputedStyle(n);
}
var HTMLVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = renderHTML;
	}
	readValueFromInstance(n, s) {
		if (transformProps.has(s)) return this.projection?.isProjecting ? defaultTransformValue(s) : readTransformValue(n, s);
		{
			let d = getComputedStyle$1(n), C = (isCSSVariableName(s) ? d.getPropertyValue(s) : d[s]) || 0;
			return typeof C == "string" ? C.trim() : C;
		}
	}
	measureInstanceViewportBox(n, { transformPagePoint: s }) {
		return measureViewportBox(n, s);
	}
	build(n, s, d) {
		buildHTMLStyles(n, s, d.transformTemplate);
	}
	scrapeMotionValuesFromProps(n, s, d) {
		return scrapeMotionValuesFromProps$1(n, s, d);
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
function renderSVG(n, s, d, C) {
	for (let d in renderHTML(n, s, void 0, C), s.attrs) n.setAttribute(camelCaseAttributes.has(d) ? d : camelToDash(d), s.attrs[d]);
}
var SVGVisualElement = class extends DOMVisualElement {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = createBox;
	}
	getBaseTargetFromProps(n, s) {
		return n[s];
	}
	readValueFromInstance(n, s) {
		if (transformProps.has(s)) {
			let n = getDefaultValueType(s);
			return n && n.default || 0;
		}
		return s = camelCaseAttributes.has(s) ? s : camelToDash(s), n.getAttribute(s);
	}
	scrapeMotionValuesFromProps(n, s, d) {
		return scrapeMotionValuesFromProps(n, s, d);
	}
	build(n, s, d) {
		buildSVGAttrs(n, s, this.isSVGTag, d.transformTemplate, d.style);
	}
	renderInstance(n, s, d, C) {
		renderSVG(n, s, d, C);
	}
	mount(n) {
		this.isSVGTag = isSVGTag(n.tagName), super.mount(n);
	}
}, createDomVisualElement = (n, s) => s.isSVG ?? isSVGComponent(n) ? new SVGVisualElement(s) : new HTMLVisualElement(s, { allowProjection: n !== Fragment });
function resolveVariant(n, s, d) {
	let C = n.getProps();
	return resolveVariantFromProps(C, s, d === void 0 ? C.custom : d, n);
}
var isKeyframesTarget = (n) => Array.isArray(n);
function setMotionValue(n, s, d) {
	n.hasValue(s) ? n.getValue(s).set(d) : n.addValue(s, motionValue(d));
}
function resolveFinalValueInKeyframes(n) {
	return isKeyframesTarget(n) ? n[n.length - 1] || 0 : n;
}
function setTarget(n, s) {
	let { transitionEnd: d = {}, transition: C = {}, ...w } = resolveVariant(n, s) || {};
	for (let s in w = {
		...w,
		...d
	}, w) setMotionValue(n, s, resolveFinalValueInKeyframes(w[s]));
}
function isWillChangeMotionValue(n) {
	return !!(isMotionValue(n) && n.add);
}
function addValueToWillChange(n, s) {
	let d = n.getValue("willChange");
	if (isWillChangeMotionValue(d)) return d.add(s);
	if (!d && MotionGlobalConfig.WillChange) {
		let d = new MotionGlobalConfig.WillChange("auto");
		n.addValue("willChange", d), d.add(s);
	}
}
function getOptimisedAppearId(n) {
	return n.props[optimizedAppearDataAttribute];
}
var isNotNull = (n) => n !== null;
function getFinalKeyframe(n, { repeat: s, repeatType: d = "loop" }, C) {
	let w = n.filter(isNotNull), k = s && d !== "loop" && s % 2 == 1 ? 0 : w.length - 1;
	return !k || C === void 0 ? w[k] : C;
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
}, getDefaultTransition = (n, { keyframes: s }) => s.length > 2 ? keyframesTransition : transformProps.has(n) ? n.startsWith("scale") ? criticallyDampedSpring(s[1]) : underDampedSpring : ease;
function isTransitionDefined({ when: n, delay: s, delayChildren: d, staggerChildren: C, staggerDirection: w, repeat: k, repeatType: F, repeatDelay: L, from: V, elapsed: U, ...K }) {
	return !!Object.keys(K).length;
}
var animateMotionValue = (n, s, d, C = {}, w, k) => (F) => {
	let L = getValueTransition(C, n) || {}, V = L.delay || C.delay || 0, { elapsed: U = 0 } = C;
	U -= /* @__PURE__ */ secondsToMilliseconds(V);
	let K = {
		keyframes: Array.isArray(d) ? d : [null, d],
		ease: "easeOut",
		velocity: s.getVelocity(),
		...L,
		delay: -U,
		onUpdate: (n) => {
			s.set(n), L.onUpdate && L.onUpdate(n);
		},
		onComplete: () => {
			F(), L.onComplete && L.onComplete();
		},
		name: n,
		motionValue: s,
		element: k ? void 0 : w
	};
	isTransitionDefined(L) || Object.assign(K, getDefaultTransition(n, K)), K.duration &&= /* @__PURE__ */ secondsToMilliseconds(K.duration), K.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(K.repeatDelay), K.from !== void 0 && (K.keyframes[0] = K.from);
	let q = !1;
	if ((K.type === !1 || K.duration === 0 && !K.repeatDelay) && (makeAnimationInstant(K), K.delay === 0 && (q = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) && (q = !0, makeAnimationInstant(K), K.delay = 0), K.allowFlatten = !L.type && !L.ease, q && !k && s.get() !== void 0) {
		let n = getFinalKeyframe(K.keyframes, L);
		if (n !== void 0) {
			frame.update(() => {
				K.onUpdate(n), K.onComplete();
			});
			return;
		}
	}
	return L.isSync ? new JSAnimation(K) : new AsyncMotionValueAnimation(K);
};
function shouldBlockAnimation({ protectedKeys: n, needsAnimating: s }, d) {
	let C = n.hasOwnProperty(d) && s[d] !== !0;
	return s[d] = !1, C;
}
function animateTarget(n, s, { delay: d = 0, transitionOverride: C, type: w } = {}) {
	let { transition: k = n.getDefaultTransition(), transitionEnd: F, ...L } = s;
	C && (k = C);
	let V = [], U = w && n.animationState && n.animationState.getState()[w];
	for (let s in L) {
		let C = n.getValue(s, n.latestValues[s] ?? null), w = L[s];
		if (w === void 0 || U && shouldBlockAnimation(U, s)) continue;
		let F = {
			delay: d,
			...getValueTransition(k || {}, s)
		}, K = C.get();
		if (K !== void 0 && !C.isAnimating && !Array.isArray(w) && w === K && !F.velocity) continue;
		let q = !1;
		if (window.MotionHandoffAnimation) {
			let d = getOptimisedAppearId(n);
			if (d) {
				let n = window.MotionHandoffAnimation(d, s, frame);
				n !== null && (F.startTime = n, q = !0);
			}
		}
		addValueToWillChange(n, s), C.start(animateMotionValue(s, C, w, n.shouldReduceMotion && positionalKeys.has(s) ? { type: !1 } : F, n, q));
		let J = C.animation;
		J && V.push(J);
	}
	return F && Promise.all(V).then(() => {
		frame.update(() => {
			F && setTarget(n, F);
		});
	}), V;
}
function calcChildStagger(n, s, d, C = 0, w = 1) {
	let k = Array.from(n).sort((n, s) => n.sortNodePosition(s)).indexOf(s), F = n.size, L = (F - 1) * C;
	return typeof d == "function" ? d(k, F) : w === 1 ? k * C : L - k * C;
}
function animateVariant(n, s, d = {}) {
	let C = resolveVariant(n, s, d.type === "exit" ? n.presenceContext?.custom : void 0), { transition: w = n.getDefaultTransition() || {} } = C || {};
	d.transitionOverride && (w = d.transitionOverride);
	let k = C ? () => Promise.all(animateTarget(n, C, d)) : () => Promise.resolve(), F = n.variantChildren && n.variantChildren.size ? (C = 0) => {
		let { delayChildren: k = 0, staggerChildren: F, staggerDirection: L } = w;
		return animateChildren(n, s, C, k, F, L, d);
	} : () => Promise.resolve(), { when: L } = w;
	if (L) {
		let [n, s] = L === "beforeChildren" ? [k, F] : [F, k];
		return n().then(() => s());
	} else return Promise.all([k(), F(d.delay)]);
}
function animateChildren(n, s, d = 0, C = 0, w = 0, k = 1, F) {
	let L = [];
	for (let V of n.variantChildren) V.notify("AnimationStart", s), L.push(animateVariant(V, s, {
		...F,
		delay: d + (typeof C == "function" ? 0 : C) + calcChildStagger(n.variantChildren, V, C, w, k)
	}).then(() => V.notify("AnimationComplete", s)));
	return Promise.all(L);
}
function animateVisualElement(n, s, d = {}) {
	n.notify("AnimationStart", s);
	let C;
	if (Array.isArray(s)) {
		let w = s.map((s) => animateVariant(n, s, d));
		C = Promise.all(w);
	} else if (typeof s == "string") C = animateVariant(n, s, d);
	else {
		let w = typeof s == "function" ? resolveVariant(n, s, d.custom) : s;
		C = Promise.all(animateTarget(n, w, d));
	}
	return C.then(() => {
		n.notify("AnimationComplete", s);
	});
}
function shallowCompare(n, s) {
	if (!Array.isArray(s)) return !1;
	let d = s.length;
	if (d !== n.length) return !1;
	for (let C = 0; C < d; C++) if (s[C] !== n[C]) return !1;
	return !0;
}
var numVariantProps = variantProps.length;
function getVariantContext(n) {
	if (!n) return;
	if (!n.isControllingVariants) {
		let s = n.parent && getVariantContext(n.parent) || {};
		return n.props.initial !== void 0 && (s.initial = n.props.initial), s;
	}
	let s = {};
	for (let d = 0; d < numVariantProps; d++) {
		let C = variantProps[d], w = n.props[C];
		(isVariantLabel(w) || w === !1) && (s[C] = w);
	}
	return s;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(n) {
	return (s) => Promise.all(s.map(({ animation: s, options: d }) => animateVisualElement(n, s, d)));
}
function createAnimationState(n) {
	let s = animateList(n), d = createState(), C = !0, w = (s) => (d, C) => {
		let w = resolveVariant(n, C, s === "exit" ? n.presenceContext?.custom : void 0);
		if (w) {
			let { transition: n, transitionEnd: s, ...C } = w;
			d = {
				...d,
				...C,
				...s
			};
		}
		return d;
	};
	function k(d) {
		s = d(n);
	}
	function F(k) {
		let { props: F } = n, L = getVariantContext(n.parent) || {}, V = [], U = /* @__PURE__ */ new Set(), K = {}, q = Infinity;
		for (let s = 0; s < numAnimationTypes; s++) {
			let J = reversePriorityOrder[s], X = d[J], $ = F[J] === void 0 ? L[J] : F[J], Hk = isVariantLabel($), Uk = J === k ? X.isActive : null;
			Uk === !1 && (q = s);
			let Wk = $ === L[J] && $ !== F[J] && Hk;
			if (Wk && C && n.manuallyAnimateOnMount && (Wk = !1), X.protectedKeys = { ...K }, !X.isActive && Uk === null || !$ && !X.prevProp || isAnimationControls($) || typeof $ == "boolean") continue;
			let Gk = checkVariantsDidChange(X.prevProp, $), Kk = Gk || J === k && X.isActive && !Wk && Hk || s > q && Hk, qk = !1, Jk = Array.isArray($) ? $ : [$], Yk = Jk.reduce(w(J), {});
			Uk === !1 && (Yk = {});
			let { prevResolvedValues: Xk = {} } = X, Zk = {
				...Xk,
				...Yk
			}, Qk = (s) => {
				Kk = !0, U.has(s) && (qk = !0, U.delete(s)), X.needsAnimating[s] = !0;
				let d = n.getValue(s);
				d && (d.liveStyle = !1);
			};
			for (let n in Zk) {
				let s = Yk[n], d = Xk[n];
				if (K.hasOwnProperty(n)) continue;
				let C = !1;
				C = isKeyframesTarget(s) && isKeyframesTarget(d) ? !shallowCompare(s, d) : s !== d, C ? s == null ? U.add(n) : Qk(n) : s !== void 0 && U.has(n) ? Qk(n) : X.protectedKeys[n] = !0;
			}
			X.prevProp = $, X.prevResolvedValues = Yk, X.isActive && (K = {
				...K,
				...Yk
			}), C && n.blockInitialAnimation && (Kk = !1);
			let $k = Wk && Gk;
			Kk && (!$k || qk) && V.push(...Jk.map((s) => {
				let d = { type: J };
				if (typeof s == "string" && C && !$k && n.manuallyAnimateOnMount && n.parent) {
					let { parent: C } = n, w = resolveVariant(C, s);
					if (C.enteringChildren && w) {
						let { delayChildren: s } = w.transition || {};
						d.delay = calcChildStagger(C.enteringChildren, n, s);
					}
				}
				return {
					animation: s,
					options: d
				};
			}));
		}
		if (U.size) {
			let s = {};
			if (typeof F.initial != "boolean") {
				let d = resolveVariant(n, Array.isArray(F.initial) ? F.initial[0] : F.initial);
				d && d.transition && (s.transition = d.transition);
			}
			U.forEach((d) => {
				let C = n.getBaseTarget(d), w = n.getValue(d);
				w && (w.liveStyle = !0), s[d] = C ?? null;
			}), V.push({ animation: s });
		}
		let J = !!V.length;
		return C && (F.initial === !1 || F.initial === F.animate) && !n.manuallyAnimateOnMount && (J = !1), C = !1, J ? s(V) : Promise.resolve();
	}
	function L(s, C) {
		if (d[s].isActive === C) return Promise.resolve();
		n.variantChildren?.forEach((n) => n.animationState?.setActive(s, C)), d[s].isActive = C;
		let w = F(s);
		for (let n in d) d[n].protectedKeys = {};
		return w;
	}
	return {
		animateChanges: F,
		setActive: L,
		setAnimateFunction: k,
		getState: () => d,
		reset: () => {
			d = createState();
		}
	};
}
function checkVariantsDidChange(n, s) {
	return typeof s == "string" ? s !== n : Array.isArray(s) ? !shallowCompare(s, n) : !1;
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
		let { animate: n } = this.node.getProps(), { animate: s } = this.node.prevProps || {};
		n !== s && this.updateAnimationControlsSubscription();
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
			let { isPresent: n, onExitComplete: s } = this.node.presenceContext, { isPresent: d } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || n === d) return;
			let C = this.node.animationState.setActive("exit", !n);
			s && !n && C.then(() => {
				s(this.id);
			});
		}
		mount() {
			let { register: n, onExitComplete: s } = this.node.presenceContext || {};
			s && s(this.id), n && (this.unmount = n(this.id));
		}
		unmount() {}
	} }
};
function addDomEvent(n, s, d, C = { passive: !0 }) {
	return n.addEventListener(s, d, C), () => n.removeEventListener(s, d);
}
function extractEventInfo(n) {
	return { point: {
		x: n.pageX,
		y: n.pageY
	} };
}
var addPointerInfo = (n) => (s) => isPrimaryPointer(s) && n(s, extractEventInfo(s));
function addPointerEvent(n, s, d, C) {
	return addDomEvent(n, s, addPointerInfo(d), C);
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(n) {
	return n.max - n.min;
}
function isNear(n, s, d) {
	return Math.abs(n - s) <= d;
}
function calcAxisDelta(n, s, d, C = .5) {
	n.origin = C, n.originPoint = mixNumber(s.min, s.max, n.origin), n.scale = calcLength(d) / calcLength(s), n.translate = mixNumber(d.min, d.max, n.origin) - n.originPoint, (n.scale >= SCALE_MIN && n.scale <= SCALE_MAX || isNaN(n.scale)) && (n.scale = 1), (n.translate >= TRANSLATE_MIN && n.translate <= TRANSLATE_MAX || isNaN(n.translate)) && (n.translate = 0);
}
function calcBoxDelta(n, s, d, C) {
	calcAxisDelta(n.x, s.x, d.x, C ? C.originX : void 0), calcAxisDelta(n.y, s.y, d.y, C ? C.originY : void 0);
}
function calcRelativeAxis(n, s, d) {
	n.min = d.min + s.min, n.max = n.min + calcLength(s);
}
function calcRelativeBox(n, s, d) {
	calcRelativeAxis(n.x, s.x, d.x), calcRelativeAxis(n.y, s.y, d.y);
}
function calcRelativeAxisPosition(n, s, d) {
	n.min = s.min - d.min, n.max = n.min + calcLength(s);
}
function calcRelativePosition(n, s, d) {
	calcRelativeAxisPosition(n.x, s.x, d.x), calcRelativeAxisPosition(n.y, s.y, d.y);
}
function eachAxis(n) {
	return [n("x"), n("y")];
}
var getContextWindow = ({ current: n }) => n ? n.ownerDocument.defaultView : null, distance = (n, s) => Math.abs(n - s);
function distance2D(n, s) {
	let d = distance(n.x, s.x), C = distance(n.y, s.y);
	return Math.sqrt(d ** 2 + C ** 2);
}
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]), PanSession = class {
	constructor(n, s, { transformPagePoint: d, contextWindow: C = window, dragSnapToOrigin: w = !1, distanceThreshold: k = 3, element: F } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (n) => {
			this.handleScroll(n.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let n = getPanInfo(this.lastMoveEventInfo, this.history), s = this.startEvent !== null, d = distance2D(n.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!s && !d) return;
			let { point: C } = n, { timestamp: w } = frameData;
			this.history.push({
				...C,
				timestamp: w
			});
			let { onStart: k, onMove: F } = this.handlers;
			s || (k && k(this.lastMoveEvent, n), this.startEvent = this.lastMoveEvent), F && F(this.lastMoveEvent, n);
		}, this.handlePointerMove = (n, s) => {
			this.lastMoveEvent = n, this.lastMoveEventInfo = transformPoint(s, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (n, s) => {
			this.end();
			let { onEnd: d, onSessionEnd: C, resumeAnimation: w } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && w && w(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let k = getPanInfo(n.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(s, this.transformPagePoint), this.history);
			this.startEvent && d && d(n, k), C && C(n, k);
		}, !isPrimaryPointer(n)) return;
		this.dragSnapToOrigin = w, this.handlers = s, this.transformPagePoint = d, this.distanceThreshold = k, this.contextWindow = C || window;
		let L = transformPoint(extractEventInfo(n), this.transformPagePoint), { point: V } = L, { timestamp: U } = frameData;
		this.history = [{
			...V,
			timestamp: U
		}];
		let { onSessionStart: K } = s;
		K && K(n, getPanInfo(L, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp)), F && this.startScrollTracking(F);
	}
	startScrollTracking(n) {
		let s = n.parentElement;
		for (; s;) {
			let n = getComputedStyle(s);
			(overflowStyles.has(n.overflowX) || overflowStyles.has(n.overflowY)) && this.scrollPositions.set(s, {
				x: s.scrollLeft,
				y: s.scrollTop
			}), s = s.parentElement;
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
		let s = this.scrollPositions.get(n);
		if (!s) return;
		let d = n === window, C = d ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: n.scrollLeft,
			y: n.scrollTop
		}, w = {
			x: C.x - s.x,
			y: C.y - s.y
		};
		w.x === 0 && w.y === 0 || (d ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += w.x, this.lastMoveEventInfo.point.y += w.y) : this.history.length > 0 && (this.history[0].x -= w.x, this.history[0].y -= w.y), this.scrollPositions.set(n, C), frame.update(this.updatePoint, !0));
	}
	updateHandlers(n) {
		this.handlers = n;
	}
	end() {
		this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), cancelFrame(this.updatePoint);
	}
};
function transformPoint(n, s) {
	return s ? { point: s(n.point) } : n;
}
function subtractPoint(n, s) {
	return {
		x: n.x - s.x,
		y: n.y - s.y
	};
}
function getPanInfo({ point: n }, s) {
	return {
		point: n,
		delta: subtractPoint(n, lastDevicePoint(s)),
		offset: subtractPoint(n, startDevicePoint(s)),
		velocity: getVelocity(s, .1)
	};
}
function startDevicePoint(n) {
	return n[0];
}
function lastDevicePoint(n) {
	return n[n.length - 1];
}
function getVelocity(n, s) {
	if (n.length < 2) return {
		x: 0,
		y: 0
	};
	let d = n.length - 1, C = null, w = lastDevicePoint(n);
	for (; d >= 0 && (C = n[d], !(w.timestamp - C.timestamp > /* @__PURE__ */ secondsToMilliseconds(s)));) d--;
	if (!C) return {
		x: 0,
		y: 0
	};
	let k = /* @__PURE__ */ millisecondsToSeconds(w.timestamp - C.timestamp);
	if (k === 0) return {
		x: 0,
		y: 0
	};
	let F = {
		x: (w.x - C.x) / k,
		y: (w.y - C.y) / k
	};
	return F.x === Infinity && (F.x = 0), F.y === Infinity && (F.y = 0), F;
}
function applyConstraints(n, { min: s, max: d }, C) {
	return s !== void 0 && n < s ? n = C ? mixNumber(s, n, C.min) : Math.max(n, s) : d !== void 0 && n > d && (n = C ? mixNumber(d, n, C.max) : Math.min(n, d)), n;
}
function calcRelativeAxisConstraints(n, s, d) {
	return {
		min: s === void 0 ? void 0 : n.min + s,
		max: d === void 0 ? void 0 : n.max + d - (n.max - n.min)
	};
}
function calcRelativeConstraints(n, { top: s, left: d, bottom: C, right: w }) {
	return {
		x: calcRelativeAxisConstraints(n.x, d, w),
		y: calcRelativeAxisConstraints(n.y, s, C)
	};
}
function calcViewportAxisConstraints(n, s) {
	let d = s.min - n.min, C = s.max - n.max;
	return s.max - s.min < n.max - n.min && ([d, C] = [C, d]), {
		min: d,
		max: C
	};
}
function calcViewportConstraints(n, s) {
	return {
		x: calcViewportAxisConstraints(n.x, s.x),
		y: calcViewportAxisConstraints(n.y, s.y)
	};
}
function calcOrigin(n, s) {
	let d = .5, C = calcLength(n), w = calcLength(s);
	return w > C ? d = /* @__PURE__ */ progress(s.min, s.max - C, n.min) : C > w && (d = /* @__PURE__ */ progress(n.min, n.max - w, s.min)), clamp(0, 1, d);
}
function rebaseAxisConstraints(n, s) {
	let d = {};
	return s.min !== void 0 && (d.min = s.min - n.min), s.max !== void 0 && (d.max = s.max - n.min), d;
}
var defaultElastic = .35;
function resolveDragElastic(n = defaultElastic) {
	return n === !1 ? n = 0 : n === !0 && (n = defaultElastic), {
		x: resolveAxisElastic(n, "left", "right"),
		y: resolveAxisElastic(n, "top", "bottom")
	};
}
function resolveAxisElastic(n, s, d) {
	return {
		min: resolvePointElastic(n, s),
		max: resolvePointElastic(n, d)
	};
}
function resolvePointElastic(n, s) {
	return typeof n == "number" ? n : n[s] || 0;
}
var elementDragControls = /* @__PURE__ */ new WeakMap(), VisualElementDragControls = class {
	constructor(n) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = createBox(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = n;
	}
	start(n, { snapToCursor: s = !1, distanceThreshold: d } = {}) {
		let { presenceContext: C } = this.visualElement;
		if (C && C.isPresent === !1) return;
		let w = (n) => {
			s ? (this.stopAnimation(), this.snapToCursor(extractEventInfo(n).point)) : this.pauseAnimation();
		}, k = (n, s) => {
			this.stopAnimation();
			let { drag: d, dragPropagation: C, onDragStart: w } = this.getProps();
			if (d && !C && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(d), !this.openDragLock)) return;
			this.latestPointerEvent = n, this.latestPanInfo = s, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((n) => {
				let s = this.getAxisMotionValue(n).get() || 0;
				if (percent.test(s)) {
					let { projection: d } = this.visualElement;
					if (d && d.layout) {
						let C = d.layout.layoutBox[n];
						C && (s = calcLength(C) * (parseFloat(s) / 100));
					}
				}
				this.originPoint[n] = s;
			}), w && frame.postRender(() => w(n, s)), addValueToWillChange(this.visualElement, "transform");
			let { animationState: k } = this.visualElement;
			k && k.setActive("whileDrag", !0);
		}, F = (n, s) => {
			this.latestPointerEvent = n, this.latestPanInfo = s;
			let { dragPropagation: d, dragDirectionLock: C, onDirectionLock: w, onDrag: k } = this.getProps();
			if (!d && !this.openDragLock) return;
			let { offset: F } = s;
			if (C && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(F), this.currentDirection !== null && w && w(this.currentDirection);
				return;
			}
			this.updateAxis("x", s.point, F), this.updateAxis("y", s.point, F), this.visualElement.render(), k && k(n, s);
		}, L = (n, s) => {
			this.latestPointerEvent = n, this.latestPanInfo = s, this.stop(n, s), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, V = () => eachAxis((n) => this.getAnimationState(n) === "paused" && this.getAxisMotionValue(n).animation?.play()), { dragSnapToOrigin: U } = this.getProps();
		this.panSession = new PanSession(n, {
			onSessionStart: w,
			onStart: k,
			onMove: F,
			onSessionEnd: L,
			resumeAnimation: V
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: U,
			distanceThreshold: d,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(n, s) {
		let d = n || this.latestPointerEvent, C = s || this.latestPanInfo, w = this.isDragging;
		if (this.cancel(), !w || !C || !d) return;
		let { velocity: k } = C;
		this.startAnimation(k);
		let { onDragEnd: F } = this.getProps();
		F && frame.postRender(() => F(d, C));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: n, animationState: s } = this.visualElement;
		n && (n.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: d } = this.getProps();
		!d && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1);
	}
	updateAxis(n, s, d) {
		let { drag: C } = this.getProps();
		if (!d || !shouldDrag(n, C, this.currentDirection)) return;
		let w = this.getAxisMotionValue(n), k = this.originPoint[n] + d[n];
		this.constraints && this.constraints[n] && (k = applyConstraints(k, this.constraints[n], this.elastic[n])), w.set(k);
	}
	resolveConstraints() {
		let { dragConstraints: n, dragElastic: s } = this.getProps(), d = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, C = this.constraints;
		n && isRefObject(n) ? this.constraints ||= this.resolveRefConstraints() : n && d ? this.constraints = calcRelativeConstraints(d.layoutBox, n) : this.constraints = !1, this.elastic = resolveDragElastic(s), C !== this.constraints && d && this.constraints && !this.hasMutatedConstraints && eachAxis((n) => {
			this.constraints !== !1 && this.getAxisMotionValue(n) && (this.constraints[n] = rebaseAxisConstraints(d.layoutBox[n], this.constraints[n]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: n, onMeasureDragConstraints: s } = this.getProps();
		if (!n || !isRefObject(n)) return !1;
		let d = n.current;
		invariant(d !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: C } = this.visualElement;
		if (!C || !C.layout) return !1;
		let w = measurePageBox(d, C.root, this.visualElement.getTransformPagePoint()), k = calcViewportConstraints(C.layout.layoutBox, w);
		if (s) {
			let n = s(convertBoxToBoundingBox(k));
			this.hasMutatedConstraints = !!n, n && (k = convertBoundingBoxToBox(n));
		}
		return k;
	}
	startAnimation(n) {
		let { drag: s, dragMomentum: d, dragElastic: C, dragTransition: w, dragSnapToOrigin: k, onDragTransitionEnd: F } = this.getProps(), L = this.constraints || {}, V = eachAxis((F) => {
			if (!shouldDrag(F, s, this.currentDirection)) return;
			let V = L && L[F] || {};
			k && (V = {
				min: 0,
				max: 0
			});
			let U = C ? 200 : 1e6, K = C ? 40 : 1e7, q = {
				type: "inertia",
				velocity: d ? n[F] : 0,
				bounceStiffness: U,
				bounceDamping: K,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...w,
				...V
			};
			return this.startAxisValueAnimation(F, q);
		});
		return Promise.all(V).then(F);
	}
	startAxisValueAnimation(n, s) {
		let d = this.getAxisMotionValue(n);
		return addValueToWillChange(this.visualElement, n), d.start(animateMotionValue(n, d, 0, s, this.visualElement, !1));
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
		let s = `_drag${n.toUpperCase()}`, d = this.visualElement.getProps();
		return d[s] || this.visualElement.getValue(n, (d.initial ? d.initial[n] : void 0) || 0);
	}
	snapToCursor(n) {
		eachAxis((s) => {
			let { drag: d } = this.getProps();
			if (!shouldDrag(s, d, this.currentDirection)) return;
			let { projection: C } = this.visualElement, w = this.getAxisMotionValue(s);
			if (C && C.layout) {
				let { min: d, max: k } = C.layout.layoutBox[s], F = w.get() || 0;
				w.set(n[s] - mixNumber(d, k, .5) + F);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: n, dragConstraints: s } = this.getProps(), { projection: d } = this.visualElement;
		if (!isRefObject(s) || !d || !this.constraints) return;
		this.stopAnimation();
		let C = {
			x: 0,
			y: 0
		};
		eachAxis((n) => {
			let s = this.getAxisMotionValue(n);
			if (s && this.constraints !== !1) {
				let d = s.get();
				C[n] = calcOrigin({
					min: d,
					max: d
				}, this.constraints[n]);
			}
		});
		let { transformTemplate: w } = this.visualElement.getProps();
		this.visualElement.current.style.transform = w ? w({}, "") : "none", d.root && d.root.updateScroll(), d.updateLayout(), this.resolveConstraints(), eachAxis((s) => {
			if (!shouldDrag(s, n, null)) return;
			let d = this.getAxisMotionValue(s), { min: w, max: k } = this.constraints[s];
			d.set(mixNumber(w, k, C[s]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let n = this.visualElement.current, s = addPointerEvent(n, "pointerdown", (n) => {
			let { drag: s, dragListener: d = !0 } = this.getProps();
			s && d && !isElementKeyboardAccessible(n.target) && this.start(n);
		}), d = () => {
			let { dragConstraints: n } = this.getProps();
			isRefObject(n) && n.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: C } = this.visualElement, w = C.addEventListener("measure", d);
		C && !C.layout && (C.root && C.root.updateScroll(), C.updateLayout()), frame.read(d);
		let k = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), F = C.addEventListener("didUpdate", (({ delta: n, hasLayoutChanged: s }) => {
			this.isDragging && s && (eachAxis((s) => {
				let d = this.getAxisMotionValue(s);
				d && (this.originPoint[s] += n[s].translate, d.set(d.get() + n[s].translate));
			}), this.visualElement.render());
		}));
		return () => {
			k(), s(), w(), F && F();
		};
	}
	getProps() {
		let n = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: d = !1, dragPropagation: C = !1, dragConstraints: w = !1, dragElastic: k = defaultElastic, dragMomentum: F = !0 } = n;
		return {
			...n,
			drag: s,
			dragDirectionLock: d,
			dragPropagation: C,
			dragConstraints: w,
			dragElastic: k,
			dragMomentum: F
		};
	}
};
function shouldDrag(n, s, d) {
	return (s === !0 || s === n) && (d === null || d === n);
}
function getCurrentDirection(n, s = 10) {
	let d = null;
	return Math.abs(n.y) > s ? d = "y" : Math.abs(n.x) > s && (d = "x"), d;
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
		let { dragControls: n } = this.node.getProps(), { dragControls: s } = this.node.prevProps || {};
		n !== s && (this.removeGroupControls(), n && (this.removeGroupControls = n.subscribe(this.controls)));
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners();
	}
}, asyncHandler = (n) => (s, d) => {
	n && frame.postRender(() => n(s, d));
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
		let { onPanSessionStart: n, onPanStart: s, onPan: d, onPanEnd: C } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(n),
			onStart: asyncHandler(s),
			onMove: d,
			onEnd: (n, s) => {
				delete this.session, C && frame.postRender(() => C(n, s));
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
		let { visualElement: n, layoutGroup: s, switchLayoutGroup: d, layoutId: C } = this.props, { projection: w } = n;
		w && (s.group && s.group.add(w), d && d.register && C && d.register(w), hasTakenAnySnapshot && w.root.didUpdate(), w.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), w.setOptions({
			...w.options,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(n) {
		let { layoutDependency: s, visualElement: d, drag: C, isPresent: w } = this.props, { projection: k } = d;
		return k ? (k.isPresent = w, hasTakenAnySnapshot = !0, C || n.layoutDependency !== s || s === void 0 || n.isPresent !== w ? k.willUpdate() : this.safeToRemove(), n.isPresent !== w && (w ? k.promote() : k.relegate() || frame.postRender(() => {
			let n = k.getStack();
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
		let { visualElement: n, layoutGroup: s, switchLayoutGroup: d } = this.props, { projection: C } = n;
		hasTakenAnySnapshot = !0, C && (C.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(C), d && d.deregister && d.deregister(C));
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
	let [s, d] = usePresence(), C = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...n,
		layoutGroup: C,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: s,
		safeToRemove: d
	});
}
function animateSingleValue(n, s, d) {
	let C = isMotionValue(n) ? n : motionValue(n);
	return C.start(animateMotionValue("", C, s, d)), C.animation;
}
var compareByDepth = (n, s) => n.depth - s.depth, FlatTree = class {
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
function delay(n, s) {
	let d = time.now(), C = ({ timestamp: w }) => {
		let k = w - d;
		k >= s && (cancelFrame(C), n(k - s));
	};
	return frame.setup(C, !0), () => cancelFrame(C);
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (n) => typeof n == "string" ? parseFloat(n) : n, isPx = (n) => typeof n == "number" || px.test(n);
function mixValues(n, s, d, C, w, k) {
	w ? (n.opacity = mixNumber(0, d.opacity ?? 1, easeCrossfadeIn(C)), n.opacityExit = mixNumber(s.opacity ?? 1, 0, easeCrossfadeOut(C))) : k && (n.opacity = mixNumber(s.opacity ?? 1, d.opacity ?? 1, C));
	for (let w = 0; w < numBorders; w++) {
		let k = `border${borders[w]}Radius`, F = getRadius(s, k), L = getRadius(d, k);
		F === void 0 && L === void 0 || (F ||= 0, L ||= 0, F === 0 || L === 0 || isPx(F) === isPx(L) ? (n[k] = Math.max(mixNumber(asNumber(F), asNumber(L), C), 0), (percent.test(L) || percent.test(F)) && (n[k] += "%")) : n[k] = L);
	}
	(s.rotate || d.rotate) && (n.rotate = mixNumber(s.rotate || 0, d.rotate || 0, C));
}
function getRadius(n, s) {
	return n[s] === void 0 ? n.borderRadius : n[s];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(n, s, d) {
	return (C) => C < n ? 0 : C > s ? 1 : d(/* @__PURE__ */ progress(n, s, C));
}
function copyAxisInto(n, s) {
	n.min = s.min, n.max = s.max;
}
function copyBoxInto(n, s) {
	copyAxisInto(n.x, s.x), copyAxisInto(n.y, s.y);
}
function copyAxisDeltaInto(n, s) {
	n.translate = s.translate, n.scale = s.scale, n.originPoint = s.originPoint, n.origin = s.origin;
}
function removePointDelta(n, s, d, C, w) {
	return n -= s, n = scalePoint(n, 1 / d, C), w !== void 0 && (n = scalePoint(n, 1 / w, C)), n;
}
function removeAxisDelta(n, s = 0, d = 1, C = .5, w, k = n, F = n) {
	if (percent.test(s) && (s = parseFloat(s), s = mixNumber(F.min, F.max, s / 100) - F.min), typeof s != "number") return;
	let L = mixNumber(k.min, k.max, C);
	n === k && (L -= s), n.min = removePointDelta(n.min, s, d, L, w), n.max = removePointDelta(n.max, s, d, L, w);
}
function removeAxisTransforms(n, s, [d, C, w], k, F) {
	removeAxisDelta(n, s[d], s[C], s[w], s.scale, k, F);
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
function removeBoxTransforms(n, s, d, C) {
	removeAxisTransforms(n.x, s, xKeys, d ? d.x : void 0, C ? C.x : void 0), removeAxisTransforms(n.y, s, yKeys, d ? d.y : void 0, C ? C.y : void 0);
}
function isAxisDeltaZero(n) {
	return n.translate === 0 && n.scale === 1;
}
function isDeltaZero(n) {
	return isAxisDeltaZero(n.x) && isAxisDeltaZero(n.y);
}
function axisEquals(n, s) {
	return n.min === s.min && n.max === s.max;
}
function boxEquals(n, s) {
	return axisEquals(n.x, s.x) && axisEquals(n.y, s.y);
}
function axisEqualsRounded(n, s) {
	return Math.round(n.min) === Math.round(s.min) && Math.round(n.max) === Math.round(s.max);
}
function boxEqualsRounded(n, s) {
	return axisEqualsRounded(n.x, s.x) && axisEqualsRounded(n.y, s.y);
}
function aspectRatio(n) {
	return calcLength(n.x) / calcLength(n.y);
}
function axisDeltaEquals(n, s) {
	return n.translate === s.translate && n.scale === s.scale && n.originPoint === s.originPoint;
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
		let s = this.members.findIndex((s) => n === s);
		if (s === 0) return !1;
		let d;
		for (let n = s; n >= 0; n--) {
			let s = this.members[n];
			if (s.isPresent !== !1) {
				d = s;
				break;
			}
		}
		return d ? (this.promote(d), !0) : !1;
	}
	promote(n, s) {
		let d = this.lead;
		if (n !== d && (this.prevLead = d, this.lead = n, n.show(), d)) {
			d.instance && d.scheduleRender(), n.scheduleRender(), n.resumeFrom = d, s && (n.resumeFrom.preserveOpacity = !0), d.snapshot && (n.snapshot = d.snapshot, n.snapshot.latestValues = d.animationValues || d.latestValues), n.root && n.root.isUpdating && (n.isLayoutDirty = !0);
			let { crossfade: C } = n.options;
			C === !1 && d.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((n) => {
			let { options: s, resumingFrom: d } = n;
			s.onExitComplete && s.onExitComplete(), d && d.options.onExitComplete && d.options.onExitComplete();
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
function buildProjectionTransform(n, s, d) {
	let C = "", w = n.x.translate / s.x, k = n.y.translate / s.y, F = d?.z || 0;
	if ((w || k || F) && (C = `translate3d(${w}px, ${k}px, ${F}px) `), (s.x !== 1 || s.y !== 1) && (C += `scale(${1 / s.x}, ${1 / s.y}) `), d) {
		let { transformPerspective: n, rotate: s, rotateX: w, rotateY: k, skewX: F, skewY: L } = d;
		n && (C = `perspective(${n}px) ${C}`), s && (C += `rotate(${s}deg) `), w && (C += `rotateX(${w}deg) `), k && (C += `rotateY(${k}deg) `), F && (C += `skewX(${F}deg) `), L && (C += `skewY(${L}deg) `);
	}
	let L = n.x.scale * s.x, V = n.y.scale * s.y;
	return (L !== 1 || V !== 1) && (C += `scale(${L}, ${V})`), C || "none";
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
function resetDistortingTransform(n, s, d, C) {
	let { latestValues: w } = s;
	w[n] && (d[n] = w[n], s.setStaticValue(n, 0), C && (C[n] = 0));
}
function cancelTreeOptimisedTransformAnimations(n) {
	if (n.hasCheckedOptimisedAppear = !0, n.root === n) return;
	let { visualElement: s } = n.options;
	if (!s) return;
	let d = getOptimisedAppearId(s);
	if (window.MotionHasOptimisedAnimation(d, "transform")) {
		let { layout: s, layoutId: C } = n.options;
		window.MotionCancelOptimisedAnimation(d, "transform", frame, !(s || C));
	}
	let { parent: C } = n;
	C && !C.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(C);
}
function createProjectionNode({ attachResizeListener: n, defaultParent: s, measureScroll: d, checkIsScrollRoot: C, resetTransform: w }) {
	return class {
		constructor(n = {}, d = s?.()) {
			this.id = id++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, statsBuffer.value && (metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), statsBuffer.addProjectionMetrics && statsBuffer.addProjectionMetrics(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = n, this.root = d ? d.root || d : this, this.path = d ? [...d.path, d] : [], this.parent = d, this.depth = d ? d.depth + 1 : 0;
			for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(n, s) {
			return this.eventHandlers.has(n) || this.eventHandlers.set(n, new SubscriptionManager()), this.eventHandlers.get(n).add(s);
		}
		notifyListeners(n, ...s) {
			let d = this.eventHandlers.get(n);
			d && d.notify(...s);
		}
		hasListeners(n) {
			return this.eventHandlers.has(n);
		}
		mount(s) {
			if (this.instance) return;
			this.isSVG = isSVGElement(s) && !isSVGSVGElement(s), this.instance = s;
			let { layoutId: d, layout: C, visualElement: w } = this.options;
			if (w && !w.current && w.mount(s), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (C || d) && (this.isLayoutDirty = !0), n) {
				let d, C = 0, w = () => this.root.updateBlockedByResize = !1;
				frame.read(() => {
					C = window.innerWidth;
				}), n(s, () => {
					let n = window.innerWidth;
					n !== C && (C = n, this.root.updateBlockedByResize = !0, d && d(), d = delay(w, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation)));
				});
			}
			d && this.root.registerSharedNode(d, this), this.options.animate !== !1 && w && (d || C) && this.addEventListener("didUpdate", ({ delta: n, hasLayoutChanged: s, hasRelativeLayoutChanged: d, layout: C }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let k = this.options.transition || w.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: F, onLayoutAnimationComplete: L } = w.getProps(), V = !this.targetLayout || !boxEqualsRounded(this.targetLayout, C), U = !s && d;
				if (this.options.layoutRoot || this.resumeFrom || U || s && (V || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let s = {
						...getValueTransition(k, "layout"),
						onPlay: F,
						onComplete: L
					};
					(w.shouldReduceMotion || this.options.layoutRoot) && (s.delay = 0, s.type = !1), this.startAnimation(s), this.setAnimationOrigin(n, U);
				} else s || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = C;
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
				let s = this.path[n];
				s.shouldResetTransform = !0, s.updateScroll("snapshot"), s.options.layoutRoot && s.willUpdate(!1);
			}
			let { layoutId: s, layout: d } = this.options;
			if (s === void 0 && !d) return;
			let C = this.getTransformTemplate();
			this.prevTransformTemplateValue = C ? C(this.latestValues, "") : void 0, this.updateSnapshot(), n && this.notifyListeners("willUpdate");
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
			let { visualElement: s } = this.options;
			s && s.notify("LayoutMeasure", this.layout.layoutBox, n ? n.layoutBox : void 0);
		}
		updateScroll(n = "measure") {
			let s = !!(this.options.layoutScroll && this.instance);
			if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === n && (s = !1), s && this.instance) {
				let s = C(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: n,
					isRoot: s,
					offset: d(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : s
				};
			}
		}
		resetTransform() {
			if (!w) return;
			let n = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, s = this.projectionDelta && !isDeltaZero(this.projectionDelta), d = this.getTransformTemplate(), C = d ? d(this.latestValues, "") : void 0, k = C !== this.prevTransformTemplateValue;
			n && this.instance && (s || hasTransform(this.latestValues) || k) && (w(this.instance, C), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(n = !0) {
			let s = this.measurePageBox(), d = this.removeElementScroll(s);
			return n && (d = this.removeTransform(d)), roundBox(d), {
				animationId: this.root.animationId,
				measuredBox: s,
				layoutBox: d,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: n } = this.options;
			if (!n) return createBox();
			let s = n.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot))) {
				let { scroll: n } = this.root;
				n && (translateAxis(s.x, n.offset.x), translateAxis(s.y, n.offset.y));
			}
			return s;
		}
		removeElementScroll(n) {
			let s = createBox();
			if (copyBoxInto(s, n), this.scroll?.wasRoot) return s;
			for (let d = 0; d < this.path.length; d++) {
				let C = this.path[d], { scroll: w, options: k } = C;
				C !== this.root && w && k.layoutScroll && (w.wasRoot && copyBoxInto(s, n), translateAxis(s.x, w.offset.x), translateAxis(s.y, w.offset.y));
			}
			return s;
		}
		applyTransform(n, s = !1) {
			let d = createBox();
			copyBoxInto(d, n);
			for (let n = 0; n < this.path.length; n++) {
				let C = this.path[n];
				!s && C.options.layoutScroll && C.scroll && C !== C.root && transformBox(d, {
					x: -C.scroll.offset.x,
					y: -C.scroll.offset.y
				}), hasTransform(C.latestValues) && transformBox(d, C.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(d, this.latestValues), d;
		}
		removeTransform(n) {
			let s = createBox();
			copyBoxInto(s, n);
			for (let n = 0; n < this.path.length; n++) {
				let d = this.path[n];
				if (!d.instance || !hasTransform(d.latestValues)) continue;
				hasScale(d.latestValues) && d.updateSnapshot();
				let C = createBox();
				copyBoxInto(C, d.measurePageBox()), removeBoxTransforms(s, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, C);
			}
			return hasTransform(this.latestValues) && removeBoxTransforms(s, this.latestValues), s;
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
			let s = this.getLead();
			this.isProjectionDirty ||= s.isProjectionDirty, this.isTransformDirty ||= s.isTransformDirty, this.isSharedProjectionDirty ||= s.isSharedProjectionDirty;
			let d = !!this.resumingFrom || this !== s;
			if (!(n || d && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: C, layoutId: w } = this.options;
			if (!this.layout || !(C || w)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			let k = this.getClosestProjectingParent();
			k && this.linkedParentVersion !== k.layoutVersion && !k.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (k && k.layout ? this.createRelativeTarget(k, this.layout.layoutBox, k.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, k && !!k.resumingFrom == !!this.resumingFrom && !k.options.layoutScroll && k.target && this.animationProgress !== 1 ? this.createRelativeTarget(k, this.target, k.target) : this.relativeParent = this.relativeTarget = void 0), statsBuffer.value && metrics.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(n, s, d) {
			this.relativeParent = n, this.linkedParentVersion = n.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, s, d), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let n = this.getLead(), s = !!this.resumingFrom || this !== n, d = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (d = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (d = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (d = !1), d) return;
			let { layout: C, layoutId: w } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(C || w)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let k = this.treeScale.x, F = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, s), n.layout && !n.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (n.target = n.layout.layoutBox, n.targetWithTransforms = createBox());
			let { target: L } = n;
			if (!L) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, L, this.latestValues), (this.treeScale.x !== k || this.treeScale.y !== F || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", L)), statsBuffer.value && metrics.calculatedProjections++;
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
		setAnimationOrigin(n, s = !1) {
			let d = this.snapshot, C = d ? d.latestValues : {}, w = { ...this.latestValues }, k = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
			let F = createBox(), L = (d ? d.source : void 0) !== (this.layout ? this.layout.source : void 0), V = this.getStack(), U = !V || V.members.length <= 1, K = !!(L && !U && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let q;
			this.mixTargetDelta = (s) => {
				let d = s / 1e3;
				mixAxisDelta(k.x, n.x, d), mixAxisDelta(k.y, n.y, d), this.setTargetDelta(k), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(F, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, F, d), q && boxEquals(this.relativeTarget, q) && (this.isProjectionDirty = !1), q ||= createBox(), copyBoxInto(q, this.relativeTarget)), L && (this.animationValues = w, mixValues(w, C, this.latestValues, d, K, U)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = d;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(n) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (cancelFrame(this.pendingAnimation), void 0), this.pendingAnimation = frame.update(() => {
				globalProjectionState.hasAnimatedSinceResize = !0, activeAnimations.layout++, this.motionValue ||= motionValue(0), this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
					...n,
					velocity: 0,
					isSync: !0,
					onUpdate: (s) => {
						this.mixTargetDelta(s), n.onUpdate && n.onUpdate(s);
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
			let n = this.getLead(), { targetWithTransforms: s, target: d, layout: C, latestValues: w } = n;
			if (!(!s || !d || !C)) {
				if (this !== n && this.layout && C && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, C.layoutBox)) {
					d = this.target || createBox();
					let s = calcLength(this.layout.layoutBox.x);
					d.x.min = n.target.x.min, d.x.max = d.x.min + s;
					let C = calcLength(this.layout.layoutBox.y);
					d.y.min = n.target.y.min, d.y.max = d.y.min + C;
				}
				copyBoxInto(s, d), transformBox(s, w), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, s, w);
			}
		}
		registerSharedNode(n, s) {
			this.sharedNodes.has(n) || this.sharedNodes.set(n, new NodeStack()), this.sharedNodes.get(n).add(s);
			let d = s.options.initialPromotionConfig;
			s.promote({
				transition: d ? d.transition : void 0,
				preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(s) : void 0
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
		promote({ needsReset: n, transition: s, preserveFollowOpacity: d } = {}) {
			let C = this.getStack();
			C && C.promote(this, d), n && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
		}
		relegate() {
			let n = this.getStack();
			return n ? n.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: n } = this.options;
			if (!n) return;
			let s = !1, { latestValues: d } = n;
			if ((d.z || d.rotate || d.rotateX || d.rotateY || d.rotateZ || d.skewX || d.skewY) && (s = !0), !s) return;
			let C = {};
			d.z && resetDistortingTransform("z", n, C, this.animationValues);
			for (let s = 0; s < transformAxes.length; s++) resetDistortingTransform(`rotate${transformAxes[s]}`, n, C, this.animationValues), resetDistortingTransform(`skew${transformAxes[s]}`, n, C, this.animationValues);
			for (let s in n.render(), C) n.setStaticValue(s, C[s]), this.animationValues && (this.animationValues[s] = C[s]);
			n.scheduleRender();
		}
		applyProjectionStyles(n, s) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				n.visibility = "hidden";
				return;
			}
			let d = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, n.visibility = "", n.opacity = "", n.pointerEvents = resolveMotionValue(s?.pointerEvents) || "", n.transform = d ? d(this.latestValues, "") : "none";
				return;
			}
			let C = this.getLead();
			if (!this.projectionDelta || !this.layout || !C.target) {
				this.options.layoutId && (n.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, n.pointerEvents = resolveMotionValue(s?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (n.transform = d ? d({}, "") : "none", this.hasProjected = !1);
				return;
			}
			n.visibility = "";
			let w = C.animationValues || C.latestValues;
			this.applyTransformsToTarget();
			let k = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, w);
			d && (k = d(w, k)), n.transform = k;
			let { x: F, y: L } = this.projectionDelta;
			for (let s in n.transformOrigin = `${F.origin * 100}% ${L.origin * 100}% 0`, C.animationValues ? n.opacity = C === this ? w.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : w.opacityExit : n.opacity = C === this ? w.opacity === void 0 ? "" : w.opacity : w.opacityExit === void 0 ? 0 : w.opacityExit, scaleCorrectors) {
				if (w[s] === void 0) continue;
				let { correct: d, applyTo: F, isCSSVariable: L } = scaleCorrectors[s], V = k === "none" ? w[s] : d(w[s], C);
				if (F) {
					let s = F.length;
					for (let d = 0; d < s; d++) n[F[d]] = V;
				} else L ? this.options.visualElement.renderState.vars[s] = V : n[s] = V;
			}
			this.options.layoutId && (n.pointerEvents = C === this ? resolveMotionValue(s?.pointerEvents) || "" : "none");
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
	let s = n.resumeFrom?.snapshot || n.snapshot;
	if (n.isLead() && n.layout && s && n.hasListeners("didUpdate")) {
		let { layoutBox: d, measuredBox: C } = n.layout, { animationType: w } = n.options, k = s.source !== n.layout.source;
		w === "size" ? eachAxis((n) => {
			let C = k ? s.measuredBox[n] : s.layoutBox[n], w = calcLength(C);
			C.min = d[n].min, C.max = C.min + w;
		}) : shouldAnimatePositionOnly(w, s.layoutBox, d) && eachAxis((C) => {
			let w = k ? s.measuredBox[C] : s.layoutBox[C], F = calcLength(d[C]);
			w.max = w.min + F, n.relativeTarget && !n.currentAnimation && (n.isProjectionDirty = !0, n.relativeTarget[C].max = n.relativeTarget[C].min + F);
		});
		let F = createDelta();
		calcBoxDelta(F, d, s.layoutBox);
		let L = createDelta();
		k ? calcBoxDelta(L, n.applyTransform(C, !0), s.measuredBox) : calcBoxDelta(L, d, s.layoutBox);
		let V = !isDeltaZero(F), U = !1;
		if (!n.resumeFrom) {
			let C = n.getClosestProjectingParent();
			if (C && !C.resumeFrom) {
				let { snapshot: w, layout: k } = C;
				if (w && k) {
					let F = createBox();
					calcRelativePosition(F, s.layoutBox, w.layoutBox);
					let L = createBox();
					calcRelativePosition(L, d, k.layoutBox), boxEqualsRounded(F, L) || (U = !0), C.options.layoutRoot && (n.relativeTarget = L, n.relativeTargetOrigin = F, n.relativeParent = C);
				}
			}
		}
		n.notifyListeners("didUpdate", {
			layout: d,
			snapshot: s,
			delta: L,
			layoutDelta: F,
			hasLayoutChanged: V,
			hasRelativeLayoutChanged: U
		});
	} else if (n.isLead()) {
		let { onExitComplete: s } = n.options;
		s && s();
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
	let { visualElement: s } = n.options;
	s && s.getProps().onBeforeLayoutMeasure && s.notify("BeforeLayoutMeasure"), n.resetTransform();
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
function mixAxisDelta(n, s, d) {
	n.translate = mixNumber(s.translate, 0, d), n.scale = mixNumber(s.scale, 1, d), n.origin = s.origin, n.originPoint = s.originPoint;
}
function mixAxis(n, s, d, C) {
	n.min = mixNumber(s.min, d.min, C), n.max = mixNumber(s.max, d.max, C);
}
function mixBox(n, s, d, C) {
	mixAxis(n.x, s.x, d.x, C), mixAxis(n.y, s.y, d.y, C);
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
function shouldAnimatePositionOnly(n, s, d) {
	return n === "position" || n === "preserve-aspect" && !isNear(aspectRatio(s), aspectRatio(d), .2);
}
function checkNodeWasScrollRoot(n) {
	return n !== n.root && n.scroll?.wasRoot;
}
var DocumentProjectionNode = createProjectionNode({
	attachResizeListener: (n, s) => addDomEvent(n, "resize", s),
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
	resetTransform: (n, s) => {
		n.style.transform = s === void 0 ? "none" : s;
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
function handleHoverEvent(n, s, d) {
	let { props: C } = n;
	n.animationState && C.whileHover && n.animationState.setActive("whileHover", d === "Start");
	let w = C["onHover" + d];
	w && frame.postRender(() => w(s, extractEventInfo(s)));
}
var HoverGesture = class extends Feature {
	mount() {
		let { current: n } = this.node;
		n && (this.unmount = hover(n, (n, s) => (handleHoverEvent(this.node, s, "Start"), (n) => handleHoverEvent(this.node, n, "End"))));
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
function handlePressEvent(n, s, d) {
	let { props: C } = n;
	if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
	n.animationState && C.whileTap && n.animationState.setActive("whileTap", d === "Start");
	let w = C["onTap" + (d === "End" ? "" : d)];
	w && frame.postRender(() => w(s, extractEventInfo(s)));
}
var PressGesture = class extends Feature {
	mount() {
		let { current: n } = this.node;
		n && (this.unmount = press(n, (n, s) => (handlePressEvent(this.node, s, "Start"), (n, { success: s }) => handlePressEvent(this.node, n, s ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
	}
	unmount() {}
}, observerCallbacks = /* @__PURE__ */ new WeakMap(), observers = /* @__PURE__ */ new WeakMap(), fireObserverCallback = (n) => {
	let s = observerCallbacks.get(n.target);
	s && s(n);
}, fireAllObserverCallbacks = (n) => {
	n.forEach(fireObserverCallback);
};
function initIntersectionObserver({ root: n, ...s }) {
	let d = n || document;
	observers.has(d) || observers.set(d, {});
	let C = observers.get(d), w = JSON.stringify(s);
	return C[w] || (C[w] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: n,
		...s
	})), C[w];
}
function observeIntersection(n, s, d) {
	let C = initIntersectionObserver(s);
	return observerCallbacks.set(n, d), C.observe(n), () => {
		observerCallbacks.delete(n), C.unobserve(n);
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
		let { viewport: n = {} } = this.node.getProps(), { root: s, margin: d, amount: C = "some", once: w } = n, k = {
			root: s ? s.current : void 0,
			rootMargin: d,
			threshold: typeof C == "number" ? C : thresholdNames[C]
		};
		return observeIntersection(this.node.current, k, (n) => {
			let { isIntersecting: s } = n;
			if (this.isInView === s || (this.isInView = s, w && !s && this.hasEnteredView)) return;
			s && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", s);
			let { onViewportEnter: d, onViewportLeave: C } = this.node.getProps(), k = s ? d : C;
			k && k(n);
		});
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: n, prevProps: s } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(hasViewportOptionChanged(n, s)) && this.startObserver();
	}
	unmount() {}
};
function hasViewportOptionChanged({ viewport: n = {} }, { viewport: s = {} } = {}) {
	return (d) => n[d] !== s[d];
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
}, createDomVisualElement), PreviewElementRenderer = ({ element: n, offsetY: s = 0, dataContext: d }) => {
	let C = n.content;
	if (d) {
		if (n.type === "text") C = C.replace(/\{\{(.*?)\}\}/g, (n, s) => {
			let C = d[s.trim()];
			return C == null ? n : String(C);
		});
		else if (n.type === "image") if (n.dataBinding) {
			let s = d[n.dataBinding];
			s != null && (C = String(s));
		} else C = C.replace(/\{\{(.*?)\}\}/g, (n, s) => {
			let C = d[s.trim()];
			return C == null ? n : String(C);
		});
	}
	return /* @__PURE__ */ jsxs(p$1, {
		style: {
			position: "absolute",
			left: 0,
			top: 0,
			width: `${n.width}px`,
			height: `${n.height}px`,
			transform: `translate(${n.x}px, ${n.y + s}px) rotate(${n.rotation || 0}deg)`,
			padding: n.type === "image" || n.type === "text" ? 0 : "8px",
			overflow: "hidden",
			...n.style
		},
		children: [
			n.type === "text" && /* @__PURE__ */ jsx(p$2, { children: C }),
			n.type === "image" && (C ? /* @__PURE__ */ jsx("img", {
				src: C,
				alt: "Element",
				style: {
					width: "100%",
					height: "100%",
					objectFit: n.style?.objectFit || "cover",
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
			n.type === "box" && /* @__PURE__ */ jsx(p$1, { style: {
				width: "100%",
				height: "100%"
			} })
		]
	});
}, ListItem = ({ children: n, index: s, height: d }) => /* @__PURE__ */ jsx(motion.div, {
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
		delay: s * .05,
		ease: "easeOut"
	},
	whileHover: {
		scale: 1.02,
		transition: { duration: .2 }
	},
	style: {
		position: "relative",
		height: d,
		width: "100%",
		marginBottom: "20px",
		transformOrigin: "center center"
	},
	children: n
});
const Preview = () => {
	let { state: n } = useEditor(), d = React.useMemo(() => n.canvasHeight ? n.canvasHeight : n.elements.length === 0 ? 0 : Math.max(...n.elements.map((n) => n.y + n.height)), [n.elements, n.canvasHeight]);
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
					if (n.elements.length === 0) return /* @__PURE__ */ jsx(p, {
						align: "center",
						justify: "center",
						style: { height: "100%" },
						children: /* @__PURE__ */ jsx(p$2, {
							color: "gray",
							children: "Preview vazio"
						})
					});
					if (n.isList) {
						let s = n.mockData.length > 0 ? n.mockData : Array.from({ length: 10 }).map((n, s) => ({ id: s }));
						if (n.listSettings.sortProp) {
							let d = n.listSettings.sortProp, C = n.listSettings.sortOrder === "asc" ? 1 : -1;
							s = [...s].sort((n, s) => {
								let w = n[d], k = s[d];
								return w < k ? -1 * C : w > k ? 1 * C : 0;
							});
						}
						return n.listSettings.newestPosition === "top" && (s = [...s].reverse()), /* @__PURE__ */ jsx(p, {
							direction: "column",
							justify: n.listSettings.newestPosition === "top" ? "start" : "end",
							p: "4",
							style: {
								width: "100%",
								minHeight: "100%"
							},
							children: s.map((s, C) => /* @__PURE__ */ jsx(ListItem, {
								index: C,
								height: d,
								children: n.elements.map((n) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
									element: n,
									offsetY: 0,
									dataContext: s
								}, `${n.id}-${C}`))
							}, C))
						});
					}
					return n.elements.map((s) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
						element: s,
						dataContext: n.singleMockData
					}, s.id));
				})()
			})
		})
	});
}, EditorSettings = () => {
	let { state: n, updateListSettings: s, setCanvasHeight: d } = useEditor(), [C, w] = useState(!1), [k, F] = useState(""), [L, V] = useState("asc"), [U, K] = useState("bottom"), [J, X] = useState("down"), [$, Hk] = useState("150"), [Uk, Wk] = useState("");
	return useEffect(() => {
		C && (F(n.listSettings.sortProp || "__none__"), V(n.listSettings.sortOrder || "asc"), K(n.listSettings.newestPosition || "bottom"), X(n.listSettings.scrollDirection || "down"), Wk(n.listSettings.containerHeight ? String(n.listSettings.containerHeight) : ""), Hk(String(n.canvasHeight || 150)));
	}, [C]), useEffect(() => {
		if (!C) return;
		let s = parseInt($, 10);
		!isNaN(s) && s > 0 && n.canvasHeight !== s && d(s);
	}, [
		$,
		C,
		d,
		n.canvasHeight
	]), /* @__PURE__ */ jsxs(s$2, {
		open: C,
		onOpenChange: w,
		children: [/* @__PURE__ */ jsx(n$3, { children: /* @__PURE__ */ jsxs(o, {
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
				/* @__PURE__ */ jsx(g$1, { children: "Configurações do Editor" }),
				/* @__PURE__ */ jsx(m$1, {
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
									}), /* @__PURE__ */ jsxs("select", {
										value: k,
										onChange: (n) => F(n.target.value),
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
								}), /* @__PURE__ */ jsxs(p$1, { children: [/* @__PURE__ */ jsx(p$2, {
									size: "1",
									mb: "1",
									as: "div",
									children: "Direção"
								}), /* @__PURE__ */ jsxs("select", {
									value: L,
									onChange: (n) => V(n.target.value),
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
									}), /* @__PURE__ */ jsxs("select", {
										value: U,
										onChange: (n) => K(n.target.value),
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
								}), /* @__PURE__ */ jsxs(p$1, {
									flexGrow: "1",
									children: [/* @__PURE__ */ jsx(p$2, {
										size: "1",
										mb: "1",
										as: "div",
										children: "Comportamento de Rolagem"
									}), /* @__PURE__ */ jsxs("select", {
										value: J,
										onChange: (n) => X(n.target.value),
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
							/* @__PURE__ */ jsxs(p, {
								gap: "3",
								align: "center",
								children: [/* @__PURE__ */ jsxs(p$1, {
									flexGrow: "1",
									children: [
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											mb: "1",
											as: "div",
											children: "Altura do Item (Template) (px)"
										}),
										/* @__PURE__ */ jsx(u, {
											type: "number",
											min: "10",
											value: $,
											onChange: (n) => Hk(n.target.value)
										}),
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											color: "gray",
											children: "Altura de cada item individual na lista."
										})
									]
								}), /* @__PURE__ */ jsxs(p$1, {
									flexGrow: "1",
									children: [
										/* @__PURE__ */ jsx(p$2, {
											size: "1",
											mb: "1",
											as: "div",
											children: "Altura da Lista (Container) (px)"
										}),
										/* @__PURE__ */ jsx(u, {
											type: "number",
											min: "0",
											placeholder: "Auto (100%)",
											value: Uk,
											onChange: (n) => Wk(n.target.value)
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
							let n = parseInt(Uk, 10);
							s({
								sortProp: k === "__none__" ? "" : k,
								sortOrder: L,
								newestPosition: U,
								scrollDirection: J,
								containerHeight: !isNaN(n) && n > 0 ? n : void 0
							}), w(!1);
						},
						children: "Salvar Alterações"
					}) })]
				})
			]
		})]
	});
};
var EditorContent = ({ layout: n, initialState: d, onSave: C, theme: w = "light" }) => {
	let [k, F] = useState(!0), [L, V] = useState(!0), { addElement: U, loadState: K, state: q } = useEditor();
	React.useEffect(() => {
		if (d) try {
			let n = typeof d == "string" ? JSON.parse(d) : d;
			Array.isArray(n) ? K({ elements: n }) : n.elements && K(n);
		} catch (n) {
			console.error("Failed to load initial state", n);
		}
	}, [d, K]);
	let J = (n) => {
		console.log(`Adding element of type: ${n}`), U({
			type: n,
			content: `New ${n}`
		});
	};
	return /* @__PURE__ */ jsx(R, {
		appearance: w,
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
			children: [L && /* @__PURE__ */ jsxs(p, {
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
							/* @__PURE__ */ jsxs(I$1, { children: [/* @__PURE__ */ jsx(h, { children: /* @__PURE__ */ jsx(o, {
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
							}) }), /* @__PURE__ */ jsxs(g, {
								style: { width: "240px" },
								children: [
									/* @__PURE__ */ jsx(v$1, {
										onSelect: () => J("text"),
										children: "Texto"
									}),
									/* @__PURE__ */ jsx(v$1, {
										onSelect: () => J("image"),
										children: "Imagem"
									}),
									/* @__PURE__ */ jsx(v$1, {
										onSelect: () => J("box"),
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
									if (C) {
										let n = {
											elements: q.elements,
											isList: q.isList,
											mockData: q.mockData,
											singleMockData: q.singleMockData,
											listSettings: q.listSettings,
											canvasHeight: q.canvasHeight
										};
										C(JSON.stringify(n, null, 2));
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
								children: [n.props.map((n, s) => /* @__PURE__ */ jsxs(e, {
									color: "blue",
									variant: "soft",
									size: "2",
									style: {
										padding: "8px",
										justifyContent: "flex-start"
									},
									title: n.dataName,
									children: [n.name, /* @__PURE__ */ jsx(p$2, {
										color: "gray",
										style: {
											marginLeft: "auto",
											fontSize: "10px"
										},
										children: `{{${n.dataName}}}`
									})]
								}, s)), n.props.length === 0 && /* @__PURE__ */ jsx(p$2, {
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
							onClick: () => V(!L),
							title: L ? "Ocultar Barra Lateral" : "Mostrar Barra Lateral",
							children: jsx(L ? DoubleArrowLeftIcon : DoubleArrowRightIcon, {})
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
							color: k ? "blue" : "gray",
							onClick: () => F(!k),
							title: k ? "Ocultar Preview" : "Mostrar Preview",
							children: jsx(k ? EyeOpenIcon : EyeNoneIcon, {})
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
							k && /* @__PURE__ */ jsx(Ot, { style: {
								width: "4px",
								backgroundColor: "var(--gray-6)",
								cursor: "col-resize",
								transition: "background-color 0.2s"
							} }),
							k && /* @__PURE__ */ jsx(kt, {
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
const GenericEditor = (n) => /* @__PURE__ */ jsx(EditorProvider, {
	isList: n.layout.isList,
	availableProps: n.layout.props,
	theme: n.theme,
	children: /* @__PURE__ */ jsx(EditorContent, { ...n })
}), generateHTML = (n, s, d = {}) => Function("elements", "data", "options", getRendererCode() + "\nreturn renderTemplate(elements, data, options);")(n, s, d), getRendererCode = () => "\n/**\n * Render Template\n * @param {Array} elements - The JSON configuration of elements\n * @param {Object|Array} data - The data object to inject (Object for single, Array for list)\n * @param {Object} options - { isList: boolean, listSettings: { sortProp: string, sortOrder: 'asc'|'desc', newestPosition: 'top'|'bottom', scrollDirection: 'up'|'down', containerHeight: number }, canvasHeight: number }\n * @returns {string} - The generated HTML string\n */\nfunction renderTemplate(elements, data, options = {}) {\n    const { isList, listSettings, canvasHeight } = options;\n\n    const formatValue = (value, formatting) => {\n        if (!formatting || formatting.type === 'text') return value !== undefined && value !== null ? String(value) : '';\n        if (value === undefined || value === null) return '';\n\n        if (formatting.type === 'boolean') {\n             const isTrue = String(value) === 'true' || value === true || (typeof value === 'number' && value > 0);\n             return isTrue ? (formatting.trueLabel || 'Sim') : (formatting.falseLabel || 'Não');\n        }\n\n        if (formatting.type === 'date') {\n            try {\n                const date = new Date(value);\n                if (isNaN(date.getTime())) return String(value);\n                \n                if (formatting.dateFormat) {\n                     const d = date.getDate().toString().padStart(2, '0');\n                     const m = (date.getMonth() + 1).toString().padStart(2, '0');\n                     const y = date.getFullYear();\n                     const H = date.getHours().toString().padStart(2, '0');\n                     const M = date.getMinutes().toString().padStart(2, '0');\n                     const S = date.getSeconds().toString().padStart(2, '0');\n                     \n                     return formatting.dateFormat\n                        .replace('DD', d)\n                        .replace('MM', m)\n                        .replace('YYYY', String(y))\n                        .replace('HH', H)\n                        .replace('mm', M)\n                        .replace('ss', S);\n                }\n                return date.toLocaleDateString();\n            } catch (e) { return String(value); }\n        }\n\n        if (formatting.type === 'number') {\n             const num = parseFloat(value);\n             if (isNaN(num)) return String(value);\n             \n             if (formatting.numberFormat === 'currency') {\n                 return (formatting.currencySymbol || 'R$') + ' ' + num.toFixed(formatting.decimalPlaces || 2);\n             }\n             if (formatting.numberFormat === 'percent') {\n                 return num.toFixed(formatting.decimalPlaces || 0) + '%';\n             }\n             if (formatting.decimalPlaces !== undefined) {\n                 return num.toFixed(formatting.decimalPlaces);\n             }\n             return num.toFixed(formatting.decimalPlaces || 0);\n        }\n        \n        return String(value);\n    };\n\n    const checkCondition = (propValue, operator, ruleValue) => {\n        const val = String(propValue).toLowerCase();\n        const target = String(ruleValue).toLowerCase();\n        \n        switch (operator) {\n            case 'equals': return val === target;\n            case 'notEquals': return val !== target;\n            case 'contains': return val.includes(target);\n            case 'greaterThan': return parseFloat(val) > parseFloat(target);\n            case 'lessThan': return parseFloat(val) < parseFloat(target);\n            case 'truthy': return !!propValue;\n            case 'falsy': return !propValue;\n            default: return false;\n        }\n    };\n\n    const camelToKebab = (string) => {\n        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();\n    };\n\n    const styleObjectToString = (style) => {\n        if (!style) return '';\n        const pxProps = ['width', 'height', 'top', 'left', 'right', 'bottom', 'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth'];\n        \n        return Object.entries(style)\n            .map(([key, value]) => {\n                if (value === undefined || value === null) return '';\n                const cssKey = camelToKebab(key);\n                const cssValue = (typeof value === 'number' && pxProps.includes(key)) ? value + 'px' : value;\n                return `${cssKey}: ${cssValue}`;\n            })\n            .filter(Boolean)\n            .join('; ');\n    };\n\n    const renderItem = (itemData, index = 0, offsetY = 0) => {\n        return elements.map(element => {\n            let content = element.content;\n            let imgSrc = '';\n\n            // Resolve Content & Formatting\n            if (element.type === 'text') {\n                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                    const val = itemData[key.trim()];\n                    if (val === undefined || val === null) return match;\n                    if (element.formatting) {\n                        return formatValue(val, element.formatting);\n                    }\n                    return String(val);\n                });\n            } else if (element.type === 'image') {\n                 if (element.dataBinding) {\n                    const val = itemData[element.dataBinding];\n                    if (val !== undefined && val !== null) {\n                        imgSrc = String(val);\n                    } else {\n                        imgSrc = content;\n                    }\n                 } else {\n                     imgSrc = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                        const val = itemData[key.trim()];\n                        return val !== undefined && val !== null ? String(val) : match;\n                    });\n                 }\n            }\n\n            // Resolve Conditional Styles\n            let conditionalStyles = {};\n            if (element.conditions) {\n                element.conditions.forEach(rule => {\n                    const propVal = itemData[rule.property];\n                    if (checkCondition(propVal, rule.operator, rule.value)) {\n                         conditionalStyles = { ...conditionalStyles, ...rule.style };\n                    }\n                });\n            }\n\n            const baseStyle = {\n                position: 'absolute',\n                left: element.x,\n                top: element.y + offsetY,\n                width: element.width,\n                height: element.autoGrow ? 'auto' : element.height,\n                transform: element.rotation ? `rotate(${element.rotation}deg)` : undefined,\n                overflow: element.autoGrow ? 'visible' : 'hidden',\n                whiteSpace: element.autoGrow ? 'pre-wrap' : undefined,\n                wordBreak: element.autoGrow ? 'break-word' : undefined,\n                ...element.style,\n                ...conditionalStyles\n            };\n            \n            // Fix: remove padding if it's not explicitly set, or handle it for text\n            if (element.type === 'text' && !baseStyle.padding) {\n                // baseStyle.padding = '8px'; // Removed default padding to respect resize box\n            }\n            \n            const styleString = styleObjectToString(baseStyle);\n\n            if (element.type === 'text') {\n                return `<div style=\"${styleString}\">${content}</div>`;\n            } else if (element.type === 'image') {\n                const imgStyle = styleObjectToString({\n                    width: '100%',\n                    height: '100%',\n                    objectFit: element.style?.objectFit || 'cover',\n                    display: 'block'\n                });\n                return `<div style=\"${styleString}\"><img src=\"${imgSrc}\" alt=\"Element\" style=\"${imgStyle}\" /></div>`;\n            } else if (element.type === 'box') {\n                 return `<div style=\"${styleString}\"></div>`;\n            }\n            return '';\n        }).join('\\n');\n    };\n\n    if (isList && Array.isArray(data)) {\n        // Calculate item height\n        const itemHeight = canvasHeight || Math.max(...elements.map(el => el.y + el.height));\n\n        // Sort data\n        let listData = [...data];\n        if (listSettings && listSettings.sortProp) {\n            const prop = listSettings.sortProp;\n            const order = listSettings.sortOrder === 'asc' ? 1 : -1;\n            listData.sort((a, b) => {\n                const valA = a[prop];\n                const valB = b[prop];\n                if (valA < valB) return -1 * order;\n                if (valA > valB) return 1 * order;\n                return 0;\n            });\n        }\n        \n        // Handle newest position\n        if (listSettings && listSettings.newestPosition === 'top') {\n             listData.reverse();\n        }\n\n        // Generate HTML for all items\n        const itemsHtml = listData.map((item, index) => {\n             const itemHtml = renderItem(item, index, 0); \n             const itemContainerStyle = styleObjectToString({\n                 position: 'relative',\n                 height: itemHeight,\n                 width: '100%',\n                 marginBottom: 0\n             });\n             \n             return `<div class=\"list-item\" style=\"${itemContainerStyle}\">${itemHtml}</div>`;\n        }).join('\\n');\n\n        // Animation Styles based on settings\n        const scrollDirection = (listSettings && listSettings.scrollDirection) || 'down';\n        const containerHeight = (listSettings && listSettings.containerHeight) ? listSettings.containerHeight + 'px' : '100%';\n        \n        const justify = (listSettings && listSettings.newestPosition === 'top') ? 'flex-start' : 'flex-end';\n\n        const animationCss = `\n            @keyframes slideIn {\n                from { opacity: 0; transform: translateY(20px); }\n                to { opacity: 1; transform: translateY(0); }\n            }\n            .list-wrapper {\n                display: flex;\n                flex-direction: column;\n                justify-content: ${justify};\n                height: ${containerHeight};\n                width: 100%;\n                overflow-y: auto;\n                overflow-x: hidden;\n                box-sizing: border-box;\n                padding: 10px;\n            }\n            .list-item {\n                flex-shrink: 0;\n                animation: slideIn 0.3s ease-out;\n                margin-bottom: 10px;\n                width: 100%;\n                position: relative;\n            }\n        `;\n        \n        const scrollScript = scrollDirection === 'up' \n            ? `<script>\n                document.addEventListener('DOMContentLoaded', () => {\n                    const wrapper = document.querySelector('.list-wrapper');\n                    if(wrapper) wrapper.scrollTop = wrapper.scrollHeight;\n                });\n               <\/script>`\n            : '';\n\n        return `\n            <style>${animationCss}</style>\n            <div class=\"list-wrapper\">\n                ${itemsHtml}\n            </div>\n            ${scrollScript}\n        `;\n    }\n\n    // Single Item\n    const contentHtml = renderItem(data);\n    return `<div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\">${contentHtml}</div>`;\n}\n";
export { GenericEditor as EditorContent, generateHTML };
