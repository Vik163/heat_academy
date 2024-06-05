type ProductView =
  | 'caissons'
  | 'cellcaissons'
  | 'cellars'
  | 'capacities'
  | 'sps';

export class ReqParamDto {
  readonly _expand?: string;
  readonly page?: number;
  readonly limit?: number;
  readonly hasMore?: boolean;
  readonly viewProduct?: ProductView;
  readonly sort?: string;
  readonly search?: string;
  readonly type?: string;
  readonly _inited?: boolean;
}
