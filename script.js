document.addEventListener('DOMContentLoaded', function () {
    for (let i = 1; i <= 20; i++) {
        document.getElementById('in' + i).addEventListener('input', function() {
            document.getElementById('out' + i).textContent = this.value;
        });
    }
});
function printDiv() {
    var divContents = document.getElementById("print").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<body>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}