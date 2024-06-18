document.getElementById('addChapterBtn').addEventListener('click', function(){
    var inputField= document.getElementById('chapterInput');
    var inputValue=inputField.ariaValueMax.trim();
    if(inputValue !==''){
        var deleteBtns = document.querySelectorAll('deleteBtn');
        deleteBtns.forEach(function(btn){
            btn.addEventListener('click', function(){
                this.parentNode.remove();
            });
        });
        inputField.value = '';
    } else {
        alert('Please enter a chapter name');
        inputField.focus();
    }
});