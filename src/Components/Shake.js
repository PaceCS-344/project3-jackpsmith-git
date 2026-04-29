export const Shake = ({ children, href, className= "" }) => {
    if (href) {
        return(
            <a href={href} target="_blank" rel="noopener noreffer">
                <div className="shake">
                    {children}
                </div>
            </a>
        );
    }

    return (
        <div className="shakenopoint">
            {children}
        </div>
    );
}