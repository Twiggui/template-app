export const TemplateDisplayName = 'Template Test';

export const TemplateAppName = purgeString(
  TemplateDisplayName.trim().toLowerCase(),
);

export const TemplateOrganisation = purgeString(
  TemplateDisplayName.trim().toUpperCase(),
);

export const TemplateIdOrganisation = 9;

export const TemplateBackgroundColor = '#FFFFFF';

export const TemplateSiteLink = 'www.dag-system.com';

export const TemplateNameAsk = true;
export const TemplateFirstNameAsk = true;
export const TemplateSexeAsk = true;
export const TemplateDdnAsk = true;
export const TemplateMailAsk = true;
export const TemplateTelAsk = true;
export const TemplateAdressAsk = true;
export const TemplatePostalAsk = true;
export const TemplateCityAsk = true;
export const TemplateCountryAsk = true;
export const TemplateTelVerifAsk = true;
export const TemplateChallengeClub = true;
export const TemplateChallengeFamille = true;
export const TemplateChallengeAutre = true;
export const TemplateChallengeEntreprise = true;
export const TemplateHasAppDonation = false;
export const TemplateIsPaying = false;

export const TemplateChallengeAutreName = 'Template Test Autre';

export const TemplateSportLive = [
  {idSport: 1, sportName: 'Course'},
  {idSport: 2, sportName: 'Marche'},
];

export const TemplateReplayTrace = [
  {label: 'Course Test', id: 58},
  {label: 'Course Test', id: 58},
];

export const TemplateArrayImagesSponsorPath = [];
export const TemplateArrayImagesPartenairesPath = [];

function purgeString(str) {
  const accents =
    "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž' ,";
  const accentsOut =
    'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';
  str = str.split('');
  const strLen = str.length;
  let i, x;
  for (i = 0; i < strLen; i++) {
    if ((x = accents.indexOf(str[i])) != -1) {
      str[i] = accentsOut[x];
    }
  }
  return str.join('');
}
