// EXPORTS: MOCK_FACTORY_DATA

import type { IFactoryData } from '@/types/factory';

export const MOCK_FACTORY_DATA: IFactoryData = {
  factoryArea: 25000,
  productionLines: 8,
  monthlyCapacity: 200,
  qualityStandard: 'ISO 9001:2015 certified quality management system with full-process inspection from raw material to finished product.',
  certifications: ['ISO 9001:2015', 'CE', 'SGS'],
  description:
    'RISLINE LIFT operates a 25,000 m² modern manufacturing facility in Jinan, Shandong — China\'s industrial heartland. Our factory houses 8 dedicated production lines equipped with CNC machining centers, robotic welding stations, and automated powder coating systems. Every elevator undergoes rigorous load testing and safety inspection before shipment.',
  images: [
    {
      id: 'factory-1',
      src: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkb473igo_ve_miaoda',
      alt: 'Modern elevator production line with CNC equipment',
      category: 'production-line',
    },
    {
      id: 'factory-2',
      src: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkdkqtqlg_ve_miaoda',
      alt: 'Quality inspection workshop with testing equipment',
      category: 'quality-control',
    },
  ],
};
