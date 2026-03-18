export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-gray-800 bg-jdk-dark/80 p-6 shadow-soft backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}