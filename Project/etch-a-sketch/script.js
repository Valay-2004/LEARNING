document.addEventListener('DOMContentLoaded', function manyDivs(){
    const container = document.querySelector('.container');
    for(let i =0; i < 256; i++){
        const manyDiv = document.createElement('div');
        manyDiv.classList.add('grid-square'); // for styling
        container.appendChild(manyDiv);
    }
});
