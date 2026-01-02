"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0e1117] text-gray-400">
      
      {/* MAIN FOOTER */}
      <div className="max-w-[1280px] mx-auto px-4 py-20 grid md:grid-cols-3 gap-16">
        
        {/* COMPANY INFO */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
              🏗
            </div>
            <h3 className="text-white font-bold text-lg">
             Saeom Enterprises
            </h3>
          </div>

          <p className="text-sm leading-relaxed max-w-sm">
            We are leaders in modular construction, providing robust space
            solutions across the region since 2005. Our mission is to simplify
            construction with high-quality, portable, and sustainable
            structures.
          </p>

          <div className="flex gap-4 mt-6">
            {["f", "x", "in"].map((icon) => (
              <div
                key={icon}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li>Products Catalog</li>
            <li>Request a Quote</li>
            <li>Technical Specifications</li>
            <li>Sustainability Policy</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li>📍 123 Industrial Park Drive, Sector 45</li>
            <li>📞 +1 (555) 123-4567</li>
            <li>✉ sales@saiomcabins.co</li>
            <li>⏰ Mon – Fri: 8:00 AM – 6:00 PM</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2024 Saeom Enterprises All rights reserved.</p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
