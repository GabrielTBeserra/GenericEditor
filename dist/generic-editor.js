import * as React$1 from "react";
import React, { Component, Fragment, PureComponent, createContext, createElement, forwardRef, memo, useCallback, useContext, useEffect, useId, useImperativeHandle, useInsertionEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM, { createPortal, flushSync } from "react-dom";
import { Fragment as Fragment$1, jsx, jsxs } from "react/jsx-runtime";
var __create = Object.create, __defProp = Object.defineProperty, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropNames = Object.getOwnPropertyNames, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __esmMin = (s, d) => () => (s && (d = s(s = 0)), d), __commonJSMin = (s, d) => () => (d || s((d = { exports: {} }).exports, d), d.exports), __export = (s) => {
	let d = {};
	for (var C in s) __defProp(d, C, {
		get: s[C],
		enumerable: !0
	});
	return d;
}, __copyProps = (s, d, C, w) => {
	if (d && typeof d == "object" || typeof d == "function") for (var k = __getOwnPropNames(d), F = 0, L = k.length, V; F < L; F++) V = k[F], !__hasOwnProp.call(s, V) && V !== C && __defProp(s, V, {
		get: ((s) => d[s]).bind(null, V),
		enumerable: !(w = __getOwnPropDesc(d, V)) || w.enumerable
	});
	return s;
}, __toESM = (s, d, C) => (C = s == null ? {} : __create(__getProtoOf(s)), __copyProps(d || !s || !s.__esModule ? __defProp(C, "default", {
	value: s,
	enumerable: !0
}) : C, s)), __toCommonJS = (s) => __copyProps(__defProp({}, "__esModule", { value: !0 }), s);
function setRef(s, d) {
	if (typeof s == "function") return s(d);
	s != null && (s.current = d);
}
function composeRefs(...s) {
	return (d) => {
		let C = !1, w = s.map((s) => {
			let w = setRef(s, d);
			return !C && typeof w == "function" && (C = !0), w;
		});
		if (C) return () => {
			for (let d = 0; d < w.length; d++) {
				let C = w[d];
				typeof C == "function" ? C() : setRef(s[d], null);
			}
		};
	};
}
function useComposedRefs(...d) {
	return React$1.useCallback(composeRefs(...d), d);
}
/* @__NO_SIDE_EFFECTS__ */
function createSlot(d) {
	let C = /* @__PURE__ */ createSlotClone(d), w = React$1.forwardRef((d, w) => {
		let { children: k, ...F } = d, L = React$1.Children.toArray(k), V = L.find(isSlottable);
		if (V) {
			let d = V.props.children, k = L.map((C) => C === V ? React$1.Children.count(d) > 1 ? React$1.Children.only(null) : React$1.isValidElement(d) ? d.props.children : null : C);
			return /* @__PURE__ */ jsx(C, {
				...F,
				ref: w,
				children: React$1.isValidElement(d) ? React$1.cloneElement(d, void 0, k) : null
			});
		}
		return /* @__PURE__ */ jsx(C, {
			...F,
			ref: w,
			children: k
		});
	});
	return w.displayName = `${d}.Slot`, w;
}
var Slot$2 = /* @__PURE__ */ createSlot("Slot");
/* @__NO_SIDE_EFFECTS__ */
function createSlotClone(d) {
	let C = React$1.forwardRef((d, C) => {
		let { children: w, ...k } = d;
		if (React$1.isValidElement(w)) {
			let d = getElementRef$1(w), F = mergeProps(k, w.props);
			return w.type !== React$1.Fragment && (F.ref = C ? composeRefs(C, d) : d), React$1.cloneElement(w, F);
		}
		return React$1.Children.count(w) > 1 ? React$1.Children.only(null) : null;
	});
	return C.displayName = `${d}.SlotClone`, C;
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
	let C = { ...d };
	for (let w in d) {
		let k = s[w], F = d[w];
		/^on[A-Z]/.test(w) ? k && F ? C[w] = (...s) => {
			let d = F(...s);
			return k(...s), d;
		} : k && (C[w] = k) : w === "style" ? C[w] = {
			...k,
			...F
		} : w === "className" && (C[w] = [k, F].filter(Boolean).join(" "));
	}
	return {
		...s,
		...C
	};
}
function getElementRef$1(s) {
	let d = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, C = d && "isReactWarning" in d && d.isReactWarning;
	return C ? s.ref : (d = Object.getOwnPropertyDescriptor(s, "ref")?.get, C = d && "isReactWarning" in d && d.isReactWarning, C ? s.props.ref : s.props.ref || s.ref);
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
].reduce((d, C) => {
	let w = /* @__PURE__ */ createSlot(`Primitive.${C}`), k = React$1.forwardRef((s, d) => {
		let { asChild: k, ...F } = s, L = k ? w : C;
		return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ jsx(L, {
			...F,
			ref: d
		});
	});
	return k.displayName = `Primitive.${C}`, {
		...d,
		[C]: k
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
function createContext2(d, C) {
	let w = React$1.createContext(C), k = (d) => {
		let { children: C, ...k } = d, F = React$1.useMemo(() => k, Object.values(k));
		return /* @__PURE__ */ jsx(w.Provider, {
			value: F,
			children: C
		});
	};
	k.displayName = d + "Provider";
	function F(k) {
		let F = React$1.useContext(w);
		if (F) return F;
		if (C !== void 0) return C;
		throw Error(`\`${k}\` must be used within \`${d}\``);
	}
	return [k, F];
}
function createContextScope(d, C = []) {
	let w = [];
	function k(C, k) {
		let F = React$1.createContext(k), L = w.length;
		w = [...w, k];
		let V = (C) => {
			let { scope: w, children: k, ...V } = C, U = w?.[d]?.[L] || F, K = React$1.useMemo(() => V, Object.values(V));
			return /* @__PURE__ */ jsx(U.Provider, {
				value: K,
				children: k
			});
		};
		V.displayName = C + "Provider";
		function U(w, V) {
			let U = V?.[d]?.[L] || F, K = React$1.useContext(U);
			if (K) return K;
			if (k !== void 0) return k;
			throw Error(`\`${w}\` must be used within \`${C}\``);
		}
		return [V, U];
	}
	let F = () => {
		let C = w.map((d) => React$1.createContext(d));
		return function(w) {
			let k = w?.[d] || C;
			return React$1.useMemo(() => ({ [`__scope${d}`]: {
				...w,
				[d]: k
			} }), [w, k]);
		};
	};
	return F.scopeName = d, [k, composeContextScopes(F, ...C)];
}
function composeContextScopes(...d) {
	let C = d[0];
	if (d.length === 1) return C;
	let w = () => {
		let w = d.map((s) => ({
			useScope: s(),
			scopeName: s.scopeName
		}));
		return function(d) {
			let k = w.reduce((s, { useScope: C, scopeName: w }) => {
				let k = C(d)[`__scope${w}`];
				return {
					...s,
					...k
				};
			}, {});
			return React$1.useMemo(() => ({ [`__scope${C.scopeName}`]: k }), [k]);
		};
	};
	return w.scopeName = C.scopeName, w;
}
function createCollection(s) {
	let C = s + "CollectionProvider", [w, k] = createContextScope(C), [F, L] = w(C, {
		collectionRef: { current: null },
		itemMap: /* @__PURE__ */ new Map()
	}), V = (s) => {
		let { scope: C, children: w } = s, k = React.useRef(null), L = React.useRef(/* @__PURE__ */ new Map()).current;
		return /* @__PURE__ */ jsx(F, {
			scope: C,
			itemMap: L,
			collectionRef: k,
			children: w
		});
	};
	V.displayName = C;
	let U = s + "CollectionSlot", K = /* @__PURE__ */ createSlot(U), q = React.forwardRef((s, d) => {
		let { scope: C, children: w } = s;
		return /* @__PURE__ */ jsx(K, {
			ref: useComposedRefs(d, L(U, C).collectionRef),
			children: w
		});
	});
	q.displayName = U;
	let J = s + "CollectionItemSlot", X = "data-radix-collection-item", $ = /* @__PURE__ */ createSlot(J), PD = React.forwardRef((s, C) => {
		let { scope: w, children: k, ...F } = s, V = React.useRef(null), U = useComposedRefs(C, V), K = L(J, w);
		return React.useEffect(() => (K.itemMap.set(V, {
			ref: V,
			...F
		}), () => void K.itemMap.delete(V))), /* @__PURE__ */ jsx($, {
			[X]: "",
			ref: U,
			children: k
		});
	});
	PD.displayName = J;
	function FD(C) {
		let w = L(s + "CollectionConsumer", C);
		return React.useCallback(() => {
			let s = w.collectionRef.current;
			if (!s) return [];
			let d = Array.from(s.querySelectorAll(`[${X}]`));
			return Array.from(w.itemMap.values()).sort((s, C) => d.indexOf(s.ref.current) - d.indexOf(C.ref.current));
		}, [w.collectionRef, w.itemMap]);
	}
	return [
		{
			Provider: V,
			Slot: q,
			ItemSlot: PD
		},
		FD,
		k
	];
}
typeof window < "u" && window.document && window.document.createElement;
function composeEventHandlers(s, d, { checkForDefaultPrevented: C = !0 } = {}) {
	return function(w) {
		if (s?.(w), C === !1 || !w.defaultPrevented) return d?.(w);
	};
}
var useLayoutEffect2 = globalThis?.document ? React$1.useLayoutEffect : () => {}, useInsertionEffect$1 = React$1.useInsertionEffect || useLayoutEffect2;
function useControllableState({ prop: d, defaultProp: C, onChange: w = () => {}, caller: k }) {
	let [F, L, V] = useUncontrolledState({
		defaultProp: C,
		onChange: w
	}), U = d !== void 0, K = U ? d : F;
	{
		let C = React$1.useRef(d !== void 0);
		React$1.useEffect(() => {
			let s = C.current;
			if (s !== U) {
				let d = s ? "controlled" : "uncontrolled", C = U ? "controlled" : "uncontrolled";
				console.warn(`${k} is changing from ${d} to ${C}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
			}
			C.current = U;
		}, [U, k]);
	}
	return [K, React$1.useCallback((s) => {
		if (U) {
			let C = isFunction(s) ? s(d) : s;
			C !== d && V.current?.(C);
		} else L(s);
	}, [
		U,
		d,
		L,
		V
	])];
}
function useUncontrolledState({ defaultProp: d, onChange: C }) {
	let [w, k] = React$1.useState(d), F = React$1.useRef(w), L = React$1.useRef(C);
	return useInsertionEffect$1(() => {
		L.current = C;
	}, [C]), React$1.useEffect(() => {
		F.current !== w && (L.current?.(w), F.current = w);
	}, [w, F]), [
		w,
		k,
		L
	];
}
function isFunction(s) {
	return typeof s == "function";
}
function useStateMachine$1(d, C) {
	return React$1.useReducer((s, d) => C[s][d] ?? s, d);
}
var Presence = (d) => {
	let { present: C, children: w } = d, k = usePresence$1(C), F = typeof w == "function" ? w({ present: k.isPresent }) : React$1.Children.only(w), L = useComposedRefs(k.ref, getElementRef(F));
	return typeof w == "function" || k.isPresent ? React$1.cloneElement(F, { ref: L }) : null;
};
Presence.displayName = "Presence";
function usePresence$1(d) {
	let [C, w] = React$1.useState(), k = React$1.useRef(null), F = React$1.useRef(d), L = React$1.useRef("none"), [V, U] = useStateMachine$1(d ? "mounted" : "unmounted", {
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
		let s = getAnimationName(k.current);
		L.current = V === "mounted" ? s : "none";
	}, [V]), useLayoutEffect2(() => {
		let s = k.current, C = F.current;
		if (C !== d) {
			let w = L.current, k = getAnimationName(s);
			d ? U("MOUNT") : k === "none" || s?.display === "none" ? U("UNMOUNT") : U(C && w !== k ? "ANIMATION_OUT" : "UNMOUNT"), F.current = d;
		}
	}, [d, U]), useLayoutEffect2(() => {
		if (C) {
			let s, d = C.ownerDocument.defaultView ?? window, w = (w) => {
				let L = getAnimationName(k.current).includes(CSS.escape(w.animationName));
				if (w.target === C && L && (U("ANIMATION_END"), !F.current)) {
					let w = C.style.animationFillMode;
					C.style.animationFillMode = "forwards", s = d.setTimeout(() => {
						C.style.animationFillMode === "forwards" && (C.style.animationFillMode = w);
					});
				}
			}, V = (s) => {
				s.target === C && (L.current = getAnimationName(k.current));
			};
			return C.addEventListener("animationstart", V), C.addEventListener("animationcancel", w), C.addEventListener("animationend", w), () => {
				d.clearTimeout(s), C.removeEventListener("animationstart", V), C.removeEventListener("animationcancel", w), C.removeEventListener("animationend", w);
			};
		} else U("ANIMATION_END");
	}, [C, U]), {
		isPresent: ["mounted", "unmountSuspended"].includes(V),
		ref: React$1.useCallback((s) => {
			k.current = s ? getComputedStyle(s) : null, w(s);
		}, [])
	};
}
function getAnimationName(s) {
	return s?.animationName || "none";
}
function getElementRef(s) {
	let d = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, C = d && "isReactWarning" in d && d.isReactWarning;
	return C ? s.ref : (d = Object.getOwnPropertyDescriptor(s, "ref")?.get, C = d && "isReactWarning" in d && d.isReactWarning, C ? s.props.ref : s.props.ref || s.ref);
}
var useReactId = React$1.useId || (() => void 0), count$1 = 0;
function useId$1(d) {
	let [C, w] = React$1.useState(useReactId());
	return useLayoutEffect2(() => {
		d || w((s) => s ?? String(count$1++));
	}, [d]), d || (C ? `radix-${C}` : "");
}
var DirectionContext = React$1.createContext(void 0), DirectionProvider = (s) => {
	let { dir: d, children: C } = s;
	return /* @__PURE__ */ jsx(DirectionContext.Provider, {
		value: d,
		children: C
	});
};
function useDirection(d) {
	let C = React$1.useContext(DirectionContext);
	return d || C || "ltr";
}
var Provider$1 = DirectionProvider;
function useCallbackRef(d) {
	let C = React$1.useRef(d);
	return React$1.useEffect(() => {
		C.current = d;
	}), React$1.useMemo(() => (...s) => C.current?.(...s), []);
}
function useEscapeKeydown(d, C = globalThis?.document) {
	let w = useCallbackRef(d);
	React$1.useEffect(() => {
		let s = (s) => {
			s.key === "Escape" && w(s);
		};
		return C.addEventListener("keydown", s, { capture: !0 }), () => C.removeEventListener("keydown", s, { capture: !0 });
	}, [w, C]);
}
var DISMISSABLE_LAYER_NAME = "DismissableLayer", CONTEXT_UPDATE = "dismissableLayer.update", POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside", FOCUS_OUTSIDE = "dismissableLayer.focusOutside", originalBodyPointerEvents, DismissableLayerContext = React$1.createContext({
	layers: /* @__PURE__ */ new Set(),
	layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
	branches: /* @__PURE__ */ new Set()
}), DismissableLayer = React$1.forwardRef((d, C) => {
	let { disableOutsidePointerEvents: w = !1, onEscapeKeyDown: k, onPointerDownOutside: F, onFocusOutside: L, onInteractOutside: V, onDismiss: U, ...K } = d, q = React$1.useContext(DismissableLayerContext), [J, X] = React$1.useState(null), $ = J?.ownerDocument ?? globalThis?.document, [, PD] = React$1.useState({}), FD = useComposedRefs(C, (s) => X(s)), ID = Array.from(q.layers), [LD] = [...q.layersWithOutsidePointerEventsDisabled].slice(-1), RD = ID.indexOf(LD), zD = J ? ID.indexOf(J) : -1, BD = q.layersWithOutsidePointerEventsDisabled.size > 0, VD = zD >= RD, HD = usePointerDownOutside((s) => {
		let d = s.target, C = [...q.branches].some((s) => s.contains(d));
		!VD || C || (F?.(s), V?.(s), s.defaultPrevented || U?.());
	}, $), UD = useFocusOutside((s) => {
		let d = s.target;
		[...q.branches].some((s) => s.contains(d)) || (L?.(s), V?.(s), s.defaultPrevented || U?.());
	}, $);
	return useEscapeKeydown((s) => {
		zD === q.layers.size - 1 && (k?.(s), !s.defaultPrevented && U && (s.preventDefault(), U()));
	}, $), React$1.useEffect(() => {
		if (J) return w && (q.layersWithOutsidePointerEventsDisabled.size === 0 && (originalBodyPointerEvents = $.body.style.pointerEvents, $.body.style.pointerEvents = "none"), q.layersWithOutsidePointerEventsDisabled.add(J)), q.layers.add(J), dispatchUpdate(), () => {
			w && q.layersWithOutsidePointerEventsDisabled.size === 1 && ($.body.style.pointerEvents = originalBodyPointerEvents);
		};
	}, [
		J,
		$,
		w,
		q
	]), React$1.useEffect(() => () => {
		J && (q.layers.delete(J), q.layersWithOutsidePointerEventsDisabled.delete(J), dispatchUpdate());
	}, [J, q]), React$1.useEffect(() => {
		let s = () => PD({});
		return document.addEventListener(CONTEXT_UPDATE, s), () => document.removeEventListener(CONTEXT_UPDATE, s);
	}, []), /* @__PURE__ */ jsx(Primitive.div, {
		...K,
		ref: FD,
		style: {
			pointerEvents: BD ? VD ? "auto" : "none" : void 0,
			...d.style
		},
		onFocusCapture: composeEventHandlers(d.onFocusCapture, UD.onFocusCapture),
		onBlurCapture: composeEventHandlers(d.onBlurCapture, UD.onBlurCapture),
		onPointerDownCapture: composeEventHandlers(d.onPointerDownCapture, HD.onPointerDownCapture)
	});
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch", DismissableLayerBranch = React$1.forwardRef((d, C) => {
	let w = React$1.useContext(DismissableLayerContext), k = React$1.useRef(null), F = useComposedRefs(C, k);
	return React$1.useEffect(() => {
		let s = k.current;
		if (s) return w.branches.add(s), () => {
			w.branches.delete(s);
		};
	}, [w.branches]), /* @__PURE__ */ jsx(Primitive.div, {
		...d,
		ref: F
	});
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(d, C = globalThis?.document) {
	let w = useCallbackRef(d), k = React$1.useRef(!1), F = React$1.useRef(() => {});
	return React$1.useEffect(() => {
		let s = (s) => {
			if (s.target && !k.current) {
				let d = function() {
					handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, w, k, { discrete: !0 });
				}, k = { originalEvent: s };
				s.pointerType === "touch" ? (C.removeEventListener("click", F.current), F.current = d, C.addEventListener("click", F.current, { once: !0 })) : d();
			} else C.removeEventListener("click", F.current);
			k.current = !1;
		}, d = window.setTimeout(() => {
			C.addEventListener("pointerdown", s);
		}, 0);
		return () => {
			window.clearTimeout(d), C.removeEventListener("pointerdown", s), C.removeEventListener("click", F.current);
		};
	}, [C, w]), { onPointerDownCapture: () => k.current = !0 };
}
function useFocusOutside(d, C = globalThis?.document) {
	let w = useCallbackRef(d), k = React$1.useRef(!1);
	return React$1.useEffect(() => {
		let s = (s) => {
			s.target && !k.current && handleAndDispatchCustomEvent(FOCUS_OUTSIDE, w, { originalEvent: s }, { discrete: !1 });
		};
		return C.addEventListener("focusin", s), () => C.removeEventListener("focusin", s);
	}, [C, w]), {
		onFocusCapture: () => k.current = !0,
		onBlurCapture: () => k.current = !1
	};
}
function dispatchUpdate() {
	let s = new CustomEvent(CONTEXT_UPDATE);
	document.dispatchEvent(s);
}
function handleAndDispatchCustomEvent(s, d, C, { discrete: w }) {
	let k = C.originalEvent.target, F = new CustomEvent(s, {
		bubbles: !1,
		cancelable: !0,
		detail: C
	});
	d && k.addEventListener(s, d, { once: !0 }), w ? dispatchDiscreteCustomEvent(k, F) : k.dispatchEvent(F);
}
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount", AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount", EVENT_OPTIONS$1 = {
	bubbles: !1,
	cancelable: !0
}, FOCUS_SCOPE_NAME = "FocusScope", FocusScope = React$1.forwardRef((d, C) => {
	let { loop: w = !1, trapped: k = !1, onMountAutoFocus: F, onUnmountAutoFocus: L, ...V } = d, [U, K] = React$1.useState(null), q = useCallbackRef(F), J = useCallbackRef(L), X = React$1.useRef(null), $ = useComposedRefs(C, (s) => K(s)), PD = React$1.useRef({
		paused: !1,
		pause() {
			this.paused = !0;
		},
		resume() {
			this.paused = !1;
		}
	}).current;
	React$1.useEffect(() => {
		if (k) {
			let s = function(s) {
				if (PD.paused || !U) return;
				let d = s.target;
				U.contains(d) ? X.current = d : focus(X.current, { select: !0 });
			}, d = function(s) {
				if (PD.paused || !U) return;
				let d = s.relatedTarget;
				d !== null && (U.contains(d) || focus(X.current, { select: !0 }));
			}, C = function(s) {
				if (document.activeElement === document.body) for (let d of s) d.removedNodes.length > 0 && focus(U);
			};
			document.addEventListener("focusin", s), document.addEventListener("focusout", d);
			let w = new MutationObserver(C);
			return U && w.observe(U, {
				childList: !0,
				subtree: !0
			}), () => {
				document.removeEventListener("focusin", s), document.removeEventListener("focusout", d), w.disconnect();
			};
		}
	}, [
		k,
		U,
		PD.paused
	]), React$1.useEffect(() => {
		if (U) {
			focusScopesStack.add(PD);
			let s = document.activeElement;
			if (!U.contains(s)) {
				let d = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS$1);
				U.addEventListener(AUTOFOCUS_ON_MOUNT, q), U.dispatchEvent(d), d.defaultPrevented || (focusFirst$2(removeLinks(getTabbableCandidates(U)), { select: !0 }), document.activeElement === s && focus(U));
			}
			return () => {
				U.removeEventListener(AUTOFOCUS_ON_MOUNT, q), setTimeout(() => {
					let d = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS$1);
					U.addEventListener(AUTOFOCUS_ON_UNMOUNT, J), U.dispatchEvent(d), d.defaultPrevented || focus(s ?? document.body, { select: !0 }), U.removeEventListener(AUTOFOCUS_ON_UNMOUNT, J), focusScopesStack.remove(PD);
				}, 0);
			};
		}
	}, [
		U,
		q,
		J,
		PD
	]);
	let FD = React$1.useCallback((s) => {
		if (!w && !k || PD.paused) return;
		let d = s.key === "Tab" && !s.altKey && !s.ctrlKey && !s.metaKey, C = document.activeElement;
		if (d && C) {
			let d = s.currentTarget, [k, F] = getTabbableEdges(d);
			k && F ? !s.shiftKey && C === F ? (s.preventDefault(), w && focus(k, { select: !0 })) : s.shiftKey && C === k && (s.preventDefault(), w && focus(F, { select: !0 })) : C === d && s.preventDefault();
		}
	}, [
		w,
		k,
		PD.paused
	]);
	return /* @__PURE__ */ jsx(Primitive.div, {
		tabIndex: -1,
		...V,
		ref: $,
		onKeyDown: FD
	});
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst$2(s, { select: d = !1 } = {}) {
	let C = document.activeElement;
	for (let w of s) if (focus(w, { select: d }), document.activeElement !== C) return;
}
function getTabbableEdges(s) {
	let d = getTabbableCandidates(s);
	return [findVisible(d, s), findVisible(d.reverse(), s)];
}
function getTabbableCandidates(s) {
	let d = [], C = document.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, { acceptNode: (s) => {
		let d = s.tagName === "INPUT" && s.type === "hidden";
		return s.disabled || s.hidden || d ? NodeFilter.FILTER_SKIP : s.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
	} });
	for (; C.nextNode();) d.push(C.currentNode);
	return d;
}
function findVisible(s, d) {
	for (let C of s) if (!isHidden(C, { upTo: d })) return C;
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
		let C = document.activeElement;
		s.focus({ preventScroll: !0 }), s !== C && isSelectableInput(s) && d && s.select();
	}
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
	let s = [];
	return {
		add(d) {
			let C = s[0];
			d !== C && C?.pause(), s = arrayRemove(s, d), s.unshift(d);
		},
		remove(d) {
			s = arrayRemove(s, d), s[0]?.resume();
		}
	};
}
function arrayRemove(s, d) {
	let C = [...s], w = C.indexOf(d);
	return w !== -1 && C.splice(w, 1), C;
}
function removeLinks(s) {
	return s.filter((s) => s.tagName !== "A");
}
var PORTAL_NAME$4 = "Portal", Portal = React$1.forwardRef((d, C) => {
	let { container: w, ...k } = d, [F, L] = React$1.useState(!1);
	useLayoutEffect2(() => L(!0), []);
	let V = w || F && globalThis?.document?.body;
	return V ? ReactDOM.createPortal(/* @__PURE__ */ jsx(Primitive.div, {
		...k,
		ref: C
	}), V) : null;
});
Portal.displayName = PORTAL_NAME$4;
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
		for (var d, C = 1, w = arguments.length; C < w; C++) for (var k in d = arguments[C], d) Object.prototype.hasOwnProperty.call(d, k) && (s[k] = d[k]);
		return s;
	}, __assign$2.apply(this, arguments);
};
function __rest(s, d) {
	var C = {};
	for (var w in s) Object.prototype.hasOwnProperty.call(s, w) && d.indexOf(w) < 0 && (C[w] = s[w]);
	if (s != null && typeof Object.getOwnPropertySymbols == "function") for (var k = 0, w = Object.getOwnPropertySymbols(s); k < w.length; k++) d.indexOf(w[k]) < 0 && Object.prototype.propertyIsEnumerable.call(s, w[k]) && (C[w[k]] = s[w[k]]);
	return C;
}
function __spreadArray(s, d, C) {
	if (C || arguments.length === 2) for (var w = 0, k = d.length, F; w < k; w++) (F || !(w in d)) && (F ||= Array.prototype.slice.call(d, 0, w), F[w] = d[w]);
	return s.concat(F || Array.prototype.slice.call(d));
}
var zeroRightClassName = "right-scroll-bar-position", fullWidthClassName = "width-before-scroll-bar", noScrollbarsClassName = "with-scroll-bars-hidden", removedBarSizeVariable = "--removed-body-scroll-bar-size";
function assignRef(s, d) {
	return typeof s == "function" ? s(d) : s && (s.current = d), s;
}
function useCallbackRef$1(s, d) {
	var C = useState(function() {
		return {
			value: s,
			callback: d,
			facade: {
				get current() {
					return C.value;
				},
				set current(s) {
					var d = C.value;
					d !== s && (C.value = s, C.callback(s, d));
				}
			}
		};
	})[0];
	return C.callback = d, C.facade;
}
var useIsomorphicLayoutEffect$1 = typeof window < "u" ? React$1.useLayoutEffect : React$1.useEffect, currentValues = /* @__PURE__ */ new WeakMap();
function useMergeRefs(s, d) {
	var C = useCallbackRef$1(d || null, function(d) {
		return s.forEach(function(s) {
			return assignRef(s, d);
		});
	});
	return useIsomorphicLayoutEffect$1(function() {
		var d = currentValues.get(C);
		if (d) {
			var w = new Set(d), k = new Set(s), F = C.current;
			w.forEach(function(s) {
				k.has(s) || assignRef(s, null);
			}), k.forEach(function(s) {
				w.has(s) || assignRef(s, F);
			});
		}
		currentValues.set(C, s);
	}, [s]), C;
}
function ItoI(s) {
	return s;
}
function innerCreateMedium(s, d) {
	d === void 0 && (d = ItoI);
	var C = [], w = !1;
	return {
		read: function() {
			if (w) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
			return C.length ? C[C.length - 1] : s;
		},
		useMedium: function(s) {
			var k = d(s, w);
			return C.push(k), function() {
				C = C.filter(function(s) {
					return s !== k;
				});
			};
		},
		assignSyncMedium: function(s) {
			for (w = !0; C.length;) {
				var d = C;
				C = [], d.forEach(s);
			}
			C = {
				push: function(d) {
					return s(d);
				},
				filter: function() {
					return C;
				}
			};
		},
		assignMedium: function(s) {
			w = !0;
			var d = [];
			if (C.length) {
				var k = C;
				C = [], k.forEach(s), d = C;
			}
			var F = function() {
				var C = d;
				d = [], C.forEach(s);
			}, L = function() {
				return Promise.resolve().then(F);
			};
			L(), C = {
				push: function(s) {
					d.push(s), L();
				},
				filter: function(s) {
					return d = d.filter(s), C;
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
	var C = d.sideCar, w = __rest(d, ["sideCar"]);
	if (!C) throw Error("Sidecar: please provide `sideCar` property to import the right car");
	var k = C.read();
	if (!k) throw Error("Sidecar medium not found");
	return React$1.createElement(k, __assign$2({}, w));
};
SideCar.isSideCarExport = !0;
function exportSidecar(s, d) {
	return s.useMedium(d), SideCar;
}
var effectCar = createSidecarMedium(), nothing = function() {}, RemoveScroll = React$1.forwardRef(function(d, C) {
	var w = React$1.useRef(null), k = React$1.useState({
		onScrollCapture: nothing,
		onWheelCapture: nothing,
		onTouchMoveCapture: nothing
	}), F = k[0], L = k[1], V = d.forwardProps, U = d.children, K = d.className, q = d.removeScrollBar, J = d.enabled, X = d.shards, $ = d.sideCar, PD = d.noRelative, FD = d.noIsolation, ID = d.inert, LD = d.allowPinchZoom, RD = d.as, zD = RD === void 0 ? "div" : RD, BD = d.gapMode, VD = __rest(d, [
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
	]), HD = $, UD = useMergeRefs([w, C]), WD = __assign$2(__assign$2({}, VD), F);
	return React$1.createElement(React$1.Fragment, null, J && React$1.createElement(HD, {
		sideCar: effectCar,
		removeScrollBar: q,
		shards: X,
		noRelative: PD,
		noIsolation: FD,
		inert: ID,
		setCallbacks: L,
		allowPinchZoom: !!LD,
		lockRef: w,
		gapMode: BD
	}), V ? React$1.cloneElement(React$1.Children.only(U), __assign$2(__assign$2({}, WD), { ref: UD })) : React$1.createElement(zD, __assign$2({}, WD, {
		className: K,
		ref: UD
	}), U));
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
		add: function(C) {
			s == 0 && (d = makeStyleTag()) && (injectStyles(d, C), insertStyleTag(d)), s++;
		},
		remove: function() {
			s--, !s && d && (d.parentNode && d.parentNode.removeChild(d), d = null);
		}
	};
}, styleHookSingleton = function() {
	var d = stylesheetSingleton();
	return function(C, w) {
		React$1.useEffect(function() {
			return d.add(C), function() {
				d.remove();
			};
		}, [C && w]);
	};
}, styleSingleton = function() {
	var s = styleHookSingleton();
	return function(d) {
		var C = d.styles, w = d.dynamic;
		return s(C, w), null;
	};
}, zeroGap = {
	left: 0,
	top: 0,
	right: 0,
	gap: 0
}, parse = function(s) {
	return parseInt(s || "", 10) || 0;
}, getOffset = function(s) {
	var d = window.getComputedStyle(document.body), C = d[s === "padding" ? "paddingLeft" : "marginLeft"], w = d[s === "padding" ? "paddingTop" : "marginTop"], k = d[s === "padding" ? "paddingRight" : "marginRight"];
	return [
		parse(C),
		parse(w),
		parse(k)
	];
}, getGapWidth = function(s) {
	if (s === void 0 && (s = "margin"), typeof window > "u") return zeroGap;
	var d = getOffset(s), C = document.documentElement.clientWidth, w = window.innerWidth;
	return {
		left: d[0],
		top: d[1],
		right: d[2],
		gap: Math.max(0, w - C + d[2] - d[0])
	};
}, Style = styleSingleton(), lockAttribute = "data-scroll-locked", getStyles = function(s, d, C, w) {
	var k = s.left, F = s.top, L = s.right, V = s.gap;
	return C === void 0 && (C = "margin"), `
  .${noScrollbarsClassName} {
   overflow: hidden ${w};
   padding-right: ${V}px ${w};
  }
  body[${lockAttribute}] {
    overflow: hidden ${w};
    overscroll-behavior: contain;
    ${[
		d && `position: relative ${w};`,
		C === "margin" && `
    padding-left: ${k}px;
    padding-top: ${F}px;
    padding-right: ${L}px;
    margin-left:0;
    margin-top:0;
    margin-right: ${V}px ${w};
    `,
		C === "padding" && `padding-right: ${V}px ${w};`
	].filter(Boolean).join("")}
  }
  
  .${zeroRightClassName} {
    right: ${V}px ${w};
  }
  
  .${fullWidthClassName} {
    margin-right: ${V}px ${w};
  }
  
  .${zeroRightClassName} .${zeroRightClassName} {
    right: 0 ${w};
  }
  
  .${fullWidthClassName} .${fullWidthClassName} {
    margin-right: 0 ${w};
  }
  
  body[${lockAttribute}] {
    ${removedBarSizeVariable}: ${V}px;
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
	var C = d.noRelative, w = d.noImportant, k = d.gapMode, F = k === void 0 ? "margin" : k;
	useLockAttribute();
	var L = React$1.useMemo(function() {
		return getGapWidth(F);
	}, [F]);
	return React$1.createElement(Style, { styles: getStyles(L, !C, F, w ? "" : "!important") });
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
	var C = window.getComputedStyle(s);
	return C[d] !== "hidden" && !(C.overflowY === C.overflowX && !alwaysContainsScroll(s) && C[d] === "visible");
}, elementCouldBeVScrolled = function(s) {
	return elementCanBeScrolled(s, "overflowY");
}, elementCouldBeHScrolled = function(s) {
	return elementCanBeScrolled(s, "overflowX");
}, locationCouldBeScrolled = function(s, d) {
	var C = d.ownerDocument, w = d;
	do {
		if (typeof ShadowRoot < "u" && w instanceof ShadowRoot && (w = w.host), elementCouldBeScrolled(s, w)) {
			var k = getScrollVariables(s, w);
			if (k[1] > k[2]) return !0;
		}
		w = w.parentNode;
	} while (w && w !== C.body);
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
}, handleScroll = function(s, d, C, w, k) {
	var F = getDirectionFactor(s, window.getComputedStyle(d).direction), L = F * w, V = C.target, U = d.contains(V), K = !1, q = L > 0, J = 0, X = 0;
	do {
		if (!V) break;
		var $ = getScrollVariables(s, V), PD = $[0], FD = $[1] - $[2] - F * PD;
		(PD || FD) && elementCouldBeScrolled(s, V) && (J += FD, X += PD);
		var ID = V.parentNode;
		V = ID && ID.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? ID.host : ID;
	} while (!U && V !== document.body || U && (d.contains(V) || d === V));
	return (q && (k && Math.abs(J) < 1 || !k && L > J) || !q && (k && Math.abs(X) < 1 || !k && -L > X)) && (K = !0), K;
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
	var C = React$1.useRef([]), w = React$1.useRef([0, 0]), k = React$1.useRef(), F = React$1.useState(idCounter++)[0], L = React$1.useState(styleSingleton)[0], V = React$1.useRef(d);
	React$1.useEffect(function() {
		V.current = d;
	}, [d]), React$1.useEffect(function() {
		if (d.inert) {
			document.body.classList.add(`block-interactivity-${F}`);
			var s = __spreadArray([d.lockRef.current], (d.shards || []).map(extractRef), !0).filter(Boolean);
			return s.forEach(function(s) {
				return s.classList.add(`allow-interactivity-${F}`);
			}), function() {
				document.body.classList.remove(`block-interactivity-${F}`), s.forEach(function(s) {
					return s.classList.remove(`allow-interactivity-${F}`);
				});
			};
		}
	}, [
		d.inert,
		d.lockRef.current,
		d.shards
	]);
	var U = React$1.useCallback(function(s, d) {
		if ("touches" in s && s.touches.length === 2 || s.type === "wheel" && s.ctrlKey) return !V.current.allowPinchZoom;
		var C = getTouchXY(s), F = w.current, L = "deltaX" in s ? s.deltaX : F[0] - C[0], U = "deltaY" in s ? s.deltaY : F[1] - C[1], K, q = s.target, J = Math.abs(L) > Math.abs(U) ? "h" : "v";
		if ("touches" in s && J === "h" && q.type === "range") return !1;
		var X = window.getSelection(), $ = X && X.anchorNode;
		if ($ && ($ === q || $.contains(q))) return !1;
		var PD = locationCouldBeScrolled(J, q);
		if (!PD) return !0;
		if (PD ? K = J : (K = J === "v" ? "h" : "v", PD = locationCouldBeScrolled(J, q)), !PD) return !1;
		if (!k.current && "changedTouches" in s && (L || U) && (k.current = K), !K) return !0;
		var FD = k.current || K;
		return handleScroll(FD, d, s, FD === "h" ? L : U, !0);
	}, []), K = React$1.useCallback(function(s) {
		var d = s;
		if (!(!lockStack.length || lockStack[lockStack.length - 1] !== L)) {
			var w = "deltaY" in d ? getDeltaXY(d) : getTouchXY(d), k = C.current.filter(function(s) {
				return s.name === d.type && (s.target === d.target || d.target === s.shadowParent) && deltaCompare(s.delta, w);
			})[0];
			if (k && k.should) {
				d.cancelable && d.preventDefault();
				return;
			}
			if (!k) {
				var F = (V.current.shards || []).map(extractRef).filter(Boolean).filter(function(s) {
					return s.contains(d.target);
				});
				(F.length > 0 ? U(d, F[0]) : !V.current.noIsolation) && d.cancelable && d.preventDefault();
			}
		}
	}, []), q = React$1.useCallback(function(s, d, w, k) {
		var F = {
			name: s,
			delta: d,
			target: w,
			should: k,
			shadowParent: getOutermostShadowParent(w)
		};
		C.current.push(F), setTimeout(function() {
			C.current = C.current.filter(function(s) {
				return s !== F;
			});
		}, 1);
	}, []), J = React$1.useCallback(function(s) {
		w.current = getTouchXY(s), k.current = void 0;
	}, []), X = React$1.useCallback(function(s) {
		q(s.type, getDeltaXY(s), s.target, U(s, d.lockRef.current));
	}, []), $ = React$1.useCallback(function(s) {
		q(s.type, getTouchXY(s), s.target, U(s, d.lockRef.current));
	}, []);
	React$1.useEffect(function() {
		return lockStack.push(L), d.setCallbacks({
			onScrollCapture: X,
			onWheelCapture: X,
			onTouchMoveCapture: $
		}), document.addEventListener("wheel", K, nonPassive), document.addEventListener("touchmove", K, nonPassive), document.addEventListener("touchstart", J, nonPassive), function() {
			lockStack = lockStack.filter(function(s) {
				return s !== L;
			}), document.removeEventListener("wheel", K, nonPassive), document.removeEventListener("touchmove", K, nonPassive), document.removeEventListener("touchstart", J, nonPassive);
		};
	}, []);
	var PD = d.removeScrollBar, FD = d.inert;
	return React$1.createElement(React$1.Fragment, null, FD ? React$1.createElement(L, { styles: generateStyle(F) }) : null, PD ? React$1.createElement(RemoveScrollBar, {
		noRelative: d.noRelative,
		gapMode: d.gapMode
	}) : null);
}
function getOutermostShadowParent(s) {
	for (var d = null; s !== null;) s instanceof ShadowRoot && (d = s.host, s = s.host), s = s.parentNode;
	return d;
}
var sidecar_default = exportSidecar(effectCar, RemoveScrollSideCar), ReactRemoveScroll = React$1.forwardRef(function(d, C) {
	return React$1.createElement(RemoveScroll, __assign$2({}, d, {
		ref: C,
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
		var C = unwrapHost(d);
		return C && s.contains(C) ? C : (console.error("aria-hidden", d, "in not contained inside", s, ". Doing nothing"), null);
	}).filter(function(s) {
		return !!s;
	});
}, applyAttributeToOthers = function(s, d, C, w) {
	var k = correctTargets(d, Array.isArray(s) ? s : [s]);
	markerMap[C] || (markerMap[C] = /* @__PURE__ */ new WeakMap());
	var F = markerMap[C], L = [], V = /* @__PURE__ */ new Set(), U = new Set(k), K = function(s) {
		!s || V.has(s) || (V.add(s), K(s.parentNode));
	};
	k.forEach(K);
	var q = function(s) {
		!s || U.has(s) || Array.prototype.forEach.call(s.children, function(s) {
			if (V.has(s)) q(s);
			else try {
				var d = s.getAttribute(w), k = d !== null && d !== "false", U = (counterMap.get(s) || 0) + 1, K = (F.get(s) || 0) + 1;
				counterMap.set(s, U), F.set(s, K), L.push(s), U === 1 && k && uncontrolledNodes.set(s, !0), K === 1 && s.setAttribute(C, "true"), k || s.setAttribute(w, "true");
			} catch (d) {
				console.error("aria-hidden: cannot operate on ", s, d);
			}
		});
	};
	return q(d), V.clear(), lockCount++, function() {
		L.forEach(function(s) {
			var d = counterMap.get(s) - 1, k = F.get(s) - 1;
			counterMap.set(s, d), F.set(s, k), d || (uncontrolledNodes.has(s) || s.removeAttribute(w), uncontrolledNodes.delete(s)), k || s.removeAttribute(C);
		}), lockCount--, lockCount || (counterMap = /* @__PURE__ */ new WeakMap(), counterMap = /* @__PURE__ */ new WeakMap(), uncontrolledNodes = /* @__PURE__ */ new WeakMap(), markerMap = {});
	};
}, hideOthers = function(s, d, C) {
	C === void 0 && (C = "data-aria-hidden");
	var w = Array.from(Array.isArray(s) ? s : [s]), k = d || getDefaultParent(s);
	return k ? (w.push.apply(w, Array.from(k.querySelectorAll("[aria-live], script"))), applyAttributeToOthers(w, k, C, "aria-hidden")) : function() {
		return null;
	};
}, DIALOG_NAME = "Dialog", [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME), [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME), Dialog = (d) => {
	let { __scopeDialog: C, children: w, open: k, defaultOpen: F, onOpenChange: L, modal: V = !0 } = d, U = React$1.useRef(null), K = React$1.useRef(null), [q, J] = useControllableState({
		prop: k,
		defaultProp: F ?? !1,
		onChange: L,
		caller: DIALOG_NAME
	});
	return /* @__PURE__ */ jsx(DialogProvider, {
		scope: C,
		triggerRef: U,
		contentRef: K,
		contentId: useId$1(),
		titleId: useId$1(),
		descriptionId: useId$1(),
		open: q,
		onOpenChange: J,
		onOpenToggle: React$1.useCallback(() => J((s) => !s), [J]),
		modal: V,
		children: w
	});
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME$2 = "DialogTrigger", DialogTrigger = React$1.forwardRef((s, d) => {
	let { __scopeDialog: C, ...w } = s, k = useDialogContext(TRIGGER_NAME$2, C), F = useComposedRefs(d, k.triggerRef);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		"aria-haspopup": "dialog",
		"aria-expanded": k.open,
		"aria-controls": k.contentId,
		"data-state": getState(k.open),
		...w,
		ref: F,
		onClick: composeEventHandlers(s.onClick, k.onOpenToggle)
	});
});
DialogTrigger.displayName = TRIGGER_NAME$2;
var PORTAL_NAME$3 = "DialogPortal", [PortalProvider$2, usePortalContext$2] = createDialogContext(PORTAL_NAME$3, { forceMount: void 0 }), DialogPortal = (d) => {
	let { __scopeDialog: C, forceMount: w, children: k, container: F } = d, L = useDialogContext(PORTAL_NAME$3, C);
	return /* @__PURE__ */ jsx(PortalProvider$2, {
		scope: C,
		forceMount: w,
		children: React$1.Children.map(k, (s) => /* @__PURE__ */ jsx(Presence, {
			present: w || L.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: F,
				children: s
			})
		}))
	});
};
DialogPortal.displayName = PORTAL_NAME$3;
var OVERLAY_NAME = "DialogOverlay", DialogOverlay = React$1.forwardRef((s, d) => {
	let C = usePortalContext$2(OVERLAY_NAME, s.__scopeDialog), { forceMount: w = C.forceMount, ...k } = s, F = useDialogContext(OVERLAY_NAME, s.__scopeDialog);
	return F.modal ? /* @__PURE__ */ jsx(Presence, {
		present: w || F.open,
		children: /* @__PURE__ */ jsx(DialogOverlayImpl, {
			...k,
			ref: d
		})
	}) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot$1 = /* @__PURE__ */ createSlot("DialogOverlay.RemoveScroll"), DialogOverlayImpl = React$1.forwardRef((s, d) => {
	let { __scopeDialog: C, ...w } = s, k = useDialogContext(OVERLAY_NAME, C);
	return /* @__PURE__ */ jsx(Combination_default, {
		as: Slot$1,
		allowPinchZoom: !0,
		shards: [k.contentRef],
		children: /* @__PURE__ */ jsx(Primitive.div, {
			"data-state": getState(k.open),
			...w,
			ref: d,
			style: {
				pointerEvents: "auto",
				...w.style
			}
		})
	});
}), CONTENT_NAME$4 = "DialogContent", DialogContent = React$1.forwardRef((s, d) => {
	let C = usePortalContext$2(CONTENT_NAME$4, s.__scopeDialog), { forceMount: w = C.forceMount, ...k } = s, F = useDialogContext(CONTENT_NAME$4, s.__scopeDialog);
	return /* @__PURE__ */ jsx(Presence, {
		present: w || F.open,
		children: F.modal ? /* @__PURE__ */ jsx(DialogContentModal, {
			...k,
			ref: d
		}) : /* @__PURE__ */ jsx(DialogContentNonModal, {
			...k,
			ref: d
		})
	});
});
DialogContent.displayName = CONTENT_NAME$4;
var DialogContentModal = React$1.forwardRef((d, C) => {
	let w = useDialogContext(CONTENT_NAME$4, d.__scopeDialog), k = React$1.useRef(null), F = useComposedRefs(C, w.contentRef, k);
	return React$1.useEffect(() => {
		let s = k.current;
		if (s) return hideOthers(s);
	}, []), /* @__PURE__ */ jsx(DialogContentImpl, {
		...d,
		ref: F,
		trapFocus: w.open,
		disableOutsidePointerEvents: !0,
		onCloseAutoFocus: composeEventHandlers(d.onCloseAutoFocus, (s) => {
			s.preventDefault(), w.triggerRef.current?.focus();
		}),
		onPointerDownOutside: composeEventHandlers(d.onPointerDownOutside, (s) => {
			let d = s.detail.originalEvent, C = d.button === 0 && d.ctrlKey === !0;
			(d.button === 2 || C) && s.preventDefault();
		}),
		onFocusOutside: composeEventHandlers(d.onFocusOutside, (s) => s.preventDefault())
	});
}), DialogContentNonModal = React$1.forwardRef((d, C) => {
	let w = useDialogContext(CONTENT_NAME$4, d.__scopeDialog), k = React$1.useRef(!1), F = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(DialogContentImpl, {
		...d,
		ref: C,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		onCloseAutoFocus: (s) => {
			d.onCloseAutoFocus?.(s), s.defaultPrevented || (k.current || w.triggerRef.current?.focus(), s.preventDefault()), k.current = !1, F.current = !1;
		},
		onInteractOutside: (s) => {
			d.onInteractOutside?.(s), s.defaultPrevented || (k.current = !0, s.detail.originalEvent.type === "pointerdown" && (F.current = !0));
			let C = s.target;
			w.triggerRef.current?.contains(C) && s.preventDefault(), s.detail.originalEvent.type === "focusin" && F.current && s.preventDefault();
		}
	});
}), DialogContentImpl = React$1.forwardRef((d, C) => {
	let { __scopeDialog: w, trapFocus: k, onOpenAutoFocus: F, onCloseAutoFocus: L, ...V } = d, U = useDialogContext(CONTENT_NAME$4, w), K = React$1.useRef(null), q = useComposedRefs(C, K);
	return useFocusGuards(), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(FocusScope, {
		asChild: !0,
		loop: !0,
		trapped: k,
		onMountAutoFocus: F,
		onUnmountAutoFocus: L,
		children: /* @__PURE__ */ jsx(DismissableLayer, {
			role: "dialog",
			id: U.contentId,
			"aria-describedby": U.descriptionId,
			"aria-labelledby": U.titleId,
			"data-state": getState(U.open),
			...V,
			ref: q,
			onDismiss: () => U.onOpenChange(!1)
		})
	}), /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(TitleWarning, { titleId: U.titleId }), /* @__PURE__ */ jsx(DescriptionWarning, {
		contentRef: K,
		descriptionId: U.descriptionId
	})] })] });
}), TITLE_NAME = "DialogTitle", DialogTitle = React$1.forwardRef((s, d) => {
	let { __scopeDialog: C, ...w } = s, k = useDialogContext(TITLE_NAME, C);
	return /* @__PURE__ */ jsx(Primitive.h2, {
		id: k.titleId,
		...w,
		ref: d
	});
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription", DialogDescription = React$1.forwardRef((s, d) => {
	let { __scopeDialog: C, ...w } = s, k = useDialogContext(DESCRIPTION_NAME, C);
	return /* @__PURE__ */ jsx(Primitive.p, {
		id: k.descriptionId,
		...w,
		ref: d
	});
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose", DialogClose = React$1.forwardRef((s, d) => {
	let { __scopeDialog: C, ...w } = s, k = useDialogContext(CLOSE_NAME, C);
	return /* @__PURE__ */ jsx(Primitive.button, {
		type: "button",
		...w,
		ref: d,
		onClick: composeEventHandlers(s.onClick, () => k.onOpenChange(!1))
	});
});
DialogClose.displayName = CLOSE_NAME;
function getState(s) {
	return s ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning", [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
	contentName: CONTENT_NAME$4,
	titleName: TITLE_NAME,
	docsSlug: "dialog"
}), TitleWarning = ({ titleId: d }) => {
	let C = useWarningContext(TITLE_WARNING_NAME), w = `\`${C.contentName}\` requires a \`${C.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${C.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${C.docsSlug}`;
	return React$1.useEffect(() => {
		d && (document.getElementById(d) || console.error(w));
	}, [w, d]), null;
}, DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning", DescriptionWarning = ({ contentRef: d, descriptionId: C }) => {
	let w = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${useWarningContext(DESCRIPTION_WARNING_NAME).contentName}}.`;
	return React$1.useEffect(() => {
		let s = d.current?.getAttribute("aria-describedby");
		C && s && (document.getElementById(C) || console.warn(w));
	}, [
		w,
		d,
		C
	]), null;
}, Root$3 = Dialog, Trigger$1 = DialogTrigger, Portal$2 = DialogPortal, Overlay = DialogOverlay, Content$1 = DialogContent, Title = DialogTitle, Description = DialogDescription, Close = DialogClose;
function useSize(d) {
	let [C, w] = React$1.useState(void 0);
	return useLayoutEffect2(() => {
		if (d) {
			w({
				width: d.offsetWidth,
				height: d.offsetHeight
			});
			let s = new ResizeObserver((s) => {
				if (!Array.isArray(s) || !s.length) return;
				let C = s[0], k, F;
				if ("borderBoxSize" in C) {
					let s = C.borderBoxSize, d = Array.isArray(s) ? s[0] : s;
					k = d.inlineSize, F = d.blockSize;
				} else k = d.offsetWidth, F = d.offsetHeight;
				w({
					width: k,
					height: F
				});
			});
			return s.observe(d, { box: "border-box" }), () => s.unobserve(d);
		} else w(void 0);
	}, [d]), C;
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
function clamp$3(s, d, C) {
	return max(s, min(d, C));
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
function getAlignmentSides(s, d, C) {
	C === void 0 && (C = !1);
	let w = getAlignment(s), k = getAlignmentAxis(s), F = getAxisLength(k), L = k === "x" ? w === (C ? "end" : "start") ? "right" : "left" : w === "start" ? "bottom" : "top";
	return d.reference[F] > d.floating[F] && (L = getOppositePlacement(L)), [L, getOppositePlacement(L)];
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
function getSideList(s, d, C) {
	switch (s) {
		case "top":
		case "bottom": return C ? d ? rlPlacement : lrPlacement : d ? lrPlacement : rlPlacement;
		case "left":
		case "right": return d ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(s, d, C, w) {
	let k = getAlignment(s), F = getSideList(getSide(s), C === "start", w);
	return k && (F = F.map((s) => s + "-" + k), d && (F = F.concat(F.map(getOppositeAlignmentPlacement)))), F;
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
	let { x: d, y: C, width: w, height: k } = s;
	return {
		width: w,
		height: k,
		top: C,
		left: d,
		right: d + w,
		bottom: C + k,
		x: d,
		y: C
	};
}
function computeCoordsFromPlacement(s, d, C) {
	let { reference: w, floating: k } = s, F = getSideAxis(d), L = getAlignmentAxis(d), V = getAxisLength(L), U = getSide(d), K = F === "y", q = w.x + w.width / 2 - k.width / 2, J = w.y + w.height / 2 - k.height / 2, X = w[V] / 2 - k[V] / 2, $;
	switch (U) {
		case "top":
			$ = {
				x: q,
				y: w.y - k.height
			};
			break;
		case "bottom":
			$ = {
				x: q,
				y: w.y + w.height
			};
			break;
		case "right":
			$ = {
				x: w.x + w.width,
				y: J
			};
			break;
		case "left":
			$ = {
				x: w.x - k.width,
				y: J
			};
			break;
		default: $ = {
			x: w.x,
			y: w.y
		};
	}
	switch (getAlignment(d)) {
		case "start":
			$[L] -= X * (C && K ? -1 : 1);
			break;
		case "end":
			$[L] += X * (C && K ? -1 : 1);
			break;
	}
	return $;
}
var computePosition$1 = async (s, d, C) => {
	let { placement: w = "bottom", strategy: k = "absolute", middleware: F = [], platform: L } = C, V = F.filter(Boolean), U = await (L.isRTL == null ? void 0 : L.isRTL(d)), K = await L.getElementRects({
		reference: s,
		floating: d,
		strategy: k
	}), { x: q, y: J } = computeCoordsFromPlacement(K, w, U), X = w, $ = {}, PD = 0;
	for (let C = 0; C < V.length; C++) {
		let { name: F, fn: FD } = V[C], { x: ID, y: LD, data: RD, reset: zD } = await FD({
			x: q,
			y: J,
			initialPlacement: w,
			placement: X,
			strategy: k,
			middlewareData: $,
			rects: K,
			platform: L,
			elements: {
				reference: s,
				floating: d
			}
		});
		q = ID ?? q, J = LD ?? J, $ = {
			...$,
			[F]: {
				...$[F],
				...RD
			}
		}, zD && PD <= 50 && (PD++, typeof zD == "object" && (zD.placement && (X = zD.placement), zD.rects && (K = zD.rects === !0 ? await L.getElementRects({
			reference: s,
			floating: d,
			strategy: k
		}) : zD.rects), {x: q, y: J} = computeCoordsFromPlacement(K, X, U)), C = -1);
	}
	return {
		x: q,
		y: J,
		placement: X,
		strategy: k,
		middlewareData: $
	};
};
async function detectOverflow$1(s, d) {
	d === void 0 && (d = {});
	let { x: C, y: w, platform: k, rects: F, elements: L, strategy: V } = s, { boundary: U = "clippingAncestors", rootBoundary: K = "viewport", elementContext: q = "floating", altBoundary: J = !1, padding: X = 0 } = evaluate(d, s), $ = getPaddingObject(X), PD = L[J ? q === "floating" ? "reference" : "floating" : q], FD = rectToClientRect(await k.getClippingRect({
		element: await (k.isElement == null ? void 0 : k.isElement(PD)) ?? !0 ? PD : PD.contextElement || await (k.getDocumentElement == null ? void 0 : k.getDocumentElement(L.floating)),
		boundary: U,
		rootBoundary: K,
		strategy: V
	})), ID = q === "floating" ? {
		x: C,
		y: w,
		width: F.floating.width,
		height: F.floating.height
	} : F.reference, LD = await (k.getOffsetParent == null ? void 0 : k.getOffsetParent(L.floating)), RD = await (k.isElement == null ? void 0 : k.isElement(LD)) && await (k.getScale == null ? void 0 : k.getScale(LD)) || {
		x: 1,
		y: 1
	}, zD = rectToClientRect(k.convertOffsetParentRelativeRectToViewportRelativeRect ? await k.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements: L,
		rect: ID,
		offsetParent: LD,
		strategy: V
	}) : ID);
	return {
		top: (FD.top - zD.top + $.top) / RD.y,
		bottom: (zD.bottom - FD.bottom + $.bottom) / RD.y,
		left: (FD.left - zD.left + $.left) / RD.x,
		right: (zD.right - FD.right + $.right) / RD.x
	};
}
var arrow$2 = (s) => ({
	name: "arrow",
	options: s,
	async fn(d) {
		let { x: C, y: w, placement: k, rects: F, platform: L, elements: V, middlewareData: U } = d, { element: K, padding: q = 0 } = evaluate(s, d) || {};
		if (K == null) return {};
		let J = getPaddingObject(q), X = {
			x: C,
			y: w
		}, $ = getAlignmentAxis(k), PD = getAxisLength($), FD = await L.getDimensions(K), ID = $ === "y", LD = ID ? "top" : "left", RD = ID ? "bottom" : "right", zD = ID ? "clientHeight" : "clientWidth", BD = F.reference[PD] + F.reference[$] - X[$] - F.floating[PD], VD = X[$] - F.reference[$], HD = await (L.getOffsetParent == null ? void 0 : L.getOffsetParent(K)), UD = HD ? HD[zD] : 0;
		(!UD || !await (L.isElement == null ? void 0 : L.isElement(HD))) && (UD = V.floating[zD] || F.floating[PD]);
		let WD = BD / 2 - VD / 2, GD = UD / 2 - FD[PD] / 2 - 1, KD = min(J[LD], GD), qD = min(J[RD], GD), JD = KD, YD = UD - FD[PD] - qD, XD = UD / 2 - FD[PD] / 2 + WD, ZD = clamp$3(JD, XD, YD), QD = !U.arrow && getAlignment(k) != null && XD !== ZD && F.reference[PD] / 2 - (XD < JD ? KD : qD) - FD[PD] / 2 < 0, $D = QD ? XD < JD ? XD - JD : XD - YD : 0;
		return {
			[$]: X[$] + $D,
			data: {
				[$]: ZD,
				centerOffset: XD - ZD - $D,
				...QD && { alignmentOffset: $D }
			},
			reset: QD
		};
	}
}), flip$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "flip",
		options: s,
		async fn(d) {
			var C;
			let { placement: w, middlewareData: k, rects: F, initialPlacement: L, platform: V, elements: U } = d, { mainAxis: K = !0, crossAxis: q = !0, fallbackPlacements: J, fallbackStrategy: X = "bestFit", fallbackAxisSideDirection: $ = "none", flipAlignment: PD = !0, ...FD } = evaluate(s, d);
			if ((C = k.arrow) != null && C.alignmentOffset) return {};
			let ID = getSide(w), LD = getSideAxis(L), RD = getSide(L) === L, zD = await (V.isRTL == null ? void 0 : V.isRTL(U.floating)), BD = J || (RD || !PD ? [getOppositePlacement(L)] : getExpandedPlacements(L)), VD = $ !== "none";
			!J && VD && BD.push(...getOppositeAxisPlacements(L, PD, $, zD));
			let HD = [L, ...BD], UD = await detectOverflow$1(d, FD), WD = [], GD = k.flip?.overflows || [];
			if (K && WD.push(UD[ID]), q) {
				let s = getAlignmentSides(w, F, zD);
				WD.push(UD[s[0]], UD[s[1]]);
			}
			if (GD = [...GD, {
				placement: w,
				overflows: WD
			}], !WD.every((s) => s <= 0)) {
				let s = (k.flip?.index || 0) + 1, d = HD[s];
				if (d && (!(q === "alignment" && LD !== getSideAxis(d)) || GD.every((s) => getSideAxis(s.placement) === LD ? s.overflows[0] > 0 : !0))) return {
					data: {
						index: s,
						overflows: GD
					},
					reset: { placement: d }
				};
				let C = GD.filter((s) => s.overflows[0] <= 0).sort((s, d) => s.overflows[1] - d.overflows[1])[0]?.placement;
				if (!C) switch (X) {
					case "bestFit": {
						let s = GD.filter((s) => {
							if (VD) {
								let d = getSideAxis(s.placement);
								return d === LD || d === "y";
							}
							return !0;
						}).map((s) => [s.placement, s.overflows.filter((s) => s > 0).reduce((s, d) => s + d, 0)]).sort((s, d) => s[1] - d[1])[0]?.[0];
						s && (C = s);
						break;
					}
					case "initialPlacement":
						C = L;
						break;
				}
				if (w !== C) return { reset: { placement: C } };
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
			let { rects: C } = d, { strategy: w = "referenceHidden", ...k } = evaluate(s, d);
			switch (w) {
				case "referenceHidden": {
					let s = getSideOffsets(await detectOverflow$1(d, {
						...k,
						elementContext: "reference"
					}), C.reference);
					return { data: {
						referenceHiddenOffsets: s,
						referenceHidden: isAnySideFullyClipped(s)
					} };
				}
				case "escaped": {
					let s = getSideOffsets(await detectOverflow$1(d, {
						...k,
						altBoundary: !0
					}), C.floating);
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
	let { placement: C, platform: w, elements: k } = s, F = await (w.isRTL == null ? void 0 : w.isRTL(k.floating)), L = getSide(C), V = getAlignment(C), U = getSideAxis(C) === "y", K = originSides.has(L) ? -1 : 1, q = F && U ? -1 : 1, J = evaluate(d, s), { mainAxis: X, crossAxis: $, alignmentAxis: PD } = typeof J == "number" ? {
		mainAxis: J,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: J.mainAxis || 0,
		crossAxis: J.crossAxis || 0,
		alignmentAxis: J.alignmentAxis
	};
	return V && typeof PD == "number" && ($ = V === "end" ? PD * -1 : PD), U ? {
		x: $ * q,
		y: X * K
	} : {
		x: X * K,
		y: $ * q
	};
}
var offset$2 = function(s) {
	return s === void 0 && (s = 0), {
		name: "offset",
		options: s,
		async fn(d) {
			var C;
			let { x: w, y: k, placement: F, middlewareData: L } = d, V = await convertValueToCoords(d, s);
			return F === L.offset?.placement && (C = L.arrow) != null && C.alignmentOffset ? {} : {
				x: w + V.x,
				y: k + V.y,
				data: {
					...V,
					placement: F
				}
			};
		}
	};
}, shift$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "shift",
		options: s,
		async fn(d) {
			let { x: C, y: w, placement: k } = d, { mainAxis: F = !0, crossAxis: L = !1, limiter: V = { fn: (s) => {
				let { x: d, y: C } = s;
				return {
					x: d,
					y: C
				};
			} }, ...U } = evaluate(s, d), K = {
				x: C,
				y: w
			}, q = await detectOverflow$1(d, U), J = getSideAxis(getSide(k)), X = getOppositeAxis(J), $ = K[X], PD = K[J];
			if (F) {
				let s = X === "y" ? "top" : "left", d = X === "y" ? "bottom" : "right", C = $ + q[s], w = $ - q[d];
				$ = clamp$3(C, $, w);
			}
			if (L) {
				let s = J === "y" ? "top" : "left", d = J === "y" ? "bottom" : "right", C = PD + q[s], w = PD - q[d];
				PD = clamp$3(C, PD, w);
			}
			let FD = V.fn({
				...d,
				[X]: $,
				[J]: PD
			});
			return {
				...FD,
				data: {
					x: FD.x - C,
					y: FD.y - w,
					enabled: {
						[X]: F,
						[J]: L
					}
				}
			};
		}
	};
}, limitShift$2 = function(s) {
	return s === void 0 && (s = {}), {
		options: s,
		fn(d) {
			let { x: C, y: w, placement: k, rects: F, middlewareData: L } = d, { offset: V = 0, mainAxis: U = !0, crossAxis: K = !0 } = evaluate(s, d), q = {
				x: C,
				y: w
			}, J = getSideAxis(k), X = getOppositeAxis(J), $ = q[X], PD = q[J], FD = evaluate(V, d), ID = typeof FD == "number" ? {
				mainAxis: FD,
				crossAxis: 0
			} : {
				mainAxis: 0,
				crossAxis: 0,
				...FD
			};
			if (U) {
				let s = X === "y" ? "height" : "width", d = F.reference[X] - F.floating[s] + ID.mainAxis, C = F.reference[X] + F.reference[s] - ID.mainAxis;
				$ < d ? $ = d : $ > C && ($ = C);
			}
			if (K) {
				let s = X === "y" ? "width" : "height", d = originSides.has(getSide(k)), C = F.reference[J] - F.floating[s] + (d && L.offset?.[J] || 0) + (d ? 0 : ID.crossAxis), w = F.reference[J] + F.reference[s] + (d ? 0 : L.offset?.[J] || 0) - (d ? ID.crossAxis : 0);
				PD < C ? PD = C : PD > w && (PD = w);
			}
			return {
				[X]: $,
				[J]: PD
			};
		}
	};
}, size$2 = function(s) {
	return s === void 0 && (s = {}), {
		name: "size",
		options: s,
		async fn(d) {
			var C, w;
			let { placement: k, rects: F, platform: L, elements: V } = d, { apply: U = () => {}, ...K } = evaluate(s, d), q = await detectOverflow$1(d, K), J = getSide(k), X = getAlignment(k), $ = getSideAxis(k) === "y", { width: PD, height: FD } = F.floating, ID, LD;
			J === "top" || J === "bottom" ? (ID = J, LD = X === (await (L.isRTL == null ? void 0 : L.isRTL(V.floating)) ? "start" : "end") ? "left" : "right") : (LD = J, ID = X === "end" ? "top" : "bottom");
			let RD = FD - q.top - q.bottom, zD = PD - q.left - q.right, BD = min(FD - q[ID], RD), VD = min(PD - q[LD], zD), HD = !d.middlewareData.shift, UD = BD, WD = VD;
			if ((C = d.middlewareData.shift) != null && C.enabled.x && (WD = zD), (w = d.middlewareData.shift) != null && w.enabled.y && (UD = RD), HD && !X) {
				let s = max(q.left, 0), d = max(q.right, 0), C = max(q.top, 0), w = max(q.bottom, 0);
				$ ? WD = PD - 2 * (s !== 0 || d !== 0 ? s + d : max(q.left, q.right)) : UD = FD - 2 * (C !== 0 || w !== 0 ? C + w : max(q.top, q.bottom));
			}
			await U({
				...d,
				availableWidth: WD,
				availableHeight: UD
			});
			let GD = await L.getDimensions(V.floating);
			return PD !== GD.width || FD !== GD.height ? { reset: { rects: !0 } } : {};
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
	let { overflow: d, overflowX: C, overflowY: w, display: k } = getComputedStyle$2(s);
	return /auto|scroll|overlay|hidden|clip/.test(d + w + C) && !invalidOverflowDisplayValues.has(k);
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
	let d = isWebKit(), C = isElement(s) ? getComputedStyle$2(s) : s;
	return transformProperties.some((s) => C[s] ? C[s] !== "none" : !1) || (C.containerType ? C.containerType !== "normal" : !1) || !d && (C.backdropFilter ? C.backdropFilter !== "none" : !1) || !d && (C.filter ? C.filter !== "none" : !1) || willChangeValues.some((s) => (C.willChange || "").includes(s)) || containValues.some((s) => (C.contain || "").includes(s));
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
function getOverflowAncestors(s, d, C) {
	d === void 0 && (d = []), C === void 0 && (C = !0);
	let w = getNearestOverflowAncestor(s), k = w === s.ownerDocument?.body, F = getWindow(w);
	if (k) {
		let s = getFrameElement(F);
		return d.concat(F, F.visualViewport || [], isOverflowElement(w) ? w : [], s && C ? getOverflowAncestors(s) : []);
	}
	return d.concat(w, getOverflowAncestors(w, [], C));
}
function getFrameElement(s) {
	return s.parent && Object.getPrototypeOf(s.parent) ? s.frameElement : null;
}
function getCssDimensions(s) {
	let d = getComputedStyle$2(s), C = parseFloat(d.width) || 0, w = parseFloat(d.height) || 0, k = isHTMLElement$1(s), F = k ? s.offsetWidth : C, L = k ? s.offsetHeight : w, V = round(C) !== F || round(w) !== L;
	return V && (C = F, w = L), {
		width: C,
		height: w,
		$: V
	};
}
function unwrapElement(s) {
	return isElement(s) ? s : s.contextElement;
}
function getScale(s) {
	let d = unwrapElement(s);
	if (!isHTMLElement$1(d)) return createCoords(1);
	let C = d.getBoundingClientRect(), { width: w, height: k, $: F } = getCssDimensions(d), L = (F ? round(C.width) : C.width) / w, V = (F ? round(C.height) : C.height) / k;
	return (!L || !Number.isFinite(L)) && (L = 1), (!V || !Number.isFinite(V)) && (V = 1), {
		x: L,
		y: V
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
function shouldAddVisualOffsets(s, d, C) {
	return d === void 0 && (d = !1), !C || d && C !== getWindow(s) ? !1 : d;
}
function getBoundingClientRect(s, d, C, w) {
	d === void 0 && (d = !1), C === void 0 && (C = !1);
	let k = s.getBoundingClientRect(), F = unwrapElement(s), L = createCoords(1);
	d && (w ? isElement(w) && (L = getScale(w)) : L = getScale(s));
	let V = shouldAddVisualOffsets(F, C, w) ? getVisualOffsets(F) : createCoords(0), U = (k.left + V.x) / L.x, K = (k.top + V.y) / L.y, q = k.width / L.x, J = k.height / L.y;
	if (F) {
		let s = getWindow(F), d = w && isElement(w) ? getWindow(w) : w, C = s, k = getFrameElement(C);
		for (; k && w && d !== C;) {
			let s = getScale(k), d = k.getBoundingClientRect(), w = getComputedStyle$2(k), F = d.left + (k.clientLeft + parseFloat(w.paddingLeft)) * s.x, L = d.top + (k.clientTop + parseFloat(w.paddingTop)) * s.y;
			U *= s.x, K *= s.y, q *= s.x, J *= s.y, U += F, K += L, C = getWindow(k), k = getFrameElement(C);
		}
	}
	return rectToClientRect({
		width: q,
		height: J,
		x: U,
		y: K
	});
}
function getWindowScrollBarX(s, d) {
	let C = getNodeScroll(s).scrollLeft;
	return d ? d.left + C : getBoundingClientRect(getDocumentElement(s)).left + C;
}
function getHTMLOffset(s, d) {
	let C = s.getBoundingClientRect();
	return {
		x: C.left + d.scrollLeft - getWindowScrollBarX(s, C),
		y: C.top + d.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(s) {
	let { elements: d, rect: C, offsetParent: w, strategy: k } = s, F = k === "fixed", L = getDocumentElement(w), V = d ? isTopLayer(d.floating) : !1;
	if (w === L || V && F) return C;
	let U = {
		scrollLeft: 0,
		scrollTop: 0
	}, K = createCoords(1), q = createCoords(0), J = isHTMLElement$1(w);
	if ((J || !J && !F) && ((getNodeName(w) !== "body" || isOverflowElement(L)) && (U = getNodeScroll(w)), isHTMLElement$1(w))) {
		let s = getBoundingClientRect(w);
		K = getScale(w), q.x = s.x + w.clientLeft, q.y = s.y + w.clientTop;
	}
	let X = L && !J && !F ? getHTMLOffset(L, U) : createCoords(0);
	return {
		width: C.width * K.x,
		height: C.height * K.y,
		x: C.x * K.x - U.scrollLeft * K.x + q.x + X.x,
		y: C.y * K.y - U.scrollTop * K.y + q.y + X.y
	};
}
function getClientRects(s) {
	return Array.from(s.getClientRects());
}
function getDocumentRect(s) {
	let d = getDocumentElement(s), C = getNodeScroll(s), w = s.ownerDocument.body, k = max(d.scrollWidth, d.clientWidth, w.scrollWidth, w.clientWidth), F = max(d.scrollHeight, d.clientHeight, w.scrollHeight, w.clientHeight), L = -C.scrollLeft + getWindowScrollBarX(s), V = -C.scrollTop;
	return getComputedStyle$2(w).direction === "rtl" && (L += max(d.clientWidth, w.clientWidth) - k), {
		width: k,
		height: F,
		x: L,
		y: V
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(s, d) {
	let C = getWindow(s), w = getDocumentElement(s), k = C.visualViewport, F = w.clientWidth, L = w.clientHeight, V = 0, U = 0;
	if (k) {
		F = k.width, L = k.height;
		let s = isWebKit();
		(!s || s && d === "fixed") && (V = k.offsetLeft, U = k.offsetTop);
	}
	let K = getWindowScrollBarX(w);
	if (K <= 0) {
		let s = w.ownerDocument, d = s.body, C = getComputedStyle(d), k = s.compatMode === "CSS1Compat" && parseFloat(C.marginLeft) + parseFloat(C.marginRight) || 0, L = Math.abs(w.clientWidth - d.clientWidth - k);
		L <= SCROLLBAR_MAX && (F -= L);
	} else K <= SCROLLBAR_MAX && (F += K);
	return {
		width: F,
		height: L,
		x: V,
		y: U
	};
}
var absoluteOrFixed = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function getInnerBoundingClientRect(s, d) {
	let C = getBoundingClientRect(s, !0, d === "fixed"), w = C.top + s.clientTop, k = C.left + s.clientLeft, F = isHTMLElement$1(s) ? getScale(s) : createCoords(1);
	return {
		width: s.clientWidth * F.x,
		height: s.clientHeight * F.y,
		x: k * F.x,
		y: w * F.y
	};
}
function getClientRectFromClippingAncestor(s, d, C) {
	let w;
	if (d === "viewport") w = getViewportRect(s, C);
	else if (d === "document") w = getDocumentRect(getDocumentElement(s));
	else if (isElement(d)) w = getInnerBoundingClientRect(d, C);
	else {
		let C = getVisualOffsets(s);
		w = {
			x: d.x - C.x,
			y: d.y - C.y,
			width: d.width,
			height: d.height
		};
	}
	return rectToClientRect(w);
}
function hasFixedPositionAncestor(s, d) {
	let C = getParentNode(s);
	return C === d || !isElement(C) || isLastTraversableNode(C) ? !1 : getComputedStyle$2(C).position === "fixed" || hasFixedPositionAncestor(C, d);
}
function getClippingElementAncestors(s, d) {
	let C = d.get(s);
	if (C) return C;
	let w = getOverflowAncestors(s, [], !1).filter((s) => isElement(s) && getNodeName(s) !== "body"), k = null, F = getComputedStyle$2(s).position === "fixed", L = F ? getParentNode(s) : s;
	for (; isElement(L) && !isLastTraversableNode(L);) {
		let d = getComputedStyle$2(L), C = isContainingBlock(L);
		!C && d.position === "fixed" && (k = null), (F ? !C && !k : !C && d.position === "static" && k && absoluteOrFixed.has(k.position) || isOverflowElement(L) && !C && hasFixedPositionAncestor(s, L)) ? w = w.filter((s) => s !== L) : k = d, L = getParentNode(L);
	}
	return d.set(s, w), w;
}
function getClippingRect(s) {
	let { element: d, boundary: C, rootBoundary: w, strategy: k } = s, F = [...C === "clippingAncestors" ? isTopLayer(d) ? [] : getClippingElementAncestors(d, this._c) : [].concat(C), w], L = F[0], V = F.reduce((s, C) => {
		let w = getClientRectFromClippingAncestor(d, C, k);
		return s.top = max(w.top, s.top), s.right = min(w.right, s.right), s.bottom = min(w.bottom, s.bottom), s.left = max(w.left, s.left), s;
	}, getClientRectFromClippingAncestor(d, L, k));
	return {
		width: V.right - V.left,
		height: V.bottom - V.top,
		x: V.left,
		y: V.top
	};
}
function getDimensions(s) {
	let { width: d, height: C } = getCssDimensions(s);
	return {
		width: d,
		height: C
	};
}
function getRectRelativeToOffsetParent(s, d, C) {
	let w = isHTMLElement$1(d), k = getDocumentElement(d), F = C === "fixed", L = getBoundingClientRect(s, !0, F, d), V = {
		scrollLeft: 0,
		scrollTop: 0
	}, U = createCoords(0);
	function K() {
		U.x = getWindowScrollBarX(k);
	}
	if (w || !w && !F) if ((getNodeName(d) !== "body" || isOverflowElement(k)) && (V = getNodeScroll(d)), w) {
		let s = getBoundingClientRect(d, !0, F, d);
		U.x = s.x + d.clientLeft, U.y = s.y + d.clientTop;
	} else k && K();
	F && !w && k && K();
	let q = k && !w && !F ? getHTMLOffset(k, V) : createCoords(0);
	return {
		x: L.left + V.scrollLeft - U.x - q.x,
		y: L.top + V.scrollTop - U.y - q.y,
		width: L.width,
		height: L.height
	};
}
function isStaticPositioned(s) {
	return getComputedStyle$2(s).position === "static";
}
function getTrueOffsetParent(s, d) {
	if (!isHTMLElement$1(s) || getComputedStyle$2(s).position === "fixed") return null;
	if (d) return d(s);
	let C = s.offsetParent;
	return getDocumentElement(s) === C && (C = C.ownerDocument.body), C;
}
function getOffsetParent(s, d) {
	let C = getWindow(s);
	if (isTopLayer(s)) return C;
	if (!isHTMLElement$1(s)) {
		let d = getParentNode(s);
		for (; d && !isLastTraversableNode(d);) {
			if (isElement(d) && !isStaticPositioned(d)) return d;
			d = getParentNode(d);
		}
		return C;
	}
	let w = getTrueOffsetParent(s, d);
	for (; w && isTableElement(w) && isStaticPositioned(w);) w = getTrueOffsetParent(w, d);
	return w && isLastTraversableNode(w) && isStaticPositioned(w) && !isContainingBlock(w) ? C : w || getContainingBlock(s) || C;
}
var getElementRects = async function(s) {
	let d = this.getOffsetParent || getOffsetParent, C = this.getDimensions, w = await C(s.floating);
	return {
		reference: getRectRelativeToOffsetParent(s.reference, await d(s.floating), s.strategy),
		floating: {
			x: 0,
			y: 0,
			width: w.width,
			height: w.height
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
	let C = null, w, k = getDocumentElement(s);
	function F() {
		var s;
		clearTimeout(w), (s = C) == null || s.disconnect(), C = null;
	}
	function L(V, U) {
		V === void 0 && (V = !1), U === void 0 && (U = 1), F();
		let K = s.getBoundingClientRect(), { left: q, top: J, width: X, height: $ } = K;
		if (V || d(), !X || !$) return;
		let PD = floor(J), FD = floor(k.clientWidth - (q + X)), ID = floor(k.clientHeight - (J + $)), LD = floor(q), RD = {
			rootMargin: -PD + "px " + -FD + "px " + -ID + "px " + -LD + "px",
			threshold: max(0, min(1, U)) || 1
		}, zD = !0;
		function BD(d) {
			let C = d[0].intersectionRatio;
			if (C !== U) {
				if (!zD) return L();
				C ? L(!1, C) : w = setTimeout(() => {
					L(!1, 1e-7);
				}, 1e3);
			}
			C === 1 && !rectsAreEqual(K, s.getBoundingClientRect()) && L(), zD = !1;
		}
		try {
			C = new IntersectionObserver(BD, {
				...RD,
				root: k.ownerDocument
			});
		} catch {
			C = new IntersectionObserver(BD, RD);
		}
		C.observe(s);
	}
	return L(!0), F;
}
function autoUpdate(s, d, C, w) {
	w === void 0 && (w = {});
	let { ancestorScroll: k = !0, ancestorResize: F = !0, elementResize: L = typeof ResizeObserver == "function", layoutShift: V = typeof IntersectionObserver == "function", animationFrame: U = !1 } = w, K = unwrapElement(s), q = k || F ? [...K ? getOverflowAncestors(K) : [], ...getOverflowAncestors(d)] : [];
	q.forEach((s) => {
		k && s.addEventListener("scroll", C, { passive: !0 }), F && s.addEventListener("resize", C);
	});
	let J = K && V ? observeMove(K, C) : null, X = -1, $ = null;
	L && ($ = new ResizeObserver((s) => {
		let [w] = s;
		w && w.target === K && $ && ($.unobserve(d), cancelAnimationFrame(X), X = requestAnimationFrame(() => {
			var s;
			(s = $) == null || s.observe(d);
		})), C();
	}), K && !U && $.observe(K), $.observe(d));
	let PD, FD = U ? getBoundingClientRect(s) : null;
	U && ID();
	function ID() {
		let d = getBoundingClientRect(s);
		FD && !rectsAreEqual(FD, d) && C(), FD = d, PD = requestAnimationFrame(ID);
	}
	return C(), () => {
		var s;
		q.forEach((s) => {
			k && s.removeEventListener("scroll", C), F && s.removeEventListener("resize", C);
		}), J?.(), (s = $) == null || s.disconnect(), $ = null, U && cancelAnimationFrame(PD);
	};
}
var offset$1 = offset$2, shift$1 = shift$2, flip$1 = flip$2, size$1 = size$2, hide$1 = hide$2, arrow$1 = arrow$2, limitShift$1 = limitShift$2, computePosition = (s, d, C) => {
	let w = /* @__PURE__ */ new Map(), k = {
		platform,
		...C
	}, F = {
		...k.platform,
		_c: w
	};
	return computePosition$1(s, d, {
		...k,
		platform: F
	});
}, index = typeof document < "u" ? useLayoutEffect : function() {};
function deepEqual(s, d) {
	if (s === d) return !0;
	if (typeof s != typeof d) return !1;
	if (typeof s == "function" && s.toString() === d.toString()) return !0;
	let C, w, k;
	if (s && d && typeof s == "object") {
		if (Array.isArray(s)) {
			if (C = s.length, C !== d.length) return !1;
			for (w = C; w-- !== 0;) if (!deepEqual(s[w], d[w])) return !1;
			return !0;
		}
		if (k = Object.keys(s), C = k.length, C !== Object.keys(d).length) return !1;
		for (w = C; w-- !== 0;) if (!{}.hasOwnProperty.call(d, k[w])) return !1;
		for (w = C; w-- !== 0;) {
			let C = k[w];
			if (!(C === "_owner" && s.$$typeof) && !deepEqual(s[C], d[C])) return !1;
		}
		return !0;
	}
	return s !== s && d !== d;
}
function getDPR(s) {
	return typeof window > "u" ? 1 : (s.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(s, d) {
	let C = getDPR(s);
	return Math.round(d * C) / C;
}
function useLatestRef(d) {
	let C = React$1.useRef(d);
	return index(() => {
		C.current = d;
	}), C;
}
function useFloating(d) {
	d === void 0 && (d = {});
	let { placement: C = "bottom", strategy: w = "absolute", middleware: k = [], platform: F, elements: { reference: L, floating: V } = {}, transform: U = !0, whileElementsMounted: K, open: q } = d, [J, X] = React$1.useState({
		x: 0,
		y: 0,
		strategy: w,
		placement: C,
		middlewareData: {},
		isPositioned: !1
	}), [$, PD] = React$1.useState(k);
	deepEqual($, k) || PD(k);
	let [FD, ID] = React$1.useState(null), [LD, RD] = React$1.useState(null), BD = React$1.useCallback((s) => {
		s !== WD.current && (WD.current = s, ID(s));
	}, []), VD = React$1.useCallback((s) => {
		s !== GD.current && (GD.current = s, RD(s));
	}, []), HD = L || FD, UD = V || LD, WD = React$1.useRef(null), GD = React$1.useRef(null), KD = React$1.useRef(J), qD = K != null, JD = useLatestRef(K), YD = useLatestRef(F), XD = useLatestRef(q), ZD = React$1.useCallback(() => {
		if (!WD.current || !GD.current) return;
		let s = {
			placement: C,
			strategy: w,
			middleware: $
		};
		YD.current && (s.platform = YD.current), computePosition(WD.current, GD.current, s).then((s) => {
			let d = {
				...s,
				isPositioned: XD.current !== !1
			};
			QD.current && !deepEqual(KD.current, d) && (KD.current = d, ReactDOM$1.flushSync(() => {
				X(d);
			}));
		});
	}, [
		$,
		C,
		w,
		YD,
		XD
	]);
	index(() => {
		q === !1 && KD.current.isPositioned && (KD.current.isPositioned = !1, X((s) => ({
			...s,
			isPositioned: !1
		})));
	}, [q]);
	let QD = React$1.useRef(!1);
	index(() => (QD.current = !0, () => {
		QD.current = !1;
	}), []), index(() => {
		if (HD && (WD.current = HD), UD && (GD.current = UD), HD && UD) {
			if (JD.current) return JD.current(HD, UD, ZD);
			ZD();
		}
	}, [
		HD,
		UD,
		ZD,
		JD,
		qD
	]);
	let $D = React$1.useMemo(() => ({
		reference: WD,
		floating: GD,
		setReference: BD,
		setFloating: VD
	}), [BD, VD]), eO = React$1.useMemo(() => ({
		reference: HD,
		floating: UD
	}), [HD, UD]), tO = React$1.useMemo(() => {
		let s = {
			position: w,
			left: 0,
			top: 0
		};
		if (!eO.floating) return s;
		let d = roundByDPR(eO.floating, J.x), C = roundByDPR(eO.floating, J.y);
		return U ? {
			...s,
			transform: "translate(" + d + "px, " + C + "px)",
			...getDPR(eO.floating) >= 1.5 && { willChange: "transform" }
		} : {
			position: w,
			left: d,
			top: C
		};
	}, [
		w,
		U,
		eO.floating,
		J.x,
		J.y
	]);
	return React$1.useMemo(() => ({
		...J,
		update: ZD,
		refs: $D,
		elements: eO,
		floatingStyles: tO
	}), [
		J,
		ZD,
		$D,
		eO,
		tO
	]);
}
var arrow$1$1 = (s) => {
	function d(s) {
		return {}.hasOwnProperty.call(s, "current");
	}
	return {
		name: "arrow",
		options: s,
		fn(C) {
			let { element: w, padding: k } = typeof s == "function" ? s(C) : s;
			return w && d(w) ? w.current == null ? {} : arrow$1({
				element: w.current,
				padding: k
			}).fn(C) : w ? arrow$1({
				element: w,
				padding: k
			}).fn(C) : {};
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
	let { children: C, width: w = 10, height: k = 5, ...F } = s;
	return /* @__PURE__ */ jsx(Primitive.svg, {
		...F,
		ref: d,
		width: w,
		height: k,
		viewBox: "0 0 30 10",
		preserveAspectRatio: "none",
		children: s.asChild ? C : /* @__PURE__ */ jsx("polygon", { points: "0,0 30,0 15,10" })
	});
});
Arrow$1.displayName = NAME;
var Root$2 = Arrow$1, POPPER_NAME = "Popper", [createPopperContext, createPopperScope] = createContextScope(POPPER_NAME), [PopperProvider, usePopperContext] = createPopperContext(POPPER_NAME), Popper = (d) => {
	let { __scopePopper: C, children: w } = d, [k, F] = React$1.useState(null);
	return /* @__PURE__ */ jsx(PopperProvider, {
		scope: C,
		anchor: k,
		onAnchorChange: F,
		children: w
	});
};
Popper.displayName = POPPER_NAME;
var ANCHOR_NAME$1 = "PopperAnchor", PopperAnchor = React$1.forwardRef((d, C) => {
	let { __scopePopper: w, virtualRef: k, ...F } = d, L = usePopperContext(ANCHOR_NAME$1, w), V = React$1.useRef(null), U = useComposedRefs(C, V), K = React$1.useRef(null);
	return React$1.useEffect(() => {
		let s = K.current;
		K.current = k?.current || V.current, s !== K.current && L.onAnchorChange(K.current);
	}), k ? null : /* @__PURE__ */ jsx(Primitive.div, {
		...F,
		ref: U
	});
});
PopperAnchor.displayName = ANCHOR_NAME$1;
var CONTENT_NAME$3 = "PopperContent", [PopperContentProvider, useContentContext] = createPopperContext(CONTENT_NAME$3), PopperContent = React$1.forwardRef((d, C) => {
	let { __scopePopper: w, side: k = "bottom", sideOffset: F = 0, align: L = "center", alignOffset: V = 0, arrowPadding: U = 0, avoidCollisions: K = !0, collisionBoundary: q = [], collisionPadding: J = 0, sticky: X = "partial", hideWhenDetached: $ = !1, updatePositionStrategy: PD = "optimized", onPlaced: FD, ...ID } = d, LD = usePopperContext(CONTENT_NAME$3, w), [RD, zD] = React$1.useState(null), BD = useComposedRefs(C, (s) => zD(s)), [VD, HD] = React$1.useState(null), UD = useSize(VD), GD = UD?.width ?? 0, KD = UD?.height ?? 0, qD = k + (L === "center" ? "" : "-" + L), JD = typeof J == "number" ? J : {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...J
	}, YD = Array.isArray(q) ? q : [q], XD = YD.length > 0, ZD = {
		padding: JD,
		boundary: YD.filter(isNotNull$2),
		altBoundary: XD
	}, { refs: QD, floatingStyles: $D, placement: eO, isPositioned: tO, middlewareData: nO } = useFloating({
		strategy: "fixed",
		placement: qD,
		whileElementsMounted: (...s) => autoUpdate(...s, { animationFrame: PD === "always" }),
		elements: { reference: LD.anchor },
		middleware: [
			offset({
				mainAxis: F + KD,
				alignmentAxis: V
			}),
			K && shift({
				mainAxis: !0,
				crossAxis: !1,
				limiter: X === "partial" ? limitShift() : void 0,
				...ZD
			}),
			K && flip({ ...ZD }),
			size({
				...ZD,
				apply: ({ elements: s, rects: d, availableWidth: C, availableHeight: w }) => {
					let { width: k, height: F } = d.reference, L = s.floating.style;
					L.setProperty("--radix-popper-available-width", `${C}px`), L.setProperty("--radix-popper-available-height", `${w}px`), L.setProperty("--radix-popper-anchor-width", `${k}px`), L.setProperty("--radix-popper-anchor-height", `${F}px`);
				}
			}),
			VD && arrow({
				element: VD,
				padding: U
			}),
			transformOrigin({
				arrowWidth: GD,
				arrowHeight: KD
			}),
			$ && hide({
				strategy: "referenceHidden",
				...ZD
			})
		]
	}), [rO, iO] = getSideAndAlignFromPlacement(eO), aO = useCallbackRef(FD);
	useLayoutEffect2(() => {
		tO && aO?.();
	}, [tO, aO]);
	let oO = nO.arrow?.x, sO = nO.arrow?.y, cO = nO.arrow?.centerOffset !== 0, [lO, uO] = React$1.useState();
	return useLayoutEffect2(() => {
		RD && uO(window.getComputedStyle(RD).zIndex);
	}, [RD]), /* @__PURE__ */ jsx("div", {
		ref: QD.setFloating,
		"data-radix-popper-content-wrapper": "",
		style: {
			...$D,
			transform: tO ? $D.transform : "translate(0, -200%)",
			minWidth: "max-content",
			zIndex: lO,
			"--radix-popper-transform-origin": [nO.transformOrigin?.x, nO.transformOrigin?.y].join(" "),
			...nO.hide?.referenceHidden && {
				visibility: "hidden",
				pointerEvents: "none"
			}
		},
		dir: d.dir,
		children: /* @__PURE__ */ jsx(PopperContentProvider, {
			scope: w,
			placedSide: rO,
			onArrowChange: HD,
			arrowX: oO,
			arrowY: sO,
			shouldHideArrow: cO,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				"data-side": rO,
				"data-align": iO,
				...ID,
				ref: BD,
				style: {
					...ID.style,
					animation: tO ? void 0 : "none"
				}
			})
		})
	});
});
PopperContent.displayName = CONTENT_NAME$3;
var ARROW_NAME$3 = "PopperArrow", OPPOSITE_SIDE = {
	top: "bottom",
	right: "left",
	bottom: "top",
	left: "right"
}, PopperArrow = React$1.forwardRef(function(s, d) {
	let { __scopePopper: C, ...w } = s, k = useContentContext(ARROW_NAME$3, C), F = OPPOSITE_SIDE[k.placedSide];
	return /* @__PURE__ */ jsx("span", {
		ref: k.onArrowChange,
		style: {
			position: "absolute",
			left: k.arrowX,
			top: k.arrowY,
			[F]: 0,
			transformOrigin: {
				top: "",
				right: "0 0",
				bottom: "center 0",
				left: "100% 0"
			}[k.placedSide],
			transform: {
				top: "translateY(100%)",
				right: "translateY(50%) rotate(90deg) translateX(-50%)",
				bottom: "rotate(180deg)",
				left: "translateY(50%) rotate(-90deg) translateX(50%)"
			}[k.placedSide],
			visibility: k.shouldHideArrow ? "hidden" : void 0
		},
		children: /* @__PURE__ */ jsx(Root$2, {
			...w,
			ref: d,
			style: {
				...w.style,
				display: "block"
			}
		})
	});
});
PopperArrow.displayName = ARROW_NAME$3;
function isNotNull$2(s) {
	return s !== null;
}
var transformOrigin = (s) => ({
	name: "transformOrigin",
	options: s,
	fn(d) {
		let { placement: C, rects: w, middlewareData: k } = d, F = k.arrow?.centerOffset !== 0, L = F ? 0 : s.arrowWidth, V = F ? 0 : s.arrowHeight, [U, K] = getSideAndAlignFromPlacement(C), q = {
			start: "0%",
			center: "50%",
			end: "100%"
		}[K], J = (k.arrow?.x ?? 0) + L / 2, X = (k.arrow?.y ?? 0) + V / 2, $ = "", PD = "";
		return U === "bottom" ? ($ = F ? q : `${J}px`, PD = `${-V}px`) : U === "top" ? ($ = F ? q : `${J}px`, PD = `${w.floating.height + V}px`) : U === "right" ? ($ = `${-V}px`, PD = F ? q : `${X}px`) : U === "left" && ($ = `${w.floating.width + V}px`, PD = F ? q : `${X}px`), { data: {
			x: $,
			y: PD
		} };
	}
});
function getSideAndAlignFromPlacement(s) {
	let [d, C = "center"] = s.split("-");
	return [d, C];
}
var Root2$1 = Popper, Anchor = PopperAnchor, Content = PopperContent, Arrow = PopperArrow, ENTRY_FOCUS = "rovingFocusGroup.onEntryFocus", EVENT_OPTIONS = {
	bubbles: !1,
	cancelable: !0
}, GROUP_NAME$2 = "RovingFocusGroup", [Collection$1, useCollection$1, createCollectionScope$1] = createCollection(GROUP_NAME$2), [createRovingFocusGroupContext, createRovingFocusGroupScope] = createContextScope(GROUP_NAME$2, [createCollectionScope$1]), [RovingFocusProvider, useRovingFocusContext] = createRovingFocusGroupContext(GROUP_NAME$2), RovingFocusGroup = React$1.forwardRef((s, d) => /* @__PURE__ */ jsx(Collection$1.Provider, {
	scope: s.__scopeRovingFocusGroup,
	children: /* @__PURE__ */ jsx(Collection$1.Slot, {
		scope: s.__scopeRovingFocusGroup,
		children: /* @__PURE__ */ jsx(RovingFocusGroupImpl, {
			...s,
			ref: d
		})
	})
}));
RovingFocusGroup.displayName = GROUP_NAME$2;
var RovingFocusGroupImpl = React$1.forwardRef((d, C) => {
	let { __scopeRovingFocusGroup: w, orientation: k, loop: F = !1, dir: L, currentTabStopId: V, defaultCurrentTabStopId: U, onCurrentTabStopIdChange: K, onEntryFocus: q, preventScrollOnEntryFocus: J = !1, ...X } = d, $ = React$1.useRef(null), PD = useComposedRefs(C, $), FD = useDirection(L), [ID, LD] = useControllableState({
		prop: V,
		defaultProp: U ?? null,
		onChange: K,
		caller: GROUP_NAME$2
	}), [RD, zD] = React$1.useState(!1), BD = useCallbackRef(q), VD = useCollection$1(w), HD = React$1.useRef(!1), [UD, GD] = React$1.useState(0);
	return React$1.useEffect(() => {
		let s = $.current;
		if (s) return s.addEventListener(ENTRY_FOCUS, BD), () => s.removeEventListener(ENTRY_FOCUS, BD);
	}, [BD]), /* @__PURE__ */ jsx(RovingFocusProvider, {
		scope: w,
		orientation: k,
		dir: FD,
		loop: F,
		currentTabStopId: ID,
		onItemFocus: React$1.useCallback((s) => LD(s), [LD]),
		onItemShiftTab: React$1.useCallback(() => zD(!0), []),
		onFocusableItemAdd: React$1.useCallback(() => GD((s) => s + 1), []),
		onFocusableItemRemove: React$1.useCallback(() => GD((s) => s - 1), []),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			tabIndex: RD || UD === 0 ? -1 : 0,
			"data-orientation": k,
			...X,
			ref: PD,
			style: {
				outline: "none",
				...d.style
			},
			onMouseDown: composeEventHandlers(d.onMouseDown, () => {
				HD.current = !0;
			}),
			onFocus: composeEventHandlers(d.onFocus, (s) => {
				let d = !HD.current;
				if (s.target === s.currentTarget && d && !RD) {
					let d = new CustomEvent(ENTRY_FOCUS, EVENT_OPTIONS);
					if (s.currentTarget.dispatchEvent(d), !d.defaultPrevented) {
						let s = VD().filter((s) => s.focusable);
						focusFirst$1([
							s.find((s) => s.active),
							s.find((s) => s.id === ID),
							...s
						].filter(Boolean).map((s) => s.ref.current), J);
					}
				}
				HD.current = !1;
			}),
			onBlur: composeEventHandlers(d.onBlur, () => zD(!1))
		})
	});
}), ITEM_NAME$2 = "RovingFocusGroupItem", RovingFocusGroupItem = React$1.forwardRef((d, C) => {
	let { __scopeRovingFocusGroup: w, focusable: k = !0, active: F = !1, tabStopId: L, children: V, ...U } = d, K = useId$1(), q = L || K, J = useRovingFocusContext(ITEM_NAME$2, w), X = J.currentTabStopId === q, $ = useCollection$1(w), { onFocusableItemAdd: PD, onFocusableItemRemove: FD, currentTabStopId: ID } = J;
	return React$1.useEffect(() => {
		if (k) return PD(), () => FD();
	}, [
		k,
		PD,
		FD
	]), /* @__PURE__ */ jsx(Collection$1.ItemSlot, {
		scope: w,
		id: q,
		focusable: k,
		active: F,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			tabIndex: X ? 0 : -1,
			"data-orientation": J.orientation,
			...U,
			ref: C,
			onMouseDown: composeEventHandlers(d.onMouseDown, (s) => {
				k ? J.onItemFocus(q) : s.preventDefault();
			}),
			onFocus: composeEventHandlers(d.onFocus, () => J.onItemFocus(q)),
			onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
				if (s.key === "Tab" && s.shiftKey) {
					J.onItemShiftTab();
					return;
				}
				if (s.target !== s.currentTarget) return;
				let d = getFocusIntent(s, J.orientation, J.dir);
				if (d !== void 0) {
					if (s.metaKey || s.ctrlKey || s.altKey || s.shiftKey) return;
					s.preventDefault();
					let C = $().filter((s) => s.focusable).map((s) => s.ref.current);
					if (d === "last") C.reverse();
					else if (d === "prev" || d === "next") {
						d === "prev" && C.reverse();
						let w = C.indexOf(s.currentTarget);
						C = J.loop ? wrapArray$1(C, w + 1) : C.slice(w + 1);
					}
					setTimeout(() => focusFirst$1(C));
				}
			}),
			children: typeof V == "function" ? V({
				isCurrentTabStop: X,
				hasTabStop: ID != null
			}) : V
		})
	});
});
RovingFocusGroupItem.displayName = ITEM_NAME$2;
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
function getFocusIntent(s, d, C) {
	let w = getDirectionAwareKey(s.key, C);
	if (!(d === "vertical" && ["ArrowLeft", "ArrowRight"].includes(w)) && !(d === "horizontal" && ["ArrowUp", "ArrowDown"].includes(w))) return MAP_KEY_TO_FOCUS_INTENT[w];
}
function focusFirst$1(s, d = !1) {
	let C = document.activeElement;
	for (let w of s) if (w === C || (w.focus({ preventScroll: d }), document.activeElement !== C)) return;
}
function wrapArray$1(s, d) {
	return s.map((C, w) => s[(d + w) % s.length]);
}
var Root$1 = RovingFocusGroup, Item = RovingFocusGroupItem, SELECTION_KEYS = ["Enter", " "], FIRST_KEYS = [
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
]), usePopperScope$1 = createPopperScope(), useRovingFocusGroupScope = createRovingFocusGroupScope(), [MenuProvider, useMenuContext] = createMenuContext(MENU_NAME), [MenuRootProvider, useMenuRootContext] = createMenuContext(MENU_NAME), Menu = (d) => {
	let { __scopeMenu: C, open: w = !1, children: k, dir: F, onOpenChange: L, modal: V = !0 } = d, U = usePopperScope$1(C), [K, q] = React$1.useState(null), J = React$1.useRef(!1), X = useCallbackRef(L), $ = useDirection(F);
	return React$1.useEffect(() => {
		let s = () => {
			J.current = !0, document.addEventListener("pointerdown", d, {
				capture: !0,
				once: !0
			}), document.addEventListener("pointermove", d, {
				capture: !0,
				once: !0
			});
		}, d = () => J.current = !1;
		return document.addEventListener("keydown", s, { capture: !0 }), () => {
			document.removeEventListener("keydown", s, { capture: !0 }), document.removeEventListener("pointerdown", d, { capture: !0 }), document.removeEventListener("pointermove", d, { capture: !0 });
		};
	}, []), /* @__PURE__ */ jsx(Root2$1, {
		...U,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: C,
			open: w,
			onOpenChange: X,
			content: K,
			onContentChange: q,
			children: /* @__PURE__ */ jsx(MenuRootProvider, {
				scope: C,
				onClose: React$1.useCallback(() => X(!1), [X]),
				isUsingKeyboardRef: J,
				dir: $,
				modal: V,
				children: k
			})
		})
	});
};
Menu.displayName = MENU_NAME;
var ANCHOR_NAME = "MenuAnchor", MenuAnchor = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Anchor, {
		...usePopperScope$1(C),
		...w,
		ref: d
	});
});
MenuAnchor.displayName = ANCHOR_NAME;
var PORTAL_NAME$2 = "MenuPortal", [PortalProvider$1, usePortalContext$1] = createMenuContext(PORTAL_NAME$2, { forceMount: void 0 }), MenuPortal = (s) => {
	let { __scopeMenu: d, forceMount: C, children: w, container: k } = s, F = useMenuContext(PORTAL_NAME$2, d);
	return /* @__PURE__ */ jsx(PortalProvider$1, {
		scope: d,
		forceMount: C,
		children: /* @__PURE__ */ jsx(Presence, {
			present: C || F.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: k,
				children: w
			})
		})
	});
};
MenuPortal.displayName = PORTAL_NAME$2;
var CONTENT_NAME$2 = "MenuContent", [MenuContentProvider, useMenuContentContext] = createMenuContext(CONTENT_NAME$2), MenuContent = React$1.forwardRef((s, d) => {
	let C = usePortalContext$1(CONTENT_NAME$2, s.__scopeMenu), { forceMount: w = C.forceMount, ...k } = s, F = useMenuContext(CONTENT_NAME$2, s.__scopeMenu), L = useMenuRootContext(CONTENT_NAME$2, s.__scopeMenu);
	return /* @__PURE__ */ jsx(Collection.Provider, {
		scope: s.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: w || F.open,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: s.__scopeMenu,
				children: L.modal ? /* @__PURE__ */ jsx(MenuRootContentModal, {
					...k,
					ref: d
				}) : /* @__PURE__ */ jsx(MenuRootContentNonModal, {
					...k,
					ref: d
				})
			})
		})
	});
}), MenuRootContentModal = React$1.forwardRef((d, C) => {
	let w = useMenuContext(CONTENT_NAME$2, d.__scopeMenu), k = React$1.useRef(null), F = useComposedRefs(C, k);
	return React$1.useEffect(() => {
		let s = k.current;
		if (s) return hideOthers(s);
	}, []), /* @__PURE__ */ jsx(MenuContentImpl, {
		...d,
		ref: F,
		trapFocus: w.open,
		disableOutsidePointerEvents: w.open,
		disableOutsideScroll: !0,
		onFocusOutside: composeEventHandlers(d.onFocusOutside, (s) => s.preventDefault(), { checkForDefaultPrevented: !1 }),
		onDismiss: () => w.onOpenChange(!1)
	});
}), MenuRootContentNonModal = React$1.forwardRef((s, d) => {
	let C = useMenuContext(CONTENT_NAME$2, s.__scopeMenu);
	return /* @__PURE__ */ jsx(MenuContentImpl, {
		...s,
		ref: d,
		trapFocus: !1,
		disableOutsidePointerEvents: !1,
		disableOutsideScroll: !1,
		onDismiss: () => C.onOpenChange(!1)
	});
}), Slot = /* @__PURE__ */ createSlot("MenuContent.ScrollLock"), MenuContentImpl = React$1.forwardRef((d, C) => {
	let { __scopeMenu: w, loop: k = !1, trapFocus: F, onOpenAutoFocus: L, onCloseAutoFocus: V, disableOutsidePointerEvents: U, onEntryFocus: K, onEscapeKeyDown: q, onPointerDownOutside: J, onFocusOutside: X, onInteractOutside: $, onDismiss: PD, disableOutsideScroll: FD, ...ID } = d, LD = useMenuContext(CONTENT_NAME$2, w), RD = useMenuRootContext(CONTENT_NAME$2, w), zD = usePopperScope$1(w), BD = useRovingFocusGroupScope(w), VD = useCollection(w), [HD, UD] = React$1.useState(null), GD = React$1.useRef(null), KD = useComposedRefs(C, GD, LD.onContentChange), qD = React$1.useRef(0), JD = React$1.useRef(""), YD = React$1.useRef(0), XD = React$1.useRef(null), ZD = React$1.useRef("right"), QD = React$1.useRef(0), $D = FD ? Combination_default : React$1.Fragment, eO = FD ? {
		as: Slot,
		allowPinchZoom: !0
	} : void 0, tO = (s) => {
		let d = JD.current + s, C = VD().filter((s) => !s.disabled), w = document.activeElement, k = C.find((s) => s.ref.current === w)?.textValue, F = getNextMatch(C.map((s) => s.textValue), d, k), L = C.find((s) => s.textValue === F)?.ref.current;
		(function s(d) {
			JD.current = d, window.clearTimeout(qD.current), d !== "" && (qD.current = window.setTimeout(() => s(""), 1e3));
		})(d), L && setTimeout(() => L.focus());
	};
	React$1.useEffect(() => () => window.clearTimeout(qD.current), []), useFocusGuards();
	let nO = React$1.useCallback((s) => ZD.current === XD.current?.side && isPointerInGraceArea(s, XD.current?.area), []);
	return /* @__PURE__ */ jsx(MenuContentProvider, {
		scope: w,
		searchRef: JD,
		onItemEnter: React$1.useCallback((s) => {
			nO(s) && s.preventDefault();
		}, [nO]),
		onItemLeave: React$1.useCallback((s) => {
			nO(s) || (GD.current?.focus(), UD(null));
		}, [nO]),
		onTriggerLeave: React$1.useCallback((s) => {
			nO(s) && s.preventDefault();
		}, [nO]),
		pointerGraceTimerRef: YD,
		onPointerGraceIntentChange: React$1.useCallback((s) => {
			XD.current = s;
		}, []),
		children: /* @__PURE__ */ jsx($D, {
			...eO,
			children: /* @__PURE__ */ jsx(FocusScope, {
				asChild: !0,
				trapped: F,
				onMountAutoFocus: composeEventHandlers(L, (s) => {
					s.preventDefault(), GD.current?.focus({ preventScroll: !0 });
				}),
				onUnmountAutoFocus: V,
				children: /* @__PURE__ */ jsx(DismissableLayer, {
					asChild: !0,
					disableOutsidePointerEvents: U,
					onEscapeKeyDown: q,
					onPointerDownOutside: J,
					onFocusOutside: X,
					onInteractOutside: $,
					onDismiss: PD,
					children: /* @__PURE__ */ jsx(Root$1, {
						asChild: !0,
						...BD,
						dir: RD.dir,
						orientation: "vertical",
						loop: k,
						currentTabStopId: HD,
						onCurrentTabStopIdChange: UD,
						onEntryFocus: composeEventHandlers(K, (s) => {
							RD.isUsingKeyboardRef.current || s.preventDefault();
						}),
						preventScrollOnEntryFocus: !0,
						children: /* @__PURE__ */ jsx(Content, {
							role: "menu",
							"aria-orientation": "vertical",
							"data-state": getOpenState(LD.open),
							"data-radix-menu-content": "",
							dir: RD.dir,
							...zD,
							...ID,
							ref: KD,
							style: {
								outline: "none",
								...ID.style
							},
							onKeyDown: composeEventHandlers(ID.onKeyDown, (s) => {
								let d = s.target.closest("[data-radix-menu-content]") === s.currentTarget, C = s.ctrlKey || s.altKey || s.metaKey, w = s.key.length === 1;
								d && (s.key === "Tab" && s.preventDefault(), !C && w && tO(s.key));
								let k = GD.current;
								if (s.target !== k || !FIRST_LAST_KEYS.includes(s.key)) return;
								s.preventDefault();
								let F = VD().filter((s) => !s.disabled).map((s) => s.ref.current);
								LAST_KEYS.includes(s.key) && F.reverse(), focusFirst(F);
							}),
							onBlur: composeEventHandlers(d.onBlur, (s) => {
								s.currentTarget.contains(s.target) || (window.clearTimeout(qD.current), JD.current = "");
							}),
							onPointerMove: composeEventHandlers(d.onPointerMove, whenMouse((s) => {
								let d = s.target, C = QD.current !== s.clientX;
								s.currentTarget.contains(d) && C && (ZD.current = s.clientX > QD.current ? "right" : "left", QD.current = s.clientX);
							}))
						})
					})
				})
			})
		})
	});
});
MenuContent.displayName = CONTENT_NAME$2;
var GROUP_NAME$1 = "MenuGroup", MenuGroup = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "group",
		...w,
		ref: d
	});
});
MenuGroup.displayName = GROUP_NAME$1;
var LABEL_NAME$1 = "MenuLabel", MenuLabel = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		...w,
		ref: d
	});
});
MenuLabel.displayName = LABEL_NAME$1;
var ITEM_NAME$1 = "MenuItem", ITEM_SELECT = "menu.itemSelect", MenuItem$1 = React$1.forwardRef((d, C) => {
	let { disabled: w = !1, onSelect: k, ...F } = d, L = React$1.useRef(null), V = useMenuRootContext(ITEM_NAME$1, d.__scopeMenu), U = useMenuContentContext(ITEM_NAME$1, d.__scopeMenu), K = useComposedRefs(C, L), q = React$1.useRef(!1), J = () => {
		let s = L.current;
		if (!w && s) {
			let d = new CustomEvent(ITEM_SELECT, {
				bubbles: !0,
				cancelable: !0
			});
			s.addEventListener(ITEM_SELECT, (s) => k?.(s), { once: !0 }), dispatchDiscreteCustomEvent(s, d), d.defaultPrevented ? q.current = !1 : V.onClose();
		}
	};
	return /* @__PURE__ */ jsx(MenuItemImpl, {
		...F,
		ref: K,
		disabled: w,
		onClick: composeEventHandlers(d.onClick, J),
		onPointerDown: (s) => {
			d.onPointerDown?.(s), q.current = !0;
		},
		onPointerUp: composeEventHandlers(d.onPointerUp, (s) => {
			q.current || s.currentTarget?.click();
		}),
		onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
			let d = U.searchRef.current !== "";
			w || d && s.key === " " || SELECTION_KEYS.includes(s.key) && (s.currentTarget.click(), s.preventDefault());
		})
	});
});
MenuItem$1.displayName = ITEM_NAME$1;
var MenuItemImpl = React$1.forwardRef((d, C) => {
	let { __scopeMenu: w, disabled: k = !1, textValue: F, ...L } = d, V = useMenuContentContext(ITEM_NAME$1, w), U = useRovingFocusGroupScope(w), K = React$1.useRef(null), q = useComposedRefs(C, K), [J, X] = React$1.useState(!1), [$, PD] = React$1.useState("");
	return React$1.useEffect(() => {
		let s = K.current;
		s && PD((s.textContent ?? "").trim());
	}, [L.children]), /* @__PURE__ */ jsx(Collection.ItemSlot, {
		scope: w,
		disabled: k,
		textValue: F ?? $,
		children: /* @__PURE__ */ jsx(Item, {
			asChild: !0,
			...U,
			focusable: !k,
			children: /* @__PURE__ */ jsx(Primitive.div, {
				role: "menuitem",
				"data-highlighted": J ? "" : void 0,
				"aria-disabled": k || void 0,
				"data-disabled": k ? "" : void 0,
				...L,
				ref: q,
				onPointerMove: composeEventHandlers(d.onPointerMove, whenMouse((s) => {
					k ? V.onItemLeave(s) : (V.onItemEnter(s), s.defaultPrevented || s.currentTarget.focus({ preventScroll: !0 }));
				})),
				onPointerLeave: composeEventHandlers(d.onPointerLeave, whenMouse((s) => V.onItemLeave(s))),
				onFocus: composeEventHandlers(d.onFocus, () => X(!0)),
				onBlur: composeEventHandlers(d.onBlur, () => X(!1))
			})
		})
	});
}), CHECKBOX_ITEM_NAME$1 = "MenuCheckboxItem", MenuCheckboxItem = React$1.forwardRef((s, d) => {
	let { checked: C = !1, onCheckedChange: w, ...k } = s;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: s.__scopeMenu,
		checked: C,
		children: /* @__PURE__ */ jsx(MenuItem$1, {
			role: "menuitemcheckbox",
			"aria-checked": isIndeterminate(C) ? "mixed" : C,
			...k,
			ref: d,
			"data-state": getCheckedState(C),
			onSelect: composeEventHandlers(k.onSelect, () => w?.(isIndeterminate(C) ? !0 : !C), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME$1;
var RADIO_GROUP_NAME$1 = "MenuRadioGroup", [RadioGroupProvider, useRadioGroupContext] = createMenuContext(RADIO_GROUP_NAME$1, {
	value: void 0,
	onValueChange: () => {}
}), MenuRadioGroup = React$1.forwardRef((s, d) => {
	let { value: C, onValueChange: w, ...k } = s, F = useCallbackRef(w);
	return /* @__PURE__ */ jsx(RadioGroupProvider, {
		scope: s.__scopeMenu,
		value: C,
		onValueChange: F,
		children: /* @__PURE__ */ jsx(MenuGroup, {
			...k,
			ref: d
		})
	});
});
MenuRadioGroup.displayName = RADIO_GROUP_NAME$1;
var RADIO_ITEM_NAME$1 = "MenuRadioItem", MenuRadioItem = React$1.forwardRef((s, d) => {
	let { value: C, ...w } = s, k = useRadioGroupContext(RADIO_ITEM_NAME$1, s.__scopeMenu), F = C === k.value;
	return /* @__PURE__ */ jsx(ItemIndicatorProvider, {
		scope: s.__scopeMenu,
		checked: F,
		children: /* @__PURE__ */ jsx(MenuItem$1, {
			role: "menuitemradio",
			"aria-checked": F,
			...w,
			ref: d,
			"data-state": getCheckedState(F),
			onSelect: composeEventHandlers(w.onSelect, () => k.onValueChange?.(C), { checkForDefaultPrevented: !1 })
		})
	});
});
MenuRadioItem.displayName = RADIO_ITEM_NAME$1;
var ITEM_INDICATOR_NAME = "MenuItemIndicator", [ItemIndicatorProvider, useItemIndicatorContext] = createMenuContext(ITEM_INDICATOR_NAME, { checked: !1 }), MenuItemIndicator = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, forceMount: w, ...k } = s, F = useItemIndicatorContext(ITEM_INDICATOR_NAME, C);
	return /* @__PURE__ */ jsx(Presence, {
		present: w || isIndeterminate(F.checked) || F.checked === !0,
		children: /* @__PURE__ */ jsx(Primitive.span, {
			...k,
			ref: d,
			"data-state": getCheckedState(F.checked)
		})
	});
});
MenuItemIndicator.displayName = ITEM_INDICATOR_NAME;
var SEPARATOR_NAME$1 = "MenuSeparator", MenuSeparator$1 = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Primitive.div, {
		role: "separator",
		"aria-orientation": "horizontal",
		...w,
		ref: d
	});
});
MenuSeparator$1.displayName = SEPARATOR_NAME$1;
var ARROW_NAME$2 = "MenuArrow", MenuArrow = React$1.forwardRef((s, d) => {
	let { __scopeMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Arrow, {
		...usePopperScope$1(C),
		...w,
		ref: d
	});
});
MenuArrow.displayName = ARROW_NAME$2;
var SUB_NAME = "MenuSub", [MenuSubProvider, useMenuSubContext] = createMenuContext(SUB_NAME), MenuSub = (d) => {
	let { __scopeMenu: C, children: w, open: k = !1, onOpenChange: F } = d, L = useMenuContext(SUB_NAME, C), V = usePopperScope$1(C), [U, K] = React$1.useState(null), [q, J] = React$1.useState(null), X = useCallbackRef(F);
	return React$1.useEffect(() => (L.open === !1 && X(!1), () => X(!1)), [L.open, X]), /* @__PURE__ */ jsx(Root2$1, {
		...V,
		children: /* @__PURE__ */ jsx(MenuProvider, {
			scope: C,
			open: k,
			onOpenChange: X,
			content: q,
			onContentChange: J,
			children: /* @__PURE__ */ jsx(MenuSubProvider, {
				scope: C,
				contentId: useId$1(),
				triggerId: useId$1(),
				trigger: U,
				onTriggerChange: K,
				children: w
			})
		})
	});
};
MenuSub.displayName = SUB_NAME;
var SUB_TRIGGER_NAME$1 = "MenuSubTrigger", MenuSubTrigger = React$1.forwardRef((d, C) => {
	let w = useMenuContext(SUB_TRIGGER_NAME$1, d.__scopeMenu), k = useMenuRootContext(SUB_TRIGGER_NAME$1, d.__scopeMenu), F = useMenuSubContext(SUB_TRIGGER_NAME$1, d.__scopeMenu), L = useMenuContentContext(SUB_TRIGGER_NAME$1, d.__scopeMenu), V = React$1.useRef(null), { pointerGraceTimerRef: U, onPointerGraceIntentChange: K } = L, q = { __scopeMenu: d.__scopeMenu }, J = React$1.useCallback(() => {
		V.current && window.clearTimeout(V.current), V.current = null;
	}, []);
	return React$1.useEffect(() => J, [J]), React$1.useEffect(() => {
		let s = U.current;
		return () => {
			window.clearTimeout(s), K(null);
		};
	}, [U, K]), /* @__PURE__ */ jsx(MenuAnchor, {
		asChild: !0,
		...q,
		children: /* @__PURE__ */ jsx(MenuItemImpl, {
			id: F.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": w.open,
			"aria-controls": F.contentId,
			"data-state": getOpenState(w.open),
			...d,
			ref: composeRefs(C, F.onTriggerChange),
			onClick: (s) => {
				d.onClick?.(s), !(d.disabled || s.defaultPrevented) && (s.currentTarget.focus(), w.open || w.onOpenChange(!0));
			},
			onPointerMove: composeEventHandlers(d.onPointerMove, whenMouse((s) => {
				L.onItemEnter(s), !s.defaultPrevented && !d.disabled && !w.open && !V.current && (L.onPointerGraceIntentChange(null), V.current = window.setTimeout(() => {
					w.onOpenChange(!0), J();
				}, 100));
			})),
			onPointerLeave: composeEventHandlers(d.onPointerLeave, whenMouse((s) => {
				J();
				let d = w.content?.getBoundingClientRect();
				if (d) {
					let C = w.content?.dataset.side, k = C === "right", F = k ? -5 : 5, V = d[k ? "left" : "right"], K = d[k ? "right" : "left"];
					L.onPointerGraceIntentChange({
						area: [
							{
								x: s.clientX + F,
								y: s.clientY
							},
							{
								x: V,
								y: d.top
							},
							{
								x: K,
								y: d.top
							},
							{
								x: K,
								y: d.bottom
							},
							{
								x: V,
								y: d.bottom
							}
						],
						side: C
					}), window.clearTimeout(U.current), U.current = window.setTimeout(() => L.onPointerGraceIntentChange(null), 300);
				} else {
					if (L.onTriggerLeave(s), s.defaultPrevented) return;
					L.onPointerGraceIntentChange(null);
				}
			})),
			onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
				let C = L.searchRef.current !== "";
				d.disabled || C && s.key === " " || SUB_OPEN_KEYS[k.dir].includes(s.key) && (w.onOpenChange(!0), w.content?.focus(), s.preventDefault());
			})
		})
	});
});
MenuSubTrigger.displayName = SUB_TRIGGER_NAME$1;
var SUB_CONTENT_NAME$1 = "MenuSubContent", MenuSubContent = React$1.forwardRef((d, C) => {
	let w = usePortalContext$1(CONTENT_NAME$2, d.__scopeMenu), { forceMount: k = w.forceMount, ...F } = d, L = useMenuContext(CONTENT_NAME$2, d.__scopeMenu), V = useMenuRootContext(CONTENT_NAME$2, d.__scopeMenu), U = useMenuSubContext(SUB_CONTENT_NAME$1, d.__scopeMenu), K = React$1.useRef(null), q = useComposedRefs(C, K);
	return /* @__PURE__ */ jsx(Collection.Provider, {
		scope: d.__scopeMenu,
		children: /* @__PURE__ */ jsx(Presence, {
			present: k || L.open,
			children: /* @__PURE__ */ jsx(Collection.Slot, {
				scope: d.__scopeMenu,
				children: /* @__PURE__ */ jsx(MenuContentImpl, {
					id: U.contentId,
					"aria-labelledby": U.triggerId,
					...F,
					ref: q,
					align: "start",
					side: V.dir === "rtl" ? "left" : "right",
					disableOutsidePointerEvents: !1,
					disableOutsideScroll: !1,
					trapFocus: !1,
					onOpenAutoFocus: (s) => {
						V.isUsingKeyboardRef.current && K.current?.focus(), s.preventDefault();
					},
					onCloseAutoFocus: (s) => s.preventDefault(),
					onFocusOutside: composeEventHandlers(d.onFocusOutside, (s) => {
						s.target !== U.trigger && L.onOpenChange(!1);
					}),
					onEscapeKeyDown: composeEventHandlers(d.onEscapeKeyDown, (s) => {
						V.onClose(), s.preventDefault();
					}),
					onKeyDown: composeEventHandlers(d.onKeyDown, (s) => {
						let d = s.currentTarget.contains(s.target), C = SUB_CLOSE_KEYS[V.dir].includes(s.key);
						d && C && (L.onOpenChange(!1), U.trigger?.focus(), s.preventDefault());
					})
				})
			})
		})
	});
});
MenuSubContent.displayName = SUB_CONTENT_NAME$1;
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
	for (let C of s) if (C === d || (C.focus(), document.activeElement !== d)) return;
}
function wrapArray(s, d) {
	return s.map((C, w) => s[(d + w) % s.length]);
}
function getNextMatch(s, d, C) {
	let w = d.length > 1 && Array.from(d).every((s) => s === d[0]) ? d[0] : d, k = C ? s.indexOf(C) : -1, F = wrapArray(s, Math.max(k, 0));
	w.length === 1 && (F = F.filter((s) => s !== C));
	let L = F.find((s) => s.toLowerCase().startsWith(w.toLowerCase()));
	return L === C ? void 0 : L;
}
function isPointInPolygon$1(s, d) {
	let { x: C, y: w } = s, k = !1;
	for (let s = 0, F = d.length - 1; s < d.length; F = s++) {
		let L = d[s], V = d[F], U = L.x, K = L.y, q = V.x, J = V.y;
		K > w != J > w && C < (q - U) * (w - K) / (J - K) + U && (k = !k);
	}
	return k;
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
var Root3 = Menu, Anchor2 = MenuAnchor, Portal$1 = MenuPortal, Content2$1 = MenuContent, Group = MenuGroup, Label = MenuLabel, Item2$1 = MenuItem$1, CheckboxItem = MenuCheckboxItem, RadioGroup = MenuRadioGroup, RadioItem = MenuRadioItem, ItemIndicator = MenuItemIndicator, Separator = MenuSeparator$1, Arrow2 = MenuArrow, Sub = MenuSub, SubTrigger = MenuSubTrigger, SubContent = MenuSubContent, DROPDOWN_MENU_NAME = "DropdownMenu", [createDropdownMenuContext, createDropdownMenuScope] = createContextScope(DROPDOWN_MENU_NAME, [createMenuScope]), useMenuScope = createMenuScope(), [DropdownMenuProvider, useDropdownMenuContext] = createDropdownMenuContext(DROPDOWN_MENU_NAME), DropdownMenu = (d) => {
	let { __scopeDropdownMenu: C, children: w, dir: k, open: F, defaultOpen: L, onOpenChange: V, modal: U = !0 } = d, K = useMenuScope(C), q = React$1.useRef(null), [J, X] = useControllableState({
		prop: F,
		defaultProp: L ?? !1,
		onChange: V,
		caller: DROPDOWN_MENU_NAME
	});
	return /* @__PURE__ */ jsx(DropdownMenuProvider, {
		scope: C,
		triggerId: useId$1(),
		triggerRef: q,
		contentId: useId$1(),
		open: J,
		onOpenChange: X,
		onOpenToggle: React$1.useCallback(() => X((s) => !s), [X]),
		modal: U,
		children: /* @__PURE__ */ jsx(Root3, {
			...K,
			open: J,
			onOpenChange: X,
			dir: k,
			modal: U,
			children: w
		})
	});
};
DropdownMenu.displayName = DROPDOWN_MENU_NAME;
var TRIGGER_NAME$1 = "DropdownMenuTrigger", DropdownMenuTrigger = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, disabled: w = !1, ...k } = s, F = useDropdownMenuContext(TRIGGER_NAME$1, C);
	return /* @__PURE__ */ jsx(Anchor2, {
		asChild: !0,
		...useMenuScope(C),
		children: /* @__PURE__ */ jsx(Primitive.button, {
			type: "button",
			id: F.triggerId,
			"aria-haspopup": "menu",
			"aria-expanded": F.open,
			"aria-controls": F.open ? F.contentId : void 0,
			"data-state": F.open ? "open" : "closed",
			"data-disabled": w ? "" : void 0,
			disabled: w,
			...k,
			ref: composeRefs(d, F.triggerRef),
			onPointerDown: composeEventHandlers(s.onPointerDown, (s) => {
				!w && s.button === 0 && s.ctrlKey === !1 && (F.onOpenToggle(), F.open || s.preventDefault());
			}),
			onKeyDown: composeEventHandlers(s.onKeyDown, (s) => {
				w || (["Enter", " "].includes(s.key) && F.onOpenToggle(), s.key === "ArrowDown" && F.onOpenChange(!0), [
					"Enter",
					" ",
					"ArrowDown"
				].includes(s.key) && s.preventDefault());
			})
		})
	});
});
DropdownMenuTrigger.displayName = TRIGGER_NAME$1;
var PORTAL_NAME$1 = "DropdownMenuPortal", DropdownMenuPortal = (s) => {
	let { __scopeDropdownMenu: d, ...C } = s;
	return /* @__PURE__ */ jsx(Portal$1, {
		...useMenuScope(d),
		...C
	});
};
DropdownMenuPortal.displayName = PORTAL_NAME$1;
var CONTENT_NAME$1 = "DropdownMenuContent", DropdownMenuContent = React$1.forwardRef((d, C) => {
	let { __scopeDropdownMenu: w, ...k } = d, F = useDropdownMenuContext(CONTENT_NAME$1, w), L = useMenuScope(w), V = React$1.useRef(!1);
	return /* @__PURE__ */ jsx(Content2$1, {
		id: F.contentId,
		"aria-labelledby": F.triggerId,
		...L,
		...k,
		ref: C,
		onCloseAutoFocus: composeEventHandlers(d.onCloseAutoFocus, (s) => {
			V.current || F.triggerRef.current?.focus(), V.current = !1, s.preventDefault();
		}),
		onInteractOutside: composeEventHandlers(d.onInteractOutside, (s) => {
			let d = s.detail.originalEvent, C = d.button === 0 && d.ctrlKey === !0, w = d.button === 2 || C;
			(!F.modal || w) && (V.current = !0);
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
DropdownMenuContent.displayName = CONTENT_NAME$1;
var GROUP_NAME = "DropdownMenuGroup", DropdownMenuGroup = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Group, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuGroup.displayName = GROUP_NAME;
var LABEL_NAME = "DropdownMenuLabel", DropdownMenuLabel = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Label, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuLabel.displayName = LABEL_NAME;
var ITEM_NAME = "DropdownMenuItem", DropdownMenuItem = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Item2$1, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuItem.displayName = ITEM_NAME;
var CHECKBOX_ITEM_NAME = "DropdownMenuCheckboxItem", DropdownMenuCheckboxItem = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(CheckboxItem, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuCheckboxItem.displayName = CHECKBOX_ITEM_NAME;
var RADIO_GROUP_NAME = "DropdownMenuRadioGroup", DropdownMenuRadioGroup = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(RadioGroup, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuRadioGroup.displayName = RADIO_GROUP_NAME;
var RADIO_ITEM_NAME = "DropdownMenuRadioItem", DropdownMenuRadioItem = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(RadioItem, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuRadioItem.displayName = RADIO_ITEM_NAME;
var INDICATOR_NAME = "DropdownMenuItemIndicator", DropdownMenuItemIndicator = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(ItemIndicator, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuItemIndicator.displayName = INDICATOR_NAME;
var SEPARATOR_NAME = "DropdownMenuSeparator", DropdownMenuSeparator = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Separator, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuSeparator.displayName = SEPARATOR_NAME;
var ARROW_NAME$1 = "DropdownMenuArrow", DropdownMenuArrow = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(Arrow2, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuArrow.displayName = ARROW_NAME$1;
var DropdownMenuSub = (s) => {
	let { __scopeDropdownMenu: d, children: C, open: w, onOpenChange: k, defaultOpen: F } = s, L = useMenuScope(d), [V, U] = useControllableState({
		prop: w,
		defaultProp: F ?? !1,
		onChange: k,
		caller: "DropdownMenuSub"
	});
	return /* @__PURE__ */ jsx(Sub, {
		...L,
		open: V,
		onOpenChange: U,
		children: C
	});
}, SUB_TRIGGER_NAME = "DropdownMenuSubTrigger", DropdownMenuSubTrigger = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(SubTrigger, {
		...useMenuScope(C),
		...w,
		ref: d
	});
});
DropdownMenuSubTrigger.displayName = SUB_TRIGGER_NAME;
var SUB_CONTENT_NAME = "DropdownMenuSubContent", DropdownMenuSubContent = React$1.forwardRef((s, d) => {
	let { __scopeDropdownMenu: C, ...w } = s;
	return /* @__PURE__ */ jsx(SubContent, {
		...useMenuScope(C),
		...w,
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
var Root2 = DropdownMenu, Trigger = DropdownMenuTrigger, Portal2 = DropdownMenuPortal, Content2 = DropdownMenuContent, Group2 = DropdownMenuGroup, Label2 = DropdownMenuLabel, Item2 = DropdownMenuItem, CheckboxItem2 = DropdownMenuCheckboxItem, RadioGroup2 = DropdownMenuRadioGroup, RadioItem2 = DropdownMenuRadioItem, ItemIndicator2 = DropdownMenuItemIndicator, Separator2 = DropdownMenuSeparator, Sub2 = DropdownMenuSub, SubTrigger2 = DropdownMenuSubTrigger, SubContent2 = DropdownMenuSubContent;
function clamp$2(s, [d, C]) {
	return Math.min(C, Math.max(d, s));
}
function useStateMachine(d, C) {
	return React$1.useReducer((s, d) => C[s][d] ?? s, d);
}
var SCROLL_AREA_NAME = "ScrollArea", [createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME), [ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME), ScrollArea = React$1.forwardRef((d, C) => {
	let { __scopeScrollArea: w, type: k = "hover", dir: F, scrollHideDelay: L = 600, ...V } = d, [U, K] = React$1.useState(null), [q, J] = React$1.useState(null), [X, $] = React$1.useState(null), [PD, FD] = React$1.useState(null), [ID, LD] = React$1.useState(null), [RD, zD] = React$1.useState(0), [BD, VD] = React$1.useState(0), [HD, UD] = React$1.useState(!1), [GD, KD] = React$1.useState(!1), qD = useComposedRefs(C, (s) => K(s)), JD = useDirection(F);
	return /* @__PURE__ */ jsx(ScrollAreaProvider, {
		scope: w,
		type: k,
		dir: JD,
		scrollHideDelay: L,
		scrollArea: U,
		viewport: q,
		onViewportChange: J,
		content: X,
		onContentChange: $,
		scrollbarX: PD,
		onScrollbarXChange: FD,
		scrollbarXEnabled: HD,
		onScrollbarXEnabledChange: UD,
		scrollbarY: ID,
		onScrollbarYChange: LD,
		scrollbarYEnabled: GD,
		onScrollbarYEnabledChange: KD,
		onCornerWidthChange: zD,
		onCornerHeightChange: VD,
		children: /* @__PURE__ */ jsx(Primitive.div, {
			dir: JD,
			...V,
			ref: qD,
			style: {
				position: "relative",
				"--radix-scroll-area-corner-width": RD + "px",
				"--radix-scroll-area-corner-height": BD + "px",
				...d.style
			}
		})
	});
});
ScrollArea.displayName = SCROLL_AREA_NAME;
var VIEWPORT_NAME = "ScrollAreaViewport", ScrollAreaViewport = React$1.forwardRef((d, C) => {
	let { __scopeScrollArea: w, children: k, nonce: F, ...L } = d, V = useScrollAreaContext(VIEWPORT_NAME, w), U = useComposedRefs(C, React$1.useRef(null), V.onViewportChange);
	return /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("style", {
		dangerouslySetInnerHTML: { __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}" },
		nonce: F
	}), /* @__PURE__ */ jsx(Primitive.div, {
		"data-radix-scroll-area-viewport": "",
		...L,
		ref: U,
		style: {
			overflowX: V.scrollbarXEnabled ? "scroll" : "hidden",
			overflowY: V.scrollbarYEnabled ? "scroll" : "hidden",
			...d.style
		},
		children: /* @__PURE__ */ jsx("div", {
			ref: V.onContentChange,
			style: {
				minWidth: "100%",
				display: "table"
			},
			children: k
		})
	})] });
});
ScrollAreaViewport.displayName = VIEWPORT_NAME;
var SCROLLBAR_NAME = "ScrollAreaScrollbar", ScrollAreaScrollbar = React$1.forwardRef((d, C) => {
	let { forceMount: w, ...k } = d, F = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), { onScrollbarXEnabledChange: L, onScrollbarYEnabledChange: V } = F, U = d.orientation === "horizontal";
	return React$1.useEffect(() => (U ? L(!0) : V(!0), () => {
		U ? L(!1) : V(!1);
	}), [
		U,
		L,
		V
	]), F.type === "hover" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarHover, {
		...k,
		ref: C,
		forceMount: w
	}) : F.type === "scroll" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarScroll, {
		...k,
		ref: C,
		forceMount: w
	}) : F.type === "auto" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
		...k,
		ref: C,
		forceMount: w
	}) : F.type === "always" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
		...k,
		ref: C
	}) : null;
});
ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
var ScrollAreaScrollbarHover = React$1.forwardRef((d, C) => {
	let { forceMount: w, ...k } = d, F = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), [L, V] = React$1.useState(!1);
	return React$1.useEffect(() => {
		let s = F.scrollArea, d = 0;
		if (s) {
			let C = () => {
				window.clearTimeout(d), V(!0);
			}, w = () => {
				d = window.setTimeout(() => V(!1), F.scrollHideDelay);
			};
			return s.addEventListener("pointerenter", C), s.addEventListener("pointerleave", w), () => {
				window.clearTimeout(d), s.removeEventListener("pointerenter", C), s.removeEventListener("pointerleave", w);
			};
		}
	}, [F.scrollArea, F.scrollHideDelay]), /* @__PURE__ */ jsx(Presence, {
		present: w || L,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarAuto, {
			"data-state": L ? "visible" : "hidden",
			...k,
			ref: C
		})
	});
}), ScrollAreaScrollbarScroll = React$1.forwardRef((d, C) => {
	let { forceMount: w, ...k } = d, F = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), L = d.orientation === "horizontal", V = useDebounceCallback(() => K("SCROLL_END"), 100), [U, K] = useStateMachine("hidden", {
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
		if (U === "idle") {
			let s = window.setTimeout(() => K("HIDE"), F.scrollHideDelay);
			return () => window.clearTimeout(s);
		}
	}, [
		U,
		F.scrollHideDelay,
		K
	]), React$1.useEffect(() => {
		let s = F.viewport, d = L ? "scrollLeft" : "scrollTop";
		if (s) {
			let C = s[d], w = () => {
				let w = s[d];
				C !== w && (K("SCROLL"), V()), C = w;
			};
			return s.addEventListener("scroll", w), () => s.removeEventListener("scroll", w);
		}
	}, [
		F.viewport,
		L,
		K,
		V
	]), /* @__PURE__ */ jsx(Presence, {
		present: w || U !== "hidden",
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": U === "hidden" ? "hidden" : "visible",
			...k,
			ref: C,
			onPointerEnter: composeEventHandlers(d.onPointerEnter, () => K("POINTER_ENTER")),
			onPointerLeave: composeEventHandlers(d.onPointerLeave, () => K("POINTER_LEAVE"))
		})
	});
}), ScrollAreaScrollbarAuto = React$1.forwardRef((d, C) => {
	let w = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), { forceMount: k, ...F } = d, [L, V] = React$1.useState(!1), U = d.orientation === "horizontal", K = useDebounceCallback(() => {
		if (w.viewport) {
			let s = w.viewport.offsetWidth < w.viewport.scrollWidth, d = w.viewport.offsetHeight < w.viewport.scrollHeight;
			V(U ? s : d);
		}
	}, 10);
	return useResizeObserver(w.viewport, K), useResizeObserver(w.content, K), /* @__PURE__ */ jsx(Presence, {
		present: k || L,
		children: /* @__PURE__ */ jsx(ScrollAreaScrollbarVisible, {
			"data-state": L ? "visible" : "hidden",
			...F,
			ref: C
		})
	});
}), ScrollAreaScrollbarVisible = React$1.forwardRef((d, C) => {
	let { orientation: w = "vertical", ...k } = d, F = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), L = React$1.useRef(null), V = React$1.useRef(0), [U, K] = React$1.useState({
		content: 0,
		viewport: 0,
		scrollbar: {
			size: 0,
			paddingStart: 0,
			paddingEnd: 0
		}
	}), q = getThumbRatio(U.viewport, U.content), J = {
		...k,
		sizes: U,
		onSizesChange: K,
		hasThumb: q > 0 && q < 1,
		onThumbChange: (s) => L.current = s,
		onThumbPointerUp: () => V.current = 0,
		onThumbPointerDown: (s) => V.current = s
	};
	function X(s, d) {
		return getScrollPositionFromPointer(s, V.current, U, d);
	}
	return w === "horizontal" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarX, {
		...J,
		ref: C,
		onThumbPositionChange: () => {
			if (F.viewport && L.current) {
				let s = F.viewport.scrollLeft, d = getThumbOffsetFromScroll(s, U, F.dir);
				L.current.style.transform = `translate3d(${d}px, 0, 0)`;
			}
		},
		onWheelScroll: (s) => {
			F.viewport && (F.viewport.scrollLeft = s);
		},
		onDragScroll: (s) => {
			F.viewport && (F.viewport.scrollLeft = X(s, F.dir));
		}
	}) : w === "vertical" ? /* @__PURE__ */ jsx(ScrollAreaScrollbarY, {
		...J,
		ref: C,
		onThumbPositionChange: () => {
			if (F.viewport && L.current) {
				let s = F.viewport.scrollTop, d = getThumbOffsetFromScroll(s, U);
				L.current.style.transform = `translate3d(0, ${d}px, 0)`;
			}
		},
		onWheelScroll: (s) => {
			F.viewport && (F.viewport.scrollTop = s);
		},
		onDragScroll: (s) => {
			F.viewport && (F.viewport.scrollTop = X(s));
		}
	}) : null;
}), ScrollAreaScrollbarX = React$1.forwardRef((d, C) => {
	let { sizes: w, onSizesChange: k, ...F } = d, L = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), [V, U] = React$1.useState(), K = React$1.useRef(null), q = useComposedRefs(C, K, L.onScrollbarXChange);
	return React$1.useEffect(() => {
		K.current && U(getComputedStyle(K.current));
	}, [K]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "horizontal",
		...F,
		ref: q,
		sizes: w,
		style: {
			bottom: 0,
			left: L.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
			right: L.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
			"--radix-scroll-area-thumb-width": getThumbSize(w) + "px",
			...d.style
		},
		onThumbPointerDown: (s) => d.onThumbPointerDown(s.x),
		onDragScroll: (s) => d.onDragScroll(s.x),
		onWheelScroll: (s, C) => {
			if (L.viewport) {
				let w = L.viewport.scrollLeft + s.deltaX;
				d.onWheelScroll(w), isScrollingWithinScrollbarBounds(w, C) && s.preventDefault();
			}
		},
		onResize: () => {
			K.current && L.viewport && V && k({
				content: L.viewport.scrollWidth,
				viewport: L.viewport.offsetWidth,
				scrollbar: {
					size: K.current.clientWidth,
					paddingStart: toInt(V.paddingLeft),
					paddingEnd: toInt(V.paddingRight)
				}
			});
		}
	});
}), ScrollAreaScrollbarY = React$1.forwardRef((d, C) => {
	let { sizes: w, onSizesChange: k, ...F } = d, L = useScrollAreaContext(SCROLLBAR_NAME, d.__scopeScrollArea), [V, U] = React$1.useState(), K = React$1.useRef(null), q = useComposedRefs(C, K, L.onScrollbarYChange);
	return React$1.useEffect(() => {
		K.current && U(getComputedStyle(K.current));
	}, [K]), /* @__PURE__ */ jsx(ScrollAreaScrollbarImpl, {
		"data-orientation": "vertical",
		...F,
		ref: q,
		sizes: w,
		style: {
			top: 0,
			right: L.dir === "ltr" ? 0 : void 0,
			left: L.dir === "rtl" ? 0 : void 0,
			bottom: "var(--radix-scroll-area-corner-height)",
			"--radix-scroll-area-thumb-height": getThumbSize(w) + "px",
			...d.style
		},
		onThumbPointerDown: (s) => d.onThumbPointerDown(s.y),
		onDragScroll: (s) => d.onDragScroll(s.y),
		onWheelScroll: (s, C) => {
			if (L.viewport) {
				let w = L.viewport.scrollTop + s.deltaY;
				d.onWheelScroll(w), isScrollingWithinScrollbarBounds(w, C) && s.preventDefault();
			}
		},
		onResize: () => {
			K.current && L.viewport && V && k({
				content: L.viewport.scrollHeight,
				viewport: L.viewport.offsetHeight,
				scrollbar: {
					size: K.current.clientHeight,
					paddingStart: toInt(V.paddingTop),
					paddingEnd: toInt(V.paddingBottom)
				}
			});
		}
	});
}), [ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME), ScrollAreaScrollbarImpl = React$1.forwardRef((d, C) => {
	let { __scopeScrollArea: w, sizes: k, hasThumb: F, onThumbChange: L, onThumbPointerUp: V, onThumbPointerDown: U, onThumbPositionChange: K, onDragScroll: q, onWheelScroll: J, onResize: X, ...$ } = d, PD = useScrollAreaContext(SCROLLBAR_NAME, w), [FD, ID] = React$1.useState(null), LD = useComposedRefs(C, (s) => ID(s)), RD = React$1.useRef(null), zD = React$1.useRef(""), BD = PD.viewport, VD = k.content - k.viewport, HD = useCallbackRef(J), UD = useCallbackRef(K), GD = useDebounceCallback(X, 10);
	function KD(s) {
		RD.current && q({
			x: s.clientX - RD.current.left,
			y: s.clientY - RD.current.top
		});
	}
	return React$1.useEffect(() => {
		let s = (s) => {
			let d = s.target;
			FD?.contains(d) && HD(s, VD);
		};
		return document.addEventListener("wheel", s, { passive: !1 }), () => document.removeEventListener("wheel", s, { passive: !1 });
	}, [
		BD,
		FD,
		VD,
		HD
	]), React$1.useEffect(UD, [k, UD]), useResizeObserver(FD, GD), useResizeObserver(PD.content, GD), /* @__PURE__ */ jsx(ScrollbarProvider, {
		scope: w,
		scrollbar: FD,
		hasThumb: F,
		onThumbChange: useCallbackRef(L),
		onThumbPointerUp: useCallbackRef(V),
		onThumbPositionChange: UD,
		onThumbPointerDown: useCallbackRef(U),
		children: /* @__PURE__ */ jsx(Primitive.div, {
			...$,
			ref: LD,
			style: {
				position: "absolute",
				...$.style
			},
			onPointerDown: composeEventHandlers(d.onPointerDown, (s) => {
				s.button === 0 && (s.target.setPointerCapture(s.pointerId), RD.current = FD.getBoundingClientRect(), zD.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", PD.viewport && (PD.viewport.style.scrollBehavior = "auto"), KD(s));
			}),
			onPointerMove: composeEventHandlers(d.onPointerMove, KD),
			onPointerUp: composeEventHandlers(d.onPointerUp, (s) => {
				let d = s.target;
				d.hasPointerCapture(s.pointerId) && d.releasePointerCapture(s.pointerId), document.body.style.webkitUserSelect = zD.current, PD.viewport && (PD.viewport.style.scrollBehavior = ""), RD.current = null;
			})
		})
	});
}), THUMB_NAME = "ScrollAreaThumb", ScrollAreaThumb = React$1.forwardRef((s, d) => {
	let { forceMount: C, ...w } = s, k = useScrollbarContext(THUMB_NAME, s.__scopeScrollArea);
	return /* @__PURE__ */ jsx(Presence, {
		present: C || k.hasThumb,
		children: /* @__PURE__ */ jsx(ScrollAreaThumbImpl, {
			ref: d,
			...w
		})
	});
}), ScrollAreaThumbImpl = React$1.forwardRef((d, C) => {
	let { __scopeScrollArea: w, style: k, ...F } = d, L = useScrollAreaContext(THUMB_NAME, w), V = useScrollbarContext(THUMB_NAME, w), { onThumbPositionChange: U } = V, K = useComposedRefs(C, (s) => V.onThumbChange(s)), q = React$1.useRef(void 0), J = useDebounceCallback(() => {
		q.current &&= (q.current(), void 0);
	}, 100);
	return React$1.useEffect(() => {
		let s = L.viewport;
		if (s) {
			let d = () => {
				J(), q.current || (q.current = addUnlinkedScrollListener(s, U), U());
			};
			return U(), s.addEventListener("scroll", d), () => s.removeEventListener("scroll", d);
		}
	}, [
		L.viewport,
		J,
		U
	]), /* @__PURE__ */ jsx(Primitive.div, {
		"data-state": V.hasThumb ? "visible" : "hidden",
		...F,
		ref: K,
		style: {
			width: "var(--radix-scroll-area-thumb-width)",
			height: "var(--radix-scroll-area-thumb-height)",
			...k
		},
		onPointerDownCapture: composeEventHandlers(d.onPointerDownCapture, (s) => {
			let d = s.target.getBoundingClientRect(), C = s.clientX - d.left, w = s.clientY - d.top;
			V.onThumbPointerDown({
				x: C,
				y: w
			});
		}),
		onPointerUp: composeEventHandlers(d.onPointerUp, V.onThumbPointerUp)
	});
});
ScrollAreaThumb.displayName = THUMB_NAME;
var CORNER_NAME = "ScrollAreaCorner", ScrollAreaCorner = React$1.forwardRef((s, d) => {
	let C = useScrollAreaContext(CORNER_NAME, s.__scopeScrollArea), w = !!(C.scrollbarX && C.scrollbarY);
	return C.type !== "scroll" && w ? /* @__PURE__ */ jsx(ScrollAreaCornerImpl, {
		...s,
		ref: d
	}) : null;
});
ScrollAreaCorner.displayName = CORNER_NAME;
var ScrollAreaCornerImpl = React$1.forwardRef((d, C) => {
	let { __scopeScrollArea: w, ...k } = d, F = useScrollAreaContext(CORNER_NAME, w), [L, V] = React$1.useState(0), [U, K] = React$1.useState(0), q = !!(L && U);
	return useResizeObserver(F.scrollbarX, () => {
		let s = F.scrollbarX?.offsetHeight || 0;
		F.onCornerHeightChange(s), K(s);
	}), useResizeObserver(F.scrollbarY, () => {
		let s = F.scrollbarY?.offsetWidth || 0;
		F.onCornerWidthChange(s), V(s);
	}), q ? /* @__PURE__ */ jsx(Primitive.div, {
		...k,
		ref: C,
		style: {
			width: L,
			height: U,
			position: "absolute",
			right: F.dir === "ltr" ? 0 : void 0,
			left: F.dir === "rtl" ? 0 : void 0,
			bottom: 0,
			...d.style
		}
	}) : null;
});
function toInt(s) {
	return s ? parseInt(s, 10) : 0;
}
function getThumbRatio(s, d) {
	let C = s / d;
	return isNaN(C) ? 0 : C;
}
function getThumbSize(s) {
	let d = getThumbRatio(s.viewport, s.content), C = s.scrollbar.paddingStart + s.scrollbar.paddingEnd, w = (s.scrollbar.size - C) * d;
	return Math.max(w, 18);
}
function getScrollPositionFromPointer(s, d, C, w = "ltr") {
	let k = getThumbSize(C), F = k / 2, L = d || F, V = k - L, U = C.scrollbar.paddingStart + L, K = C.scrollbar.size - C.scrollbar.paddingEnd - V, q = C.content - C.viewport, J = w === "ltr" ? [0, q] : [q * -1, 0];
	return linearScale([U, K], J)(s);
}
function getThumbOffsetFromScroll(s, d, C = "ltr") {
	let w = getThumbSize(d), k = d.scrollbar.paddingStart + d.scrollbar.paddingEnd, F = d.scrollbar.size - k, L = d.content - d.viewport, V = F - w, U = clamp$2(s, C === "ltr" ? [0, L] : [L * -1, 0]);
	return linearScale([0, L], [0, V])(U);
}
function linearScale(s, d) {
	return (C) => {
		if (s[0] === s[1] || d[0] === d[1]) return d[0];
		let w = (d[1] - d[0]) / (s[1] - s[0]);
		return d[0] + w * (C - s[0]);
	};
}
function isScrollingWithinScrollbarBounds(s, d) {
	return s > 0 && s < d;
}
var addUnlinkedScrollListener = (s, d = () => {}) => {
	let C = {
		left: s.scrollLeft,
		top: s.scrollTop
	}, w = 0;
	return (function k() {
		let F = {
			left: s.scrollLeft,
			top: s.scrollTop
		}, L = C.left !== F.left, V = C.top !== F.top;
		(L || V) && d(), C = F, w = window.requestAnimationFrame(k);
	})(), () => window.cancelAnimationFrame(w);
};
function useDebounceCallback(d, C) {
	let w = useCallbackRef(d), k = React$1.useRef(0);
	return React$1.useEffect(() => () => window.clearTimeout(k.current), []), React$1.useCallback(() => {
		window.clearTimeout(k.current), k.current = window.setTimeout(w, C);
	}, [w, C]);
}
function useResizeObserver(s, d) {
	let C = useCallbackRef(d);
	useLayoutEffect2(() => {
		let d = 0;
		if (s) {
			let w = new ResizeObserver(() => {
				cancelAnimationFrame(d), d = window.requestAnimationFrame(C);
			});
			return w.observe(s), () => {
				window.cancelAnimationFrame(d), w.unobserve(s);
			};
		}
	}, [s, C]);
}
var Root = ScrollArea, Viewport = ScrollAreaViewport, Scrollbar = ScrollAreaScrollbar, Thumb = ScrollAreaThumb, Corner = ScrollAreaCorner, [createTooltipContext, createTooltipScope] = createContextScope("Tooltip", [createPopperScope]), usePopperScope = createPopperScope(), PROVIDER_NAME = "TooltipProvider", DEFAULT_DELAY_DURATION = 700, TOOLTIP_OPEN = "tooltip.open", [TooltipProviderContextProvider, useTooltipProviderContext] = createTooltipContext(PROVIDER_NAME), TooltipProvider = (d) => {
	let { __scopeTooltip: C, delayDuration: w = DEFAULT_DELAY_DURATION, skipDelayDuration: k = 300, disableHoverableContent: F = !1, children: L } = d, V = React$1.useRef(!0), U = React$1.useRef(!1), K = React$1.useRef(0);
	return React$1.useEffect(() => {
		let s = K.current;
		return () => window.clearTimeout(s);
	}, []), /* @__PURE__ */ jsx(TooltipProviderContextProvider, {
		scope: C,
		isOpenDelayedRef: V,
		delayDuration: w,
		onOpen: React$1.useCallback(() => {
			window.clearTimeout(K.current), V.current = !1;
		}, []),
		onClose: React$1.useCallback(() => {
			window.clearTimeout(K.current), K.current = window.setTimeout(() => V.current = !0, k);
		}, [k]),
		isPointerInTransitRef: U,
		onPointerInTransitChange: React$1.useCallback((s) => {
			U.current = s;
		}, []),
		disableHoverableContent: F,
		children: L
	});
};
TooltipProvider.displayName = PROVIDER_NAME;
var TOOLTIP_NAME = "Tooltip", [TooltipContextProvider, useTooltipContext] = createTooltipContext(TOOLTIP_NAME), Tooltip = (d) => {
	let { __scopeTooltip: C, children: w, open: k, defaultOpen: F, onOpenChange: L, disableHoverableContent: V, delayDuration: U } = d, K = useTooltipProviderContext(TOOLTIP_NAME, d.__scopeTooltip), q = usePopperScope(C), [J, X] = React$1.useState(null), $ = useId$1(), PD = React$1.useRef(0), FD = V ?? K.disableHoverableContent, ID = U ?? K.delayDuration, LD = React$1.useRef(!1), [RD, zD] = useControllableState({
		prop: k,
		defaultProp: F ?? !1,
		onChange: (s) => {
			s ? (K.onOpen(), document.dispatchEvent(new CustomEvent(TOOLTIP_OPEN))) : K.onClose(), L?.(s);
		},
		caller: TOOLTIP_NAME
	}), BD = React$1.useMemo(() => RD ? LD.current ? "delayed-open" : "instant-open" : "closed", [RD]), VD = React$1.useCallback(() => {
		window.clearTimeout(PD.current), PD.current = 0, LD.current = !1, zD(!0);
	}, [zD]), HD = React$1.useCallback(() => {
		window.clearTimeout(PD.current), PD.current = 0, zD(!1);
	}, [zD]), UD = React$1.useCallback(() => {
		window.clearTimeout(PD.current), PD.current = window.setTimeout(() => {
			LD.current = !0, zD(!0), PD.current = 0;
		}, ID);
	}, [ID, zD]);
	return React$1.useEffect(() => () => {
		PD.current &&= (window.clearTimeout(PD.current), 0);
	}, []), /* @__PURE__ */ jsx(Root2$1, {
		...q,
		children: /* @__PURE__ */ jsx(TooltipContextProvider, {
			scope: C,
			contentId: $,
			open: RD,
			stateAttribute: BD,
			trigger: J,
			onTriggerChange: X,
			onTriggerEnter: React$1.useCallback(() => {
				K.isOpenDelayedRef.current ? UD() : VD();
			}, [
				K.isOpenDelayedRef,
				UD,
				VD
			]),
			onTriggerLeave: React$1.useCallback(() => {
				FD ? HD() : (window.clearTimeout(PD.current), PD.current = 0);
			}, [HD, FD]),
			onOpen: VD,
			onClose: HD,
			disableHoverableContent: FD,
			children: w
		})
	});
};
Tooltip.displayName = TOOLTIP_NAME;
var TRIGGER_NAME = "TooltipTrigger", TooltipTrigger = React$1.forwardRef((d, C) => {
	let { __scopeTooltip: w, ...k } = d, F = useTooltipContext(TRIGGER_NAME, w), L = useTooltipProviderContext(TRIGGER_NAME, w), V = usePopperScope(w), U = useComposedRefs(C, React$1.useRef(null), F.onTriggerChange), K = React$1.useRef(!1), q = React$1.useRef(!1), J = React$1.useCallback(() => K.current = !1, []);
	return React$1.useEffect(() => () => document.removeEventListener("pointerup", J), [J]), /* @__PURE__ */ jsx(Anchor, {
		asChild: !0,
		...V,
		children: /* @__PURE__ */ jsx(Primitive.button, {
			"aria-describedby": F.open ? F.contentId : void 0,
			"data-state": F.stateAttribute,
			...k,
			ref: U,
			onPointerMove: composeEventHandlers(d.onPointerMove, (s) => {
				s.pointerType !== "touch" && !q.current && !L.isPointerInTransitRef.current && (F.onTriggerEnter(), q.current = !0);
			}),
			onPointerLeave: composeEventHandlers(d.onPointerLeave, () => {
				F.onTriggerLeave(), q.current = !1;
			}),
			onPointerDown: composeEventHandlers(d.onPointerDown, () => {
				F.open && F.onClose(), K.current = !0, document.addEventListener("pointerup", J, { once: !0 });
			}),
			onFocus: composeEventHandlers(d.onFocus, () => {
				K.current || F.onOpen();
			}),
			onBlur: composeEventHandlers(d.onBlur, F.onClose),
			onClick: composeEventHandlers(d.onClick, F.onClose)
		})
	});
});
TooltipTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME = "TooltipPortal", [PortalProvider, usePortalContext] = createTooltipContext(PORTAL_NAME, { forceMount: void 0 }), TooltipPortal = (s) => {
	let { __scopeTooltip: d, forceMount: C, children: w, container: k } = s, F = useTooltipContext(PORTAL_NAME, d);
	return /* @__PURE__ */ jsx(PortalProvider, {
		scope: d,
		forceMount: C,
		children: /* @__PURE__ */ jsx(Presence, {
			present: C || F.open,
			children: /* @__PURE__ */ jsx(Portal, {
				asChild: !0,
				container: k,
				children: w
			})
		})
	});
};
TooltipPortal.displayName = PORTAL_NAME;
var CONTENT_NAME = "TooltipContent", TooltipContent = React$1.forwardRef((s, d) => {
	let C = usePortalContext(CONTENT_NAME, s.__scopeTooltip), { forceMount: w = C.forceMount, side: k = "top", ...F } = s, L = useTooltipContext(CONTENT_NAME, s.__scopeTooltip);
	return /* @__PURE__ */ jsx(Presence, {
		present: w || L.open,
		children: L.disableHoverableContent ? /* @__PURE__ */ jsx(TooltipContentImpl, {
			side: k,
			...F,
			ref: d
		}) : /* @__PURE__ */ jsx(TooltipContentHoverable, {
			side: k,
			...F,
			ref: d
		})
	});
}), TooltipContentHoverable = React$1.forwardRef((d, C) => {
	let w = useTooltipContext(CONTENT_NAME, d.__scopeTooltip), k = useTooltipProviderContext(CONTENT_NAME, d.__scopeTooltip), F = React$1.useRef(null), L = useComposedRefs(C, F), [V, U] = React$1.useState(null), { trigger: K, onClose: q } = w, J = F.current, { onPointerInTransitChange: X } = k, $ = React$1.useCallback(() => {
		U(null), X(!1);
	}, [X]), PD = React$1.useCallback((s, d) => {
		let C = s.currentTarget, w = {
			x: s.clientX,
			y: s.clientY
		}, k = getPaddedExitPoints(w, getExitSideFromRect(w, C.getBoundingClientRect())), F = getPointsFromRect(d.getBoundingClientRect());
		U(getHull([...k, ...F])), X(!0);
	}, [X]);
	return React$1.useEffect(() => () => $(), [$]), React$1.useEffect(() => {
		if (K && J) {
			let s = (s) => PD(s, J), d = (s) => PD(s, K);
			return K.addEventListener("pointerleave", s), J.addEventListener("pointerleave", d), () => {
				K.removeEventListener("pointerleave", s), J.removeEventListener("pointerleave", d);
			};
		}
	}, [
		K,
		J,
		PD,
		$
	]), React$1.useEffect(() => {
		if (V) {
			let s = (s) => {
				let d = s.target, C = {
					x: s.clientX,
					y: s.clientY
				}, w = K?.contains(d) || J?.contains(d), k = !isPointInPolygon(C, V);
				w ? $() : k && ($(), q());
			};
			return document.addEventListener("pointermove", s), () => document.removeEventListener("pointermove", s);
		}
	}, [
		K,
		J,
		V,
		q,
		$
	]), /* @__PURE__ */ jsx(TooltipContentImpl, {
		...d,
		ref: L
	});
}), [VisuallyHiddenContentContextProvider, useVisuallyHiddenContentContext] = createTooltipContext(TOOLTIP_NAME, { isInside: !1 }), Slottable = /* @__PURE__ */ createSlottable("TooltipContent"), TooltipContentImpl = React$1.forwardRef((d, C) => {
	let { __scopeTooltip: w, children: k, "aria-label": F, onEscapeKeyDown: L, onPointerDownOutside: V, ...U } = d, K = useTooltipContext(CONTENT_NAME, w), q = usePopperScope(w), { onClose: J } = K;
	return React$1.useEffect(() => (document.addEventListener(TOOLTIP_OPEN, J), () => document.removeEventListener(TOOLTIP_OPEN, J)), [J]), React$1.useEffect(() => {
		if (K.trigger) {
			let s = (s) => {
				s.target?.contains(K.trigger) && J();
			};
			return window.addEventListener("scroll", s, { capture: !0 }), () => window.removeEventListener("scroll", s, { capture: !0 });
		}
	}, [K.trigger, J]), /* @__PURE__ */ jsx(DismissableLayer, {
		asChild: !0,
		disableOutsidePointerEvents: !1,
		onEscapeKeyDown: L,
		onPointerDownOutside: V,
		onFocusOutside: (s) => s.preventDefault(),
		onDismiss: J,
		children: /* @__PURE__ */ jsxs(Content, {
			"data-state": K.stateAttribute,
			...q,
			...U,
			ref: C,
			style: {
				...U.style,
				"--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
				"--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
				"--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
				"--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
				"--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
			},
			children: [/* @__PURE__ */ jsx(Slottable, { children: k }), /* @__PURE__ */ jsx(VisuallyHiddenContentContextProvider, {
				scope: w,
				isInside: !0,
				children: /* @__PURE__ */ jsx(Root$4, {
					id: K.contentId,
					role: "tooltip",
					children: F || k
				})
			})]
		})
	});
});
TooltipContent.displayName = CONTENT_NAME;
var ARROW_NAME = "TooltipArrow", TooltipArrow = React$1.forwardRef((s, d) => {
	let { __scopeTooltip: C, ...w } = s, k = usePopperScope(C);
	return useVisuallyHiddenContentContext(ARROW_NAME, C).isInside ? null : /* @__PURE__ */ jsx(Arrow, {
		...k,
		...w,
		ref: d
	});
});
TooltipArrow.displayName = ARROW_NAME;
function getExitSideFromRect(s, d) {
	let C = Math.abs(d.top - s.y), w = Math.abs(d.bottom - s.y), k = Math.abs(d.right - s.x), F = Math.abs(d.left - s.x);
	switch (Math.min(C, w, k, F)) {
		case F: return "left";
		case k: return "right";
		case C: return "top";
		case w: return "bottom";
		default: throw Error("unreachable");
	}
}
function getPaddedExitPoints(s, d, C = 5) {
	let w = [];
	switch (d) {
		case "top":
			w.push({
				x: s.x - C,
				y: s.y + C
			}, {
				x: s.x + C,
				y: s.y + C
			});
			break;
		case "bottom":
			w.push({
				x: s.x - C,
				y: s.y - C
			}, {
				x: s.x + C,
				y: s.y - C
			});
			break;
		case "left":
			w.push({
				x: s.x + C,
				y: s.y - C
			}, {
				x: s.x + C,
				y: s.y + C
			});
			break;
		case "right":
			w.push({
				x: s.x - C,
				y: s.y - C
			}, {
				x: s.x - C,
				y: s.y + C
			});
			break;
	}
	return w;
}
function getPointsFromRect(s) {
	let { top: d, right: C, bottom: w, left: k } = s;
	return [
		{
			x: k,
			y: d
		},
		{
			x: C,
			y: d
		},
		{
			x: C,
			y: w
		},
		{
			x: k,
			y: w
		}
	];
}
function isPointInPolygon(s, d) {
	let { x: C, y: w } = s, k = !1;
	for (let s = 0, F = d.length - 1; s < d.length; F = s++) {
		let L = d[s], V = d[F], U = L.x, K = L.y, q = V.x, J = V.y;
		K > w != J > w && C < (q - U) * (w - K) / (J - K) + U && (k = !k);
	}
	return k;
}
function getHull(s) {
	let d = s.slice();
	return d.sort((s, d) => s.x < d.x ? -1 : s.x > d.x ? 1 : s.y < d.y ? -1 : s.y > d.y ? 1 : 0), getHullPresorted(d);
}
function getHullPresorted(s) {
	if (s.length <= 1) return s.slice();
	let d = [];
	for (let C = 0; C < s.length; C++) {
		let w = s[C];
		for (; d.length >= 2;) {
			let s = d[d.length - 1], C = d[d.length - 2];
			if ((s.x - C.x) * (w.y - C.y) >= (s.y - C.y) * (w.x - C.x)) d.pop();
			else break;
		}
		d.push(w);
	}
	d.pop();
	let C = [];
	for (let d = s.length - 1; d >= 0; d--) {
		let w = s[d];
		for (; C.length >= 2;) {
			let s = C[C.length - 1], d = C[C.length - 2];
			if ((s.x - d.x) * (w.y - d.y) >= (s.y - d.y) * (w.x - d.x)) C.pop();
			else break;
		}
		C.push(w);
	}
	return C.pop(), d.length === 1 && C.length === 1 && d[0].x === C[0].x && d[0].y === C[0].y ? d : d.concat(C);
}
var Provider = TooltipProvider, require_classnames = /* @__PURE__ */ __commonJSMin(((s, d) => {
	(function() {
		var s = {}.hasOwnProperty;
		function C() {
			for (var s = "", d = 0; d < arguments.length; d++) {
				var C = arguments[d];
				C && (s = k(s, w(C)));
			}
			return s;
		}
		function w(d) {
			if (typeof d == "string" || typeof d == "number") return d;
			if (typeof d != "object") return "";
			if (Array.isArray(d)) return C.apply(null, d);
			if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]")) return d.toString();
			var w = "";
			for (var F in d) s.call(d, F) && d[F] && (w = k(w, F));
			return w;
		}
		function k(s, d) {
			return d ? s ? s + " " + d : s + d : s;
		}
		d !== void 0 && d.exports ? (C.default = C, d.exports = C) : typeof define == "function" && typeof define.amd == "object" && define.amd ? define("classnames", [], function() {
			return C;
		}) : window.classNames = C;
	})();
})), o$2 = { asChild: { type: "boolean" } }, t$4 = {
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
	...o$2,
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
}, o$7 = /* @__PURE__ */ "gray.gold.bronze.brown.yellow.amber.orange.tomato.red.ruby.crimson.pink.plum.purple.violet.iris.indigo.blue.cyan.teal.jade.green.grass.lime.mint.sky".split("."), e$7 = [
	"auto",
	"gray",
	"mauve",
	"slate",
	"sage",
	"olive",
	"sand"
], r$2 = { color: {
	type: "enum",
	values: o$7,
	default: void 0
} }, s$8 = { color: {
	type: "enum",
	values: o$7,
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
	...o$2,
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
function i$6(s) {
	return typeof s == "object" && Object.keys(s).some((s) => e$11.includes(s));
}
function R$3({ className: s, customProperties: d, ...C }) {
	return [g$2({
		allowArbitraryValues: !0,
		className: s,
		...C
	}), m$2({
		customProperties: d,
		...C
	})];
}
function g$2({ allowArbitraryValues: s, value: d, className: C, propValues: w, parseValue: k = (s) => s }) {
	let F = [];
	if (d) {
		if (typeof d == "string" && w.includes(d)) return l$4(C, d, k);
		if (i$6(d)) {
			let L = d;
			for (let d in L) {
				if (!e$12(L, d) || !e$11.includes(d)) continue;
				let V = L[d];
				if (V !== void 0) {
					if (w.includes(V)) {
						let s = l$4(C, V, k), w = d === "initial" ? s : `${d}:${s}`;
						F.push(w);
					} else if (s) {
						let s = d === "initial" ? C : `${d}:${C}`;
						F.push(s);
					}
				}
			}
			return F.join(" ");
		}
		if (s) return C;
	}
}
function l$4(s, d, C) {
	let w = s ? "-" : "", k = C(d), F = k?.startsWith("-");
	return `${F ? "-" : ""}${s}${w}${F ? k?.substring(1) : k}`;
}
function m$2({ customProperties: s, value: d, propValues: C, parseValue: w = (s) => s }) {
	let k = {};
	if (!(!d || typeof d == "string" && C.includes(d))) {
		if (typeof d == "string" && (k = Object.fromEntries(s.map((s) => [s, d]))), i$6(d)) {
			let w = d;
			for (let d in w) {
				if (!e$12(w, d) || !e$11.includes(d)) continue;
				let F = w[d];
				if (!C.includes(F)) for (let C of s) k = {
					[d === "initial" ? C : `${C}-${d}`]: F,
					...k
				};
			}
		}
		for (let s in k) {
			let d = k[s];
			d !== void 0 && (k[s] = w(d));
		}
		return k;
	}
}
function l$1(...s) {
	let d = {};
	for (let C of s) C && (d = {
		...d,
		...C
	});
	return Object.keys(d).length ? d : void 0;
}
var import_classnames$16 = /* @__PURE__ */ __toESM(require_classnames());
function N$1(...s) {
	return Object.assign({}, ...s);
}
function v(s, ...d) {
	let C, w, k = { ...s }, F = N$1(...d);
	for (let s in F) {
		let d = k[s], L = F[s];
		if (L.default !== void 0 && d === void 0 && (d = L.default), L.type === "enum" && ![L.default, ...L.values].includes(d) && !i$6(d) && (d = L.default), k[s] = d, "className" in L && L.className) {
			delete k[s];
			let F = "responsive" in L;
			if (!d || i$6(d) && !F) continue;
			if (i$6(d) && (L.default !== void 0 && d.initial === void 0 && (d.initial = L.default), L.type === "enum" && ([L.default, ...L.values].includes(d.initial) || (d.initial = L.default))), L.type === "enum") {
				let s = g$2({
					allowArbitraryValues: !1,
					value: d,
					className: L.className,
					propValues: L.values,
					parseValue: L.parseValue
				});
				C = (0, import_classnames$16.default)(C, s);
				continue;
			}
			if (L.type === "string" || L.type === "enum | string") {
				let s = L.type === "string" ? [] : L.values, [k, F] = R$3({
					className: L.className,
					customProperties: L.customProperties,
					propValues: s,
					parseValue: L.parseValue,
					value: d
				});
				w = l$1(w, F), C = (0, import_classnames$16.default)(C, k);
				continue;
			}
			if (L.type === "boolean" && d) {
				C = (0, import_classnames$16.default)(C, L.className);
				continue;
			}
		}
	}
	return k.className = (0, import_classnames$16.default)(C, s.className), k.style = l$1(w, s.style), k;
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
}, import_classnames$15 = /* @__PURE__ */ __toESM(require_classnames()), r$4 = React$1.forwardRef((d, C) => {
	let { children: w, className: k, asChild: F, as: L = "h1", color: V, ...U } = v(d, n$8, r$1);
	return React$1.createElement(Slot$2, {
		"data-accent-color": V,
		...U,
		ref: C,
		className: (0, import_classnames$15.default)("rt-Heading", k)
	}, F ? w : React$1.createElement(L, null, w));
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
	...o$2,
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
}, import_classnames$14 = /* @__PURE__ */ __toESM(require_classnames()), p$2 = React$1.forwardRef((d, C) => {
	let { children: w, className: k, asChild: F, as: L = "span", color: V, ...U } = v(d, n$7, r$1);
	return React$1.createElement(Slot$2, {
		"data-accent-color": V,
		...U,
		ref: C,
		className: (0, import_classnames$14.default)("rt-Text", k)
	}, F ? w : React$1.createElement(L, null, w));
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
} }, p$11 = [
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
	...o$2,
	hasBackground: {
		type: "boolean",
		default: !0
	},
	appearance: {
		type: "enum",
		values: p$11,
		default: "inherit"
	},
	accentColor: {
		type: "enum",
		values: o$7,
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
}, import_classnames$13 = /* @__PURE__ */ __toESM(require_classnames()), d$4 = () => {}, P = React$1.createContext(void 0);
function H$1() {
	let d = React$1.useContext(P);
	if (d === void 0) throw Error("`useThemeContext` must be used within a `Theme`");
	return d;
}
var R = React$1.forwardRef((d, C) => React$1.useContext(P) === void 0 ? React$1.createElement(Provider, { delayDuration: 200 }, React$1.createElement(Provider$1, { dir: "ltr" }, React$1.createElement(I$2, {
	...d,
	ref: C
}))) : React$1.createElement(A$1, {
	...d,
	ref: C
}));
R.displayName = "Theme";
var I$2 = React$1.forwardRef((d, C) => {
	let { appearance: w = s$10.appearance.default, accentColor: k = s$10.accentColor.default, grayColor: F = s$10.grayColor.default, panelBackground: L = s$10.panelBackground.default, radius: V = s$10.radius.default, scaling: U = s$10.scaling.default, hasBackground: K = s$10.hasBackground.default, ...q } = d, [J, X] = React$1.useState(w);
	React$1.useEffect(() => X(w), [w]);
	let [$, PD] = React$1.useState(k);
	React$1.useEffect(() => PD(k), [k]);
	let [FD, ID] = React$1.useState(F);
	React$1.useEffect(() => ID(F), [F]);
	let [LD, RD] = React$1.useState(L);
	React$1.useEffect(() => RD(L), [L]);
	let [zD, BD] = React$1.useState(V);
	React$1.useEffect(() => BD(V), [V]);
	let [VD, HD] = React$1.useState(U);
	return React$1.useEffect(() => HD(U), [U]), React$1.createElement(A$1, {
		...q,
		ref: C,
		isRoot: !0,
		hasBackground: K,
		appearance: J,
		accentColor: $,
		grayColor: FD,
		panelBackground: LD,
		radius: zD,
		scaling: VD,
		onAppearanceChange: X,
		onAccentColorChange: PD,
		onGrayColorChange: ID,
		onPanelBackgroundChange: RD,
		onRadiusChange: BD,
		onScalingChange: HD
	});
});
I$2.displayName = "ThemeRoot";
var A$1 = React$1.forwardRef((d, C) => {
	let w = React$1.useContext(P), { asChild: k, isRoot: F, hasBackground: L, appearance: V = w?.appearance ?? s$10.appearance.default, accentColor: U = w?.accentColor ?? s$10.accentColor.default, grayColor: K = w?.resolvedGrayColor ?? s$10.grayColor.default, panelBackground: q = w?.panelBackground ?? s$10.panelBackground.default, radius: J = w?.radius ?? s$10.radius.default, scaling: X = w?.scaling ?? s$10.scaling.default, onAppearanceChange: $ = d$4, onAccentColorChange: PD = d$4, onGrayColorChange: FD = d$4, onPanelBackgroundChange: ID = d$4, onRadiusChange: LD = d$4, onScalingChange: RD = d$4, ...zD } = d, BD = k ? Slot$2 : "div", VD = K === "auto" ? a$8(U) : K, HD = d.appearance === "light" || d.appearance === "dark", UD = L === void 0 ? F || HD : L;
	return React$1.createElement(P.Provider, { value: React$1.useMemo(() => ({
		appearance: V,
		accentColor: U,
		grayColor: K,
		resolvedGrayColor: VD,
		panelBackground: q,
		radius: J,
		scaling: X,
		onAppearanceChange: $,
		onAccentColorChange: PD,
		onGrayColorChange: FD,
		onPanelBackgroundChange: ID,
		onRadiusChange: LD,
		onScalingChange: RD
	}), [
		V,
		U,
		K,
		VD,
		q,
		J,
		X,
		$,
		PD,
		FD,
		ID,
		LD,
		RD
	]) }, React$1.createElement(BD, {
		"data-is-root-theme": F ? "true" : "false",
		"data-accent-color": U,
		"data-gray-color": VD,
		"data-has-background": UD ? "true" : "false",
		"data-panel-background": q,
		"data-radius": J,
		"data-scaling": X,
		ref: C,
		...zD,
		className: (0, import_classnames$13.default)("radix-themes", {
			light: V === "light",
			dark: V === "dark"
		}, zD.className)
	}));
});
A$1.displayName = "ThemeImpl";
var a$2 = (d) => {
	if (!React$1.isValidElement(d)) throw Error(`Expected a single React Element child, but got: ${React$1.Children.toArray(d).map((s) => typeof s == "object" && "type" in s && typeof s.type == "string" ? s.type : typeof s).join(", ")}`);
	return d;
};
function d$2(d, C) {
	let { asChild: w, children: k } = d;
	if (!w) return typeof C == "function" ? C(k) : C;
	let F = React$1.Children.only(k);
	return React$1.cloneElement(F, { children: typeof C == "function" ? C(F.props.children) : C });
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
], p$10 = {
	...o$2,
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
}, import_classnames$12 = /* @__PURE__ */ __toESM(require_classnames()), e = React$1.forwardRef((d, C) => {
	let { asChild: w, className: k, color: F, radius: L, ...V } = v(d, p$10, r$1), U = w ? Slot$2 : "span";
	return React$1.createElement(U, {
		"data-accent-color": F,
		"data-radius": L,
		...V,
		ref: C,
		className: (0, import_classnames$12.default)("rt-reset", "rt-Badge", k)
	});
});
e.displayName = "Badge";
var e$2 = Slot$2, s$9 = ["div", "span"], o$6 = [
	"none",
	"inline",
	"inline-block",
	"block",
	"contents"
], p$8 = {
	as: {
		type: "enum",
		values: s$9,
		default: "div"
	},
	...o$2,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: o$6,
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
], i$5 = [
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
], p$9 = ["0", "1"], n$5 = ["0", "1"], u$2 = {
	...p$3,
	...t$4,
	...e$4,
	position: {
		type: "enum",
		className: "rt-r-position",
		values: i$5,
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
		values: p$9,
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
}, import_classnames$11 = /* @__PURE__ */ __toESM(require_classnames()), p$1 = React$1.forwardRef((d, C) => {
	let { className: w, asChild: k, as: F = "div", ...L } = v(d, p$8, u$2, r$1);
	return React$1.createElement(k ? e$2 : F, {
		...L,
		ref: C,
		className: (0, import_classnames$11.default)("rt-Box", w)
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
], i$4 = {
	...o$2,
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
], p$6 = {
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
}, t$2 = ["div", "span"], p$7 = [
	"none",
	"inline-flex",
	"flex"
], a$5 = [
	"row",
	"column",
	"row-reverse",
	"column-reverse"
], o$5 = [
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
	...o$2,
	display: {
		type: "enum",
		className: "rt-r-display",
		values: p$7,
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
		values: o$5,
		responsive: !0
	},
	justify: {
		type: "enum",
		className: "rt-r-jc",
		values: n$3,
		parseValue: f$3,
		responsive: !0
	},
	wrap: {
		type: "enum",
		className: "rt-r-fw",
		values: l$2,
		responsive: !0
	},
	...p$6
};
function f$3(s) {
	return s === "between" ? "space-between" : s;
}
var import_classnames$10 = /* @__PURE__ */ __toESM(require_classnames()), p = React$1.forwardRef((d, C) => {
	let { className: w, asChild: k, as: F = "div", ...L } = v(d, u$1, u$2, r$1);
	return React$1.createElement(k ? e$2 : F, {
		...L,
		ref: C,
		className: (0, import_classnames$10.default)("rt-Flex", w)
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
}, import_classnames$9 = /* @__PURE__ */ __toESM(require_classnames()), s$5 = React$1.forwardRef((d, C) => {
	let { className: w, children: k, loading: F, ...L } = v(d, s$7, r$1);
	if (!F) return k;
	let V = React$1.createElement("span", {
		...L,
		ref: C,
		className: (0, import_classnames$9.default)("rt-Spinner", w)
	}, React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }), React$1.createElement("span", { className: "rt-SpinnerLeaf" }));
	return k === void 0 ? V : React$1.createElement(p, {
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
	}, k), React$1.createElement(p, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, V))));
});
s$5.displayName = "Spinner";
var d$3 = Root$4;
function s$6(s, d) {
	if (s !== void 0) return typeof s == "string" ? d(s) : Object.fromEntries(Object.entries(s).map(([s, C]) => [s, d(C)]));
}
function r$8(s) {
	switch (s) {
		case "1": return "1";
		case "2":
		case "3": return "2";
		case "4": return "3";
	}
}
var import_classnames$8 = /* @__PURE__ */ __toESM(require_classnames()), n = React$1.forwardRef((d, C) => {
	let { size: w = i$4.size.default } = d, { className: k, children: F, asChild: L, color: V, radius: U, disabled: K = d.loading, ...q } = v(d, i$4, r$1), J = L ? Slot$2 : "button";
	return React$1.createElement(J, {
		"data-disabled": K || void 0,
		"data-accent-color": V,
		"data-radius": U,
		...q,
		ref: C,
		className: (0, import_classnames$8.default)("rt-reset", "rt-BaseButton", k),
		disabled: K
	}, d.loading ? React$1.createElement(React$1.Fragment, null, React$1.createElement("span", {
		style: {
			display: "contents",
			visibility: "hidden"
		},
		"aria-hidden": !0
	}, F), React$1.createElement(d$3, null, F), React$1.createElement(p, {
		asChild: !0,
		align: "center",
		justify: "center",
		position: "absolute",
		inset: "0"
	}, React$1.createElement("span", null, React$1.createElement(s$5, { size: s$6(w, r$8) })))) : F);
});
n.displayName = "BaseButton";
var import_classnames$7 = /* @__PURE__ */ __toESM(require_classnames()), o = React$1.forwardRef(({ className: d, ...C }, w) => React$1.createElement(n, {
	...C,
	ref: w,
	className: (0, import_classnames$7.default)("rt-Button", d)
}));
o.displayName = "Button";
var r$7 = React.forwardRef((s, C) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: C
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M0.75 4.5C0.75 4.08579 1.08579 3.75 1.5 3.75H7.5C7.91421 3.75 8.25 4.08579 8.25 4.5C8.25 4.91421 7.91421 5.25 7.5 5.25H1.5C1.08579 5.25 0.75 4.91421 0.75 4.5Z"
})));
r$7.displayName = "ThickDividerHorizontalIcon";
var t = React.forwardRef((s, C) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: C
}, React.createElement("path", {
	fillRule: "evenodd",
	clipRule: "evenodd",
	d: "M8.53547 0.62293C8.88226 0.849446 8.97976 1.3142 8.75325 1.66099L4.5083 8.1599C4.38833 8.34356 4.19397 8.4655 3.9764 8.49358C3.75883 8.52167 3.53987 8.45309 3.3772 8.30591L0.616113 5.80777C0.308959 5.52987 0.285246 5.05559 0.563148 4.74844C0.84105 4.44128 1.31533 4.41757 1.62249 4.69547L3.73256 6.60459L7.49741 0.840706C7.72393 0.493916 8.18868 0.396414 8.53547 0.62293Z"
})));
t.displayName = "ThickCheckIcon";
var i$3 = React.forwardRef((s, C) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: C
}, React.createElement("path", { d: "M0.135232 3.15803C0.324102 2.95657 0.640521 2.94637 0.841971 3.13523L4.5 6.56464L8.158 3.13523C8.3595 2.94637 8.6759 2.95657 8.8648 3.15803C9.0536 3.35949 9.0434 3.67591 8.842 3.86477L4.84197 7.6148C4.64964 7.7951 4.35036 7.7951 4.15803 7.6148L0.158031 3.86477C-0.0434285 3.67591 -0.0536285 3.35949 0.135232 3.15803Z" })));
i$3.displayName = "ChevronDownIcon";
var l = React.forwardRef((s, C) => React.createElement("svg", {
	width: "9",
	height: "9",
	viewBox: "0 0 9 9",
	fill: "currentcolor",
	xmlns: "http://www.w3.org/2000/svg",
	...s,
	ref: C
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
], o$4 = [
	"vertical",
	"horizontal",
	"both"
], t$1 = {
	...o$2,
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
		values: o$4,
		default: "both"
	}
};
function a$3(s) {
	let { m: d, mx: C, my: w, mt: k, mr: F, mb: L, ml: V, ...U } = s;
	return {
		m: d,
		mx: C,
		my: w,
		mt: k,
		mr: F,
		mb: L,
		ml: V,
		rest: U
	};
}
var import_classnames$6 = /* @__PURE__ */ __toESM(require_classnames()), r$5 = r$1.m.values;
function S$1(s) {
	let [d, C] = R$3({
		className: "rt-r-m",
		customProperties: ["--margin"],
		propValues: r$5,
		value: s.m
	}), [w, k] = R$3({
		className: "rt-r-mx",
		customProperties: ["--margin-left", "--margin-right"],
		propValues: r$5,
		value: s.mx
	}), [F, L] = R$3({
		className: "rt-r-my",
		customProperties: ["--margin-top", "--margin-bottom"],
		propValues: r$5,
		value: s.my
	}), [V, U] = R$3({
		className: "rt-r-mt",
		customProperties: ["--margin-top"],
		propValues: r$5,
		value: s.mt
	}), [K, q] = R$3({
		className: "rt-r-mr",
		customProperties: ["--margin-right"],
		propValues: r$5,
		value: s.mr
	}), [J, X] = R$3({
		className: "rt-r-mb",
		customProperties: ["--margin-bottom"],
		propValues: r$5,
		value: s.mb
	}), [$, PD] = R$3({
		className: "rt-r-ml",
		customProperties: ["--margin-left"],
		propValues: r$5,
		value: s.ml
	});
	return [(0, import_classnames$6.default)(d, w, F, V, K, J, $), l$1(C, k, L, U, q, X, PD)];
}
var import_classnames$5 = /* @__PURE__ */ __toESM(require_classnames()), c = React$1.forwardRef((d, C) => {
	let { rest: w, ...k } = a$3(d), [F, L] = S$1(k), { asChild: V, children: U, className: K, style: q, type: J, scrollHideDelay: X = J === "scroll" ? void 0 : 0, dir: $, size: PD = t$1.size.default, radius: FD = t$1.radius.default, scrollbars: ID = t$1.scrollbars.default, ...LD } = w;
	return React$1.createElement(Root, {
		type: J,
		scrollHideDelay: X,
		className: (0, import_classnames$5.default)("rt-ScrollAreaRoot", F, K),
		style: l$1(L, q),
		asChild: V
	}, d$2({
		asChild: V,
		children: U
	}, (d) => React$1.createElement(React$1.Fragment, null, React$1.createElement(Viewport, {
		...LD,
		ref: C,
		className: "rt-ScrollAreaViewport"
	}, d), React$1.createElement("div", { className: "rt-ScrollAreaViewportFocusRing" }), ID === "vertical" ? null : React$1.createElement(Scrollbar, {
		"data-radius": FD,
		orientation: "horizontal",
		className: (0, import_classnames$5.default)("rt-ScrollAreaScrollbar", g$2({
			className: "rt-r-size",
			value: PD,
			propValues: t$1.size.values
		}))
	}, React$1.createElement(Thumb, { className: "rt-ScrollAreaThumb" })), ID === "horizontal" ? null : React$1.createElement(Scrollbar, {
		"data-radius": FD,
		orientation: "vertical",
		className: (0, import_classnames$5.default)("rt-ScrollAreaScrollbar", g$2({
			className: "rt-r-size",
			value: PD,
			propValues: t$1.size.values
		}))
	}, React$1.createElement(Thumb, { className: "rt-ScrollAreaThumb" })), ID === "both" ? React$1.createElement(Corner, { className: "rt-ScrollAreaCorner" }) : null)));
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
	...o$2,
	...r$2,
	shortcut: { type: "string" }
}, i$2 = {
	...r$2,
	shortcut: { type: "string" }
}, p$4 = { ...r$2 }, import_classnames$4 = /* @__PURE__ */ __toESM(require_classnames()), s$2 = (d) => React$1.createElement(Root$3, {
	...d,
	modal: !0
});
s$2.displayName = "Dialog.Root";
var n$2 = React$1.forwardRef(({ children: d, ...C }, w) => React$1.createElement(Trigger$1, {
	...C,
	ref: w,
	asChild: !0
}, a$2(d)));
n$2.displayName = "Dialog.Trigger";
var p$5 = React$1.forwardRef(({ align: d, ...C }, w) => {
	let { align: k, ...F } = s$1, { className: L } = v({ align: d }, { align: k }), { className: V, forceMount: U, container: K, ...q } = v(C, F);
	return React$1.createElement(Portal$2, {
		container: K,
		forceMount: U
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Overlay, { className: "rt-BaseDialogOverlay rt-DialogOverlay" }, React$1.createElement("div", { className: "rt-BaseDialogScroll rt-DialogScroll" }, React$1.createElement("div", { className: `rt-BaseDialogScrollPadding rt-DialogScrollPadding ${L}` }, React$1.createElement(Content$1, {
		...q,
		ref: w,
		className: (0, import_classnames$4.default)("rt-BaseDialogContent", "rt-DialogContent", V)
	}))))));
});
p$5.displayName = "Dialog.Content";
var g$1 = React$1.forwardRef((d, C) => React$1.createElement(Title, { asChild: !0 }, React$1.createElement(r$4, {
	size: "5",
	mb: "3",
	trim: "start",
	...d,
	asChild: !1,
	ref: C
})));
g$1.displayName = "Dialog.Title";
var m = React$1.forwardRef((d, C) => React$1.createElement(Description, { asChild: !0 }, React$1.createElement(p$2, {
	as: "p",
	size: "3",
	...d,
	asChild: !1,
	ref: C
})));
m.displayName = "Dialog.Description";
var D$1 = React$1.forwardRef(({ children: d, ...C }, w) => React$1.createElement(Close, {
	...C,
	ref: w,
	asChild: !0
}, a$2(d)));
D$1.displayName = "Dialog.Close";
var import_classnames$3 = /* @__PURE__ */ __toESM(require_classnames()), I$1 = (d) => React$1.createElement(Root2, { ...d });
I$1.displayName = "DropdownMenu.Root";
var h = React$1.forwardRef(({ children: d, ...C }, w) => React$1.createElement(Trigger, {
	...C,
	ref: w,
	asChild: !0
}, a$2(d)));
h.displayName = "DropdownMenu.Trigger";
var b = React$1.createContext({}), g = React$1.forwardRef((d, C) => {
	let w = H$1(), { size: k = n$1.size.default, variant: F = n$1.variant.default, highContrast: L = n$1.highContrast.default } = d, { className: V, children: U, color: K, container: q, forceMount: J, ...X } = v(d, n$1), $ = K || w.accentColor;
	return React$1.createElement(Portal2, {
		container: q,
		forceMount: J
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(Content2, {
		"data-accent-color": $,
		align: "start",
		sideOffset: 4,
		collisionPadding: 10,
		...X,
		asChild: !1,
		ref: C,
		className: (0, import_classnames$3.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-DropdownMenuContent", V)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$3.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, React$1.createElement(b.Provider, { value: React$1.useMemo(() => ({
		size: k,
		variant: F,
		color: $,
		highContrast: L
	}), [
		k,
		F,
		$,
		L
	]) }, U))))));
});
g.displayName = "DropdownMenu.Content";
var y = React$1.forwardRef(({ className: d, ...C }, w) => React$1.createElement(Label2, {
	...C,
	asChild: !1,
	ref: w,
	className: (0, import_classnames$3.default)("rt-BaseMenuLabel", "rt-DropdownMenuLabel", d)
}));
y.displayName = "DropdownMenu.Label";
var v$1 = React$1.forwardRef((d, C) => {
	let { className: w, children: k, color: F = a$1.color.default, shortcut: L, ...V } = d;
	return React$1.createElement(Item2, {
		"data-accent-color": F,
		...V,
		ref: C,
		className: (0, import_classnames$3.default)("rt-reset", "rt-BaseMenuItem", "rt-DropdownMenuItem", w)
	}, React$1.createElement(Slottable$1, null, k), L && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, L));
});
v$1.displayName = "DropdownMenu.Item";
var R$2 = React$1.forwardRef(({ className: d, ...C }, w) => React$1.createElement(Group2, {
	...C,
	asChild: !1,
	ref: w,
	className: (0, import_classnames$3.default)("rt-BaseMenuGroup", "rt-DropdownMenuGroup", d)
}));
R$2.displayName = "DropdownMenu.Group";
var S = React$1.forwardRef(({ className: d, ...C }, w) => React$1.createElement(RadioGroup2, {
	...C,
	asChild: !1,
	ref: w,
	className: (0, import_classnames$3.default)("rt-BaseMenuRadioGroup", "rt-DropdownMenuRadioGroup", d)
}));
S.displayName = "DropdownMenu.RadioGroup";
var x = React$1.forwardRef((d, C) => {
	let { children: w, className: k, color: F = p$4.color.default, ...L } = d;
	return React$1.createElement(RadioItem2, {
		...L,
		asChild: !1,
		ref: C,
		"data-accent-color": F,
		className: (0, import_classnames$3.default)("rt-BaseMenuItem", "rt-BaseMenuRadioItem", "rt-DropdownMenuItem", "rt-DropdownMenuRadioItem", k)
	}, w, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t, { className: "rt-BaseMenuItemIndicatorIcon rt-DropdownMenuItemIndicatorIcon" })));
});
x.displayName = "DropdownMenu.RadioItem";
var T$1 = React$1.forwardRef((d, C) => {
	let { children: w, className: k, shortcut: F, color: L = i$2.color.default, ...V } = d;
	return React$1.createElement(CheckboxItem2, {
		...V,
		asChild: !1,
		ref: C,
		"data-accent-color": L,
		className: (0, import_classnames$3.default)("rt-BaseMenuItem", "rt-BaseMenuCheckboxItem", "rt-DropdownMenuItem", "rt-DropdownMenuCheckboxItem", k)
	}, w, React$1.createElement(ItemIndicator2, { className: "rt-BaseMenuItemIndicator rt-DropdownMenuItemIndicator" }, React$1.createElement(t, { className: "rt-BaseMenuItemIndicatorIcon rt-ContextMenuItemIndicatorIcon" })), F && React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, F));
});
T$1.displayName = "DropdownMenu.CheckboxItem";
var N = (d) => React$1.createElement(Sub2, { ...d });
N.displayName = "DropdownMenu.Sub";
var E = React$1.forwardRef((d, C) => {
	let { className: w, children: k, ...F } = d;
	return React$1.createElement(SubTrigger2, {
		...F,
		asChild: !1,
		ref: C,
		className: (0, import_classnames$3.default)("rt-BaseMenuItem", "rt-BaseMenuSubTrigger", "rt-DropdownMenuItem", "rt-DropdownMenuSubTrigger", w)
	}, k, React$1.createElement("div", { className: "rt-BaseMenuShortcut rt-DropdownMenuShortcut" }, React$1.createElement(l, { className: "rt-BaseMenuSubTriggerIcon rt-DropdownMenuSubtriggerIcon" })));
});
E.displayName = "DropdownMenu.SubTrigger";
var G$1 = React$1.forwardRef((d, C) => {
	let { size: w, variant: k, color: F, highContrast: L } = React$1.useContext(b), { className: V, children: U, container: K, forceMount: q, ...J } = v({
		size: w,
		variant: k,
		color: F,
		highContrast: L,
		...d
	}, n$1);
	return React$1.createElement(Portal2, {
		container: K,
		forceMount: q
	}, React$1.createElement(R, { asChild: !0 }, React$1.createElement(SubContent2, {
		"data-accent-color": F,
		alignOffset: -Number(w) * 4,
		sideOffset: 1,
		collisionPadding: 10,
		...J,
		asChild: !1,
		ref: C,
		className: (0, import_classnames$3.default)("rt-PopperContent", "rt-BaseMenuContent", "rt-BaseMenuSubContent", "rt-DropdownMenuContent", "rt-DropdownMenuSubContent", V)
	}, React$1.createElement(c, { type: "auto" }, React$1.createElement("div", { className: (0, import_classnames$3.default)("rt-BaseMenuViewport", "rt-DropdownMenuViewport") }, U)))));
});
G$1.displayName = "DropdownMenu.SubContent";
var B$1 = React$1.forwardRef(({ className: d, ...C }, w) => React$1.createElement(Separator2, {
	...C,
	asChild: !1,
	ref: w,
	className: (0, import_classnames$3.default)("rt-BaseMenuSeparator", "rt-DropdownMenuSeparator", d)
}));
B$1.displayName = "DropdownMenu.Separator";
var import_classnames$2 = /* @__PURE__ */ __toESM(require_classnames()), o$1 = React$1.forwardRef(({ className: d, ...C }, w) => React$1.createElement(n, {
	...C,
	ref: w,
	className: (0, import_classnames$2.default)("rt-IconButton", d)
}));
o$1.displayName = "IconButton";
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
}, import_classnames$1 = /* @__PURE__ */ __toESM(require_classnames()), r = React$1.forwardRef((d, C) => {
	let { className: w, color: k, radius: F, style: L, ...V } = v(d, a, r$1);
	return React$1.createElement("div", {
		"data-accent-color": k,
		"data-radius": F,
		className: (0, import_classnames$1.default)("rt-TextAreaRoot", w),
		style: L
	}, React$1.createElement("textarea", {
		className: "rt-reset rt-TextAreaInput",
		ref: C,
		...V
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
}, import_classnames = /* @__PURE__ */ __toESM(require_classnames()), u = React$1.forwardRef((d, C) => {
	let w = React$1.useRef(null), { children: k, className: F, color: L, radius: V, style: U, ...K } = v(d, f, r$1);
	return React$1.createElement("div", {
		"data-accent-color": L,
		"data-radius": V,
		style: U,
		className: (0, import_classnames.default)("rt-TextFieldRoot", F),
		onPointerDown: (s) => {
			let d = s.target;
			if (d.closest("input, button, a")) return;
			let C = w.current;
			if (!C) return;
			let k = d.closest("\n            .rt-TextFieldSlot[data-side='right'],\n            .rt-TextFieldSlot:not([data-side='right']) ~ .rt-TextFieldSlot:not([data-side='left'])\n          ") ? C.value.length : 0;
			requestAnimationFrame(() => {
				try {
					C.setSelectionRange(k, k);
				} catch {}
				C.focus();
			});
		}
	}, React$1.createElement("input", {
		spellCheck: "false",
		...K,
		ref: composeRefs(w, C),
		className: "rt-reset rt-TextFieldInput"
	}), k);
});
u.displayName = "TextField.Root";
var c$1 = React$1.forwardRef((d, C) => {
	let { className: w, color: k, side: F, ...L } = v(d, i);
	return React$1.createElement("div", {
		"data-accent-color": k,
		"data-side": F,
		...L,
		ref: C,
		className: (0, import_classnames.default)("rt-TextFieldSlot", w)
	});
});
c$1.displayName = "TextField.Slot";
function z(s, d = "Assertion error") {
	if (!s) throw Error(d);
}
function W({ group: s }) {
	let { orientation: d, panels: C } = s;
	return C.reduce((s, C) => (s += d === "horizontal" ? C.element.offsetWidth : C.element.offsetHeight, s), 0);
}
function ie(s, d) {
	return d.sort(s === "horizontal" ? Je : Qe);
}
function Je(s, d) {
	let C = s.element.offsetLeft - d.element.offsetLeft;
	return C === 0 ? s.element.offsetWidth - d.element.offsetWidth : C;
}
function Qe(s, d) {
	let C = s.element.offsetTop - d.element.offsetTop;
	return C === 0 ? s.element.offsetHeight - d.element.offsetHeight : C;
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
function et({ orientation: s, rects: d, targetRect: C }) {
	let w = {
		x: C.x + C.width / 2,
		y: C.y + C.height / 2
	}, k, F = Number.MAX_VALUE;
	for (let C of d) {
		let { x: d, y: L } = Ee(w, C), V = s === "horizontal" ? d : L;
		V < F && (F = V, k = C);
	}
	return z(k, "No rect found"), k;
}
function Ie(s) {
	let { element: d, orientation: C, panels: w, separators: k } = s, F = ie(C, Array.from(d.children).filter(Me).map((s) => ({ element: s }))).map(({ element: s }) => s), L = [], V = !1, U, K = [];
	for (let d of F) if (d.hasAttribute("data-panel")) {
		let k = w.find((s) => s.element === d);
		if (k) {
			if (U) {
				let w = U.element.getBoundingClientRect(), F = d.getBoundingClientRect(), q;
				if (V) {
					let s = C === "horizontal" ? new DOMRect(w.right, w.top, 0, w.height) : new DOMRect(w.left, w.bottom, w.width, 0), d = C === "horizontal" ? new DOMRect(F.left, F.top, 0, F.height) : new DOMRect(F.left, F.top, F.width, 0);
					switch (K.length) {
						case 0:
							q = [s, d];
							break;
						case 1: {
							let k = K[0];
							q = [k, et({
								orientation: C,
								rects: [w, F],
								targetRect: k.element.getBoundingClientRect()
							}) === w ? d : s];
							break;
						}
						default:
							q = K;
							break;
					}
				} else q = K.length ? K : [C === "horizontal" ? new DOMRect(w.right, F.top, F.left - w.right, F.height) : new DOMRect(F.left, w.bottom, F.width, F.top - w.bottom)];
				for (let d of q) L.push({
					group: s,
					groupSize: W({ group: s }),
					panels: [U, k],
					separator: "width" in d ? void 0 : d,
					rect: "width" in d ? d : d.element.getBoundingClientRect()
				});
			}
			V = !1, U = k, K = [];
		}
	} else if (d.hasAttribute("data-separator")) {
		let s = k.find((s) => s.element === d);
		s ? K.push(s) : (U = void 0, K = []);
	} else V = !0;
	return L;
}
function tt(s, d) {
	let C = getComputedStyle(s);
	return d * parseFloat(C.fontSize);
}
function nt(s, d) {
	let C = getComputedStyle(s.ownerDocument.body);
	return d * parseFloat(C.fontSize);
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
function Q({ groupSize: s, panelElement: d, styleProp: C }) {
	let w, [k, F] = it(C);
	switch (F) {
		case "%":
			w = k / 100 * s;
			break;
		case "px":
			w = k;
			break;
		case "rem":
			w = nt(d, k);
			break;
		case "em":
			w = tt(d, k);
			break;
		case "vh":
			w = ot(k);
			break;
		case "vw":
			w = rt(k);
			break;
	}
	return w;
}
function G(s) {
	return parseFloat(s.toFixed(3));
}
function pe(s) {
	let { panels: d } = s, C = W({ group: s });
	return C === 0 ? d.map((s) => ({
		collapsedSize: 0,
		collapsible: s.panelConstraints.collapsible === !0,
		defaultSize: void 0,
		minSize: 0,
		maxSize: 100,
		panelId: s.id
	})) : d.map((s) => {
		let { element: d, panelConstraints: w } = s, k = 0;
		w.collapsedSize && (k = G(Q({
			groupSize: C,
			panelElement: d,
			styleProp: w.collapsedSize
		}) / C * 100));
		let F;
		w.defaultSize && (F = G(Q({
			groupSize: C,
			panelElement: d,
			styleProp: w.defaultSize
		}) / C * 100));
		let L = 0;
		w.minSize && (L = G(Q({
			groupSize: C,
			panelElement: d,
			styleProp: w.minSize
		}) / C * 100));
		let V = 100;
		return w.maxSize && (V = G(Q({
			groupSize: C,
			panelElement: d,
			styleProp: w.maxSize
		}) / C * 100)), {
			collapsedSize: k,
			collapsible: w.collapsible === !0,
			defaultSize: F,
			minSize: L,
			maxSize: V,
			panelId: s.id
		};
	});
}
var st = class {
	#e = {};
	addListener(s, d) {
		let C = this.#e[s];
		return C === void 0 ? this.#e[s] = [d] : C.includes(d) || C.push(d), () => {
			this.removeListener(s, d);
		};
	}
	emit(s, d) {
		let C = this.#e[s];
		if (C !== void 0) if (C.length === 1) C[0].call(null, d);
		else {
			let s = !1, w = null, k = Array.from(C);
			for (let C = 0; C < k.length; C++) {
				let F = k[C];
				try {
					F.call(null, d);
				} catch (d) {
					w === null && (s = !0, w = d);
				}
			}
			if (s) throw w;
		}
	}
	removeAllListeners() {
		this.#e = {};
	}
	removeListener(s, d) {
		let C = this.#e[s];
		if (C !== void 0) {
			let s = C.indexOf(d);
			s >= 0 && C.splice(s, 1);
		}
	}
};
function R$1(s, d, C = 0) {
	return Math.abs(G(s) - G(d)) <= C;
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
	let C = M;
	return M = {
		...M,
		...d
	}, d.cursorFlags !== void 0 && T.emit("cursorFlagsChange", M.cursorFlags), d.interactionState !== void 0 && T.emit("interactionStateChange", M.interactionState), d.mountedGroups !== void 0 && (M.mountedGroups.forEach((s, d) => {
		s.derivedPanelConstraints.forEach((w) => {
			if (w.collapsible) {
				let { layout: k } = C.mountedGroups.get(d) ?? {};
				if (k) {
					let C = R$1(w.collapsedSize, s.layout[w.panelId]), F = R$1(w.collapsedSize, k[w.panelId]);
					C && !F && (d.inMemoryLastExpandedPanelSizes[w.panelId] = k[w.panelId]);
				}
			}
		});
	}), T.emit("mountedGroupsChange", M.mountedGroups)), M;
}
function at(s, d) {
	if (s.length !== d.length) return !1;
	for (let C = 0; C < s.length; C++) if (s[C] != d[C]) return !1;
	return !0;
}
function Y(s, d) {
	return R$1(s, d) ? 0 : s > d ? 1 : -1;
}
function H({ panelConstraints: s, size: d }) {
	let { collapsedSize: C = 0, collapsible: w, maxSize: k = 100, minSize: F = 0 } = s;
	if (Y(d, F) < 0) if (w) {
		let s = (C + F) / 2;
		d = Y(d, s) < 0 ? C : F;
	} else d = F;
	return d = Math.min(k, d), d = G(d), d;
}
function Z({ delta: s, initialLayout: d, panelConstraints: C, pivotIndices: w, prevLayout: k, trigger: F }) {
	if (R$1(s, 0)) return d;
	let L = Object.values(d), V = Object.values(k), U = [...L], [K, q] = w;
	z(K != null, "Invalid first pivot index"), z(q != null, "Invalid second pivot index");
	let J = 0;
	if (F === "keyboard") {
		{
			let d = s < 0 ? q : K, w = C[d];
			z(w, `Panel constraints not found for index ${d}`);
			let { collapsedSize: k = 0, collapsible: F, minSize: V = 0 } = w;
			if (F) {
				let C = L[d];
				if (z(C != null, `Previous layout not found for panel index ${d}`), R$1(C, k)) {
					let d = V - C;
					Y(d, Math.abs(s)) > 0 && (s = s < 0 ? 0 - d : d);
				}
			}
		}
		{
			let d = s < 0 ? K : q, w = C[d];
			z(w, `No panel constraints found for index ${d}`);
			let { collapsedSize: k = 0, collapsible: F, minSize: V = 0 } = w;
			if (F) {
				let C = L[d];
				if (z(C != null, `Previous layout not found for panel index ${d}`), R$1(C, V)) {
					let d = C - k;
					Y(d, Math.abs(s)) > 0 && (s = s < 0 ? 0 - d : d);
				}
			}
		}
	}
	{
		let d = s < 0 ? 1 : -1, w = s < 0 ? q : K, k = 0;
		for (;;) {
			let s = L[w];
			z(s != null, `Previous layout not found for panel index ${w}`);
			let F = H({
				panelConstraints: C[w],
				size: 100
			}) - s;
			if (k += F, w += d, w < 0 || w >= C.length) break;
		}
		let F = Math.min(Math.abs(s), Math.abs(k));
		s = s < 0 ? 0 - F : F;
	}
	{
		let d = s < 0 ? K : q;
		for (; d >= 0 && d < C.length;) {
			let w = Math.abs(s) - Math.abs(J), k = L[d];
			z(k != null, `Previous layout not found for panel index ${d}`);
			let F = k - w, V = H({
				panelConstraints: C[d],
				size: F
			});
			if (!R$1(k, V) && (J += k - V, U[d] = V, J.toFixed(3).localeCompare(Math.abs(s).toFixed(3), void 0, { numeric: !0 }) >= 0)) break;
			s < 0 ? d-- : d++;
		}
	}
	if (at(V, U)) return k;
	{
		let d = s < 0 ? q : K, w = L[d];
		z(w != null, `Previous layout not found for panel index ${d}`);
		let k = w + J, F = H({
			panelConstraints: C[d],
			size: k
		});
		if (U[d] = F, !R$1(F, k)) {
			let d = k - F, w = s < 0 ? q : K;
			for (; w >= 0 && w < C.length;) {
				let k = U[w];
				z(k != null, `Previous layout not found for panel index ${w}`);
				let F = k + d, L = H({
					panelConstraints: C[w],
					size: F
				});
				if (R$1(k, L) || (d -= L - k, U[w] = L), R$1(d, 0)) break;
				s > 0 ? w-- : w++;
			}
		}
	}
	if (!R$1(Object.values(U).reduce((s, d) => d + s, 0), 100, .1)) return k;
	let X = Object.keys(k);
	return U.reduce((s, d, C) => (s[X[C]] = d, s), {});
}
function te(s) {
	let { mountedGroups: d } = D();
	for (let [C] of d) if (C.separators.some((d) => d.element === s)) return C;
	throw Error("Could not find parent Group for separator element");
}
function B(s, d) {
	if (Object.keys(s).length !== Object.keys(d).length) return !1;
	for (let C in s) if (d[C] === void 0 || Y(s[C], d[C]) !== 0) return !1;
	return !0;
}
function _({ layout: s, panelConstraints: d }) {
	let C = [...Object.values(s)], w = C.reduce((s, d) => s + d, 0);
	if (C.length !== d.length) throw Error(`Invalid ${d.length} panel layout: ${C.map((s) => `${s}%`).join(", ")}`);
	if (!R$1(w, 100) && C.length > 0) for (let s = 0; s < d.length; s++) {
		let d = C[s];
		z(d != null, `No layout data found for index ${s}`), C[s] = 100 / w * d;
	}
	let k = 0;
	for (let s = 0; s < d.length; s++) {
		let w = C[s];
		z(w != null, `No layout data found for index ${s}`);
		let F = H({
			panelConstraints: d[s],
			size: w
		});
		w != F && (k += w - F, C[s] = F);
	}
	if (!R$1(k, 0)) for (let s = 0; s < d.length; s++) {
		let w = C[s];
		z(w != null, `No layout data found for index ${s}`);
		let F = w + k, L = H({
			panelConstraints: d[s],
			size: F
		});
		if (w !== L && (k -= L - w, C[s] = L, R$1(k, 0))) break;
	}
	let F = Object.keys(s);
	return C.reduce((s, d, C) => (s[F[C]] = d, s), {});
}
function ke({ groupId: s }) {
	let d = () => {
		let { mountedGroups: d } = D();
		for (let [C, w] of d) if (C.id === s) return {
			group: C,
			...w
		};
		throw Error(`Could not find Group with id "${s}"`);
	};
	return {
		getLayout() {
			let { defaultLayoutDeferred: s, layout: C } = d();
			return s ? {} : C;
		},
		setLayout(s) {
			let { defaultLayoutDeferred: C, derivedPanelConstraints: w, group: k, layout: F, separatorToPanels: L } = d(), V = _({
				layout: s,
				panelConstraints: w
			});
			return C ? F : (B(F, V) || I((s) => ({ mountedGroups: new Map(s.mountedGroups).set(k, {
				defaultLayoutDeferred: C,
				derivedPanelConstraints: w,
				layout: V,
				separatorToPanels: L
			}) })), V);
		}
	};
}
function Ge(s) {
	let { mountedGroups: d } = D(), C = d.get(s);
	return z(C, `Mounted Group ${s.id} not found`), C;
}
function O(s, d) {
	let C = te(s), w = Ge(C), k = C.separators.find((d) => d.element === s);
	z(k, "Matching separator not found");
	let F = w.separatorToPanels.get(k);
	z(F, "Matching panels not found");
	let L = F.map((s) => C.panels.indexOf(s)), V = ke({ groupId: C.id }).getLayout(), U = _({
		layout: Z({
			delta: d,
			initialLayout: V,
			panelConstraints: w.derivedPanelConstraints,
			pivotIndices: L,
			prevLayout: V,
			trigger: "keyboard"
		}),
		panelConstraints: w.derivedPanelConstraints
	});
	B(V, U) || I((s) => ({ mountedGroups: new Map(s.mountedGroups).set(C, {
		defaultLayoutDeferred: w.defaultLayoutDeferred,
		derivedPanelConstraints: w.derivedPanelConstraints,
		layout: U,
		separatorToPanels: w.separatorToPanels
	}) }));
}
function me(s) {
	if (s.defaultPrevented) return;
	let d = s.currentTarget, C = te(d);
	if (!C.disabled) switch (s.key) {
		case "ArrowDown":
			s.preventDefault(), C.orientation === "vertical" && O(d, 5);
			break;
		case "ArrowLeft":
			s.preventDefault(), C.orientation === "horizontal" && O(d, -5);
			break;
		case "ArrowRight":
			s.preventDefault(), C.orientation === "horizontal" && O(d, 5);
			break;
		case "ArrowUp":
			s.preventDefault(), C.orientation === "vertical" && O(d, -5);
			break;
		case "End":
			s.preventDefault(), O(d, 100);
			break;
		case "Enter": {
			s.preventDefault();
			let C = te(d), { derivedPanelConstraints: w, layout: k, separatorToPanels: F } = Ge(C), L = C.separators.find((s) => s.element === d);
			z(L, "Matching separator not found");
			let V = F.get(L);
			z(V, "Matching panels not found");
			let U = V[0], K = w.find((s) => s.panelId === U.id);
			if (z(K, "Panel metadata not found"), K.collapsible) {
				let s = k[U.id];
				O(d, (K.collapsedSize === s ? C.inMemoryLastExpandedPanelSizes[U.id] ?? K.minSize : K.collapsedSize) - s);
			}
			break;
		}
		case "F6": {
			s.preventDefault();
			let C = te(d).separators.map((s) => s.element), w = Array.from(C).findIndex((d) => d === s.currentTarget);
			z(w !== null, "Index not found"), C[s.shiftKey ? w > 0 ? w - 1 : C.length - 1 : w + 1 < C.length ? w + 1 : 0].focus();
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
function ut(s, d, C) {
	let w, k = {
		x: Infinity,
		y: Infinity
	};
	for (let F of d) {
		let d = Ee(C, F.rect);
		switch (s) {
			case "horizontal":
				d.x <= k.x && (w = F, k = d);
				break;
			case "vertical":
				d.y <= k.y && (w = F, k = d);
				break;
		}
	}
	return w ? {
		distance: k,
		hitRegion: w
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
	let C = {
		a: Se(s),
		b: Se(d)
	}, w;
	for (; C.a.at(-1) === C.b.at(-1);) s = C.a.pop(), d = C.b.pop(), w = s;
	z(w, "Stacking order can only be calculated for elements with a common ancestor");
	let k = {
		a: ge(ye(C.a)),
		b: ge(ye(C.b))
	};
	if (k.a === k.b) {
		let s = w.childNodes, d = {
			a: C.a.at(-1),
			b: C.b.at(-1)
		}, k = s.length;
		for (; k--;) {
			let C = s[k];
			if (C === d.a) return 1;
			if (C === d.b) return -1;
		}
	}
	return Math.sign(k.a - k.b);
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
		let C = s[d];
		if (z(C, "Missing node"), ht(C)) return C;
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
function gt({ groupElement: s, hitRegion: d, pointerEventTarget: C }) {
	if (!Me(C) || C.contains(s) || s.contains(C)) return !0;
	if (dt(C, s) > 0) {
		let w = C;
		for (; w;) {
			if (w.contains(s)) return !0;
			if (yt(w.getBoundingClientRect(), d)) return !1;
			w = w.parentElement;
		}
	}
	return !0;
}
function Ae(s, d) {
	let C = [];
	return d.forEach((d, w) => {
		if (w.disabled) return;
		let k = ct() ? he.coarse : he.precise, F = Ie(w), L = ut(w.orientation, F, {
			x: s.clientX,
			y: s.clientY
		});
		L && L.distance.x <= k && L.distance.y <= k && gt({
			groupElement: w.element,
			hitRegion: L.hitRegion.rect,
			pointerEventTarget: s.target
		}) && C.push(L.hitRegion);
	}), C;
}
function ve(s) {
	if (s.defaultPrevented || s.pointerType === "mouse" && s.button > 0) return;
	let { mountedGroups: d } = D(), C = Ae(s, d), w = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Map(), V = !1;
	C.forEach((s) => {
		w.add(s.group), s.panels.forEach((s) => {
			k.add(s);
		}), s.separator && (F.add(s.separator), V || (V = !0, s.separator.element.focus()));
		let C = d.get(s.group);
		C && L.set(s.group, C.layout);
	}), I({ interactionState: {
		hitRegions: C,
		initialLayoutMap: L,
		pointerDownAtPoint: {
			x: s.clientX,
			y: s.clientY
		},
		state: "active"
	} }), C.length && s.preventDefault();
}
function St({ cursorFlags: s, groups: d, state: C }) {
	let w = 0, k = 0;
	switch (C) {
		case "active":
		case "hover": d.forEach((s) => {
			if (!s.disableCursor) switch (s.orientation) {
				case "horizontal":
					w++;
					break;
				case "vertical":
					k++;
					break;
			}
		});
	}
	if (w === 0 && k === 0) return null;
	switch (C) {
		case "active": {
			let d = (s & De) !== 0, C = (s & Oe) !== 0, w = (s & Te) !== 0, k = (s & Ne) !== 0;
			if (s) {
				if (d) return w ? "se-resize" : k ? "ne-resize" : "e-resize";
				if (C) return w ? "sw-resize" : k ? "nw-resize" : "w-resize";
				if (w) return "s-resize";
				if (k) return "n-resize";
			}
			break;
		}
	}
	return w > 0 && k > 0 ? "move" : w > 0 ? "ew-resize" : "ns-resize";
}
var xe = /* @__PURE__ */ new WeakMap();
function se(s) {
	if (s.defaultView === null || s.defaultView === void 0) return;
	let { prevStyle: d, styleSheet: C } = xe.get(s) ?? {};
	C === void 0 && (C = new s.defaultView.CSSStyleSheet(), s.adoptedStyleSheets = [C]);
	let { cursorFlags: w, interactionState: k } = D();
	switch (k.state) {
		case "active":
		case "hover": {
			let s = St({
				cursorFlags: w,
				groups: k.hitRegions.map((s) => s.group),
				state: k.state
			}), F = `*{cursor: ${s} !important; ${k.state === "active" ? "touch-action: none;" : ""} }`;
			if (d === F) return;
			d = F, s ? C.cssRules.length === 0 ? C.insertRule(F) : C.replaceSync(F) : C.cssRules.length === 1 && C.deleteRule(0);
			break;
		}
		case "inactive":
			d = void 0, C.cssRules.length === 1 && C.deleteRule(0);
			break;
	}
	xe.set(s, {
		prevStyle: d,
		styleSheet: C
	});
}
function $e({ document: s, event: d, hitRegions: C, initialLayoutMap: w, mountedGroups: k, pointerDownAtPoint: F }) {
	let L = 0, V = new Map(k);
	C.forEach((s) => {
		let { group: C, groupSize: U } = s, { disableCursor: K, orientation: q, panels: J } = C, X = 0;
		X = F ? q === "horizontal" ? (d.clientX - F.x) / U * 100 : (d.clientY - F.y) / U * 100 : q === "horizontal" ? d.clientX < 0 ? -100 : 100 : d.clientY < 0 ? -100 : 100;
		let $ = w.get(C), { defaultLayoutDeferred: PD, derivedPanelConstraints: FD, layout: ID, separatorToPanels: LD } = k.get(C) ?? { defaultLayoutDeferred: !1 };
		if (FD && $ && ID && LD) {
			let d = Z({
				delta: X,
				initialLayout: $,
				panelConstraints: FD,
				pivotIndices: s.panels.map((s) => J.indexOf(s)),
				prevLayout: ID,
				trigger: "mouse-or-touch"
			});
			if (B(d, ID)) {
				if (X !== 0 && !K) switch (q) {
					case "horizontal":
						L |= X < 0 ? De : Oe;
						break;
					case "vertical":
						L |= X < 0 ? Te : Ne;
						break;
				}
			} else {
				V.set(s.group, {
					defaultLayoutDeferred: PD,
					derivedPanelConstraints: FD,
					layout: d,
					separatorToPanels: LD
				});
				let C = s.group.panels.map(({ id: s }) => s).join(",");
				s.group.inMemoryLayouts[C] = d;
			}
		}
	}), I({
		cursorFlags: L,
		mountedGroups: V
	}), se(s);
}
function ze(s) {
	let { interactionState: d, mountedGroups: C } = D();
	switch (d.state) {
		case "active": $e({
			document: s.currentTarget,
			event: s,
			hitRegions: d.hitRegions,
			initialLayoutMap: d.initialLayoutMap,
			mountedGroups: C
		});
	}
}
function be(s) {
	if (s.defaultPrevented) return;
	let { interactionState: d, mountedGroups: C } = D();
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
				mountedGroups: C,
				pointerDownAtPoint: d.pointerDownAtPoint
			});
			break;
		default: {
			let w = Ae(s, C);
			w.length === 0 ? d.state !== "inactive" && I({ interactionState: { state: "inactive" } }) : I({ interactionState: {
				hitRegions: w,
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
	let d = 0, C = 0, w = {};
	for (let k of s) if (k.defaultSize !== void 0) {
		d++;
		let s = G(k.defaultSize);
		C += s, w[k.panelId] = s;
	} else w[k.panelId] = void 0;
	let k = s.length - d;
	if (k !== 0) {
		let d = G((100 - C) / k);
		for (let C of s) C.defaultSize === void 0 && (w[C.panelId] = d);
	}
	return w;
}
function vt(s, d, C) {
	if (!C[0]) return;
	let w = s.panels.find((s) => s.element === d);
	if (!w || !w.onResize) return;
	let k = W({ group: s }), F = s.orientation === "horizontal" ? w.element.offsetWidth : w.element.offsetHeight, L = w.mutableValues.prevSize, V = {
		asPercentage: G(F / k * 100),
		inPixels: F
	};
	w.mutableValues.prevSize = V, w.onResize(V, w.id, L);
}
function xt(s, d) {
	if (Object.keys(s).length !== Object.keys(d).length) return !1;
	for (let C in s) if (s[C] !== d[C]) return !1;
	return !0;
}
function zt(s, d) {
	let C = s.map((s) => s.id), w = Object.keys(d);
	if (C.length !== w.length) return !1;
	for (let s of C) if (!w.includes(s)) return !1;
	return !0;
}
var j = /* @__PURE__ */ new Map();
function bt(s) {
	let d = !0;
	z(s.element.ownerDocument.defaultView, "Cannot register an unmounted Group");
	let C = s.element.ownerDocument.defaultView.ResizeObserver, w = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), F = new C((C) => {
		for (let w of C) {
			let { borderBoxSize: C, target: k } = w;
			if (k === s.element) {
				if (d) {
					if (W({ group: s }) === 0) return;
					I((d) => {
						let C = d.mountedGroups.get(s);
						if (C) {
							let w = pe(s), k = C.defaultLayoutDeferred ? Le(w) : C.layout, F = _({
								layout: k,
								panelConstraints: w
							});
							return !C.defaultLayoutDeferred && B(k, F) && xt(C.derivedPanelConstraints, w) ? d : { mountedGroups: new Map(d.mountedGroups).set(s, {
								defaultLayoutDeferred: !1,
								derivedPanelConstraints: w,
								layout: F,
								separatorToPanels: C.separatorToPanels
							}) };
						}
						return d;
					});
				}
			} else vt(s, k, C);
		}
	});
	F.observe(s.element), s.panels.forEach((s) => {
		z(!w.has(s.id), `Panel ids must be unique; id "${s.id}" was used more than once`), w.add(s.id), s.onResize && F.observe(s.element);
	});
	let L = W({ group: s }), V = pe(s), U = s.panels.map(({ id: s }) => s).join(","), K = s.defaultLayout;
	K && (zt(s.panels, K) || (K = void 0));
	let q = _({
		layout: s.inMemoryLayouts[U] ?? K ?? Le(V),
		panelConstraints: V
	}), J = Ie(s), X = s.element.ownerDocument;
	return I((d) => {
		let C = /* @__PURE__ */ new Map();
		return j.set(X, (j.get(X) ?? 0) + 1), J.forEach((s) => {
			s.separator && C.set(s.separator, s.panels);
		}), { mountedGroups: new Map(d.mountedGroups).set(s, {
			defaultLayoutDeferred: L === 0,
			derivedPanelConstraints: V,
			layout: q,
			separatorToPanels: C
		}) };
	}), s.separators.forEach((s) => {
		z(!k.has(s.id), `Separator ids must be unique; id "${s.id}" was used more than once`), k.add(s.id), s.element.addEventListener("keydown", me);
	}), j.get(X) === 1 && (X.addEventListener("pointerdown", ve, !0), X.addEventListener("pointerleave", ze), X.addEventListener("pointermove", be), X.addEventListener("pointerup", we, !0)), function() {
		d = !1, j.set(X, Math.max(0, (j.get(X) ?? 0) - 1)), I((d) => {
			let C = new Map(d.mountedGroups);
			return C.delete(s), { mountedGroups: C };
		}), s.separators.forEach((s) => {
			s.element.removeEventListener("keydown", me);
		}), j.get(X) || (X.removeEventListener("pointerdown", ve, !0), X.removeEventListener("pointerleave", ze), X.removeEventListener("pointermove", be), X.removeEventListener("pointerup", we, !0)), F.disconnect();
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
		for (let C in s) d.current[C] = s[C];
	}, [s]), d.current;
}
var Fe = "--react-resizable-panels--panel--pointer-events";
function Ve(s, d) {
	return `--react-resizable-panels--${s.replace(/[^a-zA-Z0-9\-_]/g, "")}--${d.replace(/[^a-zA-Z0-9\-_]/g, "")}`;
}
var je = createContext(null);
function Pt(s, d) {
	let C = useRef({
		getLayout: () => ({}),
		setLayout: lt
	});
	useImperativeHandle(d, () => C.current, []), A(() => {
		Object.assign(C.current, ke({ groupId: s }));
	});
}
function Rt({ children: s, className: d, defaultLayout: C, disableCursor: w, disabled: k, elementRef: F, groupRef: L, id: V, onLayoutChange: U, orientation: K = "horizontal", style: q, ...X }) {
	let $ = useRef({}), PD = le((s) => {
		B($.current, s) || ($.current = s, U?.(s));
	}), FD = ae(V), zD = useRef(null), [BD, VD] = useState(!1), [HD, UD] = useState(C ?? {}), [GD, KD] = wt(), qD = useRef({
		lastExpandedPanelSizes: {},
		layouts: {},
		panels: [],
		separators: []
	}), JD = ue(zD, F);
	Pt(FD, L);
	let YD = useMemo(() => ({
		id: FD,
		orientation: K,
		registerPanel: (s) => {
			let d = qD.current;
			return d.panels = ie(K, [...d.panels, s]), KD(), () => {
				d.panels = d.panels.filter((d) => d !== s), KD();
			};
		},
		registerSeparator: (s) => {
			let d = qD.current;
			return d.separators = ie(K, [...d.separators, s]), KD(), () => {
				d.separators = d.separators.filter((d) => d !== s), KD();
			};
		}
	}), [
		FD,
		KD,
		K
	]), XD = Lt({
		defaultLayout: C,
		disableCursor: w
	}), ZD = useRef(null);
	A(() => {
		let s = zD.current;
		if (s === null) return;
		let d = qD.current, C = {
			defaultLayout: XD.defaultLayout,
			disableCursor: !!XD.disableCursor,
			disabled: !!k,
			element: s,
			id: FD,
			inMemoryLastExpandedPanelSizes: qD.current.lastExpandedPanelSizes,
			inMemoryLayouts: qD.current.layouts,
			orientation: K,
			panels: d.panels,
			separators: d.separators
		};
		ZD.current = C;
		let w = bt(C), F = D().mountedGroups.get(C);
		if (F) {
			let { defaultLayoutDeferred: s, derivedPanelConstraints: d, layout: C } = F;
			!s && d.length > 0 && (UD(C), PD?.(C));
		}
		let L = T.addListener("interactionStateChange", (s) => {
			switch (s.state) {
				case "active":
					VD(s.hitRegions.some((s) => s.group === C));
					break;
				default:
					VD(!1);
					break;
			}
		}), V = T.addListener("mountedGroupsChange", (s) => {
			let d = s.get(C);
			if (d) {
				let { defaultLayoutDeferred: s, derivedPanelConstraints: C, layout: w } = d;
				if (s || C.length === 0) return;
				UD(w), PD?.(w);
			}
		});
		return () => {
			ZD.current = null, w(), L(), V();
		};
	}, [
		k,
		FD,
		PD,
		K,
		GD,
		XD
	]), useEffect(() => {
		let s = ZD.current;
		s && (s.defaultLayout = C, s.disableCursor = !!w);
	});
	let QD = { [Fe]: BD ? "none" : void 0 };
	for (let s in HD) {
		let d = Ve(FD, s);
		QD[d] = HD[s];
	}
	return /* @__PURE__ */ jsx(je.Provider, {
		value: YD,
		children: /* @__PURE__ */ jsx("div", {
			...X,
			"aria-orientation": K,
			className: d,
			"data-group": !0,
			"data-testid": FD,
			id: FD,
			ref: JD,
			style: {
				height: "100%",
				width: "100%",
				overflow: "hidden",
				...q,
				...QD,
				display: "flex",
				flexDirection: K === "horizontal" ? "row" : "column",
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
	let C = () => {
		let { mountedGroups: d } = D();
		for (let [C, { defaultLayoutDeferred: w, derivedPanelConstraints: k, layout: F, separatorToPanels: L }] of d) if (C.id === s) return {
			defaultLayoutDeferred: w,
			derivedPanelConstraints: k,
			group: C,
			layout: F,
			separatorToPanels: L
		};
		throw Error(`Group ${s} not found`);
	}, w = () => {
		let s = C().derivedPanelConstraints.find((s) => s.panelId === d);
		if (s !== void 0) return s;
		throw Error(`Panel constraints not found for Panel ${d}`);
	}, k = () => {
		let s = C().group.panels.find((s) => s.id === d);
		if (s !== void 0) return s;
		throw Error(`Layout not found for Panel ${d}`);
	}, F = () => {
		let s = C().layout[d];
		if (s !== void 0) return s;
		throw Error(`Layout not found for Panel ${d}`);
	}, L = (s) => {
		let w = F();
		if (s === w) return;
		let { defaultLayoutDeferred: k, derivedPanelConstraints: L, group: V, layout: U, separatorToPanels: K } = C(), q = V.panels.findIndex((s) => s.id === d), J = q === V.panels.length - 1, X = _({
			layout: Z({
				delta: J ? w - s : s - w,
				initialLayout: U,
				panelConstraints: L,
				pivotIndices: J ? [q - 1, q] : [q, q + 1],
				prevLayout: U,
				trigger: "imperative-api"
			}),
			panelConstraints: L
		});
		B(U, X) || I((s) => ({ mountedGroups: new Map(s.mountedGroups).set(V, {
			defaultLayoutDeferred: k,
			derivedPanelConstraints: L,
			layout: X,
			separatorToPanels: K
		}) }));
	};
	return {
		collapse: () => {
			let { collapsible: s, collapsedSize: d } = w(), { mutableValues: C } = k(), V = F();
			s && V !== d && (C.expandToSize = V, L(d));
		},
		expand: () => {
			let { collapsible: s, collapsedSize: d, minSize: C } = w(), { mutableValues: V } = k(), U = F();
			if (s && U === d) {
				let s = V.expandToSize ?? C;
				s === 0 && (s = 1), L(s);
			}
		},
		getSize: () => {
			let { group: s } = C(), d = F(), { element: w } = k();
			return {
				asPercentage: d,
				inPixels: s.orientation === "horizontal" ? w.offsetWidth : w.offsetHeight
			};
		},
		isCollapsed: () => {
			let { collapsible: s, collapsedSize: d } = w(), C = F();
			return s && R$1(d, C);
		},
		resize: (s) => {
			if (F() !== s) {
				let d;
				switch (typeof s) {
					case "number": {
						let { group: w } = C();
						d = G(s / W({ group: w }) * 100);
						break;
					}
					case "string":
						d = parseFloat(s);
						break;
				}
				L(d);
			}
		}
	};
}
function It(s, d) {
	let { id: C } = ce(), w = useRef({
		collapse: ne,
		expand: ne,
		getSize: () => ({
			asPercentage: 0,
			inPixels: 0
		}),
		isCollapsed: () => !1,
		resize: ne
	});
	useImperativeHandle(d, () => w.current, []), A(() => {
		Object.assign(w.current, Et({
			groupId: C,
			panelId: s
		}));
	});
}
function kt({ children: s, className: d, collapsedSize: C = "0%", collapsible: w = !1, defaultSize: k, elementRef: F, id: L, maxSize: V = "100%", minSize: U = "0%", onResize: K, panelRef: q, style: J, ...X }) {
	let $ = !!L, PD = ae(L), FD = useRef(null), ID = ue(FD, F), { id: RD, registerPanel: zD } = ce(), BD = K !== null, VD = le((s, d, C) => {
		K?.(s, L, C);
	});
	A(() => {
		let s = FD.current;
		if (s !== null) return zD({
			element: s,
			id: PD,
			idIsStable: $,
			mutableValues: {
				expandToSize: void 0,
				prevSize: void 0
			},
			onResize: BD ? VD : void 0,
			panelConstraints: {
				collapsedSize: C,
				collapsible: w,
				defaultSize: k,
				maxSize: V,
				minSize: U
			}
		});
	}, [
		C,
		w,
		k,
		BD,
		PD,
		$,
		V,
		U,
		VD,
		zD
	]), It(PD, q);
	let HD = Ve(RD, PD);
	return /* @__PURE__ */ jsx("div", {
		...X,
		"data-panel": !0,
		"data-testid": PD,
		id: PD,
		ref: ID,
		style: {
			...Gt,
			flexBasis: 0,
			flexGrow: `var(${HD}, 1)`,
			flexShrink: 1,
			overflow: "hidden",
			pointerEvents: `var(${Fe})`
		},
		children: /* @__PURE__ */ jsx("div", {
			className: d,
			style: {
				width: "100%",
				height: "100%",
				...J
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
function Dt({ layout: s, panelConstraints: d, panelId: C, panelIndex: w }) {
	let k, F, L = s[C], V = d.find((s) => s.panelId === C);
	if (V) {
		let U = V.maxSize, K = F = V.collapsible ? V.collapsedSize : V.minSize, q = [w, w + 1];
		F = _({
			layout: Z({
				delta: K - L,
				initialLayout: s,
				panelConstraints: d,
				pivotIndices: q,
				prevLayout: s,
				trigger: "keyboard"
			}),
			panelConstraints: d
		})[C], k = _({
			layout: Z({
				delta: U - L,
				initialLayout: s,
				panelConstraints: d,
				pivotIndices: q,
				prevLayout: s,
				trigger: "keyboard"
			}),
			panelConstraints: d
		})[C];
	}
	return {
		valueControls: C,
		valueMax: k,
		valueMin: F,
		valueNow: L
	};
}
function Ot({ children: s, className: d, elementRef: C, id: w, style: k, ...F }) {
	let L = ae(w), [V, U] = useState({}), [K, q] = useState("inactive"), J = useRef(null), X = ue(J, C), { id: $, orientation: PD, registerSeparator: FD } = ce(), ID = PD === "horizontal" ? "vertical" : "horizontal";
	return A(() => {
		let s = J.current;
		if (s !== null) {
			let d = {
				element: s,
				id: L
			}, C = FD(d), w = T.addListener("interactionStateChange", (s) => {
				q(s.state !== "inactive" && s.hitRegions.some((s) => s.separator === d) ? s.state : "inactive");
			}), k = T.addListener("mountedGroupsChange", (s) => {
				s.forEach(({ derivedPanelConstraints: s, layout: C, separatorToPanels: w }, k) => {
					if (k.id === $) {
						let F = w.get(d);
						if (F) {
							let d = F[0], w = k.panels.indexOf(d);
							U(Dt({
								layout: C,
								panelConstraints: s,
								panelId: d.id,
								panelIndex: w
							}));
						}
					}
				});
			});
			return () => {
				w(), k(), C();
			};
		}
	}, [
		$,
		L,
		FD
	]), /* @__PURE__ */ jsx("div", {
		...F,
		"aria-controls": V.valueControls,
		"aria-orientation": ID,
		"aria-valuemax": V.valueMax,
		"aria-valuemin": V.valueMin,
		"aria-valuenow": V.valueNow,
		children: s,
		className: d,
		"data-separator": K,
		"data-testid": L,
		id: L,
		ref: X,
		role: "separator",
		style: {
			flexBasis: "auto",
			...k,
			flexGrow: 0,
			flexShrink: 0
		},
		tabIndex: 0
	});
}
Ot.displayName = "Separator";
function _objectWithoutPropertiesLoose(s, d) {
	if (s == null) return {};
	var C = {}, w = Object.keys(s), k, F;
	for (F = 0; F < w.length; F++) k = w[F], !(d.indexOf(k) >= 0) && (C[k] = s[k]);
	return C;
}
var _excluded$Y = ["color"], ChevronRightIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var C = s.color, w = C === void 0 ? "currentColor" : C, k = _objectWithoutPropertiesLoose(s, _excluded$Y);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, k, { ref: d }), createElement("path", {
		d: "M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z",
		fill: w,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1M = ["color"], DoubleArrowLeftIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var C = s.color, w = C === void 0 ? "currentColor" : C, k = _objectWithoutPropertiesLoose(s, _excluded$1M);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, k, { ref: d }), createElement("path", {
		d: "M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z",
		fill: w,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$1N = ["color"], DoubleArrowRightIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var C = s.color, w = C === void 0 ? "currentColor" : C, k = _objectWithoutPropertiesLoose(s, _excluded$1N);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, k, { ref: d }), createElement("path", {
		d: "M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z",
		fill: w,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$25 = ["color"], EyeNoneIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var C = s.color, w = C === void 0 ? "currentColor" : C, k = _objectWithoutPropertiesLoose(s, _excluded$25);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, k, { ref: d }), createElement("path", {
		d: "M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z",
		fill: w,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$26 = ["color"], EyeOpenIcon = /* @__PURE__ */ forwardRef(function(s, d) {
	var C = s.color, w = C === void 0 ? "currentColor" : C, k = _objectWithoutPropertiesLoose(s, _excluded$26);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, k, { ref: d }), createElement("path", {
		d: "M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",
		fill: w,
		fillRule: "evenodd",
		clipRule: "evenodd"
	}));
}), _excluded$3V = ["color"], Share1Icon = /* @__PURE__ */ forwardRef(function(s, d) {
	var C = s.color, w = C === void 0 ? "currentColor" : C, k = _objectWithoutPropertiesLoose(s, _excluded$3V);
	return createElement("svg", Object.assign({
		width: "15",
		height: "15",
		viewBox: "0 0 15 15",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, k, { ref: d }), createElement("path", {
		d: "M5 7.50003C5 8.32845 4.32843 9.00003 3.5 9.00003C2.67157 9.00003 2 8.32845 2 7.50003C2 6.6716 2.67157 6.00003 3.5 6.00003C4.32843 6.00003 5 6.6716 5 7.50003ZM5.71313 8.66388C5.29445 9.45838 4.46048 10 3.5 10C2.11929 10 1 8.88074 1 7.50003C1 6.11931 2.11929 5.00003 3.5 5.00003C4.46048 5.00003 5.29445 5.54167 5.71313 6.33616L9.10424 4.21671C9.03643 3.98968 9 3.74911 9 3.50003C9 2.11932 10.1193 1.00003 11.5 1.00003C12.8807 1.00003 14 2.11932 14 3.50003C14 4.88074 12.8807 6.00003 11.5 6.00003C10.6915 6.00003 9.97264 5.61624 9.51566 5.0209L5.9853 7.22738C5.99502 7.31692 6 7.40789 6 7.50003C6 7.59216 5.99502 7.68312 5.9853 7.77267L9.51567 9.97915C9.97265 9.38382 10.6915 9.00003 11.5 9.00003C12.8807 9.00003 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5C9 11.2509 9.03643 11.0104 9.10425 10.7833L5.71313 8.66388ZM11.5 5.00003C12.3284 5.00003 13 4.32846 13 3.50003C13 2.6716 12.3284 2.00003 11.5 2.00003C10.6716 2.00003 10 2.6716 10 3.50003C10 4.32846 10.6716 5.00003 11.5 5.00003ZM13 11.5C13 12.3285 12.3284 13 11.5 13C10.6716 13 10 12.3285 10 11.5C10 10.6716 10.6716 10 11.5 10C12.3284 10 13 10.6716 13 11.5Z",
		fill: w,
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
const EditorProvider = ({ children: s, isList: C = !1, availableProps: w = [], theme: k = "light" }) => {
	let [F, L] = useState({
		elements: [],
		selectedElementId: null,
		isList: C,
		mockData: [],
		singleMockData: {},
		listSettings: { sortOrder: "asc" },
		availableProps: w,
		availableFonts: [
			...SAFE_FONTS,
			"Roboto",
			"Open Sans",
			"Lato",
			"Montserrat"
		],
		theme: k
	});
	React.useEffect(() => {
		F.availableFonts.forEach((s) => {
			if (SAFE_FONTS.includes(s)) return;
			let d = `font-${s.replace(/\s+/g, "-").toLowerCase()}`;
			if (!document.getElementById(d)) {
				let C = document.createElement("link");
				C.id = d, C.href = `https://fonts.googleapis.com/css2?family=${s.replace(/ /g, "+")}&display=swap`, C.rel = "stylesheet", document.head.appendChild(C);
			}
		});
	}, [F.availableFonts]), React.useEffect(() => {
		L((s) => ({
			...s,
			isList: C,
			availableProps: w,
			theme: k
		}));
	}, [
		C,
		w,
		k
	]);
	let V = React.useCallback((s) => {
		L((d) => ({
			...d,
			...s,
			isList: s.isList ?? d.isList,
			availableProps: s.availableProps ?? d.availableProps,
			availableFonts: s.availableFonts ?? d.availableFonts,
			selectedElementId: null
		}));
	}, []), U = React.useCallback((s) => {
		let d = {};
		s.type === "box" && (d.backgroundColor = "var(--gray-4)");
		let C = {
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
		L((s) => ({
			...s,
			elements: [...s.elements, C]
		}));
	}, []), K = React.useCallback((s) => {
		L((d) => ({
			...d,
			elements: d.elements.filter((d) => d.id !== s),
			selectedElementId: d.selectedElementId === s ? null : d.selectedElementId
		}));
	}, []), q = React.useCallback((s) => {
		L((d) => ({
			...d,
			selectedElementId: s
		}));
	}, []), J = React.useCallback((s, d) => {
		L((C) => {
			let w = [...C.elements], k = w[s];
			return w.splice(s, 1), w.splice(d, 0, k), {
				...C,
				elements: w
			};
		});
	}, []), X = React.useCallback((s, d) => {
		L((C) => ({
			...C,
			elements: C.elements.map((C) => C.id === s ? {
				...C,
				...d
			} : C)
		}));
	}, []), $ = React.useCallback((s, d) => {
		L((C) => ({
			...C,
			mockData: s,
			singleMockData: d
		}));
	}, []), PD = React.useCallback((s) => {
		L((d) => ({
			...d,
			listSettings: {
				...d.listSettings,
				...s
			}
		}));
	}, []), FD = React.useMemo(() => ({
		state: F,
		addElement: U,
		removeElement: K,
		selectElement: q,
		moveElement: J,
		updateElement: X,
		setMockData: $,
		updateListSettings: PD,
		loadState: V
	}), [
		F,
		U,
		K,
		q,
		J,
		X,
		$,
		PD,
		V
	]);
	return /* @__PURE__ */ jsx(EditorContext.Provider, {
		value: FD,
		children: s
	});
}, useEditor = () => {
	let s = useContext(EditorContext);
	if (!s) throw Error("useEditor must be used within an EditorProvider");
	return s;
};
var __assign$1 = function() {
	return __assign$1 = Object.assign || function(s) {
		for (var d, C = 1, w = arguments.length; C < w; C++) for (var k in d = arguments[C], d) Object.prototype.hasOwnProperty.call(d, k) && (s[k] = d[k]);
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
	var d = s.onResizeStart, C = s.direction, w = s.children, k = s.replaceStyles, F = s.className, L = useCallback(function(s) {
		d(s, C);
	}, [d, C]), V = useCallback(function(s) {
		d(s, C);
	}, [d, C]), U = useMemo(function() {
		return __assign$1(__assign$1({
			position: "absolute",
			userSelect: "none"
		}, styles[C]), k ?? {});
	}, [k, C]);
	return jsx("div", {
		className: F || void 0,
		style: U,
		onMouseDown: L,
		onTouchStart: V,
		children: w
	});
}), __extends = (function() {
	var s = function(d, C) {
		return s = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, d) {
			s.__proto__ = d;
		} || function(s, d) {
			for (var C in d) Object.prototype.hasOwnProperty.call(d, C) && (s[C] = d[C]);
		}, s(d, C);
	};
	return function(d, C) {
		if (typeof C != "function" && C !== null) throw TypeError("Class extends value " + String(C) + " is not a constructor or null");
		s(d, C);
		function w() {
			this.constructor = d;
		}
		d.prototype = C === null ? Object.create(C) : (w.prototype = C.prototype, new w());
	};
})(), __assign = function() {
	return __assign = Object.assign || function(s) {
		for (var d, C = 1, w = arguments.length; C < w; C++) for (var k in d = arguments[C], d) Object.prototype.hasOwnProperty.call(d, k) && (s[k] = d[k]);
		return s;
	}, __assign.apply(this, arguments);
}, DEFAULT_SIZE = {
	width: "auto",
	height: "auto"
}, clamp$1 = function(s, d, C) {
	return Math.max(Math.min(s, C), d);
}, snap = function(s, d, C) {
	var w = Math.round(s / d);
	return w * d + C * (w - 1);
}, hasDirection = function(s, d) {
	return new RegExp(s, "i").test(d);
}, isTouchEvent = function(s) {
	return !!(s.touches && s.touches.length);
}, isMouseEvent = function(s) {
	return !!((s.clientX || s.clientX === 0) && (s.clientY || s.clientY === 0));
}, findClosestSnap = function(s, d, C) {
	C === void 0 && (C = 0);
	var w = d.reduce(function(C, w, k) {
		return Math.abs(w - s) < Math.abs(d[C] - s) ? k : C;
	}, 0), k = Math.abs(d[w] - s);
	return C === 0 || k < C ? d[w] : s;
}, getStringSize = function(s) {
	return s = s.toString(), s === "auto" || s.endsWith("px") || s.endsWith("%") || s.endsWith("vh") || s.endsWith("vw") || s.endsWith("vmax") || s.endsWith("vmin") ? s : `${s}px`;
}, getPixelSize = function(s, d, C, w) {
	if (s && typeof s == "string") {
		if (s.endsWith("px")) return Number(s.replace("px", ""));
		if (s.endsWith("%")) {
			var k = Number(s.replace("%", "")) / 100;
			return d * k;
		}
		if (s.endsWith("vw")) {
			var k = Number(s.replace("vw", "")) / 100;
			return C * k;
		}
		if (s.endsWith("vh")) {
			var k = Number(s.replace("vh", "")) / 100;
			return w * k;
		}
	}
	return s;
}, calculateNewMax = function(s, d, C, w, k, F, L) {
	return w = getPixelSize(w, s.width, d, C), k = getPixelSize(k, s.height, d, C), F = getPixelSize(F, s.width, d, C), L = getPixelSize(L, s.height, d, C), {
		maxWidth: w === void 0 ? void 0 : Number(w),
		maxHeight: k === void 0 ? void 0 : Number(k),
		minWidth: F === void 0 ? void 0 : Number(F),
		minHeight: L === void 0 ? void 0 : Number(L)
	};
}, normalizeToPair = function(s) {
	return Array.isArray(s) ? s : [s, s];
}, definedProps = /* @__PURE__ */ "as.ref.style.className.grid.gridGap.snap.bounds.boundsByDirection.size.defaultSize.minWidth.minHeight.maxWidth.maxHeight.lockAspectRatio.lockAspectRatioExtraWidth.lockAspectRatioExtraHeight.enable.handleStyles.handleClasses.handleWrapperStyle.handleWrapperClass.children.onResizeStart.onResize.onResizeStop.handleComponent.scale.resizeRatio.snapGap".split("."), baseClassName = "__resizable_base__", Resizable = function(s) {
	__extends(d, s);
	function d(d) {
		var C = s.call(this, d) || this;
		return C.ratio = 1, C.resizable = null, C.parentLeft = 0, C.parentTop = 0, C.resizableLeft = 0, C.resizableRight = 0, C.resizableTop = 0, C.resizableBottom = 0, C.targetLeft = 0, C.targetTop = 0, C.delta = {
			width: 0,
			height: 0
		}, C.appendBase = function() {
			if (!C.resizable || !C.window) return null;
			var s = C.parentNode;
			if (!s) return null;
			var d = C.window.document.createElement("div");
			return d.style.width = "100%", d.style.height = "100%", d.style.position = "absolute", d.style.transform = "scale(0, 0)", d.style.left = "0", d.style.flex = "0 0 100%", d.classList ? d.classList.add(baseClassName) : d.className += baseClassName, s.appendChild(d), d;
		}, C.removeBase = function(s) {
			var d = C.parentNode;
			d && d.removeChild(s);
		}, C.state = {
			isResizing: !1,
			width: C.propsSize?.width ?? "auto",
			height: C.propsSize?.height ?? "auto",
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
		}, C.onResizeStart = C.onResizeStart.bind(C), C.onMouseMove = C.onMouseMove.bind(C), C.onMouseUp = C.onMouseUp.bind(C), C;
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
				var C = this.resizable.offsetWidth, w = this.resizable.offsetHeight, k = this.resizable.style.position;
				k !== "relative" && (this.resizable.style.position = "relative"), s = this.resizable.style.width === "auto" ? C : this.resizable.offsetWidth, d = this.resizable.style.height === "auto" ? w : this.resizable.offsetHeight, this.resizable.style.position = k;
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
			var s = this, d = this.props.size, C = function(d) {
				if (s.state[d] === void 0 || s.state[d] === "auto") return "auto";
				if (s.propsSize && s.propsSize[d] && s.propsSize[d]?.toString().endsWith("%")) {
					if (s.state[d].toString().endsWith("%")) return s.state[d].toString();
					var C = s.getParentSize();
					return `${Number(s.state[d].toString().replace("px", "")) / C[d] * 100}%`;
				}
				return getStringSize(s.state[d]);
			};
			return {
				width: d && d.width !== void 0 && !this.state.isResizing ? getStringSize(d.width) : C("width"),
				height: d && d.height !== void 0 && !this.state.isResizing ? getStringSize(d.height) : C("height")
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
		var d = !1, C = this.parentNode.style.flexWrap;
		C !== "wrap" && (d = !0, this.parentNode.style.flexWrap = "wrap"), s.style.position = "relative", s.style.minWidth = "100%", s.style.minHeight = "100%";
		var w = {
			width: s.offsetWidth,
			height: s.offsetHeight
		};
		return d && (this.parentNode.style.flexWrap = C), this.removeBase(s), w;
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
		var C = this.propsSize && this.propsSize[d];
		return this.state[d] === "auto" && this.state.original[d] === s && (C === void 0 || C === "auto") ? "auto" : s;
	}, d.prototype.calculateNewMaxFromBoundary = function(s, d) {
		var C = this.props.boundsByDirection, w = this.state.direction, k = C && hasDirection("left", w), F = C && hasDirection("top", w), L, V;
		if (this.props.bounds === "parent") {
			var U = this.parentNode;
			U && (L = k ? this.resizableRight - this.parentLeft : U.offsetWidth + (this.parentLeft - this.resizableLeft), V = F ? this.resizableBottom - this.parentTop : U.offsetHeight + (this.parentTop - this.resizableTop));
		} else this.props.bounds === "window" ? this.window && (L = k ? this.resizableRight : this.window.innerWidth - this.resizableLeft, V = F ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (L = k ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), V = F ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
		return L && Number.isFinite(L) && (s = s && s < L ? s : L), V && Number.isFinite(V) && (d = d && d < V ? d : V), {
			maxWidth: s,
			maxHeight: d
		};
	}, d.prototype.calculateNewSizeFromDirection = function(s, d) {
		var C = this.props.scale || 1, w = normalizeToPair(this.props.resizeRatio || 1), k = w[0], F = w[1], L = this.state, V = L.direction, U = L.original, K = this.props, q = K.lockAspectRatio, J = K.lockAspectRatioExtraHeight, X = K.lockAspectRatioExtraWidth, $ = U.width, PD = U.height, FD = J || 0, ID = X || 0;
		return hasDirection("right", V) && ($ = U.width + (s - U.x) * k / C, q && (PD = ($ - ID) / this.ratio + FD)), hasDirection("left", V) && ($ = U.width - (s - U.x) * k / C, q && (PD = ($ - ID) / this.ratio + FD)), hasDirection("bottom", V) && (PD = U.height + (d - U.y) * F / C, q && ($ = (PD - FD) * this.ratio + ID)), hasDirection("top", V) && (PD = U.height - (d - U.y) * F / C, q && ($ = (PD - FD) * this.ratio + ID)), {
			newWidth: $,
			newHeight: PD
		};
	}, d.prototype.calculateNewSizeFromAspectRatio = function(s, d, C, w) {
		var k = this.props, F = k.lockAspectRatio, L = k.lockAspectRatioExtraHeight, V = k.lockAspectRatioExtraWidth, U = w.width === void 0 ? 10 : w.width, K = C.width === void 0 || C.width < 0 ? s : C.width, q = w.height === void 0 ? 10 : w.height, J = C.height === void 0 || C.height < 0 ? d : C.height, X = L || 0, $ = V || 0;
		if (F) {
			var PD = (q - X) * this.ratio + $, FD = (J - X) * this.ratio + $, ID = (U - $) / this.ratio + X, LD = (K - $) / this.ratio + X, RD = Math.max(U, PD), zD = Math.min(K, FD), BD = Math.max(q, ID), VD = Math.min(J, LD);
			s = clamp$1(s, RD, zD), d = clamp$1(d, BD, VD);
		} else s = clamp$1(s, U, K), d = clamp$1(d, q, J);
		return {
			newWidth: s,
			newHeight: d
		};
	}, d.prototype.setBoundingClientRect = function() {
		var s = 1 / (this.props.scale || 1);
		if (this.props.bounds === "parent") {
			var d = this.parentNode;
			if (d) {
				var C = d.getBoundingClientRect();
				this.parentLeft = C.left * s, this.parentTop = C.top * s;
			}
		}
		if (this.props.bounds && typeof this.props.bounds != "string") {
			var w = this.props.bounds.getBoundingClientRect();
			this.targetLeft = w.left * s, this.targetTop = w.top * s;
		}
		if (this.resizable) {
			var k = this.resizable.getBoundingClientRect(), F = k.left, L = k.top, V = k.right, U = k.bottom;
			this.resizableLeft = F * s, this.resizableRight = V * s, this.resizableTop = L * s, this.resizableBottom = U * s;
		}
	}, d.prototype.onResizeStart = function(s, d) {
		if (!(!this.resizable || !this.window)) {
			var C = 0, w = 0;
			if (s.nativeEvent && isMouseEvent(s.nativeEvent) ? (C = s.nativeEvent.clientX, w = s.nativeEvent.clientY) : s.nativeEvent && isTouchEvent(s.nativeEvent) && (C = s.nativeEvent.touches[0].clientX, w = s.nativeEvent.touches[0].clientY), !(this.props.onResizeStart && this.resizable && this.props.onResizeStart(s, d, this.resizable) === !1)) {
				this.props.size && (this.props.size.height !== void 0 && this.props.size.height !== this.state.height && this.setState({ height: this.props.size.height }), this.props.size.width !== void 0 && this.props.size.width !== this.state.width && this.setState({ width: this.props.size.width })), this.ratio = typeof this.props.lockAspectRatio == "number" ? this.props.lockAspectRatio : this.size.width / this.size.height;
				var k, F = this.window.getComputedStyle(this.resizable);
				if (F.flexBasis !== "auto") {
					var L = this.parentNode;
					L && (this.flexDir = this.window.getComputedStyle(L).flexDirection.startsWith("row") ? "row" : "column", k = F.flexBasis);
				}
				this.setBoundingClientRect(), this.bindEvents();
				var V = {
					original: {
						x: C,
						y: w,
						width: this.size.width,
						height: this.size.height
					},
					isResizing: !0,
					backgroundStyle: __assign(__assign({}, this.state.backgroundStyle), { cursor: this.window.getComputedStyle(s.target).cursor || "auto" }),
					direction: d,
					flexBasis: k
				};
				this.setState(V);
			}
		}
	}, d.prototype.onMouseMove = function(s) {
		var d = this;
		if (!(!this.state.isResizing || !this.resizable || !this.window)) {
			if (this.window.TouchEvent && isTouchEvent(s)) try {
				s.preventDefault(), s.stopPropagation();
			} catch {}
			var C = this.props, w = C.maxWidth, k = C.maxHeight, F = C.minWidth, L = C.minHeight, V = isTouchEvent(s) ? s.touches[0].clientX : s.clientX, U = isTouchEvent(s) ? s.touches[0].clientY : s.clientY, K = this.state, q = K.direction, J = K.original, X = K.width, $ = K.height, PD = this.getParentSize(), FD = calculateNewMax(PD, this.window.innerWidth, this.window.innerHeight, w, k, F, L);
			w = FD.maxWidth, k = FD.maxHeight, F = FD.minWidth, L = FD.minHeight;
			var ID = this.calculateNewSizeFromDirection(V, U), LD = ID.newHeight, RD = ID.newWidth, zD = this.calculateNewMaxFromBoundary(w, k);
			this.props.snap && this.props.snap.x && (RD = findClosestSnap(RD, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (LD = findClosestSnap(LD, this.props.snap.y, this.props.snapGap));
			var BD = this.calculateNewSizeFromAspectRatio(RD, LD, {
				width: zD.maxWidth,
				height: zD.maxHeight
			}, {
				width: F,
				height: L
			});
			if (RD = BD.newWidth, LD = BD.newHeight, this.props.grid) {
				var VD = snap(RD, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0), UD = snap(LD, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0), WD = this.props.snapGap || 0, GD = WD === 0 || Math.abs(VD - RD) <= WD ? VD : RD, KD = WD === 0 || Math.abs(UD - LD) <= WD ? UD : LD;
				RD = GD, LD = KD;
			}
			var qD = {
				width: RD - J.width,
				height: LD - J.height
			};
			if (this.delta = qD, X && typeof X == "string") {
				if (X.endsWith("%")) {
					var JD = RD / PD.width * 100;
					RD = `${JD}%`;
				} else if (X.endsWith("vw")) {
					var YD = RD / this.window.innerWidth * 100;
					RD = `${YD}vw`;
				} else if (X.endsWith("vh")) {
					var XD = RD / this.window.innerHeight * 100;
					RD = `${XD}vh`;
				}
			}
			if ($ && typeof $ == "string") {
				if ($.endsWith("%")) {
					var JD = LD / PD.height * 100;
					LD = `${JD}%`;
				} else if ($.endsWith("vw")) {
					var YD = LD / this.window.innerWidth * 100;
					LD = `${YD}vw`;
				} else if ($.endsWith("vh")) {
					var XD = LD / this.window.innerHeight * 100;
					LD = `${XD}vh`;
				}
			}
			var ZD = {
				width: this.createSizeForCssProperty(RD, "width"),
				height: this.createSizeForCssProperty(LD, "height")
			};
			this.flexDir === "row" ? ZD.flexBasis = ZD.width : this.flexDir === "column" && (ZD.flexBasis = ZD.height);
			var QD = this.state.width !== ZD.width, $D = this.state.height !== ZD.height, eO = this.state.flexBasis !== ZD.flexBasis, tO = QD || $D || eO;
			tO && flushSync(function() {
				d.setState(ZD);
			}), this.props.onResize && tO && this.props.onResize(s, q, this.resizable, qD);
		}
	}, d.prototype.onMouseUp = function(s) {
		var d = this.state, C = d.isResizing, w = d.direction;
		d.original, !(!C || !this.resizable) && (this.props.onResizeStop && this.props.onResizeStop(s, w, this.resizable, this.delta), this.props.size && this.setState({
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
		var s = this, d = this.props, C = d.enable, w = d.handleStyles, k = d.handleClasses, F = d.handleWrapperStyle, L = d.handleWrapperClass, V = d.handleComponent;
		return C ? jsx("div", {
			className: L,
			style: F,
			children: Object.keys(C).map(function(d) {
				return C[d] === !1 ? null : jsx(Resizer, {
					direction: d,
					onResizeStart: s.onResizeStart,
					replaceStyles: w && w[d],
					className: k && k[d],
					children: V && V[d] ? V[d] : null
				}, d);
			})
		}) : null;
	}, d.prototype.render = function() {
		var s = this, d = Object.keys(this.props).reduce(function(d, C) {
			return definedProps.indexOf(C) === -1 && (d[C] = s.props[C]), d;
		}, {}), C = __assign(__assign(__assign({
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
		return this.state.flexBasis && (C.flexBasis = this.state.flexBasis), jsxs(this.props.as || "div", __assign({
			style: C,
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
}(PureComponent), MenuItem = ({ children: s, onClick: d, rightSlot: C, style: w, className: k }) => /* @__PURE__ */ jsxs("div", {
	className: `custom-menu-item ${k || ""}`,
	onClick: (s) => {
		s.stopPropagation(), d && d();
	},
	style: w,
	children: [s, C && /* @__PURE__ */ jsx("div", {
		className: "custom-menu-right-slot",
		children: C
	})]
}), MenuSeparator = () => /* @__PURE__ */ jsx("div", { className: "custom-menu-separator" }), SubMenu = ({ label: s, children: d, scrollable: C }) => /* @__PURE__ */ jsxs("div", {
	className: "custom-menu-item",
	children: [
		s,
		/* @__PURE__ */ jsx("div", {
			className: "custom-menu-right-slot",
			children: /* @__PURE__ */ jsx(ChevronRightIcon, {})
		}),
		/* @__PURE__ */ jsx("div", {
			className: `custom-submenu ${C ? "scrollable" : ""}`,
			children: d
		})
	]
});
const ElementContextMenu = ({ children: s, element: d }) => {
	let { updateElement: C, removeElement: w, addElement: k, moveElement: F, state: L } = useEditor(), [V, U] = useState(null), [K, q] = useState(!1), [X, $] = useState(!1), [PD, FD] = useState(d.content), [ID, zD] = useState(d.dataBinding || ""), BD = useRef(null), HD = useRef(null);
	useEffect(() => {
		let s = () => U(null);
		return window.addEventListener("scroll", s, !0), window.addEventListener("resize", s), () => {
			window.removeEventListener("scroll", s, !0), window.removeEventListener("resize", s);
		};
	}, []);
	let KD = (s) => {
		s.preventDefault(), s.stopPropagation(), U({
			x: s.clientX,
			y: s.clientY
		});
	}, qD = () => U(null), JD = (s) => {
		let d = BD.current;
		if (d) {
			let C = d.selectionStart, w = d.selectionEnd, k = PD;
			FD(k.substring(0, C) + `{{${s}}}` + k.substring(w)), setTimeout(() => {
				d.focus();
				let w = C + s.length + 4;
				d.setSelectionRange(w, w);
			}, 0);
		} else FD((d) => d + `{{${s}}}`);
	}, YD = (s) => {
		C(d.id, { style: {
			...d.style,
			...s
		} }), qD();
	}, XD = () => {
		let s = L.elements.findIndex((s) => s.id === d.id);
		s < L.elements.length - 1 && F(s, L.elements.length - 1), qD();
	}, ZD = () => {
		let s = L.elements.findIndex((s) => s.id === d.id);
		s > 0 && F(s, 0), qD();
	}, QD = () => {
		k({
			type: d.type,
			content: d.content,
			x: d.x + 20,
			y: d.y + 20,
			width: d.width,
			height: d.height,
			style: d.style
		}), qD();
	}, $D = [
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
		/* @__PURE__ */ jsx("div", {
			onContextMenu: KD,
			style: { display: "contents" },
			children: s
		}),
		/* @__PURE__ */ jsx(s$2, {
			open: K,
			onOpenChange: q,
			children: /* @__PURE__ */ jsxs(p$5, {
				style: { maxWidth: 450 },
				children: [/* @__PURE__ */ jsx(g$1, { children: "Editar Texto" }), /* @__PURE__ */ jsxs(p, {
					direction: "column",
					gap: "3",
					children: [
						/* @__PURE__ */ jsx(r, {
							ref: BD,
							value: PD,
							onChange: (s) => FD(s.target.value),
							placeholder: "Digite o novo texto...",
							style: { height: 100 }
						}),
						L.availableProps && L.availableProps.length > 0 && /* @__PURE__ */ jsxs(p, {
							direction: "column",
							gap: "2",
							children: [/* @__PURE__ */ jsx(p$2, {
								size: "1",
								color: "gray",
								children: "Inserir variável:"
							}), /* @__PURE__ */ jsx(p, {
								gap: "2",
								wrap: "wrap",
								children: L.availableProps.map((s) => /* @__PURE__ */ jsx(e, {
									color: "blue",
									variant: "surface",
									style: { cursor: "pointer" },
									onClick: () => JD(s.dataName),
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
									C(d.id, { content: PD }), q(!1);
								},
								children: "Salvar"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ jsx(s$2, {
			open: X,
			onOpenChange: $,
			children: /* @__PURE__ */ jsxs(p$5, {
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
							value: ID,
							onChange: (s) => zD(s.target.value),
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
									let s = ID, w = { dataBinding: s };
									d.type === "text" && (w.content = `{{${s}}}`), C(d.id, w), $(!1);
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
			ref: HD,
			style: { display: "none" },
			accept: "image/*",
			onChange: (s) => {
				let w = s.target.files?.[0];
				if (w) {
					let s = new FileReader();
					s.onload = (s) => {
						s.target?.result && C(d.id, { content: s.target.result });
					}, s.readAsDataURL(w);
				}
				qD();
			}
		}),
		V && createPortal(/* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx("div", {
			className: "custom-context-menu-overlay",
			onClick: qD,
			onContextMenu: (s) => {
				s.preventDefault(), qD();
			}
		}), /* @__PURE__ */ jsxs("div", {
			className: "custom-context-menu",
			style: {
				top: Math.min(V.y, window.innerHeight - 300),
				left: Math.min(V.x, window.innerWidth - 250)
			},
			children: [
				/* @__PURE__ */ jsxs(SubMenu, {
					label: /* @__PURE__ */ jsxs(Fragment$1, { children: ["Vincular Dados ", d.dataBinding && /* @__PURE__ */ jsxs("span", {
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
					})] }),
					children: [
						L.availableProps && L.availableProps.length > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [L.availableProps.map((s) => /* @__PURE__ */ jsx(MenuItem, {
							onClick: () => {
								let w = { dataBinding: s.dataName };
								d.type === "text" && (w.content = `{{${s.dataName}}}`), C(d.id, w), qD();
							},
							rightSlot: /* @__PURE__ */ jsx("span", {
								style: { fontSize: 10 },
								children: s.dataName
							}),
							children: s.name
						}, s.dataName)), /* @__PURE__ */ jsx(MenuSeparator, {})] }),
						/* @__PURE__ */ jsx(MenuItem, {
							onClick: () => {
								zD(d.dataBinding || ""), $(!0), qD();
							},
							children: "Outro / Manual..."
						}),
						d.dataBinding && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(MenuSeparator, {}), /* @__PURE__ */ jsx(MenuItem, {
							onClick: () => {
								C(d.id, { dataBinding: void 0 }), qD();
							},
							style: { color: "var(--red-9)" },
							children: "Remover Vínculo"
						})] })
					]
				}),
				/* @__PURE__ */ jsx(MenuSeparator, {}),
				d.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [/* @__PURE__ */ jsx(MenuItem, {
					onClick: () => {
						FD(d.content), q(!0), qD();
					},
					children: "Editar Texto..."
				}), /* @__PURE__ */ jsx(MenuSeparator, {})] }),
				/* @__PURE__ */ jsx(MenuItem, {
					onClick: QD,
					children: "Duplicar"
				}),
				/* @__PURE__ */ jsx(MenuItem, {
					onClick: () => {
						w(d.id), qD();
					},
					children: "Excluir"
				}),
				/* @__PURE__ */ jsx(MenuSeparator, {}),
				d.type === "image" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsxs(SubMenu, {
						label: "Alterar Imagem",
						children: [/* @__PURE__ */ jsx(MenuItem, {
							onClick: () => {
								HD.current?.click(), qD();
							},
							children: "Carregar do Computador"
						}), /* @__PURE__ */ jsx(MenuItem, {
							onClick: () => {
								qD(), setTimeout(() => {
									let s = window.prompt("Insira a URL da imagem:", d.content);
									s !== null && C(d.id, { content: s });
								}, 10);
							},
							children: "Inserir URL"
						})]
					}),
					/* @__PURE__ */ jsxs(SubMenu, {
						label: "Ajuste da Imagem",
						children: [
							/* @__PURE__ */ jsx(MenuItem, {
								onClick: () => YD({ objectFit: "cover" }),
								children: "Preencher (Cover)"
							}),
							/* @__PURE__ */ jsx(MenuItem, {
								onClick: () => YD({ objectFit: "contain" }),
								children: "Ajustar (Contain)"
							}),
							/* @__PURE__ */ jsx(MenuItem, {
								onClick: () => YD({ objectFit: "fill" }),
								children: "Esticar (Fill)"
							})
						]
					}),
					/* @__PURE__ */ jsx(MenuSeparator, {})
				] }),
				/* @__PURE__ */ jsxs(SubMenu, {
					label: "Camadas",
					children: [/* @__PURE__ */ jsx(MenuItem, {
						onClick: XD,
						children: "Trazer para frente"
					}), /* @__PURE__ */ jsx(MenuItem, {
						onClick: ZD,
						children: "Enviar para trás"
					})]
				}),
				/* @__PURE__ */ jsx(MenuSeparator, {}),
				d.type === "text" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
					/* @__PURE__ */ jsx(SubMenu, {
						label: "Fonte",
						scrollable: !0,
						children: L.availableFonts && L.availableFonts.map((s) => /* @__PURE__ */ jsx(MenuItem, {
							onClick: () => YD({ fontFamily: s }),
							style: { fontFamily: s },
							rightSlot: d.style?.fontFamily === s ? "✓" : void 0,
							children: s
						}, s))
					}),
					/* @__PURE__ */ jsx(SubMenu, {
						label: "Tamanho da Fonte",
						children: [
							12,
							14,
							16,
							20,
							24,
							32,
							48,
							64
						].map((s) => /* @__PURE__ */ jsxs(MenuItem, {
							onClick: () => YD({ fontSize: `${s}px` }),
							children: [s, "px"]
						}, s))
					}),
					/* @__PURE__ */ jsx(SubMenu, {
						label: "Cor do Texto",
						children: $D.filter((s) => s !== "transparent").map((s) => /* @__PURE__ */ jsxs(MenuItem, {
							onClick: () => YD({ color: s }),
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								backgroundColor: s,
								marginRight: 8,
								border: "1px solid #ccc"
							} }), s]
						}, s))
					}),
					/* @__PURE__ */ jsxs(SubMenu, {
						label: "Peso da Fonte",
						children: [/* @__PURE__ */ jsx(MenuItem, {
							onClick: () => YD({ fontWeight: "normal" }),
							children: "Normal"
						}), /* @__PURE__ */ jsx(MenuItem, {
							onClick: () => YD({ fontWeight: "bold" }),
							children: "Negrito"
						})]
					}),
					/* @__PURE__ */ jsxs(SubMenu, {
						label: "Alinhamento",
						children: [
							/* @__PURE__ */ jsx(MenuItem, {
								onClick: () => YD({ textAlign: "left" }),
								children: "Esquerda"
							}),
							/* @__PURE__ */ jsx(MenuItem, {
								onClick: () => YD({ textAlign: "center" }),
								children: "Centro"
							}),
							/* @__PURE__ */ jsx(MenuItem, {
								onClick: () => YD({ textAlign: "right" }),
								children: "Direita"
							})
						]
					})
				] }),
				/* @__PURE__ */ jsx(SubMenu, {
					label: "Cor de Fundo",
					children: $D.map((s) => /* @__PURE__ */ jsxs(MenuItem, {
						onClick: () => YD({ backgroundColor: s }),
						children: [/* @__PURE__ */ jsx("div", { style: {
							width: 12,
							height: 12,
							backgroundColor: s,
							marginRight: 8,
							border: "1px solid #ccc"
						} }), s === "transparent" ? "Transparente" : s]
					}, s))
				}),
				/* @__PURE__ */ jsx(SubMenu, {
					label: "Arredondamento",
					children: [
						0,
						4,
						8,
						12,
						16,
						24,
						"50%"
					].map((s) => /* @__PURE__ */ jsx(MenuItem, {
						onClick: () => YD({ borderRadius: typeof s == "number" ? `${s}px` : s }),
						children: s === "50%" ? "Círculo" : `${s}px`
					}, s))
				}),
				/* @__PURE__ */ jsx(SubMenu, {
					label: "Espaçamento",
					children: [
						0,
						4,
						8,
						12,
						16,
						24,
						32
					].map((s) => /* @__PURE__ */ jsxs(MenuItem, {
						onClick: () => YD({ padding: `${s}px` }),
						children: [s, "px"]
					}, s))
				}),
				/* @__PURE__ */ jsxs(SubMenu, {
					label: "Borda",
					children: [/* @__PURE__ */ jsxs(SubMenu, {
						label: "Cor da Borda",
						children: [$D.filter((s) => s !== "transparent").map((s) => /* @__PURE__ */ jsxs(MenuItem, {
							onClick: () => YD({
								borderColor: s,
								borderStyle: "solid"
							}),
							children: [/* @__PURE__ */ jsx("div", { style: {
								width: 12,
								height: 12,
								backgroundColor: s,
								marginRight: 8,
								border: "1px solid #ccc"
							} }), s]
						}, s)), /* @__PURE__ */ jsx(MenuItem, {
							onClick: () => YD({ borderStyle: "none" }),
							children: "Sem Borda"
						})]
					}), /* @__PURE__ */ jsx(SubMenu, {
						label: "Espessura",
						children: [
							1,
							2,
							4,
							8
						].map((s) => /* @__PURE__ */ jsxs(MenuItem, {
							onClick: () => YD({
								borderWidth: `${s}px`,
								borderStyle: "solid"
							}),
							children: [s, "px"]
						}, s))
					})]
				})
			]
		})] }), document.body)
	] });
};
var DraggableResizableElement = ({ element: s, isSelected: d }) => {
	let { selectElement: C, updateElement: w, state: k } = useEditor(), [F, L] = useState(!1), [V, U] = useState(!1), K = useRef({
		x: 0,
		y: 0
	}), q = useRef({
		x: 0,
		y: 0
	}), X = useRef(0), $ = useRef(0), PD = useRef({
		x: 0,
		y: 0
	}), FD = k.isList ? k.mockData.length > 0 ? k.mockData[0] : null : k.singleMockData, ID = s.content;
	if (FD) {
		if (s.type === "text") ID = ID.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let C = FD[d.trim()];
			return C == null ? s : String(C);
		});
		else if (s.type === "image") if (s.dataBinding) {
			let d = FD[s.dataBinding];
			d != null && (ID = String(d));
		} else ID = ID.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let C = FD[d.trim()];
			return C == null ? s : String(C);
		});
	}
	let zD = (d) => {
		d.stopPropagation(), C(s.id);
	}, BD = (d) => {
		d.button === 0 && (d.stopPropagation(), C(s.id), L(!0), K.current = {
			x: d.clientX,
			y: d.clientY
		}, q.current = {
			x: s.x,
			y: s.y
		});
	}, VD = (d) => {
		d.stopPropagation(), d.preventDefault(), U(!0);
		let C = d.target.closest(".resizable-element");
		if (C) {
			let w = C.getBoundingClientRect();
			PD.current = {
				x: w.left + w.width / 2,
				y: w.top + w.height / 2
			};
			let k = d.clientX - PD.current.x, F = d.clientY - PD.current.y;
			X.current = Math.atan2(F, k) * (180 / Math.PI), $.current = s.rotation || 0;
		}
	};
	useEffect(() => {
		let d = (d) => {
			if (F) {
				let C = d.clientX - K.current.x, k = d.clientY - K.current.y;
				w(s.id, {
					x: q.current.x + C,
					y: q.current.y + k
				});
			}
			if (V) {
				let C = d.clientX - PD.current.x, k = d.clientY - PD.current.y, F = Math.atan2(k, C) * (180 / Math.PI) - X.current;
				w(s.id, { rotation: ($.current + F) % 360 });
			}
		}, C = () => {
			F && L(!1), V && U(!1);
		};
		return (F || V) && (window.addEventListener("mousemove", d), window.addEventListener("mouseup", C)), () => {
			window.removeEventListener("mousemove", d), window.removeEventListener("mouseup", C);
		};
	}, [
		F,
		V,
		s.id,
		w
	]);
	let HD = {
		position: "absolute",
		left: 0,
		top: 0,
		width: "100%",
		height: "100%",
		padding: s.type === "image" ? 0 : "8px",
		border: d ? "2px solid var(--accent-9)" : "1px dashed transparent",
		outline: d ? "none" : "1px solid transparent",
		cursor: F ? "grabbing" : "grab",
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
		onResizeStop: (d, C, k, F) => {
			w(s.id, {
				width: s.width + F.width,
				height: s.height + F.height
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
					style: HD,
					onMouseDown: BD,
					onClick: zD,
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
							children: ID
						}),
						s.type === "image" && (ID ? /* @__PURE__ */ jsx("img", {
							src: ID,
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
					onMouseDown: VD,
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
	let { state: s, selectElement: d } = useEditor();
	return /* @__PURE__ */ jsxs(p$1, {
		onClick: () => {
			d(null);
		},
		style: {
			width: "100%",
			height: "100%",
			position: "relative",
			overflow: "hidden",
			backgroundColor: "var(--color-background)",
			backgroundImage: "radial-gradient(var(--gray-5) 1px, transparent 1px)",
			backgroundSize: "20px 20px"
		},
		children: [s.elements.length === 0 && /* @__PURE__ */ jsx(p, {
			align: "center",
			justify: "center",
			style: {
				height: "100%",
				color: "var(--gray-8)",
				pointerEvents: "none"
			},
			children: /* @__PURE__ */ jsx(p$2, { children: "Adicione elementos e arraste livremente" })
		}), s.elements.map((d) => /* @__PURE__ */ jsx(DraggableResizableElement, {
			element: d,
			isSelected: s.selectedElementId === d.id
		}, d.id))]
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
	let C = s.indexOf(d);
	C > -1 && s.splice(C, 1);
}
var clamp = (s, d, C) => C > d ? d : C < s ? s : C;
function formatErrorMessage(s, d) {
	return d ? `${s}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${d}` : s;
}
var warning = () => {}, invariant = () => {};
typeof process < "u" && process.env.NODE_ENV !== "production" && (warning = (s, d, C) => {
	!s && typeof console < "u" && console.warn(formatErrorMessage(d, C));
}, invariant = (s, d, C) => {
	if (!s) throw Error(formatErrorMessage(d, C));
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
var noop = /* @__NO_SIDE_EFFECTS__ */ (s) => s, combineFunctions = (s, d) => (C) => d(s(C)), pipe = (...s) => s.reduce(combineFunctions), progress = /* @__NO_SIDE_EFFECTS__ */ (s, d, C) => {
	let w = d - s;
	return w === 0 ? 1 : (C - s) / w;
}, SubscriptionManager = class {
	constructor() {
		this.subscriptions = [];
	}
	add(s) {
		return addUniqueItem(this.subscriptions, s), () => removeItem(this.subscriptions, s);
	}
	notify(s, d, C) {
		let w = this.subscriptions.length;
		if (w) if (w === 1) this.subscriptions[0](s, d, C);
		else for (let k = 0; k < w; k++) {
			let w = this.subscriptions[k];
			w && w(s, d, C);
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
function warnOnce(s, d, C) {
	s || warned.has(d) || (console.warn(formatErrorMessage(d, C)), warned.add(d));
}
var calcBezier = (s, d, C) => (((1 - 3 * C + 3 * d) * s + (3 * C - 6 * d)) * s + 3 * d) * s, subdivisionPrecision = 1e-7, subdivisionMaxIterations = 12;
function binarySubdivide(s, d, C, w, k) {
	let F, L, V = 0;
	do
		L = d + (C - d) / 2, F = calcBezier(L, w, k) - s, F > 0 ? C = L : d = L;
	while (Math.abs(F) > subdivisionPrecision && ++V < subdivisionMaxIterations);
	return L;
}
function cubicBezier(s, d, C, w) {
	if (s === d && C === w) return noop;
	let k = (d) => binarySubdivide(d, 0, 1, s, C);
	return (s) => s === 0 || s === 1 ? s : calcBezier(k(s), d, w);
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
		let [d, C, w, k] = s;
		return cubicBezier(d, C, w, k);
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
	let C = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Set(), k = !1, F = !1, L = /* @__PURE__ */ new WeakSet(), V = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, U = 0;
	function K(d) {
		L.has(d) && (q.schedule(d), s()), U++, d(V);
	}
	let q = {
		schedule: (s, d = !1, F = !1) => {
			let V = F && k ? C : w;
			return d && L.add(s), V.has(s) || V.add(s), s;
		},
		cancel: (s) => {
			w.delete(s), L.delete(s);
		},
		process: (s) => {
			if (V = s, k) {
				F = !0;
				return;
			}
			k = !0, [C, w] = [w, C], C.forEach(K), d && statsBuffer.value && statsBuffer.value.frameloop[d].push(U), U = 0, C.clear(), k = !1, F && (F = !1, q.process(s));
		}
	};
	return q;
}
var maxElapsed = 40;
function createRenderBatcher(s, d) {
	let C = !1, w = !0, k = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	}, F = () => C = !0, L = stepsOrder.reduce((s, C) => (s[C] = createRenderStep(F, d ? C : void 0), s), {}), { setup: V, read: U, resolveKeyframes: K, preUpdate: q, update: J, preRender: X, render: $, postRender: PD } = L, FD = () => {
		let F = MotionGlobalConfig.useManualTiming ? k.timestamp : performance.now();
		C = !1, MotionGlobalConfig.useManualTiming || (k.delta = w ? 1e3 / 60 : Math.max(Math.min(F - k.timestamp, maxElapsed), 1)), k.timestamp = F, k.isProcessing = !0, V.process(k), U.process(k), K.process(k), q.process(k), J.process(k), X.process(k), $.process(k), PD.process(k), k.isProcessing = !1, C && d && (w = !1, s(FD));
	}, ID = () => {
		C = !0, w = !0, k.isProcessing || s(FD);
	};
	return {
		schedule: stepsOrder.reduce((s, d) => {
			let w = L[d];
			return s[d] = (s, d = !1, k = !1) => (C || ID(), w.schedule(s, d, k)), s;
		}, {}),
		cancel: (s) => {
			for (let d = 0; d < stepsOrder.length; d++) L[stepsOrder[d]].cancel(s);
		},
		state: k,
		steps: L
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
var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, isColorString = (s, d) => (C) => !!(typeof C == "string" && singleColorRegex.test(C) && C.startsWith(s) || d && !isNullish(C) && Object.prototype.hasOwnProperty.call(C, d)), splitColor = (s, d, C) => (w) => {
	if (typeof w != "string") return w;
	let [k, F, L, V] = w.match(floatRegex);
	return {
		[s]: parseFloat(k),
		[d]: parseFloat(F),
		[C]: parseFloat(L),
		alpha: V === void 0 ? 1 : parseFloat(V)
	};
}, clampRgbUnit = (s) => clamp(0, 255, s), rgbUnit = {
	...number,
	transform: (s) => Math.round(clampRgbUnit(s))
}, rgba = {
	test: /* @__PURE__ */ isColorString("rgb", "red"),
	parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
	transform: ({ red: s, green: d, blue: C, alpha: w = 1 }) => "rgba(" + rgbUnit.transform(s) + ", " + rgbUnit.transform(d) + ", " + rgbUnit.transform(C) + ", " + sanitize(alpha.transform(w)) + ")"
};
function parseHex(s) {
	let d = "", C = "", w = "", k = "";
	return s.length > 5 ? (d = s.substring(1, 3), C = s.substring(3, 5), w = s.substring(5, 7), k = s.substring(7, 9)) : (d = s.substring(1, 2), C = s.substring(2, 3), w = s.substring(3, 4), k = s.substring(4, 5), d += d, C += C, w += w, k += k), {
		red: parseInt(d, 16),
		green: parseInt(C, 16),
		blue: parseInt(w, 16),
		alpha: k ? parseInt(k, 16) / 255 : 1
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
	transform: ({ hue: s, saturation: d, lightness: C, alpha: w = 1 }) => "hsla(" + Math.round(s) + ", " + percent.transform(sanitize(d)) + ", " + percent.transform(sanitize(C)) + ", " + sanitize(alpha.transform(w)) + ")"
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
	let d = s.toString(), C = [], w = {
		color: [],
		number: [],
		var: []
	}, k = [], F = 0;
	return {
		values: C,
		split: d.replace(complexRegex, (s) => (color.test(s) ? (w.color.push(F), k.push(COLOR_TOKEN), C.push(color.parse(s))) : s.startsWith(VAR_FUNCTION_TOKEN) ? (w.var.push(F), k.push(VAR_TOKEN), C.push(s)) : (w.number.push(F), k.push(NUMBER_TOKEN), C.push(parseFloat(s))), ++F, SPLIT_TOKEN)).split(SPLIT_TOKEN),
		indexes: w,
		types: k
	};
}
function parseComplexValue(s) {
	return analyseComplexValue(s).values;
}
function createTransformer(s) {
	let { split: d, types: C } = analyseComplexValue(s), w = d.length;
	return (s) => {
		let k = "";
		for (let F = 0; F < w; F++) if (k += d[F], s[F] !== void 0) {
			let d = C[F];
			d === NUMBER_TOKEN ? k += sanitize(s[F]) : d === COLOR_TOKEN ? k += color.transform(s[F]) : k += s[F];
		}
		return k;
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
function hueToRgb(s, d, C) {
	return C < 0 && (C += 1), C > 1 && --C, C < 1 / 6 ? s + (d - s) * 6 * C : C < 1 / 2 ? d : C < 2 / 3 ? s + (d - s) * (2 / 3 - C) * 6 : s;
}
function hslaToRgba({ hue: s, saturation: d, lightness: C, alpha: w }) {
	s /= 360, d /= 100, C /= 100;
	let k = 0, F = 0, L = 0;
	if (!d) k = F = L = C;
	else {
		let w = C < .5 ? C * (1 + d) : C + d - C * d, V = 2 * C - w;
		k = hueToRgb(V, w, s + 1 / 3), F = hueToRgb(V, w, s), L = hueToRgb(V, w, s - 1 / 3);
	}
	return {
		red: Math.round(k * 255),
		green: Math.round(F * 255),
		blue: Math.round(L * 255),
		alpha: w
	};
}
function mixImmediate(s, d) {
	return (C) => C > 0 ? d : s;
}
var mixNumber = (s, d, C) => s + (d - s) * C, mixLinearColor = (s, d, C) => {
	let w = s * s, k = C * (d * d - w) + w;
	return k < 0 ? 0 : Math.sqrt(k);
}, colorTypes = [
	hex,
	rgba,
	hsla
], getColorType = (s) => colorTypes.find((d) => d.test(s));
function asRGBA(s) {
	let d = getColorType(s);
	if (warning(!!d, `'${s}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !d) return !1;
	let C = d.parse(s);
	return d === hsla && (C = hslaToRgba(C)), C;
}
var mixColor = (s, d) => {
	let C = asRGBA(s), w = asRGBA(d);
	if (!C || !w) return mixImmediate(s, d);
	let k = { ...C };
	return (s) => (k.red = mixLinearColor(C.red, w.red, s), k.green = mixLinearColor(C.green, w.green, s), k.blue = mixLinearColor(C.blue, w.blue, s), k.alpha = mixNumber(C.alpha, w.alpha, s), rgba.transform(k));
}, invisibleValues = new Set(["none", "hidden"]);
function mixVisibility(s, d) {
	return invisibleValues.has(s) ? (C) => C <= 0 ? s : d : (C) => C >= 1 ? d : s;
}
function mixNumber$1(s, d) {
	return (C) => mixNumber(s, d, C);
}
function getMixer(s) {
	return typeof s == "number" ? mixNumber$1 : typeof s == "string" ? isCSSVariableToken(s) ? mixImmediate : color.test(s) ? mixColor : mixComplex : Array.isArray(s) ? mixArray : typeof s == "object" ? color.test(s) ? mixColor : mixObject : mixImmediate;
}
function mixArray(s, d) {
	let C = [...s], w = C.length, k = s.map((s, C) => getMixer(s)(s, d[C]));
	return (s) => {
		for (let d = 0; d < w; d++) C[d] = k[d](s);
		return C;
	};
}
function mixObject(s, d) {
	let C = {
		...s,
		...d
	}, w = {};
	for (let k in C) s[k] !== void 0 && d[k] !== void 0 && (w[k] = getMixer(s[k])(s[k], d[k]));
	return (s) => {
		for (let d in w) C[d] = w[d](s);
		return C;
	};
}
function matchOrder(s, d) {
	let C = [], w = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let k = 0; k < d.values.length; k++) {
		let F = d.types[k], L = s.indexes[F][w[F]];
		C[k] = s.values[L] ?? 0, w[F]++;
	}
	return C;
}
var mixComplex = (s, d) => {
	let C = complex.createTransformer(d), w = analyseComplexValue(s), k = analyseComplexValue(d);
	return w.indexes.var.length === k.indexes.var.length && w.indexes.color.length === k.indexes.color.length && w.indexes.number.length >= k.indexes.number.length ? invisibleValues.has(s) && !k.values.length || invisibleValues.has(d) && !w.values.length ? mixVisibility(s, d) : pipe(mixArray(matchOrder(w, k), k.values), C) : (warning(!0, `Complex values '${s}' and '${d}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), mixImmediate(s, d));
};
function mix(s, d, C) {
	return typeof s == "number" && typeof d == "number" && typeof C == "number" ? mixNumber(s, d, C) : getMixer(s)(s, d);
}
var frameloopDriver = (s) => {
	let d = ({ timestamp: d }) => s(d);
	return {
		start: (s = !0) => frame.update(d, s),
		stop: () => cancelFrame(d),
		now: () => frameData.isProcessing ? frameData.timestamp : time.now()
	};
}, generateLinearEasing = (s, d, C = 10) => {
	let w = "", k = Math.max(Math.round(d / C), 2);
	for (let d = 0; d < k; d++) w += Math.round(s(d / (k - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${w.substring(0, w.length - 2)})`;
}, maxGeneratorDuration = 2e4;
function calcGeneratorDuration(s) {
	let d = 0, C = s.next(d);
	for (; !C.done && d < 2e4;) d += 50, C = s.next(d);
	return d >= 2e4 ? Infinity : d;
}
function createGeneratorEasing(s, d = 100, C) {
	let w = C({
		...s,
		keyframes: [0, d]
	}), k = Math.min(calcGeneratorDuration(w), maxGeneratorDuration);
	return {
		type: "keyframes",
		ease: (s) => w.next(k * s).value / d,
		duration: /* @__PURE__ */ millisecondsToSeconds(k)
	};
}
var velocitySampleDuration = 5;
function calcGeneratorVelocity(s, d, C) {
	let w = Math.max(d - velocitySampleDuration, 0);
	return velocityPerSecond(C - s(w), d - w);
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
function findSpring({ duration: s = springDefaults.duration, bounce: d = springDefaults.bounce, velocity: C = springDefaults.velocity, mass: w = springDefaults.mass }) {
	let k, F;
	warning(s <= /* @__PURE__ */ secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
	let L = 1 - d;
	L = clamp(springDefaults.minDamping, springDefaults.maxDamping, L), s = clamp(springDefaults.minDuration, springDefaults.maxDuration, /* @__PURE__ */ millisecondsToSeconds(s)), L < 1 ? (k = (d) => {
		let w = d * L, k = w * s, F = w - C, V = calcAngularFreq(d, L), U = Math.exp(-k);
		return safeMin - F / V * U;
	}, F = (d) => {
		let w = d * L * s, F = w * C + C, V = L ** 2 * d ** 2 * s, U = Math.exp(-w), K = calcAngularFreq(d ** 2, L);
		return (-k(d) + safeMin > 0 ? -1 : 1) * ((F - V) * U) / K;
	}) : (k = (d) => {
		let w = Math.exp(-d * s), k = (d - C) * s + 1;
		return -safeMin + w * k;
	}, F = (d) => Math.exp(-d * s) * ((C - d) * (s * s)));
	let V = 5 / s, U = approximateRoot(k, F, V);
	if (s = /* @__PURE__ */ secondsToMilliseconds(s), isNaN(U)) return {
		stiffness: springDefaults.stiffness,
		damping: springDefaults.damping,
		duration: s
	};
	{
		let d = U ** 2 * w;
		return {
			stiffness: d,
			damping: L * 2 * Math.sqrt(w * d),
			duration: s
		};
	}
}
var rootIterations = 12;
function approximateRoot(s, d, C) {
	let w = C;
	for (let C = 1; C < rootIterations; C++) w -= s(w) / d(w);
	return w;
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
		let C = s.visualDuration, w = 2 * Math.PI / (C * 1.2), k = w * w, F = 2 * clamp(.05, 1, 1 - (s.bounce || 0)) * Math.sqrt(k);
		d = {
			...d,
			mass: springDefaults.mass,
			stiffness: k,
			damping: F
		};
	} else {
		let C = findSpring(s);
		d = {
			...d,
			...C,
			mass: springDefaults.mass
		}, d.isResolvedFromDuration = !0;
	}
	return d;
}
function spring(s = springDefaults.visualDuration, d = springDefaults.bounce) {
	let C = typeof s == "object" ? s : {
		visualDuration: s,
		keyframes: [0, 1],
		bounce: d
	}, { restSpeed: w, restDelta: k } = C, F = C.keyframes[0], L = C.keyframes[C.keyframes.length - 1], V = {
		done: !1,
		value: F
	}, { stiffness: U, damping: K, mass: q, duration: J, velocity: X, isResolvedFromDuration: $ } = getSpringOptions({
		...C,
		velocity: -/* @__PURE__ */ millisecondsToSeconds(C.velocity || 0)
	}), PD = X || 0, FD = K / (2 * Math.sqrt(U * q)), ID = L - F, LD = /* @__PURE__ */ millisecondsToSeconds(Math.sqrt(U / q)), RD = Math.abs(ID) < 5;
	w ||= RD ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default, k ||= RD ? springDefaults.restDelta.granular : springDefaults.restDelta.default;
	let zD;
	if (FD < 1) {
		let s = calcAngularFreq(LD, FD);
		zD = (d) => L - Math.exp(-FD * LD * d) * ((PD + FD * LD * ID) / s * Math.sin(s * d) + ID * Math.cos(s * d));
	} else if (FD === 1) zD = (s) => L - Math.exp(-LD * s) * (ID + (PD + LD * ID) * s);
	else {
		let s = LD * Math.sqrt(FD * FD - 1);
		zD = (d) => {
			let C = Math.exp(-FD * LD * d), w = Math.min(s * d, 300);
			return L - C * ((PD + FD * LD * ID) * Math.sinh(w) + s * ID * Math.cosh(w)) / s;
		};
	}
	let BD = {
		calculatedDuration: $ && J || null,
		next: (s) => {
			let d = zD(s);
			if ($) V.done = s >= J;
			else {
				let C = s === 0 ? PD : 0;
				FD < 1 && (C = s === 0 ? /* @__PURE__ */ secondsToMilliseconds(PD) : calcGeneratorVelocity(zD, s, d));
				let F = Math.abs(C) <= w, U = Math.abs(L - d) <= k;
				V.done = F && U;
			}
			return V.value = V.done ? L : d, V;
		},
		toString: () => {
			let s = Math.min(calcGeneratorDuration(BD), maxGeneratorDuration), d = generateLinearEasing((d) => BD.next(s * d).value, s, 30);
			return s + "ms " + d;
		},
		toTransition: () => {}
	};
	return BD;
}
spring.applyToOptions = (s) => {
	let d = createGeneratorEasing(s, 100, spring);
	return s.ease = d.ease, s.duration = /* @__PURE__ */ secondsToMilliseconds(d.duration), s.type = "keyframes", s;
};
function inertia({ keyframes: s, velocity: d = 0, power: C = .8, timeConstant: w = 325, bounceDamping: k = 10, bounceStiffness: F = 500, modifyTarget: L, min: V, max: U, restDelta: K = .5, restSpeed: q }) {
	let J = s[0], X = {
		done: !1,
		value: J
	}, $ = (s) => V !== void 0 && s < V || U !== void 0 && s > U, PD = (s) => V === void 0 ? U : U === void 0 || Math.abs(V - s) < Math.abs(U - s) ? V : U, FD = C * d, ID = J + FD, LD = L === void 0 ? ID : L(ID);
	LD !== ID && (FD = LD - J);
	let RD = (s) => -FD * Math.exp(-s / w), zD = (s) => LD + RD(s), BD = (s) => {
		let d = RD(s), C = zD(s);
		X.done = Math.abs(d) <= K, X.value = X.done ? LD : C;
	}, VD, HD, UD = (s) => {
		$(X.value) && (VD = s, HD = spring({
			keyframes: [X.value, PD(X.value)],
			velocity: calcGeneratorVelocity(zD, s, X.value),
			damping: k,
			stiffness: F,
			restDelta: K,
			restSpeed: q
		}));
	};
	return UD(0), {
		calculatedDuration: null,
		next: (s) => {
			let d = !1;
			return !HD && VD === void 0 && (d = !0, BD(s), UD(s)), VD !== void 0 && s >= VD ? HD.next(s - VD) : (!d && BD(s), X);
		}
	};
}
function createMixers(s, d, C) {
	let w = [], k = C || MotionGlobalConfig.mix || mix, F = s.length - 1;
	for (let C = 0; C < F; C++) {
		let F = k(s[C], s[C + 1]);
		d && (F = pipe(Array.isArray(d) ? d[C] || noop : d, F)), w.push(F);
	}
	return w;
}
function interpolate(s, d, { clamp: C = !0, ease: w, mixer: k } = {}) {
	let F = s.length;
	if (invariant(F === d.length, "Both input and output ranges must be the same length", "range-length"), F === 1) return () => d[0];
	if (F === 2 && d[0] === d[1]) return () => d[1];
	let L = s[0] === s[1];
	s[0] > s[F - 1] && (s = [...s].reverse(), d = [...d].reverse());
	let V = createMixers(d, w, k), U = V.length, K = (C) => {
		if (L && C < s[0]) return d[0];
		let w = 0;
		if (U > 1) for (; w < s.length - 2 && !(C < s[w + 1]); w++);
		let k = /* @__PURE__ */ progress(s[w], s[w + 1], C);
		return V[w](k);
	};
	return C ? (d) => K(clamp(s[0], s[F - 1], d)) : K;
}
function fillOffset(s, d) {
	let C = s[s.length - 1];
	for (let w = 1; w <= d; w++) {
		let k = /* @__PURE__ */ progress(0, d, w);
		s.push(mixNumber(C, 1, k));
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
function keyframes({ duration: s = 300, keyframes: d, times: C, ease: w = "easeInOut" }) {
	let k = isEasingArray(w) ? w.map(easingDefinitionToFunction) : easingDefinitionToFunction(w), F = {
		done: !1,
		value: d[0]
	}, L = interpolate(convertOffsetToTimes(C && C.length === d.length ? C : defaultOffset(d), s), d, { ease: Array.isArray(k) ? k : defaultEasing(d, k) });
	return {
		calculatedDuration: s,
		next: (d) => (F.value = L(d), F.done = d >= s, F)
	};
}
var isNotNull$1 = (s) => s !== null;
function getFinalKeyframe$1(s, { repeat: d, repeatType: C = "loop" }, w, k = 1) {
	let F = s.filter(isNotNull$1), L = k < 0 || d && C !== "loop" && d % 2 == 1 ? 0 : F.length - 1;
	return !L || w === void 0 ? F[L] : w;
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
		let { type: d = keyframes, repeat: C = 0, repeatDelay: w = 0, repeatType: k, velocity: F = 0 } = s, { keyframes: L } = s, V = d || keyframes;
		process.env.NODE_ENV !== "production" && V !== keyframes && invariant(L.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${L}`, "spring-two-frames"), V !== keyframes && typeof L[0] != "number" && (this.mixKeyframes = pipe(percentToProgress, mix(L[0], L[1])), L = [0, 100]);
		let U = V({
			...s,
			keyframes: L
		});
		k === "mirror" && (this.mirroredGenerator = V({
			...s,
			keyframes: [...L].reverse(),
			velocity: -F
		})), U.calculatedDuration === null && (U.calculatedDuration = calcGeneratorDuration(U));
		let { calculatedDuration: K } = U;
		this.calculatedDuration = K, this.resolvedDuration = K + w, this.totalDuration = this.resolvedDuration * (C + 1) - w, this.generator = U;
	}
	updateTime(s) {
		let d = Math.round(s - this.startTime) * this.playbackSpeed;
		this.holdTime === null ? this.currentTime = d : this.currentTime = this.holdTime;
	}
	tick(s, d = !1) {
		let { generator: C, totalDuration: w, mixKeyframes: k, mirroredGenerator: F, resolvedDuration: L, calculatedDuration: V } = this;
		if (this.startTime === null) return C.next(0);
		let { delay: U = 0, keyframes: K, repeat: q, repeatType: J, repeatDelay: X, type: $, onUpdate: PD, finalKeyframe: FD } = this.options;
		this.speed > 0 ? this.startTime = Math.min(this.startTime, s) : this.speed < 0 && (this.startTime = Math.min(s - w / this.speed, this.startTime)), d ? this.currentTime = s : this.updateTime(s);
		let ID = this.currentTime - U * (this.playbackSpeed >= 0 ? 1 : -1), LD = this.playbackSpeed >= 0 ? ID < 0 : ID > w;
		this.currentTime = Math.max(ID, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = w);
		let RD = this.currentTime, zD = C;
		if (q) {
			let s = Math.min(this.currentTime, w) / L, d = Math.floor(s), C = s % 1;
			!C && s >= 1 && (C = 1), C === 1 && d--, d = Math.min(d, q + 1), d % 2 && (J === "reverse" ? (C = 1 - C, X && (C -= X / L)) : J === "mirror" && (zD = F)), RD = clamp(0, 1, C) * L;
		}
		let BD = LD ? {
			done: !1,
			value: K[0]
		} : zD.next(RD);
		k && (BD.value = k(BD.value));
		let { done: VD } = BD;
		!LD && V !== null && (VD = this.playbackSpeed >= 0 ? this.currentTime >= w : this.currentTime <= 0);
		let HD = this.holdTime === null && (this.state === "finished" || this.state === "running" && VD);
		return HD && $ !== inertia && (BD.value = getFinalKeyframe$1(K, this.options, FD, this.speed)), PD && PD(BD.value), HD && this.finish(), BD;
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
		let C = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = C) : this.holdTime === null ? this.startTime ||= d ?? C : this.startTime = C - this.holdTime, this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
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
	let C = s.match(/^matrix3d\(([-\d.e\s,]+)\)$/u), w, k;
	if (C) w = matrix3dParsers, k = C;
	else {
		let d = s.match(/^matrix\(([-\d.e\s,]+)\)$/u);
		w = matrix2dParsers, k = d;
	}
	if (!k) return defaultTransformValue(d);
	let F = w[d], L = k[1].split(",").map(convertTransformToNumber);
	return typeof F == "function" ? F(L) : L[F];
}
var readTransformValue = (s, d) => {
	let { transform: C = "none" } = getComputedStyle(s);
	return parseValueFromTransform(C, d);
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
	return nonTranslationalTransformKeys.forEach((C) => {
		let w = s.getValue(C);
		w !== void 0 && (d.push([C, w.get()]), w.set(C.startsWith("scale") ? 1 : 0));
	}), d;
}
var positionalValues = {
	width: ({ x: s }, { paddingLeft: d = "0", paddingRight: C = "0" }) => s.max - s.min - parseFloat(d) - parseFloat(C),
	height: ({ y: s }, { paddingTop: d = "0", paddingBottom: C = "0" }) => s.max - s.min - parseFloat(d) - parseFloat(C),
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
		let s = Array.from(toResolve).filter((s) => s.needsMeasurement), d = new Set(s.map((s) => s.element)), C = /* @__PURE__ */ new Map();
		d.forEach((s) => {
			let d = removeNonTranslationalTransform(s);
			d.length && (C.set(s, d), s.render());
		}), s.forEach((s) => s.measureInitialState()), d.forEach((s) => {
			s.render();
			let d = C.get(s);
			d && d.forEach(([d, C]) => {
				s.getValue(d)?.set(C);
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
	constructor(s, d, C, w, k, F = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...s], this.onComplete = d, this.name = C, this.motionValue = w, this.element = k, this.isAsync = F;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (toResolve.add(this), isScheduled || (isScheduled = !0, frame.read(readAllKeyframes), frame.resolveKeyframes(measureAllKeyframes))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: s, name: d, element: C, motionValue: w } = this;
		if (s[0] === null) {
			let k = w?.get(), F = s[s.length - 1];
			if (k !== void 0) s[0] = k;
			else if (C && d) {
				let w = C.readValue(d, F);
				w != null && (s[0] = w);
			}
			s[0] === void 0 && (s[0] = F), w && k === void 0 && w.set(s[0]);
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
function setStyle(s, d, C) {
	isCSSVar(d) ? s.style.setProperty(d, C) : s.style[d] = C;
}
var supportsScrollTimeline = /* @__PURE__ */ memo$1(() => window.ScrollTimeline !== void 0), supportsFlags = {};
function memoSupports(s, d) {
	let C = /* @__PURE__ */ memo$1(s);
	return () => supportsFlags[d] ?? C();
}
var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), cubicBezierAsString = ([s, d, C, w]) => `cubic-bezier(${s}, ${d}, ${C}, ${w})`, supportedWaapiEasing = {
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
function startWaapiAnimation(s, d, C, { delay: w = 0, duration: k = 300, repeat: F = 0, repeatType: L = "loop", ease: V = "easeOut", times: U } = {}, K = void 0) {
	let q = { [d]: C };
	U && (q.offset = U);
	let J = mapEasingToNativeEasing(V, k);
	Array.isArray(J) && (q.easing = J), statsBuffer.value && activeAnimations.waapi++;
	let X = {
		delay: w,
		duration: k,
		easing: Array.isArray(J) ? "linear" : J,
		fill: "both",
		iterations: F + 1,
		direction: L === "reverse" ? "alternate" : "normal"
	};
	K && (X.pseudoElement = K);
	let $ = s.animate(q, X);
	return statsBuffer.value && $.finished.finally(() => {
		activeAnimations.waapi--;
	}), $;
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
		let { element: d, name: C, keyframes: w, pseudoElement: k, allowFlatten: F = !1, finalKeyframe: L, onComplete: V } = s;
		this.isPseudoElement = !!k, this.allowFlatten = F, this.options = s, invariant(typeof s.type != "string", "Mini animate() doesn't support \"type\" as a string.", "mini-spring");
		let U = applyGeneratorOptions(s);
		this.animation = startWaapiAnimation(d, C, w, U, k), U.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
			if (this.finishedTime = this.time, !k) {
				let s = getFinalKeyframe$1(w, this.options, L, this.speed);
				this.updateMotionValue ? this.updateMotionValue(s) : setStyle(d, C, s), this.animation.cancel();
			}
			V?.(), this.notifyFinished();
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
		let { motionValue: d, onUpdate: C, onComplete: w, element: k, ...F } = this.options;
		if (!d) return;
		if (s !== void 0) {
			d.set(s);
			return;
		}
		let L = new JSAnimation({
			...F,
			autoplay: !1
		}), V = Math.max(sampleDelta, time.now() - this.startTime), U = clamp(0, sampleDelta, V - sampleDelta);
		d.setWithVelocity(L.sample(Math.max(0, V - U)).value, L.sample(V).value, U), L.stop();
	}
}, isAnimatable = (s, d) => d === "zIndex" ? !1 : !!(typeof s == "number" || Array.isArray(s) || typeof s == "string" && (complex.test(s) || s === "0") && !s.startsWith("url("));
function hasKeyframesChanged(s) {
	let d = s[0];
	if (s.length === 1) return !0;
	for (let C = 0; C < s.length; C++) if (s[C] !== d) return !0;
}
function canAnimate(s, d, C, w) {
	let k = s[0];
	if (k === null) return !1;
	if (d === "display" || d === "visibility") return !0;
	let F = s[s.length - 1], L = isAnimatable(k, d), V = isAnimatable(F, d);
	return warning(L === V, `You are trying to animate ${d} from "${k}" to "${F}". "${L ? F : k}" is not an animatable value.`, "value-not-animatable"), !L || !V ? !1 : hasKeyframesChanged(s) || (C === "spring" || isGenerator(C)) && w;
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
	let { motionValue: d, name: C, repeatDelay: w, repeatType: k, damping: F, type: L } = s;
	if (!(d?.owner?.current instanceof HTMLElement)) return !1;
	let { onUpdate: V, transformTemplate: U } = d.owner.getProps();
	return supportsWaapi() && C && acceleratedValues.has(C) && (C !== "transform" || !U) && !V && !w && k !== "mirror" && F !== 0 && L !== "inertia";
}
var MAX_RESOLVE_DELAY = 40, AsyncMotionValueAnimation = class extends WithPromise {
	constructor({ autoplay: s = !0, delay: d = 0, type: C = "keyframes", repeat: w = 0, repeatDelay: k = 0, repeatType: F = "loop", keyframes: L, name: V, motionValue: U, element: K, ...q }) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = time.now();
		let J = {
			autoplay: s,
			delay: d,
			type: C,
			repeat: w,
			repeatDelay: k,
			repeatType: F,
			name: V,
			motionValue: U,
			element: K,
			...q
		};
		this.keyframeResolver = new (K?.KeyframeResolver || KeyframeResolver)(L, (s, d, C) => this.onKeyframesResolved(s, d, J, !C), V, U, K), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(s, d, C, w) {
		this.keyframeResolver = void 0;
		let { name: k, type: F, velocity: L, delay: V, isHandoff: U, onUpdate: K } = C;
		this.resolvedAt = time.now(), canAnimate(s, k, F, L) || ((MotionGlobalConfig.instantAnimations || !V) && K?.(getFinalKeyframe$1(s, C, d)), s[0] = s[s.length - 1], makeAnimationInstant(C), C.repeat = 0);
		let q = {
			startTime: w ? this.resolvedAt && this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0,
			finalKeyframe: d,
			...C,
			keyframes: s
		}, J = !U && supportsBrowserAnimation(q) ? new NativeAnimationExtended({
			...q,
			element: q.motionValue.owner.current
		}) : new JSAnimation(q);
		J.finished.then(() => this.notifyFinished()).catch(noop), this.pendingTimeline &&= (this.stopTimeline = J.attachTimeline(this.pendingTimeline), void 0), this._animation = J;
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
	let [, C, w, k] = d;
	return [`--${C ?? w}`, k];
}
var maxDepth = 4;
function getVariableValue(s, d, C = 1) {
	invariant(C <= maxDepth, `Max CSS variable fallback depth detected in property "${s}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
	let [w, k] = parseCSSVariable(s);
	if (!w) return;
	let F = window.getComputedStyle(d).getPropertyValue(w);
	if (F) {
		let s = F.trim();
		return isNumericalString(s) ? parseFloat(s) : s;
	}
	return isCSSVariableToken(k) ? getVariableValue(k, d, C + 1) : k;
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
	let [d, C] = s.slice(0, -1).split("(");
	if (d === "drop-shadow") return s;
	let [w] = C.match(floatRegex) || [];
	if (!w) return s;
	let k = C.replace(w, ""), F = maxDefaults.has(d) ? 1 : 0;
	return w !== C && (F *= 100), d + "(" + F + k + ")";
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
	let C = getDefaultValueType(s);
	return C !== filter && (C = complex), C.getAnimatableNone ? C.getAnimatableNone(d) : void 0;
}
var invalidTemplates = new Set([
	"auto",
	"none",
	"0"
]);
function makeNoneKeyframesAnimatable(s, d, C) {
	let w = 0, k;
	for (; w < s.length && !k;) {
		let d = s[w];
		typeof d == "string" && !invalidTemplates.has(d) && analyseComplexValue(d).values.length && (k = s[w]), w++;
	}
	if (k && C) for (let w of d) s[w] = getAnimatableNone(C, k);
}
var DOMKeyframesResolver = class extends KeyframeResolver {
	constructor(s, d, C, w, k) {
		super(s, d, C, w, k, !0);
	}
	readKeyframes() {
		let { unresolvedKeyframes: s, element: d, name: C } = this;
		if (!d || !d.current) return;
		super.readKeyframes();
		for (let C = 0; C < s.length; C++) {
			let w = s[C];
			if (typeof w == "string" && (w = w.trim(), isCSSVariableToken(w))) {
				let k = getVariableValue(w, d.current);
				k !== void 0 && (s[C] = k), C === s.length - 1 && (this.finalKeyframe = w);
			}
		}
		if (this.resolveNoneKeyframes(), !positionalKeys.has(C) || s.length !== 2) return;
		let [w, k] = s, F = findDimensionValueType(w), L = findDimensionValueType(k);
		if (containsCSSVariable(w) !== containsCSSVariable(k) && positionalValues[C]) {
			this.needsMeasurement = !0;
			return;
		}
		if (F !== L) if (isNumOrPxType(F) && isNumOrPxType(L)) for (let d = 0; d < s.length; d++) {
			let C = s[d];
			typeof C == "string" && (s[d] = parseFloat(C));
		}
		else positionalValues[C] && (this.needsMeasurement = !0);
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: s, name: d } = this, C = [];
		for (let d = 0; d < s.length; d++) (s[d] === null || isNone(s[d])) && C.push(d);
		C.length && makeNoneKeyframesAnimatable(s, C, d);
	}
	measureInitialState() {
		let { element: s, unresolvedKeyframes: d, name: C } = this;
		if (!s || !s.current) return;
		C === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = positionalValues[C](s.measureViewportBox(), window.getComputedStyle(s.current)), d[0] = this.measuredOrigin;
		let w = d[d.length - 1];
		w !== void 0 && s.getValue(C, w).jump(w, !1);
	}
	measureEndState() {
		let { element: s, name: d, unresolvedKeyframes: C } = this;
		if (!s || !s.current) return;
		let w = s.getValue(d);
		w && w.jump(this.measuredOrigin, !1);
		let k = C.length - 1, F = C[k];
		C[k] = positionalValues[d](s.measureViewportBox(), window.getComputedStyle(s.current)), F !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = F), this.removedTransforms?.length && this.removedTransforms.forEach(([d, C]) => {
			s.getValue(d).set(C);
		}), this.resolveNoneKeyframes();
	}
};
function resolveElements(s, d, C) {
	if (s instanceof EventTarget) return [s];
	if (typeof s == "string") {
		let w = document;
		d && (w = d.current);
		let k = C?.[s] ?? w.querySelectorAll(s);
		return k ? Array.from(k) : [];
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
		let C = this.events[s].add(d);
		return s === "change" ? () => {
			C(), frame.read(() => {
				this.events.change.getSize() || this.stop();
			});
		} : C;
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
	setWithVelocity(s, d, C) {
		this.set(d), this.prev = void 0, this.prevFrameValue = s, this.prevUpdatedAt = this.updatedAt - C;
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
	let C = resolveElements(s), w = new AbortController();
	return [
		C,
		{
			passive: !0,
			...d,
			signal: w.signal
		},
		() => w.abort()
	];
}
function isValidHover(s) {
	return !(s.pointerType === "touch" || isDragActive());
}
function hover(s, d, C = {}) {
	let [w, k, F] = setupGesture(s, C), L = (s) => {
		if (!isValidHover(s)) return;
		let { target: C } = s, w = d(C, s);
		if (typeof w != "function" || !C) return;
		let F = (s) => {
			isValidHover(s) && (w(s), C.removeEventListener("pointerleave", F));
		};
		C.addEventListener("pointerleave", F, k);
	};
	return w.forEach((s) => {
		s.addEventListener("pointerenter", L, k);
	}), F;
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
	let C = s.currentTarget;
	if (!C) return;
	let w = filterEvents(() => {
		if (isPressing.has(C)) return;
		firePointerEvent(C, "down");
		let s = filterEvents(() => {
			firePointerEvent(C, "up");
		});
		C.addEventListener("keyup", s, d), C.addEventListener("blur", () => firePointerEvent(C, "cancel"), d);
	});
	C.addEventListener("keydown", w, d), C.addEventListener("blur", () => C.removeEventListener("keydown", w), d);
};
function isValidPressEvent(s) {
	return isPrimaryPointer(s) && !isDragActive();
}
function press(s, d, C = {}) {
	let [w, k, F] = setupGesture(s, C), L = (s) => {
		let w = s.currentTarget;
		if (!isValidPressEvent(s)) return;
		isPressing.add(w);
		let F = d(w, s), L = (s, d) => {
			window.removeEventListener("pointerup", V), window.removeEventListener("pointercancel", U), isPressing.has(w) && isPressing.delete(w), isValidPressEvent(s) && typeof F == "function" && F(s, { success: d });
		}, V = (s) => {
			L(s, w === window || w === document || C.useGlobalTarget || isNodeOrChild(w, s.target));
		}, U = (s) => {
			L(s, !1);
		};
		window.addEventListener("pointerup", V, k), window.addEventListener("pointercancel", U, k);
	};
	return w.forEach((s) => {
		(C.useGlobalTarget ? window : s).addEventListener("pointerdown", L, k), isHTMLElement(s) && (s.addEventListener("focus", (s) => enableKeyboardPress(s, k)), !isElementKeyboardAccessible(s) && !s.hasAttribute("tabindex") && (s.tabIndex = 0));
	}), F;
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
	let { isPresent: C, onExitComplete: w, register: k } = d, F = useId();
	useEffect(() => {
		if (s) return k(F);
	}, [s]);
	let L = useCallback(() => s && w && w(F), [
		F,
		w,
		s
	]);
	return !C && w ? [!1, L] : [!0];
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
	return function(C) {
		return d[C] === void 0 && (d[C] = s(C)), d[C];
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
function filterProps(s, d, C) {
	let w = {};
	for (let k in s) k === "values" && typeof s.values == "object" || (shouldForward(k) || C === !0 && isValidMotionProp(k) || !d && !isValidMotionProp(k) || s.draggable && k.startsWith("onDrag")) && (w[k] = s[k]);
	return w;
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
		let { initial: d, animate: C } = s;
		return {
			initial: d === !1 || isVariantLabel(d) ? d : void 0,
			animate: isVariantLabel(C) ? C : void 0
		};
	}
	return s.inherit === !1 ? {} : d;
}
function useCreateMotionContext(s) {
	let { initial: d, animate: C } = getCurrentTreeVariants(s, useContext(MotionContext));
	return useMemo(() => ({
		initial: d,
		animate: C
	}), [variantLabelsAsDependency(d), variantLabelsAsDependency(C)]);
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
} }, correctBoxShadow = { correct: (s, { treeScale: d, projectionDelta: C }) => {
	let w = s, k = complex.parse(s);
	if (k.length > 5) return w;
	let F = complex.createTransformer(s), L = typeof k[0] == "number" ? 0 : 1, V = C.x.scale * d.x, U = C.y.scale * d.y;
	k[0 + L] /= V, k[1 + L] /= U;
	let K = mixNumber(V, U, .5);
	return typeof k[2 + L] == "number" && (k[2 + L] /= K), typeof k[3 + L] == "number" && (k[3 + L] /= K), F(k);
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
function isForcedMotionValue(s, { layout: d, layoutId: C }) {
	return transformProps.has(s) || s.startsWith("origin") || (d || C !== void 0) && (!!scaleCorrectors[s] || s === "opacity");
}
var translateAlias = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, numTransforms = transformPropOrder.length;
function buildTransform(s, d, C) {
	let w = "", k = !0;
	for (let F = 0; F < numTransforms; F++) {
		let L = transformPropOrder[F], V = s[L];
		if (V === void 0) continue;
		let U = !0;
		if (U = typeof V == "number" ? V === (L.startsWith("scale") ? 1 : 0) : parseFloat(V) === 0, !U || C) {
			let s = getValueAsType(V, numberValueTypes[L]);
			if (!U) {
				k = !1;
				let d = translateAlias[L] || L;
				w += `${d}(${s}) `;
			}
			C && (d[L] = s);
		}
	}
	return w = w.trim(), C ? w = C(d, k ? "" : w) : k && (w = "none"), w;
}
function buildHTMLStyles(s, d, C) {
	let { style: w, vars: k, transformOrigin: F } = s, L = !1, V = !1;
	for (let s in d) {
		let C = d[s];
		if (transformProps.has(s)) {
			L = !0;
			continue;
		} else if (isCSSVariableName(s)) {
			k[s] = C;
			continue;
		} else {
			let d = getValueAsType(C, numberValueTypes[s]);
			s.startsWith("origin") ? (V = !0, F[s] = d) : w[s] = d;
		}
	}
	if (d.transform || (L || C ? w.transform = buildTransform(d, s.transform, C) : w.transform &&= "none"), V) {
		let { originX: s = "50%", originY: d = "50%", originZ: C = 0 } = F;
		w.transformOrigin = `${s} ${d} ${C}`;
	}
}
var createHtmlRenderState = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
function copyRawValuesOnly(s, d, C) {
	for (let w in d) !isMotionValue(d[w]) && !isForcedMotionValue(w, C) && (s[w] = d[w]);
}
function useInitialMotionValues({ transformTemplate: s }, d) {
	return useMemo(() => {
		let C = createHtmlRenderState();
		return buildHTMLStyles(C, d, s), Object.assign({}, C.vars, C.style);
	}, [d]);
}
function useStyle(s, d) {
	let C = s.style || {}, w = {};
	return copyRawValuesOnly(w, C, s), Object.assign(w, useInitialMotionValues(s, d)), w;
}
function useHTMLProps(s, d) {
	let C = {}, w = useStyle(s, d);
	return s.drag && s.dragListener !== !1 && (C.draggable = !1, w.userSelect = w.WebkitUserSelect = w.WebkitTouchCallout = "none", w.touchAction = s.drag === !0 ? "none" : `pan-${s.drag === "x" ? "y" : "x"}`), s.tabIndex === void 0 && (s.onTap || s.onTapStart || s.whileTap) && (C.tabIndex = 0), C.style = w, C;
}
var dashKeys = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, camelKeys = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function buildSVGPath(s, d, C = 1, w = 0, k = !0) {
	s.pathLength = 1;
	let F = k ? dashKeys : camelKeys;
	s[F.offset] = px.transform(-w);
	let L = px.transform(d), V = px.transform(C);
	s[F.array] = `${L} ${V}`;
}
var cssMotionPathProperties = [
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function buildSVGAttrs(s, { attrX: d, attrY: C, attrScale: w, pathLength: k, pathSpacing: F = 1, pathOffset: L = 0, ...V }, U, K, q) {
	if (buildHTMLStyles(s, V, K), U) {
		s.style.viewBox && (s.attrs.viewBox = s.style.viewBox);
		return;
	}
	s.attrs = s.style, s.style = {};
	let { attrs: J, style: X } = s;
	J.transform && (X.transform = J.transform, delete J.transform), (X.transform || J.transformOrigin) && (X.transformOrigin = J.transformOrigin ?? "50% 50%", delete J.transformOrigin), X.transform && (X.transformBox = q?.transformBox ?? "fill-box", delete J.transformBox);
	for (let s of cssMotionPathProperties) J[s] !== void 0 && (X[s] = J[s], delete J[s]);
	d !== void 0 && (J.x = d), C !== void 0 && (J.y = C), w !== void 0 && (J.scale = w), k !== void 0 && buildSVGPath(J, k, F, L, !1);
}
var createSvgRenderState = () => ({
	...createHtmlRenderState(),
	attrs: {}
}), isSVGTag = (s) => typeof s == "string" && s.toLowerCase() === "svg";
function useSVGProps(s, d, C, w) {
	let k = useMemo(() => {
		let C = createSvgRenderState();
		return buildSVGAttrs(C, d, isSVGTag(w), s.transformTemplate, s.style), {
			...C.attrs,
			style: { ...C.style }
		};
	}, [d]);
	if (s.style) {
		let d = {};
		copyRawValuesOnly(d, s.style, s), k.style = {
			...d,
			...k.style
		};
	}
	return k;
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
function useRender(s, d, C, { latestValues: k }, F, V = !1, U) {
	let K = (U ?? isSVGComponent(s) ? useSVGProps : useHTMLProps)(d, k, F, s), q = filterProps(d, typeof s == "string", V), J = s === Fragment ? {} : {
		...q,
		...K,
		ref: C
	}, { children: X } = d, $ = useMemo(() => isMotionValue(X) ? X.get() : X, [X]);
	return createElement(s, {
		...J,
		children: $
	});
}
function getValueState(s) {
	let d = [{}, {}];
	return s?.values.forEach((s, C) => {
		d[0][C] = s.get(), d[1][C] = s.getVelocity();
	}), d;
}
function resolveVariantFromProps(s, d, C, w) {
	if (typeof d == "function") {
		let [k, F] = getValueState(w);
		d = d(C === void 0 ? s.custom : C, k, F);
	}
	if (typeof d == "string" && (d = s.variants && s.variants[d]), typeof d == "function") {
		let [k, F] = getValueState(w);
		d = d(C === void 0 ? s.custom : C, k, F);
	}
	return d;
}
function resolveMotionValue(s) {
	return isMotionValue(s) ? s.get() : s;
}
function makeState({ scrapeMotionValuesFromProps: s, createRenderState: d }, C, w, k) {
	return {
		latestValues: makeLatestValues(C, w, k, s),
		renderState: d()
	};
}
function makeLatestValues(s, d, C, w) {
	let k = {}, F = w(s, {});
	for (let s in F) k[s] = resolveMotionValue(F[s]);
	let { initial: L, animate: V } = s, U = isControllingVariants(s), K = isVariantNode(s);
	d && K && !U && s.inherit !== !1 && (L === void 0 && (L = d.initial), V === void 0 && (V = d.animate));
	let q = C ? C.initial === !1 : !1;
	q ||= L === !1;
	let J = q ? V : L;
	if (J && typeof J != "boolean" && !isAnimationControls(J)) {
		let d = Array.isArray(J) ? J : [J];
		for (let C = 0; C < d.length; C++) {
			let w = resolveVariantFromProps(s, d[C]);
			if (w) {
				let { transitionEnd: s, transition: d, ...C } = w;
				for (let s in C) {
					let d = C[s];
					if (Array.isArray(d)) {
						let s = q ? d.length - 1 : 0;
						d = d[s];
					}
					d !== null && (k[s] = d);
				}
				for (let d in s) k[d] = s[d];
			}
		}
	}
	return k;
}
var makeUseVisualState = (s) => (d, C) => {
	let w = useContext(MotionContext), k = useContext(PresenceContext), F = () => makeState(s, d, w, k);
	return C ? F() : useConstant(F);
};
function scrapeMotionValuesFromProps$1(s, d, C) {
	let { style: w } = s, k = {};
	for (let F in w) (isMotionValue(w[F]) || d.style && isMotionValue(d.style[F]) || isForcedMotionValue(F, s) || C?.getValue(F)?.liveStyle !== void 0) && (k[F] = w[F]);
	return k;
}
var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps: scrapeMotionValuesFromProps$1,
	createRenderState: createHtmlRenderState
});
function scrapeMotionValuesFromProps(s, d, C) {
	let w = scrapeMotionValuesFromProps$1(s, d, C);
	for (let C in s) if (isMotionValue(s[C]) || isMotionValue(d[C])) {
		let d = transformPropOrder.indexOf(C) === -1 ? C : "attr" + C.charAt(0).toUpperCase() + C.substring(1);
		w[d] = s[C];
	}
	return w;
}
var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
	scrapeMotionValuesFromProps,
	createRenderState: createSvgRenderState
}), motionComponentSymbol = Symbol.for("motionComponentSymbol");
function useMotionRef(s, d, C) {
	let w = useRef(C);
	useInsertionEffect(() => {
		w.current = C;
	});
	let k = useRef(null);
	return useCallback((C) => {
		C && s.onMount?.(C), d && (C ? d.mount(C) : d.unmount());
		let F = w.current;
		if (typeof F == "function") if (C) {
			let s = F(C);
			typeof s == "function" && (k.current = s);
		} else k.current ? (k.current(), k.current = null) : F(C);
		else F && (F.current = C);
	}, [d]);
}
var camelToDash = (s) => s.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), optimizedAppearDataAttribute = "data-" + camelToDash("framerAppearId"), SwitchLayoutGroupContext = createContext({});
function isRefObject(s) {
	return s && typeof s == "object" && Object.prototype.hasOwnProperty.call(s, "current");
}
function useVisualElement(s, d, C, w, k, F) {
	let { visualElement: L } = useContext(MotionContext), V = useContext(LazyContext), U = useContext(PresenceContext), K = useContext(MotionConfigContext).reducedMotion, X = useRef(null);
	w ||= V.renderer, !X.current && w && (X.current = w(s, {
		visualState: d,
		parent: L,
		props: C,
		presenceContext: U,
		blockInitialAnimation: U ? U.initial === !1 : !1,
		reducedMotionConfig: K,
		isSVG: F
	}));
	let $ = X.current, FD = useContext(SwitchLayoutGroupContext);
	$ && !$.projection && k && ($.type === "html" || $.type === "svg") && createProjectionNode$1(X.current, C, k, FD);
	let ID = useRef(!1);
	useInsertionEffect(() => {
		$ && ID.current && $.update(C, U);
	});
	let RD = C[optimizedAppearDataAttribute], zD = useRef(!!RD && !window.MotionHandoffIsComplete?.(RD) && window.MotionHasOptimisedAnimation?.(RD));
	return useIsomorphicLayoutEffect(() => {
		$ && (ID.current = !0, window.MotionIsMounted = !0, $.updateFeatures(), $.scheduleRenderMicrotask(), zD.current && $.animationState && $.animationState.animateChanges());
	}), useEffect(() => {
		$ && (!zD.current && $.animationState && $.animationState.animateChanges(), zD.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(RD);
		}), !1), $.enteringChildren = void 0);
	}), $;
}
function createProjectionNode$1(s, d, C, w) {
	let { layoutId: k, layout: F, drag: L, dragConstraints: V, layoutScroll: U, layoutRoot: K, layoutCrossfade: q } = d;
	s.projection = new C(s.latestValues, d["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(s.parent)), s.projection.setOptions({
		layoutId: k,
		layout: F,
		alwaysMeasureLayout: !!L || V && isRefObject(V),
		visualElement: s,
		animationType: typeof F == "string" ? F : "both",
		initialPromotionConfig: w,
		crossfade: q,
		layoutScroll: U,
		layoutRoot: K
	});
}
function getClosestProjectingNode(s) {
	if (s) return s.options.allowProjection === !1 ? getClosestProjectingNode(s.parent) : s.projection;
}
function createMotionComponent(s, { forwardMotionProps: d = !1, type: C } = {}, w, k) {
	w && loadFeatures(w);
	let F = C ? C === "svg" : isSVGComponent(s), L = F ? useSVGVisualState : useHTMLVisualState;
	function U(C, V) {
		let U, K = {
			...useContext(MotionConfigContext),
			...C,
			layoutId: useLayoutId(C)
		}, { isStatic: J } = K, X = useCreateMotionContext(C), $ = L(C, J);
		if (!J && isBrowser) {
			useStrictMode(K, w);
			let d = getProjectionFunctionality(K);
			U = d.MeasureLayout, X.visualElement = useVisualElement(s, $, K, k, d.ProjectionNode, F);
		}
		return jsxs(MotionContext.Provider, {
			value: X,
			children: [U && X.visualElement ? jsx(U, {
				visualElement: X.visualElement,
				...K
			}) : null, useRender(s, C, useMotionRef($, X.visualElement, V), $, J, d, F)]
		});
	}
	U.displayName = `motion.${typeof s == "string" ? s : `create(${s.displayName ?? s.name ?? ""})`}`;
	let K = forwardRef(U);
	return K[motionComponentSymbol] = s, K;
}
function useLayoutId({ layoutId: s }) {
	let d = useContext(LayoutGroupContext).id;
	return d && s !== void 0 ? d + "-" + s : s;
}
function useStrictMode(s, d) {
	let C = useContext(LazyContext).strict;
	if (process.env.NODE_ENV !== "production" && d && C) {
		let d = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
		s.ignoreStrict ? warning(!1, d, "lazy-strict-mode") : invariant(!1, d, "lazy-strict-mode");
	}
}
function getProjectionFunctionality(s) {
	let { drag: d, layout: C } = featureDefinitions;
	if (!d && !C) return {};
	let w = {
		...d,
		...C
	};
	return {
		MeasureLayout: d?.isEnabled(s) || C?.isEnabled(s) ? w.MeasureLayout : void 0,
		ProjectionNode: w.ProjectionNode
	};
}
function createMotionProxy(s, d) {
	if (typeof Proxy > "u") return createMotionComponent;
	let C = /* @__PURE__ */ new Map(), w = (C, w) => createMotionComponent(C, w, s, d);
	return new Proxy((s, d) => (process.env.NODE_ENV !== "production" && warnOnce(!1, "motion() is deprecated. Use motion.create() instead."), w(s, d)), { get: (k, F) => F === "create" ? w : (C.has(F) || C.set(F, createMotionComponent(F, void 0, s, d)), C.get(F)) });
}
function convertBoundingBoxToBox({ top: s, left: d, right: C, bottom: w }) {
	return {
		x: {
			min: d,
			max: C
		},
		y: {
			min: s,
			max: w
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
	let C = d({
		x: s.left,
		y: s.top
	}), w = d({
		x: s.right,
		y: s.bottom
	});
	return {
		top: C.y,
		left: C.x,
		bottom: w.y,
		right: w.x
	};
}
function isIdentityScale(s) {
	return s === void 0 || s === 1;
}
function hasScale({ scale: s, scaleX: d, scaleY: C }) {
	return !isIdentityScale(s) || !isIdentityScale(d) || !isIdentityScale(C);
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
function scalePoint(s, d, C) {
	return C + d * (s - C);
}
function applyPointDelta(s, d, C, w, k) {
	return k !== void 0 && (s = scalePoint(s, k, w)), scalePoint(s, C, w) + d;
}
function applyAxisDelta(s, d = 0, C = 1, w, k) {
	s.min = applyPointDelta(s.min, d, C, w, k), s.max = applyPointDelta(s.max, d, C, w, k);
}
function applyBoxDelta(s, { x: d, y: C }) {
	applyAxisDelta(s.x, d.translate, d.scale, d.originPoint), applyAxisDelta(s.y, C.translate, C.scale, C.originPoint);
}
var TREE_SCALE_SNAP_MIN = .999999999999, TREE_SCALE_SNAP_MAX = 1.0000000000001;
function applyTreeDeltas(s, d, C, w = !1) {
	let k = C.length;
	if (!k) return;
	d.x = d.y = 1;
	let F, L;
	for (let V = 0; V < k; V++) {
		F = C[V], L = F.projectionDelta;
		let { visualElement: k } = F.options;
		k && k.props.style && k.props.style.display === "contents" || (w && F.options.layoutScroll && F.scroll && F !== F.root && transformBox(s, {
			x: -F.scroll.offset.x,
			y: -F.scroll.offset.y
		}), L && (d.x *= L.x.scale, d.y *= L.y.scale, applyBoxDelta(s, L)), w && hasTransform(F.latestValues) && transformBox(s, F.latestValues));
	}
	d.x < TREE_SCALE_SNAP_MAX && d.x > TREE_SCALE_SNAP_MIN && (d.x = 1), d.y < TREE_SCALE_SNAP_MAX && d.y > TREE_SCALE_SNAP_MIN && (d.y = 1);
}
function translateAxis(s, d) {
	s.min += d, s.max += d;
}
function transformAxis(s, d, C, w, k = .5) {
	applyAxisDelta(s, d, C, mixNumber(s.min, s.max, k), w);
}
function transformBox(s, d) {
	transformAxis(s.x, d.x, d.scaleX, d.scale, d.originX), transformAxis(s.y, d.y, d.scaleY, d.scale, d.originY);
}
function measureViewportBox(s, d) {
	return convertBoundingBoxToBox(transformBoxPoints(s.getBoundingClientRect(), d));
}
function measurePageBox(s, d, C) {
	let w = measureViewportBox(s, C), { scroll: k } = d;
	return k && (translateAxis(w.x, k.offset.x), translateAxis(w.y, k.offset.y)), w;
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
function updateMotionValuesFromProps(s, d, C) {
	for (let w in d) {
		let k = d[w], F = C[w];
		if (isMotionValue(k)) s.addValue(w, k);
		else if (isMotionValue(F)) s.addValue(w, motionValue(k, { owner: s }));
		else if (F !== k) if (s.hasValue(w)) {
			let d = s.getValue(w);
			d.liveStyle === !0 ? d.jump(k) : d.hasAnimated || d.set(k);
		} else {
			let d = s.getStaticValue(w);
			s.addValue(w, motionValue(d === void 0 ? k : d, { owner: s }));
		}
	}
	for (let w in C) d[w] === void 0 && s.removeValue(w);
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
	scrapeMotionValuesFromProps(s, d, C) {
		return {};
	}
	constructor({ parent: s, props: d, presenceContext: C, reducedMotionConfig: w, blockInitialAnimation: k, visualState: F }, L = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = KeyframeResolver, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let s = time.now();
			this.renderScheduledAt < s && (this.renderScheduledAt = s, frame.render(this.render, !1, !0));
		};
		let { latestValues: V, renderState: U } = F;
		this.latestValues = V, this.baseTarget = { ...V }, this.initialValues = d.initial ? { ...V } : {}, this.renderState = U, this.parent = s, this.props = d, this.presenceContext = C, this.depth = s ? s.depth + 1 : 0, this.reducedMotionConfig = w, this.options = L, this.blockInitialAnimation = !!k, this.isControllingVariants = isControllingVariants(d), this.isVariantNode = isVariantNode(d), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(s && s.current);
		let { willChange: K, ...q } = this.scrapeMotionValuesFromProps(d, {}, this);
		for (let s in q) {
			let d = q[s];
			V[s] !== void 0 && isMotionValue(d) && d.set(V[s]);
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
		let C = transformProps.has(s);
		C && this.onBindTransform && this.onBindTransform();
		let w = d.on("change", (d) => {
			this.latestValues[s] = d, this.props.onUpdate && frame.preRender(this.notifyUpdate), C && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
		}), k;
		window.MotionCheckAppearSync && (k = window.MotionCheckAppearSync(this, s, d)), this.valueSubscriptions.set(s, () => {
			w(), k && k(), d.owner && d.stop();
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
			let { isEnabled: C, Feature: w } = d;
			if (!this.features[s] && w && C(this.props) && (this.features[s] = new w(this)), this.features[s]) {
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
			let C = propEventHandlers[d];
			this.propEventSubscriptions[C] && (this.propEventSubscriptions[C](), delete this.propEventSubscriptions[C]);
			let w = s["on" + C];
			w && (this.propEventSubscriptions[C] = this.on(C, w));
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
		let C = this.values.get(s);
		d !== C && (C && this.removeValue(s), this.bindToMotionValue(s, d), this.values.set(s, d), this.latestValues[s] = d.get());
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
		let C = this.values.get(s);
		return C === void 0 && d !== void 0 && (C = motionValue(d === null ? void 0 : d, { owner: this }), this.addValue(s, C)), C;
	}
	readValue(s, d) {
		let C = this.latestValues[s] !== void 0 || !this.current ? this.latestValues[s] : this.getBaseTargetFromProps(this.props, s) ?? this.readValueFromInstance(this.current, s, this.options);
		return C != null && (typeof C == "string" && (isNumericalString(C) || isZeroValueString(C)) ? C = parseFloat(C) : !findValueType(C) && complex.test(d) && (C = getAnimatableNone(s, d)), this.setBaseTarget(s, isMotionValue(C) ? C.get() : C)), isMotionValue(C) ? C.get() : C;
	}
	setBaseTarget(s, d) {
		this.baseTarget[s] = d;
	}
	getBaseTarget(s) {
		let { initial: d } = this.props, C;
		if (typeof d == "string" || typeof d == "object") {
			let w = resolveVariantFromProps(this.props, d, this.presenceContext?.custom);
			w && (C = w[s]);
		}
		if (d && C !== void 0) return C;
		let w = this.getBaseTargetFromProps(this.props, s);
		return w !== void 0 && !isMotionValue(w) ? w : this.initialValues[s] !== void 0 && C === void 0 ? void 0 : this.baseTarget[s];
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
	removeValueFromRenderState(s, { vars: d, style: C }) {
		delete d[s], delete C[s];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: s } = this.props;
		isMotionValue(s) && (this.childSubscription = s.on("change", (s) => {
			this.current && (this.current.textContent = `${s}`);
		}));
	}
};
function renderHTML(s, { style: d, vars: C }, w, k) {
	let F = s.style, L;
	for (L in d) F[L] = d[L];
	for (L in k?.applyProjectionStyles(F, w), C) F.setProperty(L, C[L]);
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
			let C = getComputedStyle$1(s), w = (isCSSVariableName(d) ? C.getPropertyValue(d) : C[d]) || 0;
			return typeof w == "string" ? w.trim() : w;
		}
	}
	measureInstanceViewportBox(s, { transformPagePoint: d }) {
		return measureViewportBox(s, d);
	}
	build(s, d, C) {
		buildHTMLStyles(s, d, C.transformTemplate);
	}
	scrapeMotionValuesFromProps(s, d, C) {
		return scrapeMotionValuesFromProps$1(s, d, C);
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
function renderSVG(s, d, C, w) {
	for (let C in renderHTML(s, d, void 0, w), d.attrs) s.setAttribute(camelCaseAttributes.has(C) ? C : camelToDash(C), d.attrs[C]);
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
	scrapeMotionValuesFromProps(s, d, C) {
		return scrapeMotionValuesFromProps(s, d, C);
	}
	build(s, d, C) {
		buildSVGAttrs(s, d, this.isSVGTag, C.transformTemplate, C.style);
	}
	renderInstance(s, d, C, w) {
		renderSVG(s, d, C, w);
	}
	mount(s) {
		this.isSVGTag = isSVGTag(s.tagName), super.mount(s);
	}
}, createDomVisualElement = (s, d) => d.isSVG ?? isSVGComponent(s) ? new SVGVisualElement(d) : new HTMLVisualElement(d, { allowProjection: s !== Fragment });
function resolveVariant(s, d, C) {
	let w = s.getProps();
	return resolveVariantFromProps(w, d, C === void 0 ? w.custom : C, s);
}
var isKeyframesTarget = (s) => Array.isArray(s);
function setMotionValue(s, d, C) {
	s.hasValue(d) ? s.getValue(d).set(C) : s.addValue(d, motionValue(C));
}
function resolveFinalValueInKeyframes(s) {
	return isKeyframesTarget(s) ? s[s.length - 1] || 0 : s;
}
function setTarget(s, d) {
	let { transitionEnd: C = {}, transition: w = {}, ...k } = resolveVariant(s, d) || {};
	for (let d in k = {
		...k,
		...C
	}, k) setMotionValue(s, d, resolveFinalValueInKeyframes(k[d]));
}
function isWillChangeMotionValue(s) {
	return !!(isMotionValue(s) && s.add);
}
function addValueToWillChange(s, d) {
	let C = s.getValue("willChange");
	if (isWillChangeMotionValue(C)) return C.add(d);
	if (!C && MotionGlobalConfig.WillChange) {
		let C = new MotionGlobalConfig.WillChange("auto");
		s.addValue("willChange", C), C.add(d);
	}
}
function getOptimisedAppearId(s) {
	return s.props[optimizedAppearDataAttribute];
}
var isNotNull = (s) => s !== null;
function getFinalKeyframe(s, { repeat: d, repeatType: C = "loop" }, w) {
	let k = s.filter(isNotNull), F = d && C !== "loop" && d % 2 == 1 ? 0 : k.length - 1;
	return !F || w === void 0 ? k[F] : w;
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
function isTransitionDefined({ when: s, delay: d, delayChildren: C, staggerChildren: w, staggerDirection: k, repeat: F, repeatType: L, repeatDelay: V, from: U, elapsed: K, ...q }) {
	return !!Object.keys(q).length;
}
var animateMotionValue = (s, d, C, w = {}, k, F) => (L) => {
	let V = getValueTransition(w, s) || {}, U = V.delay || w.delay || 0, { elapsed: K = 0 } = w;
	K -= /* @__PURE__ */ secondsToMilliseconds(U);
	let q = {
		keyframes: Array.isArray(C) ? C : [null, C],
		ease: "easeOut",
		velocity: d.getVelocity(),
		...V,
		delay: -K,
		onUpdate: (s) => {
			d.set(s), V.onUpdate && V.onUpdate(s);
		},
		onComplete: () => {
			L(), V.onComplete && V.onComplete();
		},
		name: s,
		motionValue: d,
		element: F ? void 0 : k
	};
	isTransitionDefined(V) || Object.assign(q, getDefaultTransition(s, q)), q.duration &&= /* @__PURE__ */ secondsToMilliseconds(q.duration), q.repeatDelay &&= /* @__PURE__ */ secondsToMilliseconds(q.repeatDelay), q.from !== void 0 && (q.keyframes[0] = q.from);
	let J = !1;
	if ((q.type === !1 || q.duration === 0 && !q.repeatDelay) && (makeAnimationInstant(q), q.delay === 0 && (J = !0)), (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations) && (J = !0, makeAnimationInstant(q), q.delay = 0), q.allowFlatten = !V.type && !V.ease, J && !F && d.get() !== void 0) {
		let s = getFinalKeyframe(q.keyframes, V);
		if (s !== void 0) {
			frame.update(() => {
				q.onUpdate(s), q.onComplete();
			});
			return;
		}
	}
	return V.isSync ? new JSAnimation(q) : new AsyncMotionValueAnimation(q);
};
function shouldBlockAnimation({ protectedKeys: s, needsAnimating: d }, C) {
	let w = s.hasOwnProperty(C) && d[C] !== !0;
	return d[C] = !1, w;
}
function animateTarget(s, d, { delay: C = 0, transitionOverride: w, type: k } = {}) {
	let { transition: F = s.getDefaultTransition(), transitionEnd: L, ...V } = d;
	w && (F = w);
	let U = [], K = k && s.animationState && s.animationState.getState()[k];
	for (let d in V) {
		let w = s.getValue(d, s.latestValues[d] ?? null), k = V[d];
		if (k === void 0 || K && shouldBlockAnimation(K, d)) continue;
		let L = {
			delay: C,
			...getValueTransition(F || {}, d)
		}, q = w.get();
		if (q !== void 0 && !w.isAnimating && !Array.isArray(k) && k === q && !L.velocity) continue;
		let J = !1;
		if (window.MotionHandoffAnimation) {
			let C = getOptimisedAppearId(s);
			if (C) {
				let s = window.MotionHandoffAnimation(C, d, frame);
				s !== null && (L.startTime = s, J = !0);
			}
		}
		addValueToWillChange(s, d), w.start(animateMotionValue(d, w, k, s.shouldReduceMotion && positionalKeys.has(d) ? { type: !1 } : L, s, J));
		let X = w.animation;
		X && U.push(X);
	}
	return L && Promise.all(U).then(() => {
		frame.update(() => {
			L && setTarget(s, L);
		});
	}), U;
}
function calcChildStagger(s, d, C, w = 0, k = 1) {
	let F = Array.from(s).sort((s, d) => s.sortNodePosition(d)).indexOf(d), L = s.size, V = (L - 1) * w;
	return typeof C == "function" ? C(F, L) : k === 1 ? F * w : V - F * w;
}
function animateVariant(s, d, C = {}) {
	let w = resolveVariant(s, d, C.type === "exit" ? s.presenceContext?.custom : void 0), { transition: k = s.getDefaultTransition() || {} } = w || {};
	C.transitionOverride && (k = C.transitionOverride);
	let F = w ? () => Promise.all(animateTarget(s, w, C)) : () => Promise.resolve(), L = s.variantChildren && s.variantChildren.size ? (w = 0) => {
		let { delayChildren: F = 0, staggerChildren: L, staggerDirection: V } = k;
		return animateChildren(s, d, w, F, L, V, C);
	} : () => Promise.resolve(), { when: V } = k;
	if (V) {
		let [s, d] = V === "beforeChildren" ? [F, L] : [L, F];
		return s().then(() => d());
	} else return Promise.all([F(), L(C.delay)]);
}
function animateChildren(s, d, C = 0, w = 0, k = 0, F = 1, L) {
	let V = [];
	for (let U of s.variantChildren) U.notify("AnimationStart", d), V.push(animateVariant(U, d, {
		...L,
		delay: C + (typeof w == "function" ? 0 : w) + calcChildStagger(s.variantChildren, U, w, k, F)
	}).then(() => U.notify("AnimationComplete", d)));
	return Promise.all(V);
}
function animateVisualElement(s, d, C = {}) {
	s.notify("AnimationStart", d);
	let w;
	if (Array.isArray(d)) {
		let k = d.map((d) => animateVariant(s, d, C));
		w = Promise.all(k);
	} else if (typeof d == "string") w = animateVariant(s, d, C);
	else {
		let k = typeof d == "function" ? resolveVariant(s, d, C.custom) : d;
		w = Promise.all(animateTarget(s, k, C));
	}
	return w.then(() => {
		s.notify("AnimationComplete", d);
	});
}
function shallowCompare(s, d) {
	if (!Array.isArray(d)) return !1;
	let C = d.length;
	if (C !== s.length) return !1;
	for (let w = 0; w < C; w++) if (d[w] !== s[w]) return !1;
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
	for (let C = 0; C < numVariantProps; C++) {
		let w = variantProps[C], k = s.props[w];
		(isVariantLabel(k) || k === !1) && (d[w] = k);
	}
	return d;
}
var reversePriorityOrder = [...variantPriorityOrder].reverse(), numAnimationTypes = variantPriorityOrder.length;
function animateList(s) {
	return (d) => Promise.all(d.map(({ animation: d, options: C }) => animateVisualElement(s, d, C)));
}
function createAnimationState(s) {
	let d = animateList(s), C = createState(), w = !0, k = (d) => (C, w) => {
		let k = resolveVariant(s, w, d === "exit" ? s.presenceContext?.custom : void 0);
		if (k) {
			let { transition: s, transitionEnd: d, ...w } = k;
			C = {
				...C,
				...w,
				...d
			};
		}
		return C;
	};
	function F(C) {
		d = C(s);
	}
	function L(F) {
		let { props: L } = s, V = getVariantContext(s.parent) || {}, U = [], K = /* @__PURE__ */ new Set(), q = {}, J = Infinity;
		for (let d = 0; d < numAnimationTypes; d++) {
			let X = reversePriorityOrder[d], $ = C[X], PD = L[X] === void 0 ? V[X] : L[X], FD = isVariantLabel(PD), ID = X === F ? $.isActive : null;
			ID === !1 && (J = d);
			let LD = PD === V[X] && PD !== L[X] && FD;
			if (LD && w && s.manuallyAnimateOnMount && (LD = !1), $.protectedKeys = { ...q }, !$.isActive && ID === null || !PD && !$.prevProp || isAnimationControls(PD) || typeof PD == "boolean") continue;
			let RD = checkVariantsDidChange($.prevProp, PD), zD = RD || X === F && $.isActive && !LD && FD || d > J && FD, BD = !1, VD = Array.isArray(PD) ? PD : [PD], HD = VD.reduce(k(X), {});
			ID === !1 && (HD = {});
			let { prevResolvedValues: UD = {} } = $, WD = {
				...UD,
				...HD
			}, GD = (d) => {
				zD = !0, K.has(d) && (BD = !0, K.delete(d)), $.needsAnimating[d] = !0;
				let C = s.getValue(d);
				C && (C.liveStyle = !1);
			};
			for (let s in WD) {
				let d = HD[s], C = UD[s];
				if (q.hasOwnProperty(s)) continue;
				let w = !1;
				w = isKeyframesTarget(d) && isKeyframesTarget(C) ? !shallowCompare(d, C) : d !== C, w ? d == null ? K.add(s) : GD(s) : d !== void 0 && K.has(s) ? GD(s) : $.protectedKeys[s] = !0;
			}
			$.prevProp = PD, $.prevResolvedValues = HD, $.isActive && (q = {
				...q,
				...HD
			}), w && s.blockInitialAnimation && (zD = !1);
			let KD = LD && RD;
			zD && (!KD || BD) && U.push(...VD.map((d) => {
				let C = { type: X };
				if (typeof d == "string" && w && !KD && s.manuallyAnimateOnMount && s.parent) {
					let { parent: w } = s, k = resolveVariant(w, d);
					if (w.enteringChildren && k) {
						let { delayChildren: d } = k.transition || {};
						C.delay = calcChildStagger(w.enteringChildren, s, d);
					}
				}
				return {
					animation: d,
					options: C
				};
			}));
		}
		if (K.size) {
			let d = {};
			if (typeof L.initial != "boolean") {
				let C = resolveVariant(s, Array.isArray(L.initial) ? L.initial[0] : L.initial);
				C && C.transition && (d.transition = C.transition);
			}
			K.forEach((C) => {
				let w = s.getBaseTarget(C), k = s.getValue(C);
				k && (k.liveStyle = !0), d[C] = w ?? null;
			}), U.push({ animation: d });
		}
		let X = !!U.length;
		return w && (L.initial === !1 || L.initial === L.animate) && !s.manuallyAnimateOnMount && (X = !1), w = !1, X ? d(U) : Promise.resolve();
	}
	function V(d, w) {
		if (C[d].isActive === w) return Promise.resolve();
		s.variantChildren?.forEach((s) => s.animationState?.setActive(d, w)), C[d].isActive = w;
		let k = L(d);
		for (let s in C) C[s].protectedKeys = {};
		return k;
	}
	return {
		animateChanges: L,
		setActive: V,
		setAnimateFunction: F,
		getState: () => C,
		reset: () => {
			C = createState();
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
			let { isPresent: s, onExitComplete: d } = this.node.presenceContext, { isPresent: C } = this.node.prevPresenceContext || {};
			if (!this.node.animationState || s === C) return;
			let w = this.node.animationState.setActive("exit", !s);
			d && !s && w.then(() => {
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
function addDomEvent(s, d, C, w = { passive: !0 }) {
	return s.addEventListener(d, C, w), () => s.removeEventListener(d, C);
}
function extractEventInfo(s) {
	return { point: {
		x: s.pageX,
		y: s.pageY
	} };
}
var addPointerInfo = (s) => (d) => isPrimaryPointer(d) && s(d, extractEventInfo(d));
function addPointerEvent(s, d, C, w) {
	return addDomEvent(s, d, addPointerInfo(C), w);
}
var SCALE_PRECISION = 1e-4, SCALE_MIN = 1 - SCALE_PRECISION, SCALE_MAX = 1 + SCALE_PRECISION, TRANSLATE_PRECISION = .01, TRANSLATE_MIN = 0 - TRANSLATE_PRECISION, TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
function calcLength(s) {
	return s.max - s.min;
}
function isNear(s, d, C) {
	return Math.abs(s - d) <= C;
}
function calcAxisDelta(s, d, C, w = .5) {
	s.origin = w, s.originPoint = mixNumber(d.min, d.max, s.origin), s.scale = calcLength(C) / calcLength(d), s.translate = mixNumber(C.min, C.max, s.origin) - s.originPoint, (s.scale >= SCALE_MIN && s.scale <= SCALE_MAX || isNaN(s.scale)) && (s.scale = 1), (s.translate >= TRANSLATE_MIN && s.translate <= TRANSLATE_MAX || isNaN(s.translate)) && (s.translate = 0);
}
function calcBoxDelta(s, d, C, w) {
	calcAxisDelta(s.x, d.x, C.x, w ? w.originX : void 0), calcAxisDelta(s.y, d.y, C.y, w ? w.originY : void 0);
}
function calcRelativeAxis(s, d, C) {
	s.min = C.min + d.min, s.max = s.min + calcLength(d);
}
function calcRelativeBox(s, d, C) {
	calcRelativeAxis(s.x, d.x, C.x), calcRelativeAxis(s.y, d.y, C.y);
}
function calcRelativeAxisPosition(s, d, C) {
	s.min = d.min - C.min, s.max = s.min + calcLength(d);
}
function calcRelativePosition(s, d, C) {
	calcRelativeAxisPosition(s.x, d.x, C.x), calcRelativeAxisPosition(s.y, d.y, C.y);
}
function eachAxis(s) {
	return [s("x"), s("y")];
}
var getContextWindow = ({ current: s }) => s ? s.ownerDocument.defaultView : null, distance = (s, d) => Math.abs(s - d);
function distance2D(s, d) {
	let C = distance(s.x, d.x), w = distance(s.y, d.y);
	return Math.sqrt(C ** 2 + w ** 2);
}
var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]), PanSession = class {
	constructor(s, d, { transformPagePoint: C, contextWindow: w = window, dragSnapToOrigin: k = !1, distanceThreshold: F = 3, element: L } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (s) => {
			this.handleScroll(s.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let s = getPanInfo(this.lastMoveEventInfo, this.history), d = this.startEvent !== null, C = distance2D(s.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!d && !C) return;
			let { point: w } = s, { timestamp: k } = frameData;
			this.history.push({
				...w,
				timestamp: k
			});
			let { onStart: F, onMove: L } = this.handlers;
			d || (F && F(this.lastMoveEvent, s), this.startEvent = this.lastMoveEvent), L && L(this.lastMoveEvent, s);
		}, this.handlePointerMove = (s, d) => {
			this.lastMoveEvent = s, this.lastMoveEventInfo = transformPoint(d, this.transformPagePoint), frame.update(this.updatePoint, !0);
		}, this.handlePointerUp = (s, d) => {
			this.end();
			let { onEnd: C, onSessionEnd: w, resumeAnimation: k } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && k && k(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let F = getPanInfo(s.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(d, this.transformPagePoint), this.history);
			this.startEvent && C && C(s, F), w && w(s, F);
		}, !isPrimaryPointer(s)) return;
		this.dragSnapToOrigin = k, this.handlers = d, this.transformPagePoint = C, this.distanceThreshold = F, this.contextWindow = w || window;
		let V = transformPoint(extractEventInfo(s), this.transformPagePoint), { point: U } = V, { timestamp: K } = frameData;
		this.history = [{
			...U,
			timestamp: K
		}];
		let { onSessionStart: q } = d;
		q && q(s, getPanInfo(V, this.history)), this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp)), L && this.startScrollTracking(L);
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
		let C = s === window, w = C ? {
			x: window.scrollX,
			y: window.scrollY
		} : {
			x: s.scrollLeft,
			y: s.scrollTop
		}, k = {
			x: w.x - d.x,
			y: w.y - d.y
		};
		k.x === 0 && k.y === 0 || (C ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += k.x, this.lastMoveEventInfo.point.y += k.y) : this.history.length > 0 && (this.history[0].x -= k.x, this.history[0].y -= k.y), this.scrollPositions.set(s, w), frame.update(this.updatePoint, !0));
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
	let C = s.length - 1, w = null, k = lastDevicePoint(s);
	for (; C >= 0 && (w = s[C], !(k.timestamp - w.timestamp > /* @__PURE__ */ secondsToMilliseconds(d)));) C--;
	if (!w) return {
		x: 0,
		y: 0
	};
	let F = /* @__PURE__ */ millisecondsToSeconds(k.timestamp - w.timestamp);
	if (F === 0) return {
		x: 0,
		y: 0
	};
	let L = {
		x: (k.x - w.x) / F,
		y: (k.y - w.y) / F
	};
	return L.x === Infinity && (L.x = 0), L.y === Infinity && (L.y = 0), L;
}
function applyConstraints(s, { min: d, max: C }, w) {
	return d !== void 0 && s < d ? s = w ? mixNumber(d, s, w.min) : Math.max(s, d) : C !== void 0 && s > C && (s = w ? mixNumber(C, s, w.max) : Math.min(s, C)), s;
}
function calcRelativeAxisConstraints(s, d, C) {
	return {
		min: d === void 0 ? void 0 : s.min + d,
		max: C === void 0 ? void 0 : s.max + C - (s.max - s.min)
	};
}
function calcRelativeConstraints(s, { top: d, left: C, bottom: w, right: k }) {
	return {
		x: calcRelativeAxisConstraints(s.x, C, k),
		y: calcRelativeAxisConstraints(s.y, d, w)
	};
}
function calcViewportAxisConstraints(s, d) {
	let C = d.min - s.min, w = d.max - s.max;
	return d.max - d.min < s.max - s.min && ([C, w] = [w, C]), {
		min: C,
		max: w
	};
}
function calcViewportConstraints(s, d) {
	return {
		x: calcViewportAxisConstraints(s.x, d.x),
		y: calcViewportAxisConstraints(s.y, d.y)
	};
}
function calcOrigin(s, d) {
	let C = .5, w = calcLength(s), k = calcLength(d);
	return k > w ? C = /* @__PURE__ */ progress(d.min, d.max - w, s.min) : w > k && (C = /* @__PURE__ */ progress(s.min, s.max - k, d.min)), clamp(0, 1, C);
}
function rebaseAxisConstraints(s, d) {
	let C = {};
	return d.min !== void 0 && (C.min = d.min - s.min), d.max !== void 0 && (C.max = d.max - s.min), C;
}
var defaultElastic = .35;
function resolveDragElastic(s = defaultElastic) {
	return s === !1 ? s = 0 : s === !0 && (s = defaultElastic), {
		x: resolveAxisElastic(s, "left", "right"),
		y: resolveAxisElastic(s, "top", "bottom")
	};
}
function resolveAxisElastic(s, d, C) {
	return {
		min: resolvePointElastic(s, d),
		max: resolvePointElastic(s, C)
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
	start(s, { snapToCursor: d = !1, distanceThreshold: C } = {}) {
		let { presenceContext: w } = this.visualElement;
		if (w && w.isPresent === !1) return;
		let k = (s) => {
			d ? (this.stopAnimation(), this.snapToCursor(extractEventInfo(s).point)) : this.pauseAnimation();
		}, F = (s, d) => {
			this.stopAnimation();
			let { drag: C, dragPropagation: w, onDragStart: k } = this.getProps();
			if (C && !w && (this.openDragLock && this.openDragLock(), this.openDragLock = setDragLock(C), !this.openDragLock)) return;
			this.latestPointerEvent = s, this.latestPanInfo = d, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), eachAxis((s) => {
				let d = this.getAxisMotionValue(s).get() || 0;
				if (percent.test(d)) {
					let { projection: C } = this.visualElement;
					if (C && C.layout) {
						let w = C.layout.layoutBox[s];
						w && (d = calcLength(w) * (parseFloat(d) / 100));
					}
				}
				this.originPoint[s] = d;
			}), k && frame.postRender(() => k(s, d)), addValueToWillChange(this.visualElement, "transform");
			let { animationState: F } = this.visualElement;
			F && F.setActive("whileDrag", !0);
		}, L = (s, d) => {
			this.latestPointerEvent = s, this.latestPanInfo = d;
			let { dragPropagation: C, dragDirectionLock: w, onDirectionLock: k, onDrag: F } = this.getProps();
			if (!C && !this.openDragLock) return;
			let { offset: L } = d;
			if (w && this.currentDirection === null) {
				this.currentDirection = getCurrentDirection(L), this.currentDirection !== null && k && k(this.currentDirection);
				return;
			}
			this.updateAxis("x", d.point, L), this.updateAxis("y", d.point, L), this.visualElement.render(), F && F(s, d);
		}, V = (s, d) => {
			this.latestPointerEvent = s, this.latestPanInfo = d, this.stop(s, d), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, U = () => eachAxis((s) => this.getAnimationState(s) === "paused" && this.getAxisMotionValue(s).animation?.play()), { dragSnapToOrigin: K } = this.getProps();
		this.panSession = new PanSession(s, {
			onSessionStart: k,
			onStart: F,
			onMove: L,
			onSessionEnd: V,
			resumeAnimation: U
		}, {
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: K,
			distanceThreshold: C,
			contextWindow: getContextWindow(this.visualElement),
			element: this.visualElement.current
		});
	}
	stop(s, d) {
		let C = s || this.latestPointerEvent, w = d || this.latestPanInfo, k = this.isDragging;
		if (this.cancel(), !k || !w || !C) return;
		let { velocity: F } = w;
		this.startAnimation(F);
		let { onDragEnd: L } = this.getProps();
		L && frame.postRender(() => L(C, w));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: s, animationState: d } = this.visualElement;
		s && (s.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
		let { dragPropagation: C } = this.getProps();
		!C && this.openDragLock && (this.openDragLock(), this.openDragLock = null), d && d.setActive("whileDrag", !1);
	}
	updateAxis(s, d, C) {
		let { drag: w } = this.getProps();
		if (!C || !shouldDrag(s, w, this.currentDirection)) return;
		let k = this.getAxisMotionValue(s), F = this.originPoint[s] + C[s];
		this.constraints && this.constraints[s] && (F = applyConstraints(F, this.constraints[s], this.elastic[s])), k.set(F);
	}
	resolveConstraints() {
		let { dragConstraints: s, dragElastic: d } = this.getProps(), C = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, w = this.constraints;
		s && isRefObject(s) ? this.constraints ||= this.resolveRefConstraints() : s && C ? this.constraints = calcRelativeConstraints(C.layoutBox, s) : this.constraints = !1, this.elastic = resolveDragElastic(d), w !== this.constraints && C && this.constraints && !this.hasMutatedConstraints && eachAxis((s) => {
			this.constraints !== !1 && this.getAxisMotionValue(s) && (this.constraints[s] = rebaseAxisConstraints(C.layoutBox[s], this.constraints[s]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: s, onMeasureDragConstraints: d } = this.getProps();
		if (!s || !isRefObject(s)) return !1;
		let C = s.current;
		invariant(C !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
		let { projection: w } = this.visualElement;
		if (!w || !w.layout) return !1;
		let k = measurePageBox(C, w.root, this.visualElement.getTransformPagePoint()), F = calcViewportConstraints(w.layout.layoutBox, k);
		if (d) {
			let s = d(convertBoxToBoundingBox(F));
			this.hasMutatedConstraints = !!s, s && (F = convertBoundingBoxToBox(s));
		}
		return F;
	}
	startAnimation(s) {
		let { drag: d, dragMomentum: C, dragElastic: w, dragTransition: k, dragSnapToOrigin: F, onDragTransitionEnd: L } = this.getProps(), V = this.constraints || {}, U = eachAxis((L) => {
			if (!shouldDrag(L, d, this.currentDirection)) return;
			let U = V && V[L] || {};
			F && (U = {
				min: 0,
				max: 0
			});
			let K = w ? 200 : 1e6, q = w ? 40 : 1e7, J = {
				type: "inertia",
				velocity: C ? s[L] : 0,
				bounceStiffness: K,
				bounceDamping: q,
				timeConstant: 750,
				restDelta: 1,
				restSpeed: 10,
				...k,
				...U
			};
			return this.startAxisValueAnimation(L, J);
		});
		return Promise.all(U).then(L);
	}
	startAxisValueAnimation(s, d) {
		let C = this.getAxisMotionValue(s);
		return addValueToWillChange(this.visualElement, s), C.start(animateMotionValue(s, C, 0, d, this.visualElement, !1));
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
		let d = `_drag${s.toUpperCase()}`, C = this.visualElement.getProps();
		return C[d] || this.visualElement.getValue(s, (C.initial ? C.initial[s] : void 0) || 0);
	}
	snapToCursor(s) {
		eachAxis((d) => {
			let { drag: C } = this.getProps();
			if (!shouldDrag(d, C, this.currentDirection)) return;
			let { projection: w } = this.visualElement, k = this.getAxisMotionValue(d);
			if (w && w.layout) {
				let { min: C, max: F } = w.layout.layoutBox[d], L = k.get() || 0;
				k.set(s[d] - mixNumber(C, F, .5) + L);
			}
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: s, dragConstraints: d } = this.getProps(), { projection: C } = this.visualElement;
		if (!isRefObject(d) || !C || !this.constraints) return;
		this.stopAnimation();
		let w = {
			x: 0,
			y: 0
		};
		eachAxis((s) => {
			let d = this.getAxisMotionValue(s);
			if (d && this.constraints !== !1) {
				let C = d.get();
				w[s] = calcOrigin({
					min: C,
					max: C
				}, this.constraints[s]);
			}
		});
		let { transformTemplate: k } = this.visualElement.getProps();
		this.visualElement.current.style.transform = k ? k({}, "") : "none", C.root && C.root.updateScroll(), C.updateLayout(), this.resolveConstraints(), eachAxis((d) => {
			if (!shouldDrag(d, s, null)) return;
			let C = this.getAxisMotionValue(d), { min: k, max: F } = this.constraints[d];
			C.set(mixNumber(k, F, w[d]));
		});
	}
	addListeners() {
		if (!this.visualElement.current) return;
		elementDragControls.set(this.visualElement, this);
		let s = this.visualElement.current, d = addPointerEvent(s, "pointerdown", (s) => {
			let { drag: d, dragListener: C = !0 } = this.getProps();
			d && C && !isElementKeyboardAccessible(s.target) && this.start(s);
		}), C = () => {
			let { dragConstraints: s } = this.getProps();
			isRefObject(s) && s.current && (this.constraints = this.resolveRefConstraints());
		}, { projection: w } = this.visualElement, k = w.addEventListener("measure", C);
		w && !w.layout && (w.root && w.root.updateScroll(), w.updateLayout()), frame.read(C);
		let F = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints()), L = w.addEventListener("didUpdate", (({ delta: s, hasLayoutChanged: d }) => {
			this.isDragging && d && (eachAxis((d) => {
				let C = this.getAxisMotionValue(d);
				C && (this.originPoint[d] += s[d].translate, C.set(C.get() + s[d].translate));
			}), this.visualElement.render());
		}));
		return () => {
			F(), d(), k(), L && L();
		};
	}
	getProps() {
		let s = this.visualElement.getProps(), { drag: d = !1, dragDirectionLock: C = !1, dragPropagation: w = !1, dragConstraints: k = !1, dragElastic: F = defaultElastic, dragMomentum: L = !0 } = s;
		return {
			...s,
			drag: d,
			dragDirectionLock: C,
			dragPropagation: w,
			dragConstraints: k,
			dragElastic: F,
			dragMomentum: L
		};
	}
};
function shouldDrag(s, d, C) {
	return (d === !0 || d === s) && (C === null || C === s);
}
function getCurrentDirection(s, d = 10) {
	let C = null;
	return Math.abs(s.y) > d ? C = "y" : Math.abs(s.x) > d && (C = "x"), C;
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
}, asyncHandler = (s) => (d, C) => {
	s && frame.postRender(() => s(d, C));
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
		let { onPanSessionStart: s, onPanStart: d, onPan: C, onPanEnd: w } = this.node.getProps();
		return {
			onSessionStart: asyncHandler(s),
			onStart: asyncHandler(d),
			onMove: C,
			onEnd: (s, d) => {
				delete this.session, w && frame.postRender(() => w(s, d));
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
		let { visualElement: s, layoutGroup: d, switchLayoutGroup: C, layoutId: w } = this.props, { projection: k } = s;
		k && (d.group && d.group.add(k), C && C.register && w && C.register(k), hasTakenAnySnapshot && k.root.didUpdate(), k.addEventListener("animationComplete", () => {
			this.safeToRemove();
		}), k.setOptions({
			...k.options,
			onExitComplete: () => this.safeToRemove()
		})), globalProjectionState.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(s) {
		let { layoutDependency: d, visualElement: C, drag: w, isPresent: k } = this.props, { projection: F } = C;
		return F ? (F.isPresent = k, hasTakenAnySnapshot = !0, w || s.layoutDependency !== d || d === void 0 || s.isPresent !== k ? F.willUpdate() : this.safeToRemove(), s.isPresent !== k && (k ? F.promote() : F.relegate() || frame.postRender(() => {
			let s = F.getStack();
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
		let { visualElement: s, layoutGroup: d, switchLayoutGroup: C } = this.props, { projection: w } = s;
		hasTakenAnySnapshot = !0, w && (w.scheduleCheckAfterUnmount(), d && d.group && d.group.remove(w), C && C.deregister && C.deregister(w));
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
	let [d, C] = usePresence(), w = useContext(LayoutGroupContext);
	return jsx(MeasureLayoutWithContext, {
		...s,
		layoutGroup: w,
		switchLayoutGroup: useContext(SwitchLayoutGroupContext),
		isPresent: d,
		safeToRemove: C
	});
}
function animateSingleValue(s, d, C) {
	let w = isMotionValue(s) ? s : motionValue(s);
	return w.start(animateMotionValue("", w, d, C)), w.animation;
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
	let C = time.now(), w = ({ timestamp: k }) => {
		let F = k - C;
		F >= d && (cancelFrame(w), s(F - d));
	};
	return frame.setup(w, !0), () => cancelFrame(w);
}
var borders = [
	"TopLeft",
	"TopRight",
	"BottomLeft",
	"BottomRight"
], numBorders = borders.length, asNumber = (s) => typeof s == "string" ? parseFloat(s) : s, isPx = (s) => typeof s == "number" || px.test(s);
function mixValues(s, d, C, w, k, F) {
	k ? (s.opacity = mixNumber(0, C.opacity ?? 1, easeCrossfadeIn(w)), s.opacityExit = mixNumber(d.opacity ?? 1, 0, easeCrossfadeOut(w))) : F && (s.opacity = mixNumber(d.opacity ?? 1, C.opacity ?? 1, w));
	for (let k = 0; k < numBorders; k++) {
		let F = `border${borders[k]}Radius`, L = getRadius(d, F), V = getRadius(C, F);
		L === void 0 && V === void 0 || (L ||= 0, V ||= 0, L === 0 || V === 0 || isPx(L) === isPx(V) ? (s[F] = Math.max(mixNumber(asNumber(L), asNumber(V), w), 0), (percent.test(V) || percent.test(L)) && (s[F] += "%")) : s[F] = V);
	}
	(d.rotate || C.rotate) && (s.rotate = mixNumber(d.rotate || 0, C.rotate || 0, w));
}
function getRadius(s, d) {
	return s[d] === void 0 ? s.borderRadius : s[d];
}
var easeCrossfadeIn = /* @__PURE__ */ compress(0, .5, circOut), easeCrossfadeOut = /* @__PURE__ */ compress(.5, .95, noop);
function compress(s, d, C) {
	return (w) => w < s ? 0 : w > d ? 1 : C(/* @__PURE__ */ progress(s, d, w));
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
function removePointDelta(s, d, C, w, k) {
	return s -= d, s = scalePoint(s, 1 / C, w), k !== void 0 && (s = scalePoint(s, 1 / k, w)), s;
}
function removeAxisDelta(s, d = 0, C = 1, w = .5, k, F = s, L = s) {
	if (percent.test(d) && (d = parseFloat(d), d = mixNumber(L.min, L.max, d / 100) - L.min), typeof d != "number") return;
	let V = mixNumber(F.min, F.max, w);
	s === F && (V -= d), s.min = removePointDelta(s.min, d, C, V, k), s.max = removePointDelta(s.max, d, C, V, k);
}
function removeAxisTransforms(s, d, [C, w, k], F, L) {
	removeAxisDelta(s, d[C], d[w], d[k], d.scale, F, L);
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
function removeBoxTransforms(s, d, C, w) {
	removeAxisTransforms(s.x, d, xKeys, C ? C.x : void 0, w ? w.x : void 0), removeAxisTransforms(s.y, d, yKeys, C ? C.y : void 0, w ? w.y : void 0);
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
		let C;
		for (let s = d; s >= 0; s--) {
			let d = this.members[s];
			if (d.isPresent !== !1) {
				C = d;
				break;
			}
		}
		return C ? (this.promote(C), !0) : !1;
	}
	promote(s, d) {
		let C = this.lead;
		if (s !== C && (this.prevLead = C, this.lead = s, s.show(), C)) {
			C.instance && C.scheduleRender(), s.scheduleRender(), s.resumeFrom = C, d && (s.resumeFrom.preserveOpacity = !0), C.snapshot && (s.snapshot = C.snapshot, s.snapshot.latestValues = C.animationValues || C.latestValues), s.root && s.root.isUpdating && (s.isLayoutDirty = !0);
			let { crossfade: w } = s.options;
			w === !1 && C.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((s) => {
			let { options: d, resumingFrom: C } = s;
			d.onExitComplete && d.onExitComplete(), C && C.options.onExitComplete && C.options.onExitComplete();
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
function buildProjectionTransform(s, d, C) {
	let w = "", k = s.x.translate / d.x, F = s.y.translate / d.y, L = C?.z || 0;
	if ((k || F || L) && (w = `translate3d(${k}px, ${F}px, ${L}px) `), (d.x !== 1 || d.y !== 1) && (w += `scale(${1 / d.x}, ${1 / d.y}) `), C) {
		let { transformPerspective: s, rotate: d, rotateX: k, rotateY: F, skewX: L, skewY: V } = C;
		s && (w = `perspective(${s}px) ${w}`), d && (w += `rotate(${d}deg) `), k && (w += `rotateX(${k}deg) `), F && (w += `rotateY(${F}deg) `), L && (w += `skewX(${L}deg) `), V && (w += `skewY(${V}deg) `);
	}
	let V = s.x.scale * d.x, U = s.y.scale * d.y;
	return (V !== 1 || U !== 1) && (w += `scale(${V}, ${U})`), w || "none";
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
function resetDistortingTransform(s, d, C, w) {
	let { latestValues: k } = d;
	k[s] && (C[s] = k[s], d.setStaticValue(s, 0), w && (w[s] = 0));
}
function cancelTreeOptimisedTransformAnimations(s) {
	if (s.hasCheckedOptimisedAppear = !0, s.root === s) return;
	let { visualElement: d } = s.options;
	if (!d) return;
	let C = getOptimisedAppearId(d);
	if (window.MotionHasOptimisedAnimation(C, "transform")) {
		let { layout: d, layoutId: w } = s.options;
		window.MotionCancelOptimisedAnimation(C, "transform", frame, !(d || w));
	}
	let { parent: w } = s;
	w && !w.hasCheckedOptimisedAppear && cancelTreeOptimisedTransformAnimations(w);
}
function createProjectionNode({ attachResizeListener: s, defaultParent: d, measureScroll: C, checkIsScrollRoot: w, resetTransform: k }) {
	return class {
		constructor(s = {}, C = d?.()) {
			this.id = id++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, statsBuffer.value && (metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0), this.nodes.forEach(propagateDirtyNodes), this.nodes.forEach(resolveTargetDelta), this.nodes.forEach(calcProjection), this.nodes.forEach(cleanDirtyNodes), statsBuffer.addProjectionMetrics && statsBuffer.addProjectionMetrics(metrics);
			}, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = s, this.root = C ? C.root || C : this, this.path = C ? [...C.path, C] : [], this.parent = C, this.depth = C ? C.depth + 1 : 0;
			for (let s = 0; s < this.path.length; s++) this.path[s].shouldResetTransform = !0;
			this.root === this && (this.nodes = new FlatTree());
		}
		addEventListener(s, d) {
			return this.eventHandlers.has(s) || this.eventHandlers.set(s, new SubscriptionManager()), this.eventHandlers.get(s).add(d);
		}
		notifyListeners(s, ...d) {
			let C = this.eventHandlers.get(s);
			C && C.notify(...d);
		}
		hasListeners(s) {
			return this.eventHandlers.has(s);
		}
		mount(d) {
			if (this.instance) return;
			this.isSVG = isSVGElement(d) && !isSVGSVGElement(d), this.instance = d;
			let { layoutId: C, layout: w, visualElement: k } = this.options;
			if (k && !k.current && k.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (w || C) && (this.isLayoutDirty = !0), s) {
				let C, w = 0, k = () => this.root.updateBlockedByResize = !1;
				frame.read(() => {
					w = window.innerWidth;
				}), s(d, () => {
					let s = window.innerWidth;
					s !== w && (w = s, this.root.updateBlockedByResize = !0, C && C(), C = delay(k, 250), globalProjectionState.hasAnimatedSinceResize && (globalProjectionState.hasAnimatedSinceResize = !1, this.nodes.forEach(finishAnimation)));
				});
			}
			C && this.root.registerSharedNode(C, this), this.options.animate !== !1 && k && (C || w) && this.addEventListener("didUpdate", ({ delta: s, hasLayoutChanged: d, hasRelativeLayoutChanged: C, layout: w }) => {
				if (this.isTreeAnimationBlocked()) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let F = this.options.transition || k.getDefaultTransition() || defaultLayoutTransition, { onLayoutAnimationStart: L, onLayoutAnimationComplete: V } = k.getProps(), U = !this.targetLayout || !boxEqualsRounded(this.targetLayout, w), K = !d && C;
				if (this.options.layoutRoot || this.resumeFrom || K || d && (U || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let d = {
						...getValueTransition(F, "layout"),
						onPlay: L,
						onComplete: V
					};
					(k.shouldReduceMotion || this.options.layoutRoot) && (d.delay = 0, d.type = !1), this.startAnimation(d), this.setAnimationOrigin(s, K);
				} else d || finishAnimation(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
				this.targetLayout = w;
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
			let { layoutId: d, layout: C } = this.options;
			if (d === void 0 && !C) return;
			let w = this.getTransformTemplate();
			this.prevTransformTemplateValue = w ? w(this.latestValues, "") : void 0, this.updateSnapshot(), s && this.notifyListeners("willUpdate");
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
				let d = w(this.instance);
				this.scroll = {
					animationId: this.root.animationId,
					phase: s,
					isRoot: d,
					offset: C(this.instance),
					wasRoot: this.scroll ? this.scroll.isRoot : d
				};
			}
		}
		resetTransform() {
			if (!k) return;
			let s = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, d = this.projectionDelta && !isDeltaZero(this.projectionDelta), C = this.getTransformTemplate(), w = C ? C(this.latestValues, "") : void 0, F = w !== this.prevTransformTemplateValue;
			s && this.instance && (d || hasTransform(this.latestValues) || F) && (k(this.instance, w), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(s = !0) {
			let d = this.measurePageBox(), C = this.removeElementScroll(d);
			return s && (C = this.removeTransform(C)), roundBox(C), {
				animationId: this.root.animationId,
				measuredBox: d,
				layoutBox: C,
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
			for (let C = 0; C < this.path.length; C++) {
				let w = this.path[C], { scroll: k, options: F } = w;
				w !== this.root && k && F.layoutScroll && (k.wasRoot && copyBoxInto(d, s), translateAxis(d.x, k.offset.x), translateAxis(d.y, k.offset.y));
			}
			return d;
		}
		applyTransform(s, d = !1) {
			let C = createBox();
			copyBoxInto(C, s);
			for (let s = 0; s < this.path.length; s++) {
				let w = this.path[s];
				!d && w.options.layoutScroll && w.scroll && w !== w.root && transformBox(C, {
					x: -w.scroll.offset.x,
					y: -w.scroll.offset.y
				}), hasTransform(w.latestValues) && transformBox(C, w.latestValues);
			}
			return hasTransform(this.latestValues) && transformBox(C, this.latestValues), C;
		}
		removeTransform(s) {
			let d = createBox();
			copyBoxInto(d, s);
			for (let s = 0; s < this.path.length; s++) {
				let C = this.path[s];
				if (!C.instance || !hasTransform(C.latestValues)) continue;
				hasScale(C.latestValues) && C.updateSnapshot();
				let w = createBox();
				copyBoxInto(w, C.measurePageBox()), removeBoxTransforms(d, C.latestValues, C.snapshot ? C.snapshot.layoutBox : void 0, w);
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
			let C = !!this.resumingFrom || this !== d;
			if (!(s || C && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: w, layoutId: k } = this.options;
			if (!this.layout || !(w || k)) return;
			this.resolvedRelativeTargetAt = frameData.timestamp;
			let F = this.getClosestProjectingParent();
			F && this.linkedParentVersion !== F.layoutVersion && !F.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (F && F.layout ? this.createRelativeTarget(F, this.layout.layoutBox, F.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = createBox(), this.targetWithTransforms = createBox()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : copyBoxInto(this.target, this.layout.layoutBox), applyBoxDelta(this.target, this.targetDelta)) : copyBoxInto(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, F && !!F.resumingFrom == !!this.resumingFrom && !F.options.layoutScroll && F.target && this.animationProgress !== 1 ? this.createRelativeTarget(F, this.target, F.target) : this.relativeParent = this.relativeTarget = void 0), statsBuffer.value && metrics.calculatedTargetDeltas++);
		}
		getClosestProjectingParent() {
			if (!(!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(s, d, C) {
			this.relativeParent = s, this.linkedParentVersion = s.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = createBox(), this.relativeTargetOrigin = createBox(), calcRelativePosition(this.relativeTargetOrigin, d, C), copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let s = this.getLead(), d = !!this.resumingFrom || this !== s, C = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (C = !1), d && (this.isSharedProjectionDirty || this.isTransformDirty) && (C = !1), this.resolvedRelativeTargetAt === frameData.timestamp && (C = !1), C) return;
			let { layout: w, layoutId: k } = this.options;
			if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(w || k)) return;
			copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
			let F = this.treeScale.x, L = this.treeScale.y;
			applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, d), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox, s.targetWithTransforms = createBox());
			let { target: V } = s;
			if (!V) {
				this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
				return;
			}
			!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x), copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y)), calcBoxDelta(this.projectionDelta, this.layoutCorrected, V, this.latestValues), (this.treeScale.x !== F || this.treeScale.y !== L || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", V)), statsBuffer.value && metrics.calculatedProjections++;
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
			let C = this.snapshot, w = C ? C.latestValues : {}, k = { ...this.latestValues }, F = createDelta();
			(!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !d;
			let L = createBox(), V = (C ? C.source : void 0) !== (this.layout ? this.layout.source : void 0), U = this.getStack(), K = !U || U.members.length <= 1, q = !!(V && !K && this.options.crossfade === !0 && !this.path.some(hasOpacityCrossfade));
			this.animationProgress = 0;
			let J;
			this.mixTargetDelta = (d) => {
				let C = d / 1e3;
				mixAxisDelta(F.x, s.x, C), mixAxisDelta(F.y, s.y, C), this.setTargetDelta(F), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (calcRelativePosition(L, this.layout.layoutBox, this.relativeParent.layout.layoutBox), mixBox(this.relativeTarget, this.relativeTargetOrigin, L, C), J && boxEquals(this.relativeTarget, J) && (this.isProjectionDirty = !1), J ||= createBox(), copyBoxInto(J, this.relativeTarget)), V && (this.animationValues = k, mixValues(k, w, this.latestValues, C, q, K)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = C;
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
			let s = this.getLead(), { targetWithTransforms: d, target: C, layout: w, latestValues: k } = s;
			if (!(!d || !C || !w)) {
				if (this !== s && this.layout && w && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, w.layoutBox)) {
					C = this.target || createBox();
					let d = calcLength(this.layout.layoutBox.x);
					C.x.min = s.target.x.min, C.x.max = C.x.min + d;
					let w = calcLength(this.layout.layoutBox.y);
					C.y.min = s.target.y.min, C.y.max = C.y.min + w;
				}
				copyBoxInto(d, C), transformBox(d, k), calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, d, k);
			}
		}
		registerSharedNode(s, d) {
			this.sharedNodes.has(s) || this.sharedNodes.set(s, new NodeStack()), this.sharedNodes.get(s).add(d);
			let C = d.options.initialPromotionConfig;
			d.promote({
				transition: C ? C.transition : void 0,
				preserveFollowOpacity: C && C.shouldPreserveFollowOpacity ? C.shouldPreserveFollowOpacity(d) : void 0
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
		promote({ needsReset: s, transition: d, preserveFollowOpacity: C } = {}) {
			let w = this.getStack();
			w && w.promote(this, C), s && (this.projectionDelta = void 0, this.needsReset = !0), d && this.setOptions({ transition: d });
		}
		relegate() {
			let s = this.getStack();
			return s ? s.relegate(this) : !1;
		}
		resetSkewAndRotation() {
			let { visualElement: s } = this.options;
			if (!s) return;
			let d = !1, { latestValues: C } = s;
			if ((C.z || C.rotate || C.rotateX || C.rotateY || C.rotateZ || C.skewX || C.skewY) && (d = !0), !d) return;
			let w = {};
			C.z && resetDistortingTransform("z", s, w, this.animationValues);
			for (let d = 0; d < transformAxes.length; d++) resetDistortingTransform(`rotate${transformAxes[d]}`, s, w, this.animationValues), resetDistortingTransform(`skew${transformAxes[d]}`, s, w, this.animationValues);
			for (let d in s.render(), w) s.setStaticValue(d, w[d]), this.animationValues && (this.animationValues[d] = w[d]);
			s.scheduleRender();
		}
		applyProjectionStyles(s, d) {
			if (!this.instance || this.isSVG) return;
			if (!this.isVisible) {
				s.visibility = "hidden";
				return;
			}
			let C = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, s.visibility = "", s.opacity = "", s.pointerEvents = resolveMotionValue(d?.pointerEvents) || "", s.transform = C ? C(this.latestValues, "") : "none";
				return;
			}
			let w = this.getLead();
			if (!this.projectionDelta || !this.layout || !w.target) {
				this.options.layoutId && (s.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, s.pointerEvents = resolveMotionValue(d?.pointerEvents) || ""), this.hasProjected && !hasTransform(this.latestValues) && (s.transform = C ? C({}, "") : "none", this.hasProjected = !1);
				return;
			}
			s.visibility = "";
			let k = w.animationValues || w.latestValues;
			this.applyTransformsToTarget();
			let F = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, k);
			C && (F = C(k, F)), s.transform = F;
			let { x: L, y: V } = this.projectionDelta;
			for (let d in s.transformOrigin = `${L.origin * 100}% ${V.origin * 100}% 0`, w.animationValues ? s.opacity = w === this ? k.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : k.opacityExit : s.opacity = w === this ? k.opacity === void 0 ? "" : k.opacity : k.opacityExit === void 0 ? 0 : k.opacityExit, scaleCorrectors) {
				if (k[d] === void 0) continue;
				let { correct: C, applyTo: L, isCSSVariable: V } = scaleCorrectors[d], U = F === "none" ? k[d] : C(k[d], w);
				if (L) {
					let d = L.length;
					for (let C = 0; C < d; C++) s[L[C]] = U;
				} else V ? this.options.visualElement.renderState.vars[d] = U : s[d] = U;
			}
			this.options.layoutId && (s.pointerEvents = w === this ? resolveMotionValue(d?.pointerEvents) || "" : "none");
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
		let { layoutBox: C, measuredBox: w } = s.layout, { animationType: k } = s.options, F = d.source !== s.layout.source;
		k === "size" ? eachAxis((s) => {
			let w = F ? d.measuredBox[s] : d.layoutBox[s], k = calcLength(w);
			w.min = C[s].min, w.max = w.min + k;
		}) : shouldAnimatePositionOnly(k, d.layoutBox, C) && eachAxis((w) => {
			let k = F ? d.measuredBox[w] : d.layoutBox[w], L = calcLength(C[w]);
			k.max = k.min + L, s.relativeTarget && !s.currentAnimation && (s.isProjectionDirty = !0, s.relativeTarget[w].max = s.relativeTarget[w].min + L);
		});
		let L = createDelta();
		calcBoxDelta(L, C, d.layoutBox);
		let V = createDelta();
		F ? calcBoxDelta(V, s.applyTransform(w, !0), d.measuredBox) : calcBoxDelta(V, C, d.layoutBox);
		let U = !isDeltaZero(L), K = !1;
		if (!s.resumeFrom) {
			let w = s.getClosestProjectingParent();
			if (w && !w.resumeFrom) {
				let { snapshot: k, layout: F } = w;
				if (k && F) {
					let L = createBox();
					calcRelativePosition(L, d.layoutBox, k.layoutBox);
					let V = createBox();
					calcRelativePosition(V, C, F.layoutBox), boxEqualsRounded(L, V) || (K = !0), w.options.layoutRoot && (s.relativeTarget = V, s.relativeTargetOrigin = L, s.relativeParent = w);
				}
			}
		}
		s.notifyListeners("didUpdate", {
			layout: C,
			snapshot: d,
			delta: V,
			layoutDelta: L,
			hasLayoutChanged: U,
			hasRelativeLayoutChanged: K
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
function mixAxisDelta(s, d, C) {
	s.translate = mixNumber(d.translate, 0, C), s.scale = mixNumber(d.scale, 1, C), s.origin = d.origin, s.originPoint = d.originPoint;
}
function mixAxis(s, d, C, w) {
	s.min = mixNumber(d.min, C.min, w), s.max = mixNumber(d.max, C.max, w);
}
function mixBox(s, d, C, w) {
	mixAxis(s.x, d.x, C.x, w), mixAxis(s.y, d.y, C.y, w);
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
function shouldAnimatePositionOnly(s, d, C) {
	return s === "position" || s === "preserve-aspect" && !isNear(aspectRatio(d), aspectRatio(C), .2);
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
function handleHoverEvent(s, d, C) {
	let { props: w } = s;
	s.animationState && w.whileHover && s.animationState.setActive("whileHover", C === "Start");
	let k = w["onHover" + C];
	k && frame.postRender(() => k(d, extractEventInfo(d)));
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
function handlePressEvent(s, d, C) {
	let { props: w } = s;
	if (s.current instanceof HTMLButtonElement && s.current.disabled) return;
	s.animationState && w.whileTap && s.animationState.setActive("whileTap", C === "Start");
	let k = w["onTap" + (C === "End" ? "" : C)];
	k && frame.postRender(() => k(d, extractEventInfo(d)));
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
	let C = s || document;
	observers.has(C) || observers.set(C, {});
	let w = observers.get(C), k = JSON.stringify(d);
	return w[k] || (w[k] = new IntersectionObserver(fireAllObserverCallbacks, {
		root: s,
		...d
	})), w[k];
}
function observeIntersection(s, d, C) {
	let w = initIntersectionObserver(d);
	return observerCallbacks.set(s, C), w.observe(s), () => {
		observerCallbacks.delete(s), w.unobserve(s);
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
		let { viewport: s = {} } = this.node.getProps(), { root: d, margin: C, amount: w = "some", once: k } = s, F = {
			root: d ? d.current : void 0,
			rootMargin: C,
			threshold: typeof w == "number" ? w : thresholdNames[w]
		};
		return observeIntersection(this.node.current, F, (s) => {
			let { isIntersecting: d } = s;
			if (this.isInView === d || (this.isInView = d, k && !d && this.hasEnteredView)) return;
			d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
			let { onViewportEnter: C, onViewportLeave: w } = this.node.getProps(), F = d ? C : w;
			F && F(s);
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
	return (C) => s[C] !== d[C];
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
}, createDomVisualElement), PreviewElementRenderer = ({ element: s, offsetY: d = 0, dataContext: C }) => {
	let w = s.content;
	if (C) {
		if (s.type === "text") w = w.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let w = C[d.trim()];
			return w == null ? s : String(w);
		});
		else if (s.type === "image") if (s.dataBinding) {
			let d = C[s.dataBinding];
			d != null && (w = String(d));
		} else w = w.replace(/\{\{(.*?)\}\}/g, (s, d) => {
			let w = C[d.trim()];
			return w == null ? s : String(w);
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
			padding: s.type === "image" ? 0 : "8px",
			overflow: "hidden",
			...s.style
		},
		children: [
			s.type === "text" && /* @__PURE__ */ jsx(p$2, { children: w }),
			s.type === "image" && (w ? /* @__PURE__ */ jsx("img", {
				src: w,
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
}, ListItem = ({ children: s, index: d, height: C }) => /* @__PURE__ */ jsx(motion.div, {
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
		height: C,
		width: "100%",
		marginBottom: "20px",
		transformOrigin: "center center"
	},
	children: s
});
const Preview = () => {
	let { state: s } = useEditor(), C = React.useMemo(() => s.elements.length === 0 ? 0 : Math.max(...s.elements.map((s) => s.y + s.height)), [s.elements]);
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
							let C = s.listSettings.sortProp, w = s.listSettings.sortOrder === "asc" ? 1 : -1;
							d = [...d].sort((s, d) => {
								let k = s[C], F = d[C];
								return k < F ? -1 * w : k > F ? 1 * w : 0;
							});
						}
						return /* @__PURE__ */ jsx(p, {
							direction: "column",
							justify: "end",
							p: "4",
							style: {
								width: "100%",
								minHeight: "100%"
							},
							children: d.map((d, w) => /* @__PURE__ */ jsx(ListItem, {
								index: w,
								height: C,
								children: s.elements.map((s) => /* @__PURE__ */ jsx(PreviewElementRenderer, {
									element: s,
									offsetY: 0,
									dataContext: d
								}, `${s.id}-${w}`))
							}, w))
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
};
var EditorContent = ({ layout: s, initialState: C, onSave: w, theme: k = "light" }) => {
	let [F, L] = useState(!0), [V, U] = useState(!0), { addElement: K, loadState: q, state: J } = useEditor();
	React.useEffect(() => {
		if (C) try {
			let s = typeof C == "string" ? JSON.parse(C) : C;
			Array.isArray(s) ? q({ elements: s }) : s.elements && q(s);
		} catch (s) {
			console.error("Failed to load initial state", s);
		}
	}, [C, q]);
	let X = (s) => {
		console.log(`Adding element of type: ${s}`), K({
			type: s,
			content: `New ${s}`
		});
	};
	return /* @__PURE__ */ jsx(R, {
		appearance: k,
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
			children: [V && /* @__PURE__ */ jsxs(p, {
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
										onSelect: () => X("text"),
										children: "Texto"
									}),
									/* @__PURE__ */ jsx(v$1, {
										onSelect: () => X("image"),
										children: "Imagem"
									}),
									/* @__PURE__ */ jsx(v$1, {
										onSelect: () => X("box"),
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
									if (w) {
										let s = {
											elements: J.elements,
											isList: J.isList,
											mockData: J.mockData,
											singleMockData: J.singleMockData,
											listSettings: J.listSettings
										};
										w(JSON.stringify(s, null, 2));
									}
								},
								children: [/* @__PURE__ */ jsx(Share1Icon, {}), " Salvar Alterações"]
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
							onClick: () => U(!V),
							title: V ? "Ocultar Barra Lateral" : "Mostrar Barra Lateral",
							children: jsx(V ? DoubleArrowLeftIcon : DoubleArrowRightIcon, {})
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
							color: F ? "blue" : "gray",
							onClick: () => L(!F),
							title: F ? "Ocultar Preview" : "Mostrar Preview",
							children: jsx(F ? EyeOpenIcon : EyeNoneIcon, {})
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
							F && /* @__PURE__ */ jsx(Ot, { style: {
								width: "4px",
								backgroundColor: "var(--gray-6)",
								cursor: "col-resize",
								transition: "background-color 0.2s"
							} }),
							F && /* @__PURE__ */ jsx(kt, {
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
}), generateHTML = (s, d, C = {}) => Function("elements", "data", "options", getRendererCode() + "\nreturn renderTemplate(elements, data, options);")(s, d, C), getRendererCode = () => "\n/**\n * Render Template\n * @param {Array} elements - The JSON configuration of elements\n * @param {Object|Array} data - The data object to inject (Object for single, Array for list)\n * @param {Object} options - { isList: boolean, listSettings: { sortProp: string, sortOrder: 'asc'|'desc' } }\n * @returns {string} - The generated HTML string\n */\nfunction renderTemplate(elements, data, options = {}) {\n    const { isList, listSettings } = options;\n\n    const camelToKebab = (string) => {\n        return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();\n    };\n\n    const styleObjectToString = (style) => {\n        if (!style) return '';\n        const pxProps = ['width', 'height', 'top', 'left', 'right', 'bottom', 'fontSize', 'borderRadius', 'padding', 'margin', 'borderWidth'];\n        \n        return Object.entries(style)\n            .map(([key, value]) => {\n                if (value === undefined || value === null) return '';\n                const cssKey = camelToKebab(key);\n                const cssValue = (typeof value === 'number' && pxProps.includes(key)) ? value + 'px' : value;\n                return `${cssKey}: ${cssValue}`;\n            })\n            .filter(Boolean)\n            .join('; ');\n    };\n\n    const renderItem = (itemData, index = 0, offsetY = 0) => {\n        return elements.map(element => {\n            let content = element.content;\n            let imgSrc = '';\n\n            if (element.type === 'text') {\n                content = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                    const val = itemData[key.trim()];\n                    return val !== undefined && val !== null ? String(val) : match;\n                });\n            } else if (element.type === 'image') {\n                 if (element.dataBinding) {\n                    const val = itemData[element.dataBinding];\n                    if (val !== undefined && val !== null) {\n                        imgSrc = String(val);\n                    } else {\n                        imgSrc = content;\n                    }\n                 } else {\n                     imgSrc = content.replace(/\\{\\{(.*?)\\}\\}/g, (match, key) => {\n                        const val = itemData[key.trim()];\n                        return val !== undefined && val !== null ? String(val) : match;\n                    });\n                 }\n            }\n\n            const baseStyle = {\n                position: 'absolute',\n                left: element.x,\n                top: element.y + offsetY,\n                width: element.width,\n                height: element.height,\n                transform: element.rotation ? `rotate(${element.rotation}deg)` : undefined,\n                overflow: 'hidden',\n                ...element.style\n            };\n            \n            const styleString = styleObjectToString(baseStyle);\n\n            if (element.type === 'text') {\n                return `<div style=\"${styleString}\">${content}</div>`;\n            } else if (element.type === 'image') {\n                const imgStyle = styleObjectToString({\n                    width: '100%',\n                    height: '100%',\n                    objectFit: element.style?.objectFit || 'cover',\n                    display: 'block'\n                });\n                return `<div style=\"${styleString}\"><img src=\"${imgSrc}\" alt=\"Element\" style=\"${imgStyle}\" /></div>`;\n            } else if (element.type === 'box') {\n                 return `<div style=\"${styleString}\"></div>`;\n            }\n            return '';\n        }).join('\\n');\n    };\n\n    if (isList && Array.isArray(data)) {\n        // Calculate item height\n        const maxY = Math.max(...elements.map(el => el.y + el.height));\n        const itemHeight = maxY; // Add some padding if needed, or rely on element positioning\n\n        // Sort data\n        let listData = [...data];\n        if (listSettings && listSettings.sortProp) {\n            const prop = listSettings.sortProp;\n            const order = listSettings.sortOrder === 'asc' ? 1 : -1;\n            listData.sort((a, b) => {\n                const valA = a[prop];\n                const valB = b[prop];\n                if (valA < valB) return -1 * order;\n                if (valA > valB) return 1 * order;\n                return 0;\n            });\n        }\n\n        // Generate HTML for all items\n        const itemsHtml = listData.map((item, index) => {\n             // We render each item inside a relative container to maintain local positioning\n             // But for the scroll animation, we usually stack them.\n             // Let's stack them vertically.\n             \n             const itemHtml = renderItem(item, index, 0); // Internal offset is 0, we move the container\n             const itemContainerStyle = styleObjectToString({\n                 position: 'relative',\n                 height: itemHeight,\n                 width: '100%',\n                 marginBottom: 20 // Spacing between items\n             });\n             \n             return `<div class=\"list-item\" style=\"${itemContainerStyle}\">${itemHtml}</div>`;\n        }).join('\\n');\n\n        // Animation Styles\n        // Bottom-anchored list (chat style)\n        const animationCss = `\n            @keyframes slideIn {\n                from { opacity: 0; transform: translateY(50px); }\n                to { opacity: 1; transform: translateY(0); }\n            }\n            .list-wrapper {\n                display: flex;\n                flex-direction: column;\n                justify-content: flex-end;\n                height: 100%;\n                width: 100%;\n                overflow: hidden;\n                padding-bottom: 20px;\n                box-sizing: border-box;\n            }\n            .list-item {\n                flex-shrink: 0;\n                animation: slideIn 0.5s ease-out;\n                margin-top: 20px;\n                width: 100%;\n                position: relative;\n            }\n        `;\n\n        return `\n            <style>${animationCss}</style>\n            <div class=\"list-wrapper\">\n                ${itemsHtml}\n            </div>\n        `;\n    }\n\n    // Single Item\n    const contentHtml = renderItem(data);\n    return `<div style=\"position: relative; width: 100%; height: 100%; overflow: hidden;\">${contentHtml}</div>`;\n}\n";
export { GenericEditor as EditorContent, generateHTML };
