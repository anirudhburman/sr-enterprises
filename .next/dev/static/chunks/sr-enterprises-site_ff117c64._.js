(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Corporate Reception Signboard",
        category: "Signage",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Annual Day Trophy Set",
        category: "Trophies",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "UV Printed Event Panels",
        category: "UV Printing",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Conference Podium Unit",
        category: "Podiums",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Wayfinding Signage Series",
        category: "Signage",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Storefront Acrylic Lettering",
        category: "Signage",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Corporate Gift Acrylic Stand",
        category: "Acrylic",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Recognition Plaque Collection",
        category: "Trophies",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "UV Printed Branding Panel",
        category: "UV Printing",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Event Stage Podium",
        category: "Podiums",
        image: "/images/placeholder-project.svg"
    },
    {
        title: "Reception Desk Sign Set",
        category: "Signage",
        image: "/images/placeholder-project.svg"
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
;
var _s = __turbopack_context__.k.signature();
"use client";
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
                        lineNumber: 23,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-3",
                children: filtered.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "card fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: project.image,
                                alt: `${project.title} by SR Enterprises`,
                                width: 800,
                                height: 600,
                                className: "gallery-image"
                            }, void 0, false, {
                                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pill",
                                children: project.category
                            }, void 0, false, {
                                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sr$2d$enterprises$2d$site$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "muted",
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, project.title, true, {
                        fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/sr-enterprises-site/components/ProjectGrid.tsx",
                lineNumber: 34,
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

//# sourceMappingURL=sr-enterprises-site_ff117c64._.js.map