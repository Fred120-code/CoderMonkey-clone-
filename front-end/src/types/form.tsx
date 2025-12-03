export interface RegisterFormFielsType {
	email: string;
	password: string;
	how_did_hear: string;
}
export interface LoginFormFielsType {
	email: string;
	password: string;
}

export interface FromTypes {
	control: any;
	onSubmit: any;
	errors: any;
	isLoading: boolean;
	register: any;
	handleSubmit: any;
}
