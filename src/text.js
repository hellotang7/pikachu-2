const string = `

*{box-sizing: border-box;margin: 0;padding: 0}
*::before,*::after{box-sizing: border-box}
.shou{
    position: absolute;
    left: 50%;
    margin-left: -53px;
    top: 400px;
}
.shou.right{
    transform: rotateY(180deg);
    margin-left: 40px;
}
.shou.left{
    transform: translateX(-86px);
}
.skin{
    position: relative;
    background: rgb(255,203,0);
    height: 100vh;

}
.nose{
    border: 16px solid red;
    border-color: black transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    margin-left: -16px;
    top: 145px;
    z-index: 2;
    border-radius: 16px;
    transform-origin: 50% 100%;
    animation: b 3s infinite;
}
.yan{
    border: 2px solid black;
    width: 60px;
    height: 60px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: 100px;
    background: #2e2e2e;
    border-radius: 50%;
}
.yan::before{
    content: '';
    display: block;
    border: 2px solid #000;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    left: 10px;
    top: 1px;
    animation: a 3s infinite;
}
.yan.left{
    transform: translateX(-100px);
}

.yan.right{
    transform: translateX(100px);
}

.lian{
    border: 2px solid #000;
    width: 80px;
    height: 80px;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 200px;
    border-radius: 50px;
    background: rgb(255,81,64);
    animation:c 3s infinite;
}
.lian.left{
    position: absolute;
    transform: translateX(-140px);

}
.lian.right{
    position: absolute;
    transform: translateX(140px);
}

.zui{
    position: absolute;

    width: 200px;
    height: 200px;
    left: 50%;
    margin-left: -100px;
    top: 170px;
}
.shangzui{
    z-index: 1;
    background: rgb(255,203,0);
}
.shangzui.left{
    border: 4px solid black;
    width: 85px;
    height: 30px;
    border-bottom-left-radius: 286px 175px;
    border-color: rgb(255,203,0) rgb(255,203,0) black black;
    position: relative;
    transform: rotate(-23deg);
    left: 20px;
}
.shangzui.left::before{
    content: '';
    border: 5px solid rgb(255,203,0);
    height: 20px;
    width: 1px;
    position: absolute;
    right: -4px;
    bottom: 0px;
}
.shangzui.right{
    border: 4px solid black;
    width: 85px;
    height: 30px;
    left: 98px;
    top: -29px;
    border-bottom-right-radius: 286px 175px;
    border-color: rgb(255,203,0)  black black rgb(255,203,0);
    position: relative;
    transform: rotate(23deg);
}
.shangzui.right::before{
    content: '';
    border: 5px solid rgb(255,203,0);
    height: 20px;
    width: 1px;
    position: absolute;
    left: -4px;
    bottom: 0px;
}
.xiazui{

    height: 220px;
    top: 14px;
    position: absolute;
    width: 200px;
    overflow: hidden;
}
.xiazui .yuan1{
    border: 3px solid black;
    height: 1000px;
    bottom: 60px;
    position: absolute;
    width: 148px;
    left: 50%;
    margin-left: -72px;

    border-radius: 108px/330px;
    background: rgb(204,65,67);
    overflow: hidden;
    animation:d 3s infinite;
}
.xiazui .yuan2{

    height: 300px;
    position: absolute;
    width: 170px;
    bottom: -180px;
    left: 50%;
    margin-left: -85px;
    border-radius: 75px;
    background: rgb(221,102,106);
}

#heart {

    height: 50px;
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 460px;
    margin-left: -24px;
    transform: scale(1.7);
    animation: xx 1s infinite alternate;
}
#heart > .bottom {
    border: 1px solid red;
    width: 50px;
    height: 50px;
    transform: rotate(45deg);
    background: red;
}
#heart > .right {
    border: 1px solid red;
    width: 50px;
    height: 50px;
    bottom: 50px;
    right: 50px;
    transform: rotate(45deg) translate(31px);
    position: absolute;
    border-radius: 50% 0% 0% 50%;
    background: red;
}
#heart > .left {
    border: 1px solid red;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 50px;
    right: -50px;
    transform: rotate(45deg) translateY(31px);
    border-radius: 50% 50% 0% 0%;
    background: red;
}

@keyframes a {
    0%{
        top: 1px;
        left: 10px;
    }
    25%{
        top: 1px;
        left: 21px;
    }
    60%{
        top: 1px;
        left: 10px;
    }
    69%{
        top: 19px;
        left: 10px;
    }
    85%{
        top: 19px;
        left: 21px;
    }
}

@keyframes b  {
    0%, 46%, 54%, 100% {
        transform: rotate(0deg);
    }
    50%{
        transform: rotate(-12deg);
    }
}

@keyframes c  {
    0%, 46%, 54%, 100% {
        width: 80px;
        height: 80px;
        top: 200px;
    }
    50%{
        width: 60px;
        height: 60px;
        top: 220px;
    }
}

@keyframes d  {
    0%, 46%, 54%, 100% {
        width: 148px;
        height: 1000px;
        bottom: 60px;
    }
    50%{
        width: 148px;
        bottom: 260px;
    }


}
@keyframes xx  {
    0% {
        transform: scale(1.7);
    }
    100% {
        transform: scale(1.8);
    }
}
`

const text = document.querySelector('#text')
const css = document.querySelector('#css')

let n = 1

text.innerText = string.substring(0, n)
css.innerHTML = string.substring(0, n)

let  time = 100

const player = {

    run:() => {
        n += 1
        if (n > string.length) {
            window.clearInterval(id)
            return
        }
        // console.log(n + ':' + string.substring(0,n))
        text.innerText = string.substring(0, n)
        css.innerHTML = string.substring(0, n)
        text.scrollTop = text.scrollHeight

    },
    play : ()=>{
        return setInterval(player.run,time)
    },
    pause : ()=>{
        window.clearInterval(id)
    },
    slow : ()=>{
        player.pause()
        time = 300
        id = player.play()
    },
    normal : ()=>{
        player.pause()
        time = 100
        id = player.play()
    },
    fast : ()=>{
        player.pause()
        time = 0
        id = player.play()
    },

}
let id = player.play()


//setInterval(() => {run()}, time) 等价与 id = setInterval(run,time)


document.querySelector('#btnPause').onclick = player.pause

document.querySelector('#btnPlay').onclick = ()=>{
    id = player.play()
}

document.querySelector('#btnSlow').onclick = player.slow
document.querySelector('#btnNormal').onclick = player.normal
document.querySelector('#btnFast').onclick = player.fast