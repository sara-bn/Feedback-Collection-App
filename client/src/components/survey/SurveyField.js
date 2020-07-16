import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
	// console.log(meta);
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginButtom: '5px' }} />
			<div className="red-text" style={{ marginButtom: '20px' }}>
				{touched && error}
			</div>
		</div>
	);
};
