(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/content/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "projects",
    ()=>projects
]);
const projects = [
    {
        label: "3D backlit letters · Retail façade",
        category: "Signage"
    },
    {
        label: "Acrylic award · Corporate event",
        category: "Trophies"
    },
    {
        label: "UV print on wood · Custom gifting",
        category: "UV Printing"
    },
    {
        label: "Edge-polished acrylic display",
        category: "Acrylic"
    },
    {
        label: "Laser-cut directory board",
        category: "Laser"
    },
    {
        label: "Channel-letter fabrication",
        category: "Signage"
    },
    {
        label: "Crystal trophy with UV print base",
        category: "Trophies"
    },
    {
        label: "Acrylic photo block · Wedding gift",
        category: "Frames"
    },
    {
        label: "Office name plate · Brushed acrylic",
        category: "Custom"
    },
    {
        label: "Backlit menu board · Hospitality",
        category: "Signage"
    },
    {
        label: "Laser-engraved wood plaque",
        category: "Awards"
    },
    {
        label: "Multi-layer acrylic standee",
        category: "Acrylic"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MasonryProjectGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MasonryProjectGrid",
    ()=>MasonryProjectGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const SPANS = [
    {
        col: 6,
        row: 4
    },
    {
        col: 6,
        row: 4
    },
    {
        col: 4,
        row: 3
    },
    {
        col: 4,
        row: 3
    },
    {
        col: 4,
        row: 3
    },
    {
        col: 8,
        row: 4
    },
    {
        col: 4,
        row: 4
    },
    {
        col: 4,
        row: 3
    },
    {
        col: 4,
        row: 3
    },
    {
        col: 4,
        row: 3
    },
    {
        col: 6,
        row: 3
    },
    {
        col: 6,
        row: 3
    }
];
function MasonryProjectGrid() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const categories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MasonryProjectGrid.useMemo[categories]": ()=>[
                "All",
                ...Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map({
                    "MasonryProjectGrid.useMemo[categories]": (p)=>p.category
                }["MasonryProjectGrid.useMemo[categories]"])))
            ]
    }["MasonryProjectGrid.useMemo[categories]"], []);
    const filtered = filter === "All" ? __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.category === filter);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-filters",
                children: categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `btn btn-ghost ${filter === c ? "active" : ""}`,
                        onClick: ()=>setFilter(c),
                        children: c
                    }, c, false, {
                        fileName: "[project]/components/MasonryProjectGrid.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/MasonryProjectGrid.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "gallery-grid",
                children: filtered.map((item, i)=>{
                    const sp = SPANS[i % SPANS.length];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "gallery-card",
                        style: {
                            gridColumn: `span ${sp.col}`,
                            gridRow: `span ${sp.row}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gallery-stripes"
                            }, void 0, false, {
                                fileName: "[project]/components/MasonryProjectGrid.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gallery-meta",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gallery-label",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/MasonryProjectGrid.tsx",
                                        lineNumber: 48,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "gallery-cat",
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/MasonryProjectGrid.tsx",
                                        lineNumber: 49,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MasonryProjectGrid.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/components/MasonryProjectGrid.tsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/MasonryProjectGrid.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(MasonryProjectGrid, "zlWw3w2zvFW+tZWjagXZ9UEZVSA=");
_c = MasonryProjectGrid;
var _c;
__turbopack_context__.k.register(_c, "MasonryProjectGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d851c624._.js.map