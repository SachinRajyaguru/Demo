import validator from 'validator';
import { showDengerMessage } from './functions';
export const isEmail = email => validator.isEmail(email);
export const isEquals = (str, otherStr) => String(str) === String(otherStr);
export const isEmpty = str =>
  typeof str === 'string' ? validator.isEmpty(str) : false;
export const isValidName = str => /^([A-Za-z]+)$/.test(str);
export const isNumeric = str => validator.isNumeric(str);
export const isValidNumber = str => /^\d+$/.test(str);
export const isValidNumberWithDash = str => /[\d-]+$/.test(str);
export const validateCardNumber = card_number => {
  if (card_number.length === 0) {
    showDengerMessage('Please enter card number');
    return false;
  } else {
    const reg_card_number = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
    return reg_card_number.test(card_number);
  }
};
export const validatePhoneNumber = input_str => {
  if (typeof input_str === 'string') {
    if (isEmpty(input_str)) {
      showDengerMessage('Please enter phone number.');
      return false;
    } else if (input_str.length < 10) {
      showDengerMessage('Please enter valid phone number.');
      return false;
    } else if (!isValidNumber(input_str)) {
      showDengerMessage('Please enter valid phone number.');
      return false;
    } else {
      return true;
    }
  } else {
    showDengerMessage('Please enter valid phone number.');
  }
};

// export const validatePasswordNew = (pwdStr, FieldName) => {
//   // Must not be empty
//   if (isEmpty(pwdStr)) {
//     showDengerMessage(`Please enter ${String(FieldName).toLowerCase()}.`);
//     return false;
//   }
//
//   // At least 8 characters
//
//   if (
//     !validator.isStrongPassword(pwdStr, {
//       minLength: 8,
//       minLowercase: 0,
//       minUppercase: 0,
//       minNumbers: 0,
//       minSymbols: 0,
//     })
//   ) {
//     showDengerMessage(`${FieldName} must be 8 characters long.`);
//     return false;
//   }
//
//   // A mixture of both uppercase and lowercase letters
//   if (
//     !validator.isStrongPassword(pwdStr, {
//       minLength: 8,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 0,
//       minSymbols: 0,
//     })
//   ) {
//     showDengerMessage(`${FieldName} must use both uppercase and lower case.`);
//     return false;
//   }
//   // A mixture of letters and numbers
//   if (
//     !validator.isStrongPassword(pwdStr, {
//       minLength: 8,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 1,
//       minSymbols: 0,
//     })
//   ) {
//     showDengerMessage(`${FieldName} must use both number and letters`);
//     return false;
//   }
//   // Inclusion of at least one special character
//   if (
//     !validator.isStrongPassword(pwdStr, {
//       minLength: 8,
//       minLowercase: 1,
//       minUppercase: 1,
//       minNumbers: 1,
//       minSymbols: 1,
//     })
//   ) {
//     showDengerMessage(`${FieldName} must have one special characters.`);
//     return false;
//   }
//
//   return true;
// };

export const validatePasswordNew = (pwdStr, FieldName) => {
  let pwdError = '';

  // Must not be empty
  if (isEmpty(pwdStr)) {
    pwdError = `Please enter ${String(FieldName).toLowerCase()}.`;
  }
  // At least 8 characters
  // A mixture of both uppercase and lowercase letters
  // A mixture of letters and numbers
  // Inclusion of at least one special character
  else if (
    !validator.isStrongPassword(pwdStr, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    })
  ) {
    // pwdError += `${FieldName} must be 8 characters long.\n`;
    // pwdError += `${FieldName} must use both uppercase and lower case.\n`;
    // pwdError += `${FieldName} must use both number and letters\n`;
    // pwdError += `${FieldName} must have one special characters.`;
    const x = String(FieldName).toLowerCase();
    pwdError += `Please enter minimum 8 characters, at least one uppercase, one lowercase, one numeric and special character for ${x}.`;
  }
  if (pwdError.length === 0) {
    return true;
  } else {
    showDengerMessage(pwdError);
    return false;
  }
};

// export const isValidPassword = pwdStr => {
//   const isStrongPassword = validator.isStrongPassword(pwdStr, {
//     minLength: 8,
//     minLowercase: 1,
//     minUppercase: 1,
//     minNumbers: 1,
//     minSymbols: 1,
//   });
//
//   return isStrongPassword && !/\s/.test(pwdStr);
// };
// export const isValidPasswordOld = pwdStr => {
//   const isStrongPassword = validator.isStrongPassword(pwdStr, {
//     minLength: 4,
//     minLowercase: 0,
//     minUppercase: 0,
//     minNumbers: 0,
//     minSymbols: 0,
//   });
//
//   return isStrongPassword && !/\s/.test(pwdStr);
// };
// export const validatePassword = (pwdStr, msg1) => {
//   if (isEmpty(pwdStr)) {
//     showDengerMessage(msg1 ?? 'Please enter password.');
//     return false;
//   }
//   if (!isValidPasswordOld(pwdStr)) {
//     showDengerMessage(
//       'Please enter minimum 8 digit for password,\nmust use both uppercase and lower case,\nmust use both number and letters,\nmust have one special characters',
//     );
//     return false;
//   }
//   return true;
// };

// export const validatePasswordWithConfirmaPassword = (
//   pwdStr,
//   sConfirmPassword,
// ) => {
//   if (validatePassword(pwdStr)) {
//     if (isEmpty(sConfirmPassword)) {
//       showDengerMessage('Please enter confirm password.');
//     } else if (!isEquals(pwdStr, sConfirmPassword)) {
//       showDengerMessage('Password mismatch.');
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

export const validateUsernameInstagram = nameForTest => {
  const reg_user_name = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;
  return reg_user_name.test(nameForTest);
};
export const validateUsernameBrijen = nameForTest => {
  const reg_user_name = /^([ A-Za-z0-9_@./#$&+-]{2,30})*$/;
  return reg_user_name.test(nameForTest);
};
