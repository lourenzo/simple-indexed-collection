(function(){
    /**
     * Indexed Collection Constructor
     * @constructor
     */
    function IndexedCollection () {
        this.data = {};
    }

    /**
     * Add new item
     * @param {Object} data
     */
    IndexedCollection.prototype.add = function (data) {
        if (!data.id) {
            throw new Error('No ID informed to IndexedCollection.prototype.add');
        }
        if (this.data[data.id]) {
            return this.edit(data.id, data);
        }
        this.data[data.id] = data;
    }

    /**
     * Find an item by subitems matching
     * @param  {Mixed} query Can be a string or object
     */
    IndexedCollection.prototype.find = function () {
        var args = arguments.unshift(this);
        return _.find.apply(this, args);
    }

    /**
     * Find an item by ID
     * @param  {String} id
     * @return {Object}
     */
    IndexedCollection.prototype.findById = function (id) {
        return this.data[idx];
    }

    /**
     * Edit a item's data recusively
     * @param  {String} id
     * @param  {Object} data
     * @return {Boolean} true if edition is done
     */
    IndexedCollection.prototype.edit = function (id, data) {
        if (!this.data[id]) {
            throw new Error('Item not found');
        }
        this.data[id] = _.merge(data, this.data[id]);
        return true;
    }

    /**
     * Remove an item
     * @param  {String} id
     */
    IndexedCollection.prototype.remove = function (id) {
        delete this.data[id];
    }

    this.IndexedCollection = IndexedCollection;
}).call(this);
