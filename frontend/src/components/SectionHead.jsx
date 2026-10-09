import "./SectionHead.css";

/**
 * Consistent section opener: index rail, eyebrow, title, optional lede.
 */
export function SectionHead({ index, eyebrow, title, lede, align = "left", children }) {
  return (
    <header className={`section-head section-head--${align}`}>
      <div className="section-head-rail">
        <span className="section-head-index">{index}</span>
        <span className="section-head-line" aria-hidden="true" />
      </div>

      <div className="section-head-body">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="display h2 section-head-title">{title}</h2>
        {lede && <p className="lead section-head-lede">{lede}</p>}
        {children}
      </div>
    </header>
  );
}

export default SectionHead;
