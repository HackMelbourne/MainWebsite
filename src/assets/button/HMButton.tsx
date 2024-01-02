interface Props {
  text: string;
  color: 'primary' | 'secondary' | 'alert' | 'success' | 'neutral';
  style?: 'filled' | 'border' | 'underline';
  span?: boolean;
}

const HMButton = ({ text, color, style, span }: Props) => {
  if (style == null) {
    style = 'filled';
  }

  let key = {
    filled: {
      primary: ['bg-yellow-500'],
      secondary: ['bg-blue-500'],
      alert: ['bg-red-500 '],
      success: ['bg-green-500'],
      neutral: ['bg-neutral-500'],
    },
    border: {
      primary: ['bg-yellow-600/20 border-yellow-500 border'],
      secondary: ['bg-blue-600/20 border-blue-500 border'],
      alert: ['bg-red-600/20 border-red-500 border'],
      success: ['bg-green-600/20 border-green-500 border'],
      neutral: ['bg-neutral-600/20 border-neutral-500 border'],
    },
    underline: {
      primary: ['text-yellow-500 underline'],
      secondary: ['text-blue-500 underline'],
      alert: ['text-red-500 underline'],
      success: ['text-green-500 underline'],
      neutral: ['text-neutral-500 underline'],
    },
  };

  return (
    <div
      className={`flex justify-center px-6 py-3 rounded-md ${key[style][color]} ${
        span ? 'w-full' : 'w-fit'
      } font-semibold`}>
      {text}
    </div>
  );
};

export default HMButton;
