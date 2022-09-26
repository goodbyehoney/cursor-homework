    function generateBlocks() {
        const localBox = document.getElementById('local-box');
        for (let i = 0; i < 25; i++) {
            const div = document.createElement('div');
            div.classList.add('smallBox');
            div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
            localBox.append(div);
        }   
    }
    generateBlocks()


    function generateBlocksInterval() {
        const anotherLocalBox = document.getElementById('local-box advanced');
        for (let i = 0; i < 25; i++) {
            const div = document.createElement('div');
            div.classList.add('smallBox');
            div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
            setInterval(() => { div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
            }, 1000);
            anotherLocalBox.append(div);
        }   
    }
    generateBlocksInterval()