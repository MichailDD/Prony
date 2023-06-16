import React, { useState } from "react";
import { paymentCl } from "../../../store";
import './PaymentClient.scss';
import { Route, Routes } from "react-router-dom";
import ListPaymentClient from "./ListPaymentClient/ListPaymentClient";
import AddPaymentClient from "./AddPaymentClient/AddPaymentClient";

const PaymentClient = () => {
	const [state, setState] = useState(paymentCl);
	const [nameValue, setNameValue] = useState('');
	const [passValue, setPassValue] = useState('');
	const [emailValue, setEmailValue] = useState('');

	return (
		<Routes>
			<Route path="/" element={<ListPaymentClient
				state={state} setState={setState}
			/>} />
			<Route path="/add" element={<AddPaymentClient
				state={state} setState={setState}
			/>} />
			{/* <BigTitleClient>
				{state.title}
			</BigTitleClient> */}


			{/* <ContainerClient style={{maxWidth: '444px'}}>
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
			</ContainerClient> */}
		</Routes>
	)
}

export default PaymentClient;