import SearchIcon from '../icons/SearchIcon';
import styles from './InputSearch.module.css';
const InputSearch = ({ className, ...props }) => {
	const classNameEnrich = className || '';
	const wrapper = `${styles.wrapper} ${classNameEnrich}`;
	return (
		<div className={wrapper}>
			<SearchIcon className={styles.icon} />
			<input {...props} className={styles.input} type='text' />
		</div>
	);
};

export default InputSearch;
