import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogInfo.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Text, FontSize, HeaderTagType, FontWeight, FontColor } from '@/shared/ui/Text';
import { FlexAlign } from '@/shared/ui/Stack/Flex';

interface CatalogInfoProps {
   className?: string;
}

export const CatalogInfo = memo((props: CatalogInfoProps) => {
   const { className } = props;

   return (
      <div className={classNames(cls.CatalogInfo, {}, [className])}>
         <HStack gap={94} className={cls.container} align={FlexAlign.START}>
            <div className={cls.info}>
               <Text title={HeaderTagType.H_3} fontSize={FontSize.SIZE_36} fontWeight={FontWeight.TEXT_600}>
                  Кессоны, погреба и погреба-кессоны ЗЕМЛЯК
               </Text>
               <p>
                  Изделия из полипропилена от ТМ «Земляк» позволяют решить различные проблемы, которые
                  возникают перед владельцами загородных домов и дачных участков. <br /> Любой собственник
                  желает обустроить на участке хороший погреб для хранения запасов продовольствия и урожая,
                  собранного с собственного участка.
               </p>
               <p>
                  Традиционно для строительства таких сооружений используется бетон, железо или кирпич. Однако
                  внедрение новых технологий позволяет постепенно отходить от дорогостоящего и трудоемкого
                  процесса возведения погреба для дачи. Сегодня легко организовать на даче комфортное и
                  надежное место хранения овощей и домашней консервации. Достаточно обратиться в ТМ «Земляк» и
                  по выгодной цене купить пластиковый погреб от производителя.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Пластиковый погреб, кессон, кессон для погреба: что это
               </Text>
               <p>
                  Современные пластиковые погреба для дачи представляют собой вместительные емкости различной
                  формы. Внешне они представляют собой кубическую, реже – цилиндрическую конструкцию . Изделия
                  комплектуются боковым или верхним входом (в зависимости от выбранной модели).
               </p>
               <p>
                  Большинство пользователей отдает преимущество моделям с входом, расположенным на уровне
                  земли.
               </p>
               <p>
                  Кессон служит для защиты устья скважины и размещения скважинного оборудования. Пластиковый
                  кессон давно пользуется популярностью по сравнению с альтернативными моделями за счет своих
                  универсальных качеств.
               </p>
               <p>
                  Кессон-погреб – это многофункциональное сооружение, которое совмещает полезные качества
                  одновременно двух изделий, за счет чего экономится не только полезная площадь, но и денежные
                  средства домовладельца.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Преимущества пластикового погреба, кессона, кессона для погреба
               </Text>
               <p>
                  Не важно, что вы выберете – пластиковый погреб для дачи, кессон для скважины или кессон для
                  погреба 2в1 — это в любом случае станет для вас выгодным приобретением, поскольку:
               </p>
               <ul className={cls.list}>
                  <li>Отсутствует необходимость герметизации и укрепления стенок резервуара;</li>
                  <li>Контейнер устойчив к коррозии, со временем не меняет цвет;</li>
                  <li>Изделие имеет большой запас прочности на сжатие;</li>
                  <li>
                     Пластик, из которого изготовлен погреб, имеет низкую теплопроводность, поэтому стенки не
                     промерзнут даже при небольшом заглублении в грунт;
                  </li>
                  <li>Не изменяет вкусовых, химических и прочих свойств хранящихся в нем продуктов;</li>
                  <li>
                     Не влияют на качество воды, но в то же время изолируют источник от проникновения
                     грунтовых и сточных вод;
                  </li>
                  <li>
                     Внешние факторы не влияют на качество использования, так как изделие увеличивает свойства
                     подземных погребов или подвальных помещений;
                  </li>
                  <li>
                     Погреб сохраняет продовольственные запасы, продлевая срок хранения находящихся в нем
                     продуктов;
                  </li>
                  <li>Абсолютно защищает содержимое от воздействия солнечных лучей;</li>
                  <li>Можно возводить в любых геологических и гидрологических условиях;</li>
                  <li>
                     Система приточно-вытяжной вентиляции позволяет свежему воздуху циркулировать и
                     препятствует появлению плесени, грибка;
                  </li>
                  <li>
                     Сооружение исключает доступ посторонних лиц, препятствует проникновению домашних
                     животных;
                  </li>
                  <li>Позволяет стабильно поддерживать необходимые температурные показатели;</li>
                  <li>Препятствует попаданию внутрь вредителей (насекомых или грызунов);</li>
                  <li>
                     Не требует особого ухода – пластиковая поверхность легко очищается,
                     <br /> не вбирает в себя посторонние запахи,
                     <br /> не требует окраски и не поддается коррозии.
                  </li>
               </ul>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Какие разновидности кессонов, кессонов для погребов, готовых погребов бывают
               </Text>
               <p>
                  Погреба и кессоны из полипропилена пришли на смену недолговечным деревянным и металлическим
                  конструкциям аналогичного типа. Все дело в эксплуатационных характеристиках современных
                  материалов, коим и является пластик.
               </p>
               <p>
                  Его использование позволяет гарантировать длительный срок службы изделий, стойкость к
                  гниению и перепадам температур.
                  <br /> Ко всем изделиям прилагается подробная инструкция по эксплуатации, презентация в
                  видеоформате, а также монтажная схема для самостоятельной установки на объекте заказчика.
               </p>
               <p>
                  Но мы готовы предоставить своим покупателям возможность установки изделий «под ключ».
                  <br />
                  Выбирая для дачного участка пластиковый кессон или погреб производства ТМ «»Земляк, владелец
                  дома может быть уверен, что изделие прослужит несколько десятилетий без необходимости замены
                  и проведения профилактического ремонта.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Погреб
               </Text>
               <p>
                  Данное изделие придется по душе каждому собственнику дачи или загородного дома. В нашем
                  каталоге можно найти хранилища продовольствия из пластика нескольких модификаций: Стандарт,
                  Комфорт, Комфорт+ и Премиум. Они отличаются габаритами и комплектацией. Таким образом, любой
                  потребитель, ищущий погреб для дачи, сможет без особых проблем подобрать для себя нужный
                  вариант для хранения продовольствия и урожая.
               </p>
               <p>
                  Данная продукция цельная и герметичная, поскольку изготавливается из монолитного
                  полипропилена (его прочность на 15% выше, чем у вспененного). Погреб идеально подойдет для
                  хранения закруток, солений, овощей, ягод, фруктов, молочки и мяса.
               </p>
               <p>
                  Размеры могут быть разными, в зависимости от потребностей заказчика. При подборе погреба
                  необходимо учитывать толщину стенок, степень надежности и прочности каркаса, материал
                  полочек и лестницы, наличие систем освещения, вентиляции.
               </p>
               <p>
                  Конструктивно хранилище от компании «Земляк» представляет собой герметичную конструкцию,
                  оснащенную деревянными полками по всему периметру и специальной лестницей из дерева для
                  удобства доступа внутрь погреба. Бесшовное и герметичное изделие не пропускает внутрь
                  грунтовые воды.
               </p>
               <p>
                  Погреб оборудован люком, а наличие системы вентиляции обеспечивает поступление чистого
                  воздуха внутрь, помогает длительное время поддерживать свежесть хранящихся фруктов и овощей.
                  Предусмотрена встроенная система освещения, которая позволит быстро и легко разместить
                  продукты по ящикам и на полках, или найти нужные запасы. Погреба от компании «Земляк»
                  изготавливаются на современных чешских станках с ЧПУ, что позволяет избежать брака и
                  неточностей конструкции.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Кессон
               </Text>
               <p>
                  Полипропиленовый кессон – специальное высокогерметичное сооружение для дачного участка,
                  применяемое для защиты водонасосного оборудования от доступа осадков, грунтовых вод,
                  грызунов, колебаний температур и промерзания в холодное время года. Они просты в установке,
                  но в то же время эффективны в обслуживании, отличаются небольшим весом и длительным (от 50
                  лет) сроком эксплуатации. <br /> Кессон устанавливается в яме вокруг обсадной колонны.
               </p>
               <Text fontWeight={FontWeight.TEXT_600}>Внутри могут располагаться такие компоненты, как:</Text>
               <ul className={cls.list}>
                  <li>насос для подачи воды;</li>
                  <li>автоматика для управления;</li>
                  <li>система фильтрации;</li>
                  <li>манометр;</li>
                  <li>запорная арматура;</li>
                  <li>аккумуляторы;</li>
                  <li>расширительный бак.</li>
               </ul>
               <p>
                  Основная часть кессона вкапывается в землю и фиксируется там с помощью грунтозацепов. На
                  поверхности обычно оставляют только люк для облегчения доступа к находящемуся внутри
                  оборудованию. При необходимости можно сделать утепление стен и крышки. Изнутри
                  устанавливается лестница для спуска внутрь, а также для проведения каких-либо
                  пуско-наладочных или ремонтных работ.
               </p>
               <p>
                  Пластиковый кессон ТМ «Земляк» представляет собой полый цилиндр. Его диаметр зависит от
                  размеров расположенного внутри оборудования и индивидуальных пожеланий заказчика. При выборе
                  параметров специалисты советуют принимать во внимание глубину промерзания земли, особенности
                  работы и обслуживания насосов автономного водоснабжения, а также целый ряд иных деталей.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Погреб-кессон
               </Text>
               <p>
                  Своим потребителям мы предлагаем погреб-кессон. Идея состоит в том, чтобы не заниматься
                  обустройством множества разных хозяйственных построек на участке, а установить всего лишь
                  одно, но практичное и многофункциональное. Это и погреб из пластика, и достаточно большой
                  пластиковый кессон для скважины. В таком хранилище можно спокойно расположить любое
                  водонасосное оборудование, комфортно им пользоваться и удобно обслуживать!
               </p>
               <p>
                  Чтобы погреб по-настоящему выполнял функцию кессона под скважину, не придется переделывать
                  конструкцию, просто на заводе к днищу приварят герметизирующую муфту из авиационной резины.
                  Эта процедура не изменит прочностные свойства погреба и сможет обеспечить 100% герметизацию
                  погреба и скважинной трубы.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Конструкция пластиковых погребов, кессонов, кессонов для погребов
               </Text>
               <Text fontWeight={FontWeight.TEXT_600}>Внутри могут располагаться такие компоненты, как:</Text>
               <ul className={cls.list}>
                  <li>двойным армированным днищем;</li>
                  <li>системой приточно-вытяжной вентиляции;</li>
                  <li>деревянной лестницей;</li>
                  <li>утепленной дверью или люком (зависит от модели);</li>
                  <li>полипропиленовыми полками;</li>
                  <li>мощным оребрением;</li>
                  <li>осветительными приборами;</li>
                  <li>датчиками влажности и температуры.</li>
               </ul>
               <p>
                  Доставленное и установленное на участке сооружение уже готово к эксплуатации. При
                  необходимости, заказывая погреб, можно оговорить дополнительный функционал.
               </p>
               <p>
                  <span className={cls.boldText}>Погреб-кессон</span> оснащен не только полками для хранения
                  провизии, но и имеет свободное пространство для размещения насосного и иного водозаборного
                  оборудовании. Кроме того, он обязательно оборудуется выводом для обсадной трубы скважины.
               </p>
               <p>
                  <span className={cls.boldText}>Кессон</span> – конструкция, предназначенная исключительно
                  для комфортного обустройства водозаборного сооружения.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Купить пластиковый погреб «Земляк», кессон или кессон для погреба
               </Text>
               <p>
                  Какое изделие из представленных в нашем каталоге выбрать, предстоит решать только вам.
                  Главное – заручиться поддержкой опытных и квалифицированных специалистов, которые помогут
                  реализовать проект любой сложности. Именно такими компаниями являются ТМ «Земляк» и наши
                  партнеры, которые готовы помочь нашим клиентам с установкой приобретенных резервуаров.
                  <br /> У нас вы можете без особых затруднений купить пластиковый погреб, цена которого будет
                  приемлемой для большинства покупателей и выгодной среди подобных пластиковых конструкций на
                  рынке.
               </p>
               <Text fontWeight={FontWeight.TEXT_600}>
                  Для удобства заказчиков мы подготовили электронный каталог с ассортиментом продукции, что
                  позволяет клиентам подобрать нужную вам модификацию по ряду характеристик, среди которых:
               </Text>
               <ul className={cls.list}>
                  <li>габаритные размеры;</li>
                  <li>дизайн;</li>
                  <li>комплектация;</li>
                  <li>ценовая категория и т.д.</li>
               </ul>
               <p>
                  Если у вас возникают какие-либо вопросы, касаемо продукции, вы можете всегда обсудить их с
                  нашими консультантами.
               </p>
               <Text
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_500}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Как устанавливают пластиковые погреба, кессоны, кессоны для погребов
               </Text>
               <p>
                  ТМ «Земляк» занимается выпуском и монтажом кессонов и пластиковых погребов уже более 5 лет.
                  За это время мы накопили достаточно опыта и смогли разработать наиболее эффективную
                  технологию установки нашей продукции.
               </p>
               <Text fontWeight={FontWeight.TEXT_600}>
                  Стандартная схема монтажа предполагает такую последовательность действий:
               </Text>
               <ol className={cls.list}>
                  <li className={cls.numStyle}>
                     Утеплить готовую конструкцию изоляцией (обычно мы используем 100мм пенофол, 10мм изолон)
                  </li>
                  <li className={cls.numStyle}>
                     Вырыть котлован, габариты которого на 500 мм больше размеров устанавливаемого погреба
                  </li>
                  <li className={cls.numStyle}>Установить Якорь (бетонную плиту)</li>
                  <li className={cls.numStyle}>Песком тщательно выровнять дно котлована</li>
                  <li className={cls.numStyle}>Опустить в котлован пластиковый погреб</li>
                  <li className={cls.numStyle}>Зафиксировать, используя стропы</li>
               </ol>
               <p>
                  Стоит учитывать, что монтаж выбранной вами конструкции под гаражом или домом может быть
                  проведен еще на этапе застройки участка. Также установка пластикового погреба может быть
                  выполнена внутри помещения, при условии, что его площадь позволяет занести туда контейнер и
                  грамотно произвести обустройство резервуара в подготовленный котлован.
               </p>
               <p>
                  Чтобы купить пластиковый погреб в ТМ «Земляк», обратитесь к менеджеру по контактному
                  телефону, указанному на сайте. Он проконсультирует о наличии интересующей вас модели,
                  уточнит ее стоимость с четом монтажа на участке, расскажет об особенностях эксплуатации и
                  конструктивных характеристиках конкретного товара
               </p>
               <p>
                  Мы осуществляем доставку по Самарской области. По желания заказчика возможна установка
                  изделия «под ключ» с гарантией от официального производителя.
               </p>
            </div>
            <div className={cls.advantages}>
               <Text fontSize={FontSize.SIZE_16} fontWeight={FontWeight.TEXT_700}>
                  Достоинства нашей фирмы:
               </Text>
               <ul className={classNames(cls.list, {}, [cls.listMargin])}>
                  <li className={cls.imageStyle}>Оригинальная продукция.</li>
                  <li className={cls.imageStyle}>Конструкция собственной разработки.</li>
                  <li className={cls.imageStyle}>Опытные менеджеры и помощь инженера.</li>
                  <li className={cls.imageStyle}>Своевременная доставка товара.</li>
                  <li className={cls.imageStyle}>Интересные предложения и скидки.</li>
               </ul>
               <Text fontSize={FontSize.SIZE_16} fontWeight={FontWeight.TEXT_700}>
                  Основные преимущества нашей продукции:
               </Text>
               <ul className={classNames(cls.list, {}, [cls.listMargin])}>
                  <li className={cls.imageStyle}>Сертифицированные материалы высокого качества.</li>
                  <li className={cls.imageStyle}>
                     Технологичное производство, исключающее человеческий фактор.
                  </li>
                  <li className={cls.imageStyle}>Большой выбор кессонов для обустройства любых скважин.</li>
               </ul>
               <p>
                  Компания «ЗЕМЛЯК» производит кессоны, погреба и погреба-кессоны для бытового использования.
                  Наша продукция оптимально подходит для обустройства загородных участков — создания систем
                  водоснабжения и хранения продуктов.
               </p>
               <p>
                  Если вы хотите надёжно решить вопрос хранения урожая и обустройства скважины — особое
                  внимание следует уделить выбору кессона и погреба. Выбирая нашу продукцию Вы избавите себя
                  от проблем ремонта и переобустройства уже готовых систем на участке на долгие годы.
               </p>
               <p>
                  Каждый владелец загородного дома знает, что вопросы обустройства участка — вечные. Наша
                  продукция позволяет надолго забыть о проблемах обустройства, ведь высокая прочность кессонов
                  и погребов даёт возможность эксплуатировать их более 50 лет.
               </p>
            </div>
         </HStack>
      </div>
   );
});
