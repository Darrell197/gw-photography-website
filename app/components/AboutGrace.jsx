export default function AboutGrace() {
  return (
    <section
      id="about"
      className="bg-black text-white py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <div className="max-w-md mx-auto lg:max-w-none">
            <img
              src="/images/grace.JPeg"
              alt="Grace Westray"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* CONTENT */}

          <div className="max-w-xl">

            <p className="uppercase tracking-[8px] text-[#D6C2A1] text-sm mb-6">
              About Grace
            </p>

            <h2 className="text-5xl md:text-6xl font-light mb-4">
              Grace Westray
            </h2>

            <p className="text-[#D6C2A1] text-lg uppercase tracking-[3px] mb-10">
              Manchester Wedding & Editorial Photographer
            </p>

            <div className="w-20 h-[2px] bg-[#D6C2A1] mb-10"></div>

            <p className="text-gray-300 text-lg leading-9 mb-8">
              Grace Westray is a Manchester-based photographer
              specialising in luxury weddings, events and lifestyle
              imagery.
            </p>

            <p className="text-gray-300 text-lg leading-9 mb-8">
              With an editorial eye and a passion for authentic
              storytelling, Grace captures meaningful moments with
              elegance, emotion and attention to detail.
            </p>

            <p className="text-gray-300 text-lg leading-9 mb-10">
              Her work is designed to feel timeless — creating
              photographs that preserve not only how a moment looked,
              but how it felt.
            </p>

            <button className="border border-[#D6C2A1] text-[#D6C2A1] px-8 py-4 uppercase tracking-[4px] hover:bg-[#D6C2A1] hover:text-black transition-all duration-300">
              Enquire Now
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}