'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

const instagramImages = [
  'https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=800',
  'https://images.unsplash.com/photo-1607083206325-caf1edba7a0f?q=80&w=800',
  'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=800',
  'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?q=80&w=800',
];

export function NewsletterBanner() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        toast.success('Welcome to the Giftora family!');
        setEmail('');
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f7f3ee]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT — STAY INSPIRED */}
        <div
          className="relative min-h-[360px] flex items-center justify-center p-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1608181831718-c9ffd8728b10?q=80&w=1400')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/10" />
          <div className="relative max-w-sm w-full text-center">
            <h3 className="serif text-[#2f4f4f] text-[22px] tracking-[0.25em] font-semibold mb-4">
              STAY INSPIRED
            </h3>
            <p className="text-gray-700 text-[14px] leading-relaxed mb-6">
              Sign up for our newsletter for gifting ideas, exclusive offers,
              and behind-the-scenes peeks.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white text-gray-700 placeholder:text-gray-400 px-4 py-3 text-sm rounded-l-sm focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#2f6f73] text-white px-5 text-xs tracking-[0.2em] rounded-r-sm disabled:opacity-60"
              >
                {loading ? '…' : 'SUBSCRIBE'}
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT — FOLLOW ALONG */}
        <div className="bg-[#f7f3ee] flex flex-col items-center justify-center p-10">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-px w-12 bg-[#caa86a]" />
            <h3 className="serif text-[#2f4f4f] text-[13px] md:text-sm tracking-[0.35em] font-semibold">
              FOLLOW ALONG
            </h3>
            <div className="h-px w-12 bg-[#caa86a]" />
          </div>
          <p className="text-gray-500 text-[13px] tracking-[0.2em] mb-6">
            <span className="text-[#caa86a]">&bull;</span> @raduandco{' '}
            <span className="text-[#caa86a]">&bull;</span>
          </p>
          <div className="grid grid-cols-4 gap-3 w-full max-w-xl">
            {instagramImages.map((src, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden rounded-sm"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM TAGLINE */}
      <div className="py-10 text-center">
        <p className="serif text-[#2f4f4f] text-[18px] md:text-[20px] italic">
          Thoughtful gifts. Happy moments. A better planet.
        </p>
        <div className="mt-3 flex items-center justify-center gap-2">
          <div className="h-px w-10 bg-[#caa86a]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#caa86a]" />
          <div className="h-px w-10 bg-[#caa86a]" />
        </div>
      </div>
    </section>
  );
}
