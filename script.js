// Wrap every letter in a span, animation text
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



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