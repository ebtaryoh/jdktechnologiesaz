export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-900">
      {children}
    </span>
  );
}