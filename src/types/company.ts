// EXPORTS: ICompanyStats, IAdvantage, ICertification, ICustomizationStep, ICooperationMode

export interface ICompanyStats {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface IAdvantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ICertification {
  id: string;
  name: string;
  description: string;
}

export interface ICustomizationStep {
  id: string;
  step: number;
  title: string;
  description: string;
}

export interface ICooperationMode {
  id: string;
  title: string;
  description: string;
}
