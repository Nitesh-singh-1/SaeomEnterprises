"use client";

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <span className="text-blue-600 text-sm font-bold uppercase tracking-widest">
            Why Choose Prefab Cabins Co.
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
            Industrial Excellence in Every Module
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
            We combine advanced engineering with high-quality materials to
            deliver structures that stand the test of time and harsh
            environments.
          </p>

          <div className="mt-10 space-y-8">
            {/* ITEM 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-gray-900">
                  ISO Certified Manufacturing
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Our production facilities adhere to the strictest international
                  standards for quality and safety control.
                </p>
              </div>
            </div>

            {/* ITEM 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                ★
              </div>
              <div>
                <h4 className="font-bold text-gray-900">
                  20+ Years of Excellence
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Two decades of experience delivering modular solutions for
                  construction and government projects.
                </p>
              </div>
            </div>

            {/* ITEM 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                ⚡
              </div>
              <div>
                <h4 className="font-bold text-gray-900">
                  Rapid Deployment
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Our logistics network ensures delivery and installation in
                  record time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/why-us.jpg"
              alt="Industrial Structure"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING STATS */}
          <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl shadow-lg p-6 flex justify-between">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">
                Projects Completed
              </p>
              <p className="text-3xl font-bold text-gray-900">1,500+</p>
            </div>

            <div className="w-px bg-gray-200" />

            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">
                Client Satisfaction
              </p>
              <p className="text-3xl font-bold text-gray-900">98%</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
