function evenOddZero () {
    var even,odd,zero,n,arr;
    arr = [];
    n = prompt("Size of array");
    for (var i = 0; i < n; i++) {
        arr[i] = prompt(i + " element")
    }
    even = 0;
    odd = 0;
    zero = 0;
    for (i = 0; i < n; i++) {
        if (arr[i]%2 == 0 ^ arr[i] == 0) even++
        else if (arr[i] == 0) zero++
             else odd++
        }
    alert ("Number of even elems: " +even);
    alert ("Number of odd elems: " +odd);
    alert ("Number of zero: " +zero)
    };
evenOddZero();