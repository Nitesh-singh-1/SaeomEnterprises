"use client";
import { useRouter } from "next/navigation";
export default function AdminLoginPage() {
    const router = useRouter();
    const handlesignin = () => {
        console.log('Page.tsx is calling');
        router.push('/admin/categories');
    }

    return (
        <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* LEFT: IMAGE PANEL */}
            <div
                className="hidden lg:flex relative bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/adminL3.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

                {/* BRAND CONTENT */}
                <div className="relative z-10 p-10 flex flex-col justify-end text-white">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                            🏢
                        </div>
                        <span className="text-lg font-bold">PrefabStructures</span>
                    </div>

                    <p className="max-w-md text-lg leading-relaxed text-white/90">
                        “Streamlining the future of modular construction. Efficient,
                        durable, and ready for deployment.”
                    </p>
                </div>
            </div>

            {/* RIGHT: LOGIN FORM */}
            <div className="flex items-center justify-center px-6">
                <div className="w-full max-w-md">

                    <h1 className="text-3xl font-bold text-gray-900">
                        Admin Portal
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Please sign in to manage inventory and orders.
                    </p>

                    <form className="mt-10 space-y-6">

                        {/* EMAIL */}
                        <div>
                            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="admin@company.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="block text-xs font-bold text-gray-700 uppercase">
                                    Password
                                </label>
                                <a
                                    href="#"
                                    className="text-sm text-blue-600 hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="button"
                            onClick={handlesignin}
                            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
                        >
                            Sign In →
                        </button>
                    </form>

                    {/* SUPPORT */}
                    <p className="mt-8 text-sm text-gray-500 text-center">
                        Need help accessing your account?{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                            Contact Support
                        </a>
                    </p>

                    {/* FOOTER */}
                    <p className="mt-16 text-xs text-gray-400 text-center">
                        © 2024 PREFABSTRUCTURES INC. · SYSTEM V2.4
                    </p>
                </div>
            </div>
        </main>
    );
}
