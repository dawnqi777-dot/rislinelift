// EXPORTS: MOCK_PARTNERS, MOCK_CASES

import type { IPartner, ICase } from '@/types/partners';

export const MOCK_PARTNERS: IPartner[] = [
  {
    id: '1',
    name: 'EuroBuild GmbH',
    logo: '',
  },
  {
    id: '2',
    name: 'GlobalLift Corp',
    logo: '',
  },
  {
    id: '3',
    name: 'AsiaConstruct',
    logo: '',
  },
  {
    id: '4',
    name: 'Premier Homes',
    logo: '',
  },
  {
    id: '5',
    name: 'Metro Engineering',
    logo: '',
  },
];

export const MOCK_CASES: ICase[] = [
  {
    id: '1',
    title: 'Luxury Hotel Elevator Installation',
    country: 'UAE',
    description: '12 villa elevators for a 5-star resort in Dubai.',
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkl2ev6jo_ve_miaoda',
  },
  {
    id: '2',
    title: 'Commercial Tower Glass Elevators',
    country: 'Singapore',
    description: '8 panoramic elevators for a Grade-A office tower.',
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgklgcxoeq_ve_miaoda',
  },
  {
    id: '3',
    title: 'Residential Villa Lift Project',
    country: 'Australia',
    description: 'Custom home elevators for 20 luxury villas in Sydney.',
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkl2ev6jo_ve_miaoda',
  },
];
