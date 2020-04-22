for(let i = 0; i < 128; i ++) {
  console.log(String.fromCharCode(i))
}

for(let i = 0; i < 128; i ++) {
  document.write(`<span style="background: red; color: white;">${String.fromCharCode(i)}</span>`);
}