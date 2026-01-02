export default function Hero() {
  return (
    <section
      className="min-h-[600px] flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.6)),url('/images/hero.jpg')",
      }}
    >
      <div className="max-w-3xl text-center px-4 space-y-6">
        <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-xs uppercase">
          Available for Immediate Delivery
        </span>

        <h1 className="text-4xl md:text-6xl font-black">
          Engineered for Durability. <br /> Built for Speed.
        </h1>

        <p className="text-lg text-gray-200">
          Premium prefabricated structures delivered directly to your site.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-primary text-white bg-[#195de6] px-8 py-3 rounded-lg font-bold">
            View Products
          </button>
          <button className="bg-white text-black px-8 py-3 rounded-lg font-bold">
            Send Enquiry
          </button>
        </div>
      </div>
    </section>
  );
}
