// import { useState } from 'react'
import './assets/styles/normalize.css'
import './assets/styles/index.css'

function ReactTl () {
  const RtlTitle = () => <h2>React Template Literals</h2>;
  return (
    <section className="main__section">
      <RtlTitle />
      <pre className='pre'>
        <code className='code'>
        {"const RtlTitle = () => <h2>React Template Literals</h2>;\n\nfunction ReactTemplate () {\n return ( \n   <section className='main__section'>\n     <RtlTitle />\n      <pre className='pre'>\n         <code className='code'>\n         </code>\n       </pre>\n     </section>\n)};"}
        </code>
      </pre>
      <p className="output">output: the current snippet</p>
      <p className="p__note">Note: React don't actually use template literals the way Javascript does. It allows to return HTML content way more easy since you can declare variables inside components and call components into others.</p>
    </section>
  );
};



function App() {
  // const [count, setCount] = useState(0)
  return (
    <div className="App">
      <ReactTl />
   </div>
  )
};


export default App
