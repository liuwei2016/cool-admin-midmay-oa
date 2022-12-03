import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 商品
 */
@EntityModel('collect_category')
export class CollectCategoryEntity extends BaseEntity {
  @Column({ comment: '名称' })
  cat_name: string;

  @Column({ comment: '描述', nullable: true })
  cat_desc: string;

  @Column({ comment: '图标', nullable: true })
  cat_icon: string;

  @Column({ comment: '等级', nullable: true, default: 1 })
  cat_level: number;
}
