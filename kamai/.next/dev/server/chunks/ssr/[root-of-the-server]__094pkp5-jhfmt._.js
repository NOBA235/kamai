module.exports = [
(()=>{"use strict";return[
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arkiv.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/aggregation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wallet.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const CITIES = [
    "bengaluru",
    "delhi",
    "mumbai",
    "hyderabad",
    "chennai",
    "pune",
    "kolkata"
];
const VEHICLES = [
    "bike",
    "scooter",
    "cycle",
    "car"
];
const SLOTS = [
    "morning",
    "lunch",
    "evening",
    "night"
];
const cap = (s)=>s[0].toUpperCase() + s.slice(1);
function Home() {
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const pub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPublicClient"])(process.env.NEXT_PUBLIC_TIRAMISU_API_KEY), []);
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [confirms, setConfirms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [block, setBlock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [city, setCity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("bengaluru");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [posted, setPosted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        city: "bengaluru",
        vehicle: "bike",
        timeSlot: "lunch",
        distanceKm: "4",
        amountInr: "38",
        note: ""
    });
    const load = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        try {
            const [p, c] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryPayouts"])(pub),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryAllConfirms"])(pub)
            ]);
            setRows(p.items.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toPayoutRow"]).filter((r)=>r !== null));
            setConfirms((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["groupConfirms"])(c.items));
            setBlock(p.blockNumber);
        } catch (e) {
            setStatus(`Could not load payouts: ${e.message.slice(0, 120)}`);
        }
    }, [
        pub
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
    }, [
        load
    ]);
    const board = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildRateBoard"])(rows, confirms), [
        rows,
        confirms
    ]);
    const cityBoard = board.filter((b)=>b.city === city);
    const top = [
        ...cityBoard
    ].sort((a, b)=>b.verified - a.verified)[0];
    const cityRows = rows.filter((r)=>r.city === city);
    async function run(label, fn) {
        setStatus(`${label}…`);
        try {
            const r = await fn();
            await pub.waitForTransactionReceipt({
                hash: r.txHash
            });
            if (r.entityKey) setPosted({
                key: r.entityKey,
                tx: r.txHash
            });
            setStatus("");
            await load();
        } catch (e) {
            setStatus(`${label} failed: ${e.message.slice(0, 160)}`);
        }
    }
    const post = ()=>wallet.writer && run("Posting payout", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPayout"])(wallet.writer, {
                ...form,
                distanceKm: Number(form.distanceKm),
                amountInr: Number(form.amountInr)
            }));
    const confirm = (key)=>wallet.writer && run("Confirming", ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createConfirm"])(wallet.writer, key));
    const set = (k)=>(e)=>setForm({
                ...form,
                [k]: e.target.value
            });
    const valid = Number(form.amountInr) > 0 && Number(form.distanceKm) > 0 && form.city.trim() !== "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto max-w-5xl px-4 py-6 grid gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-wrap items-center justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold tracking-tight",
                                children: "Kamai"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[var(--muted)]",
                                children: "What gig riders really get paid. No names. Nobody can delete it."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    wallet.address ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: [
                            "Connected ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-mono",
                                children: [
                                    wallet.address.slice(0, 6),
                                    "…",
                                    wallet.address.slice(-4)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 63,
                                columnNumber: 46
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn",
                        onClick: wallet.connect,
                        children: "Connect MetaMask"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            (wallet.error || status) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "status",
                className: "text-sm text-[var(--bad)]",
                children: wallet.error || status
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 66,
                columnNumber: 36
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "City rate",
                className: "rounded-lg bg-[var(--meter)] p-6 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm text-white/70",
                        children: [
                            "City",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                className: "ml-2 rounded bg-white/10 px-2 py-1",
                                value: city,
                                onChange: (e)=>setCity(e.target.value),
                                children: CITIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: c,
                                        className: "text-black",
                                        children: cap(c)
                                    }, c, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 32
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    top?.medianInrPerKm != null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "digits text-6xl font-bold",
                                children: [
                                    "₹",
                                    top.medianInrPerKm.toFixed(2)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-2 text-white/70",
                                children: "per km"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 75,
                                columnNumber: 114
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block mt-1 text-white/70",
                                children: [
                                    cap(top.vehicle),
                                    " riders, ",
                                    top.timeSlot,
                                    ": typical order ₹",
                                    top.medianAmountInr?.toFixed(0),
                                    ", confirmed by ",
                                    top.confirmations,
                                    " riders across ",
                                    top.verified,
                                    " payouts."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-3 text-white/80",
                        children: [
                            "No confirmed rate for ",
                            cap(city),
                            " yet. Post what you were paid, then ask two other riders to confirm it."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 77,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "aria-label": "Rate board",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl font-semibold mb-2",
                        children: "Median pay by vehicle and time"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto rounded-lg border border-[var(--line)] bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full text-left text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    className: "bg-[var(--paper)]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2",
                                                children: "Vehicle"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 54
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2",
                                                children: "Time"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 86
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2",
                                                children: "₹ per km"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 115
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2",
                                                children: "Typical order"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 148
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2",
                                                children: "Confirmed"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 186
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-2",
                                                children: "Waiting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 84,
                                                columnNumber: 220
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 50
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: [
                                        cityBoard.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "p-3 text-[var(--muted)]",
                                                colSpan: 6,
                                                children: [
                                                    "Nothing posted for ",
                                                    cap(city),
                                                    " yet."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 85,
                                                columnNumber: 51
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 85,
                                            columnNumber: 47
                                        }, this),
                                        cityBoard.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-t border-[var(--line)]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2",
                                                        children: cap(b.vehicle)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2",
                                                        children: cap(b.timeSlot)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 58
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2 font-semibold",
                                                        children: b.medianInrPerKm == null ? "—" : `₹${b.medianInrPerKm.toFixed(2)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2",
                                                        children: b.medianAmountInr == null ? "—" : `₹${b.medianAmountInr.toFixed(0)}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2",
                                                        children: b.verified
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "p-2",
                                                        children: b.pending
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 54
                                                    }, this)
                                                ]
                                            }, b.vehicle + b.timeSlot, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 86,
                                                columnNumber: 38
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-[var(--muted)]",
                        children: [
                            "Median of payouts with 2+ confirmations from other wallets. Computed in your browser",
                            block ? `, as of block ${block}` : "",
                            ". ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "underline",
                                onClick: load,
                                children: "Refresh"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 93,
                                columnNumber: 182
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Confirm payouts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Same for you?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid gap-2",
                                children: [
                                    cityRows.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "text-[var(--muted)]",
                                        children: [
                                            "No payouts to confirm in ",
                                            cap(city),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 39
                                    }, this),
                                    cityRows.slice(0, 20).map((r)=>{
                                        const n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countConfirms"])(confirms.get(r.key), r.creator);
                                        const mine = wallet.address?.toLowerCase() === r.creator;
                                        const done = wallet.address ? confirms.get(r.key)?.has(wallet.address.toLowerCase()) : false;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "flex items-center justify-between gap-2 rounded-lg border border-[var(--line)] bg-white p-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold",
                                                            children: [
                                                                "₹",
                                                                r.amountInr.toFixed(2),
                                                                " for ",
                                                                r.distanceKm,
                                                                " km"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 106,
                                                            columnNumber: 22
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-[var(--muted)]",
                                                            children: [
                                                                cap(r.vehicle),
                                                                ", ",
                                                                r.timeSlot,
                                                                " · ",
                                                                n,
                                                                " confirmed · ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "underline",
                                                                    href: `/p/${r.key}`,
                                                                    children: "Details"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 111
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "btn",
                                                    disabled: !wallet.address || mine || !!done,
                                                    onClick: ()=>confirm(r.key),
                                                    children: mine ? "Your payout" : done ? "Confirmed" : "Same for me"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, r.key, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 105,
                                            columnNumber: 23
                                        }, this);
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            !wallet.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-sm text-[var(--muted)]",
                                children: "Connect a wallet to confirm. Use a different wallet from the one that posted."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 112,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-label": "Post payout",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold mb-2",
                                children: "Post what you were paid"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-3 rounded-lg border border-[var(--line)] bg-white p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "City",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "field",
                                                list: "cities",
                                                value: form.city,
                                                onChange: set("city")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
                                        id: "cities",
                                        children: CITIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: c
                                            }, c, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 155
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 114
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Vehicle",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "field",
                                                        value: form.vehicle,
                                                        onChange: set("vehicle"),
                                                        children: VEHICLES.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: v,
                                                                children: cap(v)
                                                            }, v, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 123
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 120,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Time",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        className: "field",
                                                        value: form.timeSlot,
                                                        onChange: set("timeSlot"),
                                                        children: SLOTS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: s,
                                                                children: cap(s)
                                                            }, s, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 119
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 26
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 121,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Distance (km)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "field",
                                                        inputMode: "decimal",
                                                        value: form.distanceKm,
                                                        onChange: set("distanceKm")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 35
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                children: [
                                                    "Paid (₹)",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        className: "field",
                                                        inputMode: "decimal",
                                                        value: form.amountInr,
                                                        onChange: set("amountInr")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 30
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 123,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: [
                                            "Note (optional, no names or phone numbers)",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                className: "field",
                                                maxLength: 120,
                                                value: form.note,
                                                onChange: set("note")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 125,
                                                columnNumber: 62
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn",
                                        disabled: !wallet.address || !valid,
                                        onClick: post,
                                        children: wallet.address ? "Post payout" : "Connect a wallet to post"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    posted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: [
                                            "Posted. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "underline",
                                                href: `/p/${posted.key}`,
                                                children: "View entity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 55
                                            }, this),
                                            " · ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "underline",
                                                href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EXPLORER"]}/tx/${posted.tx}`,
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: "Transaction"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 130
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 24
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/aggregation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Phase 2: everything computed client-side. Nothing here is ever written to Arkiv.
// Public data: anyone can post anything, so every row is validated before it is counted.
__turbopack_context__.s([
    "BOUNDS",
    ()=>BOUNDS,
    "buildRateBoard",
    ()=>buildRateBoard,
    "computeMedian",
    ()=>computeMedian,
    "countConfirms",
    ()=>countConfirms,
    "groupConfirms",
    ()=>groupConfirms,
    "paginateResults",
    ()=>paginateResults,
    "toPayoutRow",
    ()=>toPayoutRow
]);
async function paginateResults(first, maxPages = 50) {
    const items = [
        ...first.entities
    ];
    let page = first;
    let pages = 1;
    while(page.hasNextPage() && pages < maxPages){
        page = await page.next();
        items.push(...page.entities);
        pages++;
    }
    return {
        items,
        blockNumber: first.blockNumber,
        truncated: page.hasNextPage()
    };
}
function computeMedian(values) {
    const v = values.filter(Number.isFinite).sort((a, b)=>a - b);
    if (v.length === 0) return null;
    const mid = v.length >> 1;
    return v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2;
}
const BOUNDS = {
    minAmountInr: 1,
    maxAmountInr: 5000,
    minKm: 0.2,
    maxKm: 100
};
const str = (a, k)=>String(a[k]?.value ?? "");
const num = (a, k)=>Number(a[k]?.value ?? NaN);
function toPayoutRow(e) {
    const amountInr = num(e.attributes, "amountScaled") / 100; // undo x100 scaling
    const distanceKm = num(e.attributes, "distanceMeters") / 1000;
    if (!(amountInr >= BOUNDS.minAmountInr && amountInr <= BOUNDS.maxAmountInr)) return null;
    if (!(distanceKm >= BOUNDS.minKm && distanceKm <= BOUNDS.maxKm)) return null;
    const city = str(e.attributes, "city"), vehicle = str(e.attributes, "vehicle"), timeSlot = str(e.attributes, "timeSlot");
    if (!city || !vehicle || !timeSlot) return null;
    return {
        key: e.key.toLowerCase(),
        creator: e.creator.toLowerCase(),
        city,
        vehicle,
        timeSlot,
        amountInr,
        distanceKm,
        inrPerKm: amountInr / distanceKm
    };
}
function groupConfirms(confirms) {
    const map = new Map();
    for (const c of confirms){
        const pk = String(c.attributes?.payoutKey?.value ?? "").toLowerCase();
        if (!pk) continue;
        if (!map.has(pk)) map.set(pk, new Set());
        map.get(pk).add(c.creator.toLowerCase());
    }
    return map;
}
function countConfirms(confirmers, payoutCreator) {
    if (!confirmers) return 0;
    const me = payoutCreator.toLowerCase();
    const distinct = new Set();
    for (const w of confirmers){
        const x = w.toLowerCase();
        if (x !== me) distinct.add(x);
    }
    return distinct.size;
}
function buildRateBoard(payouts, confirmsByPayout, minConfirms = 2) {
    const groups = new Map();
    for (const p of payouts){
        const g = `${p.city}|${p.vehicle}|${p.timeSlot}`;
        if (!groups.has(g)) groups.set(g, []);
        groups.get(g).push({
            row: p,
            n: countConfirms(confirmsByPayout.get(p.key), p.creator)
        });
    }
    const r2 = (x)=>x === null ? null : Math.round(x * 100) / 100;
    return [
        ...groups.entries()
    ].map(([g, items])=>{
        const [city, vehicle, timeSlot] = g.split("|");
        const ok = items.filter((i)=>i.n >= minConfirms);
        return {
            city,
            vehicle,
            timeSlot,
            verified: ok.length,
            pending: items.length - ok.length,
            confirmations: ok.reduce((s, i)=>s + i.n, 0),
            medianInrPerKm: r2(computeMedian(ok.map((i)=>i.row.inrPerKm))),
            medianAmountInr: r2(computeMedian(ok.map((i)=>i.row.amountInr)))
        };
    }).sort((a, b)=>a.city.localeCompare(b.city) || a.vehicle.localeCompare(b.vehicle) || a.timeSlot.localeCompare(b.timeSlot));
}
}),
"[project]/src/lib/arkiv.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EXPLORER",
    ()=>EXPLORER,
    "LIFETIME",
    ()=>LIFETIME,
    "PROJECT",
    ()=>PROJECT,
    "browserWalletClient",
    ()=>browserWalletClient,
    "createConfirm",
    ()=>createConfirm,
    "createPayout",
    ()=>createPayout,
    "getPublicClient",
    ()=>getPublicClient,
    "nodeWalletClient",
    ()=>nodeWalletClient,
    "payoutAttributes",
    ()=>payoutAttributes,
    "queryAllConfirms",
    ()=>queryAllConfirms,
    "queryConfirms",
    ()=>queryConfirms,
    "queryPayouts",
    ()=>queryPayouts,
    "rpcUrl",
    ()=>rpcUrl
]);
// Kamai data layer — SDK 0.8.x on Tiramisu (chain 7738577).
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$payload$2d$DE7wMztL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__ExpirationTime$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/payload-DE7wMztL.js [app-ssr] (ecmascript) <export r as ExpirationTime>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$payload$2d$DE7wMztL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__jsonToPayload$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/payload-DE7wMztL.js [app-ssr] (ecmascript) <export t as jsonToPayload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$attr$2d$tmyREHtw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__x__as__i32$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/attr-tmyREHtw.js [app-ssr] (ecmascript) <export x as i32>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$attr$2d$tmyREHtw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__E__as__u64$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/attr-tmyREHtw.js [app-ssr] (ecmascript) <export E as u64>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/chains-DmrgfF3p.js [app-ssr] (ecmascript) <export n as tiramisu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/query-Ber-lOJQ.js [app-ssr] (ecmascript) <export a as eq>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/aggregation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/transports/custom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/accounts/privateKeyToAccount.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
const PROJECT = "kamai-in-7x9k";
const LIFETIME = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$payload$2d$DE7wMztL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__r__as__ExpirationTime$3e$__["ExpirationTime"].fromDays(30);
function rpcUrl(apiKey) {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"].rpcUrls.default.http[0];
    return apiKey ? `${base}/${apiKey}` : base;
}
const getPublicClient = (apiKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createPublicClient"])({
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"],
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(rpcUrl(apiKey))
    });
const nodeWalletClient = (privateKey, apiKey)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createWalletClient"])({
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"],
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(rpcUrl(apiKey)),
        account: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$privateKeyToAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["privateKeyToAccount"])(privateKey)
    });
const browserWalletClient = (provider, address)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createWalletClient"])({
        chain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"],
        transport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$custom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["custom"])(provider),
        account: address
    });
const slug = (s)=>s.trim().toLowerCase();
function payoutAttributes(p) {
    return {
        project: PROJECT,
        entityType: "payout",
        city: slug(p.city),
        vehicle: p.vehicle,
        timeSlot: p.timeSlot,
        amountScaled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$attr$2d$tmyREHtw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__x__as__i32$3e$__["i32"])(Math.round(p.amountInr * 100)),
        distanceMeters: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$attr$2d$tmyREHtw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__x__as__i32$3e$__["i32"])(Math.round(p.distanceKm * 1000)),
        ts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$attr$2d$tmyREHtw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__E__as__u64$3e$__["u64"])(Date.now())
    };
}
async function createPayout(w, p) {
    return w.createEntity({
        payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$payload$2d$DE7wMztL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__jsonToPayload$3e$__["jsonToPayload"])({
            v: 1,
            note: p.note ?? ""
        }),
        contentType: "application/json",
        attributes: payoutAttributes(p),
        expires: LIFETIME
    });
}
async function createConfirm(w, payoutKey) {
    return w.createEntity({
        payload: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$payload$2d$DE7wMztL$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__t__as__jsonToPayload$3e$__["jsonToPayload"])({
            v: 1,
            sameForMe: true
        }),
        contentType: "application/json",
        attributes: {
            project: PROJECT,
            entityType: "confirm",
            payoutKey,
            ts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$attr$2d$tmyREHtw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__E__as__u64$3e$__["u64"])(Date.now())
        },
        expires: LIFETIME
    });
}
async function queryPayouts(c, f = {}) {
    const conds = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("project", PROJECT),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("entityType", "payout")
    ];
    if (f.city) conds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("city", slug(f.city)));
    if (f.vehicle) conds.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("vehicle", f.vehicle));
    const first = await c.select({
        key: true,
        creator: true,
        attributes: true,
        expiresAt: true
    }).where(...conds).limit(200).fetch();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paginateResults"])(first);
}
async function queryConfirms(c, payoutKey) {
    const first = await c.select({
        key: true,
        creator: true
    }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("project", PROJECT), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("entityType", "confirm"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("payoutKey", payoutKey)).limit(200).fetch();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paginateResults"])(first);
}
async function queryAllConfirms(c) {
    const first = await c.select({
        key: true,
        creator: true,
        attributes: true
    }).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("project", PROJECT), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$query$2d$Ber$2d$lOJQ$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__a__as__eq$3e$__["eq"])("entityType", "confirm")).limit(200).fetch();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$aggregation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["paginateResults"])(first);
}
const EXPLORER = "https://tiramisu.explorer.arkiv.network";
}),
"[project]/src/lib/wallet.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWallet",
    ()=>useWallet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/viem/_esm/utils/encoding/toHex.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__ = __turbopack_context__.i("[project]/node_modules/@arkiv-network/sdk/dist/chains-DmrgfF3p.js [app-ssr] (ecmascript) <export n as tiramisu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/arkiv.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const eth = ()=>window.ethereum;
function useWallet() {
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [writer, setWriter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setError("");
        const p = eth();
        if (!p) return setError("MetaMask not found. Install it, then reload.");
        try {
            const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["numberToHex"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"].id);
            try {
                await p.request({
                    method: "wallet_switchEthereumChain",
                    params: [
                        {
                            chainId
                        }
                    ]
                });
            } catch  {
                await p.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId,
                            chainName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"].name,
                            nativeCurrency: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"].nativeCurrency,
                            rpcUrls: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$arkiv$2d$network$2f$sdk$2f$dist$2f$chains$2d$DmrgfF3p$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__n__as__tiramisu$3e$__["tiramisu"].rpcUrls.default.http,
                            blockExplorerUrls: [
                                "https://tiramisu.explorer.arkiv.network"
                            ]
                        }
                    ]
                });
            }
            const [a] = await p.request({
                method: "eth_requestAccounts"
            });
            setAddress(a);
            setWriter((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$arkiv$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browserWalletClient"])(p, a));
        } catch (e) {
            setError(e.message.slice(0, 160));
        }
    }, []);
    return {
        address,
        writer,
        error,
        connect
    };
}
}),
]})(),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__094pkp5-jhfmt._.js.map