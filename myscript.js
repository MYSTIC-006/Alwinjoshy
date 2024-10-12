function downloadCV() {
    var link = document.createElement('a');
    link.href = 'ALWIN JOSHY (3).pdf'; // Replace with the actual path to your CV
    link.download = 'Alwin Joshy CV.pdf'; // Replace with the desired filename
    link.click();
}
