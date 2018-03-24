function comprassion () {
    var arr,n;
    arr = [];
    n = prompt ("Size of array");
    for (var i = 0; i < n; i++) {
        arr[i] = prompt (i + " element")
    };
    for (i = 0; i < n; i++) {
        switch (arr[0]) {
            case arr[i]: 
                break;
            default: return alert("false")
        }
    } return alert("true")
}
comprassion();