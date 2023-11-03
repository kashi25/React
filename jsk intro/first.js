// const name = 'bob';
// const hello = (
//   <div>
//     <h1>Hello React {name}</h1>
//   </div>
// );

// ReactDOM.render(hello, document.getElementById("root"));



const name = 'bob';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React {name}</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
