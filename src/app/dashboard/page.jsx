'use client'

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardData } from "@/services/dashboardService";

export default function Dashboard() {
    // 1. Fetch data from Spring Boot via TanStack Query
    const { data, isLoading, isError } = useQuery({
        queryKey: ['dashboardSummary'],
        queryFn: fetchDashboardData,
    });

    // 2. Loading State (Shimmer/Skeleton effect)
    if (isLoading) return <div className="flex min-h-screen items-center justify-center bg-slate-50 font-black text-blue-600 animate-pulse">LOADING FRESHMART...</div>;

    // 3. Error State
    if (isError) return <div className="flex min-h-screen items-center justify-center text-rose-500">Error connecting to server. Is Spring Boot running?</div>;

    // Destructure data from backend
    const { user, stats, recentOrders, frequentlyOrdered } = data;

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            {/* --- SIDEBAR (Remains same) --- */}
            <aside className="fixed left-0 top-0 hidden h-full w-64 border-r border-slate-200 bg-white lg:block shadow-sm">
                <div className="flex h-20 items-center px-8 text-2xl font-black tracking-tighter text-blue-700">
                    <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 italic text-white text-sm">F</div>
                    FreshMart
                </div>
                <nav className="mt-4 px-4 space-y-1">
                    <SidebarItem label="Overview" active />
                    <SidebarItem label="My Orders" />
                    <SidebarItem label="Wallet" />
                    <SidebarItem label="Favorites" />
                    <SidebarItem label="Settings" />
                    <Link href="/login" className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-all mt-10">
                        Logout
                    </Link>
                </nav>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 lg:ml-64">
                <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-slate-200 bg-white/80 backdrop-blur-md px-8">
                    {/* DYNAMIC NAME */}
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">Welcome back, {user?.firstName} 👋</h1>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100">
                            {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                        </div>
                    </div>
                </header>

                <div className="p-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* 1. STATS SECTION (DYNAMIC) */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <StatCard title="Wallet Balance" value={`₦${stats?.walletBalance}`} detail="Top up available" />
                        <StatCard title="Active Orders" value={stats?.activeOrdersCount} detail="1 arriving today" />
                        <StatCard title="Total Saved" value={`₦${stats?.totalSaved}`} detail="15% more than last month" />
                    </div>

                    {/* 2. ORDER AGAIN (DYNAMIC PRODUCT GRID) */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Frequently Ordered</h2>
                            <button className="text-sm font-bold text-blue-600 hover:underline">See Catalog</button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            {frequentlyOrdered?.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    name={product.name}
                                    price={`₦${product.price}`}
                                    emoji={product.emoji}
                                    color={product.bgColorClass}
                                />
                            ))}
                        </div>
                    </section>

                    {/* 3. RECENT ORDERS TABLE (DYNAMIC) */}
                    <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-xl font-black text-slate-900 mb-6">Recent Transactions</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                <tr className="border-b border-slate-100 text-xs uppercase tracking-widest text-slate-400 font-bold">
                                    <th className="pb-4">Order ID</th>
                                    <th className="pb-4">Date</th>
                                    <th className="pb-4">Amount</th>
                                    <th className="pb-4">Status</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50 text-sm">
                                {recentOrders?.map((order) => (
                                    <OrderRow
                                        key={order.id}
                                        id={`#${order.orderNumber}`}
                                        date={order.formattedDate}
                                        price={`₦${order.amount}`}
                                        status={order.status}
                                        // Conditional styling based on status
                                        statusColor={order.status === 'Delivered' ? 'text-green-600 bg-green-50' : 'text-blue-600 bg-blue-50'}
                                    />
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

// Sub-components (SidebarItem, StatCard, ProductCard, OrderRow) stay the same as your code!