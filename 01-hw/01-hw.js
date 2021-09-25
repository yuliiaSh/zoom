const iphone = 15.678;
const ipad = 123.965;
const imac = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(iphone, ipad, imac);

// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(iphone, ipad, imac);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const cost = iphone + ipad + imac;

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
// Округлення використовувати в МЕНЬШУ сторону.
const truncatedCost =  Math.trunc(iphone) + Math.trunc(ipad) + Math.trunc(imac);

// Виведіть суму товарів округлену до сотень.
const round = Math.round(cost / 100) * 100;

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isOdd = truncatedCost % 2 === 0;

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const changeSum = 500 - cost;

// Виведіть середнє значення цін, округлене до другого знаку після коми
const averageValue = (cost / 3).toFixed(2);

// (Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
//     Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

const discount = Math.floor(Math.random() * 100);
const naturalCost = (cost / 2).toFixed(2);
const discountValue = (cost * discount) / 100;
const finalSum = (cost - discountValue).toFixed(2);
const profit = (naturalCost - finalSum).toFixed(2);



document.writeln(`
    Максимальна ціна: ${maxPrice};<br>
    Мінімальна ціна: ${minPrice};<br>
    Вартість усіх товарів: ${cost};<br>
    Вартість всіх товарів (цiла частина):${truncatedCost};<br>
    Сума товарів округлена до сотень: ${round};<br>
    Чи є сума всіх товарів парним: ${isOdd};<br>
    Сума решти, при оплаті всіх товарів: ${changeSum};<br>
    Середнє значення цін, округлене до другого знаку після коми: ${averageValue};<br>
    <br>
    Сума товарів: ${cost};<br>
    Знижка %: ${discount};<br>
    Cума до оплати: ${finalSum};<br>
    Cобівартість: ${naturalCost};<br>
    Чистий прибуток: ${profit};<br>`);