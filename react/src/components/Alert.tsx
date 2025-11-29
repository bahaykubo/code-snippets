export interface Props {
  children: string;
  onClose: () => void;
}

export default function Alert({ children, onClose }: Props) {

  return(
    <div className="alert alert-primary alert-dismissible fade show">
      <strong>{children}</strong>
      <button type="button" className="btn-close" onClick={onClose}/>
    </div>
  )
}
