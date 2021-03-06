module.exports = {
    say: function (value) {

        if (!value) {
            return false;
        }
        if (value.length === 1) {
            return '1'+value;
        }

        var result = '';
        var count = 1;

        for (var i = 0; i < value.length; i++) {

            if (value[i] !== value[i+1]) {
                result += count+''+value[i];
                count = 0;
            }
            count++;
        }

        return result;
    },

    repeat: function (repeat) {
        if (!repeat) {
            return false;
        }

        var start = this.startChar || '1';
        var result = this.say(start);
        for (var i = 1; i < repeat; i++) {
            result = this.say(result);
        };
        return result;
    },

    startWith: function (startChar) {
        this.startChar = startChar;
        return this;
    }
}
