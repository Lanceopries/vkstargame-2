import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Avatar from "@vkontakte/vkui/dist/components/Avatar/Avatar";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Star Wars Galaxy v1.0</PanelHeader>
    {fetchedUser && (
    <Group title="Диалог">
      <Cell>
        Приветствую, {`${fetchedUser.first_name} ${fetchedUser.last_name}`}, в
        игре Star Wars Galaxy
      </Cell>
    </Group>
   )}

    <Group title="Навигация">
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="tiktoe">
          Играть в Звездные Нолики - Гражданская Война
        </Button>
      </Div>
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="sokol">
          Тысячелетний сокол и информация о нём
        </Button>
      </Div>
      <Div>
        <Button size="xl" level="2" onClick={go} data-to="tieF">
          TIE Fighter и информация о нём
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
