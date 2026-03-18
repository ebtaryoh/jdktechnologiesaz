export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-20 bg-jdk-black ${className}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {(eyebrow || title || subtitle) && (
          <header className="mb-10 sm:mb-12">
            {eyebrow && (
              <p className="mb-3 inline-flex items-center rounded-full border border-gray-800 bg-jdk-dark/70 px-4 py-1.5 text-xs font-extrabold tracking-wide text-gray-300 shadow-soft">
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-jdk-cyan shadow-[0_0_8px_#00e5ff]" />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-400 sm:text-lg">
                {subtitle}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}