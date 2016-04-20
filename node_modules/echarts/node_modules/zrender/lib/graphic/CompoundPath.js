// CompoundPath to improve performance


    var Path = require('./Path');
    module.exports = Path.extend({

        type: 'compound',

        shape: {

            paths: []
        },

        _updatePathDirty: function () {
            var dirtyPath = this.__dirtyPath;
            var paths = this.shape.paths;
            for (var i = 0; i < paths.length; i++) {
                // Mark as dirty if any subpath is dirty
                dirtyPath = dirtyPath || paths[i].__dirtyPath;
            }
            this.__dirtyPath = dirtyPath;
            this.__dirty = this.__dirty || dirtyPath;
        },

        beforeBrush: function () {
            this._updatePathDirty();
        },

        buildPath: function (ctx, shape) {
            var paths = shape.paths;
            for (var i = 0; i < paths.length; i++) {
                paths[i].buildPath(ctx, paths[i].shape);
            }
        },

        afterBrush: function () {
            var paths = this.shape.paths;
            for (var i = 0; i < paths.length; i++) {
                paths[i].__dirtyPath = false;
            }
        },

        getBoundingRect: function () {
            this._updatePathDirty();
            return Path.getBoundingRect.call(this);
        }
    });
