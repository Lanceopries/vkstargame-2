import React from 'react';
import sokol from '../../img/sokol.png';
import tie from '../../img/tie.png';

import '../Styles/Sokol.css';

function Square(props) {
	  return (
		<button 
			className="square"
			onClick={props.onClick}>
			<img className="SokolMini" src={props.value} />
		</button>
	  );
  }
  
class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
			xIsNext: true,
		};
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		if (calculateWinner(squares, this.state.xIsNext) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? sokol : tie;
		this.setState({
			squares: squares,
			xIsNext: !this.state.xIsNext,
		});
	}

renderSquare(i) {
	return <Square 
		value={this.state.squares[i]}
		onClick={() => this.handleClick(i)} />;
}

render() {
	const winner = calculateWinner(this.state.squares, this.state.xIsNext);
	let status;
	if (winner) {
		status = 'Выиграла ' + winner;
	} else {
		status = 'Следующий ход: ' + (this.state.xIsNext ? 'Новая Республика' : 'Галактическая Империя');
	}

	return (
	<div>
		<div className="status">{status}</div>
		<div className="board-row">
		{this.renderSquare(0)}
		{this.renderSquare(1)}
		{this.renderSquare(2)}
		</div>
		<div className="board-row">
		{this.renderSquare(3)}
		{this.renderSquare(4)}
		{this.renderSquare(5)}
		</div>
		<div className="board-row">
		{this.renderSquare(6)}
		{this.renderSquare(7)}
		{this.renderSquare(8)}
		</div>
	</div>
	);
}
}

function calculateWinner(squares, xIsNext) {
	const lines = [
	  [0, 1, 2],
	  [3, 4, 5],
	  [6, 7, 8],
	  [0, 3, 6],
	  [1, 4, 7],
	  [2, 5, 8],
	  [0, 4, 8],
	  [2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
	  const [a, b, c] = lines[i];
	  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
		return xIsNext ? 'Галактическая Империя' : 'Новая Республика';
	  }
	}
	return null;
  }

export default Board;

