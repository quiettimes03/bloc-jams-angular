(function(){
<<<<<<< HEAD
<<<<<<< HEAD
    function AlbumCtrl(Fixtures){
        this.albumData = Fixtures.getAlbum();
=======
    function AlbumCtrl(){
        this.albumData = angular.copy(albumPicasso);
>>>>>>> Assignment5
=======
    function AlbumCtrl(Fixtures, SongPlayer){
        this.albumData = Fixtures.getAlbum();
        this.songPlayer =  SongPlayer;
>>>>>>> Checkpoint7

    }

    angular
      .module('blocJams')
      .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);

})();
