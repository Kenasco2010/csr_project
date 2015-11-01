Images.allow({
  insert: function(userId, doc) {
    return true;
  },
  download: function(userId) {
    return true;
  }
});

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

