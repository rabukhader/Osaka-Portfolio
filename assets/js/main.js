let colors = ["red","yellow","blue","purple","teal"];

for(let i =0;i<colors.length;i++){
    $(".color-option li").eq(i).css("backgroundColor",colors[i]);
}
$(".color-option li").click(function(){
    let currentBg = $(this).css("backgroundColor");
    $(".change").css("color",currentBg);
})

$(".color-box i").click(function(){
    let optionWidth = $(".color-option").outerWidth();
    if($(".color-box").css("left")=='0px'){
        $(".color-box").animate({left: -optionWidth},3000);
    }else{
        $(".color-box").animate({left: 0},3000);
    }

})
