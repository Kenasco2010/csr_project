//Images.allow({
//    'insert': function () {
//        // add custom authentication code here
//        return true;
//    }
//});

Files.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fields, modifier) {
        return false;
    },
    remove: function(userId, doc) {
        return false;
    },
    download: function() {
        return true;
    }
});

