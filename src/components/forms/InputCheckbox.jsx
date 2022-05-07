import CheckIcon from '../icons/CheckIcon';
import styles from './InputCheckbox.module.css';

const InputCheckbox = ({ className, ...props }) => {
	const classNameEnrich = className || '';
	const label = `${styles.label} ${classNameEnrich}`;

	return (
		<label className={label} htmlFor=''>
			<input {...props} className={styles.input} type='checkbox' />
			<CheckIcon className={styles.check} />
		</label>
	);
};

export default InputCheckbox;
