import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface UserInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  disabled: boolean;
}

const UserInput = ({ value, onChange, onSubmit, disabled }: UserInputProps) => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="text"
        placeholder="Github Username"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
      />

      <Button type="button" onClick={onSubmit} disabled={disabled}>
        Search
      </Button>
    </div>
  );
};

export default UserInput;
