import { BaseController, CoolController } from '@cool-midway/core';
import { CollectCategoryEntity } from '../../entity/category';

/**
 * 测试
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'page', 'list'],
  entity: CollectCategoryEntity,
})
export class CollectApiCategoryController extends BaseController {}
