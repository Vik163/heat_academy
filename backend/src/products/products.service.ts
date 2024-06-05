import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// import { CreateCardDto } from '../dto/create-card.dto';
// import { UpdateCardDto } from '../dto/update-card.dto';
import { Request } from 'express';
import { ReqParamDto } from './dto/req-param.dto';
// import { Sorting } from 'src/common/decorators/sortingParams.decorator';
// import { Filtering } from 'src/common/decorators/filteringParams.decorator';
import { Repository } from 'typeorm';
import { Drinks } from './entities/drinks.entity';
import { Capacities } from './entities/capacities.entity';
import { Sauces } from './entities/sauces.entity';
import { Sps } from './entities/sps.entity';
import { Product } from './entities/product.entity';
import { Additives } from './entities/additives.entity';
import { Additions } from './entities/additions.entity';
import { Caissons } from './entities/caissons.entity';
import { Cellcaissons } from './entities/cellars-caissons.entity';

interface ProductsEntities {
  caissons: Repository<Caissons>;
  cellcaissons: Repository<Cellcaissons>;
  sps: Repository<Sauces>;
  capacities: Repository<Capacities>;
  drinks: Repository<Drinks>;
}

@Injectable()
export class ProductsService {
  private _productsEntities: ProductsEntities;
  constructor(
    @InjectRepository(Drinks)
    private readonly drinksRepository: Repository<Drinks>,
    @InjectRepository(Cellcaissons)
    private readonly cellCaissonsRepository: Repository<Cellcaissons>,
    @InjectRepository(Capacities)
    private readonly capacitiesRepository: Repository<Capacities>,
    @InjectRepository(Sps)
    private readonly spsRepository: Repository<Sps>,
    @InjectRepository(Additives)
    private readonly additivesRepository: Repository<Additives>,
    @InjectRepository(Additions)
    private readonly additionsRepository: Repository<Additions>,
    @InjectRepository(Caissons)
    private readonly caissonsRepository: Repository<Caissons>,
  ) {
    this._productsEntities = {
      caissons: this.caissonsRepository,
      cellcaissons: this.cellCaissonsRepository,
      drinks: this.drinksRepository,
      capacities: this.capacitiesRepository,
      sps: this.spsRepository,
    };
  }

  async getAdditives(): Promise<Additives[]> {
    return await this.additivesRepository.find();
  }

  async getAdditions(): Promise<Product[]> {
    return await this.additionsRepository.find();
  }

  public async getProductsByParams(req: Request): Promise<Product[]> {
    const params: ReqParamDto = req.query;
    const { viewProduct } = params;
    console.log('viewProduct:', viewProduct);
    const data = await this._productsEntities[viewProduct].find();
    console.log('data:', data);

    return data;
  }
}
