


const HeroTitle = () => {
  return (
    <h1 className="text-5xl font-bold leading-tight text-gray-900">
      Where{' '}
      {/* product empathy */}
      <span className="relative cursor-default group transition-all duration-300 hover:text-purple-500">
        <span className="invisible group-hover:visible absolute -left-6 opacity-50 font-mono text-sm">&lt;design&gt;</span>
        product empathy
        <span className="invisible group-hover:visible absolute -right-8 opacity-50 font-mono text-sm">&lt;/&gt;</span>
      </span>
      {' '}meets{' '}
      {/* pixel-perfect code */}
      <span className="relative cursor-default group transition-all duration-300 hover:text-emerald-500">
        <span className="invisible group-hover:visible absolute -left-6 opacity-50 font-mono text-sm">&lt;code&gt;</span>
        <span className="group-hover:font-mono transition-all">pixel-perfect code</span>
        <span className="invisible group-hover:visible absolute -right-8 opacity-50 font-mono text-sm">&lt;/&gt;</span>
      </span>
      .
    </h1>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeroTitle />);