import React, { useState } from "react";
import BigTitleClient from "../../../UI/BigTitleClient/BigTitleClient";
import './ListPaymentClient.scss';
import plusIcon from '../../../../assets/icons/plus.svg';
import Button from "../../../UI/Buttons/Button";
import RadioForm from "../../../UI/Forms/RadioForm/RadioForm";

const ListPaymentClient = ({ state, setState }) => {
	const [checked, setChecked] = useState(state.cardList[0].value);
	// const [passValue, setPassValue] = useState('');
	// const [emailValue, setEmailValue] = useState('');



	function cardNumHandler(num) {
		num = String(num);
		let arrNum = num.split('');

		for (let i = 4; i <= arrNum.length; i += 5) {
			arrNum.splice(i, 0, ' ');
		}

		let resultArr = arrNum.join('').trim().split(' ');

		[resultArr[0], resultArr[1], resultArr[2]] = ['XXXX', 'XXXX', 'XXXX'];

		return resultArr;
	}

	return (
		<>
			<BigTitleClient>{state.title}</BigTitleClient>

			<div className="payment-list">
				{state.cardList.map(el => (
					<RadioForm
						key={el.id}
						title={el.title}
						name={state.title}
						value={el.value}
						payment={cardNumHandler(el.cardNum)}
						checked={checked}
						setChecked={setChecked}
					/>
				))}
			</div>

			<Button
				url='add'
				style={{
				maxWidth: '298px',
				width: '100%',
				margin: '0 auto'
			}}>
				<img src={plusIcon} alt="plus" className="payment-list__btn-plus-icon" />
				{state.titleAddBtn}
			</Button>
		</>
	)
}

export default ListPaymentClient;