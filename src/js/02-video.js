import Player from '@vimeo/player';
import throttle from 'lodash.throttle';




const iframe = document.querySelector('iframe');

const player = new Player(iframe);

const getCurrentTime = function(currentTime) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds));
      };

player.on('timeupdate', throttle(getCurrentTime, 1000));

    const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    // console.log(currentTime);

    player.setCurrentTime(currentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
        
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                console.log(error.name);
                break;
            default:
                console.log('some other error occurred');
                break;
        }
    });
