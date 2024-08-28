export let globaldata = [];

export function deposite(acc, amm){
    const newArr = globaldata.map(item => {
        if (item.accNum == acc) {
          return { ...item, openAmount: Number(item.openAmount) + Number(amm) };
        }
        return item;
      });
      globaldata =newArr;
}
export function withdraw(acc, amm){
    const newArr = globaldata.map(item => {
        if (item.accNum == acc) {
          return { ...item, openAmount: Number(item.openAmount) - Number(amm) };
        }
        return item;
      });
      globaldata =newArr;
}
export function transferCash(acc1,acc2,transfer){

  const newArr1 = globaldata.map(item => {
    if (item.accNum == acc1) {
      return { ...item, openAmount: Number(item.openAmount) - Number(transfer) };
    }
    return item;
  });
  globaldata =newArr1;

  const newArr2 = globaldata.map(item => {
    if (item.accNum == acc2) {
      return { ...item, openAmount: Number(item.openAmount) + Number(transfer) };
    }
    return item;
  });
  globaldata =newArr2;
}