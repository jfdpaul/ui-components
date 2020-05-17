var nodeFactory = {
    build: function (val = '') {
        return {
            value: val,
            up: undefined,
            down: undefined,
            left: undefined,
            right: undefined,
            forEach: function (cb, dir) {
                var node = this;
                while (node !== undefined) {
                    cb(node.value);
                    node = node[dir];
                }
            },
            forEachLeft: function (cb) {
                this.forEach(cb, 'left');
            },
            forEachRight: function (cb) {
                this.forEach(cb, 'right');
            },
            forEachUp: function (cb) {
                this.forEach(cb, 'up');
            },
            forEachDown: function (cb) {
                this.forEach(cb, 'down');
            },
            setValue: function (value) {
                this.value = value;
            },
            setUp: function (up) {
                this.up = up;
            },
            setDown: function (down) {
                this.down = down;
            },
            setLeft: function (left) {
                this.left = left;
            },
            setRight: function (right) {
                this.right = right;
            }
        }
    },
    addColumnAfter: function (cell) {
        var tempCell = this.build();
        tempCell.left = cell;
        tempCell.right = cell.right;
        if (cell.up !== undefined)
            tempCell.up = cell.up.right;
        if (cell.down !== undefined)
            tempCell.down = cell.down.right;
        if (cell.up !== undefined && cell.up.right !== undefined)
            cell.up.right.down = tempCell;
        if (cell.right !== undefined)
            cell.right.left = tempCell;
        cell.right = tempCell;
        if (cell.down !== undefined) {
            this.addColumnAfter(cell.down);
        }
    },
    addRowAfter: function (cell) {
        var tempCell = this.build();
        tempCell.up = cell;
        tempCell.down = cell.down;
        if (cell.left !== undefined)
            tempCell.left = cell.left.down;
        if (cell.right !== undefined)
            tempCell.right = cell.right.down;
        if (cell.left !== undefined && cell.left.right !== undefined)
            cell.left.down.right = tempCell;
        if (cell.down !== undefined)
            cell.down.up = tempCell;
        cell.down = tempCell;
        if (cell.right !== undefined) {
            this.addRowAfter(cell.right);
        }
    },
    removeCell: function (cell) {
        if (cell.left !== undefined) {
            cell.left.right = cell.right;
        }
        if (cell.up !== undefined) {
            cell.up.down = cell.down;
        }
        if (cell.right !== undefined) {
            cell.right.left = cell.left;
        }
        if (cell.down !== undefined) {
            cell.down.up = cell.up;
        }
    },
    removeColumn: function (cell) {
        this.removeCell(cell);
        if (cell.down !== undefined) {
            this.removeColumn(cell.down);
        }
    },
    removeRow: function (cell) {
        this.removeCell(cell);
        if (cell.right !== undefined) {
            this.removeRow(cell.right);
        }
    }
};

module.exports = nodeFactory;
