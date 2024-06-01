import { memo, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ProductItem.module.scss';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { HStack, VStack } from '@/shared/ui/Stack';
import {
   FontColor,
   FontSize,
   FontWeight,
   HeaderTagType,
   Text,
} from '@/shared/ui/Text';
import { products } from '@/shared/const/products/products';
import { Product, Products } from '../../model/types/products';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Select } from '@/shared/ui/Select';

interface ProductItemProps {
   className?: string;
}

export const ProductItem = memo((props: ProductItemProps) => {
   const { className } = props;
   const { pathname } = useLocation();
   const [product, setProduct] = useState<Product>();
   const [selectedValue, setSelectedValue] = useState<string>();
   const index = pathname.lastIndexOf('/') + 1;
   const productViewPath = pathname.slice(index);
   const data: Products = products;
   const productsViews = data[productViewPath].map((item) => item.size);

   useEffect(() => {
      if (productViewPath) setProduct(data[productViewPath][0]);
   }, []);

   const changeSelect = (value: string) => {
      const selectProduct = data[productViewPath].find(
         (item) => item.size === value,
      );
      setSelectedValue(value);
      setProduct(selectProduct);
   };

   return (
      <div className={classNames(cls.ProductItem, {}, [className])}>
         <Breadcrumb className={cls.crumbs} />
         <HStack className={cls.container}>
            <VStack className={cls.infoContainer} align={FlexAlign.START}>
               <Text
                  title={HeaderTagType.H_3}
                  className={cls.titleProduct}
                  fontColor={FontColor.BLACK}
                  fontSize={FontSize.SIZE_34}
                  fontWeight={FontWeight.TEXT_500}
               >
                  {product?.title}
               </Text>
               <Text
                  fontColor={FontColor.LIGHT_GREY}
                  fontSize={FontSize.SIZE_14}
                  fontWeight={FontWeight.TEXT_500}
               >
                  {product?.model}
               </Text>
               <div>
                  Выберите размер кессона
                  <HStack>
                     <Select
                        className={cls.select}
                        placeholder={product?.size}
                        name='products'
                        options={productsViews}
                        heightOptionContainer={productsViews.length * 18 + 4}
                        scrollRadius={0}
                        onChange={changeSelect}
                        selected={selectedValue}
                     />
                  </HStack>
               </div>
            </VStack>
            <VStack>
               <img
                  src={product?.image}
                  alt={product?.title}
                  className={cls.mainImage}
               />
            </VStack>
         </HStack>
      </div>
   );
});
