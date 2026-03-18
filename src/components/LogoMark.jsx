export default function LogoMark({ className = "" }) {
  return (
    <div className={`inline-flex items-center relative ${className}`}>
      <img 
        src="/logo.png" 
        alt="JDK Technologies LLC" 
        style={{ 
          maskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)', 
          WebkitMaskImage: 'radial-gradient(circle at center, black 45%, transparent 75%)' 
        }}
        className="h-16 sm:h-20 w-auto object-contain mix-blend-screen scale-125 brightness-[1.15] contrast-[1.1] drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 group-hover:drop-shadow-[0_0_30px_rgba(213,0,249,0.6)]"
      />
    </div>
  );
}