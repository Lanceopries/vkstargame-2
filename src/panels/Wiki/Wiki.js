import React from "react";
import PropTypes from "prop-types";
import { platform, IOS } from "@vkontakte/vkui";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import HeaderButton from "@vkontakte/vkui/dist/components/HeaderButton/HeaderButton";
import Icon28ChevronBack from "@vkontakte/icons/dist/28/chevron_back";
import Icon24Back from "@vkontakte/icons/dist/24/back";

import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Gallery from "@vkontakte/vkui/dist/components/Gallery/Gallery";

const osName = platform();

const Wiki = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <HeaderButton onClick={props.go} data-to="home">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </HeaderButton>
      }
    >
      Энциклопедия
    </PanelHeader>

    <Group title="Галактическая Империя">
      <Gallery slideWidth="250px" align="left">
        <div style={{}}>
          <Div>
            <Button
              size="xl"
              level="overlay_secondary"
              onClick={props.go}
              data-to="tieF"
            >
              TIE Fighter
            </Button>
          </Div>
        </div>
      </Gallery>
    </Group>
    <Group title="Новая Республика">
      <Gallery slideWidth="250px" align="left">
        <div style={{}}>
          <Div>
            <Button
              size="xl"
              level="overlay_secondary"
              onClick={props.go}
              data-to="sokol"
            >
              Тысячелетний сокол
            </Button>
          </Div>
        </div>
      </Gallery>
    </Group>

    <Group title="Старая Республика">
    <Gallery slideWidth="250px" align="left">
      <div style={{}}>
        <Div>
          Скоро
        </Div>
      </div>
    </Gallery>
  </Group>
  <Group title="Империя Ситхов">
  <Gallery slideWidth="250px" align="left">
    <div style={{}}>
      <Div>
        Скоро
      </Div>
    </div>
  </Gallery>
</Group>
<Group title="Республика">
<Gallery slideWidth="250px" align="left">
  <div style={{}}>
    <Div>
      Скоро
    </Div>
  </div>
</Gallery>
</Group>
<Group title="Конфедерация Независимых Систем">
<Gallery slideWidth="250px" align="left">
  <div style={{}}>
    <Div>
      Скоро
    </Div>
  </div>
</Gallery>
</Group>
  </Panel>
);

Wiki.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default Wiki;
