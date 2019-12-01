

document.onclick=function(event){
    var e = getEvent(event);

    var pageX = getPageX(e);
    var pageY = getPageY(e);

    stopPropagation(event);

    
    var target = getTarget(event);
}




// 封装获取事件对象的兼容方式
function  getEvent(event){
    return event || window.event;
}

// 封装获取鼠标在页面上的水平坐标的兼容方式
function  getPageX(event){
    return event.pageX || event.clientX + document.documentElement.scrollLeft;
}

// 封装获取鼠标在页面上的竖直坐标的兼容方式
function  getPageY(event){
    return event.pageY || event.clientY + document.documentElement.scrollTop;
}

// 封装阻止冒泡的兼容方式
function  stopPropagation(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble =true;
    }
}

// 封装获取事件目标的兼容方式
function  getTarget(event){
    return event.target || event.srcElement;
}
