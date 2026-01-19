export default function App() {
  return (
    <div className="app">
      <div className="animated-background"></div>
      <div className="particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`
          }}></div>
        ))}
      </div>
      <div className="content">
        <h1 className="animated-title">Cool Animation</h1>
        <div className="animated-box"></div>
      </div>
    </div>
  )
}