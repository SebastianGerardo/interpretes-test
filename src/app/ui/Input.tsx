export const Input = (props: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) => {
  return (
    <label htmlFor={props.name} className="flex flex-col gap-2">
      <span className="text-sm font-medium">{props.label}</span>
      <input className="border border-gray-300 rounded-md p-2" {...props} />
    </label>
  );
};
