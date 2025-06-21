export const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  return (
    <div className="group">
      <label htmlFor={props.name} className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors duration-200">
        {props.label}
      </label>
      <div className="relative">
        <input 
          className="w-full px-4 py-3 bg-white/50 border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:bg-white transition-all duration-300 outline-none shadow-sm hover:shadow-md focus:shadow-lg" 
          {...props} 
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};
