export const Button = ({ children, href, className = "" }) => {
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <button className={`px-4 py-2 rounded-2xl shadow ${className}`}>
          <div style={{padding: 10}}>
          {children}
          </div>
        </button>
      </a>
    );
  }

  return (
    <button className={`px-4 py-2 rounded-2xl shadow ${className}`}>
      {children}
    </button>
  );
};