export interface Props {
  children: string;
  onClick: () => void;
  color?: 'primary' | 'secondary';
}

export default function Button({ children, onClick, color = 'primary' }: Props) {
  return (
    <button type="button" className={'btn btn-' + color} onClick={onClick}>
      {children}
    </button>
  );
}
