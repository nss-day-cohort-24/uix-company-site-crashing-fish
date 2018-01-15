var tutorial;
var tutorial2;

var tutorials = [
     ['<a href="https://www.youtube.com/watch?v=TQyLMOueiok">Jazz Harmony 1</a>','  $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=1miv4c4OynU">Jazz Harmony 2</a>', '  $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=YCLyAmXtpfY">Vocal Warmups 1</a>', ' $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=MsKZok6cXTI">Vocal Warmups 2</a>', ' $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=NX8K7LHR2JE">Guitar 1</a>', ' $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=T-SUJySXKUQ">Guitar 2</a>', ' $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=QjMWjnWN9T8">Rhythm Study 1</a>', ' $1.99', ' 2:00'],
     ['<a href="https://www.youtube.com/watch?v=qLRLJUiwJL8">Rhythm Study 2</a>', ' $1.99', ' 2:00']
];

for(i = 0; i < tutorials.length; i++) { {
    var tutorialDiv = document.getElementById('tutorials');
    tutorialDiv.innerHTML += tutorials[i].join('') + '<li>';
 }
}
