import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { FirebaseAdmin } from 'firebaseconfig/firebase.setup';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drinks } from './entities/drinks.entity';
import { Capacities } from './entities/capacities.entity';
import { Sauces } from './entities/sauces.entity';
import { Sps } from './entities/sps.entity';
import { Additives } from './entities/additives.entity';
import { Additions } from './entities/additions.entity';
import { Caissons } from './entities/caissons.entity';
import { Cellcaissons } from './entities/cellars-caissons.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Cellcaissons,
      Drinks,
      Capacities,
      Sauces,
      Sps,
      Additives,
      Additions,
      Caissons,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, FirebaseAdmin],
})
export class ProductsModule {}
