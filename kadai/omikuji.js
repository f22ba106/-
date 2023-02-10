function getOmi(){
    document.getElementById("show_omi").innerText = omikuji();
}

function omikuji(){
        let ans = ['大吉','中吉','小吉','吉','末吉','凶','大凶'];
        let a=Math.floor(Math.random() * ans.length);
        

        var unsei = "あなたの運勢は" + ans[a];
        return unsei;
}