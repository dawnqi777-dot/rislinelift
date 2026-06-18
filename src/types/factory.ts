// EXPORTS: IFactoryImage, IFactoryData

export interface IFactoryImage {
  id: string;
  /** 图片占位 URL */
  src: string;
  /** 图片描述 */
  alt: string;
  /** 图片分类：production-line / quality-control / warehouse / equipment */
  category: 'production-line' | 'quality-control' | 'warehouse' | 'equipment';
}

export interface IFactoryData {
  /** 厂房面积（平方米） */
  factoryArea: number;
  /** 生产线数量 */
  productionLines: number;
  /** 月产能（台） */
  monthlyCapacity: number;
  /** 质检标准描述 */
  qualityStandard: string;
  /** 认证列表 */
  certifications: string[];
  /** 工厂图片列表 */
  images: IFactoryImage[];
  /** 工厂描述文本 */
  description: string;
}
