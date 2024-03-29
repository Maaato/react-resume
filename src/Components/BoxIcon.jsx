export const BoxIcon = ({ label, url, className }) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="social__link" title={label}>
        <i className={`bx ${className} social__icon`}></i>
    </a>
);