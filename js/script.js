alert("Hello Tej")
const samosaPrice = document.querySelector('.samosa-price')
    const teaPrice = document.querySelector('.tea-price')
    const samosaPlus = document.querySelector('#samosaPlus')
    const teaPlus = document.querySelector('#teaPlus')
    const samosaMinus = document.querySelector('#samosaMinus')
    const teaMinus = document.querySelector('#teaMinus')
    const samosaQty = document.querySelector('.samosaQty')
    const teaQty= document.querySelector('.teaQty') 
    const samosaTotal = document.querySelector(".samosaTotal")
    const teaTotal = document.querySelector(".teaTotal")
    const grandTotal = document.querySelector('#grandTotal')
    const totalPrice = document.querySelector('#totalPrice')
    const vat = document.querySelector('#vat')
    const tip = document.querySelector('#tip')
    let priceTotal = 0;
    let vatCalc = 0;
    let tipCalc = 0;
    let grandTotalCalc = 0;

    let initTeaQty = 1;
    let initSamosaQty = 1;
    let initTeaPrice = Number(teaPrice.value);
    let initSamosaPrice = Number(samosaPrice.value);
    let sPrice = 0;
    let tPrice = 0;
    let totalSamosaPrice = 0;
    let totalTeaPrice = 0;
    function incrementTea(){
            initTeaQty++;
            teaQty.innerHTML = initTeaQty
            totalTeaPrice = Number(teaPrice.value) * Number(teaQty.innerText)
            teaTotal.innerHTML = totalTeaPrice
            priceTotal = totalTeaPrice + totalSamosaPrice
            totalPrice.innerHTML = priceTotal
            vatCalc = 0.13 * priceTotal
            vat.innerHTML = vatCalc
            tipCalc = 0.10 * priceTotal
            tip.innerHTML = tipCalc
        
    }

    function incrementSamosa(){
            initSamosaQty++;
            samosaQty.innerHTML = initSamosaQty
            totalSamosaPrice = Number(samosaPrice.value) * Number(samosaQty.innerText)
            samosaTotal.innerHTML = totalSamosaPrice
            priceTotal = totalTeaPrice + totalSamosaPrice
            totalPrice.innerHTML = priceTotal
            vatCalc = 0.13 * priceTotal
            vat.innerHTML = vatCalc
            tipCalc = 0.10 * priceTotal
            tip.innerHTML = tipCalc
        
    }

    function decrementTea(){
        if (initTeaQty > 0){
            initTeaQty--;
            teaQty.innerHTML = initTeaQty
            totalTeaPrice = Number(teaPrice.value) * Number(teaQty.innerText)
            teaTotal.innerHTML = totalTeaPrice
            priceTotal = totalTeaPrice + totalSamosaPrice
            totalPrice.innerHTML = priceTotal
            vatCalc = 0.13 * priceTotal
            vat.innerHTML = vatCalc
            tipCalc = 0.10 * priceTotal
            tip.innerHTML = tipCalc
        }
    }

    function decrementSamosa(){
       if (initSamosaQty > 0){
        initSamosaQty--;
        samosaQty.innerHTML = initSamosaQty
        totalSamosaPrice = Number(samosaPrice.value) * Number(samosaQty.innerText)
        samosaTotal.innerHTML = totalSamosaPrice
        priceTotal = totalTeaPrice + totalSamosaPrice
        totalPrice.innerHTML = priceTotal
        vatCalc = 0.13 * priceTotal
        vat.innerHTML = vatCalc
        tipCalc = 0.10 * priceTotal
        tip.innerHTML = tipCalc
       }
    }

    samosaPrice.addEventListener('input', () => {
        totalSamosaPrice = Number(samosaPrice.value) * Number(samosaQty.innerText)
        samosaTotal.innerHTML = totalSamosaPrice
        priceTotal = totalTeaPrice + totalSamosaPrice
        totalPrice.innerHTML = priceTotal
        vatCalc = 0.13 * priceTotal
        vat.innerHTML = vatCalc
        tipCalc = 0.10 * priceTotal
        tip.innerHTML = tipCalc
    })

    teaPrice.addEventListener('input', () => {
        totalTeaPrice = Number(teaPrice.value) * Number(teaQty.innerText)
        teaTotal.innerHTML = totalTeaPrice
        priceTotal = totalTeaPrice + totalSamosaPrice
        totalPrice.innerHTML = priceTotal
        vatCalc = 0.13 * priceTotal
        vat.innerHTML = vatCalc
        tipCalc = 0.10 * priceTotal
        tip.innerHTML = tipCalc
    })

    function calcTotal(){
        grandTotalCalc = priceTotal + vatCalc + tipCalc
        grandTotal.innerHTML = grandTotalCalc
    }