import { useState } from "react";

interface Props {
	initial?: boolean
}

const useToggle = ({ initial = false }: Props = {}) => {
	const [value, setValue] = useState<boolean>(initial);

	return {
		value,
		setValue,
	};
};

export default useToggle;
