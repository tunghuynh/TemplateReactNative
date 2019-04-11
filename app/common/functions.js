export const cutName = (str)=>{
    var arr = str.split(/\s+/);
    if (arr.length > 1) {
        return arr[0][0].toUpperCase() + arr[arr.length - 1][0].toUpperCase();
    } else {
        return arr[0][0].toUpperCase();
    }
}
