
$(function() {

    $letter1=$(".bottom-bar h2");
    var arr1=['I','Z','D','E','L','I','Y','A',' ','I','Z',' ','F','A','R','F','O','R','A'];
    console.log(arr1[0]);
    console.log($letter1.get(0).innerHTML);
    console.log($letter1);

    function start(counter){
        if(counter <= 18){
            setTimeout(function(){
                $letter1.get(0).innerHTML+=arr1[counter];
                counter++;
                //console.log(counter);
                start(counter);
            }, 500);
        }
        else {
            $letter1.css("border","1px solid rgb(106 90 205)");
        }
    }
    start(0);


});