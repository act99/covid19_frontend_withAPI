// Country: "Afghanistan"
// CountryCode: "AF"
// Date: "2021-11-23T07:42:43.19Z"
// ID: "a99f7a2d-3589-42f9-9d8f-00924e4098e3"
// NewConfirmed: 15
// NewDeaths: 0
// NewRecovered: 0
// Premium: {}
// Slug: "afghanistan"
// TotalConfirmed: 156911
// TotalDeaths: 7365
// TotalRecovered: 0

// Date: "2021-11-23T07:42:43.19Z"
// NewConfirmed: 392878
// NewDeaths: 5314
// NewRecovered: 0
// TotalConfirmed: 257370443
// TotalDeaths: 5149913
// TotalRecovered: 0

export type Country = {
  Country: string;
  CountryCode: string;
  Date: string;
  ID: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  Premium: unknown;
  Slug: string;
  TotalConfirmed: number;
  TotalDeath: number;
  TotalRecovered: number;
};

export type GlobalData = {
  Date: string;
  NewConfirmed: number;
  NewDeaths: number;
  NewRecovered: number;
  TotalConfirmed: number;
  TotalDeaths: number;
  TotalRecovered: number;
};

export type ResponseData = {
  Countries: Country[];
  Date: string;
  Global: GlobalData;
  ID: string;
  Message: string;
};
