(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Reveal.useEffect": ()=>{
            const node = ref.current;
            if (!node) {
                return;
            }
            const observer = new IntersectionObserver({
                "Reveal.useEffect": (entries)=>{
                    const entry = entries[0];
                    if (entry?.isIntersecting) {
                        setVisible(true);
                        observer.unobserve(node);
                    }
                }
            }["Reveal.useEffect"], {
                threshold: 0.12,
                rootMargin: "0px 0px -8% 0px"
            });
            observer.observe(node);
            return ({
                "Reveal.useEffect": ()=>observer.disconnect()
            })["Reveal.useEffect"];
        }
    }["Reveal.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${visible ? "revealed" : ""} ${className}`.trim(),
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Reveal.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Reveal, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/HeroTypedHeadline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroTypedHeadline",
    ()=>HeroTypedHeadline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const SERVICE_WORDS = [
    "Acrylic fabrication",
    "Laser cutting",
    "CNC cutting",
    "UV printing",
    "Signage",
    "Trophies",
    "Photo frames",
    "Custom gifts"
];
const TYPE_MS = 52;
const HOLD_MS = 2200;
const DELETE_MS = 36;
const BETWEEN_MS = 280;
function HeroTypedHeadline() {
    _s();
    const [wordIndex, setWordIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [len, setLen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const word = SERVICE_WORDS[wordIndex % SERVICE_WORDS.length];
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroTypedHeadline.useMemo[visible]": ()=>word.slice(0, len)
    }["HeroTypedHeadline.useMemo[visible]"], [
        word,
        len
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroTypedHeadline.useEffect": ()=>{
            const reduce = ("TURBOPACK compile-time value", "object") !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (reduce) {
                setWordIndex(0);
                setLen(SERVICE_WORDS[0].length);
                return;
            }
            let cancelled = false;
            let wi = 0;
            let l = 0;
            let mode = "type";
            let pending;
            const queue = {
                "HeroTypedHeadline.useEffect.queue": (ms, fn)=>{
                    if (pending !== undefined) window.clearTimeout(pending);
                    pending = window.setTimeout({
                        "HeroTypedHeadline.useEffect.queue": ()=>{
                            if (!cancelled) fn();
                        }
                    }["HeroTypedHeadline.useEffect.queue"], ms);
                }
            }["HeroTypedHeadline.useEffect.queue"];
            const tick = {
                "HeroTypedHeadline.useEffect.tick": ()=>{
                    if (cancelled) return;
                    const w = SERVICE_WORDS[wi];
                    if (mode === "type") {
                        if (l < w.length) {
                            l += 1;
                            setWordIndex(wi);
                            setLen(l);
                            queue(TYPE_MS, tick);
                        } else {
                            mode = "hold";
                            queue(HOLD_MS, tick);
                        }
                        return;
                    }
                    if (mode === "hold") {
                        mode = "delete";
                        queue(BETWEEN_MS, tick);
                        return;
                    }
                    if (mode === "delete") {
                        if (l > 0) {
                            l -= 1;
                            setWordIndex(wi);
                            setLen(l);
                            queue(DELETE_MS, tick);
                        } else {
                            wi = (wi + 1) % SERVICE_WORDS.length;
                            setWordIndex(wi);
                            mode = "type";
                            queue(BETWEEN_MS, tick);
                        }
                    }
                }
            }["HeroTypedHeadline.useEffect.tick"];
            queue(0, tick);
            return ({
                "HeroTypedHeadline.useEffect": ()=>{
                    cancelled = true;
                    if (pending !== undefined) window.clearTimeout(pending);
                }
            })["HeroTypedHeadline.useEffect"];
        }
    }["HeroTypedHeadline.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
        className: "hero-typed-title",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "hero-typed-word",
            "aria-live": "polite",
            children: [
                visible,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "hero-typed-cursor",
                    "aria-hidden": "true",
                    children: "|"
                }, void 0, false, {
                    fileName: "[project]/components/HeroTypedHeadline.tsx",
                    lineNumber: 99,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/HeroTypedHeadline.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/HeroTypedHeadline.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(HeroTypedHeadline, "nXDmkhkazyOnkPVpvVnZdmnHhDo=");
_c = HeroTypedHeadline;
var _c;
__turbopack_context__.k.register(_c, "HeroTypedHeadline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ClientLogoCycle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLogoCycle",
    ()=>ClientLogoCycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const COMPANIES = [
    {
        id: "daimler",
        name: "Daimler"
    },
    {
        id: "decathlon",
        name: "Decathlon"
    },
    {
        id: "fischer",
        name: "Fischer"
    },
    {
        id: "micelio",
        name: "Micelio"
    },
    {
        id: "scg",
        name: "SCG"
    },
    {
        id: "alcon",
        name: "Alcon"
    },
    {
        id: "kriya",
        name: "Kriya"
    },
    {
        id: "licious",
        name: "Licious"
    }
];
/** Each column advances on its own cadence (ms between brand changes). */ const COLUMN_INTERVAL_MS = [
    5200,
    7000,
    6000,
    7600
];
/** Start on different brands so the row is not four identical ticks at t=0. */ const COLUMN_INITIAL_INDEX = [
    0,
    2,
    4,
    6
];
function ClientLogoColumn({ columnIndex, reduceMotion }) {
    _s();
    const [idx, setIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(COLUMN_INITIAL_INDEX[columnIndex]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLogoColumn.useEffect": ()=>{
            if (reduceMotion) return;
            const ms = COLUMN_INTERVAL_MS[columnIndex];
            const id = window.setInterval({
                "ClientLogoColumn.useEffect.id": ()=>{
                    setIdx({
                        "ClientLogoColumn.useEffect.id": (i)=>(i + 1) % COMPANIES.length
                    }["ClientLogoColumn.useEffect.id"]);
                }
            }["ClientLogoColumn.useEffect.id"], ms);
            return ({
                "ClientLogoColumn.useEffect": ()=>window.clearInterval(id)
            })["ClientLogoColumn.useEffect"];
        }
    }["ClientLogoColumn.useEffect"], [
        columnIndex,
        reduceMotion
    ]);
    const c = COMPANIES[idx];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "client-logo-cell",
        role: "listitem",
        style: {
            animationDelay: reduceMotion ? "0ms" : `${columnIndex * 80}ms`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "client-logo-mark",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/ClientLogoCycle.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "client-logo-name",
                children: c.name
            }, void 0, false, {
                fileName: "[project]/components/ClientLogoCycle.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, `${columnIndex}-${c.id}-${idx}`, true, {
        fileName: "[project]/components/ClientLogoCycle.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ClientLogoColumn, "7J5T1quS2eci65qcoR76Rs7yG/Y=");
_c = ClientLogoColumn;
function ClientLogoCycle() {
    _s1();
    const [reduceMotion, setReduceMotion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLogoCycle.useEffect": ()=>{
            const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
            setReduceMotion(mq.matches);
            const onChange = {
                "ClientLogoCycle.useEffect.onChange": ()=>setReduceMotion(mq.matches)
            }["ClientLogoCycle.useEffect.onChange"];
            mq.addEventListener("change", onChange);
            return ({
                "ClientLogoCycle.useEffect": ()=>mq.removeEventListener("change", onChange)
            })["ClientLogoCycle.useEffect"];
        }
    }["ClientLogoCycle.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "client-logo-section",
        "aria-label": "Brands we have worked with",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "client-logo-label",
                children: "Trusted by teams at"
            }, void 0, false, {
                fileName: "[project]/components/ClientLogoCycle.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "client-logo-row",
                role: "list",
                children: [
                    0,
                    1,
                    2,
                    3
                ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ClientLogoColumn, {
                        columnIndex: col,
                        reduceMotion: reduceMotion
                    }, col, false, {
                        fileName: "[project]/components/ClientLogoCycle.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ClientLogoCycle.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ClientLogoCycle.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s1(ClientLogoCycle, "JG4l94zpvv67Bfd7Dxv3GKZ2ZaI=");
_c1 = ClientLogoCycle;
var _c, _c1;
__turbopack_context__.k.register(_c, "ClientLogoColumn");
__turbopack_context__.k.register(_c1, "ClientLogoCycle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_78a8c7fd._.js.map