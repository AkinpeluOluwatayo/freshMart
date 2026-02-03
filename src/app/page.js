import Image from "next/image";
import Link from "next/link";
// import { redirect } from 'next/navigation';

export default function Home() {
    // redirect('/dashboard');
  return (
      <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 selection:bg-blue-100">
        {/* NAVIGATION */}
        <nav className="fixed top-0 z-50 w-full border-b border-white/20 bg-white/70 backdrop-blur-md px-6 md:px-12 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-2xl font-black tracking-tighter text-blue-700">
              <div className="w-8 h-8 bg-blue-600 rounded-lg rotate-12 flex items-center justify-center text-white text-sm italic">F</div>
              FreshMart
            </div>

            <div className="hidden space-x-10 text-sm font-medium md:flex">
              <Link href="/shop" className="hover:text-blue-600 transition-colors">Categories</Link>
              <Link href="/deals" className="hover:text-blue-600 transition-colors">Deals</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
            </div>

            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-semibold hover:text-blue-600 transition">Log in</Link>
              <Link href="/signup" className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:bg-blue-700 hover:shadow-blue-100 transition-all active:scale-95">
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-32 pb-20">
          {/* HERO SECTION */}
          <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Flash Sale: 20% Off Seafood</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tight">
                Quality <span className="text-blue-600">Daily</span>,<br />
                At Your Door.
              </h1>

              <p className="text-xl text-slate-500 leading-relaxed max-w-md">
                The smartest way to stock your fridge. Premium essentials and local favorites delivered with precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/signup" className="px-8 py-4 bg-blue-900 text-white rounded-2xl font-bold hover:bg-blue-800 transition-all shadow-xl shadow-blue-100 active:scale-95">
                  Start Order
                </Link>
                <button className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95">
                  View Catalog
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-200 to-cyan-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative aspect-square rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <p className="text-slate-200 font-black text-6xl rotate-12 uppercase">Premium</p>
                  <p className="text-blue-600 font-black text-8xl -rotate-12 uppercase">Picks</p>
                </div>
              </div>
            </div>
          </section>

          {/* BENTO CATEGORIES */}
          <section className="max-w-7xl mx-auto px-6 mt-32">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-4xl font-black text-slate-900">Weekly Essentials</h2>
                <p className="text-slate-500 mt-2">Curated quality for your household</p>
              </div>
              <button className="text-blue-600 font-bold hover:underline underline-offset-4">Browse all &rarr;</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <CategoryCard name="Sea Food" items="24+ Fresh" color="bg-blue-50" textColor="text-blue-700" />
              <CategoryCard name="Frozen" items="110+ Items" color="bg-indigo-50" textColor="text-indigo-700" />
              <CategoryCard name="Beverages" items="65+ Items" color="bg-cyan-50" textColor="text-cyan-700" />
              <CategoryCard name="Household" items="200+ Items" color="bg-slate-100" textColor="text-slate-700" />
            </div>
          </section>
        </main>
      </div>
  );
}

function CategoryCard({ name, items, color, textColor }) {
  return (
      <div className={`${color} p-8 rounded-[2rem] border border-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
        <h3 className={`text-2xl font-black ${textColor}`}>{name}</h3>
        <p className={`mt-1 font-medium opacity-70 ${textColor}`}>{items}</p>
        <div className="mt-8 flex justify-end">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span className={textColor}>&rarr;</span>
          </div>
        </div>
      </div>
  );
}