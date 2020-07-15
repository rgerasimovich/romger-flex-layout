# WS React Flex Layout

Компоненты, для flex вёрстки

## Установка

```shell
npm install ws-react-flex-layout@latest --save
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

    <ul class="ws-layout-row-wrap ws-align-items-space-between-center item-list">
        <li class="ws-align-self-end">item 1</li>
        <li id="item-2">item 2</li>
        <li class="ws-flex-grow-1">item 3</li>
        <li class="ws-flex-shrink-2">item 1</li>
    </ul>

В результате преобразования все элементы в получили один или несколько атрибутов классов, за исключением второго элемента списка, получившего атрибут id. Большинство свойств передаваемых компоненту в результате добавляют определенный scc-класс создаваемому DOM-узлу.

## Описание свойств передаваемых компоненту в качестве props

### Направление осей и перенос содержимого flex-контейнера

Для определения значений направления главной и поперечной осей flex-контейнера используются свойства приведенные ниже, каждое свойство задает компоненту свой css-класс:

* **row** - ws-layout-row
* **rowWrap** - ws-layout-row-wrap
* **rowRev** - ws-layout-row-reverse
* **rowWrapRev** - ws-layout-row-wrap-reverse
* **column** - ws-layout-column
* **columnWrap** - ws-layout-column-wrap
* **columnRev** - ws-layout-column-reverse
* **columnWrapRev** - ws-layout-column-wrap-reverse

Значения данных свойств, разделенные символом пробела, определяют распределение flex-элементов по осям контейнера. Первое значение распределяет элементы по главной оси, второе по поперечной.

    <FlexBox columnWrap="space-between baseline"></FlexBox>

Результат преобразования вместе с описанием полученных css-классов представлен ниже

    <div class="ws-layout-column-wrap ws-align-items-space-between-baseline"></div>

    .ws-layout-column-wrap {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }

    .ws-align-items-space-between-baseline {
      justify-content: space-between;
      align-items: baseline;
    }

Значения свойств могут быть указаны в сокращенном варианте.

    <FlexBox columnWrap="sb bl"></FlexBox>

Результат будет тем же.

### Позиционирование элементов внутри flex-контейнера

Для позиционирования элементов в описанные выше свойства передаются значения отвечающие за размещение элементов вдоль главной и поперечной осей. Полный список данных значений, сокращений и создаваемых ими css-классов приведен ниже

* **start start** / **start** - ws-align-items-start-start
* **start center** / **start ctr** - ws-align-items-start-center
* **start baseline** / **start bl** - ws-align-items-start-baseline
* **start stretch** - ws-align-items-start-stretch
* **start end** - ws-align-items-start-end
* **space-between start** / **sb start** - ws-align-items-space-between-start
* **space-between center** / **sb ctr** - ws-align-items-space-between-center
* **space-between baseline** / **sb bl** - ws-align-items-space-between-baseline
* **space-between stretch** / **sb stretch** - ws-align-items-space-between-stretch
* **space-between end** / **sb end** - ws-align-items-space-between-end
* **center start** / **ctr start** - ws-align-items-center-start
* **center center** / **ctr** - ws-align-items-center-center
* **center baseline** / **ctr bl** - ws-align-items-center-baseline
* **center stretch** / **ctr stretch** - ws-align-items-center-stretch
* **center end** / **ctr end** - ws-align-items-center-end
* **stretch start** - ws-align-items-stretch-start
* **stretch center** / **stretch ctr** - ws-align-items-stretch-center
* **stretch baseline** / **stretch bl** - ws-align-items-stretch-baseline
* **stretch stretch** / **stretch** - ws-align-items-stretch
* **stretch end** - ws-align-items-stretch-end
* **space-around start** / **sa start** - ws-align-items-space-around-start
* **space-around center** / **sa ctr** - ws-align-items-space-around-center
* **space-around baseline** / **sa bl** - ws-align-items-space-around-baseline
* **space-around stretch** / **sa stretch** - ws-align-items-space-around-stretch
* **space-around end** / **sa end** - ws-align-items-space-around-end
* **end start** - ws-align-items-end-start
* **end center** / **end ctr** - ws-align-items-end-center
* **end baseline** / **end bl** - ws-align-items-end-baseline
* **end stretch** - ws-align-items-end-stretch
* **end end** / **end** - ws-align-items-end-end

### Индивидуальное позиционирование - свойство alignSelf
Для индивидуального размещения элемента вдоль поперечной оси используется свойство **alignSelf**. Данное свойство необязательное и применяется к элементу flex-контейнера. Полный список значений, сокращенных значений и создаваемых классов представлен ниже

* **start** - ws-align-self-start
* **baseline** / **bl** - ws-align-self-baseline
* **center** / **ctr** - ws-align-self-center
* **stretch** - ws-align-self-stretch
* **end** - ws-align-self-end

### Позиционирование строк из элементов контейнера - свойство contentAlign

По умолчанию, значения свойств отвечающих за направления осей и перенос содержимого flex-контейнера добавляют классы, определяющие размещение элементов вдоль поперечной оси для самих flex-элементов, проще говоря - данные классы будут содержать свойство **align-items**

    <FlexBox columnWrap="space-between baseline"></FlexBox>

    <div class="ws-layout-column-wrap ws-align-items-space-between-baseline"></div>

    .ws-align-items-space-between-baseline {
      justify-content: space-between;
      align-items: baseline;
    }

В случае, если в компонент передано свойство **contentAlign** со значение **true**, свойство **align-items** будет заменено на **align-content**, позиционирующее содержимое контейнера, занимающее более одной строки.

    <FlexBox columnWrap="space-between center" contentAlign={true}></FlexBox>

    <div class="ws-layout-column-wrap ws-align-content-space-between-center"></div>

    .ws-align-items-space-between-baseline {
      justify-content: space-between;
      align-content: center;
    }

Данный параметр является не обязательным и его необходимо использовать в случае, если содержимое контейнера будет превышать длину его строки или столбца, в зависимости от направления главной оси flex-контейнера.

Полный список значений, используемых в связке со свойством **contentAlign**, их сокращенных значений, а также создаваемых css-классов представлен ниже

* **start start** / **start** - ws-align-content-start
* **start space-between** / **start sb** - ws-align-content-start-space-between
* **start center** / **start ctr** - ws-align-content-start-center
* **start space-around** / **start sa** - ws-align-content-start-space-around
* **start stretch** - ws-align-content-start-stretch
* **start end** - ws-align-content-start-end
* **space-between start** / **sb start** - ws-align-content-space-between-start
* **space-between space-between** / **sb** - ws-align-content-space-between
* **space-between center** / **sb center** - ws-align-content-space-between-center
* **space-between space-around** / **sb sa** - ws-align-content-space-between-space-around
* **space-between stretch** / **sb stretch** - ws-align-content-space-between-stretch
* **space-between end** / **sb end** - ws-align-content-space-between-end
* **center start** / **ctr start** - ws-align-content-center-start
* **center space-between** / **ctr sb** - ws-align-content-center-space-between
* **center center** / **ctr** - ws-align-content-center
* **center space-around** / **ctr sa** - ws-align-content-center-space-around
* **center stretch** / **ctr stretch** - ws-align-content-center-stretch
* **center end** / **ctr end** - ws-align-content-center-end
* **stretch start** - ws-align-content-stretch-start
* **stretch space-between** / **stretch sb** - ws-align-content-stretch-space-between
* **stretch center** / **stretch ctr** - ws-align-content-stretch-center
* **stretch space-around** / **stretch sa** - ws-align-content-stretch-space-around
* **stretch stretch** / **stretch** - ws-align-content-stretch
* **stretch end** - ws-align-content-stretch-end
* **space-around start** / **sa start** - ws-align-content-space-around-start
* **space-around space-between** / **sa sb** - ws-align-content-space-around-space-between
* **space-around center** / **sa ctr** - ws-align-content-space-around-center
* **space-around space-around** / **sa** - ws-align-content-space-around
* **space-around stretch** / **sa stretch** - ws-align-content-space-around-stretch
* **space-around end** / **sa end** - ws-align-content-space-around-end
* **end start** - ws-align-content-end-start
* **end space-between** / **end sb** - ws-align-content-end-space-between
* **end center** / **end ctr** - ws-align-content-end-center
* **end space-around** / **end sa** - ws-align-content-end-space-around
* **end stretch** - ws-align-content-end-stretch
* **end end** / **end** - ws-align-content-end

### Свойства grow и shrink

Свойства **grow** и **shrink**, применяемые к элементам flex-контейнера, создают классы **ws-flex-grow-#** и **ws-flex-shrink-#** соответственно, где **#** - значение в диапазоне от 0 до 12 включительно. 

    <FlexBox grow="1" shrink="0">item</FlexBox>

Пример, описанный выше в результате будет преобразован в следующий html-код 

    <div class="ws-flex-grow-1 ws-flex-shrink-0">item</div>

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