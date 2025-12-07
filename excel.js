function readExcel(file, callback) {
    fetch(file)
    .then(r => r.arrayBuffer())
    .then(buf => {
        let wb = XLSX.read(buf, {type:"array"});
        let sheet = wb.Sheets[wb.SheetNames[0]];
        callback(XLSX.utils.sheet_to_json(sheet));
    });
}
