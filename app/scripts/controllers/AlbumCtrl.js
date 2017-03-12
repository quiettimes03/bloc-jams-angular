(function(){
<<<<<<< HEAD
    function AlbumCtrl(Fixtures){
        this.albumData = Fixtures.getAlbum();
=======
    function AlbumCtrl(){
        this.albumData = angular.copy(albumPicasso);
>>>>>>> Assignment5

    }

    angular
      .module('blocJams')
      .controller('AlbumCtrl', ['Fixtures',AlbumCtrl]);

})();
