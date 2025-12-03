import { useState } from "react";

const useToggle = () => {
    const [value, setValue] = useState<boolean>(false);

    return {
		value,
		setValue,
	};

};

export default useToggle;
