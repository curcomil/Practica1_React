import KoderCArd from './components/KoderCard.jsx'



function App() {

  return (
    <>
      <section className="primera">

        <div className="cosas">
          <div>
            <h1>Vite</h1>
            <h1>Next Generation</h1>
            <h1>Frontend Tooling</h1>
            <p>Get ready for a development environment that can finally catch up with you.</p>
            <button className="boton">Get started</button>
            <button className="boton">Why Vite?</button>
            <button className="boton">Github</button>
            <button className="boton">ViteConf23</button>
          </div>
        </div>
        <div className="logo_container">
          <img className="logo" src="https://vitejs.dev/logo-with-shadow.png" alt="" />
        </div>
      </section>
      <div className='abajo'>
        <section className="segunda">
        <KoderCArd emoji="💡" name="Instant Server Start" city="On demand file serving over native ESM, no bundling required!"></KoderCArd>
        <KoderCArd emoji="⚡" name="Lightning Fast HMR" city="Hot Module Replacement (HMR) that stays fast regardless of app size."></KoderCArd>
        <KoderCArd emoji="🛠️" name="Rich Features" city="Out-of-the-box support for TypeScript, JSX, CSS and more."></KoderCArd>
        </section>
        <section className='tercera'>

          <KoderCArd emoji="📦" name="Optimized Build" city="Pre-configured Rollup build with multi-page and library mode support."></KoderCArd>
          <KoderCArd emoji="🔩" name="Universal Plugins" city="Rollup-superset plugin interface shared between dev and build."></KoderCArd>
          <KoderCArd emoji="🔑" name="Fully Typed APIs" city="Flexible programmatic APIs with full TypeScript typing."></KoderCArd>
        </section>
      </div>
    </>
  )
}

export default App
