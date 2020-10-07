import * as React from 'react';

declare type Alignment = 'start start'
| 'start space-between'
| 'start sb'
| 'start'
| 'start center'
| 'start ctr'
| 'start space-around'
| 'start sa'
| 'start stretch'
| 'start end'
| 'space-between start'
| 'sb start'
| 'space-between space-between'
| 'sb'
| 'space-between center'
| 'sb center'
| 'space-between space-around'
| 'sb sa'
| 'space-between stretch'
| 'sb stretch'
| 'space-between end'
| 'sb end'
| 'center start'
| 'ctr start'
| 'center space-between'
| 'ctr sb'
| 'center center'
| 'ctr'
| 'center space-around'
| 'ctr sa'
| 'center stretch'
| 'ctr stretch'
| 'center end'
| 'ctr end'
| 'stretch start'
| 'stretch space-between'
| 'stretch sb'
| 'stretch center'
| 'stretch ctr'
| 'stretch space-around'
| 'stretch sa'
| 'stretch stretch'
| 'stretch'
| 'stretch end'
| 'space-around start'
| 'sa start'
| 'space-around space-between'
| 'sa sb'
| 'space-around center'
| 'sa ctr'
| 'space-around space-around'
| 'sa'
| 'space-around stretch'
| 'sa stretch'
| 'space-around end'
| 'sa end'
| 'end start'
| 'end space-between'
| 'end sb'
| 'end center'
| 'end ctr'
| 'end space-around'
| 'end sa'
| 'end stretch'
| 'end end'
| 'end';

export interface FlexBoxProps {
    style?: any;
    row?: Alignment;
    rowWrap?: Alignment;
    rowRev?: Alignment;
    rowWrapRev?: Alignment;
    column?: Alignment;
    columnWrap?: Alignment;
    columnRev?: Alignment;
    columnWrapRev?: Alignment;
    grow?: string;
    shrink?: string;
    onClick?: any;
    className?: string;
    styleName?: string;
    id?: string;
    dataTemplate?: string;
    node?: string;
    contentAlign?: boolean;
    alignSelf?: string;
    flex?: boolean;
    href?: string;
    target?: string;
    rel?: string;
    dateTime?: string;
    noShrinkWrap?: boolean;
}
export const FlexBox: (props: FlexBoxProps) => React.DetailedReactHTMLElement<FlexBoxProps, HTMLElement>;
