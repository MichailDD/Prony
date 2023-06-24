import React, { useState } from "react";
import './AddPaymentClient.scss';
import BigTitleClient from "../../../UI/BigTitleClient/BigTitleClient";
import ContainerClient from "../../ContainerClient/ContainerClient";
import InputFormContainer from "../../../UI/Forms/InputFormContainer/InputFormContainer";
import ButtonWrapperForm from "../../../UI/Buttons/ButtonWrapperForm/ButtonWrapperForm";
import ClearBtn from "../../../UI/Buttons/ClearBtn/ClearBtn";
import Button from "../../../UI/Buttons/Button";
import { v1 } from "uuid";

const AddPaymentClient = ({ state, setState }) => {
	const [payFormState, setPayFormState] = useState(state.form);
	const [alias, setAlias] = useState('');
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [card1, setCard1] = useState('');
	const [card2, setCard2] = useState('');
	const [card3, setCard3] = useState('');
	const [card4, setCard4] = useState('');
	const [cvv, setCvv] = useState('');
	const [date, setDate] = useState('');

	const onSubmitClickHandler = () => {
		let numberCard = card1 + card2 + card3 + card4;

		let result = {
			id: v1(),
			title: alias,
			value: alias,
			checked: false,
			cardNum: numberCard
		}

		const newState = { ...state };
		newState.cardList.push(result);

		setState({ ...newState });
	}

	return (
		<>
			<BigTitleClient>
				{payFormState.title}
			</BigTitleClient>

			<ContainerClient style={{ maxWidth: '600px' }}>
				<div className="add-payment">

					<InputFormContainer
						style={{ width: '100%' }}
						name={payFormState.alias.title}
						title={payFormState.alias.title}
						ph={payFormState.alias.ph}
						value={alias}
						setValue={setAlias}
					/>
					<InputFormContainer
						style={{ width: 'calc(50% - 13px)' }}
						name={payFormState.name.title}
						title={payFormState.name.title}
						ph={payFormState.name.ph}
						value={name}
						setValue={setName}
					/>
					<InputFormContainer
						style={{ width: 'calc(50% - 13px)' }}
						name={payFormState.lastName.title}
						title={payFormState.lastName.title}
						ph={payFormState.lastName.ph}
						value={lastName}
						setValue={setLastName}
					/>

					<div className="add-payment__card-form-wrap">
						<p className="input-container__title">
							{payFormState.card.title}
						</p>
						<div className="add-payment__card-form">
							<InputFormContainer
								name={payFormState.card.title}
								type={payFormState.card.type}
								value={card1}
								setValue={setCard1}
							/>

							<InputFormContainer
								name={payFormState.card.title}
								type={payFormState.card.type}
								value={card2}
								setValue={setCard2}
							/>

							<InputFormContainer
								name={payFormState.card.title}
								type={payFormState.card.type}
								value={card3}
								setValue={setCard3}
							/>

							<InputFormContainer
								name={payFormState.card.title}
								type={payFormState.card.type}
								value={card4}
								setValue={setCard4}
							/>
						</div>
					</div>
					<InputFormContainer
						style={{ width: '113px', padding: 0 }}
						name={payFormState.cvv.title}
						title={payFormState.cvv.title}
						ph={payFormState.cvv.ph}
						value={cvv}
						setValue={setCvv}
					/>
					<InputFormContainer
						style={{ width: '137px', padding: 0 }}
						name={payFormState.date.title}
						title={payFormState.date.title}
						ph={payFormState.date.ph}
						value={date}
						setValue={setDate}
					/>

				</div>

				<ButtonWrapperForm client={true}>
					<ClearBtn
						blue={true}
						title='Cancel' />
					<Button url='../' onClick={onSubmitClickHandler}>
						Submit
					</Button>
				</ButtonWrapperForm>
			</ContainerClient>

		</>
	)
}

export default AddPaymentClient;