var text = "aku aku dan dia the dia"
var arr = text.split(" ");
var hasil = [];
var j =0;
var k =0;

while(j<arr.length){
var jumlahkata=0;
var kata = "";
    for (var i = 0; i < arr.length; i++) {
          if(arr[k]==arr[i]){
            jumlahkata++
            kata = arr[i];
          }
    }
   hasil.push(jumlahkata+kata)
   j++
   k++
}

hasil = hasil.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
})
hasil.sort()

console.log(hasil)
