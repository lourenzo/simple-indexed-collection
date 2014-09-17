var _ = require('lodash');
(function(){
    /**
     * Indexed Collection Constructor
     * @constructor
     */
    function IndexedCollection(){
        this.vector = [];
        this.index = {};
        Object.defineProperty(this, 'length', {
            get: function () {
                return this.vector.length
            }
        });
    }

    /**
     * Add new item
     * @param {Object} data
     */
    IndexedCollection.prototype.add = function (data) {
        if (!data.id) {
            throw new Error('No ID informed to IndexedCollection.prototype.add');
        }
        if (this.index[data.id]) {
            return this.edit(data.id, data);
        }
        var itemIndex = this.vector.push(data);
        this.index[data.id] = itemIndex - 1;
        return itemIndex;
    }

    /**
     * Find an item by subitems matching
     * @param  {Mixed} query Can be a string or object
     */
    IndexedCollection.prototype.find = function (subject) {
        var query;
        if (typeof subject == string || typeof subject == number) {

        }
    }

    /**
     * Find an item by ID
     * @param  {String} id
     * @return {Object}
     */
    IndexedCollection.prototype.findById = function (id) {
        var idx = this.index[id];
        return this.vector[idx];
    }

    /**
     * Edit a item's data recusively
     * @param  {String} id
     * @param  {Object} data
     * @return {Boolean} true if edition is done
     */
    IndexedCollection.prototype.edit = function (id, data) {
        var idx = this.index[id];
        if (!this.vector[idx]) {
            throw new Error('Item not found');
        }
        this.vector[idx] = _.merge(data, this.vector[idx]);
        return true;
    }

    /**
     * Remove an item
     * @param  {String} id
     */
    IndexedCollection.prototype.remove = function (id) {
        var idx = this.index[id];
        delete this.vector[idx];
        delete this.index[id];
        this._rebuildIndex();
    }

    IndexedCollection.prototype._rebuildIndex = function () {
        for (var i = 0; i < this.vector.length; i++) {
            this.vector[i]
        };
    }

    this.IndexedCollection = IndexedCollection;
}).call(this);
