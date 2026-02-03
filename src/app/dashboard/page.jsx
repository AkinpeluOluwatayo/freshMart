import Link from "next/link";

export default function Dashboard() {
    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            {/* --- SIDEBAR --- */}
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
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">Welcome back, John 👋</h1>
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-100">JD</div>
                    </div>
                </header>

                <div className="p-8 space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {/* 1. STATS SECTION */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <StatCard title="Wallet Balance" value="₦45,000" detail="Top up available" />
                        <StatCard title="Active Orders" value="03" detail="1 arriving today" />
                        <StatCard title="Total Saved" value="₦12,400" detail="15% more than last month" />
                    </div>

                    {/* 2. ORDER AGAIN (PRODUCT GRID) */}
                    <section className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Frequently Ordered</h2>
                            <button className="text-sm font-bold text-blue-600 hover:underline">See Catalog</button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                            <ProductCard name="Strawberries" price="₦3,500" emoji="🍓" color="bg-rose-50" />
                            <ProductCard name="Whole Milk" price="₦1,200" emoji="🥛" color="bg-blue-50" />
                            <ProductCard name="Organic Eggs" price="₦2,800" emoji="🥚" color="bg-amber-50" />
                            <ProductCard name="Avocado" price="₦1,500" emoji="🥑" color="bg-emerald-50" />
                        </div>
                    </section>

                    {/* 3. RECENT ORDERS TABLE */}
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
                                <OrderRow id="#FM-9021" date="Feb 03, 2026" price="₦12,400" status="Delivered" statusColor="text-green-600 bg-green-50" />
                                <OrderRow id="#FM-8842" date="Feb 01, 2026" price="₦8,200" status="Pending" statusColor="text-blue-600 bg-blue-50" />
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

// --- SUB-COMPONENTS ---

function SidebarItem({ label, active = false }) {
    return (
        <div className={`flex cursor-pointer items-center rounded-xl px-4 py-3 text-sm font-bold transition-all ${active ? 'bg-blue-600 text-white shadow-lg shadow-blue-100' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}>
            {label}
        </div>
    );
}

function StatCard({ title, value, detail }) {
    return (
        <div className="rounded-[2rem] border border-white bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{title}</p>
            <h3 className="mt-2 text-4xl font-black text-slate-900">{value}</h3>
            <p className="mt-2 text-xs font-bold text-blue-600">{detail}</p>
        </div>
    );
}

function ProductCard({ name, price, emoji, color }) {
    return (
        <div className="group cursor-pointer rounded-[2rem] border border-white bg-white p-5 shadow-sm hover:shadow-xl transition-all active:scale-95">
            <div className={`${color} mb-4 flex aspect-square items-center justify-center rounded-2xl text-4xl group-hover:scale-110 transition-transform duration-300`}>
                {emoji}
            </div>
            <h4 className="font-bold text-slate-800">{name}</h4>
            <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-400">{price}</span>
                <button className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">+</button>
            </div>
        </div>
    );
}

function OrderRow({ id, date, price, status, statusColor }) {
    return (
        <tr>
            <td className="py-5 font-bold text-slate-700">{id}</td>
            <td className="py-5 text-slate-500">{date}</td>
            <td className="py-5 font-black text-slate-900">{price}</td>
            <td className="py-5">
        <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-tighter ${statusColor}`}>
            {status}
        </span>
            </td>
        </tr>
    );
}