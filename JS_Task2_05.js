function max() {
    var arr,n,m;
    arr = [];
    n = prompt ("Size of array");
    for (i = 0; i < n; i++) {
      arr [i] = prompt (i + " element");
    };
    m = 0;
    for (i = 1; i < n; i++) {
      if (arr[m] < arr[i]) {
        m = i
      };
    };
    alert ('Max value: ' + arr[m]);
  };
  max();