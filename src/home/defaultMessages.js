'use strict';

const defaultMessages = {
  // English language - Used by default
  en: {
    numbers: 'Must be a valid number.',
    email: 'Must be a valid email address.',
    required: 'This is mandatory.',
    date: 'Must be a valid date ({1}).',
    minlength: 'Length must be greater than {1}.',
    maxlength: 'Length must be lower than {1}.',
    equalPassword: 'Passwords are different',
    hasNumber: 'Must contain a number.',
    hasUpperCase: 'Must contain a upper case.',
    hasLowerCase: 'Must contain a lower case.',
    hasNumber: 'Must contain a number.',
    hasSpecialCharacter: 'Must contain a special character.',
  },
  //Arabic language
  ar: {
    numbers: 'الحقل "{0}" يجب أن يكون رقم صحيح',
    email: 'الحقل "{0}" يجب أن يكون بريد إلكتروني صحيح',
    required: 'الحقل "{0}" مطلوب',
    date: 'الحقل "{0}" يجب أن يكون تاريخ صحيح ({1}).',
    minlength: 'الحقل "{0}" يجب أن يكون أكثر من {1}.',
    maxlength: 'الحقل "{0}" يجب أن يكون أقل من {1}.',
    equalPassword: 'كلمات المرور مختلفة',
    hasNumber: 'يجب أن يحتوي الحقل "{0}" على رقم.',
    hasUpperCase: 'يجب أن يحتوي الحقل "{0}" على حرف كبير',
    hasLowerCase: 'يجب أن يحتوي الحقل "{0}" على أحرف صغيرة',
    hasSpecialCharacter: 'يجب أن يحتوي الحقل "{0}" على رمز خاص',

  },
  // French language
  fr: {
    numbers: 'Ce champ doit être un nombre valide.',
    email: 'Ce champ doit être une adresse email valide.',
    required: 'Ce champ est obligatoire.',
    date: 'Ce champ doit correspondre à une date valide ({1}).',
    minlength: 'Le nombre de caractère doit être supérieur à {1}.',
    maxlength: 'Le nombre de caractère doit être inférieur à {1}.',
    equalPassword: 'Les mots de passes sont differents',
    hasNumber: 'Doit contenir un nombre',
    hasUpperCase: 'Doit contenir une majuscule',
    hasLowerCase: 'Doit contenir une minuscule',
    hasNumber: 'Doit contenir un nombre',
    hasSpecialCharacter: "Doit contenir un charactère special"
  },
  // Persian (Farsi) language
  fa: {
    numbers: 'فیلد "{0}" باید یک عدد باشد.',
    email: 'فیلد "{0}" باید یک آدرس ایمیل باشد.',
    required: 'فیلد "{0}" نباید خالی باشد.',
    date: 'فیلد "{0}" باید یک تاریخ ({1}) باشد.',
    minlength: 'طول فیلد "{0}" باید بیشتر از "{1}" باشد.',
    maxlength: 'طول فیلد "{0}" باید کمتر از "{1}" باشد.',
    equalPassword: 'رمزهای عبور متفاوت هستند',
    hasNumber: 'قسمت "{0}" باید حاوی یک عدد باشد.',
    hasUpperCase: 'قسمت "{0}" باید شامل یک حرف بزرگ باشد',
    hasLowerCase: 'قسمت "{0}" باید دارای حروف کوچک باشد',
    hasSpecialCharacter: 'قسمت "{0}" باید دارای یک نویسه خاص باشد',
  },
  // Indonesian language
  id: {
    numbers: '"{0}" harus berupa angka',
    email: 'Format email pada "{0}" harus valid',
    required: '"{0}" harus diisi',
    date: 'Format tanggal pada "{0}" harus ({1})',
    minlength: '"{0}" harus lebih dari {1} karakter',
    maxlength: '"{0}" harus kurang dari {1} karakter',
    equalPassword: 'Kata sandi berbeda',
    hasNumber: '"{0}" harus berisi angka.',
    hasUpperCase: '"{0}" harus mengandung huruf kapital',
    hasLowerCase: '"{0}" harus berisi huruf kecil',
    hasSpecialCharacter: '"{0}" harus berisi karakter khusus',
  },
  // Portuguese language of Brazil
  ptBR: {
    numbers: 'O campo "{0}" precisar conter um número válido.',
    email: 'O campo "{0}" precisa conter um email válido.',
    required: 'O campo "{0}" é obrigatório.',
    date: 'O campo "{0}" precisa conter uma data válida ({1}).',
    minlength: 'O campo "{0}" precisa ser maior que {1} caracteres.',
    maxlength: 'O campo "{0}" precisa ser menor que {1} caracteres.',
    equalPassword: 'As senhas são diferentes',
    hasNumber: 'O campo "{0}" deve conter um número.',
    hasUpperCase: 'O campo "{0}" deve conter uma letra maiúscula',
    hasLowerCase: 'O campo "{0}" deve conter letras minúsculas',
    hasSpecialCharacter: 'O campo "{0}" deve conter um caractere especial',
  },
  // Spanish language
  es: {
    numbers: 'El campo "{0}" debe ser un número válido.',
    email: 'El campo "{0}" debe ser un email válido.',
    required: 'El campo "{0}" es requerido.',
    date: 'El campo "{0}" debe contener una fecha válida ({1}).',
    minlength: 'La longitud del campo "{0}" debe ser mayor que {1} caracteres',
    maxlength: 'La longitud del campo "{0}" debe ser menor que {1} caracteres.',
    equalPassword: 'Las contraseñas son diferentes',
    hasNumber: 'El campo "{0}" debe contener un número.',
    hasUpperCase: 'El campo "{0}" debe contener una letra mayúscula',
    hasLowerCase: 'El campo "{0}" debe contener minúsculas',
    hasSpecialCharacter: 'El campo "{0}" debe contener un carácter especial',
  },
  // Turkish language - Used by default
  tr: {
    numbers: '"{0}" alanı geçerli bir sayı olmalıdır.',
    email: '"{0}" alanı geçerli bir email adresi olmalıdır.',
    required: '"{0}" alanı gereklidir.',
    date: '"{0}" alanı geçerli bir tarih olmalıdır. ({1}).',
    minlength: '"{0}" alanı {1} karakterden daha uzun olmalıdır.',
    maxlength: '"{0}" alanı {1} karakterden daha kısa olmalıdır.',
    equalPassword: 'Şifreler farklı',
    hasNumber: '"{0}" alanı bir sayı içermelidir.',
    hasUpperCase: '"{0}" alanı büyük harf içermelidir',
    hasLowerCase: '"{0}" alanı küçük harf içermelidir',
    hasSpecialCharacter: '"{0}" alanı özel bir karakter içermelidir',
  }
  // TODO Add other languages here...
};

export default defaultMessages;
