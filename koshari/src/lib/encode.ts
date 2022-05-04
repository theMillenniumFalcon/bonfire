import { MessageToken, Unitoken } from "../utils/token";


type ArrayConstraints = Unitoken | MessageToken | Unitoken[] | MessageToken[];

export const encodeTokens = (message: Array<ArrayConstraints> | string, options: any): MessageToken[] => {
	const tokens: MessageToken[] = [];

	if (typeof message == 'string') {

	}


	return tokens;
} 