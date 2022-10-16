
'use strict';

const e = React.createElement;

// const Title = () => {
//   return <h1>Hello World</h1>
// };
function App () {

  return e('section', { className: 'main__section'},
            e('h2', { className: 'main__title'}, 'React Template Literals'),
            e("pre", { className: 'pre' }, e('code', { className: 'code language-javascript'}, 'function ReactFunc() {\nreturn (\n<div class="output">\n<p class "p__note">\nBy default, React JSX Syntax don\'t require Template literals\n since the point is to return DOM element\n</p>\n</div>\n)')),
            e('p', { className: 'output'}, 'output: \"By default, React JSX Syntax don\'t require Template literals since the point is to return DOM element\"'));
  

};

// function LikeButton(props) {
//     const [liked,setLiked] = React.useState(false)

//     if (liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => setLiked(true) },
//       'Like'
//     );
// }

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(App));