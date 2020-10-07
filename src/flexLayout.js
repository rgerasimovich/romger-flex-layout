import React, { useEffect, useState } from 'react';
import DIRECTION from './config/direction';
import ITEMS_ALIGNMENT from './config/itemsAlignment';
import CONTENT_ALIGNMENT from './config/contentAlignment';
import SELF_ALIGNMENT from './config/selfAlignment';
import GROW from './config/growClasses';
import SHRINK from './config/shrinkClasses';
import './index.min.css';

export const FLexBox = (props) => {
    const [childClassList, setChildClassList] = useState([]);
    const [childProps, setChildProps] = useState([]);
    let DEFAULT_DOM_NODE = 'div';
    let directionKeys = Object.values(DIRECTION).map(item => item.value);
    let itemsAlignments = Object.values(ITEMS_ALIGNMENT);
    let contentAlignments = Object.values(CONTENT_ALIGNMENT);
    let selfAlignments = Object.values(SELF_ALIGNMENT);
    let growClasses = Object.values(GROW);
    let shrinkClasses = Object.values(SHRINK);
    let classList = [];
    let align = '';

    useEffect(() => {
        buildComponentClassList();
    }, [props]);

    /**
     * Ищем нужный класс и добавляем его в общий массив
     * @param {array} source 
     * @param {string} searchParam 
     */
    const getReqClassName = (source, searchParam) => {
        source.forEach(item => {
            if (searchParam === item.value || searchParam === item.shortValue) {
                classList.push(item.class);
            }
        });
    };

    /**
     * Построение списка классов компоненте
     */
    const buildComponentClassList = () => {
        classList = [];
        directionKeys.forEach(key => {
            if (props.hasOwnProperty(key)) {
                align = props[key];
                classList.push(DIRECTION[key].class);
            }
        });

        if (props.contentAlign === true) {
            getReqClassName(contentAlignments, align);
        } 
        else {
            getReqClassName(itemsAlignments, align);
        }

        if (props.alignSelf) {
            getReqClassName(selfAlignments, props.alignSelf);
        }

        if (props.grow || props.grow === '0') {
            getReqClassName(growClasses, props.grow);
        }

        if (props.shrink || props.shrink === '0') {
            getReqClassName(shrinkClasses, props.shrink);
        }

        if (props.flex) {
            classList.push(GROW.grow1.class);
        }

        let newChildProps = {};

        if (props.href) {
            newChildProps.href = props.href;
        }

        if (props.target) {
            newChildProps.target = props.target;
        }

        if (props.rel) {
            newChildProps.rel = props.rel;
        }

        if (props.dateTime) {
            newChildProps.dateTime = props.dateTime;
        }

        if (props.styleName) {
            newChildProps.styleName = props.styleName;
        }

        setChildClassList(classList);
        setChildProps(newChildProps);
    };

    /**
     * Изменяем пропсы детей, если надо
     * @param {*} children 
     */
    const changeChildren = (children) => {
        if (!props.noShrinkWrap) {
            return children;
        }
        return React.Children.map(children, child => React.cloneElement(child, { shrink: (child.props.shrink || child.props.shrink === '0') ? child.props.shrink : '0' }));
    };

    const node = props.node ? props.node : DEFAULT_DOM_NODE;

    return (
        React.createElement(node, {
            ...childProps,
            onClick: props.onClick,
            className: props.className ? `${childClassList.join(' ')} ${props.className}` : childClassList.join(' '),
            style: props.style,
            id: props.id,
            ['data-template']: props.dataTemplate,
        }, changeChildren(props.children))
    );
};

export default FLexBox;