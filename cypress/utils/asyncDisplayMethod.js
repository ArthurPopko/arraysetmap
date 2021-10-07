export const printItemInfo = (productList) => {
    let firstProductInfo = Object.entries(productList)
    firstProductInfo.map(([key, value]) => console.log(key + ': ', value));
}
