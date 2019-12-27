import React from 'react';
import PropTypes from 'prop-types';
import { platform, IOS } from '@vkontakte/vkui';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import HeaderButton from '@vkontakte/vkui/dist/components/HeaderButton/HeaderButton';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Cell from "@vkontakte/vkui/dist/components/Cell/Cell";

import sokol from '../../img/sokol_orig.png';
import '../Styles/Sokol.css';

const osName = platform();

const Sokol = props => (
	<Panel id={props.id}>
		<PanelHeader
			left={<HeaderButton onClick={props.go} data-to="home">
				{osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
			</HeaderButton>}
		>
        Тысячелетний сокол 
		</PanelHeader>
		<img className="Sokol" src={sokol} alt="Тысячелетний сокол"/>
		<Group title="Тысячелетний сокол">
		  <Cell multiline>Вымышленный космический корабль во вселенной «Звёздных войн»,
		  	пилотировавшийся Ханом Соло и его помощником Чубаккой. Изначально капитаном «Сокола»
			считался Лэндо Калриссиан, но из-за проигрыша в честной игре, как утверждал Хан Соло в V эпизоде, он стал обладателем корабля и звания капитана.
			Фигурирует в фильме про Хана Соло, а также в IV, V, VI, VII, VIII и IX эпизодах киносаги «Звёздные войны» (также на несколько мгновений появляется в III эпизоде), кроме того присутствует в телефильме «Звездные войны:
			праздничный спецвыпуск», а также во многих комиксах, журналах и книгах о вселенной «Звёздных войн».</Cell>
	  	</Group>
	</Panel>
);

Sokol.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Sokol;
