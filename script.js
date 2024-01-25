document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 6; i++) {
        document.getElementById('in' + i).addEventListener('input', function() {
            document.getElementById('out' + i).textContent = this.value;
        });
    }
});
