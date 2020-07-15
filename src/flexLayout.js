import React from 'react';
import DIRECTION from './config/direction';
import ITEMS_ALIGNMENT from './config/itemsAlignment';
import CONTENT_ALIGNMENT from './config/contentAlignment';
import SELF_ALIGNMENT from './config/selfAlignment';
import GROW from './config/growClasses';
import SHRINK from './config/shrinkClasses';
import './index.min.css';

export class FlexBox extends React.Component {
    constructor(props) {
        super(props);
        this.DEFAULT_DOM_NODE = 'div';
        this.directionKeys = Object.values(DIRECTION).map(item => item.value),
        this.itemsAlignments = Object.values(ITEMS_ALIGNMENT),
        this.contentAlignments = Object.values(CONTENT_ALIGNMENT),
        this.selfAlignments = Object.values(SELF_ALIGNMENT),
        this.growClasses = Object.values(GROW),
        this.shrinkClasses = Object.values(SHRINK);
        this.classList = [];
        this.align = '';
        this.state = {
            classList: [],
            props: {}
        };
    }

    componentWillMount() {
        this.buildComponentClassList();
    }

    componentWillReceiveProps() {
        this.buildComponentClassList();
    }

    /**
     * Ищем нужный класс и добавляем его в общий массив
     * @param {array} source 
     * @param {string} searchParam 
     */
    getReqClassName(source, searchParam) {
        source.forEach(item => {
            if (searchParam === item.value || searchParam === item.shortValue) {
                this.classList.push(item.class);
            }
        });
    }

    /**
     * Построение списка классов компоненте
     */
    buildComponentClassList() {
        this.classList = [];
        this.directionKeys.forEach(key => {
            if (this.props.hasOwnProperty(key)) {
                this.align = this.props[key];
                this.classList.push(DIRECTION[key].class);
            }
        });

        if (this.props.contentAlign === true) {
            this.getReqClassName(this.contentAlignments, this.align);
        } 
        else {
            this.getReqClassName(this.itemsAlignments, this.align);
        }

        if (this.props.alignSelf) {
            this.getReqClassName(this.selfAlignments, this.props.alignSelf);
        }

        if (this.props.grow || this.props.grow === '0') {
            this.getReqClassName(this.growClasses, this.props.grow);
        }

        if (this.props.shrink || this.props.shrink === '0') {
            this.getReqClassName(this.shrinkClasses, this.props.shrink);
        }

        if (this.props.flex) {
            this.classList.push(GROW.grow1.class);
        }

        let props = {};

        if (this.props.href) {
            props.href = this.props.href;
        }

        if (this.props.target) {
            props.target = this.props.target;
        }

        if (this.props.rel) {
            props.rel = this.props.rel;
        }

        if (this.props.dateTime) {
            props.dateTime = this.props.dateTime;
        }

        if (this.props.styleName) {
            props.styleName = this.props.styleName;
        }

        this.setState({ classList: this.classList, props: props });
    }

    /**
     * Изменяем пропсы детей, если надо
     * @param {*} children 
     */
    changeChildren(children) {
        if (!this.props.noShrinkWrap) {
            return children;
        }
        return React.Children.map(children, child => React.cloneElement(child, { shrink: (child.props.shrink || child.props.shrink === '0') ? child.props.shrink : '0' }));
    }

    render() {
        const node = this.props.node ? this.props.node : this.DEFAULT_DOM_NODE;

        return (
            React.createElement(node, {
                ...this.state.props,
                onClick: this.props.onClick,
                className: this.props.className ? `${this.state.classList.join(' ')} ${this.props.className}` : this.state.classList.join(' '),
                style: this.props.style,
                id: this.props.id,
                ['data-template']: this.props.dataTemplate,
            }, this.changeChildren(this.props.children))
        );
    }
}

export default FlexBox;