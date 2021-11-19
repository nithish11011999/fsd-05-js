let unitEconomicsForm = document.getElementById('unit-economics-form'),
sellingPriceInput = document.getElementById('selling-price'),
cogsInput = document.getElementById('cogs'),
grossMarginInput = document.getElementById('gross-margin'),
salesMarketingInput = document.getElementById('sales-marketing'),
operationsCostInput = document.getElementById('Operations-cost'),
netMarginInput = document.getElementById('net-margin'),
sellingPriceValue, cogsValue, grossMarginValue,
salesMarketingValue, operationsCostValue, netMarginValue;


function calculate(){
    //calculate gross margin
    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;

    //calculate net margin
    salesMarketingValue = salesMarketingInput.value;
    operationsCostValue = operationsCostInput.value;
    netMarginValue = grossMarginValue - salesMarketingValue -  operationsCostValue;
    netMarginInput.value = netMarginValue; 
}

unitEconomicsForm.addEventListener('submit', calculate);