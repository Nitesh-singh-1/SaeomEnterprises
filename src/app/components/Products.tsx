const products = [
    {
        title: "Site Offices",
        price: "$4,500",
        desc: "Climate-controlled workspaces for on-site efficiency.",
    },
    {
        title: "Security Guard Rooms",
        price: "$2,200",
        desc: "Compact, secure cabins with full visibility.",
    },
    {
        title: "Storage Containers",
        price: "$3,100",
        desc: "Heavy-duty steel storage solutions.",
    },
];

export default function Products() {
    return (
        <section className="py-20" id="products">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-3xl font-bold mb-10">Our Product Range</h2>
                <div className="flex justify-between items-end w-full">
                    {/* Left text */}
                    <p className="text-gray-500 text-sm font-medium">
                        Robust, modular solutions tailored for every environment.
                    </p>

                    {/* Right link */}
                    <a
                        href="#"
                        className="text-blue-700 font-bold text-sm hover:underline"
                    >
                        View Full Catalog →
                    </a>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((p) => (
                        <div
                            key={p.title}
                            className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow"
                        >
                            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                            <p className="text-gray-500 mb-4">{p.desc}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">{p.price}</span>
                                <button className="text-primary font-bold">
                                    Send Enquiry
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
