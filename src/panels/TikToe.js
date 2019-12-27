import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { platform, IOS, Group, Cell } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

import Board from "./TikToe/TikToeCommon";
import "./Styles/TikToe.css";

import sokol from "../img/xwing.png";
import tie from "../img/tie.png";

const osName = platform();

const TikToe = props => {
  const [state, setState] = useState({
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  });

  function handleClick(i) {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares, state.xIsNext) || squares[i]) {
      return;
    }
    squares[i] = state.xIsNext ? sokol : tie;
    setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !state.xIsNext
    });
  }

  function jumpTo(step) {
    setState({
      history: state.history,
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  const history = state.history;
  const current = history[state.stepNumber];
  const winner = calculateWinner(current.squares, state.xIsNext);

  const moves = history.map((step, move) => {
    const desc = move ? "Перейти к ходу #" + move : "Начать сначала";
    return (
      <Div key={move}>
        <Button size="m" onClick={() => jumpTo(move)}>
          {desc}
        </Button>
      </Div>
    );
  });

  let status;
  if (winner) {
    status = "Выиграла " + winner;
  } else {
    status =
      "Следующий ход: " +
      (state.xIsNext ? "Новая Республика" : "Галактическая Империя");
  }

  return (
    <Panel id={props.id}>
      <PanelHeader
        left={
          <HeaderButton onClick={props.go} data-to="home">
            {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
          </HeaderButton>
        }
      >
        Звездные Нолики
      </PanelHeader>

      <Group>
        <Cell>
          <div className="game">
            <div className="game-board">
              <Board squares={current.squares} onClick={i => handleClick(i)} />
            </div>
          </div>
        </Cell>
      </Group>
      <Group>
        <Cell>
          <div className="game">
            <div className="game-board">
              <div className="game-status">{status}</div>
              <Group>{moves}</Group>
            </div>
          </div>
        </Cell>
      </Group>
    </Panel>
  );
};

TikToe.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

function calculateWinner(squares, xIsNext) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return xIsNext ? "Галактическая Империя" : "Новая Республика";
    }
  }
  return null;
}

export default TikToe;
