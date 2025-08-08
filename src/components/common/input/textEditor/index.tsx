import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type propsType = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};
export function CommonTextEditor({ onChange, value, disabled }: propsType) {
  return (
    <ReactQuill
      theme="snow"
      className="h-full w-full"
      value={value}
      onChange={onChange}
      readOnly={disabled}
    />
  );
}
