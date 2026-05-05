(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/content/business.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "business",
    ()=>business,
    "businessGeo",
    ()=>businessGeo,
    "clients",
    ()=>clients,
    "fabricationServices",
    ()=>fabricationServices,
    "neighborhoodsServed",
    ()=>neighborhoodsServed,
    "processSteps",
    ()=>processSteps,
    "serviceRadiusKm",
    ()=>serviceRadiusKm,
    "testimonials",
    ()=>testimonials
]);
const business = {
    name: "SR Enterprises",
    shortDescription: "Acrylic fabrication, CNC cutting, UV printing, signage, trophies, podiums, and custom display solutions in Bangalore.",
    phone: "+91 98440 57897",
    phone2: "+91 90355 16333",
    whatsapp: "919844057897",
    email: "srenterprises7897@gmail.com",
    address: "#22, 2nd Main Road, Hanumanthapura, Srirampura, Bangalore, Karnataka 560021",
    postalCode: "560021",
    /** Human-readable service area for copy and basic schema text */ areaServed: "Bangalore Urban, Bangalore Rural, and nearby districts in Karnataka",
    /** Primary city for local SEO */ primaryCity: "Bengaluru (Bangalore)",
    primaryRegion: "Karnataka",
    country: "IN",
    siteUrl: "https://srenterprises.in",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6538.396748046494!2d77.56899220740821!3d12.987581991762985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16278f750001%3A0x21f9ce24cfeaafa8!2sS%20R%20ENTERPRISES!5e0!3m2!1sen!2sus!4v1777958907879!5m2!1sen!2sus",
    social: {
        instagram: "https://instagram.com/srenterprises",
        facebook: "https://facebook.com/srenterprises"
    }
};
const businessGeo = {
    latitude: 12.9963,
    longitude: 77.5521
};
const serviceRadiusKm = 75;
const neighborhoodsServed = [
    "Whitefield",
    "Electronic City",
    "Peenya Industrial Area",
    "Rajajinagar",
    "HSR Layout",
    "Koramangala",
    "Indiranagar",
    "Mahadevapura",
    "Yeshwanthpur",
    "Jigani Industrial Area"
];
const fabricationServices = [
    "Acrylic fabrication",
    "Laser cutting",
    "CNC cutting",
    "UV printing",
    "Signage",
    "Trophies and awards",
    "Photo frames",
    "Custom corporate gifts",
    "Podiums and display units"
];
const clients = [
    "Daimler",
    "Decathlon",
    "Fischer",
    "Micelio",
    "SCG",
    "Alcon",
    "Kriya",
    "Licious"
];
const processSteps = [
    {
        n: "01",
        title: "Brief",
        body: "Send a sketch, a reference, or just describe it. WhatsApp works."
    },
    {
        n: "02",
        title: "Quote",
        body: "We size the job, suggest materials, and quote within a working day."
    },
    {
        n: "03",
        title: "Make",
        body: "Cut, print, assemble, finish — all in our Srirampura workshop."
    },
    {
        n: "04",
        title: "Deliver",
        body: "Pickup, courier, or on-site installation for signage projects."
    }
];
const testimonials = [
    {
        quote: "Turned our annual awards around in under two weeks — clean acrylic finish and the engraving was spot on. They've been our go-to ever since.",
        attribution: "Operations lead, automotive sector"
    },
    {
        quote: "Façade signage installation was painless. They handled survey, fabrication and mounting end-to-end. The backlit letters look exactly like the renders.",
        attribution: "Retail rollout team"
    },
    {
        quote: "We needed 200 personalised UV-printed gifts in a hurry. Quality was consistent across the whole batch. Will work with them again.",
        attribution: "HR, B2B SaaS company"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/content/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$business$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/business.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/services.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ContactForm() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        phone: "",
        email: "",
        service: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"][0].name,
        message: ""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        const subject = `Quote request — ${form.service}`;
        const body = `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\n\nProject details:\n${form.message}`;
        window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$business$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["business"].email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "quote-form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Request a quote"
            }, void 0, false, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                style: {
                    display: "grid",
                    gap: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "cf-name",
                                children: "Your name"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "cf-name",
                                required: true,
                                value: form.name,
                                onChange: (e)=>setForm({
                                        ...form,
                                        name: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "cf-phone",
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "cf-phone",
                                required: true,
                                value: form.phone,
                                onChange: (e)=>setForm({
                                        ...form,
                                        phone: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "cf-email",
                                children: "Email (optional)"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "cf-email",
                                type: "email",
                                value: form.email,
                                onChange: (e)=>setForm({
                                        ...form,
                                        email: e.target.value
                                    })
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "cf-service",
                                children: "Service"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "cf-service",
                                value: form.service,
                                onChange: (e)=>setForm({
                                        ...form,
                                        service: e.target.value
                                    }),
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            children: s.name
                                        }, s.key, false, {
                                            fileName: "[project]/components/ContactForm.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: "Other / multiple"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ContactForm.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "field",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "cf-message",
                                children: "Project details"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "cf-message",
                                rows: 5,
                                required: true,
                                value: form.message,
                                onChange: (e)=>setForm({
                                        ...form,
                                        message: e.target.value
                                    }),
                                placeholder: "Quantities, materials, sizes, deadline…"
                            }, void 0, false, {
                                fileName: "[project]/components/ContactForm.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-primary",
                        type: "submit",
                        style: {
                            marginTop: 8
                        },
                        children: "Send via email →"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "form-note",
                        children: "Opens your mail app — no data stored on this site."
                    }, void 0, false, {
                        fileName: "[project]/components/ContactForm.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactForm.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactForm.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "tAwyrBy8o0NXSqoD9B3UHFEdLDY=");
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0f58c761._.js.map