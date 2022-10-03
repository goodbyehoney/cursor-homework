    const audio = new Audio ();

    function removeActiveClass() {
        document.querySelectorAll('.key').forEach(el => {
            el.classList.remove('active');
    }); 
    }

    document.body.addEventListener('keydown', function (e) {
        let addActiveClass = "key" + e.code.substr(-1);

        removeActiveClass();

        if (document.querySelector(`.${addActiveClass}`)) {
            document.querySelector(`.${addActiveClass}`).classList.add('active'); 
            getAudio(e);
            audio.play();
        }; 
    });

    document.querySelector('.wrapper').addEventListener('click', selectKey);

    function selectKey(e) {
        removeActiveClass();

        if (e.target.classList.contains('key')) {
            e.target.classList.add('active'); 
            getAudio(e);
            audio.play();
        }; 
    };

    function getAudio(e) {
        
        if (e.code === 'KeyA' || e.target.classList.contains('keyA')) {
            audio.src = 'sounds/airport.mp3';
        }
        if (e.code === 'KeyS' || e.target.classList.contains('keyS')) {
            audio.src = 'sounds/bank.mp3';
        }
        if (e.code === 'KeyD' || e.target.classList.contains('keyD')) {
            audio.src = 'sounds/bus.mp3';
        }
        if (e.code === 'KeyF' || e.target.classList.contains('keyF')) {
            audio.src = 'sounds/train.mp3';
        }
    };