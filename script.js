function test() {
    document.getElementById("test").style.width = "250px";
}
function btn() {
    document.getElementById("test").style.width = "0px";
}
function showGPA() {
    document.getElementById("figures").style.display = "flex";
    document.getElementById("avrage").style.display = "none";
    document.getElementById("CGPA").style.backgroundColor = "rgb(47, 28, 92)";
    document.getElementById("CGPA").style.color = "white";
    document.getElementById("GPA").style.color = "rgb(47, 28, 92)";
    document.getElementById("GPA").style.backgroundColor = "rgba(47, 28, 92, 0)";
}
function showCGPA() {
    document.getElementById("figures").style.display = "none";
    document.getElementById("avrage").style.display = "block";
    document.getElementById("GPA").style.backgroundColor = "rgb(47, 28, 92)";
    document.getElementById("GPA").style.color = "white";
    document.getElementById("CGPA").style.backgroundColor = "rgba(47, 28, 92, 0)";
    document.getElementById("CGPA").style.color = "rgb(47, 28, 92)";
}
function calculateGPA() {

    /get grade  from input/
    var crse1 = document.getElementById("course1").value;
    var cu1 = document.getElementById("cre1").value;
    var convert = cu1 * 1;
    if (crse1 == "A") {
        var cre1b = 5;
    }
    else if (crse1 == "B") {
        var cre1b = 4;
    }
    else if (crse1 == "C") {
        var cre1b = 3;
    }
    else if (crse1 == "D") {
        var cre1b = 2;
    }
    else if (crse1 == "E") {
        var cre1b = 1;
    }
    else if (crse1 == "F") {
        var cre1b = 0;
    }
    
    var crse2 = document.getElementById("course2").value;
    var cu2 = document.getElementById("cre2").value;
    var convert2 = cu2 * 1;
    if (crse2 == "A") {
        var cre2b = 5;
    }
    else if (crse2 == "B") {
        var cre2b = 4;
    }
    else if (crse2 == "C") {
        var cre2b = 3;
    }
    else if (crse2 == "D") {
        var cre2b = 2;
    }
    else if (crse2 == "E") {
        var cre2b = 1;
    }
    else if (crse2 == "F") {
        var cre2b = 0;
    }

    var crse3 = document.getElementById("course3").value;
    var cu3 = document.getElementById("cre3").value;
    var convert3 = cu3 * 1;
    if (crse3 == "A") {
        var cre3b = 5;
    }
    else if (crse3 == "B") {
        var cre3b = 4;
    }
    else if (crse3 == "C") {
        var cre3b = 3;
    }
    else if (crse3 == "D") {
        var cre3b = 2;
    }
    else if (crse3 == "E") {
        var cre3b = 1;
    }
    else if (crse3 == "F") {
        var cre3b = 0;
    }
    
    var crse4 = document.getElementById("course4").value;
    var cu4 = document.getElementById("cre4").value;
    var convert4 = cu4 * 1;
    if (crse4 == "A") {
        var cre4b = 5;
    }
    else if (crse4 == "B") {
        var cre4b = 4;
    }
    else if (crse4 == "C") {
        var cre4b = 3;
    }
    else if (crse4 == "D") {
        var cre4b = 2;
    }
    else if (crse4 == "E") {
        var cre4b = 1;
    }
    else if (crse4 == "F") {
        var cre4b = 0;
    }

    var crse5 = document.getElementById("course5").value;
    var cu5 = document.getElementById("cre5").value;
    var convert5 = cu5 * 1;
    if (crse5 == "A") {
        var cre5b = 5;
    }
    else if (crse5 == "B") {
        var cre5b = 4;
    }
    else if (crse5 == "C") {
        var cre5b = 3;
    }
    else if (crse5 == "D") {
        var cre5b = 2;
    }
    else if (crse5 == "E") {
        var cre5b = 1;
    }
    else if (crse5 == "F") {
        var cre5b = 0;
    }
  
    var crse6 = document.getElementById("course6").value;
    var cu6 = document.getElementById("cre6").value;
    var convert6 = cu6 * 1;
    if (crse6 == "A") {
        var cre6b = 5;
    }
    else if (crse6 == "B") {
        var cre6b = 4;
    }
    else if (crse6 == "C") {
        var cre6b = 3;
    }
    else if (crse6 == "D") {
        var cre6b = 2;
    }
    else if (crse6 == "E") {
        var cre6b = 1;
    }
    else if (crse6 == "F") {
        var cre6b = 0;
    }

    var crse7 = document.getElementById("course7").value;
    var cu7 = document.getElementById("cre7").value;
    var convert7 = cu7 * 1;
    if (crse7 == "A") {
        var cre7b = 5;
    }
    else if (crse7 == "B") {
        var cre7b = 4;
    }
    else if (crse7 == "C") {
        var cre7b = 3;
    }
    else if (crse7 == "D") {
        var cre7b = 2;
    }
    else if (crse7 == "E") {
        var cre7b = 1;
    }
    else if (crse7 == "F") {
        var cre7b = 0;
    }

    var crse8 = document.getElementById("course8").value;
    var cu8 = document.getElementById("cre8").value;
    var convert8 = cu8 * 1;
    if (crse8 == "A") {
        var cre8b = 5;
    }
    else if (crse8 == "B") {
        var cre8b = 4;
    }
    else if (crse8 == "C") {
        var cre8b = 3;
    }
    else if (crse8 == "D") {
        var cre8b = 2;
    }
    else if (crse8 == "E") {
        var cre8b = 1;
    }
    else if (crse8 == "F") {
        var cre8b = 0;
    }

    var crse9 = document.getElementById("course9").value;
    var cu9 = document.getElementById("cre9").value;
    var convert9 = cu9 * 1;
    if (crse9 == "A") {
        var cre9b = 5;
    }
    else if (crse9 == "B") {
        var cre9b = 4;
    }
    else if (crse9 == "C") {
        var cre9b = 3;
    }
    else if (crse9 == "D") {
        var cre9b = 2;
    }
    else if (crse9 == "E") {
        var cre9b = 1;
    }
    else if (crse9 == "F") {
        var cre9b = 0;
    }

    var crse10 = document.getElementById("course10").value;
    var cu10 = document.getElementById("cre10").value;
    var convert10 = cu10 * 1;
    if (crse10 == "A") {
        var cre10b = 5;
    }
    else if (crse10 == "B") {
        var cre10b = 4;
    }
    else if (crse10 == "C") {
        var cre10b = 3;
    }
    else if (crse10 == "D") {
        var cre10b = 2;
    }
    else if (crse10 == "E") {
        var cre10b = 1;
    }
    else if (crse10 == "F") {
        var cre10b = 0;
    }

    var crse11 = document.getElementById("course11").value;
    var cu11 = document.getElementById("cre11").value;
    var convert11 = cu11 * 1;
    if (crse11 == "A") {
        var cre11b = 5;
    }
    else if (crse11 == "B") {
        var cre11b = 4;
    }
    else if (crse11 == "C") {
        var cre11b = 3;
    }
    else if (crse11 == "D") {
        var cre11b = 2;
    }
    else if (crse11 == "E") {
        var cre11b = 1;
    }
    else if (crse11 == "F") {
        var cre11b = 0;
    }

    var crse12 = document.getElementById("course12").value;
    var cu12= document.getElementById("cre12").value;
    var convert12 = cu12 * 1;
    if (crse12 == "A") {
        var cre12b = 5;
    }
    else if (crse12 == "B") {
        var cre12b = 4;
    }
    else if (crse12 == "C") {
        var cre12b = 3;
    }
    else if (crse12 == "D") {
        var cre12b = 2;
    }
    else if (crse12 == "E") {
        var cre12b = 1;
    }
    else if (crse12 == "F") {
        var cre12b = 0;
    }

    var crse13 = document.getElementById("course13").value;
    var cu13 = document.getElementById("cre13").value;
    var convert13 = cu13 * 1;
    if (crse13 == "A") {
        var cre13b = 5;
    }
    else if (crse13 == "B") {
        var cre13b = 4;
    }
    else if (crse13 == "C") {
        var cre13b = 3;
    }
    else if (crse13 == "D") {
        var cre13b = 2;
    }
    else if (crse13 == "E") {
        var cre13b = 1;
    }
    else if (crse13 == "F") {
        var cre13b = 0;
    }
  /calculate quality points/
    var qp1 = cre1b * cu1;
    var qp2 = cre2b * cu2;
    var qp3 = cre3b * cu3;
    var qp4 = cre4b * cu4;
    var qp5 = cre5b * cu5;
    var qp6 = cre6b * cu6;
    var qp7 = cre7b * cu7;
    var qp8 = cre8b * cu8;
    var qp9 = cre9b * cu9;
    var qp10 = cre10b * cu10;
    var qp11 = cre11b * cu11;
    var qp12 = cre12b * cu12;
    var qp13 = cre13b * cu13;

    /sum credit units, convert variable is for changing the string data from the input field to integer/
    var cuTotal = convert + convert2 + convert3 + convert4 + convert5 +convert6 + convert7 + convert8 + convert9 + convert10 + convert11 + convert12 + convert13;

    /sum total quality points/
    var qpTotal = qp1 +qp2 + qp3 + qp4 + qp5 + qp6 + qp7 + qp8 + qp9 + qp10 + qp11 + qp12 + qp13;
    
    /calculate GPA/
    var GPA = qpTotal/cuTotal;
    /aproximate to two decimals/
    var gpaApx = GPA.toFixed(2);
    document.getElementById("result").style.display = "block";
    document.getElementById("gpaFigure").innerHTML = gpaApx;
}
function calculateCGPA() {
    var sem1 = document.getElementById("sem1").value;
    convertsem1 = sem1 * 1;
    var sem2 = document.getElementById("sem2").value;
    convertsem2 = sem2 * 1;

    var semTotal = convertsem1 + convertsem2;
    var CGPA = semTotal/2;

    var cgpaApx = CGPA.toFixed(2);
    document.getElementById("calculateCGPA").style.ba
    document.getElementById("result2").style.display = "block";
    document.getElementById("cgpaFigure").innerHTML = cgpaApx;
}

