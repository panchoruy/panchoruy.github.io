$(document).ready(function() {
    var menuCollapsed = true;

    $('#portf').click(function() {
        if (menuCollapsed) {
            $('#photo, #graph').css('display', 'block').animate({ height: '1.8em', opacity: '1' }, 200, function() {
                menuCollapsed = false;
            });
        } else {
            $('#photo, #graph').animate({ height: '0', opacity: '0' }, 200, function() {
                $('#photo, #graph').css('display', 'none');
            });
            menuCollapsed = true;
        }
    });

    $('#photo').click(function() {
        $('#menuWrap, #footer').animate({ opacity: '0' }, 200, function() {
            $('#menuWrap, #footer').css('visibility', 'hidden');
        });
        $('#photoContainer').css('visibility', 'visible').animate({ opacity: '1' }, 400);
        $('#menuToggle').css('visibility', 'visible').animate({ opacity: '1' }, 200);
    });

    $('#graph').click(function() {
        $('#graph').animate({ opacity: '0' }, 200, function() {
            $('#graph').html('This website. More soon!').animate({ opacity: '1' }, 200);
        });
    });

    $('#conta').click(function() {
        $('#menuWrap').animate({ opacity: '0' }, 200, function() {
            $('#menuWrap').css('visibility', 'hidden');
        });
        $('#contaContainer').css('visibility', 'visible').animate({ opacity: '1' }, 200);
        $('#menuToggle').css('visibility', 'visible').animate({ opacity: '1' }, 200);
        $('.icon').animate({ fontSize: '300%', lineHeight: '3em' }, 200);
    });


    $('#menuToggle').click(function() {
        $('#menuToggle').animate({ opacity: '0' }, 200, function() {
            $('#menuToggle').css('visibility', 'hidden');
            $('#photoContainer, #contaContainer').animate({ opacity: '0' }, 200, function() {
                $('#photoContainer, #contaContainer').css('visibility', 'hidden')
            });
            $('#menuWrap, #footer').css('visibility', 'visible').animate({ opacity: '1' }, 200);
            $('.icon').animate({ fontSize: '20px', lineHeight: '1em' }, 200);
        });
    });

    var photoUrls = [];

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    $.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=35aaa78f22e30b2123c479fccac9a369&user_id=panchoruy&tags=website&format=json',
        function(content, textStatus) {
            console.log(JSON.parse(content.match(/\(([^)]+)\)/)[1]));
            var flickrobject = JSON.parse(content.match(/\(([^)]+)\)/)[1]);
            $.each(flickrobject.photos.photo, function(key, value) {
                photoUrls.push({
                    thumb: 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '_z_d.jpg',
                    img: 'https://farm' + value.farm + '.staticflickr.com/' + value.server + '/' + value.id + '_' + value.secret + '_h_d.jpg',
                    alt: value.title,
                });
            });
            $.each(shuffleArray(photoUrls), function(index, photo) {
                $('<img/>').attr({
                    src: photo.thumb,
                    alt: photo.alt,
                    'data-image': photo.img,
                }).appendTo('#gallery');
            });
            $('#gallery').unitegallery({
                gallery_theme: "tiles",
                tiles_type: "justified",
                tiles_justified_row_height: 300,
                tiles_col_width: 300,
                tiles_min_columns: 1,
                tiles_max_columns: 5,
                tile_enable_icons: false,
                tile_enable_image_effect: false,
                tile_image_effect_type: 'bw', //bw, blur, sepia - tile effect type
                tile_image_effect_reverse: false,
                tile_enable_overlay: false, //enable tile color overlay (on mouseover)
                tile_overlay_opacity: 0.4, //tile overlay opacity
                tile_overlay_color: '#000000', //tile overlay color
                lightbox_textpanel_enable_description: true,
                lightbox_textpanel_css_description: { fontFamily: 'Roboto', fontStyle: 'italic', color: '#BBB', fontSize: 'small' },
                lightbox_textpanel_css_title: { fontFamily: 'Roboto', color: '#FFF', fontSize: 'medium' },
                lightbox_type: "wide",
            });
        });



    function fixDimensions() {
        var windowHeight = $(window).height();
        var logoSide = Math.min($('#mainMenu').width() * 2, (windowHeight * 0.25));

        $('#logo').css({
            height: logoSide,
            width: logoSide,
        });

        $('#menuWrap').css({
            marginTop: (windowHeight - $('#menuWrap').height()) / 3 + 'px',
            marginBottom: (windowHeight - $('#menuWrap').height()) / 3 * 2 + 'px',
        });
    };

    fixDimensions();

    $(window).resize(function() {
        fixDimensions();
    });

});
