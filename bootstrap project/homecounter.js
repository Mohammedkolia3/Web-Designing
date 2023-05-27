let counting = setInterval(cal_count, 20);

let values = 0;
function cal_count() {
    let count = document.querySelector(".counter1");
    count.innerHTML = ++values;
    if (values == 1286) {
        clearInterval(counting)
    }

}

let counting1 = setInterval(cal_count1, 1);

let values_1 = 0;
function cal_count1() {
    let count = document.querySelector(".counter2");
    count.innerHTML = ++values_1;
    if (values_1 == 36076) {
        clearInterval(counting1)
    }
}

let counting2 = setInterval(cal_count2, 15);

let values_2 = 0;
function cal_count2() {
    let count = document.querySelector(".counter3");
    count.innerHTML = ++values_2;
    if (values_2 == 16300) {
        clearInterval(counting2)
    }
}

let counting3 = setInterval(cal_count3, 10);

let values_3 = 0;
function cal_count3() {
    let count = document.querySelector(".counter4");
    count.innerHTML = ++values_3;
    if (values_3 == 10630) {
        clearInterval(counting3)
    }
}