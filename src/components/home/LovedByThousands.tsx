import { Star, Heart } from 'lucide-react';

const reviews = [
  {
    quote: 'The perfect gift! Beautifully packaged and so thoughtfully curated.',
    author: 'Emily R.',
  },
  {
    quote: 'You can feel the love in every detail. Highly recommend!',
    author: 'James T.',
  },
  {
    quote: 'My go-to for meaningful, eco-friendly gifts. Always a hit!',
    author: 'Sophia L.',
  },
];

export function LovedByThousands() {
  return (
    <section className="relative w-full bg-[#f7f3ee] py-20 overflow-hidden">
      {/* LEFT DECORATION */}
      <img
        src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775676668/Gemini_Generated_Image_s9fpwfs9fpwfs9fp_Background_Removed_uvtlsz.png"
        alt=""
        className="pointer-events-none select-none absolute left-0 top-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-72 opacity-80"
      />

      {/* RIGHT DECORATION */}
      <img
        src="https://res.cloudinary.com/dhb4gdwh0/image/upload/v1775676681/Gemini_Generated_Image_mmry5smmry5smmry_Background_Removed_ft7c0x.png"
        alt=""
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 lg:w-72 opacity-80"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#caa86a]" />
            <h2 className="serif text-[#2f4f4f] text-[13px] md:text-sm tracking-[0.35em] font-semibold">
              LOVED BY THOUSANDS
            </h2>
            <div className="h-px w-12 bg-[#caa86a]" />
          </div>
          <div className="mt-3 flex justify-center">
            <Heart size={14} className="text-[#caa86a] fill-[#caa86a]" />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 text-center"
            >
              {/* STARS */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={18}
                    className="text-[#e2b83a] fill-[#e2b83a]"
                  />
                ))}
              </div>

              {/* QUOTE */}
              <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                &ldquo;{r.quote}&rdquo;
              </p>

              {/* AUTHOR */}
              <p className="text-gray-700 text-sm italic">&ndash; {r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
