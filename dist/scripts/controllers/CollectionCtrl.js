(function (){
    function CollectionCrtl(Fixtures){
        this.albums = Fixtures.getCollection(12);
    }

    angular
      .module('blocJams')
      .controller('CollectionCrtl', ['Fixtures', CollectionCrtl]);
}) ();
