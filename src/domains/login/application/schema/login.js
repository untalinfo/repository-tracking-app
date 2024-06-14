import * as yup from 'yup';
import authFields from '../constants/loginFields';
import { EMPTY_FIELD } from '../../../../shared/application/constants/messages/error-messages';

const loginValidation = {
	[authFields.USERNAME]: yup.string().required(EMPTY_FIELD),
	[authFields.PASSWORD]: yup.string().required(EMPTY_FIELD),
};

const loginSchema = yup.object().shape(loginValidation);

export default loginSchema;
