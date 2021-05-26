function BMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    bmi = weight/(height*height);

    if(bmi<18.5){
        document.getElementById("conclude").innerHTML = "Kết luận: Gầy";
    }else if(18.5 <= bmi && bmi<=22.9){
        document.getElementById("conclude").innerHTML = "Kết luận: Bình thường";
    }else if(23<=bmi && bmi<=24.9){
        document.getElementById("conclude").innerHTML = "Kết luận: Hơi béo";
    }else if(25<=bmi && bmi<=29.9){
        document.getElementById("conclude").innerHTML = "Kết luận: Béo phì cấp độ 1";
    }else if(30<=bmi && bmi<40 ){
        document.getElementById("conclude").innerHTML = "Kết luận: Béo phì cấp độ 2";
    }else{
        document.getElementById("conclude").innerHTML = "Kết luận: Béo phì cấp độ 3";
    }
}