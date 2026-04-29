export const CenteredRow = ({ children }) => {
    return (
        <div className="row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 15 }}>
            {children}
        </div>
    );
}