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

import tieF from "../../img/tie_orig.png";
import "../Styles/Tie.css";

const osName = platform();

const TieF = props => (
  <Panel id={props.id}>
    <PanelHeader
      left={
        <HeaderButton onClick={props.go} data-to="wiki">
          {osName === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
        </HeaderButton>
      }
    >
      TIE-Истребитель
    </PanelHeader>
    <img className="TieF" src={tieF} alt="TIE-Истребитель" />
    <Group title="TIE-Истребитель">
      <Cell multiline>
        TIE-Истребитель - Сдвоенные Ионные Двигатели, сокр. СИД-Истребитель или
        разговорно «СИДка», фантастический космический истребитель во вселенной
        «Звёздных войн». Работающие на спаренных ионных двигателях (англ. Twin
        Ion Engine, отсюда и аббревиатура TIE), TIE Fighter’ы изображены как
        быстрые, но хрупкие истребители, производимые вымышленной корпорацией
        Sienar Fleet Systems для Галактической Империи. TIE Fighter’ы и другие
        TIE-корабли появляются во всех фильмах оригинальной трилогии «Звёздных
        войн»: «Новая надежда» (1977), «Империя наносит ответный удар» (1980) и
        «Возвращение джедая» (1983), а также во многих произведениях по
        расширенной вселенной Star Wars. Несколько вариантов моделей и игрушек
        TIE Fighter’ов, а также компьютерных игр-симуляторов данного истребителя
        были созданы компаниями, производящими сопутствующие товары для франшизы
        «Звёздных войн».
      </Cell>
    </Group>
  </Panel>
);

TieF.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired
};

export default TieF;
