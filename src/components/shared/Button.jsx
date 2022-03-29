export const Button = ({ children, variant = 'primary', type = 'button', isDisabled = false }) => {
  return (
    <button type={type} className={`btn btn-${variant}`} disabled={isDisabled}>
      {children}
    </button>
  );
};
