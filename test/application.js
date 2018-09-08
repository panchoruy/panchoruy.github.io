// Create the audio context
var context = new AudioContext();
var gainNode = context.createGain();
gainNode.gain.value = 0;

// Play oscillators at certain frequency and for a certain time

var osc = context.createOscillator();

var connected = false;

osc.type = 'sine';

osc.start();


var playNote = function(frequency) {

    osc.frequency.setValueAtTime(frequency,0);

    // Start oscillators
    osc.connect(context.destination);
    connected = true;

    setTimeout(function() {osc.disconnect(); connected = false}, 2000);

};

var stopNote = function() {

    osc.disconnect(context.destination);
    connected = false;
}

$(document).ready(function($) {
    $("#playtest").click(function(event) {
        playNote(440);
    });
    $("#stoptest").click(function(event) {
        stopNote();
    });

    $('.enable-options').click(function(event) {
        if(!$(this).hasClass('disabled') && !connected){
            $(this).parent().parent().find('.option').removeClass('disabled');
        }
    });
    $(".play-twice").each(function() {
        $(this).click(function(event) {
            if ($(this).hasClass('disabled')) {
                event.preventDefault();
            } else if ($(this).hasClass('clicked-once')) {
                if (!connected) {
                    $(this).removeClass('clicked-once').addClass('disabled');
                    playNote(parseInt(this.id));
                }
            } else {
                if (!connected) {
                    $(this).addClass('clicked-once');
                    playNote(parseInt(this.id));
                }
            }
        });
    });

    $(".stop").each(function() {
        $(this).click(function(event) {
            if (connected) {
                stopNote();    
            }
        });
    });

    $('.radio-fill').click(function(event) {
        $(this).parent().parent().parent().addClass('filled');
    });

    $("#submission").click(function(event) {
        $(".must-fill").each(function() {
            if (!$(this).val()) {
                event.preventDefault();
                $(this).css('borderColor', '#D00');
                $(this).css('borderWidth', '2px');
                $(this).click(function(event) {
                    $(this).css('borderColor', 'rgba(0,0,0,.15)');
                    $(this).css('borderWidth', '1px');
                });
            }
        });
        $(".must-fill-radio").each(function() {
            if (!$(this).hasClass('filled')) {
                event.preventDefault();
                $(this).css({
                    borderColor: '#D00'
                });
                $(this).click(function(event) {
                        $(this).css({
                        borderColor: 'rgba(0,0,0,0)',
                    });
                });
            }
        });
    });

    $(".30-timer").click(function() {
        if (!$(this).hasClass('disabled')){
            var $this =  $(this);
            var $name = 'q' + $(this).attr('name');
            $("button[name=" + 'p' + $(this).attr('name') + "]").addClass('disabled');
            $this.addClass('disabled');
            var $counter = 30;
          
            var $timing = setInterval(function(){
                $this.text('Please wait: '+ ($counter - 1));
                $counter--;
                if($counter == 0){
                    $this.text('Go!');
                    $("button[name=" + $name + "]").removeClass('disabled');
                    clearInterval($timing);
                }
            }, 1000);
        }
    });

});
