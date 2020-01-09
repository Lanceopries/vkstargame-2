import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";
import HorizontalScroll from "@vkontakte/vkui/dist/components/HorizontalScroll/HorizontalScroll";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Icon24User from "@vkontakte/icons/dist/24/user";
import Gallery from "@vkontakte/vkui/dist/components/Gallery/Gallery";

//Images
import battleCommander from "../img/cards/card_battlefront_commander.jpg";
import book from "../img/cards/card_book.jpg";
import cloneWars from "../img/cards/card_tiktoe_clone_wars.jpg";
import galacticWar from "../img/cards/card_tiktoe_galactic_war.jpg";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Star Wars Galaxy v1.0</PanelHeader>
    {fetchedUser && (
      <Group title="Диалог">
        <Cell>
          Приветствую, {`${fetchedUser.first_name} ${fetchedUser.last_name}`},
          на первой галактической платформе Star Wars Galaxy
        </Cell>
      </Group>
    )}

    <Group>
      <Gallery slideWidth="250px" align="left" style={{ height: 400 }}>
        <div
          style={{
            backgroundImage: `url(${battleCommander})`
          }}
        >
          <Div>
            <Button
              size="xl"
              level="overlay_secondary"
            >
              Battlefront Commander (скоро)
            </Button>
          </Div>
        </div>
        <div
          style={{
            backgroundImage: `url(${cloneWars})`
          }}
        >
        <Div>
            <Button
              size="xl"
              level="overlay_secondary"
              onClick={go}
              data-to="tiktoeCloneWars"
            >
              Звездные Нолики - Войны Клонов
            </Button>
          </Div>
        </div>
        <div
          style={{
            backgroundImage: `url(${galacticWar})`
          }}
        ><Div>
            <Button
              size="xl"
              level="overlay_secondary"
              onClick={go}
              data-to="tiktoe"
            >
              Звездные Нолики - Гражданская Война
            </Button>
            </Div>
        </div>

        <div
          style={{
            backgroundImage: `url(${book})`
          }}
        >
        <Div>
            <Button
              size="xl"
              level="overlay_secondary"
            >
              Энциклопедия (скоро)
            </Button>
            </Div>
        </div>
      </Gallery>
    </Group>

    <Group title="Навигация">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="sokol">
          Тысячелетний сокол
        </Button>
      </Div>
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="tieF">
          TIE Fighter
        </Button>
      </Div>
    </Group>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string
    })
  })
};

export default Home;
