export default function InputField({
  label,
  id,
  type = "text",
  placeholder,
  Icon,
  rightIcon,
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 mb-1.5 text-start"
      >
        {label} <span className="text-red-500">*</span>
      </label>

      <div className="relative">
        {Icon && (
          <Icon
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        )}

        <input
          id={id}
          type={type}
          placeholder={placeholder}
          required
          className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />

        {rightIcon && (
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            {rightIcon}
          </button>
        )}
      </div>
    </div>
  );
}
