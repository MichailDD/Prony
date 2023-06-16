import React, { useState } from "react";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import ContainerClient from "../ContainerClient/ContainerClient";
import InputFormContainer from '../../UI/Forms/InputFormContainer/InputFormContainer';
import ButtonWrapperForm from '../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm';
import ClearBtn from '../../UI/Buttons/ClearBtn/ClearBtn';
import Button from '../../UI/Buttons/Button';
import { delWs } from "../../../store";
import './DeleteWorkspace.scss';

const DeleteWorkspace = () => {
	const [state, setState] = useState(delWs);
	const [nameValue, setNameValue] = useState('');

	return (
		<>
			<BigTitleClient>
				{state.title}
			</BigTitleClient>

			<ContainerClient header={state.subtitle}>
				<InputFormContainer
					name={state.name.title}
					title={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setNameValue={setNameValue}
				/>

				<ButtonWrapperForm client={true}>
					<ClearBtn
						blue={true}
						title='Cancel' />
					<Button color='red'>
						Delete
					</Button>
				</ButtonWrapperForm>
			</ContainerClient>
		</>
	)
}

export default DeleteWorkspace;