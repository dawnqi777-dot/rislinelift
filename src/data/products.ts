// EXPORTS: MOCK_PRODUCTS

import type { IProduct } from '@/types/products';

export const MOCK_PRODUCTS: IProduct[] = [
  {
    id: '1',
    category: 'villa-elevator',
    name: 'Villa Elevator',
    description: 'Luxury home elevator with panoramic glass cabin, silent operation and customizable interiors for premium residences.',
    features: ['Load: 250–400 kg', 'Speed: 0.3–0.5 m/s', 'Machine-room-less', 'Custom cabin design'],
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkpjf3mdq_ve_miaoda',
  },
  {
    id: '2',
    category: 'cargo-lift',
    name: 'Cargo Lift',
    description: 'Heavy-duty freight elevator for warehouses and factories, built with reinforced steel structure and high load capacity.',
    features: ['Load: 500–5000 kg', 'Speed: 0.3–0.5 m/s', 'Hydraulic / traction', 'Durable steel platform'],
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgklgcxofq_ve_miaoda',
  },
  {
    id: '3',
    category: 'scissor-lift',
    name: 'Scissor Lift',
    description: 'Versatile hydraulic lifting platform for industrial maintenance, warehousing and logistics operations.',
    features: ['Load: 300–2000 kg', 'Lift height: 3–12 m', 'Mobile / stationary', 'Safety guardrails'],
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkpjf3ojq_ve_miaoda',
  },
  {
    id: '4',
    category: 'wheelchair-lift',
    name: 'Wheelchair Lift',
    description: 'Accessible platform lift for disabled access in public buildings, schools and residential complexes.',
    features: ['Load: 250–350 kg', 'Lift height: 1–4 m', 'Indoor / outdoor', 'Auto safety ramp'],
    image: '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkdkieohg_ve_miaoda',
  },
];
