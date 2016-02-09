var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS FORMDATA (fname,lname,email,pwd,company,web,pos,ph,pservice,other1,other2,other3,other4,other5,other6,soltym,memail)');
 
});


function savedata() {
    if (document.getElementById("myForm").checkValidity()) {

        var data = [];
        data[0] = document.getElementById("fnametxt").value;
        data[1] = document.getElementById("lnametxt").value;
        data[2] = document.getElementById("emailtxt").value;
        data[3] = document.getElementById("pwdtxt").value;
        data[4] = document.getElementById("companytxt").value;
        data[5] = document.getElementById("webtxt").value;
        data[6] = document.getElementById("positiondropdown").value;
        data[7] = document.getElementById("phonetxt").value;
        data[8] = document.getElementById("primaryservice").value;
        data[9] = document.getElementById("os").checked;
        data[10] = document.getElementById("wdd").checked;
        data[11] = document.getElementById("snoc").checked;
        data[12] = document.getElementById("ioc").checked;
        data[13] = document.getElementById("emssdd").checked;
        data[14] = document.getElementById("ems").checked;
        data[15] = document.getElementById("soltime").value;
        data[16] = document.getElementById("receiveemail").checked;
        var queryString = 'INSERT INTO FORMDATA (fname,lname,email,pwd,company,web,pos,ph,pservice,other1,other2,other3,other4,other5,other6,soltym,memail) VALUES (';
        for (i = 0; i < data.length; i++) {
            if (i == (data.length - 1)) {
                queryString = queryString + '\"' + String(data[i]) + '\"';
            } else {
                queryString = queryString + '\"' + String(data[i]) + '\",';
            }
        }
        queryString = queryString + ')';        
        storedata(queryString);
    }
} 


function storedata(queryString) {  
    db.transaction(function (tx) {                
        tx.executeSql(queryString);
    })
};