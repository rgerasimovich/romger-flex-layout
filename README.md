# RG React Flex Layout

Компоненты, для flex вёрстки

## Установка

```shell
npm install rg-react-flex-layout@latest --save
```

## Использование

### Пример использования компонента

Фрагмент кода приведенный ниже демонстрирует пример использования компонента

    <FlexBox className="item-list" rowWrap="space-between center" node="ul">
        <FlexBox alignSelf="flex-end" node="li">item 1</FlexBox>
        <FlexBox id="item-2" node="li">item 2</FlexBox>
        <FlexBox grow="1" node="li">item 3</FlexBox>
        <FlexBox shrink="2" node="li">item 4</FlexBox>
    </FlexBox>

В данном примере, в результате будет получен элемент неупорядоченного списка, являющегося flex-контейнером c 4 дочерними flex-элементами. Родительский элемент получает в качестве props следующие свойства: 
* **className** - задает пользовательский css-класс, 
* **rowWrap** - определяет позиционирование элементов внутри контейнера, 
* **node** - создаваемый DOM-узел.

Первый дочерний элемент списка получает свойство **alignSelf**, задающее индивидуальное значение позиционирования по поперечной оси flex-контейнера, установленное во **flex-end**.
Второй элемент неупорядоченного списка получает в качестве props свойство **id** задающее уникальный идентификатор DOM-элемента. 
Третий дочерний элемент содержит свойство **grow** со значением **1**, устанавливающее значение свойства **flex-grow** равным **1**.
И наконец последний элемент списка содержит свойство **shrink** в значении **2**, задающее свойство **flex-shrink** равное **2**.

    <ul class="rg-layout-row-wrap rg-align-items-space-between-center item-list">
        <li class="rg-align-self-end">item 1</li>
        <li id="item-2">item 2</li>
        <li class="rg-flex-grow-1">item 3</li>
        <li class="rg-flex-shrink-2">item 1</li>
    </ul>

В результате преобразования все элементы в получили один или несколько атрибутов классов, за исключением второго элемента списка, получившего атрибут id. Большинство свойств передаваемых компоненту в результате добавляют определенный scc-класс создаваемому DOM-узлу.

## Описание свойств передаваемых компоненту в качестве props

### Направление осей и перенос содержимого flex-контейнера

Для определения значений направления главной и поперечной осей flex-контейнера используются свойства приведенные ниже, каждое свойство задает компоненту свой css-класс:

* **row** - rg-layout-row
* **rowWrap** - rg-layout-row-wrap
* **rowRev** - rg-layout-row-reverse
* **rowWrapRev** - rg-layout-row-wrap-reverse
* **column** - rg-layout-column
* **columnWrap** - rg-layout-column-wrap
* **columnRev** - rg-layout-column-reverse
* **columnWrapRev** - rg-layout-column-wrap-reverse

Значения данных свойств, разделенные символом пробела, определяют распределение flex-элементов по осям контейнера. Первое значение распределяет элементы по главной оси, второе по поперечной.

    <FlexBox columnWrap="space-between baseline"></FlexBox>

Результат преобразования вместе с описанием полученных css-классов представлен ниже

    <div class="rg-layout-column-wrap rg-align-items-space-between-baseline"></div>

    .rg-layout-column-wrap {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .rg-align-items-space-between-baseline {
      justify-content: space-between;
      align-items: baseline;
    }

Значения свойств могут быть указаны в сокращенном варианте.

    <FlexBox columnWrap="sb bl"></FlexBox>

Результат будет тем же.

### Позиционирование элементов внутри flex-контейнера

Для позиционирования элементов в описанные выше свойства передаются значения отвечающие за размещение элементов вдоль главной и поперечной осей. Полный список данных значений, сокращений и создаваемых ими css-классов приведен ниже

* **start start** / **start** - rg-align-items-start-start
* **start center** / **start ctr** - rg-align-items-start-center
* **start baseline** / **start bl** - rg-align-items-start-baseline
* **start stretch** - rg-align-items-start-stretch
* **start end** - rg-align-items-start-end
* **space-between start** / **sb start** - rg-align-items-space-between-start
* **space-between center** / **sb ctr** - rg-align-items-space-between-center
* **space-between baseline** / **sb bl** - rg-align-items-space-between-baseline
* **space-between stretch** / **sb stretch** - rg-align-items-space-between-stretch
* **space-between end** / **sb end** - rg-align-items-space-between-end
* **center start** / **ctr start** - rg-align-items-center-start
* **center center** / **ctr** - rg-align-items-center-center
* **center baseline** / **ctr bl** - rg-align-items-center-baseline
* **center stretch** / **ctr stretch** - rg-align-items-center-stretch
* **center end** / **ctr end** - rg-align-items-center-end
* **stretch start** - rg-align-items-stretch-start
* **stretch center** / **stretch ctr** - rg-align-items-stretch-center
* **stretch baseline** / **stretch bl** - rg-align-items-stretch-baseline
* **stretch stretch** / **stretch** - rg-align-items-stretch
* **stretch end** - rg-align-items-stretch-end
* **space-around start** / **sa start** - rg-align-items-space-around-start
* **space-around center** / **sa ctr** - rg-align-items-space-around-center
* **space-around baseline** / **sa bl** - rg-align-items-space-around-baseline
* **space-around stretch** / **sa stretch** - rg-align-items-space-around-stretch
* **space-around end** / **sa end** - rg-align-items-space-around-end
* **end start** - rg-align-items-end-start
* **end center** / **end ctr** - rg-align-items-end-center
* **end baseline** / **end bl** - rg-align-items-end-baseline
* **end stretch** - rg-align-items-end-stretch
* **end end** / **end** - rg-align-items-end-end

### Индивидуальное позиционирование - свойство alignSelf
Для индивидуального размещения элемента вдоль поперечной оси используется свойство **alignSelf**. Данное свойство необязательное и применяется к элементу flex-контейнера. Полный список значений, сокращенных значений и создаваемых классов представлен ниже

* **start** - rg-align-self-start
* **baseline** / **bl** - rg-align-self-baseline
* **center** / **ctr** - rg-align-self-center
* **stretch** - rg-align-self-stretch
* **end** - rg-align-self-end

### Позиционирование строк из элементов контейнера - свойство contentAlign

По умолчанию, значения свойств отвечающих за направления осей и перенос содержимого flex-контейнера добавляют классы, определяющие размещение элементов вдоль поперечной оси для самих flex-элементов, проще говоря - данные классы будут содержать свойство **align-items**

    <FlexBox columnWrap="space-between baseline"></FlexBox>

    <div class="rg-layout-column-wrap rg-align-items-space-between-baseline"></div>

    .rg-align-items-space-between-baseline {
      justify-content: space-between;
      align-items: baseline;
    }

В случае, если в компонент передано свойство **contentAlign** со значение **true**, свойство **align-items** будет заменено на **align-content**, позиционирующее содержимое контейнера, занимающее более одной строки.

    <FlexBox columnWrap="space-between center" contentAlign={true}></FlexBox>

    <div class="rg-layout-column-wrap rg-align-content-space-between-center"></div>

    .rg-align-items-space-between-baseline {
      justify-content: space-between;
      align-content: center;
    }

Данный параметр является не обязательным и его необходимо использовать в случае, если содержимое контейнера будет превышать длину его строки или столбца, в зависимости от направления главной оси flex-контейнера.

Полный список значений, используемых в связке со свойством **contentAlign**, их сокращенных значений, а также создаваемых css-классов представлен ниже

* **start start** / **start** - rg-align-content-start
* **start space-between** / **start sb** - rg-align-content-start-space-between
* **start center** / **start ctr** - rg-align-content-start-center
* **start space-around** / **start sa** - rg-align-content-start-space-around
* **start stretch** - rg-align-content-start-stretch
* **start end** - rg-align-content-start-end
* **space-between start** / **sb start** - rg-align-content-space-between-start
* **space-between space-between** / **sb** - rg-align-content-space-between
* **space-between center** / **sb center** - rg-align-content-space-between-center
* **space-between space-around** / **sb sa** - rg-align-content-space-between-space-around
* **space-between stretch** / **sb stretch** - rg-align-content-space-between-stretch
* **space-between end** / **sb end** - rg-align-content-space-between-end
* **center start** / **ctr start** - rg-align-content-center-start
* **center space-between** / **ctr sb** - rg-align-content-center-space-between
* **center center** / **ctr** - rg-align-content-center
* **center space-around** / **ctr sa** - rg-align-content-center-space-around
* **center stretch** / **ctr stretch** - rg-align-content-center-stretch
* **center end** / **ctr end** - rg-align-content-center-end
* **stretch start** - rg-align-content-stretch-start
* **stretch space-between** / **stretch sb** - rg-align-content-stretch-space-between
* **stretch center** / **stretch ctr** - rg-align-content-stretch-center
* **stretch space-around** / **stretch sa** - rg-align-content-stretch-space-around
* **stretch stretch** / **stretch** - rg-align-content-stretch
* **stretch end** - rg-align-content-stretch-end
* **space-around start** / **sa start** - rg-align-content-space-around-start
* **space-around space-between** / **sa sb** - rg-align-content-space-around-space-between
* **space-around center** / **sa ctr** - rg-align-content-space-around-center
* **space-around space-around** / **sa** - rg-align-content-space-around
* **space-around stretch** / **sa stretch** - rg-align-content-space-around-stretch
* **space-around end** / **sa end** - rg-align-content-space-around-end
* **end start** - rg-align-content-end-start
* **end space-between** / **end sb** - rg-align-content-end-space-between
* **end center** / **end ctr** - rg-align-content-end-center
* **end space-around** / **end sa** - rg-align-content-end-space-around
* **end stretch** - rg-align-content-end-stretch
* **end end** / **end** - rg-align-content-end

### Свойства grow и shrink

Свойства **grow** и **shrink**, применяемые к элементам flex-контейнера, создают классы **rg-flex-grow-#** и **rg-flex-shrink-#** соответственно, где **#** - значение в диапазоне от 0 до 12 включительно. 

    <FlexBox grow="1" shrink="0">item</FlexBox>

Пример, описанный выше в результате будет преобразован в следующий html-код 

    <div class="rg-flex-grow-1 rg-flex-shrink-0">item</div>

### Остальные свойства компонента

**className** - имя пользовательского класса, добавляемого DOM-узлу, необязательный параметр

    <FlexBox className="custom-class">helloWorld</FlexBox>

    <section class="custom-class">helloWorld</section>

**id** - уникальный идентификатор присваиваемый DOM-узлу, необязательный параметр

    <FlexBox id="custom-id">helloWorld</FlexBox>

    <section id="custom-id">helloWorld</section>

**style** - css-стили, передаваемые компоненту в качестве строки или объекта, преобразовываемые в inline-стили DOM-узла, необязательный параметр

    let styles = {
        padding: '24px';
    }

    <FlexBox style={styles}>item</FlexBox>

    <div style="padding: 24px">item</div>

**node** - задает тип создаваемого DOM-узла. Необязательный параметр, принимающий в качестве значения строку с названием html тега. Элемент по умолчанию - div

    <FlexBox node="section">helloWorld</FlexBox>

    <section>helloWorld</section>

**onClick** - функция обработчик клика по компоненту, необязательный параметр

    <FlexBox onClick={() => console.log('click')}>helloWorld</FlexBox>

**flex** - необязательное свойство задающее класс flex-grow-1, применяется к элементам flex-контейнера

    <FlexBox flex={true}>helloWorld</FlexBox>

    <div class="flex-grow-1">helloWorld</div>

    .flex-grow-1 {
      flex-grow: 1;
    }

## Лог изменений

### 2.0.6

* noShrinkWrap теперь не перезаписывает shrink у детей

### 2.0.5

* Убрали по-умолчанию shrink = 0, добавили пропс noShrinkWrap, если noShrinkWrap=true, то всем дочерним элементам проставляется shrink=0

### 2.0.4

* По-умолчанию проставляется shrink = 0

### 2.0.3

* Добавлена возможность добавления target и rel на элемент.

### 2.0.2

* Добавлена возможность добавления href на элемент.

### 2.0.1

* Исправлена ошибка в использовании свойства **flex-wrap**. Свойства и классы приведены в соответствие верному значению, используемому по умолчанию - **nowrap**. Для переноса контента теперь используются свойства **rowWrap**, **rowWrapRev**, **columnWrap**, **columnWrapRev**.

### 2.0.0

* Компонент переименован во FlexBox. Свойство **node** задает значение DOM-элемента.
* Удалено свойство **wrap**. Теперь оно является неотъемлемой часть свойств задающих направление осей flex-контейнера.
* Компонент более не строится на базе inline-стилей. Все css-свойства задаются классами.
* Компонент расширен и теперь предоставляет все возможные сочетания позиционирования и выравнивания, доступные во FlexBox layout.
* Добавлена возможность передавать значения свойств **grow** и **shrink** отличные от 0 и 1. Новый диапазон поддерживаемых значений - от **0** до **12** включительно.
* Добавлено свойство **alignSelf** задающее индивидуальное выравнивание flex-элемента по поперечной оси.
* Добавлен функционал использования свойств позиционирования контента по поперечной оси контейнера - свойство **contentAlign**
* Сохранена частичная совместимость с предыдущей версией. Для использования новых функций необходимо выполнить следующие действия:
    * переименовать все вызовы компонента из **FlexDiv** во **FlexBox**;
    * заменить свойство **flex-shrink** на **shrink**, заменить значение свойства.
    * удалить свойство wrap и заменить значение свойств row и column на соответствующие значения из нового функционала компонента, в случае необходимости переноса элементов на новую строку контейнера. По умолчанию свойство flex-wrap имеет значение nowrap.

## Лицензия

Код и документация выпущены под лицензией MIT