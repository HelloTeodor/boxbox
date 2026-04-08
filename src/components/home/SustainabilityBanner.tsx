export function SustainabilityBanner() {
  return (
    <section className="bg-white pt-1 pb-6">
      <div className="w-full bg-[#f7f3ee] h-20 md:h-24 relative overflow-hidden">
        {/* LEFT IMAGE */}
        <img
          src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775676668/Gemini_Generated_Image_s9fpwfs9fpwfs9fp_Background_Removed_uvtlsz.png"
          alt="left decoration"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-28 md:w-36 lg:w-40 opacity-80"
        />

        {/* RIGHT IMAGE */}
        <img
          src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775676681/Gemini_Generated_Image_mmry5smmry5smmry_Background_Removed_ft7c0x.png"
          alt="right decoration"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-28 md:w-36 lg:w-40 opacity-80"
        />

        {/* CONTENT */}
        <div className="max-w-5xl mx-auto h-full flex items-center justify-center px-10">
          <div className="flex items-center justify-between w-full text-gray-700 text-[11px] md:text-xs tracking-wide">
            {/* Item 1 */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775678920/eco-friendly_uwzdgv.png"
                alt="eco"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
              <span>ECO-FRIENDLY MATERIALS</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775678955/heart_kpbw4s.png"
                alt="handmade"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
              <span>HANDMADE WITH LOVE</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775678945/gift_wrwcpz.png"
                alt="personalized"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
              <span>PERSONALIZED JUST FOR YOU</span>
            </div>

            {/* Item 4 */}
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775678935/delivery-truck_a8h1mr.png"
                alt="shipping"
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
              />
              <span>FAST & RELIABLE SHIPPING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
