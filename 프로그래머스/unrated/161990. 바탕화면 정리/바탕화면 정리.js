function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [-1, -1, 0, 0];
    for (let i in wallpaper) {
        if(wallpaper[i].includes('#')) {
            let [miny, maxy] = [wallpaper[i].indexOf('#'), wallpaper[i].lastIndexOf('#')]
            let x = Number(i)
            
            if(lux == -1) lux = x
            rdx = x + 1
            
            if(luy == -1) luy = miny
            else if(luy > miny) luy = miny;
            
            if(rdy <= maxy) rdy = maxy + 1;
        }
    }
    return [lux,luy,rdx,rdy];
}