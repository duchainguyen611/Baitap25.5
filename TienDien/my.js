function money(){
    let soLuongDien = document.getElementById("input").value;

    result = soLuongDien*2000;
    document.getElementById("result").innerHTML = + result + "VND";
}