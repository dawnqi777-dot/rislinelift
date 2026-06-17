// EXPORTS: MOCK_COMPANY_STATS, MOCK_ADVANTAGES, MOCK_CERTIFICATIONS, MOCK_CUSTOMIZATION_STEPS, MOCK_COOPERATION_MODES

import type { ICompanyStats, IAdvantage, ICertification, ICustomizationStep, ICooperationMode } from '@/types/company';

export const MOCK_COMPANY_STATS: ICompanyStats[] = [
  {
    id: '1',
    label: 'Years of Experience',
    value: 15,
    suffix: '+',
    icon: 'factory',
  },
  {
    id: '2',
    label: 'Annual Production Capacity',
    value: 5000,
    suffix: '+',
    icon: 'package',
  },
  {
    id: '3',
    label: 'Export Countries',
    value: 60,
    suffix: '+',
    icon: 'globe',
  },
  {
    id: '4',
    label: 'Professional Team',
    value: 300,
    suffix: '+',
    icon: 'users',
  },
];

export const MOCK_ADVANTAGES: IAdvantage[] = [
  {
    id: '1',
    title: 'OEM / ODM Capability',
    description: 'Full customization from design to production. Your brand, our quality.',
    icon: 'settings',
  },
  {
    id: '2',
    title: 'Fast Response Within 12 Hours',
    description: 'Dedicated account manager replies to all inquiries within 12 hours.',
    icon: 'zap',
  },
  {
    id: '3',
    title: 'Strict Quality Control',
    description: 'ISO 9001 certified. Every unit passes 100+ inspection points before shipment.',
    icon: 'shield-check',
  },
  {
    id: '4',
    title: 'Competitive Pricing',
    description: 'Direct factory pricing with no middlemen. Premium quality at fair rates.',
    icon: 'trending-up',
  },
  {
    id: '5',
    title: 'Global Logistics Network',
    description: 'Reliable sea & air freight partners. Door-to-door delivery to 60+ countries.',
    icon: 'truck',
  },
];

export const MOCK_CERTIFICATIONS: ICertification[] = [
  {
    id: '1',
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
  },
  {
    id: '2',
    name: 'CE Certification',
    description: 'European Conformity',
  },
  {
    id: '3',
    name: 'SGS',
    description: 'Third-party Inspection',
  },
];

export const MOCK_CUSTOMIZATION_STEPS: ICustomizationStep[] = [
  {
    id: '1',
    step: 1,
    title: 'Requirement Consultation',
    description: 'Share your specifications — size, load capacity, speed, materials, and control system preferences.',
  },
  {
    id: '2',
    step: 2,
    title: 'Solution Design',
    description: 'Our engineering team creates a tailored design with 3D drawings and technical proposals.',
  },
  {
    id: '3',
    step: 3,
    title: 'Production & QC',
    description: 'Manufacturing under strict quality control with real-time progress updates.',
  },
  {
    id: '4',
    step: 4,
    title: 'Logistics & Delivery',
    description: 'Secure packaging, customs clearance, and door-to-door shipping to your destination.',
  },
];

export const MOCK_COOPERATION_MODES: ICooperationMode[] = [
  {
    id: '1',
    title: 'OEM Manufacturing',
    description: 'We produce elevators to your exact specifications under your brand name.',
  },
  {
    id: '2',
    title: 'ODM Solutions',
    description: 'Leverage our R&D to develop custom elevator models exclusive to your market.',
  },
  {
    id: '3',
    title: 'Brand Labeling',
    description: 'Choose from our existing product line and apply your own branding and packaging.',
  },
];
