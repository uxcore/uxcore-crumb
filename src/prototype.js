
const React = require('react');
const {Bundle} = require('engine');
const {BoolSetter, TextSetter, ChoiceSetter, JsonSetter, NumberSetter} = require('engine-utils');

module.exports = Bundle.createPrototype({
    title: "面包屑",
    category: "*",
    icon: require("./logo.svg"), // todo: require("./logo.svg"),
    componentName: "Crumb",
    canHovering: true,
    canSelecting: true,
    canDraging: true,
    isInline: false,
    isContainer: true,
    canDropto: true,
    canDroping: 'TabPane',
    configure: [{
        name: "items",
        title: "面包屑项",
        fieldStyle: "block",
        setter: <ListSetter primaryKey="key" titleField="tab" addData={{children: "面包屑项"}} />,
        ignore: true,
        accessor: function() {
            let node = this.getNode();
            let children = node.getChildren();
            return children.map((child) => {
                let childText = child.getPropValue('children');
                let href = child.getPropValue('href');
                let data = {children: childText, href};
                return data;
            })
        },
        mutator: function(value, hotValue) {
            let node = this.getNode();
            node.mergeChildren((child, index) => {
                return true
            }, (children) => {
                return value;
            }, (child1, child2) => {
                return -1;
            });
        }
    }]
});
