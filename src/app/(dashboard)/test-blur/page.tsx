'use client';

export default function BlurHeaderExample() {
  return (
    <div className="relative h-screen overflow-y-auto bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-20  bg-white/10 border-b border-white/20 px-4 py-3 flex justify-between items-center backdrop-blur">
        <h1 className="text-lg font-semibold">Header flouté</h1>
        <span className="text-sm opacity-80">Scroll down ↓</span>
      </div>

      {/* Long content */}
      <div className="space-y-4 p-6">
        {Array.from({ length: 30 }).map((_, i) => (
          <p key={i} className="text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada.
          </p>
        ))}
      </div>
    </div>
  );
}
