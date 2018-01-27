var entireLine="";
for (var line=1;line<=8;line++){
    for (var column=1;column<=8;column++){
        if (((line % 2) != 0 && (column % 2) != 0 ) || ((line % 2) == 0 && (column % 2) == 0)){
            string=" ";
        }else if (((line % 2) != 0 && (column % 2) == 0) || ((line % 2) == 0 && (column % 2) != 0)){
            string="#";
        }
        entireLine+=string;
    }
    console.log(entireLine);
    entireLine="";
}