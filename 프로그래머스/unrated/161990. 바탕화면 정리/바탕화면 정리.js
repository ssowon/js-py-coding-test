function solution(wallpaper) {
    var answer = [];
    let lux = -1, luy = -1, rdx = 0, rdy = 0;
    for (let i in wallpaper) {
        if(wallpaper[i].includes('#')) {
            miny = wallpaper[i].indexOf('#')
            maxy = wallpaper[i].lastIndexOf('#')
            y = Number(i)
            if(lux == -1) lux = y
            rdx = y+1
            
            if(luy == -1) luy = miny
            else if(luy > miny) luy = miny;
            
            if(rdy <= maxy) rdy = maxy+1;
        }
    }
    return [lux,luy,rdx,rdy];
}