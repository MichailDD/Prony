import React, { useState } from "react";
import BigTitleClient from "../../UI/BigTitleClient/BigTitleClient";
import ContainerClient from "../ContainerClient/ContainerClient";
import InputFormContainer from '../../UI/Forms/InputFormContainer/InputFormContainer';
import ButtonWrapperForm from '../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm';
import ClearBtn from '../../UI/Buttons/ClearBtn/ClearBtn';
import Button from '../../UI/Buttons/Button';
import { profileCl } from "../../../store";
import './ProfileClient.scss';

const ProfileClient = () => {
	const [state, setState] = useState(profileCl);
	const [nameValue, setNameValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [emailValue, setEmailValue] = useState('');

	return (
		<>
			<BigTitleClient>
				{state.title}
			</BigTitleClient>

			<ContainerClient style={{maxWidth: '444px'}}>
				<InputFormContainer
					name={state.name.title}
					title={state.name.title}
					ph={state.name.ph}
					value={nameValue}
					setNameValue={setNameValue}
				/>
				<InputFormContainer
					name={state.lastName.title}
					title={state.lastName.title}
					ph={state.lastName.ph}
					value={passValue}
					setNameValue={setPassValue}
				/>
				<InputFormContainer
					style={{padding: 0}}
					name={state.email.title}
					title={state.email.title}
					ph={state.email.ph}
					value={emailValue}
					setNameValue={setEmailValue}
				/>

				<ButtonWrapperForm client={true}>
					<ClearBtn
						blue={true}
						title='Cancel' />
					<Button>
						Delete
					</Button>
				</ButtonWrapperForm>
			</ContainerClient>
		</>
	)
}

export default ProfileClient;