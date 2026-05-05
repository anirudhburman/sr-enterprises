module.exports = [
"[project]/content/services.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serviceFaqs",
    ()=>serviceFaqs,
    "services",
    ()=>services
]);
const services = [
    {
        key: "acrylic",
        name: "Acrylic Fabrication",
        tag: "Cut. Bend. Polish. Assemble.",
        blurb: "Custom acrylic display stands, retail fixtures, sneeze guards, partitions and bespoke fabrications — built to spec from cast and extruded acrylic sheets.",
        bullets: [
            "Edge polishing & flame finishing",
            "Solvent & UV bonding",
            "Thermoforming & bending",
            "Up to 25mm sheet thickness"
        ]
    },
    {
        key: "laser",
        name: "Laser Cutting",
        tag: "Precision cuts on acrylic, MDF, ply.",
        blurb: "CO₂ laser cutting and engraving for clean edges and intricate detail. Production runs and one-offs welcomed.",
        bullets: [
            "±0.1mm tolerance",
            "Bed size up to 1300×900mm",
            "Vector engraving & raster",
            "Fast turnaround on small batches"
        ]
    },
    {
        key: "cnc",
        name: "CNC Cutting",
        tag: "Routed letters, panels, profiles.",
        blurb: "CNC routing for ACP, MDF, HDF, PVC and aluminium composite — ideal for 3D channel letters and signage substrates.",
        bullets: [
            "3-axis routing",
            "V-groove & pocketing",
            "Channel-letter fabrication",
            "Panel sizing & finishing"
        ]
    },
    {
        key: "uv",
        name: "UV Printing",
        tag: "Vivid direct-to-substrate prints.",
        blurb: "Photo-quality UV flatbed printing onto acrylic, wood, metal, glass and more. Scratch-resistant, weatherproof, full CMYK + white.",
        bullets: [
            "White-ink layers",
            "Up to 2440×1220mm bed",
            "Direct-to-object",
            "300+ DPI photo quality"
        ]
    },
    {
        key: "signage",
        name: "Signage",
        tag: "Backlit, 3D, neon, façade.",
        blurb: "End-to-end signage — design, fabrication, electrical, installation. From shopfront 3D letters to backlit acrylic and façade boards.",
        bullets: [
            "LED backlit & edge-lit",
            "Stainless / acrylic 3D letters",
            "Façade & shopfront boards",
            "Site survey + installation"
        ]
    },
    {
        key: "trophies",
        name: "Trophies",
        tag: "Awards that earn a desk spot.",
        blurb: "Acrylic and crystal trophies for sports, corporate and academic events. Personalised engraving and UV-printed graphics.",
        bullets: [
            "Bespoke shapes",
            "UV-printed logos",
            "Bulk event orders",
            "Bases & packaging"
        ]
    },
    {
        key: "frames",
        name: "Photo Frames",
        tag: "Acrylic & wood, framed properly.",
        blurb: "Acrylic block frames, magnetic frames, and traditional wood frames — single units or wedding & event volumes.",
        bullets: [
            "Acrylic blocks",
            "Magnetic & standoff",
            "Custom sizes",
            "Volume pricing"
        ]
    },
    {
        key: "gifts",
        name: "Custom Gifts",
        tag: "Branded, boxed, thoughtful.",
        blurb: "Corporate gifting — desk accessories, name plates, branded keepsakes — laser-cut, UV-printed and packaged.",
        bullets: [
            "Logo-matched colourways",
            "Mixed-material builds",
            "Bulk + individual",
            "Gift packaging available"
        ]
    },
    {
        key: "awards",
        name: "Corporate Awards",
        tag: "Recognition done right.",
        blurb: "End-of-year, employee recognition and milestone awards. Designed with you, manufactured in-house.",
        bullets: [
            "Design + production",
            "Engraving & UV print",
            "Branded packaging",
            "Repeat-order memory"
        ]
    }
];
const serviceFaqs = [
    {
        q: "What's the minimum order quantity?",
        a: "There isn't one. We do single trophies and 500-piece corporate gifting runs with the same care. Pricing scales with volume."
    },
    {
        q: "How long does a typical job take?",
        a: "Small jobs — laser cuts, single trophies, photo frames — usually 2–4 working days. Signage installations and large UV prints are scoped after a brief."
    },
    {
        q: "Do you ship outside Bengaluru?",
        a: "Yes. We regularly courier across India for trophies, awards and gifting. Signage installations are Bengaluru and surrounding areas."
    },
    {
        q: "Can I bring my own design?",
        a: "Absolutely. Send a vector file (AI, PDF, SVG, DXF) or a clean reference image. We'll flag anything that needs adjusting before production."
    },
    {
        q: "Do you provide installation for signage?",
        a: "Yes — site survey, fabrication, electricals and mounting are handled in-house for shopfront and façade signage in Bengaluru."
    },
    {
        q: "What materials do you work with?",
        a: "Cast and extruded acrylic, MDF, ply, ACP, aluminium composite, stainless steel, PVC, and most rigid substrates that take a UV print."
    }
];
}),
"[project]/components/FaqAccordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FaqAccordion",
    ()=>FaqAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/services.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function FaqAccordion() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "faq-list",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serviceFaqs"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `faq-item ${open === i ? "open" : ""}`,
                onClick: ()=>setOpen(open === i ? -1 : i),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-q",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: f.q
                            }, void 0, false, {
                                fileName: "[project]/components/FaqAccordion.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "faq-plus",
                                children: "+"
                            }, void 0, false, {
                                fileName: "[project]/components/FaqAccordion.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FaqAccordion.tsx",
                        lineNumber: 17,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-a",
                        children: f.a
                    }, void 0, false, {
                        fileName: "[project]/components/FaqAccordion.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/components/FaqAccordion.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/FaqAccordion.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_033c23c0._.js.map