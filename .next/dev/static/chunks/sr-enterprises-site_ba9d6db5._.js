(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sr-enterprises-site/components/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `reveal ${visible ? "revealed" : ""} ${className}`.trim(),
        children: children
    }, void 0, false, {
        fileName: "[project]/sr-enterprises-site/components/Reveal.tsx",
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
"[project]/sr-enterprises-site/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        title: "Retail Acrylic Product Display",
        category: "Acrylic",
        image: "/images/placeholder-landscape.svg",
        orientation: "landscape"
    },
    {
        title: "Corporate Reception Signboard",
        category: "Signage",
        image: "/images/placeholder-portrait.svg",
        orientation: "portrait"
    },
    {
        title: "Annual Day Trophy Set",
        category: "Trophies",
        image: "/images/placeholder-square.svg",
        orientation: "square"
    },
    {
        title: "UV Printed Event Panels",
        category: "UV Printing",
        image: "/images/placeholder-landscape.svg",
        orientation: "landscape"
    },
    {
        title: "Conference Podium Unit",
        category: "Podiums",
        image: "/images/placeholder-portrait.svg",
        orientation: "portrait"
    },
    {
        title: "Wayfinding Signage Series",
        category: "Signage",
        image: "/images/placeholder-landscape.svg",
        orientation: "landscape"
    },
    {
        title: "Storefront Acrylic Lettering",
        category: "Signage",
        image: "/images/placeholder-square.svg",
        orientation: "square"
    },
    {
        title: "Corporate Gift Acrylic Stand",
        category: "Acrylic",
        image: "/images/placeholder-portrait.svg",
        orientation: "portrait"
    },
    {
        title: "Recognition Plaque Collection",
        category: "Trophies",
        image: "/images/placeholder-landscape.svg",
        orientation: "landscape"
    },
    {
        title: "UV Printed Branding Panel",
        category: "UV Printing",
        image: "/images/placeholder-square.svg",
        orientation: "square"
    },
    {
        title: "Event Stage Podium",
        category: "Podiums",
        image: "/images/placeholder-landscape.svg",
        orientation: "landscape"
    },
    {
        title: "Reception Desk Sign Set",
        category: "Signage",
        image: "/images/placeholder-portrait.svg",
        orientation: "portrait"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sr-enterprises-site/components/ProjectGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProjectGrid",
    ()=>ProjectGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/content/projects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sr-enterprises-site/components/Reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const categories = [
    "All",
    "Acrylic",
    "Signage",
    "Trophies",
    "UV Printing",
    "Podiums"
];
const orientationRatio = {
    landscape: "4 / 3",
    portrait: "3 / 4",
    square: "1 / 1"
};
function ProjectGrid() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectGrid.useMemo[filtered]": ()=>{
            if (active === "All") {
                return __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"];
            }
            return __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter({
                "ProjectGrid.useMemo[filtered]": (item)=>item.category === active
            }["ProjectGrid.useMemo[filtered]"]);
        }
    }["ProjectGrid.useMemo[filtered]"], [
        active
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem"
                },
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setActive(category),
                        className: "pill",
                        style: {
                            cursor: "pointer",
                            opacity: category === active ? 1 : 0.75
                        },
                        children: category
                    }, category, false, {
                        fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-3",
                children: filtered.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$components$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: project.image,
                                    alt: `${project.title} by SR Enterprises`,
                                    width: 800,
                                    height: 600,
                                    className: "gallery-image",
                                    style: {
                                        aspectRatio: orientationRatio[project.orientation]
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pill",
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                                    lineNumber: 52,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                            lineNumber: 43,
                            columnNumber: 13
                        }, this)
                    }, project.title, false, {
                        fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ProjectGrid, "yf6OT/8pBdyMSLqxyaC6Nd+l2rQ=");
_c = ProjectGrid;
var _c;
__turbopack_context__.k.register(_c, "ProjectGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sr-enterprises-site_ba9d6db5._.js.map