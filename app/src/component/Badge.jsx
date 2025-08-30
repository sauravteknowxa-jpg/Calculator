export default function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
  };

  return (
    <span className={`inline-block text-sm font-medium px-3 py-1 rounded-full ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
